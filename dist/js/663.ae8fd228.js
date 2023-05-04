"use strict";(self["webpackChunknew_project"]=self["webpackChunknew_project"]||[]).push([[663],{6904:function(e,t,n){n.d(t,{db:function(){return Ju}});var i={};n.r(i),n.d(i,{FirebaseError:function(){return A},SDK_VERSION:function(){return Ot},_DEFAULT_ENTRY_NAME:function(){return Ct},_addComponent:function(){return Tt},_addOrOverwriteComponent:function(){return St},_apps:function(){return Et},_clearComponents:function(){return xt},_components:function(){return It},_getProvider:function(){return Nt},_registerComponent:function(){return kt},_removeServiceInstance:function(){return Pt},deleteApp:function(){return qt},getApp:function(){return Ft},getApps:function(){return Mt},initializeApp:function(){return Lt},onLog:function(){return Wt},registerVersion:function(){return Bt},setLogLevel:function(){return Ut}});
/**
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
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},s=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},a=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},l=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,l=a?e[r+2]:0,c=t>>2,h=(3&t)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):l(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,l=a?n[e.charAt(r)]:64;++r;const c=r<e.length,u=c?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==l||null==u)throw new h;const d=t<<2|o>>4;if(i.push(d),64!==l){const e=o<<4&240|l>>2;if(i.push(e),64!==u){const e=l<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=a(e);return c.encodeByteArray(t,!0)},d=function(e){return u(e).replace(/\./g,"")},p=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
function _(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&g(n)&&(e[n]=f(e[n],t[n]));return e}function g(e){return"__proto__"!==e}
/**
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
 */function m(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const y=()=>m().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_API:"https://vue3-course-api.hexschool.io",VUE_APP_PATH:"ldd-api",BASE_URL:"/wildlife-save/dist/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},w=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&p(e[1]);return t&&JSON.parse(t)},C=()=>{try{return y()||v()||w()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=()=>{var e;return null===(e=C())||void 0===e?void 0:e.config};
/**
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
 */
class E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function I(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[d(JSON.stringify(n)),d(JSON.stringify(o)),a].join(".")}
/**
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
 */function T(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function S(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(T())}function k(){return"object"===typeof self&&self.self===self}function N(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function P(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(Fn){t(Fn)}}))}
/**
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
 */
const D="FirebaseError";class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=D,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?L(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new A(i,o,n);return a}}function L(e,t){return e.replace(F,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const F=/\{\$([^}]+)}/g;
/**
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
 */function M(e){return JSON.parse(e)}function q(e){return JSON.stringify(e)}
/**
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
 */const B=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=M(p(s[0])||""),n=M(p(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},W=function(e){const t=B(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},U=function(e){const t=B(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
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
 */
function j(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function V(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function H(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function $(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(Q(n)&&Q(s)){if(!$(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Q(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function Y(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
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
 */
class K{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let h=0;h<16;h++)n[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)n[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const e=n[h-3]^n[h-8]^n[h-14]^n[h-16];n[h]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let h=0;h<80;h++){h<40?h<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):h<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const e=(s<<5|s>>>27)+i+c+r+n[h]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function G(e,t){const n=new J(e,t);return n.subscribe.bind(n)}class J{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=X(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Z),void 0===i.error&&(i.error=Z),void 0===i.complete&&(i.complete=Z);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function X(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function Z(){}
/**
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
 */const ee=function(e,t,n,i){let r;if(i<t?r="at least "+t:i>n&&(r=0===n?"none":"no more than "+n),r){const t=e+" failed: Was called with "+i+(1===i?" argument.":" arguments.")+" Expects "+r+".";throw new Error(t)}};function te(e,t){return`${e} failed: ${t} argument `}function ne(e,t,n,i){if((!i||n)&&"function"!==typeof n)throw new Error(te(e,t)+"must be a valid function.")}function ie(e,t,n,i){if((!i||n)&&("object"!==typeof n||null===n))throw new Error(te(e,t)+"must be a valid context object.")}
/**
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
 */const re=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,s(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;r=65536+(t<<10)+n}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},se=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function oe(e){return e&&e._delegate?e._delegate:e}class ae{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const le="[DEFAULT]";
/**
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
 */class ce{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new E;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(ue(e))try{this.getOrInitializeService({instanceIdentifier:le})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=le){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=le){return this.instances.has(e)}getOptions(e=le){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:he(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=le){return this.component?this.component.multipleInstances?e:le:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function he(e){return e===le?void 0:e}function ue(e){return"EAGER"===e.instantiationMode}
/**
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
 */class de{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ce(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */
const pe=[];var _e;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(_e||(_e={}));const fe={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},ge=_e.INFO,me={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},ye=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=me[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class ve{constructor(e){this.name=e,this._logLevel=ge,this._logHandler=ye,this._userLogHandler=null,pe.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?fe[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}function we(e){pe.forEach((t=>{t.setLogLevel(e)}))}function Ce(e,t){for(const n of pe){let i=null;t&&t.level&&(i=fe[t.level]),n.userLogHandler=null===e?null:(t,n,...r)=>{const s=r.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:_e[n].toLowerCase(),message:s,args:r,type:t.name})}}}const be=(e,t)=>t.some((t=>e instanceof t));let Ee,Ie;function Te(){return Ee||(Ee=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Se(){return Ie||(Ie=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ke=new WeakMap,Ne=new WeakMap,Pe=new WeakMap,xe=new WeakMap,Re=new WeakMap;function De(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(qe(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&ke.set(t,e)})).catch((()=>{})),Re.set(t,e),t}function Ae(e){if(Ne.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Ne.set(e,t)}let Oe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ne.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Pe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Le(e){Oe=e(Oe)}function Fe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?Se().includes(e)?function(...t){return e.apply(Be(this),t),qe(ke.get(this))}:function(...t){return qe(e.apply(Be(this),t))}:function(t,...n){const i=e.call(Be(this),t,...n);return Pe.set(i,t.sort?t.sort():[t]),qe(i)}}function Me(e){return"function"===typeof e?Fe(e):(e instanceof IDBTransaction&&Ae(e),be(e,Te())?new Proxy(e,Oe):e)}function qe(e){if(e instanceof IDBRequest)return De(e);if(xe.has(e))return xe.get(e);const t=Me(e);return t!==e&&(xe.set(e,t),Re.set(t,e)),t}const Be=e=>Re.get(e);function We(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=qe(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(qe(o.result),e.oldVersion,e.newVersion,qe(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Ue=["get","getKey","getAll","getAllKeys","count"],je=["put","add","delete","clear"],Ve=new Map;function ze(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(Ve.get(t))return Ve.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=je.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Ue.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return Ve.set(t,s),s}Le((e=>({...e,get:(t,n,i)=>ze(t,n)||e.get(t,n,i),has:(t,n)=>!!ze(t,n)||e.has(t,n)})));
/**
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
 */
class He{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if($e(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function $e(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const Qe="@firebase/app",Ye="0.9.9",Ke=new ve("@firebase/app"),Ge="@firebase/app-compat",Je="@firebase/analytics-compat",Xe="@firebase/analytics",Ze="@firebase/app-check-compat",et="@firebase/app-check",tt="@firebase/auth",nt="@firebase/auth-compat",it="@firebase/database",rt="@firebase/database-compat",st="@firebase/functions",ot="@firebase/functions-compat",at="@firebase/installations",lt="@firebase/installations-compat",ct="@firebase/messaging",ht="@firebase/messaging-compat",ut="@firebase/performance",dt="@firebase/performance-compat",pt="@firebase/remote-config",_t="@firebase/remote-config-compat",ft="@firebase/storage",gt="@firebase/storage-compat",mt="@firebase/firestore",yt="@firebase/firestore-compat",vt="firebase",wt="9.21.0",Ct="[DEFAULT]",bt={[Qe]:"fire-core",[Ge]:"fire-core-compat",[Xe]:"fire-analytics",[Je]:"fire-analytics-compat",[et]:"fire-app-check",[Ze]:"fire-app-check-compat",[tt]:"fire-auth",[nt]:"fire-auth-compat",[it]:"fire-rtdb",[rt]:"fire-rtdb-compat",[st]:"fire-fn",[ot]:"fire-fn-compat",[at]:"fire-iid",[lt]:"fire-iid-compat",[ct]:"fire-fcm",[ht]:"fire-fcm-compat",[ut]:"fire-perf",[dt]:"fire-perf-compat",[pt]:"fire-rc",[_t]:"fire-rc-compat",[ft]:"fire-gcs",[gt]:"fire-gcs-compat",[mt]:"fire-fst",[yt]:"fire-fst-compat","fire-js":"fire-js",[vt]:"fire-js-all"},Et=new Map,It=new Map;function Tt(e,t){try{e.container.addComponent(t)}catch(n){Ke.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function St(e,t){e.container.addOrOverwriteComponent(t)}function kt(e){const t=e.name;if(It.has(t))return Ke.debug(`There were multiple attempts to register component ${t}.`),!1;It.set(t,e);for(const n of Et.values())Tt(n,e);return!0}function Nt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Pt(e,t,n=Ct){Nt(e,t).clearInstance(n)}function xt(){It.clear()}
/**
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
 */const Rt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new O("app","Firebase",Rt);
/**
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
 */
class At{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ae("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}
/**
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
 */const Ot=wt;function Lt(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:Ct,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!==typeof r||!r)throw Dt.create("bad-app-name",{appName:String(r)});if(n||(n=b()),!n)throw Dt.create("no-options");const s=Et.get(r);if(s){if($(n,s.options)&&$(i,s.config))return s;throw Dt.create("duplicate-app",{appName:r})}const o=new de(r);for(const l of It.values())o.addComponent(l);const a=new At(n,i,o);return Et.set(r,a),a}function Ft(e=Ct){const t=Et.get(e);if(!t&&e===Ct)return Lt();if(!t)throw Dt.create("no-app",{appName:e});return t}function Mt(){return Array.from(Et.values())}async function qt(e){const t=e.name;Et.has(t)&&(Et.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Bt(e,t,n){var i;let r=null!==(i=bt[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ke.warn(e.join(" "))}kt(new ae(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}function Wt(e,t){if(null!==e&&"function"!==typeof e)throw Dt.create("invalid-log-argument");Ce(e,t)}function Ut(e){we(e)}
/**
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
 */const jt="firebase-heartbeat-database",Vt=1,zt="firebase-heartbeat-store";let Ht=null;function $t(){return Ht||(Ht=We(jt,Vt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(zt)}}}).catch((e=>{throw Dt.create("idb-open",{originalErrorMessage:e.message})}))),Ht}async function Qt(e){try{const t=await $t();return t.transaction(zt).objectStore(zt).get(Kt(e))}catch(t){if(t instanceof A)Ke.warn(t.message);else{const e=Dt.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});Ke.warn(e.message)}}}async function Yt(e,t){try{const n=await $t(),i=n.transaction(zt,"readwrite"),r=i.objectStore(zt);return await r.put(t,Kt(e)),i.done}catch(n){if(n instanceof A)Ke.warn(n.message);else{const e=Dt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});Ke.warn(e.message)}}}function Kt(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const Gt=1024,Jt=2592e6;class Xt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Zt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Jt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Zt(),{heartbeatsToSend:t,unsentEntries:n}=en(this._heartbeatsCache.heartbeats),i=d(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zt(){const e=new Date;return e.toISOString().substring(0,10)}function en(e,t=Gt){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),nn(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),nn(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class tn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!x()&&R().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Qt(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Yt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Yt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function nn(e){return d(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function rn(e){kt(new ae("platform-logger",(e=>new He(e)),"PRIVATE")),kt(new ae("heartbeat",(e=>new Xt(e)),"PRIVATE")),Bt(Qe,Ye,e),Bt(Qe,Ye,"esm2017"),Bt("fire-js","")}rn("");
/**
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
 */
class sn{constructor(e,t){this._delegate=e,this.firebase=t,Tt(e,new ae("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),qt(this._delegate))))}_getService(e,t=Ct){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Ct){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Tt(this._delegate,e)}_addOrOverwriteComponent(e){St(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
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
 */const on={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},an=new O("app-compat","Firebase",on);
/**
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
 */
function ln(e){const t={},n={__esModule:!0,initializeApp:o,app:s,registerVersion:Bt,setLogLevel:Ut,onLog:Wt,apps:null,SDK_VERSION:Ot,INTERNAL:{registerComponent:l,removeApp:r,useAsService:c,modularAPIs:i}};function r(e){delete t[e]}function s(e){if(e=e||Ct,!j(t,e))throw an.create("no-app",{appName:e});return t[e]}function o(i,r={}){const s=Lt(i,r);if(j(t,s.name))return t[s.name];const o=new e(s,n);return t[s.name]=o,o}function a(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,r=i.replace("-compat","");if(kt(t)&&"PUBLIC"===t.type){const o=(e=s())=>{if("function"!==typeof e[r])throw an.create("invalid-app-argument",{appName:i});return e[r]()};void 0!==t.serviceProps&&f(o,t.serviceProps),n[r]=o,e.prototype[r]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[r]:null}function c(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:a}),s["App"]=e,n}
/**
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
 */function cn(){const e=ln(sn);function t(t){f(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:cn,extendNamespace:t,createSubscribe:G,ErrorFactory:O,deepExtend:f}),e}const hn=cn(),un=new ve("@firebase/app-compat"),dn="@firebase/app-compat",pn="0.2.9";
/**
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
 */
/**
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
 */
function _n(e){Bt(dn,pn,e)}
/**
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
 */if(k()&&void 0!==self.firebase){un.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&un.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const fn=hn;_n();var gn="firebase",mn="9.21.0";
/**
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
 */
fn.registerVersion(gn,mn,"app-compat");const yn="@firebase/database",vn="0.14.4";
/**
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
 */
let wn="";function Cn(e){wn=e}
/**
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
 */class bn{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),q(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:M(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class En{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return j(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const In=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new bn(t)}}catch(t){}return new En},Tn=In("localStorage"),Sn=In("sessionStorage"),kn=new ve("@firebase/database"),Nn=function(){let e=1;return function(){return e++}}(),Pn=function(e){const t=re(e),n=new K;n.update(t);const i=n.digest();return c.encodeByteArray(i)},xn=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=xn.apply(null,i):t+="object"===typeof i?q(i):i,t+=" "}return t};let Rn=null,Dn=!0;const An=function(e,t){s(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(kn.logLevel=_e.VERBOSE,Rn=kn.log.bind(kn),t&&Sn.set("logging_enabled",!0)):"function"===typeof e?Rn=e:(Rn=null,Sn.remove("logging_enabled"))},On=function(...e){if(!0===Dn&&(Dn=!1,null===Rn&&!0===Sn.get("logging_enabled")&&An(!0)),Rn){const t=xn.apply(null,e);Rn(t)}},Ln=function(e){return function(...t){On(e,...t)}},Fn=function(...e){const t="FIREBASE INTERNAL ERROR: "+xn(...e);kn.error(t)},Mn=function(...e){const t=`FIREBASE FATAL ERROR: ${xn(...e)}`;throw kn.error(t),new Error(t)},qn=function(...e){const t="FIREBASE WARNING: "+xn(...e);kn.warn(t)},Bn=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&qn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wn=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Un=function(e){if(P()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},jn="[MIN_NAME]",Vn="[MAX_NAME]",zn=function(e,t){if(e===t)return 0;if(e===jn||t===Vn)return-1;if(t===jn||e===Vn)return 1;{const n=ii(e),i=ii(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Hn=function(e,t){return e===t?0:e<t?-1:1},$n=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+q(t))},Qn=function(e){if("object"!==typeof e||null===e)return q(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=q(t[i]),n+=":",n+=Qn(e[t[i]]);return n+="}",n},Yn=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Kn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Gn=function(e){s(!Wn(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,l,c;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=l+i,a=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(c=n;c;c-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(c=t;c;c-=1)h.push(o%2?1:0),o=Math.floor(o/2);h.push(r?1:0),h.reverse();const u=h.join("");let d="";for(c=0;c<64;c+=8){let e=parseInt(u.substr(c,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},Jn=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},Xn=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function Zn(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const ei=new RegExp("^-?(0*)\\d{1,10}$"),ti=-2147483648,ni=2147483647,ii=function(e){if(ei.test(e)){const t=Number(e);if(t>=ti&&t<=ni)return t}return null},ri=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw qn("Exception was thrown by user callback.",e),t}),Math.floor(0))}},si=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oi=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
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
 */
class ai{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){qn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class li{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(On("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qn(e)}}class ci{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ci.OWNER="owner";
/**
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
 */
const hi="5",ui="v",di="s",pi="r",_i="f",fi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gi="ls",mi="p",yi="ac",vi="websocket",wi="long_polling";
/**
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
 */
class Ci{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tn.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function bi(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Ei(e,t,n){let i;if(s("string"===typeof t,"typeof type must == string"),s("object"===typeof n,"typeof params must == object"),t===vi)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==wi)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}bi(e)&&(n["ns"]=e.namespace);const r=[];return Kn(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
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
 */class Ii{constructor(){this.counters_={}}incrementCounter(e,t=1){j(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return _(this.counters_)}}
/**
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
 */const Ti={},Si={};function ki(e){const t=e.toString();return Ti[t]||(Ti[t]=new Ii),Ti[t]}function Ni(e,t){const n=e.toString();return Si[n]||(Si[n]=t()),Si[n]}
/**
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
 */class Pi{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&ri((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */const xi="start",Ri="close",Di="pLPCommand",Ai="pRTLPCB",Oi="id",Li="pw",Fi="ser",Mi="cb",qi="seg",Bi="ts",Wi="d",Ui="dframe",ji=1870,Vi=30,zi=ji-Vi,Hi=25e3,$i=3e4;class Qi{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ln(e),this.stats_=ki(t),this.urlFn=e=>(this.appCheckToken&&(e[yi]=this.appCheckToken),Ei(t,wi,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Pi(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor($i)),Un((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yi(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===xi)this.id=n,this.password=i;else{if(t!==Ri)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[xi]="t",e[Fi]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Mi]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ui]=hi,this.transportSessionId&&(e[di]=this.transportSessionId),this.lastSessionId&&(e[gi]=this.lastSessionId),this.applicationId&&(e[mi]=this.applicationId),this.appCheckToken&&(e[yi]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&fi.test(location.hostname)&&(e[pi]=_i);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qi.forceAllow_=!0}static forceDisallow(){Qi.forceDisallow_=!0}static isAvailable(){return!P()&&(!!Qi.forceAllow_||!Qi.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!Jn()&&!Xn())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=u(t),i=Yn(n,zi);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(P())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ui]="t",n[Oi]=e,n[Li]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=q(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Yi{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,P())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Nn(),window[Di+this.uniqueCallbackIdentifier]=e,window[Ai+this.uniqueCallbackIdentifier]=t,this.myIFrame=Yi.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){On("frame writing exception"),r.stack&&On(r.stack),On(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||On("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Oi]=this.myID,e[Li]=this.myPW,e[Fi]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Vi+n.length<=ji))break;{const e=this.pendingSegs.shift();n=n+"&"+qi+i+"="+e.seg+"&"+Bi+i+"="+e.ts+"&"+Wi+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Hi)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){P()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{On("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
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
 */const Ki=16384,Gi=45e3;let Ji=null;"undefined"!==typeof MozWebSocket?Ji=MozWebSocket:"undefined"!==typeof WebSocket&&(Ji=WebSocket);class Xi{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ln(this.connId),this.stats_=ki(t),this.connURL=Xi.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const s={};return s[ui]=hi,!P()&&"undefined"!==typeof location&&location.hostname&&fi.test(location.hostname)&&(s[pi]=_i),t&&(s[di]=t),n&&(s[gi]=n),i&&(s[yi]=i),r&&(s[mi]=r),Ei(e,vi,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tn.set("previous_websocket_failure",!0);try{let e;if(P()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${hi}/${wn}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",VUE_APP_API:"https://vue3-course-api.hexschool.io",VUE_APP_PATH:"ldd-api",BASE_URL:"/wildlife-save/dist/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new Ji(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Xi.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ji&&!Xi.forceDisallow_}static previouslyFailed(){return Tn.isInMemoryStorage||!0===Tn.get("previous_websocket_failure")}markConnectionHealthy(){Tn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=M(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(s(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Yn(t,Ki);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Gi))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xi.responsesRequiredToBeHealthy=2,Xi.healthyTimeout=3e4;
/**
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
 */
class Zi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Qi,Xi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Xi&&Xi["isAvailable"]();let n=t&&!Xi.previouslyFailed();if(e.webSocketOnly&&(t||qn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Xi];else{const e=this.transports_=[];for(const t of Zi.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Zi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zi.globalTransportInitialized_=!1;
/**
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
 */
const er=6e4,tr=5e3,nr=10240,ir=102400,rr="t",sr="d",or="s",ar="r",lr="e",cr="o",hr="a",ur="n",dr="p",pr="h";class _r{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ln("c:"+this.id+":"),this.transportManager_=new Zi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=oi((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ir?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nr?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rr in e){const t=e[rr];t===hr?this.upgradeIfSecondaryHealthy_():t===ar?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===cr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=$n("t",e),n=$n("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ur,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=$n("t",e),n=$n("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=$n(rr,e);if(sr in e){const n=e[sr];if(t===pr){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===ur){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===or?this.onConnectionShutdown_(n):t===ar?this.onReset_(n):t===lr?Fn("Server Error: "+n):t===cr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),hi!==n&&qn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),oi((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(er))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oi((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(tr))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class fr{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class gr{constructor(e){this.allowedEvents_=e,this.listeners_={},s(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){s(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
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
 */class mr extends gr{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||S()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new mr}getInitialEvent(e){return s("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */const yr=32,vr=768;class wr{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Cr(){return new wr("")}function br(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Er(e){return e.pieces_.length-e.pieceNum_}function Ir(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new wr(e.pieces_,t)}function Tr(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Sr(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function kr(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Nr(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new wr(t,0)}function Pr(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof wr)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new wr(n,0)}function xr(e){return e.pieceNum_>=e.pieces_.length}function Rr(e,t){const n=br(e),i=br(t);if(null===n)return t;if(n===i)return Rr(Ir(e),Ir(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Dr(e,t){const n=kr(e,0),i=kr(t,0);for(let r=0;r<n.length&&r<i.length;r++){const e=zn(n[r],i[r]);if(0!==e)return e}return n.length===i.length?0:n.length<i.length?-1:1}function Ar(e,t){if(Er(e)!==Er(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Or(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Er(e)>Er(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Lr{constructor(e,t){this.errorPrefix_=t,this.parts_=kr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=se(this.parts_[n]);qr(this)}}function Fr(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=se(t),qr(e)}function Mr(e){const t=e.parts_.pop();e.byteLength_-=se(t),e.parts_.length>0&&(e.byteLength_-=1)}function qr(e){if(e.byteLength_>vr)throw new Error(e.errorPrefix_+"has a key path longer than "+vr+" bytes ("+e.byteLength_+").");if(e.parts_.length>yr)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yr+") or object contains a cycle "+Br(e))}function Br(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class Wr extends gr{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Wr}getInitialEvent(e){return s("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */const Ur=1e3,jr=3e5,Vr=3e4,zr=1.3,Hr=3e4,$r="server_kill",Qr=3;class Yr extends fr{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Yr.nextPersistentConnectionId_++,this.log_=Ln("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ur,this.maxReconnectDelay_=jr,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!P())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wr.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&mr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(q(r)),s(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new E,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),s(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),s(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,(r=>{const s=r["d"],o=r["s"];Yr.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&j(e,"w")){const n=V(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();qn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||U(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=W(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),s(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+q(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):Fn("Unrecognized action received from server: "+q(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){s(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ur,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ur,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Hr&&(this.reconnectDelay_=Ur),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zr)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Yr.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(e){s(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?On("getToken() completed but was canceled"):(On("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=l&&l.token,a=new _r(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{qn(e+" ("+this.repoInfo_.toString()+")"),this.interrupt($r)}),r))}catch(Fn){this.log_("Failed to get token: "+Fn),o||(this.repoInfo_.nodeAdmin&&qn(Fn),l())}}}interrupt(e){On("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){On("Resuming connection for reason: "+e),delete this.interruptReasons_[e],z(this.interruptReasons_)&&(this.reconnectDelay_=Ur,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Qn(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new wr(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){On("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qr&&(this.reconnectDelay_=Vr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){On("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";P()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+wn.replace(/\./g,"-")]=1,S()?e["framework.cordova"]=1:N()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mr.getInstance().currentlyOnline();return z(this.interruptReasons_)&&e}}Yr.nextPersistentConnectionId_=0,Yr.nextConnectionId_=0;
/**
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
 */
class Kr{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Kr(e,t)}}
/**
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
 */class Gr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Kr(jn,e),i=new Kr(jn,t);return 0!==this.compare(n,i)}minPost(){return Kr.MIN}}
/**
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
 */let Jr;class Xr extends Gr{static get __EMPTY_NODE(){return Jr}static set __EMPTY_NODE(e){Jr=e}compare(e,t){return zn(e.name,t.name)}isDefinedOn(e){throw o("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Kr.MIN}maxPost(){return new Kr(Vn,Jr)}makePost(e,t){return s("string"===typeof e,"KeyIndex indexValue must always be a string."),new Kr(e,Jr)}toString(){return".key"}}const Zr=new Xr;
/**
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
 */class es{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ts{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:ts.RED,this.left=null!=i?i:is.EMPTY_NODE,this.right=null!=r?r:is.EMPTY_NODE}copy(e,t,n,i,r){return new ts(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return is.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return is.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ts.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ts.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ts.RED=!0,ts.BLACK=!1;class ns{copy(e,t,n,i,r){return this}insert(e,t,n){return new ts(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class is{constructor(e,t=is.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new is(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ts.BLACK,null,null))}remove(e){return new is(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ts.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new es(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new es(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new es(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new es(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function rs(e,t){return zn(e.name,t.name)}function ss(e,t){return zn(e,t)}
/**
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
 */let os;function as(e){os=e}is.EMPTY_NODE=new ns;const ls=function(e){return"number"===typeof e?"number:"+Gn(e):"string:"+e},cs=function(e){if(e.isLeafNode()){const t=e.val();s("string"===typeof t||"number"===typeof t||"object"===typeof t&&j(t,".sv"),"Priority must be a string or number.")}else s(e===os||e.isEmpty(),"priority of unexpected type.");s(e===os||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let hs,us,ds;class ps{constructor(e,t=ps.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,s(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),cs(this.priorityNode_)}static set __childrenNodeConstructor(e){hs=e}static get __childrenNodeConstructor(){return hs}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ps(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ps.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return xr(e)?this:".priority"===br(e)?this.priorityNode_:ps.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ps.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=br(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(s(".priority"!==n||1===Er(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ps.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ir(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ls(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Gn(this.value_):this.value_,this.lazyHash_=Pn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ps.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ps.__childrenNodeConstructor?-1:(s(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=ps.VALUE_TYPE_ORDER.indexOf(t),r=ps.VALUE_TYPE_ORDER.indexOf(n);return s(i>=0,"Unknown leaf type: "+t),s(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function _s(e){us=e}function fs(e){ds=e}ps.VALUE_TYPE_ORDER=["object","boolean","number","string"];class gs extends Gr{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?zn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Kr.MIN}maxPost(){return new Kr(Vn,new ps("[PRIORITY-POST]",ds))}makePost(e,t){const n=us(e);return new Kr(t,new ps("[PRIORITY-POST]",n))}toString(){return".priority"}}const ms=new gs,ys=Math.log(2);
/**
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
 */class vs{constructor(e){const t=e=>parseInt(Math.log(e)/ys,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ws=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new ts(a,o.node,ts.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),h=r(l+1,i);return o=e[l],a=n?n(o):o,new ts(a,o.node,ts.BLACK,c,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),h=e[s],u=n?n(h):h;l(new ts(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,ts.BLACK):(a(i,ts.BLACK),a(i,ts.RED))}return s},o=new vs(e.length),a=s(o);return new is(i||t,a)};
/**
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
 */let Cs;const bs={};class Es{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return s(bs&&ms,"ChildrenNode.ts has not been loaded"),Cs=Cs||new Es({".priority":bs},{".priority":ms}),Cs}get(e){const t=V(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof is?t:null}hasIndex(e){return j(this.indexSet_,e.toString())}addIndex(e,t){s(e!==Zr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Kr.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?ws(n,e.getCompare()):bs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=o,new Es(h,c)}addToIndexes(e,t){const n=H(this.indexes_,((n,i)=>{const r=V(this.indexSet_,i);if(s(r,"Missing index implementation for "+i),n===bs){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Kr.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),ws(n,r.getCompare())}return bs}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Kr(e.name,i))),r.insert(e,e.node)}}));return new Es(n,this.indexSet_)}removeFromIndexes(e,t){const n=H(this.indexes_,(n=>{if(n===bs)return n;{const i=t.get(e.name);return i?n.remove(new Kr(e.name,i)):n}}));return new Es(n,this.indexSet_)}}
/**
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
 */let Is;class Ts{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&cs(this.priorityNode_),this.children_.isEmpty()&&s(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Is||(Is=new Ts(new is(ss),null,Es.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Is}updatePriority(e){return this.children_.isEmpty()?this:new Ts(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Is:t}}getChild(e){const t=br(e);return null===t?this:this.getImmediateChild(t).getChild(Ir(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(s(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Kr(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?Is:this.priorityNode_;return new Ts(i,s,r)}}updateChild(e,t){const n=br(e);if(null===n)return t;{s(".priority"!==br(e)||1===Er(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Ir(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(ms,((s,o)=>{t[s]=o.val(e),n++,r&&Ts.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ls(this.getPriority().val())+":"),this.forEachChild(ms,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Pn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Kr(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Kr(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Kr(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Kr.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Kr.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ks?-1:0}withIndex(e){if(e===Zr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ts(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Zr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ms),n=t.getIterator(ms);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Zr?null:this.indexMap_.get(e.toString())}}Ts.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ss extends Ts{constructor(){super(new is(ss),Ts.EMPTY_NODE,Es.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ts.EMPTY_NODE}isEmpty(){return!1}}const ks=new Ss;Object.defineProperties(Kr,{MIN:{value:new Kr(jn,Ts.EMPTY_NODE)},MAX:{value:new Kr(Vn,ks)}}),Xr.__EMPTY_NODE=Ts.EMPTY_NODE,ps.__childrenNodeConstructor=Ts,as(ks),fs(ks);
/**
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
 */
const Ns=!0;function Ps(e,t=null){if(null===e)return Ts.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),s(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new ps(n,Ps(t))}if(e instanceof Array||!Ns){let n=Ts.EMPTY_NODE;return Kn(e,((t,i)=>{if(j(e,t)&&"."!==t.substring(0,1)){const e=Ps(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Ps(t))}{const n=[];let i=!1;const r=e;if(Kn(r,((e,t)=>{if("."!==e.substring(0,1)){const r=Ps(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Kr(e,r)))}})),0===n.length)return Ts.EMPTY_NODE;const s=ws(n,rs,(e=>e.name),ss);if(i){const e=ws(n,ms.getCompare());return new Ts(s,Ps(t),new Es({".priority":e},{".priority":ms}))}return new Ts(s,Ps(t),Es.Default)}}_s(Ps);
/**
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
 */
class xs extends Gr{constructor(e){super(),this.indexPath_=e,s(!xr(e)&&".priority"!==br(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?zn(e.name,t.name):r}makePost(e,t){const n=Ps(e),i=Ts.EMPTY_NODE.updateChild(this.indexPath_,n);return new Kr(t,i)}maxPost(){const e=Ts.EMPTY_NODE.updateChild(this.indexPath_,ks);return new Kr(Vn,e)}toString(){return kr(this.indexPath_,0).join("/")}}
/**
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
 */class Rs extends Gr{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?zn(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Kr.MIN}maxPost(){return Kr.MAX}makePost(e,t){const n=Ps(e);return new Kr(t,n)}toString(){return".value"}}const Ds=new Rs;
/**
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
 */function As(e){return{type:"value",snapshotNode:e}}function Os(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ls(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Fs(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Ms(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
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
 */class qs{constructor(e){this.index_=e}updateChild(e,t,n,i,r,o){s(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Ls(t,a)):s(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Os(t,n)):o.trackChildChange(Fs(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(ms,((e,i)=>{t.hasChild(e)||n.trackChildChange(Ls(e,i))})),t.isLeafNode()||t.forEachChild(ms,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Fs(t,i,r))}else n.trackChildChange(Os(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ts.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class Bs{constructor(e){this.indexedFilter_=new qs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bs.getStartPost_(e),this.endPost_=Bs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new Kr(t,n))||(n=Ts.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Ts.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Ts.EMPTY_NODE);const r=this;return t.forEachChild(ms,((e,t)=>{r.matches(new Kr(e,t))||(i=i.updateImmediateChild(e,Ts.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
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
 */class Ws{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Bs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Kr(t,n))||(n=Ts.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Ts.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Ts.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(Ts.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),r=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);r?n++:i=i.updateImmediateChild(t.name,Ts.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;s(a.numChildren()===this.limit_,"");const l=new Kr(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=i.getChildAfterChild(this.index_,c,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const u=null==s?1:o(s,l),d=h&&!n.isEmpty()&&u>=0;if(d)return null!=r&&r.trackChildChange(Fs(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Ls(t,e));const n=a.updateImmediateChild(t,Ts.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(Os(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:h&&o(c,l)>=0?(null!=r&&(r.trackChildChange(Ls(c.name,c.node)),r.trackChildChange(Os(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,Ts.EMPTY_NODE)):e}}
/**
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
 */class Us{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ms}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return s(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return s(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jn}hasEnd(){return this.endSet_}getIndexEndValue(){return s(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return s(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return s(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ms}copy(){const e=new Us;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function js(e){return e.loadsAllData()?new qs(e.getIndex()):e.hasLimit()?new Ws(e):new Bs(e)}function Vs(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function zs(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function Hs(e,t,n){const i=e.copy();return i.startSet_=!0,void 0===t&&(t=null),i.indexStartValue_=t,null!=n?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function $s(e,t,n){let i;return i=e.index_===Zr||n?Hs(e,t,n):Hs(e,t,Vn),i.startAfterSet_=!0,i}function Qs(e,t,n){const i=e.copy();return i.endSet_=!0,void 0===t&&(t=null),i.indexEndValue_=t,void 0!==n?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function Ys(e,t,n){let i;return i=e.index_===Zr||n?Qs(e,t,n):Qs(e,t,jn),i.endBeforeSet_=!0,i}function Ks(e,t){const n=e.copy();return n.index_=t,n}function Gs(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ms?n="$priority":e.index_===Ds?n="$value":e.index_===Zr?n="$key":(s(e.index_ instanceof xs,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=q(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=q(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+q(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=q(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+q(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Js(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==ms&&(t["i"]=e.index_.toString()),t}
/**
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
 */class Xs extends fr{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Ln("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(s(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Xs.getListenId_(e,n),o={};this.listens_[s]=o;const a=Gs(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),V(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Xs.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Gs(e._queryParams),n=e._path.toString(),i=new E;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Y(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=M(o.responseText)}catch(e){qn("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&qn("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
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
 */class Zs{constructor(){this.rootNode_=Ts.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function eo(){return{value:null,children:new Map}}function to(e,t,n){if(xr(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=br(t);e.children.has(i)||e.children.set(i,eo());const r=e.children.get(i);t=Ir(t),to(r,t,n)}}function no(e,t){if(xr(t))return e.value=null,e.children.clear(),!0;if(null!==e.value){if(e.value.isLeafNode())return!1;{const n=e.value;return e.value=null,n.forEachChild(ms,((t,n)=>{to(e,new wr(t),n)})),no(e,t)}}if(e.children.size>0){const n=br(t);if(t=Ir(t),e.children.has(n)){const i=no(e.children.get(n),t);i&&e.children.delete(n)}return 0===e.children.size}return!0}function io(e,t,n){null!==e.value?n(t,e.value):ro(e,((e,i)=>{const r=new wr(t.toString()+"/"+e);io(i,r,n)}))}function ro(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
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
 */class so{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Kn(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
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
 */const oo=1e4,ao=3e4,lo=3e5;class co{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new so(e);const n=oo+(ao-oo)*Math.random();oi(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Kn(e,((e,i)=>{i>0&&j(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),oi(this.reportStats_.bind(this),Math.floor(2*Math.random()*lo))}}
/**
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
 */var ho;function uo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function po(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _o(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(ho||(ho={}));class fo{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=ho.ACK_USER_WRITE,this.source=uo()}operationForChild(e){if(xr(this.path)){if(null!=this.affectedTree.value)return s(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new wr(e));return new fo(Cr(),t,this.revert)}}return s(br(this.path)===e,"operationForChild called for unrelated child."),new fo(Ir(this.path),this.affectedTree,this.revert)}}
/**
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
 */class go{constructor(e,t){this.source=e,this.path=t,this.type=ho.LISTEN_COMPLETE}operationForChild(e){return xr(this.path)?new go(this.source,Cr()):new go(this.source,Ir(this.path))}}
/**
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
 */class mo{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=ho.OVERWRITE}operationForChild(e){return xr(this.path)?new mo(this.source,Cr(),this.snap.getImmediateChild(e)):new mo(this.source,Ir(this.path),this.snap)}}
/**
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
 */class yo{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=ho.MERGE}operationForChild(e){if(xr(this.path)){const t=this.children.subtree(new wr(e));return t.isEmpty()?null:t.value?new mo(this.source,Cr(),t.value):new yo(this.source,Cr(),t)}return s(br(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yo(this.source,Ir(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class vo{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(xr(e))return this.isFullyInitialized()&&!this.filtered_;const t=br(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */class wo{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Co(e,t,n,i){const r=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Ms(t.childName,t.snapshotNode))})),bo(e,r,"child_removed",t,i,n),bo(e,r,"child_added",t,i,n),bo(e,r,"child_moved",s,i,n),bo(e,r,"child_changed",t,i,n),bo(e,r,"value",t,i,n),r}function bo(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>Io(e,t,n))),o.forEach((n=>{const i=Eo(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Eo(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Io(e,t,n){if(null==t.childName||null==n.childName)throw o("Should only compare child_ events.");const i=new Kr(t.childName,t.snapshotNode),r=new Kr(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
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
 */function To(e,t){return{eventCache:e,serverCache:t}}function So(e,t,n,i){return To(new vo(t,n,i),e.serverCache)}function ko(e,t,n,i){return To(e.eventCache,new vo(t,n,i))}function No(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Po(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let xo;const Ro=()=>(xo||(xo=new is(Hn)),xo);class Do{constructor(e,t=Ro()){this.value=e,this.children=t}static fromObject(e){let t=new Do(null);return Kn(e,((e,n)=>{t=t.set(new wr(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Cr(),value:this.value};if(xr(e))return null;{const n=br(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Ir(e),t);if(null!=r){const e=Pr(new wr(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(xr(e))return this;{const t=br(e),n=this.children.get(t);return null!==n?n.subtree(Ir(e)):new Do(null)}}set(e,t){if(xr(e))return new Do(t,this.children);{const n=br(e),i=this.children.get(n)||new Do(null),r=i.set(Ir(e),t),s=this.children.insert(n,r);return new Do(this.value,s)}}remove(e){if(xr(e))return this.children.isEmpty()?new Do(null):new Do(null,this.children);{const t=br(e),n=this.children.get(t);if(n){const i=n.remove(Ir(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Do(null):new Do(this.value,r)}return this}}get(e){if(xr(e))return this.value;{const t=br(e),n=this.children.get(t);return n?n.get(Ir(e)):null}}setTree(e,t){if(xr(e))return t;{const n=br(e),i=this.children.get(n)||new Do(null),r=i.setTree(Ir(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Do(this.value,s)}}fold(e){return this.fold_(Cr(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(Pr(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Cr(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(xr(e))return null;{const i=br(e),r=this.children.get(i);return r?r.findOnPath_(Ir(e),Pr(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Cr(),t)}foreachOnPath_(e,t,n){if(xr(e))return this;{this.value&&n(t,this.value);const i=br(e),r=this.children.get(i);return r?r.foreachOnPath_(Ir(e),Pr(t,i),n):new Do(null)}}foreach(e){this.foreach_(Cr(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Pr(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
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
 */class Ao{constructor(e){this.writeTree_=e}static empty(){return new Ao(new Do(null))}}function Oo(e,t,n){if(xr(t))return new Ao(new Do(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=Rr(r,t);return s=s.updateChild(o,n),new Ao(e.writeTree_.set(r,s))}{const i=new Do(n),r=e.writeTree_.setTree(t,i);return new Ao(r)}}}function Lo(e,t,n){let i=e;return Kn(n,((e,n)=>{i=Oo(i,Pr(t,e),n)})),i}function Fo(e,t){if(xr(t))return Ao.empty();{const n=e.writeTree_.setTree(t,new Do(null));return new Ao(n)}}function Mo(e,t){return null!=qo(e,t)}function qo(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Rr(n.path,t)):null}function Bo(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ms,((e,n)=>{t.push(new Kr(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Kr(e,n.value))})),t}function Wo(e,t){if(xr(t))return e;{const n=qo(e,t);return new Ao(null!=n?new Do(n):e.writeTree_.subtree(t))}}function Uo(e){return e.writeTree_.isEmpty()}function jo(e,t){return Vo(Cr(),e.writeTree_,t)}function Vo(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(s(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Vo(Pr(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Pr(e,".priority"),i)),n}}
/**
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
 */function zo(e,t){return pa(t,e)}function Ho(e,t,n,i,r){s(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Oo(e.visibleWrites,t,n)),e.lastWriteId=i}function $o(e,t,n,i){s(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Lo(e.visibleWrites,t,n),e.lastWriteId=i}function Qo(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Yo(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));s(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Ko(t,i.path)?r=!1:Or(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return Go(e),!0;if(i.snap)e.visibleWrites=Fo(e.visibleWrites,i.path);else{const t=i.children;Kn(t,(t=>{e.visibleWrites=Fo(e.visibleWrites,Pr(i.path,t))}))}return!0}return!1}function Ko(e,t){if(e.snap)return Or(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Or(Pr(e.path,n),t))return!0;return!1}function Go(e){e.visibleWrites=Xo(e.allWrites,Jo,Cr()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Jo(e){return e.visible}function Xo(e,t,n){let i=Ao.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Or(n,e)?(t=Rr(n,e),i=Oo(i,t,s.snap)):Or(e,n)&&(t=Rr(e,n),i=Oo(i,Cr(),s.snap.getChild(t)));else{if(!s.children)throw o("WriteRecord should have .snap or .children");if(Or(n,e))t=Rr(n,e),i=Lo(i,t,s.children);else if(Or(e,n))if(t=Rr(e,n),xr(t))i=Lo(i,Cr(),s.children);else{const e=V(s.children,br(t));if(e){const n=e.getChild(Ir(t));i=Oo(i,Cr(),n)}}}}}return i}function Zo(e,t,n,i,r){if(i||r){const s=Wo(e.visibleWrites,t);if(!r&&Uo(s))return n;if(r||null!=n||Mo(s,Cr())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Or(e.path,t)||Or(t,e.path))},o=Xo(e.allWrites,s,t),a=n||Ts.EMPTY_NODE;return jo(o,a)}return null}{const i=qo(e.visibleWrites,t);if(null!=i)return i;{const i=Wo(e.visibleWrites,t);if(Uo(i))return n;if(null!=n||Mo(i,Cr())){const e=n||Ts.EMPTY_NODE;return jo(i,e)}return null}}}function ea(e,t,n){let i=Ts.EMPTY_NODE;const r=qo(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(ms,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Wo(e.visibleWrites,t);return n.forEachChild(ms,((e,t)=>{const n=jo(Wo(r,new wr(e)),t);i=i.updateImmediateChild(e,n)})),Bo(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=Wo(e.visibleWrites,t);return Bo(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function ta(e,t,n,i,r){s(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=Pr(t,n);if(Mo(e.visibleWrites,o))return null;{const t=Wo(e.visibleWrites,o);return Uo(t)?r.getChild(n):jo(t,r.getChild(n))}}function na(e,t,n,i){const r=Pr(t,n),s=qo(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=Wo(e.visibleWrites,r);return jo(t,i.getNode().getImmediateChild(n))}return null}function ia(e,t){return qo(e.visibleWrites,t)}function ra(e,t,n,i,r,s,o){let a;const l=Wo(e.visibleWrites,t),c=qo(l,Cr());if(null!=c)a=c;else{if(null==n)return[];a=jo(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();while(l&&e.length<r)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}function sa(){return{visibleWrites:Ao.empty(),allWrites:[],lastWriteId:-1}}function oa(e,t,n,i){return Zo(e.writeTree,e.treePath,t,n,i)}function aa(e,t){return ea(e.writeTree,e.treePath,t)}function la(e,t,n,i){return ta(e.writeTree,e.treePath,t,n,i)}function ca(e,t){return ia(e.writeTree,Pr(e.treePath,t))}function ha(e,t,n,i,r,s){return ra(e.writeTree,e.treePath,t,n,i,r,s)}function ua(e,t,n){return na(e.writeTree,e.treePath,t,n)}function da(e,t){return pa(Pr(e.treePath,t),e.writeTree)}function pa(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class _a{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;s("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),s(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Fs(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Ls(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Os(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw o("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Fs(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */class fa{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const ga=new fa;class ma{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new vo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ua(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Po(this.viewCache_),r=ha(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
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
 */function ya(e){return{filter:e}}function va(e,t){s(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),s(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function wa(e,t,n,i,r){const a=new _a;let l,c;if(n.type===ho.OVERWRITE){const o=n;o.source.fromUser?l=Ia(e,t,o.path,o.snap,i,r,a):(s(o.source.fromServer,"Unknown source."),c=o.source.tagged||t.serverCache.isFiltered()&&!xr(o.path),l=Ea(e,t,o.path,o.snap,i,r,c,a))}else if(n.type===ho.MERGE){const o=n;o.source.fromUser?l=Sa(e,t,o.path,o.children,i,r,a):(s(o.source.fromServer,"Unknown source."),c=o.source.tagged||t.serverCache.isFiltered(),l=Na(e,t,o.path,o.children,i,r,c,a))}else if(n.type===ho.ACK_USER_WRITE){const s=n;l=s.revert?Ra(e,t,s.path,i,r,a):Pa(e,t,s.path,s.affectedTree,i,r,a)}else{if(n.type!==ho.LISTEN_COMPLETE)throw o("Unknown operation type: "+n.type);l=xa(e,t,n.path,i,a)}const h=a.getChanges();return Ca(t,l,h),{viewCache:l,changes:h}}function Ca(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=No(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(As(No(t)))}}function ba(e,t,n,i,r,o){const a=t.eventCache;if(null!=ca(i,n))return t;{let l,c;if(xr(n))if(s(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Po(t),r=n instanceof Ts?n:Ts.EMPTY_NODE,s=aa(i,r);l=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=oa(i,Po(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const h=br(n);if(".priority"===h){s(1===Er(n),"Can't have a priority with additional path components");const r=a.getNode();c=t.serverCache.getNode();const o=la(i,n,r,c);l=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=Ir(n);let u;if(a.isCompleteForChild(h)){c=t.serverCache.getNode();const e=la(i,n,a.getNode(),c);u=null!=e?a.getNode().getImmediateChild(h).updateChild(s,e):a.getNode().getImmediateChild(h)}else u=ua(i,h,t.serverCache);l=null!=u?e.filter.updateChild(a.getNode(),h,u,s,r,o):a.getNode()}}return So(t,l,a.isFullyInitialized()||xr(n),e.filter.filtersNodes())}}function Ea(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(xr(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=br(n);if(!l.isCompleteForPath(n)&&Er(n)>1)return t;const r=Ir(n),s=l.getNode().getImmediateChild(e),o=s.updateChild(r,i);c=".priority"===e?h.updatePriority(l.getNode(),o):h.updateChild(l.getNode(),e,o,r,ga,null)}const u=ko(t,c,l.isFullyInitialized()||xr(n),h.filtersNodes()),d=new ma(r,u,s);return ba(e,u,n,r,d,a)}function Ia(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const h=new ma(r,t,s);if(xr(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=So(t,c,!0,e.filter.filtersNodes());else{const r=br(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=So(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=Ir(n),c=a.getNode().getImmediateChild(r);let u;if(xr(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===Tr(s)&&e.getChild(Nr(s)).isEmpty()?e:e.updateChild(s,i):Ts.EMPTY_NODE}if(c.equals(u))l=t;else{const n=e.filter.updateChild(a.getNode(),r,u,s,h,o);l=So(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Ta(e,t){return e.eventCache.isCompleteForChild(t)}function Sa(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=Pr(n,i);Ta(t,br(c))&&(a=Ia(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=Pr(n,i);Ta(t,br(c))||(a=Ia(e,a,c,l,r,s,o))})),a}function ka(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Na(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=xr(n)?i:new Do(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),h=ka(e,l,i);c=Ea(e,c,new wr(n),h,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),h=ka(e,l,i);c=Ea(e,c,new wr(n),h,r,s,o,a)}})),c}function Pa(e,t,n,i,r,s,o){if(null!=ca(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(xr(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ea(e,t,n,l.getNode().getChild(n),r,s,a,o);if(xr(n)){let i=new Do(null);return l.getNode().forEachChild(Zr,((e,t)=>{i=i.set(new wr(e),t)})),Na(e,t,n,i,r,s,a,o)}return t}{let c=new Do(null);return i.foreach(((e,t)=>{const i=Pr(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),Na(e,t,n,c,r,s,a,o)}}function xa(e,t,n,i,r){const s=t.serverCache,o=ko(t,s.getNode(),s.isFullyInitialized()||xr(n),s.isFiltered());return ba(e,o,n,i,ga,r)}function Ra(e,t,n,i,r,o){let a;if(null!=ca(i,n))return t;{const l=new ma(i,t,r),c=t.eventCache.getNode();let h;if(xr(n)||".priority"===br(n)){let n;if(t.serverCache.isFullyInitialized())n=oa(i,Po(t));else{const e=t.serverCache.getNode();s(e instanceof Ts,"serverChildren would be complete if leaf node"),n=aa(i,e)}h=e.filter.updateFullNode(c,n,o)}else{const r=br(n);let s=ua(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=c.getImmediateChild(r)),h=null!=s?e.filter.updateChild(c,r,s,Ir(n),l,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,Ts.EMPTY_NODE,Ir(n),l,o):c,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=oa(i,Po(t)),a.isLeafNode()&&(h=e.filter.updateFullNode(h,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=ca(i,Cr()),So(t,h,a,e.filter.filtersNodes())}}
/**
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
 */class Da{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new qs(n.getIndex()),r=js(n);this.processor_=ya(r);const s=t.serverCache,o=t.eventCache,a=i.updateFullNode(Ts.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(Ts.EMPTY_NODE,o.getNode(),null),c=new vo(a,s.isFullyInitialized(),i.filtersNodes()),h=new vo(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=To(h,c),this.eventGenerator_=new wo(this.query_)}get query(){return this.query_}}function Aa(e){return e.viewCache_.serverCache.getNode()}function Oa(e){return No(e.viewCache_)}function La(e,t){const n=Po(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!xr(t)&&!n.getImmediateChild(br(t)).isEmpty())?n.getChild(t):null}function Fa(e){return 0===e.eventRegistrations_.length}function Ma(e,t){e.eventRegistrations_.push(t)}function qa(e,t,n){const i=[];if(n){s(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Ba(e,t,n,i){t.type===ho.MERGE&&null!==t.source.queryId&&(s(Po(e.viewCache_),"We should always have a full cache before handling merges"),s(No(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=wa(e.processor_,r,t,n,i);return va(e.processor_,o.viewCache),s(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Ua(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Wa(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(ms,((e,t)=>{i.push(Os(e,t))}))}return n.isFullyInitialized()&&i.push(As(n.getNode())),Ua(e,i,n.getNode(),t)}function Ua(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return Co(e.eventGenerator_,t,n,r)}
/**
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
 */let ja,Va;class za{constructor(){this.views=new Map}}function Ha(e){s(!ja,"__referenceConstructor has already been defined"),ja=e}function $a(){return s(ja,"Reference.ts has not been loaded"),ja}function Qa(e){return 0===e.views.size}function Ya(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return s(null!=o,"SyncTree gave us an op for an invalid query."),Ba(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Ba(s,t,n,i));return r}}function Ka(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=oa(n,r?i:null),s=!1;e?s=!0:i instanceof Ts?(e=aa(n,i),s=!1):(e=Ts.EMPTY_NODE,s=!1);const o=To(new vo(e,s,!1),new vo(i,r,!1));return new Da(t,o)}return o}function Ga(e,t,n,i,r,s){const o=Ka(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),Ma(o,n),Wa(o,n)}function Ja(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=nl(e);if("default"===r)for(const[l,c]of e.views.entries())o=o.concat(qa(c,n,i)),Fa(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(r);t&&(o=o.concat(qa(t,n,i)),Fa(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!nl(e)&&s.push(new($a())(t._repo,t._path)),{removed:s,events:o}}function Xa(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Za(e,t){let n=null;for(const i of e.views.values())n=n||La(i,t);return n}function el(e,t){const n=t._queryParams;if(n.loadsAllData())return il(e);{const n=t._queryIdentifier;return e.views.get(n)}}function tl(e,t){return null!=el(e,t)}function nl(e){return null!=il(e)}function il(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
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
 */function rl(e){s(!Va,"__referenceConstructor has already been defined"),Va=e}function sl(){return s(Va,"Reference.ts has not been loaded"),Va}let ol=1;class al{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Do(null),this.pendingWriteTree_=sa(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ll(e,t,n,i,r){return Ho(e.pendingWriteTree_,t,n,i,r),r?Cl(e,new mo(uo(),t,n)):[]}function cl(e,t,n,i){$o(e.pendingWriteTree_,t,n,i);const r=Do.fromObject(n);return Cl(e,new yo(uo(),t,r))}function hl(e,t,n=!1){const i=Qo(e.pendingWriteTree_,t),r=Yo(e.pendingWriteTree_,t);if(r){let t=new Do(null);return null!=i.snap?t=t.set(Cr(),!0):Kn(i.children,(e=>{t=t.set(new wr(e),!0)})),Cl(e,new fo(i.path,t,n))}return[]}function ul(e,t,n){return Cl(e,new mo(po(),t,n))}function dl(e,t,n){const i=Do.fromObject(n);return Cl(e,new yo(po(),t,i))}function pl(e,t){return Cl(e,new go(po(),t))}function _l(e,t,n){const i=kl(e,n);if(i){const n=Nl(i),r=n.path,s=n.queryId,o=Rr(r,t),a=new go(_o(s),o);return Pl(e,r,a)}return[]}function fl(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||tl(o,t))){const l=Ja(o,t,n,i);Qa(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>nl(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=xl(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=Il(e,i);e.listenProvider_.startListening(Rl(r),Tl(e,r),s.hashFn,s.onComplete)}}}if(!r&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(Rl(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(Sl(t));e.listenProvider_.stopListening(Rl(t),n)}))}Dl(e,c)}return a}function gl(e,t,n,i){const r=kl(e,i);if(null!=r){const i=Nl(r),s=i.path,o=i.queryId,a=Rr(s,t),l=new mo(_o(o),a,n);return Pl(e,s,l)}return[]}function ml(e,t,n,i){const r=kl(e,i);if(r){const i=Nl(r),s=i.path,o=i.queryId,a=Rr(s,t),l=Do.fromObject(n),c=new yo(_o(o),a,l);return Pl(e,s,c)}return[]}function yl(e,t,n,i=!1){const r=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=Rr(e,r);o=o||Za(t,n),a=a||nl(t)}));let l,c=e.syncPointTree_.get(r);if(c?(a=a||nl(c),o=o||Za(c,Cr())):(c=new za,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=o)l=!0;else{l=!1,o=Ts.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild(((e,t)=>{const n=Za(t,Cr());n&&(o=o.updateImmediateChild(e,n))}))}const h=tl(c,t);if(!h&&!t._queryParams.loadsAllData()){const n=Sl(t);s(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Al();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const u=zo(e.pendingWriteTree_,r);let d=Ga(c,t,n,u,o,l);if(!h&&!a&&!i){const n=el(c,t);d=d.concat(Ol(e,t,n))}return d}function vl(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Rr(e,t),r=Za(n,i);if(r)return r}));return Zo(r,t,s,n,i)}function wl(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=Rr(e,n);i=i||Za(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||Za(r,Cr()):(r=new za,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new vo(i,!0,!1):null,a=zo(e.pendingWriteTree_,t._path),l=Ka(r,t,a,s?o.getNode():Ts.EMPTY_NODE,s);return Oa(l)}function Cl(e,t){return bl(t,e.syncPointTree_,null,zo(e.pendingWriteTree_,Cr()))}function bl(e,t,n,i){if(xr(e.path))return El(e,t,n,i);{const r=t.get(Cr());null==n&&null!=r&&(n=Za(r,Cr()));let s=[];const o=br(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=da(i,o);s=s.concat(bl(a,l,e,t))}return r&&(s=s.concat(Ya(r,e,i,n))),s}}function El(e,t,n,i){const r=t.get(Cr());null==n&&null!=r&&(n=Za(r,Cr()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=da(i,t),l=e.operationForChild(t);l&&(s=s.concat(El(l,r,o,a)))})),r&&(s=s.concat(Ya(r,e,i,n))),s}function Il(e,t){const n=t.query,i=Tl(e,n);return{hashFn:()=>{const e=Aa(t)||Ts.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?_l(e,n._path,i):pl(e,n._path);{const i=Zn(t,n);return fl(e,n,null,i)}}}}function Tl(e,t){const n=Sl(t);return e.queryToTagMap.get(n)}function Sl(e){return e._path.toString()+"$"+e._queryIdentifier}function kl(e,t){return e.tagToQueryMap.get(t)}function Nl(e){const t=e.indexOf("$");return s(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new wr(e.substr(0,t))}}function Pl(e,t,n){const i=e.syncPointTree_.get(t);s(i,"Missing sync point for query tag that we're tracking");const r=zo(e.pendingWriteTree_,t);return Ya(i,n,r,null)}function xl(e){return e.fold(((e,t,n)=>{if(t&&nl(t)){const e=il(t);return[e]}{let e=[];return t&&(e=Xa(t)),Kn(n,((t,n)=>{e=e.concat(n)})),e}}))}function Rl(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(sl())(e._repo,e._path):e}function Dl(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Sl(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function Al(){return ol++}function Ol(e,t,n){const i=t._path,r=Tl(e,t),o=Il(e,n),a=e.listenProvider_.startListening(Rl(t),r,o.hashFn,o.onComplete),l=e.syncPointTree_.subtree(i);if(r)s(!nl(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!xr(e)&&t&&nl(t))return[il(t).query];{let e=[];return t&&(e=e.concat(Xa(t).map((e=>e.query)))),Kn(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Rl(i),Tl(e,i))}}return a}
/**
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
 */class Ll{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ll(t)}node(){return this.node_}}class Fl{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Pr(this.path_,e);return new Fl(this.syncTree_,t)}node(){return vl(this.syncTree_,this.path_)}}const Ml=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},ql=function(e,t,n){return e&&"object"===typeof e?(s(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Bl(e[".sv"],t,n):"object"===typeof e[".sv"]?Wl(e[".sv"],t):void s(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Bl=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:s(!1,"Unexpected server value: "+e)}},Wl=function(e,t,n){e.hasOwnProperty("increment")||s(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&s(!1,"Unexpected increment value: "+i);const r=t.node();if(s(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},Ul=function(e,t,n,i){return Vl(t,new Fl(n,e),i)},jl=function(e,t,n){return Vl(e,new Ll(t),n)};function Vl(e,t,n){const i=e.getPriority().val(),r=ql(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=ql(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new ps(s,Ps(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new ps(r))),i.forEachChild(ms,((e,i)=>{const r=Vl(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
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
 */class zl{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Hl(e,t){let n=t instanceof wr?t:new wr(t),i=e,r=br(n);while(null!==r){const e=V(i.node.children,r)||{children:{},childCount:0};i=new zl(r,i,e),n=Ir(n),r=br(n)}return i}function $l(e){return e.node.value}function Ql(e,t){e.node.value=t,ec(e)}function Yl(e){return e.node.childCount>0}function Kl(e){return void 0===$l(e)&&!Yl(e)}function Gl(e,t){Kn(e.node.children,((n,i)=>{t(new zl(n,e,i))}))}function Jl(e,t,n,i){n&&!i&&t(e),Gl(e,(e=>{Jl(e,t,!0,i)})),n&&i&&t(e)}function Xl(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Zl(e){return new wr(null===e.parent?e.name:Zl(e.parent)+"/"+e.name)}function ec(e){null!==e.parent&&tc(e.parent,e.name,e)}function tc(e,t,n){const i=Kl(n),r=j(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,ec(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,ec(e))}
/**
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
 */const nc=/[\[\].#$\/\u0000-\u001F\u007F]/,ic=/[\[\].#$\u0000-\u001F\u007F]/,rc=10485760,sc=function(e){return"string"===typeof e&&0!==e.length&&!nc.test(e)},oc=function(e){return"string"===typeof e&&0!==e.length&&!ic.test(e)},ac=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),oc(e)},lc=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!Wn(e)||e&&"object"===typeof e&&j(e,".sv")},cc=function(e,t,n,i){i&&void 0===t||hc(te(e,"value"),t,n)},hc=function(e,t,n){const i=n instanceof wr?new Lr(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Br(i));if("function"===typeof t)throw new Error(e+"contains a function "+Br(i)+" with contents = "+t.toString());if(Wn(t))throw new Error(e+"contains "+t.toString()+" "+Br(i));if("string"===typeof t&&t.length>rc/3&&se(t)>rc)throw new Error(e+"contains a string greater than "+rc+" utf8 bytes "+Br(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(Kn(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!sc(t)))throw new Error(e+" contains an invalid key ("+t+") "+Br(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Fr(i,t),hc(e,s,i),Mr(i)})),n&&r)throw new Error(e+' contains ".value" child '+Br(i)+" in addition to actual children.")}},uc=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=kr(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!sc(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Dr);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&Or(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},dc=function(e,t,n,i){if(i&&void 0===t)return;const r=te(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const s=[];Kn(t,((e,t)=>{const i=new wr(e);if(hc(r,t,Pr(n,i)),".priority"===Tr(i)&&!lc(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(i)})),uc(r,s)},pc=function(e,t,n){if(!n||void 0!==t){if(Wn(t))throw new Error(te(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!lc(t))throw new Error(te(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},_c=function(e,t,n,i){if((!i||void 0!==n)&&!sc(n))throw new Error(te(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},fc=function(e,t,n,i){if((!i||void 0!==n)&&!oc(n))throw new Error(te(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},gc=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fc(e,t,n,i)},mc=function(e,t){if(".info"===br(t))throw new Error(e+" failed = Can't modify data under /.info/")},yc=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!sc(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!ac(n))throw new Error(te(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class vc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wc(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ar(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Cc(e,t,n){wc(e,n),Ec(e,(e=>Ar(e,t)))}function bc(e,t,n){wc(e,n),Ec(e,(e=>Or(e,t)||Or(t,e)))}function Ec(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(Ic(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Ic(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Rn&&On("event: "+n.toString()),ri(i)}}}
/**
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
 */const Tc="repo_interrupt",Sc=25;class kc{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=eo(),this.transactionQueueTree_=new zl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Nc(e,t,n){if(e.stats_=ki(e.repoInfo_),e.forceRestClient_||si())e.server_=new Xs(e.repoInfo_,((t,n,i,r)=>{Rc(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Dc(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{q(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Yr(e.repoInfo_,t,((t,n,i,r)=>{Rc(e,t,n,i,r)}),(t=>{Dc(e,t)}),(t=>{Ac(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=Ni(e.repoInfo_,(()=>new co(e.stats_,e.server_))),e.infoData_=new Zs,e.infoSyncTree_=new al({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=ul(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Oc(e,"connected",!1),e.serverSyncTree_=new al({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);bc(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Pc(e){const t=e.infoData_.getNode(new wr(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function xc(e){return Ml({timestamp:Pc(e)})}function Rc(e,t,n,i,r){e.dataUpdateCount++;const s=new wr(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=H(n,(e=>Ps(e)));o=ml(e.serverSyncTree_,s,t,r)}else{const t=Ps(n);o=gl(e.serverSyncTree_,s,t,r)}else if(i){const t=H(n,(e=>Ps(e)));o=dl(e.serverSyncTree_,s,t)}else{const t=Ps(n);o=ul(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=eh(e,s)),bc(e.eventQueue_,a,o)}function Dc(e,t){Oc(e,"connected",t),!1===t&&Bc(e)}function Ac(e,t){Kn(t,((t,n)=>{Oc(e,t,n)}))}function Oc(e,t,n){const i=new wr("/.info/"+t),r=Ps(n);e.infoData_.updateSnapshot(i,r);const s=ul(e.infoSyncTree_,i,r);bc(e.eventQueue_,i,s)}function Lc(e){return e.nextWriteId_++}function Fc(e,t,n){const i=wl(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const r=Ps(i).withIndex(t._queryParams.getIndex());let s;if(yl(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=ul(e.serverSyncTree_,t._path,r);else{const n=Tl(e.serverSyncTree_,t);s=gl(e.serverSyncTree_,t._path,r,n)}return bc(e.eventQueue_,t._path,s),fl(e.serverSyncTree_,t,n,null,!0),r}),(n=>(Yc(e,"get for query "+q(t)+" failed: "+n),Promise.reject(new Error(n)))))}function Mc(e,t,n,i,r){Yc(e,"set",{path:t.toString(),value:n,priority:i});const s=xc(e),o=Ps(n,i),a=vl(e.serverSyncTree_,t),l=jl(o,a,s),c=Lc(e),h=ll(e.serverSyncTree_,t,l,c,!0);wc(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||qn("set at "+t+" failed: "+n);const o=hl(e.serverSyncTree_,c,!s);bc(e.eventQueue_,t,o),Kc(e,r,n,i)}));const u=oh(e,t);eh(e,u),bc(e.eventQueue_,u,[])}function qc(e,t,n,i){Yc(e,"update",{path:t.toString(),value:n});let r=!0;const s=xc(e),o={};if(Kn(n,((n,i)=>{r=!1,o[n]=Ul(Pr(t,n),Ps(i),e.serverSyncTree_,s)})),r)On("update() called with empty data.  Don't do anything."),Kc(e,i,"ok",void 0);else{const r=Lc(e),s=cl(e.serverSyncTree_,t,o,r);wc(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||qn("update at "+t+" failed: "+n);const a=hl(e.serverSyncTree_,r,!o),l=a.length>0?eh(e,t):t;bc(e.eventQueue_,l,a),Kc(e,i,n,s)})),Kn(n,(n=>{const i=oh(e,Pr(t,n));eh(e,i)})),bc(e.eventQueue_,t,[])}}function Bc(e){Yc(e,"onDisconnectEvents");const t=xc(e),n=eo();io(e.onDisconnect_,Cr(),((i,r)=>{const s=Ul(i,r,e.serverSyncTree_,t);to(n,i,s)}));let i=[];io(n,Cr(),((t,n)=>{i=i.concat(ul(e.serverSyncTree_,t,n));const r=oh(e,t);eh(e,r)})),e.onDisconnect_=eo(),bc(e.eventQueue_,Cr(),i)}function Wc(e,t,n){e.server_.onDisconnectCancel(t.toString(),((i,r)=>{"ok"===i&&no(e.onDisconnect_,t),Kc(e,n,i,r)}))}function Uc(e,t,n,i){const r=Ps(n);e.server_.onDisconnectPut(t.toString(),r.val(!0),((n,s)=>{"ok"===n&&to(e.onDisconnect_,t,r),Kc(e,i,n,s)}))}function jc(e,t,n,i,r){const s=Ps(n,i);e.server_.onDisconnectPut(t.toString(),s.val(!0),((n,i)=>{"ok"===n&&to(e.onDisconnect_,t,s),Kc(e,r,n,i)}))}function Vc(e,t,n,i){if(z(n))return On("onDisconnect().update() called with empty data.  Don't do anything."),void Kc(e,i,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,((r,s)=>{"ok"===r&&Kn(n,((n,i)=>{const r=Ps(i);to(e.onDisconnect_,Pr(t,n),r)})),Kc(e,i,r,s)}))}function zc(e,t,n){let i;i=".info"===br(t._path)?yl(e.infoSyncTree_,t,n):yl(e.serverSyncTree_,t,n),Cc(e.eventQueue_,t._path,i)}function Hc(e,t,n){let i;i=".info"===br(t._path)?fl(e.infoSyncTree_,t,n):fl(e.serverSyncTree_,t,n),Cc(e.eventQueue_,t._path,i)}function $c(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Tc)}function Qc(e){e.persistentConnection_&&e.persistentConnection_.resume(Tc)}function Yc(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),On(n,...t)}function Kc(e,t,n,i){t&&ri((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function Gc(e,t,n,i,r,o){Yc(e,"transaction on "+t);const a={path:t,update:n,onComplete:i,status:null,order:Nn(),applyLocally:o,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=Jc(e,t,void 0);a.currentInputSnapshot=l;const c=a.update(l.val());if(void 0===c)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{hc("transaction failed: Data returned ",c,a.path),a.status=0;const n=Hl(e.transactionQueueTree_,t),i=$l(n)||[];let r;if(i.push(a),Ql(n,i),"object"===typeof c&&null!==c&&j(c,".priority"))r=V(c,".priority"),s(lc(r),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{const n=vl(e.serverSyncTree_,t)||Ts.EMPTY_NODE;r=n.getPriority().val()}const o=xc(e),h=Ps(c,r),u=jl(h,l,o);a.currentOutputSnapshotRaw=h,a.currentOutputSnapshotResolved=u,a.currentWriteId=Lc(e);const d=ll(e.serverSyncTree_,t,u,a.currentWriteId,a.applyLocally);bc(e.eventQueue_,t,d),Xc(e,e.transactionQueueTree_)}}function Jc(e,t,n){return vl(e.serverSyncTree_,t,n)||Ts.EMPTY_NODE}function Xc(e,t=e.transactionQueueTree_){if(t||sh(e,t),$l(t)){const n=ih(e,t);s(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&Zc(e,Zl(t),n)}else Yl(t)&&Gl(t,(t=>{Xc(e,t)}))}function Zc(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Jc(e,t,i);let o=r;const a=r.hash();for(let h=0;h<n.length;h++){const e=n[h];s(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=Rr(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const l=o.val(!0),c=t;e.server_.put(c.toString(),l,(i=>{Yc(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(hl(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();sh(e,Hl(e.transactionQueueTree_,t)),Xc(e,e.transactionQueueTree_),bc(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)ri(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{qn("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}eh(e,t)}}),a)}function eh(e,t){const n=nh(e,t),i=Zl(n),r=ih(e,n);return th(e,r,i),i}function th(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const o=t[l],c=Rr(n,o.path);let h,u=!1;if(s(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)u=!0,h=o.abortReason,r=r.concat(hl(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Sc)u=!0,h="maxretry",r=r.concat(hl(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Jc(e,o.path,a);o.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){hc("transaction failed: Data returned ",i,o.path);let t=Ps(i);const s="object"===typeof i&&null!=i&&j(i,".priority");s||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,c=xc(e),h=jl(t,n,c);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=Lc(e),a.splice(a.indexOf(l),1),r=r.concat(ll(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),r=r.concat(hl(e.serverSyncTree_,l,!0))}else u=!0,h="nodata",r=r.concat(hl(e.serverSyncTree_,o.currentWriteId,!0))}bc(e.eventQueue_,n,r),r=[],u&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===h?i.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):i.push((()=>t[l].onComplete(new Error(h),!1,null)))))}sh(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)ri(i[s]);Xc(e,e.transactionQueueTree_)}function nh(e,t){let n,i=e.transactionQueueTree_;n=br(t);while(null!==n&&void 0===$l(i))i=Hl(i,n),t=Ir(t),n=br(t);return i}function ih(e,t){const n=[];return rh(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function rh(e,t,n){const i=$l(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Gl(t,(t=>{rh(e,t,n)}))}function sh(e,t){const n=$l(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ql(t,n.length>0?n:void 0)}Gl(t,(t=>{sh(e,t)}))}function oh(e,t){const n=Zl(nh(e,t)),i=Hl(e.transactionQueueTree_,t);return Xl(i,(t=>{ah(e,t)})),ah(e,i),Jl(i,(t=>{ah(e,t)})),n}function ah(e,t){const n=$l(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(s(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(s(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(hl(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ql(t,void 0):n.length=o+1,bc(e.eventQueue_,Zl(t),r);for(let e=0;e<i.length;e++)ri(i[e])}}
/**
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
 */function lh(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function ch(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):qn(`Invalid query segment '${n}' in query '${e}'`)}return t}const hh=function(e,t){const n=uh(e),i=n.namespace;"firebase.com"===n.domain&&Mn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Mn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Bn();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ci(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new wr(n.pathString)}},uh=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"===typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=lh(e.substring(h,u)));const d=ch(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},dh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ph=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=dh.charAt(n%64),n=Math.floor(n/64);s(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=dh.charAt(t[r]);return s(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
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
 */
class _h{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+q(this.snapshot.exportVal())}}class fh{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
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
 */class gh{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return s(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
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
 */class mh{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new E;return Wc(this._repo,this._path,e.wrapCallback((()=>{}))),e.promise}remove(){mc("OnDisconnect.remove",this._path);const e=new E;return Uc(this._repo,this._path,null,e.wrapCallback((()=>{}))),e.promise}set(e){mc("OnDisconnect.set",this._path),cc("OnDisconnect.set",e,this._path,!1);const t=new E;return Uc(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}setWithPriority(e,t){mc("OnDisconnect.setWithPriority",this._path),cc("OnDisconnect.setWithPriority",e,this._path,!1),pc("OnDisconnect.setWithPriority",t,!1);const n=new E;return jc(this._repo,this._path,e,t,n.wrapCallback((()=>{}))),n.promise}update(e){mc("OnDisconnect.update",this._path),dc("OnDisconnect.update",e,this._path,!1);const t=new E;return Vc(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}}
/**
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
 */class yh{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return xr(this._path)?null:Tr(this._path)}get ref(){return new bh(this._repo,this._path)}get _queryIdentifier(){const e=Js(this._queryParams),t=Qn(e);return"{}"===t?"default":t}get _queryObject(){return Js(this._queryParams)}isEqual(e){if(e=oe(e),!(e instanceof yh))return!1;const t=this._repo===e._repo,n=Ar(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Sr(this._path)}}function vh(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function wh(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Zr){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==jn)throw new Error(i);if("string"!==typeof t)throw new Error(r)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==Vn)throw new Error(i);if("string"!==typeof n)throw new Error(r)}}else if(e.getIndex()===ms){if(null!=t&&!lc(t)||null!=n&&!lc(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(s(e.getIndex()instanceof xs||e.getIndex()===Ds,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Ch(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class bh extends yh{constructor(e,t){super(e,t,new Us,!1)}get parent(){const e=Nr(this._path);return null===e?null:new bh(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Eh{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new wr(e),n=Sh(this.ref,e);return new Eh(this._node.getChild(t),n,ms)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Eh(n,Sh(this.ref,t),ms))))}hasChild(e){const t=new wr(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ih(e,t){return e=oe(e),e._checkNotDeleted("ref"),void 0!==t?Sh(e._root,t):e._root}function Th(e,t){e=oe(e),e._checkNotDeleted("refFromURL");const n=hh(t,e._repo.repoInfo_.nodeAdmin);yc("refFromURL",n);const i=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||i.host===e._repo.repoInfo_.host||Mn("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+e._repo.repoInfo_.host+")"),Ih(e,n.path.toString())}function Sh(e,t){return e=oe(e),null===br(e._path)?gc("child","path",t,!1):fc("child","path",t,!1),new bh(e._repo,Pr(e._path,t))}function kh(e,t){e=oe(e),mc("push",e._path),cc("push",t,e._path,!0);const n=Pc(e._repo),i=ph(n),r=Sh(e,i),s=Sh(e,i);let o;return o=null!=t?Ph(s,t).then((()=>s)):Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function Nh(e){return mc("remove",e._path),Ph(e,null)}function Ph(e,t){e=oe(e),mc("set",e._path),cc("set",t,e._path,!1);const n=new E;return Mc(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function xh(e,t){e=oe(e),mc("setPriority",e._path),pc("setPriority",t,!1);const n=new E;return Mc(e._repo,Pr(e._path,".priority"),t,null,n.wrapCallback((()=>{}))),n.promise}function Rh(e,t,n){if(mc("setWithPriority",e._path),cc("setWithPriority",t,e._path,!1),pc("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const i=new E;return Mc(e._repo,e._path,t,n,i.wrapCallback((()=>{}))),i.promise}function Dh(e,t){dc("update",t,e._path,!1);const n=new E;return qc(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function Ah(e){e=oe(e);const t=new gh((()=>{})),n=new Oh(t);return Fc(e._repo,e,n).then((t=>new Eh(t,new bh(e._repo,e._path),e._queryParams.getIndex())))}class Oh{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new _h("value",this,new Eh(e.snapshotNode,new bh(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new fh(this,e,t):null}matches(e){return e instanceof Oh&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Lh{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new fh(this,e,t):null}createEvent(e,t){s(null!=e.childName,"Child events should have a childName.");const n=Sh(new bh(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new _h(e.type,this,new Eh(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Lh&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Fh(e,t,n,i,r){let s;if("object"===typeof i&&(s=void 0,r=i),"function"===typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{Hc(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new gh(n,s||void 0),a="value"===t?new Oh(o):new Lh(t,o);return zc(e._repo,e,a),()=>Hc(e._repo,e,a)}function Mh(e,t,n,i){return Fh(e,"value",t,n,i)}function qh(e,t,n,i){return Fh(e,"child_added",t,n,i)}function Bh(e,t,n,i){return Fh(e,"child_changed",t,n,i)}function Wh(e,t,n,i){return Fh(e,"child_moved",t,n,i)}function Uh(e,t,n,i){return Fh(e,"child_removed",t,n,i)}function jh(e,t,n){let i=null;const r=n?new gh(n):null;"value"===t?i=new Oh(r):t&&(i=new Lh(t,r)),Hc(e._repo,e,i)}class Vh{}class zh extends Vh{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){cc("endAt",this._value,e._path,!0);const t=Qs(e._queryParams,this._value,this._key);if(Ch(t),wh(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new yh(e._repo,e._path,t,e._orderByCalled)}}function Hh(e,t){return _c("endAt","key",t,!0),new zh(e,t)}class $h extends Vh{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){cc("endBefore",this._value,e._path,!1);const t=Ys(e._queryParams,this._value,this._key);if(Ch(t),wh(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new yh(e._repo,e._path,t,e._orderByCalled)}}function Qh(e,t){return _c("endBefore","key",t,!0),new $h(e,t)}class Yh extends Vh{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){cc("startAt",this._value,e._path,!0);const t=Hs(e._queryParams,this._value,this._key);if(Ch(t),wh(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new yh(e._repo,e._path,t,e._orderByCalled)}}function Kh(e=null,t){return _c("startAt","key",t,!0),new Yh(e,t)}class Gh extends Vh{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){cc("startAfter",this._value,e._path,!1);const t=$s(e._queryParams,this._value,this._key);if(Ch(t),wh(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new yh(e._repo,e._path,t,e._orderByCalled)}}function Jh(e,t){return _c("startAfter","key",t,!0),new Gh(e,t)}class Xh extends Vh{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new yh(e._repo,e._path,Vs(e._queryParams,this._limit),e._orderByCalled)}}function Zh(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Xh(e)}class eu extends Vh{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new yh(e._repo,e._path,zs(e._queryParams,this._limit),e._orderByCalled)}}function tu(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new eu(e)}class nu extends Vh{constructor(e){super(),this._path=e}_apply(e){vh(e,"orderByChild");const t=new wr(this._path);if(xr(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new xs(t),i=Ks(e._queryParams,n);return wh(i),new yh(e._repo,e._path,i,!0)}}function iu(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return fc("orderByChild","path",e,!1),new nu(e)}class ru extends Vh{_apply(e){vh(e,"orderByKey");const t=Ks(e._queryParams,Zr);return wh(t),new yh(e._repo,e._path,t,!0)}}function su(){return new ru}class ou extends Vh{_apply(e){vh(e,"orderByPriority");const t=Ks(e._queryParams,ms);return wh(t),new yh(e._repo,e._path,t,!0)}}function au(){return new ou}class lu extends Vh{_apply(e){vh(e,"orderByValue");const t=Ks(e._queryParams,Ds);return wh(t),new yh(e._repo,e._path,t,!0)}}function cu(){return new lu}class hu extends Vh{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(cc("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new zh(this._value,this._key)._apply(new Yh(this._value,this._key)._apply(e))}}function uu(e,t){return _c("equalTo","key",t,!0),new hu(e,t)}function du(e,...t){let n=oe(e);for(const i of t)n=i._apply(n);return n}Ha(bh),rl(bh);
/**
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
 */
const pu="FIREBASE_DATABASE_EMULATOR_HOST",_u={};let fu=!1;function gu(e,t,n,i){e.repoInfo_=new Ci(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}function mu(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Mn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),On("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=hh(s,r),c=l.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",VUE_APP_API:"https://vue3-course-api.hexschool.io",VUE_APP_PATH:"ldd-api",BASE_URL:"/wildlife-save/dist/"}[pu]),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=hh(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const h=r&&o?new ci(ci.OWNER):new li(e.name,e.options,t);yc("Invalid Firebase Database URL",l),xr(l.path)||Mn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=vu(c,e,h,new ai(e.name,n));return new wu(u,e)}function yu(e,t){const n=_u[t];n&&n[e.key]===e||Mn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),$c(e),delete n[e.key]}function vu(e,t,n,i){let r=_u[t.name];r||(r={},_u[t.name]=r);let s=r[e.toURLString()];return s&&Mn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new kc(e,fu,n,i),r[e.toURLString()]=s,s}class wu{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Nc(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bh(this._repo,Cr())),this._rootInternal}_delete(){return null!==this._rootInternal&&(yu(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Mn("Cannot call "+e+" on a deleted database.")}}function Cu(){Zi.IS_TRANSPORT_INITIALIZED&&qn("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function bu(){Cu(),Qi.forceDisallow()}function Eu(){Cu(),Xi.forceDisallow(),Qi.forceAllow()}function Iu(e,t,n,i={}){e=oe(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Mn("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Mn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ci(ci.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:I(i.mockUserToken,e.app.options.projectId);s=new ci(t)}gu(r,t,n,s)}function Tu(e){e=oe(e),e._checkNotDeleted("goOffline"),$c(e._repo)}function Su(e){e=oe(e),e._checkNotDeleted("goOnline"),Qc(e._repo)}function ku(e,t){An(e,t)}
/**
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
 */function Nu(e){Cn(Ot),kt(new ae("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return mu(n,i,r,t)}),"PUBLIC").setMultipleInstances(!0)),Bt(yn,vn,e),Bt(yn,vn,"esm2017")}
/**
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
 */const Pu={".sv":"timestamp"};function xu(){return Pu}function Ru(e){return{".sv":{increment:e}}}
/**
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
 */class Du{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Au(e,t,n){var i;if(e=oe(e),mc("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const r=null===(i=null===n||void 0===n?void 0:n.applyLocally)||void 0===i||i,s=new E,o=(t,n,i)=>{let r=null;t?s.reject(t):(r=new Eh(i,new bh(e._repo,e._path),ms),s.resolve(new Du(n,r)))},a=Mh(e,(()=>{}));return Gc(e._repo,e._path,t,o,a,r),s.promise}
/**
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
 */Yr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Yr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Nu();const Ou="@firebase/database-compat",Lu="0.3.4",Fu=new ve("@firebase/database-compat"),Mu=function(e){const t="FIREBASE WARNING: "+e;Fu.warn(t)},qu=function(e,t,n,i){if((!i||void 0!==n)&&"boolean"!==typeof n)throw new Error(te(e,t)+"must be a boolean.")},Bu=function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(te(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};
/**
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
 */
class Wu{constructor(e){this._delegate=e}cancel(e){ee("OnDisconnect.cancel",0,1,arguments.length),ne("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then((()=>e(null)),(t=>e(t))),t}remove(e){ee("OnDisconnect.remove",0,1,arguments.length),ne("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then((()=>e(null)),(t=>e(t))),t}set(e,t){ee("OnDisconnect.set",1,2,arguments.length),ne("OnDisconnect.set","onComplete",t,!0);const n=this._delegate.set(e);return t&&n.then((()=>t(null)),(e=>t(e))),n}setWithPriority(e,t,n){ee("OnDisconnect.setWithPriority",2,3,arguments.length),ne("OnDisconnect.setWithPriority","onComplete",n,!0);const i=this._delegate.setWithPriority(e,t);return n&&i.then((()=>n(null)),(e=>n(e))),i}update(e,t){if(ee("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,Mu("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ne("OnDisconnect.update","onComplete",t,!0);const n=this._delegate.update(e);return t&&n.then((()=>t(null)),(e=>t(e))),n}}
/**
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
 */class Uu{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return ee("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
/**
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
 */class ju{constructor(e,t){this._database=e,this._delegate=t}val(){return ee("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return ee("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return ee("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return ee("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return ee("DataSnapshot.child",0,1,arguments.length),e=String(e),fc("DataSnapshot.child","path",e,!1),new ju(this._database,this._delegate.child(e))}hasChild(e){return ee("DataSnapshot.hasChild",1,1,arguments.length),fc("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return ee("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return ee("DataSnapshot.forEach",1,1,arguments.length),ne("DataSnapshot.forEach","action",e,!1),this._delegate.forEach((t=>e(new ju(this._database,t))))}hasChildren(){return ee("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return ee("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return ee("DataSnapshot.ref",0,0,arguments.length),new zu(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Vu{constructor(e,t){this.database=e,this._delegate=t}on(e,t,n,i){var r;ee("Query.on",2,4,arguments.length),ne("Query.on","callback",t,!1);const s=Vu.getCancelAndContextArgs_("Query.on",n,i),o=(e,n)=>{t.call(s.context,new ju(this.database,e),n)};o.userCallback=t,o.context=s.context;const a=null===(r=s.cancel)||void 0===r?void 0:r.bind(s.context);switch(e){case"value":return Mh(this._delegate,o,a),t;case"child_added":return qh(this._delegate,o,a),t;case"child_removed":return Uh(this._delegate,o,a),t;case"child_changed":return Bh(this._delegate,o,a),t;case"child_moved":return Wh(this._delegate,o,a),t;default:throw new Error(te("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if(ee("Query.off",0,3,arguments.length),Bu("Query.off",e,!0),ne("Query.off","callback",t,!0),ie("Query.off","context",n,!0),t){const i=()=>{};i.userCallback=t,i.context=n,jh(this._delegate,e,i)}else jh(this._delegate,e)}get(){return Ah(this._delegate).then((e=>new ju(this.database,e)))}once(e,t,n,i){ee("Query.once",1,4,arguments.length),ne("Query.once","callback",t,!0);const r=Vu.getCancelAndContextArgs_("Query.once",n,i),s=new E,o=(e,n)=>{const i=new ju(this.database,e);t&&t.call(r.context,i,n),s.resolve(i)};o.userCallback=t,o.context=r.context;const a=e=>{r.cancel&&r.cancel.call(r.context,e),s.reject(e)};switch(e){case"value":Mh(this._delegate,o,a,{onlyOnce:!0});break;case"child_added":qh(this._delegate,o,a,{onlyOnce:!0});break;case"child_removed":Uh(this._delegate,o,a,{onlyOnce:!0});break;case"child_changed":Bh(this._delegate,o,a,{onlyOnce:!0});break;case"child_moved":Wh(this._delegate,o,a,{onlyOnce:!0});break;default:throw new Error(te("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return s.promise}limitToFirst(e){return ee("Query.limitToFirst",1,1,arguments.length),new Vu(this.database,du(this._delegate,Zh(e)))}limitToLast(e){return ee("Query.limitToLast",1,1,arguments.length),new Vu(this.database,du(this._delegate,tu(e)))}orderByChild(e){return ee("Query.orderByChild",1,1,arguments.length),new Vu(this.database,du(this._delegate,iu(e)))}orderByKey(){return ee("Query.orderByKey",0,0,arguments.length),new Vu(this.database,du(this._delegate,su()))}orderByPriority(){return ee("Query.orderByPriority",0,0,arguments.length),new Vu(this.database,du(this._delegate,au()))}orderByValue(){return ee("Query.orderByValue",0,0,arguments.length),new Vu(this.database,du(this._delegate,cu()))}startAt(e=null,t){return ee("Query.startAt",0,2,arguments.length),new Vu(this.database,du(this._delegate,Kh(e,t)))}startAfter(e=null,t){return ee("Query.startAfter",0,2,arguments.length),new Vu(this.database,du(this._delegate,Jh(e,t)))}endAt(e=null,t){return ee("Query.endAt",0,2,arguments.length),new Vu(this.database,du(this._delegate,Hh(e,t)))}endBefore(e=null,t){return ee("Query.endBefore",0,2,arguments.length),new Vu(this.database,du(this._delegate,Qh(e,t)))}equalTo(e,t){return ee("Query.equalTo",1,2,arguments.length),new Vu(this.database,du(this._delegate,uu(e,t)))}toString(){return ee("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return ee("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(ee("Query.isEqual",1,1,arguments.length),!(e instanceof Vu)){const e="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(e)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){const i={cancel:void 0,context:void 0};if(t&&n)i.cancel=t,ne(e,"cancel",i.cancel,!0),i.context=n,ie(e,"context",i.context,!0);else if(t)if("object"===typeof t&&null!==t)i.context=t;else{if("function"!==typeof t)throw new Error(te(e,"cancelOrContext")+" must either be a cancel callback or a context object.");i.cancel=t}return i}get ref(){return new zu(this.database,new bh(this._delegate._repo,this._delegate._path))}}class zu extends Vu{constructor(e,t){super(e,new yh(t._repo,t._path,new Us,!1)),this.database=e,this._delegate=t}getKey(){return ee("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return ee("Reference.child",1,1,arguments.length),"number"===typeof e&&(e=String(e)),new zu(this.database,Sh(this._delegate,e))}getParent(){ee("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new zu(this.database,e):null}getRoot(){return ee("Reference.root",0,0,arguments.length),new zu(this.database,this._delegate.root)}set(e,t){ee("Reference.set",1,2,arguments.length),ne("Reference.set","onComplete",t,!0);const n=Ph(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}update(e,t){if(ee("Reference.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,Mu("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}mc("Reference.update",this._delegate._path),ne("Reference.update","onComplete",t,!0);const n=Dh(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}setWithPriority(e,t,n){ee("Reference.setWithPriority",2,3,arguments.length),ne("Reference.setWithPriority","onComplete",n,!0);const i=Rh(this._delegate,e,t);return n&&i.then((()=>n(null)),(e=>n(e))),i}remove(e){ee("Reference.remove",0,1,arguments.length),ne("Reference.remove","onComplete",e,!0);const t=Nh(this._delegate);return e&&t.then((()=>e(null)),(t=>e(t))),t}transaction(e,t,n){ee("Reference.transaction",1,3,arguments.length),ne("Reference.transaction","transactionUpdate",e,!1),ne("Reference.transaction","onComplete",t,!0),qu("Reference.transaction","applyLocally",n,!0);const i=Au(this._delegate,e,{applyLocally:n}).then((e=>new Uu(e.committed,new ju(this.database,e.snapshot))));return t&&i.then((e=>t(null,e.committed,e.snapshot)),(e=>t(e,!1,null))),i}setPriority(e,t){ee("Reference.setPriority",1,2,arguments.length),ne("Reference.setPriority","onComplete",t,!0);const n=xh(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}push(e,t){ee("Reference.push",0,2,arguments.length),ne("Reference.push","onComplete",t,!0);const n=kh(this._delegate,e),i=n.then((e=>new zu(this.database,e)));t&&i.then((()=>t(null)),(e=>t(e)));const r=new zu(this.database,n);return r.then=i.then.bind(i),r.catch=i.catch.bind(i,void 0),r}onDisconnect(){return mc("Reference.onDisconnect",this._delegate._path),new Wu(new mh(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
/**
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
 */class Hu{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:bu,forceLongPolling:Eu}}useEmulator(e,t,n={}){Iu(this._delegate,e,t,n)}ref(e){if(ee("database.ref",0,1,arguments.length),e instanceof zu){const t=Th(this._delegate,e.toString());return new zu(this,t)}{const t=Ih(this._delegate,e);return new zu(this,t)}}refFromURL(e){const t="database.refFromURL";ee(t,1,1,arguments.length);const n=Th(this._delegate,e);return new zu(this,n)}goOffline(){return ee("database.goOffline",0,0,arguments.length),Tu(this._delegate)}goOnline(){return ee("database.goOnline",0,0,arguments.length),Su(this._delegate)}}
/**
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
 */
function $u({app:e,url:t,version:n,customAuthImpl:i,namespace:r,nodeAdmin:s=!1}){Cn(n);const o=new ce("auth-internal",new de("database-standalone"));return o.setComponent(new ae("auth-internal",(()=>i),"PRIVATE")),{instance:new Hu(mu(e,o,void 0,t,s),e),namespace:r}}Hu.ServerValue={TIMESTAMP:xu(),increment:e=>Ru(e)};var Qu=Object.freeze({__proto__:null,initStandalone:$u});
/**
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
 */const Yu=Hu.ServerValue;function Ku(e){e.INTERNAL.registerComponent(new ae("database-compat",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:t});return new Hu(i,n)}),"PUBLIC").setServiceProps({Reference:zu,Query:Vu,Database:Hu,DataSnapshot:ju,enableLogging:ku,INTERNAL:Qu,ServerValue:Yu}).setMultipleInstances(!0)),e.registerVersion(Ou,Lu)}Ku(fn);var Gu={apiKey:"AIzaSyArLzj8nWNSxxSRGwS_UWF-v80zgAU_s2U",authDomain:"wildlife-save.firebaseapp.com",projectId:"wildlife-save",storageBucket:"wildlife-save.appspot.com",messagingSenderId:"630848572536",appId:"1:630848572536:web:3e6bb4f8e28623efc8b18d",measurementId:"G-DLXESV2QDM"};fn.initializeApp(Gu);const Ju=fn.database()},6294:function(e,t,n){var i=n(9876);t["Z"]=(0,i.Q_)("statusStore",{state:()=>({isLoading:!1,loadingItem:""})})}}]);
//# sourceMappingURL=663.ae8fd228.js.map