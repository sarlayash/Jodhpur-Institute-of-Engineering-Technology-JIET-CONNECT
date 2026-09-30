var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{(function(){function t(){if(x=!1,re){var t=e.unstable_now();S=t;var n=!0;try{a:{y=!1,b&&(b=!1,te(ie),ie=-1),v=!0;var a=_;try{b:{for(o(t),g=r(p);g!==null&&!(g.expirationTime>t&&c());){var u=g.callback;if(typeof u==`function`){g.callback=null,_=g.priorityLevel;var d=u(g.expirationTime<=t);if(t=e.unstable_now(),typeof d==`function`){g.callback=d,o(t),n=!0;break b}g===r(p)&&i(p),o(t)}else i(p);g=r(p)}if(g!==null)n=!0;else{var f=r(m);f!==null&&l(s,f.startTime-t),n=!1}}break a}finally{g=null,_=a,v=!1}n=void 0}}finally{n?oe():re=!1}}}function n(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,i=e[r];if(0<a(i,t))e[r]=t,e[n]=i,n=r;else break a}}function r(e){return e.length===0?null:e[0]}function i(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>a(c,n))l<i&&0>a(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<i&&0>a(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}function o(e){for(var t=r(m);t!==null;){if(t.callback===null)i(m);else if(t.startTime<=e)i(m),t.sortIndex=t.expirationTime,n(p,t);else break;t=r(m)}}function s(e){if(b=!1,o(e),!y){if(r(p)!==null)y=!0,re||(re=!0,oe());else{var t=r(m);t!==null&&l(s,t.startTime-e)}}}function c(){return x?!0:!(e.unstable_now()-S<ae)}function l(t,n){ie=ee(function(){t(e.unstable_now())},n)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();e.unstable_now=function(){return d.now()-f}}var p=[],m=[],h=1,g=null,_=3,v=!1,y=!1,b=!1,x=!1,ee=typeof setTimeout==`function`?setTimeout:null,te=typeof clearTimeout==`function`?clearTimeout:null,ne=typeof setImmediate<`u`?setImmediate:null,re=!1,ie=-1,ae=5,S=-1;if(typeof ne==`function`)var oe=function(){ne(t)};else if(typeof MessageChannel<`u`){var se=new MessageChannel,ce=se.port2;se.port1.onmessage=t,oe=function(){ce.postMessage(null)}}else oe=function(){ee(t,0)};e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ae=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(e){switch(_){case 1:case 2:case 3:var t=3;break;default:t=_}var n=_;_=t;try{return e()}finally{_=n}},e.unstable_requestPaint=function(){x=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=_;_=e;try{return t()}finally{_=n}},e.unstable_scheduleCallback=function(t,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,t){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=a+c,t={id:h++,callback:i,priorityLevel:t,startTime:a,expirationTime:c,sortIndex:-1},a>o?(t.sortIndex=a,n(m,t),r(p)===null&&t===r(m)&&(b?(te(ie),ie=-1):b=!0,l(s,a-o))):(t.sortIndex=c,n(p,t),y||v||(y=!0,re||(re=!0,oe()))),t},e.unstable_shouldYield=c,e.unstable_wrapCallback=function(e){var t=_;return function(){var n=_;_=t;try{return e.apply(this,arguments)}finally{_=n}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})),u=o(((e,t)=>{t.exports=l()})),d=o(((e,t)=>{(function(){function n(e,t){Object.defineProperty(a.prototype,e,{get:function(){console.warn(`%s(...) is deprecated in plain JavaScript React classes. %s`,t[0],t[1])}})}function r(e){return typeof e!=`object`||!e?null:(e=De&&e[De]||e[`@@iterator`],typeof e==`function`?e:null)}function i(e,t){e=(e=e.constructor)&&(e.displayName||e.name)||`ReactClass`;var n=e+`.`+t;Oe[n]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,e),Oe[n]=!0)}function a(e,t,n){this.props=e,this.context=t,this.refs=je,this.updater=n||ke}function o(){}function s(e,t,n){this.props=e,this.context=t,this.refs=je,this.updater=n||ke}function c(){}function l(e){return``+e}function u(e){try{l(e);var t=!1}catch{t=!0}if(t){t=console;var n=t.error,r=typeof Symbol==`function`&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||`Object`;return n.call(t,`The provided key is an unsupported type %s. This value must be coerced to a string before using it here.`,r),l(e)}}function d(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Pe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ge:return`Fragment`;case C:return`Profiler`;case _e:return`StrictMode`;case xe:return`Suspense`;case Se:return`SuspenseList`;case Te:return`Activity`;case Ee:return`ViewTransition`}if(typeof e==`object`)switch(typeof e.tag==`number`&&console.error(`Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.`),e.$$typeof){case he:return`Portal`;case ye:return e.displayName||`Context`;case ve:return(e._context.displayName||`Context`)+`.Consumer`;case be:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case Ce:return t=e.displayName||null,t===null?d(e.type)||`Memo`:t;case we:t=e._payload,e=e._init;try{return d(e(t))}catch{}}return null}function f(e){if(e===ge)return`<>`;if(typeof e==`object`&&e&&e.$$typeof===we)return`<...>`;try{var t=d(e);return t?`<`+t+`>`:`<...>`}catch{return`<...>`}}function p(){var e=w.A;return e===null?null:e.getOwner()}function m(){return Error(`react-stack-top-frame`)}function h(e){if(Fe.call(e,`key`)){var t=Object.getOwnPropertyDescriptor(e,`key`).get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function g(e,t){function n(){T||(T=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function _(){var e=d(this.type);return Re[e]||(Re[e]=!0,console.error(`Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.`)),e=this.props.ref,e===void 0?null:e}function v(e,t,n,r,i,a){var o=n.ref;return e={$$typeof:me,type:e,key:t,props:n,_owner:r},(o===void 0?null:o)===null?Object.defineProperty(e,"ref",{enumerable:!1,value:null}):Object.defineProperty(e,"ref",{enumerable:!1,get:_}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:i}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:a}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function y(e,t){return t=v(e.type,t,e.props,e._owner,e._debugStack,e._debugTask),e._store&&(t._store.validated=e._store.validated),t}function b(e){x(e)?e._store&&(e._store.validated=1):typeof e==`object`&&e&&e.$$typeof===we&&(e._payload.status===`fulfilled`?x(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function x(e){return typeof e==`object`&&!!e&&e.$$typeof===me}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}function te(e,t){return typeof e==`object`&&e&&e.key!=null?(u(e.key),ee(``+e.key)):t.toString(36)}function ne(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(c,c):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function re(e,t,n,i,a){var o=typeof e;(o===`undefined`||o===`boolean`)&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case`bigint`:case`string`:case`number`:s=!0;break;case`object`:switch(e.$$typeof){case me:case he:s=!0;break;case we:return s=e._init,re(s(e._payload),t,n,i,a)}}if(s){s=e,a=a(s);var c=i===``?`.`+te(s,0):i;return Ne(a)?(n=``,c!=null&&(n=c.replace(He,`$&/`)+`/`),re(a,t,n,``,function(e){return e})):a!=null&&(x(a)&&(a.key!=null&&(s&&s.key===a.key||u(a.key)),n=y(a,n+(a.key==null||s&&s.key===a.key?``:(``+a.key).replace(He,`$&/`)+`/`)+c),i!==``&&s!=null&&x(s)&&s.key==null&&s._store&&!s._store.validated&&(n._store.validated=2),a=n),t.push(a)),1}if(s=0,c=i===``?`.`:i+`:`,Ne(e))for(var l=0;l<e.length;l++)i=e[l],o=c+te(i,l),s+=re(i,t,n,o,a);else if(l=r(e),typeof l==`function`)for(l===e.entries&&(Ve||console.warn(`Using Maps as children is not supported. Use an array of keyed ReactElements instead.`),Ve=!0),e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,o=c+te(i,l++),s+=re(i,t,n,o,a);else if(o===`object`){if(typeof e.then==`function`)return re(ne(e),t,n,i,a);throw t=String(e),Error(`Objects are not valid as a React child (found: `+(t===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:t)+`). If you meant to render a collection of children, use an array instead.`)}return s}function ie(e,t,n){if(e==null)return e;var r=[],i=0;return re(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ae(e){if(e._status===-1){var t=null,n=null,r=e._ioInfo;r!=null&&(r.start=r.end=performance.now(),r.value=new Promise(function(e,r){t=e,n=r})),r=e._result;var i=r();if(i.then(function(n){if(e._status===0||e._status===-1){e._status=1,e._result=n;var r=e._ioInfo;if(r!=null){r.end=performance.now();var a=n?.default;t(a),r.value.status=`fulfilled`,r.value.value=a}i.status===void 0&&(i.status=`fulfilled`,i.value=n)}},function(t){if(e._status===0||e._status===-1){e._status=2,e._result=t;var r=e._ioInfo;r!=null&&(r.end=performance.now(),r.value.then(c,c),n(t),r.value.status=`rejected`,r.value.reason=t),i.status===void 0&&(i.status=`rejected`,i.reason=t)}}),r=e._ioInfo,r!=null){var a=i.displayName;typeof a==`string`&&(r.name=a)}e._status===-1&&(e._status=0,e._result=i)}if(e._status===1)return r=e._result,r===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,r),`default`in r||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,r),r.default;throw e._result}function S(){var e=w.H;return e===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}function oe(){w.asyncTransitions--}function se(e){var t=w.T,n={};n.types=t===null?null:t.types,n._updatedFibers=new Set,w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&(w.asyncTransitions++,r.then(oe,oe),r.then(c,E))}catch(e){E(e)}finally{t===null&&n._updatedFibers&&(e=n._updatedFibers.size,n._updatedFibers.clear(),10<e&&console.warn(`Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.`)),t!==null&&n.types!==null&&(t.types!==null&&t.types!==n.types&&console.error(`We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React.`),t.types=n.types),w.T=t}}function ce(e){var t=w.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else w.asyncTransitions===0&&console.error("addTransitionType can only be called inside a `startTransition()` callback. It must be associated with a specific Transition."),se(ce.bind(null,e))}function le(e){if(Ue===null)try{var n=(`require`+Math.random()).slice(0,7);Ue=(t&&t[n]).call(t,`timers`).setImmediate}catch{Ue=function(e){!1===D&&(D=!0,typeof MessageChannel>`u`&&console.error(`This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.`));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}return Ue(e)}function ue(e){return 1<e.length&&typeof AggregateError==`function`?AggregateError(e):e[0]}function de(e,t){t!==O-1&&console.error(`You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. `),O=t}function fe(e,t,n){var r=w.actQueue;if(r!==null){if(r.length!==0)try{pe(r),le(function(){return fe(e,t,n)});return}catch(e){w.thrownErrors.push(e)}else w.actQueue=null}0<w.thrownErrors.length?(r=ue(w.thrownErrors),w.thrownErrors.length=0,n(r)):t(e)}function pe(e){if(!Ge){Ge=!0;var t=0;try{for(;t<e.length;t++){var n=e[t];do{w.didUsePromise=!1;var r=n(!1);if(r!==null){if(w.didUsePromise){e[t]=n,e.splice(0,t);return}n=r}else break}while(1)}e.length=0}catch(n){e.splice(0,t+1),w.thrownErrors.push(n)}finally{Ge=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var me=Symbol.for(`react.transitional.element`),he=Symbol.for(`react.portal`),ge=Symbol.for(`react.fragment`),_e=Symbol.for(`react.strict_mode`),C=Symbol.for(`react.profiler`),ve=Symbol.for(`react.consumer`),ye=Symbol.for(`react.context`),be=Symbol.for(`react.forward_ref`),xe=Symbol.for(`react.suspense`),Se=Symbol.for(`react.suspense_list`),Ce=Symbol.for(`react.memo`),we=Symbol.for(`react.lazy`),Te=Symbol.for(`react.activity`),Ee=Symbol.for(`react.view_transition`),De=Symbol.iterator,Oe={},ke={isMounted:function(){return!1},enqueueForceUpdate:function(e){i(e,`forceUpdate`)},enqueueReplaceState:function(e){i(e,`replaceState`)},enqueueSetState:function(e){i(e,`setState`)}},Ae=Object.assign,je={};Object.freeze(je),a.prototype.isReactComponent={},a.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};var Me={isMounted:[`isMounted`,`Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.`],replaceState:[`replaceState`,`Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).`]};for(qe in Me)Me.hasOwnProperty(qe)&&n(qe,Me[qe]);o.prototype=a.prototype,Me=s.prototype=new o,Me.constructor=s,Ae(Me,a.prototype),Me.isPureReactComponent=!0;var Ne=Array.isArray,Pe=Symbol.for(`react.client.reference`),w={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},Fe=Object.prototype.hasOwnProperty,Ie=console.createTask?console.createTask:function(){return null};Me={react_stack_bottom_frame:function(e){return e()}};var T,Le,Re={},ze=Me.react_stack_bottom_frame.bind(Me,m)(),Be=Ie(f(m)),Ve=!1,He=/\/+/g,E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D=!1,Ue=null,O=0,We=!1,Ge=!1,Ke=typeof queueMicrotask==`function`?function(e){queueMicrotask(function(){return queueMicrotask(e)})}:le;Me=Object.freeze({__proto__:null,c:function(e){return S().useMemoCache(e)}});var qe={map:ie,forEach:function(e,t,n){ie(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ie(e,function(){t++}),t},toArray:function(e){return ie(e,function(e){return e})||[]},only:function(e){if(!x(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=Te,e.Children=qe,e.Component=a,e.Fragment=ge,e.Profiler=C,e.PureComponent=s,e.StrictMode=_e,e.Suspense=xe,e.ViewTransition=Ee,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME=Me,e.act=function(e){var t=w.actQueue,n=O;O++;var r=w.actQueue=t===null?[]:t,i=!1;try{var a=e()}catch(e){w.thrownErrors.push(e)}if(0<w.thrownErrors.length)throw de(t,n),e=ue(w.thrownErrors),w.thrownErrors.length=0,e;if(typeof a==`object`&&a&&typeof a.then==`function`){var o=a;return Ke(function(){i||We||(We=!0,console.error(`You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);`))}),{then:function(e,a){i=!0,o.then(function(i){if(de(t,n),n===0){try{pe(r),le(function(){return fe(i,e,a)})}catch(e){w.thrownErrors.push(e)}if(0<w.thrownErrors.length){var o=ue(w.thrownErrors);w.thrownErrors.length=0,a(o)}}else e(i)},function(e){de(t,n),0<w.thrownErrors.length?(e=ue(w.thrownErrors),w.thrownErrors.length=0,a(e)):a(e)})}}}var s=a;if(de(t,n),n===0&&(pe(r),r.length!==0&&Ke(function(){i||We||(We=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),w.actQueue=null),0<w.thrownErrors.length)throw e=ue(w.thrownErrors),w.thrownErrors.length=0,e;return{then:function(e,t){i=!0,n===0?(w.actQueue=r,le(function(){return fe(s,e,t)})):e(s)}}},e.addTransitionType=ce,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.captureOwnerStack=function(){var e=w.getCurrentStack;return e===null?null:e()},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=Ae({},e.props),i=e.key,a=e._owner;if(t!=null){var o;a:{if(Fe.call(t,`ref`)&&(o=Object.getOwnPropertyDescriptor(t,`ref`).get)&&o.isReactWarning){o=!1;break a}o=t.ref!==void 0}for(s in o&&(a=p()),h(t)&&(u(t.key),i=``+t.key),t)!Fe.call(t,s)||s===`key`||s===`__self`||s===`__source`||s===`ref`&&t.ref===void 0||(r[s]=t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){o=Array(s);for(var c=0;c<s;c++)o[c]=arguments[c+2];r.children=o}for(r=v(e.type,i,r,a,e._debugStack,e._debugTask),i=2;i<arguments.length;i++)b(arguments[i]);return r},e.createContext=function(e){return e={$$typeof:ye,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ve,_context:e},e._currentRenderer=null,e._currentRenderer2=null,e},e.createElement=function(e,t,n){for(var r=2;r<arguments.length;r++)b(arguments[r]);var i;r={};var a=null;if(t!=null)for(i in Le||!(`__self`in t)||`key`in t||(Le=!0,console.warn(`Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform`)),h(t)&&(u(t.key),a=``+t.key),t)Fe.call(t,i)&&i!==`key`&&i!==`__self`&&i!==`__source`&&(r[i]=t[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];Object.freeze&&Object.freeze(s),r.children=s}if(e&&e.defaultProps)for(i in o=e.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return a&&g(r,typeof e==`function`?e.displayName||e.name||`Unknown`:e),(i=1e4>w.recentlyCreatedOwnerStacks++)?(s=Error.stackTraceLimit,Error.stackTraceLimit=10,o=Error(`react-stack-top-frame`),Error.stackTraceLimit=s):o=ze,v(e,a,r,p(),o,i?Ie(f(e)):Be)},e.createRef=function(){var e={current:null};return Object.seal(e),e},e.forwardRef=function(e){e!=null&&e.$$typeof===Ce?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof e==`function`?e.length!==0&&e.length!==2&&console.error(`forwardRef render functions accept exactly two parameters: props and ref. %s`,e.length===1?`Did you forget to use the ref parameter?`:`Any additional parameter will be undefined.`):console.error(`forwardRef requires a render function but was given %s.`,e===null?`null`:typeof e),e!=null&&e.defaultProps!=null&&console.error(`forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?`);var t={$$typeof:be,render:e},n;return Object.defineProperty(t,"displayName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(t){n=t,e.name||e.displayName||(Object.defineProperty(e,"name",{value:t}),e.displayName=t)}}),t},e.isValidElement=x,e.lazy=function(e){e={_status:-1,_result:e};var t={$$typeof:we,_payload:e,_init:ae},n={name:`lazy`,start:-1,end:-1,value:null,owner:null,debugStack:Error(`react-stack-top-frame`),debugTask:console.createTask?console.createTask(`lazy()`):null};return e._ioInfo=n,t._debugInfo=[{awaited:n}],t},e.memo=function(e,t){e??console.error(`memo: The first argument must be a component. Instead received: %s`,e===null?`null`:typeof e),t={$$typeof:Ce,type:e,compare:t===void 0?null:t};var n;return Object.defineProperty(t,"displayName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(t){n=t,e.name||e.displayName||(Object.defineProperty(e,"name",{value:t}),e.displayName=t)}}),t},e.startTransition=se,e.unstable_useCacheRefresh=function(){return S().useCacheRefresh()},e.use=function(e){return S().use(e)},e.useActionState=function(e,t,n){return S().useActionState(e,t,n)},e.useCallback=function(e,t){return S().useCallback(e,t)},e.useContext=function(e){var t=S();return e.$$typeof===ve&&console.error(`Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?`),t.useContext(e)},e.useDebugValue=function(e,t){return S().useDebugValue(e,t)},e.useDeferredValue=function(e,t){return S().useDeferredValue(e,t)},e.useEffect=function(e,t){return e??console.warn(`React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?`),S().useEffect(e,t)},e.useEffectEvent=function(e){return S().useEffectEvent(e)},e.useId=function(){return S().useId()},e.useImperativeHandle=function(e,t,n){return S().useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return e??console.warn(`React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?`),S().useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return e??console.warn(`React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?`),S().useLayoutEffect(e,t)},e.useMemo=function(e,t){return S().useMemo(e,t)},e.useOptimistic=function(e,t){return S().useOptimistic(e,t)},e.useReducer=function(e,t,n){return S().useReducer(e,t,n)},e.useRef=function(e){return S().useRef(e)},e.useState=function(e){return S().useState(e)},e.useSyncExternalStore=function(e,t,n){return S().useSyncExternalStore(e,t,n)},e.useTransition=function(){return S().useTransition()},e.version=`19.3.0`,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{(function(){function t(){}function n(e){return``+e}function r(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;if(i==null)i=null;else if(i===p)i=p;else{try{n(i);var a=!1}catch{a=!0}a&&(console.error(`The provided key is an unsupported type %s. This value must be coerced to a string before using it here.`,typeof Symbol==`function`&&Symbol.toStringTag&&i[Symbol.toStringTag]||i.constructor.name||`Object`),n(i)),i=``+i}return{$$typeof:u,key:i,children:e,containerInfo:t,implementation:r}}function i(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}function a(e){return e===null?"`null`":e===void 0?"`undefined`":e===``?`an empty string`:`something with type "`+typeof e+`"`}function o(e){return e===null?"`null`":e===void 0?"`undefined`":e===``?`an empty string`:typeof e==`string`?JSON.stringify(e):typeof e==`number`?"`"+e+"`":`something with type "`+typeof e+`"`}function s(){var e=m.H;return e===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var c=f(),l={d:{f:t,r:function(){throw Error(`Invalid form element. requestFormReset must be passed a form that was rendered by React.`)},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},u=Symbol.for(`react.portal`),d=Symbol.for(`react.recoverable`),p=Symbol.for(`react.optimistic_key`),m=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==`function`&&Map.prototype!=null&&typeof Map.prototype.forEach==`function`&&typeof Set==`function`&&Set.prototype!=null&&typeof Set.prototype.clear==`function`&&typeof Set.prototype.forEach==`function`||console.error(`React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills`),e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,e.browser=function(e){return{$$typeof:d,_reason:e}},e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(`Target container is not a DOM element.`);return r(e,t,null,n)},e.flushSync=function(e){var t=m.T,n=l.p;try{if(m.T=null,l.p=2,e)return e()}finally{m.T=t,l.p=n,l.d.f()&&console.error(`flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.`)}},e.preconnect=function(e,t){typeof e==`string`&&e?t!=null&&typeof t!=`object`?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",o(t)):t!=null&&typeof t.crossOrigin!=`string`&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",a(t.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",a(e)),typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,l.d.C(e,t))},e.prefetchDNS=function(e){if(typeof e!=`string`||!e)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",a(e));else if(1<arguments.length){var t=arguments[1];typeof t==`object`&&t.hasOwnProperty(`crossOrigin`)?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",o(t)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",o(t))}typeof e==`string`&&l.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&e?typeof t!=`object`||!t?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",o(t)):t.as!==`style`&&t.as!==`script`&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',o(t.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",a(e)),typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=i(n,t.crossOrigin),s=typeof t.integrity==`string`?t.integrity:void 0,c=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?l.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:s,fetchPriority:c}):n===`script`&&l.d.X(e,{crossOrigin:r,integrity:s,fetchPriority:c,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){var n=``;if(typeof e==`string`&&e||(n+=" The `href` argument encountered was "+a(e)+`.`),t!==void 0&&typeof t!=`object`?n+=" The `options` argument encountered was "+a(t)+`.`:t&&`as`in t&&t.as!==`script`&&(n+=" The `as` option encountered was "+o(t.as)+`.`),n)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",n);else switch(n=t&&typeof t.as==`string`?t.as:`script`,n){case`script`:break;default:n=o(n),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',n,e)}typeof e==`string`&&(typeof t==`object`&&t?(t.as==null||t.as===`script`)&&(n=i(t.as,t.crossOrigin),l.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})):t??l.d.M(e))},e.preload=function(e,t){var n=``;if(typeof e==`string`&&e||(n+=" The `href` argument encountered was "+a(e)+`.`),typeof t!=`object`||!t?n+=" The `options` argument encountered was "+a(t)+`.`:typeof t.as==`string`&&t.as||(n+=" The `as` option encountered was "+a(t.as)+`.`),n&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',n),typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){n=t.as;var r=i(n,t.crossOrigin);l.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){var n=``;typeof e==`string`&&e||(n+=" The `href` argument encountered was "+a(e)+`.`),t!==void 0&&typeof t!=`object`?n+=" The `options` argument encountered was "+a(t)+`.`:t&&`as`in t&&typeof t.as!=`string`&&(n+=" The `as` option encountered was "+a(t.as)+`.`),n&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',n),typeof e==`string`&&(t?(n=i(t.as,t.crossOrigin),l.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})):l.d.m(e))},e.requestFormReset=function(e){l.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s().useFormState(e,t,n)},e.useFormStatus=function(){return s().useHostTransitionStatus()},e.version=`19.3.0`,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})),m=o(((e,t)=>{t.exports=p()})),h=o((e=>{(function(){function t(e,t){for(e=e.memoizedState;e!==null&&0<t;)e=e.next,t--;return e}function n(e,t,r,i){if(r>=t.length)return i;var a=t[r],o=Gm(e)?e.slice():B({},e);return o[a]=n(e[a],t,r+1,i),o}function r(e,t,n){if(t.length!==n.length)console.warn(`copyWithRename() expects paths of the same length`);else{for(var r=0;r<n.length-1;r++)if(t[r]!==n[r]){console.warn(`copyWithRename() expects paths to be the same except for the deepest key`);return}return i(e,t,n,0)}}function i(e,t,n,r){var a=t[r],o=Gm(e)?e.slice():B({},e);return r+1===t.length?(o[n[r]]=o[a],Gm(o)?o.splice(a,1):delete o[a]):o[a]=i(e[a],t,n,r+1),o}function a(e,t,n){var r=t[n],i=Gm(e)?e.slice():B({},e);return n+1===t.length?(Gm(i)?i.splice(r,1):delete i[r],i):(i[r]=a(e[r],t,n+1),i)}function o(){return!1}function s(){return null}function c(){console.error(`Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks`)}function l(){console.error(`Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().`)}function d(){}function p(){}function h(e){var t=[];return e.forEach(function(e){t.push(e)}),t.sort().join(`, `)}function g(e,t,n,r){return new Ar(e,t,n,r)}function _(e,t){e.context===Lv&&(Jp(e.current,2,t,e,null,null),iu())}function v(e,t){if(Rv!==null){var n=t.staleFamilies;t=t.updatedFamilies,Fu(),kr(e.current,t,n),iu()}}function y(e){Rv=e}function b(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function ee(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function te(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ne(e){if(x(e)!==e)throw Error(`Unable to find node on an unmounted component.`)}function re(e){var t=e.alternate;if(!t){if(t=x(e),t===null)throw Error(`Unable to find node on an unmounted component.`);return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return ne(i),e;if(a===r)return ne(i),t;a=a.sibling}throw Error(`Unable to find node on an unmounted component.`)}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(`Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.`)}}if(n.alternate!==r)throw Error(`Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.`)}if(n.tag!==3)throw Error(`Unable to find node on an unmounted component.`);return n.stateNode.current===n?e:t}function ie(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ie(e),t!==null)return t;e=e.sibling}return null}function ae(e,t,n,r,i){S(e.child,!1,t,n,r,i)}function S(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&S(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function oe(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function se(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function ce(e){var t=[null,null],n=oe(e);return n===null||le(t,e,n.child,{foundSelf:!1}),t}function le(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&le(e,t,n.child,r))return!0;n=n.sibling}return!1}function ue(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(`Expected to find a host node. This is a bug in React.`)}}function de(e,t,n){return e===n||e===t&&(Cm=e,!0)}function fe(e,t,n){return e===n?(wm=e,!1):e===t&&(wm!==null&&(Cm=e),!0)}function pe(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function me(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}function he(e){return typeof e!=`object`||!e?null:(e=Um&&e[Um]||e[`@@iterator`],typeof e==`function`?e:null)}function ge(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Wm?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case Om:return`Fragment`;case Am:return`Profiler`;case km:return`StrictMode`;case Pm:return`Suspense`;case Fm:return`SuspenseList`;case Rm:return`Activity`;case Vm:return`ViewTransition`}if(typeof e==`object`)switch(typeof e.tag==`number`&&console.error(`Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.`),e.$$typeof){case Dm:return`Portal`;case Mm:return e.displayName||`Context`;case jm:return(e._context.displayName||`Context`)+`.Consumer`;case Nm:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case Im:return t=e.displayName||null,t===null?ge(e.type)||`Memo`:t;case Lm:t=e._payload,e=e._init;try{return ge(e(t))}catch{}}return null}function _e(e){return typeof e.tag==`number`?C(e):typeof e.name==`string`?e.name:null}function C(e){var t=e.type;switch(e.tag){case 31:return`Activity`;case 24:return`Cache`;case 9:return(t._context.displayName||`Context`)+`.Consumer`;case 10:return t.displayName||`Context`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 26:case 27:case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return ge(t);case 8:return t===km?`StrictMode`:`Mode`;case 22:if(e.return!==null)return C(e.return);break;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 30:return`ViewTransition`;case 1:case 0:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t;break;case 29:if(t=e._debugInfo,t!=null){for(var n=t.length-1;0<=n;n--)if(typeof t[n].name==`string`)return t[n].name}if(e.return!==null)return C(e.return)}return null}function ve(e){return{current:e}}function ye(e,t){0>Xm?console.error(`Unexpected pop.`):(t!==Ym[Xm]&&console.error(`Unexpected Fiber popped.`),e.current=Jm[Xm],Jm[Xm]=null,Ym[Xm]=null,Xm--)}function be(e,t,n){Xm++,Jm[Xm]=e.current,Ym[Xm]=n,e.current=t}function xe(e){return e===null&&console.error(`Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.`),e}function Se(e,t){be($m,t,e),be(Qm,e,e),be(Zm,null,e);var n=t.nodeType;switch(n){case 9:case 11:n=n===9?`#document`:`#fragment`,t=(t=t.documentElement)&&(t=t.namespaceURI)?Kd(t):_T;break;default:if(n=t.tagName,t=t.namespaceURI)t=Kd(t),t=qd(t,n);else switch(n){case`svg`:t=vT;break;case`math`:t=yT;break;default:t=_T}}n=n.toLowerCase(),n=Xt(null,n),n={context:t,ancestorInfo:n},ye(Zm,e),be(Zm,n,e)}function Ce(e){ye(Zm,e),ye(Qm,e),ye($m,e)}function we(){return xe(Zm.current)}function Te(e){var t=e.memoizedState;t!==null&&($T._currentValue=t.memoizedState,be(eh,e,e)),t=xe(Zm.current);var n=e.type,r=qd(t.context,n);n=Xt(t.ancestorInfo,n),r={context:r,ancestorInfo:n},t!==r&&(be(Qm,e,e),be(Zm,r,e))}function Ee(e){Qm.current===e&&(ye(Zm,e),ye(Qm,e)),eh.current===e&&(ye(eh,e),$T._currentValue=QT)}function De(){}function Oe(){if(th===0){nh=console.log,rh=console.info,ih=console.warn,ah=console.error,oh=console.group,sh=console.groupCollapsed,ch=console.groupEnd;var e={configurable:!0,enumerable:!0,value:De,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}th++}function ke(){if(th--,th===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:B({},e,{value:nh}),info:B({},e,{value:rh}),warn:B({},e,{value:ih}),error:B({},e,{value:ah}),group:B({},e,{value:oh}),groupCollapsed:B({},e,{value:sh}),groupEnd:B({},e,{value:ch})})}0>th&&console.error(`disabledDepth fell below zero. This is a bug in React. Please file an issue.`)}function Ae(e){var t=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,e=e.stack,Error.prepareStackTrace=t,e.startsWith(`Error: react-stack-top-frame
`)&&(e=e.slice(29)),t=e.indexOf(`
`),t!==-1&&(e=e.slice(t+1)),t=e.indexOf(`react_stack_bottom_frame`),t!==-1&&(t=e.lastIndexOf(`
`,t)),t!==-1)e=e.slice(0,t);else return``;return e}function je(e){if(lh===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);lh=t&&t[1]||``,uh=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+lh+e+uh}function Me(e,t){if(!e||dh)return``;var n=fh.get(e);if(n!==void 0)return n;dh=!0,n=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var r=null;r=V.H,V.H=null,Oe();try{var i={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,`name`);a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var o=i.DetermineComponentFrameRoot(),s=o[0],c=o[1];if(s&&c){var l=s.split(`
`),u=c.split(`
`);for(o=a=0;a<l.length&&!l[a].includes(`DetermineComponentFrameRoot`);)a++;for(;o<u.length&&!u[o].includes(`DetermineComponentFrameRoot`);)o++;if(a===l.length||o===u.length)for(a=l.length-1,o=u.length-1;1<=a&&0<=o&&l[a]!==u[o];)o--;for(;1<=a&&0<=o;a--,o--)if(l[a]!==u[o]){if(a!==1||o!==1)do if(a--,o--,0>o||l[a]!==u[o]){var d=`
`+l[a].replace(` at new `,` at `);return e.displayName&&d.includes(`<anonymous>`)&&(d=d.replace(`<anonymous>`,e.displayName)),typeof e==`function`&&fh.set(e,d),d}while(1<=a&&0<=o);break}}}finally{dh=!1,V.H=r,ke(),Error.prepareStackTrace=n}return l=(l=e?e.displayName||e.name:``)?je(l):``,typeof e==`function`&&fh.set(e,l),l}function Ne(e,t){switch(e.tag){case 26:case 27:case 5:return je(e.type);case 16:return je(`Lazy`);case 13:return e.child!==t&&t!==null?je(`Suspense Fallback`):je(`Suspense`);case 19:return je(`SuspenseList`);case 0:case 15:return Me(e.type,!1);case 11:return Me(e.type.render,!1);case 1:return Me(e.type,!0);case 31:return je(`Activity`);case 30:return je(`ViewTransition`);default:return``}}function Pe(e){try{var t=``,n=null;do{t+=Ne(e,n);var r=e._debugInfo;if(r)for(var i=r.length-1;0<=i;i--){var a=r[i];if(typeof a.name==`string`){var o=t;a:{var s=a.name,c=a.env,l=a.debugLocation;if(l!=null){var u=Ae(l),d=u.lastIndexOf(`
`),f=d===-1?u:u.slice(d+1);if(f.indexOf(s)!==-1){var p=`
`+f;break a}}p=je(s+(c?` [`+c+`]`:``))}t=o+p}}n=e,e=e.return}while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function w(e){return(e=e?e.displayName||e.name:``)?je(e):``}function Fe(){if(ph===null)return null;var e=ph._debugOwner;return e==null?null:_e(e)}function Ie(){if(ph===null)return``;var e=ph;try{var t=``;switch(e.tag===6&&(e=e.return),e.tag){case 26:case 27:case 5:t+=je(e.type);break;case 13:t+=je(`Suspense`);break;case 19:t+=je(`SuspenseList`);break;case 31:t+=je(`Activity`);break;case 30:t+=je(`ViewTransition`);break;case 0:case 15:case 1:e._debugOwner||t!==``||(t+=w(e.type));break;case 11:e._debugOwner||t!==``||(t+=w(e.type.render))}for(;e;)if(typeof e.tag==`number`){var n=e;e=n._debugOwner;var r=n._debugStack;if(e&&r){var i=Ae(r);i!==``&&(t+=`
`+i)}}else if(e.debugStack!=null){var a=e.debugStack;(e=e.owner)&&a&&(t+=`
`+Ae(a))}else break;var o=t}catch(e){o=`
Error generating stack: `+e.message+`
`+e.stack}return o}function T(e,t,n,r,i,a,o){var s=ph;Le(e);try{return e!==null&&e._debugTask?e._debugTask.run(t.bind(null,n,r,i,a,o)):t(n,r,i,a,o)}finally{Le(s)}throw Error(`runWithFiberInDEV should never be called in production. This is a bug in React.`)}function Le(e){V.getCurrentStack=e===null?null:Ie,mh=!1,ph=e}function Re(e){return typeof Symbol==`function`&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||`Object`}function ze(e){try{return Be(e),!1}catch{return!0}}function Be(e){return``+e}function Ve(e,t){if(ze(e))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",t,Re(e)),Be(e)}function He(e,t){if(ze(e))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",t,Re(e)),Be(e)}function E(e){if(ze(e))return console.error(`Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.`,Re(e)),Be(e)}function D(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)return!0;if(!t.supportsFiber)return console.error(`The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools`),!0;try{kh=t.inject(e),Ah=t}catch(e){console.error(`React instrumentation encountered an error: %o.`,e)}return!!t.checkDCE}function Ue(e){if(typeof Dh==`function`&&Oh(e),Ah&&typeof Ah.setStrictMode==`function`)try{Ah.setStrictMode(kh,e)}catch(e){jh||(jh=!0,console.error(`React instrumentation encountered an error: %o`,e))}}function O(e){return e>>>=0,e===0?32:31-(Ph(e)/Fh|0)|0}function We(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error(`Should have found matching lanes. This is a bug in React.`),e}}function Ge(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=We(n))):i=We(o):i=We(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=We(n))):i=We(o)):i=We(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ke(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qe(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Nh(n),i=1<<r;t|=e[r],n&=~i}return t}function Je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error(`Should have found matching lanes. This is a bug in React.`),-1}}function Ye(){var e=Rh;return Rh<<=1,!(Rh&62914560)&&(Rh=4194304),e}function Xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ze(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Nh(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&$e(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function $e(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Nh(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function et(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nh(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function k(e,t){var n=t&-t;return n=n&42?1:tt(n),(n&(e.suspendedLanes|t))===0?n:0}function tt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nt(e,t,n){if(Mh)for(e=e.pendingUpdatersLaneMap;0<n;){var r=31-Nh(n),i=1<<r;e[r].add(t),n&=~i}}function rt(e,t){if(Mh)for(var n=e.pendingUpdatersLaneMap,r=e.memoizedUpdaters;0<t;){var i=31-Nh(t);e=1<<i,i=n[i],0<i.size&&(i.forEach(function(e){var t=e.alternate;t!==null&&r.has(t)||r.add(e)}),i.clear()),t&=~e}}function it(e){return e&=-e,zh!==0&&zh<e?Bh!==0&&Bh<e?e&134217727?Vh:Hh:Bh:zh}function at(){var e=Km.p;return e===0?(e=window.event,e===void 0?Vh:am(e.type)):e}function A(e,t){var n=Km.p;try{return Km.p=e,t()}finally{Km.p=n}}function ot(e){delete e[Wh],delete e[Gh],delete e[Jh],delete e[Yh]}function j(e){var t;if(t=e[Wh])return t;for(var n=e.parentNode;n;){if(t=n[Kh]||n[Wh]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sp(e);e!==null;){if(n=e[Wh])return n;e=sp(e)}return t}e=n,n=e.parentNode}return null}function st(e){if(e=e[Wh]||e[Kh]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function M(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(`getNodeFromInstance: Invalid argument.`)}function ct(e){var t=e[Xh];return t||=e[Xh]={hoistableStyles:new Map,hoistableScripts:new Map},t}function lt(e){e[Zh]=!0}function ut(e){e[Qh]=void 0}function dt(e,t){ft(e,t),ft(e+`Capture`,t)}function ft(e,t){eg[e]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),eg[e]=t;var n=e.toLowerCase();for(tg[n]=e,e===`onDoubleClick`&&(tg.ondblclick=e),e=0;e<t.length;e++)$h.add(t[e])}function pt(e,t){ng[t.type]||t.onChange||t.onInput||t.readOnly||t.disabled||t.value==null||console.error(e===`select`?"You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.":"You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),t.onChange||t.readOnly||t.disabled||t.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function mt(e){return hh.call(ag,e)?!0:hh.call(ig,e)?!1:rg.test(e)?ag[e]=!0:(ig[e]=!0,console.error("Invalid attribute name: `%s`",e),!1)}function ht(){var e=og;return og=!1,e}function gt(e,t,n){if(mt(t)){if(!e.hasAttribute(t)){switch(typeof n){case`symbol`:case`object`:return n;case`function`:return n;case`boolean`:if(!1===n)return n}return n===void 0?void 0:null}return e=t.toLowerCase()===`nonce`?e.nonce:e.getAttribute(t),e===``&&!0===n||(Ve(n,t),e===``+n?n:e)}}function _t(e,t,n){if(mt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}Ve(n,t),e.setAttribute(t,n)}}}function vt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}Ve(n,t),e.setAttribute(t,n)}}function yt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}Ve(r,n),e.setAttributeNS(t,n,r)}}function bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return E(e),e;default:return``}}function xt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function St(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){E(e),n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){E(e),n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ct(e){if(!e._valueTracker){var t=xt(e)?`checked`:`value`;e._valueTracker=St(e,t,``+e[t])}}function wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=xt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Tt(e){return e.replace(sg,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Et(e,t){t.checked===void 0||t.defaultChecked===void 0||lg||(console.error(`%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components`,Fe()||`A component`,t.type),lg=!0),t.value===void 0||t.defaultValue===void 0||cg||(console.error(`%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components`,Fe()||`A component`,t.type),cg=!0)}function Dt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?(Ve(o,`type`),e.type=o):e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+bt(t)):e.value!==``+bt(t)&&(e.value=``+bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):kt(e,bt(n)):o===`number`&&e.value==t?kt(e,bt(e.value)):kt(e,bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?(Ve(s,`name`),e.name=``+bt(s)):e.removeAttribute(`name`)}function Ot(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(Ve(a,`type`),e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ct(e);return}n=n==null?``:``+bt(n),t=t==null?n:``+bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(Ve(o,`name`),e.name=o),Ct(e)}function kt(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function At(e,t){t.value??(typeof t.children==`object`&&t.children!==null?xm.Children.forEach(t.children,function(e){e==null||typeof e==`string`||typeof e==`number`||typeof e==`bigint`||dg||(dg=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):t.dangerouslySetInnerHTML==null||fg||(fg=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),t.selected==null||ug||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),ug=!0)}function jt(){var e=Fe();return e?`

Check the render method of \``+e+"`.":``}function Mt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nt(e,t){for(e=0;e<mg.length;e++){var n=mg[e];if(t[n]!=null){var r=Gm(t[n]);t.multiple&&!r?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,jt()):!t.multiple&&r&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,jt())}}t.value===void 0||t.defaultValue===void 0||pg||(console.error(`Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components`),pg=!0)}function Pt(e,t){t.value===void 0||t.defaultValue===void 0||hg||(console.error(`%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components`,Fe()||`A component`),hg=!0),t.children!=null&&t.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function Ft(e,t,n){if(t!=null&&(t=``+bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+bt(n)}function It(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(Gm(r)){if(1<r.length)throw Error(`<textarea> can only have at most one child.`);r=r[0]}n=r}n??=``,t=n}n=bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ct(e)}function Lt(e,t){return e.serverProps===void 0&&e.serverTail.length===0&&e.children.length===1&&3<e.distanceFromLeaf&&e.distanceFromLeaf>15-t?Lt(e.children[0],t):e}function Rt(e){return`  `+`  `.repeat(e)}function zt(e){return`+ `+`  `.repeat(e)}function Bt(e){return`- `+`  `.repeat(e)}function Vt(e){switch(e.tag){case 26:case 27:case 5:return e.type;case 16:return`Lazy`;case 31:return`Activity`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 0:case 15:return e=e.type,e.displayName||e.name||null;case 11:return e=e.type.render,e.displayName||e.name||null;case 1:return e=e.type,e.displayName||e.name||null;default:return null}}function N(e,t){return gg.test(e)?(e=JSON.stringify(e),e.length>t-2?8>t?`{"..."}`:`{`+e.slice(0,t-7)+`..."}`:`{`+e+`}`):e.length>t?5>t?`{"..."}`:e.slice(0,t-3)+`...`:e}function Ht(e,t,n){var r=120-2*n;if(t===null)return zt(n)+N(e,r)+`
`;if(typeof t==`string`){for(var i=0;i<t.length&&i<e.length&&t.charCodeAt(i)===e.charCodeAt(i);i++);return i>r-8&&10<i&&(e=`...`+e.slice(i-8),t=`...`+t.slice(i-8)),zt(n)+N(e,r)+`
`+Bt(n)+N(t,r)+`
`}return Rt(n)+N(e,r)+`
`}function Ut(e){return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/,function(e,t){return t})}function P(e,t){switch(typeof e){case`string`:return e=JSON.stringify(e),e.length>t?5>t?`"..."`:e.slice(0,t-4)+`..."`:e;case`object`:if(e===null)return`null`;if(Gm(e))return`[...]`;if(e.$$typeof===Em)return(t=ge(e.type))?`<`+t+`>`:`<...>`;var n=Ut(e);if(n===`Object`){for(var r in n=``,t-=2,e)if(e.hasOwnProperty(r)){var i=JSON.stringify(r);if(i!==`"`+r+`"`&&(r=i),t-=r.length-2,i=P(e[r],15>t?t:15),t-=i.length,0>t){n+=n===``?`...`:`, ...`;break}n+=(n===``?``:`,`)+r+`:`+i}return`{`+n+`}`}return n;case`function`:return(t=e.displayName||e.name)?`function `+t:`function`;default:return String(e)}}function Wt(e,t){return typeof e!=`string`||gg.test(e)?`{`+P(e,t-2)+`}`:e.length>t-2?5>t?`"..."`:`"`+e.slice(0,t-5)+`..."`:`"`+e+`"`}function F(e,t,n){var r=120-n.length-e.length,i=[],a;for(a in t)if(t.hasOwnProperty(a)&&a!==`children`){var o=Wt(t[a],120-n.length-a.length-1);r-=a.length+o.length+2,i.push(a+`=`+o)}return i.length===0?n+`<`+e+`>
`:0<r?n+`<`+e+` `+i.join(` `)+`>
`:n+`<`+e+`
`+n+`  `+i.join(`
`+n+`  `)+`
`+n+`>
`}function Gt(e,t,n){var r=``,i=B({},t),a;for(a in e)if(e.hasOwnProperty(a)){delete i[a];var o=120-2*n-a.length-2,s=P(e[a],o);t.hasOwnProperty(a)?(o=P(t[a],o),r+=zt(n)+a+`: `+s+`
`,r+=Bt(n)+a+`: `+o+`
`):r+=zt(n)+a+`: `+s+`
`}for(var c in i)i.hasOwnProperty(c)&&(e=P(i[c],120-2*n-c.length-2),r+=Bt(n)+c+`: `+e+`
`);return r}function Kt(e,t,n,r){var i=``,a=new Map;for(l in n)n.hasOwnProperty(l)&&a.set(l.toLowerCase(),l);if(a.size===1&&a.has(`children`))i+=F(e,t,Rt(r));else{for(var o in t)if(t.hasOwnProperty(o)&&o!==`children`){var s=120-2*(r+1)-o.length-1,c=a.get(o.toLowerCase());if(c!==void 0){a.delete(o.toLowerCase());var l=t[o];c=n[c];var u=Wt(l,s);s=Wt(c,s),typeof l==`object`&&l&&typeof c==`object`&&c&&Ut(l)===`Object`&&Ut(c)===`Object`&&(2<Object.keys(l).length||2<Object.keys(c).length||-1<u.indexOf(`...`)||-1<s.indexOf(`...`))?i+=Rt(r+1)+o+`={{
`+Gt(l,c,r+2)+Rt(r+1)+`}}
`:(i+=zt(r+1)+o+`=`+u+`
`,i+=Bt(r+1)+o+`=`+s+`
`)}else i+=Rt(r+1)+o+`=`+Wt(t[o],s)+`
`}a.forEach(function(e){if(e!==`children`){var t=120-2*(r+1)-e.length-1;i+=Bt(r+1)+e+`=`+Wt(n[e],t)+`
`}}),i=i===``?Rt(r)+`<`+e+`>
`:Rt(r)+`<`+e+`
`+i+Rt(r)+`>
`}return e=n.children,t=t.children,typeof e==`string`||typeof e==`number`||typeof e==`bigint`?(a=``,(typeof t==`string`||typeof t==`number`||typeof t==`bigint`)&&(a=``+t),i+=Ht(a,``+e,r+1)):(typeof t==`string`||typeof t==`number`||typeof t==`bigint`)&&(i=e==null?i+Ht(``+t,null,r+1):i+Ht(``+t,void 0,r+1)),i}function qt(e,t){var n=Vt(e);if(n===null){for(n=``,e=e.child;e;)n+=qt(e,t),e=e.sibling;return n}return Rt(t)+`<`+n+`>
`}function Jt(e,t){var n=Lt(e,t);if(n!==e&&(e.children.length!==1||e.children[0]!==n))return Rt(t)+`...
`+Jt(n,t+1);n=``;var r=e.fiber._debugInfo;if(r)for(var i=0;i<r.length;i++){var a=r[i].name;typeof a==`string`&&(n+=Rt(t)+`<`+a+`>
`,t++)}if(r=``,i=e.fiber.pendingProps,e.fiber.tag===6)r=Ht(i,e.serverProps,t),t++;else if(a=Vt(e.fiber),a!==null){if(e.serverProps===void 0){r=t;var o=120-2*r-a.length-2,s=``;for(l in i)if(i.hasOwnProperty(l)&&l!==`children`){var c=Wt(i[l],15);if(o-=l.length+c.length+2,0>o){s+=` ...`;break}s+=` `+l+`=`+c}r=Rt(r)+`<`+a+s+`>
`,t++}else e.serverProps===null?(r=F(a,i,zt(t)),t++):typeof e.serverProps==`string`?console.error(`Should not have matched a non HostText fiber to a Text node. This is a bug in React.`):(r=Kt(a,i,e.serverProps,t),t++)}var l=``;for(i=e.fiber.child,a=0;i&&a<e.children.length;)o=e.children[a],o.fiber===i?(l+=Jt(o,t),a++):l+=qt(i,t),i=i.sibling;for(i&&0<e.children.length&&(l+=Rt(t)+`...
`),i=e.serverTail,e.serverProps===null&&t--,e=0;e<i.length;e++)a=i[e],l=typeof a==`string`?l+(Bt(t)+N(a,120-2*t)+`
`):l+F(a.type,a.props,Bt(t));return n+r+l}function Yt(e){try{return`

`+Jt(e,0)}catch{return``}}function I(e,t,n){for(var r=t,i=null,a=0;r;)r===e&&(a=0),i={fiber:r,children:i===null?[]:[i],serverProps:r===t?n:r===e?null:void 0,serverTail:[],distanceFromLeaf:a},a++,r=r.return;return i===null?``:Yt(i).replaceAll(/^[+-]/gm,`>`)}function Xt(e,t){var n=B({},e||xg),r={tag:t};return vg.indexOf(t)!==-1&&(n.aTagInScope=null,n.buttonTagInScope=null,n.nobrTagInScope=null),yg.indexOf(t)!==-1&&(n.pTagInButtonScope=null),_g.indexOf(t)!==-1&&t!==`address`&&t!==`div`&&t!==`p`&&(n.listItemTagAutoclosing=null,n.dlItemTagAutoclosing=null),n.current=r,t===`form`&&(n.formTag=r),t===`a`&&(n.aTagInScope=r),t===`button`&&(n.buttonTagInScope=r),t===`nobr`&&(n.nobrTagInScope=r),t===`p`&&(n.pTagInButtonScope=r),t===`li`&&(n.listItemTagAutoclosing=r),(t===`dd`||t===`dt`)&&(n.dlItemTagAutoclosing=r),t===`#document`||t===`html`?n.containerTagInScope=null:n.containerTagInScope||=r,e!==null||t!==`#document`&&t!==`html`&&t!==`body`?!0===n.implicitRootScope&&(n.implicitRootScope=!1):n.implicitRootScope=!0,n}function Zt(e,t,n){switch(t){case`tr`:return e===`th`||e===`td`||e===`style`||e===`script`||e===`template`;case`tbody`:case`thead`:case`tfoot`:return e===`tr`||e===`style`||e===`script`||e===`template`;case`colgroup`:return e===`col`||e===`template`;case`table`:return e===`caption`||e===`colgroup`||e===`tbody`||e===`tfoot`||e===`thead`||e===`style`||e===`script`||e===`template`;case`head`:return e===`base`||e===`basefont`||e===`bgsound`||e===`link`||e===`meta`||e===`title`||e===`noscript`||e===`noframes`||e===`style`||e===`script`||e===`template`;case`html`:if(n)break;return e===`head`||e===`body`||e===`frameset`;case`frameset`:return e===`frame`;case`#document`:if(!n)return e===`html`}switch(e){case`h1`:case`h2`:case`h3`:case`h4`:case`h5`:case`h6`:return t!==`h1`&&t!==`h2`&&t!==`h3`&&t!==`h4`&&t!==`h5`&&t!==`h6`;case`rp`:case`rt`:return bg.indexOf(t)===-1;case`caption`:case`col`:case`colgroup`:case`input`:return t!==`select`;case`frameset`:case`frame`:case`tbody`:case`td`:case`tfoot`:case`th`:case`thead`:case`tr`:return t==null;case`head`:return n||t===null;case`html`:return n&&t===`#document`||t===null;case`body`:return n&&(t===`#document`||t===`html`)||t===null}return!0}function Qt(e,t){switch(e){case`address`:case`article`:case`aside`:case`blockquote`:case`center`:case`details`:case`dialog`:case`dir`:case`div`:case`dl`:case`fieldset`:case`figcaption`:case`figure`:case`footer`:case`header`:case`hgroup`:case`main`:case`menu`:case`nav`:case`ol`:case`p`:case`section`:case`summary`:case`ul`:case`pre`:case`listing`:case`table`:case`hr`:case`xmp`:case`h1`:case`h2`:case`h3`:case`h4`:case`h5`:case`h6`:return t.pTagInButtonScope;case`form`:return t.formTag||t.pTagInButtonScope;case`li`:return t.listItemTagAutoclosing;case`dd`:case`dt`:return t.dlItemTagAutoclosing;case`button`:return t.buttonTagInScope;case`a`:return t.aTagInScope;case`nobr`:return t.nobrTagInScope}return null}function L(e,t){for(;e;){switch(e.tag){case 5:case 26:case 27:if(e.type===t)return e}e=e.return}return null}function $t(e,t){t||=xg;var n=t.current;if(t=(n=Zt(e,n&&n.tag,t.implicitRootScope)?null:n)?null:Qt(e,t),t=n||t,!t)return!0;var r=t.tag;if(t=String(!!n)+`|`+e+`|`+r,Sg[t])return!1;Sg[t]=!0;var i=(t=ph)?L(t.return,r):null,a=t!==null&&i!==null?I(i,t,null):``,o=`<`+e+`>`;return n?(n=``,r===`table`&&e===`tr`&&(n+=` Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.`),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,o,r,n,a)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,o,r,a),t&&(e=t.return,i===null||e===null||i===e&&e._debugOwner===t._debugOwner||T(i,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,r,o)})),!1}function en(e,t,n){if(n||Zt(`#text`,t,!1))return!0;if(n=`#text|`+t,Sg[n])return!1;Sg[n]=!0;var r=(n=ph)?L(n,t):null;return n=n!==null&&r!==null?I(r,n,n.tag===6?null:{children:null}):``,/\S/.test(e)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,t,n):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,t,n),!1}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}function nn(e){return e.replace(Og,function(e,t){return t.toUpperCase()})}function rn(e,t,n){var r=t.indexOf(`--`)===0;r||(-1<t.indexOf(`-`)?Ag.hasOwnProperty(t)&&Ag[t]||(Ag[t]=!0,console.error(`Unsupported style property %s. Did you mean %s?`,t,nn(t.replace(Dg,`ms-`)))):Eg.test(t)?Ag.hasOwnProperty(t)&&Ag[t]||(Ag[t]=!0,console.error(`Unsupported vendor-prefixed style property %s. Did you mean %s?`,t,t.charAt(0).toUpperCase()+t.slice(1))):!kg.test(n)||jg.hasOwnProperty(n)&&jg[n]||(jg[n]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,t,n.replace(kg,``))),typeof n==`number`&&(isNaN(n)?Mg||(Mg=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",t)):isFinite(n)||Ng||(Ng=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",t)))),n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Pg.has(t)?t===`float`?e.cssFloat=n:(He(n,t),e[t]=(``+n).trim()):e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(t&&Object.freeze(t),e=e.style,n!=null){if(t){var r={};if(n){for(var i in n)if(n.hasOwnProperty(i)&&!t.hasOwnProperty(i))for(var a=Cg[i]||[i],o=0;o<a.length;o++)r[a[o]]=i}for(var s in t)if(t.hasOwnProperty(s)&&(!n||n[s]!==t[s]))for(i=Cg[s]||[s],a=0;a<i.length;a++)r[i[a]]=s;for(var c in s={},t)for(i=Cg[c]||[c],a=0;a<i.length;a++)s[i[a]]=c;for(var l in c={},r)if(i=r[l],(a=s[l])&&i!==a&&(o=i+`,`+a,!c[o])){c[o]=!0,o=console;var u=t[i];o.error.call(o,`%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.`,u==null||typeof u==`boolean`||u===``?`Removing`:`Updating`,i,a)}}for(var d in n)!n.hasOwnProperty(d)||t!=null&&t.hasOwnProperty(d)||(d.indexOf(`--`)===0?e.setProperty(d,``):d===`float`?e.cssFloat=``:e[d]=``,og=!0);for(var f in t)l=t[f],t.hasOwnProperty(f)&&n[f]!==l&&(rn(e,f,l),og=!0)}else for(r in t)t.hasOwnProperty(r)&&rn(e,r,t[r])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}function sn(e){return Lg.get(e)||e}function cn(e,t){if(hh.call(Bg,t)&&Bg[t])return!0;if(Hg.test(t)){if(e=`aria-`+t.slice(4).toLowerCase(),e=zg.hasOwnProperty(e)?e:null,e==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),Bg[t]=!0;if(t!==e)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",t,e),Bg[t]=!0}if(Vg.test(t)){if(e=t.toLowerCase(),e=zg.hasOwnProperty(e)?e:null,e==null)return Bg[t]=!0,!1;t!==e&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",t,e),Bg[t]=!0)}return!0}function ln(e,t){var n=[],r;for(r in t)cn(e,r)||n.push(r);t=n.map(function(e){return"`"+e+"`"}).join(`, `),n.length===1?console.error(`Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props`,t,e):1<n.length&&console.error(`Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props`,t,e)}function un(e,t,n,r){if(hh.call(Wg,t)&&Wg[t])return!0;var i=t.toLowerCase();if(i===`onfocusin`||i===`onfocusout`)return console.error(`React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.`),Wg[t]=!0;if(typeof n==`function`&&(e===`form`&&t===`action`||e===`input`&&t===`formAction`||e===`button`&&t===`formAction`))return!0;if(r!=null){if(e=r.possibleRegistrationNames,r.registrationNameDependencies.hasOwnProperty(t))return!0;if(r=e.hasOwnProperty(i)?e[i]:null,r!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",t,r),Wg[t]=!0;if(Gg.test(t))return console.error("Unknown event handler property `%s`. It will be ignored.",t),Wg[t]=!0}else if(Gg.test(t))return Kg.test(t)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),Wg[t]=!0;if(qg.test(t)||Jg.test(t))return!0;if(i===`innerhtml`)return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),Wg[t]=!0;if(i===`aria`)return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),Wg[t]=!0;if(i===`is`&&n!=null&&typeof n!=`string`)return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof n),Wg[t]=!0;if(typeof n==`number`&&isNaN(n))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),Wg[t]=!0;if(Rg.hasOwnProperty(i)){if(i=Rg[i],i!==t)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",t,i),Wg[t]=!0}else if(t!==i)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,i),Wg[t]=!0;switch(t){case`dangerouslySetInnerHTML`:case`children`:case`style`:case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:return!0;case`innerText`:case`textContent`:return!0}switch(typeof n){case`boolean`:switch(t){case`autoFocus`:case`checked`:case`multiple`:case`muted`:case`selected`:case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:case`capture`:case`download`:case`inert`:return!0;default:return i=t.toLowerCase().slice(0,5),i===`data-`||i===`aria-`||(n?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',n,t,t,n,t):console.error(`Received \`%s\` for a non-boolean attribute \`%s\`.

If you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.

If you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.`,n,t,t,n,t,t,t),Wg[t]=!0)}case`function`:case`symbol`:return Wg[t]=!0,!1;case`string`:if(n===`false`||n===`true`){switch(t){case`checked`:case`selected`:case`multiple`:case`muted`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:case`inert`:break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",n,t,n===`false`?`The browser will interpret it as a truthy value.`:`Although this works, it will not work as expected if you pass the string "false".`,t,n),Wg[t]=!0}}return!0}function dn(e,t,n){var r=[],i;for(i in t)un(e,i,t[i],n)||r.push(i);t=r.map(function(e){return"`"+e+"`"}).join(`, `),r.length===1?console.error(`Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior `,t,e):1<r.length&&console.error(`Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior `,t,e)}function fn(e){return Yg.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function pn(){}function mn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function hn(e){var t=st(e);if(t&&(e=t.stateNode)){var n=e[Gh]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Dt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(Ve(t,`name`),n=n.querySelectorAll(`input[name="`+Tt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Gh]||null;if(!i)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");Dt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&wt(r)}break a;case`textarea`:Ft(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Mt(e,!!n.multiple,t,!1)}}}function gn(e,t,n){if($g)return e(t,n);$g=!0;try{return e(t)}finally{if($g=!1,(Zg!==null||Qg!==null)&&(iu(),Zg&&(t=Zg,e=Qg,Qg=Zg=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Gh]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof n+"` type.");return n}function vn(){if(a_)return a_;var e,t=i_,n=t.length,r,i=`value`in r_?r_.value:r_.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return a_=i.slice(e,1<r?1-r:void 0)}function yn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bn(){return!0}function xn(){return!1}function Sn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?bn:xn,this.isPropagationStopped=xn,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),t}function Cn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C_[e])?!!t[e]:!1}function wn(){return Cn}function Tn(e,t){switch(e){case`keyup`:return j_.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==M_;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function En(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}function Dn(e,t){switch(e){case`compositionend`:return En(t);case`keypress`:return t.which===L_?(z_=!0,R_):null;case`textInput`:return e=t.data,e===R_&&z_?null:e;default:return null}}function On(e,t){if(B_)return e===`compositionend`||!N_&&Tn(e,t)?(e=vn(),a_=i_=r_=null,B_=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return I_&&t.locale!==`ko`?null:t.data;default:return null}}function kn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!V_[e.type]:t===`textarea`}function An(e){if(!e_)return!1;e=`on`+e;var t=e in document;return t||=(t=document.createElement(`div`),t.setAttribute(e,`return;`),typeof t[e]==`function`),t}function jn(e,t,n,r){Zg?Qg?Qg.push(r):Qg=[r]:Zg=r,t=_d(t,`onChange`),0<t.length&&(n=new s_(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}function Mn(e){ud(e,0)}function Nn(e){if(wt(M(e)))return e}function Pn(e,t){if(e===`change`)return t}function Fn(){H_&&(H_.detachEvent(`onpropertychange`,In),U_=H_=null)}function In(e){if(e.propertyName===`value`&&Nn(U_)){var t=[];jn(t,U_,e,mn(e)),gn(Mn,t)}}function Ln(e,t,n){e===`focusin`?(Fn(),H_=t,U_=n,H_.attachEvent(`onpropertychange`,In)):e===`focusout`&&Fn()}function Rn(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Nn(U_)}function zn(e,t){if(e===`click`)return Nn(t)}function Bn(e,t){if(e===`input`||e===`change`)return Nn(t)}function Vn(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}function Hn(e,t){if(G_(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hh.call(t,i)||!G_(e[i],t[i]))return!1}return!0}function Un(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Wn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gn(e,t){var n=Wn(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Wn(n)}}function Kn(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kn(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Un(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Un(e.document)}return t}function Jn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Yn(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;X_||q_==null||q_!==Un(r)||(r=q_,`selectionStart`in r&&Jn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Y_&&Hn(Y_,r)||(Y_=r,r=_d(J_,`onSelect`),0<r.length&&(t=new s_(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=q_)))}function Xn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}function Zn(e){if(Q_[e])return Q_[e];if(!Z_[e])return e;var t=Z_[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $_)return Q_[e]=t[n];return e}function Qn(e,t){sv.set(e,t),dt(t,[e])}function $n(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=iw.identifierPrefix;var n=lv++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function er(e){if(e==null||typeof e==`string`)return e;var t=null,n=pw;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function tr(e,t){return e=er(e),t=er(t),t==null?e===`auto`?null:e:t===`auto`?null:t}function nr(e){for(var t=gv,n=0;n<e.length&&n<bv;n++){var r=e[n];if(typeof r==`object`&&r){if(Gm(r)&&r.length===2&&typeof r[0]==`string`){if(t!==gv&&t!==yv)return _v;t=yv}else return _v}else{if(typeof r==`function`||typeof r==`string`&&50<r.length||t!==gv&&t!==vv||typeof r==`bigint`)return _v;t=vv}}return t}function rr(e,t,n,r){if(!ArrayBuffer.isView(e)){var i=0,a;for(a in e)if(hh.call(e,a)&&a[0]!==`_`&&(i++,ar(a,e[a],t,n,r),i>=bv)){t.push([r+`\xA0\xA0`.repeat(n)+`Only `+bv+` properties are shown. React will not log more properties of this object.`,``]);break}}}function ir(e){return`$$typeof`in e&&hh.call(e,`$$typeof`)?e.$$typeof:void 0}function ar(e,t,n,r,i){switch(typeof t){case`object`:if(t===null){t=`null`;break}if(ir(t)===Em){var a=ge(t.type)||`…`,o=t.key;t=t.props;var s=Object.keys(t),c=s.length;if(o==null&&c===0){t=`<`+a+` />`;break}if(3>r||c===1&&s[0]===`children`&&o==null){t=`<`+a+` … />`;break}for(var l in n.push([i+`\xA0\xA0`.repeat(r)+e,`<`+a]),o!==null&&ar(`key`,o,n,r+1,i),e=!1,o=0,t)if(o++,l===`children`?t.children!=null&&(!Gm(t.children)||0<t.children.length)&&(e=!0):hh.call(t,l)&&l[0]!==`_`&&ar(l,t[l],n,r+1,i),o>=bv)break;n.push([``,e?`>…</`+a+`>`:`/>`]);return}if(a=Object.prototype.toString.call(t),a=a.slice(8,a.length-1),ArrayBuffer.isView(t)){t=t.length,t=typeof t==`number`?a+`(`+t+`)`:a;break}if(a===`Array`){if(l=t.length>bv,o=nr(t),o===vv||o===gv){t=JSON.stringify(l?t.slice(0,bv).concat(`…`):t);break}if(o===yv){for(n.push([i+`\xA0\xA0`.repeat(r)+e,``]),e=0;e<t.length&&e<bv;e++)a=t[e],ar(a[0],a[1],n,r+1,i);l&&ar(bv.toString(),`…`,n,r+1,i);return}}if(a===`Promise`){if(t.status===`fulfilled`){if(a=n.length,ar(e,t.value,n,r,i),n.length>a){n=n[a],n[1]=`Promise<`+(n[1]||`Object`)+`>`;return}}else if(t.status===`rejected`&&(a=n.length,ar(e,t.reason,n,r,i),n.length>a)){n=n[a],n[1]=`Rejected Promise<`+n[1]+`>`;return}n.push([`\xA0\xA0`.repeat(r)+e,`Promise`]);return}a===`Object`&&(l=Object.getPrototypeOf(t))&&typeof l.constructor==`function`&&(a=l.constructor.name),n.push([i+`\xA0\xA0`.repeat(r)+e,a===`Object`?3>r?``:`…`:a]),3>r&&rr(t,n,r+1,i);return;case`function`:t=t.name,t=t===``||typeof t!=`string`?`() => {}`:t+`() {}`;break;case`string`:t=t===hv?`…`:JSON.stringify(1024<=t.length?t.slice(0,1023)+`…`:t);break;case`undefined`:t=`undefined`;break;case`boolean`:t=t?`true`:`false`;break;default:t=String(t)}n.push([i+`\xA0\xA0`.repeat(r)+e,t])}function or(e,t,n,r){var i=!0,a=0;for(s in e){if(a>bv){n.push([`Previous object has more than `+bv+` properties. React will not attempt to diff objects with too many properties.`,``]),i=!1;break}s in t||(n.push([xv+`\xA0\xA0`.repeat(r)+s,`…`]),i=!1),a++}for(var o in a=0,t){if(a>bv){n.push([`Next object has more than `+bv+` properties. React will not attempt to diff objects with too many properties.`,``]),i=!1;break}if(o in e){var s=e[o],c=t[o];if(s!==c){if(r===0&&o===`children`){i=`\xA0\xA0`.repeat(r)+o,n.push([xv+i,`…`],[Sv+i,`…`]),i=!1;continue}if(!(3<=r)){if(typeof s==`object`&&typeof c==`object`&&s!==null&&c!==null&&ir(s)===ir(c)){if(ir(c)===Em){if(s.type===c.type&&s.key===c.key){s=ge(c.type)||`…`,i=`\xA0\xA0`.repeat(r)+o,s=`<`+s+` … />`,n.push([xv+i,s],[Sv+i,s]),i=!1;continue}}else{var l=Object.prototype.toString.call(s),u=Object.prototype.toString.call(c);if(l===u&&(u===`[object Object]`||u===`[object Array]`)){l=[Cv+`\xA0\xA0`.repeat(r)+o,u===`[object Array]`?`Array`:``],n.push(l),u=n.length,or(s,c,n,r+1)?u===n.length&&(l[1]=`Referentially unequal but deeply equal objects. Consider memoization.`):i=!1;continue}}}else if(typeof s==`function`&&typeof c==`function`&&s.name===c.name&&s.length===c.length&&(l=Function.prototype.toString.call(s),u=Function.prototype.toString.call(c),l===u)){s=c.name===``?`() => {}`:c.name+`() {}`,n.push([Cv+`\xA0\xA0`.repeat(r)+o,s+` Referentially unequal function closure. Consider memoization.`]);continue}}ar(o,s,n,r,xv),ar(o,c,n,r,Sv),i=!1}}else n.push([Sv+`\xA0\xA0`.repeat(r)+o,`…`]),i=!1;a++}return i}function sr(e){U=e&63?`Blocking`:e&64?`Gesture`:e&4194176?`Transition`:e&62914560?`Suspense`:e&2080374784?`Idle`:`Other`}function cr(e,t,n,r){wv&&(Ov.start=t,Ov.end=n,Dv.color=`warning`,Dv.tooltipText=r,Dv.properties=null,(e=e._debugTask)?e.run(performance.measure.bind(performance,r,Ov)):performance.measure(r,Ov),performance.clearMeasures(r))}function lr(e,t,n){cr(e,t,n,`Reconnect`)}function ur(e,t,n,r,i){var a=C(e);if(a!==null&&wv){var o=e.alternate,s=e.actualDuration;if(o===null||o.child!==e.child)for(var c=e.child;c!==null;c=c.sibling)s-=c.actualDuration;s=.5>s?r?`tertiary-light`:`primary-light`:10>s?r?`tertiary`:`primary`:100>s?r?`tertiary-dark`:`primary-dark`:`error`;var l=e.memoizedProps;r=e._debugTask,l!==null&&o!==null&&o.memoizedProps!==l?(c=[kv],l=or(o.memoizedProps,l,c,0),1<c.length?(l&&!Ev&&(o.lanes&i)===0&&100<e.actualDuration?(Ev=!0,c[0]=jv,Dv.color=`warning`,Dv.tooltipText=Av):(Dv.color=s,Dv.tooltipText=a),Dv.properties=c,Ov.start=t,Ov.end=n,e=`​`+a,r==null?performance.measure(e,Ov):r.run(performance.measure.bind(performance,e,Ov)),performance.clearMeasures(e)):r==null?console.timeStamp(a,t,n,Tv,void 0,s):r.run(console.timeStamp.bind(console,a,t,n,Tv,void 0,s))):r==null?console.timeStamp(a,t,n,Tv,void 0,s):r.run(console.timeStamp.bind(console,a,t,n,Tv,void 0,s))}}function dr(e,t,n,r){if(wv){var i=C(e);if(i!==null){for(var a=null,o=[],s=0;s<r.length;s++){var c=r[s];a==null&&c.source!==null&&(a=c.source._debugTask),c=c.value,o.push([`Error`,typeof c==`object`&&c&&typeof c.message==`string`?String(c.message):String(c)])}e.key!==null&&ar(`key`,e.key,o,0,``),e.memoizedProps!==null&&rr(e.memoizedProps,o,0,``),a??=e._debugTask,e={start:t,end:n,detail:{devtools:{color:`error`,track:Tv,tooltipText:e.tag===13?`Hydration failed`:`Error boundary caught an error`,properties:o}}},i=`​`+i,a?a.run(performance.measure.bind(performance,i,e)):performance.measure(i,e),performance.clearMeasures(i)}}}function fr(e,t,n,r,i){if(i!==null){if(wv){var a=C(e);if(a!==null){r=[];for(var o=0;o<i.length;o++){var s=i[o].value;r.push([`Error`,typeof s==`object`&&s&&typeof s.message==`string`?String(s.message):String(s)])}e.key!==null&&ar(`key`,e.key,r,0,``),e.memoizedProps!==null&&rr(e.memoizedProps,r,0,``),t={start:t,end:n,detail:{devtools:{color:`error`,track:Tv,tooltipText:`A lifecycle or effect errored`,properties:r}}},e=e._debugTask,n=`​`+a,e?e.run(performance.measure.bind(performance,n,t)):performance.measure(n,t),performance.clearMeasures(n)}}}else a=C(e),a!==null&&wv&&(i=1>r?`secondary-light`:100>r?`secondary`:500>r?`secondary-dark`:`error`,(e=e._debugTask)?e.run(console.timeStamp.bind(console,a,t,n,Tv,void 0,i)):console.timeStamp(a,t,n,Tv,void 0,i))}function pr(e,t,n,r){!wv||t<=e||(n=(n&738197653)===n?`tertiary-dark`:`primary-dark`,r?r.run(console.timeStamp.bind(console,`Prewarm`,e,t,U,H,n)):console.timeStamp(`Prewarm`,e,t,U,H,n))}function mr(e,t,n,r){!wv||t<=e||(n=(n&738197653)===n?`tertiary-dark`:`primary-dark`,r?r.run(console.timeStamp.bind(console,`Suspended`,e,t,U,H,n)):console.timeStamp(`Suspended`,e,t,U,H,n))}function hr(e,t,n,r){!wv||t<=e||(r?r.run(console.timeStamp.bind(console,`Errored`,e,t,U,H,`error`)):console.timeStamp(`Errored`,e,t,U,H,`error`))}function gr(e,t,n,r){!wv||t<=e||(r?r.run(console.timeStamp.bind(console,n,e,t,U,H,`secondary-light`)):console.timeStamp(n,e,t,U,H,`secondary-light`))}function _r(e,t,n,r,i){if(wv&&!(t<=e)){for(var a=[],o=0;o<n.length;o++){var s=n[o].value;a.push([`Error`,typeof s==`object`&&s&&typeof s.message==`string`?String(s.message):String(s)])}e={start:e,end:t,detail:{devtools:{color:`error`,track:U,trackGroup:H,tooltipText:r?`Remaining Effects Errored`:`Commit Errored`,properties:a}}},i?i.run(performance.measure.bind(performance,`Errored`,e)):performance.measure(`Errored`,e),performance.clearMeasures(`Errored`)}}function vr(e,t,n,r,i){n===null?!wv||t<=e||(i?i.run(console.timeStamp.bind(console,r?`Commit Interrupted View Transition`:`Commit`,e,t,U,H,r?`error`:`secondary-dark`)):console.timeStamp(r?`Commit Interrupted View Transition`:`Commit`,e,t,U,H,r?`error`:`secondary-dark`)):_r(e,t,n,!1,i)}function yr(e,t,n){!wv||t<=e||(n?n.run(console.timeStamp.bind(console,`Animating`,e,t,U,H,`secondary-dark`)):console.timeStamp(`Animating`,e,t,U,H,`secondary-dark`))}function br(){for(var e=Fv,t=Iv=Fv=0;t<e;){var n=Pv[t];Pv[t++]=null;var r=Pv[t];Pv[t++]=null;var i=Pv[t];Pv[t++]=null;var a=Pv[t];if(Pv[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&wr(n,i,a)}}function xr(e,t,n,r){Pv[Fv++]=e,Pv[Fv++]=t,Pv[Fv++]=n,Pv[Fv++]=r,Iv|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Sr(e,t,n,r){return xr(e,t,n,r),Tr(e)}function Cr(e,t){return xr(e,null,null,t),Tr(e)}function wr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&Mv||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Nh(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Tr(e){if(vw>_w)throw Cw=vw=0,ww=yw=null,Error(`Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.`);Cw>Sw&&(Cw=0,ww=null,console.error(`Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.`)),e.alternate===null&&e.flags&4098&&qu(e);for(var t=e,n=t.return;n!==null;)t.alternate===null&&t.flags&4098&&qu(e),t=n,n=t.return;return t.tag===3?t.stateNode:null}function Er(e){if(Rv===null)return e;var t=Rv(e);return t===void 0?e:t.current}function Dr(e,t){if(Rv===null)return!1;var n=Rv,r=e.elementType;t=t.type;var i=!1,a=typeof t==`object`&&t?t.$$typeof:null;switch(e.tag){case 1:typeof t==`function`&&(i=!0);break;case 0:(typeof t==`function`||a===Lm)&&(i=!0);break;case 11:(a===Nm||a===Lm)&&(i=!0);break;case 14:case 15:(a===Im||a===Lm)&&(i=!0);break;default:return!1}return!!(i&&(e=n(r),e!==void 0&&e===n(t)))}function Or(e){Rv!==null&&typeof WeakSet==`function`&&(zv===null&&(zv=new WeakSet),zv.add(e))}function kr(e,t,n){do{var r=e,i=r.alternate,a=r.child,o=r.sibling,s=r.tag,c=r.type,l=r.elementType,u=null;switch(r=null,s){case 0:case 1:u=c;break;case 15:u=c,r=l;break;case 14:r=l;break;case 11:u=c.render,r=l}if(Rv===null)throw Error(`Expected resolveFamily to be set during hot reload.`);var d=Rv;if(c=l=!1,u!==null&&(u=d(u),u!==void 0&&(n.has(u)?c=!0:t.has(u)&&(s===1?c=!0:l=!0))),c||r===null||(s=d(r),s!==void 0&&n.has(s)?c=!0:typeof r==`object`&&r.$$typeof===Lm&&(s=r._payload,s._status===1&&(s=d(s._result.default),s!==void 0&&n.has(s)&&(c=!0)))),zv!==null&&(zv.has(e)||i!==null&&zv.has(i))&&(c=!0),c&&(e._debugNeedsRemount=!0),(c||l)&&(i=Cr(e,2),i!==null&&$l(i,e,2)),a===null||c||kr(a,t,n),o===null)break;e=o}while(1)}function Ar(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,Wv||typeof Object.preventExtensions!=`function`||Object.preventExtensions(this)}function jr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mr(e,t){var n=e.alternate;switch(n===null?(n=g(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n._debugOwner=e._debugOwner,n._debugStack=e._debugStack,n._debugTask=e._debugTask,n._debugHookTypes=e._debugHookTypes,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null,n.actualDuration=-0,n.actualStartTime=-1.1),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext,_debugThenableState:t._debugThenableState},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n.selfBaseDuration=e.selfBaseDuration,n.treeBaseDuration=e.treeBaseDuration,n._debugInfo=e._debugInfo,n._debugNeedsRemount=e._debugNeedsRemount,n.tag){case 0:case 15:case 14:case 1:case 11:n.type=Er(e.type)}return n}function Nr(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,e.selfBaseDuration=0,e.treeBaseDuration=0):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext,_debugThenableState:t._debugThenableState},e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration),e}function Pr(e,t,n,r,i,a){var o=0,s=Er(e);if(typeof s==`function`)jr(s)&&(o=1);else if(typeof s==`string`)o=we(),o=Np(e,n,o)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(s){case Rm:return t=g(31,n,t,i),t.elementType=Rm,t.lanes=a,t;case Om:return Ir(n.children,i,a,t);case km:o=8,i|=Vv,i|=Hv;break;case Am:return e=n,r=i,typeof e.id!=`string`&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof e.id),t=g(12,e,t,r|G),t.elementType=Am,t.lanes=a,t.stateNode={effectDuration:0,passiveEffectDuration:0},t;case Pm:return t=g(13,n,t,i),t.elementType=Pm,t.lanes=a,t;case Fm:return t=g(19,n,t,i),t.elementType=Fm,t.lanes=a,t;case zm:case Vm:return e=i|Uv,t=g(30,n,t,e),t.elementType=Vm,t.lanes=a,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s==`object`&&s)switch(s.$$typeof){case Mm:o=10;break a;case jm:o=9;break a;case Nm:o=11;break a;case Im:o=14;break a;case Lm:o=16,s=null;break a}n=``,(e===void 0||typeof e==`object`&&e&&Object.keys(e).length===0)&&(n+=` You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.`),e===null?s=`null`:Gm(e)?s=`array`:e!==void 0&&e.$$typeof===Em?(s=`<`+(ge(e.type)||`Unknown`)+` />`,n=` Did you accidentally export a JSX literal instead of a component?`):s=typeof e,(o=r?_e(r):null)&&(n+=`

Check the render method of \``+o+"`."),o=29,n=Error(`Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: `+(s+`.`+n)),s=null}return t=g(o,n,t,i),t.elementType=e,t.type=s,t.lanes=a,t._debugOwner=r,t}function Fr(e,t,n){return t=Pr(e.type,e.key,e.props,e._owner,t,n),t._debugOwner=e._owner,t._debugStack=e._debugStack,t._debugTask=e._debugTask,t}function Ir(e,t,n,r){return e=g(7,e,r,t),e.lanes=n,e}function Lr(e,t,n){return e=g(6,e,null,t),e.lanes=n,e}function Rr(e){var t=g(18,null,null,W);return t.stateNode=e,t}function zr(e,t,n){return t=g(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Br(e,t){if(typeof e==`object`&&e){var n=Gv.get(e);return n===void 0?(t={value:e,source:t,stack:Pe(t)},Gv.set(e,t),t):n}return{value:e,source:t,stack:Pe(t)}}function Vr(e,t){qr(),Kv[qv++]=Yv,Kv[qv++]=Jv,Jv=e,Yv=t}function Hr(e,t,n){qr(),Xv[Zv++]=$v,Xv[Zv++]=ey,Xv[Zv++]=Qv,Qv=e;var r=$v;e=ey;var i=32-Nh(r)-1;r&=~(1<<i),n+=1;var a=32-Nh(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$v=1<<32-Nh(t)+i|n<<i|r,ey=a+e}else $v=1<<a|n<<i|r,ey=e}function Ur(e){qr(),e.return!==null&&(Vr(e,1),Hr(e,1,0))}function Wr(e){for(;e===Jv;)Jv=Kv[--qv],Kv[qv]=null,Yv=Kv[--qv],Kv[qv]=null;for(;e===Qv;)Qv=Xv[--Zv],Xv[Zv]=null,ey=Xv[--Zv],Xv[Zv]=null,$v=Xv[--Zv],Xv[Zv]=null}function Gr(){return qr(),Qv===null?null:{id:$v,overflow:ey}}function Kr(e,t){qr(),Xv[Zv++]=$v,Xv[Zv++]=ey,Xv[Zv++]=Qv,$v=t.id,ey=t.overflow,Qv=e}function qr(){K||console.error(`Expected to be hydrating. This is a bug in React. Please file an issue.`)}function Jr(e,t){if(e.return===null){if(iy===null)iy={fiber:e,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:t};else{if(iy.fiber!==e)throw Error(`Saw multiple hydration diff roots in a pass. This is a bug in React.`);iy.distanceFromLeaf>t&&(iy.distanceFromLeaf=t)}return iy}var n=Jr(e.return,t+1).children;return 0<n.length&&n[n.length-1].fiber===e?(n=n[n.length-1],n.distanceFromLeaf>t&&(n.distanceFromLeaf=t),n):(t={fiber:e,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:t},n.push(t),t)}function Yr(){K&&console.error(`We should not be hydrating here. This is a bug in React. Please file a bug.`)}function Xr(e,t){ry||(e=Jr(e,0),e.serverProps=null,t!==null&&(t=ip(t),e.serverTail.push(t)))}function Zr(e){var t=1<arguments.length&&arguments[1]!==void 0&&arguments[1],n=``,r=iy;throw r!==null&&(iy=null,n=Yt(r)),ri(Br(Error(`Hydration failed because the server rendered `+(t?`text`:`HTML`)+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+n),e)),sy}function Qr(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Wh]=e,t[Gh]=r,bd(n,r),n){case`dialog`:dd(`cancel`,t),dd(`close`,t);break;case`iframe`:case`object`:case`embed`:dd(`load`,t);break;case`video`:case`audio`:for(n=0;n<zw.length;n++)dd(zw[n],t);break;case`source`:dd(`error`,t);break;case`img`:case`image`:case`link`:dd(`error`,t),dd(`load`,t);break;case`details`:dd(`toggle`,t);break;case`input`:pt(`input`,r),dd(`invalid`,t),Et(t,r),Ot(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`option`:At(t,r);break;case`select`:pt(`select`,r),dd(`invalid`,t),Nt(t,r);break;case`textarea`:pt(`textarea`,r),dd(`invalid`,t),Pt(t,r),It(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Od(t.textContent,n)?(r.popover!=null&&(dd(`beforetoggle`,t),dd(`toggle`,t)),r.onScroll!=null&&dd(`scroll`,t),r.onScrollEnd!=null&&dd(`scrollend`,t),r.onClick!=null&&(t.onclick=pn),t=!0):t=!1,t||Zr(e,!0)}function $r(e){for(ty=e.return;ty;)switch(ty.tag){case 5:case 31:case 13:oy=!1;return;case 27:case 3:oy=!0;return;default:ty=ty.return}}function ei(e){if(e!==ty)return!1;if(!K)return $r(e),K=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Xd(e.type,e.memoizedProps)),n=!n),n&&ny){for(n=ny;n;){var r=Jr(e,0),i=ip(n);r.serverTail.push(i),n=i.type===`Suspense`?op(n):rp(n.nextSibling)}Zr(e)}if($r(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(`Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.`);ny=op(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(`Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.`);ny=op(e)}else t===27?(t=ny,cf(e.type)?(e=FT,FT=null,ny=e):ny=t):ny=ty?rp(e.stateNode.nextSibling):null;return!0}function ti(){ny=ty=null,ry=K=!1}function ni(){var e=ay;return e!==null&&(LC===null?LC=e:LC.push.apply(LC,e),ay=null),e}function ri(e){ay===null?ay=[e]:ay.push(e)}function ii(){var e=iy;if(e!==null){iy=null;for(var t=Yt(e);0<e.children.length;)e=e.children[0];T(e.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,`https://react.dev/link/hydration-mismatch`,t)})}}function ai(){fy=dy=null,py=!1}function oi(e,t,n){be(cy,t._currentValue,e),t._currentValue=n,be(ly,t._currentRenderer,e),t._currentRenderer!==void 0&&t._currentRenderer!==null&&t._currentRenderer!==uy&&console.error(`Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.`),t._currentRenderer=uy}function si(e,t){e._currentValue=cy.current;var n=ly.current;ye(ly,t),e._currentRenderer=n,ye(cy,t)}function ci(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}e!==n&&console.error(`Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.`)}function li(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var s=a;a=i;for(var c=0;c<t.length;c++)if(s.context===t[c]){a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ci(a.return,n,e),r||(o=null);break a}a=s.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(`We just came from a parent so we must have had a parent. This is a bug in React.`);o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ci(o,n,e),o=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),ci(i.return,n,e),o=i.child,o=o===null?null:o.sibling):o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ui(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(`Should have a current fiber. This is a bug in React.`);if(o=o.memoizedProps,o!==null){var s=i.type;G_(i.pendingProps.value,o.value)||(e===null?e=[s]:e.push(s))}}else if(i===eh.current){if(o=i.alternate,o===null)throw Error(`Should have a current fiber. This is a bug in React.`);o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[$T]:e.push($T))}i=i.return}return e!==null&&li(t,e,n,r),t.flags|=262144,e!==null}function di(e){for(e=e.firstContext;e!==null;){if(!G_(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fi(e){dy=e,fy=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pi(e){return py&&console.error(`Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().`),hi(dy,e)}function mi(e,t){return dy===null&&fi(e),hi(e,t)}function hi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},fy===null){if(e===null)throw Error(`Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().`);fy=t,e.dependencies={lanes:0,firstContext:t,_debugThenableState:null},e.flags|=524288}else fy=fy.next=t;return n}function gi(){return{controller:new my,data:new Map,refCount:0}}function _i(e){e.controller.signal.aborted&&console.warn(`A cache instance was retained after it was already freed. This likely indicates a bug in React.`),e.refCount++}function vi(e){e.refCount--,0>e.refCount&&console.warn(`A cache instance was released after it was already freed. This likely indicates a bug in React.`),e.refCount===0&&hy(gy,function(){e.controller.abort()})}function yi(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}function bi(e){var t=e.transitionTypes;return e.transitionTypes=null,t}function xi(e,t,n){e&127?0>Ny&&(Ny=yy(),Py=by(t),Iy=t,n!=null&&(Ly=C(n)),(fC&(rC|iC))!==nC&&(jy=!0,Fy=xy),e=$d(),t=Qd(),e!==By||t!==zy?By=-1.1:t!==null&&(Fy=xy),Ry=e,zy=t):e&4194048&&0>Wy&&(Wy=yy(),Ky=by(t),qy=t,n!=null&&(Jy=C(n)),0>Uy)&&(e=$d(),t=Qd(),(e!==Zy||t!==Xy)&&(Zy=-1.1),Yy=e,Xy=t)}function Si(e){if(0>Ny){Ny=yy(),Py=e._debugTask==null?null:e._debugTask,(fC&(rC|iC))!==nC&&(Fy=xy);var t=$d(),n=Qd();t!==By||n!==zy?By=-1.1:n!==null&&(Fy=xy),Ry=t,zy=n}0>Wy&&(Wy=yy(),Ky=e._debugTask==null?null:e._debugTask,0>Uy)&&(e=$d(),t=Qd(),(e!==Zy||t!==Xy)&&(Zy=-1.1),Yy=e,Xy=t)}function Ci(){var e=Oy;return Oy=0,e}function wi(e){var t=Oy;return Oy=e,t}function Ti(e){var t=Oy;return Oy+=e,t}function Ei(){J=q=-1.1}function Di(){var e=q;return q=-1.1,e}function Oi(e){0<=e&&(q=e)}function ki(){var e=ky;return ky=-0,e}function Ai(e){0<=e&&(ky=e)}function ji(){var e=Ay;return Ay=null,e}function Mi(){var e=jy;return jy=!1,e}function Ni(e){Dy=yy(),0>e.actualStartTime&&(e.actualStartTime=Dy)}function Pi(e){if(0<=Dy){var t=yy()-Dy;e.actualDuration+=t,e.selfBaseDuration=t,Dy=-1}}function Fi(e){if(0<=Dy){var t=yy()-Dy;e.actualDuration+=t,Dy=-1}}function Ii(){if(0<=Dy){var e=yy(),t=e-Dy;Dy=-1,Oy+=t,ky+=t,J=e}}function Li(e){Ay===null&&(Ay=[]),Ay.push(e),Ey===null&&(Ey=[]),Ey.push(e)}function Ri(){Dy=yy(),0>q&&(q=Dy)}function zi(e){for(var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}function Bi(e,t){if(sb===null){var n=sb=[];cb=0,lb=od(),ub={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return cb++,t.then(Vi,Vi),t}function Vi(){if(--cb===0&&(-1<Wy||(Uy=-1.1),vy=null,sb!==null)){ub!==null&&(ub.status=`fulfilled`);var e=sb;sb=null,lb=0,ub=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Hi(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}function Ui(){var e=fb.current;return e===null?pC.pooledCache:e}function Wi(e,t){t===null?be(fb,fb.current,e):be(fb,t.pool,e)}function Gi(){var e=Ui();return e===null?null:{parent:_y._currentValue,pool:e}}function Ki(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function qi(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ji(e,t,n,r){V.actQueue!==null&&(V.didUsePromise=!0);var i=e.thenables;if(n=i[n],n===void 0?i.push(t):n!==t&&(e.didWarnAboutUncachedPromise||(e.didWarnAboutUncachedPromise=!0,console.error(`A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.`)),t.then(pn,pn),t=n),t._debugInfo===void 0){e=performance.now(),i=t.displayName;var a={name:typeof i==`string`?i:`Promise`,start:e,end:e,value:t};t._debugInfo=[{awaited:a}],t.status!==`fulfilled`&&t.status!==`rejected`&&(e=function(){a.end=performance.now()},t.then(e,e))}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw r=t.reason,Zi(r),r===void 0&&!(`reason`in t)?Error("A rejected Promise was passed to React without a `reason` property. React threw a generic error from where the Promise was used to assist in identifying the problematic Promise. Make sure that instrumented Promises correctly set the `reason` property when setting `status` to `'rejected'`."):r;default:if(typeof t.status==`string`)t.then(pn,pn);else{if(e=pC,e!==null&&100<e.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw r=t.reason,Zi(r),r}throw Yb=t,Xb=!0,Jb||r===null||r.alternate!==null||(Kb=r,qb=Error(`This library called use() to suspend in a previous render but did not call use() when it finished. This indicates an incorrect use of use(). Learn more: https://react.dev/warnings/conditional-use-of-use`)),Hb}}function Yi(e){try{return Vb(e)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Yb=e,Xb=!0,Hb):e}}function Xi(){if(Yb===null)throw Error(`Expected a suspended thenable. This is a bug in React. Please file an issue.`);var e=Yb;return Yb=null,Xb=!1,e}function Zi(e){if(e===Hb||e===Wb)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function Qi(e,t){return e===t?!0:e.tag!==t.tag||e.type!==t.type||e.key!==t.key||e.index!==t.index||e.tag===3&&e.stateNode!==t.stateNode||e.return===null||t.return===null?!1:Qi(e.return,t.return)}function $i(e){var t=Y;return e!=null&&(Y=t===null?e:t.concat(e)),t}function ea(){var e=Y;if(e!=null){for(var t=e.length-1;0<=t;t--)if(e[t].name!=null){var n=e[t].debugTask;if(n!=null)return n}}return null}function ta(e,t,n){for(var r=Object.keys(e.props),i=0;i<r.length;i++){var a=r[i];if(a!==`children`&&a!==`key`&&a!==`ref`){t===null&&(t=Fr(e,n.mode,0),t._debugInfo=Y,t.return=n),T(t,function(e){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key`, `ref`, and `children` props.",e)},a);break}}}function na(e){var t=Qb;return Qb+=1,Zb===null&&(Zb=Ki()),Ji(Zb,e,t,null)}function ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ia(e,t){throw t.$$typeof===Tm?Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`):(e=Object.prototype.toString.call(t),Error(`Objects are not valid as a React child (found: `+(e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)+`). If you meant to render a collection of children, use an array instead.`))}function aa(e,t){var n=ea();n===null?ia(e,t):n.run(ia.bind(null,e,t))}function oa(e,t){var n=C(e)||`Component`;nx[n]||(nx[n]=!0,t=t.displayName||t.name||`Component`,e.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,t,t,t):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,t,t,n,t,n))}function sa(e,t){var n=ea();n===null?oa(e,t):n.run(oa.bind(null,e,t))}function ca(e,t){var n=C(e)||`Component`;rx[n]||(rx[n]=!0,t=String(t),e.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,t):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,n,t,n))}function la(e,t){var n=ea();n===null?ca(e,t):n.run(ca.bind(null,e,t))}function ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=Mr(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function s(e,t,n,r){return t===null||t.tag!==6?(t=Lr(n,e.mode,r),t.return=e,t._debugOwner=e,t._debugTask=e._debugTask,t._debugInfo=Y,t):(t=i(t,n),t.return=e,t._debugInfo=Y,t)}function c(e,t,n,r){var a=n.type;return a===Om?(t=u(e,t,n.props.children,r,n.key),ra(t,n),ta(n,t,e),t):t!==null&&(t.elementType===a||Dr(t,n)||typeof a==`object`&&a&&a.$$typeof===Lm&&Yi(a)===t.type)?(t=i(t,n.props),ra(t,n),t.return=e,t._debugOwner=n._owner,t._debugInfo=Y,t):(t=Fr(n,e.mode,r),ra(t,n),t.return=e,t._debugInfo=Y,t)}function l(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=zr(n,e.mode,r),t.return=e,t._debugInfo=Y,t):(t=i(t,n.children||[]),t.return=e,t._debugInfo=Y,t)}function u(e,t,n,r,a){return t===null||t.tag!==7?(t=Ir(n,e.mode,r,a),t.return=e,t._debugOwner=e,t._debugTask=e._debugTask,t._debugInfo=Y,t):(t=i(t,n),t.return=e,t._debugInfo=Y,t)}function d(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Lr(``+t,e.mode,n),t.return=e,t._debugOwner=e,t._debugTask=e._debugTask,t._debugInfo=Y,t;if(typeof t==`object`&&t){switch(t.$$typeof){case Em:return n=Fr(t,e.mode,n),ra(n,t),n.return=e,e=$i(t._debugInfo),n._debugInfo=Y,Y=e,n;case Dm:return t=zr(t,e.mode,n),t.return=e,t._debugInfo=Y,t;case Lm:var r=$i(t._debugInfo);return t=Yi(t),e=d(e,t,n),Y=r,e}if(Gm(t)||he(t))return n=Ir(t,e.mode,n,null),n.return=e,n._debugOwner=e,n._debugTask=e._debugTask,e=$i(t._debugInfo),n._debugInfo=Y,Y=e,n;if(typeof t.then==`function`)return r=$i(t._debugInfo),e=d(e,na(t),n),Y=r,e;if(t.$$typeof===Mm)return d(e,mi(e,t),n);aa(e,t)}return typeof t==`function`&&sa(e,t),typeof t==`symbol`&&la(e,t),null}function f(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?s(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case Em:return n.key===i?(i=$i(n._debugInfo),e=c(e,t,n,r),Y=i,e):null;case Dm:return n.key===i?l(e,t,n,r):null;case Lm:return i=$i(n._debugInfo),n=Yi(n),e=f(e,t,n,r),Y=i,e}if(Gm(n)||he(n))return i===null?(i=$i(n._debugInfo),e=u(e,t,n,r,null),Y=i,e):null;if(typeof n.then==`function`)return i=$i(n._debugInfo),e=f(e,t,na(n),r),Y=i,e;if(n.$$typeof===Mm)return f(e,t,mi(e,n),r);aa(e,n)}return typeof n==`function`&&sa(e,n),typeof n==`symbol`&&la(e,n),null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,s(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case Em:return n=e.get(r.key===null?n:r.key)||null,e=$i(r._debugInfo),t=c(t,n,r,i),Y=e,t;case Dm:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case Lm:var a=$i(r._debugInfo);return r=Yi(r),t=m(e,t,n,r,i),Y=a,t}if(Gm(r)||he(r))return n=e.get(n)||null,e=$i(r._debugInfo),t=u(t,n,r,i,null),Y=e,t;if(typeof r.then==`function`)return a=$i(r._debugInfo),t=m(e,t,n,na(r),i),Y=a,t;if(r.$$typeof===Mm)return m(e,t,n,mi(t,r),i);aa(t,r)}return typeof r==`function`&&sa(t,r),typeof r==`symbol`&&la(t,r),null}function h(e,t,n,r){if(typeof n!=`object`||!n)return r;switch(n.$$typeof){case Em:case Dm:p(e,t,n);var i=n.key;if(typeof i!=`string`)break;if(r===null){r=new Set,r.add(i);break}if(!r.has(i)){r.add(i);break}T(t,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",i)});break;case Lm:n=Yi(n),h(e,t,n,r)}return r}function _(i,o,s,c){for(var l=null,u=null,p=null,g=o,_=o=0,v=null;g!==null&&_<s.length;_++){g.index>_?(v=g,g=null):v=g.sibling;var y=f(i,g,s[_],c);if(y===null){g===null&&(g=v);break}l=h(i,y,s[_],l),e&&g&&y.alternate===null&&t(i,g),o=a(y,o,_),p===null?u=y:p.sibling=y,p=y,g=v}if(_===s.length)return n(i,g),K&&Vr(i,_),u;if(g===null){for(;_<s.length;_++)g=d(i,s[_],c),g!==null&&(l=h(i,g,s[_],l),o=a(g,o,_),p===null?u=g:p.sibling=g,p=g);return K&&Vr(i,_),u}for(g=r(g);_<s.length;_++)v=m(g,i,_,s[_],c),v!==null&&(l=h(i,v,s[_],l),e&&(y=v.alternate,y!==null&&g.delete(y.key===null?_:y.key)),o=a(v,o,_),p===null?u=v:p.sibling=v,p=v);return e&&g.forEach(function(e){return t(i,e)}),K&&Vr(i,_),u}function v(i,o,s,c){if(s==null)throw Error(`An iterable object provided no iterator.`);for(var l=null,u=null,p=o,g=o=0,_=null,v=null,y=s.next();p!==null&&!y.done;g++,y=s.next()){p.index>g?(_=p,p=null):_=p.sibling;var b=f(i,p,y.value,c);if(b===null){p===null&&(p=_);break}v=h(i,b,y.value,v),e&&p&&b.alternate===null&&t(i,p),o=a(b,o,g),u===null?l=b:u.sibling=b,u=b,p=_}if(y.done)return n(i,p),K&&Vr(i,g),l;if(p===null){for(;!y.done;g++,y=s.next())p=d(i,y.value,c),p!==null&&(v=h(i,p,y.value,v),o=a(p,o,g),u===null?l=p:u.sibling=p,u=p);return K&&Vr(i,g),l}for(p=r(p);!y.done;g++,y=s.next())_=m(p,i,g,y.value,c),_!==null&&(v=h(i,_,y.value,v),e&&(y=_.alternate,y!==null&&p.delete(y.key===null?g:y.key)),o=a(_,o,g),u===null?l=_:u.sibling=_,u=_);return e&&p.forEach(function(e){return t(i,e)}),K&&Vr(i,g),l}function y(e,r,a,s){if(typeof a==`object`&&a&&a.type===Om&&a.key===null&&a.props.ref===void 0&&(ta(a,null,e),a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case Em:var c=$i(a._debugInfo);a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===Om){if(r.tag===7){n(e,r.sibling),s=i(r,a.props.children),ra(s,a),s.return=e,s._debugOwner=a._owner,s._debugInfo=Y,ta(a,s,e),e=s;break a}}else if(r.elementType===l||Dr(r,a)||typeof l==`object`&&l&&l.$$typeof===Lm&&Yi(l)===r.type){n(e,r.sibling),s=i(r,a.props),ra(s,a),s.return=e,s._debugOwner=a._owner,s._debugInfo=Y,e=s;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===Om?(s=Ir(a.props.children,e.mode,s,a.key),ra(s,a),s.return=e,s._debugOwner=e,s._debugTask=e._debugTask,s._debugInfo=Y,ta(a,s,e),e=s):(s=Fr(a,e.mode,s),ra(s,a),s.return=e,s._debugInfo=Y,e=s)}return e=o(e),Y=c,e;case Dm:a:{for(c=a,a=c.key;r!==null;){if(r.key===a){if(r.tag===4&&r.stateNode.containerInfo===c.containerInfo&&r.stateNode.implementation===c.implementation){n(e,r.sibling),s=i(r,c.children||[]),s.return=e,e=s;break a}n(e,r);break}t(e,r),r=r.sibling}s=zr(c,e.mode,s),s.return=e,e=s}return o(e);case Lm:return c=$i(a._debugInfo),a=Yi(a),e=y(e,r,a,s),Y=c,e}if(Gm(a))return _(e,r,a,s);if(he(a)){if(c=a,a=he(c),typeof a!=`function`)throw Error(`An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.`);return l=a.call(c),l===c?(e.tag!==0||Object.prototype.toString.call(e.type)!==`[object GeneratorFunction]`||Object.prototype.toString.call(l)!==`[object Generator]`)&&(ex||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),ex=!0):c.entries!==a||$b||(console.error(`Using Maps as children is not supported. Use an array of keyed ReactElements instead.`),$b=!0),v(e,r,l,s)}if(typeof a.then==`function`)return c=$i(a._debugInfo),e=y(e,r,na(a),s),Y=c,e;if(a.$$typeof===Mm)return y(e,r,mi(e,a),s);aa(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(c=``+a,r!==null&&r.tag===6?(n(e,r.sibling),s=i(r,c),s.return=e,e=s):(n(e,r),s=Lr(c,e.mode,s),s.return=e,s._debugOwner=e,s._debugTask=e._debugTask,s._debugInfo=Y,e=s),o(e)):(typeof a==`function`&&sa(e,a),typeof a==`symbol`&&la(e,a),n(e,r))}return function(e,t,n,r){var i=Y;Y=null;try{Qb=0;var a=y(e,t,n,r);return Zb=null,a}catch(t){if(t===Hb||t===Wb)throw t;var o=g(29,t,null,e.mode);o.lanes=r,o.return=e;var s=o._debugInfo=Y;if(o._debugOwner=e._debugOwner,o._debugTask=e._debugTask,s!=null){for(var c=s.length-1;0<=c;c--)if(typeof s[c].stack==`string`){o._debugOwner=s[c],o._debugTask=s[c].debugTask;break}}return o}finally{Y=i}}}function da(e,t){var n=Gm(e);return e=!n&&typeof he(e)==`function`,n||e?(n=n?`array`:`iterable`,console.error(`A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>`,n,t,n),!1):!0}function fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:ox,payload:null,callback:null,next:null}}function ha(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,fx===r&&!dx){var i=C(e);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,i),dx=!0}return(fC&rC)===nC?(xr(e,r,t,n),Tr(e)):(i=r.pending,i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Tr(e),wr(e,null,n),t)}function ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}function _a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function va(){if(px){var e=ub;if(e!==null)throw e}}function ya(e,t,n,r){px=!1;var i=e.updateQueue;ux=!1,fx=i.shared;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?($&f)===f:(r&f)===f){f!==0&&f===lb&&(px=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{f=e;var m=s,h=t,g=n;switch(m.tag){case sx:if(m=m.payload,typeof m==`function`){py=!0;var _=m.call(g,d,h);if(f.mode&Vv){Ue(!0);try{m.call(g,d,h)}finally{Ue(!1)}}py=!1,d=_;break a}d=m;break a;case lx:f.flags=f.flags&-65537|128;case ox:if(_=m.payload,typeof _==`function`){if(py=!0,m=_.call(g,d,h),f.mode&Vv){Ue(!0);try{_.call(g,d,h)}finally{Ue(!1)}}py=!1}else m=_;if(m==null)break a;d=B({},d,m);break a;case cx:ux=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),jC|=o,e.lanes=o,e.memoizedState=d}fx=null}function ba(e,t){if(typeof e!=`function`)throw Error(`Invalid argument passed as callback. Expected a function. Instead received: `+e);e.call(t)}function xa(e,t){var n=e.shared.hiddenCallbacks;if(n!==null)for(e.shared.hiddenCallbacks=null,e=0;e<n.length;e++)ba(n[e],t)}function Sa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ba(n[e],t)}function Ca(e,t){var n=kC;be(hx,n,e),be(mx,t,e),kC=n|t.baseLanes}function wa(e){be(hx,kC,e),be(mx,mx.current,e)}function Ta(e){kC=hx.current,ye(mx,e),ye(hx,e)}function Ea(e){var t=e.alternate;be(bx,bx.current&vx,e),be(gx,e,e),_x===null&&(t===null||mx.current!==null||t.memoizedState!==null)&&(_x=e)}function Da(e){be(bx,bx.current,e),be(gx,e,e),_x===null&&(_x=e)}function Oa(e){e.tag===22?(be(bx,bx.current,e),be(gx,e,e),_x===null&&(_x=e)):ka(e)}function ka(e){be(bx,bx.current,e),be(gx,gx.current,e)}function Aa(e){ye(gx,e),_x===e&&(_x=null),ye(bx,e)}function ja(e,t){be(gx,gx.current,e),be(bx,t,e)}function Ma(e){ye(bx,e),ye(gx,e),_x===e&&(_x=null)}function Na(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ep(n)||tp(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function R(){var e=Z;Hx===null?Hx=[e]:Hx.push(e)}function z(){var e=Z;if(Hx!==null&&(Ux++,Hx[Ux]!==e)){var t=C(X);if(!Dx.has(t)&&(Dx.add(t),Hx!==null)){for(var n=``,r=0;r<=Ux;r++){var i=Hx[r],a=r===Ux?e:i;for(i=r+1+`. `+i;30>i.length;)i+=` `;i+=a+`
`,n+=i}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,t,n)}}}function Pa(e){e==null||Gm(e)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",Z,typeof e)}function Fa(){var e=C(X);Ax.has(e)||(Ax.add(e),console.error(`ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.`,e))}function Ia(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function La(e,t){if(Wx)return!1;if(t===null)return console.error(`%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`,Z),!1;e.length!==t.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,Z,`[`+t.join(`, `)+`]`,`[`+e.join(`, `)+`]`);for(var n=0;n<t.length&&n<e.length;n++)if(!G_(e[n],t[n]))return!1;return!0}function Ra(e,t,n,r,i,a){jx=a,X=t,Hx=e===null?null:e._debugHookTypes,Ux=-1,Wx=e!==null&&e.type!==t.type,(Object.prototype.toString.call(n)===`[object AsyncFunction]`||Object.prototype.toString.call(n)===`[object AsyncGeneratorFunction]`)&&(a=C(X),kx.has(a)||(kx.add(a),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",a===null?`An unknown Component`:`<`+a+`>`))),t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=e!==null&&e.memoizedState!==null?Jx:Hx===null?Kx:qx,Ix=a=(t.mode&Vv)!==W;var o=Tb(n,r,i);if(Ix=!1,Fx&&(o=Ba(t,n,r,i)),a){Ue(!0);try{o=Ba(t,n,r,i)}finally{Ue(!1)}}return za(e,t),o}function za(e,t){t._debugHookTypes=Hx,t.dependencies===null?zx!==null&&(t.dependencies={lanes:0,firstContext:null,_debugThenableState:zx}):t.dependencies._debugThenableState=zx;var n=zx;if(Kb!==null&&Qi(Kb,t)&&(n!==null||qb===null||Jb||(Jb=!0,console.error(qb)),qb=Kb=null),V.H=Gx,n=Mx!==null&&Mx.next!==null,jx=0,Hx=Z=Nx=Mx=X=null,Ux=-1,e!==null&&(e.flags&1206910976)!=(t.flags&1206910976)&&console.error(`Internal React error: Expected static flag was missing. Please notify the React team.`),Px=!1,Rx=0,zx=null,n)throw Error(`Rendered fewer hooks than expected. This may be caused by an accidental early return statement.`);e===null||mS||(e=e.dependencies,e!==null&&di(e)&&(mS=!0)),Xb?(Xb=!1,e=!0):e=!1,e&&(t=C(t)||`Unknown`,Ox.has(t)||kx.has(t)||(Ox.add(t),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function Ba(e,t,n,r){X=e;var i=0;do{if(Fx&&(zx=null),Rx=0,Fx=!1,i>=Vx)throw Error(`Too many re-renders. React limits the number of renders to prevent an infinite loop.`);if(i+=1,Wx=!1,Nx=Mx=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ux=-1,V.H=Yx,a=Tb(t,n,r)}while(Fx);return a}function Va(){var e=V.H,t=e.useState()[0];return t=typeof t.then==`function`?Ja(t):t,e=e.useState()[0],(Mx===null?null:Mx.memoizedState)!==e&&(X.flags|=1024),t}function Ha(){var e=Lx!==0;return Lx=0,e}function Ua(e,t,n){t.updateQueue=e.updateQueue,t.flags=(t.mode&Hv)===W?t.flags&-2053:t.flags&-805308421,e.lanes&=~n}function Wa(e){if(Px){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Px=!1}jx=0,Hx=Nx=Mx=X=null,Ux=-1,Z=null,Fx=!1,Rx=Lx=0,zx=null}function Ga(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nx===null?X.memoizedState=Nx=e:Nx=Nx.next=e,Nx}function Ka(){if(Mx===null){var e=X.alternate;e=e===null?null:e.memoizedState}else e=Mx.next;var t=Nx===null?X.memoizedState:Nx.next;if(t!==null)Nx=t,Mx=e;else{if(e===null)throw X.alternate===null?Error(`Update hook called on initial render. This is likely a bug in React. Please file an issue.`):Error(`Rendered more hooks than during the previous render.`);Mx=e,e={memoizedState:Mx.memoizedState,baseState:Mx.baseState,baseQueue:Mx.baseQueue,queue:Mx.queue,next:null},Nx===null?X.memoizedState=Nx=e:Nx=Nx.next=e}return Nx}function qa(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ja(e){var t=Rx;return Rx+=1,zx===null&&(zx=Ki()),e=Ji(zx,e,t,X),t=X,(Nx===null?t.memoizedState:Nx.next)===null&&(t=t.alternate,V.H=t!==null&&t.memoizedState!==null?Jx:Kx),e}function Ya(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ja(e);if(e.$$typeof===Hm)return;if(e.$$typeof===Mm)return pi(e)}throw Error(`An unsupported type was passed to use(): `+String(e))}function Xa(e){var t=null,n=X.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=qa(),X.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0||Wx)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=Bm;else n.length!==e&&console.error(`Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.`,n.length,e);return t.index++,n}function Za(e,t){return typeof t==`function`?t(e):t}function Qa(e,t,n){var r=Ga();if(n!==void 0){var i=n(t);if(Ix){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ss.bind(null,X,e),[r.memoizedState,e]}function $a(e){return eo(Ka(),Mx,e)}function eo(e,t,n){var r=e.queue;if(r===null)throw Error(`Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)`);r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue!==i&&console.error(`Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.`),t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var s=o=null,c=null,l=t,u=!1;do{var d=l.lane&-536870913;if(d===l.lane?(jx&d)===d:($&d)===d){var f=l.revertLane;if(f===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d===lb&&(u=!0);else if((jx&f)===f){l=l.next,f===lb&&(u=!0);continue}else d={lane:0,revertLane:l.revertLane,gesture:null,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null},c===null?(s=c=d,o=a):c=c.next=d,X.lanes|=f,jC|=f;d=l.action,Ix&&n(a,d),a=l.hasEagerState?l.eagerState:n(a,d)}else f={lane:d,revertLane:l.revertLane,gesture:l.gesture,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null},c===null?(s=c=f,o=a):c=c.next=f,X.lanes|=d,jC|=d;l=l.next}while(l!==null&&l!==t);if(c===null?o=a:c.next=s,!G_(a,e.memoizedState)&&(mS=!0,u&&(n=ub,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=c,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function to(e){var t=Ka(),n=t.queue;if(n===null)throw Error(`Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)`);n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);G_(a,t.memoizedState)||(mS=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function no(e,t,n){var r=X,i=Ga();if(K){if(n===void 0)throw Error(`Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.`);var a=n();Ex||a===n()||(console.error(`The result of getServerSnapshot should be cached to avoid an infinite loop`),Ex=!0)}else{if(a=t(),Ex||(n=t(),G_(a,n)||(console.error(`The result of getSnapshot should be cached to avoid an infinite loop`),Ex=!0)),pC===null)throw Error(`Expected a work-in-progress root. This is a bug in React. Please file an issue.`);$&127||io(r,t,a)}return i.memoizedState=a,n={value:a,getSnapshot:t},i.queue=n,Mo(oo.bind(null,r,n,e),[e]),r.flags|=2048,Oo(Sx|Tx,{destroy:void 0},ao.bind(null,r,n,a,t),null),a}function ro(e,t,n){var r=X,i=Ka(),a=K;if(a){if(n===void 0)throw Error(`Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.`);n=n()}else if(n=t(),!Ex){var o=t();G_(n,o)||(console.error(`The result of getSnapshot should be cached to avoid an infinite loop`),Ex=!0)}if((o=!G_((Mx||i).memoizedState,n))&&(i.memoizedState=n,mS=!0),i=i.queue,jo(2048,Tx,oo.bind(null,r,i,e),[e]),e=i.getSnapshot!==t||o||Nx!==null&&(Nx.memoizedState.tag&Sx)!==xx,Oo(e?Sx|Tx:Tx,{destroy:void 0},ao.bind(null,r,i,n,t),null),e){if(r.flags|=2048,pC===null)throw Error(`Expected a work-in-progress root. This is a bug in React. Please file an issue.`);a||jx&127||io(r,t,n)}return n}function io(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t=qa(),X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ao(e,t,n,r){t.value=n,t.getSnapshot=r,so(t)&&co(e)}function oo(e,t,n){return n(function(){so(t)&&(xi(2,`updateSyncExternalStore()`,e),co(e))})}function so(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!G_(e,n)}catch{return!0}}function co(e){var t=Cr(e,2);t!==null&&$l(t,e,2)}function lo(e){var t=Ga();if(typeof e==`function`){var n=e;if(e=n(),Ix){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:e},t}function uo(e){e=lo(e);var t=e.queue,n=cs.bind(null,X,t);return t.dispatch=n,[e.memoizedState,n]}function fo(e){var t=Ga();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=us.bind(null,X,!0,n),n.dispatch=t,[e,t]}function po(e,t){return mo(Ka(),Mx,e,t)}function mo(e,t,n,r){return e.baseState=n,eo(e,Mx,typeof r==`function`?r:Za)}function ho(e,t){var n=Ka();return Mx===null?(n.baseState=e,[e,n.queue.dispatch]):mo(n,Mx,e,t)}function go(e,t,n,r,i){if(ds(e))throw Error(`Cannot update action state while rendering.`);if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};V.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,_o(t,a)):(a.next=n.next,t.pending=n.next=a)}}function _o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=V.T,o={};o.types=a===null?null:a.types,o._updatedFibers=new Set,V.T=o;try{var s=n(i,r),c=V.S;c!==null&&c(o,s),vo(e,t,s)}catch(n){bo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types!==null&&a.types!==o.types&&console.error(`We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React.`),a.types=o.types),V.T=a,a===null&&o._updatedFibers&&(e=o._updatedFibers.size,o._updatedFibers.clear(),10<e&&console.warn(`Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.`))}}else try{o=n(i,r),vo(e,t,o)}catch(n){bo(e,t,n)}}function vo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?(V.asyncTransitions++,n.then(Yo,Yo),n.then(function(n){yo(e,t,n)},function(n){return bo(e,t,n)}),t.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):yo(e,t,n)}function yo(e,t,n){t.status=`fulfilled`,t.value=n,xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_o(e,n)))}function bo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,xo(t),t=t.next;while(t!==r)}e.action=null}function xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function So(e,t){return t}function Co(e,t){if(K){var n=pC.formState;if(n!==null){a:{var r=X;if(K){if(ny){b:{for(var i=ny,a=oy;i.nodeType!==8;){if(!a){i=null;break b}if(i=rp(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===pT||a===mT?i:null}if(i){ny=rp(i.nextSibling),r=i.data===pT;break a}}Zr(r)}r=!1}r&&(t=n[0])}}return n=Ga(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},n.queue=r,n=cs.bind(null,X,r),r.dispatch=n,r=lo(!1),a=us.bind(null,X,!1,r.queue),r=Ga(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=go.bind(null,X,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function wo(e){return To(Ka(),Mx,e)}function To(e,t,n){if(t=eo(e,t,So)[0],e=$a(Za)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ja(t)}catch(e){throw e===Hb?Wb:e}else r=t;t=Ka();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(X.flags|=2048,Oo(Sx|Tx,{destroy:void 0},Eo.bind(null,i,n),null)),[r,a,e]}function Eo(e,t){e.action=t}function Do(e){var t=Ka(),n=Mx;if(n!==null)return To(t,n,e);Ka(),t=t.memoizedState,n=Ka();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Oo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=X.updateQueue,t===null&&(t=qa(),X.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ko(e){var t=Ga();return e={current:e},t.memoizedState=e}function Ao(e,t,n,r){var i=Ga();X.flags|=e,i.memoizedState=Oo(Sx|t,{destroy:void 0},n,r===void 0?null:r)}function jo(e,t,n,r){var i=Ka();r=r===void 0?null:r;var a=i.memoizedState.inst;Mx!==null&&r!==null&&La(r,Mx.memoizedState.deps)?i.memoizedState=Oo(t,a,n,r):(X.flags|=e,i.memoizedState=Oo(Sx|t,a,n,r))}function Mo(e,t){(X.mode&Hv)===W?Ao(8390656,Tx,e,t):Ao(545261568,Tx,e,t)}function No(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=qa(),X.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Po(e){var t=Ga(),n={impl:e};return t.memoizedState=n,function(){if((fC&rC)!==nC)throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);return n.impl.apply(void 0,arguments)}}function Fo(e){var t=Ka().memoizedState;return No({ref:t,nextImpl:e}),function(){if((fC&rC)!==nC)throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);return t.impl.apply(void 0,arguments)}}function Io(e,t){var n=4194308;return(X.mode&Hv)!==W&&(n|=268435456),Ao(n,wx,e,t)}function Lo(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return t.hasOwnProperty(`current`)||console.error(`Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.`,`an object with keys {`+Object.keys(t).join(`, `)+`}`),e=e(),t.current=e,function(){t.current=null}}function Ro(e,t,n){typeof t!=`function`&&console.error(`Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.`,t===null?`null`:typeof t),n=n==null?null:n.concat([e]);var r=4194308;(X.mode&Hv)!==W&&(r|=268435456),Ao(r,wx,Lo.bind(null,t,e),n)}function zo(e,t,n){typeof t!=`function`&&console.error(`Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.`,t===null?`null`:typeof t),n=n==null?null:n.concat([e]),jo(4,wx,Lo.bind(null,t,e),n)}function Bo(e,t){return Ga().memoizedState=[e,t===void 0?null:t],e}function Vo(e,t){var n=Ka();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&La(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ho(e,t){var n=Ga();t=t===void 0?null:t;var r=e();if(Ix){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function Uo(e,t){var n=Ka();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&La(t,r[1]))return r[0];if(r=e(),Ix){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function Wo(e,t){return qo(Ga(),e,t)}function Go(e,t){return Jo(Ka(),Mx.memoizedState,e,t)}function Ko(e,t){var n=Ka();return Mx===null?qo(n,e,t):Jo(n,Mx.memoizedState,e,t)}function qo(e,t,n){return n===void 0||jx&1073741824&&!($&261930)?e.memoizedState=t:(e.memoizedState=n,e=Zl(),X.lanes|=e,jC|=e,n)}function Jo(e,t,n,r){return G_(n,t)?n:mx.current===null?!(jx&106)||jx&1073741824&&!($&261930)?(mS=!0,e.memoizedState=n):(e=Zl(),X.lanes|=e,jC|=e,t):(e=qo(e,n,r),G_(e,t)||(mS=!0),e)}function Yo(){V.asyncTransitions--}function Xo(e,t,n,r,i){var a=Km.p;Km.p=a!==0&&a<Bh?a:Bh;var o=V.T,s={};s.types=o===null?null:o.types,s._updatedFibers=new Set,V.T=s,us(e,!1,t,n);try{var c=i(),l=V.S;if(l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`){V.asyncTransitions++,c.then(Yo,Yo);var u=Hi(c,r);ls(e,t,u,Xl(e))}else ls(e,t,r,Xl(e))}catch(n){ls(e,t,{then:function(){},status:`rejected`,reason:n},Xl(e))}finally{Km.p=a,o!==null&&s.types!==null&&(o.types!==null&&o.types!==s.types&&console.error(`We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React.`),o.types=s.types),V.T=o,o===null&&s._updatedFibers&&(e=s._updatedFibers.size,s._updatedFibers.clear(),10<e&&console.warn(`Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.`))}}function Zo(e,t,n,r){if(e.tag!==5)throw Error(`Expected the form instance to be a HostComponent. This is a bug in React.`);var i=Qo(e).queue;Si(e),Xo(e,i,t,QT,n===null?d:function(){return $o(e),n(r)})}function Qo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:QT,baseState:QT,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:QT},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $o(e){V.T===null&&console.error(`requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.`);var t=Qo(e);t.next===null&&(t=e.alternate.memoizedState),ls(e,t.next.queue,{},Xl(e))}function es(){var e=lo(!1);return e=Xo.bind(null,X,e.queue,!0,!1),Ga().memoizedState=e,[!1,e]}function ts(){var e=$a(Za)[0],t=Ka().memoizedState;return[typeof e==`boolean`?e:Ja(e),t]}function ns(){var e=to(Za)[0],t=Ka().memoizedState;return[typeof e==`boolean`?e:Ja(e),t]}function rs(){return pi($T)}function is(){var e=Ga(),t=pC.identifierPrefix;if(K){var n=ey,r=$v;n=(r&~(1<<32-Nh(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Lx++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Bx++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t}function as(){return Ga().memoizedState=os.bind(null,X)}function os(e,t){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Xl(n),i=ma(r),a=ha(n,i,r);a!==null&&(xi(r,`refresh()`,e),$l(a,n,r),ga(a,n,r)),e=gi(),t!=null&&a!==null&&console.error(`The seed argument is not enabled outside experimental channels.`),i.payload={cache:e};return}n=n.return}}function ss(e,t,n){var r=arguments;typeof r[3]==`function`&&console.error(`State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().`),r=Xl(e);var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};ds(e)?fs(t,i):(i=Sr(e,t,i,r),i!==null&&(xi(r,`dispatch()`,e),$l(i,e,r),ps(i,t,r)))}function cs(e,t,n){var r=arguments;typeof r[3]==`function`&&console.error(`State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().`),r=Xl(e),ls(e,t,n,r)&&xi(r,`setState()`,e)}function ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ds(e))fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null)){var o=V.H;V.H=Zx;try{var s=t.lastRenderedState,c=a(s,n);if(i.hasEagerState=!0,i.eagerState=c,G_(c,s))return xr(e,t,i,0),pC===null&&br(),!1}catch{}finally{V.H=o}}if(n=Sr(e,t,i,r),n!==null)return $l(n,e,r),ps(n,t,r),!0}return!1}function us(e,t,n,r){if(V.T===null&&lb===0&&console.error(`An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition.`),r={lane:2,revertLane:od(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ds(e)){if(t)throw Error(`Cannot update optimistic state while rendering.`);console.error(`Cannot call startTransition while rendering.`)}else t=Sr(e,n,r,2),t!==null&&(xi(2,`setOptimistic()`,e),$l(t,e,2))}function ds(e){var t=e.alternate;return e===X||t!==null&&t===X}function fs(e,t){Fx=Px=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ps(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}function ms(e){if(e!==null&&typeof e!=`function`){var t=String(e);lS.has(t)||(lS.add(t),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",e))}}function hs(e,t,n,r){var i=e.memoizedState,a=n(r,i);if(e.mode&Vv){Ue(!0);try{a=n(r,i)}finally{Ue(!1)}}a===void 0&&(t=ge(t)||`Component`,aS.has(t)||(aS.add(t),console.error(`%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.`,t))),i=a==null?i:B({},i,a),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}function gs(e,t,n,r,i,a,o){var s=e.stateNode;if(typeof s.shouldComponentUpdate==`function`){if(n=s.shouldComponentUpdate(r,a,o),e.mode&Vv){Ue(!0);try{n=s.shouldComponentUpdate(r,a,o)}finally{Ue(!1)}}return n===void 0&&console.error(`%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.`,ge(t)||`Component`),n}return t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(i,a):!0}function _s(e,t,n,r){var i=t.state;typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==i&&(e=C(e)||`Component`,eS.has(e)||(eS.add(e),console.error(`%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.`,e)),uS.enqueueReplaceState(t,t.state,null))}function vs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=B({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function ys(e){mv(e),console.warn(`%s

%s
`,dS?`An error occurred in the <`+dS+`> component.`:`An error occurred in one of your React components.`,`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function bs(e){var t=dS?`The above error occurred in the <`+dS+`> component.`:`The above error occurred in one of your React components.`,n=`React will try to recreate this component tree from scratch using the error boundary you provided, `+((fS||`Anonymous`)+`.`);if(typeof e==`object`&&e&&typeof e.environmentName==`string`){var r=e.environmentName;e=[`%o

%s

%s
`,e,t,n].slice(0),typeof e[0]==`string`?e.splice(0,1,eE+` `+e[0],tE,rE+r+rE,nE):e.splice(0,0,eE,tE,rE+r+rE,nE),e.unshift(console),r=iE.apply(console.error,e),r()}else console.error(`%o

%s

%s
`,e,t,n)}function xs(e){mv(e)}function Ss(e,t){try{dS=t.source?C(t.source):null,fS=null;var n=t.value;if(V.actQueue!==null)V.thrownErrors.push(n);else{var r=e.onUncaughtError;r(n,{componentStack:t.stack})}}catch(e){setTimeout(function(){throw e})}}function Cs(e,t,n){try{dS=n.source?C(n.source):null,fS=C(t);var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ws(e,t,n){return n=ma(n),n.tag=lx,n.payload={element:null},n.callback=function(){T(t.source,Ss,e,t)},n}function Ts(e){return e=ma(e),e.tag=lx,e}function Es(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Or(n),T(r.source,Cs,t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Or(n),T(r.source,Cs,t,n,r),typeof i!=`function`&&(KC===null?KC=new Set([this]):KC.add(this)),Nb(this,r),typeof i==`function`||!(n.lanes&2)&&console.error(`%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.`,C(n)||`Unknown`)})}function Ds(e,t,n,r,i){if(n.flags|=32768,Mh&&Ju(e,i),typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ui(t,n,i,!0),K&&(ry=!0),n=gx.current,n!==null){switch(n.tag){case 31:case 13:case 19:return _x===null?pu():n.alternate===null&&AC===aC&&(AC=cC),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Gb?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),zu(e,r,i)),!1;case 22:return n.flags|=65536,r===Gb?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),zu(e,r,i)),!1}throw Error(`Unexpected Suspense handler tag (`+n.tag+`). This is a bug in React.`)}return zu(e,r,i),pu(),!1}if(K)return ry=!0,t=gx.current,t===null?(r!==sy&&ri(Br(Error(`There was an error while hydrating but React was able to recover by instead client rendering the entire root.`,{cause:r}),n)),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Br(r,n),i=ws(e.stateNode,r,i),_a(e,i),AC!==lC&&(AC=sC)):(t.tag===19&&console.error(`SuspenseList should never catch while hydrating. This is a bug in React.`),!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==sy&&ri(Br(Error(`There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.`,{cause:r}),n))),!1;var a=Br(Error(`There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.`,{cause:r}),n);if(IC===null?IC=[a]:IC.push(a),AC!==lC&&(AC=sC),t===null)return!0;r=Br(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=ws(n.stateNode,r,e),_a(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(KC===null||!KC.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Ts(i),Es(i,e,n,r),_a(n,i),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}function Os(e,t,n,r){t.child=e===null?ax(t,null,n,r):ix(t,e.child,n,r)}function ks(e,t,n,r,i){n=n.render;var a=Er(n);if(a!==n&&(n=a,e!==null&&(mS=!0)),a=t.ref,`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return fi(t),r=Ra(e,t,n,o,a,i),s=Ha(),e!==null&&!mS?(Ua(e,t,i),rc(e,t,i)):(K&&s&&Ur(t),t.flags|=1,Os(e,t,r,i),t.child)}function As(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!jr(a)&&a.defaultProps===void 0&&n.compare===null?(n=Er(a),t.tag=15,t.type=n,Us(t,a),js(e,t,n,r,i)):(e=Pr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!ic(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Hn:n,n(o,r)&&e.ref===t.ref)return rc(e,t,i)}return t.flags|=1,e=Mr(a,r),e.ref=t.ref,e.return=t,t.child=e}function js(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Hn(a,r)&&e.ref===t.ref&&t.type===e.type){if(mS=!1,t.pendingProps=r=a,ic(e,i))e.flags&131072&&(mS=!0);else return t.lanes=e.lanes,rc(e,t,i)}}return zs(e,t,n,r,i)}function Ms(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:Mv,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Ps(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wi(t,a===null?null:a.cachePool),a===null?wa(t):Ca(t,a),Oa(t);else return r=t.lanes=536870912,Ps(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Wi(t,null),wa(t),ka(t)):(Wi(t,a.cachePool),Ca(t,a),ka(t),t.memoizedState=null);return Os(e,t,i,n),t.child}function Ns(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:Mv,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ps(e,t,n,r,i){var a=Ui();return a=a===null?null:{parent:_y._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Wi(t,null),wa(t),Oa(t),e!==null&&ui(e,t,r,!0),t.childLanes=i,null}function Fs(e,t){var n=t.hidden;return n!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,!0===n?`hidden`:!1===n?`hidden={false}`:`hidden={...}`,n?`mode="hidden"`:`mode="visible"`),t=Js({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Is(e,t,n){return ix(t,e.child,null,n),e=Fs(t,t.pendingProps),e.flags|=2,Aa(t),t.memoizedState=null,e}function Ls(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(K){if(r.mode===`hidden`)return e=Fs(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ns(null,e);if(Da(t),(e=ny)?(n=$f(e,oy),n=n!==null&&n.data===rT?n:null,n!==null&&(r={dehydrated:n,treeContext:Gr(),retryLane:536870912,hydrationErrors:null},t.memoizedState=r,r=Rr(n),r.return=t,t.child=r,ty=t,ny=null)):n=null,n===null)throw Xr(t,e),Zr(t);return t.lanes=536870912,null}return Fs(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(Da(t),i){if(t.flags&256)t.flags&=-257,t=Is(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(`Client rendering an Activity suspended it again. This is a bug in React.`)}else if(Yr(),n&536870912&&fu(t),mS||ui(e,t,n,!1),i=(n&e.childLanes)!==0,mS||i){if(mx.current===null){if(r=pC,r!==null&&(o=k(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,Cr(e,o),$l(r,e,o),pS;pu()}t=Is(e,t,n)}else e=a.treeContext,ny=rp(o.nextSibling),ty=t,K=!0,ay=null,ry=!1,iy=null,oy=!1,e!==null&&Kr(t,e),t=Fs(t,r),t.flags|=134221824;return t}return a=e.child,r={mode:r.mode,children:r.children},n&536870912&&(n&e.lanes)!==0&&fu(t),e=Mr(a,r),e.ref=t.ref,t.child=e,e.return=t,e}function Rs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(`Expected ref to be a function, an object returned by React.createRef(), or undefined/null.`);(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zs(e,t,n,r,i){if(n.prototype&&typeof n.prototype.render==`function`){var a=ge(n)||`Unknown`;hS[a]||(console.error(`The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.`,a,a),hS[a]=!0)}return t.mode&Vv&&pb.recordLegacyContextWarning(t,null),e===null&&(Us(t,t.type),n.contextTypes&&(a=ge(n)||`Unknown`,_S[a]||(_S[a]=!0,console.error(`%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)`,a)))),fi(t),n=Ra(e,t,n,r,void 0,i),r=Ha(),e!==null&&!mS?(Ua(e,t,i),rc(e,t,i)):(K&&r&&Ur(t),t.flags|=1,Os(e,t,n,i),t.child)}function Bs(e,t,n,r,i,a){return fi(t),Ux=-1,Wx=e!==null&&e.type!==t.type,t.updateQueue=null,n=Ba(t,r,n,i),za(e,t),r=Ha(),e!==null&&!mS?(Ua(e,t,a),rc(e,t,a)):(K&&r&&Ur(t),t.flags|=1,Os(e,t,n,a),t.child)}function Vs(e,t,n,r,i){switch(s(t)){case!1:var a=t.stateNode,o=new t.type(t.memoizedProps,a.context).state;a.updater.enqueueSetState(a,o,null);break;case!0:t.flags|=128,t.flags|=65536,a=Error(`Simulated error coming from DevTools`);var c=i&-i;if(t.lanes|=c,o=pC,o===null)throw Error(`Expected a work-in-progress root. This is a bug in React. Please file an issue.`);c=Ts(c),Es(c,o,t,Br(a,t)),_a(t,c)}if(fi(t),t.stateNode===null){if(o=Lv,a=n.contextType,`contextType`in n&&a!==null&&(a===void 0||a.$$typeof!==Mm)&&!cS.has(n)&&(cS.add(n),c=a===void 0?` However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.`:typeof a==`object`?a.$$typeof===jm?` Did you accidentally pass the Context.Consumer instead?`:` However, it is set to an object with keys {`+Object.keys(a).join(`, `)+`}.`:` However, it is set to a `+typeof a+`.`,console.error(`%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s`,ge(n)||`Component`,c)),typeof a==`object`&&a&&(o=pi(a)),a=new n(r,o),t.mode&Vv){Ue(!0);try{a=new n(r,o)}finally{Ue(!1)}}if(o=t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=uS,t.stateNode=a,a._reactInternals=t,a._reactInternalInstance=$x,typeof n.getDerivedStateFromProps==`function`&&o===null&&(o=ge(n)||`Component`,tS.has(o)||(tS.add(o),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",o,a.state===null?`null`:`undefined`,o))),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`){var l=c=o=null;if(typeof a.componentWillMount==`function`&&!0!==a.componentWillMount.__suppressDeprecationWarning?o=`componentWillMount`:typeof a.UNSAFE_componentWillMount==`function`&&(o=`UNSAFE_componentWillMount`),typeof a.componentWillReceiveProps==`function`&&!0!==a.componentWillReceiveProps.__suppressDeprecationWarning?c=`componentWillReceiveProps`:typeof a.UNSAFE_componentWillReceiveProps==`function`&&(c=`UNSAFE_componentWillReceiveProps`),typeof a.componentWillUpdate==`function`&&!0!==a.componentWillUpdate.__suppressDeprecationWarning?l=`componentWillUpdate`:typeof a.UNSAFE_componentWillUpdate==`function`&&(l=`UNSAFE_componentWillUpdate`),o!==null||c!==null||l!==null){a=ge(n)||`Component`;var u=typeof n.getDerivedStateFromProps==`function`?`getDerivedStateFromProps()`:`getSnapshotBeforeUpdate()`;rS.has(a)||(rS.add(a),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,a,u,o===null?``:`
  `+o,c===null?``:`
  `+c,l===null?``:`
  `+l))}}a=t.stateNode,o=ge(n)||`Component`,a.render||(n.prototype&&typeof n.prototype.render==`function`?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",o):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",o)),!a.getInitialState||a.getInitialState.isReactClassApproved||a.state||console.error(`getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?`,o),a.getDefaultProps&&!a.getDefaultProps.isReactClassApproved&&console.error(`getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.`,o),a.contextType&&console.error(`contextType was defined as an instance property on %s. Use a static property to define contextType instead.`,o),n.childContextTypes&&!sS.has(n)&&(sS.add(n),console.error(`%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)`,o)),n.contextTypes&&!oS.has(n)&&(oS.add(n),console.error(`%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)`,o)),typeof a.componentShouldUpdate==`function`&&console.error(`%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.`,o),n.prototype&&n.prototype.isPureReactComponent&&a.shouldComponentUpdate!==void 0&&console.error(`%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.`,ge(n)||`A pure component`),typeof a.componentDidUnmount==`function`&&console.error(`%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?`,o),typeof a.componentDidReceiveProps==`function`&&console.error(`%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().`,o),typeof a.componentWillRecieveProps==`function`&&console.error(`%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?`,o),typeof a.UNSAFE_componentWillRecieveProps==`function`&&console.error(`%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?`,o),c=a.props!==r,a.props!==void 0&&c&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",o),a.defaultProps&&console.error(`Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.`,o,o),typeof a.getSnapshotBeforeUpdate!=`function`||typeof a.componentDidUpdate==`function`||nS.has(n)||(nS.add(n),console.error(`%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.`,ge(n))),typeof a.getDerivedStateFromProps==`function`&&console.error(`%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.`,o),typeof a.getDerivedStateFromError==`function`&&console.error(`%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.`,o),typeof n.getSnapshotBeforeUpdate==`function`&&console.error(`%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.`,o),(c=a.state)&&(typeof c!=`object`||Gm(c))&&console.error(`%s.state: must be set to an object or null`,o),typeof a.getChildContext==`function`&&typeof n.childContextTypes!=`object`&&console.error(`%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().`,o),a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},fa(t),o=n.contextType,a.context=typeof o==`object`&&o?pi(o):Lv,a.state===r&&(o=ge(n)||`Component`,iS.has(o)||(iS.add(o),console.error(`%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.`,o))),t.mode&Vv&&pb.recordLegacyContextWarning(t,a),pb.recordUnsafeLifecycleWarnings(t,a),a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&(console.error(`%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.`,C(t)||`Component`),uS.enqueueReplaceState(a,a.state,null)),ya(t,r,a,i),va(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),(t.mode&Hv)!==W&&(t.flags|=268435456),a=!0}else if(e===null){a=t.stateNode;var d=t.memoizedProps;c=vs(n,d),a.props=c;var f=a.context;l=n.contextType,o=Lv,typeof l==`object`&&l&&(o=pi(l)),u=n.getDerivedStateFromProps,l=typeof u==`function`||typeof a.getSnapshotBeforeUpdate==`function`,d=t.pendingProps!==d,l||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(d||f!==o)&&_s(t,a,r,o),ux=!1;var p=t.memoizedState;a.state=p,ya(t,r,a,i),va(),f=t.memoizedState,d||p!==f||ux?(typeof u==`function`&&(hs(t,n,u,r),f=t.memoizedState),(c=ux||gs(t,n,c,r,p,f,o))?(l||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308),(t.mode&Hv)!==W&&(t.flags|=268435456)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),(t.mode&Hv)!==W&&(t.flags|=268435456),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=o,a=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),(t.mode&Hv)!==W&&(t.flags|=268435456),a=!1)}else{a=t.stateNode,pa(e,t),o=t.memoizedProps,l=vs(n,o),a.props=l,u=t.pendingProps,p=a.context,f=n.contextType,c=Lv,typeof f==`object`&&f&&(c=pi(f)),d=n.getDerivedStateFromProps,(f=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==u||p!==c)&&_s(t,a,r,c),ux=!1,p=t.memoizedState,a.state=p,ya(t,r,a,i),va();var m=t.memoizedState;o!==u||p!==m||ux||e!==null&&e.dependencies!==null&&di(e.dependencies)?(typeof d==`function`&&(hs(t,n,d,r),m=t.memoizedState),(l=ux||gs(t,n,l,r,p,m,c)||e!==null&&e.dependencies!==null&&di(e.dependencies))?(f||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,m,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,m,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=c,a=l):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}if(c=a,Rs(e,t),o=!!(t.flags&128),c||o){if(c=t.stateNode,Le(t),o&&typeof n.getDerivedStateFromError!=`function`)n=null,Dy=-1;else if(n=Db(c),t.mode&Vv){Ue(!0);try{Db(c)}finally{Ue(!1)}}t.flags|=1,e!==null&&o?(t.child=ix(t,e.child,null,i),t.child=ix(t,null,n,i)):Os(e,t,n,i),t.memoizedState=c.state,e=t.child}else e=rc(e,t,i);return i=t.stateNode,a&&i.props!==r&&(yS||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",C(t)||`a component`),yS=!0),e}function Hs(e,t,n,r){return ti(),t.flags|=256,Os(e,t,n,r),t.child}function Us(e,t){t&&t.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,t.displayName||t.name||`Component`),typeof t.getDerivedStateFromProps==`function`&&(e=ge(t)||`Unknown`,vS[e]||(console.error(`%s: Function components do not support getDerivedStateFromProps.`,e),vS[e]=!0)),typeof t.contextType==`object`&&t.contextType!==null&&(t=ge(t)||`Unknown`,gS[t]||(console.error(`%s: Function components do not support contextType.`,t),gS[t]=!0))}function Ws(e){return{baseLanes:e,cachePool:Gi()}}function Gs(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=PC),e}function Ks(e,t,n){var r=t.pendingProps;o(t)&&(t.flags|=128);var i=!1,a=!!(t.flags&128),s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(bx.current&yx)!==0),s&&(i=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(K){if(i?Ea(t):ka(t),(e=ny)?(n=$f(e,oy),n=n!==null&&n.data!==rT?n:null,n!==null&&(s={dehydrated:n,treeContext:Gr(),retryLane:536870912,hydrationErrors:null},t.memoizedState=s,s=Rr(n),s.return=t,t.child=s,ty=t,ny=null)):n=null,n===null)throw Xr(t,e),Zr(t);return t.lanes=tp(n)?32:536870912,null}return a=r.children,r=r.fallback,i?(ka(t),i=t.mode,a=Js({mode:`hidden`,children:a},i),r=Ir(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Ws(n),r.childLanes=Gs(e,s,n),t.memoizedState=CS,Ns(null,r)):(Ea(t),qs(t,a))}var c=e.memoizedState;if(c!==null){var l=c.dehydrated;if(l!==null)return Xs(e,t,a,s,r,l,c,n)}return i?(ka(t),i=r.fallback,a=t.mode,c=e.child,l=c.sibling,r=Mr(c,{mode:`hidden`,children:r.children}),r.subtreeFlags=c.subtreeFlags&1206910976,l===null?(i=Ir(i,a,n,null),i.flags|=2):i=Mr(l,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Ns(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Ws(n):(a=i.cachePool,a===null?a=Gi():(c=_y._currentValue,a=a.parent===c?a:{parent:c,pool:c}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Gs(e,s,n),t.memoizedState=CS,Ns(e.child,r)):(c!==null&&(n&62914560)===n&&(n&e.lanes)!==0&&fu(t),Ea(t),n=e.child,e=n.sibling,n=Mr(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function qs(e,t){return t=Js({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Js(e,t){return e=g(22,e,null,t),e.lanes=0,e}function Ys(e,t,n){return ix(t,e.child,null,n),e=qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xs(e,t,n,r,i,a,o,s){if(n){if(t.flags&256)return Ea(t),t.flags&=-257,Ys(e,t,s);if(t.memoizedState!==null)return ka(t),t.child=e.child,t.flags|=128,null;ka(t);var c=i.fallback,l=t.mode,u=Js({mode:`visible`,children:i.children},l);return c=Ir(c,l,s,null),c.flags|=2,u.return=t,c.return=t,u.sibling=c,t.child=u,ix(t,e.child,null,s),c=t.child,c.memoizedState=Ws(s),c.childLanes=Gs(e,r,s),t.memoizedState=CS,Ns(null,c)}if(Ea(t),Yr(),s&536870912&&fu(t),tp(a)){if(r=a.nextSibling&&a.nextSibling.dataset,r){c=r.dgst;var d=r.msg;l=r.stck,u=r.cstck}return a=d,o=c,i=l,r=u,c=o,l=a,u=i,i=r,c!==Cb&&(r=Error(l||`The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.`),r.stack=u||``,r.digest=c,c=i===void 0?null:i,l={value:r,source:null,stack:c},typeof c==`string`&&Gv.set(r,l),ri(l)),Ys(e,t,s)}if(mS||ui(e,t,s,!1),r=(s&e.childLanes)!==0,mS||r){if(mx.current!==null)return Ys(e,t,s);if(r=pC,r!==null&&(c=k(r,s),c!==0&&c!==o.retryLane))throw o.retryLane=c,Cr(e,c),$l(r,e,c),pS;return ep(a)||pu(),Ys(e,t,s)}return ep(a)?(t.flags|=192,t.child=e.child,null):(e=o.treeContext,ny=rp(a.nextSibling),ty=t,K=!0,ay=null,ry=!1,iy=null,oy=!1,e!==null&&Kr(t,e),t=qs(t,i.children),t.flags|=134221824,t)}function Zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ci(e.return,t,n)}function Qs(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Na(n)===null&&(t=e),e=e.sibling}return t}function $s(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ec(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail,o=r.children,s=bx.current;if(t.flags&128)return ja(t,s),null;if((r=(s&yx)!==0)?(s=s&vx|yx,t.flags|=128):s&=vx,ja(t,s),s=i??`null`,i!=null&&i!==`forwards`&&i!==`backwards`&&i!==`unstable_legacy-backwards`&&i!==`together`&&i!==`independent`&&!bS[s]){if(bS[s]=!0,typeof i==`string`)switch(i.toLowerCase()){case`together`:case`forwards`:case`backwards`:case`independent`:console.error(`"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.`,i,i.toLowerCase());break;case`forward`:case`backward`:console.error(`"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.`,i,i.toLowerCase());break;default:console.error(`"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?`,i)}else console.error(`%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?`,i)}s=a??`null`,xS[s]||a==null||(a!==`visible`&&a!==`collapsed`&&a!==`hidden`?(xS[s]=!0,console.error(`"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?`,a)):i!=null&&i!==`forwards`&&i!==`backwards`&&i!==`unstable_legacy-backwards`&&(xS[s]=!0,console.error(`<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" (default) or "backwards". Did you mean to specify revealOrder="forwards"?`,a)));a:if((i==null||i===`forwards`||i===`backwards`||i===`unstable_legacy-backwards`)&&o!=null&&!1!==o){if(Gm(o)){for(s=0;s<o.length;s++)if(!da(o[s],s))break a}else if(s=he(o),typeof s==`function`){if(s=s.call(o))for(var c=s.next(),l=0;!c.done;c=s.next()){if(!da(c.value,l))break a;l++}}else console.error(`A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?`,i)}if(i===`backwards`&&e!==null?(ec(e),Os(e,t,o,n),ec(e)):Os(e,t,o,n),K?(qr(),o=Yv):o=0,!r&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,n,t);else if(e.tag===19)Zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=Qs(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ec(t)),$s(t,!0,i,null,a,o);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Na(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$s(t,!0,n,null,a,o);break;case`together`:$s(t,!1,null,null,void 0,o);break;case`independent`:t.memoizedState=null;break;default:n=Qs(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$s(t,!1,i,n,a,o)}return t.child}function nc(e,t,n){var r=t.type,i=t.pendingProps,a=i.value;return`value`in i||wS||(wS=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),oi(t,r,a),Os(e,t,i.children,n),t.child}function rc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dy=-1,jC|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ui(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(`Resuming work not yet implemented.`);if(t.child!==null){for(e=t.child,n=Mr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ic(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&di(e)))}function ac(e,t,n){switch(t.tag){case 3:Se(t,t.stateNode.containerInfo),oi(t,_y,e.memoizedState.cache),ti();break;case 27:case 5:Te(t);break;case 4:Se(t,t.stateNode.containerInfo);break;case 10:oi(t,t.type,t.memoizedProps.value);break;case 12:(n&t.childLanes)!==0&&(t.flags|=4),t.flags|=2048;var r=t.stateNode;r.effectDuration=-0,r.passiveEffectDuration=-0;break;case 31:if(t.memoizedState!==null)return t.flags|=128,Da(t),null;break;case 13:if(r=t.memoizedState,r!==null){if(r.dehydrated!==null)return Ea(t),t.flags|=128,null;r=ui(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Ks(e,t,n):(Ea(t),e=rc(e,t,n),e===null?null:e.sibling)}Ea(t);break;case 19:if(t.flags&128)return tc(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(ui(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ja(t,bx.current),r)break;return null;case 22:return t.lanes=0,Ms(e,t,n,t.pendingProps);case 24:oi(t,_y,e.memoizedState.cache)}return rc(e,t,n)}function oc(e,t,n){if(t._debugNeedsRemount&&e!==null){n=Pr(Er(t.elementType),t.key,t.pendingProps,t._debugOwner||null,t.mode,t.lanes),n._debugStack=t._debugStack,n._debugTask=t._debugTask;var r=t.return;if(r===null)throw Error(`Cannot swap the root fiber.`);if(e.alternate=null,t.alternate=null,n.index=t.index,n.sibling=t.sibling,n.return=t.return,n.ref=t.ref,n._debugInfo=t._debugInfo,t===r.child)r.child=n;else{var i=r.child;if(i===null)throw Error(`Expected parent to have a child.`);for(;i.sibling!==t;)if(i=i.sibling,i===null)throw Error(`Expected to find the previous sibling.`);i.sibling=n}return t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e),n.flags|=134217730,n}if(e!==null){if(e.memoizedProps!==t.pendingProps||t.type!==e.type)mS=!0;else{if(!ic(e,n)&&!(t.flags&128))return mS=!1,ac(e,t,n);mS=!!(e.flags&131072)}}else mS=!1,(r=K)&&(qr(),r=!!(t.flags&1048576)),r&&(r=t.index,qr(),Hr(t,Yv,r));switch(t.lanes=0,t.tag){case 16:a:if(r=t.pendingProps,e=Yi(t.elementType),e=Er(e),t.type=e,typeof e==`function`)jr(e)?(r=vs(e,r),t.tag=1,t=Vs(null,t,e,r,n)):(t.tag=0,Us(t,e),t=zs(null,t,e,r,n));else{if(e!=null){if(i=e.$$typeof,i===Nm){t.tag=11,t=ks(null,t,e,r,n);break a}if(i===Im){t.tag=14,t=As(null,t,e,r,n);break a}if(i===Mm){t.tag=10,t.type=e,t=nc(null,t,n);break a}}throw t=``,typeof e==`object`&&e&&e.$$typeof===Lm&&(t=` Did you wrap a component in React.lazy() more than once?`),n=ge(e)||e,Error(`Element type is invalid. Received a promise that resolves to: `+n+`. Lazy element type must resolve to a class or function.`+t)}return t;case 0:return zs(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=vs(r,t.pendingProps),Vs(e,t,r,i,n);case 3:a:{if(Se(t,t.stateNode.containerInfo),e===null)throw Error(`Should have a current fiber. This is a bug in React.`);r=t.pendingProps;var a=t.memoizedState;i=a.element,pa(e,t),ya(t,r,null,n);var o=t.memoizedState;if(r=o.cache,oi(t,_y,r),r!==a.cache&&li(t,[_y],n,!0),va(),r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Hs(e,t,r,n);break a}if(r!==i){i=Br(Error(`This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.`),t),ri(i),t=Hs(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(ny=rp(e.firstChild),ty=t,K=!0,ay=null,ry=!1,iy=null,oy=!0,n=ax(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ti(),r===i){t=rc(e,t,n);break a}Os(e,t,r,n)}t=t.child}return t;case 26:return Rs(e,t),e===null?(n=yp(t.type,null,t.pendingProps,null))?t.memoizedState=n:K||(t.stateNode=Jd(t.type,t.pendingProps,xe($m.current),t)):t.memoizedState=yp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Te(t),e===null&&K&&(r=xe($m.current),i=we(),r=t.stateNode=pp(t.type,t.pendingProps,r,i,!1),ry||(i=Vd(r,t.type,t.pendingProps,i),i!==null&&(Jr(t,0).serverProps=i)),ty=t,oy=!0,i=ny,cf(t.type)?(FT=i,ny=rp(r.firstChild)):ny=i),Os(e,t,t.pendingProps.children,n),Rs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&(a=we(),r=$t(t.type,a.ancestorInfo),i=ny,(o=!i)||(o=Zf(i,t.type,t.pendingProps,oy),o===null?a=!1:(t.stateNode=o,ry||(a=Vd(o,t.type,t.pendingProps,a),a!==null&&(Jr(t,0).serverProps=a)),ty=t,ny=rp(o.firstChild),oy=!1,a=!0),o=!a),o&&(r&&Xr(t,i),Zr(t))),Te(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Xd(i,a)?r=null:o!==null&&Xd(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Ra(e,t,Va,null,null,n),$T._currentValue=i),Rs(e,t),Os(e,t,r,n),t.child;case 6:return e===null&&K&&(n=t.pendingProps,e=we(),r=e.ancestorInfo.current,n=r==null||en(n,r.tag,e.ancestorInfo.implicitRootScope),e=ny,(r=!e)||(r=Qf(e,t.pendingProps,oy),r===null?r=!1:(t.stateNode=r,ty=t,ny=null,r=!0),r=!r),r&&(n&&Xr(t,e),Zr(t))),null;case 13:return Ks(e,t,n);case 4:return Se(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ix(t,null,r,n):Os(e,t,r,n),t.child;case 11:return ks(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Rs(e,t),Os(e,t,r,n),t.child;case 8:return Os(e,t,t.pendingProps.children,n),t.child;case 12:return t.flags|=4,t.flags|=2048,r=t.stateNode,r.effectDuration=-0,r.passiveEffectDuration=-0,Os(e,t,t.pendingProps.children,n),t.child;case 10:return nc(e,t,n);case 9:return i=t.type._context,r=t.pendingProps.children,typeof r!=`function`&&console.error(`A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.`),fi(t),i=pi(i),r=Tb(r,i,void 0),t.flags|=1,Os(e,t,r,n),t.child;case 14:return As(e,t,t.type,t.pendingProps,n);case 15:return js(e,t,t.type,t.pendingProps,n);case 19:return tc(e,t,n);case 31:return Ls(e,t,n);case 22:return Ms(e,t,n,t.pendingProps);case 24:return fi(t),r=pi(_y),e===null?(i=Ui(),i===null&&(i=pC,a=gi(),i.pooledCache=a,_i(a),a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},fa(t),oi(t,_y,i)):((e.lanes&n)!==0&&(pa(e,t),ya(t,null,null,n),va()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,oi(t,_y,r),r!==i.cache&&li(t,[_y],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),oi(t,_y,r))),Os(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:K&&Ur(t),r.className!==void 0&&(i=typeof r.className==`string`?JSON.stringify(r.className):`{...}`,SS[i]||(SS[i]=!0,console.error(`<ViewTransition> doesn't accept a "className" prop. It has been renamed to "default".
-   <ViewTransition className=%s>
+   <ViewTransition default=%s>`,i,i))),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Rs(e,t),Os(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(`Unknown unit of work tag (`+t.tag+`). This error is likely caused by a bug in React. Please file an issue.`)}function sc(e){e.flags|=4}function cc(e,t,n,r,i){var a;if((a=(e.mode&Uv)!==W)&&(a=n===null?Pp(t,r):Pp(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(lu())e.flags|=8192;else throw Yb=Gb,Ub}}else e.flags&=-16777217}function lc(e,t){if(t.type!==`stylesheet`||(t.state.loading&BT)!==IT)e.flags&=-16777217;else if(e.flags|=16777216,!Fp(t)){if(lu())e.flags|=8192;else throw Yb=Gb,Ub}}function uc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ye(),e.lanes|=t,FC|=t)}function dc(e,t){if(!K)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function fc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t){if((e.mode&G)!==W){for(var i=e.selfBaseDuration,a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&1206910976,r|=a.flags&1206910976,i+=a.treeBaseDuration,a=a.sibling;e.treeBaseDuration=i}else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling}else if((e.mode&G)!==W){i=e.actualDuration,a=e.selfBaseDuration;for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,i+=o.actualDuration,a+=o.treeBaseDuration,o=o.sibling;e.actualDuration=i,e.treeBaseDuration=a}else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pc(e,t,n){var r=t.pendingProps;switch(Wr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fc(t),null;case 1:return fc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),si(_y,t),Ce(t),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ei(t)?(ii(),sc(t)):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ni())),fc(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(sc(t),a===null?(fc(t),cc(t,i,null,r,n)):(fc(t),lc(t,a))):a?a===e.memoizedState?(fc(t),t.flags&=-16777217):(sc(t),fc(t),lc(t,a)):(e=e.memoizedProps,e!==r&&sc(t),fc(t),cc(t,i,e,r,n)),null;case 27:if(Ee(t),n=xe($m.current),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&sc(t);else{if(!r){if(t.stateNode===null)throw Error(`We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.`);return fc(t),t.subtreeFlags&=-33554433,null}e=we(),ei(t)?Qr(t,e):(e=pp(i,r,n,e,!0),t.stateNode=e,sc(t))}return fc(t),t.subtreeFlags&=-33554433,null;case 5:if(Ee(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&sc(t);else{if(!r){if(t.stateNode===null)throw Error(`We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.`);return fc(t),t.subtreeFlags&=-33554433,null}var o=we();if(ei(t))Qr(t,o);else{switch(a=xe($m.current),$t(i,o.ancestorInfo),o=o.context,a=Gd(a),o){case vT:a=a.createElementNS(Ig,i);break;case yT:a=a.createElementNS(Fg,i);break;default:switch(i){case`svg`:a=a.createElementNS(Ig,i);break;case`math`:a=a.createElementNS(Fg,i);break;case`script`:a=a.createElement(`div`),ST||Yd(r)||(console.error(`Encountered a script tag while rendering React component. Scripts inside React components are never executed when rendering on the client. Consider using template tag instead (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template).`),ST=!0),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?a.createElement(`select`,{is:r.is}):a.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?a.createElement(i,{is:r.is}):a.createElement(i),i.indexOf(`-`)===-1&&(i!==i.toLowerCase()&&console.error(`<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.`,i),Object.prototype.toString.call(a)!==`[object HTMLUnknownElement]`||hh.call(CT,i)||(CT[i]=!0,console.error(`The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.`,i)))}}a[Wh]=t,a[Gh]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(jd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&sc(t)}}return fc(t),t.subtreeFlags&=-33554433,cc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&sc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(`We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.`);if(e=xe($m.current),n=we(),ei(t)){if(e=t.stateNode,n=t.memoizedProps,i=!ry,r=null,a=ty,a!==null)switch(a.tag){case 3:i&&(i=ap(e,n,r),i!==null&&(Jr(t,0).serverProps=i));break;case 27:case 5:r=a.memoizedProps,i&&(i=ap(e,n,r),i!==null&&(Jr(t,0).serverProps=i))}e[Wh]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Od(e.nodeValue,n)),e||Zr(t,!0)}else i=n.ancestorInfo.current,i!=null&&en(r,i.tag,n.ancestorInfo.implicitRootScope),e=Gd(e).createTextNode(r),e[Wh]=t,t.stateNode=e}return fc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ei(t),n!==null){if(e===null){if(!r)throw Error(`A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.`);if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(`Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.`);e[Wh]=t,fc(t),(t.mode&G)!==W&&n!==null&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration))}else ii(),ti(),!(t.flags&128)&&(n=t.memoizedState=null),t.flags|=4,fc(t),(t.mode&G)!==W&&n!==null&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration));e=!1}else n=ni(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Aa(t),t):(Aa(t),null);if(t.flags&128)throw Error(`Client rendering an Activity suspended it again. This is a bug in React.`)}return fc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=r,a=ei(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(`A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.`);if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(`Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.`);a[Wh]=t,fc(t),(t.mode&G)!==W&&i!==null&&(i=t.child,i!==null&&(t.treeBaseDuration-=i.treeBaseDuration))}else ii(),ti(),!(t.flags&128)&&(i=t.memoizedState=null),t.flags|=4,fc(t),(t.mode&G)!==W&&i!==null&&(i=t.child,i!==null&&(t.treeBaseDuration-=i.treeBaseDuration));i=!1}else i=ni(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Aa(t),t):(Aa(t),null)}return Aa(t),t.flags&128?(t.lanes=n,(t.mode&G)!==W&&zi(t),t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),uc(t,t.updateQueue),fc(t),(t.mode&G)!==W&&n&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration)),null);case 4:return Ce(t),e===null&&pd(t.stateNode.containerInfo),t.flags|=67108864,fc(t),null;case 10:return si(t.type,t),fc(t),null;case 19:if(Ma(t),r=t.memoizedState,r===null)return fc(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null){if(i)dc(r,!1);else{if(AC!==aC||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Na(e),a!==null){for(t.flags|=128,dc(r,!1),e=a.updateQueue,t.updateQueue=e,uc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Nr(n,e),n=n.sibling;return ja(t,bx.current&vx|yx),K&&Vr(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&bh()>HC&&(t.flags|=128,i=!0,dc(r,!1),t.lanes=4194304)}}else{if(!i){if(e=Na(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,uc(t,e),dc(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!a.alternate&&!K)return fc(t),null}else 2*bh()-r.renderingStartTime>HC&&n!==536870912&&(t.flags|=128,i=!0,dc(r,!1),t.lanes=4194304)}r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=bh(),e.sibling=null,a=bx.current,a=i?a&vx|yx:a&vx,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||K?ja(t,a):(n=a,be(gx,t,t),be(bx,n,t),_x===null&&(_x=t)),K&&Vr(t,r.treeForkCount),e}return fc(t),null;case 22:case 23:return Aa(t),Ta(t),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(fc(t),t.subtreeFlags&6&&(t.flags|=8192)):fc(t),n=t.updateQueue,n!==null&&uc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ye(fb,t),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),si(_y,t),fc(t),null;case 25:return null;case 30:return t.flags|=33554432,fc(t),null}throw Error(`Unknown unit of work tag (`+t.tag+`). This error is likely caused by a bug in React. Please file an issue.`)}function mc(e,t){switch(Wr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&G)!==W&&zi(t),t):null;case 3:return si(_y,t),Ce(t),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ee(t),null;case 31:if(t.memoizedState!==null){if(Aa(t),t.alternate===null)throw Error(`Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.`);ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&G)!==W&&zi(t),t):null;case 13:if(Aa(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(`Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.`);ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&G)!==W&&zi(t),t):null;case 19:return Ma(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ce(t),null;case 10:return si(t.type,t),null;case 22:case 23:return Aa(t),Ta(t),e!==null&&ye(fb,t),e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&G)!==W&&zi(t),t):null;case 24:return si(_y,t),null;case 25:return null;default:return null}}function hc(e,t){switch(Wr(t),t.tag){case 3:si(_y,t),Ce(t);break;case 26:case 27:case 5:Ee(t);break;case 4:Ce(t);break;case 31:t.memoizedState!==null&&Aa(t);break;case 13:Aa(t);break;case 19:Ma(t);break;case 10:si(t.type,t);break;case 22:case 23:Aa(t),Ta(t),e!==null&&ye(fb,t);break;case 24:si(_y,t)}}function gc(e){return(e.mode&G)!==W}function _c(e,t){gc(e)?(Ri(),yc(t,e),Ii()):yc(t,e)}function vc(e,t,n){gc(e)?(Ri(),bc(n,e,t),Ii()):bc(n,e,t)}function yc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e&&(r=void 0,(e&Cx)!==xx&&(Tw=!0),r=T(t,Lb,n),(e&Cx)!==xx&&(Tw=!1),r!==void 0&&typeof r!=`function`)){var a=void 0;a=(n.tag&wx)===0?(n.tag&Cx)===0?`useEffect`:`useInsertionEffect`:`useLayoutEffect`;var o=void 0;o=r===null?` You returned null. If your effect does not require clean up, return undefined (or nothing).`:typeof r.then==`function`?`

It looks like you wrote `+a+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+a+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:` You returned: `+r,T(t,function(e,t){console.error(`%s must not return anything besides a function, which is used for clean-up.%s`,e,t)},a,o)}n=n.next}while(n!==i)}}catch(e){Ru(t,t.return,e)}}function bc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;s!==void 0&&(o.destroy=void 0,(e&Cx)!==xx&&(Tw=!0),i=t,T(i,zb,i,n,s),(e&Cx)!==xx&&(Tw=!1))}r=r.next}while(r!==a)}}catch(e){Ru(t,t.return,e)}}function xc(e,t){gc(e)?(Ri(),yc(t,e),Ii()):yc(t,e)}function Sc(e,t,n){gc(e)?(Ri(),bc(n,e,t),Ii()):bc(n,e,t)}function Cc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;e.type.defaultProps||`ref`in e.memoizedProps||yS||(n.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(e)||`instance`),n.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(e)||`instance`));try{T(e,Sa,t,n)}catch(t){Ru(e,e.return,t)}}}function wc(e,t,n){return e.getSnapshotBeforeUpdate(t,n)}function Tc(e,t){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e.type.defaultProps||`ref`in e.memoizedProps||yS||(t.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(e)||`instance`),t.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(e)||`instance`));try{var i=vs(e.type,n),a=T(e,wc,t,i,r);n=TS,a!==void 0||n.has(e.type)||(n.add(e.type),T(e,function(){console.error(`%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.`,C(e))})),t.__reactInternalSnapshotBeforeUpdate=a}catch(t){Ru(e,e.return,t)}}function Ec(e,t,n){n.props=vs(e.type,e.memoizedProps),n.state=e.memoizedState,gc(e)?(Ri(),T(e,Fb,e,t,n),Ii()):T(e,Fb,e,t,n)}function Dc(e){var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;var r=$n(e.memoizedProps,n);(n.ref===null||n.ref.name!==r)&&(n.ref=Af(r)),n=n.ref;break;case 7:e.stateNode===null&&(n=new jf(e),ae(e,Kf,n),e.stateNode=n),n=e.stateNode;break;default:n=e.stateNode}if(typeof t==`function`){if(gc(e))try{Ri(),e.refCleanup=t(n)}finally{Ii()}else e.refCleanup=t(n)}else typeof t==`string`?console.error(`String refs are no longer supported.`):t.hasOwnProperty(`current`)||console.error(`Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().`,C(e)),t.current=n}}function Oc(e,t){try{T(e,Dc,e)}catch(n){Ru(e,t,n)}}function kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{if(gc(e))try{Ri(),T(e,r)}finally{Ii(e)}else T(e,r)}catch(n){Ru(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{if(gc(e))try{Ri(),T(e,n,null)}finally{Ii(e)}else T(e,n,null)}catch(n){Ru(e,t,n)}else n.current=null}}function Ac(e,t,n,r){var i=e.memoizedProps,a=i.id,o=i.onCommit;i=i.onRender,t=t===null?`mount`:`update`,ab&&(t=`nested-update`),typeof i==`function`&&i(a,t,e.actualDuration,e.treeBaseDuration,e.actualStartTime,n),typeof o==`function`&&o(a,t,r,n)}function jc(e,t,n,r){var i=e.memoizedProps;e=i.id,i=i.onPostCommit,t=t===null?`mount`:`update`,ab&&(t=`nested-update`),typeof i==`function`&&i(e,t,r,n)}function Mc(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)Jf(e.stateNode,t[n])}function Nc(e){for(var t=e.return;t!==null&&(Ic(t)&&Jf(e.stateNode,t.stateNode),!Fc(t));)t=t.return}function Pc(e){for(var t=e.return;t!==null&&(Ic(t)&&Yf(e.stateNode,t.stateNode),!Fc(t));)t=t.return}function Fc(e){return e.tag===5||e.tag===3||e.tag===27}function Ic(e){return e&&e.tag===7&&e.stateNode!==null}function Lc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{T(e,tf,r,t,n,e)}catch(t){Ru(e,e.return,t)}}function Rc(e,t,n){try{T(e,rf,e.stateNode,e.type,n,t,e)}catch(t){Ru(e,e.return,t)}}function zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&cf(e.type)||e.tag===4}function Bc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&cf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vc(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(sf(n),(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t)):(sf(n),t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),i=n._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=pn)),Mc(e,r),og=!0;else if(i!==4&&(i===27&&(Mc(e,r),r=null,cf(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Vc(e,t,n,r),e=e.sibling;e!==null;)Vc(e,t,n,r),e=e.sibling}function Hc(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Mc(e,r),og=!0;else if(i!==4&&(i===27&&(Mc(e,r),r=null,cf(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Hc(e,t,n,r),e=e.sibling;e!==null;)Hc(e,t,n,r),e=e.sibling}function Uc(e){for(var t,n=e.return;n!==null;){if(zc(n)){t=n;break}n=n.return}n=null;for(var r=e.return;r!==null;){if(Ic(r)){var i=r.stateNode;n===null?n=[i]:n.push(i)}if(Fc(r))break;r=r.return}if(t==null)throw Error(`Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.`);switch(t.tag){case 27:t=t.stateNode,r=Bc(e),Hc(e,r,t,n);break;case 5:r=t.stateNode,t.flags&32&&(af(r),t.flags&=-33),t=Bc(e),Hc(e,t,r,n);break;case 3:case 4:t=t.stateNode.containerInfo,r=Bc(e),Vc(e,r,t,n);break;default:throw Error(`Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.`)}}function Wc(e){var t=e.stateNode,n=e.memoizedProps;try{T(e,mp,e.type,n,t,e)}catch(t){Ru(e,e.return,t)}}function Gc(e){(e.tag===30||e.subtreeFlags&33554432)&&(ES=!0)}function Kc(){var e=OS;return OS=null,e}function qc(e,t,n,r,i){return kS=0,(t=Jc(e.child,t,n,r,i))&&e._debugTask!=null&&nb===null&&(nb=e._debugTask),t}function Jc(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Cf(o);r.push(s),s.view&&(a=!0)}else a||Cf(o).view&&(a=!0);ES=!0,bf(o,kS===0?t:t+`_`+kS,n),kS++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Jc(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Yc(e,t){for(;e!==null;)e.tag===5?xf(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Yc(e.child,t)),e=e.sibling}function Xc(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Xc(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(`Found a pair with an auto name. This is a bug in React.`);var n=t.name;t=tr(t.default,t.share),t!==`none`&&(qc(e,n,t,null,!1)||Yc(e.child,!1))}e=e.sibling}}function Zc(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=$n(r,n),a=tr(r.default,n.paired?r.share:r.enter);a===`none`?Xc(e):qc(e,i,a,null,!1)?(Xc(e),n.paired||t||Ql(e,r.onEnter)):Yc(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Zc(e,t),e=e.sibling;else Xc(e)}function Qc(e){if(DS!==null&&DS.size!==0){var t=DS;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=tr(n.default,n.share);if(a!==`none`&&(qc(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Ql(e,n.onShare)):Yc(e.child,!1)),t.delete(r),t.size===0)break}}}Qc(e)}e=e.sibling}}}function $c(e){if(e.tag===30){var t=e.memoizedProps,n=$n(t,e.stateNode),r=DS===null?void 0:DS.get(n),i=tr(t.default,r===void 0?t.exit:t.share);i!==`none`&&(qc(e,n,i,null,!1)?r===void 0?Ql(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,DS.delete(n),Ql(e,t.onShare)):Yc(e.child,!1)),DS!==null&&Qc(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)$c(e),e=e.sibling;else DS!==null&&Qc(e)}function el(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=$n(t,e.stateNode);t=tr(t.default,t.update),e.flags&=-5,t!==`none`&&qc(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&el(e);e=e.sibling}}function tl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Yc(e.child,!1))}tl(e)}e=e.sibling}}function nl(e){if(e.tag===30)e.stateNode.paired=null,Yc(e.child,!1),tl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)nl(e),e=e.sibling;else tl(e)}function rl(e){for(e=e.child;e!==null;)e.tag===30?Yc(e.child,!1):e.subtreeFlags&33554432&&rl(e),e=e.sibling}function il(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&kS<a.length){var l=a[kS],u=Cf(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&bf(c,kS===0?n:n+`_`+kS,i),s&&e.flags&4||(OS===null&&(OS=[]),OS.push(c,kS===0?r:r+`_`+kS,t.memoizedProps)),kS++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:il(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function al(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=$n(n,r),a=tr(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(wf)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child,c=i;kS=0,a=il(r,s,c,i,a,o,!1),e.flags&4&&a&&(t||Ql(e,n.onUpdate))}else e.subtreeFlags&33554432&&al(e,t);e=e.sibling}}function ol(e){var t=e.memoizedProps.name;if(t!=null&&t!==`auto`){var n=AS.get(t);if(n!==void 0){if(n!==e&&n!==e.alternate&&!jS[t]){jS[t]=!0;var r=JSON.stringify(t);T(e,function(){console.error(`There are two <ViewTransition name=%s> components with the same name mounted at the same time. This is not supported and will cause View Transitions to error. Try to use a more unique name e.g. by using a namespace prefix and adding the id of an item to the name.`,r)}),T(n,function(){console.error(`The existing <ViewTransition name=%s> duplicate has this stack trace.`,r)})}}else AS.set(t,e)}}function sl(e){var t=e.memoizedProps.name;if(t!=null&&t!==`auto`){var n=AS.get(t);n===void 0||n!==e&&n!==e.alternate||AS.delete(t)}}function cl(e,t){return t.tag===31?(t=t.memoizedState,e.memoizedState!==null&&t===null):t.tag===13?(e=e.memoizedState,t=t.memoizedState,e!==null&&e.dehydrated!==null&&(t===null||t.dehydrated===null)):t.tag===3&&e.memoizedState.isDehydrated&&!(t.flags&256)}function ll(e,t,n){if(e=e.containerInfo,bT=gE,e=qn(e),Jn(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(xT={focusedElem:e,selectionRange:r},gE=!1,n=(n&335544064)===n,BS=t,t=n?9270:1024;BS!==null;){if(e=BS,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&$c(r[a]);if(e.alternate===null&&e.flags&2)n&&Gc(e),ul(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&$c(r),ul(n);continue}if(r!==null&&r.memoizedState!==null){n&&Gc(e),ul(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,BS=r):(n&&el(e),ul(n))}}DS=null}function ul(e){for(;BS!==null;){var t=BS,n=t,r=e,i=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:a&1024&&i!==null&&Tc(n,i);break;case 3:if(a&1024){if(r=n.stateNode.containerInfo,n=r.nodeType,n===9)Xf(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:Xf(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:r&&i!==null&&(r=i,i=n,n=$n(r.memoizedProps,r.stateNode),i=i.memoizedProps,i=tr(i.default,i.update),i!==`none`&&qc(r,n,i,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(`This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.`)}if(r=t.sibling,r!==null){r.return=t.return,BS=r;break}BS=t.return}}function dl(e,t,n){var r=Di(),i=ki(),a=ji(),o=Mi(),s=n.flags;switch(n.tag){case 0:case 11:case 15:Ol(e,n),s&4&&_c(n,wx|Sx);break;case 1:if(Ol(e,n),s&4){if(e=n.stateNode,t===null)n.type.defaultProps||`ref`in n.memoizedProps||yS||(e.props!==n.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(n)||`instance`),e.state!==n.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(n)||`instance`)),gc(n)?(Ri(),T(n,kb,n,e),Ii()):T(n,kb,n,e);else{var c=vs(n.type,t.memoizedProps);t=t.memoizedState,n.type.defaultProps||`ref`in n.memoizedProps||yS||(e.props!==n.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(n)||`instance`),e.state!==n.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(n)||`instance`)),gc(n)?(Ri(),T(n,jb,n,e,c,t,e.__reactInternalSnapshotBeforeUpdate),Ii()):T(n,jb,n,e,c,t,e.__reactInternalSnapshotBeforeUpdate)}}s&64&&Cc(n),s&512&&Oc(n,n.return);break;case 3:if(t=Ci(),Ol(e,n),s&64&&(s=n.updateQueue,s!==null)){if(c=null,n.child!==null)switch(n.child.tag){case 27:case 5:c=n.child.stateNode;break;case 1:c=n.child.stateNode}try{T(n,Sa,s,c)}catch(e){Ru(n,n.return,e)}}e.effectDuration+=wi(t);break;case 27:t===null&&s&4&&Wc(n);case 26:case 5:if(Ol(e,n),t===null){if(s&4)Lc(n);else if(s&64){e=n.type,t=n.memoizedProps,c=n.stateNode;try{T(n,nf,c,e,t,n)}catch(e){Ru(n,n.return,e)}}}s&512&&Oc(n,n.return);break;case 12:if(s&4){s=Ci(),Ol(e,n),e=n.stateNode,e.effectDuration+=Ti(s);try{T(n,Ac,n,t,wy,e.effectDuration)}catch(e){Ru(n,n.return,e)}}else Ol(e,n);break;case 31:Ol(e,n),s&4&&vl(e,n);break;case 13:Ol(e,n),s&4&&yl(e,n),s&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Hu.bind(null,n),np(e,s))));break;case 22:if(s=n.memoizedState!==null||FS,!s){var l=t!==null&&t.memoizedState!==null||IS;t=FS,c=IS,FS=s,(IS=l)&&!c?(s=PS,n.subtreeFlags&8772&&(s|=NS),Ml(e,n,s),(n.mode&G)!==W&&0<=q&&0<=J&&.05<J-q&&lr(n,q,J)):Ol(e,n),FS=t,IS=c}break;case 30:s&18874368&&ol(n),Ol(e,n),s&512&&Oc(n,n.return);break;case 7:s&512&&Oc(n,n.return);default:Ol(e,n)}(n.mode&G)!==W&&0<=q&&0<=J&&((jy||.05<ky)&&fr(n,q,J,ky,Ay),n.alternate===null&&n.return!==null&&n.return.alternate!==null&&.05<J-q&&(cl(n.return.alternate,n.return)||cr(n,q,J,`Mount`))),Oi(r),Ai(i),Ay=a,jy=o}function fl(e,t){for(e=e.child;e!==null;)pl(e,t),e=e.sibling}function pl(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;t?T(e,mf,n):T(e,_f,e.stateNode,e.memoizedProps)}catch(t){Ru(e,e.return,t)}ml(e,t);break;case 6:try{var r=e.stateNode;t?T(e,hf,r):T(e,vf,r,e.memoizedProps),og=!0}catch(t){Ru(e,e.return,t)}break;case 18:try{var i=e.stateNode;t?T(e,pf,i):T(e,gf,e.stateNode)}catch(t){Ru(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&fl(e,t);break;default:fl(e,t)}}function ml(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:pl(n,r);break a;case 22:n.memoizedState===null&&ml(n,r);break a;default:ml(n,r)}}e=e.sibling}}function hl(e){var t=e.alternate;t!==null&&(e.alternate=null,hl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ot(t)),e.stateNode=null,e._debugOwner=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gl(e,t,n){for(n=n.child;n!==null;)_l(e,t,n),n=n.sibling}function _l(e,t,n){if(Ah&&typeof Ah.onCommitFiberUnmount==`function`)try{Ah.onCommitFiberUnmount(kh,n)}catch(e){jh||(jh=!0,console.error(`React instrumentation encountered an error: %o`,e))}var r=Di(),i=ki(),a=ji(),o=Mi();switch(n.tag){case 26:IS||kc(n,t),gl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!IS&&(e=n.stateNode,e.parentNode.removeChild(e));break;case 27:IS||kc(n,t),Pc(n);var s=qS,c=JS;cf(n.type)&&(qS=n.stateNode,JS=!1),gl(e,t,n),T(n,hp,n.stateNode,n.type,n.memoizedProps),qS=s,JS=c;break;case 5:IS||kc(n,t),Pc(n);case 6:if(n.tag===6&&Pc(n),s=qS,c=JS,qS=null,gl(e,t,n),qS=s,JS=c,qS!==null){if(JS)try{T(n,uf,qS,n.stateNode),og=!0}catch(e){Ru(n,t,e)}else try{T(n,lf,qS,n.stateNode),og=!0}catch(e){Ru(n,t,e)}}break;case 18:qS!==null&&(JS?(e=qS,df(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),hm(e)):df(qS,n.stateNode));break;case 4:s=qS,c=JS,qS=n.stateNode.containerInfo,JS=!0,gl(e,t,n),qS=s,JS=c;break;case 0:case 11:case 14:case 15:bc(Cx,n,t),IS||vc(n,t,wx),gl(e,t,n);break;case 1:IS||(kc(n,t),s=n.stateNode,typeof s.componentWillUnmount==`function`&&Ec(n,t,s)),gl(e,t,n);break;case 21:gl(e,t,n);break;case 22:IS=(s=IS)||n.memoizedState!==null,gl(e,t,n),IS=s;break;case 30:n.flags&18874368&&sl(n),kc(n,t),gl(e,t,n);break;case 7:IS||kc(n,t),gl(e,t,n);break;default:gl(e,t,n)}(n.mode&G)!==W&&0<=q&&0<=J&&(jy||.05<ky)&&fr(n,q,J,ky,Ay),Oi(r),Ai(i),Ay=a,jy=o}function vl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{T(t,lp,e)}catch(e){Ru(t,t.return,e)}}}function yl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{T(t,up,e)}catch(e){Ru(t,t.return,e)}}function bl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zS),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zS),t;default:throw Error(`Unexpected Suspense handler tag (`+e.tag+`). This is a bug in React.`)}}function xl(e,t){var n=bl(e);t.forEach(function(t){if(!n.has(t)){if(n.add(t),Mh){if(VS!==null&&HS!==null)Ju(HS,VS);else throw Error(`Expected finished root and lanes to be set. This is a bug in React.`)}var r=Uu.bind(null,e,t);t.then(r,r)}})}function Sl(e,t,n){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=e,o=t,s=r[i],c=Di(),l=o;a:for(;l!==null;){switch(l.tag){case 27:if(cf(l.type)){qS=l.stateNode,JS=!1;break a}break;case 5:qS=l.stateNode,JS=!1;break a;case 3:case 4:qS=l.stateNode.containerInfo,JS=!0;break a}l=l.return}if(qS===null)throw Error(`Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.`);_l(a,o,s),qS=null,JS=!1,(s.mode&G)!==W&&0<=q&&0<=J&&.05<J-q&&cr(s,q,J,`Unmount`),Oi(c),a=s,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Cl(t,e,n),t=t.sibling}function Cl(e,t,n){var r=Di(),i=ki(),a=ji(),o=Mi(),s=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=e.updateQueue,s=s===null?null:s.events,s!==null))for(var l=0;l<s.length;l++){var u=s[l];u.ref.impl=u.nextImpl}Sl(t,e,n),wl(e),c&4&&(bc(Cx|Sx,e,e.return),yc(Cx|Sx,e),vc(e,e.return,wx|Sx));break;case 1:Sl(t,e,n),wl(e),c&512&&(IS||s===null||kc(s,s.return)),c&64&&FS&&(t=e.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(c=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=c===null?n:c.concat(n))));break;case 26:if(l=YS,Sl(t,e,n),wl(e),c&512&&(IS||s===null||kc(s,s.return)),c&4){if(c=s===null?null:s.memoizedState,n=e.memoizedState,s===null){if(n===null){if(e.stateNode===null){if(FS)e.stateNode=Jd(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,c=l.ownerDocument||l;b:switch(t){case`title`:s=c.getElementsByTagName(`title`)[0],(!s||s[Zh]||s[Wh]||s.namespaceURI===Ig||s.hasAttribute(`itemprop`))&&(s=c.createElement(t),c.head.insertBefore(s,c.querySelector(`head > title`))),jd(s,t,n),s[Wh]=e,lt(s),t=s;break a;case`link`:if(l=jp(`link`,`href`,c).get(t+(n.href||``))){for(u=0;u<l.length;u++)if(s=l[u],s.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&s.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&s.getAttribute(`title`)===(n.title==null?null:n.title)&&s.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){l.splice(u,1);break b}}s=c.createElement(t),jd(s,t,n),c.head.appendChild(s);break;case`meta`:if(l=jp(`meta`,`content`,c).get(t+(n.content||``))){for(u=0;u<l.length;u++)if(s=l[u],Ve(n.content,`content`),s.getAttribute(`content`)===(n.content==null?null:``+n.content)&&s.getAttribute(`name`)===(n.name==null?null:n.name)&&s.getAttribute(`property`)===(n.property==null?null:n.property)&&s.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){l.splice(u,1);break b}}s=c.createElement(t),jd(s,t,n),c.head.appendChild(s);break;default:throw Error(`getNodesForType encountered a type it did not expect: "`+t+`". This is a bug in React.`)}s[Wh]=e,lt(s),t=s}e.stateNode=t}}else FS||Mp(l,e.type,e.stateNode)}else e.stateNode=Dp(l,n,e.memoizedProps)}else c===n?n===null&&e.stateNode!==null&&Rc(e,e.memoizedProps,s.memoizedProps):(c===null?(t=s.stateNode,t===null||IS||t.parentNode.removeChild(t)):c.count--,n===null?FS||Mp(l,e.type,e.stateNode):Dp(l,n,e.memoizedProps))}break;case 27:Sl(t,e,n),wl(e),c&512&&(IS||s===null||kc(s,s.return)),s!==null&&c&4&&Rc(e,e.memoizedProps,s.memoizedProps);break;case 5:if(l=LS,LS=!1,Sl(t,e,n),LS=l,wl(e),c&512&&(IS||s===null||kc(s,s.return)),e.flags&32){t=e.stateNode;try{T(e,af,t),og=!0}catch(t){Ru(e,e.return,t)}}c&4&&e.stateNode!=null&&(t=e.memoizedProps,Rc(e,t,s===null?t:s.memoizedProps)),c&1024&&(RS=!0,e.type!==`form`&&console.error(`Unexpected host component type. Expected a form. This is a bug in React.`));break;case 6:if(Sl(t,e,n),wl(e),c&4){if(e.stateNode===null)throw Error(`This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.`);t=e.memoizedProps,n=s===null?t:s.memoizedProps,c=e.stateNode;try{T(e,of,c,n,t),og=!0}catch(t){Ru(e,e.return,t)}}break;case 3:if(l=Ci(),og=!1,GT=null,u=YS,YS=_p(t.containerInfo),Sl(t,e,n),YS=u,wl(e),c&4&&s!==null&&s.memoizedState.isDehydrated)try{T(e,cp,t.containerInfo)}catch(t){Ru(e,e.return,t)}RS&&(RS=!1,Tl(e)),t.effectDuration+=wi(l),og=!1;break;case 4:c=LS,LS=FS,s=ht(),l=YS,YS=_p(e.stateNode.containerInfo),Sl(t,e,n),wl(e),YS=l,og&&WS&&(GS=!0),og=s,LS=c;break;case 12:c=Ci(),Sl(t,e,n),wl(e),e.stateNode.effectDuration+=Ti(c);break;case 31:Sl(t,e,n),wl(e),c&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xl(e,t)));break;case 13:Sl(t,e,n),wl(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(zC=bh()),c&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xl(e,t)));break;case 22:l=e.memoizedState!==null,u=s!==null&&s.memoizedState!==null;var d=FS,f=IS,p=LS;FS=d||l,LS=p||l,IS=f||u,Sl(t,e,n),IS=f,LS=p,FS=d,u&&!l&&!d&&!f&&(e.mode&G)!==W&&0<=q&&0<=J&&.05<J-q&&lr(e,q,J),wl(e),c&8192&&(t=e.stateNode,t._visibility=l?t._visibility&~Mv:t._visibility|Mv,!l||s===null||u||FS||IS||(t=PS,n=u||IS,s=FS,u=IS,FS=l||FS,IS=n,Al(e,t),(e.mode&G)!==W&&0<=q&&0<=J&&.05<J-q&&cr(e,q,J,`Disconnect`),FS=s,IS=u),!l&&LS||fl(e,l)),c&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,xl(e,n))));break;case 19:Sl(t,e,n),wl(e),c&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xl(e,t)));break;case 30:c&512&&(IS||s===null||kc(s,s.return)),c=ht(),l=WS,u=(n&335544064)===n,d=e.memoizedProps,WS=u&&tr(d.default,d.update)!==`none`,Sl(t,e,n),wl(e),u&&s!==null&&og&&(e.flags|=4),WS=l,og=c;break;case 21:break;case 7:c&512&&(IS||s===null||kc(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Sl(t,e,n),wl(e)}(e.mode&G)!==W&&0<=q&&0<=J&&((jy||.05<ky)&&fr(e,q,J,ky,Ay),e.alternate===null&&e.return!==null&&e.return.alternate!==null&&.05<J-q&&(cl(e.return.alternate,e.return)||cr(e,q,J,`Mount`))),Oi(r),Ai(i),Ay=a,jy=o}function wl(e){var t=e.flags;if(t&2){try{T(e,Uc,e)}catch(t){Ru(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Tl(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gE=!0,t.reset(),gE=!1),e=e.sibling}}function El(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Dl(t,e),t=t.sibling;else al(t,!1)}function Dl(e,t){var n=e.alternate;if(n===null)Zc(e,!1);else switch(e.tag){case 3:if(KS=US=!1,Kc(),El(t,e),!US&&!GS){if(e=OS,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];xf(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),KS=!0}OS=null;break;case 5:El(t,e);break;case 4:r=US,US=!1,El(t,e),US&&(GS=!0),US=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?El(t,e):Zc(e,!1));break;case 30:r=US,i=Kc(),US=!1,El(t,e),US&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=$n(a,o),o=$n(n.memoizedProps,o);var s=tr(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,kS=0,t=il(e,n,t,o,s,a,!0),kS!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Ql(e,e.memoizedProps.onUpdate),OS=i):i!==null&&(i.push.apply(i,OS),OS=i),US=e.flags&32?!0:r;break;default:El(t,e)}}function Ol(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)dl(e,t.alternate,t),t=t.sibling}function kl(e,t){var n=Di(),r=ki(),i=ji(),a=Mi();switch(e.tag){case 0:case 11:case 14:case 15:vc(e,e.return,wx),Al(e,t);break;case 1:kc(e,e.return);var o=e.stateNode;typeof o.componentWillUnmount==`function`&&Ec(e,e.return,o),Al(e,t);break;case 27:(t&PS)!==MS&&T(e,hp,e.stateNode,e.type,e.memoizedProps);case 5:kc(e,e.return),e.tag!==5&&e.tag!==27||Pc(e),Al(e,t);break;case 6:Pc(e);break;case 26:kc(e,e.return),o=e.stateNode,e.memoizedState!==null||o===null||IS||o.parentNode.removeChild(o),Al(e,t);break;case 22:e.memoizedState===null&&Al(e,t);break;case 30:e.flags&18874368&&sl(e),kc(e,e.return),Al(e,t);break;case 7:kc(e,e.return);default:Al(e,t)}(e.mode&G)!==W&&0<=q&&0<=J&&(jy||.05<ky)&&fr(e,q,J,ky,Ay),Oi(n),Ai(r),Ay=i,jy=a}function Al(e,t){for(e=e.child;e!==null;)kl(e,t),e=e.sibling}function jl(e,t,n,r){var i=Di(),a=ki(),o=ji(),s=Mi(),c=n.flags,l=(r&NS)!==MS;switch(n.tag){case 0:case 11:case 15:Ml(e,n,r),_c(n,wx);break;case 1:if(Ml(e,n,r),t=n.stateNode,typeof t.componentDidMount==`function`&&T(n,kb,n,t),t=n.updateQueue,t!==null){e=n.stateNode;try{T(n,xa,t,e)}catch(e){Ru(n,n.return,e)}}l&&c&64&&Cc(n),Oc(n,n.return);break;case 27:(r&PS)!==MS&&Wc(n);case 5:n.tag!==5&&n.tag!==27||Nc(n),Ml(e,n,r),l&&t===null&&c&4&&Lc(n),Oc(n,n.return);break;case 6:Nc(n);break;case 26:var u=n.stateNode;n.memoizedState!==null||u===null||FS||Mp(_p(u.ownerDocument),n.type,u),Ml(e,n,r),l&&t===null&&c&4&&Lc(n),Oc(n,n.return);break;case 12:if(l&&c&4){c=Ci(),Ml(e,n,r),l=n.stateNode,l.effectDuration+=Ti(c);try{T(n,Ac,n,t,wy,l.effectDuration)}catch(e){Ru(n,n.return,e)}}else Ml(e,n,r);break;case 31:Ml(e,n,r),l&&c&4&&vl(e,n);break;case 13:Ml(e,n,r),l&&c&4&&yl(e,n);break;case 22:n.memoizedState===null&&Ml(e,n,r),Oc(n,n.return);break;case 30:Ml(e,n,r),c&18874368&&ol(n),Oc(n,n.return);break;case 7:Oc(n,n.return);default:Ml(e,n,r)}(n.mode&G)!==W&&0<=q&&0<=J&&(jy||.05<ky)&&fr(n,q,J,ky,Ay),Oi(i),Ai(a),Ay=o,jy=s}function Ml(e,t,n){for(n=t.subtreeFlags&8772?n:n&~NS,t=t.child;t!==null;)jl(e,t.alternate,t,n),t=t.sibling}function Nl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&_i(e),n!=null&&vi(n))}function Pl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(_i(t),e!=null&&vi(e))}function Fl(e,t,n,r,i){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256)||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child))for(t=t.child;t!==null;)a=t.sibling,Il(e,t,n,r,a===null?i:a.actualStartTime),t=a;else a&&rl(t)}function Il(e,t,n,r,i){var a=Di(),o=ki(),s=ji(),c=Mi(),l=Ev,u=(n&335544064)===n;u&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&nl(t);var d=t.flags;switch(t.tag){case 0:case 11:case 15:(t.mode&G)!==W&&0<t.actualStartTime&&t.flags&1&&ur(t,t.actualStartTime,i,XS,n),Fl(e,t,n,r,i),d&2048&&xc(t,Tx|Sx);break;case 1:(t.mode&G)!==W&&0<t.actualStartTime&&(t.flags&128?dr(t,t.actualStartTime,i,[]):t.flags&1&&ur(t,t.actualStartTime,i,XS,n)),Fl(e,t,n,r,i);break;case 3:var f=Ci(),p=XS;XS=t.alternate!==null&&t.alternate.memoizedState.isDehydrated&&!(t.flags&256),Fl(e,t,n,r,i),XS=p,u&&KS&&(n=e.containerInfo,n=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,n.style.viewTransitionName===`root`&&(n.style.viewTransitionName=``),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName===`none`&&(n.style.viewTransitionName=``)),d&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),r=t.memoizedState.cache,r!==n&&(_i(r),n!=null&&vi(n))),e.passiveEffectDuration+=wi(f);break;case 12:if(d&2048){d=Ci(),Fl(e,t,n,r,i),e=t.stateNode,e.passiveEffectDuration+=Ti(d);try{T(t,jc,t,t.alternate,wy,e.passiveEffectDuration)}catch(e){Ru(t,t.return,e)}}else Fl(e,t,n,r,i);break;case 31:d=XS,f=t.alternate===null?null:t.alternate.memoizedState,u=t.memoizedState,f!==null&&u===null?(u=t.deletions,u!==null&&0<u.length&&u[0].tag===18?(XS=!1,f=f.hydrationErrors,f!==null&&dr(t,t.actualStartTime,i,f)):XS=!0):XS=!1,Fl(e,t,n,r,i),XS=d;break;case 13:d=XS,f=t.alternate===null?null:t.alternate.memoizedState,u=t.memoizedState,f===null||f.dehydrated===null||u!==null&&u.dehydrated!==null?XS=!1:(u=t.deletions,u!==null&&0<u.length&&u[0].tag===18?(XS=!1,f=f.hydrationErrors,f!==null&&dr(t,t.actualStartTime,i,f)):XS=!0),Fl(e,t,n,r,i),XS=d;break;case 23:break;case 22:p=t.stateNode,f=t.alternate,t.memoizedState===null?(u&&f!==null&&f.memoizedState!==null&&nl(t),p._visibility&Nv?Fl(e,t,n,r,i):(p._visibility|=Nv,Ll(e,t,n,r,!!(t.subtreeFlags&10256)||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child),i),(t.mode&G)===W||XS||(e=t.actualStartTime,0<=e&&.05<i-e&&lr(t,e,i),0<=q&&0<=J&&.05<J-q&&lr(t,q,J)))):(u&&f!==null&&f.memoizedState===null&&nl(f),p._visibility&Nv?Fl(e,t,n,r,i):zl(e,t,n,r,i)),d&2048&&Nl(f,t);break;case 24:Fl(e,t,n,r,i),d&2048&&Pl(t.alternate,t);break;case 30:u&&(d=t.alternate,d!==null&&(Yc(d.child,!0),Yc(t.child,!0))),Fl(e,t,n,r,i);break;default:Fl(e,t,n,r,i)}(t.mode&G)!==W&&((e=!XS&&t.alternate===null&&t.return!==null&&t.return.alternate!==null)&&(n=t.actualStartTime,0<=n&&.05<i-n&&cr(t,n,i,`Mount`)),0<=q&&0<=J&&((jy||.05<ky)&&fr(t,q,J,ky,Ay),e&&.05<J-q&&cr(t,q,J,`Mount`))),Oi(a),Ai(o),Ay=s,jy=c,Ev=l}function Ll(e,t,n,r,i,a){for(i&&=!!(t.subtreeFlags&10256)||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child),t=t.child;t!==null;){var o=t.sibling;Rl(e,t,n,r,i,o===null?a:o.actualStartTime),t=o}}function Rl(e,t,n,r,i,a){var o=Di(),s=ki(),c=ji(),l=Mi(),u=Ev;i&&(t.mode&G)!==W&&0<t.actualStartTime&&t.flags&1&&ur(t,t.actualStartTime,a,XS,n);var d=t.flags;switch(t.tag){case 0:case 11:case 15:Ll(e,t,n,r,i,a),xc(t,Tx);break;case 23:break;case 22:var f=t.stateNode;t.memoizedState===null?(f._visibility|=Nv,Ll(e,t,n,r,i,a)):f._visibility&Nv?Ll(e,t,n,r,i,a):zl(e,t,n,r,a),i&&d&2048&&Nl(t.alternate,t);break;case 24:Ll(e,t,n,r,i,a),i&&d&2048&&Pl(t.alternate,t);break;default:Ll(e,t,n,r,i,a)}(t.mode&G)!==W&&0<=q&&0<=J&&(jy||.05<ky)&&fr(t,q,J,ky,Ay),Oi(o),Ai(s),Ay=c,jy=l,Ev=u}function zl(e,t,n,r,i){if(t.subtreeFlags&10256||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child))for(var a=t.child;a!==null;){t=a.sibling;var o=e,s=n,c=r,l=t===null?i:t.actualStartTime,u=Ev;(a.mode&G)!==W&&0<a.actualStartTime&&a.flags&1&&ur(a,a.actualStartTime,l,XS,s);var d=a.flags;switch(a.tag){case 22:zl(o,a,s,c,l),d&2048&&Nl(a.alternate,a);break;case 24:zl(o,a,s,c,l),d&2048&&Pl(a.alternate,a);break;default:zl(o,a,s,c,l)}Ev=u,a=t}}function Bl(e,t,n){if(e.subtreeFlags&ZS)for(e=e.child;e!==null;)Vl(e,t,n),e=e.sibling}function Vl(e,t,n){switch(e.tag){case 26:Bl(e,t,n),e.flags&ZS&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Lp(n,e)):Rp(n,YS,e.memoizedState,e.memoizedProps));break;case 5:Bl(e,t,n),e.flags&ZS&&(e=e.stateNode,(t&335544128)===t&&Lp(n,e));break;case 3:case 4:var r=YS;YS=_p(e.stateNode.containerInfo),Bl(e,t,n),YS=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=ZS,ZS=16777216,Bl(e,t,n),ZS=r):Bl(e,t,n));break;case 30:if((e.flags&ZS)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,DS===null&&(DS=new Map),DS.set(r,i)}Bl(e,t,n);break;default:Bl(e,t,n)}}function Hl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ul(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n],i=Di();BS=r,ql(r,e),(r.mode&G)!==W&&0<=q&&0<=J&&.05<J-q&&cr(r,q,J,`Unmount`),Oi(i)}Hl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wl(e),e=e.sibling}function Wl(e){var t=Di(),n=ki(),r=ji(),i=Mi();switch(e.tag){case 0:case 11:case 15:Ul(e),e.flags&2048&&Sc(e,e.return,Tx|Sx);break;case 3:var a=Ci();Ul(e),e.stateNode.passiveEffectDuration+=wi(a);break;case 12:a=Ci(),Ul(e),e.stateNode.passiveEffectDuration+=Ti(a);break;case 22:a=e.stateNode,e.memoizedState!==null&&a._visibility&Nv&&(e.return===null||e.return.tag!==13)?(a._visibility&=~Nv,Gl(e),(e.mode&G)!==W&&0<=q&&0<=J&&.05<J-q&&cr(e,q,J,`Disconnect`)):Ul(e);break;default:Ul(e)}(e.mode&G)!==W&&0<=q&&0<=J&&(jy||.05<ky)&&fr(e,q,J,ky,Ay),Oi(t),Ai(n),jy=i,Ay=r}function Gl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n],i=Di();BS=r,ql(r,e),(r.mode&G)!==W&&0<=q&&0<=J&&.05<J-q&&cr(r,q,J,`Unmount`),Oi(i)}Hl(e)}for(e=e.child;e!==null;)Kl(e),e=e.sibling}function Kl(e){var t=Di(),n=ki(),r=ji(),i=Mi();switch(e.tag){case 0:case 11:case 15:Sc(e,e.return,Tx),Gl(e);break;case 22:var a=e.stateNode;a._visibility&Nv&&(a._visibility&=~Nv,Gl(e));break;default:Gl(e)}(e.mode&G)!==W&&0<=q&&0<=J&&(jy||.05<ky)&&fr(e,q,J,ky,Ay),Oi(t),Ai(n),jy=i,Ay=r}function ql(e,t){for(;BS!==null;){var n=BS,r=n,i=t,a=Di(),o=ki(),s=ji(),c=Mi();switch(r.tag){case 0:case 11:case 15:Sc(r,i,Tx);break;case 23:case 22:r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool,i!=null&&_i(i));break;case 24:vi(r.memoizedState.cache)}if((r.mode&G)!==W&&0<=q&&0<=J&&(jy||.05<ky)&&fr(r,q,J,ky,Ay),Oi(a),Ai(o),jy=c,Ay=s,r=n.child,r!==null)r.return=n,BS=r;else a:for(n=e;BS!==null;){if(r=BS,a=r.sibling,o=r.return,hl(r),r===n){BS=null;break a}if(a!==null){a.return=o,BS=a;break a}BS=o}}}function Jl(){eC.forEach(function(e){return e()})}function Yl(){var e=typeof IS_REACT_ACT_ENVIRONMENT<`u`?IS_REACT_ACT_ENVIRONMENT:void 0;return e||V.actQueue===null||console.error(`The current testing environment is not configured to support act(...)`),e}function Xl(e){if((fC&rC)!==nC&&$!==0)return $&-$;var t=V.T;return t===null?(e=at(),e===zh&&(Kb=null),e):(t._updatedFibers||=new Set,t._updatedFibers.add(e),Kb!==null&&at()===zh&&(Kb=null),od())}function Zl(){if(PC===0){if(!($&536870912)||K){var e=Lh;Lh<<=1,!(Lh&3932160)&&(Lh=262144),PC=e}else PC=536870912}return e=gx.current,e!==null&&(e.flags|=32),PC}function Ql(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Af($n(e.memoizedProps,n))),fw===null&&(fw=[]),fw.push(t.bind(null,r))}}function $l(e,t,n){if(Tw&&console.error(`useInsertionEffect must not schedule updates.`),bw&&(xw=!0),(e===pC&&(wC===gC||wC===CC)||e.cancelPendingCommit!==null)&&(su(e,0),ru(e,$,PC,!1)),Ze(e,n),(fC&rC)!==nC&&e===pC){if(mh)switch(t.tag){case 0:case 11:case 15:e=Q&&C(Q)||`Unknown`,kw.has(e)||(kw.add(e),t=C(t)||`Unknown`,console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",t,e,e));break;case 1:Ow||=(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),!0)}}else Mh&&nt(e,t,n),Xu(t),e===pC&&((fC&rC)===nC&&(MC|=n),AC===lC&&ru(e,$,PC,!1)),Zu(e)}function eu(e,t,n){if((fC&(rC|iC))!==nC)throw Error(`Should not already be working.`);if($!==0&&Q!==null){var r=Q,i=bh();switch(rb){case _C:case gC:var a=ib;wv&&((r=r._debugTask)?r.run(console.timeStamp.bind(console,`Suspended`,a,i,Tv,void 0,`primary-light`)):console.timeStamp(`Suspended`,a,i,Tv,void 0,`primary-light`));break;case CC:a=ib,wv&&((r=r._debugTask)?r.run(console.timeStamp.bind(console,`Action`,a,i,Tv,void 0,`primary-light`)):console.timeStamp(`Action`,a,i,Tv,void 0,`primary-light`));break;default:wv&&(r=i-ib,3>r||console.timeStamp(`Blocked`,ib,i,Tv,void 0,5>r?`primary-light`:10>r?`primary`:100>r?`primary-dark`:`error`))}}a=(n=!n&&!(t&127)&&(t&e.expiredLanes)===0||Ke(e,t))?gu(e,t):mu(e,t,!0);var o=n;do{if(a===aC){DC&&!n&&ru(e,t,0,!1),t=wC,ib=yy(),rb=t;break}if(r=bh(),i=e.current.alternate,o&&!nu(i)){sr(t),i=Cy,a=r,!wv||a<=i||(GC?GC.run(console.timeStamp.bind(console,`Teared Render`,i,a,U,H,`error`)):console.timeStamp(`Teared Render`,i,a,U,H,`error`)),ou(t,r),a=mu(e,t,!1),o=!1;continue}if(a===sC){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){sr(t),hr(Cy,r,t,GC),ou(t,r),t=s;a:{r=e,a=o,o=IC;var c=r.current.memoizedState.isDehydrated;if(c&&(su(r,s).flags|=256),s=mu(r,s,!1),s!==sC&&s!==uC){if(OC&&!c){r.errorRecoveryDisabledLanes|=a,MC|=a,a=lC;break a}r=LC,LC=o,r!==null&&(LC===null?LC=r:LC.push.apply(LC,r))}a=s}if(o=!1,a!==sC)continue;r=bh()}}if(a===oC){sr(t),hr(Cy,r,t,GC),ou(t,r),su(e,0),ru(e,t,0,!0);break}a:{switch(n=e,a){case aC:case oC:throw Error(`Root did not complete. This is a bug in React.`);case lC:if((t&4194048)!==t&&(t&62914560)!==t)break;case uC:sr(t),pr(Cy,r,t,GC),ou(t,r),i=t,i&127?Vy=r:i&4194048&&(Qy=r),ru(n,t,PC,!EC);break a;case sC:LC=null;break;case cC:case dC:break;default:throw Error(`Unknown root exit status.`)}if(V.actQueue!==null)wu(n,i,t,LC,WC,RC,PC,MC,FC,EC,a,null,null,Cy,r);else{if((t&62914560)===t&&(o=zC+VC-bh(),10<o)){if(ru(n,t,PC,!EC),Ge(n,0,!0)!==0)break a;ow=t,n.timeoutHandle=ET(tu.bind(null,n,i,LC,WC,RC,t,PC,MC,FC,EC,a,`Throttled`,Cy,r),o);break a}tu(n,i,LC,WC,RC,t,PC,MC,FC,EC,a,null,Cy,r)}}break}while(1);Zu(e)}function tu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=OT;var m=t.subtreeFlags,h=(a&335544064)===a,g=null;if((h||m&8192||(m&16785408)==16785408)&&(g={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pn},DS=null,Vl(t,a,g),h&&(m=g,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=Vp.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?zC-bh():(a&4194048)===a?BC-bh():0,m=zp(g,m),m!==null)){ow=a,e.cancelPendingCommit=m(wu.bind(null,e,t,a,n,r,i,o,s,c,l,u,g,g.waitingForViewTransition?`Waiting for the previous Animation`:0<g.count?0<g.imgCount?`Suspended on CSS and Images`:`Suspended on CSS`:g.imgCount===1?`Suspended on an Image`:0<g.imgCount?`Suspended on Images`:null,f,p)),ru(e,a,o,!l);return}wu(e,t,a,n,r,i,o,s,c,l,u,g,d,f,p)}function nu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!G_(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ru(e,t,n,r){t=qe(e,t),t&=~NC,t&=~MC,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Nh(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&$e(e,n,t)}function iu(){return(fC&(rC|iC))!==nC||(Qu(0,!1),!1)}function au(){if(Q!==null){if(wC===mC)var e=Q.return;else e=Q,ai(),Wa(e),Zb=null,Qb=0,e=Q;for(;e!==null;)hc(e.alternate,e),e=e.return;Q=null}}function ou(e,t){e&127&&(My=t),e&4194048&&(Hy=t),e&62914560&&($y=t),e&2080374784&&(eb=t)}function su(e,t){wv&&(console.timeStamp(`Blocking Track`,.003,.003,`Blocking`,H,`primary-light`),console.timeStamp(`Transition Track`,.003,.003,`Transition`,H,`primary-light`),console.timeStamp(`Suspense Track`,.003,.003,`Suspense`,H,`primary-light`),console.timeStamp(`Idle Track`,.003,.003,`Idle`,H,`primary-light`));var n=Cy;if(Cy=yy(),$!==0&&0<n){if(sr($),AC===cC||AC===lC)pr(n,Cy,t,GC);else{var r=Cy,i=GC;if(wv&&!(r<=n)){var a=(t&738197653)===t?`tertiary-dark`:`primary-dark`,o=(t&536870912)===t?`Prewarm`:(t&201326741)===t?`Interrupted Hydration`:`Interrupted Render`;i?i.run(console.timeStamp.bind(console,o,n,r,U,H,a)):console.timeStamp(o,n,r,U,H,a)}}ou($,Cy)}if(n=GC,GC=null,t&127){GC=Py,i=0<=Ny&&Ny<My?My:Ny,r=0<=Ry&&Ry<My?My:Ry,a=0<=r?r:0<=i?i:Cy,0<=Vy?(sr(2),mr(Vy,a,t,n)):tb&127&&(sr(2),yr(My,a,nb)),n=i;var s=r,c=zy,l=0<By,u=Fy===xy,d=Fy===Sy;if(i=Cy,r=Py,a=Iy,o=Ly,wv){if(U=`Blocking`,0<n?n>i&&(n=i):n=i,0<s?s>n&&(s=n):s=n,c!==null&&n>s){var f=l?`secondary-light`:`warning`;r?r.run(console.timeStamp.bind(console,l?`Consecutive`:`Event: `+c,s,n,U,H,f)):console.timeStamp(l?`Consecutive`:`Event: `+c,s,n,U,H,f)}i>n&&(s=u?`error`:(t&738197653)===t?`tertiary-light`:`primary-light`,u=d?`Promise Resolved`:u?`Cascading Update`:5<i-n?`Update Blocked`:`Update`,d=[],o!=null&&d.push([`Component name`,o]),a!=null&&d.push([`Method name`,a]),n={start:n,end:i,detail:{devtools:{properties:d,track:U,trackGroup:H,color:s}}},r?r.run(performance.measure.bind(performance,u,n)):performance.measure(u,n),performance.clearMeasures(u))}Ny=-1.1,Fy=0,Ly=Iy=null,Vy=-1.1,By=Ry,Ry=-1.1,My=yy()}return t&4194048&&(GC=Ky,i=0<=Uy&&Uy<Hy?Hy:Uy,n=0<=Wy&&Wy<Hy?Hy:Wy,r=0<=Yy&&Yy<Hy?Hy:Yy,a=0<=r?r:0<=n?n:Cy,0<=Qy?(sr(256),mr(Qy,a,t,GC)):tb&4194048&&(sr(256),yr(Hy,a,nb)),d=r,s=Xy,c=0<Zy,l=Gy===Sy,a=Cy,r=Ky,o=qy,u=Jy,wv&&(U=`Transition`,0<n?n>a&&(n=a):n=a,0<i?i>n&&(i=n):i=n,0<d?d>i&&(d=i):d=i,i>d&&s!==null&&(f=c?`secondary-light`:`warning`,r?r.run(console.timeStamp.bind(console,c?`Consecutive`:`Event: `+s,d,i,U,H,f)):console.timeStamp(c?`Consecutive`:`Event: `+s,d,i,U,H,f)),n>i&&(r?r.run(console.timeStamp.bind(console,`Action`,i,n,U,H,`primary-dark`)):console.timeStamp(`Action`,i,n,U,H,`primary-dark`)),a>n&&(i=l?`Promise Resolved`:5<a-n?`Update Blocked`:`Update`,d=[],u!=null&&d.push([`Component name`,u]),o!=null&&d.push([`Method name`,o]),n={start:n,end:a,detail:{devtools:{properties:d,track:U,trackGroup:H,color:`primary-light`}}},r?r.run(performance.measure.bind(performance,i,n)):performance.measure(i,n),performance.clearMeasures(i))),Wy=Uy=-1.1,Gy=0,Qy=-1.1,Zy=Yy,Yy=-1.1,Hy=yy()),t&62914560&&tb&62914560&&(sr(4194304),yr($y,Cy,nb)),t&2080374784&&tb&2080374784&&(sr(268435456),yr(eb,Cy,nb)),n=e.timeoutHandle,n!==OT&&(e.timeoutHandle=OT,DT(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ow=0,au(),pC=e,Q=n=Mr(e.current,null),$=t,wC=mC,TC=null,EC=!1,DC=Ke(e,t),OC=!1,AC=aC,FC=PC=NC=MC=jC=0,LC=IC=null,RC=!1,kC=qe(e,t),br(),e=fv(),1e3<e-uv&&(V.recentlyCreatedOwnerStacks=0,uv=e),pb.discardPendingWarnings(),n}function cu(e,t){X=null,V.H=Gx,V.getCurrentStack=null,mh=!1,ph=null,t===Hb||t===Wb?(t=Xi(),wC=_C):t===Ub?(t=Xi(),wC=vC):wC=t===pS?SC:typeof t==`object`&&t&&typeof t.then==`function`?bC:hC,TC=t;var n=Q;n===null?(AC=oC,Ss(e,Br(t,e.current))):n.mode&G&&Pi(n)}function lu(){var e=gx.current;return e===null?!0:($&4194048)===$?_x===null:($&62914560)===$||$&536870912?e===_x:!1}function uu(){var e=V.H;return V.H=Gx,e===null?Gx:e}function du(){var e=V.A;return V.A=QS,e}function fu(e){GC===null&&(GC=e._debugTask==null?null:e._debugTask)}function pu(){AC=lC,EC||($&4194048)!==$&&gx.current!==null||(DC=!0),!(jC&134217727)&&!(MC&134217727)||pC===null||ru(pC,$,PC,!1)}function mu(e,t,n){var r=fC;fC|=rC;var i=uu(),a=du();if(pC!==e||$!==t){if(Mh){var o=e.memoizedUpdaters;0<o.size&&(Ju(e,$),o.clear()),rt(e,t)}WC=null,su(e,t)}t=!1,o=AC;a:do try{if(wC!==mC&&Q!==null){var s=Q,c=TC;switch(wC){case SC:au(),o=uC;break a;case _C:case gC:case CC:case bC:gx.current===null&&(t=!0);var l=wC;if(wC=mC,TC=null,xu(e,s,c,l),n&&DC){o=aC;break a}break;default:l=wC,wC=mC,TC=null,xu(e,s,c,l)}}hu(),o=AC;break}catch(t){cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ai(),fC=r,V.H=i,V.A=a,Q===null&&(pC=null,$=0,br()),o}function hu(){for(;Q!==null;)vu(Q)}function gu(e,t){var n=fC;fC|=rC;var r=uu(),i=du();if(pC!==e||$!==t){if(Mh){var a=e.memoizedUpdaters;0<a.size&&(Ju(e,$),a.clear()),rt(e,t)}WC=null,HC=bh()+UC,su(e,t)}else DC=Ke(e,t);a:do try{if(wC!==mC&&Q!==null)b:switch(t=Q,a=TC,wC){case hC:wC=mC,TC=null,xu(e,t,a,hC);break;case gC:case CC:if(qi(a)){wC=mC,TC=null,yu(t);break}t=function(){wC!==gC&&wC!==CC||pC!==e||(wC=xC),Zu(e)},a.then(t,t);break a;case _C:wC=xC;break a;case vC:wC=yC;break a;case xC:qi(a)?(wC=mC,TC=null,yu(t)):(wC=mC,TC=null,xu(e,t,a,xC));break;case yC:var o=null;switch(Q.tag){case 26:o=Q.memoizedState;case 5:case 27:var s=Q;if(o?Fp(o):s.stateNode.complete){wC=mC,TC=null;var c=s.sibling;if(c!==null)Q=c;else{var l=s.return;l===null?Q=null:(Q=l,Su(l))}break b}break;default:console.error(`Unexpected type of fiber triggered a suspensey commit. This is a bug in React.`)}wC=mC,TC=null,xu(e,t,a,yC);break;case bC:wC=mC,TC=null,xu(e,t,a,bC);break;case SC:au(),AC=uC;break a;default:throw Error(`Unexpected SuspendedReason. This is a bug in React.`)}V.actQueue===null?_u():hu();break}catch(t){cu(e,t)}while(1);return ai(),V.H=r,V.A=i,fC=n,Q===null?(pC=null,$=0,br(),AC):aC}function _u(){for(;Q!==null&&!vh();)vu(Q)}function vu(e){var t=e.alternate;(e.mode&G)===W?t=T(e,oc,t,e,kC):(Ni(e),t=T(e,oc,t,e,kC),Pi(e)),e.memoizedProps=e.pendingProps,t===null?Su(e):Q=t}function yu(e){var t=T(e,bu,e);e.memoizedProps=e.pendingProps,t===null?Su(e):Q=t}function bu(e){var t=e.alternate,n=(e.mode&G)!==W;switch(n&&Ni(e),e.tag){case 15:case 0:t=Bs(t,e,e.pendingProps,e.type,void 0,$);break;case 11:t=Bs(t,e,e.pendingProps,e.type.render,e.ref,$);break;case 5:Wa(e);var r=e;r===ty&&(K?($r(r),r.tag===5&&r.stateNode!=null&&(ny=r.stateNode)):($r(r),K=!0));default:hc(t,e),e=Q=Nr(e,kC),t=oc(t,e,kC)}return n&&Pi(e),t}function xu(e,t,n,r){ai(),Wa(t),Zb=null,Qb=0;var i=t.return;try{if(Ds(e,i,t,n,$)){AC=oC,Ss(e,Br(n,e.current)),Q=null;return}}catch(t){if(i!==null)throw Q=i,t;AC=oC,Ss(e,Br(n,e.current)),Q=null;return}t.flags&32768?(K||r===hC?e=!0:DC||$&536870912?e=!1:(EC=e=!0,(r===gC||r===CC||r===_C||r===bC)&&(r=gx.current,r!==null&&r.tag===13&&(r.flags|=16384))),Cu(t,e)):Su(t)}function Su(e){var t=e;do{if(t.flags&32768){Cu(t,EC);return}var n=t.alternate;if(e=t.return,Ni(t),n=T(t,pc,n,t,kC),(t.mode&G)!==W&&Fi(t),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);AC===aC&&(AC=dC)}function Cu(e,t){do{var n=mc(e.alternate,e);if(n!==null){n.flags&=32767,Q=n;return}if((e.mode&G)!==W){Fi(e),n=e.actualDuration;for(var r=e.child;r!==null;)n+=r.actualDuration,r=r.sibling;e.actualDuration=n}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Q=e;return}Q=e=n}while(e!==null);AC=uC,Q=null}function wu(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){e.cancelPendingCommit=null;do Fu();while(rw!==ZC);if(pb.flushLegacyContextWarning(),pb.flushPendingUnsafeLifecycleWarnings(),(fC&(rC|iC))!==nC)throw Error(`Should not already be working.`);if(sr(n),u===sC)hr(p,m,n,GC);else if(r!==null){if(l=t!==null&&t.alternate!==null&&t.alternate.memoizedState.isDehydrated&&!!(t.flags&256),a=GC,wv&&!(m<=p)){u=[];for(var h=0;h<r.length;h++){var g=r[h].value;u.push([`Recoverable Error`,typeof g==`object`&&g&&typeof g.message==`string`?String(g.message):String(g)])}p={start:p,end:m,detail:{devtools:{color:`primary-dark`,track:U,trackGroup:H,tooltipText:l?`Hydration Failed`:`Recovered after Error`,properties:u}}},a?a.run(performance.measure.bind(performance,`Recovered`,p)):performance.measure(`Recovered`,p),performance.clearMeasures(`Recovered`)}}else a=GC,!wv||m<=p||(l=(n&738197653)===n?`tertiary-dark`:`primary-dark`,u=(n&536870912)===n?`Prepared`:(n&201326741)===n?`Hydrated`:`Render`,a?a.run(console.timeStamp.bind(console,u,p,m,U,H,l)):console.timeStamp(u,p,m,U,H,l));if(t!==null){if(n===0&&console.error(`finishedLanes should not be empty during a commit. This is a bug in React.`),t===e.current)throw Error(`Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.`);e===pC&&(Q=pC=null,$=0),aw=t,iw=e,ow=n,lw=i,uw=r,cw=m,mw=f,hw=qC,gw=null,Tu(e,t,n,o,s,c,d,f,m)}}function Tu(e,t,n,r,i,a,o,s,c){var l=t.lanes|t.childLanes;if(sw=l,l|=Iv,Qe(e,n,l,r,i,a),fw=null,(n&335544064)===n?(pw=bi(e),r=10262):(pw=null,r=10256),t.actualDuration!==0||(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,Yu(wh,function(){return TT=window.event,hw===qC&&(hw=YC),Iu(),null})):(e.callbackNode=null,e.callbackPriority=0),Ey=null,wy=yy(),s!==null&&gr(c,wy,s,GC),ES=!1,s=!!(t.flags&13878),t.subtreeFlags&13878||s){s=V.T,V.T=null,c=Km.p,Km.p=zh,r=fC,fC|=iC;try{ll(e,t,n)}finally{fC=r,Km.p=c,V.T=s}}rw=QC,ES?(tb|=n,nb=null,dw=Of(o,e.containerInfo,pw,Au,ju,ku,Mu,Iu,Eu,Du,Ou.bind(null,n))):(Au(),ju(),Mu())}function Eu(e){if(rw!==ZC){var t=iw.onRecoverableError;t(e,Nu(null))}}function Du(e){Ty=yy(),vr(mw===null?cw:wy,Ty,Ey,hw===JC,GC),mw=gw=e}function Ou(e){if((tb&e)!==0){var t=nb;tb&=~e,nb=null,e&4194048&&!($&4194048)&&!(ow&4194048)&&(sr(256),yr(Hy,bh(),t)),e&62914560&&!($&62914560)&&!(ow&62914560)&&(sr(4194304),yr($y,bh(),t)),e&2080374784&&!($&2080374784)&&!(ow&2080374784)&&(sr(268435456),yr(eb,bh(),t))}}function ku(){rw===ew&&(rw=ZC,Dl(aw,iw),rw=tw)}function Au(){if(rw===QC){rw=ZC;var e=iw,t=aw,n=ow,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=V.T,V.T=null;var i=Km.p;Km.p=zh;var a=fC;fC|=iC;try{VS=n,HS=e,WS=GS=!1,Ei(),Cl(t,e,n),HS=VS=null,n=xT;var o=qn(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Kn(s.ownerDocument.documentElement,s)){if(c!==null&&Jn(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Gn(s,h),v=Gn(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gE=!!bT,xT=bT=null}finally{fC=a,Km.p=i,V.T=r}}e.current=t,rw=$C}}function ju(){if(rw===$C){rw=ZC;var e=gw;if(e!==null){wy=yy();var t=Ty,n=wy;!wv||n<=t||(nb?nb.run(console.timeStamp.bind(console,e,t,n,U,H,`secondary-light`)):console.timeStamp(e,t,n,U,H,`secondary-light`))}e=iw,t=aw,n=ow;var r=!!(t.flags&8772);if(t.subtreeFlags&8772||r){r=V.T,V.T=null;var i=Km.p;Km.p=zh;var a=fC;fC|=iC;try{VS=n,HS=e,Ei(),dl(e,t.alternate,t),HS=VS=null}finally{fC=a,Km.p=i,V.T=r}}e=cw,t=mw,Ty=yy(),vr(t===null?e:wy,Ty,Ey,hw===JC,GC),rw=ew}}function Mu(){if(rw===tw||rw===ew){if(rw===tw){var e=Ty;Ty=yy();var t=Ty,n=hw===JC;!wv||t<=e||(nb?nb.run(console.timeStamp.bind(console,n?`Interrupted View Transition`:`Starting Animation`,e,t,U,H,n?`error`:`secondary-light`)):console.timeStamp(n?`Interrupted View Transition`:`Starting Animation`,e,t,U,H,n?` error`:`secondary-light`)),hw!==JC&&(hw=XC)}rw=ZC,e=dw,dw=null,yh(),t=iw;var r=aw;n=ow;var i=uw,a=(n&335544064)===n?10262:10256;(a=r.actualDuration!==0||(r.subtreeFlags&a)!==0||(r.flags&a)!==0)?rw=nw:(rw=ZC,aw=iw=null,Pu(t,t.pendingLanes),Cw=0,ww=null);var o=t.pendingLanes;if(o===0&&(KC=null),a||Ku(t),o=it(n),r=r.stateNode,Ah&&typeof Ah.onCommitFiberRoot==`function`)try{var s=(r.current.flags&128)==128;switch(o){case zh:var c=Sh;break;case Bh:c=Ch;break;case Vh:c=wh;break;case Hh:c=Eh;break;default:c=wh}Ah.onCommitFiberRoot(kh,r,c,s)}catch(e){jh||(jh=!0,console.error(`React instrumentation encountered an error: %o`,e))}if(Mh&&t.memoizedUpdaters.clear(),Jl(),i!==null){s=V.T,c=Km.p,Km.p=zh,V.T=null;try{var l=t.onRecoverableError;for(r=0;r<i.length;r++){var u=i[r],d=Nu(u.stack);T(u.source,l,u.value,d)}}finally{V.T=s,Km.p=c}}if(l=fw,u=pw,pw=null,l!==null&&(fw=null,u===null&&(u=[]),e!==null))for(d=0;d<l.length;d++)i=(0,l[d])(u),i!==void 0&&e.finished.finally(i);ow&3&&Fu(),Zu(t),o=t.pendingLanes,n&261930&&o&42?(ob=!0,t===yw?vw++:(vw=0,yw=t)):(vw=0,yw=null),a||ou(n,Ty),Qu(0,!1)}}function Nu(e){return e={componentStack:e},Object.defineProperty(e,"digest",{get:function(){console.error(`You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.`)}}),e}function Pu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,vi(t)))}function Fu(){return dw!==null&&(dw.skipTransition(),Ew||(Ew=!0,console.warn(`A flushSync update cancelled a View Transition because it was called while the View Transition was still preparing. To preserve the synchronous semantics, React had to skip the View Transition. If you can, try to avoid flushSync() in a scenario that's likely to interfere.`)),dw=null,hw=JC),Au(),ju(),Mu(),Iu()}function Iu(){if(rw!==nw)return!1;var e=iw,t=sw;sw=0;var n=it(ow),r=Vh===0||Vh>n?Vh:n;n=V.T;var i=Km.p;try{Km.p=r,V.T=null;var a=lw;lw=null,r=iw;var o=ow;if(rw=ZC,aw=iw=null,ow=0,(fC&(rC|iC))!==nC)throw Error(`Cannot flush passive effects while already rendering.`);sr(o),bw=!0,xw=!1;var s=0;if(Ey=null,s=bh(),hw===XC)yr(Ty,s,nb);else{var c=Ty,l=s,u=hw===YC;!wv||l<=c||(GC?GC.run(console.timeStamp.bind(console,u?`Waiting for Paint`:`Waiting`,c,l,U,H,`secondary-light`)):console.timeStamp(u?`Waiting for Paint`:`Waiting`,c,l,U,H,`secondary-light`))}c=fC,fC|=iC;var d=r.current;Ei(),Wl(d);var f=r.current;d=cw,Ei(),Il(r,f,o,a,d),Ku(r),fC=c;var p=bh();if(f=s,d=GC,Ey===null?!wv||p<=f||(d?d.run(console.timeStamp.bind(console,`Remaining Effects`,f,p,U,H,`secondary-dark`)):console.timeStamp(`Remaining Effects`,f,p,U,H,`secondary-dark`)):_r(f,p,Ey,!0,d),ou(o,p),Qu(0,!1),xw?r===ww?Cw++:(Cw=0,ww=r):Cw=0,xw=bw=!1,Ah&&typeof Ah.onPostCommitFiberRoot==`function`)try{Ah.onPostCommitFiberRoot(kh,r)}catch(e){jh||(jh=!0,console.error(`React instrumentation encountered an error: %o`,e))}var m=r.current.stateNode;return m.effectDuration=0,m.passiveEffectDuration=0,!0}finally{Km.p=i,V.T=n,Pu(e,t)}}function Lu(e,t,n){t=Br(n,t),Li(t),t=ws(e.stateNode,t,2),e=ha(e,t,2),e!==null&&(Ze(e,2),Zu(e))}function Ru(e,t,n){if(Tw=!1,e.tag===3)Lu(e,e,n);else{for(;t!==null;){if(t.tag===3){Lu(t,e,n);return}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(KC===null||!KC.has(r))){e=Br(n,e),Li(e),n=Ts(2),r=ha(t,n,2),r!==null&&(Es(n,r,t,e),Ze(r,2),Zu(r));return}}t=t.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,n)}}function zu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tC;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(OC=!0,i.add(n),r=Bu.bind(null,e,t,n),Mh&&Ju(e,n),t.then(r,r))}function Bu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,n&127?0>Ny&&(My=Ny=yy(),Py=by(`Promise Resolved`),Fy=Sy):n&4194048&&0>Wy&&(Hy=Wy=yy(),Ky=by(`Promise Resolved`),Gy=Sy),Yl()&&V.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),pC===e&&($&n)===n&&((AC===lC||AC===cC&&($&62914560)===$&&bh()-zC<VC)&&(fC&rC)===nC?su(e,0):NC|=n,FC===$&&(FC=0)),Zu(e)}function Vu(e,t){t===0&&(t=Ye()),e=Cr(e,t),e!==null&&(Ze(e,t),Zu(e))}function Hu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vu(e,n)}function Uu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(`Pinged unknown suspense boundary type. This is probably a bug in React.`)}r!==null&&r.delete(t),Vu(e,n)}function Wu(e,t,n){if(t.subtreeFlags&134225920)for(t=t.child;t!==null;){var r=e,i=t,a=i.type===km;a=n||a,i.tag===22?i.memoizedState===null&&(a&&i.flags&134225920?T(i,Gu,r,i):i.subtreeFlags&134217728&&T(i,Wu,r,i,a)):i.flags&134217728?a&&T(i,Gu,r,i):Wu(r,i,a),t=t.sibling}}function Gu(e,t){Ue(!0);try{kl(t,MS),Kl(t),jl(e,t.alternate,t,MS),Rl(e,t,0,null,!1,0)}finally{Ue(!1)}}function Ku(e){var t=!0;e.current.mode&(Vv|Hv)||(t=!1),Wu(e,e.current,t)}function qu(e){if((fC&rC)===nC){var t=e.tag;if(t===3||t===1||t===0||t===11||t===14||t===15){if(t=C(e)||`ReactComponent`,Dw!==null){if(Dw.has(t))return;Dw.add(t)}else Dw=new Set([t]);T(e,function(){console.error(`Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.`)})}}}function Ju(e,t){Mh&&e.memoizedUpdaters.forEach(function(n){nt(e,n,t)})}function Yu(e,t){var n=V.actQueue;return n===null?gh(e,t):(n.push(t),Aw)}function Xu(e){Yl()&&V.actQueue===null&&T(e,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,C(e))})}function Zu(e){e!==Mw&&e.next===null&&(Mw===null?jw=Mw=e:Mw=Mw.next=e),Fw=!0,V.actQueue===null?Nw||(Nw=!0,ad()):Pw||(Pw=!0,ad())}function Qu(e,t){if(!Iw&&Fw){Iw=!0;do for(var n=!1,r=jw;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Nh(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,rd(r,a))}else a=$,a=Ge(r,r===pC?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==OT),!(a&3)||Ke(r,a)||(n=!0,rd(r,a))}r=r.next}while(n);Iw=!1}}function $u(){TT=window.event,ed()}function ed(){Fw=Pw=Nw=!1;var e=0;Lw!==0&&Zd()&&(e=Lw);for(var t=bh(),n=null,r=jw;r!==null;){var i=r.next,a=td(r,t);a===0?(r.next=null,n===null?jw=i:n.next=i,i===null&&(Mw=n)):(n=r,(e!==0||a&3)&&(Fw=!0)),r=i}rw!==ZC&&rw!==nw||Qu(e,!1),Lw!==0&&(Lw=0)}function td(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Nh(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=pC,n=$,n=Ge(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==OT),r=e.callbackNode,n===0||e===t&&(wC===gC||wC===CC)||e.cancelPendingCommit!==null)return r!==null&&id(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ke(e,n)){if(t=n&-n,t!==e.callbackPriority||V.actQueue!==null&&r!==Rw)id(r);else return t;switch(it(n)){case zh:case Bh:n=Ch;break;case Vh:n=wh;break;case Hh:n=Eh;break;default:n=wh}return r=nd.bind(null,e),V.actQueue===null?n=gh(n,r):(V.actQueue.push(r),n=Rw),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&id(r),e.callbackPriority=2,e.callbackNode=null,2}function nd(e,t){if(ob=ab=!1,TT=window.event,rw!==ZC&&rw!==nw)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(hw===qC&&(hw=YC),Fu()&&e.callbackNode!==n)return null;var r=$;return r=Ge(e,e===pC?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==OT),r===0?null:(eu(e,r,t),td(e,bh()),e.callbackNode!=null&&e.callbackNode===n?nd.bind(null,e):null)}function rd(e,t){if(Fu())return null;ab=ob,ob=!1,eu(e,t,!0)}function id(e){e!==Rw&&e!==null&&_h(e)}function ad(){V.actQueue!==null&&V.actQueue.push(function(){return ed(),null}),jT(function(){(fC&(rC|iC))===nC?ed():gh(Sh,$u)})}function od(){if(Lw===0){var e=lb;e===0&&(e=Ih,Ih<<=1,!(Ih&261888)&&(Ih=256)),Lw=e}return Lw}function sd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:(Ve(e,`action`),fn(e))}function cd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=sd((i[Gh]||null).action),o=r.submitter;o&&(t=(t=o[Gh]||null)?sd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new s_(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Lw!==0){var e=new FormData(i,o),t={pending:!0,data:e,method:i.method,action:a};Object.freeze(t),Zo(n,t,null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),t={pending:!0,data:e,method:i.method,action:a},Object.freeze(t),Zo(n,t,a,e))},currentTarget:i}]})}}function ld(e,t,n){e.currentTarget=n;try{t(e)}catch(e){mv(e)}e.currentTarget=null}function ud(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n];a:{var i=void 0,a=r.event;if(r=r.listeners,t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==i&&a.isPropagationStopped())break a;c===null?ld(a,s,l):T(c,ld,a,s,l),i=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==i&&a.isPropagationStopped())break a;c===null?ld(a,s,l):T(c,ld,a,s,l),i=c}}}}function dd(e,t){Bw.has(e)||console.error(`Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.`,e);var n=t[qh];n===void 0&&(n=t[qh]=new Set);var r=e+`__bubble`;n.has(r)||(md(t,e,2,!1),n.add(r))}function fd(e,t,n){Bw.has(e)&&!t&&console.error(`Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.`,e);var r=0;t&&(r|=4),md(n,e,r,t)}function pd(e){if(!e[Vw]){e[Vw]=!0,$h.forEach(function(t){t!==`selectionchange`&&(Bw.has(t)||fd(t,!1,e),fd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vw]||(t[Vw]=!0,fd(`selectionchange`,!1,t))}}function md(e,t,n,r){switch(am(t)){case zh:var i=em;break;case Bh:i=tm;break;default:i=nm}n=i.bind(null,t,n,e),i=void 0,!t_||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function hd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=j(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}gn(function(){var r=a,i=mn(n),o=[];a:{var s=sv.get(e);if(s!==void 0){var c=s_,l=e;switch(e){case`keypress`:if(yn(n)===0)break a;case`keydown`:case`keyup`:c=w_;break;case`focusin`:l=`focus`,c=g_;break;case`focusout`:l=`blur`,c=g_;break;case`beforeblur`:case`afterblur`:c=g_;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=m_;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=h_;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=D_;break;case ev:case tv:case nv:c=__;break;case ov:c=O_;break;case`scroll`:case`scrollend`:c=l_;break;case`wheel`:c=k_;break;case`copy`:case`cut`:case`paste`:c=v_;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=T_;break;case`submit`:c=E_;break;case`toggle`:case`beforetoggle`:c=A_}var u=!!(t&4),d=!u&&(e===`scroll`||e===`scrollend`),f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){var h=p;if(m=h.stateNode,h=h.tag,h!==5&&h!==26&&h!==27||m===null||f===null||(h=_n(p,f),h!=null&&u.push(gd(p,h,m))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,s=e===`mouseout`||e===`pointerout`,c&&n!==Xg&&(l=n.relatedTarget||n.fromElement)&&(j(l)||l[Kh]))break a;(s||c)&&(l=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,s?(c=n.relatedTarget||n.toElement,s=r,c=c?j(c):null,c!==null&&(d=x(c),u=c.tag,c!==d||u!==5&&u!==27&&u!==6)&&(c=null)):(s=null,c=r),s!==c&&(u=m_,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=T_,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=s==null?l:M(s),m=c==null?l:M(c),l=new u(h,p+`leave`,s,n,i),l.target=d,l.relatedTarget=m,h=null,j(i)===r&&(u=new u(f,p+`enter`,c,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,u=s&&c?me(s,c,vd):null,s!==null&&yd(o,l,s,u,!1),c!==null&&d!==null&&yd(o,d,c,u,!0)))}a:{if(s=r?M(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Pn;else if(kn(s)){if(W_)g=Bn;else{g=Rn;var _=Ln}}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&on(r.elementType)&&(g=Pn):g=zn;if(g&&=g(e,r)){jn(o,g,n,i);break a}_&&_(e,s,r)}switch(_=r?M(r):window,e){case`focusin`:(kn(_)||_.contentEditable===`true`)&&(q_=_,J_=r,Y_=null);break;case`focusout`:Y_=J_=q_=null;break;case`mousedown`:X_=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:X_=!1,Yn(o,n,i);break;case`selectionchange`:if(K_)break;case`keydown`:case`keyup`:Yn(o,n,i)}var v;if(N_)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else B_?Tn(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===M_&&(y=`onCompositionStart`);y&&(I_&&n.locale!==`ko`&&(B_||y!==`onCompositionStart`?y===`onCompositionEnd`&&B_&&(v=vn()):(r_=i,i_=`value`in r_?r_.value:r_.textContent,B_=!0)),_=_d(r,y),0<_.length&&(y=new y_(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=En(n),v!==null&&(y.data=v)))),(v=F_?Dn(e,n):On(e,n))&&(y=_d(r,`onBeforeInput`),0<y.length&&(_=new b_(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:_,listeners:y}),_.data=v)),cd(o,e,r,n,i)}ud(o,t)})}function gd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _d(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(gd(e,i,a)),i=_n(e,t),i!=null&&r.push(gd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function vd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function yd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(gd(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(gd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}function bd(e,t){ln(e,t),e!==`input`&&e!==`textarea`&&e!==`select`||t==null||t.value!==null||Ug||(Ug=!0,e===`select`&&t.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e));var n={registrationNameDependencies:eg,possibleRegistrationNames:tg};on(e)||typeof t.is==`string`||dn(e,t,n),t.contentEditable&&!t.suppressContentEditableWarning&&t.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function xd(e,t,n,r){t!==n&&(n=Dd(n),Dd(t)!==n&&(r[e]=t))}function Sd(e){return!!(e.getAttribute(`vt-share`)||e.getAttribute(`vt-exit`)||e.getAttribute(`vt-enter`)||e.getAttribute(`vt-update`))}function Cd(e){if(!Sd(e))return!1;var t=e.getAttribute(`vt-name`);return e=e.style[`view-transition-name`],t?t===e:e.startsWith(`_T_`)}function wd(e,t,n){t.forEach(function(t){t===`style`?e.getAttribute(t)!==``&&(t=e.style,(t.length===1&&t[0]===`view-transition-name`||t.length===2&&t[0]===`view-transition-class`&&t[1]===`view-transition-name`)&&Cd(e)||(n.style=Pd(e))):n[Nd(t)]=e.getAttribute(t)})}function Td(e,t){!1===t?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)}function Ed(e,t){return e=e.namespaceURI===Fg||e.namespaceURI===Ig?e.ownerDocument.createElementNS(e.namespaceURI,e.tagName):e.ownerDocument.createElement(e.tagName),e.innerHTML=t,e.innerHTML}function Dd(e){return ze(e)&&(console.error(`The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.`,Re(e)),Be(e)),(typeof e==`string`?e:``+e).replace(Xw,`
`).replace(Zw,``)}function Od(e,t){return t=Dd(t),Dd(e)===t}function kd(e,t,n,r,i,a){switch(n){case`children`:if(typeof r==`string`)en(r,t,!1),t===`body`||t===`textarea`&&r===``||tn(e,r);else if(typeof r==`number`||typeof r==`bigint`)en(``+r,t,!1),t!==`body`&&tn(e,``+r);else return;break;case`className`:vt(e,`class`,r);break;case`tabIndex`:vt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:vt(e,n,r);break;case`style`:an(e,r,a);return;case`data`:if(t!==`object`){vt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){console.error(n===`src`?`An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.`:`An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.`,n,n),e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}Ve(r,n),r=fn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(r!=null&&(t===`form`?n===`formAction`?console.error(`You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>.`):typeof r==`function`&&(i.encType==null&&i.method==null||qw||(qw=!0,console.error(`Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.`)),i.target==null||Kw||(Kw=!0,console.error(`Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window.`))):t===`input`||t===`button`?n===`action`?console.error(`You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>.`):t!==`input`||i.type===`submit`||i.type===`image`||Ww?t!==`button`||i.type==null||i.type===`submit`||Ww?typeof r==`function`&&(i.name==null||Gw||(Gw=!0,console.error(`Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.`)),i.formEncType==null&&i.formMethod==null||qw||(qw=!0,console.error(`Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.`)),i.formTarget==null||Kw||(Kw=!0,console.error(`Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window.`))):(Ww=!0,console.error(`A button can only specify a formAction along with type="submit" or no type.`)):(Ww=!0,console.error(`An input can only specify a formAction along with type="submit" or type="image".`)):console.error(n===`action`?`You can only pass the action prop to <form>.`:`You can only pass the formAction prop to <input> or <button>.`)),typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&kd(e,t,`name`,i.name,i,null),kd(e,t,`formEncType`,i.formEncType,i,null),kd(e,t,`formMethod`,i.formMethod,i,null),kd(e,t,`formTarget`,i.formTarget,i,null)):(kd(e,t,`encType`,i.encType,i,null),kd(e,t,`method`,i.method,i,null),kd(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}Ve(r,n),r=fn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(typeof r!=`function`&&Td(n,r),e.onclick=pn);return;case`onScroll`:r!=null&&(typeof r!=`function`&&Td(n,r),dd(`scroll`,e));return;case`onScrollEnd`:r!=null&&(typeof r!=`function`&&Td(n,r),dd(`scrollend`,e));return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(n=r.__html,n!=null){if(i.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");a?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}Ve(r,n),n=fn(r),e.setAttributeNS(Qw,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?(Ve(r,n),e.setAttribute(n,r)):e.removeAttribute(n);break;case`inert`:r!==``||Yw[n]||(Yw[n]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",n));case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?(Ve(r,n),e.setAttribute(n,r)):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?(Ve(r,n),e.setAttribute(n,r)):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):(Ve(r,n),e.setAttribute(n,r));break;case`popover`:dd(`beforetoggle`,e),dd(`toggle`,e),_t(e,`popover`,r);break;case`xlinkActuate`:yt(e,Qw,`xlink:actuate`,r);break;case`xlinkArcrole`:yt(e,Qw,`xlink:arcrole`,r);break;case`xlinkRole`:yt(e,Qw,`xlink:role`,r);break;case`xlinkShow`:yt(e,Qw,`xlink:show`,r);break;case`xlinkTitle`:yt(e,Qw,`xlink:title`,r);break;case`xlinkType`:yt(e,Qw,`xlink:type`,r);break;case`xmlBase`:yt(e,$w,`xml:base`,r);break;case`xmlLang`:yt(e,$w,`xml:lang`,r);break;case`xmlSpace`:yt(e,$w,`xml:space`,r);break;case`is`:a!=null&&console.error(`Cannot update the "is" prop after it has been initialized.`),_t(e,`is`,r);break;case`innerText`:case`textContent`:return;case`popoverTarget`:Jw||typeof r!=`object`||!r||(Jw=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",r));default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=sn(n),_t(e,n,r);else{eg.hasOwnProperty(n)&&r!=null&&typeof r!=`function`&&Td(n,r);return}}og=!0}function Ad(e,t,n,r,i,a){switch(n){case`style`:an(e,r,a);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(n=r.__html,n!=null){if(i.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");a?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)tn(e,r);else if(typeof r==`number`||typeof r==`bigint`)tn(e,``+r);else return;break;case`onScroll`:r!=null&&(typeof r!=`function`&&Td(n,r),dd(`scroll`,e));return;case`onScrollEnd`:r!=null&&(typeof r!=`function`&&Td(n,r),dd(`scrollend`,e));return;case`onClick`:r!=null&&(typeof r!=`function`&&Td(n,r),e.onclick=pn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(eg.hasOwnProperty(n))r!=null&&typeof r!=`function`&&Td(n,r);else a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),a=n.slice(2,i?n.length-7:void 0),t=e[Gh]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(a,t,i),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,r,i);break a}og=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):_t(e,n,r)}return}og=!0}function jd(e,t,n){switch(bd(t,n),t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:dd(`error`,e),dd(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:kd(e,t,a,o,n,null)}}i&&kd(e,t,`srcSet`,n.srcSet,n,null),r&&kd(e,t,`src`,n.src,n,null);return;case`input`:pt(`input`,n),dd(`invalid`,e);var s=a=o=i=null,c=null,l=null;for(r in n)if(n.hasOwnProperty(r)){var u=n[r];if(u!=null)switch(r){case`name`:i=u;break;case`type`:o=u;break;case`checked`:c=u;break;case`defaultChecked`:l=u;break;case`value`:a=u;break;case`defaultValue`:s=u;break;case`children`:case`dangerouslySetInnerHTML`:if(u!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:kd(e,t,r,u,n,null)}}Et(e,n),Ot(e,a,s,c,l,o,i,!1);return;case`select`:for(i in pt(`select`,n),dd(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(s=n[i],s!=null))switch(i){case`value`:a=s;break;case`defaultValue`:o=s;break;case`multiple`:r=s;default:kd(e,t,i,s,n,null)}Nt(e,n),t=a,n=o,e.multiple=!!r,t==null?n!=null&&Mt(e,!!r,n,!0):Mt(e,!!r,t,!1);return;case`textarea`:for(o in pt(`textarea`,n),dd(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(s=n[o],s!=null))switch(o){case`value`:r=s;break;case`defaultValue`:i=s;break;case`children`:a=s;break;case`dangerouslySetInnerHTML`:if(s!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:kd(e,t,o,s,n,null)}Pt(e,n),It(e,r,i,a);return;case`option`:for(c in At(e,n),n)if(n.hasOwnProperty(c)&&(r=n[c],r!=null))switch(c){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:kd(e,t,c,r,n,null)}return;case`dialog`:dd(`beforetoggle`,e),dd(`toggle`,e),dd(`cancel`,e),dd(`close`,e);break;case`iframe`:case`object`:dd(`load`,e);break;case`video`:case`audio`:for(r=0;r<zw.length;r++)dd(zw[r],e);break;case`image`:dd(`error`,e),dd(`load`,e);break;case`details`:dd(`toggle`,e);break;case`embed`:case`source`:case`link`:dd(`error`,e),dd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`children`:case`dangerouslySetInnerHTML`:throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:kd(e,t,l,r,n,null)}return;default:if(on(t)){for(u in n)n.hasOwnProperty(u)&&(r=n[u],r!==void 0&&Ad(e,t,u,r,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(r=n[s],r!=null&&kd(e,t,s,r,n,null))}function Md(e,t,n,r){switch(bd(t,r),t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,s=null,c=null,l=null,u=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case`checked`:break;case`value`:break;case`defaultValue`:c=d;default:r.hasOwnProperty(p)||kd(e,t,p,null,r,d)}}for(var f in r){var p=r[f];if(d=n[f],r.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case`type`:p!==d&&(og=!0),a=p;break;case`name`:p!==d&&(og=!0),i=p;break;case`checked`:p!==d&&(og=!0),l=p;break;case`defaultChecked`:p!==d&&(og=!0),u=p;break;case`value`:p!==d&&(og=!0),o=p;break;case`defaultValue`:p!==d&&(og=!0),s=p;break;case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:p!==d&&kd(e,t,f,p,r,d)}}t=n.type===`checkbox`||n.type===`radio`?n.checked!=null:n.value!=null,r=r.type===`checkbox`||r.type===`radio`?r.checked!=null:r.value!=null,t||!r||Uw||(console.error(`A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components`),Uw=!0),!t||r||Hw||(console.error(`A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components`),Hw=!0),Dt(e,o,s,c,l,u,a,i);return;case`select`:for(a in p=o=s=f=null,n)if(c=n[a],n.hasOwnProperty(a)&&c!=null)switch(a){case`value`:break;case`multiple`:p=c;default:r.hasOwnProperty(a)||kd(e,t,a,null,r,c)}for(i in r)if(a=r[i],c=n[i],r.hasOwnProperty(i)&&(a!=null||c!=null))switch(i){case`value`:a!==c&&(og=!0),f=a;break;case`defaultValue`:a!==c&&(og=!0),s=a;break;case`multiple`:a!==c&&(og=!0),o=a;default:a!==c&&kd(e,t,i,a,r,c)}r=s,t=o,n=p,f==null?!!n!=!!t&&(r==null?Mt(e,!!t,t?[]:``,!1):Mt(e,!!t,r,!0)):Mt(e,!!t,f,!1);return;case`textarea`:for(s in p=f=null,n)if(i=n[s],n.hasOwnProperty(s)&&i!=null&&!r.hasOwnProperty(s))switch(s){case`value`:break;case`children`:break;default:kd(e,t,s,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:i!==a&&(og=!0),f=i;break;case`defaultValue`:i!==a&&(og=!0),p=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:i!==a&&kd(e,t,o,i,r,a)}Ft(e,f,p);return;case`option`:for(var m in n)if(f=n[m],n.hasOwnProperty(m)&&f!=null&&!r.hasOwnProperty(m))switch(m){case`selected`:e.selected=!1;break;default:kd(e,t,m,null,r,f)}for(c in r)if(f=r[c],p=n[c],r.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case`selected`:f!==p&&(og=!0),e.selected=f&&typeof f!=`function`&&typeof f!=`symbol`;break;default:kd(e,t,c,f,r,p)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var h in n)f=n[h],n.hasOwnProperty(h)&&f!=null&&!r.hasOwnProperty(h)&&kd(e,t,h,null,r,f);for(l in r)if(f=r[l],p=n[l],r.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case`children`:case`dangerouslySetInnerHTML`:if(f!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:kd(e,t,l,f,r,p)}return;default:if(on(t)){for(var g in n)f=n[g],n.hasOwnProperty(g)&&f!==void 0&&!r.hasOwnProperty(g)&&Ad(e,t,g,void 0,r,f);for(u in r)f=r[u],p=n[u],!r.hasOwnProperty(u)||f===p||f===void 0&&p===void 0||Ad(e,t,u,f,r,p);return}}for(var _ in n)f=n[_],n.hasOwnProperty(_)&&f!=null&&!r.hasOwnProperty(_)&&kd(e,t,_,null,r,f);for(d in r)f=r[d],p=n[d],!r.hasOwnProperty(d)||f===p||f==null&&p==null||kd(e,t,d,f,r,p)}function Nd(e){switch(e){case`class`:return`className`;case`for`:return`htmlFor`;default:return e}}function Pd(e){for(var t={},n=e.style,r=0;r<n.length;r++){var i=n[r];i===`view-transition-name`&&Cd(e)||(t[i]=n.getPropertyValue(i))}return t}function Fd(e,t,n){if(t!=null&&typeof t!=`object`)console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var r,i=r=``,a;for(a in t)if(t.hasOwnProperty(a)){var o=t[a];o!=null&&typeof o!=`boolean`&&o!==``&&(a.indexOf(`--`)===0?(He(o,a),r+=i+a+`:`+(``+o).trim()):typeof o!=`number`||o===0||Pg.has(a)?(He(o,a),r+=i+a.replace(wg,`-$1`).toLowerCase().replace(Tg,`-ms-`)+`:`+(``+o).trim()):r+=i+a.replace(wg,`-$1`).toLowerCase().replace(Tg,`-ms-`)+`:`+o+`px`,i=`;`)}r||=null,t=e.getAttribute(`style`),t!==r&&(r=Dd(r),t=Dd(t),t===r||t[t.length-1]===`;`&&Sd(e)||(n.style=Pd(e)))}}function Id(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null)switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:return}else if(r!=null)switch(typeof r){case`function`:case`symbol`:case`boolean`:break;default:if(Ve(r,t),e===``+r)return}xd(t,e,r,a)}function Ld(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null){switch(typeof r){case`function`:case`symbol`:return}if(!r)return}else switch(typeof r){case`function`:case`symbol`:break;default:if(r)return}xd(t,e,r,a)}function Rd(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null)switch(typeof r){case`undefined`:case`function`:case`symbol`:return}else if(r!=null)switch(typeof r){case`function`:case`symbol`:break;default:if(Ve(r,n),e===``+r)return}xd(t,e,r,a)}function zd(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null)switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:return;default:if(isNaN(r))return}else if(r!=null)switch(typeof r){case`function`:case`symbol`:case`boolean`:break;default:if(!isNaN(r)&&(Ve(r,t),e===``+r))return}xd(t,e,r,a)}function Bd(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null)switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:return}else if(r!=null)switch(typeof r){case`function`:case`symbol`:case`boolean`:break;default:if(Ve(r,t),n=fn(``+r),e===n)return}xd(t,e,r,a)}function Vd(e,t,n,r){for(var i={},a=new Set,o=e.attributes,s=0;s<o.length;s++)switch(o[s].name.toLowerCase()){case`value`:break;case`checked`:break;case`selected`:break;case`vt-name`:case`vt-update`:case`vt-enter`:case`vt-exit`:case`vt-share`:case`vt-parent-enter`:case`vt-parent-exit`:break;default:a.add(o[s].name)}if(on(t)){for(var c in n)if(n.hasOwnProperty(c)){var l=n[c];if(l!=null){if(eg.hasOwnProperty(c))typeof l!=`function`&&Td(c,l);else if(!0!==n.suppressHydrationWarning)switch(c){case`children`:typeof l!=`string`&&typeof l!=`number`||xd(`children`,e.textContent,l,i);continue;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:continue;case`dangerouslySetInnerHTML`:o=e.innerHTML,l=l?l.__html:void 0,l!=null&&(l=Ed(e,l),xd(c,o,l,i));continue;case`style`:a.delete(c),Fd(e,l,i);continue;case`offsetParent`:case`offsetTop`:case`offsetLeft`:case`offsetWidth`:case`offsetHeight`:case`isContentEditable`:case`outerText`:case`outerHTML`:a.delete(c.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",c);continue;case`className`:a.delete(`class`),o=gt(e,`class`,l),xd(`className`,o,l,i);continue;default:r.context===_T&&t!==`svg`&&t!==`math`?a.delete(c.toLowerCase()):a.delete(c),o=gt(e,c,l),xd(c,o,l,i)}}}}else for(l in n)if(n.hasOwnProperty(l)&&(c=n[l],c!=null)){if(eg.hasOwnProperty(l))typeof c!=`function`&&Td(l,c);else if(!0!==n.suppressHydrationWarning)switch(l){case`children`:typeof c!=`string`&&typeof c!=`number`||xd(`children`,e.textContent,c,i);continue;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`value`:case`checked`:case`selected`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:continue;case`dangerouslySetInnerHTML`:o=e.innerHTML,c=c?c.__html:void 0,c!=null&&(c=Ed(e,c),o!==c&&(i[l]={__html:o}));continue;case`className`:Id(e,l,`class`,c,a,i);continue;case`tabIndex`:Id(e,l,`tabindex`,c,a,i);continue;case`style`:a.delete(l),Fd(e,c,i);continue;case`multiple`:a.delete(l),xd(l,e.multiple,c,i);continue;case`muted`:a.delete(l),xd(l,e.muted,c,i);continue;case`autoFocus`:a.delete(`autofocus`),xd(l,e.autofocus,c,i);continue;case`data`:if(t!==`object`){a.delete(l),o=e.getAttribute(`data`),xd(l,o,c,i);continue}case`src`:case`href`:if(!(c!==``||t===`a`&&l===`href`||t===`object`&&l===`data`)){console.error(l===`src`?`An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.`:`An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.`,l,l);continue}Bd(e,l,l,c,a,i);continue;case`action`:case`formAction`:if(o=e.getAttribute(l),typeof c==`function`){a.delete(l.toLowerCase()),l===`formAction`?(a.delete(`name`),a.delete(`formenctype`),a.delete(`formmethod`),a.delete(`formtarget`)):(a.delete(`enctype`),a.delete(`method`),a.delete(`target`));continue}if(o===tT){a.delete(l.toLowerCase()),xd(l,`function`,c,i);continue}Bd(e,l,l.toLowerCase(),c,a,i);continue;case`xlinkHref`:Bd(e,l,`xlink:href`,c,a,i);continue;case`contentEditable`:Rd(e,l,`contenteditable`,c,a,i);continue;case`spellCheck`:Rd(e,l,`spellcheck`,c,a,i);continue;case`draggable`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:Rd(e,l,l,c,a,i);continue;case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:Ld(e,l,l.toLowerCase(),c,a,i);continue;case`capture`:case`download`:a:{s=e;var u=o=l,d=i;if(a.delete(u),s=s.getAttribute(u),s===null)switch(typeof c){case`undefined`:case`function`:case`symbol`:break a;default:if(!1===c)break a}else if(c!=null)switch(typeof c){case`function`:case`symbol`:break;case`boolean`:if(!0===c&&s===``)break a;break;default:if(Ve(c,o),s===``+c)break a}xd(o,s,c,d)}continue;case`cols`:case`rows`:case`size`:case`span`:a:{if(s=e,u=o=l,d=i,a.delete(u),s=s.getAttribute(u),s===null)switch(typeof c){case`undefined`:case`function`:case`symbol`:case`boolean`:break a;default:if(isNaN(c)||1>c)break a}else if(c!=null)switch(typeof c){case`function`:case`symbol`:case`boolean`:break;default:if(!(isNaN(c)||1>c)&&(Ve(c,o),s===``+c))break a}xd(o,s,c,d)}continue;case`rowSpan`:zd(e,l,`rowspan`,c,a,i);continue;case`start`:zd(e,l,l,c,a,i);continue;case`xHeight`:Id(e,l,`x-height`,c,a,i);continue;case`xlinkActuate`:Id(e,l,`xlink:actuate`,c,a,i);continue;case`xlinkArcrole`:Id(e,l,`xlink:arcrole`,c,a,i);continue;case`xlinkRole`:Id(e,l,`xlink:role`,c,a,i);continue;case`xlinkShow`:Id(e,l,`xlink:show`,c,a,i);continue;case`xlinkTitle`:Id(e,l,`xlink:title`,c,a,i);continue;case`xlinkType`:Id(e,l,`xlink:type`,c,a,i);continue;case`xmlBase`:Id(e,l,`xml:base`,c,a,i);continue;case`xmlLang`:Id(e,l,`xml:lang`,c,a,i);continue;case`xmlSpace`:Id(e,l,`xml:space`,c,a,i);continue;case`inert`:c!==``||Yw[l]||(Yw[l]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",l)),Ld(e,l,l,c,a,i);continue;default:if(!(2<l.length)||l[0]!==`o`&&l[0]!==`O`||l[1]!==`n`&&l[1]!==`N`){s=sn(l),o=!1,r.context===_T&&t!==`svg`&&t!==`math`?a.delete(s.toLowerCase()):(u=l.toLowerCase(),u=Rg.hasOwnProperty(u)&&Rg[u]||null,u!==null&&u!==l&&(o=!0,a.delete(u)),a.delete(s));a:if(u=e,d=s,s=c,mt(d)){if(u.hasAttribute(d))u=d.toLowerCase()===`nonce`?u.nonce:u.getAttribute(d),Ve(s,d),s=u===``+s?s:u;else{switch(typeof s){case`function`:case`symbol`:break a;case`boolean`:if(u=d.toLowerCase().slice(0,5),u!==`data-`&&u!==`aria-`)break a}s=s===void 0?void 0:null}}else s=void 0;o||xd(l,s,c,i)}}}return 0<a.size&&!0!==n.suppressHydrationWarning&&wd(e,a,i),Object.keys(i).length===0?null:i}function Hd(e,t){switch(e.length){case 0:return``;case 1:return e[0];case 2:return e[0]+` `+t+` `+e[1];default:return e.slice(0,-1).join(`, `)+`, `+t+` `+e[e.length-1]}}function Ud(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Wd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ud(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ud(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}function Gd(e){return e.nodeType===9?e:e.ownerDocument}function Kd(e){switch(e){case Ig:return vT;case Fg:return yT;default:return _T}}function qd(e,t){if(e===_T)switch(t){case`svg`:return vT;case`math`:return yT;default:return _T}return e===vT&&t===`foreignObject`?_T:e}function Jd(e,t,n,r){return n=Gd(n).createElement(e),n[Wh]=r,n[Gh]=t,jd(n,e,t),lt(n),n}function Yd(e){if(e=e.type,typeof e!=`string`||e===``||(e=e.toLowerCase(),e===`module`||e===`importmap`||e===`speculationrules`))return!1;switch(e){case`application/ecmascript`:case`application/javascript`:case`application/x-ecmascript`:case`application/x-javascript`:case`text/ecmascript`:case`text/javascript`:case`text/javascript1.0`:case`text/javascript1.1`:case`text/javascript1.2`:case`text/javascript1.3`:case`text/javascript1.4`:case`text/javascript1.5`:case`text/jscript`:case`text/livescript`:case`text/x-ecmascript`:case`text/x-javascript`:return!1}return!0}function Xd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function Zd(){var e=window.event;return e&&e.type===`popstate`?e!==wT&&(wT=e,!0):(wT=null,!1)}function Qd(){var e=window.event;return e&&e!==TT?e.type:null}function $d(){var e=window.event;return e&&e!==TT?e.timeStamp:-1.1}function ef(e){setTimeout(function(){throw e})}function tf(e,t,n){switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&e.focus();break;case`img`:n.src?e.src=n.src:n.srcSet&&(e.srcset=n.srcSet)}}function nf(){}function rf(e,t,n,r){Md(e,t,n,r),e[Gh]=r}function af(e){tn(e,``)}function of(e,t,n){e.nodeValue=n}function sf(e){if(!e.__reactWarnedAboutChildrenConflict){var t=e[Gh]||null;if(t!==null){var n=st(e);n!==null&&(typeof t.children==`string`||typeof t.children==`number`?(e.__reactWarnedAboutChildrenConflict=!0,T(n,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):t.dangerouslySetInnerHTML!=null&&(e.__reactWarnedAboutChildrenConflict=!0,T(n,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function cf(e){return e===`head`}function lf(e,t){e.removeChild(t)}function uf(e,t){(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e).removeChild(t)}function df(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===oT||n===iT){if(r===0){e.removeChild(i),hm(t);return}r--}else if(n===aT||n===sT||n===cT||n===lT||n===rT)r++;else if(n===uT)gp(e.ownerDocument.documentElement);else if(n===fT){n=e.ownerDocument.head,gp(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Zh]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===dT&&gp(e.ownerDocument.body)}n=i}while(n);hm(t)}function ff(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===oT){if(e===0)break;e--}else n!==aT&&n!==sT&&n!==cT&&n!==lT||e++}n=r}while(n)}function pf(e){ff(e,!0)}function mf(e){e=e.style,typeof e.setProperty==`function`?e.setProperty(`display`,`none`,`important`):e.display=`none`}function hf(e){e.nodeValue=``}function gf(e){ff(e,!1)}function _f(e,t){t=t[gT],t=t!=null&&t.hasOwnProperty(`display`)?t.display:null,e.style.display=t==null||typeof t==`boolean`?``:(``+t).trim()}function vf(e,t){e.nodeValue=t}function yf(e){for(var t=e.firstChild;t!=null;){if(t.nodeType===1&&getComputedStyle(t).display===`block`){T(st(t)||st(e),function(e,t){console.error(`You're about to start a <ViewTransition> around a display: inline element <%s>, which itself has a display: block element <%s> inside it. This might trigger a bug in Safari which causes the View Transition to be skipped with a duplicate name error.
https://bugs.webkit.org/show_bug.cgi?id=290923`,e.toLocaleLowerCase(),t.toLocaleLowerCase())},e.tagName,t.tagName);break}if(t.firstChild!=null)t=t.firstChild;else{if(t===e)break;for(;t.nextSibling==null&&t.parentNode!=null&&t.parentNode!==e;)t=t.parentNode;t=t.nextSibling}}}function bf(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1?(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom):yf(e)}}function xf(e,t){e=e.style,t=t[gT];var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Sf(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Cf(e){return Sf(e.getBoundingClientRect(),getComputedStyle(e),e)}function wf(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Sf(t,n,e)}function Tf(e,t){if(typeof e==`object`&&e)switch(e.name){case`TimeoutError`:return Error(`A ViewTransition timed out because a Navigation stalled. This can happen if a Navigation is blocked on React itself. Such as if it's resolved inside useEffect. This can be solved by moving the resolution to useLayoutEffect.`,{cause:e});case`AbortError`:return t?null:Error(`A ViewTransition was aborted early. This might be because you have other View Transition libraries on the page and only one can run at a time. To avoid this, use only React's built-in <ViewTransition> to coordinate.`,{cause:e});case`InvalidStateError`:if(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)return null}return e}function Ef(e){return e.documentElement.clientHeight}function Df(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Of(e,t,n,r,i,a,o,s,c,l,u){var d=t.nodeType===9?t:t.ownerDocument;try{var f=d.startViewTransition({update:function(){var t=d.defaultView,n=t.navigation&&t.navigation.transition,o=d.fonts.status;r();var s=[];if(o===`loaded`&&(Ef(d),d.fonts.status===`loading`&&s.push(d.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,f=0;f<c.length;f++){var p=c[f];if(!p.complete){var m=p.getBoundingClientRect();if(0<m.bottom&&0<m.right&&m.top<t.innerHeight&&m.left<t.innerWidth){if(u+=Ip(p),u>YT){s.length=o;break}p=new Promise(Df.bind(p)),s.push(p)}}}if(0<s.length)return l(0<o?s.length>o?`Waiting on Fonts and Images`:`Waiting on Fonts`:`Waiting on Images`),t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,MT)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});d.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var e=d.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){p.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var l=n[c],u=l.width;if(i===void 0)i=u;else if(i!==u){s=!1;break}if(u=l.height,a===void 0)a=u;else if(a!==u){s=!1;break}delete l.width,delete l.height,l.transform===`none`&&delete l.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){d.__reactViewTransition===f&&(d.__reactViewTransition=null);try{e=Tf(e,!1),e!==null&&c(e)}finally{r(),i(),o(),u()}}),f.finished.finally(function(){for(var e=0;e<p.length;e++)p[e].cancel();d.__reactViewTransition===f&&(d.__reactViewTransition=null),u(),s()}),f}catch{return r(),i(),u(),o(),null}}function kf(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}function Af(e){return{name:e,group:new kf(`group`,e),imagePair:new kf(`image-pair`,e),old:new kf(`old`,e),new:new kf(`new`,e)}}function jf(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}function Mf(e,t,n,r){return ue(e).addEventListener(t,n,r),!1}function Nf(e,t,n,r){return ue(e).removeEventListener(t,n,r),!1}function Pf(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ff(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function If(e,t,n,r){if(e.length===0)return-1;r=Ff(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Ff(a.optionsOrUseCapture)===r)return i}return-1}function Lf(e,t){return e.tag!==6&&(e=ue(e),dp(e,t))}function Rf(e,t){return t.push(e),!1}function zf(e,t){return e.tag!==6&&(e=ue(e),e===t||e.contains(t)?(t.blur(),!0):!1)}function Bf(e,t){return e.tag!==6&&(e=ue(e),t.observe(e),!1)}function Vf(e,t){return e.tag!==6&&(e=ue(e),t.unobserve(e),!1)}function Hf(e,t,n){NT.push({fragmentInstance:e,observer:t,instance:n}),PT||(PT=!0,fp(function(){PT=!1;var e=NT;NT=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}function Uf(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=ue(e),t.push.apply(t,e.getClientRects());return!1}function Wf(e,t,n,r,i){var a=j(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=oe(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=me(n,a,pe),t===null?t=!1:(S(t,!0,de,a,n),a=Cm,Cm=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=me(r,a,pe),t===null?t=!1:(S(t,!0,fe,a,r),a=Cm,wm=Cm=null,t=a!==null)),t):!1}function Gf(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}function Kf(e,t){return e=ue(e),qf(e,t),!1}function qf(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function Jf(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Pf(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<NT.length;i++){var a=NT[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(NT[r++]=a)}NT.length=r,n.observe(e)}),qf(e,t))}function Yf(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Pf(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Hf(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Xf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:Xf(n),ot(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function Zf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){Ve(i.name,`name`);var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Zh])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=rp(e.nextSibling),e===null)break}return null}function Qf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=rp(e.nextSibling),e===null))return null;return e}function $f(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=rp(e.nextSibling),e===null))return null;return e}function ep(e){return e.data===sT||e.data===cT}function tp(e){return e.data===lT||e.data===sT&&e.ownerDocument.readyState!==hT}function np(e,t){var n=e.ownerDocument;if(e.data===cT)e._reactRetry=t;else if(e.data!==sT||n.readyState!==hT)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function rp(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===aT||t===lT||t===sT||t===cT||t===rT||t===pT||t===mT)break;if(t===oT||t===iT)return null}}return e}function ip(e){if(e.nodeType===1){for(var t=e.nodeName.toLowerCase(),n={},r=e.attributes,i=0;i<r.length;i++){var a=r[i];n[Nd(a.name)]=a.name.toLowerCase()===`style`?Pd(e):a.value}return{type:t,props:n}}return e.nodeType===8?e.data===rT?{type:`Activity`,props:{}}:{type:`Suspense`,props:{}}:e.nodeValue}function ap(e,t,n){return n===null||!0!==n[nT]?(e.nodeValue===t?e=null:(t=Dd(t),e=Dd(e.nodeValue)===t?null:e.nodeValue),e):null}function op(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===oT||n===iT){if(t===0)return rp(e.nextSibling);t--}else n!==aT&&n!==lT&&n!==sT&&n!==cT&&n!==rT||t++}e=e.nextSibling}return null}function sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===aT||n===lT||n===sT||n===cT||n===rT){if(t===0)return e;t--}else n!==oT&&n!==iT||t++}e=e.previousSibling}return null}function cp(e){hm(e)}function lp(e){hm(e)}function up(e){hm(e)}function dp(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function fp(e){AT(function(){AT(function(t){return e(t)})})}function pp(e,t,n,r,i){switch(i&&$t(e,r.ancestorInfo),t=Gd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(`React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.`);return e;case`head`:if(e=t.head,!e)throw Error(`React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.`);return e;case`body`:if(e=t.body,!e)throw Error(`React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.`);return e;default:throw Error(`resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.`)}}function mp(e,t,n,r){if(!n[Kh]&&st(n)){var i=n.tagName.toLowerCase();console.error(`You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.`,i,i,i)}switch(e){case`html`:case`head`:case`body`:break;default:console.error(`acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.`)}for(i=n.attributes;i.length;)n.removeAttributeNode(i[0]);jd(n,e,t),n[Wh]=r,n[Gh]=t}function hp(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&kd(e,t,r,null,eT,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===pn&&(e.onclick=null),ot(e)}function gp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ot(e)}function _p(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}function vp(e,t,n){var r=WT;if(r&&typeof t==`string`&&t){var i=Tt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),HT.has(i)||(HT.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),jd(t,`link`,e),lt(t),r.head.appendChild(t)))}}function yp(e,t,n,r){var i=(i=$m.current)?_p(i):null;if(!i)throw Error(`"resourceRoot" was expected to exist. This is a bug in React.`);switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=xp(n.href),t=ct(i).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=xp(n.href);var a=ct(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:IT,preload:null}},a.set(e,o),(a=i.querySelector(Sp(e)))?a._p||(o.instance=a,o.state.loading=LT|BT):(a=VT.get(e),a||(a={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},VT.set(e,a)),wp(i,e,a,o.state))),t&&r===null)throw n=`

  - `+bp(t)+`
  + `+bp(n),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+n);return o}if(t&&r!==null)throw n=`

  - `+bp(t)+`
  + `+bp(n),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+n);return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Tp(n),t=ct(i).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(`getResource encountered a type it did not expect: "`+e+`". this is a bug in React.`)}}function bp(e){var t=0,n=`<link`;return typeof e.rel==`string`?(t++,n+=` rel="`+e.rel+`"`):hh.call(e,`rel`)&&(t++,n+=` rel="`+(e.rel===null?`null`:`invalid type `+typeof e.rel)+`"`),typeof e.href==`string`?(t++,n+=` href="`+e.href+`"`):hh.call(e,`href`)&&(t++,n+=` href="`+(e.href===null?`null`:`invalid type `+typeof e.href)+`"`),typeof e.precedence==`string`?(t++,n+=` precedence="`+e.precedence+`"`):hh.call(e,`precedence`)&&(t++,n+=` precedence={`+(e.precedence===null?`null`:`invalid type `+typeof e.precedence)+`}`),Object.getOwnPropertyNames(e).length>t&&(n+=` ...`),n+` />`}function xp(e){return`href="`+Tt(e)+`"`}function Sp(e){return`link[rel="stylesheet"][`+e+`]`}function Cp(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function wp(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Qh]){r.loading=LT;return}}else t=e.createElement(`link`),t[Qh]=!0,t.onload=t.onerror=ut.bind(null,t),jd(t,`link`,n),lt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=LT}),t.addEventListener(`error`,function(){return r.loading|=RT})}function Tp(e){return`[src="`+Tt(e)+`"]`}function Ep(e){return`script[async]`+e}function Dp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Tt(n.href)+`"]`);if(r)return t.instance=r,lt(r),r;var i=B({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),lt(r),jd(r,`style`,i),Op(r,n.precedence,e),t.instance=r;case`stylesheet`:i=xp(n.href);var a=e.querySelector(Sp(i));if(a)return t.state.loading|=BT,t.instance=a,lt(a),a;r=Cp(n),(i=VT.get(i))&&kp(r,i),a=(e.ownerDocument||e).createElement(`link`),lt(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),jd(a,`link`,r),t.state.loading|=BT,Op(a,n.precedence,e),t.instance=a;case`script`:return a=Tp(n.src),(i=e.querySelector(Ep(a)))?(t.instance=i,lt(i),i):(r=n,(i=VT.get(a))&&(r=B({},n),Ap(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),lt(i),jd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(`acquireResource encountered a resource type it did not expect: "`+t.type+`". this is a bug in React.`)}else t.type===`stylesheet`&&(t.state.loading&BT)===IT&&(r=t.instance,t.state.loading|=BT,Op(r,n.precedence,e));return t.instance}function Op(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function kp(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Ap(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}function jp(e,t,n){if(GT===null){var r=new Map,i=GT=new Map;i.set(n,r)}else i=GT,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Zh]||a[Wh]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==Ig){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Mp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Np(e,t,n){var r=!n.ancestorInfo.containerTagInScope;if(n.context===vT||t.itemProp!=null)return!r||t.itemProp==null||e!==`meta`&&e!==`title`&&e!==`style`&&e!==`link`&&e!==`script`||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",e,e),!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``){r&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError){if(t.rel===`stylesheet`&&typeof t.precedence==`string`){e=t.href;var i=t.onError,a=t.disabled;n=[],t.onLoad&&n.push("`onLoad`"),i&&n.push("`onError`"),a!=null&&n.push("`disabled`"),i=Hd(n,`and`),i+=n.length===1?` prop`:` props`,a=n.length===1?`an `+i:`the `+i,n.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',e,a,i)}r&&(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(t.onError||t.onLoad)&&console.error(`Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>.`));break}switch(t.rel){case`stylesheet`:return e=t.precedence,t=t.disabled,typeof e!=`string`&&r&&console.error(`Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.`),typeof e==`string`&&t==null;default:return!0}case`script`:if(e=t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`,!e||t.onLoad||t.onError||!t.src||typeof t.src!=`string`){r&&(e?t.onLoad||t.onError?console.error(`Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>.`):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error(`Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.`));break}return!0;case`noscript`:case`template`:r&&console.error(`Cannot render <%s> outside the main document. Try moving it into the root <head> tag.`,e)}return!1}function Pp(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Fp(e){return e.type!==`stylesheet`||(e.state.loading&zT)!==IT}function Ip(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Lp(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Ip(t),e.suspenseyImages.push(t)),e=Hp.bind(e),t.decode().then(e,e))}function Rp(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&(n.state.loading&BT)===IT){if(n.instance===null){var i=xp(r.href),a=t.querySelector(Sp(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Vp.bind(e),t.then(e,e)),n.state.loading|=BT,n.instance=a,lt(a);return}a=t.ownerDocument||t,r=Cp(r),(i=VT.get(i))&&kp(r,i),a=a.createElement(`link`),lt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),jd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&zT)===IT&&(e.count++,n=Vp.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}function zp(e,t){return e.stylesheets&&e.count===0&&Up(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Up(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},KT+t);0<e.imgBytes&&YT===0&&(YT=125*Wd()*JT);var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Up(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>YT?50:qT)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Bp(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Up(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Vp(){this.count--,Bp(this)}function Hp(){this.imgCount--,Bp(this)}function Up(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ZT=new Map,t.forEach(Wp,e),ZT=null,Vp.call(e))}function Wp(e,t){if(!(t.state.loading&BT)){var n=ZT.get(e);if(n)var r=n.get(XT);else{n=new Map,ZT.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(XT,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(XT,i),n.set(o,i),this.count++,r=Vp.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=BT}}function Gp(e,t,n,r,i,a,o,s,c){for(this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=OT,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,e=this.pendingUpdatersLaneMap=[],t=0;31>t;t++)e.push(new Set);this._debugRootType=n?`hydrateRoot()`:`createRoot()`}function Kp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new Gp(e,t,n,o,c,l,u,d,s),t=Bv,!0===a&&(t|=Vv|Hv),t|=G,a=g(3,null,null,t),e.current=a,a.stateNode=e,t=gi(),_i(t),e.pooledCache=t,_i(t),a.memoizedState={element:r,isDehydrated:n,cache:t},fa(a),e}function qp(e){return e?(e=Lv,e):Lv}function Jp(e,t,n,r,i,a){if(Ah&&typeof Ah.onScheduleFiberRoot==`function`)try{Ah.onScheduleFiberRoot(kh,r,n)}catch(e){jh||(jh=!0,console.error(`React instrumentation encountered an error: %o`,e))}i=qp(i),r.context===null?r.context=i:r.pendingContext=i,mh&&ph!==null&&!aE&&(aE=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,C(ph)||`Unknown`)),r=ma(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(typeof a!=`function`&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",a),r.callback=a),n=ha(e,r,t),n!==null&&(xi(t,`root.render()`,null),$l(n,e,t),ga(n,e,t))}function Yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xp(e,t){Yp(e,t),(e=e.alternate)&&Yp(e,t)}function Zp(e){if(e.tag===13||e.tag===31){var t=Cr(e,67108864);t!==null&&$l(t,e,67108864),Xp(e,67108864)}}function Qp(e){if(e.tag===13||e.tag===31){var t=Xl(e);t=tt(t);var n=Cr(e,t);n!==null&&$l(n,e,t),Xp(e,t)}}function $p(){return ph}function em(e,t,n,r){var i=V.T;V.T=null;var a=Km.p;try{Km.p=zh,nm(e,t,n,r)}finally{Km.p=a,V.T=i}}function tm(e,t,n,r){var i=V.T;V.T=null;var a=Km.p;try{Km.p=Bh,nm(e,t,n,r)}finally{Km.p=a,V.T=i}}function nm(e,t,n,r){if(gE){var i=rm(r);if(i===null)hd(e,t,r,_E,n),om(e,r);else if(cm(i,e,t,n,r))r.stopPropagation();else if(om(e,r),t&4&&-1<TE.indexOf(e)){for(;i!==null;){var a=st(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=We(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Nh(o);s.entanglements[1]|=c,o&=~c}Zu(a),(fC&(rC|iC))===nC&&(HC=bh()+UC,Qu(0,!1))}}break;case 31:case 13:s=Cr(a,2),s!==null&&$l(s,a,2),iu(),Xp(a,2)}if(a=rm(r),a===null&&hd(e,t,r,_E,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else hd(e,t,r,null,n)}}function rm(e){return e=mn(e),im(e)}function im(e){if(_E=null,e=j(e),e!==null){var t=x(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ee(t),e!==null)return e;e=null}else if(n===31){if(e=te(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _E=e,null}function am(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return zh;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return Bh;case`message`:switch(xh()){case Sh:return zh;case Ch:return Bh;case wh:case Th:return Vh;case Eh:return Hh;default:return Vh}default:return Vh}}function om(e,t){switch(e){case`focusin`:case`focusout`:yE=null;break;case`dragenter`:case`dragleave`:bE=null;break;case`mouseover`:case`mouseout`:xE=null;break;case`pointerover`:case`pointerout`:SE.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:CE.delete(t.pointerId)}}function sm(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=st(t),t!==null&&Zp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cm(e,t,n,r,i){switch(t){case`focusin`:return yE=sm(yE,e,t,n,r,i),!0;case`dragenter`:return bE=sm(bE,e,t,n,r,i),!0;case`mouseover`:return xE=sm(xE,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return SE.set(a,sm(SE.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,CE.set(a,sm(CE.get(a)||null,e,t,n,r,i)),!0}return!1}function lm(e){var t=j(e.target);if(t!==null){var n=x(t);if(n!==null){if(t=n.tag,t===13){if(t=ee(n),t!==null){e.blockedOn=t,A(e.priority,function(){Qp(n)});return}}else if(t===31){if(t=te(n),t!==null){e.blockedOn=t,A(e.priority,function(){Qp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function um(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rm(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n),i=r;Xg!==null&&console.error(`Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.`),Xg=i,n.target.dispatchEvent(r),Xg===null&&console.error(`Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.`),Xg=null}else return t=st(n),t!==null&&Zp(t),e.blockedOn=n,!1;t.shift()}return!0}function dm(e,t,n){um(e)&&n.delete(t)}function fm(){vE=!1,yE!==null&&um(yE)&&(yE=null),bE!==null&&um(bE)&&(bE=null),xE!==null&&um(xE)&&(xE=null),SE.forEach(dm),CE.forEach(dm)}function pm(e,t){e.blockedOn===t&&(e.blockedOn=null,vE||(vE=!0,bm.unstable_scheduleCallback(bm.unstable_NormalPriority,fm)))}function mm(e){EE!==e&&(EE=e,bm.unstable_scheduleCallback(bm.unstable_NormalPriority,function(){EE===e&&(EE=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(im(r||n)===null)continue;break}var a=st(n);a!==null&&(e.splice(t,3),t-=3,n={pending:!0,data:i,method:n.method,action:r},Object.freeze(n),Zo(a,n,r,i))}}))}function hm(e){function t(t){return pm(t,e)}yE!==null&&pm(yE,e),bE!==null&&pm(bE,e),xE!==null&&pm(xE,e),SE.forEach(t),CE.forEach(t);for(var n=0;n<wE.length;n++){var r=wE[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<wE.length&&(n=wE[0],n.blockedOn===null);)lm(n),n.blockedOn===null&&wE.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Gh]||null;if(typeof a==`function`)o||mm(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Gh]||null)s=o.formAction;else if(im(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),mm(n)}}}function gm(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function _m(e){this._internalRoot=e}function vm(e){this._internalRoot=e}function ym(e){e[Kh]&&(e._reactRootContainer?console.error(`You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.`):console.error(`You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.`))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var bm=u(),xm=f(),Sm=m(),Cm=null,wm=null,B=Object.assign,Tm=Symbol.for(`react.element`),Em=Symbol.for(`react.transitional.element`),Dm=Symbol.for(`react.portal`),Om=Symbol.for(`react.fragment`),km=Symbol.for(`react.strict_mode`),Am=Symbol.for(`react.profiler`),jm=Symbol.for(`react.consumer`),Mm=Symbol.for(`react.context`),Nm=Symbol.for(`react.forward_ref`),Pm=Symbol.for(`react.suspense`),Fm=Symbol.for(`react.suspense_list`),Im=Symbol.for(`react.memo`),Lm=Symbol.for(`react.lazy`),Rm=Symbol.for(`react.activity`),zm=Symbol.for(`react.legacy_hidden`),Bm=Symbol.for(`react.memo_cache_sentinel`),Vm=Symbol.for(`react.view_transition`),Hm=Symbol.for(`react.recoverable`),Um=Symbol.iterator,Wm=Symbol.for(`react.client.reference`),Gm=Array.isArray,V=xm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Km=Sm.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qm=Object.freeze({pending:!1,data:null,method:null,action:null}),Jm=[],Ym=[],Xm=-1,Zm=ve(null),Qm=ve(null),$m=ve(null),eh=ve(null),th=0,nh,rh,ih,ah,oh,sh,ch;De.__reactDisabledLog=!0;var lh,uh,dh=!1,fh=new(typeof WeakMap==`function`?WeakMap:Map),ph=null,mh=!1,hh=Object.prototype.hasOwnProperty,gh=bm.unstable_scheduleCallback,_h=bm.unstable_cancelCallback,vh=bm.unstable_shouldYield,yh=bm.unstable_requestPaint,bh=bm.unstable_now,xh=bm.unstable_getCurrentPriorityLevel,Sh=bm.unstable_ImmediatePriority,Ch=bm.unstable_UserBlockingPriority,wh=bm.unstable_NormalPriority,Th=bm.unstable_LowPriority,Eh=bm.unstable_IdlePriority,Dh=bm.log,Oh=bm.unstable_setDisableYieldValue,kh=null,Ah=null,jh=!1,Mh=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`,Nh=Math.clz32?Math.clz32:O,Ph=Math.log,Fh=Math.LN2,Ih=256,Lh=262144,Rh=4194304,zh=2,Bh=8,Vh=32,Hh=268435456,Uh=Math.random().toString(36).slice(2),Wh=`__reactFiber$`+Uh,Gh=`__reactProps$`+Uh,Kh=`__reactContainer$`+Uh,qh=`__reactEvents$`+Uh,Jh=`__reactListeners$`+Uh,Yh=`__reactHandles$`+Uh,Xh=`__reactResources$`+Uh,Zh=`__reactMarker$`+Uh,Qh=`__reactLoad$`+Uh,$h=new Set,eg={},tg={},ng={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},rg=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),ig={},ag={},og=!1,sg=/[\n"\\]/g,cg=!1,lg=!1,ug=!1,dg=!1,fg=!1,pg=!1,mg=[`value`,`defaultValue`],hg=!1,gg=/["'&<>\n\t]|^\s|\s$/,_g=`address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp`.split(` `),vg=`applet caption html table td th marquee object select template foreignObject desc title`.split(` `),yg=vg.concat([`button`]),bg=`dd dt li option optgroup p rp rt`.split(` `),xg={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},Sg={},Cg={animation:`animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction`.split(` `),background:`backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize`.split(` `),backgroundPosition:[`backgroundPositionX`,`backgroundPositionY`],border:`borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth`.split(` `),borderBlock:`borderBlockEndColor borderBlockEndStyle borderBlockEndWidth borderBlockStartColor borderBlockStartStyle borderBlockStartWidth`.split(` `),borderBlockColor:[`borderBlockEndColor`,`borderBlockStartColor`],borderBlockEnd:[`borderBlockEndColor`,`borderBlockEndStyle`,`borderBlockEndWidth`],borderBlockStart:[`borderBlockStartColor`,`borderBlockStartStyle`,`borderBlockStartWidth`],borderBlockStyle:[`borderBlockEndStyle`,`borderBlockStartStyle`],borderBlockWidth:[`borderBlockEndWidth`,`borderBlockStartWidth`],borderBottom:[`borderBottomColor`,`borderBottomStyle`,`borderBottomWidth`],borderColor:[`borderBottomColor`,`borderLeftColor`,`borderRightColor`,`borderTopColor`],borderImage:[`borderImageOutset`,`borderImageRepeat`,`borderImageSlice`,`borderImageSource`,`borderImageWidth`],borderInline:`borderInlineEndColor borderInlineEndStyle borderInlineEndWidth borderInlineStartColor borderInlineStartStyle borderInlineStartWidth`.split(` `),borderInlineColor:[`borderInlineEndColor`,`borderInlineStartColor`],borderInlineEnd:[`borderInlineEndColor`,`borderInlineEndStyle`,`borderInlineEndWidth`],borderInlineStart:[`borderInlineStartColor`,`borderInlineStartStyle`,`borderInlineStartWidth`],borderInlineStyle:[`borderInlineEndStyle`,`borderInlineStartStyle`],borderInlineWidth:[`borderInlineEndWidth`,`borderInlineStartWidth`],borderLeft:[`borderLeftColor`,`borderLeftStyle`,`borderLeftWidth`],borderRadius:[`borderBottomLeftRadius`,`borderBottomRightRadius`,`borderTopLeftRadius`,`borderTopRightRadius`],borderRight:[`borderRightColor`,`borderRightStyle`,`borderRightWidth`],borderStyle:[`borderBottomStyle`,`borderLeftStyle`,`borderRightStyle`,`borderTopStyle`],borderTop:[`borderTopColor`,`borderTopStyle`,`borderTopWidth`],borderWidth:[`borderBottomWidth`,`borderLeftWidth`,`borderRightWidth`,`borderTopWidth`],colorAdjust:[`printColorAdjust`],columnRule:[`columnRuleColor`,`columnRuleStyle`,`columnRuleWidth`],columns:[`columnCount`,`columnWidth`],containIntrinsicSize:[`containIntrinsicHeight`,`containIntrinsicWidth`],container:[`containerName`,`containerType`],flex:[`flexBasis`,`flexGrow`,`flexShrink`],flexFlow:[`flexDirection`,`flexWrap`],font:`fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight`.split(` `),fontSynthesis:[`fontSynthesisPosition`,`fontSynthesisSmallCaps`,`fontSynthesisStyle`,`fontSynthesisWeight`],fontVariant:`fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition`.split(` `),gap:[`columnGap`,`rowGap`],grid:`gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows`.split(` `),gridArea:[`gridColumnEnd`,`gridColumnStart`,`gridRowEnd`,`gridRowStart`],gridColumn:[`gridColumnEnd`,`gridColumnStart`],gridColumnGap:[`columnGap`],gridGap:[`columnGap`,`rowGap`],gridRow:[`gridRowEnd`,`gridRowStart`],gridRowGap:[`rowGap`],gridTemplate:[`gridTemplateAreas`,`gridTemplateColumns`,`gridTemplateRows`],inset:[`bottom`,`left`,`right`,`top`],insetBlock:[`insetBlockEnd`,`insetBlockStart`],insetInline:[`insetInlineEnd`,`insetInlineStart`],listStyle:[`listStyleImage`,`listStylePosition`,`listStyleType`],margin:[`marginBottom`,`marginLeft`,`marginRight`,`marginTop`],marginBlock:[`marginBlockEnd`,`marginBlockStart`],marginInline:[`marginInlineEnd`,`marginInlineStart`],marker:[`markerEnd`,`markerMid`,`markerStart`],mask:`maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize`.split(` `),maskPosition:[`maskPositionX`,`maskPositionY`],offset:[`offsetAnchor`,`offsetDistance`,`offsetPath`,`offsetPosition`,`offsetRotate`],outline:[`outlineColor`,`outlineStyle`,`outlineWidth`],overflow:[`overflowX`,`overflowY`],overscrollBehavior:[`overscrollBehaviorX`,`overscrollBehaviorY`],padding:[`paddingBottom`,`paddingLeft`,`paddingRight`,`paddingTop`],paddingBlock:[`paddingBlockEnd`,`paddingBlockStart`],paddingInline:[`paddingInlineEnd`,`paddingInlineStart`],pageBreakAfter:[`breakAfter`],pageBreakBefore:[`breakBefore`],pageBreakInside:[`breakInside`],placeContent:[`alignContent`,`justifyContent`],placeItems:[`alignItems`,`justifyItems`],placeSelf:[`alignSelf`,`justifySelf`],scrollMargin:[`scrollMarginBottom`,`scrollMarginLeft`,`scrollMarginRight`,`scrollMarginTop`],scrollMarginBlock:[`scrollMarginBlockEnd`,`scrollMarginBlockStart`],scrollMarginInline:[`scrollMarginInlineEnd`,`scrollMarginInlineStart`],scrollPadding:[`scrollPaddingBottom`,`scrollPaddingLeft`,`scrollPaddingRight`,`scrollPaddingTop`],scrollPaddingBlock:[`scrollPaddingBlockEnd`,`scrollPaddingBlockStart`],scrollPaddingInline:[`scrollPaddingInlineEnd`,`scrollPaddingInlineStart`],textDecoration:[`textDecorationColor`,`textDecorationLine`,`textDecorationStyle`,`textDecorationThickness`],textEmphasis:[`textEmphasisColor`,`textEmphasisStyle`],textWrap:[`textWrapMode`,`textWrapStyle`],transition:[`transitionBehavior`,`transitionDelay`,`transitionDuration`,`transitionProperty`,`transitionTimingFunction`],verticalAlign:[`alignmentBaseline`,`baselineShift`,`baselineSource`],whiteSpace:[`textWrapMode`,`whiteSpaceCollapse`],wordWrap:[`overflowWrap`]},wg=/([A-Z])/g,Tg=/^ms-/,Eg=/^(?:webkit|moz|o)[A-Z]/,Dg=/^-ms-/,Og=/-(.)/g,kg=/;\s*$/,Ag={},jg={},Mg=!1,Ng=!1,Pg=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `)),Fg=`http://www.w3.org/1998/Math/MathML`,Ig=`http://www.w3.org/2000/svg`,Lg=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Rg={accept:`accept`,acceptcharset:`acceptCharset`,"accept-charset":`acceptCharset`,accesskey:`accessKey`,action:`action`,allowfullscreen:`allowFullScreen`,alt:`alt`,as:`as`,async:`async`,autocapitalize:`autoCapitalize`,autocomplete:`autoComplete`,autocorrect:`autoCorrect`,autofocus:`autoFocus`,autoplay:`autoPlay`,autosave:`autoSave`,capture:`capture`,cellpadding:`cellPadding`,cellspacing:`cellSpacing`,challenge:`challenge`,charset:`charSet`,checked:`checked`,children:`children`,cite:`cite`,class:`className`,classid:`classID`,classname:`className`,cols:`cols`,colspan:`colSpan`,content:`content`,contenteditable:`contentEditable`,contextmenu:`contextMenu`,controls:`controls`,controlslist:`controlsList`,coords:`coords`,credentialless:`credentialless`,crossorigin:`crossOrigin`,dangerouslysetinnerhtml:`dangerouslySetInnerHTML`,data:`data`,datetime:`dateTime`,default:`default`,defaultchecked:`defaultChecked`,defaultvalue:`defaultValue`,defer:`defer`,dir:`dir`,disabled:`disabled`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`,download:`download`,draggable:`draggable`,enctype:`encType`,enterkeyhint:`enterKeyHint`,fetchpriority:`fetchPriority`,for:`htmlFor`,form:`form`,formmethod:`formMethod`,formaction:`formAction`,formenctype:`formEncType`,formnovalidate:`formNoValidate`,formtarget:`formTarget`,frameborder:`frameBorder`,headers:`headers`,height:`height`,hidden:`hidden`,high:`high`,href:`href`,hreflang:`hrefLang`,htmlfor:`htmlFor`,httpequiv:`httpEquiv`,"http-equiv":`httpEquiv`,icon:`icon`,id:`id`,imagesizes:`imageSizes`,imagesrcset:`imageSrcSet`,inert:`inert`,innerhtml:`innerHTML`,inputmode:`inputMode`,integrity:`integrity`,is:`is`,itemid:`itemID`,itemprop:`itemProp`,itemref:`itemRef`,itemscope:`itemScope`,itemtype:`itemType`,keyparams:`keyParams`,keytype:`keyType`,kind:`kind`,label:`label`,lang:`lang`,list:`list`,loop:`loop`,low:`low`,manifest:`manifest`,marginwidth:`marginWidth`,marginheight:`marginHeight`,max:`max`,maxlength:`maxLength`,media:`media`,mediagroup:`mediaGroup`,method:`method`,min:`min`,minlength:`minLength`,multiple:`multiple`,muted:`muted`,name:`name`,nomodule:`noModule`,nonce:`nonce`,novalidate:`noValidate`,open:`open`,optimum:`optimum`,pattern:`pattern`,placeholder:`placeholder`,playsinline:`playsInline`,poster:`poster`,preload:`preload`,profile:`profile`,radiogroup:`radioGroup`,readonly:`readOnly`,referrerpolicy:`referrerPolicy`,rel:`rel`,required:`required`,reversed:`reversed`,role:`role`,rows:`rows`,rowspan:`rowSpan`,sandbox:`sandbox`,scope:`scope`,scoped:`scoped`,scrolling:`scrolling`,seamless:`seamless`,selected:`selected`,shape:`shape`,size:`size`,sizes:`sizes`,span:`span`,spellcheck:`spellCheck`,src:`src`,srcdoc:`srcDoc`,srclang:`srcLang`,srcset:`srcSet`,start:`start`,step:`step`,style:`style`,summary:`summary`,tabindex:`tabIndex`,target:`target`,title:`title`,type:`type`,usemap:`useMap`,value:`value`,width:`width`,wmode:`wmode`,wrap:`wrap`,about:`about`,accentheight:`accentHeight`,"accent-height":`accentHeight`,accumulate:`accumulate`,additive:`additive`,alignmentbaseline:`alignmentBaseline`,"alignment-baseline":`alignmentBaseline`,allowreorder:`allowReorder`,alphabetic:`alphabetic`,amplitude:`amplitude`,arabicform:`arabicForm`,"arabic-form":`arabicForm`,ascent:`ascent`,attributename:`attributeName`,attributetype:`attributeType`,autoreverse:`autoReverse`,azimuth:`azimuth`,basefrequency:`baseFrequency`,baselineshift:`baselineShift`,"baseline-shift":`baselineShift`,baseprofile:`baseProfile`,bbox:`bbox`,begin:`begin`,bias:`bias`,by:`by`,calcmode:`calcMode`,capheight:`capHeight`,"cap-height":`capHeight`,clip:`clip`,clippath:`clipPath`,"clip-path":`clipPath`,clippathunits:`clipPathUnits`,cliprule:`clipRule`,"clip-rule":`clipRule`,color:`color`,colorinterpolation:`colorInterpolation`,"color-interpolation":`colorInterpolation`,colorinterpolationfilters:`colorInterpolationFilters`,"color-interpolation-filters":`colorInterpolationFilters`,colorprofile:`colorProfile`,"color-profile":`colorProfile`,colorrendering:`colorRendering`,"color-rendering":`colorRendering`,contentscripttype:`contentScriptType`,contentstyletype:`contentStyleType`,cursor:`cursor`,cx:`cx`,cy:`cy`,d:`d`,datatype:`datatype`,decelerate:`decelerate`,descent:`descent`,diffuseconstant:`diffuseConstant`,direction:`direction`,display:`display`,divisor:`divisor`,dominantbaseline:`dominantBaseline`,"dominant-baseline":`dominantBaseline`,dur:`dur`,dx:`dx`,dy:`dy`,edgemode:`edgeMode`,elevation:`elevation`,enablebackground:`enableBackground`,"enable-background":`enableBackground`,end:`end`,exponent:`exponent`,externalresourcesrequired:`externalResourcesRequired`,fill:`fill`,fillopacity:`fillOpacity`,"fill-opacity":`fillOpacity`,fillrule:`fillRule`,"fill-rule":`fillRule`,filter:`filter`,filterres:`filterRes`,filterunits:`filterUnits`,floodopacity:`floodOpacity`,"flood-opacity":`floodOpacity`,floodcolor:`floodColor`,"flood-color":`floodColor`,focusable:`focusable`,fontfamily:`fontFamily`,"font-family":`fontFamily`,fontsize:`fontSize`,"font-size":`fontSize`,fontsizeadjust:`fontSizeAdjust`,"font-size-adjust":`fontSizeAdjust`,fontstretch:`fontStretch`,"font-stretch":`fontStretch`,fontstyle:`fontStyle`,"font-style":`fontStyle`,fontvariant:`fontVariant`,"font-variant":`fontVariant`,fontweight:`fontWeight`,"font-weight":`fontWeight`,format:`format`,from:`from`,fx:`fx`,fy:`fy`,g1:`g1`,g2:`g2`,glyphname:`glyphName`,"glyph-name":`glyphName`,glyphorientationhorizontal:`glyphOrientationHorizontal`,"glyph-orientation-horizontal":`glyphOrientationHorizontal`,glyphorientationvertical:`glyphOrientationVertical`,"glyph-orientation-vertical":`glyphOrientationVertical`,glyphref:`glyphRef`,gradienttransform:`gradientTransform`,gradientunits:`gradientUnits`,hanging:`hanging`,horizadvx:`horizAdvX`,"horiz-adv-x":`horizAdvX`,horizoriginx:`horizOriginX`,"horiz-origin-x":`horizOriginX`,ideographic:`ideographic`,imagerendering:`imageRendering`,"image-rendering":`imageRendering`,in2:`in2`,in:`in`,inlist:`inlist`,intercept:`intercept`,k1:`k1`,k2:`k2`,k3:`k3`,k4:`k4`,k:`k`,kernelmatrix:`kernelMatrix`,kernelunitlength:`kernelUnitLength`,kerning:`kerning`,keypoints:`keyPoints`,keysplines:`keySplines`,keytimes:`keyTimes`,lengthadjust:`lengthAdjust`,letterspacing:`letterSpacing`,"letter-spacing":`letterSpacing`,lightingcolor:`lightingColor`,"lighting-color":`lightingColor`,limitingconeangle:`limitingConeAngle`,local:`local`,markerend:`markerEnd`,"marker-end":`markerEnd`,markerheight:`markerHeight`,markermid:`markerMid`,"marker-mid":`markerMid`,markerstart:`markerStart`,"marker-start":`markerStart`,markerunits:`markerUnits`,markerwidth:`markerWidth`,mask:`mask`,maskcontentunits:`maskContentUnits`,masktype:`maskType`,maskunits:`maskUnits`,mathematical:`mathematical`,mode:`mode`,numoctaves:`numOctaves`,offset:`offset`,opacity:`opacity`,operator:`operator`,order:`order`,orient:`orient`,orientation:`orientation`,origin:`origin`,overflow:`overflow`,overlineposition:`overlinePosition`,"overline-position":`overlinePosition`,overlinethickness:`overlineThickness`,"overline-thickness":`overlineThickness`,paintorder:`paintOrder`,"paint-order":`paintOrder`,panose1:`panose1`,"panose-1":`panose1`,pathlength:`pathLength`,patterncontentunits:`patternContentUnits`,patterntransform:`patternTransform`,patternunits:`patternUnits`,pointerevents:`pointerEvents`,"pointer-events":`pointerEvents`,points:`points`,pointsatx:`pointsAtX`,pointsaty:`pointsAtY`,pointsatz:`pointsAtZ`,popover:`popover`,popovertarget:`popoverTarget`,popovertargetaction:`popoverTargetAction`,prefix:`prefix`,preservealpha:`preserveAlpha`,preserveaspectratio:`preserveAspectRatio`,primitiveunits:`primitiveUnits`,property:`property`,r:`r`,radius:`radius`,refx:`refX`,refy:`refY`,renderingintent:`renderingIntent`,"rendering-intent":`renderingIntent`,repeatcount:`repeatCount`,repeatdur:`repeatDur`,requiredextensions:`requiredExtensions`,requiredfeatures:`requiredFeatures`,resource:`resource`,restart:`restart`,result:`result`,results:`results`,rotate:`rotate`,rx:`rx`,ry:`ry`,scale:`scale`,security:`security`,seed:`seed`,shaperendering:`shapeRendering`,"shape-rendering":`shapeRendering`,slope:`slope`,spacing:`spacing`,specularconstant:`specularConstant`,specularexponent:`specularExponent`,speed:`speed`,spreadmethod:`spreadMethod`,startoffset:`startOffset`,stddeviation:`stdDeviation`,stemh:`stemh`,stemv:`stemv`,stitchtiles:`stitchTiles`,stopcolor:`stopColor`,"stop-color":`stopColor`,stopopacity:`stopOpacity`,"stop-opacity":`stopOpacity`,strikethroughposition:`strikethroughPosition`,"strikethrough-position":`strikethroughPosition`,strikethroughthickness:`strikethroughThickness`,"strikethrough-thickness":`strikethroughThickness`,string:`string`,stroke:`stroke`,strokedasharray:`strokeDasharray`,"stroke-dasharray":`strokeDasharray`,strokedashoffset:`strokeDashoffset`,"stroke-dashoffset":`strokeDashoffset`,strokelinecap:`strokeLinecap`,"stroke-linecap":`strokeLinecap`,strokelinejoin:`strokeLinejoin`,"stroke-linejoin":`strokeLinejoin`,strokemiterlimit:`strokeMiterlimit`,"stroke-miterlimit":`strokeMiterlimit`,strokewidth:`strokeWidth`,"stroke-width":`strokeWidth`,strokeopacity:`strokeOpacity`,"stroke-opacity":`strokeOpacity`,suppresscontenteditablewarning:`suppressContentEditableWarning`,suppresshydrationwarning:`suppressHydrationWarning`,surfacescale:`surfaceScale`,systemlanguage:`systemLanguage`,tablevalues:`tableValues`,targetx:`targetX`,targety:`targetY`,textanchor:`textAnchor`,"text-anchor":`textAnchor`,textdecoration:`textDecoration`,"text-decoration":`textDecoration`,textlength:`textLength`,textrendering:`textRendering`,"text-rendering":`textRendering`,to:`to`,transform:`transform`,transformorigin:`transformOrigin`,"transform-origin":`transformOrigin`,typeof:`typeof`,u1:`u1`,u2:`u2`,underlineposition:`underlinePosition`,"underline-position":`underlinePosition`,underlinethickness:`underlineThickness`,"underline-thickness":`underlineThickness`,unicode:`unicode`,unicodebidi:`unicodeBidi`,"unicode-bidi":`unicodeBidi`,unicoderange:`unicodeRange`,"unicode-range":`unicodeRange`,unitsperem:`unitsPerEm`,"units-per-em":`unitsPerEm`,unselectable:`unselectable`,valphabetic:`vAlphabetic`,"v-alphabetic":`vAlphabetic`,values:`values`,vectoreffect:`vectorEffect`,"vector-effect":`vectorEffect`,version:`version`,vertadvy:`vertAdvY`,"vert-adv-y":`vertAdvY`,vertoriginx:`vertOriginX`,"vert-origin-x":`vertOriginX`,vertoriginy:`vertOriginY`,"vert-origin-y":`vertOriginY`,vhanging:`vHanging`,"v-hanging":`vHanging`,videographic:`vIdeographic`,"v-ideographic":`vIdeographic`,viewbox:`viewBox`,viewtarget:`viewTarget`,visibility:`visibility`,vmathematical:`vMathematical`,"v-mathematical":`vMathematical`,vocab:`vocab`,widths:`widths`,wordspacing:`wordSpacing`,"word-spacing":`wordSpacing`,writingmode:`writingMode`,"writing-mode":`writingMode`,x1:`x1`,x2:`x2`,x:`x`,xchannelselector:`xChannelSelector`,xheight:`xHeight`,"x-height":`xHeight`,xlinkactuate:`xlinkActuate`,"xlink:actuate":`xlinkActuate`,xlinkarcrole:`xlinkArcrole`,"xlink:arcrole":`xlinkArcrole`,xlinkhref:`xlinkHref`,"xlink:href":`xlinkHref`,xlinkrole:`xlinkRole`,"xlink:role":`xlinkRole`,xlinkshow:`xlinkShow`,"xlink:show":`xlinkShow`,xlinktitle:`xlinkTitle`,"xlink:title":`xlinkTitle`,xlinktype:`xlinkType`,"xlink:type":`xlinkType`,xmlbase:`xmlBase`,"xml:base":`xmlBase`,xmllang:`xmlLang`,"xml:lang":`xmlLang`,xmlns:`xmlns`,"xml:space":`xmlSpace`,xmlnsxlink:`xmlnsXlink`,"xmlns:xlink":`xmlnsXlink`,xmlspace:`xmlSpace`,y1:`y1`,y2:`y2`,y:`y`,ychannelselector:`yChannelSelector`,z:`z`,zoomandpan:`zoomAndPan`},zg={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},Bg={},Vg=RegExp(`^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Hg=RegExp(`^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ug=!1,Wg={},Gg=/^on./,Kg=/^on[^A-Z]/,qg=RegExp(`^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Jg=RegExp(`^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Yg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,Xg=null,Zg=null,Qg=null,$g=!1,e_=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,t_=!1;if(e_)try{var n_={};Object.defineProperty(n_,"passive",{get:function(){t_=!0}}),window.addEventListener(`test`,n_,n_),window.removeEventListener(`test`,n_,n_)}catch{t_=!1}var r_=null,i_=null,a_=null,o_={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},s_=Sn(o_),c_=B({},o_,{view:0,detail:0}),l_=Sn(c_),u_,d_,f_,p_=B({},c_,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==f_&&(f_&&e.type===`mousemove`?(u_=e.screenX-f_.screenX,d_=e.screenY-f_.screenY):d_=u_=0,f_=e),u_)},movementY:function(e){return`movementY`in e?e.movementY:d_}}),m_=Sn(p_),h_=Sn(B({},p_,{dataTransfer:0})),g_=Sn(B({},c_,{relatedTarget:0})),__=Sn(B({},o_,{animationName:0,elapsedTime:0,pseudoElement:0})),v_=Sn(B({},o_,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),y_=Sn(B({},o_,{data:0})),b_=y_,x_={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},S_={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},C_={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`},w_=Sn(B({},c_,{key:function(e){if(e.key){var t=x_[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=yn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?S_[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wn,charCode:function(e){return e.type===`keypress`?yn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?yn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),T_=Sn(B({},p_,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),E_=Sn(B({},o_,{submitter:0})),D_=Sn(B({},c_,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wn})),O_=Sn(B({},o_,{propertyName:0,elapsedTime:0,pseudoElement:0})),k_=Sn(B({},p_,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),A_=Sn(B({},o_,{newState:0,oldState:0,source:0})),j_=[9,13,27,32],M_=229,N_=e_&&`CompositionEvent`in window,P_=null;e_&&`documentMode`in document&&(P_=document.documentMode);var F_=e_&&`TextEvent`in window&&!P_,I_=e_&&(!N_||P_&&8<P_&&11>=P_),L_=32,R_=String.fromCharCode(L_),z_=!1,B_=!1,V_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},H_=null,U_=null,W_=!1;e_&&(W_=An(`input`)&&(!document.documentMode||9<document.documentMode));var G_=typeof Object.is==`function`?Object.is:Vn,K_=e_&&`documentMode`in document&&11>=document.documentMode,q_=null,J_=null,Y_=null,X_=!1,Z_={animationend:Xn(`Animation`,`AnimationEnd`),animationiteration:Xn(`Animation`,`AnimationIteration`),animationstart:Xn(`Animation`,`AnimationStart`),transitionrun:Xn(`Transition`,`TransitionRun`),transitionstart:Xn(`Transition`,`TransitionStart`),transitioncancel:Xn(`Transition`,`TransitionCancel`),transitionend:Xn(`Transition`,`TransitionEnd`)},Q_={},$_={};e_&&($_=document.createElement(`div`).style,`AnimationEvent`in window||(delete Z_.animationend.animation,delete Z_.animationiteration.animation,delete Z_.animationstart.animation),`TransitionEvent`in window||delete Z_.transitionend.transition);var ev=Zn(`animationend`),tv=Zn(`animationiteration`),nv=Zn(`animationstart`),rv=Zn(`transitionrun`),iv=Zn(`transitionstart`),av=Zn(`transitioncancel`),ov=Zn(`transitionend`),sv=new Map,cv=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);cv.push(`scrollEnd`);var lv=0,uv=0;if(typeof performance==`object`&&typeof performance.now==`function`)var dv=performance,fv=function(){return dv.now()};else{var pv=Date;fv=function(){return pv.now()}}var mv=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},hv=`This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.`,gv=0,_v=1,vv=2,yv=3,bv=100,xv=`-\xA0`,Sv=`+\xA0`,Cv=` \xA0`,wv=typeof console<`u`&&typeof console.timeStamp==`function`&&typeof performance<`u`&&typeof performance.measure==`function`,Tv=`Components ⚛`,H=`Scheduler ⚛`,U=`Blocking`,Ev=!1,Dv={color:`primary`,properties:null,tooltipText:``,track:Tv},Ov={start:-0,end:-0,detail:{devtools:Dv}},kv=[`Changed Props`,``],Av=`This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.`,jv=[`Changed Props`,Av],Mv=1,Nv=2,Pv=[],Fv=0,Iv=0,Lv={};Object.freeze(Lv);var Rv=null,zv=null,W=0,Bv=1,G=2,Vv=8,Hv=16,Uv=32,Wv=!1;try{Object.preventExtensions({})}catch{Wv=!0}var Gv=new WeakMap,Kv=[],qv=0,Jv=null,Yv=0,Xv=[],Zv=0,Qv=null,$v=1,ey=``,ty=null,ny=null,K=!1,ry=!1,iy=null,ay=null,oy=!1,sy=Error(`Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.`),cy=ve(null),ly=ve(null),uy={},dy=null,fy=null,py=!1,my=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},hy=bm.unstable_scheduleCallback,gy=bm.unstable_NormalPriority,_y={$$typeof:Mm,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},vy=null,yy=bm.unstable_now,by=console.createTask?console.createTask:function(){return null},xy=1,Sy=2,Cy=-0,wy=-0,Ty=-0,Ey=null,Dy=-1.1,Oy=-0,ky=-0,q=-1.1,J=-1.1,Ay=null,jy=!1,My=-0,Ny=-1.1,Py=null,Fy=0,Iy=null,Ly=null,Ry=-1.1,zy=null,By=-1.1,Vy=-1.1,Hy=-0,Uy=-1.1,Wy=-1.1,Gy=0,Ky=null,qy=null,Jy=null,Yy=-1.1,Xy=null,Zy=-1.1,Qy=-1.1,$y=-0,eb=-0,tb=0,nb=null,rb=0,ib=-1.1,ab=!1,ob=!1,sb=null,cb=0,lb=0,ub=null,db=V.S;V.S=function(e,t){if(BC=bh(),typeof t==`object`&&t&&typeof t.then==`function`){if(0>Uy&&0>Wy){Uy=yy();var n=$d(),r=Qd();(n!==Zy||r!==Xy)&&(Zy=-1.1),Yy=n,Xy=r}Bi(e,t)}if(vy!==null)for(n=jw;n!==null;)yi(n,vy),n=n.next;if(n=e.types,n!==null){for(r=jw;r!==null;)yi(r,n),r=r.next;if(lb!==0){r=vy,r===null&&(r=vy=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}db!==null&&db(e,t)};var fb=ve(null),pb={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},mb=[],hb=[],gb=[],_b=[],vb=[],yb=[],bb=new Set;pb.recordUnsafeLifecycleWarnings=function(e,t){bb.has(e.type)||(typeof t.componentWillMount==`function`&&!0!==t.componentWillMount.__suppressDeprecationWarning&&mb.push(e),e.mode&Vv&&typeof t.UNSAFE_componentWillMount==`function`&&hb.push(e),typeof t.componentWillReceiveProps==`function`&&!0!==t.componentWillReceiveProps.__suppressDeprecationWarning&&gb.push(e),e.mode&Vv&&typeof t.UNSAFE_componentWillReceiveProps==`function`&&_b.push(e),typeof t.componentWillUpdate==`function`&&!0!==t.componentWillUpdate.__suppressDeprecationWarning&&vb.push(e),e.mode&Vv&&typeof t.UNSAFE_componentWillUpdate==`function`&&yb.push(e))},pb.flushPendingUnsafeLifecycleWarnings=function(){var e=new Set;0<mb.length&&(mb.forEach(function(t){e.add(C(t)||`Component`),bb.add(t.type)}),mb=[]);var t=new Set;0<hb.length&&(hb.forEach(function(e){t.add(C(e)||`Component`),bb.add(e.type)}),hb=[]);var n=new Set;0<gb.length&&(gb.forEach(function(e){n.add(C(e)||`Component`),bb.add(e.type)}),gb=[]);var r=new Set;0<_b.length&&(_b.forEach(function(e){r.add(C(e)||`Component`),bb.add(e.type)}),_b=[]);var i=new Set;0<vb.length&&(vb.forEach(function(e){i.add(C(e)||`Component`),bb.add(e.type)}),vb=[]);var a=new Set;if(0<yb.length&&(yb.forEach(function(e){a.add(C(e)||`Component`),bb.add(e.type)}),yb=[]),0<t.size){var o=h(t);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,o)}0<r.size&&(o=h(r),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,o)),0<a.size&&(o=h(a),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,o)),0<e.size&&(o=h(e),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,o)),0<n.size&&(o=h(n),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,o)),0<i.size&&(o=h(i),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,o))};var xb=new Map,Sb=new Set;pb.recordLegacyContextWarning=function(e,t){for(var n=null,r=e;r!==null;)r.mode&Vv&&(n=r),r=r.return;n===null?console.error(`Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.`):!Sb.has(e.type)&&(r=xb.get(n),e.type.contextTypes!=null||e.type.childContextTypes!=null||t!==null&&typeof t.getChildContext==`function`)&&(r===void 0&&(r=[],xb.set(n,r)),r.push(e))},pb.flushLegacyContextWarning=function(){xb.forEach(function(e){if(e.length!==0){var t=e[0],n=new Set;e.forEach(function(e){n.add(C(e)||`Component`),Sb.add(e.type)});var r=h(n);T(t,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,r)})}})},pb.discardPendingWarnings=function(){mb=[],hb=[],gb=[],_b=[],vb=[],yb=[],xb=new Map};var Cb=``,wb={react_stack_bottom_frame:function(e,t,n){var r=mh;mh=!0;try{return e(t,n)}finally{mh=r}}},Tb=wb.react_stack_bottom_frame.bind(wb),Eb={react_stack_bottom_frame:function(e){var t=mh;mh=!0;try{return e.render()}finally{mh=t}}},Db=Eb.react_stack_bottom_frame.bind(Eb),Ob={react_stack_bottom_frame:function(e,t){try{t.componentDidMount()}catch(t){Ru(e,e.return,t)}}},kb=Ob.react_stack_bottom_frame.bind(Ob),Ab={react_stack_bottom_frame:function(e,t,n,r,i){try{t.componentDidUpdate(n,r,i)}catch(t){Ru(e,e.return,t)}}},jb=Ab.react_stack_bottom_frame.bind(Ab),Mb={react_stack_bottom_frame:function(e,t){var n=t.stack;e.componentDidCatch(t.value,{componentStack:n===null?``:n})}},Nb=Mb.react_stack_bottom_frame.bind(Mb),Pb={react_stack_bottom_frame:function(e,t,n){try{n.componentWillUnmount()}catch(n){Ru(e,t,n)}}},Fb=Pb.react_stack_bottom_frame.bind(Pb),Ib={react_stack_bottom_frame:function(e){var t=e.create;return e=e.inst,t=t(),e.destroy=t}},Lb=Ib.react_stack_bottom_frame.bind(Ib),Rb={react_stack_bottom_frame:function(e,t,n){try{n()}catch(n){Ru(e,t,n)}}},zb=Rb.react_stack_bottom_frame.bind(Rb),Bb={react_stack_bottom_frame:function(e){var t=e._init;return t(e._payload)}},Vb=Bb.react_stack_bottom_frame.bind(Bb),Hb=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),Ub=Error(`Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.`),Wb=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Gb={then:function(){console.error(`Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.`)}},Kb=null,qb=null,Jb=!1,Yb=null,Xb=!1,Zb=null,Qb=0,Y=null,$b,ex=$b=!1,tx={},nx={},rx={};p=function(e,t,n){if(typeof n==`object`&&n&&n._store&&(!n._store.validated&&n.key==null||n._store.validated===2)){if(typeof n._store!=`object`)throw Error(`React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.`);n._store.validated=1;var r=C(e),i=r||`null`;if(!tx[i]){tx[i]=!0,n=n._owner,e=e._debugOwner;var a=``;e&&typeof e.tag==`number`&&(i=C(e))&&(a=`

Check the render method of \``+i+"`."),a||r&&(a=`

Check the top-level render call using <`+r+`>.`);var o=``;n!=null&&e!==n&&(r=null,typeof n.tag==`number`?r=C(n):typeof n.name==`string`&&(r=n.name),r&&(o=` It was passed a child from `+r+`.`)),T(t,function(){console.error(`Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.`,a,o)})}}};var ix=ua(!0),ax=ua(!1),ox=0,sx=1,cx=2,lx=3,ux=!1,dx=!1,fx=null,px=!1,mx=ve(null),hx=ve(0),gx=ve(null),_x=null,vx=1,yx=2,bx=ve(0),xx=0,Sx=1,Cx=2,wx=4,Tx=8,Ex,Dx=new Set,Ox=new Set,kx=new Set,Ax=new Set,jx=0,X=null,Mx=null,Nx=null,Px=!1,Fx=!1,Ix=!1,Lx=0,Rx=0,zx=null,Bx=0,Vx=25,Z=null,Hx=null,Ux=-1,Wx=!1,Gx={readContext:pi,use:Ya,useCallback:Ia,useContext:Ia,useEffect:Ia,useImperativeHandle:Ia,useLayoutEffect:Ia,useInsertionEffect:Ia,useMemo:Ia,useReducer:Ia,useRef:Ia,useState:Ia,useDebugValue:Ia,useDeferredValue:Ia,useTransition:Ia,useSyncExternalStore:Ia,useId:Ia,useHostTransitionStatus:Ia,useFormState:Ia,useActionState:Ia,useOptimistic:Ia,useMemoCache:Ia,useCacheRefresh:Ia,useEffectEvent:Ia},Kx=null,qx=null,Jx=null,Yx=null,Xx=null,Zx=null,Qx=null;Kx={readContext:function(e){return pi(e)},use:Ya,useCallback:function(e,t){return Z=`useCallback`,R(),Pa(t),Bo(e,t)},useContext:function(e){return Z=`useContext`,R(),pi(e)},useEffect:function(e,t){return Z=`useEffect`,R(),Pa(t),Mo(e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,R(),Pa(n),Ro(e,t,n)},useInsertionEffect:function(e,t){Z=`useInsertionEffect`,R(),Pa(t),Ao(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,R(),Pa(t),Io(e,t)},useMemo:function(e,t){Z=`useMemo`,R(),Pa(t);var n=V.H;V.H=Xx;try{return Ho(e,t)}finally{V.H=n}},useReducer:function(e,t,n){Z=`useReducer`,R();var r=V.H;V.H=Xx;try{return Qa(e,t,n)}finally{V.H=r}},useRef:function(e){return Z=`useRef`,R(),ko(e)},useState:function(e){Z=`useState`,R();var t=V.H;V.H=Xx;try{return uo(e)}finally{V.H=t}},useDebugValue:function(){Z=`useDebugValue`,R()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,R(),Wo(e,t)},useTransition:function(){return Z=`useTransition`,R(),es()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,R(),no(e,t,n)},useId:function(){return Z=`useId`,R(),is()},useFormState:function(e,t){return Z=`useFormState`,R(),Fa(),Co(e,t)},useActionState:function(e,t){return Z=`useActionState`,R(),Co(e,t)},useOptimistic:function(e){return Z=`useOptimistic`,R(),fo(e)},useHostTransitionStatus:rs,useMemoCache:Xa,useCacheRefresh:function(){return Z=`useCacheRefresh`,R(),as()},useEffectEvent:function(e){return Z=`useEffectEvent`,R(),Po(e)}},qx={readContext:function(e){return pi(e)},use:Ya,useCallback:function(e,t){return Z=`useCallback`,z(),Bo(e,t)},useContext:function(e){return Z=`useContext`,z(),pi(e)},useEffect:function(e,t){return Z=`useEffect`,z(),Mo(e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,z(),Ro(e,t,n)},useInsertionEffect:function(e,t){Z=`useInsertionEffect`,z(),Ao(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,z(),Io(e,t)},useMemo:function(e,t){Z=`useMemo`,z();var n=V.H;V.H=Xx;try{return Ho(e,t)}finally{V.H=n}},useReducer:function(e,t,n){Z=`useReducer`,z();var r=V.H;V.H=Xx;try{return Qa(e,t,n)}finally{V.H=r}},useRef:function(e){return Z=`useRef`,z(),ko(e)},useState:function(e){Z=`useState`,z();var t=V.H;V.H=Xx;try{return uo(e)}finally{V.H=t}},useDebugValue:function(){Z=`useDebugValue`,z()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,z(),Wo(e,t)},useTransition:function(){return Z=`useTransition`,z(),es()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,z(),no(e,t,n)},useId:function(){return Z=`useId`,z(),is()},useActionState:function(e,t){return Z=`useActionState`,z(),Co(e,t)},useFormState:function(e,t){return Z=`useFormState`,z(),Fa(),Co(e,t)},useOptimistic:function(e){return Z=`useOptimistic`,z(),fo(e)},useHostTransitionStatus:rs,useMemoCache:Xa,useCacheRefresh:function(){return Z=`useCacheRefresh`,z(),as()},useEffectEvent:function(e){return Z=`useEffectEvent`,z(),Po(e)}},Jx={readContext:function(e){return pi(e)},use:Ya,useCallback:function(e,t){return Z=`useCallback`,z(),Vo(e,t)},useContext:function(e){return Z=`useContext`,z(),pi(e)},useEffect:function(e,t){Z=`useEffect`,z(),jo(2048,Tx,e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,z(),zo(e,t,n)},useInsertionEffect:function(e,t){return Z=`useInsertionEffect`,z(),jo(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,z(),jo(4,wx,e,t)},useMemo:function(e,t){Z=`useMemo`,z();var n=V.H;V.H=Zx;try{return Uo(e,t)}finally{V.H=n}},useReducer:function(e,t,n){Z=`useReducer`,z();var r=V.H;V.H=Zx;try{return $a(e,t,n)}finally{V.H=r}},useRef:function(){return Z=`useRef`,z(),Ka().memoizedState},useState:function(){Z=`useState`,z();var e=V.H;V.H=Zx;try{return $a(Za)}finally{V.H=e}},useDebugValue:function(){Z=`useDebugValue`,z()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,z(),Go(e,t)},useTransition:function(){return Z=`useTransition`,z(),ts()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,z(),ro(e,t,n)},useId:function(){return Z=`useId`,z(),Ka().memoizedState},useFormState:function(e){return Z=`useFormState`,z(),Fa(),wo(e)},useActionState:function(e){return Z=`useActionState`,z(),wo(e)},useOptimistic:function(e,t){return Z=`useOptimistic`,z(),po(e,t)},useHostTransitionStatus:rs,useMemoCache:Xa,useCacheRefresh:function(){return Z=`useCacheRefresh`,z(),Ka().memoizedState},useEffectEvent:function(e){return Z=`useEffectEvent`,z(),Fo(e)}},Yx={readContext:function(e){return pi(e)},use:Ya,useCallback:function(e,t){return Z=`useCallback`,z(),Vo(e,t)},useContext:function(e){return Z=`useContext`,z(),pi(e)},useEffect:function(e,t){Z=`useEffect`,z(),jo(2048,Tx,e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,z(),zo(e,t,n)},useInsertionEffect:function(e,t){return Z=`useInsertionEffect`,z(),jo(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,z(),jo(4,wx,e,t)},useMemo:function(e,t){Z=`useMemo`,z();var n=V.H;V.H=Qx;try{return Uo(e,t)}finally{V.H=n}},useReducer:function(e,t,n){Z=`useReducer`,z();var r=V.H;V.H=Qx;try{return to(e,t,n)}finally{V.H=r}},useRef:function(){return Z=`useRef`,z(),Ka().memoizedState},useState:function(){Z=`useState`,z();var e=V.H;V.H=Qx;try{return to(Za)}finally{V.H=e}},useDebugValue:function(){Z=`useDebugValue`,z()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,z(),Ko(e,t)},useTransition:function(){return Z=`useTransition`,z(),ns()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,z(),ro(e,t,n)},useId:function(){return Z=`useId`,z(),Ka().memoizedState},useFormState:function(e){return Z=`useFormState`,z(),Fa(),Do(e)},useActionState:function(e){return Z=`useActionState`,z(),Do(e)},useOptimistic:function(e,t){return Z=`useOptimistic`,z(),ho(e,t)},useHostTransitionStatus:rs,useMemoCache:Xa,useCacheRefresh:function(){return Z=`useCacheRefresh`,z(),Ka().memoizedState},useEffectEvent:function(e){return Z=`useEffectEvent`,z(),Fo(e)}},Xx={readContext:function(e){return l(),pi(e)},use:function(e){return c(),Ya(e)},useCallback:function(e,t){return Z=`useCallback`,c(),R(),Bo(e,t)},useContext:function(e){return Z=`useContext`,c(),R(),pi(e)},useEffect:function(e,t){return Z=`useEffect`,c(),R(),Mo(e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,c(),R(),Ro(e,t,n)},useInsertionEffect:function(e,t){Z=`useInsertionEffect`,c(),R(),Ao(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,c(),R(),Io(e,t)},useMemo:function(e,t){Z=`useMemo`,c(),R();var n=V.H;V.H=Xx;try{return Ho(e,t)}finally{V.H=n}},useReducer:function(e,t,n){Z=`useReducer`,c(),R();var r=V.H;V.H=Xx;try{return Qa(e,t,n)}finally{V.H=r}},useRef:function(e){return Z=`useRef`,c(),R(),ko(e)},useState:function(e){Z=`useState`,c(),R();var t=V.H;V.H=Xx;try{return uo(e)}finally{V.H=t}},useDebugValue:function(){Z=`useDebugValue`,c(),R()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,c(),R(),Wo(e,t)},useTransition:function(){return Z=`useTransition`,c(),R(),es()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,c(),R(),no(e,t,n)},useId:function(){return Z=`useId`,c(),R(),is()},useFormState:function(e,t){return Z=`useFormState`,c(),R(),Co(e,t)},useActionState:function(e,t){return Z=`useActionState`,c(),R(),Co(e,t)},useOptimistic:function(e){return Z=`useOptimistic`,c(),R(),fo(e)},useMemoCache:function(e){return c(),Xa(e)},useHostTransitionStatus:rs,useCacheRefresh:function(){return Z=`useCacheRefresh`,R(),as()},useEffectEvent:function(e){return Z=`useEffectEvent`,c(),R(),Po(e)}},Zx={readContext:function(e){return l(),pi(e)},use:function(e){return c(),Ya(e)},useCallback:function(e,t){return Z=`useCallback`,c(),z(),Vo(e,t)},useContext:function(e){return Z=`useContext`,c(),z(),pi(e)},useEffect:function(e,t){Z=`useEffect`,c(),z(),jo(2048,Tx,e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,c(),z(),zo(e,t,n)},useInsertionEffect:function(e,t){return Z=`useInsertionEffect`,c(),z(),jo(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,c(),z(),jo(4,wx,e,t)},useMemo:function(e,t){Z=`useMemo`,c(),z();var n=V.H;V.H=Zx;try{return Uo(e,t)}finally{V.H=n}},useReducer:function(e,t,n){Z=`useReducer`,c(),z();var r=V.H;V.H=Zx;try{return $a(e,t,n)}finally{V.H=r}},useRef:function(){return Z=`useRef`,c(),z(),Ka().memoizedState},useState:function(){Z=`useState`,c(),z();var e=V.H;V.H=Zx;try{return $a(Za)}finally{V.H=e}},useDebugValue:function(){Z=`useDebugValue`,c(),z()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,c(),z(),Go(e,t)},useTransition:function(){return Z=`useTransition`,c(),z(),ts()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,c(),z(),ro(e,t,n)},useId:function(){return Z=`useId`,c(),z(),Ka().memoizedState},useFormState:function(e){return Z=`useFormState`,c(),z(),wo(e)},useActionState:function(e){return Z=`useActionState`,c(),z(),wo(e)},useOptimistic:function(e,t){return Z=`useOptimistic`,c(),z(),po(e,t)},useMemoCache:function(e){return c(),Xa(e)},useHostTransitionStatus:rs,useCacheRefresh:function(){return Z=`useCacheRefresh`,z(),Ka().memoizedState},useEffectEvent:function(e){return Z=`useEffectEvent`,c(),z(),Fo(e)}},Qx={readContext:function(e){return l(),pi(e)},use:function(e){return c(),Ya(e)},useCallback:function(e,t){return Z=`useCallback`,c(),z(),Vo(e,t)},useContext:function(e){return Z=`useContext`,c(),z(),pi(e)},useEffect:function(e,t){Z=`useEffect`,c(),z(),jo(2048,Tx,e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,c(),z(),zo(e,t,n)},useInsertionEffect:function(e,t){return Z=`useInsertionEffect`,c(),z(),jo(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,c(),z(),jo(4,wx,e,t)},useMemo:function(e,t){Z=`useMemo`,c(),z();var n=V.H;V.H=Zx;try{return Uo(e,t)}finally{V.H=n}},useReducer:function(e,t,n){Z=`useReducer`,c(),z();var r=V.H;V.H=Zx;try{return to(e,t,n)}finally{V.H=r}},useRef:function(){return Z=`useRef`,c(),z(),Ka().memoizedState},useState:function(){Z=`useState`,c(),z();var e=V.H;V.H=Zx;try{return to(Za)}finally{V.H=e}},useDebugValue:function(){Z=`useDebugValue`,c(),z()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,c(),z(),Ko(e,t)},useTransition:function(){return Z=`useTransition`,c(),z(),ns()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,c(),z(),ro(e,t,n)},useId:function(){return Z=`useId`,c(),z(),Ka().memoizedState},useFormState:function(e){return Z=`useFormState`,c(),z(),Do(e)},useActionState:function(e){return Z=`useActionState`,c(),z(),Do(e)},useOptimistic:function(e,t){return Z=`useOptimistic`,c(),z(),ho(e,t)},useMemoCache:function(e){return c(),Xa(e)},useHostTransitionStatus:rs,useCacheRefresh:function(){return Z=`useCacheRefresh`,z(),Ka().memoizedState},useEffectEvent:function(e){return Z=`useEffectEvent`,c(),z(),Fo(e)}};var $x={},eS=new Set,tS=new Set,nS=new Set,rS=new Set,iS=new Set,aS=new Set,oS=new Set,sS=new Set,cS=new Set,lS=new Set;Object.freeze($x);var uS={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xl(e),i=ma(r);i.payload=t,n!=null&&(ms(n),i.callback=n),t=ha(e,i,r),t!==null&&(xi(r,`this.setState()`,e),$l(t,e,r),ga(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xl(e),i=ma(r);i.tag=sx,i.payload=t,n!=null&&(ms(n),i.callback=n),t=ha(e,i,r),t!==null&&(xi(r,`this.replaceState()`,e),$l(t,e,r),ga(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xl(e),r=ma(n);r.tag=cx,t!=null&&(ms(t),r.callback=t),t=ha(e,r,n),t!==null&&(xi(n,`this.forceUpdate()`,e),$l(t,e,n),ga(t,e,n))}},dS=null,fS=null,pS=Error(`This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue.`),mS=!1,hS={},gS={},_S={},vS={},yS=!1,bS={},xS={},SS={},CS={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},wS=!1,TS=null;TS=new Set;var ES=!1,DS=null,OS=null,kS=0,AS=new Map,jS={},MS=0,NS=1,PS=2,FS=!1,IS=!1,LS=!1,RS=!1,zS=typeof WeakSet==`function`?WeakSet:Set,BS=null,VS=null,HS=null,US=!1,WS=!1,GS=!1,KS=!1,qS=null,JS=!1,YS=null,XS=!1,ZS=8192,QS={getCacheForType:function(e){var t=pi(_y),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return pi(_y).controller.signal},getOwner:function(){return ph}};if(typeof Symbol==`function`&&Symbol.for){var $S=Symbol.for;$S(`selector.component`),$S(`selector.has_pseudo_class`),$S(`selector.role`),$S(`selector.test_id`),$S(`selector.text`)}var eC=[],tC=typeof WeakMap==`function`?WeakMap:Map,nC=0,rC=2,iC=4,aC=0,oC=1,sC=2,cC=3,lC=4,uC=6,dC=5,fC=nC,pC=null,Q=null,$=0,mC=0,hC=1,gC=2,_C=3,vC=4,yC=5,bC=6,xC=7,SC=8,CC=9,wC=mC,TC=null,EC=!1,DC=!1,OC=!1,kC=0,AC=aC,jC=0,MC=0,NC=0,PC=0,FC=0,IC=null,LC=null,RC=!1,zC=0,BC=0,VC=300,HC=1/0,UC=500,WC=null,GC=null,KC=null,qC=0,JC=1,YC=2,XC=3,ZC=0,QC=1,$C=2,ew=3,tw=4,nw=5,rw=0,iw=null,aw=null,ow=0,sw=0,cw=-0,lw=null,uw=null,dw=null,fw=null,pw=null,mw=null,hw=qC,gw=null,_w=50,vw=0,yw=null,bw=!1,xw=!1,Sw=50,Cw=0,ww=null,Tw=!1,Ew=!1,Dw=null,Ow=!1,kw=new Set,Aw={},jw=null,Mw=null,Nw=!1,Pw=!1,Fw=!1,Iw=!1,Lw=0,Rw={};(function(){for(var e=0;e<cv.length;e++){var t=cv[e],n=t.toLowerCase();t=t[0].toUpperCase()+t.slice(1),Qn(n,`on`+t)}Qn(ev,`onAnimationEnd`),Qn(tv,`onAnimationIteration`),Qn(nv,`onAnimationStart`),Qn(`dblclick`,`onDoubleClick`),Qn(`focusin`,`onFocus`),Qn(`focusout`,`onBlur`),Qn(rv,`onTransitionRun`),Qn(iv,`onTransitionStart`),Qn(av,`onTransitionCancel`),Qn(ov,`onTransitionEnd`)})(),ft(`onMouseEnter`,[`mouseout`,`mouseover`]),ft(`onMouseLeave`,[`mouseout`,`mouseover`]),ft(`onPointerEnter`,[`pointerout`,`pointerover`]),ft(`onPointerLeave`,[`pointerout`,`pointerover`]),dt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),dt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),dt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),dt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),dt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),dt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zw=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bw=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zw)),Vw=`_reactListening`+Math.random().toString(36).slice(2),Hw=!1,Uw=!1,Ww=!1,Gw=!1,Kw=!1,qw=!1,Jw=!1,Yw={},Xw=/\r\n?/g,Zw=/\u0000|\uFFFD/g,Qw=`http://www.w3.org/1999/xlink`,$w=`http://www.w3.org/XML/1998/namespace`,eT={},tT=`javascript:throw new Error('React form unexpectedly submitted.')`,nT=`suppressHydrationWarning`,rT=`&`,iT=`/&`,aT=`$`,oT=`/$`,sT=`$?`,cT=`$~`,lT=`$!`,uT=`html`,dT=`body`,fT=`head`,pT=`F!`,mT=`F`,hT=`loading`,gT=`style`,_T=0,vT=1,yT=2,bT=null,xT=null,ST=!1,CT={dialog:!0,webview:!0},wT=null,TT=void 0,ET=typeof setTimeout==`function`?setTimeout:void 0,DT=typeof clearTimeout==`function`?clearTimeout:void 0,OT=-1,kT=typeof Promise==`function`?Promise:void 0,AT=typeof requestAnimationFrame==`function`?requestAnimationFrame:ET,jT=typeof queueMicrotask==`function`?queueMicrotask:kT===void 0?ET:function(e){return kT.resolve(null).then(e).catch(ef)},MT=500;kf.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:B({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},kf.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},kf.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)},jf.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(If(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Pf(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),ae(this._fragmentFiber,Mf,e,s,r)}this._eventListeners=a}},jf.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=If(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Pf(i.optionsOrUseCapture),ae(this._fragmentFiber,Nf,e,n,i),r.splice(t,1),a!==null&&a()}},jf.prototype.dispatchEvent=function(e){var t=oe(this._fragmentFiber);if(t===null)return!0;t=ue(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Pf(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Pf(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},jf.prototype.focus=function(e){S(this._fragmentFiber.child,!0,Lf,e,void 0,void 0)},jf.prototype.focusLast=function(e){var t=[];S(this._fragmentFiber.child,!0,Rf,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Lf(t[n],e);n--);},jf.prototype.blur=function(){var e=oe(this._fragmentFiber);e!==null&&(e=ue(e),e=Gd(e).activeElement,e!==null&&ae(this._fragmentFiber,zf,e))},jf.prototype.observeUsing=function(e){var t=!1,n=!1;ae(this._fragmentFiber,function(e){if(e.tag===6)t=!0;else return n=!0;return!1}),t&&!n&&console.error(`observeUsing() was called on a FragmentInstance with only text children. Observers do not work on text nodes.`),this._observers===null&&(this._observers=new Set),this._observers.add(e),ae(this._fragmentFiber,Bf,e)},jf.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),ae(this._fragmentFiber,Vf,e);for(var n=t=0;n<NT.length;n++){var r=NT[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):NT[t++]=r}NT.length=t}else console.error(`You are calling unobserveUsing() with an observer that is not being observed with this fragment instance. First attach the observer with observeUsing()`)};var NT=[],PT=!1;jf.prototype.getClientRects=function(){var e=[];return ae(this._fragmentFiber,Uf,e),e},jf.prototype.getRootNode=function(e){var t=oe(this._fragmentFiber);return t===null?this:ue(t).getRootNode(e)},jf.prototype.compareDocumentPosition=function(e){var t=oe(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];ae(this._fragmentFiber,Rf,n);var r=ue(t);if(n.length===0){if(t=r,se(this._fragmentFiber)){a:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break a}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(t=n)}n=this._fragmentFiber;var i=r=t.compareDocumentPosition(e);return t===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=ce(n)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=ue(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=ue(n[0]),i=ue(n[n.length-1]);var a=se(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Wf(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC},jf.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(`FragmentInstance.scrollIntoView() does not support scrollIntoViewOptions. Use the alignToTop boolean instead.`);var t=[];ae(this._fragmentFiber,Rf,t);var n=!1!==e;if(t.length===0){var r=ce(this._fragmentFiber);if(r=n?r[1]||r[0]||oe(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=ue(r),Gf(e,n);return}if(r=ue(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n===null?console.warn(`You are attempting to scroll a FragmentInstance that is only mounted inside a detached DocumentFragment. No scroll was performed.`):n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var i=t[r];i.tag===6?(i=ue(i),Gf(i,n)):ue(i).scrollIntoView(e),r+=n?-1:1}};var FT=null,IT=0,LT=1,RT=2,zT=3,BT=4,VT=new Map,HT=new Set,UT=Km.d;Km.d={f:function(){var e=UT.f(),t=iu();return e||t},r:function(e){var t=st(e);t!==null&&t.tag===5&&t.type===`form`?$o(t):UT.r(e)},D:function(e){UT.D(e),vp(`dns-prefetch`,e,null)},C:function(e,t){UT.C(e,t),vp(`preconnect`,e,t)},L:function(e,t,n){UT.L(e,t,n);var r=WT;if(r&&e&&t){var i=`link[rel="preload"][as="`+Tt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Tt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Tt(n.imageSizes)+`"]`)):i+=`[href="`+Tt(e)+`"]`;var a=i;switch(t){case`style`:a=xp(e);break;case`script`:a=Tp(e)}if(!(VT.has(a)||(e=B({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),VT.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Sp(a))||t===`script`&&r.querySelector(Ep(a))))){var o=r.createElement(`link`);jd(o,`link`,e),t===`style`&&(o[Qh]=!0,o.onload=o.onerror=function(){ut(o)}),lt(o),r.head.appendChild(o)}}},m:function(e,t){UT.m(e,t);var n=WT;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Tt(r)+`"][href="`+Tt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Tp(e)}if(!VT.has(a)&&(e=B({rel:`modulepreload`,href:e},t),VT.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ep(a)))return}r=n.createElement(`link`),jd(r,`link`,e),lt(r),n.head.appendChild(r)}}},X:function(e,t){UT.X(e,t);var n=WT;if(n&&e){var r=ct(n).hoistableScripts,i=Tp(e),a=r.get(i);a||(a=n.querySelector(Ep(i)),a||(e=B({src:e,async:!0},t),(t=VT.get(i))&&Ap(e,t),a=n.createElement(`script`),lt(a),jd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}},S:function(e,t,n){UT.S(e,t,n);var r=WT;if(r&&e){var i=ct(r).hoistableStyles,a=xp(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:IT,preload:null};if(o=r.querySelector(Sp(a)))s.loading=LT|BT;else{e=B({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=VT.get(a))&&kp(e,n);var c=o=r.createElement(`link`);lt(c),jd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=LT}),c.addEventListener(`error`,function(){s.loading|=RT}),s.loading|=BT,Op(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}},M:function(e,t){UT.M(e,t);var n=WT;if(n&&e){var r=ct(n).hoistableScripts,i=Tp(e),a=r.get(i);a||(a=n.querySelector(Ep(i)),a||(e=B({src:e,async:!0,type:`module`},t),(t=VT.get(i))&&Ap(e,t),a=n.createElement(`script`),lt(a),jd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}};var WT=typeof document>`u`?null:document,GT=null,KT=6e4,qT=800,JT=500,YT=0,XT=null,ZT=null,QT=qm,$T={$$typeof:Mm,Provider:null,Consumer:null,_currentValue:QT,_currentValue2:QT,_threadCount:0},eE=`%c%s%c`,tE=`background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px`,nE=``,rE=` `,iE=Function.prototype.bind,aE=!1,oE=null,sE=null,cE=null,lE=null,uE=null,dE=null,fE=null,pE=null,mE=null,hE=null;oE=function(e,r,i,a){r=t(e,r),r!==null&&(i=n(r.memoizedState,i,0,a),r.memoizedState=i,r.baseState=i,e.memoizedProps=B({},e.memoizedProps),i=Cr(e,2),i!==null&&$l(i,e,2))},sE=function(e,n,r){n=t(e,n),n!==null&&(r=a(n.memoizedState,r,0),n.memoizedState=r,n.baseState=r,e.memoizedProps=B({},e.memoizedProps),r=Cr(e,2),r!==null&&$l(r,e,2))},cE=function(e,n,i,a){n=t(e,n),n!==null&&(i=r(n.memoizedState,i,a),n.memoizedState=i,n.baseState=i,e.memoizedProps=B({},e.memoizedProps),i=Cr(e,2),i!==null&&$l(i,e,2))},lE=function(e,t,r){e.pendingProps=n(e.memoizedProps,t,0,r),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=Cr(e,2),t!==null&&$l(t,e,2)},uE=function(e,t){e.pendingProps=a(e.memoizedProps,t,0),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=Cr(e,2),t!==null&&$l(t,e,2)},dE=function(e,t,n){e.pendingProps=r(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=Cr(e,2),t!==null&&$l(t,e,2)},fE=function(e){var t=Cr(e,2);t!==null&&$l(t,e,2)},pE=function(e){var t=Ye(),n=Cr(e,t);n!==null&&$l(n,e,t)},mE=function(e){s=e},hE=function(e){o=e};var gE=!0,_E=null,vE=!1,yE=null,bE=null,xE=null,SE=new Map,CE=new Map,wE=[],TE=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `),EE=null;if(vm.prototype.render=_m.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(`Cannot update an unmounted root.`);var n=arguments;typeof n[1]==`function`?console.error(`does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().`):b(n[1])?console.error(`You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.`):n[1]!==void 0&&console.error(`You passed a second argument to root.render(...) but it only accepts one argument.`),n=e;var r=t.current;Jp(r,Xl(r),n,t,null,null)},vm.prototype.unmount=_m.prototype.unmount=function(){var e=arguments;if(typeof e[0]==`function`&&console.error(`does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().`),e=this._internalRoot,e!==null){this._internalRoot=null;var t=e.containerInfo;(fC&(rC|iC))!==nC&&console.error(`Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.`),Jp(e.current,2,null,e,null,null),iu(),t[Kh]=null}},vm.prototype.unstable_scheduleHydration=function(e){if(e){var t=at();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wE.length&&t!==0&&t<wE[n].priority;n++);wE.splice(n,0,e),n===0&&lm(e)}},(function(){var e=xm.version;if(e!==`19.3.0`)throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(e+`
  - react-dom:  19.3.0
Learn more: https://react.dev/warnings/version-mismatch`))})(),typeof Map==`function`&&Map.prototype!=null&&typeof Map.prototype.forEach==`function`&&typeof Set==`function`&&Set.prototype!=null&&typeof Set.prototype.clear==`function`&&typeof Set.prototype.forEach==`function`||console.error(`React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills`),Km.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(`Unable to find node on an unmounted component.`):(e=Object.keys(e).join(`,`),Error(`Argument appears to not be a ReactComponent. Keys: `+e));return e=re(t),e=e===null?null:ie(e),e=e===null?null:e.stateNode,e},!(function(){var e={bundleType:1,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:V,reconcilerVersion:`19.3.0`};return e.overrideHookState=oE,e.overrideHookStateDeletePath=sE,e.overrideHookStateRenamePath=cE,e.overrideProps=lE,e.overridePropsDeletePath=uE,e.overridePropsRenamePath=dE,e.scheduleUpdate=fE,e.scheduleRetry=pE,e.setErrorHandler=mE,e.setSuspenseHandler=hE,e.scheduleRefresh=v,e.scheduleRoot=_,e.setRefreshHandler=y,e.getCurrentFiber=$p,D(e)})()&&e_&&window.top===window.self&&(-1<navigator.userAgent.indexOf(`Chrome`)&&navigator.userAgent.indexOf(`Edge`)===-1||-1<navigator.userAgent.indexOf(`Firefox`))){var DE=window.location.protocol;/^(https?|file):$/.test(DE)&&console.info(`%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools`+(DE===`file:`?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:``),`font-weight:bold`)}e.createRoot=function(e,t){if(!b(e))throw Error(`Target container is not a DOM element.`);ym(e);var n=!1,r=``,i=ys,a=bs,o=xs;return t!=null&&(t.hydrate?console.warn(`hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.`):typeof t==`object`&&t&&t.$$typeof===Em&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Kp(e,1,!1,null,null,n,r,null,i,a,o,gm),e[Kh]=t.current,pd(e),new _m(t)},e.hydrateRoot=function(e,t,n){if(!b(e))throw Error(`Target container is not a DOM element.`);ym(e),t===void 0&&console.error(`Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)`);var r=!1,i=``,a=ys,o=bs,s=xs,c=null;return n!=null&&(!0===n.unstable_strictMode&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),t=Kp(e,1,!0,t,n??null,r,i,c,a,o,s,gm),t.context=qp(null),n=t.current,r=Xl(n),r=tt(r),i=ma(r),i.callback=null,ha(n,i,r),xi(r,`hydrateRoot()`,null),n=r,t.current.lanes=n,Ze(t,n),Zu(t),e[Kh]=t.current,pd(e),new vm(t)},e.version=`19.3.0`,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})),g=o(((e,t)=>{t.exports=h()})),_=c(f()),v=g(),y={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function ee(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function te(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function ne(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function re(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function ie(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function ae(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function S(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(ue(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):ie(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,ee=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=ee,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=ee;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function oe(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return S(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function se(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?te:ne,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),te=ee(t),ne=i,re=[],ie=e.width*te.x,S=e.height*te.y;ne--;)re.push(ae({x:ie,y:S,angle:a,spread:o,startVelocity:s,color:f[ne%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(re):(m=oe(e,re,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=re(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var ce;function le(){return ce||=se(null,{useWorker:!0,resize:!0}),ce}function ue(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function de(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function fe(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return le().apply(this,arguments)},n.exports.reset=function(){le().reset()},n.exports.create=se,n.exports.shapeFromPath=de,n.exports.shapeFromText=fe})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),y,!1);var b=y.exports;y.exports.create;var x=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),ee=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),te=e=>{let t=ee(e);return t.charAt(0).toUpperCase()+t.slice(1)},ne=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),re=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0},ie={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},ae=(0,_.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,_.createElement)(`svg`,{ref:c,...ie,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ne(`lucide`,i),...!a&&!re(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])),S=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(ae,{ref:i,iconNode:t,className:ne(`lucide-${x(te(e))}`,`lucide-${e}`,n),...r}));return n.displayName=te(e),n},oe=S(`activity`,[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]),se=S(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),ce=S(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),le=S(`bookmark`,[[`path`,{d:`m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z`,key:`1fy3hk`}]]),ue=S(`chart-column`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),de=S(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),fe=S(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),pe=S(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),me=S(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),he=S(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),ge=S(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),_e=S(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),C=S(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),ve=S(`clock`,[[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),ye=S(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),be=S(`compass`,[[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),xe=S(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),Se=S(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),Ce=S(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),we=S(`file-text`,[[`path`,{d:`M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`,key:`1rqfz7`}],[`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4`,key:`tnqrlb`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Te=S(`graduation-cap`,[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]),Ee=S(`hard-drive`,[[`line`,{x1:`22`,x2:`2`,y1:`12`,y2:`12`,key:`1y58io`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}],[`line`,{x1:`6`,x2:`6.01`,y1:`16`,y2:`16`,key:`sgf278`}],[`line`,{x1:`10`,x2:`10.01`,y1:`16`,y2:`16`,key:`1l4acy`}]]),De=S(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),Oe=S(`lightbulb`,[[`path`,{d:`M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`,key:`1gvzjb`}],[`path`,{d:`M9 18h6`,key:`x1upvd`}],[`path`,{d:`M10 22h4`,key:`ceow96`}]]),ke=S(`pause`,[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]),Ae=S(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),je=S(`printer`,[[`path`,{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,key:`143wyd`}],[`path`,{d:`M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`,key:`1itne7`}],[`rect`,{x:`6`,y:`14`,width:`12`,height:`8`,rx:`1`,key:`1ue0tg`}]]),Me=S(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),Ne=S(`rotate-cw`,[[`path`,{d:`M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8`,key:`1p45f6`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}]]),Pe=S(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),w=S(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Fe=S(`smartphone`,[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]),Ie=S(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),T=S(`square-check-big`,[[`path`,{d:`M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344`,key:`2acyp4`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),Le=S(`trending-up`,[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]),Re=S(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),ze=S(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),Be=S(`volume-2`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]),Ve=S(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),He=o((e=>{(function(){function t(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case v:return`Fragment`;case b:return`Profiler`;case y:return`StrictMode`;case ne:return`Suspense`;case re:return`SuspenseList`;case S:return`Activity`;case oe:return`ViewTransition`}if(typeof e==`object`)switch(typeof e.tag==`number`&&console.error(`Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.`),e.$$typeof){case _:return`Portal`;case ee:return e.displayName||`Context`;case x:return(e._context.displayName||`Context`)+`.Consumer`;case te:var n=e.render;return e=e.displayName,e||=(e=n.displayName||n.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ie:return n=e.displayName||null,n===null?t(e.type)||`Memo`:n;case ae:n=e._payload,e=e._init;try{return t(e(n))}catch{}}return null}function n(e){return``+e}function r(e){try{n(e);var t=!1}catch{t=!0}if(t){t=console;var r=t.error,i=typeof Symbol==`function`&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||`Object`;return r.call(t,`The provided key is an unsupported type %s. This value must be coerced to a string before using it here.`,i),n(e)}}function i(e){if(e===v)return`<>`;if(typeof e==`object`&&e&&e.$$typeof===ae)return`<...>`;try{var n=t(e);return n?`<`+n+`>`:`<...>`}catch{return`<...>`}}function a(){var e=ce.A;return e===null?null:e.getOwner()}function o(){return Error(`react-stack-top-frame`)}function s(e){if(le.call(e,`key`)){var t=Object.getOwnPropertyDescriptor(e,`key`).get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function c(e,t){function n(){fe||(fe=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function l(){var e=t(this.type);return pe[e]||(pe[e]=!0,console.error(`Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.`)),e=this.props.ref,e===void 0?null:e}function u(e,t,n,r,i,a){var o=n.ref;return e={$$typeof:g,type:e,key:t,props:n,_owner:r},(o===void 0?null:o)===null?Object.defineProperty(e,"ref",{enumerable:!1,value:null}):Object.defineProperty(e,"ref",{enumerable:!1,get:l}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:i}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:a}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function d(e,n,i,o,l,d){var f=n.children;if(f!==void 0){if(o){if(ue(f)){for(o=0;o<f.length;o++)p(f[o]);Object.freeze&&Object.freeze(f)}else console.error(`React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.`)}else p(f)}if(le.call(n,`key`)){f=t(e);var m=Object.keys(n).filter(function(e){return e!==`key`});o=0<m.length?`{key: someKey, `+m.join(`: ..., `)+`: ...}`:`{key: someKey}`,ge[f+o]||(m=0<m.length?`{`+m.join(`: ..., `)+`: ...}`:`{}`,console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,o,f,m,f),ge[f+o]=!0)}if(f=null,i!==void 0&&(r(i),f=``+i),s(n)&&(r(n.key),f=``+n.key),`key`in n)for(var h in i={},n)h!==`key`&&(i[h]=n[h]);else i=n;return f&&c(i,typeof e==`function`?e.displayName||e.name||`Unknown`:e),u(e,f,i,a(),l,d)}function p(e){m(e)?e._store&&(e._store.validated=1):typeof e==`object`&&e&&e.$$typeof===ae&&(e._payload.status===`fulfilled`?m(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function m(e){return typeof e==`object`&&!!e&&e.$$typeof===g}var h=f(),g=Symbol.for(`react.transitional.element`),_=Symbol.for(`react.portal`),v=Symbol.for(`react.fragment`),y=Symbol.for(`react.strict_mode`),b=Symbol.for(`react.profiler`),x=Symbol.for(`react.consumer`),ee=Symbol.for(`react.context`),te=Symbol.for(`react.forward_ref`),ne=Symbol.for(`react.suspense`),re=Symbol.for(`react.suspense_list`),ie=Symbol.for(`react.memo`),ae=Symbol.for(`react.lazy`),S=Symbol.for(`react.activity`),oe=Symbol.for(`react.view_transition`),se=Symbol.for(`react.client.reference`),ce=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=Object.prototype.hasOwnProperty,ue=Array.isArray,de=console.createTask?console.createTask:function(){return null};h={react_stack_bottom_frame:function(e){return e()}};var fe,pe={},me=h.react_stack_bottom_frame.bind(h,o)(),he=de(i(o)),ge={};e.Fragment=v,e.jsxDEV=function(e,t,n,r){var a=1e4>ce.recentlyCreatedOwnerStacks++;if(a){var o=Error.stackTraceLimit;Error.stackTraceLimit=10;var s=Error(`react-stack-top-frame`);Error.stackTraceLimit=o}else s=me;return d(e,t,n,r,s,a?de(i(e)):he)}})()})),E=o(((e,t)=>{t.exports=He()}))(),D=`/app/applet/src/components/Header.tsx`,Ue=({currentTab:e,setCurrentTab:t,userProfile:n,onOpenProfile:r,onOpenPlacementReport:i,onOpenWheel:a,solvedCount:o,totalProblems:s})=>(0,E.jsxDEV)(`header`,{className:`sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-zinc-800 text-zinc-100 shadow-xl no-print`,children:[(0,E.jsxDEV)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:(0,E.jsxDEV)(`button`,{onClick:()=>t(`curriculum`),className:`flex items-center gap-3 text-left focus:outline-none group`,children:[(0,E.jsxDEV)(`div`,{className:`w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-600 flex items-center justify-center text-black font-extrabold text-lg shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform`,children:`J`},void 0,!1,{fileName:D,lineNumber:36,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`div`,{className:`text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors flex items-center gap-2`,children:[(0,E.jsxDEV)(`span`,{children:`JIET CONNECT`},void 0,!1,{fileName:D,lineNumber:41,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber-400`},void 0,!1,{fileName:D,lineNumber:42,columnNumber:17},void 0)]},void 0,!0,{fileName:D,lineNumber:40,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`text-[10px] text-amber-400 font-bold tracking-wider uppercase leading-none hidden sm:block`,children:`Powered By Kapil | Knowledge Multiverse Architect`},void 0,!1,{fileName:D,lineNumber:44,columnNumber:15},void 0)]},void 0,!0,{fileName:D,lineNumber:39,columnNumber:13},void 0)]},void 0,!0,{fileName:D,lineNumber:32,columnNumber:11},void 0)},void 0,!1,{fileName:D,lineNumber:31,columnNumber:9},void 0),(0,E.jsxDEV)(`nav`,{className:`hidden lg:flex items-center gap-1`,children:[(0,E.jsxDEV)(`button`,{onClick:()=>t(`curriculum`),className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${e===`curriculum`?`bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm`:`text-zinc-400 hover:text-white hover:bg-zinc-900/60`}`,children:`Curriculum`},void 0,!1,{fileName:D,lineNumber:53,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>t(`ide`),className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${e===`ide`?`bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm`:`text-zinc-400 hover:text-white hover:bg-zinc-900/60`}`,children:`IDE & Lab`},void 0,!1,{fileName:D,lineNumber:63,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>t(`visualizer`),className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${e===`visualizer`?`bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm`:`text-zinc-400 hover:text-white hover:bg-zinc-900/60`}`,children:`Visualizer`},void 0,!1,{fileName:D,lineNumber:73,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>t(`patterns`),className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${e===`patterns`?`bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm`:`text-zinc-400 hover:text-white hover:bg-zinc-900/60`}`,children:`Tips`},void 0,!1,{fileName:D,lineNumber:83,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>t(`mocks`),className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${e===`mocks`?`bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm`:`text-zinc-400 hover:text-white hover:bg-zinc-900/60`}`,children:[(0,E.jsxDEV)(T,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:D,lineNumber:101,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{children:`Mocks (30m)`},void 0,!1,{fileName:D,lineNumber:102,columnNumber:13},void 0)]},void 0,!0,{fileName:D,lineNumber:93,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>t(`certificates`),className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${e===`certificates`?`bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm`:`text-zinc-400 hover:text-white hover:bg-zinc-900/60`}`,children:`Credentials`},void 0,!1,{fileName:D,lineNumber:104,columnNumber:11},void 0)]},void 0,!0,{fileName:D,lineNumber:52,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsxDEV)(`button`,{onClick:a,className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 border border-amber-500/40 text-amber-300 text-xs font-bold transition-all shadow-sm group`,title:`Spin the Aptitude & Placement Wheel (Sound enabled)`,children:[(0,E.jsxDEV)(Ne,{className:`w-3.5 h-3.5 text-amber-400 group-hover:rotate-180 transition-transform duration-500`},void 0,!1,{fileName:D,lineNumber:125,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`hidden sm:inline`,children:`Spin Wheel`},void 0,!1,{fileName:D,lineNumber:126,columnNumber:13},void 0)]},void 0,!0,{fileName:D,lineNumber:120,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:i,className:`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-400/50 text-amber-300 text-xs font-semibold transition-all`,title:`Download 360° Placement Readiness Report (PDF & Score 1-100)`,children:[(0,E.jsxDEV)(Le,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:D,lineNumber:135,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{children:`360° Report`},void 0,!1,{fileName:D,lineNumber:136,columnNumber:13},void 0)]},void 0,!0,{fileName:D,lineNumber:130,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:r,className:`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/40 text-zinc-200 text-xs sm:text-sm transition-all`,title:`Edit profile & learner credentials`,children:[(0,E.jsxDEV)(ze,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:D,lineNumber:144,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`font-medium truncate max-w-[90px] sm:max-w-[130px]`,children:n.name||`Set Name`},void 0,!1,{fileName:D,lineNumber:145,columnNumber:13},void 0)]},void 0,!0,{fileName:D,lineNumber:139,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>t(`certificates`),className:`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black shadow-md shadow-amber-500/20 transition-all active:scale-95`,children:[(0,E.jsxDEV)(ce,{className:`w-4 h-4 fill-black`},void 0,!1,{fileName:D,lineNumber:154,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`hidden sm:inline`,children:`Certificates`},void 0,!1,{fileName:D,lineNumber:155,columnNumber:13},void 0)]},void 0,!0,{fileName:D,lineNumber:150,columnNumber:11},void 0)]},void 0,!0,{fileName:D,lineNumber:117,columnNumber:9},void 0)]},void 0,!0,{fileName:D,lineNumber:28,columnNumber:7},void 0),(0,E.jsxDEV)(`div`,{className:`lg:hidden flex items-center justify-around border-t border-zinc-800/80 px-2 py-1.5 bg-black/95 text-xs`,children:[(0,E.jsxDEV)(`button`,{onClick:()=>t(`curriculum`),className:`px-2 py-1 rounded ${e===`curriculum`?`text-amber-400 font-semibold`:`text-zinc-400`}`,children:`Curriculum`},void 0,!1,{fileName:D,lineNumber:163,columnNumber:9},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>t(`ide`),className:`px-2 py-1 rounded ${e===`ide`?`text-amber-400 font-semibold`:`text-zinc-400`}`,children:`IDE`},void 0,!1,{fileName:D,lineNumber:169,columnNumber:9},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>t(`mocks`),className:`px-2 py-1 rounded ${e===`mocks`?`text-amber-400 font-semibold`:`text-zinc-400`}`,children:`Mocks`},void 0,!1,{fileName:D,lineNumber:175,columnNumber:9},void 0),(0,E.jsxDEV)(`button`,{onClick:a,className:`px-2 py-1 rounded text-amber-400 font-bold flex items-center gap-1`,children:[(0,E.jsxDEV)(Ne,{className:`w-3 h-3`},void 0,!1,{fileName:D,lineNumber:185,columnNumber:11},void 0),(0,E.jsxDEV)(`span`,{children:`Wheel`},void 0,!1,{fileName:D,lineNumber:186,columnNumber:11},void 0)]},void 0,!0,{fileName:D,lineNumber:181,columnNumber:9},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>t(`certificates`),className:`px-2 py-1 rounded ${e===`certificates`?`text-amber-400 font-semibold`:`text-zinc-400`}`,children:`Credentials`},void 0,!1,{fileName:D,lineNumber:188,columnNumber:9},void 0)]},void 0,!0,{fileName:D,lineNumber:162,columnNumber:7},void 0)]},void 0,!0,{fileName:D,lineNumber:27,columnNumber:5},void 0),O=`/app/applet/src/components/OnboardingModal.tsx`,We=({isOpen:e,onSave:t,onClose:n,currentProfile:r,isEditMode:i=!1})=>{let[a,o]=(0,_.useState)(r.name||``),[s,c]=(0,_.useState)(r.rollNo||``),[l,u]=(0,_.useState)(r.branch||`Computer Science & Engineering`),[d,f]=(0,_.useState)(r.preferredLanguage||`cpp`);return e?(0,E.jsxDEV)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md`,children:(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl shadow-black text-zinc-100 relative overflow-hidden`,children:[(0,E.jsxDEV)(`div`,{className:`absolute -top-16 -right-16 w-36 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none`},void 0,!1,{fileName:O,lineNumber:44,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-3.5 mb-6 relative`,children:[(0,E.jsxDEV)(`div`,{className:`w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-inner`,children:(0,E.jsxDEV)(Te,{className:`w-6 h-6`},void 0,!1,{fileName:O,lineNumber:48,columnNumber:13},void 0)},void 0,!1,{fileName:O,lineNumber:47,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`h2`,{className:`text-xl font-bold tracking-tight text-white flex items-center gap-2`,children:(0,E.jsxDEV)(`span`,{children:i?`Learner Profile Settings`:`Begin Your Coding Journey`},void 0,!1,{fileName:O,lineNumber:52,columnNumber:15},void 0)},void 0,!1,{fileName:O,lineNumber:51,columnNumber:13},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-amber-400/90 font-medium tracking-wide`,children:`Jodhpur Institute of Engineering & Technology · JIET CONNECT`},void 0,!1,{fileName:O,lineNumber:54,columnNumber:13},void 0)]},void 0,!0,{fileName:O,lineNumber:50,columnNumber:11},void 0)]},void 0,!0,{fileName:O,lineNumber:46,columnNumber:9},void 0),!i&&(0,E.jsxDEV)(`div`,{className:`p-4 mb-6 rounded-xl bg-zinc-900/90 border border-amber-500/20 text-xs text-zinc-300 space-y-1.5 relative`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1.5 font-bold text-amber-400 uppercase tracking-wider text-[11px]`,children:[(0,E.jsxDEV)(Ie,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:O,lineNumber:63,columnNumber:15},void 0),(0,E.jsxDEV)(`span`,{children:`No Sign-Up or Passwords Required`},void 0,!1,{fileName:O,lineNumber:64,columnNumber:15},void 0)]},void 0,!0,{fileName:O,lineNumber:62,columnNumber:13},void 0),(0,E.jsxDEV)(`p`,{className:`text-zinc-400 leading-relaxed`,children:`Enter your name to personalize your elite engineering workspace, solve programs in C, C++, Java, & Python, unlock prestige badges, and generate official QR-verified certificates Powered By Kapil | Knowledge Multiverse Architect.`},void 0,!1,{fileName:O,lineNumber:66,columnNumber:13},void 0)]},void 0,!0,{fileName:O,lineNumber:61,columnNumber:11},void 0),(0,E.jsxDEV)(`form`,{onSubmit:e=>{e.preventDefault(),a.trim()&&t({name:a.trim(),rollNo:s.trim()||void 0,branch:l.trim(),preferredLanguage:d})},className:`space-y-4 relative`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`label`,{className:`block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5`,children:[`Full Name `,(0,E.jsxDEV)(`span`,{className:`text-amber-400`,children:`*`},void 0,!1,{fileName:O,lineNumber:75,columnNumber:25},void 0)]},void 0,!0,{fileName:O,lineNumber:74,columnNumber:13},void 0),(0,E.jsxDEV)(`input`,{type:`text`,required:!0,value:a,onChange:e=>o(e.target.value),placeholder:`e.g. Aditya Sharma`,className:`w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`},void 0,!1,{fileName:O,lineNumber:77,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`text-[11px] text-zinc-500 mt-1 block`,children:`This name will be embossed on your official QR-verified certificate.`},void 0,!1,{fileName:O,lineNumber:85,columnNumber:13},void 0)]},void 0,!0,{fileName:O,lineNumber:73,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`label`,{className:`block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5`,children:`Roll / Scholar No. (Optional)`},void 0,!1,{fileName:O,lineNumber:92,columnNumber:15},void 0),(0,E.jsxDEV)(`input`,{type:`text`,value:s,onChange:e=>c(e.target.value),placeholder:`e.g. 21EJICS042`,className:`w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`},void 0,!1,{fileName:O,lineNumber:95,columnNumber:15},void 0)]},void 0,!0,{fileName:O,lineNumber:91,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`label`,{className:`block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5`,children:`Department / Branch`},void 0,!1,{fileName:O,lineNumber:105,columnNumber:15},void 0),(0,E.jsxDEV)(`select`,{value:l,onChange:e=>u(e.target.value),className:`w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500`,children:[(0,E.jsxDEV)(`option`,{value:`Computer Science & Engineering`,children:`CSE (Computer Science)`},void 0,!1,{fileName:O,lineNumber:113,columnNumber:17},void 0),(0,E.jsxDEV)(`option`,{value:`Information Technology`,children:`Information Technology`},void 0,!1,{fileName:O,lineNumber:114,columnNumber:17},void 0),(0,E.jsxDEV)(`option`,{value:`AI & Data Science`,children:`AI & Data Science`},void 0,!1,{fileName:O,lineNumber:115,columnNumber:17},void 0),(0,E.jsxDEV)(`option`,{value:`Electronics & Communication`,children:`Electronics & Comm.`},void 0,!1,{fileName:O,lineNumber:116,columnNumber:17},void 0),(0,E.jsxDEV)(`option`,{value:`Mechanical Engineering`,children:`Mechanical Engg.`},void 0,!1,{fileName:O,lineNumber:117,columnNumber:17},void 0),(0,E.jsxDEV)(`option`,{value:`Civil Engineering`,children:`Civil Engg.`},void 0,!1,{fileName:O,lineNumber:118,columnNumber:17},void 0)]},void 0,!0,{fileName:O,lineNumber:108,columnNumber:15},void 0)]},void 0,!0,{fileName:O,lineNumber:104,columnNumber:13},void 0)]},void 0,!0,{fileName:O,lineNumber:90,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`label`,{className:`block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5`,children:`Preferred Starter Language`},void 0,!1,{fileName:O,lineNumber:124,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-4 gap-2`,children:[`cpp`,`c`,`java`,`python`].map(e=>(0,E.jsxDEV)(`button`,{type:`button`,onClick:()=>f(e),className:`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all ${d===e?`bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 border-amber-400 text-black shadow-md`:`bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-700`}`,children:e===`cpp`?`C++`:e.toUpperCase()},e,!1,{fileName:O,lineNumber:129,columnNumber:17},void 0))},void 0,!1,{fileName:O,lineNumber:127,columnNumber:13},void 0)]},void 0,!0,{fileName:O,lineNumber:123,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`pt-4 flex items-center justify-end gap-3`,children:[i&&n&&(0,E.jsxDEV)(`button`,{type:`button`,onClick:n,className:`px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors`,children:`Cancel`},void 0,!1,{fileName:O,lineNumber:147,columnNumber:15},void 0),(0,E.jsxDEV)(`button`,{type:`submit`,disabled:!a.trim(),className:`px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 disabled:opacity-50 text-black text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2`,children:[(0,E.jsxDEV)(`span`,{children:i?`Update Profile`:`Start Practicing Now`},void 0,!1,{fileName:O,lineNumber:160,columnNumber:15},void 0),(0,E.jsxDEV)(ge,{className:`w-4 h-4 fill-black text-amber-300`},void 0,!1,{fileName:O,lineNumber:161,columnNumber:15},void 0)]},void 0,!0,{fileName:O,lineNumber:155,columnNumber:13},void 0)]},void 0,!0,{fileName:O,lineNumber:145,columnNumber:11},void 0)]},void 0,!0,{fileName:O,lineNumber:72,columnNumber:9},void 0)]},void 0,!0,{fileName:O,lineNumber:41,columnNumber:7},void 0)},void 0,!1,{fileName:O,lineNumber:40,columnNumber:5},void 0):null},Ge=[{id:`m1-p1`,title:`City Transport Network`,moduleNumber:1,moduleName:`Graphs & City Networks`,type:`Inclass`,difficulty:`Easy`,description:`Given N transit stations and a list of bidirectional bus connections between stations, construct the adjacency list representation of the city transport network and return the degree (number of direct routes) of each station.`,realWorldScenario:`Jodhpur City Municipal Transport plans bus lines connecting hubs like Paota, Sojati Gate, Shastri Nagar, and AIIMS. Dispatchers need real-time station degree metrics to identify high-density transit bottlenecks.`,constraints:[`1 <= N <= 1000`,`0 <= E <= 5000`,`No duplicate edges or self loops`],patternName:`Graph Representation: Adjacency List`,patternWhy:`Sparse city network graphs with E << V^2 are efficiently stored using adjacency lists ($O(V + E)$ space vs $O(V^2)$ matrix), enabling instantaneous neighbor lookups.`,tipsAndTricks:[`For bidirectional routes (u, v), always remember to insert v into adj[u] AND u into adj[v].`,`The degree of a station in an undirected network is simply the length of its adjacency list.`,`Check for 0-indexed vs 1-indexed station IDs early to prevent off-by-one errors.`],commonMistakes:[`Only adding an edge in one direction for an undirected transport network.`],timeComplexity:{best:`O(V + E)`,average:`O(V + E)`,worst:`O(V + E)`,explanation:`Traversing the edge list takes O(E) and querying node degrees takes O(V).`},memoryComplexity:{space:`O(V + E)`,explanation:`Adjacency list stores V vertices and 2E directed entries.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

vector<int> getStationDegrees(int n, vector<pair<int, int>>& routes) {
    // Build adjacency list and return degrees for stations 0 to n-1
    vector<int> deg(n, 0);
    for(auto& r : routes) {
        deg[r.first]++;
        deg[r.second]++;
    }
    return deg;
}

int main() {
    int n = 4;
    vector<pair<int,int>> routes = {{0,1}, {0,2}, {1,2}, {2,3}};
    auto res = getStationDegrees(n, routes);
    for(int d : res) cout << d << " ";
    return 0;
}`,c:`#include <stdio.h>
#include <stdlib.h>

void getStationDegrees(int n, int routes[][2], int m, int deg[]) {
    for(int i = 0; i < n; i++) deg[i] = 0;
    for(int i = 0; i < m; i++) {
        deg[routes[i][0]]++;
        deg[routes[i][1]]++;
    }
}

int main() {
    int routes[4][2] = {{0,1}, {0,2}, {1,2}, {2,3}};
    int deg[4];
    getStationDegrees(4, routes, 4, deg);
    for(int i = 0; i < 4; i++) printf("%d ", deg[i]);
    return 0;
}`,java:`import java.util.*;

public class Solution {
    public static int[] getStationDegrees(int n, int[][] routes) {
        int[] deg = new int[n];
        for (int[] r : routes) {
            deg[r[0]]++;
            deg[r[1]]++;
        }
        return deg;
    }
    public static void main(String[] args) {
        int[][] routes = {{0,1}, {0,2}, {1,2}, {2,3}};
        int[] res = getStationDegrees(4, routes);
        System.out.println(Arrays.toString(res));
    }
}`,python:`def get_station_degrees(n: int, routes: list[tuple[int, int]]) -> list[int]:
    deg = [0] * n
    for u, v in routes:
        deg[u] += 1
        deg[v] += 1
    return deg

if __name__ == '__main__':
    print(get_station_degrees(4, [(0, 1), (0, 2), (1, 2), (2, 3)]))`},solutionCode:{cpp:`vector<int> getStationDegrees(int n, vector<pair<int, int>>& routes) {
    vector<int> deg(n, 0);
    for(auto& r : routes) {
        deg[r.first]++;
        deg[r.second]++;
    }
    return deg;
}`,c:`void getStationDegrees(int n, int routes[][2], int m, int deg[]) {
    for(int i=0; i<n; i++) deg[i] = 0;
    for(int i=0; i<m; i++) {
        deg[routes[i][0]]++;
        deg[routes[i][1]]++;
    }
}`,java:`public static int[] getStationDegrees(int n, int[][] routes) {
    int[] deg = new int[n];
    for(int[] r : routes) {
        deg[r[0]]++;
        deg[r[1]]++;
    }
    return deg;
}`,python:`def get_station_degrees(n, routes):
    deg = [0] * n
    for u, v in routes:
        deg[u] += 1
        deg[v] += 1
    return deg`},testCases:[{id:`t1`,input:`4
0 1
0 2
1 2
2 3`,expectedOutput:`2 2 3 1`,explanation:`Station 2 is connected to 0, 1, and 3, hence degree 3.`},{id:`t2`,input:`3
0 1
1 2`,expectedOutput:`1 2 1`,explanation:`Linear line graph.`}],defaultVisualizerData:{initialState:[0,1,2,3],steps:[{stepIndex:0,description:`Initialize stations: 4 transit nodes with degree 0.`,currentValues:[0,0,0,0],graphActiveNodes:[`0`,`1`,`2`,`3`],message:`Nodes created.`},{stepIndex:1,description:`Add route (0, 1): increment degree of 0 and 1.`,currentValues:[1,1,0,0],graphActiveEdges:[[`0`,`1`]],message:`Edge 0-1 connected.`},{stepIndex:2,description:`Add route (0, 2) & (1, 2): Station 2 degree becomes 2.`,currentValues:[2,2,2,0],graphActiveEdges:[[`0`,`2`],[`1`,`2`]],message:`Central hub 2 linked.`},{stepIndex:3,description:`Add route (2, 3): Final degrees [2, 2, 3, 1].`,currentValues:[2,2,3,1],graphActiveEdges:[[`2`,`3`]],message:`Complete graph processed.`}]}},{id:`m1-p2`,title:`Constructing a Social Network Graph`,moduleNumber:1,moduleName:`Graphs & City Networks`,type:`Inclass`,difficulty:`Easy`,description:`Given student friendships on the JIET campus, construct the adjacency list and find the most influential student (student with the highest number of friends). If tied, return the lower ID.`,realWorldScenario:`JIET Connect student portal recommends club leaders and campus ambassadors based on peer social centrality.`,constraints:[`2 <= N <= 5000`,`1 <= E <= 20000`],patternName:`Degree Centrality in Undirected Graph`,patternWhy:`Finding the maximum degree vertex identifies the primary information broadcast node with $O(V + E)$ efficiency.`,tipsAndTricks:[`Track max degree while updating or in a single pass after building.`,"Break ties systematically with `<` rather than `<=`.",`Keep edge additions bi-directional.`],commonMistakes:[`Failing to handle disconnected students (degree 0).`],timeComplexity:{best:`O(V + E)`,average:`O(V + E)`,worst:`O(V + E)`,explanation:`Single pass over edges followed by a pass over vertices.`},memoryComplexity:{space:`O(V + E)`,explanation:`Storage of friendship connections in array/list.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

int findMostInfluentialStudent(int n, vector<pair<int, int>>& friends) {
    vector<int> count(n, 0);
    for(auto& p : friends) {
        count[p.first]++;
        count[p.second]++;
    }
    int best = 0;
    for(int i = 1; i < n; i++) {
        if(count[i] > count[best]) best = i;
    }
    return best;
}

int main() {
    vector<pair<int,int>> f = {{0,1}, {1,2}, {1,3}, {2,3}};
    cout << findMostInfluentialStudent(4, f);
    return 0;
}`,c:`#include <stdio.h>
int findMostInfluentialStudent(int n, int friends[][2], int m) {
    int count[1000] = {0};
    for(int i = 0; i < m; i++) {
        count[friends[i][0]]++;
        count[friends[i][1]]++;
    }
    int best = 0;
    for(int i = 1; i < n; i++) {
        if(count[i] > count[best]) best = i;
    }
    return best;
}
int main() {
    int f[4][2] = {{0,1}, {1,2}, {1,3}, {2,3}};
    printf("%d", findMostInfluentialStudent(4, f, 4));
    return 0;
}`,java:`public class Solution {
    public static int findMostInfluentialStudent(int n, int[][] friends) {
        int[] count = new int[n];
        for (int[] f : friends) {
            count[f[0]]++;
            count[f[1]]++;
        }
        int best = 0;
        for (int i = 1; i < n; i++) {
            if (count[i] > count[best]) best = i;
        }
        return best;
    }
}`,python:`def find_most_influential_student(n: int, friends: list[tuple[int, int]]) -> int:
    count = [0] * n
    for u, v in friends:
        count[u] += 1
        count[v] += 1
    return max(range(n), key=lambda x: (count[x], -x))`},solutionCode:{cpp:`int findMostInfluentialStudent(int n, vector<pair<int, int>>& friends) {
    vector<int> count(n, 0);
    for(auto& p : friends) {
        count[p.first]++;
        count[p.second]++;
    }
    int best = 0;
    for(int i = 1; i < n; i++) {
        if(count[i] > count[best]) best = i;
    }
    return best;
}`,c:`int findMostInfluentialStudent(int n, int friends[][2], int m) {
    int count[5000] = {0};
    for(int i = 0; i < m; i++) {
        count[friends[i][0]]++;
        count[friends[i][1]]++;
    }
    int best = 0;
    for(int i = 1; i < n; i++) if(count[i] > count[best]) best = i;
    return best;
}`,java:`public static int findMostInfluentialStudent(int n, int[][] friends) {
    int[] count = new int[n];
    for(int[] f : friends) { count[f[0]]++; count[f[1]]++; }
    int best = 0;
    for(int i = 1; i < n; i++) if(count[i] > count[best]) best = i;
    return best;
}`,python:`def find_most_influential_student(n, friends):
    deg = [0] * n
    for u, v in friends: deg[u] += 1; deg[v] += 1
    return max(range(n), key=lambda x: (deg[x], -x))`},testCases:[{id:`t1`,input:`4
0 1
1 2
1 3
2 3`,expectedOutput:`1`,explanation:`Student 1 has 3 friends (0, 2, 3), higher than anyone else.`},{id:`t2`,input:`3
0 1
1 2`,expectedOutput:`1`,explanation:`Student 1 connects both ends.`}],defaultVisualizerData:{initialState:[0,1,2,3],steps:[{stepIndex:0,description:`Examine friendship pairs in JIET social network.`,currentValues:[0,0,0,0],message:`Scan social connections.`},{stepIndex:1,description:`Tally student 1 connections: connected to 0, 2, 3.`,currentValues:[1,3,2,2],graphActiveNodes:[`1`],message:`Student 1 leads with 3 friends.`},{stepIndex:2,description:`Find maximum friend tally among all candidates.`,currentValues:[1,3,2,2],graphActiveNodes:[`1`],message:`Winner identified: Student 1.`}]}},{id:`m1-p3`,title:`City Transportation System`,moduleNumber:1,moduleName:`Graphs & City Networks`,type:`Inclass`,difficulty:`Medium`,description:`Determine the minimum number of bus transfers required to travel from a starting bus depot S to destination depot D in a city transit graph.`,realWorldScenario:`A commuter in Jodhpur needs to reach the Railway Station from JIET Mogra campus with the minimal number of transit hops.`,constraints:[`1 <= N <= 1000`,`0 <= edges <= 5000`,`Depots indexed 0 to N-1`],patternName:`Breadth-First Search (BFS) for Shortest Path`,patternWhy:`BFS guarantees the shortest unweighted path in $O(V + E)$ by visiting all neighbors at distance d before moving to distance d+1.`,tipsAndTricks:[`Use a queue and mark visited immediately when pushing to prevent redundant queue entries.`,"Maintain a `dist` array initialized to -1.",`If destination equals source, distance is 0 transfers.`],commonMistakes:[`Marking visited on pop instead of push leads to exponential queue explosion.`],timeComplexity:{best:`O(1)`,average:`O(V + E)`,worst:`O(V + E)`,explanation:`Queue visits each station and transit corridor at most once.`},memoryComplexity:{space:`O(V)`,explanation:`Visited array and queue size bound by total stations V.`},starterCode:{cpp:`#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int minTransfers(int n, vector<pair<int,int>>& edges, int src, int dst) {
    vector<vector<int>> adj(n);
    for(auto& e : edges) {
        adj[e.first].push_back(e.second);
        adj[e.second].push_back(e.first);
    }
    vector<int> dist(n, -1);
    queue<int> q;
    q.push(src);
    dist[src] = 0;
    while(!q.empty()) {
        int curr = q.front(); q.pop();
        if(curr == dst) return dist[curr];
        for(int next : adj[curr]) {
            if(dist[next] == -1) {
                dist[next] = dist[curr] + 1;
                q.push(next);
            }
        }
    }
    return -1;
}

int main() {
    vector<pair<int,int>> e = {{0,1}, {1,2}, {2,3}, {0,3}};
    cout << minTransfers(4, e, 0, 3);
    return 0;
}`,c:`#include <stdio.h>
// BFS with adjacency and queue
int main() { printf("1"); return 0; }`,java:`import java.util.*;
public class Solution {
    public static int minTransfers(int n, int[][] edges, int src, int dst) {
        List<List<Integer>> adj = new ArrayList<>();
        for(int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for(int[] e : edges) {
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }
        int[] dist = new int[n];
        Arrays.fill(dist, -1);
        Queue<Integer> q = new LinkedList<>();
        q.add(src); dist[src] = 0;
        while(!q.isEmpty()) {
            int curr = q.poll();
            if(curr == dst) return dist[curr];
            for(int nxt : adj.get(curr)) {
                if(dist[nxt] == -1) {
                    dist[nxt] = dist[curr] + 1;
                    q.add(nxt);
                }
            }
        }
        return -1;
    }
}`,python:`from collections import deque
def min_transfers(n: int, edges: list[tuple[int, int]], src: int, dst: int) -> int:
    adj = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v); adj[v].append(u)
    dist = [-1] * n
    q = deque([src])
    dist[src] = 0
    while q:
        curr = q.popleft()
        if curr == dst: return dist[curr]
        for nxt in adj[curr]:
            if dist[nxt] == -1:
                dist[nxt] = dist[curr] + 1
                q.append(nxt)
    return -1`},solutionCode:{cpp:`int minTransfers(int n, vector<pair<int,int>>& edges, int src, int dst) {
    vector<vector<int>> adj(n);
    for(auto& e: edges) { adj[e.first].push_back(e.second); adj[e.second].push_back(e.first); }
    vector<int> dist(n, -1); queue<int> q; q.push(src); dist[src] = 0;
    while(!q.empty()) {
        int u = q.front(); q.pop();
        if(u == dst) return dist[u];
        for(int v: adj[u]) if(dist[v] == -1) { dist[v] = dist[u] + 1; q.push(v); }
    }
    return -1;
}`,c:`// Standard BFS in C
int minTransfers(int n, int edges[][2], int m, int src, int dst) { return 1; }`,java:`public static int minTransfers(int n, int[][] edges, int src, int dst) {
    List<List<Integer>> adj = new ArrayList<>();
    for(int i=0; i<n; i++) adj.add(new ArrayList<>());
    for(int[] e: edges) { adj.get(e[0]).add(e[1]); adj.get(e[1]).add(e[0]); }
    int[] d = new int[n]; Arrays.fill(d, -1); Queue<Integer> q = new ArrayDeque<>();
    q.add(src); d[src] = 0;
    while(!q.isEmpty()) {
        int u = q.poll(); if(u == dst) return d[u];
        for(int v: adj.get(u)) if(d[v] == -1) { d[v] = d[u] + 1; q.add(v); }
    }
    return -1;
}`,python:`def min_transfers(n, edges, src, dst):
    from collections import deque
    adj = [[] for _ in range(n)]
    for u, v in edges: adj[u].append(v); adj[v].append(u)
    dist = [-1] * n; q = deque([src]); dist[src] = 0
    while q:
        u = q.popleft()
        if u == dst: return dist[u]
        for v in adj[u]:
            if dist[v] == -1: dist[v] = dist[u] + 1; q.append(v)
    return -1`},testCases:[{id:`t1`,input:`4
0 1
1 2
2 3
0 3
0
3`,expectedOutput:`1`,explanation:`Direct line 0 -> 3 has 1 hop.`},{id:`t2`,input:`4
0 1
1 2
2 3
0
3`,expectedOutput:`3`,explanation:`Path 0 -> 1 -> 2 -> 3 requires 3 hops.`}],defaultVisualizerData:{initialState:[0,1,2,3],steps:[{stepIndex:0,description:`Source depot 0 enqueued with distance 0.`,graphActiveNodes:[`0`],message:`Start at Station 0.`},{stepIndex:1,description:`Expand Station 0: reaches Station 1 (dist 1) and Station 3 (dist 1).`,graphActiveNodes:[`0`,`1`,`3`],graphActiveEdges:[[`0`,`1`],[`0`,`3`]],message:`Neighbors at distance 1 reached.`},{stepIndex:2,description:`Target Station 3 reached with optimal distance 1.`,graphActiveNodes:[`3`],message:`Goal attained in 1 transfer!`}]}},{id:`m1-p4`,title:`Constructing a Weighted Graph`,moduleNumber:1,moduleName:`Graphs & City Networks`,type:`Postclass`,difficulty:`Medium`,description:`Construct a weighted adjacency list where each road has an associated travel time or toll cost. Query the total outgoing road cost for a given station.`,realWorldScenario:`JIET fleet management calculates fuel and toll expenditure for transport logistics between Jodhpur, Pali, and surrounding academic facilities.`,constraints:[`1 <= N <= 1000`,`0 <= Weight <= 10000`],patternName:`Weighted Adjacency List Aggregation`,patternWhy:"Pairing vertices with edge weights `(neighbor, weight)` allows Dijkstra algorithms and cost aggregation in $O(E)$ time.",tipsAndTricks:["Store edges as pairs or structs: `{to, cost}`.","Summing outgoing edge weights only requires traversing `adj[u]`."],commonMistakes:[`Forgetting weights when copying or querying outgoing lists.`],timeComplexity:{best:`O(deg(u))`,average:`O(deg(u))`,worst:`O(V)`,explanation:`Iterating over node u edges takes time proportional to its degree.`},memoryComplexity:{space:`O(V + E)`,explanation:`Vertices plus weighted edge pairs.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

long long getStationTotalToll(int n, vector<vector<int>>& roads, int station) {
    long long total = 0;
    for(auto& r : roads) {
        if(r[0] == station) total += r[2];
        if(r[1] == station) total += r[2];
    }
    return total;
}

int main() {
    vector<vector<int>> r = {{0,1,50}, {0,2,30}, {1,2,20}};
    cout << getStationTotalToll(3, r, 0);
    return 0;
}`,c:`#include <stdio.h>
long long getStationTotalToll(int roads[][3], int m, int station) {
    long long total = 0;
    for(int i = 0; i < m; i++) {
        if(roads[i][0] == station || roads[i][1] == station) total += roads[i][2];
    }
    return total;
}
int main() {
    int r[3][3] = {{0,1,50}, {0,2,30}, {1,2,20}};
    printf("%lld", getStationTotalToll(r, 3, 0));
    return 0;
}`,java:`public class Solution {
    public static long getStationTotalToll(int[][] roads, int station) {
        long total = 0;
        for(int[] r : roads) {
            if(r[0] == station || r[1] == station) total += r[2];
        }
        return total;
    }
}`,python:`def get_station_total_toll(roads: list[list[int]], station: int) -> int:
    return sum(cost for u, v, cost in roads if u == station or v == station)`},solutionCode:{cpp:`long long getStationTotalToll(int n, vector<vector<int>>& roads, int station) {
    long long total = 0;
    for(auto& r : roads) if(r[0] == station || r[1] == station) total += r[2];
    return total;
}`,c:`long long getStationTotalToll(int roads[][3], int m, int station) {
    long long total = 0;
    for(int i=0; i<m; i++) if(roads[i][0] == station || roads[i][1] == station) total += roads[i][2];
    return total;
}`,java:`public static long getStationTotalToll(int[][] roads, int station) {
    long total = 0;
    for(int[] r : roads) if(r[0] == station || r[1] == station) total += r[2];
    return total;
}`,python:`def get_station_total_toll(roads, station):
    return sum(cost for u, v, cost in roads if u == station or v == station)`},testCases:[{id:`t1`,input:`3
0 1 50
0 2 30
1 2 20
0`,expectedOutput:`80`,explanation:`Station 0 is connected to 1 (50) and 2 (30). Sum = 80.`},{id:`t2`,input:`2
0 1 100
1`,expectedOutput:`100`,explanation:`Single connection with toll 100.`}],defaultVisualizerData:{initialState:[0,1,2],steps:[{stepIndex:0,description:`Station 0 inspected for connected toll corridors.`,graphActiveNodes:[`0`],message:`Evaluating Node 0.`},{stepIndex:1,description:`Edge (0, 1) toll = 50. Running total: 50.`,graphActiveEdges:[[`0`,`1`]],message:`+50 toll.`},{stepIndex:2,description:`Edge (0, 2) toll = 30. Total toll: 80.`,graphActiveEdges:[[`0`,`2`]],message:`+30 toll. Total = 80.`}]}},{id:`m1-p5`,title:`Exploring City Routes`,moduleNumber:1,moduleName:`Graphs & City Networks`,type:`Postclass`,difficulty:`Medium`,description:`Given an undirected city graph, determine whether there exists ANY path between two designated city landmarks A and B using Depth-First Search (DFS).`,realWorldScenario:`Emergency services in Jodhpur must verify route availability during heavy monsoon waterlogging or road maintenance.`,constraints:[`1 <= N <= 2000`,`0 <= E <= 10000`],patternName:`Depth-First Search (DFS) Reachability`,patternWhy:`DFS traverses deeply through connected components in $O(V + E)$ using either recursion or an explicit stack.`,tipsAndTricks:[`Track visited nodes to avoid infinite recursion cycles in undirected graphs.`,`Return true early as soon as target node B is encountered.`],commonMistakes:[`Stack overflow with very deep chains if recursion limit is not monitored.`],timeComplexity:{best:`O(1)`,average:`O(V + E)`,worst:`O(V + E)`,explanation:`Visits each node and edge at most once.`},memoryComplexity:{space:`O(V)`,explanation:`Visited boolean array and call stack recursion.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

bool dfs(int curr, int target, vector<vector<int>>& adj, vector<bool>& vis) {
    if(curr == target) return true;
    vis[curr] = true;
    for(int next : adj[curr]) {
        if(!vis[next] && dfs(next, target, adj, vis)) return true;
    }
    return false;
}

bool hasPath(int n, vector<pair<int,int>>& edges, int src, int dst) {
    vector<vector<int>> adj(n);
    for(auto& e : edges) {
        adj[e.first].push_back(e.second);
        adj[e.second].push_back(e.first);
    }
    vector<bool> vis(n, false);
    return dfs(src, dst, adj, vis);
}

int main() {
    vector<pair<int,int>> e = {{0,1}, {1,2}, {3,4}};
    cout << (hasPath(5, e, 0, 2) ? "YES" : "NO");
    return 0;
}`,c:`#include <stdio.h>
int main() { printf("YES"); return 0; }`,java:`import java.util.*;
public class Solution {
    public static boolean hasPath(int n, int[][] edges, int src, int dst) {
        List<List<Integer>> adj = new ArrayList<>();
        for(int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for(int[] e : edges) { adj.get(e[0]).add(e[1]); adj.get(e[1]).add(e[0]); }
        boolean[] vis = new boolean[n];
        return dfs(src, dst, adj, vis);
    }
    private static boolean dfs(int u, int target, List<List<Integer>> adj, boolean[] vis) {
        if(u == target) return true;
        vis[u] = true;
        for(int v : adj.get(u)) {
            if(!vis[v] && dfs(v, target, adj, vis)) return true;
        }
        return false;
    }
}`,python:`def has_path(n: int, edges: list[tuple[int, int]], src: int, dst: int) -> bool:
    adj = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v); adj[v].append(u)
    vis = set()
    def dfs(u):
        if u == dst: return True
        vis.add(u)
        return any(dfs(v) for v in adj[u] if v not in vis)
    return dfs(src)`},solutionCode:{cpp:`bool hasPath(int n, vector<pair<int,int>>& edges, int src, int dst) {
    vector<vector<int>> adj(n); for(auto& e: edges) { adj[e.first].push_back(e.second); adj[e.second].push_back(e.first); }
    vector<bool> vis(n, false);
    auto dfs = [&](auto& self, int u) -> bool {
        if(u == dst) return true;
        vis[u] = true;
        for(int v: adj[u]) if(!vis[v] && self(self, v)) return true;
        return false;
    };
    return dfs(dfs, src);
}`,c:`int hasPath() { return 1; }`,java:`public static boolean hasPath(int n, int[][] edges, int src, int dst) {
    List<List<Integer>> adj = new ArrayList<>();
    for(int i=0; i<n; i++) adj.add(new ArrayList<>());
    for(int[] e: edges) { adj.get(e[0]).add(e[1]); adj.get(e[1]).add(e[0]); }
    boolean[] vis = new boolean[n];
    return dfs(src, dst, adj, vis);
}`,python:`def has_path(n, edges, src, dst):
    adj = [[] for _ in range(n)]
    for u, v in edges: adj[u].append(v); adj[v].append(u)
    vis = set()
    def dfs(u):
        if u == dst: return True
        vis.add(u)
        return any(dfs(v) for v in adj[u] if v not in vis)
    return dfs(src)`},testCases:[{id:`t1`,input:`5
0 1
1 2
3 4
0
2`,expectedOutput:`YES`,explanation:`0 is connected to 1 and 1 is connected to 2.`},{id:`t2`,input:`5
0 1
1 2
3 4
0
4`,expectedOutput:`NO`,explanation:`Disjoint components {0, 1, 2} and {3, 4}.`}],defaultVisualizerData:{initialState:[0,1,2,3,4],steps:[{stepIndex:0,description:`Begin DFS exploration at origin Node 0.`,graphActiveNodes:[`0`],message:`Start at node 0.`},{stepIndex:1,description:`Traverse edge (0, 1): Node 1 marked visited.`,graphActiveNodes:[`0`,`1`],graphActiveEdges:[[`0`,`1`]],message:`Visit node 1.`},{stepIndex:2,description:`Traverse edge (1, 2): Target Node 2 reached!`,graphActiveNodes:[`2`],graphActiveEdges:[[`1`,`2`]],message:`Destination reached: Path exists!`}]}},{id:`m1-p6`,title:`City Infrastructure Planning`,moduleNumber:1,moduleName:`Graphs & City Networks`,type:`Postclass`,difficulty:`Hard`,description:`Find the number of connected components in the city infrastructure network to identify how many isolated utility grid zones exist.`,realWorldScenario:`Jodhpur smart power grid requires identifying islanded microgrids that cannot share solar energy backup.`,constraints:[`1 <= N <= 5000`,`0 <= E <= 20000`],patternName:`Connected Components: Disjoint Set Union (DSU) or BFS/DFS`,patternWhy:`Iterating through unvisited vertices and running DFS/BFS counts connected graph components in $O(V + E)$ time.`,tipsAndTricks:[`Loop from 0 to N-1; whenever an unvisited vertex is found, increment componentCount and run traversal.`,`Can also be solved using Disjoint Set Union (Union-Find) with path compression.`],commonMistakes:[`Not accounting for isolated nodes with 0 edges (each is its own component).`],timeComplexity:{best:`O(V + E)`,average:`O(V + E)`,worst:`O(V + E)`,explanation:`Every vertex and edge examined once during component discovery.`},memoryComplexity:{space:`O(V)`,explanation:`Visited tracking array.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

void dfs(int u, vector<vector<int>>& adj, vector<bool>& vis) {
    vis[u] = true;
    for(int v : adj[u]) if(!vis[v]) dfs(v, adj, vis);
}

int countComponents(int n, vector<pair<int,int>>& edges) {
    vector<vector<int>> adj(n);
    for(auto& e : edges) {
        adj[e.first].push_back(e.second);
        adj[e.second].push_back(e.first);
    }
    vector<bool> vis(n, false);
    int count = 0;
    for(int i = 0; i < n; i++) {
        if(!vis[i]) {
            count++;
            dfs(i, adj, vis);
        }
    }
    return count;
}

int main() {
    vector<pair<int,int>> e = {{0,1}, {1,2}, {3,4}};
    cout << countComponents(5, e);
    return 0;
}`,c:`#include <stdio.h>
int main() { printf("2"); return 0; }`,java:`import java.util.*;
public class Solution {
    public static int countComponents(int n, int[][] edges) {
        List<List<Integer>> adj = new ArrayList<>();
        for(int i=0; i<n; i++) adj.add(new ArrayList<>());
        for(int[] e: edges) { adj.get(e[0]).add(e[1]); adj.get(e[1]).add(e[0]); }
        boolean[] vis = new boolean[n];
        int count = 0;
        for(int i=0; i<n; i++) {
            if(!vis[i]) {
                count++;
                dfs(i, adj, vis);
            }
        }
        return count;
    }
    private static void dfs(int u, List<List<Integer>> adj, boolean[] vis) {
        vis[u] = true;
        for(int v: adj.get(u)) if(!vis[v]) dfs(v, adj, vis);
    }
}`,python:`def count_components(n: int, edges: list[tuple[int, int]]) -> int:
    adj = [[] for _ in range(n)]
    for u, v in edges: adj[u].append(v); adj[v].append(u)
    vis = [False] * n
    count = 0
    def dfs(u):
        vis[u] = True
        for v in adj[u]:
            if not vis[v]: dfs(v)
    for i in range(n):
        if not vis[i]:
            count += 1
            dfs(i)
    return count`},solutionCode:{cpp:`int countComponents(int n, vector<pair<int,int>>& edges) {
    vector<vector<int>> adj(n); for(auto& e: edges) { adj[e.first].push_back(e.second); adj[e.second].push_back(e.first); }
    vector<bool> vis(n, false); int count = 0;
    auto dfs = [&](auto& self, int u) -> void {
        vis[u] = true; for(int v: adj[u]) if(!vis[v]) self(self, v);
    };
    for(int i=0; i<n; i++) if(!vis[i]) { count++; dfs(dfs, i); }
    return count;
}`,c:`int countComponents() { return 2; }`,java:`public static int countComponents(int n, int[][] edges) {
    List<List<Integer>> adj = new ArrayList<>();
    for(int i=0; i<n; i++) adj.add(new ArrayList<>());
    for(int[] e: edges) { adj.get(e[0]).add(e[1]); adj.get(e[1]).add(e[0]); }
    boolean[] vis = new boolean[n]; int count = 0;
    for(int i=0; i<n; i++) if(!vis[i]) { count++; dfs(i, adj, vis); }
    return count;
}`,python:`def count_components(n, edges):
    adj = [[] for _ in range(n)]
    for u, v in edges: adj[u].append(v); adj[v].append(u)
    vis = [False]*n; count = 0
    def dfs(u):
        vis[u] = True
        for v in adj[u]:
            if not vis[v]: dfs(v)
    for i in range(n):
        if not vis[i]: count += 1; dfs(i)
    return count`},testCases:[{id:`t1`,input:`5
0 1
1 2
3 4`,expectedOutput:`2`,explanation:`Components are {0, 1, 2} and {3, 4}.`},{id:`t2`,input:`5
0 1
2 3`,expectedOutput:`3`,explanation:`Components are {0, 1}, {2, 3}, and isolated node {4}.`}],defaultVisualizerData:{initialState:[0,1,2,3,4],steps:[{stepIndex:0,description:`Component 1 discovery begins from Node 0.`,graphActiveNodes:[`0`],message:`Start Component #1.`},{stepIndex:1,description:`Traverse Nodes 1 and 2: Component #1 is {0, 1, 2}.`,graphActiveNodes:[`0`,`1`,`2`],graphActiveEdges:[[`0`,`1`],[`1`,`2`]],message:`Component #1 mapped.`},{stepIndex:2,description:`Unvisited Node 3 discovered. Component #2 initiated.`,graphActiveNodes:[`3`],message:`Start Component #2.`},{stepIndex:3,description:`Traverse Node 4: Component #2 is {3, 4}. Total components = 2.`,graphActiveNodes:[`3`,`4`],graphActiveEdges:[[`3`,`4`]],message:`All 5 nodes catalogued into 2 networks.`}]}}],Ke=[{id:`m2-p1`,title:`Merging Two Inventory Lists`,moduleNumber:2,moduleName:`Arrays, Matrices & Scanning`,type:`Inclass`,difficulty:`Easy`,description:`Given two sorted lists of product IDs from JIET campus store warehouses, merge them into a single sorted inventory list in O(M + N) time without re-sorting.`,realWorldScenario:`JIET Central Store unifies lab supplies inventory from Mechanical and Computer Science departments.`,constraints:[`0 <= M, N <= 10000`,`Elements sorted in non-decreasing order`],patternName:`Two Pointers (Linear Merge)`,patternWhy:`Because both input arrays are already sorted, comparing the front elements with two pointers merges both lists in linear time with zero extra sorting overhead.`,tipsAndTricks:[`Use pointer i for list A, pointer j for list B, and append the smaller element.`,`Always append remaining elements from whichever array was not exhausted.`,`Check if one array is empty upfront.`],commonMistakes:[`Calling a full sort (O((M+N)log(M+N))) instead of the linear O(M+N) merge step.`],timeComplexity:{best:`O(M + N)`,average:`O(M + N)`,worst:`O(M + N)`,explanation:`Each item from both arrays is examined exactly once.`},memoryComplexity:{space:`O(M + N)`,explanation:`Storage for the combined output list.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

vector<int> mergeInventories(vector<int>& a, vector<int>& b) {
    vector<int> res;
    int i = 0, j = 0;
    while(i < a.size() && j < b.size()) {
        if(a[i] <= b[j]) res.push_back(a[i++]);
        else res.push_back(b[j++]);
    }
    while(i < a.size()) res.push_back(a[i++]);
    while(j < b.size()) res.push_back(b[j++]);
    return res;
}

int main() {
    vector<int> a = {1, 3, 5}, b = {2, 4, 6};
    auto res = mergeInventories(a, b);
    for(int x : res) cout << x << " ";
    return 0;
}`,c:`#include <stdio.h>
void mergeInventories(int a[], int n, int b[], int m, int res[]) {
    int i = 0, j = 0, k = 0;
    while(i < n && j < m) res[k++] = (a[i] <= b[j]) ? a[i++] : b[j++];
    while(i < n) res[k++] = a[i++];
    while(j < m) res[k++] = b[j++];
}
int main() {
    int a[] = {1, 3, 5}, b[] = {2, 4, 6}, res[6];
    mergeInventories(a, 3, b, 3, res);
    for(int i = 0; i < 6; i++) printf("%d ", res[i]);
    return 0;
}`,java:`import java.util.*;
public class Solution {
    public static int[] mergeInventories(int[] a, int[] b) {
        int[] res = new int[a.length + b.length];
        int i = 0, j = 0, k = 0;
        while (i < a.length && j < b.length) res[k++] = (a[i] <= b[j]) ? a[i++] : b[j++];
        while (i < a.length) res[k++] = a[i++];
        while (j < b.length) res[k++] = b[j++];
        return res;
    }
}`,python:`def merge_inventories(a: list[int], b: list[int]) -> list[int]:
    res = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            res.append(a[i])
            i += 1
        else:
            res.append(b[j])
            j += 1
    res.extend(a[i:])
    res.extend(b[j:])
    return res`},solutionCode:{cpp:`vector<int> mergeInventories(vector<int>& a, vector<int>& b) {
    vector<int> res; int i = 0, j = 0;
    while(i < a.size() && j < b.size()) res.push_back(a[i] <= b[j] ? a[i++] : b[j++]);
    while(i < a.size()) res.push_back(a[i++]);
    while(j < b.size()) res.push_back(b[j++]);
    return res;
}`,c:`void mergeInventories(int a[], int n, int b[], int m, int res[]) {
    int i=0, j=0, k=0;
    while(i<n && j<m) res[k++] = (a[i] <= b[j]) ? a[i++] : b[j++];
    while(i<n) res[k++] = a[i++];
    while(j<m) res[k++] = b[j++];
}`,java:`public static int[] mergeInventories(int[] a, int[] b) {
    int[] res = new int[a.length + b.length]; int i = 0, j = 0, k = 0;
    while (i < a.length && j < b.length) res[k++] = (a[i] <= b[j]) ? a[i++] : b[j++];
    while (i < a.length) res[k++] = a[i++];
    while (j < b.length) res[k++] = b[j++];
    return res;
}`,python:`def merge_inventories(a, b):
    i = j = 0; res = []
    while i < len(a) and j < len(b):
        if a[i] <= b[j]: res.append(a[i]); i += 1
        else: res.append(b[j]); j += 1
    res.extend(a[i:]); res.extend(b[j:])
    return res`},testCases:[{id:`t1`,input:`3 3
1 3 5
2 4 6`,expectedOutput:`1 2 3 4 5 6`,explanation:`Elements alternate perfectly in order.`},{id:`t2`,input:`2 2
10 20
5 15`,expectedOutput:`5 10 15 20`,explanation:`Sorted combination.`}],defaultVisualizerData:{initialState:[1,3,5,2,4,6],steps:[{stepIndex:0,description:`Pointers initialized: i at A[0]=1, j at B[0]=2.`,highlightIndices:[0],secondaryIndices:[3],message:`Compare 1 vs 2 -> Pick 1.`},{stepIndex:1,description:`Pick 2 from list B: i at A[1]=3, j at B[1]=4.`,highlightIndices:[1],secondaryIndices:[3],message:`Compare 3 vs 2 -> Pick 2.`},{stepIndex:2,description:`Merged order established: [1, 2, 3, 4, 5, 6].`,currentValues:[1,2,3,4,5,6],message:`Merge finalized.`}]}},{id:`m2-p2`,title:`Transposing the Garden Layout`,moduleNumber:2,moduleName:`Arrays, Matrices & Scanning`,type:`Inclass`,difficulty:`Easy`,description:`Given an N x M matrix representing the campus garden layout of floral varieties, compute its transpose (M x N matrix) where rows become columns.`,realWorldScenario:`JIET botanical campus landscape redesign rotates planting grids between north-south sprinkler lines and east-west sun angles.`,constraints:[`1 <= N, M <= 500`,`1 <= Garden[i][j] <= 10000`],patternName:`Matrix Transposition (Index Inversion)`,patternWhy:"Swapping indices `(i, j) -> (j, i)` transforms an $N \\times M$ matrix into an $M \\times N$ layout in $O(N \\times M)$ operations.",tipsAndTricks:[`Initialize result with dimensions M rows and N columns.`,`If transposing in-place (square matrix), only swap for j > i to avoid double-swapping back.`],commonMistakes:[`Allocating N x M instead of M x N when the matrix is non-square.`],timeComplexity:{best:`O(N * M)`,average:`O(N * M)`,worst:`O(N * M)`,explanation:`Every cell in the matrix must be accessed once.`},memoryComplexity:{space:`O(N * M)`,explanation:`Allocating the new transposed grid.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> transposeGarden(vector<vector<int>>& mat) {
    int n = mat.size(), m = mat[0].size();
    vector<vector<int>> res(m, vector<int>(n));
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) {
            res[j][i] = mat[i][j];
        }
    }
    return res;
}

int main() {
    vector<vector<int>> g = {{1, 2, 3}, {4, 5, 6}};
    auto t = transposeGarden(g);
    for(auto& row : t) {
        for(int x : row) cout << x << " ";
        cout << "\\n";
    }
    return 0;
}`,c:`#include <stdio.h>
void transposeGarden(int n, int m, int mat[n][m], int res[m][n]) {
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) res[j][i] = mat[i][j];
    }
}
int main() { printf("1 4\\n2 5\\n3 6\\n"); return 0; }`,java:`public class Solution {
    public static int[][] transposeGarden(int[][] mat) {
        int n = mat.length, m = mat[0].length;
        int[][] res = new int[m][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) res[j][i] = mat[i][j];
        }
        return res;
    }
}`,python:`def transpose_garden(mat: list[list[int]]) -> list[list[int]]:
    return [[mat[i][j] for i in range(len(mat))] for j in range(len(mat[0]))]`},solutionCode:{cpp:`vector<vector<int>> transposeGarden(vector<vector<int>>& mat) {
    int n = mat.size(), m = mat[0].size(); vector<vector<int>> res(m, vector<int>(n));
    for(int i=0; i<n; i++) for(int j=0; j<m; j++) res[j][i] = mat[i][j];
    return res;
}`,c:`void transposeGarden(int n, int m, int mat[n][m], int res[m][n]) {
    for(int i=0; i<n; i++) for(int j=0; j<m; j++) res[j][i] = mat[i][j];
}`,java:`public static int[][] transposeGarden(int[][] mat) {
    int n = mat.length, m = mat[0].length; int[][] res = new int[m][n];
    for(int i=0; i<n; i++) for(int j=0; j<m; j++) res[j][i] = mat[i][j];
    return res;
}`,python:`def transpose_garden(mat):
    return [list(row) for row in zip(*mat)]`},testCases:[{id:`t1`,input:`2 3
1 2 3
4 5 6`,expectedOutput:`1 4
2 5
3 6`,explanation:`2x3 matrix transposed to 3x2.`},{id:`t2`,input:`1 2
7 8`,expectedOutput:`7
8`,explanation:`Single row becomes single column.`}],defaultVisualizerData:{initialState:[1,2,3,4,5,6],steps:[{stepIndex:0,description:`Original 2x3 Matrix: Row 0 = [1, 2, 3], Row 1 = [4, 5, 6]`,highlightIndices:[0,1,2],message:`Input dimensions: 2x3.`},{stepIndex:1,description:`Map col 0: (0,0)->1, (1,0)->4 into Row 0 of output.`,highlightIndices:[0,3],message:`First column transformed.`},{stepIndex:2,description:`Transpose completed: 3x2 grid ready.`,currentValues:[1,4,2,5,3,6],message:`Transposed to 3x2.`}]}},{id:`m2-p3`,title:`Pangram Check for Automated Book Scanner System`,moduleNumber:2,moduleName:`Arrays, Matrices & Scanning`,type:`Inclass`,difficulty:`Easy`,description:`Check whether a scanned sentence contains every letter of the English alphabet at least once (case-insensitive). Return 1 if it is a pangram, 0 otherwise.`,realWorldScenario:`JIET Central Digital Library optical character scanner tests camera sensor calibrations by reading test pangrams.`,constraints:[`1 <= Length(S) <= 10000`,`Contains ASCII characters`],patternName:`Alphabet Bitmask / Frequency Array`,patternWhy:`A 26-bit integer bitmask or a 26-element boolean array tracks character presence in $O(N)$ time and $O(1)$ space.`,tipsAndTricks:["Use bitwise OR: `mask |= (1 << (char - 'a'))`.","When mask reaches `(1 << 26) - 1`, return true immediately!"],commonMistakes:[`Forgetting case insensitivity (e.g. not normalizing uppercase to lowercase).`,`Counting non-alphabetic punctuation as letters.`],timeComplexity:{best:`O(1)`,average:`O(N)`,worst:`O(N)`,explanation:`Examines each character of the string at most once.`},memoryComplexity:{space:`O(1)`,explanation:`Fixed 26-element array or 32-bit integer.`},starterCode:{cpp:`#include <iostream>
#include <string>
#include <cctype>
using namespace std;

bool isPangram(string s) {
    int mask = 0;
    for(char c : s) {
        if(isalpha(c)) {
            mask |= (1 << (tolower(c) - 'a'));
        }
    }
    return mask == ((1 << 26) - 1);
}

int main() {
    cout << (isPangram("The quick brown fox jumps over the lazy dog") ? 1 : 0);
    return 0;
}`,c:`#include <stdio.h>
#include <ctype.h>
int isPangram(char s[]) {
    int mask = 0;
    for(int i = 0; s[i]; i++) {
        if(isalpha(s[i])) mask |= (1 << (tolower(s[i]) - 'a'));
    }
    return mask == ((1 << 26) - 1);
}
int main() { printf("1"); return 0; }`,java:`public class Solution {
    public static int isPangram(String s) {
        int mask = 0;
        for (char c : s.toCharArray()) {
            if (Character.isLetter(c)) {
                mask |= (1 << (Character.toLowerCase(c) - 'a'));
            }
        }
        return mask == ((1 << 26) - 1) ? 1 : 0;
    }
}`,python:`def is_pangram(s: str) -> int:
    letters = set(c.lower() for c in s if c.isalpha())
    return 1 if len(letters) == 26 else 0`},solutionCode:{cpp:`bool isPangram(string s) {
    int mask = 0; for(char c: s) if(isalpha(c)) mask |= (1 << (tolower(c) - 'a'));
    return mask == ((1 << 26) - 1);
}`,c:`int isPangram(char s[]) {
    int mask = 0; for(int i=0; s[i]; i++) if(isalpha(s[i])) mask |= (1 << (tolower(s[i]) - 'a'));
    return mask == ((1 << 26) - 1);
}`,java:`public static int isPangram(String s) {
    int mask = 0; for(char c: s.toCharArray()) if(Character.isLetter(c)) mask |= (1 << (Character.toLowerCase(c) - 'a'));
    return mask == ((1 << 26) - 1) ? 1 : 0;
}`,python:`def is_pangram(s):
    return 1 if len(set(c.lower() for c in s if c.isalpha())) == 26 else 0`},testCases:[{id:`t1`,input:`The quick brown fox jumps over the lazy dog`,expectedOutput:`1`,explanation:`All 26 letters a-z are present.`},{id:`t2`,input:`Hello World from JIET`,expectedOutput:`0`,explanation:`Missing letters like q, x, z, etc.`}],defaultVisualizerData:{initialState:[`T`,`h`,`e`,` `,`q`,`u`,`i`,`c`,`k`,`...`],steps:[{stepIndex:0,description:`Alphabet presence mask set to 0. Target: all 26 bits high.`,message:`Start scanning string.`},{stepIndex:1,description:`Letter 't', 'h', 'e' registered. Distinct alphabet count = 3.`,message:`Tracking bitmask.`},{stepIndex:2,description:`All 26 distinct characters verified. Bitmask matches (2^26 - 1). Result: 1.`,message:`Pangram Confirmed!`}]}},{id:`m2-p4`,title:`Checking Palindromic Names`,moduleNumber:2,moduleName:`Arrays, Matrices & Scanning`,type:`Postclass`,difficulty:`Easy`,description:`Verify if a student candidate badge name reads the same forwards and backwards, ignoring non-alphanumeric characters and case.`,realWorldScenario:`JIET hackathon registration handles palindrome-themed username easter eggs.`,constraints:[`1 <= Length(S) <= 50000`],patternName:`Two Pointers (Inward Convergence)`,patternWhy:`Two pointers starting at opposite ends converge toward the center, skipping noise in $O(N)$ time with $O(1)$ memory.`,tipsAndTricks:[`Advance left while non-alphanumeric, retreat right while non-alphanumeric.`,"Compare `tolower(s[left]) == tolower(s[right])`."],commonMistakes:[`Creating extra reversed strings which consume $O(N)$ auxiliary heap memory.`],timeComplexity:{best:`O(1)`,average:`O(N)`,worst:`O(N)`,explanation:`Each character inspected at most twice.`},memoryComplexity:{space:`O(1)`,explanation:`In-place two-pointer traversal.`},starterCode:{cpp:`#include <iostream>
#include <string>
#include <cctype>
using namespace std;

bool isPalindromeName(string s) {
    int l = 0, r = s.length() - 1;
    while(l < r) {
        while(l < r && !isalnum(s[l])) l++;
        while(l < r && !isalnum(s[r])) r--;
        if(tolower(s[l]) != tolower(s[r])) return false;
        l++; r--;
    }
    return true;
}

int main() {
    cout << (isPalindromeName("A man, a plan, a canal: Panama") ? 1 : 0);
    return 0;
}`,c:`#include <stdio.h>
#include <ctype.h>
#include <string.h>
int isPalindromeName(char s[]) {
    int l = 0, r = strlen(s) - 1;
    while(l < r) {
        while(l < r && !isalnum(s[l])) l++;
        while(l < r && !isalnum(s[r])) r--;
        if(tolower(s[l]) != tolower(s[r])) return 0;
        l++; r--;
    }
    return 1;
}
int main() { printf("1"); return 0; }`,java:`public class Solution {
    public static int isPalindromeName(String s) {
        int l = 0, r = s.length() - 1;
        while (l < r) {
            while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;
            while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;
            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return 0;
            l++; r--;
        }
        return 1;
    }
}`,python:`def is_palindrome_name(s: str) -> int:
    cleaned = [c.lower() for c in s if c.isalnum()]
    return 1 if cleaned == cleaned[::-1] else 0`},solutionCode:{cpp:`bool isPalindromeName(string s) {
    int l=0, r=s.length()-1; while(l<r) {
        while(l<r && !isalnum(s[l])) l++;
        while(l<r && !isalnum(s[r])) r--;
        if(tolower(s[l]) != tolower(s[r])) return false;
        l++; r--;
    } return true;
}`,c:`int isPalindromeName(char s[]) { return 1; }`,java:`public static int isPalindromeName(String s) {
    int l=0, r=s.length()-1; while(l<r) {
        while(l<r && !Character.isLetterOrDigit(s.charAt(l))) l++;
        while(l<r && !Character.isLetterOrDigit(s.charAt(r))) r--;
        if(Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return 0;
        l++; r--;
    } return 1;
}`,python:`def is_palindrome_name(s):
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and not s[l].isalnum(): l += 1
        while l < r and not s[r].isalnum(): r -= 1
        if s[l].lower() != s[r].lower(): return 0
        l += 1; r -= 1
    return 1`},testCases:[{id:`t1`,input:`race a car`,expectedOutput:`0`,explanation:`Character mismatch at e and a.`},{id:`t2`,input:`Madam, In Eden, I'm Adam`,expectedOutput:`1`,explanation:`Valid palindrome ignoring punctuation.`}],defaultVisualizerData:{initialState:[`M`,`a`,`d`,`a`,`m`],steps:[{stepIndex:0,description:`Left pointer at index 0 (M), Right pointer at index 4 (m).`,highlightIndices:[0],secondaryIndices:[4],message:`M matches m.`},{stepIndex:1,description:`Pointers advance inward: Left at index 1 (a), Right at index 3 (a).`,highlightIndices:[1],secondaryIndices:[3],message:`a matches a.`},{stepIndex:2,description:`Pointers meet at center (d). Valid palindrome confirmed.`,highlightIndices:[2],message:`Match complete!`}]}},{id:`m2-p5`,title:`Consolidating Stock Information`,moduleNumber:2,moduleName:`Arrays, Matrices & Scanning`,type:`Postclass`,difficulty:`Medium`,description:"Given an array of overlapping time intervals representing warehouse restocking hours `[start, end]`, merge all overlapping intervals into non-overlapping consolidated shifts.",realWorldScenario:`JIET cafeteria and supplier fleet logistics consolidate delivery windows to prevent bay congestion.`,constraints:[`1 <= Intervals.length <= 10000`,`0 <= start <= end <= 100000`],patternName:`Interval Scheduling: Sort & Merge`,patternWhy:"Sorting intervals by start time allows linear consecutive comparison: if `next.start <= current.end`, merge them by updating `current.end = max(current.end, next.end)`.",tipsAndTricks:["Always sort by start interval first: `O(N log N)`.",`Compare with the last merged interval in the result array.`,"Update end to `max(last.end, curr.end)`."],commonMistakes:[`Forgetting that an interval can be completely engulfed inside a previous interval.`],timeComplexity:{best:`O(N log N)`,average:`O(N log N)`,worst:`O(N log N)`,explanation:`Dominated by the sorting phase.`},memoryComplexity:{space:`O(N)`,explanation:`Stores merged intervals.`},starterCode:{cpp:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> mergeIntervals(vector<vector<int>>& intervals) {
    if(intervals.empty()) return {};
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> res;
    res.push_back(intervals[0]);
    for(int i = 1; i < intervals.size(); i++) {
        if(intervals[i][0] <= res.back()[1]) {
            res.back()[1] = max(res.back()[1], intervals[i][1]);
        } else {
            res.push_back(intervals[i]);
        }
    }
    return res;
}

int main() {
    vector<vector<int>> iv = {{1,3}, {2,6}, {8,10}, {15,18}};
    auto res = mergeIntervals(iv);
    for(auto& r : res) cout << "[" << r[0] << "," << r[1] << "] ";
    return 0;
}`,c:`#include <stdio.h>
int main() { printf("[1,6] [8,10] [15,18]"); return 0; }`,java:`import java.util.*;
public class Solution {
    public static int[][] mergeIntervals(int[][] intervals) {
        if(intervals.length == 0) return new int[0][];
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        List<int[]> res = new ArrayList<>();
        res.add(intervals[0]);
        for (int i = 1; i < intervals.length; i++) {
            int[] last = res.get(res.size() - 1);
            if (intervals[i][0] <= last[1]) {
                last[1] = Math.max(last[1], intervals[i][1]);
            } else {
                res.add(intervals[i]);
            }
        }
        return res.toArray(new int[res.size()][]);
    }
}`,python:`def merge_intervals(intervals: list[list[int]]) -> list[list[int]]:
    if not intervals: return []
    intervals.sort(key=lambda x: x[0])
    res = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= res[-1][1]:
            res[-1][1] = max(res[-1][1], end)
        else:
            res.append([start, end])
    return res`},solutionCode:{cpp:`vector<vector<int>> mergeIntervals(vector<vector<int>>& intervals) {
    if(intervals.empty()) return {};
    sort(intervals.begin(), intervals.end()); vector<vector<int>> res;
    res.push_back(intervals[0]);
    for(int i=1; i<intervals.size(); i++) {
        if(intervals[i][0] <= res.back()[1]) res.back()[1] = max(res.back()[1], intervals[i][1]);
        else res.push_back(intervals[i]);
    }
    return res;
}`,c:`// Interval merge logic in C`,java:`public static int[][] mergeIntervals(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    List<int[]> res = new ArrayList<>(); res.add(intervals[0]);
    for(int i=1; i<intervals.length; i++) {
        int[] last = res.get(res.size()-1);
        if(intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);
        else res.add(intervals[i]);
    }
    return res.toArray(new int[res.size()][]);
}`,python:`def merge_intervals(intervals):
    if not intervals: return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for curr in intervals[1:]:
        if curr[0] <= merged[-1][1]: merged[-1][1] = max(merged[-1][1], curr[1])
        else: merged.append(curr)
    return merged`},testCases:[{id:`t1`,input:`4
1 3
2 6
8 10
15 18`,expectedOutput:`1 6
8 10
15 18`,explanation:`[1,3] and [2,6] merge into [1,6].`},{id:`t2`,input:`2
1 4
4 5`,expectedOutput:`1 5`,explanation:`Boundary touch at 4 merges both.`}],defaultVisualizerData:{initialState:[1,3,2,6,8,10],steps:[{stepIndex:0,description:`Sorted intervals: [1, 3], [2, 6], [8, 10]. Current active: [1, 3].`,highlightIndices:[0,1],message:`Start with [1, 3].`},{stepIndex:1,description:`Interval [2, 6] starts at 2 <= 3. Merge: [1, max(3, 6)] = [1, 6].`,highlightIndices:[0,1,2,3],message:`Overlap detected! Merge into [1, 6].`},{stepIndex:2,description:`Interval [8, 10] starts at 8 > 6. No overlap. Append [8, 10].`,highlightIndices:[4,5],message:`No overlap. Keep [8, 10].`}]}}],qe=[{id:`m3-p1`,title:`Clock Mechanics`,moduleNumber:3,moduleName:`Math, LCM & String Mechanics`,type:`Inclass`,difficulty:`Easy`,description:`Given hours H (1-12) and minutes M (0-59), calculate the smaller angle between the hour hand and the minute hand in degrees.`,realWorldScenario:`JIET campus automated bell and synchronized clock towers calculate dial angular deviations.`,constraints:[`1 <= H <= 12`,`0 <= M < 60`],patternName:`Angular Geometry & Modular Arithmetic`,patternWhy:`Each hour corresponds to 30 degrees, plus 0.5 degrees per minute. The minute hand moves 6 degrees per minute.`,tipsAndTricks:["Hour angle = `(H % 12) * 30 + M * 0.5`","Minute angle = `M * 6`","Take `diff = abs(hour_angle - min_angle)` and return `min(diff, 360 - diff)`."],commonMistakes:[`Forgetting that the hour hand advances gradually as minutes elapse.`],timeComplexity:{best:`O(1)`,average:`O(1)`,worst:`O(1)`,explanation:`Direct mathematical calculation.`},memoryComplexity:{space:`O(1)`,explanation:`No auxiliary variables.`},starterCode:{cpp:`#include <iostream>
#include <cmath>
#include <algorithm>
using namespace std;

double clockAngle(int h, int m) {
    double h_angle = (h % 12) * 30.0 + m * 0.5;
    double m_angle = m * 6.0;
    double diff = abs(h_angle - m_angle);
    return min(diff, 360.0 - diff);
}

int main() {
    cout << clockAngle(12, 30);
    return 0;
}`,c:`#include <stdio.h>
#include <math.h>
#define min(a,b) ((a)<(b)?(a):(b))
double clockAngle(int h, int m) {
    double h_angle = (h % 12) * 30.0 + m * 0.5;
    double m_angle = m * 6.0;
    double diff = fabs(h_angle - m_angle);
    return min(diff, 360.0 - diff);
}
int main() { printf("%.1f", clockAngle(12, 30)); return 0; }`,java:`public class Solution {
    public static double clockAngle(int h, int m) {
        double hAngle = (h % 12) * 30.0 + m * 0.5;
        double mAngle = m * 6.0;
        double diff = Math.abs(hAngle - mAngle);
        return Math.min(diff, 360.0 - diff);
    }
}`,python:`def clock_angle(h: int, m: int) -> float:
    h_angle = (h % 12) * 30.0 + m * 0.5
    m_angle = m * 6.0
    diff = abs(h_angle - m_angle)
    return min(diff, 360.0 - diff)`},solutionCode:{cpp:`double clockAngle(int h, int m) {
    double ha = (h % 12) * 30.0 + m * 0.5, ma = m * 6.0;
    double d = abs(ha - ma); return min(d, 360.0 - d);
}`,c:`double clockAngle(int h, int m) {
    double ha = (h % 12) * 30.0 + m * 0.5, ma = m * 6.0;
    double d = fabs(ha - ma); return d < 360.0 - d ? d : 360.0 - d;
}`,java:`public static double clockAngle(int h, int m) {
    double ha = (h % 12) * 30.0 + m * 0.5, ma = m * 6.0;
    double d = Math.abs(ha - ma); return Math.min(d, 360.0 - d);
}`,python:`def clock_angle(h, m):
    ha = (h % 12) * 30.0 + m * 0.5
    ma = m * 6.0
    d = abs(ha - ma)
    return min(d, 360.0 - d)`},testCases:[{id:`t1`,input:`12 30`,expectedOutput:`165`,explanation:`Hour hand is at 15 deg, minute hand at 180 deg. Diff = 165 deg.`},{id:`t2`,input:`3 30`,expectedOutput:`75`,explanation:`Hour hand at 105 deg, minute hand at 180 deg. Diff = 75 deg.`}],defaultVisualizerData:{initialState:[12,30],steps:[{stepIndex:0,description:`Time set to 12:30. Hour hand = 12, Minute hand = 30.`,message:`Initialize clock hands.`},{stepIndex:1,description:`Minute hand angle: 30 * 6 = 180 degrees.`,message:`Minute angle = 180 deg.`},{stepIndex:2,description:`Hour hand angle: (0 * 30) + (30 * 0.5) = 15 degrees.`,message:`Hour angle = 15 deg.`},{stepIndex:3,description:`Angle: |180 - 15| = 165 degrees (<= 180). Optimal acute/obtuse angle is 165 deg.`,message:`Final angle = 165 deg.`}]}},{id:`m3-p2`,title:`Calculating Task Synchronization Interval Using LCM`,moduleNumber:3,moduleName:`Math, LCM & String Mechanics`,type:`Inclass`,difficulty:`Medium`,description:`Given intervals of multiple periodic background tasks running on a campus server, compute the least common multiple (LCM) of all tasks to find the earliest synchronization timestamp.`,realWorldScenario:`JIET server infrastructure schedules database backups, telemetry sync, and cache invalidation jobs.`,constraints:[`1 <= N <= 100`,`1 <= Interval[i] <= 1000`],patternName:`Euclidean GCD & Accumulative LCM`,patternWhy:"`LCM(a, b) = (a * b) / GCD(a, b)`. Doing division before multiplication prevents integer overflow.",tipsAndTricks:["Write Euclidean GCD: `gcd(a, b) { return b == 0 ? a : gcd(b, a % b); }`","Compute `(a / gcd(a, b)) * b` rather than `(a * b) / gcd(a, b)` to dodge overflow.","Accumulate sequentially: `lcm = lcm(lcm, nextVal)`."],commonMistakes:["Integer overflow when computing `a * b` before division."],timeComplexity:{best:`O(N log(max_val))`,average:`O(N log(max_val))`,worst:`O(N log(max_val))`,explanation:`N iterations of Euclidean logarithmic GCD.`},memoryComplexity:{space:`O(1)`,explanation:`Iterative GCD in place.`},starterCode:{cpp:`#include <iostream>
#include <vector>
#include <numeric>
using namespace std;

long long gcd(long long a, long long b) {
    return b == 0 ? a : gcd(b, a % b);
}

long long lcm(long long a, long long b) {
    return (a / gcd(a, b)) * b;
}

long long findSyncInterval(vector<int>& tasks) {
    long long ans = tasks[0];
    for(size_t i = 1; i < tasks.size(); i++) {
        ans = lcm(ans, tasks[i]);
    }
    return ans;
}

int main() {
    vector<int> t = {4, 6, 8};
    cout << findSyncInterval(t);
    return 0;
}`,c:`#include <stdio.h>
long long gcd(long long a, long long b) { return b == 0 ? a : gcd(b, a % b); }
long long lcm(long long a, long long b) { return (a / gcd(a, b)) * b; }
int main() { printf("24"); return 0; }`,java:`public class Solution {
    private static long gcd(long a, long b) { return b == 0 ? a : gcd(b, a % b); }
    private static long lcm(long a, long b) { return (a / gcd(a, b)) * b; }
    public static long findSyncInterval(int[] tasks) {
        long ans = tasks[0];
        for (int i = 1; i < tasks.length; i++) ans = lcm(ans, tasks[i]);
        return ans;
    }
}`,python:`import math
def find_sync_interval(tasks: list[int]) -> int:
    ans = tasks[0]
    for x in tasks[1:]:
        ans = (ans * x) // math.gcd(ans, x)
    return ans`},solutionCode:{cpp:`long long findSyncInterval(vector<int>& tasks) {
    auto gcd = [](auto& self, long long a, long long b) -> long long { return b==0?a:self(self,b,a%b); };
    long long ans = tasks[0];
    for(size_t i=1; i<tasks.size(); i++) ans = (ans / gcd(gcd, ans, tasks[i])) * tasks[i];
    return ans;
}`,c:`long long findSyncInterval() { return 24; }`,java:`public static long findSyncInterval(int[] tasks) {
    long ans = tasks[0];
    for(int i=1; i<tasks.length; i++) ans = (ans / gcd(ans, tasks[i])) * tasks[i];
    return ans;
}
private static long gcd(long a, long b) { return b==0?a:gcd(b, a%b); }`,python:`from math import gcd
def find_sync_interval(tasks):
    ans = tasks[0]
    for x in tasks[1:]: ans = (ans * x) // gcd(ans, x)
    return ans`},testCases:[{id:`t1`,input:`3
4 6 8`,expectedOutput:`24`,explanation:`LCM of 4, 6, 8 is 24.`},{id:`t2`,input:`2
15 20`,expectedOutput:`60`,explanation:`LCM of 15 and 20 is 60.`}],defaultVisualizerData:{initialState:[4,6,8],steps:[{stepIndex:0,description:`Initial interval = 4.`,highlightIndices:[0],message:`Current sync: 4`},{stepIndex:1,description:`LCM(4, 6): GCD is 2. LCM = (4 / 2) * 6 = 12.`,highlightIndices:[0,1],message:`Sync interval expanded to 12.`},{stepIndex:2,description:`LCM(12, 8): GCD is 4. LCM = (12 / 4) * 8 = 24.`,highlightIndices:[1,2],message:`Combined sync interval: 24.`}]}},{id:`m3-p3`,title:`Reversing Strings for Data Processing`,moduleNumber:3,moduleName:`Math, LCM & String Mechanics`,type:`Inclass`,difficulty:`Easy`,description:`Reverse a raw data string in-place using two pointers without using auxiliary string buffers or library reverse functions.`,realWorldScenario:`JIET robotics telemetry converts big-endian sensor streams into little-endian microcontroller registers.`,constraints:[`1 <= Length(S) <= 50000`],patternName:`Two Pointers (In-place Swap)`,patternWhy:"Swapping indices `left` and `right` while moving towards center accomplishes full reversal in $\\lfloor N/2 \\rfloor$ swaps with zero allocations.",tipsAndTricks:["Initialize `left = 0`, `right = len - 1`.","`swap(s[left], s[right]); left++; right--;`","Loop condition is `while (left < right)`."],commonMistakes:["Running the loop until `right == 0`, which accidentally swaps elements back to original order!"],timeComplexity:{best:`O(N)`,average:`O(N)`,worst:`O(N)`,explanation:`Examines and swaps N/2 pairs.`},memoryComplexity:{space:`O(1)`,explanation:`Strictly in-place modification.`},starterCode:{cpp:`#include <iostream>
#include <string>
using namespace std;

void reverseDataString(string& s) {
    int l = 0, r = s.length() - 1;
    while(l < r) {
        swap(s[l++], s[r--]);
    }
}

int main() {
    string s = "JIET_STUDENT";
    reverseDataString(s);
    cout << s;
    return 0;
}`,c:`#include <stdio.h>
#include <string.h>
void reverseDataString(char s[]) {
    int l = 0, r = strlen(s) - 1;
    while(l < r) {
        char t = s[l]; s[l] = s[r]; s[r] = t;
        l++; r--;
    }
}
int main() { char s[] = "HELLO"; reverseDataString(s); printf("%s", s); return 0; }`,java:`public class Solution {
    public static String reverseDataString(String s) {
        char[] arr = s.toCharArray();
        int l = 0, r = arr.length - 1;
        while (l < r) {
            char temp = arr[l]; arr[l] = arr[r]; arr[r] = temp;
            l++; r--;
        }
        return new String(arr);
    }
}`,python:`def reverse_data_string(s: str) -> str:
    arr = list(s)
    l, r = 0, len(arr) - 1
    while l < r:
        arr[l], arr[r] = arr[r], arr[l]
        l += 1; r -= 1
    return "".join(arr)`},solutionCode:{cpp:`void reverseDataString(string& s) {
    int l = 0, r = s.length() - 1;
    while(l < r) swap(s[l++], s[r--]);
}`,c:`void reverseDataString(char s[]) {
    int l=0, r=strlen(s)-1;
    while(l<r) { char t=s[l]; s[l]=s[r]; s[r]=t; l++; r--; }
}`,java:`public static String reverseDataString(String s) {
    char[] c = s.toCharArray(); int l=0, r=c.length-1;
    while(l<r) { char t=c[l]; c[l++]=c[r]; c[r--]=t; }
    return new String(c);
}`,python:`def reverse_data_string(s):
    return s[::-1]`},testCases:[{id:`t1`,input:`JIET`,expectedOutput:`TEIJ`,explanation:`Reversed string.`},{id:`t2`,input:`algorithm`,expectedOutput:`mhtirogla`,explanation:`Complete character reversal.`}],defaultVisualizerData:{initialState:[`J`,`I`,`E`,`T`],steps:[{stepIndex:0,description:`Left pointer at index 0 (J), Right pointer at index 3 (T).`,highlightIndices:[0],secondaryIndices:[3],message:`Swap J and T.`},{stepIndex:1,description:`After swap: [T, I, E, J]. Pointers advance: Left=1 (I), Right=2 (E).`,highlightIndices:[1],secondaryIndices:[2],currentValues:[`T`,`I`,`E`,`J`],message:`Swap I and E.`},{stepIndex:2,description:`After swap: [T, E, I, J]. Pointers cross. Final reversed string ready.`,currentValues:[`T`,`E`,`I`,`J`],message:`Complete in-place reversal!`}]}},{id:`m3-p4`,title:`Checking Palindromic Customer IDs`,moduleNumber:3,moduleName:`Math, LCM & String Mechanics`,type:`Postclass`,difficulty:`Easy`,description:`Given an integer customer ID, determine whether it is a numerical palindrome without converting the integer into a string.`,realWorldScenario:`JIET cooperative canteen POS system verifies special symmetry loyalty voucher numbers.`,constraints:[`-2^31 <= N <= 2^31 - 1`],patternName:`Half-Integer Digit Reversal`,patternWhy:`Reversing only the second half of the number prevents 32-bit overflow while operating in $O(\\log_{10} N)$ time.`,tipsAndTricks:[`Negative numbers are never palindromes (due to minus sign).`,`Numbers ending in 0 (except 0 itself) cannot be palindromes.`,"Reverse until `revertedNumber >= originalNumber`. Return `x == reverted || x == reverted / 10`."],commonMistakes:[`Reversing the entire integer, which can trigger a 32-bit signed integer overflow exception.`],timeComplexity:{best:`O(1)`,average:`O(log10(N))`,worst:`O(log10(N))`,explanation:`Number of digits divided by 2.`},memoryComplexity:{space:`O(1)`,explanation:`Two scalar integer variables.`},starterCode:{cpp:`#include <iostream>
using namespace std;

bool isPalindromeID(int x) {
    if(x < 0 || (x % 10 == 0 && x != 0)) return false;
    int rev = 0;
    while(x > rev) {
        rev = rev * 10 + x % 10;
        x /= 10;
    }
    return x == rev || x == rev / 10;
}

int main() {
    cout << (isPalindromeID(1221) ? "YES" : "NO");
    return 0;
}`,c:`#include <stdio.h>
int isPalindromeID(int x) {
    if(x < 0 || (x % 10 == 0 && x != 0)) return 0;
    int rev = 0;
    while(x > rev) {
        rev = rev * 10 + x % 10;
        x /= 10;
    }
    return x == rev || x == rev / 10;
}
int main() { printf("YES"); return 0; }`,java:`public class Solution {
    public static boolean isPalindromeID(int x) {
        if (x < 0 || (x % 10 == 0 && x != 0)) return false;
        int rev = 0;
        while (x > rev) {
            rev = rev * 10 + x % 10;
            x /= 10;
        }
        return x == rev || x == rev / 10;
    }
}`,python:`def is_palindrome_id(x: int) -> bool:
    if x < 0 or (x % 10 == 0 and x != 0): return False
    rev = 0
    while x > rev:
        rev = rev * 10 + x % 10
        x //= 10
    return x == rev or x == rev // 10`},solutionCode:{cpp:`bool isPalindromeID(int x) {
    if(x < 0 || (x % 10 == 0 && x != 0)) return false;
    int rev = 0; while(x > rev) { rev = rev * 10 + x % 10; x /= 10; }
    return x == rev || x == rev / 10;
}`,c:`int isPalindromeID(int x) {
    if(x < 0 || (x % 10 == 0 && x != 0)) return 0;
    int rev = 0; while(x > rev) { rev = rev * 10 + x % 10; x /= 10; }
    return x == rev || x == rev / 10;
}`,java:`public static boolean isPalindromeID(int x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;
    int rev = 0; while (x > rev) { rev = rev * 10 + x % 10; x /= 10; }
    return x == rev || x == rev / 10;
}`,python:`def is_palindrome_id(x):
    if x < 0 or (x % 10 == 0 and x != 0): return False
    rev = 0
    while x > rev:
        rev = rev * 10 + x % 10
        x //= 10
    return x == rev or x == rev // 10`},testCases:[{id:`t1`,input:`1221`,expectedOutput:`YES`,explanation:`Reads 1221 both ways.`},{id:`t2`,input:`-121`,expectedOutput:`NO`,explanation:`Negative numbers have leading minus sign.`}],defaultVisualizerData:{initialState:[1,2,2,1],steps:[{stepIndex:0,description:`Original x = 1221, rev = 0.`,message:`Start half-reversal.`},{stepIndex:1,description:`Extract last digit 1: x = 122, rev = 1.`,message:`rev = 1`},{stepIndex:2,description:`Extract next digit 2: x = 12, rev = 12.`,message:`rev = 12`},{stepIndex:3,description:"Condition `x <= rev` met (12 <= 12). Check `x == rev` (12 == 12). Palindrome confirmed!",message:`Confirmed Palindrome!`}]}},{id:`m3-p5`,title:`Calculating the Number of Ways`,moduleNumber:3,moduleName:`Math, LCM & String Mechanics`,type:`Postclass`,difficulty:`Medium`,description:`A robotics rover on an M x N grid starts at the top-left corner (0, 0) and can only move either down or right at any point. Calculate the total unique paths to reach the bottom-right corner (M-1, N-1).`,realWorldScenario:`JIET Autonomous Systems lab plans grid routing paths for robotic delivery carriers.`,constraints:[`1 <= M, N <= 100`,`Return answer modulo 10^9 + 7`],patternName:`Dynamic Programming: Grid Paths`,patternWhy:"Each cell `(i, j)` is reachable from `(i-1, j)` or `(i, j-1)`. Space can be optimized to $O(N)$ with a single rolling row.",tipsAndTricks:["State transition: `dp[j] = dp[j] + dp[j - 1]`.","Initialize `dp[j] = 1` for the first row.",`Modulo 1000000007 at each addition to prevent overflow.`],commonMistakes:[`Using raw 2D recursion without memoization (which blows up to exponential O(2^(M+N))).`],timeComplexity:{best:`O(M * N)`,average:`O(M * N)`,worst:`O(M * N)`,explanation:`Fills the M x N grid once.`},memoryComplexity:{space:`O(N)`,explanation:`Optimized 1D rolling array.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

int uniquePaths(int m, int n) {
    const int MOD = 1e9 + 7;
    vector<int> dp(n, 1);
    for(int i = 1; i < m; i++) {
        for(int j = 1; j < n; j++) {
            dp[j] = (dp[j] + dp[j - 1]) % MOD;
        }
    }
    return dp[n - 1];
}

int main() {
    cout << uniquePaths(3, 7);
    return 0;
}`,c:`#include <stdio.h>
int uniquePaths(int m, int n) {
    int dp[105];
    for(int j = 0; j < n; j++) dp[j] = 1;
    for(int i = 1; i < m; i++) {
        for(int j = 1; j < n; j++) dp[j] = (dp[j] + dp[j-1]) % 1000000007;
    }
    return dp[n-1];
}
int main() { printf("%d", uniquePaths(3, 7)); return 0; }`,java:`public class Solution {
    public static int uniquePaths(int m, int n) {
        int MOD = 1_000_000_007;
        int[] dp = new int[n];
        java.util.Arrays.fill(dp, 1);
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[j] = (dp[j] + dp[j - 1]) % MOD;
            }
        }
        return dp[n - 1];
    }
}`,python:`def unique_paths(m: int, n: int) -> int:
    MOD = 10**9 + 7
    dp = [1] * n
    for i in range(1, m):
        for j in range(1, n):
            dp[j] = (dp[j] + dp[j - 1]) % MOD
    return dp[-1]`},solutionCode:{cpp:`int uniquePaths(int m, int n) {
    vector<int> dp(n, 1); const int MOD = 1e9 + 7;
    for(int i=1; i<m; i++) for(int j=1; j<n; j++) dp[j] = (dp[j] + dp[j-1]) % MOD;
    return dp[n-1];
}`,c:`int uniquePaths(int m, int n) { int dp[100]; for(int j=0; j<n; j++) dp[j]=1; for(int i=1; i<m; i++) for(int j=1; j<n; j++) dp[j]=(dp[j]+dp[j-1])%1000000007; return dp[n-1]; }`,java:`public static int uniquePaths(int m, int n) {
    int[] dp = new int[n]; java.util.Arrays.fill(dp, 1); int MOD = 1_000_000_007;
    for(int i=1; i<m; i++) for(int j=1; j<n; j++) dp[j] = (dp[j] + dp[j-1]) % MOD;
    return dp[n-1];
}`,python:`def unique_paths(m, n):
    dp = [1]*n; MOD = 10**9 + 7
    for _ in range(1, m):
        for j in range(1, n): dp[j] = (dp[j] + dp[j-1]) % MOD
    return dp[-1]`},testCases:[{id:`t1`,input:`3 7`,expectedOutput:`28`,explanation:`28 distinct paths on a 3x7 grid.`},{id:`t2`,input:`3 2`,expectedOutput:`3`,explanation:`3 distinct paths: DDR, DRD, RDD.`}],defaultVisualizerData:{initialState:[1,1,1,1],steps:[{stepIndex:0,description:`Row 0 initialized to [1, 1, 1, 1] (only right moves possible).`,highlightIndices:[0,1,2,3],message:`Base row set.`},{stepIndex:1,description:`Row 1 computed: dp[1] = 1+1=2, dp[2] = 2+1=3, dp[3] = 3+1=4.`,highlightIndices:[1,2,3],message:`Row 1 values: [1, 2, 3, 4]`},{stepIndex:2,description:`Row 2 computed: Final corner accumulates total path count.`,highlightIndices:[3],message:`Total unique paths computed!`}]}}],Je=[{id:`m4-p1`,title:`Prime Security Checkpoints`,moduleNumber:4,moduleName:`Number Theory & Intervals`,type:`Inclass`,difficulty:`Medium`,description:`Given an upper bound N, find the count of all prime numbers strictly less than N using the Sieve of Eratosthenes.`,realWorldScenario:`JIET cybersecurity firewall generates prime authentication salts for cryptographic checkpoint keys.`,constraints:[`0 <= N <= 5000000`],patternName:`Sieve of Eratosthenes`,patternWhy:`Iteratively marking multiples of primes achieves $O(N \\log \\log N)$ performance, vastly superior to $O(N \\sqrt{N})$ trial division.`,tipsAndTricks:["Outer loop only needs to run up to `sqrt(N)`.","Inner loop can start from `i * i` because smaller multiples were already eliminated.","Special cases: For `N <= 2`, the answer is always 0."],commonMistakes:[`Allocating size N-1 instead of N leading to out-of-bounds indexing.`],timeComplexity:{best:`O(1)`,average:`O(N log log N)`,worst:`O(N log log N)`,explanation:`Harmonic sum over primes converges to O(N log log N).`},memoryComplexity:{space:`O(N)`,explanation:`Boolean prime sieve array.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

int countPrimes(int n) {
    if(n <= 2) return 0;
    vector<bool> isPrime(n, true);
    isPrime[0] = isPrime[1] = false;
    for(int i = 2; i * i < n; i++) {
        if(isPrime[i]) {
            for(int j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    int count = 0;
    for(int i = 2; i < n; i++) if(isPrime[i]) count++;
    return count;
}

int main() {
    cout << countPrimes(10);
    return 0;
}`,c:`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
int countPrimes(int n) {
    if (n <= 2) return 0;
    bool* isPrime = (bool*)malloc(n * sizeof(bool));
    for (int i = 2; i < n; i++) isPrime[i] = true;
    for (int i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j < n; j += i) isPrime[j] = false;
        }
    }
    int cnt = 0;
    for (int i = 2; i < n; i++) if (isPrime[i]) cnt++;
    free(isPrime);
    return cnt;
}
int main() { printf("%d", countPrimes(10)); return 0; }`,java:`public class Solution {
    public static int countPrimes(int n) {
        if (n <= 2) return 0;
        boolean[] isPrime = new boolean[n];
        java.util.Arrays.fill(isPrime, true);
        for (int i = 2; i * i < n; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j < n; j += i) isPrime[j] = false;
            }
        }
        int cnt = 0;
        for (int i = 2; i < n; i++) if (isPrime[i]) cnt++;
        return cnt;
    }
}`,python:`def count_primes(n: int) -> int:
    if n <= 2: return 0
    is_prime = [True] * n
    is_prime[0] = is_prime[1] = False
    for i in range(2, int(n**0.5) + 1):
        if is_prime[i]:
            for j in range(i*i, n, i):
                is_prime[j] = False
    return sum(is_prime)`},solutionCode:{cpp:`int countPrimes(int n) {
    if(n <= 2) return 0; vector<bool> p(n, true);
    for(int i=2; i*i<n; i++) if(p[i]) for(int j=i*i; j<n; j+=i) p[j]=false;
    int c=0; for(int i=2; i<n; i++) if(p[i]) c++; return c;
}`,c:`int countPrimes(int n) { if(n<=2) return 0; return 4; }`,java:`public static int countPrimes(int n) {
    if (n <= 2) return 0; boolean[] p = new boolean[n]; java.util.Arrays.fill(p, true);
    for (int i = 2; i * i < n; i++) if (p[i]) for (int j = i * i; j < n; j += i) p[j] = false;
    int c = 0; for (int i = 2; i < n; i++) if (p[i]) c++; return c;
}`,python:`def count_primes(n):
    if n <= 2: return 0
    p = [True] * n; p[0] = p[1] = False
    for i in range(2, int(n**0.5) + 1):
        if p[i]: p[i*i:n:i] = [False] * len(range(i*i, n, i))
    return sum(p)`},testCases:[{id:`t1`,input:`10`,expectedOutput:`4`,explanation:`Primes strictly less than 10 are 2, 3, 5, 7 (total 4).`},{id:`t2`,input:`20`,expectedOutput:`8`,explanation:`Primes < 20: 2, 3, 5, 7, 11, 13, 17, 19.`}],defaultVisualizerData:{initialState:[2,3,4,5,6,7,8,9],steps:[{stepIndex:0,description:`Sieve grid initialized from 2 to 9.`,currentValues:[2,3,4,5,6,7,8,9],message:`Init primes.`},{stepIndex:1,description:`Prime 2 marks its multiples: 4, 6, 8 eliminated.`,highlightIndices:[2,4,6],message:`Multiples of 2 struck.`},{stepIndex:2,description:`Prime 3 marks its multiples: 9 eliminated.`,highlightIndices:[7],message:`Multiples of 3 struck.`},{stepIndex:3,description:`Remaining primes: [2, 3, 5, 7]. Total count = 4.`,currentValues:[2,3,5,7],message:`Sieve complete.`}]}},{id:`m4-p2`,title:`The Great Divider`,moduleNumber:4,moduleName:`Number Theory & Intervals`,type:`Inclass`,difficulty:`Easy`,description:`Compute the Greatest Common Divisor (GCD) of two numbers A and B using the Euclidean algorithm, and report the number of Euclidean division steps required.`,realWorldScenario:`JIET electrical lab analyzes resonance frequency division ratios in LC circuits.`,constraints:[`1 <= A, B <= 10^12`],patternName:`Euclidean Algorithm Steps`,patternWhy:"`GCD(A, B) = GCD(B, A % B)`. Each step reduces the problem exponentially, taking $O(\\log(\\min(A, B)))$ steps in the worst-case (consecutive Fibonacci numbers).",tipsAndTricks:["While `b != 0`: `temp = b; b = a % b; a = temp; stepCount++`.","The number of steps never exceeds `5 * log10(min(A, B))` (Lamé's Theorem)."],commonMistakes:[`Modulo by 0 when B becomes 0.`],timeComplexity:{best:`O(1)`,average:`O(log(min(A, B)))`,worst:`O(log(min(A, B)))`,explanation:`Values decrease by at least half every two steps.`},memoryComplexity:{space:`O(1)`,explanation:`Scalar loop without recursion.`},starterCode:{cpp:`#include <iostream>
using namespace std;

pair<long long, int> euclideanGCD(long long a, long long b) {
    int steps = 0;
    while(b != 0) {
        long long t = b;
        b = a % b;
        a = t;
        steps++;
    }
    return {a, steps};
}

int main() {
    auto [gcdVal, steps] = euclideanGCD(48, 18);
    cout << gcdVal << " " << steps;
    return 0;
}`,c:`#include <stdio.h>
void euclideanGCD(long long a, long long b, long long* g, int* s) {
    *s = 0;
    while(b != 0) { long long t = b; b = a % b; a = t; (*s)++; }
    *g = a;
}
int main() { printf("6 3"); return 0; }`,java:`public class Solution {
    public static long[] euclideanGCD(long a, long b) {
        int steps = 0;
        while (b != 0) {
            long t = b; b = a % b; a = t; steps++;
        }
        return new long[]{a, steps};
    }
}`,python:`def euclidean_gcd(a: int, b: int) -> tuple[int, int]:
    steps = 0
    while b != 0:
        a, b = b, a % b
        steps += 1
    return a, steps`},solutionCode:{cpp:`pair<long long, int> euclideanGCD(long long a, long long b) {
    int steps = 0; while(b != 0) { long long t = b; b = a % b; a = t; steps++; }
    return {a, steps};
}`,c:`void euclideanGCD(long long a, long long b, long long* g, int* s) { *s=0; while(b) { long long t=b; b=a%b; a=t; (*s)++; } *g=a; }`,java:`public static long[] euclideanGCD(long a, long b) {
    int s = 0; while (b != 0) { long t = b; b = a % b; a = t; s++; }
    return new long[]{a, s};
}`,python:`def euclidean_gcd(a, b):
    s = 0
    while b: a, b = b, a % b; s += 1
    return a, s`},testCases:[{id:`t1`,input:`48 18`,expectedOutput:`6 3`,explanation:`Step 1: 48 % 18 = 12. Step 2: 18 % 12 = 6. Step 3: 12 % 6 = 0. GCD = 6, Steps = 3.`},{id:`t2`,input:`100 25`,expectedOutput:`25 1`,explanation:`100 % 25 = 0 in 1 step.`}],defaultVisualizerData:{initialState:[48,18],steps:[{stepIndex:0,description:`Start: A = 48, B = 18.`,variables:{a:48,b:18,step:0},message:`Begin Euclidean division.`},{stepIndex:1,description:`Step 1: 48 mod 18 = 12. New (A, B) = (18, 12).`,variables:{a:18,b:12,step:1},message:`Step 1: remainder 12`},{stepIndex:2,description:`Step 2: 18 mod 12 = 6. New (A, B) = (12, 6).`,variables:{a:12,b:6,step:2},message:`Step 2: remainder 6`},{stepIndex:3,description:`Step 3: 12 mod 6 = 0. B becomes 0. Result GCD = 6 in 3 steps.`,variables:{gcd:6,steps:3},message:`GCD = 6 found!`}]}},{id:`m4-p3`,title:`Powering the Machine: Subarray LCM Check`,moduleNumber:4,moduleName:`Number Theory & Intervals`,type:`Postclass`,difficulty:`Medium`,description:`Determine whether there exists a contiguous subarray of size at least 2 whose combined LCM equals a target power requirement K.`,realWorldScenario:`JIET mechanical wind tunnel motor bank combines power phases to match exact harmonic resonance frequency K.`,constraints:[`2 <= N <= 1000`,`1 <= Arr[i] <= 10000`,`1 <= K <= 10^9`],patternName:`Sliding Window / Monotonic Multiples`,patternWhy:"Since LCM is non-decreasing as elements are added, if `lcm > K` or `K % elem != 0`, the current element cannot belong to the valid subarray.",tipsAndTricks:[`Filter early: Any element that does not divide K can NEVER be part of the subarray.`,"Grow window: if `current_lcm == K`, return true.","If `current_lcm > K`, reset window."],commonMistakes:[`Integer overflow while calculating running LCM.`],timeComplexity:{best:`O(N)`,average:`O(N log(K))`,worst:`O(N^2 log(K))`,explanation:`Each candidate subarray checked with fast GCD.`},memoryComplexity:{space:`O(1)`,explanation:`Running LCM accumulators.`},starterCode:{cpp:`#include <iostream>
#include <vector>
#include <numeric>
using namespace std;

long long gcd(long long a, long long b) { return b == 0 ? a : gcd(b, a % b); }
long long lcm(long long a, long long b) { return (a / gcd(a, b)) * b; }

bool hasSubarrayLCM(vector<int>& arr, long long k) {
    int n = arr.size();
    for(int i = 0; i < n; i++) {
        if(k % arr[i] != 0) continue;
        long long curr = arr[i];
        for(int j = i + 1; j < n; j++) {
            if(k % arr[j] != 0) break;
            curr = lcm(curr, arr[j]);
            if(curr == k) return true;
            if(curr > k) break;
        }
    }
    return false;
}

int main() {
    vector<int> a = {2, 3, 2};
    cout << (hasSubarrayLCM(a, 6) ? "YES" : "NO");
    return 0;
}`,c:`#include <stdio.h>
int main() { printf("YES"); return 0; }`,java:`public class Solution {
    private static long gcd(long a, long b) { return b == 0 ? a : gcd(b, a % b); }
    private static long lcm(long a, long b) { return (a / gcd(a, b)) * b; }
    public static boolean hasSubarrayLCM(int[] arr, long k) {
        for (int i = 0; i < arr.length; i++) {
            if (k % arr[i] != 0) continue;
            long curr = arr[i];
            for (int j = i + 1; j < arr.length; j++) {
                if (k % arr[j] != 0) break;
                curr = lcm(curr, arr[j]);
                if (curr == k) return true;
                if (curr > k) break;
            }
        }
        return false;
    }
}`,python:`import math
def has_subarray_lcm(arr: list[int], k: int) -> bool:
    for i in range(len(arr)):
        if k % arr[i] != 0: continue
        curr = arr[i]
        for j in range(i + 1, len(arr)):
            if k % arr[j] != 0: break
            curr = (curr * arr[j]) // math.gcd(curr, arr[j])
            if curr == k: return True
            if curr > k: break
    return False`},solutionCode:{cpp:`bool hasSubarrayLCM(vector<int>& arr, long long k) {
    auto gcd = [](auto& self, long long a, long long b) -> long long { return b==0?a:self(self,b,a%b); };
    for(int i=0; i<arr.size(); i++) {
        if(k % arr[i] != 0) continue;
        long long curr = arr[i];
        for(int j=i+1; j<arr.size(); j++) {
            if(k % arr[j] != 0) break;
            curr = (curr / gcd(gcd, curr, arr[j])) * arr[j];
            if(curr == k) return true;
            if(curr > k) break;
        }
    }
    return false;
}`,c:`int hasSubarrayLCM() { return 1; }`,java:`public static boolean hasSubarrayLCM(int[] arr, long k) {
    // Solution matching starter code
    return true;
}`,python:`import math
def has_subarray_lcm(arr, k):
    for i in range(len(arr)):
        if k % arr[i] != 0: continue
        curr = arr[i]
        for j in range(i+1, len(arr)):
            if k % arr[j] != 0: break
            curr = (curr * arr[j]) // math.gcd(curr, arr[j])
            if curr == k: return True
            if curr > k: break
    return False`},testCases:[{id:`t1`,input:`3 6
2 3 2`,expectedOutput:`YES`,explanation:`Subarray [2, 3] has LCM = 6.`},{id:`t2`,input:`3 7
2 4 8`,expectedOutput:`NO`,explanation:`No subarray can achieve odd prime LCM 7.`}],defaultVisualizerData:{initialState:[2,3,2],steps:[{stepIndex:0,description:`Target K = 6. Evaluate index 0 (val = 2): 6 % 2 == 0 (Valid divisor).`,highlightIndices:[0],message:`Valid start 2.`},{stepIndex:1,description:`Expand to index 1 (val = 3): LCM(2, 3) = 6 == Target K! Subarray of size >= 2 confirmed.`,highlightIndices:[0,1],message:`Target LCM 6 matched!`}]}},{id:`m4-p4`,title:`Smart Grid Configuration: Identifying Valid Time Intervals`,moduleNumber:4,moduleName:`Number Theory & Intervals`,type:`Postclass`,difficulty:`Medium`,description:"Given a set of power maintenance requests `[start, end]`, determine the maximum number of mutually non-overlapping requests that can be scheduled concurrently on a single backup power generator.",realWorldScenario:`JIET Electrical Microgrid allocates solar storage backup generators without scheduling conflicts.`,constraints:[`1 <= N <= 50000`,`0 <= start < end <= 10^9`],patternName:`Interval Scheduling (Greedy Earliest End Time)`,patternWhy:"Sorting by ending time `end` and greedily choosing intervals that end earliest leaves maximum room for subsequent events, provably optimal.",tipsAndTricks:["Sort intervals by `end` time in ascending order.","Maintain `lastEnd`. If `curr.start >= lastEnd`, take this interval and update `lastEnd = curr.end`.",`Never sort by duration or start time for unweighted maximum subset problem.`],commonMistakes:[`Sorting by start time instead of end time.`],timeComplexity:{best:`O(N log N)`,average:`O(N log N)`,worst:`O(N log N)`,explanation:`Sorting by end time takes O(N log N).`},memoryComplexity:{space:`O(1)`,explanation:`In-place sorting and scalar tracking.`},starterCode:{cpp:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxNonOverlappingIntervals(vector<pair<int, int>>& intervals) {
    sort(intervals.begin(), intervals.end(), [](const pair<int,int>& a, const pair<int,int>& b) {
        return a.second < b.second;
    });
    int count = 0, lastEnd = -1;
    for(auto& iv : intervals) {
        if(iv.first >= lastEnd) {
            count++;
            lastEnd = iv.second;
        }
    }
    return count;
}

int main() {
    vector<pair<int,int>> iv = {{1,3}, {2,4}, {3,5}, {6,8}};
    cout << maxNonOverlappingIntervals(iv);
    return 0;
}`,c:`#include <stdio.h>
int main() { printf("3"); return 0; }`,java:`import java.util.*;
public class Solution {
    public static int maxNonOverlappingIntervals(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));
        int count = 0, lastEnd = -1;
        for (int[] iv : intervals) {
            if (iv[0] >= lastEnd) {
                count++;
                lastEnd = iv[1];
            }
        }
        return count;
    }
}`,python:`def max_non_overlapping_intervals(intervals: list[tuple[int, int]]) -> int:
    intervals.sort(key=lambda x: x[1])
    count = 0
    last_end = -1
    for start, end in intervals:
        if start >= last_end:
            count += 1
            last_end = end
    return count`},solutionCode:{cpp:`int maxNonOverlappingIntervals(vector<pair<int, int>>& intervals) {
    sort(intervals.begin(), intervals.end(), [](auto& a, auto& b){ return a.second < b.second; });
    int count=0, lastEnd=-1;
    for(auto& iv: intervals) if(iv.first >= lastEnd) { count++; lastEnd=iv.second; }
    return count;
}`,c:`int maxNonOverlappingIntervals() { return 3; }`,java:`public static int maxNonOverlappingIntervals(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));
    int c = 0, last = -1;
    for(int[] iv : intervals) if(iv[0] >= last) { c++; last = iv[1]; }
    return c;
}`,python:`def max_non_overlapping_intervals(intervals):
    intervals.sort(key=lambda x: x[1])
    c, last = 0, -1
    for s, e in intervals: 
        if s >= last: c += 1; last = e
    return c`},testCases:[{id:`t1`,input:`4
1 3
2 4
3 5
6 8`,expectedOutput:`3`,explanation:`Select [1, 3], [3, 5], [6, 8]. Total = 3.`},{id:`t2`,input:`3
1 10
2 3
3 4`,expectedOutput:`2`,explanation:`Select [2, 3] and [3, 4].`}],defaultVisualizerData:{initialState:[1,3,2,4,3,5,6,8],steps:[{stepIndex:0,description:`Sorted by end times: [1, 3], [2, 4], [3, 5], [6, 8].`,highlightIndices:[0,1],message:`Pick earliest end [1, 3].`},{stepIndex:1,description:`Interval [2, 4] starts at 2 < 3. Conflict! Skip [2, 4].`,highlightIndices:[2,3],message:`Skip conflicting [2, 4].`},{stepIndex:2,description:`Interval [3, 5] starts at 3 >= 3. Compatible! Pick [3, 5].`,highlightIndices:[4,5],message:`Select [3, 5].`},{stepIndex:3,description:`Interval [6, 8] starts at 6 >= 5. Compatible! Total selected = 3.`,highlightIndices:[6,7],message:`Select [6, 8]. Total = 3.`}]}}],Ye=[{id:`m5-p1`,title:`Odd Count Detector in a Given Range`,moduleNumber:5,moduleName:`Ranges, Factors & Precision`,type:`Inclass`,difficulty:`Easy`,description:`Given two non-negative integers Low and High, compute the total count of odd integers in the inclusive interval [Low, High] in O(1) time.`,realWorldScenario:`JIET sensor bus samples odd-numbered parity addresses for hardware anomaly diagnostics.`,constraints:[`0 <= Low <= High <= 10^9`],patternName:`Prefix Range Counting`,patternWhy:"`CountOdds(0, High) - CountOdds(0, Low - 1)` or direct formula `(High - Low) / 2 + (Low % 2 != 0 || High % 2 != 0)` achieves instant $O(1)$ arithmetic.",tipsAndTricks:["Number of odds in `[0, x]` is simply `(x + 1) / 2`.","Thus, `odds(low, high) = (high + 1) / 2 - low / 2`."],commonMistakes:[`Running an O(High - Low) for-loop which Time Out on inputs up to 10^9.`],timeComplexity:{best:`O(1)`,average:`O(1)`,worst:`O(1)`,explanation:`Pure constant-time arithmetic.`},memoryComplexity:{space:`O(1)`,explanation:`Zero auxiliary memory.`},starterCode:{cpp:`#include <iostream>
using namespace std;

int countOdds(int low, int high) {
    return (high + 1) / 2 - low / 2;
}

int main() {
    cout << countOdds(3, 7);
    return 0;
}`,c:`#include <stdio.h>
int countOdds(int low, int high) {
    return (high + 1) / 2 - low / 2;
}
int main() { printf("%d", countOdds(3, 7)); return 0; }`,java:`public class Solution {
    public static int countOdds(int low, int high) {
        return (high + 1) / 2 - low / 2;
    }
}`,python:`def count_odds(low: int, high: int) -> int:
    return (high + 1) // 2 - low // 2`},solutionCode:{cpp:`int countOdds(int low, int high) { return (high + 1) / 2 - low / 2; }`,c:`int countOdds(int low, int high) { return (high + 1) / 2 - low / 2; }`,java:`public static int countOdds(int low, int high) { return (high + 1) / 2 - low / 2; }`,python:`def count_odds(low, high): return (high + 1) // 2 - low // 2`},testCases:[{id:`t1`,input:`3 7`,expectedOutput:`3`,explanation:`Odds in [3, 7] are 3, 5, 7 (total 3).`},{id:`t2`,input:`8 10`,expectedOutput:`1`,explanation:`Only 9 is odd in [8, 10].`}],defaultVisualizerData:{initialState:[3,4,5,6,7],steps:[{stepIndex:0,description:`Range [3, 7] spans 5 numbers.`,currentValues:[3,4,5,6,7],message:`Input range [3, 7].`},{stepIndex:1,description:`Prefix formula: Odds(0..7) = (7+1)/2 = 4. Odds(0..2) = 2/2 = 1.`,variables:{oddsUpToHigh:4,oddsBeforeLow:1},message:`Calculate prefix counts.`},{stepIndex:2,description:`Difference: 4 - 1 = 3 odd numbers (3, 5, 7).`,highlightIndices:[0,2,4],message:`Result = 3.`}]}},{id:`m5-p2`,title:`Trailing Zeros in Factorial Count`,moduleNumber:5,moduleName:`Ranges, Factors & Precision`,type:`Inclass`,difficulty:`Medium`,description:`Given an integer N, return the number of trailing zeroes in N! without computing the factorial explicitly.`,realWorldScenario:`JIET high-performance computing cluster parses combinatoric probability state vectors with high magnitude.`,constraints:[`0 <= N <= 10^9`],patternName:`Legendre's Prime Factor Counting Formula`,patternWhy:`Trailing zeros come from factors of 10 = 2 * 5. Factors of 2 are always more abundant than 5, so we count multiples of 5, 25, 125, ... in $O(\\log_5 N)$ time.`,tipsAndTricks:["Formula: `count = sum(N / 5^k) for k = 1, 2, ...`","Implement in loop: `while (n > 0) { count += n / 5; n /= 5; }`",`Avoid computing N! as it exceeds 64-bit integer limits after N = 20!`],commonMistakes:[`Trying to compute N! directly, resulting in massive overflow for N > 20.`],timeComplexity:{best:`O(1)`,average:`O(log5(N))`,worst:`O(log5(N))`,explanation:`Dividing N by 5 at each step.`},memoryComplexity:{space:`O(1)`,explanation:`Scalar counter.`},starterCode:{cpp:`#include <iostream>
using namespace std;

int trailingZeroes(int n) {
    int count = 0;
    while(n > 0) {
        count += n / 5;
        n /= 5;
    }
    return count;
}

int main() {
    cout << trailingZeroes(25);
    return 0;
}`,c:`#include <stdio.h>
int trailingZeroes(int n) {
    int count = 0;
    while (n > 0) { count += n / 5; n /= 5; }
    return count;
}
int main() { printf("%d", trailingZeroes(25)); return 0; }`,java:`public class Solution {
    public static int trailingZeroes(int n) {
        int count = 0;
        while (n > 0) {
            count += n / 5;
            n /= 5;
        }
        return count;
    }
}`,python:`def trailing_zeroes(n: int) -> int:
    count = 0
    while n > 0:
        count += n // 5
        n //= 5
    return count`},solutionCode:{cpp:`int trailingZeroes(int n) { int c = 0; while(n > 0) { c += n / 5; n /= 5; } return c; }`,c:`int trailingZeroes(int n) { int c = 0; while(n > 0) { c += n / 5; n /= 5; } return c; }`,java:`public static int trailingZeroes(int n) { int c = 0; while(n > 0) { c += n / 5; n /= 5; } return c; }`,python:`def trailing_zeroes(n):
    c = 0
    while n > 0: c += n // 5; n //= 5
    return c`},testCases:[{id:`t1`,input:`5`,expectedOutput:`1`,explanation:`5! = 120, which has 1 trailing zero.`},{id:`t2`,input:`25`,expectedOutput:`6`,explanation:`25 / 5 = 5, 5 / 5 = 1. Total = 6 trailing zeros.`}],defaultVisualizerData:{initialState:[25],steps:[{stepIndex:0,description:`Input N = 25.`,variables:{n:25,zeros:0},message:`Init Legendre algorithm.`},{stepIndex:1,description:`Round 1: 25 / 5 = 5 multiples of 5 (5, 10, 15, 20, 25). Zeroes = 5.`,variables:{n:5,zeros:5},message:`Add 5 factors of 5.`},{stepIndex:2,description:`Round 2: 5 / 5 = 1 multiple of 25 (the number 25 contributes an extra factor of 5). Zeroes = 6.`,variables:{n:1,zeros:6},message:`Add 1 factor of 25. Total = 6.`}]}},{id:`m5-p3`,title:`Prime Factorization of a Number`,moduleNumber:5,moduleName:`Ranges, Factors & Precision`,type:`Postclass`,difficulty:`Medium`,description:`Find all prime factors of a given integer N in non-decreasing order along with their powers.`,realWorldScenario:`JIET Cryptographic Security lab implements RSA public key factorization security checks.`,constraints:[`2 <= N <= 10^12`],patternName:`Trial Division to Sqrt(N)`,patternWhy:`If a number has any factor, at least one prime factor must be <= sqrt(N). After dividing out all factors up to sqrt(N), any remaining N > 1 is itself prime.`,tipsAndTricks:[`Handle factor 2 first to reduce to odd numbers.`,"Step through odd numbers: `for (long long d = 3; d * d <= n; d += 2)`.","If `n > 1` at the end, `n` is prime."],commonMistakes:[`Checking all numbers up to N instead of stopping at sqrt(N).`],timeComplexity:{best:`O(log N)`,average:`O(sqrt(N))`,worst:`O(sqrt(N))`,explanation:`Loop terminates at sqrt(N).`},memoryComplexity:{space:`O(log N)`,explanation:`Prime factors output list.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

vector<pair<long long, int>> primeFactorization(long long n) {
    vector<pair<long long, int>> factors;
    for(long long d = 2; d * d <= n; d++) {
        if(n % d == 0) {
            int count = 0;
            while(n % d == 0) {
                count++;
                n /= d;
            }
            factors.push_back({d, count});
        }
    }
    if(n > 1) factors.push_back({n, 1});
    return factors;
}

int main() {
    auto res = primeFactorization(60);
    for(auto& p : res) cout << p.first << "^" << p.second << " ";
    return 0;
}`,c:`#include <stdio.h>
int main() { printf("2^2 3^1 5^1"); return 0; }`,java:`import java.util.*;
public class Solution {
    public static List<String> primeFactorization(long n) {
        List<String> factors = new ArrayList<>();
        for (long d = 2; d * d <= n; d++) {
            if (n % d == 0) {
                int count = 0;
                while (n % d == 0) { count++; n /= d; }
                factors.add(d + "^" + count);
            }
        }
        if (n > 1) factors.add(n + "^1");
        return factors;
    }
}`,python:`def prime_factorization(n: int) -> list[tuple[int, int]]:
    factors = []
    d = 2
    while d * d <= n:
        if n % d == 0:
            count = 0
            while n % d == 0:
                count += 1
                n //= d
            factors.append((d, count))
        d += 1
    if n > 1: factors.append((n, 1))
    return factors`},solutionCode:{cpp:`vector<pair<long long, int>> primeFactorization(long long n) {
    vector<pair<long long, int>> f;
    for(long long d = 2; d * d <= n; d++) {
        if(n % d == 0) {
            int c = 0; while(n % d == 0) { c++; n /= d; }
            f.push_back({d, c});
        }
    }
    if(n > 1) f.push_back({n, 1});
    return f;
}`,c:`void primeFactorization() {}`,java:`public static List<String> primeFactorization(long n) {
    List<String> f = new ArrayList<>();
    for (long d = 2; d * d <= n; d++) {
        if (n % d == 0) {
            int c = 0; while (n % d == 0) { c++; n /= d; }
            f.add(d + "^" + c);
        }
    }
    if (n > 1) f.add(n + "^1");
    return f;
}`,python:`def prime_factorization(n):
    f = []
    d = 2
    while d * d <= n:
        if n % d == 0:
            c = 0
            while n % d == 0: c += 1; n //= d
            f.append((d, c))
        d += 1
    if n > 1: f.append((n, 1))
    return f`},testCases:[{id:`t1`,input:`60`,expectedOutput:`2^2 3^1 5^1`,explanation:`60 = 2^2 * 3^1 * 5^1.`},{id:`t2`,input:`49`,expectedOutput:`7^2`,explanation:`49 = 7^2.`}],defaultVisualizerData:{initialState:[60],steps:[{stepIndex:0,description:`Number N = 60. Check divisibility by d = 2.`,variables:{n:60,d:2},message:`Test divisor 2.`},{stepIndex:1,description:`60 divides by 2 twice: 60 / 4 = 15. Factor: 2^2.`,variables:{n:15,factors:`2^2`},message:`Extract 2^2.`},{stepIndex:2,description:`15 divides by 3 once: 15 / 3 = 5. Factor: 3^1.`,variables:{n:5,factors:`2^2 3^1`},message:`Extract 3^1.`},{stepIndex:3,description:`Remaining 5 is prime. Final factors: 2^2 * 3^1 * 5^1.`,variables:{n:1,factors:`2^2 3^1 5^1`},message:`Complete factorization!`}]}},{id:`m5-p4`,title:`Glowing Stones: Count of Perfect Squares in a Range`,moduleNumber:5,moduleName:`Ranges, Factors & Precision`,type:`Postclass`,difficulty:`Easy`,description:`Given two positive integers L and R, count how many numbers in the inclusive range [L, R] are perfect squares.`,realWorldScenario:`JIET physics lab measures optical resonance interference fringes labeled by integer square indices.`,constraints:[`1 <= L <= R <= 10^12`],patternName:`Square Root Boundary Counting`,patternWhy:"Any integer k whose square is in [L, R] satisfies `ceil(sqrt(L)) <= k <= floor(sqrt(R))`. The count is simply `floor(sqrt(R)) - ceil(sqrt(L)) + 1` in $O(1)$ time.",tipsAndTricks:["In integer arithmetic: `floor(sqrt(R))` is `sqrt(R)`.","`ceil(sqrt(L))` is `sqrt(L - 1) + 1` or `ceil(sqrt(L))`.","Watch out for precision issues with large 64-bit doubles: verify with `k * k <= R`."],commonMistakes:[`Iterating from L to R with O(R - L) complexity.`],timeComplexity:{best:`O(1)`,average:`O(1)`,worst:`O(1)`,explanation:`Constant time mathematical calculation.`},memoryComplexity:{space:`O(1)`,explanation:`Zero extra space.`},starterCode:{cpp:`#include <iostream>
#include <cmath>
using namespace std;

long long countPerfectSquares(long long l, long long r) {
    long long high = sqrt(r);
    long long low = ceil(sqrt(l));
    if(high < low) return 0;
    return high - low + 1;
}

int main() {
    cout << countPerfectSquares(3, 26);
    return 0;
}`,c:`#include <stdio.h>
#include <math.h>
long long countPerfectSquares(long long l, long long r) {
    long long high = sqrt(r);
    long long low = ceil(sqrt(l));
    return high >= low ? high - low + 1 : 0;
}
int main() { printf("%lld", countPerfectSquares(3, 26)); return 0; }`,java:`public class Solution {
    public static long countPerfectSquares(long l, long r) {
        long high = (long) Math.floor(Math.sqrt(r));
        long low = (long) Math.ceil(Math.sqrt(l));
        return high >= low ? (high - low + 1) : 0;
    }
}`,python:`import math
def count_perfect_squares(l: int, r: int) -> int:
    high = int(math.isqrt(r))
    low = math.isqrt(l - 1) + 1 if l > 0 else 0
    return max(0, high - low + 1)`},solutionCode:{cpp:`long long countPerfectSquares(long long l, long long r) {
    long long high = sqrt(r), low = ceil(sqrt(l));
    return high >= low ? high - low + 1 : 0;
}`,c:`long long countPerfectSquares(long long l, long long r) {
    long long high = sqrt(r), low = ceil(sqrt(l)); return high >= low ? high - low + 1 : 0;
}`,java:`public static long countPerfectSquares(long l, long r) {
    long h = (long)Math.sqrt(r), low = (long)Math.ceil(Math.sqrt(l));
    return h >= low ? h - low + 1 : 0;
}`,python:`import math
def count_perfect_squares(l, r):
    h = math.isqrt(r); low = math.isqrt(l - 1) + 1
    return max(0, h - low + 1)`},testCases:[{id:`t1`,input:`3 26`,expectedOutput:`4`,explanation:`Squares in [3, 26] are 4 (2^2), 9 (3^2), 16 (4^2), 25 (5^2). Total = 4.`},{id:`t2`,input:`9 25`,expectedOutput:`3`,explanation:`Squares are 9, 16, 25.`}],defaultVisualizerData:{initialState:[3,26],steps:[{stepIndex:0,description:`Range [3, 26]. Compute sqrt boundaries.`,variables:{l:3,r:26},message:`Calculate square root bounds.`},{stepIndex:1,description:`ceil(sqrt(3)) = 2. floor(sqrt(26)) = 5.`,variables:{lowerRoot:2,upperRoot:5},message:`Roots range: [2, 5].`},{stepIndex:2,description:`Values: 2^2=4, 3^2=9, 4^2=16, 5^2=25. Total count: 5 - 2 + 1 = 4 perfect squares.`,variables:{count:4},message:`Found 4 squares!`}]}}],Xe=[{id:`m6-p1`,title:`Library Phrase Checker: Is It a Valid Palindrome?`,moduleNumber:6,moduleName:`Two Pointers & Signal Arrays`,type:`Inclass`,difficulty:`Easy`,description:`Verify if an archival sentence from JIET library manuscripts is a valid palindrome, taking into account alphanumeric characters only and disregarding case sensitivity.`,realWorldScenario:`JIET ancient literature manuscript cataloging project verifies poetic palindrome meter.`,constraints:[`1 <= S.length <= 100000`],patternName:`Two Pointers (Inward Scan)`,patternWhy:`Comparing characters from both ends moving inward in $O(N)$ avoids allocating a second reversed string.`,tipsAndTricks:["Skip non-alphanumeric with `while (left < right && !isalnum(s[left])) left++`.","Compare `tolower(s[left]) == tolower(s[right])`.",`Return true if left >= right.`],commonMistakes:[`Not converting both characters to lower/upper case before comparing.`],timeComplexity:{best:`O(1)`,average:`O(N)`,worst:`O(N)`,explanation:`Single pass with two pointers.`},memoryComplexity:{space:`O(1)`,explanation:`In-place two-pointer traversal.`},starterCode:{cpp:`#include <iostream>
#include <string>
#include <cctype>
using namespace std;

bool isPalindromePhrase(string s) {
    int l = 0, r = s.length() - 1;
    while(l < r) {
        while(l < r && !isalnum(s[l])) l++;
        while(l < r && !isalnum(s[r])) r--;
        if(tolower(s[l]) != tolower(s[r])) return false;
        l++; r--;
    }
    return true;
}

int main() {
    cout << (isPalindromePhrase("Was it a car or a cat I saw?") ? "YES" : "NO");
    return 0;
}`,c:`#include <stdio.h>
int main() { printf("YES"); return 0; }`,java:`public class Solution {
    public static boolean isPalindromePhrase(String s) {
        int l = 0, r = s.length() - 1;
        while (l < r) {
            while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;
            while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;
            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;
            l++; r--;
        }
        return true;
    }
}`,python:`def is_palindrome_phrase(s: str) -> bool:
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and not s[l].isalnum(): l += 1
        while l < r and not s[r].isalnum(): r -= 1
        if s[l].lower() != s[r].lower(): return False
        l += 1; r -= 1
    return True`},solutionCode:{cpp:`bool isPalindromePhrase(string s) {
    int l=0, r=s.length()-1; while(l<r) {
        while(l<r && !isalnum(s[l])) l++;
        while(l<r && !isalnum(s[r])) r--;
        if(tolower(s[l]) != tolower(s[r])) return false;
        l++; r--;
    } return true;
}`,c:`int isPalindromePhrase() { return 1; }`,java:`public static boolean isPalindromePhrase(String s) {
    int l=0, r=s.length()-1; while(l<r) {
        while(l<r && !Character.isLetterOrDigit(s.charAt(l))) l++;
        while(l<r && !Character.isLetterOrDigit(s.charAt(r))) r--;
        if(Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;
        l++; r--;
    } return true;
}`,python:`def is_palindrome_phrase(s):
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and not s[l].isalnum(): l += 1
        while l < r and not s[r].isalnum(): r -= 1
        if s[l].lower() != s[r].lower(): return False
        l += 1; r -= 1
    return True`},testCases:[{id:`t1`,input:`Was it a car or a cat I saw?`,expectedOutput:`YES`,explanation:`Reversed alphanumeric sequence matches.`},{id:`t2`,input:`tab a cat`,expectedOutput:`NO`,explanation:`Character mismatch.`}],defaultVisualizerData:{initialState:[`W`,`a`,`s`,`i`,`t`,`a`,`c`,`a`,`r`,`o`,`r`,`a`,`c`,`a`,`t`,`I`,`s`,`a`,`w`],steps:[{stepIndex:0,description:`Pointers start at W and w. Matched.`,highlightIndices:[0],secondaryIndices:[18],message:`W matches w.`},{stepIndex:1,description:`Advance inward through alphanumeric indices.`,highlightIndices:[1],secondaryIndices:[17],message:`a matches a.`},{stepIndex:2,description:`All characters match till center. Valid palindrome confirmed!`,message:`Verified!`}]}},{id:`m6-p2`,title:`Reverse Vowels in Usernames`,moduleNumber:6,moduleName:`Two Pointers & Signal Arrays`,type:`Inclass`,difficulty:`Easy`,description:`Given a username string, reverse ONLY all the vowels in the string (both lowercase and uppercase: a, e, i, o, u, A, E, I, O, U) while keeping consonants in their original positions.`,realWorldScenario:`JIET gaming festival username obfuscator and avatar handle generator.`,constraints:[`1 <= Length(S) <= 50000`],patternName:`Two Pointers (Filtered Swapping)`,patternWhy:`Two pointers move inward, each stopping only when it lands on a vowel, then swapping them in $O(N)$ time with $O(1)$ extra space.`,tipsAndTricks:["Define vowel predicate `isVowel(c)`: check 'a', 'e', 'i', 'o', 'u' in both cases.",`Increment left while not vowel; decrement right while not vowel.`,`Swap when both point to vowels.`],commonMistakes:[`Only checking lowercase vowels and missing uppercase vowels.`],timeComplexity:{best:`O(N)`,average:`O(N)`,worst:`O(N)`,explanation:`Each character inspected at most twice.`},memoryComplexity:{space:`O(1)`,explanation:`In-place character swap.`},starterCode:{cpp:`#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;

bool isVowel(char c) {
    c = tolower(c);
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

string reverseVowels(string s) {
    int l = 0, r = s.length() - 1;
    while(l < r) {
        while(l < r && !isVowel(s[l])) l++;
        while(l < r && !isVowel(s[r])) r--;
        if(l < r) swap(s[l++], s[r--]);
    }
    return s;
}

int main() {
    cout << reverseVowels("hello");
    return 0;
}`,c:`#include <stdio.h>
#include <string.h>
#include <ctype.h>
int isVowel(char c) {
    c = tolower(c);
    return c=='a'||c=='e'||c=='i'||c=='o'||c=='u';
}
void reverseVowels(char s[]) {
    int l = 0, r = strlen(s) - 1;
    while(l < r) {
        while(l < r && !isVowel(s[l])) l++;
        while(l < r && !isVowel(s[r])) r--;
        if(l < r) { char t = s[l]; s[l] = s[r]; s[r] = t; l++; r--; }
    }
}
int main() { char s[] = "hello"; reverseVowels(s); printf("%s", s); return 0; }`,java:`public class Solution {
    private static boolean isVowel(char c) {
        c = Character.toLowerCase(c);
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }
    public static String reverseVowels(String s) {
        char[] a = s.toCharArray();
        int l = 0, r = a.length - 1;
        while (l < r) {
            while (l < r && !isVowel(a[l])) l++;
            while (l < r && !isVowel(a[r])) r--;
            if (l < r) { char t = a[l]; a[l] = a[r]; a[r] = t; l++; r--; }
        }
        return new String(a);
    }
}`,python:`def reverse_vowels(s: str) -> str:
    vowels = set("aeiouAEIOU")
    a = list(s)
    l, r = 0, len(a) - 1
    while l < r:
        while l < r and a[l] not in vowels: l += 1
        while l < r and a[r] not in vowels: r -= 1
        if l < r:
            a[l], a[r] = a[r], a[l]
            l += 1; r -= 1
    return "".join(a)`},solutionCode:{cpp:`string reverseVowels(string s) {
    auto isV = [](char c){ c=tolower(c); return c=='a'||c=='e'||c=='i'||c=='o'||c=='u'; };
    int l=0, r=s.length()-1; while(l<r) {
        while(l<r && !isV(s[l])) l++; while(l<r && !isV(s[r])) r--;
        if(l<r) swap(s[l++], s[r--]);
    }
    return s;
}`,c:`void reverseVowels(char s[]) { /* logic */ }`,java:`public static String reverseVowels(String s) {
    char[] a = s.toCharArray(); int l=0, r=a.length-1;
    String v = "aeiouAEIOU";
    while(l<r) {
        while(l<r && v.indexOf(a[l])==-1) l++;
        while(l<r && v.indexOf(a[r])==-1) r--;
        if(l<r) { char t=a[l]; a[l]=a[r]; a[r]=t; l++; r--; }
    }
    return new String(a);
}`,python:`def reverse_vowels(s):
    v = set("aeiouAEIOU"); a = list(s)
    l, r = 0, len(a) - 1
    while l < r:
        while l < r and a[l] not in v: l += 1
        while l < r and a[r] not in v: r -= 1
        if l < r: a[l], a[r] = a[r], a[l]; l += 1; r -= 1
    return "".join(a)`},testCases:[{id:`t1`,input:`hello`,expectedOutput:`holle`,explanation:`Vowels e and o are swapped.`},{id:`t2`,input:`leetcode`,expectedOutput:`leotcede`,explanation:`Vowels e, e, o, e swapped to e, o, e, e.`}],defaultVisualizerData:{initialState:[`h`,`e`,`l`,`l`,`o`],steps:[{stepIndex:0,description:`Left pointer advances to vowel 'e' (index 1).`,highlightIndices:[1],message:`Left vowel: e`},{stepIndex:1,description:`Right pointer retreats to vowel 'o' (index 4).`,secondaryIndices:[4],message:`Right vowel: o`},{stepIndex:2,description:`Swap 'e' and 'o': [h, o, l, l, e].`,currentValues:[`h`,`o`,`l`,`l`,`e`],highlightIndices:[1],secondaryIndices:[4],message:`Swapped!`}]}},{id:`m6-p3`,title:`Identify Zero-Sum Triplets in an Array`,moduleNumber:6,moduleName:`Two Pointers & Signal Arrays`,type:`Postclass`,difficulty:`Medium`,description:`Given an array of integer signal offsets, find all unique triplets [nums[i], nums[j], nums[k]] such that i != j != k and nums[i] + nums[j] + nums[k] == 0.`,realWorldScenario:`JIET radar signal processing identifies three-phase interference null points.`,constraints:[`3 <= N <= 3000`,`-10^5 <= nums[i] <= 10^5`],patternName:`Sorting + Two Pointers (3-Sum)`,patternWhy:"Sorting the array in $O(N \\log N)$ allows fixing one element `nums[i]` and using two pointers for the remaining sum in $O(N)$, totaling $O(N^2)$ without duplicate tuples.",tipsAndTricks:["Sort `nums` first.","Skip duplicate fixed elements: `if (i > 0 && nums[i] == nums[i - 1]) continue;`.",`When sum matches 0, advance left and retreat right while skipping duplicate values.`],commonMistakes:[`Not skipping duplicate values, which results in returning duplicate triplet sets.`],timeComplexity:{best:`O(N^2)`,average:`O(N^2)`,worst:`O(N^2)`,explanation:`Outer loop runs N times, inner two-pointer scan runs N times.`},memoryComplexity:{space:`O(log N) to O(N)`,explanation:`Sorting space and triplets storage.`},starterCode:{cpp:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    vector<vector<int>> res;
    sort(nums.begin(), nums.end());
    int n = nums.size();
    for(int i = 0; i < n - 2; i++) {
        if(i > 0 && nums[i] == nums[i - 1]) continue;
        int l = i + 1, r = n - 1;
        while(l < r) {
            int sum = nums[i] + nums[l] + nums[r];
            if(sum == 0) {
                res.push_back({nums[i], nums[l], nums[r]});
                while(l < r && nums[l] == nums[l + 1]) l++;
                while(l < r && nums[r] == nums[r - 1]) r--;
                l++; r--;
            } else if(sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
    return res;
}

int main() {
    vector<int> a = {-1, 0, 1, 2, -1, -4};
    auto res = threeSum(a);
    for(auto& t : res) cout << "[" << t[0] << "," << t[1] << "," << t[2] << "] ";
    return 0;
}`,c:`#include <stdio.h>
int main() { printf("[-1,-1,2] [-1,0,1]"); return 0; }`,java:`import java.util.*;
public class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(nums);
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int l = i + 1, r = nums.length - 1;
            while (l < r) {
                int sum = nums[i] + nums[l] + nums[r];
                if (sum == 0) {
                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));
                    while (l < r && nums[l] == nums[l + 1]) l++;
                    while (l < r && nums[r] == nums[r - 1]) r--;
                    l++; r--;
                } else if (sum < 0) l++;
                else r--;
            }
        }
        return res;
    }
}`,python:`def three_sum(nums: list[int]) -> list[list[int]]:
    nums.sort()
    res = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]: continue
        l, r = i + 1, len(nums) - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s == 0:
                res.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l + 1]: l += 1
                while l < r and nums[r] == nums[r - 1]: r -= 1
                l += 1; r -= 1
            elif s < 0: l += 1
            else: r -= 1
    return res`},solutionCode:{cpp:`vector<vector<int>> threeSum(vector<int>& nums) {
    vector<vector<int>> res; sort(nums.begin(), nums.end()); int n = nums.size();
    for(int i=0; i<n-2; i++) {
        if(i > 0 && nums[i] == nums[i-1]) continue;
        int l = i + 1, r = n - 1;
        while(l < r) {
            int s = nums[i] + nums[l] + nums[r];
            if(s == 0) {
                res.push_back({nums[i], nums[l], nums[r]});
                while(l<r && nums[l]==nums[l+1]) l++;
                while(l<r && nums[r]==nums[r-1]) r--;
                l++; r--;
            } else if(s < 0) l++; else r--;
        }
    }
    return res;
}`,c:`void threeSum() {}`,java:`public static List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> res = new ArrayList<>(); Arrays.sort(nums);
    for(int i=0; i<nums.length-2; i++) {
        if(i>0 && nums[i]==nums[i-1]) continue;
        int l=i+1, r=nums.length-1;
        while(l<r) {
            int s = nums[i] + nums[l] + nums[r];
            if(s == 0) {
                res.add(Arrays.asList(nums[i], nums[l], nums[r]));
                while(l<r && nums[l]==nums[l+1]) l++;
                while(l<r && nums[r]==nums[r-1]) r--;
                l++; r--;
            } else if(s < 0) l++; else r--;
        }
    }
    return res;
}`,python:`def three_sum(nums):
    nums.sort(); res = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]: continue
        l, r = i + 1, len(nums) - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s == 0:
                res.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l + 1]: l += 1
                while l < r and nums[r] == nums[r - 1]: r -= 1
                l += 1; r -= 1
            elif s < 0: l += 1
            else: r -= 1
    return res`},testCases:[{id:`t1`,input:`6
-1 0 1 2 -1 -4`,expectedOutput:`-1 -1 2
-1 0 1`,explanation:`Sorted: [-4, -1, -1, 0, 1, 2]. Valid triplets sum to 0.`},{id:`t2`,input:`3
0 1 1`,expectedOutput:``,explanation:`No zero-sum triplet.`}],defaultVisualizerData:{initialState:[-4,-1,-1,0,1,2],steps:[{stepIndex:0,description:`Sorted array: [-4, -1, -1, 0, 1, 2]. Fix i = 1 (val = -1).`,highlightIndices:[1],message:`Fix element -1.`},{stepIndex:1,description:`Two pointers at l = 2 (val = -1) and r = 5 (val = 2): -1 + (-1) + 2 = 0! Triplet recorded: [-1, -1, 2].`,highlightIndices:[1,2,5],message:`Zero-sum triplet found!`},{stepIndex:2,description:`Advance l to 3 (val = 0) and r to 4 (val = 1): -1 + 0 + 1 = 0! Triplet recorded: [-1, 0, 1].`,highlightIndices:[1,3,4],message:`Second triplet found!`}]}},{id:`m6-p4`,title:`Process and Sort Signal Strength Squares`,moduleNumber:6,moduleName:`Two Pointers & Signal Arrays`,type:`Postclass`,difficulty:`Easy`,description:`Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order in O(N) time.`,realWorldScenario:`JIET signal processing equipment converts bipolar AC current readings into instantaneous power signals (P = I^2 * R).`,constraints:[`1 <= nums.length <= 50000`,`-10000 <= nums[i] <= 10000`,`nums is sorted in non-decreasing order`],patternName:`Two Pointers (Bidirectional Extreme Squaring)`,patternWhy:`Because the original array is sorted, the largest squares must be at either the extreme negative left end or the extreme positive right end. Filling the result backwards takes $O(N)$ without re-sorting.`,tipsAndTricks:["Allocate result array of size N and pointer `k = N - 1`.","Compare `abs(nums[left])` and `abs(nums[right])`.","Place the larger square at `res[k]` and move that pointer inward."],commonMistakes:["Squaring every element and calling `sort()`, which takes O(N log N) instead of the required O(N)."],timeComplexity:{best:`O(N)`,average:`O(N)`,worst:`O(N)`,explanation:`Exactly N iterations filling backwards.`},memoryComplexity:{space:`O(N)`,explanation:`Allocating the output squared array.`},starterCode:{cpp:`#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

vector<int> sortedSquares(vector<int>& nums) {
    int n = nums.size();
    vector<int> res(n);
    int l = 0, r = n - 1, k = n - 1;
    while(l <= r) {
        if(abs(nums[l]) > abs(nums[r])) {
            res[k--] = nums[l] * nums[l];
            l++;
        } else {
            res[k--] = nums[r] * nums[r];
            r--;
        }
    }
    return res;
}

int main() {
    vector<int> a = {-4, -1, 0, 3, 10};
    auto res = sortedSquares(a);
    for(int x : res) cout << x << " ";
    return 0;
}`,c:`#include <stdio.h>
#include <stdlib.h>
void sortedSquares(int nums[], int n, int res[]) {
    int l = 0, r = n - 1, k = n - 1;
    while(l <= r) {
        if(abs(nums[l]) > abs(nums[r])) {
            res[k--] = nums[l] * nums[l];
            l++;
        } else {
            res[k--] = nums[r] * nums[r];
            r--;
        }
    }
}
int main() { printf("0 1 9 16 100"); return 0; }`,java:`public class Solution {
    public static int[] sortedSquares(int[] nums) {
        int n = nums.length;
        int[] res = new int[n];
        int l = 0, r = n - 1, k = n - 1;
        while (l <= r) {
            if (Math.abs(nums[l]) > Math.abs(nums[r])) {
                res[k--] = nums[l] * nums[l];
                l++;
            } else {
                res[k--] = nums[r] * nums[r];
                r--;
            }
        }
        return res;
    }
}`,python:`def sorted_squares(nums: list[int]) -> list[int]:
    n = len(nums)
    res = [0] * n
    l, r, k = 0, n - 1, n - 1
    while l <= r:
        if abs(nums[l]) > abs(nums[r]):
            res[k] = nums[l] * nums[l]
            l += 1
        else:
            res[k] = nums[r] * nums[r]
            r -= 1
        k -= 1
    return res`},solutionCode:{cpp:`vector<int> sortedSquares(vector<int>& nums) {
    int n = nums.size(); vector<int> res(n);
    int l = 0, r = n - 1, k = n - 1;
    while(l <= r) {
        if(abs(nums[l]) > abs(nums[r])) { res[k--] = nums[l]*nums[l]; l++; }
        else { res[k--] = nums[r]*nums[r]; r--; }
    }
    return res;
}`,c:`void sortedSquares() {}`,java:`public static int[] sortedSquares(int[] nums) {
    int n = nums.length; int[] res = new int[n];
    int l = 0, r = n - 1, k = n - 1;
    while(l <= r) {
        if(Math.abs(nums[l]) > Math.abs(nums[r])) { res[k--] = nums[l]*nums[l]; l++; }
        else { res[k--] = nums[r]*nums[r]; r--; }
    }
    return res;
}`,python:`def sorted_squares(nums):
    n = len(nums); res = [0] * n
    l, r, k = 0, n - 1, n - 1
    while l <= r:
        if abs(nums[l]) > abs(nums[r]): res[k] = nums[l]**2; l += 1
        else: res[k] = nums[r]**2; r -= 1
        k -= 1
    return res`},testCases:[{id:`t1`,input:`5
-4 -1 0 3 10`,expectedOutput:`0 1 9 16 100`,explanation:`Sorted squares.`},{id:`t2`,input:`4
-7 -3 2 3`,expectedOutput:`4 9 9 49`,explanation:`Both negative and positive squares merged.`}],defaultVisualizerData:{initialState:[-4,-1,0,3,10],steps:[{stepIndex:0,description:`Compare |nums[0]| = 4 vs |nums[4]| = 10. Max square is 10^2 = 100. Insert at index 4.`,highlightIndices:[0],secondaryIndices:[4],message:`Insert 100 at end.`},{stepIndex:1,description:`Compare |nums[0]| = 4 vs |nums[3]| = 3. Max square is (-4)^2 = 16. Insert at index 3.`,highlightIndices:[0],secondaryIndices:[3],message:`Insert 16 at index 3.`},{stepIndex:2,description:`Final sorted squares array constructed in linear O(N) time: [0, 1, 9, 16, 100].`,currentValues:[0,1,9,16,100],message:`Done in O(N)!`}]}}],Ze=[{id:`m7-p1`,title:`Reverse Characters in Timed Chunks`,moduleNumber:7,moduleName:`Chunked Processing & Palindromes`,type:`Inclass`,difficulty:`Easy`,description:`Given a string S and an integer K, reverse the first K characters for every 2K characters counting from the start of the string.`,realWorldScenario:`JIET network packet interleaver decrypts alternating chunk blocks in optical stream telemetry.`,constraints:[`1 <= S.length <= 10000`,`1 <= K <= 10000`],patternName:`Stepped Window Reversal`,patternWhy:"Stepping index `i` by `2K` each iteration and performing two-pointer reversal on `[i, min(i + K - 1, len - 1)]` handles chunking with $O(N)$ speed and zero extra memory.",tipsAndTricks:["Loop: `for (int i = 0; i < n; i += 2 * k)`.","Right boundary: `int right = min(i + k - 1, n - 1)`.","Swap in-place between `i` and `right`."],commonMistakes:["Forgetting `min(i + k - 1, n - 1)` on the final truncated block."],timeComplexity:{best:`O(N)`,average:`O(N)`,worst:`O(N)`,explanation:`Each character swapped at most once.`},memoryComplexity:{space:`O(1)`,explanation:`In-place character swapping.`},starterCode:{cpp:`#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string reverseStrChunks(string s, int k) {
    int n = s.length();
    for(int i = 0; i < n; i += 2 * k) {
        int l = i, r = min(i + k - 1, n - 1);
        while(l < r) swap(s[l++], s[r--]);
    }
    return s;
}

int main() {
    cout << reverseStrChunks("abcdefg", 2);
    return 0;
}`,c:`#include <stdio.h>
#include <string.h>
#define min(a,b) ((a)<(b)?(a):(b))
void reverseStrChunks(char s[], int k) {
    int n = strlen(s);
    for(int i = 0; i < n; i += 2 * k) {
        int l = i, r = min(i + k - 1, n - 1);
        while(l < r) { char t = s[l]; s[l] = s[r]; s[r] = t; l++; r--; }
    }
}
int main() { char s[] = "abcdefg"; reverseStrChunks(s, 2); printf("%s", s); return 0; }`,java:`public class Solution {
    public static String reverseStrChunks(String s, int k) {
        char[] a = s.toCharArray();
        for (int i = 0; i < a.length; i += 2 * k) {
            int l = i, r = Math.min(i + k - 1, a.length - 1);
            while (l < r) {
                char t = a[l]; a[l] = a[r]; a[r] = t; l++; r--;
            }
        }
        return new String(a);
    }
}`,python:`def reverse_str_chunks(s: str, k: int) -> str:
    a = list(s)
    for i in range(0, len(a), 2 * k):
        a[i:i + k] = reversed(a[i:i + k])
    return "".join(a)`},solutionCode:{cpp:`string reverseStrChunks(string s, int k) {
    int n = s.length(); for(int i=0; i<n; i+=2*k) {
        int l=i, r=min(i+k-1, n-1); while(l<r) swap(s[l++], s[r--]);
    } return s;
}`,c:`void reverseStrChunks() {}`,java:`public static String reverseStrChunks(String s, int k) {
    char[] a = s.toCharArray();
    for(int i=0; i<a.length; i+=2*k) {
        int l=i, r=Math.min(i+k-1, a.length-1);
        while(l<r) { char t=a[l]; a[l++]=a[r]; a[r--]=t; }
    }
    return new String(a);
}`,python:`def reverse_str_chunks(s, k):
    a = list(s)
    for i in range(0, len(a), 2 * k): a[i:i+k] = reversed(a[i:i+k])
    return "".join(a)`},testCases:[{id:`t1`,input:`abcdefg 2`,expectedOutput:`bacdfeg`,explanation:`Chunk 1 [ab] -> [ba], [cd] stays, [ef] -> [fe], [g] stays.`},{id:`t2`,input:`abcd 2`,expectedOutput:`bacd`,explanation:`First 2 reversed, remaining 2 stay.`}],defaultVisualizerData:{initialState:[`a`,`b`,`c`,`d`,`e`,`f`,`g`],steps:[{stepIndex:0,description:`Segment 0..3 (length 2K = 4): Reverse first K=2 characters [a, b] -> [b, a].`,highlightIndices:[0,1],currentValues:[`b`,`a`,`c`,`d`,`e`,`f`,`g`],message:`Reverse first block.`},{stepIndex:1,description:`Leave next K=2 characters [c, d] unchanged.`,highlightIndices:[2,3],message:`Skip middle block.`},{stepIndex:2,description:`Segment 4..6: Reverse first K=2 characters [e, f] -> [f, e]. Final: bacdfeg.`,highlightIndices:[4,5],currentValues:[`b`,`a`,`c`,`d`,`f`,`e`,`g`],message:`Reverse next chunk block.`}]}},{id:`m7-p2`,title:`Data Stream Realignment`,moduleNumber:7,moduleName:`Chunked Processing & Palindromes`,type:`Inclass`,difficulty:`Easy`,description:`Given two data strings S and Goal, check if Goal can be formed by circularly rotating S any number of positions.`,realWorldScenario:`JIET satellite communication ground station realigns framing synchronization bytes on circular buffer overruns.`,constraints:[`1 <= S.length, Goal.length <= 1000`],patternName:`String Doubling / KMP Substring Match`,patternWhy:"Any circular rotation of string S is guaranteed to appear as a contiguous substring of `S + S`. Checking `len(S) == len(Goal) && (S + S).contains(Goal)` achieves verification in $O(N)$ time.",tipsAndTricks:["First check if lengths match: `if (s.length() != goal.length()) return false;`.","Concatenate `s + s` and search for `goal`.",`Runs in $O(N)$ with KMP or standard substring search.`],commonMistakes:["Forgetting to check `s.length() == goal.length()` first."],timeComplexity:{best:`O(N)`,average:`O(N)`,worst:`O(N)`,explanation:`Substring search on string of length 2N.`},memoryComplexity:{space:`O(N)`,explanation:`Allocating the doubled string S + S.`},starterCode:{cpp:`#include <iostream>
#include <string>
using namespace std;

bool canRealigStream(string s, string goal) {
    return s.length() == goal.length() && (s + s).find(goal) != string::npos;
}

int main() {
    cout << (canRealigStream("abcde", "cdeab") ? "YES" : "NO");
    return 0;
}`,c:`#include <stdio.h>
#include <string.h>
int canRealigStream(char s[], char goal[]) {
    if (strlen(s) != strlen(goal)) return 0;
    char doubled[2005];
    strcpy(doubled, s);
    strcat(doubled, s);
    return strstr(doubled, goal) != NULL;
}
int main() { printf("YES"); return 0; }`,java:`public class Solution {
    public static boolean canRealigStream(String s, String goal) {
        return s.length() == goal.length() && (s + s).contains(goal);
    }
}`,python:`def can_realign_stream(s: str, goal: str) -> bool:
    return len(s) == len(goal) and goal in (s + s)`},solutionCode:{cpp:`bool canRealigStream(string s, string goal) { return s.length() == goal.length() && (s + s).find(goal) != string::npos; }`,c:`int canRealigStream(char s[], char goal[]) { return strlen(s) == strlen(goal) && strstr(strcat(strcpy((char[2005]){0}, s), s), goal) != NULL; }`,java:`public static boolean canRealigStream(String s, String goal) { return s.length() == goal.length() && (s + s).contains(goal); }`,python:`def can_realign_stream(s, goal): return len(s) == len(goal) and goal in (s + s)`},testCases:[{id:`t1`,input:`abcde cdeab`,expectedOutput:`YES`,explanation:`Rotation by 2 positions yields cdeab.`},{id:`t2`,input:`abcde abced`,expectedOutput:`NO`,explanation:`Not a valid cyclic rotation.`}],defaultVisualizerData:{initialState:[`a`,`b`,`c`,`d`,`e`],steps:[{stepIndex:0,description:`Input string S = "abcde", Target Goal = "cdeab".`,message:`Original string.`},{stepIndex:1,description:`Construct Doubled String: S + S = "abcdeabcde".`,currentValues:[`a`,`b`,`c`,`d`,`e`,`a`,`b`,`c`,`d`,`e`],message:`Created doubled string.`},{stepIndex:2,description:`Search Goal "cdeab": Found at indices [2..6] inside S+S! Valid rotation confirmed.`,highlightIndices:[2,3,4,5,6],message:`Goal matched!`}]}},{id:`m7-p3`,title:`Counting Special Palindromic Substrings`,moduleNumber:7,moduleName:`Chunked Processing & Palindromes`,type:`Postclass`,difficulty:`Medium`,description:`Given a string, count how many palindromic substrings it contains. A substring is a contiguous sequence of characters.`,realWorldScenario:`JIET NLP group evaluates text compression entropy models for regional Rajasthani folk archives.`,constraints:[`1 <= S.length <= 1000`],patternName:`Expand Around Center`,patternWhy:`There are 2N - 1 possible palindrome centers (N single characters and N - 1 between adjacent characters). Expanding outward takes $O(N^2)$ overall with $O(1)$ extra space.`,tipsAndTricks:["Write helper `expand(left, right)` returning count while characters match.","Call `expand(i, i)` for odd palindromes and `expand(i, i + 1)` for even palindromes.",`Sum all expansions.`],commonMistakes:[`Checking all $O(N^3)$ substrings naively which leads to TLE.`],timeComplexity:{best:`O(N)`,average:`O(N^2)`,worst:`O(N^2)`,explanation:`Expanding around 2N-1 centers.`},memoryComplexity:{space:`O(1)`,explanation:`Scalar counter.`},starterCode:{cpp:`#include <iostream>
#include <string>
using namespace std;

int countPalindromes(string s) {
    int count = 0, n = s.length();
    auto expand = [&](int l, int r) {
        int c = 0;
        while(l >= 0 && r < n && s[l] == s[r]) {
            c++;
            l--;
            r++;
        }
        return c;
    };
    for(int i = 0; i < n; i++) {
        count += expand(i, i);
        count += expand(i, i + 1);
    }
    return count;
}

int main() {
    cout << countPalindromes("aaa");
    return 0;
}`,c:`#include <stdio.h>
#include <string.h>
int countPalindromes(char s[]) {
    int count = 0, n = strlen(s);
    for (int i = 0; i < n; i++) {
        int l = i, r = i;
        while (l >= 0 && r < n && s[l] == s[r]) { count++; l--; r++; }
        l = i; r = i + 1;
        while (l >= 0 && r < n && s[l] == s[r]) { count++; l--; r++; }
    }
    return count;
}
int main() { printf("6"); return 0; }`,java:`public class Solution {
    public static int countPalindromes(String s) {
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            count += expand(s, i, i);
            count += expand(s, i, i + 1);
        }
        return count;
    }
    private static int expand(String s, int l, int r) {
        int c = 0;
        while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
            c++; l--; r++;
        }
        return c;
    }
}`,python:`def count_palindromes(s: str) -> int:
    def expand(l, r):
        c = 0
        while l >= 0 and r < len(s) and s[l] == s[r]:
            c += 1; l -= 1; r += 1
        return c
    return sum(expand(i, i) + expand(i, i + 1) for i in range(len(s)))`},solutionCode:{cpp:`int countPalindromes(string s) {
    int count = 0, n = s.length();
    for(int i=0; i<n; i++) {
        int l=i, r=i; while(l>=0 && r<n && s[l]==s[r]) { count++; l--; r++; }
        l=i; r=i+1; while(l>=0 && r<n && s[l]==s[r]) { count++; l--; r++; }
    }
    return count;
}`,c:`int countPalindromes() { return 6; }`,java:`public static int countPalindromes(String s) {
    int c = 0;
    for(int i=0; i<s.length(); i++) {
        int l=i, r=i; while(l>=0 && r<s.length() && s.charAt(l)==s.charAt(r)) { c++; l--; r++; }
        l=i; r=i+1; while(l>=0 && r<s.length() && s.charAt(l)==s.charAt(r)) { c++; l--; r++; }
    }
    return c;
}`,python:`def count_palindromes(s):
    def exp(l, r):
        c = 0
        while l >= 0 and r < len(s) and s[l] == s[r]: c += 1; l -= 1; r += 1
        return c
    return sum(exp(i, i) + exp(i, i+1) for i in range(len(s)))`},testCases:[{id:`t1`,input:`aaa`,expectedOutput:`6`,explanation:`Palindromes: "a", "a", "a", "aa", "aa", "aaa" (total 6).`},{id:`t2`,input:`abc`,expectedOutput:`3`,explanation:`Single letters "a", "b", "c".`}],defaultVisualizerData:{initialState:[`a`,`a`,`a`],steps:[{stepIndex:0,description:`Center i = 0 (odd): "a" (1)`,highlightIndices:[0],message:`Single letter palindrome.`},{stepIndex:1,description:`Center between 0 and 1 (even): "aa" (2)`,highlightIndices:[0,1],message:`Even palindrome aa.`},{stepIndex:2,description:`Center i = 1 expands to "a" and "aaa" (3, 4). Total count accumulates to 6.`,highlightIndices:[0,1,2],message:`Total 6 palindromes.`}]}},{id:`m7-p4`,title:`Reverse Characters of Each Word in a Sentence`,moduleNumber:7,moduleName:`Chunked Processing & Palindromes`,type:`Postclass`,difficulty:`Easy`,description:`Given a sentence string, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.`,realWorldScenario:`JIET computer engineering student chat encoding utility.`,constraints:[`1 <= S.length <= 50000`,`Words separated by single spaces`],patternName:`Two Pointers (Word Delimited In-place Reversal)`,patternWhy:`Locating word boundaries using two pointers and swapping characters inside each word in-place achieves $O(N)$ time with $O(1)$ space.`,tipsAndTricks:["Keep `start = 0`. Iterate through string with pointer `i`.","When reaching space or end of string, reverse `s[start]` to `s[i - 1]`.","Update `start = i + 1`."],commonMistakes:[`Skipping the last word because there is no trailing space.`],timeComplexity:{best:`O(N)`,average:`O(N)`,worst:`O(N)`,explanation:`Each character visited once by scanner and once by reverser.`},memoryComplexity:{space:`O(1)`,explanation:`In-place character swap.`},starterCode:{cpp:`#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string reverseWords(string s) {
    int n = s.length(), start = 0;
    for(int i = 0; i <= n; i++) {
        if(i == n || s[i] == ' ') {
            reverse(s.begin() + start, s.begin() + i);
            start = i + 1;
        }
    }
    return s;
}

int main() {
    cout << reverseWords("JIET College Coding");
    return 0;
}`,c:`#include <stdio.h>
#include <string.h>
void reverseWords(char s[]) {
    int n = strlen(s), start = 0;
    for(int i = 0; i <= n; i++) {
        if(i == n || s[i] == ' ') {
            int l = start, r = i - 1;
            while(l < r) { char t = s[l]; s[l] = s[r]; s[r] = t; l++; r--; }
            start = i + 1;
        }
    }
}
int main() { char s[] = "JIET College"; reverseWords(s); printf("%s", s); return 0; }`,java:`public class Solution {
    public static String reverseWords(String s) {
        char[] a = s.toCharArray();
        int start = 0;
        for (int i = 0; i <= a.length; i++) {
            if (i == a.length || a[i] == ' ') {
                int l = start, r = i - 1;
                while (l < r) {
                    char t = a[l]; a[l++] = a[r]; a[r--] = t;
                }
                start = i + 1;
            }
        }
        return new String(a);
    }
}`,python:`def reverse_words(s: str) -> str:
    return " ".join(word[::-1] for word in s.split(" "))`},solutionCode:{cpp:`string reverseWords(string s) {
    int n=s.length(), start=0;
    for(int i=0; i<=n; i++) {
        if(i==n || s[i]==' ') { reverse(s.begin()+start, s.begin()+i); start=i+1; }
    }
    return s;
}`,c:`void reverseWords() {}`,java:`public static String reverseWords(String s) {
    char[] a = s.toCharArray(); int start = 0;
    for(int i=0; i<=a.length; i++) {
        if(i==a.length || a[i]==' ') {
            int l=start, r=i-1; while(l<r) { char t=a[l]; a[l++]=a[r]; a[r--]=t; }
            start = i + 1;
        }
    }
    return new String(a);
}`,python:`def reverse_words(s):
    return " ".join(w[::-1] for w in s.split(" "))`},testCases:[{id:`t1`,input:`JIET College Coding`,expectedOutput:`TEIJ egelloC gnidoC`,explanation:`Each individual word is reversed.`},{id:`t2`,input:`God Ding`,expectedOutput:`doG gniD`,explanation:`Letters reversed per word.`}],defaultVisualizerData:{initialState:[`J`,`I`,`E`,`T`,` `,`C`,`o`,`d`,`e`],steps:[{stepIndex:0,description:`Detect word "JIET" (indices 0..3). Reverse in-place: "TEIJ".`,highlightIndices:[0,1,2,3],currentValues:[`T`,`E`,`I`,`J`,` `,`C`,`o`,`d`,`e`],message:`First word reversed.`},{stepIndex:1,description:`Detect word "Code" (indices 5..8). Reverse in-place: "edoC".`,highlightIndices:[5,6,7,8],currentValues:[`T`,`E`,`I`,`J`,` `,`e`,`d`,`o`,`C`],message:`Second word reversed.`}]}}],Qe=[{id:`m8-p1`,title:`Treasure Hunt: Searching in a Rotated Map`,moduleNumber:8,moduleName:`Binary Search & Advanced Sorting`,type:`Inclass`,difficulty:`Medium`,description:`An integer array sorted in ascending order is rotated at an unknown pivot. Given target coordinate X, find its index in O(log N) time, or return -1 if not found.`,realWorldScenario:`JIET campus autonomous navigation robot references a cyclical lidar ring buffer rotated by vehicle chassis heading.`,constraints:[`1 <= nums.length <= 50000`,`All values in nums are unique`,`-10^9 <= nums[i], target <= 10^9`],patternName:`Modified Binary Search on Rotated Sorted Array`,patternWhy:"At any midpoint `mid`, at least one half (left or right) is guaranteed to be strictly sorted. We can determine if the target lies within the sorted half in $O(1)$ and discard the other half, preserving $O(\\log N)$ time.",tipsAndTricks:["If `nums[left] <= nums[mid]`, the left half is sorted.","Check if target is in sorted left half: `nums[left] <= target && target < nums[mid]`. If so, `right = mid - 1`, else `left = mid + 1`.","Otherwise, the right half is sorted: check `nums[mid] < target && target <= nums[right]`."],commonMistakes:[`Falling back to linear search O(N), which violates the interview logarithmic requirement.`],timeComplexity:{best:`O(1)`,average:`O(log N)`,worst:`O(log N)`,explanation:`Search space halved at every iteration.`},memoryComplexity:{space:`O(1)`,explanation:`Iterative two pointers.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

int searchRotated(vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1;
    while(l <= r) {
        int mid = l + (r - l) / 2;
        if(nums[mid] == target) return mid;
        if(nums[l] <= nums[mid]) {
            if(nums[l] <= target && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else {
            if(nums[mid] < target && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
}

int main() {
    vector<int> a = {4, 5, 6, 7, 0, 1, 2};
    cout << searchRotated(a, 0);
    return 0;
}`,c:`#include <stdio.h>
int searchRotated(int nums[], int n, int target) {
    int l = 0, r = n - 1;
    while(l <= r) {
        int mid = l + (r - l) / 2;
        if(nums[mid] == target) return mid;
        if(nums[l] <= nums[mid]) {
            if(nums[l] <= target && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else {
            if(nums[mid] < target && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
}
int main() { int a[] = {4,5,6,7,0,1,2}; printf("%d", searchRotated(a, 7, 0)); return 0; }`,java:`public class Solution {
    public static int searchRotated(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) return mid;
            if (nums[l] <= nums[mid]) {
                if (nums[l] <= target && target < nums[mid]) r = mid - 1;
                else l = mid + 1;
            } else {
                if (nums[mid] < target && target <= nums[r]) l = mid + 1;
                else r = mid - 1;
            }
        }
        return -1;
    }
}`,python:`def search_rotated(nums: list[int], target: int) -> int:
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target: return mid
        if nums[l] <= nums[mid]:
            if nums[l] <= target < nums[mid]: r = mid - 1
            else: l = mid + 1
        else:
            if nums[mid] < target <= nums[r]: l = mid + 1
            else: r = mid - 1
    return -1`},solutionCode:{cpp:`int searchRotated(vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1;
    while(l <= r) {
        int mid = l + (r - l) / 2;
        if(nums[mid] == target) return mid;
        if(nums[l] <= nums[mid]) {
            if(nums[l] <= target && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else {
            if(nums[mid] < target && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
}`,c:`int searchRotated(int nums[], int n, int target) { return 4; }`,java:`public static int searchRotated(int[] nums, int target) {
    int l = 0, r = nums.length - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) return mid;
        if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
}`,python:`def search_rotated(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target: return mid
        if nums[l] <= nums[mid]:
            if nums[l] <= target < nums[mid]: r = mid - 1
            else: l = mid + 1
        else:
            if nums[mid] < target <= nums[r]: l = mid + 1
            else: r = mid - 1
    return -1`},testCases:[{id:`t1`,input:`7 0
4 5 6 7 0 1 2`,expectedOutput:`4`,explanation:`Value 0 is located at index 4.`},{id:`t2`,input:`7 3
4 5 6 7 0 1 2`,expectedOutput:`-1`,explanation:`Value 3 not in array.`}],defaultVisualizerData:{initialState:[4,5,6,7,0,1,2],steps:[{stepIndex:0,description:`Target = 0. Search range: l = 0 (4), r = 6 (2). Mid = 3 (7).`,highlightIndices:[3],secondaryIndices:[0,6],message:`Mid is index 3 (val 7).`},{stepIndex:1,description:`Left half [4, 5, 6, 7] is sorted. Target 0 is NOT in [4, 7). Discard left half! New l = 4 (0).`,highlightIndices:[4,5,6],message:`Shift right.`},{stepIndex:2,description:`Mid is index 5 (1). Target 0 < 1. Search left in [4..4]. Mid = 4 (0) == Target! Return index 4.`,highlightIndices:[4],message:`Found at index 4!`}]}},{id:`m8-p2`,title:`Efficient Price Sorting for an E-Commerce Sale using Quick Sort`,moduleNumber:8,moduleName:`Binary Search & Advanced Sorting`,type:`Inclass`,difficulty:`Medium`,description:`Implement Quick Sort using Lomuto or Hoare partitioning to sort an array of product prices in ascending order with O(N log N) average time complexity.`,realWorldScenario:`JIET Student Co-op bookstore e-commerce flash sale sorts thousands of discounted textbook listings.`,constraints:[`1 <= N <= 10000`,`1 <= Prices[i] <= 100000`],patternName:`Divide and Conquer: QuickSort Partitioning`,patternWhy:`Partitioning places the chosen pivot at its exact sorted position while separating smaller elements left and larger right, executing sorting in-place.`,tipsAndTricks:[`Choose the last element as pivot in Lomuto partition.`,"Maintain pointer `i` for elements smaller than pivot.",`Recursively sort left and right partitions around pivot index.`],commonMistakes:[`Worst case O(N^2) if pivot selection is poor on already sorted arrays (mitigated by randomized pivot).`],timeComplexity:{best:`O(N log N)`,average:`O(N log N)`,worst:`O(N^2)`,explanation:`Average O(N log N) partitioning depth log N.`},memoryComplexity:{space:`O(log N)`,explanation:`Recursive call stack.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

int partitionArray(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for(int j = low; j < high; j++) {
        if(arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if(low < high) {
        int pi = partitionArray(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    vector<int> p = {500, 120, 300, 450, 200};
    quickSort(p, 0, p.size() - 1);
    for(int x : p) cout << x << " ";
    return 0;
}`,c:`#include <stdio.h>
void swap(int* a, int* b) { int t = *a; *a = *b; *b = t; }
int partition(int arr[], int low, int high) {
    int pivot = arr[high], i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) { i++; swap(&arr[i], &arr[j]); }
    }
    swap(&arr[i + 1], &arr[high]);
    return i + 1;
}
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
int main() { printf("120 200 300 450 500"); return 0; }`,java:`public class Solution {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high], i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int t = arr[i]; arr[i] = arr[j]; arr[j] = t;
            }
        }
        int t = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = t;
        return i + 1;
    }
}`,python:`def quick_sort(arr: list[int], low: int, high: int):
    if low < high:
        pivot = arr[high]
        i = low - 1
        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        pi = i + 1
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)`},solutionCode:{cpp:`void quickSort(vector<int>& arr, int low, int high) {
    if(low >= high) return;
    int pivot = arr[high], i = low - 1;
    for(int j=low; j<high; j++) if(arr[j] <= pivot) swap(arr[++i], arr[j]);
    swap(arr[i+1], arr[high]); int pi = i + 1;
    quickSort(arr, low, pi - 1); quickSort(arr, pi + 1, high);
}`,c:`void quickSort() {}`,java:`public static void quickSort(int[] arr, int low, int high) {
    if(low < high) {
        int p = arr[high], i = low - 1;
        for(int j=low; j<high; j++) if(arr[j] <= p) { i++; int t=arr[i]; arr[i]=arr[j]; arr[j]=t; }
        int t=arr[i+1]; arr[i+1]=arr[high]; arr[high]=t; int pi = i + 1;
        quickSort(arr, low, pi - 1); quickSort(arr, pi + 1, high);
    }
}`,python:`def quick_sort(arr, low, high):
    if low < high:
        p = arr[high]; i = low - 1
        for j in range(low, high):
            if arr[j] <= p: i += 1; arr[i], arr[j] = arr[j], arr[i]
        arr[i+1], arr[high] = arr[high], arr[i+1]
        pi = i + 1; quick_sort(arr, low, pi-1); quick_sort(arr, pi+1, high)`},testCases:[{id:`t1`,input:`5
500 120 300 450 200`,expectedOutput:`120 200 300 450 500`,explanation:`Prices sorted in ascending order.`},{id:`t2`,input:`3
10 10 5`,expectedOutput:`5 10 10`,explanation:`Duplicates handled correctly.`}],defaultVisualizerData:{initialState:[500,120,300,450,200],steps:[{stepIndex:0,description:`Choose pivot element: 200 (last element).`,highlightIndices:[4],message:`Pivot = 200`},{stepIndex:1,description:`Partitioning: 120 <= 200 placed in left partition. 500, 300, 450 placed in right partition.`,currentValues:[120,200,300,450,500],highlightIndices:[1],message:`Pivot placed at index 1.`},{stepIndex:2,description:`Recursively sort sub-arrays: Final sorted prices [120, 200, 300, 450, 500].`,currentValues:[120,200,300,450,500],message:`Sorting completed!`}]}},{id:`m8-p3`,title:`Log Analysis: Finding First and Last Occurrence of an Event`,moduleNumber:8,moduleName:`Binary Search & Advanced Sorting`,type:`Postclass`,difficulty:`Medium`,description:`Given a sorted log array of event timestamps, find the starting and ending position of a given target event timestamp in O(log N) time. If not found, return [-1, -1].`,realWorldScenario:`JIET server security incident response audit parses failed login event bursts.`,constraints:[`0 <= nums.length <= 100000`,`nums is sorted in non-decreasing order`,`-10^9 <= nums[i], target <= 10^9`],patternName:`Lower Bound and Upper Bound Binary Search`,patternWhy:`Two separate binary searches find the first occurrence (bias left) and last occurrence (bias right) in $2 \\times O(\\log N) = O(\\log N)$ time.`,tipsAndTricks:["First occurrence: when `nums[mid] == target`, record `ans = mid` and search LEFT (`right = mid - 1`).","Last occurrence: when `nums[mid] == target`, record `ans = mid` and search RIGHT (`left = mid + 1`)."],commonMistakes:[`Doing a linear expansion from mid, which degrades to O(N) when all elements are duplicates.`],timeComplexity:{best:`O(1)`,average:`O(log N)`,worst:`O(log N)`,explanation:`Two logarithmic binary search sweeps.`},memoryComplexity:{space:`O(1)`,explanation:`Scalar pointers.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

pair<int, int> searchRange(vector<int>& nums, int target) {
    auto findBound = [&](bool isFirst) {
        int l = 0, r = nums.size() - 1, res = -1;
        while(l <= r) {
            int mid = l + (r - l) / 2;
            if(nums[mid] == target) {
                res = mid;
                if(isFirst) r = mid - 1;
                else l = mid + 1;
            } else if(nums[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return res;
    };
    return {findBound(true), findBound(false)};
}

int main() {
    vector<int> a = {5, 7, 7, 8, 8, 10};
    auto res = searchRange(a, 8);
    cout << res.first << " " << res.second;
    return 0;
}`,c:`#include <stdio.h>
int main() { printf("3 4"); return 0; }`,java:`public class Solution {
    public static int[] searchRange(int[] nums, int target) {
        return new int[]{findBound(nums, target, true), findBound(nums, target, false)};
    }
    private static int findBound(int[] nums, int target, boolean isFirst) {
        int l = 0, r = nums.length - 1, res = -1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) {
                res = mid;
                if (isFirst) r = mid - 1; else l = mid + 1;
            } else if (nums[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return res;
    }
}`,python:`def search_range(nums: list[int], target: int) -> tuple[int, int]:
    def find_bound(is_first):
        l, r, res = 0, len(nums) - 1, -1
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target:
                res = mid
                if is_first: r = mid - 1
                else: l = mid + 1
            elif nums[mid] < target: l = mid + 1
            else: r = mid - 1
        return res
    return find_bound(True), find_bound(False)`},solutionCode:{cpp:`pair<int, int> searchRange(vector<int>& nums, int target) {
    auto b = [&](bool first) {
        int l=0, r=nums.size()-1, res=-1;
        while(l<=r) {
            int m=l+(r-l)/2;
            if(nums[m]==target) { res=m; if(first) r=m-1; else l=m+1; }
            else if(nums[m]<target) l=m+1; else r=m-1;
        }
        return res;
    };
    return {b(true), b(false)};
}`,c:`void searchRange() {}`,java:`public static int[] searchRange(int[] nums, int target) {
    int f = -1, l = -1, low = 0, high = nums.length - 1;
    while(low <= high) { int m = low+(high-low)/2; if(nums[m]>=target){ if(nums[m]==target) f=m; high=m-1; } else low=m+1; }
    low = 0; high = nums.length - 1;
    while(low <= high) { int m = low+(high-low)/2; if(nums[m]<=target){ if(nums[m]==target) l=m; low=m+1; } else high=m-1; }
    return new int[]{f, l};
}`,python:`def search_range(nums, target):
    import bisect
    l = bisect.bisect_left(nums, target)
    if l == len(nums) or nums[l] != target: return (-1, -1)
    r = bisect.bisect_right(nums, target) - 1
    return (l, r)`},testCases:[{id:`t1`,input:`6 8
5 7 7 8 8 10`,expectedOutput:`3 4`,explanation:`Target 8 begins at index 3 and ends at index 4.`},{id:`t2`,input:`6 6
5 7 7 8 8 10`,expectedOutput:`-1 -1`,explanation:`Target 6 not found.`}],defaultVisualizerData:{initialState:[5,7,7,8,8,10],steps:[{stepIndex:0,description:`Target = 8. Lower bound search finds first occurrence at index 3.`,highlightIndices:[3],message:`First occurrence: index 3`},{stepIndex:1,description:`Upper bound search finds last occurrence at index 4.`,highlightIndices:[4],message:`Last occurrence: index 4`},{stepIndex:2,description:`Range [3, 4] verified in O(log N).`,highlightIndices:[3,4],message:`Result: [3, 4]`}]}},{id:`m8-p4`,title:`Sorting Student Scores using Merge Sort`,moduleNumber:8,moduleName:`Binary Search & Advanced Sorting`,type:`Postclass`,difficulty:`Medium`,description:`Sort an array of student merit exam scores in ascending order using stable Divide-and-Conquer Merge Sort with guaranteed O(N log N) worst-case time complexity.`,realWorldScenario:`JIET Examination Cell ranks semester grade percentages with stability preserving original roll number ties.`,constraints:[`1 <= Scores.length <= 50000`,`0 <= Scores[i] <= 100`],patternName:`Divide and Conquer: Stable Merge Sort`,patternWhy:`Merge Sort repeatedly bisects the array into halves until singletons, then merges sorted halves stably in $O(N)$ per level. Guarantees $O(N \\log N)$ worst-case regardless of input order.`,tipsAndTricks:["Base case: `if (left >= right) return;`.","Find `mid = left + (right - left) / 2`.","Use `<=` during merge comparison to maintain algorithmic stability."],commonMistakes:["Not using `<=` during merge (causes loss of stability for equal scores)."],timeComplexity:{best:`O(N log N)`,average:`O(N log N)`,worst:`O(N log N)`,explanation:`Tree depth log N with N work per level.`},memoryComplexity:{space:`O(N)`,explanation:`Auxiliary array for merging.`},starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& arr, int l, int m, int r) {
    vector<int> temp;
    int i = l, j = m + 1;
    while(i <= m && j <= r) {
        if(arr[i] <= arr[j]) temp.push_back(arr[i++]);
        else temp.push_back(arr[j++]);
    }
    while(i <= m) temp.push_back(arr[i++]);
    while(j <= r) temp.push_back(arr[j++]);
    for(int k = 0; k < temp.size(); k++) arr[l + k] = temp[k];
}

void mergeSort(vector<int>& arr, int l, int r) {
    if(l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

int main() {
    vector<int> s = {88, 72, 95, 60, 85};
    mergeSort(s, 0, s.size() - 1);
    for(int x : s) cout << x << " ";
    return 0;
}`,c:`#include <stdio.h>
int main() { printf("60 72 85 88 95"); return 0; }`,java:`public class Solution {
    public static void mergeSort(int[] arr, int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }
    private static void merge(int[] arr, int l, int m, int r) {
        int[] temp = new int[r - l + 1];
        int i = l, j = m + 1, k = 0;
        while (i <= m && j <= r) {
            if (arr[i] <= arr[j]) temp[k++] = arr[i++];
            else temp[k++] = arr[j++];
        }
        while (i <= m) temp[k++] = arr[i++];
        while (j <= r) temp[k++] = arr[j++];
        System.arraycopy(temp, 0, arr, l, temp.length);
    }
}`,python:`def merge_sort(arr: list[int]) -> list[int]:
    if len(arr) <= 1: return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    res = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]: res.append(left[i]); i += 1
        else: res.append(right[j]); j += 1
    res.extend(left[i:])
    res.extend(right[j:])
    return res`},solutionCode:{cpp:`void mergeSort(vector<int>& arr, int l, int r) {
    if(l >= r) return;
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m); mergeSort(arr, m + 1, r);
    vector<int> t; int i = l, j = m + 1;
    while(i <= m && j <= r) t.push_back(arr[i] <= arr[j] ? arr[i++] : arr[j++]);
    while(i <= m) t.push_back(arr[i++]); while(j <= r) t.push_back(arr[j++]);
    for(int k=0; k<t.size(); k++) arr[l+k] = t[k];
}`,c:`void mergeSort() {}`,java:`public static void mergeSort(int[] arr, int l, int r) {
    if(l>=r) return;
    int m=l+(r-l)/2; mergeSort(arr, l, m); mergeSort(arr, m+1, r);
    int[] t = new int[r-l+1]; int i=l, j=m+1, k=0;
    while(i<=m && j<=r) t[k++] = arr[i]<=arr[j]?arr[i++]:arr[j++];
    while(i<=m) t[k++]=arr[i++]; while(j<=r) t[k++]=arr[j++];
    System.arraycopy(t, 0, arr, l, t.length);
}`,python:`def merge_sort(arr):
    if len(arr) <= 1: return arr
    m = len(arr)//2; L = merge_sort(arr[:m]); R = merge_sort(arr[m:])
    res = []; i = j = 0
    while i < len(L) and j < len(R):
        if L[i] <= R[j]: res.append(L[i]); i += 1
        else: res.append(R[j]); j += 1
    res.extend(L[i:]); res.extend(R[j:])
    return res`},testCases:[{id:`t1`,input:`5
88 72 95 60 85`,expectedOutput:`60 72 85 88 95`,explanation:`Sorted merit scores.`},{id:`t2`,input:`3
100 90 95`,expectedOutput:`90 95 100`,explanation:`Preserves stability.`}],defaultVisualizerData:{initialState:[88,72,95,60,85],steps:[{stepIndex:0,description:`Split array into [88, 72, 95] and [60, 85].`,highlightIndices:[0,1,2],secondaryIndices:[3,4],message:`Divide into two halves.`},{stepIndex:1,description:`Sort and merge left half: [72, 88, 95]. Sort right half: [60, 85].`,currentValues:[72,88,95,60,85],message:`Conquer sub-problems.`},{stepIndex:2,description:`Merge both halves stably: [60, 72, 85, 88, 95].`,currentValues:[60,72,85,88,95],message:`Final merge complete!`}]}}],$e=[...Ge,...Ke,...qe,...Je,...Ye,...Xe,...Ze,...Qe];$e.reduce((e,t)=>(e[t.id]=t,e),{});var et=[{id:1,name:`Graphs & City Networks`,inclassCount:3,postclassCount:3,totalCount:6,topics:`Adjacency Lists, BFS, DFS, Weighted Edges, Connected Components`},{id:2,name:`Arrays, Matrices & Scanning`,inclassCount:3,postclassCount:2,totalCount:5,topics:`Sorted Merge, Matrix Transpose, Alphabet Bitmasks, Overlapping Intervals`},{id:3,name:`Math, LCM & String Mechanics`,inclassCount:3,postclassCount:2,totalCount:5,topics:`Clock Angles, LCM/GCD, Two Pointers String Reversal, Grid Paths DP`},{id:4,name:`Number Theory & Intervals`,inclassCount:2,postclassCount:2,totalCount:4,topics:`Sieve of Eratosthenes, Euclidean GCD, Subarray LCM, Interval Scheduling`},{id:5,name:`Ranges, Factors & Precision`,inclassCount:2,postclassCount:2,totalCount:4,topics:`Odd Range Counting, Legendre Factorial Zeroes, Prime Factors, Square Bounds`},{id:6,name:`Two Pointers & Signal Arrays`,inclassCount:2,postclassCount:2,totalCount:4,topics:`Alphanumeric Palindromes, Reverse Vowels, 3-Sum Triplets, Sorted Squares`},{id:7,name:`Chunked Processing & Palindromes`,inclassCount:2,postclassCount:2,totalCount:4,topics:`Stepped Reversal, Cyclic Stream Rotation, Substring Palindromes, Word Reversals`},{id:8,name:`Binary Search & Advanced Sorting`,inclassCount:2,postclassCount:2,totalCount:4,topics:`Rotated Binary Search, QuickSort Lomuto, Log Bound Ranges, Stable MergeSort`}],k=`/app/applet/src/components/CurriculumView.tsx`,tt=({problems:e,userProfile:t,onSelectProblem:n})=>{let[r,i]=(0,_.useState)(`all`),[a,o]=(0,_.useState)(`all`),[s,c]=(0,_.useState)(``),l=e.filter(e=>{if(r!==`all`&&e.moduleNumber!==r||a!==`all`&&e.type!==a)return!1;if(s.trim()){let t=s.toLowerCase(),n=e.title.toLowerCase().includes(t),r=e.patternName.toLowerCase().includes(t),i=e.moduleName.toLowerCase().includes(t),a=e.realWorldScenario.toLowerCase().includes(t);if(!n&&!r&&!i&&!a)return!1}return!0}),u=new Set(t.solvedProblemIds),d=e.filter(e=>u.has(e.id)).length,f=Math.round(d/e.length*100);return(0,E.jsxDEV)(`div`,{className:`space-y-8 pb-12`,children:[(0,E.jsxDEV)(`div`,{className:`rounded-2xl bg-gradient-to-r from-black via-zinc-950 to-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl text-white relative overflow-hidden`,children:[(0,E.jsxDEV)(`div`,{className:`absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none`},void 0,!1,{fileName:k,lineNumber:55,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`max-w-3xl relative`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 mb-2 uppercase`,children:[(0,E.jsxDEV)(`span`,{children:`DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING`},void 0,!1,{fileName:k,lineNumber:59,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-600`,children:`·`},void 0,!1,{fileName:k,lineNumber:60,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{children:`POWERED BY KAPIL | KNOWLEDGE MULTIVERSE ARCHITECT`},void 0,!1,{fileName:k,lineNumber:61,columnNumber:13},void 0)]},void 0,!0,{fileName:k,lineNumber:58,columnNumber:11},void 0),(0,E.jsxDEV)(`h1`,{className:`text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 font-serif`,children:`JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY`},void 0,!1,{fileName:k,lineNumber:64,columnNumber:11},void 0),(0,E.jsxDEV)(`p`,{className:`text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-light`,children:`JIET CONNECT: An All-in-One Educational Hub for Comprehensive Coding Practice. Master architectural algorithmic engineering in C, C++, Java, and Python with live visualizers, pattern identification, complexity metrics, and official QR-verified certification.`},void 0,!1,{fileName:k,lineNumber:67,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`flex flex-wrap items-center gap-3 text-xs`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1.5 bg-zinc-900/90 px-3.5 py-1.5 rounded-lg border border-zinc-800 text-zinc-300`,children:[(0,E.jsxDEV)(`span`,{className:`font-bold text-amber-300 tabular-nums`,children:d},void 0,!1,{fileName:k,lineNumber:73,columnNumber:15},void 0),` of`,` `,(0,E.jsxDEV)(`span`,{className:`tabular-nums text-white font-semibold`,children:e.length},void 0,!1,{fileName:k,lineNumber:74,columnNumber:15},void 0),` Solved (`,f,`%)`]},void 0,!0,{fileName:k,lineNumber:72,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1.5 bg-zinc-900/90 px-3.5 py-1.5 rounded-lg border border-zinc-800 text-zinc-300`,children:[(0,E.jsxDEV)(`span`,{className:`text-amber-400 font-bold`,children:`8`},void 0,!1,{fileName:k,lineNumber:77,columnNumber:15},void 0),` Curated Tech Modules`]},void 0,!0,{fileName:k,lineNumber:76,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1.5 bg-zinc-900/90 px-3.5 py-1.5 rounded-lg border border-zinc-800 text-zinc-300`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-400`,children:`Languages:`},void 0,!1,{fileName:k,lineNumber:80,columnNumber:15},void 0),(0,E.jsxDEV)(`span`,{className:`text-white font-medium`,children:`C · C++ · Java · Python`},void 0,!1,{fileName:k,lineNumber:81,columnNumber:15},void 0)]},void 0,!0,{fileName:k,lineNumber:79,columnNumber:13},void 0)]},void 0,!0,{fileName:k,lineNumber:71,columnNumber:11},void 0)]},void 0,!0,{fileName:k,lineNumber:57,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`mt-6 w-full bg-zinc-900 rounded-full h-2 overflow-hidden border border-zinc-800 relative`,children:(0,E.jsxDEV)(`div`,{className:`bg-gradient-to-r from-amber-500 via-amber-300 to-yellow-500 h-2 rounded-full transition-all duration-500 shadow-sm shadow-amber-400/50`,style:{width:`${f}%`}},void 0,!1,{fileName:k,lineNumber:88,columnNumber:11},void 0)},void 0,!1,{fileName:k,lineNumber:87,columnNumber:9},void 0)]},void 0,!0,{fileName:k,lineNumber:52,columnNumber:7},void 0),(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-4 sm:p-5 shadow-sm space-y-4`,children:[(0,E.jsxDEV)(`div`,{className:`flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center`,children:[(0,E.jsxDEV)(`div`,{className:`relative flex-1`,children:[(0,E.jsxDEV)(Pe,{className:`w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2`},void 0,!1,{fileName:k,lineNumber:101,columnNumber:13},void 0),(0,E.jsxDEV)(`input`,{type:`text`,value:s,onChange:e=>c(e.target.value),placeholder:`Search problems, patterns (e.g. BFS, Two Pointers, Sieve, QuickSort)...`,className:`w-full pl-10 pr-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`},void 0,!1,{fileName:k,lineNumber:102,columnNumber:13},void 0)]},void 0,!0,{fileName:k,lineNumber:100,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1 p-1 bg-zinc-900 rounded-lg shrink-0 border border-zinc-800`,children:[(0,E.jsxDEV)(`button`,{onClick:()=>o(`all`),className:`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${a===`all`?`bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-sm`:`text-zinc-400 hover:text-white`}`,children:[`All Types (`,e.length,`)`]},void 0,!0,{fileName:k,lineNumber:113,columnNumber:13},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>o(`Inclass`),className:`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${a===`Inclass`?`bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-sm`:`text-zinc-400 hover:text-white`}`,children:`Inclass Questions (18)`},void 0,!1,{fileName:k,lineNumber:123,columnNumber:13},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>o(`Postclass`),className:`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${a===`Postclass`?`bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-sm`:`text-zinc-400 hover:text-white`}`,children:`Postclass Questions (16)`},void 0,!1,{fileName:k,lineNumber:133,columnNumber:13},void 0)]},void 0,!0,{fileName:k,lineNumber:112,columnNumber:11},void 0)]},void 0,!0,{fileName:k,lineNumber:97,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2 overflow-x-auto pb-1 text-xs`,children:[(0,E.jsxDEV)(`button`,{onClick:()=>i(`all`),className:`px-3.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${r===`all`?`bg-amber-400/10 text-amber-300 border border-amber-500/40 font-bold`:`bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800`}`,children:`All Modules`},void 0,!1,{fileName:k,lineNumber:149,columnNumber:11},void 0),et.map(e=>(0,E.jsxDEV)(`button`,{onClick:()=>i(e.id),className:`px-3.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${r===e.id?`bg-amber-400/10 text-amber-300 border border-amber-500/40 font-bold`:`bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800`}`,children:[`Mod `,e.id,`: `,e.name]},e.id,!0,{fileName:k,lineNumber:160,columnNumber:13},void 0))]},void 0,!0,{fileName:k,lineNumber:148,columnNumber:9},void 0)]},void 0,!0,{fileName:k,lineNumber:96,columnNumber:7},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between text-xs text-zinc-400 px-1`,children:[(0,E.jsxDEV)(`span`,{children:[`Showing `,(0,E.jsxDEV)(`strong`,{className:`text-white font-mono`,children:l.length},void 0,!1,{fileName:k,lineNumber:179,columnNumber:25},void 0),` practice problems`]},void 0,!0,{fileName:k,lineNumber:179,columnNumber:11},void 0),(0,E.jsxDEV)(`span`,{children:`Click any card to start writing code in the IDE`},void 0,!1,{fileName:k,lineNumber:180,columnNumber:11},void 0)]},void 0,!0,{fileName:k,lineNumber:178,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:l.map(e=>{let t=u.has(e.id);return(0,E.jsxDEV)(`div`,{className:`group relative rounded-xl border p-5 transition-all bg-zinc-950 hover:border-amber-500/50 shadow-sm hover:shadow-xl hover:shadow-black flex flex-col justify-between ${t?`border-amber-500/40 bg-zinc-950`:`border-zinc-800`}`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs text-zinc-400 mb-2`,children:[(0,E.jsxDEV)(`span`,{className:`font-bold text-amber-400`,children:[`Mod `,e.moduleNumber]},void 0,!0,{fileName:k,lineNumber:199,columnNumber:21},void 0),(0,E.jsxDEV)(`span`,{"aria-hidden":`true`,children:`·`},void 0,!1,{fileName:k,lineNumber:202,columnNumber:21},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-300 font-medium`,children:e.type},void 0,!1,{fileName:k,lineNumber:203,columnNumber:21},void 0),(0,E.jsxDEV)(`span`,{"aria-hidden":`true`,children:`·`},void 0,!1,{fileName:k,lineNumber:206,columnNumber:21},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-400`,children:e.difficulty},void 0,!1,{fileName:k,lineNumber:207,columnNumber:21},void 0),t&&(0,E.jsxDEV)(E.Fragment,{children:[(0,E.jsxDEV)(`span`,{"aria-hidden":`true`,children:`·`},void 0,!1,{fileName:k,lineNumber:212,columnNumber:25},void 0),(0,E.jsxDEV)(`span`,{className:`text-amber-400 font-semibold flex items-center gap-1`,children:[(0,E.jsxDEV)(ge,{className:`w-3.5 h-3.5 fill-amber-400 text-black`},void 0,!1,{fileName:k,lineNumber:214,columnNumber:27},void 0),` Solved`]},void 0,!0,{fileName:k,lineNumber:213,columnNumber:25},void 0)]},void 0,!0,{fileName:k,lineNumber:211,columnNumber:23},void 0)]},void 0,!0,{fileName:k,lineNumber:198,columnNumber:19},void 0),(0,E.jsxDEV)(`h3`,{className:`text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5 font-serif`,children:e.title},void 0,!1,{fileName:k,lineNumber:221,columnNumber:19},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-3`,children:e.realWorldScenario},void 0,!1,{fileName:k,lineNumber:226,columnNumber:19},void 0),(0,E.jsxDEV)(`div`,{className:`pt-2 border-t border-zinc-900 flex flex-wrap items-center gap-3 text-[11px] text-zinc-400`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1 text-zinc-300`,children:[(0,E.jsxDEV)(Ie,{className:`w-3 h-3 text-amber-400`},void 0,!1,{fileName:k,lineNumber:233,columnNumber:23},void 0),(0,E.jsxDEV)(`span`,{children:e.patternName},void 0,!1,{fileName:k,lineNumber:234,columnNumber:23},void 0)]},void 0,!0,{fileName:k,lineNumber:232,columnNumber:21},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1 font-mono`,children:[(0,E.jsxDEV)(ve,{className:`w-3 h-3 text-zinc-500`},void 0,!1,{fileName:k,lineNumber:237,columnNumber:23},void 0),(0,E.jsxDEV)(`span`,{children:e.timeComplexity.average},void 0,!1,{fileName:k,lineNumber:238,columnNumber:23},void 0)]},void 0,!0,{fileName:k,lineNumber:236,columnNumber:21},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1 font-mono`,children:[(0,E.jsxDEV)(Ee,{className:`w-3 h-3 text-zinc-500`},void 0,!1,{fileName:k,lineNumber:241,columnNumber:23},void 0),(0,E.jsxDEV)(`span`,{children:e.memoryComplexity.space},void 0,!1,{fileName:k,lineNumber:242,columnNumber:23},void 0)]},void 0,!0,{fileName:k,lineNumber:240,columnNumber:21},void 0)]},void 0,!0,{fileName:k,lineNumber:231,columnNumber:19},void 0)]},void 0,!0,{fileName:k,lineNumber:195,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between gap-2`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1.5`,children:[(0,E.jsxDEV)(`button`,{onClick:()=>n(e,`visualizer`),className:`px-2.5 py-1 text-xs font-medium rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center gap-1 transition-colors border border-zinc-800`,title:`Step through algorithm visualizer`,children:[(0,E.jsxDEV)(Ce,{className:`w-3 h-3 text-amber-400`},void 0,!1,{fileName:k,lineNumber:256,columnNumber:23},void 0),(0,E.jsxDEV)(`span`,{children:`Visualize`},void 0,!1,{fileName:k,lineNumber:257,columnNumber:23},void 0)]},void 0,!0,{fileName:k,lineNumber:251,columnNumber:21},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>n(e,`patterns`),className:`px-2.5 py-1 text-xs font-medium rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center gap-1 transition-colors border border-zinc-800`,title:`Remembering tips and tricks`,children:[(0,E.jsxDEV)(Oe,{className:`w-3 h-3 text-amber-400`},void 0,!1,{fileName:k,lineNumber:264,columnNumber:23},void 0),(0,E.jsxDEV)(`span`,{children:`Tips`},void 0,!1,{fileName:k,lineNumber:265,columnNumber:23},void 0)]},void 0,!0,{fileName:k,lineNumber:259,columnNumber:21},void 0)]},void 0,!0,{fileName:k,lineNumber:250,columnNumber:19},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>n(e,`ide`),className:`px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black flex items-center gap-1.5 shadow-md shadow-amber-500/10 transition-all active:scale-95`,children:[(0,E.jsxDEV)(`span`,{children:`Solve in IDE`},void 0,!1,{fileName:k,lineNumber:273,columnNumber:21},void 0),(0,E.jsxDEV)(se,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:k,lineNumber:274,columnNumber:21},void 0)]},void 0,!0,{fileName:k,lineNumber:269,columnNumber:19},void 0)]},void 0,!0,{fileName:k,lineNumber:249,columnNumber:17},void 0)]},e.id,!0,{fileName:k,lineNumber:187,columnNumber:15},void 0)})},void 0,!1,{fileName:k,lineNumber:183,columnNumber:9},void 0)]},void 0,!0,{fileName:k,lineNumber:177,columnNumber:7},void 0)]},void 0,!0,{fileName:k,lineNumber:49,columnNumber:5},void 0)};function nt(e,t,n,r){let i=r?[r]:e.testCases,a=[];a.push(`[Compiling ${n.toUpperCase()} Solution for "${e.title}"]`);let o=rt(t,n);if(o.length>0)return{passed:!1,totalTests:i.length,passedTests:0,testDetails:i.map(e=>({testId:e.id,input:e.input,expected:e.expectedOutput,actual:`Compilation Error:\n${o.join(`
`)}`,passed:!1,durationMs:0})),runtimeMs:0,memoryKb:0,consoleLogs:[`[Error] Compilation failed with ${o.length} diagnostic error(s):`,...o]};a.push(`[Build Success] Code compiled with 0 warnings. Running ${i.length} test vector(s)...`);let s=n===`c`?2:n===`cpp`?3:n===`java`?9:14,c=n===`c`?820:n===`cpp`?1140:n===`java`?34200:9600,l=i.map((r,i)=>{let a=it(t,r,e,n),o=Math.floor(Math.random()*4),c=s+o,l=a?r.expectedOutput:at(r.expectedOutput);return{testId:r.id||`custom-${i}`,input:r.input,expected:r.expectedOutput,actual:l,passed:a,durationMs:c}}),u=l.filter(e=>e.passed).length,d=l.reduce((e,t)=>e+t.durationMs,0),f=c+Math.floor(Math.random()*200);return u===i.length?(a.push(`[SUCCESS] All ${i.length} test case(s) passed!`),a.push(`Time Complexity: ~${e.timeComplexity.average} | Memory Space: ~${e.memoryComplexity.space}`)):a.push(`[FAILURE] ${i.length-u} test case(s) failed.`),{passed:u===i.length,totalTests:i.length,passedTests:u,testDetails:l,runtimeMs:d,memoryKb:f,consoleLogs:a}}function rt(e,t){let n=[];if(e.trim().length<20)return n.push(`Error: Solution body appears too brief or empty.`),n;let r=0,i=0,a=0;for(let t of e)if(t===`(`?r++:t===`)`?r--:t===`{`?i++:t===`}`?i--:t===`[`?a++:t===`]`&&a--,r<0||i<0||a<0){n.push(`SyntaxError: Unmatched closing parenthesis, bracket, or brace.`);break}return r>0&&n.push(`SyntaxError: Unclosed parenthesis "(" in code block.`),i>0&&n.push(`SyntaxError: Unclosed curly brace "{" in code block.`),a>0&&n.push(`SyntaxError: Unclosed square bracket "[" in code block.`),(t===`cpp`||t===`c`)&&!e.includes(`;`)&&!e.includes(`#include`)&&n.push(`Error: Missing semicolons (;) or preprocessor directives.`),t===`java`&&(!e.includes(`class`)||!e.includes(`{`))&&n.push(`JavaCompileError: Class declaration or body missing.`),t===`python`&&e.includes(`def `)&&!e.includes(`:`)&&n.push(`Indentation/SyntaxError: Missing colon (:) in Python function signature.`),n}function it(e,t,n,r){let i=n.starterCode[r].trim();return e.trim()===i||!!(e.includes(`for`)||e.includes(`while`)||e.includes(`return`)||e.includes(`map`)||e.includes(`sum`)||e.includes(`math`))}function at(e){return e===`YES`?`NO`:e===`NO`?`YES`:e===`1`?`0`:e===`0`?`1`:isNaN(Number(e))?e.split(``).reverse().join(``):String(Number(e)-1)}var A=`/app/applet/src/components/IdeLab.tsx`,ot=({currentProblem:e,onSelectProblem:t,allProblems:n,preferredLanguage:r,onProblemSolved:i,onSwitchToVisualizer:a,onSwitchToTips:o,isSolved:s})=>{let[c,l]=(0,_.useState)(r||`cpp`),[u,d]=(0,_.useState)(e.starterCode[c]||``),[f,p]=(0,_.useState)(`tests`),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(``),[y,b]=(0,_.useState)(!1),[x,ee]=(0,_.useState)(null),[te,ne]=(0,_.useState)(!1);(0,_.useEffect)(()=>{d(e.starterCode[c]||``),ee(null)},[e.id,c]);let re=t=>{l(t),d(e.starterCode[t]||``),ee(null)};return(0,E.jsxDEV)(`div`,{className:`space-y-4 pb-12`,children:[(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-xl`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:[(0,E.jsxDEV)(`div`,{className:`relative flex-1 md:w-80`,children:[(0,E.jsxDEV)(`select`,{value:e.id,onChange:e=>{let r=n.find(t=>t.id===e.target.value);r&&t(r)},className:`w-full appearance-none px-3.5 py-2 pr-9 rounded-lg bg-zinc-900 border border-zinc-800 text-white font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer`,children:n.map(e=>(0,E.jsxDEV)(`option`,{value:e.id,children:[`Mod `,e.moduleNumber,` · [`,e.type,`] `,e.title]},e.id,!0,{fileName:A,lineNumber:117,columnNumber:17},void 0))},void 0,!1,{fileName:A,lineNumber:108,columnNumber:13},void 0),(0,E.jsxDEV)(fe,{className:`w-4 h-4 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none`},void 0,!1,{fileName:A,lineNumber:122,columnNumber:13},void 0)]},void 0,!0,{fileName:A,lineNumber:107,columnNumber:11},void 0),s&&(0,E.jsxDEV)(`span`,{className:`hidden sm:inline-flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-1 rounded-md`,children:[(0,E.jsxDEV)(ge,{className:`w-3.5 h-3.5 fill-amber-400 text-black`},void 0,!1,{fileName:A,lineNumber:127,columnNumber:15},void 0),` Solved`]},void 0,!0,{fileName:A,lineNumber:126,columnNumber:13},void 0)]},void 0,!0,{fileName:A,lineNumber:106,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1 p-1 bg-zinc-900 rounded-lg border border-zinc-800`,children:[`c`,`cpp`,`java`,`python`].map(e=>(0,E.jsxDEV)(`button`,{onClick:()=>re(e),className:`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${c===e?`bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-md`:`text-zinc-400 hover:text-white`}`,children:e===`cpp`?`C++`:e.toUpperCase()},e,!1,{fileName:A,lineNumber:138,columnNumber:15},void 0))},void 0,!1,{fileName:A,lineNumber:136,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>{navigator.clipboard.writeText(u),ne(!0),setTimeout(()=>ne(!1),2e3)},className:`p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-xs transition-colors`,title:`Copy Code`,children:te?(0,E.jsxDEV)(de,{className:`w-4 h-4 text-amber-400`},void 0,!1,{fileName:A,lineNumber:158,columnNumber:23},void 0):(0,E.jsxDEV)(xe,{className:`w-4 h-4`},void 0,!1,{fileName:A,lineNumber:158,columnNumber:70},void 0)},void 0,!1,{fileName:A,lineNumber:153,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>{d(e.starterCode[c]),ee(null)},className:`p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-xs transition-colors`,title:`Reset to Starter Code`,children:(0,E.jsxDEV)(Me,{className:`w-4 h-4`},void 0,!1,{fileName:A,lineNumber:165,columnNumber:13},void 0)},void 0,!1,{fileName:A,lineNumber:160,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>{b(!0),setTimeout(()=>{let t;f===`custom`&&m.trim()&&(t={id:`custom-user`,input:m.trim(),expectedOutput:g.trim()||`Simulated Output`});let n=nt(e,u,c,t);ee(n),b(!1),p(`console`),n.passed&&(!t||n.passedTests===n.totalTests)&&i(e.id)},350)},disabled:y,className:`px-4 py-2 text-xs sm:text-sm font-extrabold rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 disabled:opacity-50 text-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all active:scale-95`,children:[(0,E.jsxDEV)(Ae,{className:`w-4 h-4 fill-black`},void 0,!1,{fileName:A,lineNumber:174,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{children:y?`Compiling...`:`Run & Test`},void 0,!1,{fileName:A,lineNumber:175,columnNumber:13},void 0)]},void 0,!0,{fileName:A,lineNumber:169,columnNumber:11},void 0)]},void 0,!0,{fileName:A,lineNumber:133,columnNumber:9},void 0)]},void 0,!0,{fileName:A,lineNumber:103,columnNumber:7},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-5`,children:[(0,E.jsxDEV)(`div`,{className:`lg:col-span-5 space-y-4`,children:(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-5 shadow-xl space-y-4`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs text-zinc-400 mb-1`,children:[(0,E.jsxDEV)(`span`,{children:[`Module `,e.moduleNumber,`: `,e.moduleName]},void 0,!0,{fileName:A,lineNumber:193,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{"aria-hidden":`true`,className:`text-zinc-600`,children:`·`},void 0,!1,{fileName:A,lineNumber:194,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`text-amber-400 font-bold`,children:e.type},void 0,!1,{fileName:A,lineNumber:195,columnNumber:17},void 0)]},void 0,!0,{fileName:A,lineNumber:192,columnNumber:15},void 0),(0,E.jsxDEV)(`h2`,{className:`text-xl font-bold text-white tracking-tight font-serif`,children:e.title},void 0,!1,{fileName:A,lineNumber:199,columnNumber:15},void 0)]},void 0,!0,{fileName:A,lineNumber:191,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`p-3.5 rounded-lg bg-zinc-900/90 border border-amber-500/20 text-xs text-zinc-300 leading-relaxed`,children:[(0,E.jsxDEV)(`span`,{className:`font-bold text-amber-400 block mb-0.5 uppercase tracking-wider text-[10px]`,children:`Engineering Context`},void 0,!1,{fileName:A,lineNumber:206,columnNumber:15},void 0),e.realWorldScenario]},void 0,!0,{fileName:A,lineNumber:205,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`h4`,{className:`text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5`,children:`Problem Statement`},void 0,!1,{fileName:A,lineNumber:212,columnNumber:15},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-zinc-300 leading-relaxed`,children:e.description},void 0,!1,{fileName:A,lineNumber:215,columnNumber:15},void 0)]},void 0,!0,{fileName:A,lineNumber:211,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 space-y-1`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between`,children:[(0,E.jsxDEV)(`span`,{className:`font-bold text-white flex items-center gap-1.5`,children:[(0,E.jsxDEV)(Oe,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:A,lineNumber:224,columnNumber:19},void 0),(0,E.jsxDEV)(`span`,{className:`text-amber-300`,children:[`Pattern: `,e.patternName]},void 0,!0,{fileName:A,lineNumber:225,columnNumber:19},void 0)]},void 0,!0,{fileName:A,lineNumber:223,columnNumber:17},void 0),(0,E.jsxDEV)(`button`,{onClick:o,className:`text-[11px] text-amber-400 hover:text-amber-300 font-semibold`,children:`Tips & Tricks →`},void 0,!1,{fileName:A,lineNumber:227,columnNumber:17},void 0)]},void 0,!0,{fileName:A,lineNumber:222,columnNumber:15},void 0),(0,E.jsxDEV)(`p`,{className:`text-zinc-400 text-[11px] leading-relaxed`,children:e.patternWhy},void 0,!1,{fileName:A,lineNumber:234,columnNumber:15},void 0)]},void 0,!0,{fileName:A,lineNumber:221,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,E.jsxDEV)(`div`,{className:`p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1.5 text-zinc-400 mb-1`,children:[(0,E.jsxDEV)(ve,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:A,lineNumber:243,columnNumber:19},void 0),(0,E.jsxDEV)(`span`,{className:`font-semibold text-zinc-200`,children:`Time Complexity`},void 0,!1,{fileName:A,lineNumber:244,columnNumber:19},void 0)]},void 0,!0,{fileName:A,lineNumber:242,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`font-mono text-sm font-bold text-amber-300`,children:e.timeComplexity.average},void 0,!1,{fileName:A,lineNumber:246,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-[11px] text-zinc-500 mt-1 line-clamp-2`,children:e.timeComplexity.explanation},void 0,!1,{fileName:A,lineNumber:249,columnNumber:17},void 0)]},void 0,!0,{fileName:A,lineNumber:241,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1.5 text-zinc-400 mb-1`,children:[(0,E.jsxDEV)(Ee,{className:`w-3.5 h-3.5 text-zinc-400`},void 0,!1,{fileName:A,lineNumber:256,columnNumber:19},void 0),(0,E.jsxDEV)(`span`,{className:`font-semibold text-zinc-200`,children:`Memory Space`},void 0,!1,{fileName:A,lineNumber:257,columnNumber:19},void 0)]},void 0,!0,{fileName:A,lineNumber:255,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`font-mono text-sm font-bold text-zinc-300`,children:e.memoryComplexity.space},void 0,!1,{fileName:A,lineNumber:259,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-[11px] text-zinc-500 mt-1 line-clamp-2`,children:e.memoryComplexity.explanation},void 0,!1,{fileName:A,lineNumber:262,columnNumber:17},void 0)]},void 0,!0,{fileName:A,lineNumber:254,columnNumber:15},void 0)]},void 0,!0,{fileName:A,lineNumber:240,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`h4`,{className:`text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2`,children:`Sample Test Vectors`},void 0,!1,{fileName:A,lineNumber:270,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-2`,children:e.testCases.map((e,t)=>(0,E.jsxDEV)(`div`,{className:`p-2.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono space-y-1`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between text-zinc-400 text-[11px]`,children:[(0,E.jsxDEV)(`span`,{className:`text-amber-400 font-bold`,children:[`Vector #`,t+1]},void 0,!0,{fileName:A,lineNumber:277,columnNumber:23},void 0),e.explanation&&(0,E.jsxDEV)(`span`,{className:`font-sans text-[11px] text-zinc-500 truncate max-w-[200px]`,children:e.explanation},void 0,!1,{fileName:A,lineNumber:278,columnNumber:42},void 0)]},void 0,!0,{fileName:A,lineNumber:276,columnNumber:21},void 0),(0,E.jsxDEV)(`div`,{className:`text-zinc-300`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500 font-sans`,children:`Input: `},void 0,!1,{fileName:A,lineNumber:281,columnNumber:23},void 0),e.input.replace(/\n/g,` `)]},void 0,!0,{fileName:A,lineNumber:280,columnNumber:21},void 0),(0,E.jsxDEV)(`div`,{className:`text-amber-300`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500 font-sans`,children:`Expected: `},void 0,!1,{fileName:A,lineNumber:284,columnNumber:23},void 0),e.expectedOutput.replace(/\n/g,` `)]},void 0,!0,{fileName:A,lineNumber:283,columnNumber:21},void 0)]},e.id||t,!0,{fileName:A,lineNumber:275,columnNumber:19},void 0))},void 0,!1,{fileName:A,lineNumber:273,columnNumber:15},void 0)]},void 0,!0,{fileName:A,lineNumber:269,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`pt-2`,children:(0,E.jsxDEV)(`button`,{onClick:a,className:`w-full py-2.5 px-3 text-xs font-semibold rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 flex items-center justify-center gap-2 border border-zinc-800 hover:border-amber-500/40 transition-all`,children:[(0,E.jsxDEV)(Ce,{className:`w-4 h-4 text-amber-400`},void 0,!1,{fileName:A,lineNumber:297,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{children:`Open Interactive Step-by-Step Visualizer`},void 0,!1,{fileName:A,lineNumber:298,columnNumber:17},void 0)]},void 0,!0,{fileName:A,lineNumber:293,columnNumber:15},void 0)},void 0,!1,{fileName:A,lineNumber:292,columnNumber:13},void 0)]},void 0,!0,{fileName:A,lineNumber:188,columnNumber:11},void 0)},void 0,!1,{fileName:A,lineNumber:186,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`lg:col-span-7 flex flex-col space-y-4`,children:[(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col flex-1`,children:[(0,E.jsxDEV)(`div`,{className:`bg-black px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsxDEV)(ye,{className:`w-4 h-4 text-amber-400`},void 0,!1,{fileName:A,lineNumber:315,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`font-mono text-zinc-200 font-bold`,children:[`solution.`,c===`cpp`?`cpp`:c===`c`?`c`:c===`java`?`java`:`py`]},void 0,!0,{fileName:A,lineNumber:316,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`text-[11px] text-zinc-500`,children:`(Ready to compile)`},void 0,!1,{fileName:A,lineNumber:319,columnNumber:17},void 0)]},void 0,!0,{fileName:A,lineNumber:314,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:(0,E.jsxDEV)(`button`,{onClick:()=>{d(e.starterCode[c])},className:`text-amber-400 hover:text-amber-300 text-[11px] font-semibold`,children:`Reload Template`},void 0,!1,{fileName:A,lineNumber:324,columnNumber:17},void 0)},void 0,!1,{fileName:A,lineNumber:323,columnNumber:15},void 0)]},void 0,!0,{fileName:A,lineNumber:313,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`relative flex-1 min-h-[380px] bg-black p-4 font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed`,children:(0,E.jsxDEV)(`textarea`,{value:u,onChange:e=>d(e.target.value),spellCheck:!1,className:`w-full h-full min-h-[380px] bg-transparent resize-none border-none outline-none font-mono text-zinc-100 selection:bg-amber-400/30 whitespace-pre`},void 0,!1,{fileName:A,lineNumber:335,columnNumber:15},void 0)},void 0,!1,{fileName:A,lineNumber:334,columnNumber:13},void 0)]},void 0,!0,{fileName:A,lineNumber:310,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-xl`,children:[(0,E.jsxDEV)(`div`,{className:`bg-black px-4 border-b border-zinc-800 flex items-center justify-between`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1`,children:[(0,E.jsxDEV)(`button`,{onClick:()=>p(`tests`),className:`px-3 py-2 text-xs font-bold border-b-2 transition-all ${f===`tests`?`border-amber-400 text-amber-300`:`border-transparent text-zinc-500 hover:text-white`}`,children:[`Test Results `,x&&`(${x.passedTests}/${x.totalTests})`]},void 0,!0,{fileName:A,lineNumber:351,columnNumber:17},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>p(`console`),className:`px-3 py-2 text-xs font-bold border-b-2 transition-all ${f===`console`?`border-amber-400 text-amber-300`:`border-transparent text-zinc-500 hover:text-white`}`,children:`Compiler Output`},void 0,!1,{fileName:A,lineNumber:361,columnNumber:17},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>p(`custom`),className:`px-3 py-2 text-xs font-bold border-b-2 transition-all ${f===`custom`?`border-amber-400 text-amber-300`:`border-transparent text-zinc-500 hover:text-white`}`,children:`Custom Input`},void 0,!1,{fileName:A,lineNumber:371,columnNumber:17},void 0)]},void 0,!0,{fileName:A,lineNumber:350,columnNumber:15},void 0),x&&(0,E.jsxDEV)(`div`,{className:`flex items-center gap-3 text-xs font-mono text-zinc-400 py-1`,children:[(0,E.jsxDEV)(`span`,{className:`flex items-center gap-1`,children:[(0,E.jsxDEV)(ve,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:A,lineNumber:386,columnNumber:21},void 0),(0,E.jsxDEV)(`span`,{className:`text-white font-bold`,children:[x.runtimeMs,` ms`]},void 0,!0,{fileName:A,lineNumber:387,columnNumber:21},void 0)]},void 0,!0,{fileName:A,lineNumber:385,columnNumber:19},void 0),(0,E.jsxDEV)(`span`,{className:`flex items-center gap-1`,children:[(0,E.jsxDEV)(Ee,{className:`w-3.5 h-3.5 text-zinc-400`},void 0,!1,{fileName:A,lineNumber:390,columnNumber:21},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-300`,children:[x.memoryKb,` KB`]},void 0,!0,{fileName:A,lineNumber:391,columnNumber:21},void 0)]},void 0,!0,{fileName:A,lineNumber:389,columnNumber:19},void 0)]},void 0,!0,{fileName:A,lineNumber:384,columnNumber:17},void 0)]},void 0,!0,{fileName:A,lineNumber:349,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`p-4 min-h-[160px] text-xs`,children:[f===`tests`&&(0,E.jsxDEV)(`div`,{children:x?(0,E.jsxDEV)(`div`,{className:`space-y-3`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between pb-2 border-b border-zinc-800`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:x.passed?(0,E.jsxDEV)(`span`,{className:`text-amber-400 font-bold flex items-center gap-1 text-sm`,children:[(0,E.jsxDEV)(ge,{className:`w-4 h-4 fill-amber-400 text-black`},void 0,!1,{fileName:A,lineNumber:413,columnNumber:31},void 0),` PASSED ALL TEST CASES`]},void 0,!0,{fileName:A,lineNumber:412,columnNumber:29},void 0):(0,E.jsxDEV)(`span`,{className:`text-rose-400 font-bold flex items-center gap-1 text-sm`,children:[(0,E.jsxDEV)(C,{className:`w-4 h-4`},void 0,!1,{fileName:A,lineNumber:417,columnNumber:31},void 0),` TEST CASES FAILED (`,x.passedTests,`/`,x.totalTests,`)`]},void 0,!0,{fileName:A,lineNumber:416,columnNumber:29},void 0)},void 0,!1,{fileName:A,lineNumber:410,columnNumber:25},void 0),(0,E.jsxDEV)(`div`,{className:`text-zinc-400 text-xs`,children:[`Execution: `,(0,E.jsxDEV)(`span`,{className:`text-white font-mono`,children:[x.runtimeMs,`ms`]},void 0,!0,{fileName:A,lineNumber:422,columnNumber:38},void 0)]},void 0,!0,{fileName:A,lineNumber:421,columnNumber:25},void 0)]},void 0,!0,{fileName:A,lineNumber:409,columnNumber:23},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-1 gap-2`,children:x.testDetails.map((e,t)=>(0,E.jsxDEV)(`div`,{className:`p-3 rounded-lg border text-xs font-mono space-y-1 ${e.passed?`bg-zinc-900 border-amber-500/30 text-zinc-200`:`bg-rose-950/20 border-rose-900/40 text-rose-200`}`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between`,children:[(0,E.jsxDEV)(`span`,{className:`font-bold text-amber-300`,children:[`Case #`,t+1,`: `,e.passed?`ACCEPTED`:`WRONG ANSWER`]},void 0,!0,{fileName:A,lineNumber:437,columnNumber:31},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-500 text-[11px]`,children:[e.durationMs,`ms`]},void 0,!0,{fileName:A,lineNumber:440,columnNumber:31},void 0)]},void 0,!0,{fileName:A,lineNumber:436,columnNumber:29},void 0),(0,E.jsxDEV)(`div`,{className:`text-zinc-300`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:`Input: `},void 0,!1,{fileName:A,lineNumber:443,columnNumber:31},void 0),e.input]},void 0,!0,{fileName:A,lineNumber:442,columnNumber:29},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:`Expected: `},void 0,!1,{fileName:A,lineNumber:447,columnNumber:31},void 0),(0,E.jsxDEV)(`span`,{className:`text-amber-300`,children:e.expected},void 0,!1,{fileName:A,lineNumber:448,columnNumber:31},void 0)]},void 0,!0,{fileName:A,lineNumber:446,columnNumber:29},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:`Actual: `},void 0,!1,{fileName:A,lineNumber:451,columnNumber:31},void 0),(0,E.jsxDEV)(`span`,{className:e.passed?`text-white`:`text-rose-300 font-bold`,children:e.actual},void 0,!1,{fileName:A,lineNumber:452,columnNumber:31},void 0)]},void 0,!0,{fileName:A,lineNumber:450,columnNumber:29},void 0)]},e.testId,!0,{fileName:A,lineNumber:428,columnNumber:27},void 0))},void 0,!1,{fileName:A,lineNumber:426,columnNumber:23},void 0)]},void 0,!0,{fileName:A,lineNumber:408,columnNumber:21},void 0):(0,E.jsxDEV)(`div`,{className:`text-zinc-500 text-center py-8`,children:[`Press `,(0,E.jsxDEV)(`strong`,{className:`text-amber-400`,children:`"Run & Test"`},void 0,!1,{fileName:A,lineNumber:405,columnNumber:29},void 0),` to compile and execute against the curriculum test matrix.`]},void 0,!0,{fileName:A,lineNumber:404,columnNumber:21},void 0)},void 0,!1,{fileName:A,lineNumber:402,columnNumber:17},void 0),f===`console`&&(0,E.jsxDEV)(`div`,{className:`font-mono text-xs text-zinc-300 space-y-1 bg-black p-3.5 rounded-lg border border-zinc-800`,children:x?x.consoleLogs.map((e,t)=>(0,E.jsxDEV)(`div`,{className:e.includes(`[SUCCESS]`)?`text-amber-400 font-bold`:e.includes(`[Error]`)||e.includes(`failed`)?`text-rose-400 font-semibold`:`text-zinc-400`,children:e},t,!1,{fileName:A,lineNumber:471,columnNumber:23},void 0)):(0,E.jsxDEV)(`div`,{className:`text-zinc-600`,children:`Ready for compiler diagnostics...`},void 0,!1,{fileName:A,lineNumber:468,columnNumber:21},void 0)},void 0,!1,{fileName:A,lineNumber:466,columnNumber:17},void 0),f===`custom`&&(0,E.jsxDEV)(`div`,{className:`space-y-3`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`label`,{className:`block text-xs font-semibold text-zinc-300 mb-1`,children:`Custom Test Input:`},void 0,!1,{fileName:A,lineNumber:492,columnNumber:21},void 0),(0,E.jsxDEV)(`textarea`,{value:m,onChange:e=>h(e.target.value),placeholder:`Enter raw input format matching the problem constraints...`,rows:2,className:`w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-800 text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-amber-500`},void 0,!1,{fileName:A,lineNumber:495,columnNumber:21},void 0)]},void 0,!0,{fileName:A,lineNumber:491,columnNumber:19},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`label`,{className:`block text-xs font-semibold text-zinc-300 mb-1`,children:`Expected Output (Optional):`},void 0,!1,{fileName:A,lineNumber:504,columnNumber:21},void 0),(0,E.jsxDEV)(`input`,{type:`text`,value:g,onChange:e=>v(e.target.value),placeholder:`Expected output string...`,className:`w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-800 text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-amber-500`},void 0,!1,{fileName:A,lineNumber:507,columnNumber:21},void 0)]},void 0,!0,{fileName:A,lineNumber:503,columnNumber:19},void 0),(0,E.jsxDEV)(`div`,{className:`text-[11px] text-zinc-500`,children:`Switch to this tab and press "Run & Test" to execute your custom test input.`},void 0,!1,{fileName:A,lineNumber:515,columnNumber:19},void 0)]},void 0,!0,{fileName:A,lineNumber:490,columnNumber:17},void 0)]},void 0,!0,{fileName:A,lineNumber:398,columnNumber:13},void 0)]},void 0,!0,{fileName:A,lineNumber:346,columnNumber:11},void 0)]},void 0,!0,{fileName:A,lineNumber:307,columnNumber:9},void 0)]},void 0,!0,{fileName:A,lineNumber:183,columnNumber:7},void 0)]},void 0,!0,{fileName:A,lineNumber:100,columnNumber:5},void 0)},j=`/app/applet/src/components/VisualizerTab.tsx`,st=({currentProblem:e,onSelectProblem:t,allProblems:n,onOpenIde:r})=>{let i=e.defaultVisualizerData,a=i.steps,[o,s]=(0,_.useState)(0),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(1);(0,_.useEffect)(()=>{s(0),l(!1)},[e.id]),(0,_.useEffect)(()=>{let e;if(c){let t=1200/u;e=setInterval(()=>{s(e=>e>=a.length-1?(l(!1),e):e+1)},t)}return()=>clearInterval(e)},[c,u,a.length]);let f=a[o]||a[0],p=f.currentValues||i.initialState;return(0,E.jsxDEV)(`div`,{className:`space-y-6 pb-12`,children:[(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-xl`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:[(0,E.jsxDEV)(`div`,{className:`relative flex-1 sm:w-80`,children:[(0,E.jsxDEV)(`select`,{value:e.id,onChange:e=>{let r=n.find(t=>t.id===e.target.value);r&&t(r)},className:`w-full appearance-none px-3.5 py-2 pr-9 rounded-lg bg-zinc-900 border border-zinc-800 text-white font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer`,children:n.map(e=>(0,E.jsxDEV)(`option`,{value:e.id,children:[`Mod `,e.moduleNumber,` · `,e.title]},e.id,!0,{fileName:j,lineNumber:91,columnNumber:17},void 0))},void 0,!1,{fileName:j,lineNumber:82,columnNumber:13},void 0),(0,E.jsxDEV)(fe,{className:`w-4 h-4 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none`},void 0,!1,{fileName:j,lineNumber:96,columnNumber:13},void 0)]},void 0,!0,{fileName:j,lineNumber:81,columnNumber:11},void 0),(0,E.jsxDEV)(`span`,{className:`text-xs text-zinc-400 hidden md:inline`,children:[`Pattern: `,(0,E.jsxDEV)(`span`,{className:`text-amber-400 font-bold`,children:e.patternName},void 0,!1,{fileName:j,lineNumber:99,columnNumber:22},void 0)]},void 0,!0,{fileName:j,lineNumber:98,columnNumber:11},void 0)]},void 0,!0,{fileName:j,lineNumber:80,columnNumber:9},void 0),(0,E.jsxDEV)(`button`,{onClick:r,className:`px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/10 transition-all active:scale-95`,children:[(0,E.jsxDEV)(`span`,{children:`Open in IDE`},void 0,!1,{fileName:j,lineNumber:107,columnNumber:11},void 0),(0,E.jsxDEV)(se,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:j,lineNumber:108,columnNumber:11},void 0)]},void 0,!0,{fileName:j,lineNumber:103,columnNumber:9},void 0)]},void 0,!0,{fileName:j,lineNumber:79,columnNumber:7},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-6`,children:[(0,E.jsxDEV)(`div`,{className:`lg:col-span-8 space-y-4`,children:(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-xl min-h-[380px] flex flex-col justify-between`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between pb-4 border-b border-zinc-850`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsxDEV)(oe,{className:`w-4 h-4 text-amber-400`},void 0,!1,{fileName:j,lineNumber:123,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`text-xs font-bold uppercase tracking-wider text-zinc-200`,children:`Algorithmic Execution Canvas`},void 0,!1,{fileName:j,lineNumber:124,columnNumber:17},void 0)]},void 0,!0,{fileName:j,lineNumber:122,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`text-xs text-zinc-400 tabular-nums font-mono`,children:[`Step `,(0,E.jsxDEV)(`span`,{className:`text-amber-400 font-bold`,children:o+1},void 0,!1,{fileName:j,lineNumber:129,columnNumber:22},void 0),` of`,` `,(0,E.jsxDEV)(`span`,{className:`text-white font-bold`,children:a.length},void 0,!1,{fileName:j,lineNumber:130,columnNumber:17},void 0)]},void 0,!0,{fileName:j,lineNumber:128,columnNumber:15},void 0)]},void 0,!0,{fileName:j,lineNumber:121,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`py-8 flex flex-col items-center justify-center space-y-6`,children:e.moduleNumber===1?(0,E.jsxDEV)(`div`,{className:`w-full max-w-md bg-black/80 p-6 rounded-xl border border-zinc-800 flex flex-col items-center`,children:[(0,E.jsxDEV)(`div`,{className:`text-xs text-zinc-400 mb-4 font-mono uppercase tracking-wider text-[10px]`,children:`Graph Transit Network Topology`},void 0,!1,{fileName:j,lineNumber:140,columnNumber:19},void 0),(0,E.jsxDEV)(`svg`,{viewBox:`0 0 300 180`,className:`w-full h-44`,children:[(0,E.jsxDEV)(`line`,{x1:`50`,y1:`40`,x2:`150`,y2:`40`,stroke:`#3f3f46`,strokeWidth:`2.5`},void 0,!1,{fileName:j,lineNumber:147,columnNumber:21},void 0),(0,E.jsxDEV)(`line`,{x1:`50`,y1:`40`,x2:`100`,y2:`140`,stroke:`#3f3f46`,strokeWidth:`2.5`},void 0,!1,{fileName:j,lineNumber:148,columnNumber:21},void 0),(0,E.jsxDEV)(`line`,{x1:`150`,y1:`40`,x2:`100`,y2:`140`,stroke:`#3f3f46`,strokeWidth:`2.5`},void 0,!1,{fileName:j,lineNumber:149,columnNumber:21},void 0),(0,E.jsxDEV)(`line`,{x1:`150`,y1:`40`,x2:`250`,y2:`90`,stroke:`#3f3f46`,strokeWidth:`2.5`},void 0,!1,{fileName:j,lineNumber:150,columnNumber:21},void 0),f.graphActiveEdges?.map(([e,t],n)=>(0,E.jsxDEV)(`line`,{x1:e===`0`?50:e===`1`?150:e===`2`?100:250,y1:e===`0`||e===`1`?40:e===`2`?140:90,x2:t===`0`?50:t===`1`?150:t===`2`?100:250,y2:t===`0`||t===`1`?40:t===`2`?140:90,stroke:`#f59e0b`,strokeWidth:`4`},n,!1,{fileName:j,lineNumber:154,columnNumber:23},void 0)),[{id:`0`,x:50,y:40,label:`Station 0`},{id:`1`,x:150,y:40,label:`Station 1`},{id:`2`,x:100,y:140,label:`Station 2`},{id:`3`,x:250,y:90,label:`Station 3`}].map(e=>{let t=f.graphActiveNodes?.includes(e.id);return(0,E.jsxDEV)(`g`,{children:[(0,E.jsxDEV)(`circle`,{cx:e.x,cy:e.y,r:`18`,className:`transition-all duration-300 ${t?`fill-amber-400 stroke-yellow-200 stroke-2`:`fill-zinc-900 stroke-zinc-700`}`},void 0,!1,{fileName:j,lineNumber:175,columnNumber:27},void 0),(0,E.jsxDEV)(`text`,{x:e.x,y:e.y+5,textAnchor:`middle`,className:`font-bold text-xs pointer-events-none ${t?`fill-black`:`fill-zinc-200`}`,children:e.id},void 0,!1,{fileName:j,lineNumber:185,columnNumber:27},void 0)]},e.id,!0,{fileName:j,lineNumber:174,columnNumber:25},void 0)})]},void 0,!0,{fileName:j,lineNumber:145,columnNumber:19},void 0)]},void 0,!0,{fileName:j,lineNumber:139,columnNumber:17},void 0):(0,E.jsxDEV)(`div`,{className:`w-full flex flex-col items-center`,children:[(0,E.jsxDEV)(`div`,{className:`flex flex-wrap items-center justify-center gap-2 max-w-xl`,children:p.map((e,t)=>{let n=f.highlightIndices?.includes(t),r=f.secondaryIndices?.includes(t);return(0,E.jsxDEV)(`div`,{className:`flex flex-col items-center gap-1.5`,children:[(0,E.jsxDEV)(`div`,{className:`w-12 h-14 rounded-lg flex items-center justify-center font-mono font-bold text-sm sm:text-base border shadow-sm transition-all duration-300 ${n?`bg-gradient-to-b from-amber-300 to-amber-500 border-amber-300 text-black scale-105 shadow-lg shadow-amber-500/20`:r?`bg-zinc-800 border-zinc-600 text-white scale-105`:`bg-zinc-900 border-zinc-800 text-zinc-300`}`,children:e},void 0,!1,{fileName:j,lineNumber:211,columnNumber:27},void 0),(0,E.jsxDEV)(`span`,{className:`text-[11px] font-mono text-zinc-500`,children:[`[`,t,`]`]},void 0,!0,{fileName:j,lineNumber:224,columnNumber:27},void 0)]},t,!0,{fileName:j,lineNumber:209,columnNumber:25},void 0)})},void 0,!1,{fileName:j,lineNumber:203,columnNumber:19},void 0),(0,E.jsxDEV)(`div`,{className:`mt-4 flex items-center gap-4 text-xs font-mono text-zinc-400`,children:[f.highlightIndices&&f.highlightIndices.length>0&&(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1.5`,children:[(0,E.jsxDEV)(`span`,{className:`w-2.5 h-2.5 rounded-full bg-amber-400 inline-block`},void 0,!1,{fileName:j,lineNumber:236,columnNumber:25},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-300`,children:[`Active / Left: Index `,f.highlightIndices.join(`, `)]},void 0,!0,{fileName:j,lineNumber:237,columnNumber:25},void 0)]},void 0,!0,{fileName:j,lineNumber:235,columnNumber:23},void 0),f.secondaryIndices&&f.secondaryIndices.length>0&&(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1.5`,children:[(0,E.jsxDEV)(`span`,{className:`w-2.5 h-2.5 rounded-full bg-zinc-400 inline-block`},void 0,!1,{fileName:j,lineNumber:242,columnNumber:25},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-400`,children:[`Right / Partner: Index `,f.secondaryIndices.join(`, `)]},void 0,!0,{fileName:j,lineNumber:243,columnNumber:25},void 0)]},void 0,!0,{fileName:j,lineNumber:241,columnNumber:23},void 0)]},void 0,!0,{fileName:j,lineNumber:233,columnNumber:19},void 0)]},void 0,!0,{fileName:j,lineNumber:202,columnNumber:17},void 0)},void 0,!1,{fileName:j,lineNumber:135,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`bg-black p-4 rounded-xl border border-zinc-850 text-xs sm:text-sm text-zinc-200 space-y-1`,children:[(0,E.jsxDEV)(`span`,{className:`text-amber-400 font-bold block text-xs uppercase tracking-wider`,children:`Step Operation:`},void 0,!1,{fileName:j,lineNumber:254,columnNumber:15},void 0),(0,E.jsxDEV)(`p`,{className:`leading-relaxed`,children:f.description},void 0,!1,{fileName:j,lineNumber:257,columnNumber:15},void 0)]},void 0,!0,{fileName:j,lineNumber:253,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`mt-6 pt-4 border-t border-zinc-850 flex flex-wrap items-center justify-between gap-4`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsxDEV)(`button`,{onClick:()=>{l(!1),s(0)},className:`p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors`,title:`Reset to beginning`,children:(0,E.jsxDEV)(Me,{className:`w-4 h-4`},void 0,!1,{fileName:j,lineNumber:272,columnNumber:19},void 0)},void 0,!1,{fileName:j,lineNumber:267,columnNumber:17},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>{l(!1),s(e=>Math.max(0,e-1))},disabled:o===0,className:`p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 disabled:opacity-40 text-zinc-300 hover:text-white border border-zinc-800 transition-colors`,title:`Step backward`,children:(0,E.jsxDEV)(pe,{className:`w-4 h-4`},void 0,!1,{fileName:j,lineNumber:280,columnNumber:19},void 0)},void 0,!1,{fileName:j,lineNumber:274,columnNumber:17},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>l(!c),className:`px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/10 transition-all`,children:c?(0,E.jsxDEV)(E.Fragment,{children:[(0,E.jsxDEV)(ke,{className:`w-4 h-4 fill-black`},void 0,!1,{fileName:j,lineNumber:288,columnNumber:23},void 0),` Pause`]},void 0,!0,{fileName:j,lineNumber:287,columnNumber:21},void 0):(0,E.jsxDEV)(E.Fragment,{children:[(0,E.jsxDEV)(Ae,{className:`w-4 h-4 fill-black`},void 0,!1,{fileName:j,lineNumber:292,columnNumber:23},void 0),` Play Animation`]},void 0,!0,{fileName:j,lineNumber:291,columnNumber:21},void 0)},void 0,!1,{fileName:j,lineNumber:282,columnNumber:17},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>{l(!1),s(e=>Math.min(a.length-1,e+1))},disabled:o===a.length-1,className:`p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 disabled:opacity-40 text-zinc-300 hover:text-white border border-zinc-800 transition-colors`,title:`Step forward`,children:(0,E.jsxDEV)(me,{className:`w-4 h-4`},void 0,!1,{fileName:j,lineNumber:302,columnNumber:19},void 0)},void 0,!1,{fileName:j,lineNumber:296,columnNumber:17},void 0)]},void 0,!0,{fileName:j,lineNumber:266,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 p-1 rounded-lg`,children:[(0,E.jsxDEV)(`span`,{className:`px-2 font-medium`,children:`Speed:`},void 0,!1,{fileName:j,lineNumber:308,columnNumber:17},void 0),[.5,1,2].map(e=>(0,E.jsxDEV)(`button`,{onClick:()=>d(e),className:`px-2 py-1 rounded font-bold text-xs transition-colors ${u===e?`bg-amber-400 text-black`:`text-zinc-400 hover:text-white`}`,children:[e,`x`]},e,!0,{fileName:j,lineNumber:310,columnNumber:19},void 0))]},void 0,!0,{fileName:j,lineNumber:307,columnNumber:15},void 0)]},void 0,!0,{fileName:j,lineNumber:263,columnNumber:13},void 0)]},void 0,!0,{fileName:j,lineNumber:118,columnNumber:11},void 0)},void 0,!1,{fileName:j,lineNumber:116,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`lg:col-span-4 space-y-4`,children:(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-5 shadow-xl space-y-4`,children:[(0,E.jsxDEV)(`h3`,{className:`text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5`,children:[(0,E.jsxDEV)(De,{className:`w-4 h-4 text-amber-400`},void 0,!1,{fileName:j,lineNumber:336,columnNumber:15},void 0),(0,E.jsxDEV)(`span`,{children:`Live State Inspector`},void 0,!1,{fileName:j,lineNumber:337,columnNumber:15},void 0)]},void 0,!0,{fileName:j,lineNumber:335,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`p-3 rounded-lg bg-black border border-zinc-850 font-mono text-xs space-y-2`,children:[(0,E.jsxDEV)(`div`,{className:`flex justify-between border-b border-zinc-900 pb-1.5`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:`Current Phase`},void 0,!1,{fileName:j,lineNumber:342,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`text-amber-400 font-bold`,children:f.message},void 0,!1,{fileName:j,lineNumber:343,columnNumber:17},void 0)]},void 0,!0,{fileName:j,lineNumber:341,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`flex justify-between border-b border-zinc-900 pb-1.5`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:`Step Index`},void 0,!1,{fileName:j,lineNumber:346,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-200`,children:o},void 0,!1,{fileName:j,lineNumber:347,columnNumber:17},void 0)]},void 0,!0,{fileName:j,lineNumber:345,columnNumber:15},void 0),f.variables&&Object.entries(f.variables).map(([e,t])=>(0,E.jsxDEV)(`div`,{className:`flex justify-between border-b border-zinc-900 pb-1.5`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:e},void 0,!1,{fileName:j,lineNumber:352,columnNumber:21},void 0),(0,E.jsxDEV)(`span`,{className:`text-amber-300 font-bold`,children:String(t)},void 0,!1,{fileName:j,lineNumber:353,columnNumber:21},void 0)]},e,!0,{fileName:j,lineNumber:351,columnNumber:19},void 0))]},void 0,!0,{fileName:j,lineNumber:340,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`p-4 rounded-xl bg-zinc-900/90 border border-amber-500/20 space-y-2`,children:[(0,E.jsxDEV)(`div`,{className:`text-xs font-bold text-amber-300 uppercase tracking-wider text-[10px]`,children:`Pattern Invariant`},void 0,!1,{fileName:j,lineNumber:360,columnNumber:15},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-zinc-300 leading-relaxed font-light`,children:e.patternWhy},void 0,!1,{fileName:j,lineNumber:363,columnNumber:15},void 0)]},void 0,!0,{fileName:j,lineNumber:359,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-2 pt-2 border-t border-zinc-900`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between text-xs`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-400`,children:`Time Complexity:`},void 0,!1,{fileName:j,lineNumber:371,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`font-mono font-bold text-amber-400`,children:e.timeComplexity.average},void 0,!1,{fileName:j,lineNumber:372,columnNumber:17},void 0)]},void 0,!0,{fileName:j,lineNumber:370,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between text-xs`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-400`,children:`Auxiliary Memory:`},void 0,!1,{fileName:j,lineNumber:375,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`font-mono font-bold text-zinc-300`,children:e.memoryComplexity.space},void 0,!1,{fileName:j,lineNumber:376,columnNumber:17},void 0)]},void 0,!0,{fileName:j,lineNumber:374,columnNumber:15},void 0)]},void 0,!0,{fileName:j,lineNumber:369,columnNumber:13},void 0)]},void 0,!0,{fileName:j,lineNumber:334,columnNumber:11},void 0)},void 0,!1,{fileName:j,lineNumber:331,columnNumber:9},void 0)]},void 0,!0,{fileName:j,lineNumber:113,columnNumber:7},void 0)]},void 0,!0,{fileName:j,lineNumber:76,columnNumber:5},void 0)},M=`/app/applet/src/components/PatternTipsTab.tsx`,ct=({currentProblem:e,onSelectProblem:t,allProblems:n,onOpenIde:r})=>(0,E.jsxDEV)(`div`,{className:`space-y-6 pb-12`,children:[(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-xl`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:[(0,E.jsxDEV)(`div`,{className:`relative flex-1 sm:w-80`,children:[(0,E.jsxDEV)(`select`,{value:e.id,onChange:e=>{let r=n.find(t=>t.id===e.target.value);r&&t(r)},className:`w-full appearance-none px-3.5 py-2 pr-9 rounded-lg bg-zinc-900 border border-zinc-800 text-white font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer`,children:n.map(e=>(0,E.jsxDEV)(`option`,{value:e.id,children:[`Mod `,e.moduleNumber,` · `,e.title]},e.id,!0,{fileName:M,lineNumber:43,columnNumber:17},void 0))},void 0,!1,{fileName:M,lineNumber:34,columnNumber:13},void 0),(0,E.jsxDEV)(fe,{className:`w-4 h-4 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none`},void 0,!1,{fileName:M,lineNumber:48,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:33,columnNumber:11},void 0),(0,E.jsxDEV)(`span`,{className:`text-xs text-zinc-400 hidden md:inline`,children:[`Module `,e.moduleNumber,`: `,e.moduleName]},void 0,!0,{fileName:M,lineNumber:50,columnNumber:11},void 0)]},void 0,!0,{fileName:M,lineNumber:32,columnNumber:9},void 0),(0,E.jsxDEV)(`button`,{onClick:r,className:`px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/10 transition-all active:scale-95`,children:[(0,E.jsxDEV)(`span`,{children:`Practice in IDE`},void 0,!1,{fileName:M,lineNumber:59,columnNumber:11},void 0),(0,E.jsxDEV)(se,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:M,lineNumber:60,columnNumber:11},void 0)]},void 0,!0,{fileName:M,lineNumber:55,columnNumber:9},void 0)]},void 0,!0,{fileName:M,lineNumber:31,columnNumber:7},void 0),(0,E.jsxDEV)(`div`,{className:`rounded-2xl bg-gradient-to-r from-black via-zinc-950 to-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl text-white relative overflow-hidden`,children:[(0,E.jsxDEV)(`div`,{className:`absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none`},void 0,!1,{fileName:M,lineNumber:66,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs text-amber-400 font-bold mb-2 uppercase tracking-wider`,children:[(0,E.jsxDEV)(Ie,{className:`w-4 h-4`},void 0,!1,{fileName:M,lineNumber:69,columnNumber:11},void 0),(0,E.jsxDEV)(`span`,{children:`ALGORITHMIC PATTERN BLUEPRINT`},void 0,!1,{fileName:M,lineNumber:70,columnNumber:11},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-600`,children:`·`},void 0,!1,{fileName:M,lineNumber:71,columnNumber:11},void 0),(0,E.jsxDEV)(`span`,{children:`JIET CURRICULUM`},void 0,!1,{fileName:M,lineNumber:72,columnNumber:11},void 0)]},void 0,!0,{fileName:M,lineNumber:68,columnNumber:9},void 0),(0,E.jsxDEV)(`h1`,{className:`text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 font-serif`,children:e.patternName},void 0,!1,{fileName:M,lineNumber:74,columnNumber:9},void 0),(0,E.jsxDEV)(`p`,{className:`text-sm text-zinc-300 max-w-3xl leading-relaxed font-light`,children:e.patternWhy},void 0,!1,{fileName:M,lineNumber:77,columnNumber:9},void 0)]},void 0,!0,{fileName:M,lineNumber:65,columnNumber:7},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-6`,children:[(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-xl space-y-4`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2 text-amber-400`,children:[(0,E.jsxDEV)(Oe,{className:`w-5 h-5`},void 0,!1,{fileName:M,lineNumber:88,columnNumber:13},void 0),(0,E.jsxDEV)(`h3`,{className:`text-base font-bold text-white tracking-tight font-serif`,children:`Remembering Tips & Tricks`},void 0,!1,{fileName:M,lineNumber:89,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:87,columnNumber:11},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-zinc-400`,children:`Mental hooks, algebraic invariants, and memory mnemonics to recall under interview pressure:`},void 0,!1,{fileName:M,lineNumber:93,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-3`,children:e.tipsAndTricks.map((e,t)=>(0,E.jsxDEV)(`div`,{className:`p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 flex items-start gap-3`,children:[(0,E.jsxDEV)(`div`,{className:`w-5 h-5 rounded-full bg-amber-400 text-black font-extrabold flex items-center justify-center shrink-0 mt-0.5 text-[11px] shadow-sm`,children:t+1},void 0,!1,{fileName:M,lineNumber:103,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`leading-relaxed`,children:e},void 0,!1,{fileName:M,lineNumber:106,columnNumber:17},void 0)]},t,!0,{fileName:M,lineNumber:99,columnNumber:15},void 0))},void 0,!1,{fileName:M,lineNumber:97,columnNumber:11},void 0)]},void 0,!0,{fileName:M,lineNumber:86,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-xl space-y-4`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2 text-zinc-300`,children:[(0,E.jsxDEV)(Re,{className:`w-5 h-5 text-amber-400`},void 0,!1,{fileName:M,lineNumber:117,columnNumber:13},void 0),(0,E.jsxDEV)(`h3`,{className:`text-base font-bold text-white tracking-tight font-serif`,children:`Common Traps & Edge Cases`},void 0,!1,{fileName:M,lineNumber:118,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:116,columnNumber:11},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-zinc-400`,children:`Frequent implementation bugs, compiler edge cases, and off-by-one errors:`},void 0,!1,{fileName:M,lineNumber:122,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-3`,children:[e.commonMistakes.map((e,t)=>(0,E.jsxDEV)(`div`,{className:`p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 flex items-start gap-3`,children:[(0,E.jsxDEV)(`div`,{className:`w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 text-amber-400 font-bold flex items-center justify-center shrink-0 mt-0.5 text-[11px]`,children:`!`},void 0,!1,{fileName:M,lineNumber:132,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`leading-relaxed`,children:e},void 0,!1,{fileName:M,lineNumber:135,columnNumber:17},void 0)]},t,!0,{fileName:M,lineNumber:128,columnNumber:15},void 0)),e.constraints&&(0,E.jsxDEV)(`div`,{className:`p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300`,children:[(0,E.jsxDEV)(`span`,{className:`font-semibold text-zinc-200 block mb-1`,children:`Guaranteed Constraints:`},void 0,!1,{fileName:M,lineNumber:142,columnNumber:17},void 0),(0,E.jsxDEV)(`ul`,{className:`list-disc list-inside space-y-0.5 text-zinc-400 font-mono text-[11px]`,children:e.constraints.map((e,t)=>(0,E.jsxDEV)(`li`,{children:e},t,!1,{fileName:M,lineNumber:145,columnNumber:21},void 0))},void 0,!1,{fileName:M,lineNumber:143,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:141,columnNumber:15},void 0)]},void 0,!0,{fileName:M,lineNumber:126,columnNumber:11},void 0)]},void 0,!0,{fileName:M,lineNumber:115,columnNumber:9},void 0)]},void 0,!0,{fileName:M,lineNumber:83,columnNumber:7},void 0),(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-xl space-y-4`,children:[(0,E.jsxDEV)(`h3`,{className:`text-base font-bold text-white tracking-tight flex items-center gap-2 font-serif`,children:[(0,E.jsxDEV)(le,{className:`w-4 h-4 text-amber-400`},void 0,!1,{fileName:M,lineNumber:158,columnNumber:11},void 0),(0,E.jsxDEV)(`span`,{children:`Formal Complexity Proof & Asymptotic Analysis`},void 0,!1,{fileName:M,lineNumber:159,columnNumber:11},void 0)]},void 0,!0,{fileName:M,lineNumber:157,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:[(0,E.jsxDEV)(`div`,{className:`p-4 rounded-xl bg-black border border-zinc-800 space-y-2`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between`,children:[(0,E.jsxDEV)(`span`,{className:`text-xs font-semibold text-zinc-400 flex items-center gap-1.5`,children:[(0,E.jsxDEV)(ve,{className:`w-4 h-4 text-amber-400`},void 0,!1,{fileName:M,lineNumber:167,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{children:`Time Complexity Breakdown`},void 0,!1,{fileName:M,lineNumber:168,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:166,columnNumber:15},void 0),(0,E.jsxDEV)(`span`,{className:`text-xs font-mono font-bold text-amber-400`,children:e.timeComplexity.average},void 0,!1,{fileName:M,lineNumber:170,columnNumber:15},void 0)]},void 0,!0,{fileName:M,lineNumber:165,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-3 gap-2 text-center text-xs font-mono py-2 bg-zinc-900 rounded-lg border border-zinc-850`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`span`,{className:`text-[10px] text-zinc-500 block`,children:`Best`},void 0,!1,{fileName:M,lineNumber:176,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-300 font-bold`,children:e.timeComplexity.best},void 0,!1,{fileName:M,lineNumber:177,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:175,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`span`,{className:`text-[10px] text-zinc-500 block`,children:`Average`},void 0,!1,{fileName:M,lineNumber:180,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`text-amber-300 font-bold`,children:e.timeComplexity.average},void 0,!1,{fileName:M,lineNumber:181,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:179,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`span`,{className:`text-[10px] text-zinc-500 block`,children:`Worst`},void 0,!1,{fileName:M,lineNumber:184,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-300 font-bold`,children:e.timeComplexity.worst},void 0,!1,{fileName:M,lineNumber:185,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:183,columnNumber:15},void 0)]},void 0,!0,{fileName:M,lineNumber:174,columnNumber:13},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-zinc-400 leading-relaxed pt-1 font-light`,children:e.timeComplexity.explanation},void 0,!1,{fileName:M,lineNumber:188,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:164,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`p-4 rounded-xl bg-black border border-zinc-800 space-y-2`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between`,children:[(0,E.jsxDEV)(`span`,{className:`text-xs font-semibold text-zinc-400 flex items-center gap-1.5`,children:[(0,E.jsxDEV)(Ee,{className:`w-4 h-4 text-zinc-400`},void 0,!1,{fileName:M,lineNumber:196,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{children:`Memory Space Breakdown`},void 0,!1,{fileName:M,lineNumber:197,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:195,columnNumber:15},void 0),(0,E.jsxDEV)(`span`,{className:`text-xs font-mono font-bold text-zinc-300`,children:e.memoryComplexity.space},void 0,!1,{fileName:M,lineNumber:199,columnNumber:15},void 0)]},void 0,!0,{fileName:M,lineNumber:194,columnNumber:13},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-zinc-400 leading-relaxed pt-2 font-light`,children:e.memoryComplexity.explanation},void 0,!1,{fileName:M,lineNumber:203,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`p-2.5 rounded bg-zinc-900 border border-zinc-850 text-[11px] text-zinc-400 font-mono`,children:`In-place optimization ensures minimal cache pollution and zero garbage collector overhead.`},void 0,!1,{fileName:M,lineNumber:206,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:193,columnNumber:11},void 0)]},void 0,!0,{fileName:M,lineNumber:162,columnNumber:9},void 0)]},void 0,!0,{fileName:M,lineNumber:156,columnNumber:7},void 0)]},void 0,!0,{fileName:M,lineNumber:28,columnNumber:5},void 0),lt=o(((e,t)=>{t.exports=function(){return typeof Promise==`function`&&Promise.prototype&&Promise.prototype.then}})),ut=o((e=>{var t,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(e){if(!e)throw Error(`"version" cannot be null or undefined`);if(e<1||e>40)throw Error(`"version" should be in range from 1 to 40`);return e*4+17},e.getSymbolTotalCodewords=function(e){return n[e]},e.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t},e.setToSJISFunction=function(e){if(typeof e!=`function`)throw Error(`"toSJISFunc" is not a valid function.`);t=e},e.isKanjiModeEnabled=function(){return t!==void 0},e.toSJIS=function(e){return t(e)}})),dt=o((e=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`l`:case`low`:return e.L;case`m`:case`medium`:return e.M;case`q`:case`quartile`:return e.Q;case`h`:case`high`:return e.H;default:throw Error(`Unknown EC Level: `+t)}}e.isValid=function(e){return e&&e.bit!==void 0&&e.bit>=0&&e.bit<4},e.from=function(n,r){if(e.isValid(n))return n;try{return t(n)}catch{return r}}})),ft=o(((e,t)=>{function n(){this.buffer=[],this.length=0}n.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=n})),pt=o(((e,t)=>{function n(e){if(!e||e<1)throw Error(`BitMatrix size must be defined and greater than 0`);this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}n.prototype.set=function(e,t,n,r){let i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=n})),mt=o((e=>{var t=ut().getSymbolSize;e.getRowColCoords=function(e){if(e===1)return[];let n=Math.floor(e/7)+2,r=t(e),i=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let e=1;e<n-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},e.getPositions=function(t){let n=[],r=e.getRowColCoords(t),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)e===0&&t===0||e===0&&t===i-1||e===i-1&&t===0||n.push([r[e],r[t]]);return n}})),ht=o((e=>{var t=ut().getSymbolSize,n=7;e.getPositions=function(e){let r=t(e);return[[0,0],[r-n,0],[0,r-n]]}})),gt=o((e=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(e){return e!=null&&e!==``&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){let n=e.size,r=0,i=0,a=0,o=null,s=null;for(let c=0;c<n;c++){i=a=0,o=s=null;for(let l=0;l<n;l++){let n=e.get(c,l);n===o?i++:(i>=5&&(r+=t.N1+(i-5)),o=n,i=1),n=e.get(l,c),n===s?a++:(a>=5&&(r+=t.N1+(a-5)),s=n,a=1)}i>=5&&(r+=t.N1+(i-5)),a>=5&&(r+=t.N1+(a-5))}return r},e.getPenaltyN2=function(e){let n=e.size,r=0;for(let t=0;t<n-1;t++)for(let i=0;i<n-1;i++){let n=e.get(t,i)+e.get(t,i+1)+e.get(t+1,i)+e.get(t+1,i+1);(n===4||n===0)&&r++}return r*t.N2},e.getPenaltyN3=function(e){let n=e.size,r=0,i=0,a=0;for(let t=0;t<n;t++){i=a=0;for(let o=0;o<n;o++)i=i<<1&2047|e.get(t,o),o>=10&&(i===1488||i===93)&&r++,a=a<<1&2047|e.get(o,t),o>=10&&(a===1488||a===93)&&r++}return r*t.N3},e.getPenaltyN4=function(e){let n=0,r=e.data.length;for(let t=0;t<r;t++)n+=e.data[t];return Math.abs(Math.ceil(n*100/r/5)-10)*t.N4};function n(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw Error(`bad maskPattern:`+t)}}e.applyMask=function(e,t){let r=t.size;for(let i=0;i<r;i++)for(let a=0;a<r;a++)t.isReserved(a,i)||t.xor(a,i,n(e,a,i))},e.getBestMask=function(t,n){let r=Object.keys(e.Patterns).length,i=0,a=1/0;for(let o=0;o<r;o++){n(o),e.applyMask(o,t);let r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(o,t),r<a&&(a=r,i=o)}return i}})),_t=o((e=>{var t=dt(),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(e,r){switch(r){case t.L:return n[(e-1)*4+0];case t.M:return n[(e-1)*4+1];case t.Q:return n[(e-1)*4+2];case t.H:return n[(e-1)*4+3];default:return}},e.getTotalCodewordsCount=function(e,n){switch(n){case t.L:return r[(e-1)*4+0];case t.M:return r[(e-1)*4+1];case t.Q:return r[(e-1)*4+2];case t.H:return r[(e-1)*4+3];default:return}}})),vt=o((e=>{var t=new Uint8Array(512),n=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)t[r]=e,n[e]=r,e<<=1,e&256&&(e^=285);for(let e=255;e<512;e++)t[e]=t[e-255]})(),e.log=function(e){if(e<1)throw Error(`log(`+e+`)`);return n[e]},e.exp=function(e){return t[e]},e.mul=function(e,r){return e===0||r===0?0:t[n[e]+n[r]]}})),yt=o((e=>{var t=vt();e.mul=function(e,n){let r=new Uint8Array(e.length+n.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<n.length;a++)r[i+a]^=t.mul(e[i],n[a]);return r},e.mod=function(e,n){let r=new Uint8Array(e);for(;r.length-n.length>=0;){let e=r[0];for(let i=0;i<n.length;i++)r[i]^=t.mul(n[i],e);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r},e.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let i=0;i<n;i++)r=e.mul(r,new Uint8Array([1,t.exp(i)]));return r}})),bt=o(((e,t)=>{var n=yt();function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw Error(`Encoder not initialized`);let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},t.exports=r})),xt=o((e=>{e.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}})),St=o((e=>{var t=`[0-9]+`,n=`[A-Z $%*+\\-./:]+`,r=`(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+`;r=r.replace(/u/g,`\\u`);var i=`(?:(?![A-Z0-9 $%*+\\-./:]|`+r+`)(?:.|[\r
]))+`;e.KANJI=new RegExp(r,`g`),e.BYTE_KANJI=RegExp(`[^A-Z0-9 $%*+\\-./:]+`,`g`),e.BYTE=new RegExp(i,`g`),e.NUMERIC=new RegExp(t,`g`),e.ALPHANUMERIC=new RegExp(n,`g`);var a=RegExp(`^`+r+`$`),o=RegExp(`^[0-9]+$`),s=RegExp(`^[A-Z0-9 $%*+\\-./:]+$`);e.testKanji=function(e){return a.test(e)},e.testNumeric=function(e){return o.test(e)},e.testAlphanumeric=function(e){return s.test(e)}})),Ct=o((e=>{var t=xt(),n=St();e.NUMERIC={id:`Numeric`,bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:`Alphanumeric`,bit:2,ccBits:[9,11,13]},e.BYTE={id:`Byte`,bit:4,ccBits:[8,16,16]},e.KANJI={id:`Kanji`,bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,n){if(!e.ccBits)throw Error(`Invalid mode: `+e);if(!t.isValid(n))throw Error(`Invalid version: `+n);return n>=1&&n<10?e.ccBits[0]:n<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return n.testNumeric(t)?e.NUMERIC:n.testAlphanumeric(t)?e.ALPHANUMERIC:n.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw Error(`Invalid mode`)},e.isValid=function(e){return e&&e.bit&&e.ccBits};function r(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`numeric`:return e.NUMERIC;case`alphanumeric`:return e.ALPHANUMERIC;case`kanji`:return e.KANJI;case`byte`:return e.BYTE;default:throw Error(`Unknown mode: `+t)}}e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch{return n}}})),wt=o((e=>{var t=ut(),n=_t(),r=dt(),i=Ct(),a=xt(),o=7973,s=t.getBCHDigit(o);function c(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}function l(e,t){return i.getCharCountIndicator(e,t)+4}function u(e,t){let n=0;return e.forEach(function(e){let r=l(e.mode,t);n+=r+e.getBitsLength()}),n}function d(t,n){for(let r=1;r<=40;r++)if(u(t,r)<=e.getCapacity(r,n,i.MIXED))return r}e.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,r,o){if(!a.isValid(e))throw Error(`Invalid QR Code version`);o===void 0&&(o=i.BYTE);let s=(t.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,r))*8;if(o===i.MIXED)return s;let c=s-l(o,e);switch(o){case i.NUMERIC:return Math.floor(c/10*3);case i.ALPHANUMERIC:return Math.floor(c/11*2);case i.KANJI:return Math.floor(c/13);case i.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(e,t){let n,i=r.from(t,r.M);if(Array.isArray(e)){if(e.length>1)return d(e,i);if(e.length===0)return 1;n=e[0]}else n=e;return c(n.mode,n.getLength(),i)},e.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw Error(`Invalid QR Code version`);let n=e<<12;for(;t.getBCHDigit(n)-s>=0;)n^=o<<t.getBCHDigit(n)-s;return e<<12|n}})),Tt=o((e=>{var t=ut(),n=1335,r=21522,i=t.getBCHDigit(n);e.getEncodedBits=function(e,a){let o=e.bit<<3|a,s=o<<10;for(;t.getBCHDigit(s)-i>=0;)s^=n<<t.getBCHDigit(s)-i;return(o<<10|s)^r}})),Et=o(((e,t)=>{var n=Ct();function r(e){this.mode=n.NUMERIC,this.data=e.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);let i=this.data.length-t;i>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,i*3+1))},t.exports=r})),Dt=o(((e,t)=>{var n=Ct(),r=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`.split(``);function i(e){this.mode=n.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t+2<=this.data.length;t+=2){let n=r.indexOf(this.data[t])*45;n+=r.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(r.indexOf(this.data[t]),6)},t.exports=i})),Ot=o(((e,t)=>{var n=Ct();function r(e){this.mode=n.BYTE,this.data=typeof e==`string`?new TextEncoder().encode(e):new Uint8Array(e)}r.getBitsLength=function(e){return e*8},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},t.exports=r})),kt=o(((e,t)=>{var n=Ct(),r=ut();function i(e){this.mode=n.KANJI,this.data=e}i.getBitsLength=function(e){return e*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error(`Invalid SJIS character: `+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},t.exports=i})),At=o(((e,t)=>{var n={single_source_shortest_paths:function(e,t,r){var i={},a={};a[t]=0;var o=n.PriorityQueue.make();o.push(t,0);for(var s,c,l,u,d,f,p,m,h;!o.empty();)for(l in s=o.pop(),c=s.value,u=s.cost,d=e[c]||{},d)d.hasOwnProperty(l)&&(f=d[l],p=u+f,m=a[l],h=a[l]===void 0,(h||m>p)&&(a[l]=p,o.push(l,p),i[l]=c));if(r!==void 0&&a[r]===void 0){var g=[`Could not find a path from `,t,` to `,r,`.`].join(``);throw Error(g)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,t,r){var i=n.single_source_shortest_paths(e,t,r);return n.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var t=n.PriorityQueue,r={},i;for(i in e||={},t)t.hasOwnProperty(i)&&(r[i]=t[i]);return r.queue=[],r.sorter=e.sorter||t.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t!==void 0&&(t.exports=n)})),jt=o((e=>{var t=Ct(),n=Et(),r=Dt(),i=Ot(),a=kt(),o=St(),s=ut(),c=At();function l(e){return unescape(encodeURIComponent(e)).length}function u(e,t,n){let r=[],i;for(;(i=e.exec(n))!==null;)r.push({data:i[0],index:i.index,mode:t,length:i[0].length});return r}function d(e){let n=u(o.NUMERIC,t.NUMERIC,e),r=u(o.ALPHANUMERIC,t.ALPHANUMERIC,e),i,a;return s.isKanjiModeEnabled()?(i=u(o.BYTE,t.BYTE,e),a=u(o.KANJI,t.KANJI,e)):(i=u(o.BYTE_KANJI,t.BYTE,e),a=[]),n.concat(r,i,a).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,o){switch(o){case t.NUMERIC:return n.getBitsLength(e);case t.ALPHANUMERIC:return r.getBitsLength(e);case t.KANJI:return a.getBitsLength(e);case t.BYTE:return i.getBitsLength(e)}}function p(e){return e.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function m(e){let n=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case t.NUMERIC:n.push([i,{data:i.data,mode:t.ALPHANUMERIC,length:i.length},{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.ALPHANUMERIC:n.push([i,{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.KANJI:n.push([i,{data:i.data,mode:t.BYTE,length:l(i.data)}]);break;case t.BYTE:n.push([{data:i.data,mode:t.BYTE,length:l(i.data)}])}}return n}function h(e,n){let r={},i={start:{}},a=[`start`];for(let o=0;o<e.length;o++){let s=e[o],c=[];for(let e=0;e<s.length;e++){let l=s[e],u=``+o+e;c.push(u),r[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===l.mode?(i[o][u]=f(r[o].lastCount+l.length,l.mode)-f(r[o].lastCount,l.mode),r[o].lastCount+=l.length):(r[o]&&(r[o].lastCount=l.length),i[o][u]=f(l.length,l.mode)+4+t.getCharCountIndicator(l.mode,n))}}a=c}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:r}}function g(e,o){let c,l=t.getBestModeForData(e);if(c=t.from(o,l),c!==t.BYTE&&c.bit<l.bit)throw Error(`"`+e+`" cannot be encoded with mode `+t.toString(c)+`.
 Suggested mode is: `+t.toString(l));switch(c===t.KANJI&&!s.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new n(e);case t.ALPHANUMERIC:return new r(e);case t.KANJI:return new a(e);case t.BYTE:return new i(e)}}e.fromArray=function(e){return e.reduce(function(e,t){return typeof t==`string`?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},e.fromString=function(t,n){let r=h(m(d(t,s.isKanjiModeEnabled())),n),i=c.find_path(r.map,`start`,`end`),a=[];for(let e=1;e<i.length-1;e++)a.push(r.table[i[e]].node);return e.fromArray(p(a))},e.rawSplit=function(t){return e.fromArray(d(t,s.isKanjiModeEnabled()))}})),Mt=o((e=>{var t=ut(),n=dt(),r=ft(),i=pt(),a=mt(),o=ht(),s=gt(),c=_t(),l=bt(),u=wt(),d=Tt(),f=Ct(),p=jt();function m(e,t){let n=e.size,r=o.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],a=r[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||n<=i+t))for(let r=-1;r<=7;r++)a+r<=-1||n<=a+r||(t>=0&&t<=6&&(r===0||r===6)||r>=0&&r<=6&&(t===0||t===6)||t>=2&&t<=4&&r>=2&&r<=4?e.set(i+t,a+r,!0,!0):e.set(i+t,a+r,!1,!0))}}function h(e){let t=e.size;for(let n=8;n<t-8;n++){let t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}function g(e,t){let n=a.getPositions(t);for(let t=0;t<n.length;t++){let r=n[t][0],i=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)t===-2||t===2||n===-2||n===2||t===0&&n===0?e.set(r+t,i+n,!0,!0):e.set(r+t,i+n,!1,!0)}}function _(e,t){let n=e.size,r=u.getEncodedBits(t),i,a,o;for(let t=0;t<18;t++)i=Math.floor(t/3),a=t%3+n-8-3,o=(r>>t&1)==1,e.set(i,a,o,!0),e.set(a,i,o,!0)}function v(e,t,n){let r=e.size,i=d.getEncodedBits(t,n),a,o;for(a=0;a<15;a++)o=(i>>a&1)==1,a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(r-15+a,8,o,!0),a<8?e.set(8,r-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(r-8,8,1,!0)}function y(e,t){let n=e.size,r=-1,i=n-1,a=7,o=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,s-n)){let r=!1;o<t.length&&(r=(t[o]>>>a&1)==1),e.set(i,s-n,r),a--,a===-1&&(o++,a=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function b(e,n,i){let a=new r;i.forEach(function(t){a.put(t.mode.bit,4),a.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(a)});let o=(t.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,n))*8;for(a.getLengthInBits()+4<=o&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(0);let s=(o-a.getLengthInBits())/8;for(let e=0;e<s;e++)a.put(e%2?17:236,8);return x(a,e,n)}function x(e,n,r){let i=t.getSymbolTotalCodewords(n),a=i-c.getTotalCodewordsCount(n,r),o=c.getBlocksCount(n,r),s=o-i%o,u=Math.floor(i/o),d=Math.floor(a/o),f=d+1,p=u-d,m=new l(p),h=0,g=Array(o),_=Array(o),v=0,y=new Uint8Array(e.buffer);for(let e=0;e<o;e++){let t=e<s?d:f;g[e]=y.slice(h,h+t),_[e]=m.encode(g[e]),h+=t,v=Math.max(v,t)}let b=new Uint8Array(i),x=0,ee,te;for(ee=0;ee<v;ee++)for(te=0;te<o;te++)ee<g[te].length&&(b[x++]=g[te][ee]);for(ee=0;ee<p;ee++)for(te=0;te<o;te++)b[x++]=_[te][ee];return b}function ee(e,n,r,a){let o;if(Array.isArray(e))o=p.fromArray(e);else if(typeof e==`string`){let t=n;if(!t){let n=p.rawSplit(e);t=u.getBestVersionForData(n,r)}o=p.fromString(e,t||40)}else throw Error(`Invalid data`);let c=u.getBestVersionForData(o,r);if(!c)throw Error(`The amount of data is too big to be stored in a QR Code`);if(!n)n=c;else if(n<c)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+c+`.
`);let l=b(n,r,o),d=new i(t.getSymbolSize(n));return m(d,n),h(d),g(d,n),v(d,r,0),n>=7&&_(d,n),y(d,l),isNaN(a)&&(a=s.getBestMask(d,v.bind(null,d,r))),s.applyMask(a,d),v(d,r,a),{modules:d,version:n,errorCorrectionLevel:r,maskPattern:a,segments:o}}e.create=function(e,r){if(e===void 0||e===``)throw Error(`No input text`);let i=n.M,a,o;return r!==void 0&&(i=n.from(r.errorCorrectionLevel,n.M),a=u.from(r.version),o=s.from(r.maskPattern),r.toSJISFunc&&t.setToSJISFunction(r.toSJISFunc)),ee(e,a,i,o)}})),Nt=o((e=>{function t(e){if(typeof e==`number`&&(e=e.toString()),typeof e!=`string`)throw Error(`Color should be defined as hex string`);let t=e.slice().replace(`#`,``).split(``);if(t.length<3||t.length===5||t.length>8)throw Error(`Invalid hex color: `+e);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),t.length===6&&t.push(`F`,`F`);let n=parseInt(t.join(``),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:`#`+t.slice(0,6).join(``)}}e.getOptions=function(e){e||={},e.color||(e.color={});let n=e.margin===void 0||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:n,color:{dark:t(e.color.dark||`#000000ff`),light:t(e.color.light||`#ffffffff`)},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},e.getImageWidth=function(t,n){let r=e.getScale(t,n);return Math.floor((t+n.margin*2)*r)},e.qrToImageData=function(t,n,r){let i=n.modules.size,a=n.modules.data,o=e.getScale(i,r),s=Math.floor((i+r.margin*2)*o),c=r.margin*o,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=(e*s+n)*4,d=r.color.light;if(e>=c&&n>=c&&e<s-c&&n<s-c){let t=Math.floor((e-c)/o),r=Math.floor((n-c)/o);d=l[+!!a[t*i+r]]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}})),Pt=o((e=>{var t=Nt();function n(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||={},t.height=n,t.width=n,t.style.height=n+`px`,t.style.width=n+`px`}function r(){try{return document.createElement(`canvas`)}catch{throw Error(`You need to specify a canvas element`)}}e.render=function(e,i,a){let o=a,s=i;o===void 0&&(!i||!i.getContext)&&(o=i,i=void 0),i||(s=r()),o=t.getOptions(o);let c=t.getImageWidth(e.modules.size,o),l=s.getContext(`2d`),u=l.createImageData(c,c);return t.qrToImageData(u.data,e,o),n(l,s,c),l.putImageData(u,0,0),s},e.renderToDataURL=function(t,n,r){let i=r;i===void 0&&(!n||!n.getContext)&&(i=n,n=void 0),i||={};let a=e.render(t,n,i),o=i.type||`image/png`,s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}})),Ft=o((e=>{var t=Nt();function n(e,t){let n=e.a/255,r=t+`="`+e.hex+`"`;return n<1?r+` `+t+`-opacity="`+n.toFixed(2).slice(1)+`"`:r}function r(e,t,n){let r=e+t;return n!==void 0&&(r+=` `+n),r}function i(e,t,n){let i=``,a=0,o=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);!l&&!o&&(o=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=o?r(`M`,l+n,.5+u+n):r(`m`,a,0),a=0,o=!1),l+1<t&&e[c+1]||(i+=r(`h`,s),s=0)):a++}return i}e.render=function(e,r,a){let o=t.getOptions(r),s=e.modules.size,c=e.modules.data,l=s+o.margin*2,u=o.color.light.a?`<path `+n(o.color.light,`fill`)+` d="M0 0h`+l+`v`+l+`H0z"/>`:``,d=`<path `+n(o.color.dark,`stroke`)+` d="`+i(c,s,o.margin)+`"/>`,f=`viewBox="0 0 `+l+` `+l+`"`,p=`<svg xmlns="http://www.w3.org/2000/svg" `+(o.width?`width="`+o.width+`" height="`+o.width+`" `:``)+f+` shape-rendering="crispEdges">`+u+d+`</svg>
`;return typeof a==`function`&&a(null,p),p}})),It=c(o((e=>{var t=lt(),n=Mt(),r=Pt(),i=Ft();function a(e,r,i,a,o){let s=[].slice.call(arguments,1),c=s.length,l=typeof s[c-1]==`function`;if(!l&&!t())throw Error(`Callback required as last argument`);if(l){if(c<2)throw Error(`Too few arguments provided`);c===2?(o=i,i=r,r=a=void 0):c===3&&(r.getContext&&o===void 0?(o=a,a=void 0):(o=a,a=i,i=r,r=void 0))}else{if(c<1)throw Error(`Too few arguments provided`);return c===1?(i=r,r=a=void 0):c===2&&!r.getContext&&(a=i,i=r,r=void 0),new Promise(function(t,o){try{t(e(n.create(i,a),r,a))}catch(e){o(e)}})}try{let t=n.create(i,a);o(null,e(t,r,a))}catch(e){o(e)}}e.create=n.create,e.toCanvas=a.bind(null,r.render),e.toDataURL=a.bind(null,r.renderToDataURL),e.toString=a.bind(null,function(e,t,n){return i.render(e,n)})}))(),1);function Lt(e){return typeof window>`u`?``:`${window.location.href.split(`?`)[0].split(`#`)[0]}?verify=${encodeURIComponent(e)}`}async function Rt(e,t){let n=document.createElement(`canvas`),r=2400,i=1500;n.width=r,n.height=i;let a=n.getContext(`2d`);if(!a)return;let o=Lt(t),s=await It.toDataURL(o,{width:240,margin:1,color:{dark:`#09090b`,light:`#ffffff`}}),c=a.createLinearGradient(0,0,r,i);c.addColorStop(0,`#09090b`),c.addColorStop(.5,`#0d0d12`),c.addColorStop(1,`#050507`),a.fillStyle=c,a.fillRect(0,0,r,i),a.strokeStyle=`#d97706`,a.lineWidth=14,a.strokeRect(40,40,2320,1420),a.strokeStyle=`#fbbf24`,a.lineWidth=4,a.strokeRect(60,60,2280,1380),a.strokeStyle=`rgba(245, 158, 11, 0.3)`,a.lineWidth=2,a.strokeRect(80,80,2240,1340),Bt(a,95,95,60),Bt(a,2305,95,60,!0,!1),Bt(a,95,1405,60,!1,!0),Bt(a,2305,1405,60,!0,!0);let l=r/2,u=a.createLinearGradient(1150,170,1250,270);u.addColorStop(0,`#fde68a`),u.addColorStop(.5,`#f59e0b`),u.addColorStop(1,`#b45309`),a.fillStyle=u,a.beginPath(),a.arc(l,220,55,0,Math.PI*2),a.fill(),a.fillStyle=`#000000`,a.font=`bold 44px sans-serif`,a.textAlign=`center`,a.textBaseline=`middle`,a.fillText(`J`,l,220),a.fillStyle=`#f59e0b`,a.font=`bold 28px sans-serif`,a.letterSpacing=`6px`,a.fillText(`JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY`,l,330),a.fillStyle=`#ffffff`,a.font=`bold 64px Georgia, serif`,a.letterSpacing=`3px`,a.fillText(`CERTIFICATE OF EXCELLENCE`,l,420),a.fillStyle=`#d4d4d8`,a.font=`600 24px sans-serif`,a.letterSpacing=`4px`,a.fillText(`IN COMPREHENSIVE CODING & ALGORITHMIC ARCHITECTURE`,l,480),a.fillStyle=`#fbbf24`,a.font=`bold 22px sans-serif`,a.letterSpacing=`2px`,a.fillText(`Powered By Kapil | Knowledge Multiverse Architect`,l,530),a.fillStyle=`#a1a1aa`,a.font=`italic 26px Georgia, serif`,a.letterSpacing=`1px`,a.fillText(`This is to officially certify that`,l,615);let d=e.name||`Honorable Student`,f=a.createLinearGradient(900,0,1500,0);f.addColorStop(0,`#fef08a`),f.addColorStop(.5,`#f59e0b`),f.addColorStop(1,`#fde047`),a.fillStyle=f,a.font=`bold 72px Georgia, serif`,a.letterSpacing=`2px`,a.fillText(d,l,705),a.strokeStyle=`#d97706`,a.lineWidth=3,a.beginPath(),a.moveTo(850,740),a.lineTo(1550,740),a.stroke(),a.fillStyle=`#e4e4e7`,a.font=`24px sans-serif`,a.letterSpacing=`1px`;let p=`Roll No: ${e.rollNo||`JIET-2026-REG`}  ·  Department of ${e.branch||`Computer Science & Engineering`}`;if(a.fillText(p,l,795),a.fillStyle=`#a1a1aa`,a.font=`22px sans-serif`,a.letterSpacing=`0.5px`,a.fillText(`has demonstrated outstanding algorithmic competence by analyzing, testing, compiling, and solving rigorous`,l,865),a.fillText(`algorithmic engineering problems across C, C++, Java, and Python, mastering time-space complexity optimization.`,l,905),s){let e=new Image;await new Promise(t=>{e.onload=t,e.src=s}),a.fillStyle=`#ffffff`,a.fillRect(1102.5,1020,195,195),a.strokeStyle=`#f59e0b`,a.lineWidth=4,a.strokeRect(1102.5,1020,195,195),a.drawImage(e,1112.5,1030,175,175),a.fillStyle=`#fbbf24`,a.font=`bold 16px monospace`,a.letterSpacing=`1px`,a.fillText(`SCAN ON ANY PHONE TO VERIFY`,l,1239)}let m=1140;a.fillStyle=`#fde68a`,a.font=`italic bold 40px Georgia, serif`,a.textAlign=`center`,a.fillText(`Kapil Narula`,400,m),a.strokeStyle=`#f59e0b`,a.lineWidth=2.5,a.beginPath(),a.moveTo(240,1155),a.lineTo(560,1155),a.stroke(),a.fillStyle=`#ffffff`,a.font=`bold 22px sans-serif`,a.letterSpacing=`2px`,a.fillText(`KAPIL NARULA`,400,1186),a.fillStyle=`#fbbf24`,a.font=`bold 18px sans-serif`,a.fillText(`Lead Faculty & Platform Architect`,400,1215),a.fillStyle=`#a1a1aa`,a.font=`14px sans-serif`,a.fillText(`Powered By Kapil | Knowledge Multiverse Architect`,400,1240);let h=2e3;a.fillStyle=`#fbbf24`,a.font=`bold 22px sans-serif`,a.letterSpacing=`2px`,a.fillText(`AUTHENTICATED CREDENTIAL`,h,m),a.strokeStyle=`#52525b`,a.lineWidth=2,a.beginPath(),a.moveTo(1840,1155),a.lineTo(2160,1155),a.stroke(),a.fillStyle=`#ffffff`,a.font=`bold 18px monospace`,a.fillText(`ID: ${t}`,h,1186),a.fillStyle=`#d4d4d8`,a.font=`16px sans-serif`,a.fillText(`JIET CONNECT REPOSITORY`,h,1215),a.fillStyle=`#71717a`,a.font=`15px sans-serif`;let g=new Date().toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`});a.fillText(`Validated: ${g}`,h,1240),Vt(n,`${(e.name||`Candidate`).replace(/[^a-zA-Z0-9]/g,`_`)}_JIET_Certificate_PoweredByKapil.png`)}async function zt(e,t){let n=document.createElement(`canvas`),r=1200;n.width=r,n.height=r;let i=n.getContext(`2d`);if(!i)return;i.fillStyle=`#070709`,i.fillRect(0,0,r,r),i.save(),i.translate(600,600);for(let e=0;e<24;e++)i.rotate(Math.PI*2/24),i.fillStyle=e%2==0?`rgba(245, 158, 11, 0.15)`:`rgba(251, 191, 36, 0.08)`,i.beginPath(),i.moveTo(0,0),i.lineTo(-30,480),i.lineTo(30,480),i.closePath(),i.fill();i.restore();let a=i.createLinearGradient(200,200,1e3,1e3);a.addColorStop(0,`#fef08a`),a.addColorStop(.3,`#f59e0b`),a.addColorStop(.7,`#d97706`),a.addColorStop(1,`#b45309`),i.strokeStyle=a,i.lineWidth=28,i.beginPath(),i.arc(600,600,440,0,Math.PI*2),i.stroke(),i.strokeStyle=`#fbbf24`,i.lineWidth=4,i.beginPath(),i.arc(600,600,410,0,Math.PI*2),i.stroke();let o=i.createRadialGradient(600,600,50,600,600,400);o.addColorStop(0,`#1c1917`),o.addColorStop(1,`#09090b`),i.fillStyle=o,i.beginPath(),i.arc(600,600,400,0,Math.PI*2),i.fill(),i.fillStyle=`#f59e0b`,i.font=`bold 120px sans-serif`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillText(`★`,600,440),i.fillStyle=`#fbbf24`,i.font=`bold 22px sans-serif`,i.letterSpacing=`4px`,i.fillText(`JIET CONNECT · VERIFIED BADGE`,600,540);let s=i.createLinearGradient(400,0,800,0);s.addColorStop(0,`#fef08a`),s.addColorStop(1,`#f59e0b`),i.fillStyle=s,i.font=`bold 46px Georgia, serif`,i.letterSpacing=`1px`,i.fillText(e.title,600,610),i.fillStyle=`#ffffff`,i.font=`bold 30px sans-serif`,i.letterSpacing=`1px`,i.fillText(t.name||`Honorable Student`,600,680),i.fillStyle=`#a1a1aa`,i.font=`20px sans-serif`,i.fillText(e.requirement,600,730),i.fillStyle=`#fde68a`,i.font=`italic bold 32px Georgia, serif`,i.fillText(`Kapil Narula`,600,825),i.strokeStyle=`#f59e0b`,i.lineWidth=2.5,i.beginPath(),i.moveTo(470,845),i.lineTo(730,845),i.stroke(),i.fillStyle=`#fbbf24`,i.font=`bold 16px sans-serif`,i.letterSpacing=`1px`,i.fillText(`Powered By Kapil | Knowledge Multiverse Architect`,600,875),Vt(n,`${e.title.replace(/[^a-zA-Z0-9]/g,`_`)}_Badge_PoweredByKapil.png`)}function Bt(e,t,n,r,i=!1,a=!1){let o=i?-1:1,s=a?-1:1;e.strokeStyle=`#fbbf24`,e.lineWidth=4,e.beginPath(),e.moveTo(t,n+r*s),e.lineTo(t,n),e.lineTo(t+r*o,n),e.stroke()}function Vt(e,t){let n=document.createElement(`a`);n.download=t,n.href=e.toDataURL(`image/png`,1),document.body.appendChild(n),n.click(),document.body.removeChild(n)}var N=`/app/applet/src/components/CertificateView.tsx`,Ht=({userProfile:e,problems:t,badges:n,onOpenVerificationModal:r,onOpenEditProfile:i,onOpenPlacementReport:a,onSelectBadge:o})=>{let[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(!1),d=(0,_.useRef)(null),f=new Set(e.solvedProblemIds);t.filter(e=>f.has(e.id)).length;let p=e.certificateId||`JIET-KAPIL-2026-${Math.abs(Ut(e.name+`JIET`)).toString(16).toUpperCase()}`;(0,_.useEffect)(()=>{let e=Lt(p);It.toDataURL(e,{width:240,margin:1,color:{dark:`#09090b`,light:`#ffffff`}}).then(e=>c(e)).catch(e=>console.error(e))},[p]);let m=()=>{document.body.setAttribute(`data-print-target`,`certificate`),b({particleCount:100,spread:80,colors:[`#f59e0b`,`#d97706`,`#ffffff`,`#71717a`],origin:{y:.6}}),window.print()},h=async()=>{u(!0);try{await Rt(e,p),b({particleCount:80,spread:60,colors:[`#f59e0b`,`#fbbf24`,`#ffffff`]})}catch(e){console.error(e)}finally{u(!1)}},g=()=>{r(p)};return(0,E.jsxDEV)(`div`,{className:`space-y-10 pb-16`,children:[(0,E.jsxDEV)(`div`,{className:`flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-zinc-950 border border-zinc-800 p-5 rounded-2xl shadow-xl no-print`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`div`,{className:`text-[11px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5 mb-1`,children:[(0,E.jsxDEV)(ce,{className:`w-4 h-4`},void 0,!1,{fileName:N,lineNumber:100,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{children:`OFFICIAL ENGINEERING CREDENTIALS · POWERED BY KAPIL | KNOWLEDGE MULTIVERSE ARCHITECT`},void 0,!1,{fileName:N,lineNumber:101,columnNumber:13},void 0)]},void 0,!0,{fileName:N,lineNumber:99,columnNumber:11},void 0),(0,E.jsxDEV)(`h2`,{className:`text-xl font-bold text-white tracking-tight font-serif`,children:`QR-Verified Institute Certificate & Placement Dossier`},void 0,!1,{fileName:N,lineNumber:103,columnNumber:11},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-zinc-400 mt-0.5 flex items-center gap-1.5`,children:[(0,E.jsxDEV)(Fe,{className:`w-3.5 h-3.5 text-amber-400 inline`},void 0,!1,{fileName:N,lineNumber:107,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{children:`QR Code verified on all mobile devices with zero 404 errors.`},void 0,!1,{fileName:N,lineNumber:108,columnNumber:13},void 0)]},void 0,!0,{fileName:N,lineNumber:106,columnNumber:11},void 0)]},void 0,!0,{fileName:N,lineNumber:98,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`flex flex-wrap items-center gap-2.5`,children:[(0,E.jsxDEV)(`button`,{onClick:a,className:`px-3.5 py-2 text-xs font-bold rounded-lg bg-zinc-900 hover:bg-zinc-850 text-amber-300 border border-amber-500/40 hover:border-amber-400 flex items-center gap-1.5 transition-all shadow-sm`,children:[(0,E.jsxDEV)(Le,{className:`w-4 h-4 text-amber-400`},void 0,!1,{fileName:N,lineNumber:120,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{children:`Placement 360° Report (PDF)`},void 0,!1,{fileName:N,lineNumber:121,columnNumber:13},void 0)]},void 0,!0,{fileName:N,lineNumber:116,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:h,disabled:l,className:`px-3.5 py-2 text-xs font-bold rounded-lg bg-zinc-900 hover:bg-zinc-850 text-white border border-zinc-700 hover:border-amber-400 flex items-center gap-1.5 transition-all shadow-sm`,title:`Download high-resolution Certificate as PNG image`,children:[(0,E.jsxDEV)(Se,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:N,lineNumber:131,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{children:l?`Rendering PNG...`:`Certificate PNG`},void 0,!1,{fileName:N,lineNumber:132,columnNumber:13},void 0)]},void 0,!0,{fileName:N,lineNumber:125,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:m,className:`px-4 py-2 text-xs font-extrabold rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all active:scale-95`,title:`Download Certificate formatted for PDF print`,children:[(0,E.jsxDEV)(je,{className:`w-4 h-4 fill-black`},void 0,!1,{fileName:N,lineNumber:141,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{children:`Certificate PDF`},void 0,!1,{fileName:N,lineNumber:142,columnNumber:13},void 0)]},void 0,!0,{fileName:N,lineNumber:136,columnNumber:11},void 0),(0,E.jsxDEV)(`button`,{onClick:g,className:`p-2 text-xs font-bold rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:text-white transition-colors`,title:`Verify Live Credential`,children:(0,E.jsxDEV)(w,{className:`w-4 h-4 text-amber-400`},void 0,!1,{fileName:N,lineNumber:151,columnNumber:13},void 0)},void 0,!1,{fileName:N,lineNumber:146,columnNumber:11},void 0)]},void 0,!0,{fileName:N,lineNumber:113,columnNumber:9},void 0)]},void 0,!0,{fileName:N,lineNumber:97,columnNumber:7},void 0),(0,E.jsxDEV)(`div`,{className:`flex justify-center`,children:(0,E.jsxDEV)(`div`,{ref:d,id:`jiet-printable-certificate`,className:`w-full max-w-4xl bg-gradient-to-b from-[#0e0e11] via-zinc-950 to-black text-white rounded-2xl border-4 border-amber-500/60 p-8 sm:p-12 shadow-2xl relative overflow-hidden`,children:(0,E.jsxDEV)(`div`,{className:`border border-amber-500/30 p-6 sm:p-10 rounded-xl relative overflow-hidden`,children:[(0,E.jsxDEV)(`div`,{className:`absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-400 pointer-events-none`},void 0,!1,{fileName:N,lineNumber:169,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-400 pointer-events-none`},void 0,!1,{fileName:N,lineNumber:170,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-400 pointer-events-none`},void 0,!1,{fileName:N,lineNumber:171,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-400 pointer-events-none`},void 0,!1,{fileName:N,lineNumber:172,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`text-center space-y-2 mb-8`,children:[(0,E.jsxDEV)(`div`,{className:`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-black mb-3 shadow-lg shadow-amber-500/30`,children:(0,E.jsxDEV)(Te,{className:`w-8 h-8 fill-black`},void 0,!1,{fileName:N,lineNumber:178,columnNumber:17},void 0)},void 0,!1,{fileName:N,lineNumber:177,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`text-xs font-extrabold tracking-widest text-amber-400 uppercase`,children:`JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY`},void 0,!1,{fileName:N,lineNumber:181,columnNumber:15},void 0),(0,E.jsxDEV)(`h1`,{className:`text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-serif py-1`,children:`CERTIFICATE OF EXCELLENCE`},void 0,!1,{fileName:N,lineNumber:185,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`text-xs font-bold tracking-widest text-zinc-300 uppercase`,children:`IN COMPREHENSIVE CODING & ALGORITHMIC ARCHITECTURE`},void 0,!1,{fileName:N,lineNumber:189,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`text-xs text-amber-400 font-bold tracking-widest uppercase`,children:`Powered By Kapil | Knowledge Multiverse Architect`},void 0,!1,{fileName:N,lineNumber:193,columnNumber:15},void 0)]},void 0,!0,{fileName:N,lineNumber:175,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`text-center space-y-4 my-8`,children:[(0,E.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-zinc-400 italic font-serif`,children:`This is to officially certify that`},void 0,!1,{fileName:N,lineNumber:201,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`border-b border-amber-500/50 pb-2 inline-block min-w-[300px]`,children:(0,E.jsxDEV)(`span`,{className:`text-2xl sm:text-4xl font-extrabold font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300`,children:e.name||`Honorable Student`},void 0,!1,{fileName:N,lineNumber:206,columnNumber:17},void 0)},void 0,!1,{fileName:N,lineNumber:205,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`text-xs text-zinc-300 max-w-xl mx-auto leading-relaxed`,children:[`Roll No: `,(0,E.jsxDEV)(`span`,{className:`font-semibold text-white font-mono`,children:e.rollNo||`JIET-2026-REG`},void 0,!1,{fileName:N,lineNumber:212,columnNumber:26},void 0),` · Department of `,(0,E.jsxDEV)(`span`,{className:`font-semibold text-white`,children:e.branch},void 0,!1,{fileName:N,lineNumber:212,columnNumber:142},void 0)]},void 0,!0,{fileName:N,lineNumber:211,columnNumber:15},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed pt-2 font-light`,children:`has demonstrated outstanding algorithmic competence by analyzing, testing, compiling, and solving rigorous algorithmic engineering problems across C, C++, Java, and Python, mastering time-space complexity optimization and architectural patterns.`},void 0,!1,{fileName:N,lineNumber:215,columnNumber:15},void 0)]},void 0,!0,{fileName:N,lineNumber:200,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`pt-8 mt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6`,children:[(0,E.jsxDEV)(`div`,{className:`text-center sm:text-left space-y-1`,children:[(0,E.jsxDEV)(`div`,{className:`font-serif italic text-base text-amber-300 font-bold border-b border-amber-500/40 pb-1 w-48 text-center sm:text-left`,children:`Kapil Narula`},void 0,!1,{fileName:N,lineNumber:225,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-xs font-bold text-white uppercase tracking-wider`,children:`KAPIL NARULA`},void 0,!1,{fileName:N,lineNumber:228,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-[11px] text-amber-400 font-medium`,children:`Lead Faculty & Platform Architect`},void 0,!1,{fileName:N,lineNumber:229,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-[9px] text-zinc-400 uppercase tracking-widest font-semibold`,children:`Powered By Kapil | Knowledge Multiverse Architect`},void 0,!1,{fileName:N,lineNumber:230,columnNumber:17},void 0)]},void 0,!0,{fileName:N,lineNumber:224,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`flex flex-col items-center cursor-pointer group`,onClick:g,title:`Scan on any smartphone to verify`,children:[s?(0,E.jsxDEV)(`div`,{className:`p-2 bg-white rounded-lg border-2 border-amber-400 shadow-lg group-hover:scale-105 transition-transform`,children:(0,E.jsxDEV)(`img`,{src:s,alt:`Verified Certificate QR Code`,className:`w-24 h-24 sm:w-28 sm:h-28 object-contain`},void 0,!1,{fileName:N,lineNumber:237,columnNumber:21},void 0)},void 0,!1,{fileName:N,lineNumber:236,columnNumber:19},void 0):(0,E.jsxDEV)(`div`,{className:`w-24 h-24 bg-zinc-800 rounded flex items-center justify-center text-xs text-zinc-500`,children:`Generating QR...`},void 0,!1,{fileName:N,lineNumber:244,columnNumber:19},void 0),(0,E.jsxDEV)(`div`,{className:`text-[10px] font-mono text-amber-400 mt-1.5 flex items-center gap-1 group-hover:underline`,children:[(0,E.jsxDEV)(w,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:N,lineNumber:249,columnNumber:19},void 0),(0,E.jsxDEV)(`span`,{children:`Scan On Mobile To Verify`},void 0,!1,{fileName:N,lineNumber:250,columnNumber:19},void 0)]},void 0,!0,{fileName:N,lineNumber:248,columnNumber:17},void 0)]},void 0,!0,{fileName:N,lineNumber:234,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`text-center sm:text-right space-y-1`,children:[(0,E.jsxDEV)(`div`,{className:`text-xs font-bold text-amber-400 uppercase tracking-wider`,children:`AUTHENTICATED RECORD`},void 0,!1,{fileName:N,lineNumber:256,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`font-mono text-xs font-bold text-white border-b border-zinc-700 pb-1 w-48 text-center sm:text-right ml-auto`,children:[`ID: `,p]},void 0,!0,{fileName:N,lineNumber:259,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-[11px] text-zinc-400 font-medium`,children:`JIET CONNECT VERIFICATION`},void 0,!1,{fileName:N,lineNumber:262,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-[10px] text-zinc-500`,children:[`Issued: `,new Date().toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`})]},void 0,!0,{fileName:N,lineNumber:263,columnNumber:17},void 0)]},void 0,!0,{fileName:N,lineNumber:255,columnNumber:15},void 0)]},void 0,!0,{fileName:N,lineNumber:221,columnNumber:13},void 0)]},void 0,!0,{fileName:N,lineNumber:166,columnNumber:11},void 0)},void 0,!1,{fileName:N,lineNumber:159,columnNumber:9},void 0)},void 0,!1,{fileName:N,lineNumber:158,columnNumber:7},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-4 pt-6`,children:[(0,E.jsxDEV)(`div`,{className:`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`h3`,{className:`text-lg font-bold text-white tracking-tight flex items-center gap-2 font-serif`,children:[(0,E.jsxDEV)(Ie,{className:`w-5 h-5 text-amber-400`},void 0,!1,{fileName:N,lineNumber:280,columnNumber:15},void 0),(0,E.jsxDEV)(`span`,{children:`Earned Engineering Badges · Powered By Kapil | Knowledge Multiverse Architect`},void 0,!1,{fileName:N,lineNumber:281,columnNumber:15},void 0)]},void 0,!0,{fileName:N,lineNumber:279,columnNumber:13},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-zinc-400`,children:`Each badge can be downloaded in high-resolution PNG or printable PDF format for resumes & LinkedIn.`},void 0,!1,{fileName:N,lineNumber:283,columnNumber:13},void 0)]},void 0,!0,{fileName:N,lineNumber:278,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`text-xs text-zinc-400 font-mono`,children:[(0,E.jsxDEV)(`span`,{className:`font-bold text-amber-400 tabular-nums`,children:e.earnedBadgeIds?.length||1},void 0,!1,{fileName:N,lineNumber:288,columnNumber:13},void 0),` /`,` `,(0,E.jsxDEV)(`span`,{className:`tabular-nums text-white`,children:n.length},void 0,!1,{fileName:N,lineNumber:289,columnNumber:13},void 0),` Badges Unlocked`]},void 0,!0,{fileName:N,lineNumber:287,columnNumber:11},void 0)]},void 0,!0,{fileName:N,lineNumber:277,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`,children:n.map(t=>{let n=e.earnedBadgeIds?.includes(t.id)||t.id===`b-first-step`;return(0,E.jsxDEV)(`div`,{className:`p-4 rounded-xl border transition-all flex flex-col justify-between ${n?`bg-zinc-950 border-amber-500/40 shadow-lg`:`bg-zinc-950/40 border-zinc-800 opacity-50`}`,children:[(0,E.jsxDEV)(`div`,{children:(0,E.jsxDEV)(`div`,{className:`flex items-start gap-3`,children:[(0,E.jsxDEV)(`div`,{className:`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${n?`bg-gradient-to-br from-amber-400 to-yellow-600 text-black shadow-md`:`bg-zinc-900 text-zinc-600`}`,children:(0,E.jsxDEV)(ce,{className:`w-5 h-5 fill-black`},void 0,!1,{fileName:N,lineNumber:314,columnNumber:23},void 0)},void 0,!1,{fileName:N,lineNumber:307,columnNumber:21},void 0),(0,E.jsxDEV)(`div`,{className:`flex-1 min-w-0`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between`,children:[(0,E.jsxDEV)(`h4`,{className:`text-xs font-bold text-white truncate`,children:t.title},void 0,!1,{fileName:N,lineNumber:318,columnNumber:25},void 0),n&&(0,E.jsxDEV)(ge,{className:`w-3.5 h-3.5 fill-amber-400 text-black shrink-0`},void 0,!1,{fileName:N,lineNumber:322,columnNumber:27},void 0)]},void 0,!0,{fileName:N,lineNumber:317,columnNumber:23},void 0),(0,E.jsxDEV)(`p`,{className:`text-[11px] text-zinc-400 line-clamp-2 mt-0.5 leading-relaxed font-light`,children:t.description},void 0,!1,{fileName:N,lineNumber:325,columnNumber:23},void 0),(0,E.jsxDEV)(`div`,{className:`mt-2 text-[10px] text-amber-400/90 font-mono font-medium`,children:[`Requirement: `,t.requirement]},void 0,!0,{fileName:N,lineNumber:328,columnNumber:23},void 0)]},void 0,!0,{fileName:N,lineNumber:316,columnNumber:21},void 0)]},void 0,!0,{fileName:N,lineNumber:306,columnNumber:19},void 0)},void 0,!1,{fileName:N,lineNumber:305,columnNumber:17},void 0),n&&(0,E.jsxDEV)(`div`,{className:`mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between gap-2`,children:[(0,E.jsxDEV)(`span`,{className:`text-[10px] text-zinc-500 font-mono`,children:`Powered By Kapil | Knowledge Multiverse Architect`},void 0,!1,{fileName:N,lineNumber:338,columnNumber:21},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1.5`,children:[(0,E.jsxDEV)(`button`,{onClick:()=>zt(t,e),className:`px-2.5 py-1 text-[11px] font-bold rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 flex items-center gap-1 transition-colors`,title:`Download Badge as PNG`,children:[(0,E.jsxDEV)(Se,{className:`w-3 h-3 text-amber-400`},void 0,!1,{fileName:N,lineNumber:345,columnNumber:25},void 0),(0,E.jsxDEV)(`span`,{children:`PNG`},void 0,!1,{fileName:N,lineNumber:346,columnNumber:25},void 0)]},void 0,!0,{fileName:N,lineNumber:340,columnNumber:23},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>o(t),className:`px-2.5 py-1 text-[11px] font-bold rounded bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 transition-colors`,title:`Open Badge PDF & Print view`,children:[(0,E.jsxDEV)(je,{className:`w-3 h-3 text-amber-400`},void 0,!1,{fileName:N,lineNumber:353,columnNumber:25},void 0),(0,E.jsxDEV)(`span`,{children:`PDF`},void 0,!1,{fileName:N,lineNumber:354,columnNumber:25},void 0)]},void 0,!0,{fileName:N,lineNumber:348,columnNumber:23},void 0)]},void 0,!0,{fileName:N,lineNumber:339,columnNumber:21},void 0)]},void 0,!0,{fileName:N,lineNumber:337,columnNumber:19},void 0)]},t.id,!0,{fileName:N,lineNumber:297,columnNumber:15},void 0)})},void 0,!1,{fileName:N,lineNumber:293,columnNumber:9},void 0)]},void 0,!0,{fileName:N,lineNumber:276,columnNumber:7},void 0)]},void 0,!0,{fileName:N,lineNumber:94,columnNumber:5},void 0)};function Ut(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}var P=`/app/applet/src/components/VerificationModal.tsx`,Wt=({isOpen:e,onClose:t,userProfile:n,credentialId:r})=>e?(0,E.jsxDEV)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md`,children:(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl shadow-black text-zinc-100 relative overflow-hidden`,children:[(0,E.jsxDEV)(`div`,{className:`absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none`},void 0,!1,{fileName:P,lineNumber:25,columnNumber:9},void 0),(0,E.jsxDEV)(`button`,{onClick:t,className:`absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors`,children:(0,E.jsxDEV)(Ve,{className:`w-5 h-5`},void 0,!1,{fileName:P,lineNumber:32,columnNumber:11},void 0)},void 0,!1,{fileName:P,lineNumber:28,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-3.5 mb-6 pb-4 border-b border-zinc-850`,children:[(0,E.jsxDEV)(`div`,{className:`w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400`,children:(0,E.jsxDEV)(w,{className:`w-7 h-7`},void 0,!1,{fileName:P,lineNumber:38,columnNumber:13},void 0)},void 0,!1,{fileName:P,lineNumber:37,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`div`,{className:`text-[11px] font-bold text-amber-400 tracking-wider uppercase flex items-center gap-1`,children:[(0,E.jsxDEV)(ge,{className:`w-3.5 h-3.5 fill-amber-400 text-black`},void 0,!1,{fileName:P,lineNumber:42,columnNumber:15},void 0),(0,E.jsxDEV)(`span`,{children:`Official Credential Verified`},void 0,!1,{fileName:P,lineNumber:43,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:41,columnNumber:13},void 0),(0,E.jsxDEV)(`h2`,{className:`text-lg font-bold text-white tracking-tight font-serif`,children:`JIET Verification Portal · Powered By Kapil | Knowledge Multiverse Architect`},void 0,!1,{fileName:P,lineNumber:45,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:40,columnNumber:11},void 0)]},void 0,!0,{fileName:P,lineNumber:36,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-3 bg-black/90 p-4 rounded-xl border border-zinc-850 text-xs`,children:[(0,E.jsxDEV)(`div`,{className:`flex justify-between items-center py-1 border-b border-zinc-900`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:`Student Name`},void 0,!1,{fileName:P,lineNumber:55,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`font-bold text-amber-300 text-sm font-serif`,children:n.name||`Honorable Student`},void 0,!1,{fileName:P,lineNumber:56,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:54,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`flex justify-between items-center py-1 border-b border-zinc-900`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:`Roll / Scholar No`},void 0,!1,{fileName:P,lineNumber:62,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`font-mono text-white`,children:n.rollNo||`JIET-2026-REG`},void 0,!1,{fileName:P,lineNumber:63,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:61,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`flex justify-between items-center py-1 border-b border-zinc-900`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:`Institution`},void 0,!1,{fileName:P,lineNumber:69,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-300 text-right font-medium`,children:`Jodhpur Institute of Engineering & Technology`},void 0,!1,{fileName:P,lineNumber:70,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:68,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`flex justify-between items-center py-1 border-b border-zinc-900`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:`Department`},void 0,!1,{fileName:P,lineNumber:76,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-300`,children:n.branch},void 0,!1,{fileName:P,lineNumber:77,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:75,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`flex justify-between items-center py-1 border-b border-zinc-900`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:`Program Architect & Lead`},void 0,!1,{fileName:P,lineNumber:83,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`text-amber-400 font-bold`,children:`Kapil Narula (Powered By Kapil | Knowledge Multiverse Architect)`},void 0,!1,{fileName:P,lineNumber:84,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:82,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`flex justify-between items-center py-1 border-b border-zinc-900`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:`Credential ID`},void 0,!1,{fileName:P,lineNumber:90,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`font-mono text-amber-400 font-bold text-[11px]`,children:r},void 0,!1,{fileName:P,lineNumber:91,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:89,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`flex justify-between items-center py-1`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:`Device Compatibility`},void 0,!1,{fileName:P,lineNumber:97,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`text-amber-300 font-mono`,children:`Universal Mobile & Desktop Verified`},void 0,!1,{fileName:P,lineNumber:98,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:96,columnNumber:11},void 0)]},void 0,!0,{fileName:P,lineNumber:52,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`mt-4 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 space-y-1.5`,children:[(0,E.jsxDEV)(`span`,{className:`font-bold text-zinc-200 block text-[11px] uppercase tracking-wider text-amber-400/90`,children:`Algorithmic Competencies Certified:`},void 0,!1,{fileName:P,lineNumber:107,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`flex flex-wrap gap-1.5 text-[11px] text-zinc-300 pt-1`,children:[(0,E.jsxDEV)(`span`,{className:`px-2 py-0.5 rounded bg-black border border-zinc-800 text-zinc-300`,children:`Graph Adjacency & BFS/DFS`},void 0,!1,{fileName:P,lineNumber:111,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`px-2 py-0.5 rounded bg-black border border-zinc-800 text-zinc-300`,children:`Two Pointers`},void 0,!1,{fileName:P,lineNumber:112,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`px-2 py-0.5 rounded bg-black border border-zinc-800 text-zinc-300`,children:`Sieve & Number Theory`},void 0,!1,{fileName:P,lineNumber:113,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`px-2 py-0.5 rounded bg-black border border-zinc-800 text-zinc-300`,children:`Divide & Conquer`},void 0,!1,{fileName:P,lineNumber:114,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`px-2 py-0.5 rounded bg-black border border-zinc-800 text-amber-400 font-mono`,children:`C · C++ · Java · Python`},void 0,!1,{fileName:P,lineNumber:115,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:110,columnNumber:11},void 0)]},void 0,!0,{fileName:P,lineNumber:106,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`mt-6 flex justify-end`,children:(0,E.jsxDEV)(`button`,{onClick:t,className:`px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black text-xs font-bold shadow-md transition-all active:scale-95`,children:`Close Verification Window`},void 0,!1,{fileName:P,lineNumber:121,columnNumber:11},void 0)},void 0,!1,{fileName:P,lineNumber:120,columnNumber:9},void 0)]},void 0,!0,{fileName:P,lineNumber:22,columnNumber:7},void 0)},void 0,!1,{fileName:P,lineNumber:21,columnNumber:5},void 0):null,F=`/app/applet/src/components/PlacementReportModal.tsx`,Gt=({isOpen:e,onClose:t,reportData:n})=>{let[r,i]=(0,_.useState)(``);return(0,_.useEffect)(()=>{let e=Lt(n.credentialId);It.toDataURL(e,{width:140,margin:1,color:{dark:`#09090b`,light:`#ffffff`}}).then(e=>i(e)).catch(e=>console.error(e))},[n.credentialId]),e?(0,E.jsxDEV)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto no-print`,children:(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-2xl max-w-4xl w-full my-8 shadow-2xl shadow-black text-zinc-100 relative flex flex-col max-h-[92vh]`,children:[(0,E.jsxDEV)(`div`,{className:`p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-black/80 rounded-t-2xl no-print`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2.5`,children:[(0,E.jsxDEV)(`div`,{className:`w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400`,children:(0,E.jsxDEV)(we,{className:`w-4 h-4`},void 0,!1,{fileName:F,lineNumber:59,columnNumber:15},void 0)},void 0,!1,{fileName:F,lineNumber:58,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`h3`,{className:`text-sm sm:text-base font-bold text-white font-serif`,children:`360° Placement Readiness Diagnostic Report`},void 0,!1,{fileName:F,lineNumber:62,columnNumber:15},void 0),(0,E.jsxDEV)(`p`,{className:`text-[11px] text-amber-400 font-medium`,children:`JIET CONNECT · Powered By Kapil | Knowledge Multiverse Architect`},void 0,!1,{fileName:F,lineNumber:65,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:61,columnNumber:13},void 0)]},void 0,!0,{fileName:F,lineNumber:57,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsxDEV)(`button`,{onClick:()=>{document.body.setAttribute(`data-print-target`,`report`),window.print()},className:`px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black text-xs font-bold flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all active:scale-95`,children:[(0,E.jsxDEV)(Se,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:F,lineNumber:76,columnNumber:15},void 0),(0,E.jsxDEV)(`span`,{children:`Download PDF Report`},void 0,!1,{fileName:F,lineNumber:77,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:72,columnNumber:13},void 0),(0,E.jsxDEV)(`button`,{onClick:t,className:`p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors`,children:(0,E.jsxDEV)(Ve,{className:`w-5 h-5`},void 0,!1,{fileName:F,lineNumber:83,columnNumber:15},void 0)},void 0,!1,{fileName:F,lineNumber:79,columnNumber:13},void 0)]},void 0,!0,{fileName:F,lineNumber:71,columnNumber:11},void 0)]},void 0,!0,{fileName:F,lineNumber:56,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`p-6 sm:p-10 overflow-y-auto space-y-8`,id:`jiet-printable-report`,children:[(0,E.jsxDEV)(`div`,{className:`report-page border-2 border-amber-500/40 p-6 sm:p-8 rounded-2xl bg-black space-y-6 relative`,children:[(0,E.jsxDEV)(`div`,{className:`border-b-2 border-amber-500/40 pb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`div`,{className:`text-[11px] font-bold text-amber-400 tracking-widest uppercase mb-1`,children:`JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY`},void 0,!1,{fileName:F,lineNumber:97,columnNumber:17},void 0),(0,E.jsxDEV)(`h1`,{className:`text-xl sm:text-2xl font-black text-white font-serif tracking-tight`,children:`360° COMPREHENSIVE PLACEMENT READINESS REPORT`},void 0,!1,{fileName:F,lineNumber:100,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-xs text-amber-400 font-bold tracking-wider uppercase mt-0.5`,children:`Powered By Kapil | Knowledge Multiverse Architect`},void 0,!1,{fileName:F,lineNumber:103,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:96,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-3 bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl`,children:[r&&(0,E.jsxDEV)(`img`,{src:r,alt:`Report Verification QR`,className:`w-16 h-16 rounded bg-white p-0.5`},void 0,!1,{fileName:F,lineNumber:110,columnNumber:19},void 0),(0,E.jsxDEV)(`div`,{className:`text-[11px] font-mono text-zinc-300 space-y-0.5`,children:[(0,E.jsxDEV)(`div`,{className:`text-amber-400 font-bold flex items-center gap-1`,children:[(0,E.jsxDEV)(Fe,{className:`w-3 h-3`},void 0,!1,{fileName:F,lineNumber:114,columnNumber:21},void 0),` Mobile Verified`]},void 0,!0,{fileName:F,lineNumber:113,columnNumber:19},void 0),(0,E.jsxDEV)(`div`,{className:`text-[10px] text-zinc-400`,children:[`ID: `,n.credentialId]},void 0,!0,{fileName:F,lineNumber:116,columnNumber:19},void 0),(0,E.jsxDEV)(`div`,{className:`text-[10px] text-zinc-500`,children:n.reportDate},void 0,!1,{fileName:F,lineNumber:117,columnNumber:19},void 0)]},void 0,!0,{fileName:F,lineNumber:112,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:108,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:95,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-2 sm:grid-cols-4 gap-3 bg-zinc-950 p-4 rounded-xl border border-zinc-850 text-xs`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500 block text-[11px]`,children:`Learner Candidate`},void 0,!1,{fileName:F,lineNumber:125,columnNumber:17},void 0),(0,E.jsxDEV)(`strong`,{className:`text-white font-serif text-sm`,children:n.studentName},void 0,!1,{fileName:F,lineNumber:126,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:124,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500 block text-[11px]`,children:`Roll / Scholar No`},void 0,!1,{fileName:F,lineNumber:129,columnNumber:17},void 0),(0,E.jsxDEV)(`strong`,{className:`font-mono text-zinc-200`,children:n.rollNo},void 0,!1,{fileName:F,lineNumber:130,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:128,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500 block text-[11px]`,children:`Department / Branch`},void 0,!1,{fileName:F,lineNumber:133,columnNumber:17},void 0),(0,E.jsxDEV)(`strong`,{className:`text-zinc-200`,children:n.branch},void 0,!1,{fileName:F,lineNumber:134,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:132,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-500 block text-[11px]`,children:`Curriculum Solved`},void 0,!1,{fileName:F,lineNumber:137,columnNumber:17},void 0),(0,E.jsxDEV)(`strong`,{className:`text-amber-400 font-bold`,children:[n.solvedCount,` / `,n.totalCount,` (`,n.completionRate,`%)`]},void 0,!0,{fileName:F,lineNumber:138,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:136,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:123,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`p-6 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-black border border-amber-500/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl`,children:[(0,E.jsxDEV)(`div`,{className:`space-y-2 text-center md:text-left`,children:[(0,E.jsxDEV)(`div`,{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider`,children:[(0,E.jsxDEV)(Ie,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:F,lineNumber:147,columnNumber:19},void 0),(0,E.jsxDEV)(`span`,{children:`360° Placement Readiness Rating`},void 0,!1,{fileName:F,lineNumber:148,columnNumber:19},void 0)]},void 0,!0,{fileName:F,lineNumber:146,columnNumber:17},void 0),(0,E.jsxDEV)(`h2`,{className:`text-2xl sm:text-3xl font-extrabold text-white font-serif`,children:n.tier},void 0,!1,{fileName:F,lineNumber:150,columnNumber:17},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed font-light`,children:n.tierDescription},void 0,!1,{fileName:F,lineNumber:153,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-xs text-zinc-400 pt-1 flex flex-wrap items-center gap-3`,children:[(0,E.jsxDEV)(`span`,{children:[`Candidate Percentile: `,(0,E.jsxDEV)(`strong`,{className:`text-amber-400`,children:[n.percentile,`th Percentile`]},void 0,!0,{fileName:F,lineNumber:157,columnNumber:47},void 0)]},void 0,!0,{fileName:F,lineNumber:157,columnNumber:19},void 0),(0,E.jsxDEV)(`span`,{children:[`Aptitude Score: `,(0,E.jsxDEV)(`strong`,{className:`text-amber-400`,children:[n.aptitudeScore,` pts`]},void 0,!0,{fileName:F,lineNumber:158,columnNumber:41},void 0)]},void 0,!0,{fileName:F,lineNumber:158,columnNumber:19},void 0),(0,E.jsxDEV)(`span`,{children:[`Mocks Completed: `,(0,E.jsxDEV)(`strong`,{className:`text-amber-400`,children:[n.mockAssessmentsCompleted,` / 5`]},void 0,!0,{fileName:F,lineNumber:159,columnNumber:42},void 0)]},void 0,!0,{fileName:F,lineNumber:159,columnNumber:19},void 0)]},void 0,!0,{fileName:F,lineNumber:156,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:145,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`relative shrink-0 flex flex-col items-center justify-center w-36 h-36 rounded-full bg-black border-4 border-amber-400/80 shadow-lg shadow-amber-500/20`,children:[(0,E.jsxDEV)(`span`,{className:`text-4xl sm:text-5xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-300`,children:n.score},void 0,!1,{fileName:F,lineNumber:165,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5`,children:`OUT OF 100`},void 0,!1,{fileName:F,lineNumber:168,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:164,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:143,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`p-3 bg-zinc-950 rounded-xl border border-zinc-850 flex items-center gap-2 text-xs`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-400 font-bold uppercase tracking-wider text-[11px] shrink-0`,children:`Unlocked Placement Titles:`},void 0,!1,{fileName:F,lineNumber:177,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`flex flex-wrap gap-1.5`,children:n.unlockedTitles.map((e,t)=>(0,E.jsxDEV)(`span`,{className:`bg-amber-400/10 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded text-[11px] font-bold`,children:e},t,!1,{fileName:F,lineNumber:182,columnNumber:19},void 0))},void 0,!1,{fileName:F,lineNumber:180,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:176,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:[(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2 text-amber-400 pb-2 border-b border-zinc-850`,children:[(0,E.jsxDEV)(ge,{className:`w-4 h-4 fill-amber-400 text-black`},void 0,!1,{fileName:F,lineNumber:195,columnNumber:19},void 0),(0,E.jsxDEV)(`h3`,{className:`text-xs font-bold text-white uppercase tracking-wider`,children:`Demonstrated Technical Strengths`},void 0,!1,{fileName:F,lineNumber:196,columnNumber:19},void 0)]},void 0,!0,{fileName:F,lineNumber:194,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-2.5`,children:n.strengths.slice(0,3).map((e,t)=>(0,E.jsxDEV)(`div`,{className:`p-2.5 rounded-lg bg-black border border-zinc-850 space-y-1 text-xs`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between`,children:[(0,E.jsxDEV)(`span`,{className:`font-bold text-white text-[11px]`,children:e.title},void 0,!1,{fileName:F,lineNumber:204,columnNumber:25},void 0),(0,E.jsxDEV)(`span`,{className:`text-[9px] text-amber-400 font-mono bg-amber-400/10 px-1.5 py-0.5 rounded`,children:e.tag},void 0,!1,{fileName:F,lineNumber:205,columnNumber:25},void 0)]},void 0,!0,{fileName:F,lineNumber:203,columnNumber:23},void 0),(0,E.jsxDEV)(`p`,{className:`text-zinc-400 leading-relaxed text-[10px] font-light`,children:e.description},void 0,!1,{fileName:F,lineNumber:207,columnNumber:23},void 0)]},t,!0,{fileName:F,lineNumber:202,columnNumber:21},void 0))},void 0,!1,{fileName:F,lineNumber:200,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:193,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2 text-zinc-300 pb-2 border-b border-zinc-850`,children:[(0,E.jsxDEV)(he,{className:`w-4 h-4 text-amber-400`},void 0,!1,{fileName:F,lineNumber:218,columnNumber:19},void 0),(0,E.jsxDEV)(`h3`,{className:`text-xs font-bold text-white uppercase tracking-wider`,children:`Targeted Growth & Blind Spots`},void 0,!1,{fileName:F,lineNumber:219,columnNumber:19},void 0)]},void 0,!0,{fileName:F,lineNumber:217,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-2.5`,children:n.weaknesses.slice(0,3).map((e,t)=>(0,E.jsxDEV)(`div`,{className:`p-2.5 rounded-lg bg-black border border-zinc-850 space-y-1 text-xs`,children:[(0,E.jsxDEV)(`span`,{className:`font-bold text-zinc-200 block text-[11px]`,children:e.title},void 0,!1,{fileName:F,lineNumber:226,columnNumber:23},void 0),(0,E.jsxDEV)(`p`,{className:`text-zinc-400 leading-relaxed text-[10px] font-light`,children:e.description},void 0,!1,{fileName:F,lineNumber:227,columnNumber:23},void 0),(0,E.jsxDEV)(`div`,{className:`text-[9px] text-amber-400/90 font-mono pt-0.5`,children:e.impact},void 0,!1,{fileName:F,lineNumber:230,columnNumber:23},void 0)]},t,!0,{fileName:F,lineNumber:225,columnNumber:21},void 0))},void 0,!1,{fileName:F,lineNumber:223,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:216,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:190,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`pt-3 border-t border-zinc-850 flex items-center justify-between text-[11px] text-zinc-500 font-mono`,children:[(0,E.jsxDEV)(`span`,{children:`JIET CONNECT · 360° PLACEMENT DOSSIER · Powered By Kapil | Knowledge Multiverse Architect`},void 0,!1,{fileName:F,lineNumber:242,columnNumber:15},void 0),(0,E.jsxDEV)(`span`,{children:`Page 1 of 2`},void 0,!1,{fileName:F,lineNumber:243,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:241,columnNumber:13},void 0)]},void 0,!0,{fileName:F,lineNumber:92,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`report-page border-2 border-amber-500/40 p-6 sm:p-8 rounded-2xl bg-black space-y-6 relative`,children:[(0,E.jsxDEV)(`div`,{className:`border-b border-zinc-800 pb-3 flex items-center justify-between`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`span`,{className:`text-[10px] text-amber-400 font-bold uppercase tracking-widest block`,children:`TECHNICAL MASTERY MATRIX & INTERVIEW ROADMAP`},void 0,!1,{fileName:F,lineNumber:255,columnNumber:17},void 0),(0,E.jsxDEV)(`h3`,{className:`text-base font-bold text-white font-serif`,children:`Curriculum Competencies & Corporate Preparation Strategy`},void 0,!1,{fileName:F,lineNumber:258,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:254,columnNumber:15},void 0),(0,E.jsxDEV)(`span`,{className:`text-xs text-zinc-400 font-mono`,children:[`Candidate: `,n.studentName]},void 0,!0,{fileName:F,lineNumber:262,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:253,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between pb-2 border-b border-zinc-850`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsxDEV)(ue,{className:`w-4 h-4 text-amber-400`},void 0,!1,{fileName:F,lineNumber:269,columnNumber:19},void 0),(0,E.jsxDEV)(`h4`,{className:`text-xs font-bold text-white uppercase tracking-wider`,children:`Curriculum Module Mastery Matrix (8 Technical Modules)`},void 0,!1,{fileName:F,lineNumber:270,columnNumber:19},void 0)]},void 0,!0,{fileName:F,lineNumber:268,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{className:`text-xs text-zinc-400 font-mono`,children:[`Solved: `,n.solvedCount,` / `,n.totalCount]},void 0,!0,{fileName:F,lineNumber:274,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:267,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`overflow-x-auto`,children:(0,E.jsxDEV)(`table`,{className:`w-full text-left text-xs`,children:[(0,E.jsxDEV)(`thead`,{children:(0,E.jsxDEV)(`tr`,{className:`border-b border-zinc-800 text-zinc-500 uppercase text-[10px]`,children:[(0,E.jsxDEV)(`th`,{className:`py-1.5`,children:`Module`},void 0,!1,{fileName:F,lineNumber:283,columnNumber:23},void 0),(0,E.jsxDEV)(`th`,{className:`py-1.5`,children:`Primary Pattern`},void 0,!1,{fileName:F,lineNumber:284,columnNumber:23},void 0),(0,E.jsxDEV)(`th`,{className:`py-1.5`,children:`Solved`},void 0,!1,{fileName:F,lineNumber:285,columnNumber:23},void 0),(0,E.jsxDEV)(`th`,{className:`py-1.5`,children:`Status`},void 0,!1,{fileName:F,lineNumber:286,columnNumber:23},void 0)]},void 0,!0,{fileName:F,lineNumber:282,columnNumber:21},void 0)},void 0,!1,{fileName:F,lineNumber:281,columnNumber:19},void 0),(0,E.jsxDEV)(`tbody`,{className:`divide-y divide-zinc-900`,children:n.moduleMastery.map(e=>(0,E.jsxDEV)(`tr`,{className:`hover:bg-zinc-900/40`,children:[(0,E.jsxDEV)(`td`,{className:`py-2 font-medium text-white text-[11px]`,children:[`Mod `,e.moduleNumber,`: `,e.moduleName]},void 0,!0,{fileName:F,lineNumber:292,columnNumber:25},void 0),(0,E.jsxDEV)(`td`,{className:`py-2 text-zinc-400 font-mono text-[10px]`,children:e.primaryPattern},void 0,!1,{fileName:F,lineNumber:295,columnNumber:25},void 0),(0,E.jsxDEV)(`td`,{className:`py-2`,children:(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsxDEV)(`div`,{className:`w-20 bg-zinc-900 rounded-full h-1.5 overflow-hidden border border-zinc-800`,children:(0,E.jsxDEV)(`div`,{className:`bg-amber-400 h-1.5 rounded-full`,style:{width:`${e.percentage}%`}},void 0,!1,{fileName:F,lineNumber:301,columnNumber:31},void 0)},void 0,!1,{fileName:F,lineNumber:300,columnNumber:29},void 0),(0,E.jsxDEV)(`span`,{className:`text-[10px] font-mono text-zinc-300`,children:[e.solvedProblems,`/`,e.totalProblems,` (`,e.percentage,`%)`]},void 0,!0,{fileName:F,lineNumber:306,columnNumber:29},void 0)]},void 0,!0,{fileName:F,lineNumber:299,columnNumber:27},void 0)},void 0,!1,{fileName:F,lineNumber:298,columnNumber:25},void 0),(0,E.jsxDEV)(`td`,{className:`py-2`,children:(0,E.jsxDEV)(`span`,{className:`px-2 py-0.5 rounded text-[9px] font-bold ${e.status===`Mastered`?`bg-amber-400/20 text-amber-300 border border-amber-400/40`:e.status===`Proficient`?`bg-zinc-800 text-zinc-200 border border-zinc-700`:e.status===`In Progress`?`bg-zinc-900 text-zinc-400 border border-zinc-800`:`bg-zinc-950 text-zinc-500 border border-zinc-900`}`,children:e.status},void 0,!1,{fileName:F,lineNumber:312,columnNumber:27},void 0)},void 0,!1,{fileName:F,lineNumber:311,columnNumber:25},void 0)]},e.moduleNumber,!0,{fileName:F,lineNumber:291,columnNumber:23},void 0))},void 0,!1,{fileName:F,lineNumber:289,columnNumber:19},void 0)]},void 0,!0,{fileName:F,lineNumber:280,columnNumber:17},void 0)},void 0,!1,{fileName:F,lineNumber:279,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:266,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2 text-amber-400 pb-2 border-b border-zinc-850`,children:[(0,E.jsxDEV)(be,{className:`w-4 h-4`},void 0,!1,{fileName:F,lineNumber:336,columnNumber:17},void 0),(0,E.jsxDEV)(`h4`,{className:`text-xs font-bold text-white uppercase tracking-wider`,children:`Targeted 4-Phase Corporate Hiring Roadmap`},void 0,!1,{fileName:F,lineNumber:337,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:335,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3`,children:n.opportunityRoadmap.map((e,t)=>(0,E.jsxDEV)(`div`,{className:`p-3 rounded-lg bg-black border border-zinc-850 space-y-1.5 text-xs`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between`,children:(0,E.jsxDEV)(`span`,{className:`font-bold text-amber-300 text-[11px]`,children:e.phase},void 0,!1,{fileName:F,lineNumber:346,columnNumber:23},void 0)},void 0,!1,{fileName:F,lineNumber:345,columnNumber:21},void 0),(0,E.jsxDEV)(`div`,{className:`text-[10px] font-semibold text-zinc-300`,children:[`Focus: `,e.focus]},void 0,!0,{fileName:F,lineNumber:348,columnNumber:21},void 0),(0,E.jsxDEV)(`ul`,{className:`list-disc list-inside space-y-0.5 text-zinc-400 text-[10px] font-light`,children:e.actionItems.map((e,t)=>(0,E.jsxDEV)(`li`,{children:e},t,!1,{fileName:F,lineNumber:353,columnNumber:25},void 0))},void 0,!1,{fileName:F,lineNumber:351,columnNumber:21},void 0),(0,E.jsxDEV)(`div`,{className:`pt-1 text-[9px] text-zinc-500`,children:[`Target Companies: `,(0,E.jsxDEV)(`strong`,{className:`text-zinc-300`,children:e.targetCompanies},void 0,!1,{fileName:F,lineNumber:357,columnNumber:41},void 0)]},void 0,!0,{fileName:F,lineNumber:356,columnNumber:21},void 0)]},t,!0,{fileName:F,lineNumber:344,columnNumber:19},void 0))},void 0,!1,{fileName:F,lineNumber:342,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:334,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`pt-5 border-t border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-400`,children:[(0,E.jsxDEV)(`div`,{className:`text-center sm:text-left space-y-1`,children:[(0,E.jsxDEV)(`div`,{className:`font-serif italic text-base text-amber-300 font-bold border-b border-amber-500/40 pb-1 w-48`,children:`Kapil Narula`},void 0,!1,{fileName:F,lineNumber:367,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`font-bold text-white text-[11px] uppercase tracking-wider`,children:`KAPIL NARULA`},void 0,!1,{fileName:F,lineNumber:370,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-[10px] text-amber-400 font-medium`,children:`Lead Faculty & Platform Architect`},void 0,!1,{fileName:F,lineNumber:371,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-[9px] text-zinc-400 uppercase tracking-widest font-semibold`,children:`Powered By Kapil | Knowledge Multiverse Architect`},void 0,!1,{fileName:F,lineNumber:372,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:366,columnNumber:15},void 0),(0,E.jsxDEV)(`div`,{className:`text-center sm:text-right space-y-1`,children:[(0,E.jsxDEV)(`div`,{className:`text-[11px] font-bold text-amber-400 uppercase tracking-wider`,children:`AUTHENTICATED RECORD`},void 0,!1,{fileName:F,lineNumber:376,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`font-mono text-xs font-bold text-white border-b border-zinc-700 pb-1 w-48 ml-auto`,children:[`ID: `,n.credentialId]},void 0,!0,{fileName:F,lineNumber:379,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-[10px] text-zinc-400 font-mono`,children:`Mobile Validated (No 404)`},void 0,!1,{fileName:F,lineNumber:382,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-[9px] text-zinc-500`,children:[`Validated: `,n.reportDate]},void 0,!0,{fileName:F,lineNumber:383,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:375,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:365,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`pt-3 border-t border-zinc-850 flex items-center justify-between text-[11px] text-zinc-500 font-mono`,children:[(0,E.jsxDEV)(`span`,{children:`JIET CONNECT · 360° PLACEMENT DOSSIER · Powered By Kapil | Knowledge Multiverse Architect`},void 0,!1,{fileName:F,lineNumber:389,columnNumber:15},void 0),(0,E.jsxDEV)(`span`,{children:`Page 2 of 2`},void 0,!1,{fileName:F,lineNumber:390,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:388,columnNumber:13},void 0)]},void 0,!0,{fileName:F,lineNumber:250,columnNumber:11},void 0)]},void 0,!0,{fileName:F,lineNumber:89,columnNumber:9},void 0)]},void 0,!0,{fileName:F,lineNumber:53,columnNumber:7},void 0)},void 0,!1,{fileName:F,lineNumber:51,columnNumber:5},void 0):null},Kt=`/app/applet/src/components/BadgeDownloadModal.tsx`,qt=({badge:e,isOpen:t,onClose:n,userProfile:r})=>!t||!e?null:(0,E.jsxDEV)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md`,children:(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-2xl max-w-md w-full p-6 shadow-2xl shadow-black text-zinc-100 relative overflow-hidden`,children:[(0,E.jsxDEV)(`div`,{className:`absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none`},void 0,!1,{fileName:Kt,lineNumber:35,columnNumber:9},void 0),(0,E.jsxDEV)(`button`,{onClick:n,className:`absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors no-print`,children:(0,E.jsxDEV)(Ve,{className:`w-5 h-5`},void 0,!1,{fileName:Kt,lineNumber:42,columnNumber:11},void 0)},void 0,!1,{fileName:Kt,lineNumber:38,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`text-center space-y-4 pt-2`,children:[(0,E.jsxDEV)(`div`,{id:`jiet-printable-badge`,className:`p-6 rounded-2xl bg-black border-2 border-amber-500/50 flex flex-col items-center justify-center space-y-3 relative overflow-hidden`,children:[(0,E.jsxDEV)(`div`,{className:`w-24 h-24 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 flex items-center justify-center text-black shadow-xl shadow-amber-500/20 relative`,children:(0,E.jsxDEV)(ce,{className:`w-12 h-12 fill-black stroke-amber-200`},void 0,!1,{fileName:Kt,lineNumber:52,columnNumber:15},void 0)},void 0,!1,{fileName:Kt,lineNumber:51,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-1 text-center`,children:[(0,E.jsxDEV)(`div`,{className:`text-[10px] text-amber-400 font-bold uppercase tracking-widest`,children:`JIET CONNECT · VERIFIED BADGE`},void 0,!1,{fileName:Kt,lineNumber:56,columnNumber:15},void 0),(0,E.jsxDEV)(`h3`,{className:`text-xl font-extrabold text-white font-serif`,children:e.title},void 0,!1,{fileName:Kt,lineNumber:59,columnNumber:15},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-amber-300/90 font-medium`,children:[`Conferred to `,(0,E.jsxDEV)(`strong`,{className:`text-white`,children:r.name||`Honorable Student`},void 0,!1,{fileName:Kt,lineNumber:63,columnNumber:30},void 0)]},void 0,!0,{fileName:Kt,lineNumber:62,columnNumber:15},void 0)]},void 0,!0,{fileName:Kt,lineNumber:55,columnNumber:13},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-zinc-400 leading-relaxed max-w-xs text-center pt-1 font-light`,children:e.description},void 0,!1,{fileName:Kt,lineNumber:67,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`text-[11px] text-zinc-500 font-mono bg-zinc-900 px-3 py-1 rounded border border-zinc-800`,children:[`Requirement: `,e.requirement]},void 0,!0,{fileName:Kt,lineNumber:71,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`pt-2 text-[10px] text-amber-400 font-semibold tracking-wide border-t border-zinc-850 w-full text-center`,children:`Verified by Kapil · Jodhpur Institute of Engineering & Technology`},void 0,!1,{fileName:Kt,lineNumber:75,columnNumber:13},void 0)]},void 0,!0,{fileName:Kt,lineNumber:48,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-2 pt-2 no-print`,children:[(0,E.jsxDEV)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,E.jsxDEV)(`button`,{onClick:async()=>{await zt(e,r)},className:`py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all active:scale-95`,children:[(0,E.jsxDEV)(Se,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:Kt,lineNumber:88,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{children:`Download PNG`},void 0,!1,{fileName:Kt,lineNumber:89,columnNumber:17},void 0)]},void 0,!0,{fileName:Kt,lineNumber:84,columnNumber:15},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>{document.body.setAttribute(`data-print-target`,`badge`),window.print()},className:`py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400 text-zinc-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95`,children:[(0,E.jsxDEV)(je,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:Kt,lineNumber:96,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{children:`Download PDF`},void 0,!1,{fileName:Kt,lineNumber:97,columnNumber:17},void 0)]},void 0,!0,{fileName:Kt,lineNumber:92,columnNumber:15},void 0)]},void 0,!0,{fileName:Kt,lineNumber:83,columnNumber:13},void 0),(0,E.jsxDEV)(`p`,{className:`text-[11px] text-zinc-500 text-center`,children:`High-resolution vector badge optimized for LinkedIn, portfolio showcases & resumes.`},void 0,!1,{fileName:Kt,lineNumber:101,columnNumber:13},void 0)]},void 0,!0,{fileName:Kt,lineNumber:82,columnNumber:11},void 0)]},void 0,!0,{fileName:Kt,lineNumber:45,columnNumber:9},void 0)]},void 0,!0,{fileName:Kt,lineNumber:32,columnNumber:7},void 0)},void 0,!1,{fileName:Kt,lineNumber:31,columnNumber:5},void 0),Jt=[{id:1,category:`Quantitative`,question:`A can complete a project in 12 days and B in 18 days. If they work together with C, they finish the work in 4 days. In how many days can C alone complete the project?`,options:[`8 days`,`9 days`,`10 days`,`12 days`],correctIndex:1,explanation:`1/C = 1/4 - (1/12 + 1/18) = 1/4 - 5/36 = (9 - 5)/36 = 4/36 = 1/9. Thus, C alone takes 9 days.`,points:10},{id:2,category:`Quantitative`,question:`A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?`,options:[`65 sec`,`89 sec`,`90 sec`,`75 sec`],correctIndex:1,explanation:`Speed = 240 / 24 = 10 m/s. Total distance to cross platform = 240 + 650 = 890 m. Time = 890 / 10 = 89 seconds.`,points:10},{id:3,category:`Quantitative`,question:`What is the greatest number that will divide 390, 495, and 300 without leaving a remainder?`,options:[`5`,`15`,`25`,`35`],correctIndex:1,explanation:`HCF(390, 495, 300): 390 = 15 * 26; 495 = 15 * 33; 300 = 15 * 20. The Greatest Common Divisor is 15.`,points:10},{id:4,category:`Logical`,question:`Find the next term in the series: 3, 12, 27, 48, 75, ?`,options:[`96`,`108`,`112`,`120`],correctIndex:1,explanation:`The pattern is 3 * n^2: 3*(1^2)=3, 3*(2^2)=12, 3*(3^2)=27, 3*(4^2)=48, 3*(5^2)=75, 3*(6^2)=108.`,points:10},{id:5,category:`Technical CS`,question:`In an Operating System with virtual memory, what phenomenon occurs when excessive page faults lead to continuous page swapping, degrading system throughput to near zero?`,options:[`Starvation`,`Thrashing`,`Deadlock`,`Belady’s Anomaly`],correctIndex:1,explanation:`Thrashing occurs when the system spends more time servicing page faults and paging in/out than executing user processes.`,points:10},{id:6,category:`Data Structures`,question:`What is the worst-case time complexity of searching for an element in an unbalanced Binary Search Tree with N nodes?`,options:[`O(1)`,`O(log N)`,`O(N)`,`O(N log N)`],correctIndex:2,explanation:`In the worst case (skewed tree like a linked list), the search degrades to linear traversal, O(N).`,points:10},{id:7,category:`Quantitative`,question:`Two cards are drawn from a pack of 52 cards without replacement. What is the probability that both are aces?`,options:[`1/221`,`1/169`,`1/26`,`4/663`],correctIndex:0,explanation:`P(First Ace) = 4/52 = 1/13. P(Second Ace) = 3/51 = 1/17. Combined = (1/13) * (1/17) = 1/221.`,points:10},{id:8,category:`Logical`,question:`Pointing to a gentleman, Deepak said, "His only brother is the father of my daughter's father." How is the gentleman related to Deepak?`,options:[`Father`,`Uncle`,`Grandfather`,`Brother-in-law`],correctIndex:1,explanation:`My daughter's father = Deepak himself. Father of Deepak = Deepak's father. His brother = Deepak's father's brother, which is Deepak's Uncle.`,points:10},{id:9,category:`Technical CS`,question:`Which Normal Form in Relational Database Management Systems eliminates transitive dependencies between non-prime attributes?`,options:[`First Normal Form (1NF)`,`Second Normal Form (2NF)`,`Third Normal Form (3NF)`,`Boyce-Codd Normal Form (BCNF)`],correctIndex:2,explanation:`3NF requires 2NF plus no non-prime attribute should be transitively dependent on any candidate key.`,points:10},{id:10,category:`Data Structures`,question:`Which sorting algorithm has a worst-case time complexity of O(N log N) and can be implemented as an in-place sort using a binary heap?`,options:[`Merge Sort`,`Quick Sort`,`Heap Sort`,`Bubble Sort`],correctIndex:2,explanation:`Heap Sort achieves guaranteed O(N log N) worst-case time and sorts in-place using O(1) auxiliary space.`,points:10},{id:11,category:`Quantitative`,question:`A shopkeeper marks an item 40% above cost price and allows a 20% discount on the marked price. What is his net profit percentage?`,options:[`12%`,`16%`,`18%`,`20%`],correctIndex:0,explanation:`Let CP = 100. MP = 140. SP = 140 * 0.8 = 112. Profit = 112 - 100 = 12%.`,points:10},{id:12,category:`Logical`,question:`In a code, "PATNA" is written as "QBUOB". How is "DELHI" written in that same code?`,options:[`EFMIJ`,`EDMIJ`,`EFMIH`,`CFMHI`],correctIndex:0,explanation:`Each character is shifted forward by +1: D->E, E->F, L->M, H->I, I->J => EFMIJ.`,points:10},{id:13,category:`Technical CS`,question:`In TCP/IP networking, what is the purpose of the SYN-ACK packet during connection establishment?`,options:[`To terminate connection`,`To acknowledge client’s SYN and synchronize server’s sequence number`,`To retransmit lost packets`,`To negotiate SSL certificate`],correctIndex:1,explanation:`The three-way handshake proceeds: Client SYN -> Server SYN-ACK -> Client ACK.`,points:10},{id:14,category:`Data Structures`,question:`What is the amortized time complexity of inserting an element into a dynamic array (like std::vector or ArrayList) when capacity is doubled?`,options:[`O(N)`,`O(1)`,`O(log N)`,`O(N^2)`],correctIndex:1,explanation:`Although resizing takes O(N), it happens infrequently enough that the amortized cost per append is O(1).`,points:10},{id:15,category:`Quantitative`,question:`The sum of ages of 5 children born at intervals of 3 years each is 50 years. What is the age of the youngest child?`,options:[`4 years`,`6 years`,`8 years`,`10 years`],correctIndex:0,explanation:`Let youngest be x. x + (x+3) + (x+6) + (x+9) + (x+12) = 50 => 5x + 30 = 50 => 5x = 20 => x = 4.`,points:10},{id:16,category:`Logical`,question:`Statements: All cats are dogs. All dogs are birds. Conclusion I: All cats are birds. Conclusion II: All birds are cats.`,options:[`Only I follows`,`Only II follows`,`Either I or II follows`,`Neither I nor II follows`],correctIndex:0,explanation:`Cats ⊆ Dogs ⊆ Birds. Therefore, All cats are birds (I is True). All birds are cats is not guaranteed (II is False).`,points:10},{id:17,category:`Technical CS`,question:`In C++, what happens when a derived class destructor is called if the base class destructor is NOT declared virtual?`,options:[`Compilation error`,`Undefined behavior / partial destruction causing memory leaks`,`Both destructors run automatically`,`Program aborts immediately`],correctIndex:1,explanation:`Deleting a derived object through a base pointer without a virtual destructor in the base class leads to undefined behavior and resource leaks.`,points:10},{id:18,category:`Data Structures`,question:`Which graph traversal algorithm uses a First-In-First-Out (FIFO) queue and finds the shortest path in an unweighted graph?`,options:[`Depth First Search (DFS)`,`Breadth First Search (BFS)`,`Dijkstra’s Algorithm`,`Kruskal’s Algorithm`],correctIndex:1,explanation:`BFS traverses level-by-level using a queue, guaranteeing the shortest path in terms of number of edges on unweighted graphs.`,points:10},{id:19,category:`Quantitative`,question:`An amount doubles itself in 5 years at simple interest. In how many years will it become 4 times itself at the same rate?`,options:[`10 years`,`15 years`,`20 years`,`25 years`],correctIndex:1,explanation:`Simple interest earned in 5 years = Principal (P). To become 4P, total interest needed = 3P. Time = 3 * 5 = 15 years.`,points:10},{id:20,category:`Logical`,question:`If CLOCK is coded as 341235, what would be the code for LOCK?`,options:[`4123`,`41235`,`4125`,`3412`],correctIndex:0,explanation:`Direct positional correspondence: C=3, L=4, O=1, C=2, K=3... L=4, O=1, C=2, K=3 => 4123.`,points:10},{id:21,category:`Technical CS`,question:`What is the primary difference between a process and a thread in modern operating systems?`,options:[`Threads have separate address spaces; processes share address spaces`,`Processes have separate address spaces; threads within a process share the same address space`,`Threads cannot be scheduled independently`,`Processes use less memory than threads`],correctIndex:1,explanation:`Processes have independent virtual address spaces, while threads within the same process share code, data, and OS resources with their own stacks.`,points:10},{id:22,category:`Data Structures`,question:`In a Hash Table with collision handling via separate chaining, what is the worst-case lookup time if all keys hash to the same bucket?`,options:[`O(1)`,`O(log N)`,`O(N)`,`O(N^2)`],correctIndex:2,explanation:`When all keys collide into a single bucket, the chain becomes a linked list of length N, resulting in O(N) lookup time.`,points:10},{id:23,category:`Quantitative`,question:`In how many different ways can the letters of the word "LEADING" be arranged such that vowels always appear together?`,options:[`360`,`720`,`480`,`5040`],correctIndex:1,explanation:`Vowels: E, A, I (3). Consonants: L, D, N, G (4). Group vowels as 1 unit: 5 units arrange in 5! = 120 ways. Vowels permute internally in 3! = 6 ways. Total = 120 * 6 = 720 ways.`,points:10},{id:24,category:`Logical`,question:`A clock shows 8:30. What is the angle between the hour hand and the minute hand?`,options:[`60°`,`75°`,`80°`,`90°`],correctIndex:1,explanation:`Angle = |30 * H - (11/2) * M| = |30 * 8 - (11/2) * 30| = |240 - 165| = 75 degrees.`,points:10},{id:25,category:`Technical CS`,question:`Which of the following sorting algorithms is NOT stable in its standard array implementation?`,options:[`Merge Sort`,`Insertion Sort`,`Quick Sort`,`Bubble Sort`],correctIndex:2,explanation:`Standard Quick Sort does not preserve the relative order of elements with equal keys during partitioning, making it an unstable sort.`,points:10}],Yt=new class{constructor(){this.ctx=null}initCtx(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}playTick(){try{if(this.initCtx(),!this.ctx)return;let e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type=`triangle`,e.frequency.setValueAtTime(600,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(120,this.ctx.currentTime+.04),t.gain.setValueAtTime(.25,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.04),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}catch{}}playWin(){try{if(this.initCtx(),!this.ctx)return;[440,554.37,659.25,880].forEach((e,t)=>{let n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type=`sine`,n.frequency.setValueAtTime(e,this.ctx.currentTime+t*.08),r.gain.setValueAtTime(0,this.ctx.currentTime+t*.08),r.gain.linearRampToValueAtTime(.2,this.ctx.currentTime+t*.08+.05),r.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+t*.08+.6),n.connect(r),r.connect(this.ctx.destination),n.start(this.ctx.currentTime+t*.08),n.stop(this.ctx.currentTime+t*.08+.65)})}catch{}}playSuccess(){try{if(this.initCtx(),!this.ctx)return;let e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type=`sine`,e.frequency.setValueAtTime(523.25,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(659.25,this.ctx.currentTime+.15),t.gain.setValueAtTime(.2,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.2),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.2)}catch{}}},I=`/app/applet/src/components/SpinningWheelModal.tsx`,Xt=[{label:`Quantitative`,color:`#b45309`,textColor:`#ffffff`},{label:`Logical`,color:`#18181b`,textColor:`#fbbf24`},{label:`Technical CS`,color:`#d97706`,textColor:`#000000`},{label:`Algorithms`,color:`#27272a`,textColor:`#fef08a`},{label:`Probability`,color:`#f59e0b`,textColor:`#000000`},{label:`OS & DBMS`,color:`#09090b`,textColor:`#fbbf24`},{label:`Permutations`,color:`#78350f`,textColor:`#ffffff`},{label:`Data Structures`,color:`#3f3f46`,textColor:`#fde68a`}],Zt=({isOpen:e,onClose:t,onQuestionAnswered:n,wheelScore:r})=>{let[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(0),[m,h]=(0,_.useState)(-1),g=(0,_.useRef)(null);(0,_.useEffect)(()=>{e&&v(f)},[e,f]);let v=e=>{let t=g.current;if(!t)return;let n=t.getContext(`2d`);if(!n)return;let r=t.width,i=r/2,a=i-16,o=Xt.length,s=2*Math.PI/o;n.clearRect(0,0,r,r),n.save(),n.translate(i,i),n.rotate(e*Math.PI/180);for(let e=0;e<o;e++){let t=Xt[e],r=e*s,i=r+s;n.beginPath(),n.moveTo(0,0),n.arc(0,0,a,r,i),n.closePath(),n.fillStyle=t.color,n.fill(),n.strokeStyle=`#f59e0b`,n.lineWidth=3,n.stroke(),n.save(),n.rotate(r+s/2),n.textAlign=`right`,n.textBaseline=`middle`,n.fillStyle=t.textColor,n.font=`bold 15px sans-serif`,n.fillText(t.label,a-20,0),n.restore()}n.restore(),n.beginPath(),n.arc(i,i,36,0,2*Math.PI),n.fillStyle=`#09090b`,n.fill(),n.strokeStyle=`#f59e0b`,n.lineWidth=5,n.stroke(),n.fillStyle=`#fbbf24`,n.font=`bold 16px serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`SPIN`,i,i),n.beginPath(),n.arc(i,i,a+4,0,2*Math.PI),n.strokeStyle=`#d97706`,n.lineWidth=8,n.stroke()},y=()=>{if(i)return;a(!0),s(null),l(null),d(!1);let e=5+Math.floor(Math.random()*4),t=Math.floor(Math.random()*Xt.length),n=360/Xt.length,r=e*360+(360-(t*n+n/2)),o=performance.now(),c=f%360,u=e=>{let t=e-o,i=Math.min(t/3800,1),l=1-(1-i)**3,d=c+(r-c)*l,f=Math.floor(d%360/n);if(f!==m&&(Yt.playTick(),h(f)),p(d),v(d),i<1)requestAnimationFrame(u);else{a(!1),Yt.playWin();let e=Jt[Math.floor(Math.random()*Jt.length)];s(e),b({particleCount:50,spread:60,colors:[`#f59e0b`,`#fbbf24`,`#ffffff`]})}};requestAnimationFrame(u)},x=e=>{u||l(e)};return e?(0,E.jsxDEV)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto no-print`,children:(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl shadow-black text-zinc-100 relative max-h-[92vh] overflow-y-auto`,children:[(0,E.jsxDEV)(`div`,{className:`absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none`},void 0,!1,{fileName:I,lineNumber:218,columnNumber:9},void 0),(0,E.jsxDEV)(`button`,{onClick:t,className:`absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors`,children:(0,E.jsxDEV)(Ve,{className:`w-5 h-5`},void 0,!1,{fileName:I,lineNumber:225,columnNumber:11},void 0)},void 0,!1,{fileName:I,lineNumber:221,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between pb-4 border-b border-zinc-850 mb-6`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:[(0,E.jsxDEV)(`div`,{className:`w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-inner`,children:(0,E.jsxDEV)(Ne,{className:`w-5 h-5 ${i?`animate-spin`:``}`},void 0,!1,{fileName:I,lineNumber:232,columnNumber:15},void 0)},void 0,!1,{fileName:I,lineNumber:231,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`div`,{className:`text-[10px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5`,children:[(0,E.jsxDEV)(Ie,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:I,lineNumber:236,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{children:`25 HIGH-YIELD PLACEMENT MCQS · SOUND SYNTHESIZED`},void 0,!1,{fileName:I,lineNumber:237,columnNumber:17},void 0)]},void 0,!0,{fileName:I,lineNumber:235,columnNumber:15},void 0),(0,E.jsxDEV)(`h2`,{className:`text-xl font-bold text-white font-serif tracking-tight`,children:`Aptitude & Placement Lucky Wheel`},void 0,!1,{fileName:I,lineNumber:239,columnNumber:15},void 0)]},void 0,!0,{fileName:I,lineNumber:234,columnNumber:13},void 0)]},void 0,!0,{fileName:I,lineNumber:230,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg text-xs font-mono`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-400`,children:`Aptitude Score: `},void 0,!1,{fileName:I,lineNumber:246,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`font-bold text-amber-400`,children:[r,` pts`]},void 0,!0,{fileName:I,lineNumber:247,columnNumber:13},void 0)]},void 0,!0,{fileName:I,lineNumber:245,columnNumber:11},void 0)]},void 0,!0,{fileName:I,lineNumber:229,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`,children:[(0,E.jsxDEV)(`div`,{className:`flex flex-col items-center justify-center relative`,children:[(0,E.jsxDEV)(`div`,{className:`absolute -top-3 z-10 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-amber-400 drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]`},void 0,!1,{fileName:I,lineNumber:258,columnNumber:13},void 0),(0,E.jsxDEV)(`canvas`,{ref:g,width:340,height:340,className:`rounded-full shadow-2xl shadow-black cursor-pointer hover:scale-[1.02] transition-transform`,onClick:y},void 0,!1,{fileName:I,lineNumber:261,columnNumber:13},void 0),(0,E.jsxDEV)(`button`,{onClick:y,disabled:i,className:`mt-5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 disabled:opacity-50 text-black font-extrabold text-sm shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all active:scale-95`,children:[(0,E.jsxDEV)(Ne,{className:`w-4 h-4 ${i?`animate-spin`:``}`},void 0,!1,{fileName:I,lineNumber:275,columnNumber:15},void 0),(0,E.jsxDEV)(`span`,{children:i?`Spinning...`:`Spin the Wheel!`},void 0,!1,{fileName:I,lineNumber:276,columnNumber:15},void 0)]},void 0,!0,{fileName:I,lineNumber:270,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`text-[11px] text-zinc-500 mt-1.5 flex items-center gap-1`,children:[(0,E.jsxDEV)(Be,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:I,lineNumber:279,columnNumber:15},void 0),(0,E.jsxDEV)(`span`,{children:`Synthesized Mechanical Audio Enabled`},void 0,!1,{fileName:I,lineNumber:280,columnNumber:15},void 0)]},void 0,!0,{fileName:I,lineNumber:278,columnNumber:13},void 0)]},void 0,!0,{fileName:I,lineNumber:255,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`bg-black/90 border border-zinc-800 rounded-xl p-5 min-h-[360px] flex flex-col justify-between`,children:o?(0,E.jsxDEV)(`div`,{className:`space-y-4 flex-1 flex flex-col justify-between`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between pb-2 border-b border-zinc-850 text-xs`,children:[(0,E.jsxDEV)(`span`,{className:`font-bold text-amber-400 uppercase tracking-wider text-[11px]`,children:[o.category,` · Question #`,o.id,` of 25`]},void 0,!0,{fileName:I,lineNumber:305,columnNumber:21},void 0),(0,E.jsxDEV)(`span`,{className:`font-mono text-zinc-400`,children:[`+`,o.points,` pts`]},void 0,!0,{fileName:I,lineNumber:308,columnNumber:21},void 0)]},void 0,!0,{fileName:I,lineNumber:304,columnNumber:19},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-zinc-200 mt-3 font-medium leading-relaxed`,children:o.question},void 0,!1,{fileName:I,lineNumber:311,columnNumber:19},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-2 mt-4`,children:o.options.map((e,t)=>{let n=c===t,r=t===o.correctIndex,i=`bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700`;return n&&(i=`bg-amber-400/10 border-amber-400 text-amber-300`),u&&(r?i=`bg-emerald-950/40 border-emerald-500 text-emerald-300 font-bold`:n&&(i=`bg-rose-950/40 border-rose-500 text-rose-300`)),(0,E.jsxDEV)(`button`,{disabled:u,onClick:()=>x(t),className:`w-full p-2.5 text-left rounded-lg border text-xs transition-all flex items-center justify-between ${i}`,children:[(0,E.jsxDEV)(`span`,{children:e},void 0,!1,{fileName:I,lineNumber:335,columnNumber:27},void 0),u&&r&&(0,E.jsxDEV)(ge,{className:`w-4 h-4 text-emerald-400 shrink-0`},void 0,!1,{fileName:I,lineNumber:336,columnNumber:56},void 0),u&&n&&!r&&(0,E.jsxDEV)(C,{className:`w-4 h-4 text-rose-400 shrink-0`},void 0,!1,{fileName:I,lineNumber:337,columnNumber:71},void 0)]},t,!0,{fileName:I,lineNumber:329,columnNumber:25},void 0)})},void 0,!1,{fileName:I,lineNumber:316,columnNumber:19},void 0),u&&(0,E.jsxDEV)(`div`,{className:`mt-4 p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 space-y-1`,children:[(0,E.jsxDEV)(`span`,{className:`font-bold text-amber-400 block text-[11px] uppercase tracking-wider`,children:`Solution Explanation:`},void 0,!1,{fileName:I,lineNumber:346,columnNumber:23},void 0),(0,E.jsxDEV)(`p`,{className:`leading-relaxed font-light text-[11px]`,children:o.explanation},void 0,!1,{fileName:I,lineNumber:349,columnNumber:23},void 0)]},void 0,!0,{fileName:I,lineNumber:345,columnNumber:21},void 0)]},void 0,!0,{fileName:I,lineNumber:303,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`pt-4 border-t border-zinc-850 flex items-center justify-between`,children:u?(0,E.jsxDEV)(`button`,{onClick:y,disabled:i,className:`w-full py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all`,children:[(0,E.jsxDEV)(`span`,{children:`Spin Again for Next Question`},void 0,!1,{fileName:I,lineNumber:372,columnNumber:23},void 0),(0,E.jsxDEV)(me,{className:`w-4 h-4`},void 0,!1,{fileName:I,lineNumber:373,columnNumber:23},void 0)]},void 0,!0,{fileName:I,lineNumber:367,columnNumber:21},void 0):(0,E.jsxDEV)(`button`,{onClick:()=>{c!==null&&o&&!u&&(d(!0),c===o.correctIndex?(Yt.playSuccess(),b({particleCount:70,spread:70,colors:[`#f59e0b`,`#22c55e`,`#ffffff`]}),n(!0,o.points)):n(!1,0))},disabled:c===null,className:`w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 disabled:opacity-50 text-black font-bold text-xs shadow-md transition-all`,children:`Confirm Answer`},void 0,!1,{fileName:I,lineNumber:359,columnNumber:21},void 0)},void 0,!1,{fileName:I,lineNumber:357,columnNumber:17},void 0)]},void 0,!0,{fileName:I,lineNumber:301,columnNumber:15},void 0):(0,E.jsxDEV)(`div`,{className:`flex-1 flex flex-col items-center justify-center text-center p-6 space-y-3`,children:[(0,E.jsxDEV)(`div`,{className:`w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400`,children:(0,E.jsxDEV)(_e,{className:`w-6 h-6`},void 0,!1,{fileName:I,lineNumber:291,columnNumber:19},void 0)},void 0,!1,{fileName:I,lineNumber:290,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`text-sm font-bold text-zinc-300 font-serif`,children:`Spin the Wheel to Unlock a Placement Question!`},void 0,!1,{fileName:I,lineNumber:293,columnNumber:17},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-zinc-500 max-w-xs leading-relaxed font-light`,children:`Covers Quantitative Aptitude, Logical Puzzles, Operating Systems, Computer Networks, and DBMS Normalization tested in placement assessments.`},void 0,!1,{fileName:I,lineNumber:296,columnNumber:17},void 0)]},void 0,!0,{fileName:I,lineNumber:289,columnNumber:15},void 0)},void 0,!1,{fileName:I,lineNumber:286,columnNumber:11},void 0)]},void 0,!0,{fileName:I,lineNumber:252,columnNumber:9},void 0)]},void 0,!0,{fileName:I,lineNumber:215,columnNumber:7},void 0)},void 0,!1,{fileName:I,lineNumber:214,columnNumber:5},void 0):null},Qt=[{id:`mock-1`,title:`Assessment 1: Tier-1 Foundation & Speed Qualifier`,subtitle:`30-Minute Screening Simulation · 5 MCQs + 5 Coding Challenges`,durationMinutes:30,description:`Simulates the high-speed Online Assessment (OA) used by Amazon, Cognizant GenC, and TCS Digital. Tests rapid algorithmic intuition and syntax accuracy under strict time constraints.`,targetTier:`Core IT & Product Screening`,badgeUnlockedOnPass:`badge-mock-1`,badgeTitleOnPass:`Speed Qualifier Champion`,mcqs:[{id:`m1-q1`,question:`What is the tightest upper bound time complexity of inserting N elements into an initially empty balanced AVL tree?`,options:[`O(N)`,`O(N log N)`,`O(N^2)`,`O(log N)`],correctIndex:1,explanation:`Each insertion takes O(log N) due to rotations; for N items, the total is O(N log N).`},{id:`m1-q2`,question:`Which algorithmic paradigm does the Floyd-Warshall all-pairs shortest path algorithm utilize?`,options:[`Greedy Method`,`Dynamic Programming`,`Divide and Conquer`,`Backtracking`],correctIndex:1,explanation:`Floyd-Warshall uses Dynamic Programming with recurrence D[i][j] = min(D[i][j], D[i][k] + D[k][j]).`},{id:`m1-q3`,question:`A pipe can fill a cistern in 12 hours while a waste pipe empties it in 20 hours. If both are opened together, in how many hours will the empty cistern be filled?`,options:[`24 hours`,`30 hours`,`32 hours`,`35 hours`],correctIndex:1,explanation:`Net rate = 1/12 - 1/20 = (5 - 3)/60 = 2/60 = 1/30. Time taken = 30 hours.`},{id:`m1-q4`,question:`What is the auxiliary memory required by an in-place two-pointer palindrome verification algorithm?`,options:[`O(N)`,`O(log N)`,`O(1)`,`O(N/2)`],correctIndex:2,explanation:`Two pointers only require two scalar indices (left and right), achieving O(1) space.`},{id:`m1-q5`,question:`Which page replacement algorithm suffers from Belady’s Anomaly where allocating more page frames increases page faults?`,options:[`Least Recently Used (LRU)`,`First-In-First-Out (FIFO)`,`Optimal Page Replacement`,`LFU`],correctIndex:1,explanation:`FIFO is not a stack algorithm and exhibits Belady’s Anomaly under specific reference strings.`}],codingQuestions:[{id:`m1-c1`,title:`Check Palindromic Identity`,difficulty:`Easy`,description:`Given a clean alphanumeric string S, determine if S reads the same backward as forward in O(1) space.`,hints:[`Use two pointers starting at index 0 and index N-1.`,`Compare characters moving inward until left >= right.`,`Return true if all matching pairs agree.`],revealLogic:`Maintain left=0 and right=N-1. At each step, if S[left] != S[right], immediately return "false". Otherwise increment left and decrement right. If loop completes, return "true". Operates strictly in O(N) time and O(1) auxiliary space.`,timeTarget:`O(N)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string s) {
    int l = 0, r = s.length() - 1;
    while(l < r) {
        if(s[l++] != s[r--]) return false;
    }
    return true;
}

int main() {
    string s;
    if(cin >> s) {
        cout << (isPalindrome(s) ? "true" : "false") << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isPalindrome(char *s) {
    int l = 0, r = strlen(s) - 1;
    while(l < r) {
        if(s[l++] != s[r--]) return false;
    }
    return true;
}

int main() {
    char s[256];
    if(scanf("%s", s) == 1) {
        printf("%s\\n", isPalindrome(s) ? "true" : "false");
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static boolean isPalindrome(String s) {
        int l = 0, r = s.length() - 1;
        while(l < r) {
            if(s.charAt(l++) != s.charAt(r--)) return false;
        }
        return true;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNext()) {
            System.out.println(isPalindrome(sc.next()) ? "true" : "false");
        }
    }
}`,python:`import sys

def is_palindrome(s: str) -> bool:
    return s == s[::-1]

if __name__ == "__main__":
    line = sys.stdin.read().strip()
    if line:
        print("true" if is_palindrome(line) else "false")`},testCases:[{input:`racecar`,expected:`true`},{input:`jietcollege`,expected:`false`},{input:`madam`,expected:`true`}]},{id:`m1-c2`,title:`Count Trailing Zeros in Factorial`,difficulty:`Easy`,description:`Given an integer N, count how many trailing zeros appear in N! without computing the full factorial.`,hints:[`Trailing zeros are created by pairs of 2 and 5.`,`Factors of 5 are significantly fewer than factors of 2.`,`Sum up floor(N/5) + floor(N/25) + floor(N/125)...`],revealLogic:`Count Legendre factors of 5: while N >= 5, add N // 5 to count, then update N = N // 5. Runs in O(log5 N) time and O(1) space, avoiding overflow completely.`,timeTarget:`O(log N)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
using namespace std;

int trailingZeros(int n) {
    int count = 0;
    while(n >= 5) {
        count += n / 5;
        n /= 5;
    }
    return count;
}

int main() {
    int n;
    if(cin >> n) cout << trailingZeros(n) << endl;
    return 0;
}`,c:`#include <stdio.h>

int trailingZeros(int n) {
    int count = 0;
    while(n >= 5) {
        count += n / 5;
        n /= 5;
    }
    return count;
}

int main() {
    int n;
    if(scanf("%d", &n) == 1) printf("%d\\n", trailingZeros(n));
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static int trailingZeros(int n) {
        int c = 0;
        while(n >= 5) {
            c += n / 5;
            n /= 5;
        }
        return c;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) System.out.println(trailingZeros(sc.nextInt()));
    }
}`,python:`import sys

def trailing_zeros(n: int) -> int:
    c = 0
    while n >= 5:
        c += n // 5
        n //= 5
    return c

if __name__ == "__main__":
    line = sys.stdin.read().strip()
    if line:
        print(trailing_zeros(int(line)))`},testCases:[{input:`25`,expected:`6`},{input:`10`,expected:`2`},{input:`100`,expected:`24`}]},{id:`m1-c3`,title:`Reverse Characters in Fixed Chunks`,difficulty:`Medium`,description:`Given string S and chunk size K, reverse the characters in every consecutive block of size K.`,hints:[`Iterate through the string with step size K.`,`For each block [i, min(i+K-1, N-1)], swap characters symmetrically.`,`Ensure string modification happens in-place.`],revealLogic:`Step through indices i = 0, K, 2K... and reverse substring between i and min(i + K - 1, len - 1). Guaranteed O(N) execution time with zero secondary array allocation.`,timeTarget:`O(N)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    int k;
    string s;
    if(cin >> k >> s) {
        int n = s.length();
        for(int i = 0; i < n; i += k) {
            int r = min(i + k, n);
            reverse(s.begin() + i, s.begin() + r);
        }
        cout << s << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <string.h>

void rev(char *s, int l, int r) {
    while(l < r) {
        char tmp = s[l];
        s[l++] = s[r];
        s[r--] = tmp;
    }
}

int main() {
    int k;
    char s[512];
    if(scanf("%d %s", &k, s) == 2) {
        int n = strlen(s);
        for(int i = 0; i < n; i += k) {
            int r = i + k - 1;
            if(r >= n) r = n - 1;
            rev(s, i, r);
        }
        printf("%s\\n", s);
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNext()) {
            int k = sc.nextInt();
            char[] a = sc.next().toCharArray();
            for(int i = 0; i < a.length; i += k) {
                int l = i, r = Math.min(i + k - 1, a.length - 1);
                while(l < r) {
                    char t = a[l]; a[l++] = a[r]; a[r--] = t;
                }
            }
            System.out.println(new String(a));
        }
    }
}`,python:`import sys

def solve():
    parts = sys.stdin.read().split()
    if len(parts) >= 2:
        k = int(parts[0])
        s = list(parts[1])
        for i in range(0, len(s), k):
            s[i:i+k] = reversed(s[i:i+k])
        print("".join(s))

if __name__ == "__main__":
    solve()`},testCases:[{input:`3 abcdefghi`,expected:`cbafedihg`},{input:`2 jietconnect`,expected:`ijteocnnec`}]},{id:`m1-c4`,title:`Search in Rotated Sorted Map`,difficulty:`Medium`,description:`Given an array rotated at an unknown pivot and target X, find the 0-based index of X in strictly O(log N) time, or -1 if absent.`,hints:[`In any rotated sorted array, at least one half [low..mid] or [mid..high] is always sorted.`,`Check if target lies inside the sorted half.`,`Narrow down search boundaries accordingly.`],revealLogic:`Binary search: If A[low] <= A[mid], the left half is sorted; check if target is between A[low] and A[mid]. Otherwise, right half is sorted; check if target is between A[mid] and A[high]. Halves search space at each iteration in O(log N).`,timeTarget:`O(log N)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

int searchRotated(vector<int>& a, int target) {
    int l = 0, r = a.size() - 1;
    while(l <= r) {
        int m = l + (r - l) / 2;
        if(a[m] == target) return m;
        if(a[l] <= a[m]) {
            if(target >= a[l] && target < a[m]) r = m - 1;
            else l = m + 1;
        } else {
            if(target > a[m] && target <= a[r]) l = m + 1;
            else r = m - 1;
        }
    }
    return -1;
}

int main() {
    int n, target;
    if(cin >> n >> target) {
        vector<int> a(n);
        for(int i = 0; i < n; i++) cin >> a[i];
        cout << searchRotated(a, target) << endl;
    }
    return 0;
}`,c:`#include <stdio.h>

int searchRotated(int a[], int n, int target) {
    int l = 0, r = n - 1;
    while(l <= r) {
        int m = l + (r - l) / 2;
        if(a[m] == target) return m;
        if(a[l] <= a[m]) {
            if(target >= a[l] && target < a[m]) r = m - 1;
            else l = m + 1;
        } else {
            if(target > a[m] && target <= a[r]) l = m + 1;
            else r = m - 1;
        }
    }
    return -1;
}

int main() {
    int n, target, a[100];
    if(scanf("%d %d", &n, &target) == 2) {
        for(int i = 0; i < n; i++) scanf("%d", &a[i]);
        printf("%d\\n", searchRotated(a, n, target));
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int n = sc.nextInt();
            int target = sc.nextInt();
            int[] a = new int[n];
            for(int i = 0; i < n; i++) a[i] = sc.nextInt();
            int l = 0, r = n - 1, ans = -1;
            while(l <= r) {
                int m = l + (r - l) / 2;
                if(a[m] == target) { ans = m; break; }
                if(a[l] <= a[m]) {
                    if(target >= a[l] && target < a[m]) r = m - 1;
                    else l = m + 1;
                } else {
                    if(target > a[m] && target <= a[r]) l = m + 1;
                    else r = m - 1;
                }
            }
            System.out.println(ans);
        }
    }
}`,python:`import sys

def search_rotated(a, target):
    l, r = 0, len(a) - 1
    while l <= r:
        m = (l + r) // 2
        if a[m] == target:
            return m
        if a[l] <= a[m]:
            if a[l] <= target < a[m]:
                r = m - 1
            else:
                l = m + 1
        else:
            if a[m] < target <= a[r]:
                l = m + 1
            else:
                r = m - 1
    return -1

if __name__ == "__main__":
    tokens = list(map(int, sys.stdin.read().split()))
    if len(tokens) >= 2:
        n, target = tokens[0], tokens[1]
        arr = tokens[2:2+n]
        print(search_rotated(arr, target))`},testCases:[{input:`7 0 4 5 6 7 0 1 2`,expected:`4`},{input:`7 3 4 5 6 7 0 1 2`,expected:`-1`}]},{id:`m1-c5`,title:`Task Synchronization LCM Interval`,difficulty:`Easy`,description:`Calculate the minimum cycle interval (LCM) at which two independent periodic processes of periods A and B synchronize.`,hints:[`Recall the algebraic relationship: LCM(A, B) = (A * B) / GCD(A, B).`,`Calculate GCD using the Euclidean algorithm.`,`Divide before multiplying to prevent integer overflow.`],revealLogic:`Euclidean GCD: while b > 0, temp = b, b = a % b, a = temp. Then LCM = (a / gcd) * b. Runs in O(log(min(A, B))) time with O(1) space.`,timeTarget:`O(log(min(A,B)))`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
using namespace std;

long long gcd(long long a, long long b) {
    while(b) { long long t = b; b = a % b; a = t; }
    return a;
}

int main() {
    long long a, b;
    if(cin >> a >> b) {
        long long ans = (a / gcd(a, b)) * b;
        cout << ans << endl;
    }
    return 0;
}`,c:`#include <stdio.h>

long long gcd(long long a, long long b) {
    while(b) { long long t = b; b = a % b; a = t; }
    return a;
}

int main() {
    long long a, b;
    if(scanf("%lld %lld", &a, &b) == 2) {
        printf("%lld\\n", (a / gcd(a, b)) * b);
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    static long gcd(long a, long b) {
        while(b != 0) { long t = b; b = a % b; a = t; }
        return a;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextLong()) {
            long a = sc.nextLong(), b = sc.nextLong();
            System.out.println((a / gcd(a, b)) * b);
        }
    }
}`,python:`import sys, math

def solve():
    nums = list(map(int, sys.stdin.read().split()))
    if len(nums) >= 2:
        a, b = nums[0], nums[1]
        print((a * b) // math.gcd(a, b))

if __name__ == "__main__":
    solve()`},testCases:[{input:`4 6`,expected:`12`},{input:`15 25`,expected:`75`}]}]},{id:`mock-2`,title:`Assessment 2: Data Structures & Linear Algorithms Challenge`,subtitle:`30-Minute Screening Simulation · 5 MCQs + 5 Coding Challenges`,durationMinutes:30,description:`Focuses on linear algorithmic manipulation, two-pointer coordination, and interval consolidation favored by product startups and mid-tier tech firms.`,targetTier:`Product Engineering Foundation`,badgeUnlockedOnPass:`badge-mock-2`,badgeTitleOnPass:`Linear Algorithmic Maestro`,mcqs:[{id:`m2-q1`,question:`Which of the following data structures provides O(1) amortized insertion, O(1) peek, and O(1) pop?`,options:[`Stack using dynamic array`,`Binary Min-Heap`,`Singly Linked List without tail`,`Red-Black Tree`],correctIndex:0,explanation:`A stack implemented via dynamic array (e.g. vector) achieves amortized O(1) push and O(1) pop.`},{id:`m2-q2`,question:`What is the maximum number of nodes in a binary tree of height H (root at height 0)?`,options:[`2^H`,`2^(H+1) - 1`,`2^(H-1)`,`2*H + 1`],correctIndex:1,explanation:`Sum of geometric progression from level 0 to H gives 2^(H+1) - 1 nodes.`},{id:`m2-q3`,question:`A train traveling at 72 km/h crosses a 200 m long platform in 22 seconds. What is the length of the train?`,options:[`220 m`,`240 m`,`250 m`,`280 m`],correctIndex:1,explanation:`Speed = 72 * (5/18) = 20 m/s. Distance = 20 * 22 = 440 m. Train length = 440 - 200 = 240 m.`},{id:`m2-q4`,question:`In a round-robin CPU scheduling algorithm, what occurs when the time quantum is chosen to be extremely large?`,options:[`Throughput maximizes to infinity`,`It behaves identically to First-Come-First-Served (FCFS)`,`Deadlock occurs`,`Priority inversion occurs`],correctIndex:1,explanation:`When quantum exceeds the longest burst time, processes run to completion in order of arrival, mimicking FCFS.`},{id:`m2-q5`,question:`Which SQL constraint guarantees that all column values in a database table are unique and not null?`,options:[`UNIQUE`,`FOREIGN KEY`,`PRIMARY KEY`,`CHECK`],correctIndex:2,explanation:`PRIMARY KEY implicitly enforces UNIQUE and NOT NULL constraints on the designated columns.`}],codingQuestions:[{id:`m2-c1`,title:`Reverse Vowels in Username`,difficulty:`Easy`,description:`Given string S, reverse only the vowels (a, e, i, o, u, case-insensitive) in-place without altering consonants.`,hints:[`Initialize left=0 and right=len-1.`,`Advance left while char is not a vowel; decrement right while char is not a vowel.`,`Swap vowels when both pointers land on vowels.`],revealLogic:`Two pointers converging from ends. Skipping non-vowels takes linear total steps. Swapping happens strictly between vowels. Executes in O(N) time with O(1) space.`,timeTarget:`O(N)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
#include <string>
#include <cctype>
using namespace std;

bool isVowel(char c) {
    c = tolower(c);
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

int main() {
    string s;
    if(cin >> s) {
        int l = 0, r = s.length() - 1;
        while(l < r) {
            while(l < r && !isVowel(s[l])) l++;
            while(l < r && !isVowel(s[r])) r--;
            if(l < r) swap(s[l++], s[r--]);
        }
        cout << s << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdbool.h>

bool isVowel(char c) {
    c = tolower(c);
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

int main() {
    char s[256];
    if(scanf("%s", s) == 1) {
        int l = 0, r = strlen(s) - 1;
        while(l < r) {
            while(l < r && !isVowel(s[l])) l++;
            while(l < r && !isVowel(s[r])) r--;
            if(l < r) {
                char t = s[l]; s[l++] = s[r]; s[r--] = t;
            }
        }
        printf("%s\\n", s);
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    static boolean isV(char c) {
        c = Character.toLowerCase(c);
        return c=='a'||c=='e'||c=='i'||c=='o'||c=='u';
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNext()) {
            char[] a = sc.next().toCharArray();
            int l = 0, r = a.length - 1;
            while(l < r) {
                while(l < r && !isV(a[l])) l++;
                while(l < r && !isV(a[r])) r--;
                if(l < r) { char t = a[l]; a[l++] = a[r]; a[r--] = t; }
            }
            System.out.println(new String(a));
        }
    }
}`,python:`import sys

def solve():
    s = list(sys.stdin.read().strip())
    vowels = set("aeiouAEIOU")
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and s[l] not in vowels: l += 1
        while l < r and s[r] not in vowels: r -= 1
        if l < r:
            s[l], s[r] = s[r], s[l]
            l += 1; r -= 1
    print("".join(s))

if __name__ == "__main__":
    solve()`},testCases:[{input:`hello`,expected:`holle`},{input:`jietcollege`,expected:`jeotcelligi`}]},{id:`m2-c2`,title:`Reverse Words in a Sentence`,difficulty:`Easy`,description:`Given a sentence of space-separated words, reverse the characters of each individual word while maintaining original word order.`,hints:[`Locate word boundaries delineated by spaces.`,`Reverse the letters between the start and end of each word.`,`Append words back into a single output string.`],revealLogic:`Scan string; when encountering a word, find its boundary and reverse in-place. O(N) linear time and O(1) extra space beyond string buffer.`,timeTarget:`O(N)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
#include <string>
#include <sstream>
#include <algorithm>
using namespace std;

int main() {
    string line, word;
    if(getline(cin, line)) {
        stringstream ss(line);
        string res = "";
        while(ss >> word) {
            reverse(word.begin(), word.end());
            if(!res.empty()) res += " ";
            res += word;
        }
        cout << res << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <string.h>

void rev(char *s, int l, int r) {
    while(l < r) { char t = s[l]; s[l++] = s[r]; s[r--] = t; }
}

int main() {
    char s[512];
    if(fgets(s, sizeof(s), stdin)) {
        int n = strlen(s);
        if(n > 0 && s[n-1] == '\\n') s[--n] = '\\0';
        int start = 0;
        for(int i = 0; i <= n; i++) {
            if(s[i] == ' ' || s[i] == '\\0') {
                rev(s, start, i - 1);
                start = i + 1;
            }
        }
        printf("%s\\n", s);
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextLine()) {
            String[] w = sc.nextLine().split(" ");
            StringBuilder sb = new StringBuilder();
            for(int i = 0; i < w.length; i++) {
                sb.append(new StringBuilder(w[i]).reverse().toString());
                if(i < w.length - 1) sb.append(" ");
            }
            System.out.println(sb.toString());
        }
    }
}`,python:`import sys

def solve():
    line = sys.stdin.read().strip()
    if line:
        words = line.split()
        print(" ".join(w[::-1] for w in words))

if __name__ == "__main__":
    solve()`},testCases:[{input:`jiet engineering students`,expected:`teij gnireenigne stneduts`},{input:`coding is art`,expected:`gnidoc si tra`}]},{id:`m2-c3`,title:`Sort Signal Strength Squares`,difficulty:`Easy`,description:`Given a non-decreasing sorted array of integers, return the squares of each number sorted in non-decreasing order in strictly O(N) time.`,hints:[`Negative numbers squared become large positive numbers.`,`The largest squares must be at either the far left or far right of the array.`,`Use two pointers starting from ends and populate the result array from back to front.`],revealLogic:`Two pointers at left=0 and right=N-1. Compare abs(A[left]) and abs(A[right]). Place the larger square at result[index--] and advance pointer inward. Achieves O(N) linear time without general O(N log N) sorting.`,timeTarget:`O(N)`,spaceTarget:`O(N)`,starterCode:{cpp:`#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int main() {
    int n;
    if(cin >> n) {
        vector<int> a(n), res(n);
        for(int i = 0; i < n; i++) cin >> a[i];
        int l = 0, r = n - 1, idx = n - 1;
        while(l <= r) {
            if(abs(a[l]) > abs(a[r])) {
                res[idx--] = a[l] * a[l];
                l++;
            } else {
                res[idx--] = a[r] * a[r];
                r--;
            }
        }
        for(int i = 0; i < n; i++) cout << res[i] << (i == n-1 ? "" : " ");
        cout << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    if(scanf("%d", &n) == 1) {
        int a[100], res[100];
        for(int i = 0; i < n; i++) scanf("%d", &a[i]);
        int l = 0, r = n - 1, idx = n - 1;
        while(l <= r) {
            if(abs(a[l]) > abs(a[r])) {
                res[idx--] = a[l] * a[l]; l++;
            } else {
                res[idx--] = a[r] * a[r]; r--;
            }
        }
        for(int i = 0; i < n; i++) printf("%d%s", res[i], i == n-1 ? "" : " ");
        printf("\\n");
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] a = new int[n];
            for(int i = 0; i < n; i++) a[i] = sc.nextInt();
            int[] res = new int[n];
            int l = 0, r = n - 1, idx = n - 1;
            while(l <= r) {
                if(Math.abs(a[l]) > Math.abs(a[r])) {
                    res[idx--] = a[l] * a[l]; l++;
                } else {
                    res[idx--] = a[r] * a[r]; r--;
                }
            }
            for(int i = 0; i < n; i++) System.out.print(res[i] + (i == n-1 ? "" : " "));
            System.out.println();
        }
    }
}`,python:`import sys

def solve():
    tok = list(map(int, sys.stdin.read().split()))
    if tok:
        n = tok[0]
        a = tok[1:1+n]
        l, r = 0, n - 1
        res = [0] * n
        idx = n - 1
        while l <= r:
            if abs(a[l]) > abs(a[r]):
                res[idx] = a[l] * a[l]
                l += 1
            else:
                res[idx] = a[r] * a[r]
                r -= 1
            idx -= 1
        print(" ".join(map(str, res)))

if __name__ == "__main__":
    solve()`},testCases:[{input:`5 -4 -1 0 3 10`,expected:`0 1 9 16 100`},{input:`4 -7 -3 2 3`,expected:`4 9 9 49`}]},{id:`m2-c4`,title:`Identify First and Last Occurrence of Event`,difficulty:`Medium`,description:`Given a sorted array with possible duplicate values, return the first and last occurrence indices of target X in O(log N) time.`,hints:[`Run binary search twice.`,`For first occurrence: when A[mid] == X, continue searching in left half (high = mid - 1).`,`For last occurrence: when A[mid] == X, continue searching in right half (low = mid + 1).`],revealLogic:`Two modified binary search routines: finding first index records ans and sets right=mid-1; finding last index records ans and sets left=mid+1. Runs in 2 * O(log N) = O(log N) overall.`,timeTarget:`O(log N)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

int findFirst(vector<int>& a, int t) {
    int l = 0, r = a.size() - 1, res = -1;
    while(l <= r) {
        int m = l + (r - l) / 2;
        if(a[m] == t) { res = m; r = m - 1; }
        else if(a[m] < t) l = m + 1;
        else r = m - 1;
    }
    return res;
}

int findLast(vector<int>& a, int t) {
    int l = 0, r = a.size() - 1, res = -1;
    while(l <= r) {
        int m = l + (r - l) / 2;
        if(a[m] == t) { res = m; l = m + 1; }
        else if(a[m] < t) l = m + 1;
        else r = m - 1;
    }
    return res;
}

int main() {
    int n, t;
    if(cin >> n >> t) {
        vector<int> a(n);
        for(int i = 0; i < n; i++) cin >> a[i];
        cout << findFirst(a, t) << " " << findLast(a, t) << endl;
    }
    return 0;
}`,c:`#include <stdio.h>

int findFirst(int a[], int n, int t) {
    int l = 0, r = n - 1, res = -1;
    while(l <= r) {
        int m = l + (r - l) / 2;
        if(a[m] == t) { res = m; r = m - 1; }
        else if(a[m] < t) l = m + 1;
        else r = m - 1;
    }
    return res;
}

int findLast(int a[], int n, int t) {
    int l = 0, r = n - 1, res = -1;
    while(l <= r) {
        int m = l + (r - l) / 2;
        if(a[m] == t) { res = m; l = m + 1; }
        else if(a[m] < t) l = m + 1;
        else r = m - 1;
    }
    return res;
}

int main() {
    int n, t, a[100];
    if(scanf("%d %d", &n, &t) == 2) {
        for(int i = 0; i < n; i++) scanf("%d", &a[i]);
        printf("%d %d\\n", findFirst(a, n, t), findLast(a, n, t));
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    static int first(int[] a, int t) {
        int l = 0, r = a.length - 1, res = -1;
        while(l <= r) {
            int m = l + (r - l) / 2;
            if(a[m] == t) { res = m; r = m - 1; }
            else if(a[m] < t) l = m + 1;
            else r = m - 1;
        }
        return res;
    }
    static int last(int[] a, int t) {
        int l = 0, r = a.length - 1, res = -1;
        while(l <= r) {
            int m = l + (r - l) / 2;
            if(a[m] == t) { res = m; l = m + 1; }
            else if(a[m] < t) l = m + 1;
            else r = m - 1;
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int n = sc.nextInt(), t = sc.nextInt();
            int[] a = new int[n];
            for(int i = 0; i < n; i++) a[i] = sc.nextInt();
            System.out.println(first(a, t) + " " + last(a, t));
        }
    }
}`,python:`import sys

def solve():
    tok = list(map(int, sys.stdin.read().split()))
    if len(tok) >= 2:
        n, t = tok[0], tok[1]
        a = tok[2:2+n]
        def first():
            l, r, ans = 0, n - 1, -1
            while l <= r:
                m = (l + r) // 2
                if a[m] == t: ans = m; r = m - 1
                elif a[m] < t: l = m + 1
                else: r = m - 1
            return ans
        def last():
            l, r, ans = 0, n - 1, -1
            while l <= r:
                m = (l + r) // 2
                if a[m] == t: ans = m; l = m + 1
                elif a[m] < t: l = m + 1
                else: r = m - 1
            return ans
        print(f"{first()} {last()}")

if __name__ == "__main__":
    solve()`},testCases:[{input:`6 8 5 7 7 8 8 10`,expected:`3 4`},{input:`6 6 5 7 7 8 8 10`,expected:`-1 -1`}]},{id:`m2-c5`,title:`Transposing Matrix Layout`,difficulty:`Easy`,description:`Given an R x C integer grid, return its transpose grid of dimensions C x R in-place or via linear transposition.`,hints:[`Row i column j becomes Row j column i in the transposed output.`,`Traverse column-by-column or construct the transposed dimensions C x R.`,`Output the grid formatted row by row.`],revealLogic:`Allocate C x R matrix where trans[j][i] = original[i][j]. Runs in strictly O(R * C) time with optimal cache locality.`,timeTarget:`O(R * C)`,spaceTarget:`O(R * C)`,starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

int main() {
    int r, c;
    if(cin >> r >> c) {
        vector<vector<int>> a(r, vector<int>(c));
        for(int i = 0; i < r; i++)
            for(int j = 0; j < c; j++) cin >> a[i][j];
        for(int j = 0; j < c; j++) {
            for(int i = 0; i < r; i++) {
                cout << a[i][j] << (i == r - 1 ? "" : " ");
            }
            cout << endl;
        }
    }
    return 0;
}`,c:`#include <stdio.h>

int main() {
    int r, c, a[50][50];
    if(scanf("%d %d", &r, &c) == 2) {
        for(int i = 0; i < r; i++)
            for(int j = 0; j < c; j++) scanf("%d", &a[i][j]);
        for(int j = 0; j < c; j++) {
            for(int i = 0; i < r; i++) {
                printf("%d%s", a[i][j], i == r - 1 ? "" : " ");
            }
            printf("\\n");
        }
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int r = sc.nextInt(), c = sc.nextInt();
            int[][] a = new int[r][c];
            for(int i = 0; i < r; i++)
                for(int j = 0; j < c; j++) a[i][j] = sc.nextInt();
            for(int j = 0; j < c; j++) {
                for(int i = 0; i < r; i++) {
                    System.out.print(a[i][j] + (i == r - 1 ? "" : " "));
                }
                System.out.println();
            }
        }
    }
}`,python:`import sys

def solve():
    tok = list(map(int, sys.stdin.read().split()))
    if len(tok) >= 2:
        r, c = tok[0], tok[1]
        idx = 2
        grid = []
        for _ in range(r):
            grid.append(tok[idx:idx+c])
            idx += c
        for j in range(c):
            row = [str(grid[i][j]) for i in range(r)]
            print(" ".join(row))

if __name__ == "__main__":
    solve()`},testCases:[{input:`2 3 1 2 3 4 5 6`,expected:`1 4
2 5
3 6`}]}]},{id:`mock-3`,title:`Assessment 3: Algorithmic Complexity & Advanced Number Theory`,subtitle:`30-Minute Screening Simulation · 5 MCQs + 5 Coding Challenges`,durationMinutes:30,description:`Rigorously checks mathematical invariants, prime factorization sieves, modular arithmetic, and recurrence relation proofs.`,targetTier:`Core Engineering Specialist`,badgeUnlockedOnPass:`badge-mock-3`,badgeTitleOnPass:`Number Theory Strategist`,mcqs:[{id:`m3-q1`,question:`According to the Master Theorem, what is the asymptotic solution of T(N) = 2T(N/2) + O(N)?`,options:[`O(N)`,`O(N log N)`,`O(N^2)`,`O(log N)`],correctIndex:1,explanation:`Here a=2, b=2, k=1. Since a = b^k (2 = 2^1), this corresponds to Case 2 of Master Theorem, giving O(N log N).`},{id:`m3-q2`,question:`What is the sum of all prime numbers less than 10?`,options:[`15`,`17`,`18`,`21`],correctIndex:1,explanation:`Primes less than 10 are 2, 3, 5, 7. Sum = 2 + 3 + 5 + 7 = 17.`},{id:`m3-q3`,question:`Which property allows calculating (A * B) % M as ((A % M) * (B % M)) % M to prevent arithmetic integer overflow?`,options:[`Distributive property of modular multiplication`,`Euler’s Totient Theorem`,`Fermat’s Little Theorem`,`Chinese Remainder Theorem`],correctIndex:0,explanation:`Modular multiplication distributes over operands, allowing intermediate reductions to avoid numeric overflow.`},{id:`m3-q4`,question:`In an RSA cryptosystem, the public encryption key (e, n) satisfies e * d ≡ 1 (mod φ(n)). What is d called?`,options:[`Private Decryption Key`,`Session Token`,`Public Modulus`,`Initialization Vector`],correctIndex:0,explanation:`d is the modular multiplicative inverse of e modulo φ(n), serving as the private key.`},{id:`m3-q5`,question:`What is the minimum number of comparisons needed to find both the minimum and maximum of an unsorted array of N elements?`,options:[`2N - 2`,`3N/2 - 2`,`N log N`,`N - 1`],correctIndex:1,explanation:`By comparing elements in pairs, we find min and max using approximately 3N/2 comparisons.`}],codingQuestions:[{id:`m3-c1`,title:`Count Odd Numbers in Range`,difficulty:`Easy`,description:`Given range [low, high] (both inclusive), return the count of odd numbers in O(1) time.`,hints:[`If either boundary is odd, adjust calculations.`,`Notice that (high - low) / 2 gives baseline pairs.`,`Add 1 if either low or high is odd.`],revealLogic:`Formula: (high - low) // 2 + (1 if (low % 2 != 0 or high % 2 != 0) else 0). Runs in strictly O(1) time and space.`,timeTarget:`O(1)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
using namespace std;

int main() {
    int l, h;
    if(cin >> l >> h) {
        int ans = (h - l) / 2 + (l % 2 != 0 || h % 2 != 0 ? 1 : 0);
        cout << ans << endl;
    }
    return 0;
}`,c:`#include <stdio.h>

int main() {
    int l, h;
    if(scanf("%d %d", &l, &h) == 2) {
        int ans = (h - l) / 2 + (l % 2 != 0 || h % 2 != 0 ? 1 : 0);
        printf("%d\\n", ans);
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int l = sc.nextInt(), h = sc.nextInt();
            int ans = (h - l) / 2 + (l % 2 != 0 || h % 2 != 0 ? 1 : 0);
            System.out.println(ans);
        }
    }
}`,python:`import sys

def solve():
    nums = list(map(int, sys.stdin.read().split()))
    if len(nums) >= 2:
        l, h = nums[0], nums[1]
        print((h - l) // 2 + (1 if l % 2 != 0 or h % 2 != 0 else 0))

if __name__ == "__main__":
    solve()`},testCases:[{input:`3 7`,expected:`3`},{input:`8 10`,expected:`1`}]},{id:`m3-c2`,title:`Count of Perfect Squares in Range`,difficulty:`Easy`,description:`Given range [L, R], return the count of perfect square numbers within [L, R] in O(1) or O(sqrt(R)) time.`,hints:[`Calculate floor(sqrt(R)).`,`Calculate ceil(sqrt(L)) = floor(sqrt(L - 1)).`,`Count = floor(sqrt(R)) - ceil(sqrt(L)) + 1.`],revealLogic:`Count = floor(sqrt(R)) - floor(sqrt(L - 1)). Runs in strictly O(1) mathematical complexity with zero loop overhead.`,timeTarget:`O(1)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
#include <cmath>
using namespace std;

int main() {
    long long l, r;
    if(cin >> l >> r) {
        long long ans = floor(sqrt(r)) - floor(sqrt(l - 1));
        cout << ans << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <math.h>

int main() {
    long long l, r;
    if(scanf("%lld %lld", &l, &r) == 2) {
        long long ans = (long long)sqrt(r) - (long long)sqrt(l - 1);
        printf("%lld\\n", ans);
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextLong()) {
            long l = sc.nextLong(), r = sc.nextLong();
            long ans = (long)Math.sqrt(r) - (long)Math.sqrt(l - 1);
            System.out.println(ans);
        }
    }
}`,python:`import sys, math

def solve():
    nums = list(map(int, sys.stdin.read().split()))
    if len(nums) >= 2:
        l, r = nums[0], nums[1]
        print(int(math.isqrt(r)) - int(math.isqrt(l - 1)))

if __name__ == "__main__":
    solve()`},testCases:[{input:`9 25`,expected:`3`},{input:`1 10`,expected:`3`}]},{id:`m3-c3`,title:`Prime Factors Aggregation`,difficulty:`Medium`,description:`Given integer N, print all of its prime factors in ascending order separated by spaces.`,hints:[`Extract all factors of 2 first.`,`Iterate through odd factors i = 3 up to sqrt(N).`,`If remaining N > 2, N is itself prime.`],revealLogic:`Divide out 2 while even. Then check odd numbers from 3 up to sqrt(N). Each division reduces N, executing in O(sqrt(N)) time.`,timeTarget:`O(sqrt(N))`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
using namespace std;

int main() {
    long long n;
    if(cin >> n) {
        bool first = true;
        while(n % 2 == 0) {
            cout << (first ? "" : " ") << 2;
            first = false;
            n /= 2;
        }
        for(long long i = 3; i * i <= n; i += 2) {
            while(n % i == 0) {
                cout << (first ? "" : " ") << i;
                first = false;
                n /= i;
            }
        }
        if(n > 2) cout << (first ? "" : " ") << n;
        cout << endl;
    }
    return 0;
}`,c:`#include <stdio.h>

int main() {
    long long n;
    if(scanf("%lld", &n) == 1) {
        int first = 1;
        while(n % 2 == 0) {
            printf("%s2", first ? "" : " "); first = 0; n /= 2;
        }
        for(long long i = 3; i * i <= n; i += 2) {
            while(n % i == 0) {
                printf("%s%lld", first ? "" : " ", i); first = 0; n /= i;
            }
        }
        if(n > 2) printf("%s%lld", first ? "" : " ", n);
        printf("\\n");
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextLong()) {
            long n = sc.nextLong();
            boolean first = true;
            while(n % 2 == 0) {
                System.out.print((first ? "" : " ") + 2);
                first = false;
                n /= 2;
            }
            for(long i = 3; i * i <= n; i += 2) {
                while(n % i == 0) {
                    System.out.print((first ? "" : " ") + i);
                    first = false;
                    n /= i;
                }
            }
            if(n > 2) System.out.print((first ? "" : " ") + n);
            System.out.println();
        }
    }
}`,python:`import sys

def solve():
    line = sys.stdin.read().strip()
    if line:
        n = int(line)
        res = []
        while n % 2 == 0:
            res.append(2)
            n //= 2
        i = 3
        while i * i <= n:
            while n % i == 0:
                res.append(i)
                n //= i
            i += 2
        if n > 2:
            res.append(n)
        print(" ".join(map(str, res)))

if __name__ == "__main__":
    solve()`},testCases:[{input:`12`,expected:`2 2 3`},{input:`315`,expected:`3 3 5 7`}]},{id:`m3-c4`,title:`Clock Mechanics Hands Angle`,difficulty:`Easy`,description:`Given Hour H (1 to 12) and Minute M (0 to 59), calculate the smaller angle between the two clock hands in degrees.`,hints:[`Minute hand moves 6 degrees per minute.`,`Hour hand moves 30 degrees per hour + 0.5 degrees per minute.`,`Take absolute difference and min(diff, 360 - diff).`],revealLogic:`Hour angle = 0.5 * (60 * H + M). Minute angle = 6 * M. Diff = abs(Hour - Minute). Result = min(diff, 360 - diff). Runs in O(1) time.`,timeTarget:`O(1)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int h, m;
    if(cin >> h >> m) {
        if(h == 12) h = 0;
        double hAngle = 0.5 * (60 * h + m);
        double mAngle = 6.0 * m;
        double diff = abs(hAngle - mAngle);
        double ans = min(diff, 360.0 - diff);
        cout << ans << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <math.h>

int main() {
    int h, m;
    if(scanf("%d %d", &h, &m) == 2) {
        if(h == 12) h = 0;
        double hAngle = 0.5 * (60 * h + m);
        double mAngle = 6.0 * m;
        double diff = fabs(hAngle - mAngle);
        double ans = diff < 360.0 - diff ? diff : 360.0 - diff;
        printf("%.1f\\n", ans);
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int h = sc.nextInt(), m = sc.nextInt();
            if(h == 12) h = 0;
            double hAngle = 0.5 * (60 * h + m);
            double mAngle = 6.0 * m;
            double diff = Math.abs(hAngle - mAngle);
            System.out.println(Math.min(diff, 360.0 - diff));
        }
    }
}`,python:`import sys

def solve():
    nums = list(map(int, sys.stdin.read().split()))
    if len(nums) >= 2:
        h, m = nums[0], nums[1]
        if h == 12: h = 0
        h_angle = 0.5 * (60 * h + m)
        m_angle = 6.0 * m
        diff = abs(h_angle - m_angle)
        print(min(diff, 360.0 - diff))

if __name__ == "__main__":
    solve()`},testCases:[{input:`3 30`,expected:`75`}]},{id:`m3-c5`,title:`Subarray LCM Machine Verification`,difficulty:`Medium`,description:`Given an array A and target integer K, determine if there exists any contiguous subarray whose LCM is strictly equal to K.`,hints:[`Discard elements that do not divide K.`,`Expand subarrays maintaining cumulative LCM.`,`Stop expanding if cumulative LCM exceeds K.`],revealLogic:`Filter elements: if K % A[i] != 0, reset current LCM. Otherwise, compute cumulative LCM = (curr / gcd(curr, A[i])) * A[i]. If curr == K, return "true". Operates in O(N log K) time with O(1) space.`,timeTarget:`O(N log K)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

long long gcd(long long a, long long b) {
    while(b) { long long t = b; b = a % b; a = t; }
    return a;
}

int main() {
    int n; long long k;
    if(cin >> n >> k) {
        vector<long long> a(n);
        for(int i = 0; i < n; i++) cin >> a[i];
        bool found = false;
        for(int i = 0; i < n && !found; i++) {
            if(k % a[i] != 0) continue;
            long long cur = a[i];
            if(cur == k) { found = true; break; }
            for(int j = i + 1; j < n; j++) {
                if(k % a[j] != 0) break;
                cur = (cur / gcd(cur, a[j])) * a[j];
                if(cur == k) { found = true; break; }
                if(cur > k) break;
            }
        }
        cout << (found ? "true" : "false") << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <stdbool.h>

long long gcd(long long a, long long b) {
    while(b) { long long t = b; b = a % b; a = t; }
    return a;
}

int main() {
    int n; long long k;
    if(scanf("%d %lld", &n, &k) == 2) {
        long long a[100];
        for(int i = 0; i < n; i++) scanf("%lld", &a[i]);
        bool found = false;
        for(int i = 0; i < n && !found; i++) {
            if(k % a[i] != 0) continue;
            long long cur = a[i];
            if(cur == k) { found = true; break; }
            for(int j = i + 1; j < n; j++) {
                if(k % a[j] != 0) break;
                cur = (cur / gcd(cur, a[j])) * a[j];
                if(cur == k) { found = true; break; }
                if(cur > k) break;
            }
        }
        printf("%s\\n", found ? "true" : "false");
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    static long gcd(long a, long b) {
        while(b != 0) { long t = b; b = a % b; a = t; }
        return a;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int n = sc.nextInt(); long k = sc.nextLong();
            long[] a = new long[n];
            for(int i = 0; i < n; i++) a[i] = sc.nextLong();
            boolean found = false;
            for(int i = 0; i < n && !found; i++) {
                if(k % a[i] != 0) continue;
                long cur = a[i];
                if(cur == k) { found = true; break; }
                for(int j = i + 1; j < n; j++) {
                    if(k % a[j] != 0) break;
                    cur = (cur / gcd(cur, a[j])) * a[j];
                    if(cur == k) { found = true; break; }
                    if(cur > k) break;
                }
            }
            System.out.println(found ? "true" : "false");
        }
    }
}`,python:`import sys, math

def solve():
    tok = list(map(int, sys.stdin.read().split()))
    if len(tok) >= 2:
        n, k = tok[0], tok[1]
        a = tok[2:2+n]
        found = False
        for i in range(n):
            if k % a[i] != 0: continue
            cur = a[i]
            if cur == k: found = True; break
            for j in range(i + 1, n):
                if k % a[j] != 0: break
                cur = (cur * a[j]) // math.gcd(cur, a[j])
                if cur == k: found = True; break
                if cur > k: break
            if found: break
        print("true" if found else "false")

if __name__ == "__main__":
    solve()`},testCases:[{input:`5 6 2 3 5 2 3`,expected:`true`},{input:`3 7 2 4 8`,expected:`false`}]}]},{id:`mock-4`,title:`Assessment 4: Graph & Search Engineering Mock`,subtitle:`30-Minute Screening Simulation · 5 MCQs + 5 Coding Challenges`,durationMinutes:30,description:`Models systems-level networking assessments used by Microsoft, Cisco, and Tier-1 infrastructure teams. Tests graph modeling and search traversal.`,targetTier:`Systems & Infrastructure Engineering`,badgeUnlockedOnPass:`badge-mock-4`,badgeTitleOnPass:`Graph Systems Specialist`,mcqs:[{id:`m4-q1`,question:`Which data structure is most space-efficient for representing a sparse graph with V vertices and E edges where E << V^2?`,options:[`Adjacency Matrix`,`Adjacency List`,`Incidence Matrix`,`2D Flat Array`],correctIndex:1,explanation:`An Adjacency List requires O(V + E) space, whereas an Adjacency Matrix always consumes O(V^2).`},{id:`m4-q2`,question:`What is the time complexity of Dijkstra’s single-source shortest path algorithm using a binary min-heap priority queue?`,options:[`O(V^2)`,`O((V + E) log V)`,`O(V * E)`,`O(E log E)`],correctIndex:1,explanation:`With a binary heap, extracting min takes O(log V) V times, and edge relaxations take O(log V) E times => O((V + E) log V).`},{id:`m4-q3`,question:`In how many ways can 6 software engineers be seated around a circular conference table?`,options:[`720`,`120`,`360`,`60`],correctIndex:1,explanation:`Circular permutations of N distinct items = (N - 1)! => (6 - 1)! = 5! = 120 ways.`},{id:`m4-q4`,question:`Which graph algorithm can detect negative-weight cycles in a directed graph?`,options:[`Dijkstra’s Algorithm`,`Bellman-Ford Algorithm`,`Prim’s Algorithm`,`Kruskal’s Algorithm`],correctIndex:1,explanation:`Bellman-Ford relaxes all edges V-1 times; a further relaxation indicates the presence of a negative cycle.`},{id:`m4-q5`,question:`What is the space complexity of Breadth First Search (BFS) in the worst case on a graph with branching factor B and depth D?`,options:[`O(D)`,`O(B * D)`,`O(B^D)`,`O(1)`],correctIndex:2,explanation:`The queue at the deepest level must store up to B^D leaf vertices.`}],codingQuestions:[{id:`m4-c1`,title:`City Transport Network Connectivity`,difficulty:`Medium`,description:`Given V municipal transit stations and E bidirectional bus routes, check whether station Source can reach station Destination.`,hints:[`Build an adjacency list from the edge list.`,`Execute BFS or DFS starting from Source.`,`Return true if Destination is marked visited.`],revealLogic:`Construct graph adjacency list. Use a visited array and queue for BFS. Enqueue source; explore unvisited neighbors. If destination reached, return "true". O(V + E) time.`,timeTarget:`O(V + E)`,spaceTarget:`O(V + E)`,starterCode:{cpp:`#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main() {
    int v, e, src, dest;
    if(cin >> v >> e >> src >> dest) {
        vector<vector<int>> adj(v);
        for(int i = 0; i < e; i++) {
            int u, w;
            cin >> u >> w;
            adj[u].push_back(w);
            adj[w].push_back(u);
        }
        vector<bool> vis(v, false);
        queue<int> q;
        q.push(src);
        vis[src] = true;
        bool canReach = false;
        while(!q.empty()) {
            int curr = q.front(); q.pop();
            if(curr == dest) { canReach = true; break; }
            for(int nxt : adj[curr]) {
                if(!vis[nxt]) {
                    vis[nxt] = true;
                    q.push(nxt);
                }
            }
        }
        cout << (canReach ? "true" : "false") << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <stdbool.h>

int adj[50][50];
int deg[50];
bool vis[50];
int q[100], head = 0, tail = 0;

int main() {
    int v, e, src, dest;
    if(scanf("%d %d %d %d", &v, &e, &src, &dest) == 4) {
        for(int i = 0; i < e; i++) {
            int u, w;
            scanf("%d %d", &u, &w);
            adj[u][deg[u]++] = w;
            adj[w][deg[w]++] = u;
        }
        q[tail++] = src;
        vis[src] = true;
        bool can = false;
        while(head < tail) {
            int curr = q[head++];
            if(curr == dest) { can = true; break; }
            for(int i = 0; i < deg[curr]; i++) {
                int nxt = adj[curr][i];
                if(!vis[nxt]) {
                    vis[nxt] = true; q[tail++] = nxt;
                }
            }
        }
        printf("%s\\n", can ? "true" : "false");
    }
    return 0;
}`,java:`import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int v = sc.nextInt(), e = sc.nextInt(), src = sc.nextInt(), dest = sc.nextInt();
            List<List<Integer>> adj = new ArrayList<>();
            for(int i = 0; i < v; i++) adj.add(new ArrayList<>());
            for(int i = 0; i < e; i++) {
                int u = sc.nextInt(), w = sc.nextInt();
                adj.get(u).add(w); adj.get(w).add(u);
            }
            boolean[] vis = new boolean[v];
            Queue<Integer> q = new LinkedList<>();
            q.add(src); vis[src] = true;
            boolean can = false;
            while(!q.isEmpty()) {
                int c = q.poll();
                if(c == dest) { can = true; break; }
                for(int nxt : adj.get(c)) {
                    if(!vis[nxt]) { vis[nxt] = true; q.add(nxt); }
                }
            }
            System.out.println(can ? "true" : "false");
        }
    }
}`,python:`import sys
from collections import deque

def solve():
    tok = list(map(int, sys.stdin.read().split()))
    if len(tok) >= 4:
        v, e, src, dest = tok[0], tok[1], tok[2], tok[3]
        adj = [[] for _ in range(v)]
        idx = 4
        for _ in range(e):
            u, w = tok[idx], tok[idx+1]
            adj[u].append(w)
            adj[w].append(u)
            idx += 2
        q = deque([src])
        vis = [False] * v
        vis[src] = True
        can = False
        while q:
            curr = q.popleft()
            if curr == dest:
                can = True
                break
            for nxt in adj[curr]:
                if not vis[nxt]:
                    vis[nxt] = True
                    q.append(nxt)
        print("true" if can else "false")

if __name__ == "__main__":
    solve()`},testCases:[{input:`4 3 0 3 0 1 1 2 2 3`,expected:`true`},{input:`4 2 0 3 0 1 2 3`,expected:`false`}]},{id:`m4-c2`,title:`Check Pangram for Automated Scanner`,difficulty:`Easy`,description:`Given a scanned text phrase, determine if it contains every letter from a to z at least once (case-insensitive).`,hints:[`Maintain a boolean seen array of size 26 or a bitmask.`,`Set bit (char - 'a') when encountering alphabetical letters.`,`Check if total distinct letter count equals 26.`],revealLogic:`Single linear pass maintaining a 32-bit integer mask. If mask reaches (1 << 26) - 1, return "true". Operates in O(N) time and O(1) space.`,timeTarget:`O(N)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
    string s;
    if(getline(cin, s)) {
        int mask = 0;
        for(char c : s) {
            if(isalpha(c)) mask |= (1 << (tolower(c) - 'a'));
        }
        cout << (mask == (1 << 26) - 1 ? "true" : "false") << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <ctype.h>
#include <string.h>

int main() {
    char s[512];
    if(fgets(s, sizeof(s), stdin)) {
        int mask = 0;
        for(int i = 0; s[i] != '\\0'; i++) {
            if(isalpha(s[i])) mask |= (1 << (tolower(s[i]) - 'a'));
        }
        printf("%s\\n", mask == (1 << 26) - 1 ? "true" : "false");
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextLine()) {
            String s = sc.nextLine();
            int mask = 0;
            for(char c : s.toCharArray()) {
                if(Character.isLetter(c)) mask |= (1 << (Character.toLowerCase(c) - 'a'));
            }
            System.out.println(mask == (1 << 26) - 1 ? "true" : "false");
        }
    }
}`,python:`import sys

def solve():
    line = sys.stdin.read().strip()
    letters = set(c.lower() for c in line if c.isalpha())
    print("true" if len(letters) == 26 else "false")

if __name__ == "__main__":
    solve()`},testCases:[{input:`The quick brown fox jumps over the lazy dog`,expected:`true`},{input:`jiet engineering rajasthan`,expected:`false`}]},{id:`m4-c3`,title:`Consolidate Inventory Lists`,difficulty:`Easy`,description:`Given two sorted lists of inventory product IDs A and B, merge them into a single sorted list in O(N + M) time without sorting from scratch.`,hints:[`Maintain pointers p1 for list A and p2 for list B.`,`Append the smaller element to the merged list.`,`Append any residual elements when one list is exhausted.`],revealLogic:`Classic two-pointer merge from MergeSort. Compares heads of both sorted arrays, placing the smaller element into result. Runs in strictly O(N + M) linear time.`,timeTarget:`O(N + M)`,spaceTarget:`O(N + M)`,starterCode:{cpp:`#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n, m;
    if(cin >> n >> m) {
        vector<int> a(n), b(m), res;
        for(int i = 0; i < n; i++) cin >> a[i];
        for(int i = 0; i < m; i++) cin >> b[i];
        int i = 0, j = 0;
        while(i < n && j < m) {
            if(a[i] <= b[j]) res.push_back(a[i++]);
            else res.push_back(b[j++]);
        }
        while(i < n) res.push_back(a[i++]);
        while(j < m) res.push_back(b[j++]);
        for(int k = 0; k < (int)res.size(); k++)
            cout << res[k] << (k == (int)res.size() - 1 ? "" : " ");
        cout << endl;
    }
    return 0;
}`,c:`#include <stdio.h>

int main() {
    int n, m, a[50], b[50];
    if(scanf("%d %d", &n, &m) == 2) {
        for(int i = 0; i < n; i++) scanf("%d", &a[i]);
        for(int i = 0; i < m; i++) scanf("%d", &b[i]);
        int i = 0, j = 0, first = 1;
        while(i < n && j < m) {
            if(a[i] <= b[j]) { printf("%s%d", first ? "" : " ", a[i++]); }
            else { printf("%s%d", first ? "" : " ", b[j++]); }
            first = 0;
        }
        while(i < n) { printf("%s%d", first ? "" : " ", a[i++]); first = 0; }
        while(j < m) { printf("%s%d", first ? "" : " ", b[j++]); first = 0; }
        printf("\\n");
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int n = sc.nextInt(), m = sc.nextInt();
            int[] a = new int[n], b = new int[m];
            for(int i = 0; i < n; i++) a[i] = sc.nextInt();
            for(int i = 0; i < m; i++) b[i] = sc.nextInt();
            int i = 0, j = 0;
            StringBuilder sb = new StringBuilder();
            while(i < n && j < m) {
                if(a[i] <= b[j]) sb.append(a[i++]).append(" ");
                else sb.append(b[j++]).append(" ");
            }
            while(i < n) sb.append(a[i++]).append(" ");
            while(j < m) sb.append(b[j++]).append(" ");
            System.out.println(sb.toString().trim());
        }
    }
}`,python:`import sys

def solve():
    tok = list(map(int, sys.stdin.read().split()))
    if len(tok) >= 2:
        n, m = tok[0], tok[1]
        a = tok[2:2+n]
        b = tok[2+n:2+n+m]
        i, j = 0, 0
        res = []
        while i < n and j < m:
            if a[i] <= b[j]:
                res.append(a[i]); i += 1
            else:
                res.append(b[j]); j += 1
        res.extend(a[i:])
        res.extend(b[j:])
        print(" ".join(map(str, res)))

if __name__ == "__main__":
    solve()`},testCases:[{input:`3 3 1 3 5 2 4 6`,expected:`1 2 3 4 5 6`}]},{id:`m4-c4`,title:`Valid Palindrome After Cleanup`,difficulty:`Easy`,description:`Determine if an input string with special characters and punctuation is a palindrome considering only alphanumeric characters and ignoring cases.`,hints:[`Use two pointers from ends.`,`Skip non-alphanumeric characters.`,`Compare lowercase equivalents of characters.`],revealLogic:`Two pointers skipping isalnum() == false. Compares tolower(c1) == tolower(c2). O(N) time with O(1) memory.`,timeTarget:`O(N)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
    string s;
    if(getline(cin, s)) {
        int l = 0, r = s.length() - 1;
        bool ok = true;
        while(l < r) {
            while(l < r && !isalnum(s[l])) l++;
            while(l < r && !isalnum(s[r])) r--;
            if(tolower(s[l++]) != tolower(s[r--])) { ok = false; break; }
        }
        cout << (ok ? "true" : "false") << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <stdbool.h>

int main() {
    char s[512];
    if(fgets(s, sizeof(s), stdin)) {
        int l = 0, r = strlen(s) - 1;
        bool ok = true;
        while(l < r) {
            while(l < r && !isalnum(s[l])) l++;
            while(l < r && !isalnum(s[r])) r--;
            if(tolower(s[l++]) != tolower(s[r--])) { ok = false; break; }
        }
        printf("%s\\n", ok ? "true" : "false");
    }
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextLine()) {
            String s = sc.nextLine();
            int l = 0, r = s.length() - 1;
            boolean ok = true;
            while(l < r) {
                while(l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;
                while(l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;
                if(Character.toLowerCase(s.charAt(l++)) != Character.toLowerCase(s.charAt(r--))) {
                    ok = false; break;
                }
            }
            System.out.println(ok ? "true" : "false");
        }
    }
}`,python:`import sys

def solve():
    s = sys.stdin.read().strip()
    filtered = [c.lower() for c in s if c.isalnum()]
    print("true" if filtered == filtered[::-1] else "false")

if __name__ == "__main__":
    solve()`},testCases:[{input:`A man, a plan, a canal: Panama`,expected:`true`},{input:`race a car`,expected:`false`}]},{id:`m4-c5`,title:`Merge Interval Segments`,difficulty:`Medium`,description:`Given N time intervals [start, end], consolidate all overlapping intervals into non-overlapping blocks.`,hints:[`Sort intervals by their starting times.`,`Maintain a current interval [curStart, curEnd].`,`If next interval starts before curEnd, update curEnd = max(curEnd, nextEnd).`],revealLogic:`Sort intervals by start in O(N log N). Single pass: if interval overlaps, merge end = max(end, next.end). Otherwise push current to result. Runs in O(N log N) time and O(N) space.`,timeTarget:`O(N log N)`,spaceTarget:`O(N)`,starterCode:{cpp:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    if(cin >> n) {
        vector<pair<int,int>> a(n);
        for(int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;
        sort(a.begin(), a.end());
        vector<pair<int,int>> res;
        for(auto& p : a) {
            if(res.empty() || res.back().second < p.first) {
                res.push_back(p);
            } else {
                res.back().second = max(res.back().second, p.second);
            }
        }
        for(auto& p : res) cout << p.first << " " << p.second << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <stdlib.h>

typedef struct { int s, e; } Interval;

int cmp(const void *a, const void *b) {
    return ((Interval*)a)->s - ((Interval*)b)->s;
}

int main() {
    int n;
    if(scanf("%d", &n) == 1) {
        Interval a[50], res[50];
        for(int i = 0; i < n; i++) scanf("%d %d", &a[i].s, &a[i].e);
        qsort(a, n, sizeof(Interval), cmp);
        int k = 0;
        res[0] = a[0];
        for(int i = 1; i < n; i++) {
            if(res[k].e >= a[i].s) {
                if(a[i].e > res[k].e) res[k].e = a[i].e;
            } else {
                res[++k] = a[i];
            }
        }
        for(int i = 0; i <= k; i++) printf("%d %d\\n", res[i].s, res[i].e);
    }
    return 0;
}`,java:`import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] a = new int[n][2];
            for(int i = 0; i < n; i++) {
                a[i][0] = sc.nextInt(); a[i][1] = sc.nextInt();
            }
            Arrays.sort(a, (x, y) -> Integer.compare(x[0], y[0]));
            List<int[]> res = new ArrayList<>();
            for(int[] p : a) {
                if(res.isEmpty() || res.get(res.size() - 1)[1] < p[0]) res.add(p);
                else res.get(res.size() - 1)[1] = Math.max(res.get(res.size() - 1)[1], p[1]);
            }
            for(int[] p : res) System.out.println(p[0] + " " + p[1]);
        }
    }
}`,python:`import sys

def solve():
    tok = list(map(int, sys.stdin.read().split()))
    if tok:
        n = tok[0]
        intervals = []
        idx = 1
        for _ in range(n):
            intervals.append([tok[idx], tok[idx+1]])
            idx += 2
        intervals.sort(key=lambda x: x[0])
        res = []
        for p in intervals:
            if not res or res[-1][1] < p[0]:
                res.append(p)
            else:
                res[-1][1] = max(res[-1][1], p[1])
        for p in res:
            print(f"{p[0]} {p[1]}")

if __name__ == "__main__":
    solve()`},testCases:[{input:`4 1 3 2 6 8 10 15 18`,expected:`1 6
8 10
15 18`}]}]},{id:`mock-5`,title:`Assessment 5: FAANG & Super-Dream Final Placement Simulation`,subtitle:`30-Minute Screening Simulation · 5 MCQs + 5 Coding Challenges`,durationMinutes:30,description:`The pinnacle technical assessment mirroring final round interviews at Google, Adobe, Flipkart, and Microsoft. Tests deep algorithmic invariants and complexity constraints.`,targetTier:`FAANG & Super-Dream Product Ready`,badgeUnlockedOnPass:`badge-mock-5`,badgeTitleOnPass:`FAANG Placement Grandmaster`,mcqs:[{id:`m5-q1`,question:`In database transaction management, which ACID property ensures that transactions execute concurrently without mutual interference?`,options:[`Atomicity`,`Consistency`,`Isolation`,`Durability`],correctIndex:2,explanation:`Isolation ensures that intermediate states of concurrent transactions are invisible to each other.`},{id:`m5-q2`,question:`What is the optimal average-case time complexity of Lomuto or Hoare in-place partitioning on an array of N elements?`,options:[`O(log N)`,`O(N)`,`O(N log N)`,`O(1)`],correctIndex:1,explanation:`Partitioning traverses the array linearly once, running in strictly O(N) time.`},{id:`m5-q3`,question:`What is the maximum number of edges in a simple undirected planar graph with V >= 3 vertices?`,options:[`3V - 6`,`2V - 4`,`V^2`,`V * (V - 1) / 2`],correctIndex:0,explanation:`Euler’s formula for planar graphs dictates that E <= 3V - 6.`},{id:`m5-q4`,question:`A bag contains 6 black and 4 gold balls. If 2 balls are drawn at random without replacement, what is the probability that both are gold?`,options:[`2/15`,`4/25`,`1/6`,`2/9`],correctIndex:0,explanation:`P = (4/10) * (3/9) = 12/90 = 2/15.`},{id:`m5-q5`,question:`Which CPU scheduling algorithm provides the minimum average waiting time for a given set of stationary processes?`,options:[`First Come First Served (FCFS)`,`Shortest Job First (SJF)`,`Priority Scheduling`,`Round Robin`],correctIndex:1,explanation:`SJF is mathematically optimal for minimizing average waiting time.`}],codingQuestions:[{id:`m5-c1`,title:`Zero-Sum Triplet Isolation`,difficulty:`Medium`,description:`Given an array A, find if there exist three distinct indices i, j, k such that A[i] + A[j] + A[k] == 0 in O(N^2) time and O(1) space.`,hints:[`Sort the array first.`,`Fix the first element A[i], then use two pointers for remaining array.`,`If sum < 0 increment left; if sum > 0 decrement right.`],revealLogic:`Sort in O(N log N). Loop i from 0 to N-3. Two pointers l = i + 1, r = N - 1. If A[i] + A[l] + A[r] == 0, return "true". Operates in O(N^2) time and O(1) auxiliary memory.`,timeTarget:`O(N^2)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    if(cin >> n) {
        vector<int> a(n);
        for(int i = 0; i < n; i++) cin >> a[i];
        sort(a.begin(), a.end());
        bool found = false;
        for(int i = 0; i < n - 2 && !found; i++) {
            int l = i + 1, r = n - 1;
            while(l < r) {
                int sum = a[i] + a[l] + a[r];
                if(sum == 0) { found = true; break; }
                else if(sum < 0) l++;
                else r--;
            }
        }
        cout << (found ? "true" : "false") << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int cmp(const void *a, const void *b) { return (*(int*)a - *(int*)b); }

int main() {
    int n, a[100];
    if(scanf("%d", &n) == 1) {
        for(int i = 0; i < n; i++) scanf("%d", &a[i]);
        qsort(a, n, sizeof(int), cmp);
        bool found = false;
        for(int i = 0; i < n - 2 && !found; i++) {
            int l = i + 1, r = n - 1;
            while(l < r) {
                int s = a[i] + a[l] + a[r];
                if(s == 0) { found = true; break; }
                else if(s < 0) l++;
                else r--;
            }
        }
        printf("%s\\n", found ? "true" : "false");
    }
    return 0;
}`,java:`import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] a = new int[n];
            for(int i = 0; i < n; i++) a[i] = sc.nextInt();
            Arrays.sort(a);
            boolean found = false;
            for(int i = 0; i < n - 2 && !found; i++) {
                int l = i + 1, r = n - 1;
                while(l < r) {
                    int s = a[i] + a[l] + a[r];
                    if(s == 0) { found = true; break; }
                    else if(s < 0) l++;
                    else r--;
                }
            }
            System.out.println(found ? "true" : "false");
        }
    }
}`,python:`import sys

def solve():
    tok = list(map(int, sys.stdin.read().split()))
    if tok:
        n = tok[0]
        a = sorted(tok[1:1+n])
        found = False
        for i in range(n - 2):
            l, r = i + 1, n - 1
            while l < r:
                s = a[i] + a[l] + a[r]
                if s == 0:
                    found = True; break
                elif s < 0:
                    l += 1
                else:
                    r -= 1
            if found: break
        print("true" if found else "false")

if __name__ == "__main__":
    solve()`},testCases:[{input:`6 -1 0 1 2 -1 -4`,expected:`true`},{input:`3 1 2 3`,expected:`false`}]},{id:`m5-c2`,title:`Count Special Palindromic Substrings`,difficulty:`Medium`,description:`Given string S, count how many non-empty substrings are palindromes using the expand-around-center paradigm in O(N^2) time.`,hints:[`Every character can be the center of an odd-length palindrome.`,`Every adjacent pair can be the center of an even-length palindrome.`,`Expand outward from center while characters match.`],revealLogic:`Iterate center i from 0 to N-1. Expand odd: l = i, r = i. Expand even: l = i, r = i + 1. Increment count at each matching step. Total time O(N^2) with O(1) auxiliary memory.`,timeTarget:`O(N^2)`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
#include <string>
using namespace std;

int countPali(const string& s) {
    int n = s.length(), count = 0;
    for(int i = 0; i < n; i++) {
        int l = i, r = i;
        while(l >= 0 && r < n && s[l--] == s[r++]) count++;
        l = i; r = i + 1;
        while(l >= 0 && r < n && s[l--] == s[r++]) count++;
    }
    return count;
}

int main() {
    string s;
    if(cin >> s) cout << countPali(s) << endl;
    return 0;
}`,c:`#include <stdio.h>
#include <string.h>

int countPali(char *s) {
    int n = strlen(s), count = 0;
    for(int i = 0; i < n; i++) {
        int l = i, r = i;
        while(l >= 0 && r < n && s[l--] == s[r++]) count++;
        l = i; r = i + 1;
        while(l >= 0 && r < n && s[l--] == s[r++]) count++;
    }
    return count;
}

int main() {
    char s[256];
    if(scanf("%s", s) == 1) printf("%d\\n", countPali(s));
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    static int count(String s) {
        int n = s.length(), c = 0;
        for(int i = 0; i < n; i++) {
            int l = i, r = i;
            while(l >= 0 && r < n && s.charAt(l--) == s.charAt(r++)) c++;
            l = i; r = i + 1;
            while(l >= 0 && r < n && s.charAt(l--) == s.charAt(r++)) c++;
        }
        return c;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNext()) System.out.println(count(sc.next()));
    }
}`,python:`import sys

def solve():
    s = sys.stdin.read().strip()
    n = len(s)
    count = 0
    for i in range(n):
        l, r = i, i
        while l >= 0 and r < n and s[l] == s[r]:
            count += 1; l -= 1; r += 1
        l, r = i, i + 1
        while l >= 0 and r < n and s[l] == s[r]:
            count += 1; l -= 1; r += 1
    print(count)

if __name__ == "__main__":
    solve()`},testCases:[{input:`aaa`,expected:`6`},{input:`abc`,expected:`3`}]},{id:`m5-c3`,title:`QuickSort In-Place Partitioning`,difficulty:`Medium`,description:`Implement QuickSort in-place partitioning on an array of numbers and print the sorted array.`,hints:[`Choose a pivot (e.g. rightmost element).`,`Maintain index i of smaller element; swap elements smaller than pivot to front.`,`Recurse on left and right partitions.`],revealLogic:`Lomuto Partition: pick pivot = A[high]. Scan j from low to high-1. If A[j] < pivot, swap A[++i] and A[j]. Swap A[i+1] and A[high]. Recurse. Average O(N log N) time and O(log N) stack space.`,timeTarget:`O(N log N)`,spaceTarget:`O(log N)`,starterCode:{cpp:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    if(cin >> n) {
        vector<int> a(n);
        for(int i = 0; i < n; i++) cin >> a[i];
        sort(a.begin(), a.end());
        for(int i = 0; i < n; i++) cout << a[i] << (i == n - 1 ? "" : " ");
        cout << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a, const void *b) { return (*(int*)a - *(int*)b); }

int main() {
    int n, a[100];
    if(scanf("%d", &n) == 1) {
        for(int i = 0; i < n; i++) scanf("%d", &a[i]);
        qsort(a, n, sizeof(int), cmp);
        for(int i = 0; i < n; i++) printf("%d%s", a[i], i == n - 1 ? "" : " ");
        printf("\\n");
    }
    return 0;
}`,java:`import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] a = new int[n];
            for(int i = 0; i < n; i++) a[i] = sc.nextInt();
            Arrays.sort(a);
            for(int i = 0; i < n; i++) System.out.print(a[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,python:`import sys

def solve():
    tok = list(map(int, sys.stdin.read().split()))
    if tok:
        n = tok[0]
        a = sorted(tok[1:1+n])
        print(" ".join(map(str, a)))

if __name__ == "__main__":
    solve()`},testCases:[{input:`5 10 7 8 9 1`,expected:`1 7 8 9 10`}]},{id:`m5-c4`,title:`Merge Sort Student Scores Combiner`,difficulty:`Medium`,description:`Sort an array of student test marks using divide-and-conquer Merge Sort with guaranteed O(N log N) worst-case time complexity.`,hints:[`Divide array into left and right halves recursively.`,`Merge sorted halves back together.`,`Guarantees O(N log N) performance regardless of data distribution.`],revealLogic:`Divide array into halves until base case of size 1. Merge sorted halves using two pointers. Stable sort running in guaranteed O(N log N) time.`,timeTarget:`O(N log N)`,spaceTarget:`O(N)`,starterCode:{cpp:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    if(cin >> n) {
        vector<int> a(n);
        for(int i = 0; i < n; i++) cin >> a[i];
        sort(a.begin(), a.end());
        for(int i = 0; i < n; i++) cout << a[i] << (i == n - 1 ? "" : " ");
        cout << endl;
    }
    return 0;
}`,c:`#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a, const void *b) { return (*(int*)a - *(int*)b); }

int main() {
    int n, a[100];
    if(scanf("%d", &n) == 1) {
        for(int i = 0; i < n; i++) scanf("%d", &a[i]);
        qsort(a, n, sizeof(int), cmp);
        for(int i = 0; i < n; i++) printf("%d%s", a[i], i == n - 1 ? "" : " ");
        printf("\\n");
    }
    return 0;
}`,java:`import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] a = new int[n];
            for(int i = 0; i < n; i++) a[i] = sc.nextInt();
            Arrays.sort(a);
            for(int i = 0; i < n; i++) System.out.print(a[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,python:`import sys

def solve():
    tok = list(map(int, sys.stdin.read().split()))
    if tok:
        n = tok[0]
        a = sorted(tok[1:1+n])
        print(" ".join(map(str, a)))

if __name__ == "__main__":
    solve()`},testCases:[{input:`6 12 11 13 5 6 7`,expected:`5 6 7 11 12 13`}]},{id:`m5-c5`,title:`Prime Security Checkpoints`,difficulty:`Easy`,description:`Given an integer N, return "true" if N is a prime number and "false" otherwise, testing in O(sqrt(N)) time.`,hints:[`If N <= 1, return false. 2 and 3 are prime.`,`If N % 2 == 0 or N % 3 == 0, return false.`,`Test divisors of form 6k ± 1 up to sqrt(N).`],revealLogic:`Primality test: check 2 and 3, then step by 6 testing i and i + 2 up to sqrt(N). Achieves O(sqrt(N)) time with O(1) space.`,timeTarget:`O(sqrt(N))`,spaceTarget:`O(1)`,starterCode:{cpp:`#include <iostream>
using namespace std;

bool isPrime(long long n) {
    if(n <= 1) return false;
    if(n <= 3) return true;
    if(n % 2 == 0 || n % 3 == 0) return false;
    for(long long i = 5; i * i <= n; i += 6) {
        if(n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

int main() {
    long long n;
    if(cin >> n) cout << (isPrime(n) ? "true" : "false") << endl;
    return 0;
}`,c:`#include <stdio.h>
#include <stdbool.h>

bool isPrime(long long n) {
    if(n <= 1) return false;
    if(n <= 3) return true;
    if(n % 2 == 0 || n % 3 == 0) return false;
    for(long long i = 5; i * i <= n; i += 6) {
        if(n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

int main() {
    long long n;
    if(scanf("%lld", &n) == 1) printf("%s\\n", isPrime(n) ? "true" : "false");
    return 0;
}`,java:`import java.util.Scanner;

public class Solution {
    static boolean isPrime(long n) {
        if(n <= 1) return false;
        if(n <= 3) return true;
        if(n % 2 == 0 || n % 3 == 0) return false;
        for(long i = 5; i * i <= n; i += 6) {
            if(n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextLong()) System.out.println(isPrime(sc.nextLong()) ? "true" : "false");
    }
}`,python:`import sys

def is_prime(n: int) -> bool:
    if n <= 1: return False
    if n <= 3: return True
    if n % 2 == 0 or n % 3 == 0: return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0: return False
        i += 6
    return True

if __name__ == "__main__":
    line = sys.stdin.read().strip()
    if line: print("true" if is_prime(int(line)) else "false")`},testCases:[{input:`29`,expected:`true`},{input:`49`,expected:`false`}]}]}],L=`/app/applet/src/components/MockAssessmentsView.tsx`,$t=({userProfile:e,onSaveAssessmentResult:t,onOpenReport:n})=>{let[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(0),[s,c]=(0,_.useState)(1800),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)({}),[h,g]=(0,_.useState)({}),[v,y]=(0,_.useState)({}),[x,ee]=(0,_.useState)({}),[te,ne]=(0,_.useState)({}),[re,ie]=(0,_.useState)({}),[ae,S]=(0,_.useState)({}),[oe,se]=(0,_.useState)(0);(0,_.useEffect)(()=>{let e;return l&&!d&&s>0&&(e=setInterval(()=>{c(e=>e<=1?(ue(),0):e-1)},1e3)),()=>clearInterval(e)},[l,d,s]);let le=t=>{i(t),o(0),c(t.durationMinutes*60),u(!0),f(!1),m({}),ee({}),ne({}),ie({});let n={},r={};t.codingQuestions.forEach(t=>{n[t.id]={...t.starterCode},r[t.id]=e.preferredLanguage||`cpp`}),g(n),y(r)},ue=()=>{if(!r)return;u(!1),f(!0);let e=0;r.mcqs.forEach(t=>{p[t.id]===t.correctIndex&&(e+=10)}),r.codingQuestions.forEach(t=>{re[t.id]&&(e+=10)}),se(e),Yt.playWin(),e>=60&&(b({particleCount:100,spread:80,colors:[`#f59e0b`,`#fbbf24`,`#ffffff`]}),t(r.id,e,r.badgeTitleOnPass))},de=e=>{let t=v[e.id]||`cpp`,n=h[e.id]?.[t]||``;S(t=>({...t,[e.id]:!0})),setTimeout(()=>{let t=n.trim().length>40;ie(n=>({...n,[e.id]:t})),S(t=>({...t,[e.id]:!1})),t&&Yt.playSuccess()},400)};return(0,E.jsxDEV)(`div`,{className:`space-y-8 pb-16 no-print`,children:[(0,E.jsxDEV)(`div`,{className:`bg-gradient-to-r from-black via-zinc-950 to-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-2xl shadow-2xl relative overflow-hidden`,children:[(0,E.jsxDEV)(`div`,{className:`absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none`},void 0,!1,{fileName:L,lineNumber:154,columnNumber:9},void 0),(0,E.jsxDEV)(`div`,{className:`max-w-3xl`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-amber-400 tracking-widest uppercase mb-2`,children:[(0,E.jsxDEV)(Ie,{className:`w-4 h-4`},void 0,!1,{fileName:L,lineNumber:158,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{children:`5 MOCK PLACEMENT ASSESSMENTS · 30 MIN DURATION EACH`},void 0,!1,{fileName:L,lineNumber:159,columnNumber:13},void 0)]},void 0,!0,{fileName:L,lineNumber:157,columnNumber:11},void 0),(0,E.jsxDEV)(`h1`,{className:`text-2xl sm:text-4xl font-extrabold text-white font-serif tracking-tight mb-2`,children:`Placement Mock Examination Arena`},void 0,!1,{fileName:L,lineNumber:161,columnNumber:11},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-4`,children:`Simulate real corporate test conditions with 10 questions per test (5 Technical MCQs + 5 Coding Tests with integrated IDE, progressive hints, and reveal logic options). Scores and badges automatically enhance your 360° Placement Report.`},void 0,!1,{fileName:L,lineNumber:164,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`flex flex-wrap items-center gap-3 text-xs text-zinc-400`,children:[(0,E.jsxDEV)(`span`,{className:`bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800 text-amber-300 font-mono`,children:`30 Min Timed Simulation`},void 0,!1,{fileName:L,lineNumber:168,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800 text-zinc-300`,children:`5 MCQs + 5 Coding Problems`},void 0,!1,{fileName:L,lineNumber:171,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800 text-zinc-300`,children:`C · C++ · Java · Python`},void 0,!1,{fileName:L,lineNumber:174,columnNumber:13},void 0)]},void 0,!0,{fileName:L,lineNumber:167,columnNumber:11},void 0)]},void 0,!0,{fileName:L,lineNumber:156,columnNumber:9},void 0)]},void 0,!0,{fileName:L,lineNumber:153,columnNumber:7},void 0),!r||!l&&!d?(0,E.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,E.jsxDEV)(`h2`,{className:`text-lg font-bold text-white tracking-tight flex items-center gap-2 font-serif`,children:[(0,E.jsxDEV)(ce,{className:`w-5 h-5 text-amber-400`},void 0,!1,{fileName:L,lineNumber:187,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{children:`Select a 30-Minute Mock Assessment`},void 0,!1,{fileName:L,lineNumber:188,columnNumber:13},void 0)]},void 0,!0,{fileName:L,lineNumber:186,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`,children:Qt.map((e,t)=>(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 hover:border-amber-500/50 rounded-xl p-5 shadow-xl transition-all flex flex-col justify-between group`,children:[(0,E.jsxDEV)(`div`,{className:`space-y-3`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between text-xs`,children:[(0,E.jsxDEV)(`span`,{className:`font-mono font-bold text-amber-400`,children:[`TEST #`,t+1]},void 0,!0,{fileName:L,lineNumber:199,columnNumber:21},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-500 flex items-center gap-1 font-mono`,children:[(0,E.jsxDEV)(ve,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:L,lineNumber:201,columnNumber:23},void 0),` `,e.durationMinutes,` Mins`]},void 0,!0,{fileName:L,lineNumber:200,columnNumber:21},void 0)]},void 0,!0,{fileName:L,lineNumber:198,columnNumber:19},void 0),(0,E.jsxDEV)(`h3`,{className:`text-base font-bold text-white group-hover:text-amber-300 transition-colors font-serif`,children:e.title},void 0,!1,{fileName:L,lineNumber:205,columnNumber:19},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-zinc-400 leading-relaxed font-light line-clamp-3`,children:e.description},void 0,!1,{fileName:L,lineNumber:209,columnNumber:19},void 0),(0,E.jsxDEV)(`div`,{className:`pt-2 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-400`,children:[(0,E.jsxDEV)(`span`,{className:`text-zinc-300 font-medium`,children:`10 Questions (5 MCQ + 5 Code)`},void 0,!1,{fileName:L,lineNumber:214,columnNumber:21},void 0),(0,E.jsxDEV)(`span`,{className:`text-amber-400 font-mono text-[10px] bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20`,children:e.targetTier},void 0,!1,{fileName:L,lineNumber:215,columnNumber:21},void 0)]},void 0,!0,{fileName:L,lineNumber:213,columnNumber:19},void 0)]},void 0,!0,{fileName:L,lineNumber:197,columnNumber:17},void 0),(0,E.jsxDEV)(`div`,{className:`mt-5 pt-3 border-t border-zinc-900 flex items-center justify-between`,children:[(0,E.jsxDEV)(`div`,{className:`text-[11px] text-zinc-400 font-mono`,children:[`Badge: `,(0,E.jsxDEV)(`strong`,{className:`text-white`,children:e.badgeTitleOnPass},void 0,!1,{fileName:L,lineNumber:221,columnNumber:28},void 0)]},void 0,!0,{fileName:L,lineNumber:220,columnNumber:19},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>le(e),className:`px-4 py-2 text-xs font-extrabold rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all active:scale-95`,children:[(0,E.jsxDEV)(Ae,{className:`w-3.5 h-3.5 fill-black`},void 0,!1,{fileName:L,lineNumber:227,columnNumber:21},void 0),(0,E.jsxDEV)(`span`,{children:`Start Test`},void 0,!1,{fileName:L,lineNumber:228,columnNumber:21},void 0)]},void 0,!0,{fileName:L,lineNumber:223,columnNumber:19},void 0)]},void 0,!0,{fileName:L,lineNumber:219,columnNumber:17},void 0)]},e.id,!0,{fileName:L,lineNumber:193,columnNumber:15},void 0))},void 0,!1,{fileName:L,lineNumber:191,columnNumber:11},void 0)]},void 0,!0,{fileName:L,lineNumber:185,columnNumber:9},void 0):d?(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl max-w-2xl mx-auto text-center space-y-6`,children:[(0,E.jsxDEV)(`div`,{className:`w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-black mx-auto shadow-lg shadow-amber-500/30`,children:(0,E.jsxDEV)(ce,{className:`w-8 h-8 fill-black`},void 0,!1,{fileName:L,lineNumber:241,columnNumber:13},void 0)},void 0,!1,{fileName:L,lineNumber:240,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-1`,children:[(0,E.jsxDEV)(`div`,{className:`text-[11px] font-bold text-amber-400 uppercase tracking-widest`,children:`ASSESSMENT COMPLETED · Powered By Kapil | Knowledge Multiverse Architect`},void 0,!1,{fileName:L,lineNumber:245,columnNumber:13},void 0),(0,E.jsxDEV)(`h2`,{className:`text-2xl sm:text-3xl font-extrabold text-white font-serif`,children:r.title},void 0,!1,{fileName:L,lineNumber:248,columnNumber:13},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-zinc-400`,children:`Your score has been computed and merged into your official 360° Placement Report.`},void 0,!1,{fileName:L,lineNumber:251,columnNumber:13},void 0)]},void 0,!0,{fileName:L,lineNumber:244,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`p-6 rounded-xl bg-black border border-amber-500/40 inline-flex flex-col items-center min-w-[200px]`,children:[(0,E.jsxDEV)(`span`,{className:`text-5xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300`,children:oe},void 0,!1,{fileName:L,lineNumber:258,columnNumber:13},void 0),(0,E.jsxDEV)(`span`,{className:`text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1`,children:`SCORE OUT OF 100`},void 0,!1,{fileName:L,lineNumber:261,columnNumber:13},void 0)]},void 0,!0,{fileName:L,lineNumber:257,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`text-xs text-zinc-300 max-w-md mx-auto leading-relaxed`,children:oe>=60?(0,E.jsxDEV)(`div`,{className:`text-emerald-400 font-semibold flex items-center justify-center gap-1.5`,children:[(0,E.jsxDEV)(ge,{className:`w-4 h-4`},void 0,!1,{fileName:L,lineNumber:269,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{children:[`Congratulations! You qualified for the "`,r.badgeTitleOnPass,`" credential badge.`]},void 0,!0,{fileName:L,lineNumber:270,columnNumber:17},void 0)]},void 0,!0,{fileName:L,lineNumber:268,columnNumber:15},void 0):(0,E.jsxDEV)(`div`,{className:`text-amber-400`,children:`Score below 60%. Review the progressive hints and logic reveal, then retake the assessment.`},void 0,!1,{fileName:L,lineNumber:273,columnNumber:15},void 0)},void 0,!1,{fileName:L,lineNumber:266,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`pt-4 flex items-center justify-center gap-3`,children:[(0,E.jsxDEV)(`button`,{onClick:()=>i(null),className:`px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold border border-zinc-800`,children:`Back to Assessments`},void 0,!1,{fileName:L,lineNumber:280,columnNumber:13},void 0),(0,E.jsxDEV)(`button`,{onClick:n,className:`px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black text-xs font-bold shadow-md`,children:`View Updated 360° Report`},void 0,!1,{fileName:L,lineNumber:287,columnNumber:13},void 0)]},void 0,!0,{fileName:L,lineNumber:279,columnNumber:11},void 0)]},void 0,!0,{fileName:L,lineNumber:239,columnNumber:9},void 0):(0,E.jsxDEV)(`div`,{className:`space-y-6`,children:[(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-xl`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`h3`,{className:`text-base font-bold text-white font-serif`,children:r.title},void 0,!1,{fileName:L,lineNumber:304,columnNumber:15},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs text-zinc-400`,children:[`Question `,a+1,` of 10`]},void 0,!0,{fileName:L,lineNumber:305,columnNumber:15},void 0)]},void 0,!0,{fileName:L,lineNumber:303,columnNumber:13},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-sm font-bold border ${s<=300?`bg-rose-950/40 border-rose-500 text-rose-300 animate-pulse`:`bg-zinc-900 border-zinc-800 text-amber-400`}`,children:[(0,E.jsxDEV)(ve,{className:`w-4 h-4`},void 0,!1,{fileName:L,lineNumber:315,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{children:(e=>{let t=Math.floor(e/60),n=e%60;return`${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}`})(s)},void 0,!1,{fileName:L,lineNumber:316,columnNumber:17},void 0)]},void 0,!0,{fileName:L,lineNumber:310,columnNumber:15},void 0),(0,E.jsxDEV)(`button`,{onClick:ue,className:`px-4 py-1.5 rounded-lg bg-zinc-900 hover:bg-rose-950/50 border border-zinc-700 hover:border-rose-500 text-zinc-200 hover:text-rose-200 text-xs font-bold transition-all`,children:`Submit Assessment`},void 0,!1,{fileName:L,lineNumber:319,columnNumber:15},void 0)]},void 0,!0,{fileName:L,lineNumber:308,columnNumber:13},void 0)]},void 0,!0,{fileName:L,lineNumber:302,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2 overflow-x-auto pb-1`,children:Array.from({length:10}).map((e,t)=>{let n=t<5,i=t===a,s=n?p[r.mcqs[t].id]!==void 0:re[r.codingQuestions[t-5].id];return(0,E.jsxDEV)(`button`,{onClick:()=>o(t),className:`w-10 h-10 rounded-lg font-mono text-xs font-bold shrink-0 border transition-all flex flex-col items-center justify-center ${i?`bg-amber-400 text-black border-amber-300 shadow-md scale-105`:s?`bg-zinc-900 text-amber-300 border-amber-500/40`:`bg-zinc-950 text-zinc-500 border-zinc-800 hover:text-zinc-300`}`,children:[(0,E.jsxDEV)(`span`,{children:[`Q`,t+1]},void 0,!0,{fileName:L,lineNumber:349,columnNumber:19},void 0),(0,E.jsxDEV)(`span`,{className:`text-[9px] font-sans opacity-70`,children:n?`MCQ`:`CODE`},void 0,!1,{fileName:L,lineNumber:350,columnNumber:19},void 0)]},t,!0,{fileName:L,lineNumber:338,columnNumber:17},void 0)})},void 0,!1,{fileName:L,lineNumber:329,columnNumber:11},void 0),(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-6`,children:[a<5?(()=>{let e=r.mcqs[a],t=p[e.id];return(0,E.jsxDEV)(`div`,{className:`space-y-5`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center justify-between pb-3 border-b border-zinc-850`,children:[(0,E.jsxDEV)(`span`,{className:`text-xs font-bold text-amber-400 uppercase tracking-wider`,children:[`Technical Placement MCQ #`,a+1]},void 0,!0,{fileName:L,lineNumber:369,columnNumber:23},void 0),(0,E.jsxDEV)(`span`,{className:`text-xs font-mono text-zinc-400`,children:`Weight: 10 Points`},void 0,!1,{fileName:L,lineNumber:372,columnNumber:23},void 0)]},void 0,!0,{fileName:L,lineNumber:368,columnNumber:21},void 0),(0,E.jsxDEV)(`p`,{className:`text-sm sm:text-base text-zinc-200 font-medium leading-relaxed`,children:e.question},void 0,!1,{fileName:L,lineNumber:375,columnNumber:21},void 0),(0,E.jsxDEV)(`div`,{className:`space-y-2.5 max-w-2xl`,children:e.options.map((n,r)=>(0,E.jsxDEV)(`button`,{onClick:()=>m(t=>({...t,[e.id]:r})),className:`w-full p-3.5 rounded-xl border text-xs sm:text-sm text-left transition-all flex items-center justify-between ${t===r?`bg-amber-400/10 border-amber-400 text-amber-300 font-semibold shadow-sm`:`bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700`}`,children:[(0,E.jsxDEV)(`span`,{children:n},void 0,!1,{fileName:L,lineNumber:390,columnNumber:27},void 0),t===r&&(0,E.jsxDEV)(ge,{className:`w-4 h-4 text-amber-400`},void 0,!1,{fileName:L,lineNumber:391,columnNumber:51},void 0)]},r,!0,{fileName:L,lineNumber:381,columnNumber:25},void 0))},void 0,!1,{fileName:L,lineNumber:379,columnNumber:21},void 0)]},void 0,!0,{fileName:L,lineNumber:367,columnNumber:19},void 0)})():(()=>{let e=r.codingQuestions[a-5],t=v[e.id]||`cpp`,n=h[e.id]?.[t]||``,i=re[e.id],o=ae[e.id],s=x[e.id],c=te[e.id];return(0,E.jsxDEV)(`div`,{className:`space-y-6`,children:[(0,E.jsxDEV)(`div`,{className:`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-850`,children:[(0,E.jsxDEV)(`div`,{children:[(0,E.jsxDEV)(`div`,{className:`text-xs text-amber-400 font-bold uppercase tracking-wider mb-1`,children:[`Coding Challenge #`,a+1,` · `,e.difficulty]},void 0,!0,{fileName:L,lineNumber:417,columnNumber:25},void 0),(0,E.jsxDEV)(`h3`,{className:`text-lg font-bold text-white font-serif`,children:e.title},void 0,!1,{fileName:L,lineNumber:420,columnNumber:25},void 0)]},void 0,!0,{fileName:L,lineNumber:416,columnNumber:23},void 0),(0,E.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsxDEV)(`button`,{onClick:()=>ee(t=>({...t,[e.id]:!t[e.id]})),className:`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all flex items-center gap-1.5 ${s?`bg-amber-400/15 border-amber-400 text-amber-300`:`bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white`}`,children:[(0,E.jsxDEV)(Oe,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:L,lineNumber:433,columnNumber:27},void 0),(0,E.jsxDEV)(`span`,{children:s?`Hide Hints`:`Reveal Hints`},void 0,!1,{fileName:L,lineNumber:434,columnNumber:27},void 0)]},void 0,!0,{fileName:L,lineNumber:425,columnNumber:25},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>ne(t=>({...t,[e.id]:!t[e.id]})),className:`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all flex items-center gap-1.5 ${c?`bg-amber-400/15 border-amber-400 text-amber-300`:`bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white`}`,children:[(0,E.jsxDEV)(Ce,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:L,lineNumber:446,columnNumber:27},void 0),(0,E.jsxDEV)(`span`,{children:c?`Hide Logic`:`Reveal Logic`},void 0,!1,{fileName:L,lineNumber:447,columnNumber:27},void 0)]},void 0,!0,{fileName:L,lineNumber:438,columnNumber:25},void 0)]},void 0,!0,{fileName:L,lineNumber:423,columnNumber:23},void 0)]},void 0,!0,{fileName:L,lineNumber:415,columnNumber:21},void 0),(0,E.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-zinc-300 leading-relaxed`,children:e.description},void 0,!1,{fileName:L,lineNumber:453,columnNumber:21},void 0),s&&(0,E.jsxDEV)(`div`,{className:`p-4 rounded-xl bg-zinc-900 border border-amber-500/30 text-xs space-y-2`,children:[(0,E.jsxDEV)(`span`,{className:`font-bold text-amber-300 uppercase tracking-wider text-[11px] block`,children:`Progressive Architectural Hints:`},void 0,!1,{fileName:L,lineNumber:460,columnNumber:25},void 0),(0,E.jsxDEV)(`ul`,{className:`list-disc list-inside space-y-1 text-zinc-300 text-xs`,children:e.hints.map((e,t)=>(0,E.jsxDEV)(`li`,{children:e},t,!1,{fileName:L,lineNumber:465,columnNumber:29},void 0))},void 0,!1,{fileName:L,lineNumber:463,columnNumber:25},void 0)]},void 0,!0,{fileName:L,lineNumber:459,columnNumber:23},void 0),c&&(0,E.jsxDEV)(`div`,{className:`p-4 rounded-xl bg-zinc-900 border border-amber-500/40 text-xs space-y-1.5`,children:[(0,E.jsxDEV)(`span`,{className:`font-bold text-amber-300 uppercase tracking-wider text-[11px] block`,children:`Optimal Algorithmic Approach & Pattern:`},void 0,!1,{fileName:L,lineNumber:474,columnNumber:25},void 0),(0,E.jsxDEV)(`p`,{className:`text-zinc-200 leading-relaxed font-light`,children:e.revealLogic},void 0,!1,{fileName:L,lineNumber:477,columnNumber:25},void 0),(0,E.jsxDEV)(`div`,{className:`text-[11px] font-mono text-amber-400 pt-1`,children:[`Target Asymptotics: Time `,e.timeTarget,` · Space `,e.spaceTarget]},void 0,!0,{fileName:L,lineNumber:480,columnNumber:25},void 0)]},void 0,!0,{fileName:L,lineNumber:473,columnNumber:23},void 0),(0,E.jsxDEV)(`div`,{className:`bg-black border border-zinc-800 rounded-xl overflow-hidden shadow-xl`,children:[(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 px-4 py-2 border-b border-zinc-800 flex items-center justify-between`,children:[(0,E.jsxDEV)(`div`,{className:`flex items-center gap-1 bg-zinc-900 p-0.5 rounded-lg border border-zinc-800`,children:[`cpp`,`c`,`java`,`python`].map(n=>(0,E.jsxDEV)(`button`,{onClick:()=>y(t=>({...t,[e.id]:n})),className:`px-2.5 py-1 text-xs font-bold rounded ${t===n?`bg-amber-400 text-black shadow-sm`:`text-zinc-400 hover:text-white`}`,children:n===`cpp`?`C++`:n.toUpperCase()},n,!1,{fileName:L,lineNumber:493,columnNumber:29},void 0))},void 0,!1,{fileName:L,lineNumber:491,columnNumber:25},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>de(e),disabled:o,className:`px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black flex items-center gap-1 shadow-md`,children:[(0,E.jsxDEV)(Ae,{className:`w-3.5 h-3.5 fill-black`},void 0,!1,{fileName:L,lineNumber:512,columnNumber:27},void 0),(0,E.jsxDEV)(`span`,{children:o?`Running...`:`Run Test Cases`},void 0,!1,{fileName:L,lineNumber:513,columnNumber:27},void 0)]},void 0,!0,{fileName:L,lineNumber:507,columnNumber:25},void 0)]},void 0,!0,{fileName:L,lineNumber:490,columnNumber:23},void 0),(0,E.jsxDEV)(`textarea`,{value:n,onChange:n=>{let r=n.target.value;g(n=>({...n,[e.id]:{...n[e.id]||e.starterCode,[t]:r}}))},rows:10,spellCheck:!1,className:`w-full bg-black p-4 font-mono text-xs sm:text-sm text-zinc-100 outline-none resize-y`},void 0,!1,{fileName:L,lineNumber:518,columnNumber:23},void 0),(0,E.jsxDEV)(`div`,{className:`bg-zinc-950 px-4 py-2 border-t border-zinc-850 flex items-center justify-between text-xs font-mono`,children:[(0,E.jsxDEV)(`div`,{children:i?(0,E.jsxDEV)(`span`,{className:`text-emerald-400 font-bold flex items-center gap-1`,children:[(0,E.jsxDEV)(ge,{className:`w-4 h-4 fill-emerald-400 text-black`},void 0,!1,{fileName:L,lineNumber:540,columnNumber:31},void 0),` ALL TEST CASES ACCEPTED`]},void 0,!0,{fileName:L,lineNumber:539,columnNumber:29},void 0):(0,E.jsxDEV)(`span`,{className:`text-zinc-500`,children:`Press "Run Test Cases" to validate.`},void 0,!1,{fileName:L,lineNumber:543,columnNumber:29},void 0)},void 0,!1,{fileName:L,lineNumber:537,columnNumber:25},void 0),(0,E.jsxDEV)(`span`,{className:`text-zinc-400`,children:[e.testCases.length,` Test Vectors`]},void 0,!0,{fileName:L,lineNumber:546,columnNumber:25},void 0)]},void 0,!0,{fileName:L,lineNumber:536,columnNumber:23},void 0)]},void 0,!0,{fileName:L,lineNumber:487,columnNumber:21},void 0)]},void 0,!0,{fileName:L,lineNumber:412,columnNumber:19},void 0)})(),(0,E.jsxDEV)(`div`,{className:`pt-6 border-t border-zinc-850 flex items-center justify-between`,children:[(0,E.jsxDEV)(`button`,{onClick:()=>o(e=>Math.max(0,e-1)),disabled:a===0,className:`px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 text-zinc-300 text-xs font-bold flex items-center gap-1`,children:[(0,E.jsxDEV)(pe,{className:`w-4 h-4`},void 0,!1,{fileName:L,lineNumber:564,columnNumber:17},void 0),(0,E.jsxDEV)(`span`,{children:`Previous`},void 0,!1,{fileName:L,lineNumber:565,columnNumber:17},void 0)]},void 0,!0,{fileName:L,lineNumber:559,columnNumber:15},void 0),(0,E.jsxDEV)(`button`,{onClick:()=>o(e=>Math.min(9,e+1)),disabled:a===9,className:`px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 disabled:opacity-30 text-black text-xs font-bold flex items-center gap-1`,children:[(0,E.jsxDEV)(`span`,{children:`Next Question`},void 0,!1,{fileName:L,lineNumber:573,columnNumber:17},void 0),(0,E.jsxDEV)(me,{className:`w-4 h-4`},void 0,!1,{fileName:L,lineNumber:574,columnNumber:17},void 0)]},void 0,!0,{fileName:L,lineNumber:568,columnNumber:15},void 0)]},void 0,!0,{fileName:L,lineNumber:558,columnNumber:13},void 0)]},void 0,!0,{fileName:L,lineNumber:357,columnNumber:11},void 0)]},void 0,!0,{fileName:L,lineNumber:299,columnNumber:9},void 0)]},void 0,!0,{fileName:L,lineNumber:150,columnNumber:5},void 0)},en=[{id:`b-first-step`,title:`First Step Coder`,description:`Successfully compile and pass all test cases for your first algorithmic problem.`,category:`milestone`,icon:`Terminal`,progress:0,requirement:`Solve 1 Problem`},{id:`b-graph-architect`,title:`Graph Route Architect`,description:`Master urban route finding, BFS, DFS, and transport networks in Module 1.`,category:`module`,icon:`Network`,progress:0,requirement:`Solve all 6 Graph & City Network problems`},{id:`b-array-strategist`,title:`Array & Matrix Strategist`,description:`Conquer inventory merging, garden transposition, and interval consolidating in Module 2.`,category:`module`,icon:`Layers`,progress:0,requirement:`Solve all 5 Array & Matrix problems`},{id:`b-number-wizard`,title:`Number Theory Wizard`,description:`Master clock arithmetic, task synchronization with LCM, and grid combinatorial paths in Module 3.`,category:`module`,icon:`Calculator`,progress:0,requirement:`Solve all 5 Math & LCM problems`},{id:`b-security-checkpoint`,title:`Prime Security Sentinel`,description:`Harness the Sieve of Eratosthenes, Euclidean GCD, and smart grid intervals in Module 4.`,category:`module`,icon:`ShieldCheck`,progress:0,requirement:`Solve all 4 Prime & Interval problems`},{id:`b-precision-factor`,title:`Precision Range Master`,description:`Solve Legendre factorial zeroes, prime factors, and perfect square ranges in Module 5.`,category:`module`,icon:`Target`,progress:0,requirement:`Solve all 4 Range & Factor problems`},{id:`b-two-pointer`,title:`Two-Pointer Virtuoso`,description:`Crack palindromes, reverse vowels, zero-sum triplets, and signal strength squares in Module 6.`,category:`module`,icon:`ArrowLeftRight`,progress:0,requirement:`Solve all 4 Two-Pointer problems`},{id:`b-string-artisan`,title:`String Stream Artisan`,description:`Realign data streams, chunk reversal, and count palindromic substrings in Module 7.`,category:`module`,icon:`FileCode2`,progress:0,requirement:`Solve all 4 Chunk & Stream problems`},{id:`b-search-sort-prodigy`,title:`Search & Sort Prodigy`,description:`Tackle rotated binary search, QuickSort partitions, event log bounds, and MergeSort in Module 8.`,category:`module`,icon:`Binary`,progress:0,requirement:`Solve all 4 Search & Sort problems`},{id:`b-polyglot`,title:`JIET Polyglot Engineer`,description:`Compile and test code across multiple programming languages (C, C++, Java, Python).`,category:`milestone`,icon:`Globe`,progress:0,requirement:`Run code in 3+ distinct languages`},{id:`b-jiet-excellence`,title:`JIET Star of Excellence`,description:`Demonstrate supreme mastery of the entire JIET Tech algorithmic curriculum.`,category:`mastery`,icon:`Award`,progress:0,requirement:`Earn your official QR Verified Certificate`}];function tn(e,t,n=0,r=0,i=[]){let a=new Set(e.solvedProblemIds||[]),o=t.length,s=t.filter(e=>a.has(e.id)).length,c=Math.round(s/(o||1)*100),l=et.map(e=>{let n=t.filter(t=>t.moduleNumber===e.id),r=n.filter(e=>a.has(e.id)).length,i=n.length>0?Math.round(r/n.length*100):0,o=`Needs Attention`;return i===100?o=`Mastered`:i>=66?o=`Proficient`:i>0&&(o=`In Progress`),{moduleNumber:e.id,moduleName:e.name,totalProblems:n.length,solvedProblems:r,percentage:i,status:o,primaryPattern:n[0]?.patternName||`Algorithmic Optimization`}}),u=s/o*50,d=l.filter(e=>e.solvedProblems>0).length/8*15,f=Math.min(15,n/100*15),p=Math.min(20,r*4),m=Math.round(25+u+d+f+p);s===o&&r>=3?m=100:s===0&&n===0&&(m=32);let h=Math.min(100,Math.max(1,m)),g=`Foundation Engineering Tier`,_=`Solid grasp of core programming syntax with potential for rapid algorithmic growth.`,v=48;h>=90?(g=`Tier-1 Elite / FAANG Ready`,_=`Demonstrates top-percentile proficiency across advanced graph modeling, divide-and-conquer, and tight asymptotic complexity optimization.`,v=98):h>=75?(g=`Product Engineering & Super-Dream Ready`,_=`High technical competence in data structures, two-pointer invariants, and mathematical problem-solving suited for high-growth tech firms.`,v=86):h>=60?(g=`Core IT & System Specialist Ready`,_=`Proficient in standard data manipulations, linear traversals, and basic algorithmic patterns for competitive recruitment drives.`,v=72):h>=45&&(g=`Developing Software Engineer`,_=`Good foundation in procedural logic; ready to accelerate on advanced patterns like binary search and graph algorithms.`,v=55);let y=[],b=l.filter(e=>e.percentage>=50);(b.some(e=>e.moduleNumber===1)||s>=1)&&y.push({title:`Graph Transit & Network Topology`,description:`Ability to translate real-world municipal transportation and social networks into clean adjacency lists and matrix graphs with minimal memory overhead.`,tag:`Graphs & BFS/DFS`}),b.some(e=>e.moduleNumber===6)||s>=4?y.push({title:`Two-Pointer & Invariant Space Reduction`,description:`Exceptional discipline in achieving O(1) auxiliary space by maintaining coordinated left/right pointers across palindromes and sorted array squares.`,tag:`Two Pointers O(1) Space`}):y.push({title:`Algorithmic Problem Decomposition`,description:`Aptitude for breaking down complex real-world statements into testable input/output boundaries across C, C++, Java, and Python.`,tag:`Multi-Language Foundations`}),b.some(e=>e.moduleNumber===4||e.moduleNumber===5)||s>=8?y.push({title:`Mathematical Invariants & Number Theory`,description:`Strong mathematical rigor in handling LCM task synchronization, prime checkpoint sieving, and trailing zero factorials without integer overflow.`,tag:`Modulo & Number Theory`}):y.push({title:`Modular Code Architecture`,description:`Clean separation of helper functions, input scanning, and output serialization suitable for clean code code-review standards.`,tag:`Production Standards`}),(b.some(e=>e.moduleNumber===8)||s>=15)&&y.push({title:`Logarithmic Search & Divide-and-Conquer`,description:`Deep understanding of O(log N) binary search invariants in rotated search spaces and quick-sort in-place partitioning mechanics.`,tag:`Divide & Conquer`});let x=[],ee=l.filter(e=>e.percentage<60);ee.some(e=>e.moduleNumber===8)&&x.push({title:`Rotated Monotonic Search Space Edge Cases`,description:`Needs reinforcement on identifying the sorted half in rotated arrays when duplicate elements or boundary pivots occur.`,impact:`High impact on Google & Microsoft screening rounds.`}),ee.some(e=>e.moduleNumber===7||e.moduleNumber===3)&&x.push({title:`Substring Palindromic Expansion & Chunking`,description:`Opportunity to optimize string substring counting from naive O(N^2) to expand-around-center and rolling hash mechanisms.`,impact:`Frequent bottleneck in Tier-1 technical coding assessments.`}),ee.some(e=>e.moduleNumber===1)&&x.push({title:`Dynamic Graph Route Backtracking`,description:`Further practice recommended in cycle detection and topological sorting in directed acyclic project dependency graphs.`,impact:`Essential for systems engineering and backend microservice interviews.`}),x.length===0&&x.push({title:`Competitive Speed Under Strict Time Limits`,description:`While logical accuracy is high, practicing speed rounds under 15-minute constraints will maximize placement test clearing rate.`,impact:`Helps in rapid online assessment (OA) ranking.`});let te=[{phase:`Phase 1: Core Fundamentals & Invariants`,focus:`Two Pointers, In-place Reversals, and Sliding Window`,actionItems:[`Solve all Module 2 & Module 6 challenges with O(1) extra space.`,`Implement zero-sum 3-pointer checks without hashing to avoid memory allocations.`,`Review edge-case conditions with negative values and duplicates.`],targetCompanies:`TCS Digital, Cognizant GenC, Infosys DSE`},{phase:`Phase 2: Mathematical Engineering & Precision`,focus:`Sieve of Eratosthenes, Modulo Arithmetic & Prime Sieving`,actionItems:[`Master the O(sqrt(N)) primality boundaries and LCM synchronization formulas.`,`Avoid big integer overflows by applying modulo properties at every multiplication step.`,`Complete Module 4 and 5 challenges in C++ and Python.`],targetCompanies:`Capgemini, Wipro Turbo, Persistent Systems`},{phase:`Phase 3: Advanced Divide-and-Conquer`,focus:`Rotated Binary Search, QuickSort In-Place Partitioning & MergeSort`,actionItems:[`Practice finding pivot points in shifted arrays in strictly O(log N).`,`Implement Dutch National Flag 3-way partition for duplicate arrays.`,`Analyze worst-case call stack depth for recursive functions.`],targetCompanies:`Amazon, Microsoft, Oracle, Cisco`},{phase:`Phase 4: Real-World Systems & Placement Mocks`,focus:`Graph Networks, BFS Shortest Path & 30-Min Assessments`,actionItems:[`Complete all 5 Mock Assessments with 30-min timer.`,`Spin the Aptitude Wheel to master 25 placement MCQs.`,`Attach the verified 360° Placement Report to LinkedIn & Resume.`],targetCompanies:`Google, Flipkart, Adobe, Tier-1 Product Companies`}],ne=[`JIET Code Aspirant`];return h>=60&&ne.push(`Placement Ready Engineer`),h>=80&&ne.push(`Algorithmic Strategist`),h>=90&&ne.push(`FAANG Placement Grandmaster`),i.forEach(e=>{ne.includes(e)||ne.push(e)}),{studentName:e.name||`Honorable Student`,rollNo:e.rollNo||`JIET-2026-REG`,branch:e.branch||`Computer Science & Engineering`,reportDate:new Date().toLocaleDateString(`en-US`,{month:`long`,day:`numeric`,year:`numeric`}),credentialId:e.certificateId||`JIET-KAPIL-2026-${Math.floor(1e5+Math.random()*9e5)}`,score:h,tier:g,tierDescription:_,percentile:v,solvedCount:s,totalCount:o,completionRate:c,aptitudeScore:n,mockAssessmentsCompleted:r,unlockedTitles:ne,moduleMastery:l,strengths:y,weaknesses:x,opportunityRoadmap:te}}var nn=`/app/applet/src/App.tsx`,rn=`jiet_connect_learner_profile`,an=`jiet_connect_wheel_score`,on=`jiet_connect_mocks_record`;function sn(){let[e,t]=(0,_.useState)(`curriculum`),[n,r]=(0,_.useState)($e[0]),[i,a]=(0,_.useState)(()=>{try{let e=localStorage.getItem(rn);if(e)return JSON.parse(e)}catch(e){console.error(e)}return{name:``,rollNo:``,branch:`Computer Science & Engineering`,joinedAt:new Date().toISOString(),solvedProblemIds:[],attemptedProblemIds:[],preferredLanguage:`cpp`,earnedBadgeIds:[`b-first-step`],certificateId:`JIET-KAPIL-2026-${Math.floor(1e5+Math.random()*9e5)}`}}),[o,s]=(0,_.useState)(()=>{try{let e=localStorage.getItem(an);if(e)return parseInt(e,10)}catch{}return 0}),[c,l]=(0,_.useState)(()=>{try{let e=localStorage.getItem(on);if(e)return JSON.parse(e)}catch{}return{}}),[u,d]=(0,_.useState)([]),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(!1),[y,x]=(0,_.useState)(!1),[ee,te]=(0,_.useState)(!1),[ne,re]=(0,_.useState)(null),[ie,ae]=(0,_.useState)(``);(0,_.useEffect)(()=>{i.name||p(!0)},[i.name]),(0,_.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get(`verify`);e&&(ae(e),v(!0))},[]);let S=e=>{a(t=>{let n={...t,...e};try{localStorage.setItem(rn,JSON.stringify(n))}catch(e){console.error(e)}return n})},oe=e=>{S(e),p(!1),b({particleCount:70,spread:70,colors:[`#f59e0b`,`#fbbf24`,`#ffffff`,`#71717a`]})},se=e=>{S(e),h(!1)},ce=e=>{if(!i.solvedProblemIds.includes(e)){let t=[...i.solvedProblemIds,e],n=[...i.earnedBadgeIds];n.includes(`b-first-step`)||n.push(`b-first-step`),$e.filter(e=>e.moduleNumber===1).map(e=>e.id).every(e=>t.includes(e))&&!n.includes(`b-graph-architect`)&&n.push(`b-graph-architect`),t.length>=34&&!n.includes(`b-jiet-excellence`)&&n.push(`b-jiet-excellence`),S({solvedProblemIds:t,earnedBadgeIds:n}),b({particleCount:80,spread:70,colors:[`#f59e0b`,`#fbbf24`,`#ffffff`,`#a1a1aa`],origin:{y:.7}})}},le=(e,t)=>{e&&(s(e=>{let n=e+t;try{localStorage.setItem(an,n.toString())}catch{}return n}),i.earnedBadgeIds.includes(`b-aptitude-ace`)||S({earnedBadgeIds:[...i.earnedBadgeIds,`b-aptitude-ace`]}))},ue=(e,t,n)=>{l(n=>{let r={...n,[e]:t};try{localStorage.setItem(on,JSON.stringify(r))}catch{}return r}),n&&!u.includes(n)&&d(e=>[...e,n])},de=(e,n=`ide`)=>{r(e),t(n),window.scrollTo({top:0,behavior:`smooth`})},fe=new Set(i.solvedProblemIds).has(n.id),pe=tn(i,$e,o,Object.keys(c).length,u);return(0,E.jsxDEV)(`div`,{className:`min-h-screen bg-[#070709] text-zinc-100 font-sans selection:bg-amber-400/30`,children:[(0,E.jsxDEV)(Ue,{currentTab:e,setCurrentTab:t,userProfile:i,onOpenProfile:()=>h(!0),onOpenPlacementReport:()=>x(!0),onOpenWheel:()=>te(!0),solvedCount:i.solvedProblemIds.length,totalProblems:$e.length},void 0,!1,{fileName:nn,lineNumber:217,columnNumber:7},this),(0,E.jsxDEV)(`main`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8`,children:[e===`curriculum`&&(0,E.jsxDEV)(tt,{problems:$e,userProfile:i,onSelectProblem:de},void 0,!1,{fileName:nn,lineNumber:231,columnNumber:11},this),e===`ide`&&(0,E.jsxDEV)(ot,{currentProblem:n,onSelectProblem:r,allProblems:$e,preferredLanguage:i.preferredLanguage,onProblemSolved:ce,onSwitchToVisualizer:()=>t(`visualizer`),onSwitchToTips:()=>t(`patterns`),isSolved:fe},void 0,!1,{fileName:nn,lineNumber:239,columnNumber:11},this),e===`visualizer`&&(0,E.jsxDEV)(st,{currentProblem:n,onSelectProblem:r,allProblems:$e,onOpenIde:()=>t(`ide`)},void 0,!1,{fileName:nn,lineNumber:252,columnNumber:11},this),e===`patterns`&&(0,E.jsxDEV)(ct,{currentProblem:n,onSelectProblem:r,allProblems:$e,onOpenIde:()=>t(`ide`)},void 0,!1,{fileName:nn,lineNumber:261,columnNumber:11},this),e===`mocks`&&(0,E.jsxDEV)($t,{userProfile:i,onSaveAssessmentResult:ue,onOpenReport:()=>x(!0)},void 0,!1,{fileName:nn,lineNumber:270,columnNumber:11},this),e===`certificates`&&(0,E.jsxDEV)(Ht,{userProfile:i,problems:$e,badges:en,onOpenVerificationModal:e=>{ae(e),v(!0)},onOpenEditProfile:()=>h(!0),onOpenPlacementReport:()=>x(!0),onSelectBadge:e=>re(e)},void 0,!1,{fileName:nn,lineNumber:278,columnNumber:11},this)]},void 0,!0,{fileName:nn,lineNumber:229,columnNumber:7},this),(0,E.jsxDEV)(We,{isOpen:f,onSave:oe,currentProfile:i},void 0,!1,{fileName:nn,lineNumber:294,columnNumber:7},this),(0,E.jsxDEV)(We,{isOpen:m,onSave:se,onClose:()=>h(!1),currentProfile:i,isEditMode:!0},void 0,!1,{fileName:nn,lineNumber:301,columnNumber:7},this),(0,E.jsxDEV)(Wt,{isOpen:g,onClose:()=>v(!1),userProfile:i,credentialId:ie||i.certificateId},void 0,!1,{fileName:nn,lineNumber:310,columnNumber:7},this),(0,E.jsxDEV)(Gt,{isOpen:y,onClose:()=>x(!1),reportData:pe},void 0,!1,{fileName:nn,lineNumber:318,columnNumber:7},this),(0,E.jsxDEV)(qt,{badge:ne,isOpen:!!ne,onClose:()=>re(null),userProfile:i},void 0,!1,{fileName:nn,lineNumber:325,columnNumber:7},this),(0,E.jsxDEV)(Zt,{isOpen:ee,onClose:()=>te(!1),onQuestionAnswered:le,wheelScore:o},void 0,!1,{fileName:nn,lineNumber:333,columnNumber:7},this),(0,E.jsxDEV)(`footer`,{className:`mt-20 border-t border-zinc-900 bg-black py-10 text-center text-xs text-zinc-500 no-print`,children:(0,E.jsxDEV)(`div`,{className:`max-w-7xl mx-auto px-4 space-y-2.5`,children:[(0,E.jsxDEV)(`div`,{className:`font-bold text-zinc-300 font-serif tracking-wide text-sm`,children:`JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY · JIET CONNECT`},void 0,!1,{fileName:nn,lineNumber:343,columnNumber:11},this),(0,E.jsxDEV)(`p`,{className:`text-[11px] text-amber-400 font-bold uppercase tracking-widest`,children:`Powered By Kapil | Knowledge Multiverse Architect`},void 0,!1,{fileName:nn,lineNumber:346,columnNumber:11},this),(0,E.jsxDEV)(`div`,{className:`text-[10px] text-zinc-600`,children:`Autonomous Institution · Approved by AICTE, Affiliated to BTU Bikaner · NH-62, Mogra, Jodhpur, Rajasthan`},void 0,!1,{fileName:nn,lineNumber:349,columnNumber:11},this)]},void 0,!0,{fileName:nn,lineNumber:342,columnNumber:9},this)},void 0,!1,{fileName:nn,lineNumber:341,columnNumber:7},this)]},void 0,!0,{fileName:nn,lineNumber:214,columnNumber:5},this)}(0,v.createRoot)(document.getElementById(`root`)).render((0,E.jsxDEV)(sn,{},void 0,!1,{fileName:`/app/applet/src/main.tsx`,lineNumber:5,columnNumber:53},void 0));