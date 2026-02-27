function t(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new o(i,t,n)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,_={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:g},p="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(p))return!1;this[p]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):n.forEach(i=>{const n=document.createElement("style"),s=e.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=i.cssText,t.appendChild(n)})})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var n;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:_).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=n.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:_;this._$El=s,this[s]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;m[p]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const b=window,y=b.trustedTypes,x=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,A="?"+$,k=`<${A}>`,L=document,E=()=>L.createComment(""),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,O="[ \t\n\f\r]",C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,N=/>/g,T=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,z=/"/g,V=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),P=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),D=new WeakMap,I=L.createTreeWalker(L,129,null,!1);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const F=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":"",r=C;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===C?"!--"===l[1]?r=M:void 0!==l[1]?r=N:void 0!==l[2]?(V.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=T):void 0!==l[3]&&(r=T):r===T?">"===l[0]?(r=null!=s?s:C,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?T:'"'===l[3]?z:j):r===z||r===j?r=T:r===M||r===N?r=C:(r=T,s=void 0);const h=r===T&&t[e+1].startsWith("/>")?" ":"";o+=r===C?i+k:c>=0?(n.push(a),i.slice(0,c)+w+i.slice(c)+$+h):i+$+(-2===c?(n.push(void 0),e):h)}return[W(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class q{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[l,c]=F(t,e);if(this.el=q.createElement(l,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=I.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(w)||e.startsWith($)){const i=c[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+w).split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?X:"@"===e[1]?Q:K})}else a.push({type:6,index:s})}for(const e of t)n.removeAttribute(e)}if(V.test(n.tagName)){const t=n.textContent.split($),e=t.length-1;if(e>0){n.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],E()),I.nextNode(),a.push({type:2,index:++s});n.append(t[e],E())}}}else if(8===n.nodeType)if(n.data===A)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf($,t+1));)a.push({type:7,index:s}),t+=$.length-1}s++}}static createElement(t,e){const i=L.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,n){var s,o,r,a;if(e===P)return e;let l=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const c=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=G(t,l._$AS(t,e.values),l,n)),e}class B{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:L).importNode(i,!0);I.currentNode=s;let o=I.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Z(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new tt(o,this,t)),this._$AV.push(e),l=n[++a]}r!==(null==l?void 0:l.index)&&(o=I.nextNode(),r++)}return I.currentNode=L,s}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,n){var s;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),S(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==P&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>H(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&S(this._$AH)?this._$AA.nextSibling.data=t:this.$(L.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=q.createElement(W(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.v(i);else{const t=new B(s,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new q(t)),e}T(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Z(this.k(E()),this.k(E()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,n,s){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=G(this,t,e,0),o=!S(t)||t!==this._$AH&&t!==P,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=G(this,n[i+r],e,r),a===P&&(a=this._$AH[r]),o||(o=!S(a)||a!==this._$AH[r]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const J=y?y.emptyScript:"";class X extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Q extends K{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=G(this,t,e,0))&&void 0!==i?i:U)===P)return;const n=this._$AH,s=t===U&&n!==U||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==U&&(n===U||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const et={I:Z},it=b.litHtmlPolyfillSupport;null==it||it(q,Z),(null!==(v=b.litHtmlVersions)&&void 0!==v?v:b.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt,st;class ot extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=o._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new Z(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return P}}ot.finalized=!0,ot._$litElement$=!0,null===(nt=globalThis.litElementHydrateSupport)||void 0===nt||nt.call(globalThis,{LitElement:ot});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:ot}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e),lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):lt(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return ct({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ht;null===(ht=window.HTMLSlotElement)||void 0===ht||ht.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut={ATTRIBUTE:1,CHILD:2},_t=t=>(...e)=>({_$litDirective$:t,values:e});let gt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft="important",pt=" !"+ft,mt=_t(class extends gt{constructor(t){var e;if(super(t),t.type!==ut.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach(t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")});for(const t in e){const n=e[t];if(null!=n){this.ht.add(t);const e="string"==typeof n&&n.endsWith(pt);t.includes("-")||e?i.setProperty(t,e?n.slice(0,-11):n,e?ft:""):i[t]=n}}return P}});var vt=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function bt(t,e){return t===e||!(!vt(t)||!vt(e))}function yt(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(!bt(t[i],e[i]))return!1;return!0}function xt(t,e){void 0===e&&(e=yt);var i=null;function n(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];if(i&&i.lastThis===this&&e(n,i.lastArgs))return i.lastResult;var o=t.apply(this,n);return i={lastResult:o,lastArgs:n,lastThis:this},o}return n.clear=function(){i=null},n}const wt=r`
  #sortable a:nth-of-type(2n) paper-icon-item {
    animation-name: keyframes1;
    animation-iteration-count: infinite;
    transform-origin: 50% 10%;
    animation-delay: -0.75s;
    animation-duration: 0.25s;
  }
  #sortable a:nth-of-type(2n-1) paper-icon-item {
    animation-name: keyframes2;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: 30% 5%;
    animation-delay: -0.5s;
    animation-duration: 0.33s;
  }
  #sortable a {
    height: 48px;
    display: flex;
  }
  #sortable {
    outline: none;
    display: block !important;
  }
  .hidden-panel {
    display: flex !important;
  }
  .sortable-fallback {
    display: none;
  }
  .sortable-ghost {
    opacity: 0.4;
  }
  .sortable-fallback {
    opacity: 0;
  }
  @keyframes keyframes1 {
    0% {
      transform: rotate(-1deg);
      animation-timing-function: ease-in;
    }
    50% {
      transform: rotate(1.5deg);
      animation-timing-function: ease-out;
    }
  }
  @keyframes keyframes2 {
    0% {
      transform: rotate(1deg);
      animation-timing-function: ease-in;
    }
    50% {
      transform: rotate(-1.5deg);
      animation-timing-function: ease-out;
    }
  }
  .show-panel,
  .hide-panel {
    display: none;
    position: absolute;
    top: 0;
    right: 4px;
    --mdc-icon-button-size: 40px;
  }
  :host([rtl]) .show-panel {
    right: initial;
    left: 4px;
  }
  .hide-panel {
    top: 4px;
    right: 8px;
  }
  :host([rtl]) .hide-panel {
    right: initial;
    left: 8px;
  }
  :host([expanded]) .hide-panel {
    display: block;
  }
  :host([expanded]) .show-panel {
    display: inline-flex;
  }
  paper-icon-item.hidden-panel,
  paper-icon-item.hidden-panel span,
  paper-icon-item.hidden-panel ha-icon[slot='item-icon'] {
    color: var(--secondary-text-color);
    cursor: pointer;
  }
`,$t=r`
  .card-config {
    /* Cancels overlapping Margins for HAForm + Card Config options */
    overflow: auto;
  }
  ha-switch {
    padding: 16px 6px;
  }
  .side-by-side {
    display: flex;
    align-items: flex-end;
  }
  .side-by-side > * {
    flex: 1;
    padding-right: 8px;
    padding-inline-end: 8px;
    padding-inline-start: initial;
  }
  .side-by-side > *:last-child {
    flex: 1;
    padding-right: 0;
    padding-inline-end: 0;
    padding-inline-start: initial;
  }
  .suffix {
    margin: 0 8px;
  }
  hui-action-editor,
  ha-select,
  ha-textfield,
  ha-icon-picker {
    margin-top: 8px;
    display: block;
  }
  ha-expansion-panel {
    display: block;
    --expansion-panel-content-padding: 0;
    border-radius: 6px;
    --ha-card-border-radius: 6px;
  }
  ha-expansion-panel .content {
    padding: 12px;
  }
  ha-expansion-panel > *[slot="header"] {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }
  ha-expansion-panel ha-svg-icon {
    color: var(--secondary-text-color);
  }
  .back-title {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
  }
  ha-icon {
      display: flex;
  }  
