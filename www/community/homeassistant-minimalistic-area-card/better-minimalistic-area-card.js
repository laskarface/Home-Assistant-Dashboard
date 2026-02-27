function t(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;var e,i,s=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"})};!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(e||(e={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(i||(i={}));var n=function(t){if(t.time_format===i.language||t.time_format===i.system){var e=t.time_format===i.language?t.language:void 0,s=(new Date).toLocaleString(e);return s.includes("AM")||s.includes("PM")}return t.time_format===i.am_pm},r=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:n(t)?"numeric":"2-digit",minute:"2-digit",hour12:n(t)})},o=function(t){return new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hour12:n(t)})};function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}).apply(this,arguments)}function l(t){return t.substr(0,t.indexOf("."))}var c=function(t){switch(t.number_format){case e.comma_decimal:return["en-US","en"];case e.decimal_comma:return["de","es","it"];case e.space_comma:return["fr","sv","cs"];case e.system:return;default:return t.language}},h=function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)},u=function(t,i,s){var n=i?c(i):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==i?void 0:i.number_format)!==e.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,d(t,s)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,d(t,s)).format(Number(t))}return"string"==typeof t?t:h(t,null==s?void 0:s.maximumFractionDigits).toString()+("currency"===(null==s?void 0:s.style)?" "+s.currency:"")},d=function(t,e){var i=a({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var s=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=s,i.maximumFractionDigits=s}return i},m=function(t,e,i,n){var a=void 0!==n?n:e.state;if("unknown"===a||"unavailable"===a)return t("state.default."+a);if(function(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class}(e)){if("monetary"===e.attributes.device_class)try{return u(a,i,{style:"currency",currency:e.attributes.unit_of_measurement})}catch(t){}return u(a,i)+(e.attributes.unit_of_measurement?" "+e.attributes.unit_of_measurement:"")}var c,h=function(t){return l(t.entity_id)}(e);return"input_datetime"===h?e.attributes.has_date&&e.attributes.has_time?function(t,e){return r(e).format(t)}(c=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),i):e.attributes.has_date?function(t,e){return s(e).format(t)}(c=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),i):e.attributes.has_time?((c=new Date).setHours(e.attributes.hour,e.attributes.minute),function(t,e){return o(e).format(t)}(c,i)):e.state:"humidifier"===h&&"on"===a&&e.attributes.humidity?e.attributes.humidity+" %":"counter"===h||"number"===h||"input_number"===h?u(a,i):e.attributes.device_class&&t("component."+h+".state."+e.attributes.device_class+"."+a)||t("component."+h+".state._."+a)||a},p=["closed","locked","off"],f=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n},g=function(t){f(window,"haptic",t)},_=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var s,n=l(e),r="group"===n?"homeassistant":n;switch(n){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}return t.callService(r,s,{entity_id:e})}(t,e,p.includes(t.states[e].state))},v=function(t,e,i,s){if(s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(g("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&f(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),f(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&(_(e,i.entity),g("success"));break;case"perform-action":if(!s.perform_action)return void g("failure");var n=s.perform_action.split(".",2);e.callService(n[0],n[1],s.data,s.target),g("success");break;case"call-service":if(!s.service)return void g("failure");var r=s.service.split(".",2);e.callService(r[0],r[1],s.data,s.target),g("success");break;case"fire-dom-event":f(t,"ll-custom",s)}},b=function(t,e,i,s){var n;"double_tap"===s&&i.double_tap_action?n=i.double_tap_action:"hold"===s&&i.hold_action?n=i.hold_action:"tap"===s&&i.tap_action&&(n=i.tap_action),v(t,e,i,n)};function y(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,w=$.ShadowRoot&&(void 0===$.ShadyCSS||$.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,A=Symbol(),E=new WeakMap;let x=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==A)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(w&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=E.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&E.set(e,t))}return t}toString(){return this.cssText}};const S=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new x(i,t,A)},C=w?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new x("string"==typeof t?t:t+"",void 0,A))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:O,defineProperty:k,getOwnPropertyDescriptor:T,getOwnPropertyNames:N,getOwnPropertySymbols:D,getPrototypeOf:P}=Object,U=globalThis,M=U.trustedTypes,z=M?M.emptyScript:"",L=U.reactiveElementPolyfillSupport,j=(t,e)=>t,R={toAttribute(t,e){switch(e){case Boolean:t=t?z:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},H=(t,e)=>!O(t,e),I={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:H};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;let F=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=I){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&k(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=T(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);n?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??I}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;const t=P(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){const t=this.properties,e=[...N(t),...D(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(C(t))}else void 0!==t&&e.push(C(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(w)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),s=$.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:R).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:R;this._$Em=s,this[s]=n.fromAttribute(e,t.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??H)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};F.elementStyles=[],F.shadowRootOptions={mode:"open"},F[j("elementProperties")]=new Map,F[j("finalized")]=new Map,L?.({ReactiveElement:F}),(U.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B=globalThis,V=B.trustedTypes,W=V?V.createPolicy("lit-html",{createHTML:t=>t}):void 0,q="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,K="?"+Y,J=`<${K}>`,Z=document,X=()=>Z.createComment(""),G=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Q=Array.isArray,tt="[ \t\n\f\r]",et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,st=/>/g,nt=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,ot=/"/g,at=/^(?:script|style|textarea|title)$/i,lt=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),ct=Symbol.for("lit-noChange"),ht=Symbol.for("lit-nothing"),ut=new WeakMap,dt=Z.createTreeWalker(Z,129);function mt(t,e){if(!Q(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==W?W.createHTML(e):e}const pt=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=et;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===et?"!--"===l[1]?o=it:void 0!==l[1]?o=st:void 0!==l[2]?(at.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=nt):void 0!==l[3]&&(o=nt):o===nt?">"===l[0]?(o=n??et,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?nt:'"'===l[3]?ot:rt):o===ot||o===rt?o=nt:o===it||o===st?o=et:(o=nt,n=void 0);const u=o===nt&&t[e+1].startsWith("/>")?" ":"";r+=o===et?i+J:c>=0?(s.push(a),i.slice(0,c)+q+i.slice(c)+Y+u):i+Y+(-2===c?e:u)}return[mt(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class ft{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,c]=pt(t,e);if(this.el=ft.createElement(l,i),dt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=dt.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(q)){const e=c[r++],i=s.getAttribute(t).split(Y),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?yt:"?"===o[1]?$t:"@"===o[1]?wt:bt}),s.removeAttribute(t)}else t.startsWith(Y)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(at.test(s.tagName)){const t=s.textContent.split(Y),e=t.length-1;if(e>0){s.textContent=V?V.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],X()),dt.nextNode(),a.push({type:2,index:++n});s.append(t[e],X())}}}else if(8===s.nodeType)if(s.data===K)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(Y,t+1));)a.push({type:7,index:n}),t+=Y.length-1}n++}}static createElement(t,e){const i=Z.createElement("template");return i.innerHTML=t,i}}function gt(t,e,i=t,s){if(e===ct)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=G(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=gt(t,n._$AS(t,e.values),n,s)),e}class _t{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??Z).importNode(e,!0);dt.currentNode=s;let n=dt.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new vt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new At(n,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(n=dt.nextNode(),r++)}return dt.currentNode=Z,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class vt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=ht,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=gt(this,t,e),G(t)?t===ht||null==t||""===t?(this._$AH!==ht&&this._$AR(),this._$AH=ht):t!==this._$AH&&t!==ct&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>Q(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ht&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(Z.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=ft.createElement(mt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new _t(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=ut.get(t.strings);return void 0===e&&ut.set(t.strings,e=new ft(t)),e}k(t){Q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new vt(this.O(X()),this.O(X()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class bt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=ht,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ht}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=gt(this,t,e,0),r=!G(t)||t!==this._$AH&&t!==ct,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=gt(this,s[i+o],e,o),a===ct&&(a=this._$AH[o]),r||=!G(a)||a!==this._$AH[o],a===ht?t=ht:t!==ht&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===ht?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class yt extends bt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ht?void 0:t}}class $t extends bt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ht)}}class wt extends bt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=gt(this,t,e,0)??ht)===ct)return;const i=this._$AH,s=t===ht&&i!==ht||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==ht&&(i===ht||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class At{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){gt(this,t)}}const Et=B.litHtmlPolyfillSupport;Et?.(ft,vt),(B.litHtmlVersions??=[]).push("3.3.1");const xt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let St=class extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new vt(e.insertBefore(X(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ct}};St._$litElement$=!0,St.finalized=!0,xt.litElementHydrateSupport?.({LitElement:St});const Ct=xt.litElementPolyfillSupport;Ct?.({LitElement:St}),(xt.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ot=1,kt=t=>(...e)=>({_$litDirective$:t,values:e});let Tt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=kt(class extends Tt{constructor(t){if(super(t),t.type!==Ot||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return ct}}),Dt=t=>t??ht
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Pt="important",Ut=" !"+Pt,Mt=kt(class extends Tt{constructor(t){if(super(t),t.type!==Ot||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ft.add(t);const e="string"==typeof s&&s.endsWith(Ut);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?Pt:""):i[t]=s}}return ct}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt="--ha-better-minimalistic-area-card-";var Lt,jt;!function(t){t.left="left",t.right="right",t.center="center"}(Lt||(Lt={})),function(t){t.auto="auto",t.sensors="sensors",t.buttons="buttons",t.title="title"}(jt||(jt={}));const Rt="unavailable",Ht=[...p,Rt,"idle","disconnected"],It="better-minimalistic-area-card",Ft="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class Bt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Ft?"100px":"50px",height:Ft?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},s=i=>{i.preventDefault(),i.stopPropagation(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?f(t,"action",{action:"hold"},{bubbles:!1}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,f(t,"action",{action:"tap"},{bubbles:!1})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,f(t,"action",{action:"double_tap"},{bubbles:!1})):f(t,"action",{action:"tap"},{bubbles:!1}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",s),t.addEventListener("touchcancel",s),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",s),t.addEventListener("keyup",(t=>{13===t.keyCode&&s(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-"+It,Bt);const Vt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-"+It))return t.querySelector("action-handler-"+It);const e=document.createElement("action-handler-"+It);return t.appendChild(e),e})();i&&i.bind(t,e)},Wt=kt(class extends Tt{update(t,[e]){return Vt(t.element,e),ct}render(t){}}),qt=(t,e,i,s,n,r)=>{const o=[];(null==n?void 0:n.length)&&o.push((t=>n.includes(l(t.entity))));const a=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const s=[];for(let n=0;n<t.length&&s.length<i;n++){let i=!0;for(const s of e)if(!s(t[n])){i=!1;break}i&&s.push(t[n])}return s})(i,o,e);if(a.length<e&&s.length){const i=qt(t,e-a.length,s,[],n);a.push(...i)}return a},Yt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Kt={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:H},Jt=(t=Kt,e,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};function Zt(t){return(e,i)=>"object"==typeof i?Jt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Xt(t,e,i){const s=e.trim();if(!s.startsWith("${")||!s.endsWith("}"))return e;let n=s.slice(2,-1);n.toLocaleLowerCase().startsWith("return")||(n=`return ${n}`);try{return new Function("hass","state","user","html","helpers",`'use strict'; ${n}`).call(null,i,null!=t?i.states[t].state:null,i.user,lt,function(t,e){const i="unknown",s="unavailable",n=t=>t in e.states?"state"in e.states[t]?e.states[t].state:s:i,r=t=>![i,s].includes(n(t));return{states:t=>n(t),state_attr:(i,s)=>(!s&&t&&(s=i,i=t),s&&r(i)&&s in e.states[i].attributes?e.states[i].attributes[s]:null),is_state:(e,i)=>{if(!i&&t&&(i=e,e=t),"string"==typeof e){const t=n(e);return Array.isArray(i)?i.includes(t):i==t}return!1},is_state_attr:(i,s,n)=>{var r;return!n&&t&&(n=s,s=i,i=t),"string"==typeof s&&s in(null===(r=e.states[i])||void 0===r?void 0:r.attributes)&&(Array.isArray(n)?n.includes(e.states[i].attributes[s]):n==e.states[i].attributes[s])},has_value:e=>(!e&&t&&(e=t),!!e&&r(e))}}(t,i))}catch(t){const e=n.length<=100?n.trim():`${n.substring(0,98)}...`;throw t.message=`${t.name}: ${t.message} in '${e}'`,t.name="MinimalistAreaCardJSTemplateError",t}}function Gt(t){console.warn("[DEPRECATED][%s] %s",It,t)}function Qt(t,e,i,s){if(null==e)return s;if("string"==typeof e)try{const n=Xt(t,e,i);return null==n?s:n}catch(t){return console.error("Error in template %s: ",e,t),s}return e}var te;console.info("%c  Better Minimalistic Area Card  %c 1.2.41 ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");const ee=["sensor","binary_sensor","plant"],ie=["fan","input_boolean","light","switch","group","automation","humidifier"];let se=te=class extends St{constructor(){super(...arguments),this._domainsInTemplates=["input_([^.]+)","(binary_)?sensor","number","switch","fan","light","climate","vacuum","camera","cover","device","lock","media_player","valve","select","weather","water_heater","humidifier","image","siren","scene","todo","plant","group"],this._templatedEntityNameRegexp=RegExp(`["']((${this._domainsInTemplates.join("|")})[.][a-z_]+)["']`,"gmsid"),this.configChanged=!0,this._entitiesSensor=[],this._entitiesButtons=[],this._entitiesTitle=[],this._entitiesTemplated=[],this.previowsAreaEntitiesCount=0}performUpdate(){this.setArea(),this.setEntities(),super.performUpdate(),this.configChanged=!1}setArea(){var t;if(null===(t=this.hass)||void 0===t?void 0:t.connected)if(this.config&&this.config.area){const t=this.hass.areas[this.config.area];t?(this.area=t,this.areaEntities=te.findAreaEntities(this.hass,t.area_id),this.config.icon=Qt(null,this.config.icon,this.hass,Qt(null,t.icon,this.hass,void 0))):(this.area=void 0,this.areaEntities=void 0)}else this.area=void 0,this.areaEntities=void 0;else console.error("Invalid hass connection")}setEntities(){var t,e;if(!this.configChanged&&(null===(t=this.areaEntities)||void 0===t?void 0:t.length)==this.previowsAreaEntitiesCount)return;this._entitiesSensor=[],this._entitiesButtons=[],this._entitiesTitle=[],this._entitiesTemplated=[];((null===(e=this.config)||void 0===e?void 0:e.entities)||this.areaEntities||[]).forEach((t=>{const e=this.parseEntity(t);if(null!=e&&null!=e.entity){const t=this._getOrDefault(e.entity,e.section,jt.auto);let i=t in jt?t:jt.auto;const s=l(e.entity);switch(i==jt.auto&&(i=-1!==ee.indexOf(s)||e.attribute?jt.sensors:jt.buttons),i){case jt.sensors:this._entitiesSensor.push(e);break;case jt.title:this._entitiesTitle.push(e);break;default:this._entitiesButtons.push(e)}}})),this.config&&this._parseTemplatedEntities(this.config)}parseEntity(t){return"string"==typeof t?{entity:t,section:jt.auto}:Object.assign({section:this._getOrDefault(t.entity,t.section,jt.auto)},t)}_handleEntityAction(t){const e=t.currentTarget.config;b(this,this.hass,e,t.detail.action)}_handleThisAction(t){var e,i;const s=null===(i=null===(e=t.currentTarget.getRootNode())||void 0===e?void 0:e.host)||void 0===i?void 0:i.parentElement;this.hass&&this.config&&t.detail.action&&(!s||"HUI-CARD-PREVIEW"!==s.tagName)&&b(this,this.hass,this.config,t.detail.action)}_parseTemplatedEntities(t){if(null==t||null==t)return;const e=typeof t;if("object"==e)Object.keys(t).forEach((e=>{this._parseTemplatedEntities(t[e])}));else if("string"==e&&t.trim().startsWith("${")&&t.trim().endsWith("}")){const e=[...t.trim().matchAll(this._templatedEntityNameRegexp)];null==e||e.forEach((t=>{if(null!=t[1]&&t[1]in this.hass.states){const e=this.parseEntity(t[1]),i=this._entitiesTemplated.filter((t=>t.entity==e.entity));0==i.length&&this._entitiesTemplated.push(e)}}))}}static async getConfigElement(){return await Promise.resolve().then((function(){return oe})),document.createElement("better-minimalistic-area-card-editor")}setConfig(t){var e,i,s,n;if(!t||t.entities&&!Array.isArray(t.entities))throw new Error("Invalid configuration");this.config=Object.assign({hold_action:{action:"more-info"}},t),this.config.align=Object.assign({title:this._getOrDefault(null,null===(e=t.align)||void 0===e?void 0:e.title,Lt.left),sensors:this._getOrDefault(null,null===(i=t.align)||void 0===i?void 0:i.sensors,Lt.left),buttons:this._getOrDefault(null,null===(s=t.align)||void 0===s?void 0:s.buttons,Lt.right),title_entities:this._getOrDefault(null,null===(n=t.align)||void 0===n?void 0:n.title_entities,Lt.right)},t.align),null==this.config.style&&(this.config.style={}),t.background_color&&(Gt('The top level option "background_color" was deprecated, please use "style.background_color" instead.'),this.config.style.background_color||(this.config.style.background_color=t.background_color)),this.configChanged=!0}getCardSize(){let t=1;return this._entitiesSensor.length>0&&t++,this._entitiesButtons.length>0&&t++,t}getLayoutOptions(){return{rows:this.getCardSize(),columns:1,min_rows:1,min_columns:1}}render(){var t,e,i,s,n,r;if(!this.config||!this.hass)return ht;let o,a={};return this.config.style&&(a=function(t,e,i){const s={};return[{key:"color",ccs:`${zt}color`},{key:"background_color",ccs:`${zt}background-color`},{key:"sensors_color",ccs:`${zt}sensors-color`},{key:"sensors_icon_size",ccs:`${zt}sensors-icon-size`},{key:"sensors_button_size",ccs:`${zt}sensors-button-size`},{key:"buttons_icon_size",ccs:`${zt}buttons-icon-size`},{key:"buttons_button_size",ccs:`${zt}buttons-button-size`},{key:"buttons_color",ccs:`${zt}buttons-color`},{key:"shadow_color",ccs:`${zt}shadow-color`}].forEach((n=>{if(t[n.key]){const r=Qt(e,t[n.key],i,void 0);void 0!==r&&(s[n.ccs]=r)}})),s}(this.config.style,null,this.hass)),this.config.camera_image||!this.config.image&&!(null===(t=this.area)||void 0===t?void 0:t.picture)||(o=new URL(this.config.image||(null===(e=this.area)||void 0===e?void 0:e.picture)||"",this.hass.auth.data.hassUrl).toString()),lt`
      <ha-card
        @action=${this._handleThisAction}
        style=${Mt(a)}
        .actionHandler=${Wt({hasHold:y(this.config.hold_action),hasDoubleClick:y(this.config.double_tap_action)})}
        tabindex=${Dt(y(this.config.tap_action)?"0":void 0)}
      >
        ${o?lt`<img
              src=${o}
              class=${Nt({darken:this._getOrDefault(null,this.config.darken_image,!1)})}
            />`:null}
        ${this.config.camera_image?lt`<div
              class=${Nt({camera:!0,darken:this._getOrDefault(null,this.config.darken_image,!1)})}
            >
              <hui-image
                .hass=${this.hass}
                .cameraImage=${this.config.camera_image}
                .entity=${this.config.camera_image}
                .cameraView=${this.config.camera_view||"auto"}
                .width=${"100%"}
              ></hui-image>
            </div>`:null}

        <div
          class="${Nt({box:!0,pointer:y(this.config.tap_action),shadow:this._getOrDefault(null,this.config.shadow,!1)})}"
        >
          ${this.renderTitle()}
          <div class="sensors align-${null===(s=null===(i=this.config.align)||void 0===i?void 0:i.sensors)||void 0===s?void 0:s.toLocaleLowerCase()}">
            ${this._entitiesSensor.map((t=>this.renderEntity(t)))}
          </div>
          <div class="buttons align-${null===(r=null===(n=this.config.align)||void 0===n?void 0:n.buttons)||void 0===r?void 0:r.toLocaleLowerCase()}">
            ${this._entitiesButtons.map((t=>this.renderEntity(t)))}
          </div>
        </div>
      </ha-card>
    `}renderTitle(){var t,e,i,s,n,r;const o=lt`
      <div class="title-entities title-entities-${null===(e=null===(t=this.config.align)||void 0===t?void 0:t.title_entities)||void 0===e?void 0:e.toLocaleLowerCase()}">
        ${this._entitiesTitle.map((t=>this.renderEntity(t)))}
      </div>
    `;return lt`
      <div class="card-header align-${null===(s=null===(i=this.config.align)||void 0===i?void 0:i.title)||void 0===s?void 0:s.toLocaleLowerCase()}">
        ${(null===(n=this.config.align)||void 0===n?void 0:n.title_entities)==Lt.left?o:""} ${this.renderAreaIcon(this.config)}
        <span class="title">${this.config.title}</span>
        ${(null===(r=this.config.align)||void 0===r?void 0:r.title_entities)!=Lt.left?o:""}
      </div>
    `}renderAreaIcon(t){return 0!=this._getOrDefault(null,t.icon,"").trim().length&&this._getOrDefault(null,t.show_area_icon,!1)?lt` <ha-icon icon=${Dt(t.icon)}></ha-icon> `:lt``}renderEntity(t){var e,i,s;const n=this.hass.states[t.entity];if(null==n)return ht;const r=this.hass.entities[t.entity],o=t.entity.trim(),a=l(o),c=this._getOrDefault(o,t.force_dialog,this._getOrDefault(o,this.config.force_dialog,!1))||-1===ie.indexOf(a);let h=!0;h=void 0===t.show_state?"binary_sensor"!==a:!!t.show_state,t=Object.assign({tap_action:{action:c?"more-info":"toggle"},hold_action:{action:"more-info"},show_state:h},t);let u=this._getOrDefault(o,t.icon,""),d=this._getOrDefault(o,t.color,""),p=this._getOrDefault(o,t.hide,!1),f=this._getOrDefault(o,t.hide_unavailable,this._getOrDefault(o,this.config.hide_unavailable,!1)),g=this.computeStateValue(n,t,r);if(""==(null==g?void 0:g.trim())&&(g=null),void 0!==t.state&&t.state.length>0){const e=function(t,e,i,s){let n;const r=null==e?void 0:e.filter((e=>{var r;switch((null===(r=e.operator)||void 0===r?void 0:r.trim().toLocaleLowerCase())||"=="){case"<":return i<e.value;case"<=":return i<=e.value;case"==":return i==e.value;case">=":return i>=e.value;case">":return i>e.value;case"!=":return i!=e.value;case"regex":return!!String(i).match(e.value);case"template":return 1==Qt(t,e.value,s,!1);case"default":return n=e,!1;default:return!1}}));return(null==r?void 0:r.length)>0?r[0]:n}(o,t.state,n.state,this.hass);e&&(u=this._getOrDefault(o,e.icon,t.icon),d=this._getOrDefault(o,e.color,d),p=this._getOrDefault(o,e.hide,p),f=this._getOrDefault(o,e.hide_unavailable,f))}const _=!n||n.state===Rt;if(p||_&&f)return ht;if(_&&!f)return lt`
        <div class="wrapper">
          <hui-warning-element .label=${((t,e)=>"NOT_RUNNING"!==t.config.state?t.localize("ui.panel.lovelace.warning.entity_not_found","entity",e||"[empty]"):t.localize("ui.panel.lovelace.warning.starting"))(this.hass,o)}></hui-warning-element>
        </div>
      `;const v=n&&n.state&&-1===Ht.indexOf(n.state.toString().toLowerCase()),b=this._getOrDefault(o,t.title,`${(null===(e=n.attributes)||void 0===e?void 0:e.friendly_name)||o}: ${m(null===(i=this.hass)||void 0===i?void 0:i.localize,n,null===(s=this.hass)||void 0===s?void 0:s.locale)}`),$=t.section==jt.sensors||-1!==ee.indexOf(a);return lt`
      <div class="wrapper ${t.entity.replace(".","_")}">
        <ha-icon-button
          @action=${this._handleEntityAction}
          .actionHandler=${Wt({hasHold:y(t.hold_action),hasDoubleClick:y(t.double_tap_action)})}
          .config=${t}
          class=${Nt({"state-on":v})}
        >
          <state-badge
            .hass=${this.hass}
            .stateObj=${n}
            .title=${b}
            .overrideIcon=${u}
            .stateColor=${void 0!==t.state_color?t.state_color:void 0===this.config.state_color||this.config.state_color}
            .color=${d}
          ></state-badge>
        </ha-icon-button>
        ${null!=g&&$&&t.show_state?lt`
              <div class="state">
                ${t.attribute?lt` ${t.prefix} ${n.attributes[t.attribute]} ${t.suffix} `:g}
              </div>
            `:null}
      </div>
    `}isNumericState(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class}computeStateValue(t,e,i){t.attributes||(t.attributes={});const s=this._getOrDefault(null==i?void 0:i.entity_id,e.unit_of_measurement,this._getOrDefault(null==i?void 0:i.entity_id,t.attributes.unit_of_measurement,"")),n=function(t,e){return`${t}${e?" "+e:""}`};if(["unavailable","unknown","idle"].includes(String(t.state).toLowerCase()))return null;if(["off","on","true","false"].includes(String(t.state).toLowerCase()))return s;if(this.isNumericState(t)){const e=Number(t.state);if(isNaN(e))return null;{const r=this.getNumberFormatOptions(t,i);return n(this.formatNumber(e,this.hass.locale,r),s)}}return n(t.state,s)}getNumberFormatOptions(t,e){var i;const s=null==e?void 0:e.display_precision;return null!=s?{maximumFractionDigits:s,minimumFractionDigits:s}:Number.isInteger(Number(null===(i=t.attributes)||void 0===i?void 0:i.step))&&Number.isInteger(Number(t.state))?{maximumFractionDigits:0}:void 0}formatNumber(t,i,s){const n=i?c(i):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==i?void 0:i.number_format)!==e.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,this.getDefaultFormatOptions(t,s)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,this.getDefaultFormatOptions(t,s)).format(Number(t))}return"string"==typeof t?t:`${h(t,null==s?void 0:s.maximumFractionDigits).toString()}${"currency"===(null==s?void 0:s.style)?` ${s.currency}`:""}`}getDefaultFormatOptions(t,e){const i=Object.assign({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||void 0===e.minimumFractionDigits&&void 0===e.maximumFractionDigits){const e=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=e,i.maximumFractionDigits=e}return i}shouldUpdate(t){if(function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1))return!0;const e=t.get("hass");if(!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale)return!0;for(const t of[...this._entitiesButtons,...this._entitiesSensor,...this._entitiesTemplated,...this._entitiesTitle])if(e.states[t.entity]!==this.hass.states[t.entity])return!0;const i=this.config.area;return!!(e&&i&&this.hass.areas[i]&&e.area&&e.area[i]!==this.hass.areas[i])}_getOrDefault(t,e,i){return Qt(t,e,this.hass,i)}static findAreaEntities(t,e){const i=t.areas&&t.areas[e],s=t.entities&&i&&Object.keys(t.entities).filter((e=>{var s;return!t.entities[e].hidden&&"diagnostic"!==t.entities[e].entity_category&&"config"!==t.entities[e].entity_category&&(t.entities[e].area_id===i.area_id||(null===(s=t.devices[t.entities[e].device_id||""])||void 0===s?void 0:s.area_id)===i.area_id)})).map((t=>te._mapEntityNameToEntityConfig(t)));return s||[]}static _mapEntityNameToEntityConfig(t){return{entity:t}}static getStubConfig(t,e,i){const s=e.map((t=>te._mapEntityNameToEntityConfig(t))),n=i.map((t=>te._mapEntityNameToEntityConfig(t))),r=t.areas&&t.areas[Object.keys(t.areas)[0]],o=te.findAreaEntities(t,r.area_id),a={title:"Kitchen",image:"https://demo.home-assistant.io/stub_config/kitchen.png",area:"",hide_unavailable:!1,tap_action:{action:"navigate",navigation_path:"/lovelace-kitchen"},entities:[...qt(t,2,(null==o?void 0:o.length)?o:s,n,["light"]),...qt(t,2,(null==o?void 0:o.length)?o:s,n,["switch"]),...qt(t,2,(null==o?void 0:o.length)?o:s,n,["sensor"]),...qt(t,2,(null==o?void 0:o.length)?o:s,n,["binary_sensor"])]};return r?(a.area=r.area_id,a.title=r.name,a.tap_action.navigation_path="/config/areas/area/"+r.area_id,delete a.image):delete a.area,a}static get styles(){return S`
      * {
        box-sizing: border-box;
      }
      ha-card {
        position: relative;
        min-height: 48px;
        height: 100%;
      }

      img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        pointer-events: none;
        border-radius: var(--ha-card-border-radius, 12px);
      }

      .darken {
        filter: brightness(0.55);
      }

      div.camera {
        height: 100%;
        width: 100%;
        overflow: hidden;

        position: absolute;
        left: 0;
        top: 0;

        pointer-events: none;
        border-radius: var(--ha-card-border-radius, 12px);
      }

      div.camera hui-image {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }

      .box {
        background-color: var(--ha-better-minimalistic-area-card-background-color, transparent);
        color: var(--ha-better-minimalistic-area-card-color, var(--primary-text-color, black));
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;

        width: 100%;
        height: 100%;

        padding: 0;
        font-size: 14px;
        border-radius: var(--ha-card-border-radius, 12px);
        z-index: -1;
      }

      .box .card-header {
        padding: 10px 15px;
        font-weight: bold;
        font-size: 1.2em;
        z-index: 1;
      }

      .box .sensors {
        margin-top: -8px;
        margin-bottom: -8px;
        vertical-align: middle;
        min-height: var(--minimalistic-area-card-sensors-min-height, 10px);
        color: var(
          --ha-better-minimalistic-area-card-sensors-color,
          var(--ha-better-minimalistic-area-card-color, var(--secondary-text-color, black))
        );
        margin-left: 5px;
        margin-right: 5px;
        font-size: 0.9em;
        z-index: 1;
      }

      .box .card-header .title-entities {
        color: var(
          --ha-better-minimalistic-area-card-buttons-color,
          var(--ha-better-minimalistic-area-card-color, var(--secondary-text-color, black))
        );
        padding: 0px;
        margin-top: -20px;
        margin-right: -20px;
        font-size: 0.9em;
        line-height: 13px;
      }

      .pointer {
        cursor: pointer;
      }

      .box .buttons {
        display: block;
        color: var(
          --ha-better-minimalistic-area-card-buttons-color,
          var(--ha-better-minimalistic-area-card-color, var(--secondary-text-color, black))
        );
        padding-bottom: 10px;
        width: 100%;
        margin-top: auto;
        z-index: 1;
      }

      .title-entities-left {
        float: left;
      }

      .title-entities-right {
        float: right;
      }

      .align-left {
        text-align: left;
      }

      .align-right {
        text-align: right;
      }

      .align-center {
        text-align: center;
      }

      .box .sensors ha-icon-button {
        --mdc-icon-size: var(--ha-better-minimalistic-area-card-sensors-icon-size, 18px);
        --mdc-icon-button-size: var(--ha-better-minimalistic-area-card-sensors-button-size, 32px);
      }

      .box .buttons ha-icon-button {
        --mdc-icon-size: var(--ha-better-minimalistic-area-card-buttons-icon-size, 24px);
        --mdc-icon-button-size: var(--ha-better-minimalistic-area-card-buttons-button-size, 48px);
        margin-left: -8px;
        margin-right: -6px;
      }

      .box .wrapper {
        display: inline-block;
        vertical-align: middle;
        margin-bottom: -8px;
      }
      .box .sensors ha-icon-button,
      .box .sensors state-badge {
        color: var(
          --ha-better-minimalistic-area-card-sensors-color,
          var(--ha-better-minimalistic-area-card-color, var(--secondary-text-color, #a9a9a9))
        );
        line-height: 0px;
      }
      .box .buttons ha-icon-button,
      .box .buttons state-badge {
        color: var(
          --ha-better-minimalistic-area-card-buttons-color,
          var(--ha-better-minimalistic-area-card-color, var(--secondary-text-color, #a9a9a9))
        );
      }
      .box .title-entities ha-icon-button,
      .box .title-entities state-badge {
        color: var(
          --ha-better-minimalistic-area-card-buttons-color,
          var(--ha-better-minimalistic-area-card-color, var(--secondary-text-color, #a9a9a9))
        );
      }

      .shadow {
        text-shadow: 1px 1px 2px var(--ha-better-minimalistic-area-card-shadow-color, gray);
      }
      .box .state,
      .box hui-warning-element {
        cursor: default;
      }

      .shadow ha-icon-button,
      .shadow state-badge,
      .shadow ha-icon {
        filter: drop-shadow(1px 1px 2px var(--ha-better-minimalistic-area-card-shadow-color, gray));
      }

      .box .sensors .wrapper > * {
        display: inline-block;
        vertical-align: middle;
      }
      .box .sensors .state {
        margin-left: -9px;
      }

      .box .wrapper hui-warning-element {
        display: block;
      }
    `}};se.properties={hass:{attribute:!1},config:{state:!0}},se=te=t([Yt(It)],se);let ne=class extends se{constructor(){Gt("You are using deprecated card name 'custom:minimalistic-area-card', please update type to 'custom:better-minimalistic-area-card'. The old name will be removed in 1.3.0"),super()}};ne=t([Yt("minimalistic-area-card")],ne),window.customCards=window.customCards||[],window.customCards.push({type:It,name:"Better minimalistic area card",preview:!0,description: ''
      <div class="instructions">
        For instructions, visit the
        <a href="https://github.com/LesTR/homeassistant-minimalistic-area-card" target="_blank"
          >Better Minimalistic Area Card Examples and Docs</a
        >.
      </div>
      <div class="yaml-editor">
        <ha-yaml-editor
          .defaultValue=${this.config}
          autofocus
          .hass=${this.hass}
          @value-changed=${this._handleYAMLChanged}
          @keydown=${this._ignoreKeydown}
          dir="ltr"
        ></ha-yaml-editor>
      </div>
    `:lt`loading...`}_ignoreKeydown(t){t.stopPropagation()}_handleYAMLChanged(t){t.stopPropagation();const e=t.detail.value;t.detail.isValid&&(this.yamlChange=!0,this.config=e,f(this,"config-changed",{config:this.config}))}};re.styles=S`
    .instructions {
      margin-bottom: 8px;
    }
    .instructions a {
      color: var(--mdc-theme-primary, #6200ee);
    }
  `,t([Zt({attribute:!1})],re.prototype,"hass",void 0),t([function(t){return Zt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */()],re.prototype,"config",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(e,i,s)=>((t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i))(e,i,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}("ha-yaml-editor")],re.prototype,"_yamlEditor",void 0),re=t([Yt("better-minimalistic-area-card-editor")],re);var oe=Object.freeze({__proto__:null,get BetterMinimalisticAreaCardEditor(){return re}});export{ne as DeprecatedMinimalisticAreaCard,se as MinimalisticAreaCard};