`,At=r`
    .line-gauge-card {
        --gauge-card-width: 300px;
        --color: var(--primary-color);
        --background: var(--secondary-background-color);
        --line-height: 3rem;

        box-sizing:border-box;
        cursor: pointer;
        /*pointer-events: none;*/
        transition: all 0.3s ease-out;

        margin: 2px auto;
        padding: 0.75rem 1.5rem;
    }

    .line-gauge-card div {
        box-sizing:border-box
    }

    .gauge-position-frame {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        flex-grow: 1;
        gap: 0.5rem;
    }
  
    /* Gauge Title -------------------------------------------*/
  
    .gauge-title {
        font-size: 2rem;
        text-align: left;
        flex-wrap: nowrap;
        white-space: nowrap;
    }
    .gauge-subtitle {
        font-size: 1rem;
        text-align: left;
        flex-wrap: nowrap;
        white-space: nowrap;
        color: var(--secondary-text-color);
    }
  
    /* Gauge Title Position Adjustments */
    /* Left aligned */
    .position-left .gauge-title,
    .position-left .gauge-subtitle,
    .position-top-left .gauge-title,
    .position-top-left .gauge-subtitle,
    .position-bottom-left .gauge-title,
    .position-bottom-left .gauge-subtitle {
      text-align: left;
    }
  
    /* Center aligned */
    .position-top-middle .gauge-title,
    .position-top-middle .gauge-subtitle,
    .position-top-center .gauge-title,
    .position-top-center .gauge-subtitle,
    .position-bottom-middle .gauge-title,
    .position-bottom-middle .gauge-subtitle,
    .position-bottom-center .gauge-title,
    .position-bottom-center .gauge-subtitle {
      text-align: center;
    }
  
    /* Right aligned */
    .position-right .gauge-title,
    .position-right .gauge-subtitle,
    .position-top-right .gauge-title,
    .position-top-right .gauge-subtitle,
    .position-bottom-right .gauge-title,
    .position-bottom-right .gauge-subtitle {
      text-align: right;
    }
    
    /* Gauge Value -------------------------------------------*/
  
    .gauge-value {
        display: flex;
        font-size: 2.5rem;
        flex-wrap: nowrap;
        align-items: center;
        text-align: center;
        white-space: nowrap;
    }
    .unit {
        font-size: 1.25rem;
        color: var(--secondary-text-color);
    }
    
    /* MAIN Label Position / Title position -------------------------------------------------- */
    /* 'left' | 'right' | 'none' | 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'; */
  
    .position-left {
        flex-direction: row;
        align-items: center;
    }

    .position-right {
        flex-direction: row-reverse;
        align-items: center;
    }

    .position-top-left,
    .position-top-middle,
    .position-top-center,
    .position-top-right {
        flex-direction: column;
    }

    .position-bottom-left,
    .position-bottom-middle,
    .position-bottom-center,
    .position-bottom-right {
        flex-direction: column-reverse;
    }

    .position-top-left,
    .position-bottom-left {
        align-items: flex-start;
    }

    .position-top-middle,
    .position-bottom-middle,
    .position-top-center,
    .position-bottom-center {
        align-items: center;
    }

    .position-top-right,
    .position-bottom-right {
        align-items: flex-end;
    }
  
    /*Title/Value Position ---------------------------------*/
    .title-value-position-left {
      width: auto;
      flex-direction: row;
      align-items: center;
      display: flex;
      flex-wrap: nowrap;
      flex-grow: 1;
      gap: 1rem;
    }
    .title-value-position-right {
      width: auto;
      flex-direction: row-reverse;
      align-items: center;
      display: flex;
      flex-wrap: nowrap;
      flex-grow: 1;
      gap: 1rem;
    }
    .title-value-position-right .gauge-value,
    .title-value-position-left .gauge-value {
      margin-bottom: 0.5rem;
    }
    
    /*Gauge line -------------------------------------------*/

    .gauge-line {
        width: 100%;
        height: var(--line-height);
        background: var(--background-color);
    }
    .main-line {
        width: 0;
        height: 100%;
        background: var(--color);
        transition: width 1s ease-out;
    }
    
    .device-line-container {
        display: flex;
        position: relative;
        top: calc(-1 * var(--line-height));
        height: var(--line-height);
        width: 100%;
    }
    
    /* Device line --------------------------------------------*/

    .device-line {
        float: left;
        height: 100%;
        transition: width 1s ease-out;
        display: flex;
        direction: ltr;
    }
    .untracked-line {
      float: right;
      height: 100%;
      transition: width 1s ease-out;
      display: flex;
    }
    .device-line-label {
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        min-width: 0;
        z-index: 1;
        pointer-events: none;
        padding: 0.3rem;
    }
    
    /* Device line label position --------------------------------------------*/
    /* 'left' | 'right' | 'center' | 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'; */
    
    .line-text-position-left {text-align: left; align-content: center;}
    .line-text-position-right {text-align: right; align-content: center;}
    .line-text-position-center {text-align: center; align-content: center;}
    
    .line-text-position-top-left {text-align: left; align-content: start;}
    .line-text-position-top-right {text-align: right; align-content: start;}
    .line-text-position-top-center {text-align: center; align-content: start;}
    
    .line-text-position-bottom-left {text-align: left; align-content: end;}
    .line-text-position-bottom-right {text-align: right; align-content: end;}
    .line-text-position-bottom-center {text-align: center; align-content: end;}
    
    /*Theme  --------------------------------------------------*/
    
    .line-corner-lite-rounded {
        border-radius: calc(var(--line-height) / 12);
        overflow: hidden;
    }
    .line-corner-medium-rounded {
        border-radius: calc(var(--line-height) / 6);
        overflow: hidden;
    }
    .line-corner-rounded {
        border-radius: calc(var(--line-height) / 4);
        overflow: hidden;
    }
    .line-corner-square {
        border-radius: 0;
        overflow: hidden;
    }
    .line-corner-circular {
        border-radius: calc(var(--line-height) / 2);
        overflow: hidden;
    }
    
    /*Legend -------------------------------------------------*/

    .chart-legend {
        text-align: center;
        width: 100%;
    }
    .chart-legend ul {
        display: flex;
        margin: 8px 0 0;
        width: 100%;
        padding-inline-start: 0;
        justify-content: center;
        flex-wrap: wrap;
    }
    .chart-legend li {
        cursor: pointer;
        display: flex;
        padding: 0 8px;
        box-sizing: border-box;
        align-items: center;
        color: var(--secondary-text-color);
        height: 24px;
    }
    .chart-legend .label {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .chart-legend .bullet {
        border-width: 1px;
        border-style: solid;
        border-radius: 50%;
        display: inline-block;
        height: 16px;
        margin-right: 6px;
        width: 16px;
        direction: var(--direction);
    }
    .indicator-state {
      font-weight: bold;
      margin-right: 0.5rem;
    }
    
    /*Legend Alignment -------------------------------------------------*/
    /*['left', 'right', 'center', 'space-around', 'space-between', 'space-evenly', 'new-line', 'new-line-left', 'new-line-right']*/
    
    .legend-alignment-left ul {justify-content: flex-start}
    .legend-alignment-right ul {justify-content: flex-end}
    .legend-alignment-center ul {justify-content: center}
    .legend-alignment-space-around ul {justify-content: space-around}
    .legend-alignment-space-between ul {justify-content: space-between}
    .legend-alignment-space-evenly ul {justify-content: space-evenly}
    
    .legend-alignment-new-line ul {flex-direction: column; align-items: center;}
    .legend-alignment-new-line-left ul {flex-direction: column; align-items: flex-start;}
    .legend-alignment-new-line-right ul {flex-direction: column; align-items: flex-end;}
    
    /*Delta -------------------------------------------------*/
    
    .gauge-delta {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
    .gauge-delta-item {
        text-align: center;
        vertical-align: middle;
        flex-wrap: nowrap;
        overflow: hidden;
        font-size: 0.75rem;
        line-height: 1.5rem;
        color: var(--secondary-text-color);
    }
    .gauge-delta-item span {
        font-size: 1.5rem;
    }
    .delta span {
        font-size: 1.5rem;
        color: var(--primary-text-color);
    }
`,kt=xt((t,e)=>{const i={overflow:"hidden",direction:"right"===e?"ltr":"rtl"};switch(t){case"ellipsis":return i["text-overflow"]="ellipsis",i;case"clip":return i["text-overflow"]="clip",i;case"fade":return delete i.overflow,i["mask-image"]=`linear-gradient(to ${e}, black 85%, transparent 98%, transparent 100%)`,i["-webkit-mask-image"]=`linear-gradient(to ${e}, black 85%, transparent 98%, transparent 100%)`,i;default:return i}}),Lt=xt((t,e,i)=>{const n=e||1,s={"font-size":`${n}rem`,color:i};if(!t)return s;const o=new Set(t);o.has("weight-bolder")?s["font-weight"]="bolder":o.has("weight-bold")?s["font-weight"]="bold":o.has("weight-lighter")&&(s["font-weight"]="lighter"),o.has("style-italic")&&(s["font-style"]="italic");const r=[];return o.has("decoration-underline")&&r.push("underline"),o.has("decoration-overline")&&r.push("overline"),o.has("decoration-line-through")&&r.push("line-through"),r.length>0&&(s["text-decoration"]=r.join(" ")),o.has("transform-uppercase")?s["text-transform"]="uppercase":o.has("transform-lowercase")?s["text-transform"]="lowercase":o.has("transform-capitalize")&&(s["text-transform"]="capitalize"),o.has("family-monospace")&&(s["font-family"]="monospace"),o.has("black-outline")?s["-webkit-text-stroke"]=.5*n+"px black":o.has("white-outline")&&(s["-webkit-text-stroke"]=.5*n+"px white"),o.has("shadow-neon")?s["text-shadow"]=[`0 0 ${5*n}px ${s.color}`,`0 0 ${10*n}px ${s.color}`,`0 0 ${20*n}px ${s.color}`,`0 0 ${40*n}px ${s.color}`,`0 0 ${80*n}px ${s.color}`].join(", "):o.has("shadow-hard")?s["text-shadow"]=`${1.25*n}px ${1.25*n}px 0 rgba(0, 0, 0)`:o.has("shadow-heavy")?s["text-shadow"]=`${1.25*n}px ${1.25*n}px ${1.25*n}px rgba(0, 0, 0)`:o.has("shadow-medium")?s["text-shadow"]=`${1.25*n}px ${1.25*n}px ${2.5*n}px rgba(0, 0, 0, 0.75)`:o.has("shadow-light")&&(s["text-shadow"]=`${1.25*n}px ${1.25*n}px ${4.5*n}px rgba(0, 0, 0, 0.5)`),s}),Et={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const t in Et)Object.freeze(Et[t]);var St=Object.freeze(Et);const Ht=Object.create(null);for(const t in St)Object.hasOwn(St,t)&&(Ht[St[t]]=t);const Ot={to:{},get:{}};function Ct(t,e,i){return Math.min(Math.max(e,t),i)}function Mt(t){const e=Math.round(t).toString(16).toUpperCase();return e.length<2?"0"+e:e}Ot.get=function(t){let e,i;switch(t.slice(0,3).toLowerCase()){case"hsl":e=Ot.get.hsl(t),i="hsl";break;case"hwb":e=Ot.get.hwb(t),i="hwb";break;default:e=Ot.get.rgb(t),i="rgb"}return e?{model:i,value:e}:null},Ot.get.rgb=function(t){if(!t)return null;let e,i,n,s=[0,0,0,1];if(e=t.match(/^#([a-f\d]{6})([a-f\d]{2})?$/i)){for(n=e[2],e=e[1],i=0;i<3;i++){const t=2*i;s[i]=Number.parseInt(e.slice(t,t+2),16)}n&&(s[3]=Number.parseInt(n,16)/255)}else if(e=t.match(/^#([a-f\d]{3,4})$/i)){for(e=e[1],n=e[3],i=0;i<3;i++)s[i]=Number.parseInt(e[i]+e[i],16);n&&(s[3]=Number.parseInt(n+n,16)/255)}else if(e=t.match(/^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i)){for(i=0;i<3;i++)s[i]=Number.parseFloat(e[i+1]);e[4]&&(s[3]=e[5]?.01*Number.parseFloat(e[4]):Number.parseFloat(e[4]))}else{if(!(e=t.match(/^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i)))return(e=t.toLowerCase().match(/^(\w+)$/))?"transparent"===e[1]?[0,0,0,0]:Object.hasOwn(St,e[1])?(s=St[e[1]].slice(),s[3]=1,s):null:null;for(i=0;i<3;i++)s[i]=Math.round(2.55*Number.parseFloat(e[i+1]));e[4]&&(s[3]=e[5]?.01*Number.parseFloat(e[4]):Number.parseFloat(e[4]))}for(i=0;i<3;i++)s[i]=Ct(s[i],0,255);return s[3]=Ct(s[3],0,1),s},Ot.get.hsl=function(t){if(!t)return null;const e=t.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);if(e){const t=Number.parseFloat(e[4]);return[(Number.parseFloat(e[1])%360+360)%360,Ct(Number.parseFloat(e[2]),0,100),Ct(Number.parseFloat(e[3]),0,100),Ct(Number.isNaN(t)?1:t,0,1)]}return null},Ot.get.hwb=function(t){if(!t)return null;const e=t.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);if(e){const t=Number.parseFloat(e[4]);return[(Number.parseFloat(e[1])%360+360)%360,Ct(Number.parseFloat(e[2]),0,100),Ct(Number.parseFloat(e[3]),0,100),Ct(Number.isNaN(t)?1:t,0,1)]}return null},Ot.to.hex=function(...t){return"#"+Mt(t[0])+Mt(t[1])+Mt(t[2])+(t[3]<1?Mt(Math.round(255*t[3])):"")},Ot.to.rgb=function(...t){return t.length<4||1===t[3]?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"},Ot.to.rgb.percent=function(...t){const e=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),n=Math.round(t[2]/255*100);return t.length<4||1===t[3]?"rgb("+e+"%, "+i+"%, "+n+"%)":"rgba("+e+"%, "+i+"%, "+n+"%, "+t[3]+")"},Ot.to.hsl=function(...t){return t.length<4||1===t[3]?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"},Ot.to.hwb=function(...t){let e="";return t.length>=4&&1!==t[3]&&(e=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+e+")"},Ot.to.keyword=function(...t){return Ht[t.slice(0,3)]};const Nt=["more-info","toggle","navigate","url","perform-action","assist","none"],Tt=["square","lite-rounded","medium-rounded","rounded","circular"],jt=["alpha-asc","alpha-desc","value-asc","value-desc","none"],zt=["total020","total030","total040","total050","total060","total070","total080","total090","total100","each002","each004","each006","each008","each010","each012","each014","each016","each018","each020"],Vt=["ellipsis","clip","tooltip","tooltip-segment","fade"],Rt=["left","right"],Pt=["circle","icon","icon-fallback","none","name","state","percentage"],Ut=["left","right","none","top-left","top-middle","top-center","top-right","bottom-left","bottom-middle","bottom-center","bottom-right"],Dt=[...Ut,"in-title-right","in-title-left"],It=[...Ut,"center"],Wt=["left","right","center","space-around","space-between","space-evenly","new-line","new-line-left","new-line-right"],Ft=["name","state","last_changed","last_updated","percentage","icon"],qt=["name","state","percentage","icon"],Gt=["5minute","hour","day","week","month"],Bt=["change","last_reset","max","mean","min","state","sum"];var Zt,Kt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Zt||(Zt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Kt||(Kt={}));const Yt="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",Jt="M7,10L12,15L17,10H7Z",Xt="M7,15L12,10L17,15H7Z",Qt="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z",te="M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z",ee="M1.39,18.36L3.16,16.6L4.58,18L5.64,16.95L4.22,15.54L5.64,14.12L8.11,16.6L9.17,15.54L6.7,13.06L8.11,11.65L9.53,13.06L10.59,12L9.17,10.59L10.59,9.17L13.06,11.65L14.12,10.59L11.65,8.11L13.06,6.7L14.47,8.11L15.54,7.05L14.12,5.64L15.54,4.22L18,6.7L19.07,5.64L16.6,3.16L18.36,1.39L22.61,5.64L5.64,22.61L1.39,18.36Z",ie="M4,9H20V11H4V9M4,13H14V15H4V13Z",ne="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",se="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",oe="M11 15H6L13 1V9H18L11 23V15Z",re="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 7H9V9H7V7M7 11H9V13H7V11M7 15H9V17H7V15M17 17H11V15H17V17M17 13H11V11H17V13M17 9H11V7H17V9Z",ae="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z",le="M17.45,15.18L22,7.31V19L22,21H2V3H4V15.54L9.5,6L16,9.78L20.24,2.45L21.97,3.45L16.74,12.5L10.23,8.75L4.31,19H6.57L10.96,11.44L17.45,15.18Z",ce="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M14,6A1,1 0 0,0 13,7A1,1 0 0,0 14,8A1,1 0 0,0 15,7A1,1 0 0,0 14,6M17.09,8.94C16.96,8.94 16.84,8.97 16.7,9L13.5,10.32L13.23,10.43C12.67,10 11.91,9.88 11.25,10.15C10.23,10.56 9.73,11.73 10.15,12.75C10.56,13.77 11.73,14.27 12.75,13.85C13.41,13.59 13.88,13 14,12.28L14.23,12.18L17.45,10.88L17.47,10.87C18,10.66 18.23,10.08 18.03,9.56C17.87,9.18 17.5,8.93 17.09,8.94M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9Z",de="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",he=["access_token","auto_update","available_modes","away_mode","changed_by","code_format","color_modes","current_activity","device_class","editable","effect_list","effect","entity_picture","event_type","event_types","fan_mode","fan_modes","fan_speed_list","forecast","friendly_name","frontend_stream_type","has_date","has_time","hs_color","hvac_mode","hvac_modes","icon","media_album_name","media_artist","media_content_type","media_position_updated_at","media_title","next_dawn","next_dusk","next_midnight","next_noon","next_rising","next_setting","operation_list","operation_mode","options","preset_mode","preset_modes","release_notes","release_summary","release_url","restored","rgb_color","rgbw_color","shuffle","sound_mode_list","sound_mode","source_list","source_type","source","state_class","supported_features","swing_mode","swing_mode","swing_modes","title","token","unit_of_measurement","xy_color"],ue=["#4269d0","#f4bd4a","#ff725c","#6cc5b0","#a463f2","#ff8ab7","#9c6b4e","#97bbf5","#01ab63","#9498a0","#094bad","#c99000","#d84f3e","#49a28f","#048732","#d96895","#8043ce","#7599d1","#7a4c31","#74787f","#6989f4","#ffd444","#ff957c","#8fe9d3","#62cc71","#ffadda","#c884ff","#badeff","#bf8b6d","#b6bac2","#927acc","#97ee3f","#bf3947","#9f5b00","#f48758","#8caed6","#f2b94f","#eff26e","#e43872","#d9b100","#9d7a00","#698cff","#d9d9d9","#00d27e","#d06800","#009f82","#c49200","#cbe8ff","#fecddf","#c27eb6","#8cd2ce","#c4b8d9","#f883b0","#a49100","#f48800","#27d0df","#a04a9b"],_e={attribute:void 0,title:void 0,subtitle:void 0,header:void 0,title_position:"top-left",title_text_size:2,title_text_style:void 0,title_text_color:"var(--primary-text-color)",subtitle_text_color:"var(--secondary-text-color)",min:0,precision:0,unit:void 0,cutoff:0,offset:void 0,sorting:void 0,position:"left",text_size:2.5,text_style:void 0,text_color:"var(--primary-text-color)",line_height:3,corner:"square",state_content_separator:" ⸱ ",line_separator:!1,line_separator_width:"total050",line_separator_color:"var(--card-background-color)",color:"var(--primary-color)",color_bg:"var(--secondary-background-color)",line_text_position:"left",line_text_size:1,line_text_style:void 0,line_text_color:"var(--primary-text-color)",line_text_overflow:"tooltip",overflow_direction:"right",tap_action:void 0,hold_action:void 0,double_tap_action:void 0,legend_hide:!1,legend_all:!1,legend_position:"bottom-center",legend_alignment:"center",legend_indicator:"icon-fallback",legend_text_size:1,legend_text_style:void 0,legend_text_color:"var(--secondary-text-color)",show_delta:!1,delta_position:"bottom-center",untracked_legend_label:void 0,untracked_legend_icon:void 0,untracked_legend_indicator:"icon-fallback",untracked_state_content:["name"],untracked_line_state_content:void 0,suppress_warnings:!1,statistics:!1,statistics_day_offset:1,statistics_period:"hour",statistics_function:"mean",severity:!1,severity_blend:!1},ge={attribute:void 0,name:void 0,icon:void 0,color:"auto",cutoff:void 0,unit:void 0,multiplier:1,precision:void 0,state_content:["name"],line_state_content:void 0,legend_indicator:void 0,legend_text_color:void 0,line_text_color:void 0,tap_action:void 0,hold_action:void 0,double_tap_action:void 0},fe=t=>{var e,i,n,s,o,r,a,l,c,d,h,u,_,g,f,p,m,v,b,y,x,w,$,A,k,L,E,S,H,O,C,M,N,T,j,z,V,R,P,U,D,I,W,F;return Object.assign(Object.assign({},t),{attribute:null!==(e=t.attribute)&&void 0!==e?e:_e.attribute,title:null!==(i=t.title)&&void 0!==i?i:_e.title,subtitle:null!==(n=t.subtitle)&&void 0!==n?n:_e.subtitle,header:null!==(s=t.header)&&void 0!==s?s:_e.header,title_position:be(t.title_position,Ut,_e.title_position),title_text_size:null!==(o=t.title_text_size)&&void 0!==o?o:_e.title_text_size,title_text_style:null!==(r=t.title_text_style)&&void 0!==r?r:_e.title_text_style,title_text_color:xe(null!==(a=t.title_text_color)&&void 0!==a?a:t.title_text_colour,_e.title_text_color),subtitle_text_color:xe(null!==(l=t.subtitle_text_color)&&void 0!==l?l:t.subtitle_text_colour,_e.subtitle_text_color),min:null!==(c=t.min)&&void 0!==c?c:_e.min,max:null!==(d=t.max)&&void 0!==d?d:t.entity,precision:null!==(h=t.precision)&&void 0!==h?h:_e.precision,unit:null!==(u=t.unit)&&void 0!==u?u:_e.unit,cutoff:null!==(_=t.cutoff)&&void 0!==_?_:_e.cutoff,offset:t.offset?ve(t.offset):_e.offset,sorting:be(t.sorting,jt,_e.sorting),position:be(t.position,Dt,_e.position),text_size:null!==(g=t.text_size)&&void 0!==g?g:_e.text_size,text_style:null!==(f=t.text_style)&&void 0!==f?f:_e.text_style,text_color:xe(null!==(p=t.text_color)&&void 0!==p?p:t.text_colour,_e.text_color),line_height:null!==(m=t.line_height)&&void 0!==m?m:_e.line_height,corner:be(t.corner,Tt,_e.corner),state_content_separator:null!==(v=t.state_content_separator)&&void 0!==v?v:_e.state_content_separator,line_separator:null!==(b=t.line_separator)&&void 0!==b?b:_e.line_separator,line_separator_width:be(t.line_separator_width,zt,_e.line_separator_width),line_separator_color:xe(null!==(y=t.line_separator_color)&&void 0!==y?y:t.line_separator_colour,_e.line_separator_color),color:xe(null!==(x=t.color)&&void 0!==x?x:t.colour,_e.color),color_bg:xe(null!==(w=t.color_bg)&&void 0!==w?w:t.colour_bg,_e.color_bg),line_text_position:be(t.line_text_position,It,_e.line_text_position),line_text_size:null!==($=t.line_text_size)&&void 0!==$?$:_e.line_text_size,line_text_style:null!==(A=t.line_text_style)&&void 0!==A?A:_e.line_text_style,line_text_color:xe(null!==(k=t.line_text_color)&&void 0!==k?k:t.line_text_colour,void 0),line_text_overflow:be(t.line_text_overflow,Vt,_e.line_text_overflow),overflow_direction:be(t.overflow_direction,Rt,_e.overflow_direction),tap_action:null!==(L=t.tap_action)&&void 0!==L?L:_e.tap_action,hold_action:null!==(E=t.hold_action)&&void 0!==E?E:_e.hold_action,double_tap_action:null!==(S=t.double_tap_action)&&void 0!==S?S:_e.double_tap_action,legend_hide:null!==(H=t.legend_hide)&&void 0!==H?H:_e.legend_hide,legend_all:null!==(O=t.legend_all)&&void 0!==O?O:_e.legend_all,legend_position:be(t.legend_position,Ut,_e.legend_position),legend_alignment:be(t.legend_alignment,Wt,_e.legend_alignment),legend_indicator:be(t.legend_indicator,Pt,_e.legend_indicator),legend_text_size:null!==(C=t.legend_text_size)&&void 0!==C?C:_e.legend_text_size,legend_text_style:null!==(M=t.legend_text_style)&&void 0!==M?M:_e.legend_text_style,legend_text_color:xe(null!==(N=t.legend_text_color)&&void 0!==N?N:t.legend_text_colour,_e.legend_text_color),show_delta:null!==(T=t.show_delta)&&void 0!==T?T:_e.show_delta,delta_position:be(t.delta_position,Ut,_e.delta_position),untracked_legend:!!(null!==(j=t.untracked_legend)&&void 0!==j?j:t.entities),untracked_legend_label:null!==(z=t.untracked_legend_label)&&void 0!==z?z:_e.untracked_legend_label,untracked_legend_icon:null!==(V=t.untracked_legend_icon)&&void 0!==V?V:_e.untracked_legend_icon,untracked_legend_indicator:be(t.untracked_legend_indicator,Pt,_e.untracked_legend_indicator),untracked_state_content:null!==(R=ye(t.untracked_state_content,qt))&&void 0!==R?R:_e.untracked_state_content,untracked_line_state_content:null!==(P=ye(t.untracked_line_state_content,qt))&&void 0!==P?P:_e.untracked_line_state_content,suppress_warnings:null!==(U=t.suppress_warnings)&&void 0!==U?U:_e.suppress_warnings,statistics:null!==(D=t.statistics)&&void 0!==D?D:_e.statistics,statistics_day_offset:null!==(I=t.statistics_day_offset)&&void 0!==I?I:_e.statistics_day_offset,statistics_period:be(t.statistics_period,Gt,_e.statistics_period),statistics_function:be(t.statistics_function,Bt,_e.statistics_function),severity:null!==(W=t.severity)&&void 0!==W?W:_e.severity,severity_levels:Array.isArray(t.severity_levels)?me(t.severity_levels):t.severity_levels,severity_blend:null!==(F=t.severity_blend)&&void 0!==F?F:_e.severity_blend,entities:Array.isArray(t.entities)?pe(t.entities):t.entities})},pe=t=>{var e,i,n,s,o,r,a,l,c,d,h,u,_,g,f;const p=new Set(t.map(t=>t.color).filter(Boolean)),m=[];for(const v of t){let t=null!==(e=v.color)&&void 0!==e?e:v.colour;t&&"auto"!==t||(t=ue.find(t=>!p.has(t)),p.add(t)),void 0!==v.entity&&null!==v.entity&&""!==v.entity&&"none"!==v.entity&&"null"!==v.entity&&"undefined"!==v.entity&&m.push(Object.assign(Object.assign({},v),{attribute:null!==(i=v.attribute)&&void 0!==i?i:ge.attribute,name:null!==(n=v.name)&&void 0!==n?n:ge.name,icon:null!==(s=v.icon)&&void 0!==s?s:ge.icon,color:xe(t,ge.color),cutoff:null!==(o=v.cutoff)&&void 0!==o?o:ge.cutoff,unit:null!==(r=v.unit)&&void 0!==r?r:ge.unit,multiplier:null!==(a=v.multiplier)&&void 0!==a?a:ge.multiplier,precision:null!==(l=v.precision)&&void 0!==l?l:ge.precision,state_content:null!==(c=ye(v.state_content,Ft))&&void 0!==c?c:ge.state_content,line_state_content:null!==(d=ye(v.line_state_content,Ft))&&void 0!==d?d:ge.line_state_content,legend_indicator:be(v.legend_indicator,Pt,ge.legend_indicator),legend_text_color:xe(null!==(h=v.legend_text_color)&&void 0!==h?h:v.legend_text_colour,ge.legend_text_color),line_text_color:xe(null!==(u=v.line_text_color)&&void 0!==u?u:v.line_text_colour,ge.line_text_color),tap_action:null!==(_=v.tap_action)&&void 0!==_?_:ge.tap_action,hold_action:null!==(g=v.hold_action)&&void 0!==g?g:ge.hold_action,double_tap_action:null!==(f=v.double_tap_action)&&void 0!==f?f:ge.double_tap_action}))}return m},me=t=>{var e,i;const n=new Set(t.map(t=>t.color).filter(Boolean)),s=[];for(const o of t){let t=null!==(e=o.color)&&void 0!==e?e:o.colour;t&&"auto"!==t||(t=ue.find(t=>!n.has(t)),n.add(t)),s.push({from:null!==(i=o.from)&&void 0!==i?i:0,color:xe(t,"var(--primary-color)")})}return s.sort((t,e)=>e.from-t.from),s};function ve(t){if("number"==typeof t)return;const e=t.match(/^(\d+)([hmsd])$/i);if(!e)return;const i=parseInt(e[1]);switch(e[2].toLowerCase()){case"s":return 1e3*i;case"m":return 60*i*1e3;case"h":return 60*i*60*1e3;case"d":return 24*i*60*60*1e3;default:return}}function be(t,e,i){return t&&e.includes(t)?t:i}function ye(t,e){if(Array.isArray(t))return t.filter(t=>e.includes(t))}function xe(t,e){return t?"auto"===t?e:Array.isArray(t)?`rgba(${t})`:t:e}function we(t){var e;if(!t)return[0,0,0,0];if(Array.isArray(t))return 3===t.length?[...t,1]:t;if(t.startsWith("var(")){const e=t.slice(4,-1).trim();t=getComputedStyle(document.documentElement).getPropertyValue(e).trim()}return null!==(e=Ot.get.rgb(t))&&void 0!==e?e:[0,0,0,0]}function $e(t){if(!t)return;const[e,i,n]=t,s=t=>{const e=Math.max(0,Math.min(255,Math.round(t))).toString(16);return 1===e.length?"0"+e:e};return`#${s(e)}${s(i)}${s(n)}`}function Ae(t,e){return t||function(t){if(!t)return;const[e,i,n,s]=we(t);return(299*e+587*i+114*n)/1e3>125?"black":"white"}(e)||_e.line_text_color}function ke(t,e,i){var n,s;if(t.from===e.from)return t.color;const o=e.from-t.from,r=i-t.from,a=Math.max(0,Math.min(1,r/o)),l=null!==(n=we(t.color))&&void 0!==n?n:[0,0,0,0],c=null!==(s=we(e.color))&&void 0!==s?s:[0,0,0,0],d=l[0]+(c[0]-l[0])*a,h=l[1]+(c[1]-l[1])*a,u=l[2]+(c[2]-l[2])*a,_=l[3]+(c[3]-l[3])*a;return Ot.to.rgb(Math.round(d),Math.round(h),Math.round(u),_)}function Le(t){return void 0!==t&&"none"!==t.action}const Ee=(t,e,i,n)=>{n=n||{};const s=new CustomEvent(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed,detail:null==i?{}:i});return t.dispatchEvent(s),s},Se=(t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let i,n;if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;0!==i--;)if(!Se(t[i],e[i]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;for(i of t.entries())if(!Se(i[1],e.get(i[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!==e.length)return!1;for(i=n;0!==i--;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const s=Object.keys(t);if(n=s.length,n!==Object.keys(e).length)return!1;for(i=n;0!==i--;)if(!Object.prototype.hasOwnProperty.call(e,s[i]))return!1;for(i=n;0!==i--;){const n=s[i];if(!Se(t[n],e[n]))return!1}return!0}return t!=t&&e!=e},He="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Oe extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.cancelled=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"fixed",width:He?"100px":"50px",height:He?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0)},{passive:!0})})}bind(t,e={}){t.actionHandler&&Se(e,t.actionHandler.options)||(t.actionHandler&&(t.removeEventListener("touchstart",t.actionHandler.start),t.removeEventListener("touchend",t.actionHandler.end),t.removeEventListener("touchcancel",t.actionHandler.end),t.removeEventListener("mousedown",t.actionHandler.start),t.removeEventListener("click",t.actionHandler.end),t.removeEventListener("keydown",t.actionHandler.handleKeyDown)),t.actionHandler={options:e},e.disabled||(t.actionHandler.start=t=>{if(this.cancelled=!1,"mousedown"===t.type&&2===t.button)return;let i,n;t.touches?(i=t.touches[0].clientX,n=t.touches[0].clientY):(i=t.clientX,n=t.clientY),e.hasHold&&(this.held=!1,this.timer=window.setTimeout(()=>{this.startAnimation(i,n),this.held=!0},this.holdTime))},t.actionHandler.end=t=>{if(["touchend","touchcancel"].includes(t.type)&&this.cancelled)return;const i=t.target;t.cancelable&&t.preventDefault(),e.hasHold&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0),e.hasHold&&this.held?Ee(i,"action",{action:"hold"}):e.hasDoubleClick?"click"===t.type&&t.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,Ee(i,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Ee(i,"action",{action:"double_tap"})):Ee(i,"action",{action:"tap"})},t.actionHandler.handleKeyDown=t=>{["Enter"," "].includes(t.key)&&t.currentTarget.actionHandler.end(t)},t.addEventListener("touchstart",t.actionHandler.start,{passive:!0}),t.addEventListener("touchend",t.actionHandler.end),t.addEventListener("touchcancel",t.actionHandler.end),t.addEventListener("mousedown",t.actionHandler.start,{passive:!0}),t.addEventListener("click",t.actionHandler.end),t.addEventListener("keydown",t.actionHandler.handleKeyDown)))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.startPress(),this.ripple.unbounded=!0}stopAnimation(){this.ripple.endPress(),this.ripple.disabled=!0,this.style.display="none"}}customElements.get("elg-action-handler")||customElements.define("elg-action-handler",Oe);const Ce=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("elg-action-handler"))return t.querySelector("elg-action-handler");const e=document.createElement("elg-action-handler");return t.appendChild(e),e})();i&&i.bind(t,e)},Me=_t(class extends gt{update(t,[e]){return Ce(t.element,e),P}render(t){}}),Ne=(t,e,i,n,s,o)=>{const r=[];(null==s?void 0:s.length)&&r.push(t=>{return s.includes((e=t).substring(0,e.indexOf(".")));var e}),o&&r.push(e=>t.states[e]&&o(t.states[e]));const a=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const n=[];for(let s=0;s<t.length&&n.length<i;s++){let i=!0;for(const n of e)if(!n(t[s])){i=!1;break}i&&n.push(t[s])}return n})(i,r,e);if(a.length<e&&n.length){const i=Ne(t,e-a.length,n,[],s,o);a.push(...i)}return a},Te=t=>/{%|{{/.test(t);console.info("%c ENERGY LINE GAUGE %c 2.2.9 ","font-weight: 700; color: #000000; background: #03a9f4;","font-weight: 700; color: #000000; background: #ffa600;"),window.customCards.push({type:"energy-line-gauge",name:"Energy Line Gauge",description: ''
      <ha-card
        class="line-gauge-card"
        style=${mt(e)}
        tabindex="0"
        .header=${this._getTemplateValue("header",this._config.header)}
        .label=${this._config.label}
        @action=${this._handleAction}
        .actionHandler=${Me({hasHold:Le(this._config.hold_action),hasDoubleClick:Le(this._config.double_tap_action)})}
      >
        ${this._createInnerHtml()}
      </ha-card>
    `}_createLegendIndicator(t){var e,i,n,s,o,r,a,l,c,d;const h=t?t.color:this._config.color,u=null!==(i=null!==(e=t?t.legend_indicator:this._config.untracked_legend_indicator)&&void 0!==e?e:this._config.legend_indicator)&&void 0!==i?i:"circle",_=1.1*(null!==(s=null!==(n=this._config.legend_text_size)&&void 0!==n?n:this._config.text_size)&&void 0!==s?s:1);if("none"===u)return R``;const g=`color: ${h}; font-size: ${_}rem;`;switch(u){case"state":return R`<div class="indicator-state" style="${g}">${t?this._formatValueDevice(t):this._formatValueMain(null===(o=this._untrackedObject)||void 0===o?void 0:o.state)}</div>`;case"percentage":const e=t?null!==(a=null===(r=this._entitiesObject[t.entity])||void 0===r?void 0:r.percentage)&&void 0!==a?a:0:null!==(c=null===(l=this._untrackedObject)||void 0===l?void 0:l.percentage)&&void 0!==c?c:0;return R`<div class="indicator-state" style="${g}">${(100*e).toFixed(0)}%</div>`;case"name":return R`<div class="indicator-state" style="${g}">${t?this._entityName(t):null!==(d=this._config.untracked_legend_label)&&void 0!==d?d:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_detail_graph.untracked_consumption")}</div>`;case"icon":case"icon-fallback":if(t){if(t.icon)return this._createIcon(t,_,h)}else if(this._config.untracked_legend_icon)return this._createIcon(void 0,_,h);if("icon"===u)return R``;default:return R`<div class="bullet" style="${`\n        background: color-mix(in srgb, ${h}, transparent 50%);\n        border-color: ${h};\n        width: ${_}rem;\n        height: ${_}rem;\n      `}"></div>`}}_createLegendItem(t,e){if(!t&&!this._config.untracked_legend)return R``;const i=Le(t?t.hold_action:this._config.hold_action),n=Le(t?t.double_tap_action:this._config.double_tap_action),s=t?this._entityLabel(t,!1):this._untrackedLabel(!1);return R`
      <li
        @action=${e=>this._handleAction(e,t)}
        .actionHandler=${Me({hasHold:i,hasDoubleClick:n})}
        title="${null==s?void 0:s.text}"
        id="${t?`legend-${t.entity.replace(".","-")}`:"legend-untracked"}"
      >
        ${this._createLegendIndicator(t)}
        <div class="label" style="${mt(e)}">${null==s?void 0:s.template}</div>
      </li>`}_createLegend(){var t,e,i;if(!this._config.entities||0===this._config.entities.length||this._config.legend_hide)return R``;const n=null!==(e=null!==(t=this._config.legend_text_size)&&void 0!==t?t:this._config.text_size)&&void 0!==e?e:1,s=this._config.legend_text_color,o=Lt(this._config.legend_text_style,n,s);return R`
    <div class="chart-legend legend-alignment-${null!==(i=this._config.legend_alignment)&&void 0!==i?i:"center"}">
      <ul>
        ${this._config.entities.map(t=>{var e;if(!this._entitiesObject[t.entity])return R``;if(this._entitiesObject[t.entity].width<=0&&!this._config.legend_all)return R``;const i=Object.assign({color:null!==(e=t.legend_text_color)&&void 0!==e?e:s},o);return this._createLegendItem(t,i)})}
        ${this._createLegendItem(void 0,o)}
      </ul>
    </div>`}_createDelta(){var t,e,i;return R`
      <div class="gauge-delta">
        <div class="gauge-delta-item">State: <span>${this._formatValueMain(null===(t=this._mainObject)||void 0===t?void 0:t.state)}</span></div>
        <div class="gauge-delta-item">Sum: <span>${this._formatValueMain(null===(e=this._entitiesTotalObject)||void 0===e?void 0:e.state)}</span></div>
        <div class="gauge-delta-item delta">Delta: <span>${this._formatValueMain(null===(i=this._untrackedObject)||void 0===i?void 0:i.state)}</span></div>
      </div>`}_createIcon(t,e,i){const n=t?this._entityIcon(t):this._config.untracked_legend_icon;return n?R`<ha-icon 
      style="
        ${i?`color: ${i};`:""}
        ${e?`--mdc-icon-size: ${1.25*e}rem;`:""}
      "
      icon="${n}"
    ></ha-icon>`:R``}_createDeviceLine(t,e,i){var n,s;const o=Le(t?t.hold_action:this._config.hold_action),r=Le(t?t.double_tap_action:this._config.double_tap_action),a=t?t.color:this._config.color,l=Ae(t&&t.line_text_color?t.line_text_color:this._config.line_text_color,a),c={background:t?t.color:void 0,width:`${t?null===(n=this._entitiesObject[t.entity])||void 0===n?void 0:n.width:null===(s=this._untrackedObject)||void 0===s?void 0:s.width}%`},d=Object.assign(Object.assign({},i),Lt(this._config.line_text_style,this._config.line_text_size,l)),h=t?this._entityLabel(t,!0):this._untrackedLabel(!0);return R`
      <div
        class="${t?"device-line":"untracked-line"}"
        id="${t?`line-${t.entity.replace(".","-")}`:""}"
        style="${mt(c)}"
        title="${null==h?void 0:h.text}"
        
        @action=${e=>this._handleAction(e,t)}
        .actionHandler=${Me({hasHold:o,hasDoubleClick:r})}
        >
        ${"none"!==e?R`
          <div class="device-line-label line-text-position-${e}" style="${mt(d)}">
            ${null==h?void 0:h.template}
          </div>
        `:R``}
      </div>`}_createLines(){var t,e,i,n;if(!this._config.entities)return R``;const s=null!==(t=this._config.line_text_position)&&void 0!==t?t:"left",o=null!==(e=this._config.line_text_overflow)&&void 0!==e?e:"tooltip",r=null!==(i=this._config.overflow_direction)&&void 0!==i?i:"right",a=kt(o,r),l=this._config.line_separator&&0!==this._lineSeparatorWidth?R`
        <div class="device-line-separator" 
          style="
            background: ${this._config.line_separator_color}; 
            width: ${this._lineSeparatorWidth}%;
        "></div>`:R``,c=[],d=null!==(n=this._config.entities.filter(t=>this._entitiesObject[t.entity]&&this._entitiesObject[t.entity].width>0))&&void 0!==n?n:[];return d.forEach((t,e)=>{e>0&&c.push(l),c.push(this._createDeviceLine(t,s,a))}),this._untrackedObject.width>0&&d.length>0&&c.push(l),c.push(this._createDeviceLine(void 0,s,a)),R`
      <div class="device-line-container">
        ${c}
      </div>
    `}_createInnerHtml(){var t,e,i,n,s,o,r,a,l;const c=null!==(t=this._config.title_position)&&void 0!==t?t:"top-left",d=null!==(e=this._config.legend_position)&&void 0!==e?e:"bottom-center",h=null!==(i=this._config.delta_position)&&void 0!==i?i:"bottom-center";let u=null!==(n=this._config.position)&&void 0!==n?n:"left";const _=null!==(s=this._config.title_text_size)&&void 0!==s?s:2,g=null!==(o=this._config.text_size)&&void 0!==o?o:2.5,f=!(!this._config.title&&!this._config.subtitle||"none"===c),p=this._config.entities&&this._config.entities.length>0&&"none"!==d,m=!(!this._config.show_delta||"none"===h);let v=!(!this._config.entity||"none"===u);const b=this._config.title_text_color,y=this._config.subtitle_text_color,x=this._config.text_color,w=null!==(r=this._config.corner)&&void 0!==r?r:"square",$=Lt(this._config.title_text_style,_,b),A=Lt(this._config.subtitle_text_style,_/2,y),k=Object.assign({height:`${g}rem`},Lt(this._config.text_style,g,x)),L=this._getTemplateValue("title",this._config.title),E=this._getTemplateValue("subtitle",this._config.subtitle);["in-title-right","in-title-left"].includes(u)&&(f?v=!1:u="left");const S=R`
      <div class="gauge-value" style="${mt(k)}">
        ${null===(a=this._mainObject)||void 0===a?void 0:a.state.toFixed(this._config.precision)}
        ${this._config.unit?R`<span class="unit" style="font-size: ${g/2}rem;">${this._getTemplateValue("unit",this._config.unit)}</span>`:""}
      </div>
    `,H=R`
      <div class="title-value-position-${"in-title-left"==u?"left":"in-title-right"==u?"right":"none"}">
        ${["in-title-right","in-title-left"].includes(u)?S:""}
        <div>
          ${this._config.title?R`<div class="gauge-title" style="${mt($)};">${L}</div>`:""}
          ${this._config.subtitle?R`<div class="gauge-subtitle" style="${mt(A)}">${E}</div>`:""}
        </div>
      </div>  
    `;return R`
      <div class="gauge-position-frame position-${c}">
        ${f?H:""}
        <div class="gauge-position-frame position-${d}">
          ${p?this._createLegend():""}
          <div class="gauge-position-frame position-${h}">
            ${m?this._createDelta():""}
            <div class="gauge-position-frame position-${u}">
              ${v?S:""}
              <div class="gauge-line line-corner-${w}">
                <div class="main-line" style="width: ${null===(l=this._mainObject)||void 0===l?void 0:l.width}%;"></div>
                ${this._createLines()}
              </div>
            </div>
          </div>
        </div>
      </div>
      ${this._renderWarnings()}
    `}_invalidConfig(){if(!this.hass)throw new Error("Invalid configuration (no hass)");throw new Error(this.hass.localize("ui.panel.lovelace.editor.condition-editor.invalid_config_title"))}_entityNotFound(t){return this.hass.localize("ui.panel.lovelace.warning.entity_not_found",{entity:t||"[empty]"})}_entityUnavailable(t){var e;return this.hass.localize("ui.panel.lovelace.warning.entity_unavailable",{entity:`${null===(e=t.attributes)||void 0===e?void 0:e.friendly_name} (${t.entity_id})`})}_entityNotNumeric(t){var e;return this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric",{entity:`${null===(e=t.attributes)||void 0===e?void 0:e.friendly_name} (${t.entity_id})`})}_entityNoStatistics(t){return this.hass.localize("ui.components.statistics_charts.no_statistics_found")+`(${t}), change function / see docs`}_attributeNotFound(t,e){return this.hass.localize("ui.panel.lovelace.warning.attribute_not_found",{attribute:e||"[empty]",entity:t||"[empty]"})}_attributeNotNumeric(t,e){return this.hass.localize("ui.panel.lovelace.warning.attribute_not_numeric",{attribute:e||"[empty]",entity:t||"[empty]"})}_entityName(t){if(!t.name)return this._entitiesObject[t.entity].stateObject.attributes.friendly_name||t.entity.split(".")[1];if(Te(t.name)){const e=`entity_${this._config.entities.indexOf(t)}_name`;if(this._templateResults[e])return this._templateResults[e]}return t.name}_entityIcon(t){return t.icon?t.icon:this._entitiesObject[t.entity].stateObject.attributes.icon||""}_entityUnit(t){if(t.unit){const e=this._config.entities.indexOf(t);if(-1!==e){const i=`entity_${e}_unit`;if(this._templateResults[i])return this._templateResults[i];if(t.unit&&!Te(t.unit))return t.unit}}return this._entitiesObject[t.entity].stateObject.attributes.unit_of_measurement||""}_handleTooltipSegmentLogic(t){const e=[],i=[];for(const n of Array.from(t.childNodes)){if(n.nodeType!==Node.ELEMENT_NODE)continue;const t=n;t.classList.contains("label-part")?e.push(t):t.classList.contains("label-separator")&&i.push(t)}e.forEach(t=>t.style.display="inline"),i.forEach(t=>t.style.display="inline");const n=t.clientWidth;if(t.scrollWidth<=n+1)return;const s=Array.from({length:e.length},(t,e)=>e);"right"===this._config.overflow_direction&&s.reverse();for(const o of s){e[o].style.display="none";const s="right"===this._config.overflow_direction?o-1:o;if(i[s]&&(i[s].style.display="none"),t.scrollWidth<=n+1)return}}_checkLabelOverflow(t){if(["visible",""].includes(t.style.visibility)||(t.style.visibility="visible"),"tooltip-segment"===this._config.line_text_overflow)this._handleTooltipSegmentLogic(t);else if("tooltip"===this._config.line_text_overflow){const e=3;t.clientWidth>0&&t.scrollWidth>t.clientWidth+e&&(t.style.visibility="hidden")}}_checkAllLabelsOverflow(){this.shadowRoot&&this.shadowRoot.querySelectorAll(".device-line-label").forEach(t=>{this._checkLabelOverflow(t)})}_resetAllLabelsToVisible(){this.shadowRoot&&this.shadowRoot.querySelectorAll(".device-line-label").forEach(t=>{"visible"!==t.style.visibility&&(t.style.visibility="visible"),t.querySelectorAll(".label-part, .label-separator").forEach(t=>{"inline"!==t.style.display&&(t.style.display="inline")});const e=t.closest(".device-line, .untracked-line");e?e.removeAttribute("title"):t.removeAttribute("title")})}_renderLabelInternal(t,e,i,n){var s,o,r;if(!(null==t?void 0:t.length))return e?void 0:{template:n.defaultLabel,text:n.defaultLabel};const a="left"===this._config.overflow_direction&&["clip","fade","ellipsis"].includes(null!==(s=this._config.line_text_overflow)&&void 0!==s?s:"")?[...t].reverse():t,l=[],c=[];for(let t=0;t<a.length;t++){const{template:s,text:r}=i.call(this,a[t],n,e);void 0!==s&&(l.length>0&&l.push(R`<span class="label-separator">${null!==(o=this._config.state_content_separator)&&void 0!==o?o:""}</span>`),l.push(R`<span class="label-part">${s}</span>`)),void 0!==r&&""!==r.trim()&&c.push(r)}return 0===l.length&&0===c.length?e?void 0:{template:n.defaultLabel,text:n.defaultLabel}:{template:R`${l}`,text:c.join(null!==(r=this._config.state_content_separator)&&void 0!==r?r:"")}}_entityPartRenderer(t,e,i){var n,s,o;let r,a;const l=e.device,c=this._entitiesObject[l.entity].stateObject,d=i?null!==(n=this._config.line_text_size)&&void 0!==n?n:1:null!==(o=null!==(s=this._config.legend_text_size)&&void 0!==s?s:this._config.text_size)&&void 0!==o?o:1,h=t=>{const e=new Date(t);return{template:R`<ha-relative-time .hass=${this.hass} .datetime=${t}></ha-relative-time>`,text:`${e.toLocaleTimeString()} ${e.toLocaleDateString()}`}};switch(t){case"name":a=e.defaultLabel,r=R`${a}`;break;case"state":a=this._formatValueDevice(l),r=R`${a}`;break;case"last_changed":({template:r,text:a}=h(c.last_changed));break;case"last_updated":({template:r,text:a}=h(c.last_updated));break;case"percentage":a=`${(100*this._entitiesObject[l.entity].percentage).toFixed(0)}%`,r=R`${a}`;break;case"icon":r=this._createIcon(l,d),a="";break;default:a="",r=R``}return{template:r,text:a}}_entityLabel(t,e=!1){const i=e?t.line_state_content:t.state_content,n=this._entityName(t);return this._renderLabelInternal(i,e,this._entityPartRenderer,{device:t,defaultLabel:n})}_untrackedPartRenderer(t,e,i){var n,s,o,r;let a,l;const c=i?null!==(n=this._config.line_text_size)&&void 0!==n?n:1:null!==(o=null!==(s=this._config.legend_text_size)&&void 0!==s?s:this._config.text_size)&&void 0!==o?o:1;switch(t){case"name":l=e.defaultLabel,a=R`${l}`;break;case"state":l=this._formatValueMain(null===(r=this._untrackedObject)||void 0===r?void 0:r.state),a=R`${l}`;break;case"percentage":l=`${(100*this._untrackedObject.percentage).toFixed(0)}%`,a=R`${l}`;break;case"icon":a=this._createIcon(void 0,c),l="";break;default:l="",a=R``}return{template:a,text:l}}_untrackedLabel(t=!1){const e=t?this._config.untracked_line_state_content:this._config.untracked_state_content,i=this._getTemplateValue("untracked_legend_label",this._config.untracked_legend_label),n=""!=i?i:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_detail_graph.untracked_consumption");return this._renderLabelInternal(e,t,this._untrackedPartRenderer,{defaultLabel:n})}_formatValue(t,e,i){return t||0===t?`${t.toFixed(null!=e?e:0)}${i?` ${i}`:""}`:""}_formatValueMain(t){return this._formatValue(t,this._config.precision,this._getTemplateValue("unit",this._config.unit))}_formatValueDevice(t){var e,i;const n=this._entitiesObject[t.entity].state,s=null!==(e=t.precision)&&void 0!==e?e:this._config.precision,o=null!==(i=this._entityUnit(t))&&void 0!==i?i:this._config.unit;return this._formatValue(n,s,o)}_validate(t){const e=this._validateEntityState(t);return!e||(this._addWarning(e,t),!1)}_validateEntityState(t){if(!t)return this._entityNotFound(t);const e=this.hass.states[t];return e?"unavailable"===e.state||"unknown"===e.state?this._entityUnavailable(e):isNaN(Number(e.state))?this._entityNotNumeric(e):void 0:this._entityNotFound(t)}_renderWarnings(){if(this._config.suppress_warnings)return R``;if(0===this._warnings.length)return R``;const t=[];for(const e of this._warnings){if(e.entity_id){const i={entity:e.entity_id,tap_action:{action:"more-info"},hold_action:{action:"more-info"},double_tap_action:{action:"more-info"}};t.push(R`
          <hui-warning @action=${t=>this._handleAction(t,i)}>
            ${e.message}
          </hui-warning>`);continue}t.push(R`<hui-warning>${e.message}</hui-warning>`)}return R`<div class="warnings">${t.map(t=>t)}</div>`}_addWarning(t,e){const i={message:t,entity_id:e};this._warnings.includes(i)||this._warnings.push(i)}_calculateTotalSeparatorWidth(t,e){const i=t.search(/\d/);if(-1===i)return console.error(`ELG: Invalid config: ${t}.`),0;const n=t.substring(0,i),s=parseInt(t.substring(i),10)/10;if(isNaN(s))return console.error(`ELG: Invalid value parsed from: ${t}`),0;switch(n){case"total":return s;case"each":return e*s;default:return 5}}_calculateSeparatorWidth(t){var e;if(!this._config.line_separator)return;if(t<=0)return;const i=this._untrackedObject.width>0?t:Math.max(0,t-1),n=this._calculateTotalSeparatorWidth(null!==(e=this._config.line_separator_width)&&void 0!==e?e:"total050",i),s=1-.01*n;this._lineSeparatorWidth=n/i;for(const t in this._entitiesObject)0!=this._entitiesObject[t].width&&(this._entitiesObject[t].width*=s);this._untrackedObject.width*=s}_calculate(){var t,e,i,n,s;this._entitiesObject={},this._warnings=[],this._config.offset&&this._getOffsetHistory(),this._config.statistics&&this._getStatisticsHistory();const o=this._calcStateMain(),r=this._getMax(o),a=this._getMin(),l=Math.min(a,r),c=Math.max(o,Math.max(a,r)),d=c-l||1,h=Math.min(Math.max(o,l),c),u=(h-l)/d*100,_=h/c;this._mainObject={state:o,width:u,percentage:_,stateObject:this.hass.states[this._config.entity]};let g=0,f=0,p=0,m=0;for(const r of null!==(t=this._config.entities)&&void 0!==t?t:[]){if(!this._validate(r.entity))continue;const t=this.hass.states[r.entity],a=this._calcState(t,r.multiplier),h=null!==(i=null!==(e=r.cutoff)&&void 0!==e?e:this._config.cutoff)&&void 0!==i?i:0,u=null!==(n=a/o)&&void 0!==n?n:0,_=Math.min(Math.max(a,l),c),v=a<=h?0:null!==(s=(_-l)/d*100)&&void 0!==s?s:0;g+=a,f+=u,p+=v,v>0&&(m+=1),this._entitiesObject[r.entity]={state:a,width:v,percentage:u,stateObject:t}}this._entitiesTotalObject={state:g,width:p,percentage:f},this._untrackedObject={state:o-g,width:u-p,percentage:(o-g)/o},this._calculateSeparatorWidth(m)}_calcStateMain(){if(this._config.offset)return this._getOffsetState(this._config.entity);if(this._config.statistics){const t=this._getStatisticsState(this._config.entity);return null==t?(this._addWarning(this._entityNoStatistics(this._config.entity),this._config.entity),0):t}if(this._config.attribute){const t=this.hass.states[this._config.entity].attributes;if(!t||!(this._config.attribute in t))return this._addWarning(this._attributeNotFound(this._config.entity,this._config.attribute),this._config.entity),0;const e=t[this._config.attribute];return void 0===e||isNaN(Number(e))?(this._addWarning(this._attributeNotNumeric(this._config.entity,this._config.attribute),this._config.entity),0):parseFloat(e)}return parseFloat(this.hass.states[this._config.entity].state)}_calcState(t,e){const i=(()=>{if(this._config.offset)return this._getOffsetState(t.entity_id);if(this._config.statistics){const e=this._getStatisticsState(t.entity_id);return null==e?(this._addWarning(this._entityNoStatistics(t.entity_id),t.entity_id),0):e}const e=this._getAttributeConfig(t.entity_id);if(e){const i=t.attributes;if(!i||!(e in i))return this._addWarning(this._attributeNotFound(t.entity_id,e),t.entity_id),0;const n=i[e];return void 0===n||isNaN(Number(n))?(this._addWarning(this._attributeNotNumeric(t.entity_id,e),t.entity_id),0):parseFloat(n)}return parseFloat(null==t?void 0:t.state)})();return isNaN(i)?(this._addWarning(this._entityNotNumeric(t),t.entity_id),0):i*(null!=e?e:1)}_getOffsetEntryValue(t,e){var i;const n=this._getAttributeConfig(e),s=parseFloat(n?null===(i=t.attributes)||void 0===i?void 0:i[n]:t.state);return isNaN(s)?0:s}_getOffsetState(t){if(!this._offsetTime)return 0;if(!this._entitiesHistoryOffset)return 0;if(!this._entitiesHistoryOffset.history)return 0;const e=this._entitiesHistoryOffset.history[t];if(!e||0===e.length)return 0;for(let i=e.length-1;i>=0;i--){const n=e[i];if(new Date(n.last_changed).getTime()<=this._offsetTime)return this._getOffsetEntryValue(n,t)}const i=e[0];return i?this._getOffsetEntryValue(i,t):0}_getOffsetHistory(){var t,e;if(!this._config.offset)return;const i=Number(this._config.offset);if(this._offsetTime=Date.now()-i,null===(t=this._entitiesHistoryOffset)||void 0===t?void 0:t.updating)return;if((null===(e=this._entitiesHistoryOffset)||void 0===e?void 0:e.end_time)&&this._entitiesHistoryOffset.end_time-100>this._offsetTime)return;const n=i>=this._historyWindow?this._historyWindow:i,s=new Date(this._offsetTime),o=new Date(this._offsetTime+n);this._entitiesHistoryOffset||(this._entitiesHistoryOffset={start_time:s.valueOf(),end_time:o.valueOf(),history:{},updating:!0}),this._entitiesHistoryOffset.updating=!0,this._fetchHistory(this._allConfigEntities(),s,o).then(t=>{t&&0!==t.length?this._entitiesHistoryOffset={start_time:s.valueOf(),end_time:o.valueOf(),history:this._transformOffsetHistory(t),updating:!1}:this._entitiesHistoryOffset={start_time:s.valueOf(),end_time:o.valueOf(),history:{},updating:!1}}).catch(t=>{console.error("ELG: Failed to fetch history",t),this._entitiesHistoryOffset&&(this._entitiesHistoryOffset.updating=!1)})}_transformOffsetHistory(t){return t.reduce((t,e)=>{const i=e[0].entity_id;return t[i]||(t[i]=[]),e.forEach(e=>{t[i].push({state:e.state,last_changed:e.last_changed,attributes:e.attributes})}),t},{})}_getStatisticsState(t){if(!this._config.statistics)return void console.error("ELG: _getStatisticsState when !statistics");if(!this._entitiesHistoryStatistics)return console.error("ELG: _no _entitiesHistoryStatistics"),0;if(!this._entitiesHistoryStatistics.buckets)return console.error("ELG: _no buckets"),0;if(!this._entitiesHistoryStatistics.buckets[t])return console.error(`ELG: no _entitiesHistoryStatistics.buckets[${t}]`),0;const e=this._entitiesHistoryStatistics.buckets[t],i=Date.now()-24*Number(this._config.statistics_day_offset)*60*60*1e3,n=e.find(t=>i>=t.start&&i<=t.end);if(n)switch(this._config.statistics_function){case"mean":default:return n.mean;case"max":return n.max;case"min":return n.min;case"sum":return n.sum;case"state":return n.state;case"change":return n.change}else console.error("ELG: no bucket found for current timestamp: ",i)}_getStatisticsHistory(){var t,e,i;if(!this._config.statistics)return;if(null===(t=this._entitiesHistoryStatistics)||void 0===t?void 0:t.updating)return;const n=new Date,s=new Date(n.getFullYear(),n.getMonth(),n.getDate()-Number(this._config.statistics_day_offset));if((null===(e=this._entitiesHistoryStatistics)||void 0===e?void 0:e.date)&&(null===(i=this._entitiesHistoryStatistics)||void 0===i?void 0:i.date.getTime())===s.getTime())return;const o=new Date(s);o.setHours(0,0,0,0);const r=new Date(s);r.setHours(23,59,59,999),this._entitiesHistoryStatistics||(this._entitiesHistoryStatistics={updating:!0,date:s,buckets:{}}),this._entitiesHistoryStatistics.updating=!0,this._fetchStatistics(this._allConfigEntities(),o,r,this._config.statistics_period).then(t=>{this._entitiesHistoryStatistics=t?{updating:!1,date:s,buckets:t}:{updating:!1,date:s,buckets:{}}}).catch(t=>{console.error("ELG: Failed to fetch statistics",t),this._entitiesHistoryStatistics&&(this._entitiesHistoryStatistics.updating=!1)})}async _fetchStatistics(t,e,i,n="hour"){var s;const o={type:"recorder/statistics_during_period",start_time:null==e?void 0:e.toISOString(),end_time:null==i?void 0:i.toISOString(),statistic_ids:t,period:n};return null===(s=this.hass)||void 0===s?void 0:s.callWS(o)}async _fetchHistory(t,e,i){var n;const s="string"==typeof e?e:e.toISOString(),o="string"==typeof i?i:i.toISOString(),r=this._anyHasAttributesConfig(t)?"":"&no_attributes";let a=`history/period/${s}?filter_entity_id=${t.join(",")}&end_time=${o}&significant_changes_only&minimal_response`+r;return null===(n=this.hass)||void 0===n?void 0:n.callApi("GET",a)}async _tryConnect(){var t;if(!this.hass||!this._config)return;["title","subtitle","header","unit","untracked_legend_label"].forEach(t=>{this._config[t]&&Te(this._config[t])&&this._subscribeToTemplate(t,this._config[t])}),null===(t=this._config.entities)||void 0===t||t.forEach((t,e)=>{t.name&&Te(t.name)&&this._subscribeToTemplate(`entity_${e}_name`,t.name),t.unit&&Te(t.unit)&&this._subscribeToTemplate(`entity_${e}_unit`,t.unit)})}async _subscribeToTemplate(t,e){var i,n,s;if(!this._unsubRenderTemplates.has(t))try{const o=(i=this.hass.connection,n=e=>{this._templateResults=Object.assign(Object.assign({},this._templateResults),{[t]:e.result})},s={template:e,variables:{config:this._config,user:this.hass.user.name,entity:this._config.entity},strict:!0},i.subscribeMessage(t=>n(t),Object.assign({type:"render_template"},s)));this._unsubRenderTemplates.set(t,o),await o}catch(i){console.error("ELG: Error subscribing to template",i),this._templateResults=Object.assign(Object.assign({},this._templateResults),{[t]:e}),this._unsubRenderTemplates.delete(t)}}async _tryDisconnect(){for(const t of this._unsubRenderTemplates.keys())await this._tryDisconnectKey(t)}async _tryDisconnectKey(t){const e=this._unsubRenderTemplates.get(t);if(e)try{(await e)()}catch(e){"not_found"!==e.code&&"template_error"!==e.code&&console.error(`ELG: Unexpected error unsubscribing template [${t}]:`,e)}finally{this._unsubRenderTemplates.delete(t)}}_getTemplateValue(t,e){return void 0!==this._templateResults[t]?this._templateResults[t]:e&&!Te(e)||null!=e?e:""}_allConfigEntities(){return this._memoizedEntities(this._config)}_sortConfigEntitiesByState(){if(!this._config.entities)return;const t=(t,e)=>{var i,n,s,o;return(null!==(n=null===(i=this._entitiesObject[t.entity])||void 0===i?void 0:i.state)&&void 0!==n?n:0)-(null!==(o=null===(s=this._entitiesObject[e.entity])||void 0===s?void 0:s.state)&&void 0!==o?o:0)},e=(t,e)=>{const i=this._entityName(t).toUpperCase(),n=this._entityName(e).toUpperCase();return i<n?-1:i>n?1:0};switch(this._config.sorting){case"value-asc":this._config.entities.sort(t);break;case"value-desc":this._config.entities.sort((e,i)=>t(i,e));break;case"alpha-asc":this._config.entities.sort(e);break;case"alpha-desc":this._config.entities.sort((t,i)=>e(i,t))}}_getAttributeConfig(t){var e;if(t===this._config.entity)return this._config.attribute;const i=null===(e=this._config.entities)||void 0===e?void 0:e.find(e=>e.entity===t);return null==i?void 0:i.attribute}_anyHasAttributesConfig(t){return t.some(t=>void 0!==this._getAttributeConfig(t))}_getMax(t=100){return this._config.max?"string"==typeof this._config.max?this._calcState(this.hass.states[this._config.max]):this._config.max:t}_getMin(t=0){return this._config.min?"string"==typeof this._config.min?this._calcState(this.hass.states[this._config.min]):this._config.min:t}_mainSeverity(){if(!this._config.severity)return this._config.color;const t=this._config.severity_levels;if(t)for(const[e,i]of t.entries())if(this._mainObject.state>=i.from){if(this._config.severity_blend&&0!==e){return ke(i,t[e-1],this._mainObject.state)}return i.color}return this._config.color}_handleAction(t,e){var i,n,s;t.stopPropagation(),i=this,this.hass,n=null!=e?e:this._config,s=t.detail.action,Ee(i,"hass-action",{config:n,action:s})}static get styles(){return At}};t([ct()],je.prototype,"hass",void 0),t([dt()],je.prototype,"_config",void 0),t([ct()],je.prototype,"_card",void 0),t([dt()],je.prototype,"_templateResults",void 0),t([dt()],je.prototype,"_unsubRenderTemplates",void 0),t([dt()],je.prototype,"_entitiesHistoryStatistics",void 0),t([dt()],je.prototype,"_entitiesHistoryOffset",void 0),je=t([at("energy-line-gauge")],je);export{U as A,fe as B,de as C,Nt as D,le as E,oe as F,ae as G,ce as H,re as I,je as J,he as N,P as T,t as _,ie as a,ee as b,te as c,_t as d,at as e,Ee as f,ne as g,se as h,gt as i,et as j,$t as k,wt as l,xt as m,ct as n,r as o,dt as p,Xt as q,Jt as r,ot as s,ut as t,Yt as u,Qt as v,$e as w,R as x,we as y,pe as z};
