function e(e,t,o,i){var a,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r}"function"==typeof SuppressedError&&SuppressedError,Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function e(){var t=isNaN(arguments[0])?1:Number(arguments[0]);return t?Array.prototype.reduce.call(this,function(o,i){return Array.isArray(i)?o.push.apply(o,e.call(i,t-1)):o.push(i),o},[]):Array.prototype.slice.call(this)},writable:!0}),Array.prototype.flatMap||Object.defineProperty(Array.prototype,"flatMap",{configurable:!0,value:function(e){return Array.prototype.map.apply(this,arguments).flat()},writable:!0});const t=globalThis,o=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;class n{constructor(e,t,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&a.set(t,e))}return e}toString(){return this.cssText}}const r=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:s,defineProperty:p,getOwnPropertyDescriptor:b,getOwnPropertyNames:c,getOwnPropertySymbols:M,getPrototypeOf:z}=Object,l=globalThis,O=l.trustedTypes,d=O?O.emptyScript:"",h=l.reactiveElementPolyfillSupport,A=(e,t)=>e,u={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},f=(e,t)=>!s(e,t),q={attribute:!0,type:String,converter:u,reflect:!1,useDefault:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),l.litPropertyMetadata??=new WeakMap;class g extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=q){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&p(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:a}=b(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const n=i?.call(this);a?.call(this,t),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??q}static _$Ei(){if(this.hasOwnProperty(A("elementProperties")))return;const e=z(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(A("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(A("properties"))){const e=this.properties,t=[...c(e),...M(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const e=this._$Eu(t,o);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(o)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of i){const i=document.createElement("style"),a=t.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=o.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const a=(void 0!==o.converter?.toAttribute?o.converter:u).toAttribute(t,o.type);this._$Em=e,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:u;this._$Em=i;const n=a.fromAttribute(t,e.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){const i=this.constructor,a=this[e];if(o??=i.getPropertyOptions(e),!((o.hasChanged??f)(a,t)||o.useDefault&&o.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:a},n){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==a||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}g.elementStyles=[],g.shadowRootOptions={mode:"open"},g[A("elementProperties")]=new Map,g[A("finalized")]=new Map,h?.({ReactiveElement:g}),(l.reactiveElementVersions??=[]).push("2.1.1");const W=globalThis,m=W.trustedTypes,x=m?m.createPolicy("lit-html",{createHTML:e=>e}):void 0,v="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+y,L=`<${R}>`,w=document,N=()=>w.createComment(""),B=e=>null===e||"object"!=typeof e&&"function"!=typeof e,_=Array.isArray,S="[ \t\n\f\r]",X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,C=/>/g,T=RegExp(`>|${S}(?:([^\\s"'>=/]+)(${S}*=${S}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),E=/'/g,P=/"/g,D=/^(?:script|style|textarea|title)$/i,I=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),H=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Y=new WeakMap,G=w.createTreeWalker(w,129);function V(e,t){if(!_(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(t):t}class U{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let a=0,n=0;const r=e.length-1,s=this.parts,[p,b]=((e,t)=>{const o=e.length-1,i=[];let a,n=2===t?"<svg>":3===t?"<math>":"",r=X;for(let s=0;s<o;s++){const t=e[s];let o,p,b=-1,c=0;for(;c<t.length&&(r.lastIndex=c,p=r.exec(t),null!==p);)c=r.lastIndex,r===X?"!--"===p[1]?r=k:void 0!==p[1]?r=C:void 0!==p[2]?(D.test(p[2])&&(a=RegExp("</"+p[2],"g")),r=T):void 0!==p[3]&&(r=T):r===T?">"===p[0]?(r=a??X,b=-1):void 0===p[1]?b=-2:(b=r.lastIndex-p[2].length,o=p[1],r=void 0===p[3]?T:'"'===p[3]?P:E):r===P||r===E?r=T:r===k||r===C?r=X:(r=T,a=void 0);const M=r===T&&e[s+1].startsWith("/>")?" ":"";n+=r===X?t+L:b>=0?(i.push(o),t.slice(0,b)+v+t.slice(b)+y+M):t+y+(-2===b?s:M)}return[V(e,n+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]})(e,t);if(this.el=U.createElement(p,o),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=G.nextNode())&&s.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(v)){const t=b[n++],o=i.getAttribute(e).split(y),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:o,ctor:"."===r[1]?Q:"?"===r[1]?ee:"@"===r[1]?te:J}),i.removeAttribute(e)}else e.startsWith(y)&&(s.push({type:6,index:a}),i.removeAttribute(e));if(D.test(i.tagName)){const e=i.textContent.split(y),t=e.length-1;if(t>0){i.textContent=m?m.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],N()),G.nextNode(),s.push({type:2,index:++a});i.append(e[t],N())}}}else if(8===i.nodeType)if(i.data===R)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=i.data.indexOf(y,e+1));)s.push({type:7,index:a}),e+=y.length-1}a++}}static createElement(e,t){const o=w.createElement("template");return o.innerHTML=e,o}}function $(e,t,o=e,i){if(t===H)return t;let a=void 0!==i?o._$Co?.[i]:o._$Cl;const n=B(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e),a._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=a:o._$Cl=a),void 0!==a&&(t=$(e,a._$AS(e,t.values),a,i)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??w).importNode(t,!0);G.currentNode=i;let a=G.nextNode(),n=0,r=0,s=o[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new K(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new oe(a,this,e)),this._$AV.push(t),s=o[++r]}n!==s?.index&&(a=G.nextNode(),n++)}return G.currentNode=w,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=$(this,e,t),B(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==H&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>_(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=U.createElement(V(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Z(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new U(e)),t}k(e){_(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const a of e)i===t.length?t.push(o=new K(this.O(N()),this.O(N()),this,this.options)):o=t[i],o._$AI(a),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,a){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=F}_$AI(e,t=this,o,i){const a=this.strings;let n=!1;if(void 0===a)e=$(this,e,t,0),n=!B(e)||e!==this._$AH&&e!==H,n&&(this._$AH=e);else{const i=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=$(this,i[o+r],t,r),s===H&&(s=this._$AH[r]),n||=!B(s)||s!==this._$AH[r],s===F?e=F:e!==F&&(e+=(s??"")+a[r+1]),this._$AH[r]=s}n&&!i&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Q extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class ee extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class te extends J{constructor(e,t,o,i,a){super(e,t,o,i,a),this.type=5}_$AI(e,t=this){if((e=$(this,e,t,0)??F)===H)return;const o=this._$AH,i=e===F&&o!==F||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==F&&(o===F||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){$(this,e)}}const ie=W.litHtmlPolyfillSupport;ie?.(U,K),(W.litHtmlVersions??=[]).push("3.3.1");const ae=globalThis,ne=ae.ShadowRoot&&(void 0===ae.ShadyCSS||ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,re=Symbol(),se=new WeakMap;class pe{constructor(e,t,o){if(this._$cssResult$=!0,o!==re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ne&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=se.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&se.set(t,e))}return e}toString(){return this.cssText}}const be=ne?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new pe("string"==typeof e?e:e+"",void 0,re))(t)})(e):e,{is:ce,defineProperty:Me,getOwnPropertyDescriptor:ze,getOwnPropertyNames:le,getOwnPropertySymbols:Oe,getPrototypeOf:de}=Object,he=globalThis,Ae=he.trustedTypes,ue=Ae?Ae.emptyScript:"",fe=he.reactiveElementPolyfillSupport,qe=(e,t)=>e,ge={toAttribute(e,t){switch(t){case Boolean:e=e?ue:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},We=(e,t)=>!ce(e,t),me={attribute:!0,type:String,converter:ge,reflect:!1,useDefault:!1,hasChanged:We};Symbol.metadata??=Symbol("metadata"),he.litPropertyMetadata??=new WeakMap;class xe extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=me){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Me(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:a}=ze(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const n=i?.call(this);a?.call(this,t),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??me}static _$Ei(){if(this.hasOwnProperty(qe("elementProperties")))return;const e=de(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(qe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qe("properties"))){const e=this.properties,t=[...le(e),...Oe(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const e=this._$Eu(t,o);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(be(e))}else void 0!==e&&t.push(be(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(ne)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of t){const t=document.createElement("style"),i=ae.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const a=(void 0!==o.converter?.toAttribute?o.converter:ge).toAttribute(t,o.type);this._$Em=e,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:ge;this._$Em=i;const n=a.fromAttribute(t,e.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){const i=this.constructor,a=this[e];if(o??=i.getPropertyOptions(e),!((o.hasChanged??We)(a,t)||o.useDefault&&o.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:a},n){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==a||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}xe.elementStyles=[],xe.shadowRootOptions={mode:"open"},xe[qe("elementProperties")]=new Map,xe[qe("finalized")]=new Map,fe?.({ReactiveElement:xe}),(he.reactiveElementVersions??=[]).push("2.1.1");const ve=globalThis;class ye extends xe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let a=i._$litPart$;if(void 0===a){const e=o?.renderBefore??null;i._$litPart$=a=new K(t.insertBefore(N(),e),e,void 0,o??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}}ye._$litElement$=!0,ye.finalized=!0,ve.litElementHydrateSupport?.({LitElement:ye});const Re=ve.litElementPolyfillSupport;Re?.({LitElement:ye}),(ve.litElementVersions??=[]).push("4.2.1");const Le={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f},we=(e=Le,t,o)=>{const{kind:i,metadata:a}=o;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),n.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const a=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,a,e)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=o;return function(o){const a=this[i];t.call(this,o),this.requestUpdate(i,a,e)}}throw Error("Unsupported decorator location: "+i)};function Ne(e){return(t,o)=>"object"==typeof o?we(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const Be=1,_e=e=>(...t)=>({_$litDirective$:e,values:t});class Se{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Xe=_e(class extends Se{constructor(e){if(super(e),e.type!==Be||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const i of this.st)i in t||(o.remove(i),this.st.delete(i));for(const i in t){const e=!!t[i];e===this.st.has(i)||this.nt?.has(i)||(e?(o.add(i),this.st.add(i)):(o.remove(i),this.st.delete(i)))}return H}});var ke,Ce,Te;function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}).apply(this,arguments)}!function(e){e[e.AUTO=0]="AUTO",e[e.FIXED=1]="FIXED",e[e.SOFT=2]="SOFT",e[e.ABSOLUTE=3]="ABSOLUTE"}(ke||(ke={})),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Ce||(Ce={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Te||(Te={}));var Pe=function(e,t,o){var i=t?function(e){switch(e.number_format){case Ce.comma_decimal:return["en-US","en"];case Ce.decimal_comma:return["de","es","it"];case Ce.space_comma:return["fr","sv","cs"];case Ce.system:return;default:return e.language}}(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==Ce.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(i,De(e,o)).format(Number(e))}catch(Ao){return console.error(Ao),new Intl.NumberFormat(void 0,De(e,o)).format(Number(e))}return"string"==typeof e?e:function(e,t){return void 0===t&&(t=2),Math.round(e*Math.pow(10,t))/Math.pow(10,t)}(e,null==o?void 0:o.maximumFractionDigits).toString()+("currency"===(null==o?void 0:o.style)?" "+o.currency:"")},De=function(e,t){var o=Ee({maximumFractionDigits:2},t);if("string"!=typeof e)return o;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var i=e.indexOf(".")>-1?e.split(".")[1].length:0;o.minimumFractionDigits=i,o.maximumFractionDigits=i}return o},Ie=["closed","locked","off"],He=function(e,t,o,i){i=i||{},o=null==o?{}:o;var a=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return a.detail=o,e.dispatchEvent(a),a},Fe=function(e){He(window,"haptic",e)},Ye=function(e,t,o,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some(function(e){return e.user===t.user.id})||(Fe("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(o.entity||o.camera_image)&&He(e,"hass-more-info",{entityId:o.entity?o.entity:o.camera_image});break;case"navigate":i.navigation_path&&function(e,t,o){void 0===o&&(o=!1),o?history.replaceState(null,"",t):history.pushState(null,"",t),He(window,"location-changed",{replace:o})}(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":o.entity&&(function(e,t){(function(e,t,o){void 0===o&&(o=!0);var i,a=function(e){return e.substr(0,e.indexOf("."))}(t),n="group"===a?"homeassistant":a;switch(a){case"lock":i=o?"unlock":"lock";break;case"cover":i=o?"open_cover":"close_cover";break;default:i=o?"turn_on":"turn_off"}e.callService(n,i,{entity_id:t})})(e,t,Ie.includes(e.states[t].state))}(t,o.entity),Fe("success"));break;case"call-service":if(!i.service)return void Fe("failure");var a=i.service.split(".",2);t.callService(a[0],a[1],i.service_data,i.target),Fe("success");break;case"fire-dom-event":He(e,"ll-custom",i)}},je=function(e,t,o,i){var a;"double_tap"===i&&o.double_tap_action?a=o.double_tap_action:"hold"===i&&o.hold_action?a=o.hold_action:"tap"===i&&o.tap_action&&(a=o.tap_action),Ye(e,t,o,a)},Ge="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Ve(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ue={exports:{}};Ue.exports=function e(t,o,i){function a(r,s){if(!o[r]){if(!t[r]){if(!s&&Ve)return Ve(r);if(n)return n(r,!0);var p=new Error("Cannot find module '"+r+"'");throw p.code="MODULE_NOT_FOUND",p}var b=o[r]={exports:{}};t[r][0].call(b.exports,function(e){var o=t[r][1][e];return a(o||e)},b,b.exports,e,t,o,i)}return o[r].exports}for(var n=Ve,r=0;r<i.length;r++)a(i[r]);return a}({1:[function(e,t,o){(function(e){var o,i,a=e.MutationObserver||e.WebKitMutationObserver;if(a){var n=0,r=new a(c),s=e.document.createTextNode("");r.observe(s,{characterData:!0}),o=function(){s.data=n=++n%2}}else if(e.setImmediate||void 0===e.MessageChannel)o="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){c(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(c,0)};else{var p=new e.MessageChannel;p.port1.onmessage=c,o=function(){p.port2.postMessage(0)}}var b=[];function c(){var e,t;i=!0;for(var o=b.length;o;){for(t=b,b=[],e=-1;++e<o;)t[e]();o=b.length}i=!1}function M(e){1!==b.push(e)||i||o()}t.exports=M}).call(this,void 0!==Ge?Ge:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,o){var i=e(1);function a(){}var n={},r=["REJECTED"],s=["FULFILLED"],p=["PENDING"];function b(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,e!==a&&l(this,e)}function c(e,t,o){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof o&&(this.onRejected=o,this.callRejected=this.otherCallRejected)}function M(e,t,o){i(function(){var i;try{i=t(o)}catch(uo){return n.reject(e,uo)}i===e?n.reject(e,new TypeError("Cannot resolve promise with itself")):n.resolve(e,i)})}function z(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function l(e,t){var o=!1;function i(t){o||(o=!0,n.reject(e,t))}function a(t){o||(o=!0,n.resolve(e,t))}function r(){t(a,i)}var s=O(r);"error"===s.status&&i(s.value)}function O(e,t){var o={};try{o.value=e(t),o.status="success"}catch(uo){o.status="error",o.value=uo}return o}function d(e){return e instanceof this?e:n.resolve(new this(a),e)}function h(e){var t=new this(a);return n.reject(t,e)}function A(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var r=new Array(o),s=0,p=-1,b=new this(a);++p<o;)c(e[p],p);return b;function c(e,a){function p(e){r[a]=e,++s!==o||i||(i=!0,n.resolve(b,r))}t.resolve(e).then(p,function(e){i||(i=!0,n.reject(b,e))})}}function u(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var r=-1,s=new this(a);++r<o;)p(e[r]);return s;function p(e){t.resolve(e).then(function(e){i||(i=!0,n.resolve(s,e))},function(e){i||(i=!0,n.reject(s,e))})}}t.exports=b,b.prototype.catch=function(e){return this.then(null,e)},b.prototype.then=function(e,t){if("function"!=typeof e&&this.state===s||"function"!=typeof t&&this.state===r)return this;var o=new this.constructor(a);return this.state!==p?M(o,this.state===s?e:t,this.outcome):this.queue.push(new c(o,e,t)),o},c.prototype.callFulfilled=function(e){n.resolve(this.promise,e)},c.prototype.otherCallFulfilled=function(e){M(this.promise,this.onFulfilled,e)},c.prototype.callRejected=function(e){n.reject(this.promise,e)},c.prototype.otherCallRejected=function(e){M(this.promise,this.onRejected,e)},n.resolve=function(e,t){var o=O(z,t);if("error"===o.status)return n.reject(e,o.value);var i=o.value;if(i)l(e,i);else{e.state=s,e.outcome=t;for(var a=-1,r=e.queue.length;++a<r;)e.queue[a].callFulfilled(t)}return e},n.reject=function(e,t){e.state=r,e.outcome=t;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callRejected(t);return e},b.resolve=d,b.reject=h,b.all=A,b.race=u},{1:1}],3:[function(e,t,o){(function(t){"function"!=typeof t.Promise&&(t.Promise=e(2))}).call(this,void 0!==Ge?Ge:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,t,o){var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(uo){return}}var r=n();function s(){try{if(!r||!r.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(uo){return!1}}function p(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(uo){if("TypeError"!==uo.name)throw uo;for(var o=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),i=0;i<e.length;i+=1)o.append(e[i]);return o.getBlob(t.type)}}"undefined"==typeof Promise&&e(3);var b=Promise;function c(e,t){t&&e.then(function(e){t(null,e)},function(e){t(e)})}function M(e,t,o){"function"==typeof t&&e.then(t),"function"==typeof o&&e.catch(o)}function z(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function l(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var O="local-forage-detect-blob-support",d=void 0,h={},A=Object.prototype.toString,u="readonly",f="readwrite";function q(e){for(var t=e.length,o=new ArrayBuffer(t),i=new Uint8Array(o),a=0;a<t;a++)i[a]=e.charCodeAt(a);return o}function g(e){return new b(function(t){var o=e.transaction(O,f),i=p([""]);o.objectStore(O).put(i,"key"),o.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},o.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),o=navigator.userAgent.match(/Edge\//);t(o||!e||parseInt(e[1],10)>=43)}}).catch(function(){return!1})}function W(e){return"boolean"==typeof d?b.resolve(d):g(e).then(function(e){return d=e})}function m(e){var t=h[e.name],o={};o.promise=new b(function(e,t){o.resolve=e,o.reject=t}),t.deferredOperations.push(o),t.dbReady?t.dbReady=t.dbReady.then(function(){return o.promise}):t.dbReady=o.promise}function x(e){var t=h[e.name].deferredOperations.pop();if(t)return t.resolve(),t.promise}function v(e,t){var o=h[e.name].deferredOperations.pop();if(o)return o.reject(t),o.promise}function y(e,t){return new b(function(o,i){if(h[e.name]=h[e.name]||C(),e.db){if(!t)return o(e.db);m(e),e.db.close()}var a=[e.name];t&&a.push(e.version);var n=r.open.apply(r,a);t&&(n.onupgradeneeded=function(t){var o=n.result;try{o.createObjectStore(e.storeName),t.oldVersion<=1&&o.createObjectStore(O)}catch(i){if("ConstraintError"!==i.name)throw i;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),n.onerror=function(e){e.preventDefault(),i(n.error)},n.onsuccess=function(){var t=n.result;t.onversionchange=function(e){e.target.close()},o(t),x(e)}})}function R(e){return y(e,!1)}function L(e){return y(e,!0)}function w(e,t){if(!e.db)return!0;var o=!e.db.objectStoreNames.contains(e.storeName),i=e.version<e.db.version,a=e.version>e.db.version;if(i&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),a||o){if(o){var n=e.db.version+1;n>e.version&&(e.version=n)}return!0}return!1}function N(e){return new b(function(t,o){var i=new FileReader;i.onerror=o,i.onloadend=function(o){var i=btoa(o.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},i.readAsBinaryString(e)})}function B(e){return p([q(atob(e.data))],{type:e.type})}function _(e){return e&&e.__local_forage_encoded_blob}function S(e){var t=this,o=t._initReady().then(function(){var e=h[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady});return M(o,e,e),o}function X(e){m(e);for(var t=h[e.name],o=t.forages,i=0;i<o.length;i++){var a=o[i];a._dbInfo.db&&(a._dbInfo.db.close(),a._dbInfo.db=null)}return e.db=null,R(e).then(function(t){return e.db=t,w(e)?L(e):t}).then(function(i){e.db=t.db=i;for(var a=0;a<o.length;a++)o[a]._dbInfo.db=i}).catch(function(t){throw v(e,t),t})}function k(e,t,o,i){void 0===i&&(i=1);try{var a=e.db.transaction(e.storeName,t);o(null,a)}catch(n){if(i>0&&(!e.db||"InvalidStateError"===n.name||"NotFoundError"===n.name))return b.resolve().then(function(){if(!e.db||"NotFoundError"===n.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),L(e)}).then(function(){return X(e).then(function(){k(e,t,o,i-1)})}).catch(o);o(n)}}function C(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function T(e){var t=this,o={db:null};if(e)for(var i in e)o[i]=e[i];var a=h[o.name];a||(a=C(),h[o.name]=a),a.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=S);var n=[];function r(){return b.resolve()}for(var s=0;s<a.forages.length;s++){var p=a.forages[s];p!==t&&n.push(p._initReady().catch(r))}var c=a.forages.slice(0);return b.all(n).then(function(){return o.db=a.db,R(o)}).then(function(e){return o.db=e,w(o,t._defaultConfig.version)?L(o):e}).then(function(e){o.db=a.db=e,t._dbInfo=o;for(var i=0;i<c.length;i++){var n=c[i];n!==t&&(n._dbInfo.db=o.db,n._dbInfo.version=o.version)}})}function E(e,t){var o=this;e=z(e);var i=new b(function(t,i){o.ready().then(function(){k(o._dbInfo,u,function(a,n){if(a)return i(a);try{var r=n.objectStore(o._dbInfo.storeName).get(e);r.onsuccess=function(){var e=r.result;void 0===e&&(e=null),_(e)&&(e=B(e)),t(e)},r.onerror=function(){i(r.error)}}catch(uo){i(uo)}})}).catch(i)});return c(i,t),i}function P(e,t){var o=this,i=new b(function(t,i){o.ready().then(function(){k(o._dbInfo,u,function(a,n){if(a)return i(a);try{var r=n.objectStore(o._dbInfo.storeName).openCursor(),s=1;r.onsuccess=function(){var o=r.result;if(o){var i=o.value;_(i)&&(i=B(i));var a=e(i,o.key,s++);void 0!==a?t(a):o.continue()}else t()},r.onerror=function(){i(r.error)}}catch(uo){i(uo)}})}).catch(i)});return c(i,t),i}function D(e,t,o){var i=this;e=z(e);var a=new b(function(o,a){var n;i.ready().then(function(){return n=i._dbInfo,"[object Blob]"===A.call(t)?W(n.db).then(function(e){return e?t:N(t)}):t}).then(function(t){k(i._dbInfo,f,function(n,r){if(n)return a(n);try{var s=r.objectStore(i._dbInfo.storeName);null===t&&(t=void 0);var p=s.put(t,e);r.oncomplete=function(){void 0===t&&(t=null),o(t)},r.onabort=r.onerror=function(){var e=p.error?p.error:p.transaction.error;a(e)}}catch(uo){a(uo)}})}).catch(a)});return c(a,o),a}function I(e,t){var o=this;e=z(e);var i=new b(function(t,i){o.ready().then(function(){k(o._dbInfo,f,function(a,n){if(a)return i(a);try{var r=n.objectStore(o._dbInfo.storeName).delete(e);n.oncomplete=function(){t()},n.onerror=function(){i(r.error)},n.onabort=function(){var e=r.error?r.error:r.transaction.error;i(e)}}catch(uo){i(uo)}})}).catch(i)});return c(i,t),i}function H(e){var t=this,o=new b(function(e,o){t.ready().then(function(){k(t._dbInfo,f,function(i,a){if(i)return o(i);try{var n=a.objectStore(t._dbInfo.storeName).clear();a.oncomplete=function(){e()},a.onabort=a.onerror=function(){var e=n.error?n.error:n.transaction.error;o(e)}}catch(uo){o(uo)}})}).catch(o)});return c(o,e),o}function F(e){var t=this,o=new b(function(e,o){t.ready().then(function(){k(t._dbInfo,u,function(i,a){if(i)return o(i);try{var n=a.objectStore(t._dbInfo.storeName).count();n.onsuccess=function(){e(n.result)},n.onerror=function(){o(n.error)}}catch(uo){o(uo)}})}).catch(o)});return c(o,e),o}function Y(e,t){var o=this,i=new b(function(t,i){e<0?t(null):o.ready().then(function(){k(o._dbInfo,u,function(a,n){if(a)return i(a);try{var r=n.objectStore(o._dbInfo.storeName),s=!1,p=r.openKeyCursor();p.onsuccess=function(){var o=p.result;o?0===e||s?t(o.key):(s=!0,o.advance(e)):t(null)},p.onerror=function(){i(p.error)}}catch(uo){i(uo)}})}).catch(i)});return c(i,t),i}function j(e){var t=this,o=new b(function(e,o){t.ready().then(function(){k(t._dbInfo,u,function(i,a){if(i)return o(i);try{var n=a.objectStore(t._dbInfo.storeName).openKeyCursor(),r=[];n.onsuccess=function(){var t=n.result;t?(r.push(t.key),t.continue()):e(r)},n.onerror=function(){o(n.error)}}catch(uo){o(uo)}})}).catch(o)});return c(o,e),o}function G(e,t){t=l.apply(this,arguments);var o=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||o.name,e.storeName=e.storeName||o.storeName);var i,a=this;if(e.name){var n=e.name===o.name&&a._dbInfo.db?b.resolve(a._dbInfo.db):R(e).then(function(t){var o=h[e.name],i=o.forages;o.db=t;for(var a=0;a<i.length;a++)i[a]._dbInfo.db=t;return t});i=e.storeName?n.then(function(t){if(t.objectStoreNames.contains(e.storeName)){var o=t.version+1;m(e);var i=h[e.name],a=i.forages;t.close();for(var n=0;n<a.length;n++){var s=a[n];s._dbInfo.db=null,s._dbInfo.version=o}var p=new b(function(t,i){var a=r.open(e.name,o);a.onerror=function(e){a.result.close(),i(e)},a.onupgradeneeded=function(){a.result.deleteObjectStore(e.storeName)},a.onsuccess=function(){var e=a.result;e.close(),t(e)}});return p.then(function(e){i.db=e;for(var t=0;t<a.length;t++){var o=a[t];o._dbInfo.db=e,x(o._dbInfo)}}).catch(function(t){throw(v(e,t)||b.resolve()).catch(function(){}),t})}}):n.then(function(t){m(e);var o=h[e.name],i=o.forages;t.close();for(var a=0;a<i.length;a++)i[a]._dbInfo.db=null;var n=new b(function(t,o){var i=r.deleteDatabase(e.name);i.onerror=function(){var e=i.result;e&&e.close(),o(i.error)},i.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},i.onsuccess=function(){var e=i.result;e&&e.close(),t(e)}});return n.then(function(e){o.db=e;for(var t=0;t<i.length;t++)x(i[t]._dbInfo)}).catch(function(t){throw(v(e,t)||b.resolve()).catch(function(){}),t})})}else i=b.reject("Invalid arguments");return c(i,t),i}var V={_driver:"asyncStorage",_initStorage:T,_support:s(),iterate:P,getItem:E,setItem:D,removeItem:I,clear:H,length:F,key:Y,keys:j,dropInstance:G};function U(){return"function"==typeof openDatabase}var $="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Z="~~local_forage_type~",K=/^~~local_forage_type~([^~]+)~/,J="__lfsc__:",Q=J.length,ee="arbf",te="blob",oe="si08",ie="ui08",ae="uic8",ne="si16",re="si32",se="ur16",pe="ui32",be="fl32",ce="fl64",Me=Q+ee.length,ze=Object.prototype.toString;function le(e){var t,o,i,a,n,r=.75*e.length,s=e.length,p=0;"="===e[e.length-1]&&(r--,"="===e[e.length-2]&&r--);var b=new ArrayBuffer(r),c=new Uint8Array(b);for(t=0;t<s;t+=4)o=$.indexOf(e[t]),i=$.indexOf(e[t+1]),a=$.indexOf(e[t+2]),n=$.indexOf(e[t+3]),c[p++]=o<<2|i>>4,c[p++]=(15&i)<<4|a>>2,c[p++]=(3&a)<<6|63&n;return b}function Oe(e){var t,o=new Uint8Array(e),i="";for(t=0;t<o.length;t+=3)i+=$[o[t]>>2],i+=$[(3&o[t])<<4|o[t+1]>>4],i+=$[(15&o[t+1])<<2|o[t+2]>>6],i+=$[63&o[t+2]];return o.length%3==2?i=i.substring(0,i.length-1)+"=":o.length%3==1&&(i=i.substring(0,i.length-2)+"=="),i}function de(e,t){var o="";if(e&&(o=ze.call(e)),e&&("[object ArrayBuffer]"===o||e.buffer&&"[object ArrayBuffer]"===ze.call(e.buffer))){var i,a=J;e instanceof ArrayBuffer?(i=e,a+=ee):(i=e.buffer,"[object Int8Array]"===o?a+=oe:"[object Uint8Array]"===o?a+=ie:"[object Uint8ClampedArray]"===o?a+=ae:"[object Int16Array]"===o?a+=ne:"[object Uint16Array]"===o?a+=se:"[object Int32Array]"===o?a+=re:"[object Uint32Array]"===o?a+=pe:"[object Float32Array]"===o?a+=be:"[object Float64Array]"===o?a+=ce:t(new Error("Failed to get type for BinaryArray"))),t(a+Oe(i))}else if("[object Blob]"===o){var n=new FileReader;n.onload=function(){var o=Z+e.type+"~"+Oe(this.result);t(J+te+o)},n.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(uo){console.error("Couldn't convert value into a JSON string: ",e),t(null,uo)}}function he(e){if(e.substring(0,Q)!==J)return JSON.parse(e);var t,o=e.substring(Me),i=e.substring(Q,Me);if(i===te&&K.test(o)){var a=o.match(K);t=a[1],o=o.substring(a[0].length)}var n=le(o);switch(i){case ee:return n;case te:return p([n],{type:t});case oe:return new Int8Array(n);case ie:return new Uint8Array(n);case ae:return new Uint8ClampedArray(n);case ne:return new Int16Array(n);case se:return new Uint16Array(n);case re:return new Int32Array(n);case pe:return new Uint32Array(n);case be:return new Float32Array(n);case ce:return new Float64Array(n);default:throw new Error("Unkown type: "+i)}}var Ae={serialize:de,deserialize:he,stringToBuffer:le,bufferToString:Oe};function ue(e,t,o,i){e.executeSql("CREATE TABLE IF NOT EXISTS "+t.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],o,i)}function fe(e){var t=this,o={db:null};if(e)for(var i in e)o[i]="string"!=typeof e[i]?e[i].toString():e[i];var a=new b(function(e,i){try{o.db=openDatabase(o.name,String(o.version),o.description,o.size)}catch(uo){return i(uo)}o.db.transaction(function(a){ue(a,o,function(){t._dbInfo=o,e()},function(e,t){i(t)})},i)});return o.serializer=Ae,a}function qe(e,t,o,i,a,n){e.executeSql(o,i,a,function(e,r){r.code===r.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(e,s){s.rows.length?n(e,r):ue(e,t,function(){e.executeSql(o,i,a,n)},n)},n):n(e,r)},n)}function ge(e,t){var o=this;e=z(e);var i=new b(function(t,i){o.ready().then(function(){var a=o._dbInfo;a.db.transaction(function(o){qe(o,a,"SELECT * FROM "+a.storeName+" WHERE key = ? LIMIT 1",[e],function(e,o){var i=o.rows.length?o.rows.item(0).value:null;i&&(i=a.serializer.deserialize(i)),t(i)},function(e,t){i(t)})})}).catch(i)});return c(i,t),i}function We(e,t){var o=this,i=new b(function(t,i){o.ready().then(function(){var a=o._dbInfo;a.db.transaction(function(o){qe(o,a,"SELECT * FROM "+a.storeName,[],function(o,i){for(var n=i.rows,r=n.length,s=0;s<r;s++){var p=n.item(s),b=p.value;if(b&&(b=a.serializer.deserialize(b)),void 0!==(b=e(b,p.key,s+1)))return void t(b)}t()},function(e,t){i(t)})})}).catch(i)});return c(i,t),i}function me(e,t,o,i){var a=this;e=z(e);var n=new b(function(n,r){a.ready().then(function(){void 0===t&&(t=null);var s=t,p=a._dbInfo;p.serializer.serialize(t,function(t,b){b?r(b):p.db.transaction(function(o){qe(o,p,"INSERT OR REPLACE INTO "+p.storeName+" (key, value) VALUES (?, ?)",[e,t],function(){n(s)},function(e,t){r(t)})},function(t){if(t.code===t.QUOTA_ERR){if(i>0)return void n(me.apply(a,[e,s,o,i-1]));r(t)}})})}).catch(r)});return c(n,o),n}function xe(e,t,o){return me.apply(this,[e,t,o,1])}function ve(e,t){var o=this;e=z(e);var i=new b(function(t,i){o.ready().then(function(){var a=o._dbInfo;a.db.transaction(function(o){qe(o,a,"DELETE FROM "+a.storeName+" WHERE key = ?",[e],function(){t()},function(e,t){i(t)})})}).catch(i)});return c(i,t),i}function ye(e){var t=this,o=new b(function(e,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(t){qe(t,i,"DELETE FROM "+i.storeName,[],function(){e()},function(e,t){o(t)})})}).catch(o)});return c(o,e),o}function Re(e){var t=this,o=new b(function(e,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(t){qe(t,i,"SELECT COUNT(key) as c FROM "+i.storeName,[],function(t,o){var i=o.rows.item(0).c;e(i)},function(e,t){o(t)})})}).catch(o)});return c(o,e),o}function Le(e,t){var o=this,i=new b(function(t,i){o.ready().then(function(){var a=o._dbInfo;a.db.transaction(function(o){qe(o,a,"SELECT key FROM "+a.storeName+" WHERE id = ? LIMIT 1",[e+1],function(e,o){var i=o.rows.length?o.rows.item(0).key:null;t(i)},function(e,t){i(t)})})}).catch(i)});return c(i,t),i}function we(e){var t=this,o=new b(function(e,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(t){qe(t,i,"SELECT key FROM "+i.storeName,[],function(t,o){for(var i=[],a=0;a<o.rows.length;a++)i.push(o.rows.item(a).key);e(i)},function(e,t){o(t)})})}).catch(o)});return c(o,e),o}function Ne(e){return new b(function(t,o){e.transaction(function(i){i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,i){for(var a=[],n=0;n<i.rows.length;n++)a.push(i.rows.item(n).name);t({db:e,storeNames:a})},function(e,t){o(t)})},function(e){o(e)})})}function Be(e,t){t=l.apply(this,arguments);var o=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||o.name,e.storeName=e.storeName||o.storeName);var i,a=this;return i=e.name?new b(function(t){var i;i=e.name===o.name?a._dbInfo.db:openDatabase(e.name,"","",0),e.storeName?t({db:i,storeNames:[e.storeName]}):t(Ne(i))}).then(function(e){return new b(function(t,o){e.db.transaction(function(i){function a(e){return new b(function(t,o){i.executeSql("DROP TABLE IF EXISTS "+e,[],function(){t()},function(e,t){o(t)})})}for(var n=[],r=0,s=e.storeNames.length;r<s;r++)n.push(a(e.storeNames[r]));b.all(n).then(function(){t()}).catch(function(e){o(e)})},function(e){o(e)})})}):b.reject("Invalid arguments"),c(i,t),i}var _e={_driver:"webSQLStorage",_initStorage:fe,_support:U(),iterate:We,getItem:ge,setItem:xe,removeItem:ve,clear:ye,length:Re,key:Le,keys:we,dropInstance:Be};function Se(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(uo){return!1}}function Xe(e,t){var o=e.name+"/";return e.storeName!==t.storeName&&(o+=e.storeName+"/"),o}function ke(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch(uo){return!0}}function Ce(){return!ke()||localStorage.length>0}function Te(e){var t=this,o={};if(e)for(var i in e)o[i]=e[i];return o.keyPrefix=Xe(e,t._defaultConfig),Ce()?(t._dbInfo=o,o.serializer=Ae,b.resolve()):b.reject()}function Ee(e){var t=this,o=t.ready().then(function(){for(var e=t._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var i=localStorage.key(o);0===i.indexOf(e)&&localStorage.removeItem(i)}});return c(o,e),o}function Pe(e,t){var o=this;e=z(e);var i=o.ready().then(function(){var t=o._dbInfo,i=localStorage.getItem(t.keyPrefix+e);return i&&(i=t.serializer.deserialize(i)),i});return c(i,t),i}function De(e,t){var o=this,i=o.ready().then(function(){for(var t=o._dbInfo,i=t.keyPrefix,a=i.length,n=localStorage.length,r=1,s=0;s<n;s++){var p=localStorage.key(s);if(0===p.indexOf(i)){var b=localStorage.getItem(p);if(b&&(b=t.serializer.deserialize(b)),void 0!==(b=e(b,p.substring(a),r++)))return b}}});return c(i,t),i}function Ie(e,t){var o=this,i=o.ready().then(function(){var t,i=o._dbInfo;try{t=localStorage.key(e)}catch(a){t=null}return t&&(t=t.substring(i.keyPrefix.length)),t});return c(i,t),i}function He(e){var t=this,o=t.ready().then(function(){for(var e=t._dbInfo,o=localStorage.length,i=[],a=0;a<o;a++){var n=localStorage.key(a);0===n.indexOf(e.keyPrefix)&&i.push(n.substring(e.keyPrefix.length))}return i});return c(o,e),o}function Fe(e){var t=this.keys().then(function(e){return e.length});return c(t,e),t}function Ye(e,t){var o=this;e=z(e);var i=o.ready().then(function(){var t=o._dbInfo;localStorage.removeItem(t.keyPrefix+e)});return c(i,t),i}function je(e,t,o){var i=this;e=z(e);var a=i.ready().then(function(){void 0===t&&(t=null);var o=t;return new b(function(a,n){var r=i._dbInfo;r.serializer.serialize(t,function(t,i){if(i)n(i);else try{localStorage.setItem(r.keyPrefix+e,t),a(o)}catch(uo){"QuotaExceededError"!==uo.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==uo.name||n(uo),n(uo)}})})});return c(a,o),a}function Ge(e,t){if(t=l.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var o=this.config();e.name=e.name||o.name,e.storeName=e.storeName||o.storeName}var i,a=this;return i=e.name?new b(function(t){e.storeName?t(Xe(e,a._defaultConfig)):t(e.name+"/")}).then(function(e){for(var t=localStorage.length-1;t>=0;t--){var o=localStorage.key(t);0===o.indexOf(e)&&localStorage.removeItem(o)}}):b.reject("Invalid arguments"),c(i,t),i}var Ve={_driver:"localStorageWrapper",_initStorage:Te,_support:Se(),iterate:De,getItem:Pe,setItem:je,removeItem:Ye,clear:Ee,length:Fe,key:Ie,keys:He,dropInstance:Ge},Ue=function(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)},$e=function(e,t){for(var o=e.length,i=0;i<o;){if(Ue(e[i],t))return!0;i++}return!1},Ze=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Ke={},Je={},Qe={INDEXEDDB:V,WEBSQL:_e,LOCALSTORAGE:Ve},et=[Qe.INDEXEDDB._driver,Qe.WEBSQL._driver,Qe.LOCALSTORAGE._driver],tt=["dropInstance"],ot=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(tt),it={description: ''
  ha-card {
    overflow: hidden;
    position: relative;
  }

  ha-card.section {
    height: 100%;
  }

  .wrapper {
    display: grid;
    grid-template-areas: 'header' 'graph';
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }
  ha-card.section .wrapper {
    height: 100%;
    min-width: 0;
    min-height: 0;
  }

  #graph-wrapper {
    height: 100%;
    grid-area: graph;
  }
  ha-card.section #graph-wrapper {
    min-width: 0;
    min-height: 0;
  }

  #brush {
    margin-top: -30px;
  }

  /* Needed for minimal layout */
  svg:not(:root) {
    overflow: visible !important;
  }

  #header {
    padding: 8px 16px 0px;
    grid-area: header;
    overflow: hidden;
  }
  ha-card.section #header {
    min-width: 0;
  }
  #header.floating {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
  }

  #header__title {
    color: var(--secondary-text-color);
    font-size: 16px;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-bottom: 5px;
  }

  #header__states {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    margin: -5px;
  }

  #header__states > * {
    margin: 5px;
  }

  #states__state {
    flex: 0 0 10%;
    position: relative;
  }

  #header__title {
    position: relative;
  }

  #header__title.actions,
  #states__state.actions {
    cursor: pointer;
  }

  #header__title.disabled,
  #states__state.disabled {
    pointer-events: none;
  }

  #state__value {
    display: table;
    white-space: nowrap;
  }

  #state__value > #state {
    font-size: 1.8em;
    font-weight: 500;
    white-space: nowrap;
  }

  #state__value > #uom {
    font-size: 1em;
    font-weight: 400;
    opacity: 0.8;
    white-space: nowrap;
  }

  #state__name {
    font-size: 0.8em;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  #last_updated {
    font-size: 0.63em;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: absolute;
    bottom: 0px;
    right: 4px;
    opacity: 0.5;
  }

  #version_info {
    font-size: 0.63em;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: absolute;
    bottom: 0px;
    left: 4px;
    opacity: 0.5;
  }

  /* Apex Charts Default CSS */
  @keyframes opaque {
    0% {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes resizeanim {
    0%,
    to {
      opacity: 0;
    }
  }

  .apexcharts-canvas {
    position: relative;
    direction: ltr !important;
    user-select: none;
  }

  .apexcharts-canvas ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 6px;
  }

  .apexcharts-canvas ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }

  .apexcharts-inner {
    position: relative;
  }

  .apexcharts-text tspan {
    font-family: inherit;
  }

  rect.legend-mouseover-inactive,
  .legend-mouseover-inactive rect,
  .legend-mouseover-inactive path,
  .legend-mouseover-inactive circle,
  .legend-mouseover-inactive line,
  .legend-mouseover-inactive text.apexcharts-yaxis-title-text,
  .legend-mouseover-inactive text.apexcharts-yaxis-label {
    transition: 0.15s ease all;
    opacity: 0.2;
  }

  .apexcharts-legend-text {
    padding-left: 15px;
    margin-left: -15px;
  }

  .apexcharts-series-collapsed {
    opacity: 0;
  }

  .apexcharts-tooltip {
    border-radius: 5px;
    box-shadow: 2px 2px 6px -4px #999;
    cursor: default;
    font-size: 14px;
    left: 62px;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    white-space: nowrap;
    z-index: 12;
    transition: 0.15s ease all;
  }

  .apexcharts-tooltip.apexcharts-active {
    opacity: 1;
    transition: 0.15s ease all;
  }

  .apexcharts-tooltip.apexcharts-theme-light {
    border: 1px solid #e3e3e3;
    background: var(--card-background-color);
  }

  .apexcharts-tooltip.apexcharts-theme-dark {
    color: #fff;
    background: rgba(30, 30, 30, 0.8);
  }

  .apexcharts-tooltip * {
    font-family: inherit;
  }

  .apexcharts-tooltip-title {
    padding: 6px;
    font-size: 15px;
    margin-bottom: 4px;
  }

  .apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
    background: var(--primary-background-color);
    border-bottom: 1px solid #ddd;
  }

  .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
    background: rgba(0, 0, 0, 0.7);
    border-bottom: 1px solid #333;
  }

  .apexcharts-tooltip-text-goals-value,
  .apexcharts-tooltip-text-y-value,
  .apexcharts-tooltip-text-z-value {
    display: inline-block;
    margin-left: 5px;
    font-weight: 600;
  }

  .apexcharts-tooltip-text-goals-label:empty,
  .apexcharts-tooltip-text-goals-value:empty,
  .apexcharts-tooltip-text-y-label:empty,
  .apexcharts-tooltip-text-y-value:empty,
  .apexcharts-tooltip-text-z-value:empty,
  .apexcharts-tooltip-title:empty {
    display: none;
  }

  .apexcharts-tooltip-text-goals-label,
  .apexcharts-tooltip-text-goals-value {
    padding: 6px 0 5px;
  }

  .apexcharts-tooltip-goals-group,
  .apexcharts-tooltip-text-goals-label,
  .apexcharts-tooltip-text-goals-value {
    display: flex;
  }

  .apexcharts-tooltip-text-goals-label:not(:empty),
  .apexcharts-tooltip-text-goals-value:not(:empty) {
    margin-top: -6px;
  }

  .apexcharts-tooltip-marker {
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    font-size: 16px;
    line-height: 16px;
    margin-right: 4px;
    text-align: center;
    vertical-align: middle;
    color: inherit;
  }

  .apexcharts-tooltip-marker::before {
    content: '';
    display: inline-block;
    width: 100%;
    text-align: center;
    color: currentcolor;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 14px;
    font-weight: 900;
  }

  .apexcharts-tooltip-marker[shape='circle']::before {
    content: '\\25CF';
  }

  .apexcharts-tooltip-marker[shape='square']::before,
  .apexcharts-tooltip-marker[shape='rect']::before {
    content: '\\25A0';
    transform: translate(-1px, -2px);
  }

  .apexcharts-tooltip-marker[shape='line']::before {
    content: '\\2500';
  }

  .apexcharts-tooltip-marker[shape='diamond']::before {
    content: '\\25C6';
    font-size: 28px;
  }

  .apexcharts-tooltip-marker[shape='triangle']::before {
    content: '\\25B2';
    font-size: 22px;
  }

  .apexcharts-tooltip-marker[shape='cross']::before {
    content: '\\2715';
    font-size: 18px;
  }

  .apexcharts-tooltip-marker[shape='plus']::before {
    content: '\\2715';
    transform: rotate(45deg) translate(-1px, -1px);
    font-size: 18px;
  }

  .apexcharts-tooltip-marker[shape='star']::before {
    content: '\\2605';
    font-size: 18px;
  }

  .apexcharts-tooltip-marker[shape='sparkle']::before {
    content: '\\2726';
    font-size: 20px;
  }

  .apexcharts-tooltip-series-group {
    padding: 0 10px;
    display: none;
    text-align: left;
    justify-content: left;
    align-items: center;
  }

  .apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
    opacity: 1;
  }

  .apexcharts-tooltip-series-group.apexcharts-active,
  .apexcharts-tooltip-series-group:last-child {
    padding-bottom: 4px;
  }

  .apexcharts-tooltip-y-group {
    padding: 6px 0 5px;
  }

  .apexcharts-custom-tooltip,
  .apexcharts-tooltip-box {
    padding: 4px 8px;
  }

  .apexcharts-tooltip-boxPlot {
    display: flex;
    flex-direction: column-reverse;
  }

  .apexcharts-tooltip-box > div {
    margin: 4px 0;
  }

  .apexcharts-tooltip-box span.value {
    font-weight: 700;
  }

  .apexcharts-tooltip-rangebar {
    padding: 5px 8px;
  }

  .apexcharts-tooltip-rangebar .category {
    font-weight: 600;
    color: #777;
  }

  .apexcharts-tooltip-rangebar .series-name {
    font-weight: 700;
    display: block;
    margin-bottom: 5px;
  }

  .apexcharts-xaxistooltip,
  .apexcharts-yaxistooltip {
    opacity: 0;
    pointer-events: none;
    color: var(--primary-text-color);
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: absolute;
    z-index: 10;
    background: var(--card-background-color);
    border: 1px solid #90a4ae;
  }

  .apexcharts-xaxistooltip {
    padding: 9px 10px;
    transition: 0.15s ease all;
  }

  .apexcharts-xaxistooltip.apexcharts-theme-dark {
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.5);
    color: #fff;
  }

  .apexcharts-xaxistooltip:after,
  .apexcharts-xaxistooltip:before {
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .apexcharts-xaxistooltip:after {
    border-color: transparent;
    border-width: 6px;
    margin-left: -6px;
  }

  .apexcharts-xaxistooltip:before {
    border-color: transparent;
    border-width: 7px;
    margin-left: -7px;
  }

  .apexcharts-xaxistooltip-bottom:after,
  .apexcharts-xaxistooltip-bottom:before {
    bottom: 100%;
  }

  .apexcharts-xaxistooltip-top:after,
  .apexcharts-xaxistooltip-top:before {
    top: 100%;
  }

  .apexcharts-xaxistooltip-bottom:after {
    border-bottom-color: #eceff1;
  }

  .apexcharts-xaxistooltip-bottom:before {
    border-bottom-color: #90a4ae;
  }

  .apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,
  .apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
    border-bottom-color: rgba(0, 0, 0, 0.5);
  }

  .apexcharts-xaxistooltip-top:after {
    border-top-color: #eceff1;
  }

  .apexcharts-xaxistooltip-top:before {
    border-top-color: #90a4ae;
  }

  .apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,
  .apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
    border-top-color: rgba(0, 0, 0, 0.5);
  }

  .apexcharts-xaxistooltip.apexcharts-active {
    opacity: 1;
    transition: 0.15s ease all;
  }

  .apexcharts-yaxistooltip {
    padding: 4px 10px;
  }

  .apexcharts-yaxistooltip.apexcharts-theme-dark {
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.5);
    color: #fff;
  }

  .apexcharts-yaxistooltip:after,
  .apexcharts-yaxistooltip:before {
    top: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .apexcharts-yaxistooltip:after {
    border-color: transparent;
    border-width: 6px;
    margin-top: -6px;
  }

  .apexcharts-yaxistooltip:before {
    border-color: transparent;
    border-width: 7px;
    margin-top: -7px;
  }

  .apexcharts-yaxistooltip-left:after,
  .apexcharts-yaxistooltip-left:before {
    left: 100%;
  }

  .apexcharts-yaxistooltip-right:after,
  .apexcharts-yaxistooltip-right:before {
    right: 100%;
  }

  .apexcharts-yaxistooltip-left:after {
    border-left-color: #eceff1;
  }

  .apexcharts-yaxistooltip-left:before {
    border-left-color: #90a4ae;
  }

  .apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,
  .apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
    border-left-color: rgba(0, 0, 0, 0.5);
  }

  .apexcharts-yaxistooltip-right:after {
    border-right-color: #eceff1;
  }

  .apexcharts-yaxistooltip-right:before {
    border-right-color: #90a4ae;
  }

  .apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,
  .apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
    border-right-color: rgba(0, 0, 0, 0.5);
  }

  .apexcharts-yaxistooltip.apexcharts-active {
    opacity: 1;
  }

  .apexcharts-yaxistooltip-hidden {
    display: none;
  }

  .apexcharts-xcrosshairs,
  .apexcharts-ycrosshairs {
    pointer-events: none;
    opacity: 0;
    transition: 0.15s ease all;
  }

  .apexcharts-xcrosshairs.apexcharts-active,
  .apexcharts-ycrosshairs.apexcharts-active {
    opacity: 1;
    transition: 0.15s ease all;
  }

  .apexcharts-ycrosshairs-hidden {
    opacity: 0;
  }

  .apexcharts-selection-rect {
    cursor: move;
  }

  .svg_select_shape {
    stroke-width: 1;
    stroke-dasharray: 10 10;
    stroke: black;
    stroke-opacity: 0.1;
    pointer-events: none;
    fill: none;
  }

  .svg_select_handle {
    stroke-width: 3;
    stroke: black;
    fill: none;
  }

  .svg_select_handle_r {
    cursor: e-resize;
  }

  .svg_select_handle_l {
    cursor: w-resize;
  }

  .apexcharts-svg.apexcharts-zoomable.hovering-zoom {
    cursor: crosshair;
  }

  .apexcharts-svg.apexcharts-zoomable.hovering-pan {
    cursor: move;
  }

  .apexcharts-menu-icon,
  .apexcharts-pan-icon,
  .apexcharts-reset-icon,
  .apexcharts-selection-icon,
  .apexcharts-toolbar-custom-icon,
  .apexcharts-zoom-icon,
  .apexcharts-zoomin-icon,
  .apexcharts-zoomout-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
    line-height: 24px;
    color: var(--primary-text-color);
    text-align: center;
  }

  .apexcharts-menu-icon svg,
  .apexcharts-reset-icon svg,
  .apexcharts-zoom-icon svg,
  .apexcharts-zoomin-icon svg,
  .apexcharts-zoomout-icon svg {
    fill: var(--primary-text-color);
  }

  .apexcharts-selection-icon svg {
    fill: #444;
    transform: scale(0.76);
  }

  .apexcharts-theme-dark .apexcharts-menu-icon svg,
  .apexcharts-theme-dark .apexcharts-pan-icon svg,
  .apexcharts-theme-dark .apexcharts-reset-icon svg,
  .apexcharts-theme-dark .apexcharts-selection-icon svg,
  .apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,
  .apexcharts-theme-dark .apexcharts-zoom-icon svg,
  .apexcharts-theme-dark .apexcharts-zoomin-icon svg,
  .apexcharts-theme-dark .apexcharts-zoomout-icon svg {
    fill: #f3f4f5;
  }

  .apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,
  .apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,
  .apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {
    fill: var(--primary-color);
  }

  .apexcharts-theme-light .apexcharts-menu-icon:hover svg,
  .apexcharts-theme-light .apexcharts-reset-icon:hover svg,
  .apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,
  .apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,
  .apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,
  .apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {
    fill: var(--primary-color);
  }

  .apexcharts-menu-icon,
  .apexcharts-selection-icon {
    position: relative;
  }

  .apexcharts-reset-icon {
    margin-left: 5px;
  }

  .apexcharts-menu-icon,
  .apexcharts-reset-icon,
  .apexcharts-zoom-icon {
    transform: scale(0.85);
  }

  .apexcharts-zoomin-icon,
  .apexcharts-zoomout-icon {
    transform: scale(0.7);
  }

  .apexcharts-zoomout-icon {
    margin-right: 3px;
  }

  .apexcharts-pan-icon {
    transform: scale(0.62);
    position: relative;
    left: 1px;
    top: 0;
  }

  .apexcharts-pan-icon svg {
    fill: var(--primary-text-color);
    stroke: #6e8192;
    stroke-width: 2;
  }

  .apexcharts-pan-icon.apexcharts-selected svg {
    stroke: var(--primary-color);
  }

  .apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
    stroke: var(--primary-color);
  }

  .apexcharts-toolbar {
    position: absolute;
    z-index: 1;
    max-width: 176px;
    text-align: right;
    border-radius: 3px;
    padding: 0 6px 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .apexcharts-menu {
    background: var(--primary-background-color);
    position: absolute;
    top: 100%;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 3px;
    right: 10px;
    opacity: 0;
    min-width: 110px;
    transition: 0.15s ease all;
    pointer-events: none;
  }

  .apexcharts-menu.apexcharts-menu-open {
    opacity: 1;
    pointer-events: all;
    transition: 0.15s ease all;
  }

  .apexcharts-menu-item {
    padding: 6px 7px;
    font-size: 12px;
    cursor: pointer;
  }

  .apexcharts-theme-light .apexcharts-menu-item:hover {
    background: var(--primary-color);
  }

  .apexcharts-theme-dark .apexcharts-menu {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    .apexcharts-canvas:hover .apexcharts-toolbar {
      opacity: 1;
    }
  }

  .apexcharts-canvas .apexcharts-element-hidden,
  .apexcharts-datalabel.apexcharts-element-hidden,
  .apexcharts-hide .apexcharts-series-points {
    opacity: 0;
  }

  .apexcharts-hidden-element-shown {
    opacity: 1;
    transition: 0.25s ease all;
  }

  .apexcharts-datalabel,
  .apexcharts-datalabel-label,
  .apexcharts-datalabel-value,
  .apexcharts-datalabels,
  .apexcharts-pie-label {
    cursor: default;
    pointer-events: none;
  }

  .apexcharts-pie-label-delay {
    opacity: 0;
    animation-name: opaque;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }

  .apexcharts-radialbar-label {
    cursor: pointer;
  }

  .apexcharts-annotation-rect,
  .apexcharts-area-series .apexcharts-area,
  .apexcharts-gridline,
  .apexcharts-line,
  .apexcharts-point-annotation-label,
  .apexcharts-radar-series path:not(.apexcharts-marker),
  .apexcharts-radar-series polygon,
  .apexcharts-toolbar svg,
  .apexcharts-tooltip .apexcharts-marker,
  .apexcharts-xaxis-annotation-label,
  .apexcharts-yaxis-annotation-label,
  .apexcharts-zoom-rect,
  .no-pointer-events {
    pointer-events: none;
  }

  .apexcharts-tooltip-active .apexcharts-marker {
    transition: 0.15s ease all;
  }

  .apexcharts-radar-series .apexcharts-yaxis {
    pointer-events: none;
  }

  .resize-triggers {
    animation: 1ms resizeanim;
    visibility: hidden;
    opacity: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .contract-trigger:before,
  .resize-triggers,
  .resize-triggers > div {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  .resize-triggers > div {
    height: 100%;
    width: 100%;
    background: #eee;
    overflow: auto;
  }

  .contract-trigger:before {
    overflow: hidden;
    width: 200%;
    height: 200%;
  }

  .apexcharts-bar-goals-markers {
    pointer-events: none;
  }

  .apexcharts-bar-shadows {
    pointer-events: none;
  }

  .apexcharts-rangebar-goals-markers {
    pointer-events: none;
  }

  .apexcharts-disable-transitions * {
    transition: none !important;
  }

  /* spinner */
  #spinner-wrapper {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 20px;
    width: 20px;
    opacity: 0.5;
  }

  #spinner {
    position: relative;
  }

  .lds-ring,
  .lds-ring div {
    box-sizing: border-box;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    margin: 2px;
    border: 2px solid var(--primary-text-color);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--primary-text-color) transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,Rs={chart:{offsetY:15,parentHeightOffset:0},grid:{show:!1,padding:{left:0,right:0}},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{show:!0},tooltip:{enabled:!1}},yaxis:{show:!1,showAlways:!0,tooltip:{enabled:!0}},legend:{position:"top"}};var Ls={months:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],shortMonths:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],days:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],shortDays:["أحد","إثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],toolbar:{exportToSVG:"تحميل بصيغة SVG",exportToPNG:"تحميل بصيغة PNG",exportToCSV:"تحميل بصيغة CSV",menu:"القائمة",selection:"تحديد",selectionZoom:"تكبير التحديد",zoomIn:"تكبير",zoomOut:"تصغير",pan:"تحريك",reset:"إعادة التعيين"}},ws={name:"ar",options:Ls},Ns=Object.freeze({__proto__:null,name:"ar",options:Ls,default:ws}),Bs="be-cyrl",_s={months:["Студзень","Люты","Сакавік","Красавік","Травень","Чэрвень","Ліпень","Жнівень","Верасень","Кастрычнік","Лістапад","Сьнежань"],shortMonths:["Сту","Лют","Сак","Кра","Тра","Чэр","Ліп","Жні","Вер","Кас","Ліс","Сьн"],days:["Нядзеля","Панядзелак","Аўторак","Серада","Чацьвер","Пятніца","Субота"],shortDays:["Нд","Пн","Аў","Ср","Чц","Пт","Сб"],toolbar:{exportToSVG:"Спампаваць SVG",exportToPNG:"Спампаваць PNG",exportToCSV:"Спампаваць CSV",menu:"Мэню",selection:"Вылучэньне",selectionZoom:"Вылучэньне з маштабаваньнем",zoomIn:"Наблізіць",zoomOut:"Аддаліць",pan:"Ссоўваньне",reset:"Скінуць маштабаваньне"}},Ss={name:Bs,options:_s},Xs=Object.freeze({__proto__:null,name:Bs,options:_s,default:Ss}),ks="be-latn",Cs={months:["Studzień","Luty","Sakavik","Krasavik","Travień","Červień","Lipień","Žnivień","Vierasień","Kastryčnik","Listapad","Śniežań"],shortMonths:["Stu","Lut","Sak","Kra","Tra","Čer","Lip","Žni","Vie","Kas","Lis","Śni"],days:["Niadziela","Paniadziełak","Aŭtorak","Sierada","Čaćvier","Piatnica","Subota"],shortDays:["Nd","Pn","Aŭ","Sr","Čć","Pt","Sb"],toolbar:{exportToSVG:"Spampavać SVG",exportToPNG:"Spampavać PNG",exportToCSV:"Spampavać CSV",menu:"Meniu",selection:"Vyłučeńnie",selectionZoom:"Vyłučeńnie z maštabavańniem",zoomIn:"Nablizić",zoomOut:"Addalić",pan:"Ssoŭvańnie",reset:"Skinuć maštabavańnie"}},Ts={name:ks,options:Cs},Es=Object.freeze({__proto__:null,name:ks,options:Cs,default:Ts}),Ps={months:["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],shortMonths:["Gen.","Febr.","Març","Abr.","Maig","Juny","Jul.","Ag.","Set.","Oct.","Nov.","Des."],days:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"],shortDays:["Dg","Dl","Dt","Dc","Dj","Dv","Ds"],toolbar:{exportToSVG:"Descarregar SVG",exportToPNG:"Descarregar PNG",exportToCSV:"Descarregar CSV",menu:"Menú",selection:"Seleccionar",selectionZoom:"Seleccionar Zoom",zoomIn:"Augmentar",zoomOut:"Disminuir",pan:"Navegació",reset:"Reiniciar Zoom"}},Ds={name:"ca",options:Ps},Is=Object.freeze({__proto__:null,name:"ca",options:Ps,default:Ds}),Hs={months:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"],shortMonths:["Led","Úno","Bře","Dub","Kvě","Čvn","Čvc","Srp","Zář","Říj","Lis","Pro"],days:["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota"],shortDays:["Ne","Po","Út","St","Čt","Pá","So"],toolbar:{exportToSVG:"Stáhnout SVG",exportToPNG:"Stáhnout PNG",exportToCSV:"Stáhnout CSV",menu:"Menu",selection:"Vybrat",selectionZoom:"Zoom: Vybrat",zoomIn:"Zoom: Přiblížit",zoomOut:"Zoom: Oddálit",pan:"Přesouvat",reset:"Resetovat"}},Fs={name:"cs",options:Hs},Ys=Object.freeze({__proto__:null,name:"cs",options:Hs,default:Fs}),js={months:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],shortMonths:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],days:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],shortDays:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Valg",selectionZoom:"Zoom til valg",zoomIn:"Zoom ind",zoomOut:"Zoom ud",pan:"Panorér",reset:"Nulstil zoom"}},Gs={name:"da",options:js},Vs=Object.freeze({__proto__:null,name:"da",options:js,default:Gs}),Us={months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],shortMonths:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],shortDays:["So","Mo","Di","Mi","Do","Fr","Sa"],toolbar:{exportToSVG:"SVG speichern",exportToPNG:"PNG speichern",exportToCSV:"CSV speichern",menu:"Menü",selection:"Auswahl",selectionZoom:"Auswahl vergrößern",zoomIn:"Vergrößern",zoomOut:"Verkleinern",pan:"Verschieben",reset:"Zoom zurücksetzen"}},$s={name:"de",options:Us},Zs=Object.freeze({__proto__:null,name:"de",options:Us,default:$s}),Ks={months:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],shortMonths:["Ιαν","Φευ","Μαρ","Απρ","Μάι","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],days:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],shortDays:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],toolbar:{exportToSVG:"Λήψη SVG",exportToPNG:"Λήψη PNG",exportToCSV:"Λήψη CSV",menu:"Menu",selection:"Επιλογή",selectionZoom:"Μεγένθυση βάση επιλογής",zoomIn:"Μεγένθυνση",zoomOut:"Σμίκρυνση",pan:"Μετατόπιση",reset:"Επαναφορά μεγένθυνσης"}},Js={name:"el",options:Ks},Qs=Object.freeze({__proto__:null,name:"el",options:Ks,default:Js}),ep={months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}},tp={name:"en",options:ep},op=Object.freeze({__proto__:null,name:"en",options:ep,default:tp}),ip={months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],shortMonths:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],days:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],shortDays:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],toolbar:{exportToSVG:"Descargar SVG",exportToPNG:"Descargar PNG",exportToCSV:"Descargar CSV",menu:"Menu",selection:"Seleccionar",selectionZoom:"Seleccionar Zoom",zoomIn:"Aumentar",zoomOut:"Disminuir",pan:"Navegación",reset:"Reiniciar Zoom"}},ap={name:"es",options:ip},np=Object.freeze({__proto__:null,name:"es",options:ip,default:ap}),rp={months:["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"],shortMonths:["jaan","veebr","märts","apr","mai","juuni","juuli","aug","sept","okt","nov","dets"],days:["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"],shortDays:["P","E","T","K","N","R","L"],toolbar:{exportToSVG:"Lae alla SVG",exportToPNG:"Lae alla PNG",exportToCSV:"Lae alla CSV",menu:"Menüü",selection:"Valik",selectionZoom:"Valiku suum",zoomIn:"Suurenda",zoomOut:"Vähenda",pan:"Panoraamimine",reset:"Lähtesta suum"}},sp={name:"et",options:rp},pp=Object.freeze({__proto__:null,name:"et",options:rp,default:sp}),bp={months:["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],shortMonths:["فرو","ارد","خرد","تیر","مرد","شهر","مهر","آبا","آذر","دی","بهمـ","اسفـ"],days:["یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],shortDays:["ی","د","س","چ","پ","ج","ش"],toolbar:{exportToSVG:"دانلود SVG",exportToPNG:"دانلود PNG",exportToCSV:"دانلود CSV",menu:"منو",selection:"انتخاب",selectionZoom:"بزرگنمایی انتخابی",zoomIn:"بزرگنمایی",zoomOut:"کوچکنمایی",pan:"پیمایش",reset:"بازنشانی بزرگنمایی"}},cp={name:"fa",options:bp},Mp=Object.freeze({__proto__:null,name:"fa",options:bp,default:cp}),zp={months:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],shortMonths:["Tammi","Helmi","Maalis","Huhti","Touko","Kesä","Heinä","Elo","Syys","Loka","Marras","Joulu"],days:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],shortDays:["Su","Ma","Ti","Ke","To","Pe","La"],toolbar:{exportToSVG:"Lataa SVG",exportToPNG:"Lataa PNG",exportToCSV:"Lataa CSV",menu:"Valikko",selection:"Valinta",selectionZoom:"Valinnan zoomaus",zoomIn:"Lähennä",zoomOut:"Loitonna",pan:"Panoroi",reset:"Nollaa zoomaus"}},lp={name:"fi",options:zp},Op=Object.freeze({__proto__:null,name:"fi",options:zp,default:lp}),dp={months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],shortMonths:["janv.","févr.","mars","avr.","mai","juin","juill.","août","sept.","oct.","nov.","déc."],days:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],shortDays:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],toolbar:{exportToSVG:"Télécharger au format SVG",exportToPNG:"Télécharger au format PNG",exportToCSV:"Télécharger au format CSV",menu:"Menu",selection:"Sélection",selectionZoom:"Sélection et zoom",zoomIn:"Zoomer",zoomOut:"Dézoomer",pan:"Navigation",reset:"Réinitialiser le zoom"}},hp={name:"fr",options:dp},Ap=Object.freeze({__proto__:null,name:"fr",options:dp,default:hp}),up={months:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],shortMonths:["ינו׳","פבר׳","מרץ","אפר׳","מאי","יוני","יולי","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"],days:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],shortDays:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],toolbar:{exportToSVG:"הורד SVG",exportToPNG:"הורד PNG",exportToCSV:"הורד CSV",menu:"תפריט",selection:"בחירה",selectionZoom:"זום בחירה",zoomIn:"הגדלה",zoomOut:"הקטנה",pan:"הזזה",reset:"איפוס תצוגה"}},fp={name:"he",options:up},qp=Object.freeze({__proto__:null,name:"he",options:up,default:fp}),gp={months:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"],shortMonths:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"],days:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],shortDays:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],toolbar:{exportToSVG:"निर्यात SVG",exportToPNG:"निर्यात PNG",exportToCSV:"निर्यात CSV",menu:"सूची",selection:"चयन",selectionZoom:"ज़ूम करना",zoomIn:"ज़ूम इन",zoomOut:"ज़ूम आउट",pan:"पैनिंग",reset:"फिर से कायम करना"}},Wp={name:"hi",options:gp},mp=Object.freeze({__proto__:null,name:"hi",options:gp,default:Wp}),xp={months:["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],shortMonths:["Sij","Velj","Ožu","Tra","Svi","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"],days:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"],shortDays:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],toolbar:{exportToSVG:"Preuzmi SVG",exportToPNG:"Preuzmi PNG",exportToCSV:"Preuzmi CSV",menu:"Izbornik",selection:"Odabir",selectionZoom:"Odabirno povećanje",zoomIn:"Uvećajte prikaz",zoomOut:"Umanjite prikaz",pan:"Pomicanje",reset:"Povratak na zadani prikaz"}},vp={name:"hr",options:xp},yp=Object.freeze({__proto__:null,name:"hr",options:xp,default:vp}),Rp={months:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],shortMonths:["jan","feb","mar","ápr","máj","jún","júl","aug","szept","okt","nov","dec"],days:["hétfő","kedd","szerda","csütörtök","péntek","szombat","vasárnap"],shortDays:["H","K","Sze","Cs","P","Szo","V"],toolbar:{exportToSVG:"Exportálás SVG-be",exportToPNG:"Exportálás PNG-be",exportToCSV:"Exportálás CSV-be",menu:"Fő ajánlat",download:"SVG letöltése",selection:"Kiválasztás",selectionZoom:"Nagyító kiválasztása",zoomIn:"Nagyítás",zoomOut:"Kicsinyítés",pan:"Képcsúsztatás",reset:"Nagyító visszaállítása"}},Lp={name:"hu",options:Rp},wp=Object.freeze({__proto__:null,name:"hu",options:Rp,default:Lp}),Np={months:["Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր"],shortMonths:["Հնվ","Փտվ","Մրտ","Ապր","Մյս","Հնս","Հլիս","Օգս","Սեպ","Հոկ","Նոյ","Դեկ"],days:["Կիրակի","Երկուշաբթի","Երեքշաբթի","Չորեքշաբթի","Հինգշաբթի","Ուրբաթ","Շաբաթ"],shortDays:["Կիր","Երկ","Երք","Չրք","Հնգ","Ուրբ","Շբթ"],toolbar:{exportToSVG:"Բեռնել SVG",exportToPNG:"Բեռնել PNG",exportToCSV:"Բեռնել CSV",menu:"Մենյու",selection:"Ընտրված",selectionZoom:"Ընտրված հատվածի խոշորացում",zoomIn:"Խոշորացնել",zoomOut:"Մանրացնել",pan:"Տեղափոխում",reset:"Բերել սկզբնական վիճակի"}},Bp={name:"hy",options:Np},_p=Object.freeze({__proto__:null,name:"hy",options:Np,default:Bp}),Sp={months:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],shortMonths:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],days:["Minggu","Senin","Selasa","Rabu","kamis","Jumat","Sabtu"],shortDays:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],toolbar:{exportToSVG:"Unduh SVG",exportToPNG:"Unduh PNG",exportToCSV:"Unduh CSV",menu:"Menu",selection:"Pilihan",selectionZoom:"Perbesar Pilihan",zoomIn:"Perbesar",zoomOut:"Perkecil",pan:"Geser",reset:"Atur Ulang Zoom"}},Xp={name:"id",options:Sp},kp=Object.freeze({__proto__:null,name:"id",options:Sp,default:Xp}),Cp={months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],shortMonths:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],days:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],shortDays:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],toolbar:{exportToSVG:"Scarica SVG",exportToPNG:"Scarica PNG",exportToCSV:"Scarica CSV",menu:"Menu",selection:"Selezione",selectionZoom:"Seleziona Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Sposta",reset:"Reimposta Zoom"}},Tp={name:"it",options:Cp},Ep=Object.freeze({__proto__:null,name:"it",options:Cp,default:Tp}),Pp={months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],shortMonths:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],days:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],shortDays:["日","月","火","水","木","金","土"],toolbar:{exportToSVG:"SVGダウンロード",exportToPNG:"PNGダウンロード",exportToCSV:"CSVダウンロード",menu:"メニュー",selection:"選択",selectionZoom:"選択ズーム",zoomIn:"拡大",zoomOut:"縮小",pan:"パン",reset:"ズームリセット"}},Dp={name:"ja",options:Pp},Ip=Object.freeze({__proto__:null,name:"ja",options:Pp,default:Dp}),Hp={months:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],shortMonths:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],days:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"],shortDays:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],toolbar:{exportToSVG:"გადმოქაჩე SVG",exportToPNG:"გადმოქაჩე PNG",exportToCSV:"გადმოქაჩე CSV",menu:"მენიუ",selection:"არჩევა",selectionZoom:"არჩეულის გადიდება",zoomIn:"გადიდება",zoomOut:"დაპატარაება",pan:"გადაჩოჩება",reset:"გადიდების გაუქმება"}},Fp={name:"ka",options:Hp},Yp=Object.freeze({__proto__:null,name:"ka",options:Hp,default:Fp}),jp={months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],shortMonths:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],days:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],shortDays:["일","월","화","수","목","금","토"],toolbar:{exportToSVG:"SVG 다운로드",exportToPNG:"PNG 다운로드",exportToCSV:"CSV 다운로드",menu:"메뉴",selection:"선택",selectionZoom:"선택영역 확대",zoomIn:"확대",zoomOut:"축소",pan:"패닝",reset:"원래대로"}},Gp={name:"ko",options:jp},Vp=Object.freeze({__proto__:null,name:"ko",options:jp,default:Gp}),Up={months:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"],shortMonths:["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rgp","Rgs","Spl","Lap","Grd"],days:["Sekmadienis","Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","Šeštadienis"],shortDays:["Sk","Per","An","Tr","Kt","Pn","Št"],toolbar:{exportToSVG:"Atsisiųsti SVG",exportToPNG:"Atsisiųsti PNG",exportToCSV:"Atsisiųsti CSV",menu:"Menu",selection:"Pasirinkimas",selectionZoom:"Zoom: Pasirinkimas",zoomIn:"Zoom: Priartinti",zoomOut:"Zoom: Atitolinti",pan:"Perkėlimas",reset:"Atstatyti"}},$p={name:"lt",options:Up},Zp=Object.freeze({__proto__:null,name:"lt",options:Up,default:$p}),Kp={months:["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris"],shortMonths:["janv","febr","marts","apr","maijs","jūn","jūl","aug","sept","okt","nov","dec"],days:["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],shortDays:["Sv","P","O","T","C","P","S"],toolbar:{exportToSVG:"Lejuplādēt SVG",exportToPNG:"Lejuplādēt PNG",exportToCSV:"Lejuplādēt CSV",menu:"Izvēlne",selection:"Atlase",selectionZoom:"Pietuvināt atlasi",zoomIn:"Pietuvināt",zoomOut:"Attālināt",pan:"Pārvietoties diagrammā",reset:"Atiestatīt pietuvinājumu"}},Jp={name:"lv",options:Kp},Qp=Object.freeze({__proto__:null,name:"lv",options:Kp,default:Jp}),eb={months:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],shortMonths:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogos","Sep","Okt","Nov","Dis"],days:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],shortDays:["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],toolbar:{exportToSVG:"Muat turun SVG",exportToPNG:"Muat turun PNG",exportToCSV:"Muat turun CSV",menu:"Menu",selection:"Pilihan",selectionZoom:"Zum Pilihan",zoomIn:"Zoom Masuk",zoomOut:"Zoom Keluar",pan:"Pemusingan",reset:"Tetapkan Semula Zum"}},tb={name:"ms",options:eb},ob=Object.freeze({__proto__:null,name:"ms",options:eb,default:tb}),ib={months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],shortMonths:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],days:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],shortDays:["Sø","Ma","Ti","On","To","Fr","Lø"],toolbar:{exportToSVG:"Last ned SVG",exportToPNG:"Last ned PNG",exportToCSV:"Last ned CSV",menu:"Menu",selection:"Velg",selectionZoom:"Zoom: Velg",zoomIn:"Zoome inn",zoomOut:"Zoome ut",pan:"Skyving",reset:"Start på nytt"}},ab={name:"nb",options:ib},nb=Object.freeze({__proto__:null,name:"nb",options:ib,default:ab}),rb={months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],shortMonths:["jan.","feb.","mrt.","apr.","mei.","jun.","jul.","aug.","sep.","okt.","nov.","dec."],days:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],shortDays:["zo.","ma.","di.","wo.","do.","vr.","za."],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selectie",selectionZoom:"Zoom selectie",zoomIn:"Zoom in",zoomOut:"Zoom out",pan:"Verplaatsen",reset:"Standaardwaarden"}},sb={name:"nl",options:rb},pb=Object.freeze({__proto__:null,name:"nl",options:rb,default:sb}),bb={months:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],shortMonths:["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"],days:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],shortDays:["Nd","Pn","Wt","Śr","Cz","Pt","Sb"],toolbar:{exportToSVG:"Pobierz SVG",exportToPNG:"Pobierz PNG",exportToCSV:"Pobierz CSV",menu:"Menu",selection:"Wybieranie",selectionZoom:"Zoom: Wybieranie",zoomIn:"Zoom: Przybliż",zoomOut:"Zoom: Oddal",pan:"Przesuwanie",reset:"Resetuj"}},cb={name:"pl",options:bb},Mb=Object.freeze({__proto__:null,name:"pl",options:bb,default:cb}),zb="pt-br",lb={months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],days:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],toolbar:{exportToSVG:"Baixar SVG",exportToPNG:"Baixar PNG",exportToCSV:"Baixar CSV",menu:"Menu",selection:"Selecionar",selectionZoom:"Selecionar Zoom",zoomIn:"Aumentar",zoomOut:"Diminuir",pan:"Navegação",reset:"Reiniciar Zoom"}},Ob={name:zb,options:lb},db=Object.freeze({__proto__:null,name:zb,options:lb,default:Ob}),hb={months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ag","Set","Out","Nov","Dez"],days:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],shortDays:["Do","Se","Te","Qa","Qi","Sx","Sa"],toolbar:{exportToSVG:"Transferir SVG",exportToPNG:"Transferir PNG",exportToCSV:"Transferir CSV",menu:"Menu",selection:"Selecionar",selectionZoom:"Zoom: Selecionar",zoomIn:"Zoom: Aumentar",zoomOut:"Zoom: Diminuir",pan:"Deslocamento",reset:"Redefinir"}},Ab={name:"pt",options:hb},ub=Object.freeze({__proto__:null,name:"pt",options:hb,default:Ab}),fb={months:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],shortMonths:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],days:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"],shortDays:["Ned","Pon","Uto","Sre","Čet","Pet","Sub"],toolbar:{exportToSVG:"Preuzmi SVG",exportToPNG:"Preuzmi PNG",exportToCSV:"Preuzmi CSV",menu:"Meni",selection:"Odabir",selectionZoom:"Odabirno povećanje",zoomIn:"Uvećajte prikaz",zoomOut:"Umanjite prikaz",pan:"Pomeranje",reset:"Resetuj prikaz"}},qb={name:"rs",options:fb},gb=Object.freeze({__proto__:null,name:"rs",options:fb,default:qb}),Wb={months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],shortDays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],toolbar:{exportToSVG:"Сохранить SVG",exportToPNG:"Сохранить PNG",exportToCSV:"Сохранить CSV",menu:"Меню",selection:"Выбор",selectionZoom:"Выбор с увеличением",zoomIn:"Увеличить",zoomOut:"Уменьшить",pan:"Перемещение",reset:"Сбросить увеличение"}},mb={name:"ru",options:Wb},xb=Object.freeze({__proto__:null,name:"ru",options:Wb,default:mb}),vb={months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],shortMonths:["Jan","Feb","Mar","Apr","Maj","Juni","Juli","Aug","Sep","Okt","Nov","Dec"],days:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],shortDays:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],toolbar:{exportToSVG:"Ladda SVG",exportToPNG:"Ladda PNG",exportToCSV:"Ladda CSV",menu:"Meny",selection:"Selektion",selectionZoom:"Val av zoom",zoomIn:"Zooma in",zoomOut:"Zooma ut",pan:"Panorering",reset:"Återställ zoomning"}},yb={name:"se",options:vb},Rb=Object.freeze({__proto__:null,name:"se",options:vb,default:yb}),Lb={months:["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"],shortMonths:["Jan","Feb","Mar","Apr","Máj","Jún","Júl","Aug","Sep","Okt","Nov","Dec"],days:["Nedeľa","Pondelok","Utorok","Streda","Štvrtok","Piatok","Sobota"],shortDays:["Ne","Po","Ut","St","Št","Pi","So"],toolbar:{exportToSVG:"Stiahnuť SVG",exportToPNG:"Stiahnuť PNG",exportToCSV:"Stiahnuť CSV",menu:"Menu",selection:"Vyberanie",selectionZoom:"Zoom: Vyberanie",zoomIn:"Zoom: Priblížiť",zoomOut:"Zoom: Vzdialiť",pan:"Presúvanie",reset:"Resetovať"}},wb={name:"sk",options:Lb},Nb=Object.freeze({__proto__:null,name:"sk",options:Lb,default:wb}),Bb={months:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","Septemer","Oktober","November","December"],shortMonths:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],days:["Nedelja","Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota"],shortDays:["Ne","Po","To","Sr","Če","Pe","So"],toolbar:{exportToSVG:"Prenesi SVG",exportToPNG:"Prenesi PNG",exportToCSV:"Prenesi CSV",menu:"Menu",selection:"Izbiranje",selectionZoom:"Zoom: Izbira",zoomIn:"Zoom: Približaj",zoomOut:"Zoom: Oddalji",pan:"Pomikanje",reset:"Resetiraj"}},_b={name:"sl",options:Bb},Sb=Object.freeze({__proto__:null,name:"sl",options:Bb,default:_b}),Xb={months:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],shortMonths:["Jan","Shk","Mar","Pr","Maj","Qer","Korr","Gush","Sht","Tet","Nën","Dhj"],days:["e Dielë","e Hënë","e Martë","e Mërkurë","e Enjte","e Premte","e Shtunë"],shortDays:["Die","Hën","Mar","Mër","Enj","Pre","Sht"],toolbar:{exportToSVG:"Shkarko SVG",exportToPNG:"Shkarko PNG",exportToCSV:"Shkarko CSV",menu:"Menu",selection:"Seleksiono",selectionZoom:"Seleksiono Zmadhim",zoomIn:"Zmadho",zoomOut:"Zvogëlo",pan:"Spostoje",reset:"Rikthe dimensionin"}},kb={name:"sq",options:Xb},Cb=Object.freeze({__proto__:null,name:"sq",options:Xb,default:kb}),Tb={months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],shortMonths:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],days:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],shortDays:["อา","จ","อ","พ","พฤ","ศ","ส"],toolbar:{exportToSVG:"ดาวน์โหลด SVG",exportToPNG:"ดาวน์โหลด PNG",exportToCSV:"ดาวน์โหลด CSV",menu:"เมนู",selection:"เลือก",selectionZoom:"เลือกจุดที่จะซูม",zoomIn:"ซูมเข้า",zoomOut:"ซูมออก",pan:"ปรากฎว่า",reset:"รีเซ็ตการซูม"}},Eb={name:"th",options:Tb},Pb=Object.freeze({__proto__:null,name:"th",options:Tb,default:Eb}),Db={months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],shortMonths:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],days:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],shortDays:["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],toolbar:{exportToSVG:"SVG İndir",exportToPNG:"PNG İndir",exportToCSV:"CSV İndir",menu:"Menü",selection:"Seçim",selectionZoom:"Seçim Yakınlaştır",zoomIn:"Yakınlaştır",zoomOut:"Uzaklaştır",pan:"Kaydır",reset:"Yakınlaştırmayı Sıfırla"}},Ib={name:"tr",options:Db},Hb=Object.freeze({__proto__:null,name:"tr",options:Db,default:Ib}),Fb={months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],shortMonths:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],days:["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"],shortDays:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],toolbar:{exportToSVG:"Зберегти SVG",exportToPNG:"Зберегти PNG",exportToCSV:"Зберегти CSV",menu:"Меню",selection:"Вибір",selectionZoom:"Вибір із збільшенням",zoomIn:"Збільшити",zoomOut:"Зменшити",pan:"Переміщення",reset:"Скинути збільшення"}},Yb={name:"ua",options:Fb},jb=Object.freeze({__proto__:null,name:"ua",options:Fb,default:Yb}),Gb={months:["Tháng 01","Tháng 02","Tháng 03","Tháng 04","Tháng 05","Tháng 06","Tháng 07","Tháng 08","Tháng 09","Tháng 10","Tháng 11","Tháng 12"],shortMonths:["Th01","Th02","Th03","Th04","Th05","Th06","Th07","Th08","Th09","Th10","Th11","Th12"],days:["Chủ nhật","Thứ hai","Thứ ba","Thứ Tư","Thứ năm","Thứ sáu","Thứ bảy"],shortDays:["CN","T2","T3","T4","T5","T6","T7"],toolbar:{exportToSVG:"Tải xuống SVG",exportToPNG:"Tải xuống PNG",exportToCSV:"Tải xuống CSV",menu:"Tuỳ chọn",selection:"Vùng chọn",selectionZoom:"Vùng chọn phóng to",zoomIn:"Phóng to",zoomOut:"Thu nhỏ",pan:"Di chuyển",reset:"Đặt lại thu phóng"}},Vb={name:"vi",options:Gb},Ub=Object.freeze({__proto__:null,name:"vi",options:Gb,default:Vb}),$b="zh-cn",Zb={months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],days:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],shortDays:["周日","周一","周二","周三","周四","周五","周六"],toolbar:{exportToSVG:"下载 SVG",exportToPNG:"下载 PNG",exportToCSV:"下载 CSV",menu:"菜单",selection:"选择",selectionZoom:"选择缩放",zoomIn:"放大",zoomOut:"缩小",pan:"平移",reset:"重置缩放"}},Kb={name:$b,options:Zb},Jb=Object.freeze({__proto__:null,name:$b,options:Zb,default:Kb}),Qb="zh-tw",ec={months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],shortDays:["週日","週一","週二","週三","週四","週五","週六"],toolbar:{exportToSVG:"下載 SVG",exportToPNG:"下載 PNG",exportToCSV:"下載 CSV",menu:"選單",selection:"選擇",selectionZoom:"選擇縮放",zoomIn:"放大",zoomOut:"縮小",pan:"平移",reset:"重置縮放"}},tc={name:Qb,options:ec},oc=Object.freeze({__proto__:null,name:Qb,options:ec,default:tc});function ic(){return{ar:Ns,"be-cyrl":Xs,"be-latn":Es,ca:Is,cs:Ys,da:Vs,de:Zs,el:Qs,en:op,es:np,et:pp,fa:Mp,fi:Op,fr:Ap,he:qp,hi:mp,hr:yp,hu:wp,hy:_p,id:kp,it:Ep,ja:Ip,ka:Yp,ko:Vp,lt:Zp,lv:Qp,ms:ob,nb:nb,nl:pb,pl:Mb,"pt-br":db,pt:ub,rs:gb,ru:xb,se:Rb,sk:Nb,sl:Sb,sq:Cb,th:Pb,tr:Hb,ua:jb,vi:Ub,"zh-cn":Jb,"zh-tw":oc}}function ac(){return op}function nc(e,t){return(t?e.series_in_brush:e.series_in_graph).map(e=>void 0!==e.opacity?e.opacity:"area"===e.type?.7:1)}function rc(e,t,o){const i=o?e.series_in_brush:e.series_in_graph;return Ut.includes(e.chart_type)?i.map((o,a)=>({name:Qt(a,i,void 0,null==t?void 0:t.states[o.entity]),group:e.stacked&&"column"===o.type?o.stack_group:void 0,type:o.type,data:[]})):[]}function sc(e,t){return Ut.includes(e.chart_type)?[]:e.series_in_graph.map((o,i)=>Qt(i,e.series_in_graph,void 0,null==t?void 0:t.states[o.entity]))}function pc(e,t){if(Ut.includes(e.chart_type)){return{type:"datetime",labels:{datetimeUTC:!1,datetimeFormatter:cc(lo(e,t))}}}return{}}function bc(e){var t;return Array.isArray(null===(t=e.apex_config)||void 0===t?void 0:t.yaxis)||e.yaxis?void 0:{decimalsInFloat:1}}function cc(e){return e?{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"hh:mm tt",minute:"hh:mm:ss tt"}:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm",minute:"HH:mm:ss"}}function Mc(e,t){var o,i,a,n;if(null===(a=null===(i=null===(o=e.apex_config)||void 0===o?void 0:o.tooltip)||void 0===i?void 0:i.x)||void 0===a?void 0:a.format)return;let r;const s=e.locale||(null==t?void 0:t.language)||"en";return r=lo(e,t)?{hour12:!0}:{hourCycle:"h23"},yt(e.graph_span)<kt&&!(null===(n=e.span)||void 0===n?void 0:n.offset)?function(e,t,o,i=r){return new Intl.DateTimeFormat(s,Object.assign({hour:"numeric",minute:"numeric",second:"numeric"},i)).format(e)}:function(e,t,o,i=r){return new Intl.DateTimeFormat(s,Object.assign({year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},i)).format(e)}}function zc(e,t){return function(o,i,a=e,n=t){var r,s,p;let b=o;(null===(r=a.series_in_graph[i.seriesIndex])||void 0===r?void 0:r.invert)&&b&&(b=-b),(null===(s=a.series_in_graph[i.seriesIndex])||void 0===s?void 0:s.show.as_duration)||(b=ho(b,null==t?void 0:t.locale,a.series_in_graph[i.seriesIndex].float_precision));const c=eo(i.seriesIndex,a.series_in_graph,void 0,null==n?void 0:n.states[a.series_in_graph[i.seriesIndex].entity]);return(null===(p=a.series_in_graph[i.seriesIndex])||void 0===p?void 0:p.show.as_duration)?[`<strong>${ro(b,a.series_in_graph[i.seriesIndex].show.as_duration)}</strong>`]:[`<strong>${b} ${c}</strong>`]}}function lc(e){return!Ut.includes(e.chart_type)||e.series_in_graph.some(e=>e.show.datalabels)}function Oc(e,t,o){return"pie"===e.chart_type||"donut"===e.chart_type?function(i,a,n=t,r=e,s=o){var p;return!1!==r.series_in_graph[a.seriesIndex].show.datalabels?"percent"===r.series_in_graph[a.seriesIndex].show.datalabels?ho(i,null==s?void 0:s.locale,r.series_in_graph[a.seriesIndex].float_precision):ho(null===(p=null==n?void 0:n[r.series_in_graph[a.seriesIndex].index])||void 0===p?void 0:p.lastState,null==s?void 0:s.locale,r.series_in_graph[a.seriesIndex].float_precision):""}:function(t,i,a=e,n=o){var r;if("total"===a.series_in_graph[i.seriesIndex].show.datalabels)return ho(i.w.globals.stackedSeriesTotals[i.dataPointIndex],null==n?void 0:n.locale,a.series_in_graph[i.seriesIndex].float_precision);if(null===t)return;let s=t;return(null===(r=a.series_in_graph[i.seriesIndex])||void 0===r?void 0:r.invert)&&s&&(s=-s),ho(s,null==n?void 0:n.locale,a.series_in_graph[i.seriesIndex].float_precision)}}function dc(e,t){return"radialBar"===e.chart_type?{track:{background:"rgba(128, 128, 128, 0.2)"},dataLabels:{value:{formatter:function(o,i,a=e,n=t){var r,s;const p=null===(s=null===(r=null==i?void 0:i.config)||void 0===r?void 0:r.series)||void 0===s?void 0:s.findIndex(e=>parseFloat(o)===e);return-1!=p?ho(o,null==n?void 0:n.locale,a.series_in_graph[p].float_precision)+"%":o}}}}:{}}function hc(e,t){return function(o,i,a=e,n=t){var r,s,p;const b=Qt(i.seriesIndex,a.series_in_graph,void 0,null==n?void 0:n.states[a.series_in_graph[i.seriesIndex].entity]);if(!a.series_in_graph[i.seriesIndex].show.in_legend)return[];if(a.series_in_graph[i.seriesIndex].show.legend_value){let t=Ut.includes(e.chart_type)?i.w.globals.series[i.seriesIndex].slice(-1)[0]:i.w.globals.series[i.seriesIndex];(null===(r=a.series_in_graph[i.seriesIndex])||void 0===r?void 0:r.invert)&&t&&(t=-t),(null===(s=a.series_in_graph[i.seriesIndex])||void 0===s?void 0:s.show.as_duration)||(t=ho(t,null==n?void 0:n.locale,a.series_in_graph[i.seriesIndex].float_precision));const o="radialBar"===e.chart_type?"%":eo(i.seriesIndex,a.series_in_graph,void 0,null==n?void 0:n.states[a.series_in_graph[i.seriesIndex].entity]);let c="";return c=null==t?`<strong>${Vt} ${o}</strong>`:(null===(p=a.series_in_graph[i.seriesIndex])||void 0===p?void 0:p.show.as_duration)?`<strong>${ro(t,a.series_in_graph[i.seriesIndex].show.as_duration)}</strong>`:`<strong>${t} ${o}</strong>`,[b+":",c]}return[b]}}function Ac(e){return{size:e.series_in_graph.map(e=>e.show.in_legend?6:0)}}function uc(e,t){return(t?e.series_in_brush:e.series_in_graph).map(e=>e.curve||"smooth")}function fc(e){return e.series_in_graph.flatMap((e,t)=>e.show.datalabels?[t]:[])}function qc(e,t){var o,i,a,n;if(void 0!==e.chart_type&&"line"!==e.chart_type)return void 0===(null===(i=null===(o=e.apex_config)||void 0===o?void 0:o.stroke)||void 0===i?void 0:i.width)?3:null===(n=null===(a=e.apex_config)||void 0===a?void 0:a.stroke)||void 0===n?void 0:n.width;return(t?e.series_in_brush:e.series_in_graph).map(e=>void 0!==e.stroke_width?e.stroke_width:[void 0,"line","area"].includes(e.type)?5:0)}function gc(e,t){return(t?e.series_in_brush:e.series_in_graph).map(e=>e.stroke_dash)}function Wc(e,t){var o,i,a,n,r,s;if(null===(o=e.experimental)||void 0===o?void 0:o.color_threshold){return(t?e.series_in_brush:e.series_in_graph).map(t=>!$t.includes(e.chart_type)&&"column"!==t.type&&t.color_threshold&&t.color_threshold.length>0?"gradient":"solid")}return t?(null===(n=null===(a=null===(i=e.brush)||void 0===i?void 0:i.apex_config)||void 0===a?void 0:a.fill)||void 0===n?void 0:n.type)||"solid":(null===(s=null===(r=e.apex_config)||void 0===r?void 0:r.fill)||void 0===s?void 0:s.type)||"solid"}function mc(e){const t=eval;return Object.keys(e).forEach(o=>{"string"==typeof e[o]&&e[o].trim().startsWith("EVAL:")&&(e[o]=t(`(${e[o].trim().slice(5)})`)),"object"==typeof e[o]&&(e[o]=mc(e[o]))}),e}var xc={exports:{}};xc.exports=function(e){var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function o(e,t){var o=e[0],i=e[1],a=e[2],n=e[3];i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&a|~i&n)+t[0]-680876936|0)<<7|o>>>25)+i|0)&i|~o&a)+t[1]-389564586|0)<<12|n>>>20)+o|0)&o|~n&i)+t[2]+606105819|0)<<17|a>>>15)+n|0)&n|~a&o)+t[3]-1044525330|0)<<22|i>>>10)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&a|~i&n)+t[4]-176418897|0)<<7|o>>>25)+i|0)&i|~o&a)+t[5]+1200080426|0)<<12|n>>>20)+o|0)&o|~n&i)+t[6]-1473231341|0)<<17|a>>>15)+n|0)&n|~a&o)+t[7]-45705983|0)<<22|i>>>10)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&a|~i&n)+t[8]+1770035416|0)<<7|o>>>25)+i|0)&i|~o&a)+t[9]-1958414417|0)<<12|n>>>20)+o|0)&o|~n&i)+t[10]-42063|0)<<17|a>>>15)+n|0)&n|~a&o)+t[11]-1990404162|0)<<22|i>>>10)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&a|~i&n)+t[12]+1804603682|0)<<7|o>>>25)+i|0)&i|~o&a)+t[13]-40341101|0)<<12|n>>>20)+o|0)&o|~n&i)+t[14]-1502002290|0)<<17|a>>>15)+n|0)&n|~a&o)+t[15]+1236535329|0)<<22|i>>>10)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&n|a&~n)+t[1]-165796510|0)<<5|o>>>27)+i|0)&a|i&~a)+t[6]-1069501632|0)<<9|n>>>23)+o|0)&i|o&~i)+t[11]+643717713|0)<<14|a>>>18)+n|0)&o|n&~o)+t[0]-373897302|0)<<20|i>>>12)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&n|a&~n)+t[5]-701558691|0)<<5|o>>>27)+i|0)&a|i&~a)+t[10]+38016083|0)<<9|n>>>23)+o|0)&i|o&~i)+t[15]-660478335|0)<<14|a>>>18)+n|0)&o|n&~o)+t[4]-405537848|0)<<20|i>>>12)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&n|a&~n)+t[9]+568446438|0)<<5|o>>>27)+i|0)&a|i&~a)+t[14]-1019803690|0)<<9|n>>>23)+o|0)&i|o&~i)+t[3]-187363961|0)<<14|a>>>18)+n|0)&o|n&~o)+t[8]+1163531501|0)<<20|i>>>12)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&n|a&~n)+t[13]-1444681467|0)<<5|o>>>27)+i|0)&a|i&~a)+t[2]-51403784|0)<<9|n>>>23)+o|0)&i|o&~i)+t[7]+1735328473|0)<<14|a>>>18)+n|0)&o|n&~o)+t[12]-1926607734|0)<<20|i>>>12)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i^a^n)+t[5]-378558|0)<<4|o>>>28)+i|0)^i^a)+t[8]-2022574463|0)<<11|n>>>21)+o|0)^o^i)+t[11]+1839030562|0)<<16|a>>>16)+n|0)^n^o)+t[14]-35309556|0)<<23|i>>>9)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i^a^n)+t[1]-1530992060|0)<<4|o>>>28)+i|0)^i^a)+t[4]+1272893353|0)<<11|n>>>21)+o|0)^o^i)+t[7]-155497632|0)<<16|a>>>16)+n|0)^n^o)+t[10]-1094730640|0)<<23|i>>>9)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i^a^n)+t[13]+681279174|0)<<4|o>>>28)+i|0)^i^a)+t[0]-358537222|0)<<11|n>>>21)+o|0)^o^i)+t[3]-722521979|0)<<16|a>>>16)+n|0)^n^o)+t[6]+76029189|0)<<23|i>>>9)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i^a^n)+t[9]-640364487|0)<<4|o>>>28)+i|0)^i^a)+t[12]-421815835|0)<<11|n>>>21)+o|0)^o^i)+t[15]+530742520|0)<<16|a>>>16)+n|0)^n^o)+t[2]-995338651|0)<<23|i>>>9)+a|0,i=((i+=((n=((n+=(i^((o=((o+=(a^(i|~n))+t[0]-198630844|0)<<6|o>>>26)+i|0)|~a))+t[7]+1126891415|0)<<10|n>>>22)+o|0)^((a=((a+=(o^(n|~i))+t[14]-1416354905|0)<<15|a>>>17)+n|0)|~o))+t[5]-57434055|0)<<21|i>>>11)+a|0,i=((i+=((n=((n+=(i^((o=((o+=(a^(i|~n))+t[12]+1700485571|0)<<6|o>>>26)+i|0)|~a))+t[3]-1894986606|0)<<10|n>>>22)+o|0)^((a=((a+=(o^(n|~i))+t[10]-1051523|0)<<15|a>>>17)+n|0)|~o))+t[1]-2054922799|0)<<21|i>>>11)+a|0,i=((i+=((n=((n+=(i^((o=((o+=(a^(i|~n))+t[8]+1873313359|0)<<6|o>>>26)+i|0)|~a))+t[15]-30611744|0)<<10|n>>>22)+o|0)^((a=((a+=(o^(n|~i))+t[6]-1560198380|0)<<15|a>>>17)+n|0)|~o))+t[13]+1309151649|0)<<21|i>>>11)+a|0,i=((i+=((n=((n+=(i^((o=((o+=(a^(i|~n))+t[4]-145523070|0)<<6|o>>>26)+i|0)|~a))+t[11]-1120210379|0)<<10|n>>>22)+o|0)^((a=((a+=(o^(n|~i))+t[2]+718787259|0)<<15|a>>>17)+n|0)|~o))+t[9]-343485551|0)<<21|i>>>11)+a|0,e[0]=o+e[0]|0,e[1]=i+e[1]|0,e[2]=a+e[2]|0,e[3]=n+e[3]|0}function i(e){var t,o=[];for(t=0;t<64;t+=4)o[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return o}function a(e){var t,o=[];for(t=0;t<64;t+=4)o[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return o}function n(e){var t,a,n,r,s,p,b=e.length,c=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=b;t+=64)o(c,i(e.substring(t-64,t)));for(a=(e=e.substring(t-64)).length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<a;t+=1)n[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(n[t>>2]|=128<<(t%4<<3),t>55)for(o(c,n),t=0;t<16;t+=1)n[t]=0;return r=(r=8*b).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(r[2],16),p=parseInt(r[1],16)||0,n[14]=s,n[15]=p,o(c,n),c}function r(e){var t,i,n,r,s,p,b=e.length,c=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=b;t+=64)o(c,a(e.subarray(t-64,t)));for(i=(e=t-64<b?e.subarray(t-64):new Uint8Array(0)).length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<i;t+=1)n[t>>2]|=e[t]<<(t%4<<3);if(n[t>>2]|=128<<(t%4<<3),t>55)for(o(c,n),t=0;t<16;t+=1)n[t]=0;return r=(r=8*b).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(r[2],16),p=parseInt(r[1],16)||0,n[14]=s,n[15]=p,o(c,n),c}function s(e){var o,i="";for(o=0;o<4;o+=1)i+=t[e>>8*o+4&15]+t[e>>8*o&15];return i}function p(e){var t;for(t=0;t<e.length;t+=1)e[t]=s(e[t]);return e.join("")}function b(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function c(e,t){var o,i=e.length,a=new ArrayBuffer(i),n=new Uint8Array(a);for(o=0;o<i;o+=1)n[o]=e.charCodeAt(o);return t?n:a}function M(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function z(e,t,o){var i=new Uint8Array(e.byteLength+t.byteLength);return i.set(new Uint8Array(e)),i.set(new Uint8Array(t),e.byteLength),o?i:i.buffer}function l(e){var t,o=[],i=e.length;for(t=0;t<i-1;t+=2)o.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,o)}function O(){this.reset()}return p(n("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(o,i){var a,n,r,s,p=this.byteLength,b=t(o,p),c=p;return i!==e&&(c=t(i,p)),b>c?new ArrayBuffer(0):(a=c-b,n=new ArrayBuffer(a),r=new Uint8Array(n),s=new Uint8Array(this,b,a),r.set(s),n)}}(),O.prototype.append=function(e){return this.appendBinary(b(e)),this},O.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,a=this._buff.length;for(t=64;t<=a;t+=64)o(this._hash,i(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},O.prototype.end=function(e){var t,o,i=this._buff,a=i.length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<a;t+=1)n[t>>2]|=i.charCodeAt(t)<<(t%4<<3);return this._finish(n,a),o=p(this._hash),e&&(o=l(o)),this.reset(),o},O.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},O.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},O.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},O.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},O.prototype._finish=function(e,t){var i,a,n,r=t;if(e[r>>2]|=128<<(r%4<<3),r>55)for(o(this._hash,e),r=0;r<16;r+=1)e[r]=0;i=(i=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(i[2],16),n=parseInt(i[1],16)||0,e[14]=a,e[15]=n,o(this._hash,e)},O.hash=function(e,t){return O.hashBinary(b(e),t)},O.hashBinary=function(e,t){var o=p(n(e));return t?l(o):o},O.ArrayBuffer=function(){this.reset()},O.ArrayBuffer.prototype.append=function(e){var t,i=z(this._buff.buffer,e,!0),n=i.length;for(this._length+=e.byteLength,t=64;t<=n;t+=64)o(this._hash,a(i.subarray(t-64,t)));return this._buff=t-64<n?new Uint8Array(i.buffer.slice(t-64)):new Uint8Array(0),this},O.ArrayBuffer.prototype.end=function(e){var t,o,i=this._buff,a=i.length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<a;t+=1)n[t>>2]|=i[t]<<(t%4<<3);return this._finish(n,a),o=p(this._hash),e&&(o=l(o)),this.reset(),o},O.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},O.ArrayBuffer.prototype.getState=function(){var e=O.prototype.getState.call(this);return e.buff=M(e.buff),e},O.ArrayBuffer.prototype.setState=function(e){return e.buff=c(e.buff,!0),O.prototype.setState.call(this,e)},O.ArrayBuffer.prototype.destroy=O.prototype.destroy,O.ArrayBuffer.prototype._finish=O.prototype._finish,O.ArrayBuffer.hash=function(e,t){var o=p(r(new Uint8Array(e)));return t?l(o):o},O}();var vc=xc.exports;class yc{constructor(e,t,o,i,a){this._updating=!1,this._useCompress=!1;const n={avg:this._average,max:this._maximum,min:this._minimum,first:this._first,last:this._last,sum:this._sum,median:this._median,delta:this._delta,diff:this._diff};this._index=e,this._cache=!i.statistics&&o,this._entityID=i.entity,this._graphSpan=t,this._config=i,this._func=n[i.group_by.func],this._realEnd=new Date,this._realStart=new Date,this._groupByDurationMs=yt(this._config.group_by.duration),this._md5Config=vc.hash(`${this._graphSpan}${JSON.stringify(this._config)}${JSON.stringify(a)}`)}set hass(e){this._hass=e,this._entityState=this._hass.states[this._entityID]}get history(){return this._computedHistory||[]}get index(){return this._index}get start(){return this._realStart}get end(){return this._realEnd}set cache(e){this._cache=!this._config.statistics&&e}get lastState(){return this.history.length>0?this.history[this.history.length-1][1]:null}nowValue(e,t){if(0===this.history.length)return null;const o=this.history.findIndex((o,i,a)=>!t&&o[0]>e||!!(t&&o[0]<e&&a[i+1]&&a[i+1][0]>e));return-1===o?null:this.history[o][1]}get min(){if(this._computedHistory&&0!==this._computedHistory.length)return Math.min(...this._computedHistory.flatMap(e=>null===e[1]?[]:[e[1]]))}get max(){if(this._computedHistory&&0!==this._computedHistory.length)return Math.max(...this._computedHistory.flatMap(e=>null===e[1]?[]:[e[1]]))}minMaxWithTimestamp(e,t,o){if(!this._computedHistory||0===this._computedHistory.length)return;if(1===this._computedHistory.length)return{min:[e,this._computedHistory[0][1]],max:[t,this._computedHistory[0][1]]};const i=this._computedHistory.reduce((o,i)=>(null===i[1]||i[0]>t||i[0]<e||((null===o.max[1]||o.max[1]<i[1])&&(o.max=[...i]),(null===o.min[1]||null!==i[1]&&o.min[1]>i[1])&&(o.min=[...i])),o),{min:[0,null],max:[0,null]});return o&&(i.min[0]&&(i.min[0]-=o),i.max[0]&&(i.max[0]-=o)),i}minMaxWithTimestampForYAxis(e,t){if(!this._computedHistory||0===this._computedHistory.length)return;let o=e;const i=this._computedHistory.findIndex(t=>t[0]>=e)-1;return i>=0&&(o=this._computedHistory[i][0]),this.minMaxWithTimestamp(o,t,0)}async _getCache(e,t){const o=await Ke.getItem(`${e}_${this._md5Config}${t?"":"-raw"}`);return o?t?Zt(o):o:void 0}async _setCache(e,t,o){return o?Ke.setItem(`${e}_${this._md5Config}`,function(e){return Qe.exports.compress(JSON.stringify(e))}(t)):Ke.setItem(`${e}_${this._md5Config}-raw`,t)}async _updateHistory(e,t){var o;let i,a=new Date(e);if("raw"!==this._config.group_by.func){const o=t.getTime()-e.getTime(),i=Math.floor(o/this._groupByDurationMs)+(o%this._groupByDurationMs>0?1:0);a=new Date(t.getTime()-(i+1)*this._groupByDurationMs)}if(!this._entityState||this._updating)return!1;if(this._updating=!0,this._config.ignore_history){let e=null;e=this._config.attribute?null===(o=this._entityState.attributes)||void 0===o?void 0:o[this._config.attribute]:this._entityState.state,this._config.transform&&(e=this._applyTransform(e,this._entityState));let t=parseFloat(e);return t=Number.isNaN(t)?null:t,this._computedHistory=[[new Date(this._entityState.last_updated).getTime(),t]],this._updating=!1,!0}if(this._config.data_generator)i=await this._generateData(e,t);else{this._realStart=new Date(e),this._realEnd=new Date(t);let o=!1;if(i=this._cache?await this._getCache(this._entityID,this._useCompress):void 0,i&&i.span===this._graphSpan){const e=i.data.findIndex(e=>e&&new Date(e[0]).getTime()>a.getTime());-1!==e&&(o=!0),e>4?i.data=i.data.slice(0===e?0:e-4):-1===e&&(i.data=[])}else i=void 0;const n=!!(i&&i.data&&0!==i.data.length&&i.data[i.data.length-1])?new Date(i.data[i.data.length-1][0]+1):new Date(a.getTime()+("raw"!==this._config.group_by.func?0:-1)),r=t;let s=[],p=!1;if(this._config.statistics){const e=await this._fetchStatistics(n,r,this._config.statistics.period);if(e&&e.length>0){p=!0;let t=null;i&&i.data&&i.data.length>0&&(t=i.data[i.data.length-1][1]),s=e.map(e=>{var o,i,a,n,r;let s=null;[t,s]=this._transformAndFill(e[(null===(o=this._config.statistics)||void 0===o?void 0:o.type)||"mean"],e,t);let p=null;const b=new Date(e.start);return p=(null===(i=this._config.statistics)||void 0===i?void 0:i.align)&&"middle"!==(null===(a=this._config.statistics)||void 0===a?void 0:a.align)?"start"===this._config.statistics.align?new Date(e.start):new Date(e.end):"5minute"===(null===(n=this._config.statistics)||void 0===n?void 0:n.period)?new Date(b.getTime()+15e4):(null===(r=this._config.statistics)||void 0===r?void 0:r.period)&&"hour"!==this._config.statistics.period?"day"===this._config.statistics.period?new Date(b.getTime()+432e5):"week"===this._config.statistics.period?new Date(b.getTime()+2592e5):new Date(b.getTime()+1296e6):new Date(b.getTime()+18e5),[p.getTime(),Number.isNaN(s)?null:s]})}}else{const e=await this._fetchRecent(n,r,!this._config.attribute&&!this._config.transform&&o);if(e&&e[0]&&e[0].length>0){p=!0,(this._config.attribute||this._config.transform)&&o&&e[0].shift();let t=null;i&&i.data&&i.data.length>0&&(t=i.data[i.data.length-1][1]),s=e[0].map(e=>{let o=null;this._config.attribute?e.attributes&&void 0!==e.attributes[this._config.attribute]&&(o=e.attributes[this._config.attribute]):o=e.state;let i=null;return[t,i]=this._transformAndFill(o,e,t),this._config.attribute?[new Date(e.last_updated).getTime(),Number.isNaN(i)?null:i]:[new Date(e.last_changed).getTime(),Number.isNaN(i)?null:i]})}}p&&((null==i?void 0:i.data.length)?(i.span=this._graphSpan,i.last_fetched=new Date,i.card_version=Je,0!==i.data.length&&i.data.push(...s)):i={span:this._graphSpan,card_version:Je,last_fetched:new Date,data:s},this._cache&&await this._setCache(this._entityID,i,this._useCompress).catch(e=>{Kt(e),Ke.clear()}))}if(!i||0===i.data.length)return this._updating=!1,this._computedHistory=void 0,!1;if("raw"!==this._config.group_by.func){const e=this._dataBucketer(i,Xt.range(a,t)).map(e=>[e.timestamp,this._func(e.data)]);if([void 0,"line","area"].includes(this._config.type))for(;e.length>0&&null===e[0][1];)e.shift();this._computedHistory=e}else this._computedHistory=i.data;return this._updating=!1,!0}_transformAndFill(e,t,o){this._config.transform&&(e=this._applyTransform(e,t));let i=parseFloat(e);return i=Number.isNaN(i)?null:i,null===i?"zero"===this._config.fill_raw?i=0:"last"===this._config.fill_raw&&(i=o):o=i,[o,i]}_applyTransform(e,t){return new Function("x","hass","entity",`'use strict'; ${this._config.transform}`).call(this,e,this._hass,t)}async _fetchRecent(e,t,o){var i;let a="history/period";return e&&(a+=`/${e.toISOString()}`),a+=`?filter_entity_id=${this._entityID}`,t&&(a+=`&end_time=${t.toISOString()}`),o&&(a+="&skip_initial_state"),a+="&significant_changes_only=0",null===(i=this._hass)||void 0===i?void 0:i.callApi("GET",a)}async _generateData(e,t){const o=Object.getPrototypeOf(async function(){}).constructor;let i;try{const a=new o("entity","start","end","hass","moment",`'use strict'; ${this._config.data_generator}`);i=await a(this._entityState,e,t,this._hass,Xt)}catch(uo){const t=this._config.data_generator.length<=100?this._config.data_generator.trim():`${this._config.data_generator.trim().substring(0,98)}...`;throw uo.message=`${uo.name}: ${uo.message} in '${t}'`,uo.name="Error",uo}return{span:0,card_version:Je,last_fetched:new Date,data:i}}async _fetchStatistics(e,t,o="hour"){var i;const a=await(null===(i=this._hass)||void 0===i?void 0:i.callWS({type:"recorder/statistics_during_period",start_time:null==e?void 0:e.toISOString(),end_time:null==t?void 0:t.toISOString(),statistic_ids:[this._entityID],period:o}));if(a&&this._entityID in a)return a[this._entityID]}_dataBucketer(e,t){const o=Array.from(t.reverseBy("milliseconds",{step:this._groupByDurationMs})).reverse(),i=[];o.forEach((e,t)=>{i[t]={timestamp:e.valueOf(),data:[]}}),null==e||e.data.forEach(e=>{i.some((t,o)=>t.timestamp>e[0]&&o>0&&e[0]>=i[o-1].timestamp&&(i[o-1].data.push(e),!0))});let a=null;const n=(new Date).getTime();for(i.forEach((t,o)=>{if(0===t.data.length?"last"===this._config.group_by.fill&&(t.timestamp<=n||this._config.data_generator)?t.data[0]=[t.timestamp,a]:"zero"===this._config.group_by.fill&&(t.timestamp<=n||this._config.data_generator)?t.data[0]=[t.timestamp,0]:"null"===this._config.group_by.fill&&(t.data[0]=[t.timestamp,null]):a=t.data.slice(-1)[0][1],this._config.group_by.start_with_last)if(o>0){if(0===t.data.length||t.data[0][0]!==t.timestamp){const e=i[o-1].data;t.data.unshift([t.timestamp,e[e.length-1][1]])}}else{const o=e.data.findIndex(e=>e[0]>t.timestamp);o>0&&t.data.unshift([t.timestamp,e.data[o-1][1]])}}),i.shift(),i.pop();i.length>0&&(0===i[i.length-1].data.length||1===i[i.length-1].data.length&&null===i[i.length-1].data[0][1]);)i.pop();return i}_sum(e){if(0===e.length)return 0;let t=0;return e.reduce((o,i,a)=>{let n=0;return i&&null===i[1]?n=e[t][1]:(n=i[1],t=a),o+n},0)}_average(e){const t=this._filterNulls(e);return 0===t.length?null:this._sum(t)/t.length}_minimum(e){let t=null;return e.forEach(e=>{null!==e[1]&&(t=null===t?e[1]:Math.min(e[1],t))}),t}_maximum(e){let t=null;return e.forEach(e=>{null!==e[1]&&(t=null===t?e[1]:Math.max(e[1],t))}),t}_last(e){return 0===e.length?null:e.slice(-1)[0][1]}_first(e){return 0===e.length?null:e[0][1]}_median(e){const t=this._filterNulls([...e]).sort((e,t)=>e[1]-t[1]);if(0===t.length)return null;if(1===t.length)return t[0][1];const o=Math.floor((t.length-1)/2);return t.length%2==1?t[o][1]:(t[o][1]+t[o+1][1])/2}_delta(e){const t=this._maximum(e),o=this._minimum(e);return null===t||null===o?null:t-o}_diff(e){const t=this._filterNulls(e),o=this._first(t),i=this._last(t);return null===o||null===i?null:i-o}_filterNulls(e){return e.filter(e=>null!==e[1])}}var Rc,Lc={},wc={},Nc={},Bc=Ge&&Ge.__extends||(Rc=function(e,t){return Rc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},Rc(e,t)},function(e,t){function o(){this.constructor=e}Rc(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),_c=Ge&&Ge.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;var i=Array(e),a=0;for(t=0;t<o;t++)for(var n=arguments[t],r=0,s=n.length;r<s;r++,a++)i[a]=n[r];return i};Object.defineProperty(Nc,"__esModule",{value:!0}),Nc.DetailContext=Nc.NoopContext=Nc.VError=void 0;var Sc=function(e){function t(o,i){var a=e.call(this,i)||this;return a.path=o,Object.setPrototypeOf(a,t.prototype),a}return Bc(t,e),t}(Error);Nc.VError=Sc;var Xc=function(){function e(){this._failed=!1}return e.prototype.fail=function(e,t,o){return this._failed=!0,!1},e.prototype.fork=function(){return this},e.prototype.completeFork=function(){return!this._failed},e.prototype.failed=function(){return this._failed},e.prototype.unionResolver=function(){return this},e.prototype.createContext=function(){return this._failed=!1,this},e.prototype.resolveUnion=function(e){},e}();Nc.NoopContext=Xc;var kc=function(){function e(){this._propNames=[],this._messages=[],this._failedForks=[],this._currentFork=null,this._score=0}return e.prototype.fail=function(e,t,o){return this._propNames.push(e),this._messages.push(t),this._score+=o,!1},e.prototype.unionResolver=function(){return new Cc},e.prototype.resolveUnion=function(e){for(var t,o,i,a=null,n=0,r=e.contexts;n<r.length;n++){var s=r[n];(!a||s._score>=a._score)&&(a=s)}a&&a._score>0&&((t=this._propNames).push.apply(t,a._propNames),(o=this._messages).push.apply(o,a._messages),(i=this._failedForks).push.apply(i,a._failedForks))},e.prototype.getError=function(e){var t=Ec(this.getErrorDetails(e).map(Tc)).join("\n");return new Sc(e,t)},e.prototype.getErrorDetails=function(e){for(var t,o=null,i=[],a=this._propNames.length-1;a>=0;a--){var n=this._propNames[a];e+="number"==typeof n?"["+n+"]":n?"."+n:"";var r=this._messages[a];r&&(t={path:e,message:r},o?o.nested=[t]:i.push(t),o=t)}var s=Ec(this._failedForks.map(function(t){return t.getErrorDetails(e)}));return o?s.length&&(o.nested=s):i=s,i},e.prototype.fork=function(){return null==this._currentFork&&(this._currentFork=new e),this._currentFork},e.prototype.completeFork=function(){var t=this._currentFork;return t._failed()&&(this._failedForks.push(t),this._currentFork=null,1===this._failedForks.length&&(this._score=t._score)),this._failedForks.length<e.maxForks},e.prototype.failed=function(){return this._failed()},e.prototype._failed=function(){return this._propNames.length+this._failedForks.length>0},e.maxForks=3,e}();Nc.DetailContext=kc;var Cc=function(){function e(){this.contexts=[]}return e.prototype.createContext=function(){var e=new kc;return this.contexts.push(e),e},e}(),Tc=function(e){var t=e.path+" "+e.message,o=e.nested||[],i=Ec(o.map(Tc));if(1==o.length){var a=i[0],n=i.slice(1);return _c([t+"; "+a],n)}return _c([t],i.map(function(e){return"    "+e}))};function Ec(e){var t;return(t=[]).concat.apply(t,e)}!function(e){var t=Ge&&Ge.__extends||function(){var e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},e(t,o)};return function(t,o){function i(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0}),e.basicTypes=e.BasicType=e.TParamList=e.TParam=e.param=e.TFunc=e.func=e.TProp=e.TOptional=e.opt=e.TIface=e.iface=e.indexKey=e.TEnumLiteral=e.enumlit=e.TEnumType=e.enumtype=e.TIntersection=e.intersection=e.TUnion=e.union=e.TTuple=e.tuple=e.RestType=e.rest=e.TArray=e.array=e.TLiteral=e.lit=e.TName=e.name=e.TType=void 0;var o=Nc,i=function(){};function a(e){return"string"==typeof e?r(e):e}function n(e,t){var o=e[t];if(!o)throw new Error("Unknown type "+t);return o}function r(e){return new s(e)}e.TType=i,e.name=r;var s=function(e){function o(t){var o=e.call(this)||this;return o.name=t,o._failMsg="is not a "+t,o}return t(o,e),o.prototype.getChecker=function(e,t,o){var i=this._checkerBeingBuilt;if(!i){this._checkerBeingBuilt=function(e,t){return i(e,t)};try{i=this._getChecker(e,t,o)}finally{this._checkerBeingBuilt=void 0}}return i},o.prototype._getChecker=function(e,t,i){var a=this,r=n(e,this.name),s=r.getChecker(e,t,i);return r instanceof m||r instanceof o?s:function(e,t){return!!s(e,t)||t.fail(null,a._failMsg,0)}},o}(i);e.TName=s,e.lit=function(e){return new p(e)};var p=function(e){function o(t){var o=e.call(this)||this;return o.value=t,o.name=JSON.stringify(t),o._failMsg="is not "+o.name,o}return t(o,e),o.prototype.getChecker=function(e,t){var o=this;return function(e,t){return e===o.value||t.fail(null,o._failMsg,-1)}},o}(i);e.TLiteral=p,e.array=function(e){return new b(a(e))};var b=function(e){function o(t){var o=e.call(this)||this;o.ttype=t;var i=w(t);return i&&(o.name=i+"[]"),o}return t(o,e),o.prototype.getChecker=function(e,t){var o=this.ttype.getChecker(e,t);return function(e,t){if(!Array.isArray(e))return t.fail(null,"is not an array",0);for(var i=0;i<e.length;i++){if(!o(e[i],t))return t.fail(i,null,1)}return!0}},o}(i);e.TArray=b,e.rest=function(e){return new c(e)};var c=function(e){function o(t){var o=e.call(this)||this;return o.typeSpec=t,o}return t(o,e),o.prototype.setStart=function(e){this._start=e},o.prototype.getChecker=function(e,t){var o="string"==typeof this.typeSpec?n(e,this.typeSpec):this.typeSpec;if(!(o instanceof b))throw new Error("Rest type must be an array");var i=o.ttype.getChecker(e,t),a=this._start;return function(e,t){for(var o=a;o<e.length;o++)if(!i(e[o],t))return t.fail(o,null,1);return!0}},o}(i);e.RestType=c,e.tuple=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return new M(e.map(function(e){return a(e)}))};var M=function(e){function o(t){var o=e.call(this)||this;o.ttypes=t;var i=t[t.length-1];return i instanceof c&&(t.pop(),o._restType=i,o._restType.setStart(t.length)),o}return t(o,e),o.prototype.getChecker=function(e,t){var o=this.ttypes.map(function(o){return o.getChecker(e,t)}),i=function(e,t){if(!Array.isArray(e))return t.fail(null,"is not an array",0);for(var i=0;i<o.length;i++){if(!o[i](e[i],t))return t.fail(i,null,1)}return!0};if(this._restType){var a=this._restType.getChecker(e,t);return function(e,t){return i(e,t)&&a(e,t)}}return t?function(e,t){return!!i(e,t)&&(e.length<=o.length||t.fail(o.length,"is extraneous",2))}:i},o}(i);e.TTuple=M,e.union=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return new z(e.map(function(e){return a(e)}))};var z=function(e){function o(t){var o=e.call(this)||this;o.ttypes=t;var i=t.map(w).filter(function(e){return e}),a=t.length-i.length;return i.length?(a>0&&i.push(a+" more"),o._failMsg="is none of "+i.join(", ")):o._failMsg="is none of "+a+" types",o}return t(o,e),o.prototype.getChecker=function(e,t,o){var i=this,a=this.ttypes.map(function(i){return i.getChecker(e,t,o)});return function(e,t){for(var o=t.unionResolver(),n=0;n<a.length;n++){if(a[n](e,o.createContext()))return!0}return t.resolveUnion(o),t.fail(null,i._failMsg,0)}},o}(i);e.TUnion=z,e.intersection=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return new l(e.map(function(e){return a(e)}))};var l=function(e){function o(t){var o=e.call(this)||this;return o.ttypes=t,o}return t(o,e),o.prototype.getChecker=function(e,t,o){void 0===o&&(o=new Set);var i=this.ttypes.map(function(i){return i.getChecker(e,t,o)});return function(e,t){return i.every(function(o){return o(e,t.fork()),t.completeFork()})&&!t.failed()}},o}(i);e.TIntersection=l,e.enumtype=function(e){return new O(e)};var O=function(e){function o(t){var o=e.call(this)||this;return o.members=t,o.validValues=new Set,o._failMsg="is not a valid enum value",o.validValues=new Set(Object.keys(t).map(function(e){return t[e]})),o}return t(o,e),o.prototype.getChecker=function(e,t){var o=this;return function(e,t){return!!o.validValues.has(e)||t.fail(null,o._failMsg,0)}},o}(i);e.TEnumType=O,e.enumlit=function(e,t){return new d(e,t)};var d=function(e){function o(t,o){var i=e.call(this)||this;return i.enumName=t,i.prop=o,i._failMsg="is not "+t+"."+o,i}return t(o,e),o.prototype.getChecker=function(e,t){var o=this,i=n(e,this.enumName);if(!(i instanceof O))throw new Error("Type "+this.enumName+" used in enumlit is not an enum type");var a=i.members[this.prop];if(!i.members.hasOwnProperty(this.prop))throw new Error("Unknown value "+this.enumName+"."+this.prop+" used in enumlit");return function(e,t){return e===a||t.fail(null,o._failMsg,-1)}},o}(i);function h(t){return Object.keys(t).filter(function(t){return t!==e.indexKey}).map(function(e){return function(e,t){return t instanceof u?new f(e,t.ttype,!0):new f(e,a(t),!1)}(e,t[e])})}e.TEnumLiteral=d,e.indexKey=Symbol(),e.iface=function(t,o){return new A(t,h(o),o[e.indexKey])};var A=function(e){function i(t,o,i){var n=e.call(this)||this;return n.bases=t,n.props=o,n.indexType=i?a(i):void 0,n.propSet=new Set(o.map(function(e){return e.name})),n}return t(i,e),i.prototype.getChecker=function(e,t,i){var a,r=this;void 0===i&&(i=new Set),this.propSet.forEach(function(e){return i.add(e)});var s=this.bases.map(function(o){return n(e,o).getChecker(e,t,i)}),p=this.props.map(function(o){return o.ttype.getChecker(e,t)}),b=null===(a=this.indexType)||void 0===a?void 0:a.getChecker(e,t),c=new o.NoopContext,M=this.props.map(function(e,t){return!e.isOpt&&!p[t](void 0,c)});return function(e,o){if("object"!=typeof e||null===e)return o.fail(null,"is not an object",0);for(var a=0;a<s.length;a++)if(s[a](e,o.fork()),!o.completeFork())return!1;for(a=0;a<p.length;a++){var n=r.props[a].name,c=e[n];if(void 0===c){if(M[a]&&(o.fork().fail(n,"is missing",1),!o.completeFork()))return!1}else{var z=o.fork();if(p[a](c,z)||z.fail(n,null,1),!o.completeFork())return!1}}if(b)for(var l in e){z=o.fork();if(b(e[l],z)||z.fail(l,null,1),!o.completeFork())return!1}else if(t)for(var l in e)if(!i.has(l)&&(o.fork().fail(l,"is extraneous",2),!o.completeFork()))return!1;return!o.failed()}},i}(i);e.TIface=A,e.opt=function(e){return new u(a(e))};var u=function(e){function o(t){var o=e.call(this)||this;return o.ttype=t,o}return t(o,e),o.prototype.getChecker=function(e,t){var o=this.ttype.getChecker(e,t);return function(e,t){return void 0===e||o(e,t)}},o}(i);e.TOptional=u;var f=function(e,t,o){this.name=e,this.ttype=t,this.isOpt=o};e.TProp=f,e.func=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return new q(new W(t),a(e))};var q=function(e){function o(t,o){var i=e.call(this)||this;return i.paramList=t,i.result=o,i}return t(o,e),o.prototype.getChecker=function(e,t){return function(e,t){return"function"==typeof e||t.fail(null,"is not a function",0)}},o}(i);e.TFunc=q,e.param=function(e,t,o){return new g(e,a(t),Boolean(o))};var g=function(e,t,o){this.name=e,this.ttype=t,this.isOpt=o};e.TParam=g;var W=function(e){function i(t){var o=e.call(this)||this;return o.params=t,o}return t(i,e),i.prototype.getChecker=function(e,t){var i=this,a=this.params.map(function(o){return o.ttype.getChecker(e,t)}),n=new o.NoopContext,r=this.params.map(function(e,t){return!e.isOpt&&!a[t](void 0,n)}),s=function(e,t){if(!Array.isArray(e))return t.fail(null,"is not an array",0);for(var o=0;o<a.length;o++){var n=i.params[o];if(void 0===e[o]){if(r[o])return t.fail(n.name,"is missing",1)}else if(!a[o](e[o],t))return t.fail(n.name,null,1)}return!0};return t?function(e,t){return!!s(e,t)&&(e.length<=a.length||t.fail(a.length,"is extraneous",2))}:s},i}(i);e.TParamList=W;var m=function(e){function o(t,o){var i=e.call(this)||this;return i.validator=t,i.message=o,i}return t(o,e),o.prototype.getChecker=function(e,t){var o=this;return function(e,t){return!!o.validator(e)||t.fail(null,o.message,0)}},o}(i);e.BasicType=m,e.basicTypes={any:new m(function(e){return!0},"is invalid"),unknown:new m(function(e){return!0},"is invalid"),number:new m(function(e){return"number"==typeof e},"is not a number"),object:new m(function(e){return"object"==typeof e&&e},"is not an object"),boolean:new m(function(e){return"boolean"==typeof e},"is not a boolean"),string:new m(function(e){return"string"==typeof e},"is not a string"),symbol:new m(function(e){return"symbol"==typeof e},"is not a symbol"),void:new m(function(e){return null==e},"is not void"),undefined:new m(function(e){return void 0===e},"is not undefined"),null:new m(function(e){return null===e},"is not null"),never:new m(function(e){return!1},"is unexpected"),Date:new m(v("[object Date]"),"is not a Date"),RegExp:new m(v("[object RegExp]"),"is not a RegExp")};var x=Object.prototype.toString;function v(e){return function(t){return"object"==typeof t&&t&&x.call(t)===e}}"undefined"!=typeof Buffer&&(e.basicTypes.Buffer=new m(function(e){return Buffer.isBuffer(e)},"is not a Buffer"));for(var y=function(t){e.basicTypes[t.name]=new m(function(e){return e instanceof t},"is not a "+t.name)},R=0,L=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,ArrayBuffer];R<L.length;R++){y(L[R])}function w(e){if(e instanceof s||e instanceof p||e instanceof b)return e.name}}(wc),function(e){var t=Ge&&Ge.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;var i=Array(e),a=0;for(t=0;t<o;t++)for(var n=arguments[t],r=0,s=n.length;r<s;r++,a++)i[a]=n[r];return i};Object.defineProperty(e,"__esModule",{value:!0}),e.Checker=e.createCheckers=void 0;var o=wc,i=Nc,a=wc;Object.defineProperty(e,"TArray",{enumerable:!0,get:function(){return a.TArray}}),Object.defineProperty(e,"TEnumType",{enumerable:!0,get:function(){return a.TEnumType}}),Object.defineProperty(e,"TEnumLiteral",{enumerable:!0,get:function(){return a.TEnumLiteral}}),Object.defineProperty(e,"TFunc",{enumerable:!0,get:function(){return a.TFunc}}),Object.defineProperty(e,"TIface",{enumerable:!0,get:function(){return a.TIface}}),Object.defineProperty(e,"TLiteral",{enumerable:!0,get:function(){return a.TLiteral}}),Object.defineProperty(e,"TName",{enumerable:!0,get:function(){return a.TName}}),Object.defineProperty(e,"TOptional",{enumerable:!0,get:function(){return a.TOptional}}),Object.defineProperty(e,"TParam",{enumerable:!0,get:function(){return a.TParam}}),Object.defineProperty(e,"TParamList",{enumerable:!0,get:function(){return a.TParamList}}),Object.defineProperty(e,"TProp",{enumerable:!0,get:function(){return a.TProp}}),Object.defineProperty(e,"TTuple",{enumerable:!0,get:function(){return a.TTuple}}),Object.defineProperty(e,"TType",{enumerable:!0,get:function(){return a.TType}}),Object.defineProperty(e,"TUnion",{enumerable:!0,get:function(){return a.TUnion}}),Object.defineProperty(e,"TIntersection",{enumerable:!0,get:function(){return a.TIntersection}}),Object.defineProperty(e,"array",{enumerable:!0,get:function(){return a.array}}),Object.defineProperty(e,"enumlit",{enumerable:!0,get:function(){return a.enumlit}}),Object.defineProperty(e,"enumtype",{enumerable:!0,get:function(){return a.enumtype}}),Object.defineProperty(e,"func",{enumerable:!0,get:function(){return a.func}}),Object.defineProperty(e,"iface",{enumerable:!0,get:function(){return a.iface}}),Object.defineProperty(e,"lit",{enumerable:!0,get:function(){return a.lit}}),Object.defineProperty(e,"name",{enumerable:!0,get:function(){return a.name}}),Object.defineProperty(e,"opt",{enumerable:!0,get:function(){return a.opt}}),Object.defineProperty(e,"param",{enumerable:!0,get:function(){return a.param}}),Object.defineProperty(e,"tuple",{enumerable:!0,get:function(){return a.tuple}}),Object.defineProperty(e,"union",{enumerable:!0,get:function(){return a.union}}),Object.defineProperty(e,"intersection",{enumerable:!0,get:function(){return a.intersection}}),Object.defineProperty(e,"rest",{enumerable:!0,get:function(){return a.rest}}),Object.defineProperty(e,"indexKey",{enumerable:!0,get:function(){return a.indexKey}}),Object.defineProperty(e,"BasicType",{enumerable:!0,get:function(){return a.BasicType}});var n=Nc;Object.defineProperty(e,"VError",{enumerable:!0,get:function(){return n.VError}}),e.createCheckers=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var a=Object.assign.apply(Object,t([{},o.basicTypes],e)),n={},s=0,p=e;s<p.length;s++)for(var b=p[s],c=0,M=Object.keys(b);c<M.length;c++){var z=M[c];n[z]=new r(a,b[z])}return n};var r=function(){function e(e,t,i){if(void 0===i&&(i="value"),this.suite=e,this.ttype=t,this._path=i,this.props=new Map,t instanceof o.TIface)for(var a=0,n=t.props;a<n.length;a++){var r=n[a];this.props.set(r.name,r.ttype)}this.checkerPlain=this.ttype.getChecker(e,!1),this.checkerStrict=this.ttype.getChecker(e,!0)}return e.prototype.setReportedPath=function(e){this._path=e},e.prototype.check=function(e){return this._doCheck(this.checkerPlain,e)},e.prototype.test=function(e){return this.checkerPlain(e,new i.NoopContext)},e.prototype.validate=function(e){return this._doValidate(this.checkerPlain,e)},e.prototype.strictCheck=function(e){return this._doCheck(this.checkerStrict,e)},e.prototype.strictTest=function(e){return this.checkerStrict(e,new i.NoopContext)},e.prototype.strictValidate=function(e){return this._doValidate(this.checkerStrict,e)},e.prototype.getProp=function(t){var o=this.props.get(t);if(!o)throw new Error("Type has no property "+t);return new e(this.suite,o,this._path+"."+t)},e.prototype.methodArgs=function(t){var o=this._getMethod(t);return new e(this.suite,o.paramList)},e.prototype.methodResult=function(t){var o=this._getMethod(t);return new e(this.suite,o.result)},e.prototype.getArgs=function(){if(!(this.ttype instanceof o.TFunc))throw new Error("getArgs() applied to non-function");return new e(this.suite,this.ttype.paramList)},e.prototype.getResult=function(){if(!(this.ttype instanceof o.TFunc))throw new Error("getResult() applied to non-function");return new e(this.suite,this.ttype.result)},e.prototype.getType=function(){return this.ttype},e.prototype._doCheck=function(e,t){if(!e(t,new i.NoopContext)){var o=new i.DetailContext;throw e(t,o),o.getError(this._path)}},e.prototype._doValidate=function(e,t){if(e(t,new i.NoopContext))return null;var o=new i.DetailContext;return e(t,o),o.getErrorDetails(this._path)},e.prototype._getMethod=function(e){var t=this.props.get(e);if(!t)throw new Error("Type has no property "+e);if(!(t instanceof o.TFunc))throw new Error("Property "+e+" is not a method");return t},e}();e.Checker=r}(Lc);const Pc={ChartCardExternalConfig:Lc.iface([],{type:Lc.lit("custom:apexcharts-card"),config_templates:Lc.opt(Lc.union(Lc.array("string"),"string")),color_list:Lc.opt(Lc.array("string")),section_mode:Lc.opt("boolean"),locale:Lc.opt("string"),experimental:Lc.opt(Lc.iface([],{color_threshold:Lc.opt("boolean"),disable_config_validation:Lc.opt("boolean"),hidden_by_default:Lc.opt("boolean"),brush:Lc.opt("boolean")})),hours_12:Lc.opt("boolean"),chart_type:Lc.opt("ChartCardChartType"),update_interval:Lc.opt("string"),update_delay:Lc.opt("string"),all_series_config:Lc.opt("ChartCardAllSeriesExternalConfig"),series:Lc.array("ChartCardSeriesExternalConfig"),graph_span:Lc.opt("string"),span:Lc.opt("ChartCardSpanExtConfig"),now:Lc.opt(Lc.iface([],{show:Lc.opt("boolean"),color:Lc.opt("string"),label:Lc.opt("string")})),show:Lc.opt(Lc.iface([],{loading:Lc.opt("boolean"),last_updated:Lc.opt("boolean"),version:Lc.opt("boolean")})),cache:Lc.opt("boolean"),stacked:Lc.opt("boolean"),layout:Lc.opt("string"),apex_config:Lc.opt("any"),header:Lc.opt("ChartCardHeaderExternalConfig"),style:Lc.opt("any"),card_mod:Lc.opt("any"),view_layout:Lc.opt("any"),visibility:Lc.opt("any"),grid_options:Lc.opt("any"),index:Lc.opt("number"),view_index:Lc.opt("number"),brush:Lc.opt("ChartCardBrushExtConfig"),yaxis:Lc.opt(Lc.array("ChartCardYAxisExternal"))}),ChartCardChartType:Lc.union(Lc.lit("line"),Lc.lit("scatter"),Lc.lit("pie"),Lc.lit("donut"),Lc.lit("radialBar")),ChartCardBrushExtConfig:Lc.iface([],{selection_span:Lc.opt("string"),apex_config:Lc.opt("any")}),ChartCardSpanExtConfig:Lc.iface([],{start:Lc.opt("ChartCardStartEnd"),end:Lc.opt("ChartCardStartEnd"),offset:Lc.opt("string")}),ChartCardStartEnd:Lc.union(Lc.lit("minute"),Lc.lit("hour"),Lc.lit("day"),Lc.lit("week"),Lc.lit("month"),Lc.lit("year"),Lc.lit("isoWeek")),StatisticsPeriod:Lc.union(Lc.lit("5minute"),Lc.lit("hour"),Lc.lit("day"),Lc.lit("week"),Lc.lit("month")),ChartCardAllSeriesExternalConfig:Lc.iface([],{entity:Lc.opt("string"),attribute:Lc.opt("string"),name:Lc.opt("string"),type:Lc.opt(Lc.union(Lc.lit("line"),Lc.lit("column"),Lc.lit("area"))),stack_group:Lc.opt("string"),color:Lc.opt("string"),opacity:Lc.opt("number"),curve:Lc.opt(Lc.union(Lc.lit("smooth"),Lc.lit("straight"),Lc.lit("stepline"),Lc.lit("monotoneCubic"))),stroke_width:Lc.opt("number"),stroke_dash:Lc.opt(Lc.union("number",Lc.array("number"))),extend_to:Lc.opt(Lc.union(Lc.lit(!1),Lc.lit("end"),Lc.lit("now"))),unit:Lc.opt("string"),invert:Lc.opt("boolean"),data_generator:Lc.opt("string"),statistics:Lc.opt(Lc.iface([],{type:Lc.opt(Lc.union(Lc.lit("mean"),Lc.lit("max"),Lc.lit("min"),Lc.lit("sum"),Lc.lit("state"),Lc.lit("change"))),period:Lc.opt("StatisticsPeriod"),align:Lc.opt(Lc.union(Lc.lit("start"),Lc.lit("end"),Lc.lit("middle")))})),float_precision:Lc.opt("number"),min:Lc.opt("number"),max:Lc.opt("number"),offset:Lc.opt("string"),time_delta:Lc.opt("string"),fill_raw:Lc.opt("GroupByFill"),show:Lc.opt("ChartCardSeriesShowConfigExt"),group_by:Lc.opt(Lc.iface([],{duration:Lc.opt("string"),func:Lc.opt("GroupByFunc"),fill:Lc.opt("GroupByFill"),start_with_last:Lc.opt("boolean")})),transform:Lc.opt("string"),color_threshold:Lc.opt(Lc.array("ChartCardColorThreshold")),yaxis_id:Lc.opt("string"),header_actions:Lc.opt("ActionsConfig")}),ActionsConfig:Lc.iface([],{tap_action:Lc.opt("ActionConfig"),hold_action:Lc.opt("ActionConfig"),double_tap_action:Lc.opt("ActionConfig"),entity:Lc.opt("string")}),ChartCardSeriesShowConfigExt:Lc.iface([],{as_duration:Lc.opt("ChartCardPrettyTime"),in_legend:Lc.opt("boolean"),legend_value:Lc.opt("boolean"),in_header:Lc.opt(Lc.union("boolean",Lc.lit("raw"),Lc.lit("before_now"),Lc.lit("after_now"))),name_in_header:Lc.opt("boolean"),null_in_header:Lc.opt("boolean"),zero_in_header:Lc.opt("boolean"),header_color_threshold:Lc.opt("boolean"),in_chart:Lc.opt("boolean"),datalabels:Lc.opt(Lc.union("boolean",Lc.lit("total"),Lc.lit("percent"))),hidden_by_default:Lc.opt("boolean"),extremas:Lc.opt(Lc.union("boolean",Lc.lit("time"),Lc.lit("min"),Lc.lit("max"),Lc.lit("min+time"),Lc.lit("max+time"))),in_brush:Lc.opt("boolean"),offset_in_name:Lc.opt("boolean")}),ChartCardSeriesExternalConfig:Lc.iface(["ChartCardAllSeriesExternalConfig"],{entity:"string"}),ChartCardPrettyTime:Lc.union(Lc.lit("millisecond"),Lc.lit("second"),Lc.lit("minute"),Lc.lit("hour"),Lc.lit("day"),Lc.lit("week"),Lc.lit("month"),Lc.lit("year")),GroupByFill:Lc.union(Lc.lit("null"),Lc.lit("last"),Lc.lit("zero")),GroupByFunc:Lc.union(Lc.lit("raw"),Lc.lit("avg"),Lc.lit("min"),Lc.lit("max"),Lc.lit("last"),Lc.lit("first"),Lc.lit("sum"),Lc.lit("median"),Lc.lit("delta"),Lc.lit("diff")),ChartCardHeaderExternalConfig:Lc.iface([],{show:Lc.opt("boolean"),floating:Lc.opt("boolean"),title:Lc.opt("string"),show_states:Lc.opt("boolean"),colorize_states:Lc.opt("boolean"),standard_format:Lc.opt("boolean"),disable_actions:Lc.opt("boolean"),title_actions:Lc.opt("ActionsConfig")}),ChartCardColorThreshold:Lc.iface([],{value:"number",color:Lc.opt("string"),opacity:Lc.opt("number")}),ChartCardYAxisExternal:Lc.iface([],{id:Lc.opt("string"),show:Lc.opt("boolean"),opposite:Lc.opt("boolean"),min:Lc.opt(Lc.union(Lc.lit("auto"),"number","string")),max:Lc.opt(Lc.union(Lc.lit("auto"),"number","string")),align_to:Lc.opt("number"),decimals:Lc.opt("number"),apex_config:Lc.opt("any")}),ToggleMenuActionConfig:Lc.iface(["BaseActionConfig"],{action:Lc.lit("toggle-menu"),haptic:Lc.opt("HapticType")}),ToggleActionConfig:Lc.iface(["BaseActionConfig"],{action:Lc.lit("toggle"),haptic:Lc.opt("HapticType")}),CallServiceActionConfig:Lc.iface(["BaseActionConfig"],{action:Lc.lit("call-service"),service:"string",service_data:Lc.opt("any"),haptic:Lc.opt("HapticType")}),NavigateActionConfig:Lc.iface(["BaseActionConfig"],{action:Lc.lit("navigate"),navigation_path:"string",haptic:Lc.opt("HapticType")}),UrlActionConfig:Lc.iface(["BaseActionConfig"],{action:Lc.lit("url"),url_path:"string",haptic:Lc.opt("HapticType")}),MoreInfoActionConfig:Lc.iface(["BaseActionConfig"],{action:Lc.lit("more-info"),entity:Lc.opt("string"),haptic:Lc.opt("HapticType")}),NoActionConfig:Lc.iface(["BaseActionConfig"],{action:Lc.lit("none"),haptic:Lc.opt("HapticType")}),CustomActionConfig:Lc.iface(["BaseActionConfig"],{action:Lc.lit("fire-dom-event"),haptic:Lc.opt("HapticType"),browser_mod:Lc.opt("any")}),BaseActionConfig:Lc.iface([],{confirmation:Lc.opt("ConfirmationRestrictionConfig")}),ConfirmationRestrictionConfig:Lc.iface([],{text:Lc.opt("string"),exemptions:Lc.opt(Lc.array("RestrictionConfig"))}),RestrictionConfig:Lc.iface([],{user:"string"}),HapticType:Lc.union(Lc.lit("success"),Lc.lit("warning"),Lc.lit("failure"),Lc.lit("light"),Lc.lit("medium"),Lc.lit("heavy"),Lc.lit("selection")),ActionConfig:Lc.union("ToggleActionConfig","CallServiceActionConfig","NavigateActionConfig","UrlActionConfig","MoreInfoActionConfig","NoActionConfig","CustomActionConfig","ToggleMenuActionConfig")},Dc=(e,t,o,i)=>{i=i||{},o=null==o?{}:o;const a=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return a.detail=o,e.dispatchEvent(a),a},Ic=(e,t)=>{if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let o,i;if(Array.isArray(e)){if(i=e.length,i!==t.length)return!1;for(o=i;0!==o--;)if(!Ic(e[o],t[o]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o of e.entries())if(!t.has(o[0]))return!1;for(o of e.entries())if(!Ic(o[1],t.get(o[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o of e.entries())if(!t.has(o[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(i=e.length,i!==t.length)return!1;for(o=i;0!==o--;)if(e[o]!==t[o])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const a=Object.keys(e);if(i=a.length,i!==Object.keys(t).length)return!1;for(o=i;0!==o--;)if(!Object.prototype.hasOwnProperty.call(t,a[o]))return!1;for(o=i;0!==o--;){const i=a[o];if(!Ic(e[i],t[i]))return!1}return!0}return e!=e&&t!=t},Hc="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Fc extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.cancelled=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"fixed",width:Hc?"100px":"50px",height:Hc?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0)},{passive:!0})})}bind(e,t={}){e.actionHandler&&Ic(t,e.actionHandler.options)||(e.actionHandler?(e.removeEventListener("touchstart",e.actionHandler.start),e.removeEventListener("touchend",e.actionHandler.end),e.removeEventListener("touchcancel",e.actionHandler.end),e.removeEventListener("mousedown",e.actionHandler.start),e.removeEventListener("click",e.actionHandler.end),e.removeEventListener("keyup",e.actionHandler.handleEnter)):e.addEventListener("contextmenu",e=>{const t=e||window.event;return t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1,!1}),e.actionHandler={options:t},t.disabled||(e.actionHandler.start=e=>{let o,i;this.cancelled=!1,e.touches?(o=e.touches[0].clientX,i=e.touches[0].clientY):(o=e.clientX,i=e.clientY),t.hasHold&&(this.held=!1,this.timer=window.setTimeout(()=>{this.startAnimation(o,i),this.held=!0},this.holdTime))},e.actionHandler.end=e=>{if(["touchend","touchcancel"].includes(e.type)&&this.cancelled)return;const o=e.target;e.cancelable&&e.preventDefault(),t.hasHold&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0),t.hasHold&&this.held?Dc(o,"action",{action:"hold"}):t.hasDoubleClick?"click"===e.type&&e.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,Dc(o,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Dc(o,"action",{action:"double_tap"})):Dc(o,"action",{action:"tap"})},e.actionHandler.handleEnter=e=>{13===e.keyCode&&e.currentTarget.actionHandler.end(e)},e.addEventListener("touchstart",e.actionHandler.start,{passive:!0}),e.addEventListener("touchend",e.actionHandler.end),e.addEventListener("touchcancel",e.actionHandler.end),e.addEventListener("mousedown",e.actionHandler.start,{passive:!0}),e.addEventListener("click",e.actionHandler.end),e.addEventListener("keyup",e.actionHandler.handleEnter)))}startAnimation(e,t){Object.assign(this.style,{left:`${e}px`,top:`${t}px`,display:null}),this.ripple.disabled=!1,this.ripple.startPress(),this.ripple.unbounded=!0}stopAnimation(){this.ripple.endPress(),this.ripple.disabled=!0,this.style.display="none"}}customElements.define("apexcharts-card-action-handler",Fc);const Yc=(e,t)=>{const o=(()=>{const e=document.body;if(e.querySelector("apexcharts-card-action-handler"))return e.querySelector("apexcharts-card-action-handler");const t=document.createElement("apexcharts-card-action-handler");return e.appendChild(t),t})();o&&o.bind(e,t)},jc=_e(class extends Se{update(e,[t]){return Yc(e.element,t),H}render(e){}});console.info(`%c APEXCHARTS-CARD %c v${Je} `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),globalThis.ApexCharts=vs,Ke.config({name:"apexchart-card",version:1,storeName:"entity_history_cache",description: ''
      <ha-card header=${(e=>e??F)(p)} class=${Xe(s)}>
        <div id="spinner-wrapper">
          <div id="spinner" class=${Xe(n)}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class=${Xe(r)}>
          ${!(null===(a=this._config.header)||void 0===a?void 0:a.show)||!this._config.header.show_states&&this._config.header.standard_format?I``:this._renderHeader()}
          <div id="graph-wrapper">
            <div id="graph"></div>
            ${this._config.series_in_brush.length?I`<div id="brush"></div>`:""}
          </div>
        </div>
        ${this._renderLastUpdated()} ${this._renderVersion()}
      </ha-card>
    `}_renderWarnings(){var e;return I`
      <ha-card class="warning">
        <hui-warning>
          <div style="font-weight: bold;">apexcharts-card</div>
          ${null===(e=this._config)||void 0===e?void 0:e.series.map((e,t)=>{var o;return this._entities[t]?I``:I` <div>Entity not available: ${null===(o=this._config)||void 0===o?void 0:o.series[t].entity}</div> `})}
        </hui-warning>
      </ha-card>
    `}_renderHeader(){var e,t,o,i,a,n,r,s;const p={floating:(null===(t=null===(e=this._config)||void 0===e?void 0:e.header)||void 0===t?void 0:t.floating)||!1};return I`
      <div id="header" class=${Xe(p)}>
        ${!(null===(i=null===(o=this._config)||void 0===o?void 0:o.header)||void 0===i?void 0:i.standard_format)&&(null===(n=null===(a=this._config)||void 0===a?void 0:a.header)||void 0===n?void 0:n.title)?this._renderTitle():I``}
        ${(null===(s=null===(r=this._config)||void 0===r?void 0:r.header)||void 0===s?void 0:s.show_states)?this._renderStates():I``}
      </div>
    `}_renderTitle(){var e,t,o,i,a,n,r,s,p,b,c,M,z,l,O,d,h,A,u,f,q,g,W,m,x,v,y,R,L,w,N,B,_,S,X,k,C,T,E;const P=!(null===(t=null===(e=this._config)||void 0===e?void 0:e.header)||void 0===t?void 0:t.disable_actions)&&(null===(i=null===(o=this._config)||void 0===o?void 0:o.header)||void 0===i?void 0:i.title_actions)&&("none"!==(null===(s=null===(r=null===(n=null===(a=this._config)||void 0===a?void 0:a.header)||void 0===n?void 0:n.title_actions)||void 0===r?void 0:r.tap_action)||void 0===s?void 0:s.action)||(null===(M=null===(c=null===(b=null===(p=this._config)||void 0===p?void 0:p.header)||void 0===b?void 0:b.title_actions)||void 0===c?void 0:c.hold_action)||void 0===M?void 0:M.action)&&"none"!==(null===(d=null===(O=null===(l=null===(z=this._config)||void 0===z?void 0:z.header)||void 0===l?void 0:l.title_actions)||void 0===O?void 0:O.hold_action)||void 0===d?void 0:d.action)||(null===(f=null===(u=null===(A=null===(h=this._config)||void 0===h?void 0:h.header)||void 0===A?void 0:A.title_actions)||void 0===u?void 0:u.double_tap_action)||void 0===f?void 0:f.action)&&"none"!==(null===(m=null===(W=null===(g=null===(q=this._config)||void 0===q?void 0:q.header)||void 0===g?void 0:g.title_actions)||void 0===W?void 0:W.double_tap_action)||void 0===m?void 0:m.action))?"actions":"disabled";return I`<div
      id="header__title"
      class="${P}"
      @action=${e=>{this._handleTitleAction(e)}}
      .actionHandler=${jc({hasDoubleClick:(null===(R=null===(y=null===(v=null===(x=this._config)||void 0===x?void 0:x.header)||void 0===v?void 0:v.title_actions)||void 0===y?void 0:y.double_tap_action)||void 0===R?void 0:R.action)&&"none"!==(null===(w=null===(L=this._config)||void 0===L?void 0:L.header)||void 0===w?void 0:w.title_actions.double_tap_action.action),hasHold:(null===(S=null===(_=null===(B=null===(N=this._config)||void 0===N?void 0:N.header)||void 0===B?void 0:B.title_actions)||void 0===_?void 0:_.hold_action)||void 0===S?void 0:S.action)&&"none"!==(null===(C=null===(k=null===(X=this._config)||void 0===X?void 0:X.header)||void 0===k?void 0:k.title_actions)||void 0===C?void 0:C.hold_action.action)})}
      @focus="${e=>{this.handleRippleFocus(e,"title")}}"
      @blur="${e=>{this.handleRippleBlur(e,"title")}}"
      @mousedown="${e=>{this.handleRippleActivate(e,"title")}}"
      @mouseup="${e=>{this.handleRippleDeactivate(e,"title")}}"
      @touchstart="${e=>{this.handleRippleActivate(e,"title")}}"
      @touchend="${e=>{this.handleRippleDeactivate(e,"title")}}"
      @touchcancel="${e=>{this.handleRippleDeactivate(e,"title")}}"
    >
      <span>${null===(E=null===(T=this._config)||void 0===T?void 0:T.header)||void 0===E?void 0:E.title}</span>
      <mwc-ripple unbounded id="ripple-title"></mwc-ripple>
    </div>`}_renderStates(){var e;return I`
      <div id="header__states">
        ${null===(e=this._config)||void 0===e?void 0:e.series.map((e,t)=>{var o,i,a,n,r,s,p,b,c,M,z,l,O,d,h,A,u,f,q,g,W,m,x,v,y;return!e.show.in_header||!e.show.null_in_header&&null===(null===(o=this._headerState)||void 0===o?void 0:o[t])||!e.show.zero_in_header&&0===(null===(i=this._headerState)||void 0===i?void 0:i[t])?I``:I`
              <div
                id="states__state"
                class="${!(null===(n=null===(a=this._config)||void 0===a?void 0:a.header)||void 0===n?void 0:n.disable_actions)&&("none"!==(null===(s=null===(r=e.header_actions)||void 0===r?void 0:r.tap_action)||void 0===s?void 0:s.action)||(null===(b=null===(p=e.header_actions)||void 0===p?void 0:p.hold_action)||void 0===b?void 0:b.action)&&"none"!==(null===(M=null===(c=e.header_actions)||void 0===c?void 0:c.hold_action)||void 0===M?void 0:M.action)||(null===(l=null===(z=e.header_actions)||void 0===z?void 0:z.double_tap_action)||void 0===l?void 0:l.action)&&"none"!==(null===(d=null===(O=e.header_actions)||void 0===O?void 0:O.double_tap_action)||void 0===d?void 0:d.action))?"actions":"disabled"}"
                @action=${t=>{this._handleAction(t,e)}}
                .actionHandler=${jc({hasDoubleClick:(null===(A=null===(h=e.header_actions)||void 0===h?void 0:h.double_tap_action)||void 0===A?void 0:A.action)&&"none"!==e.header_actions.double_tap_action.action,hasHold:(null===(f=null===(u=e.header_actions)||void 0===u?void 0:u.hold_action)||void 0===f?void 0:f.action)&&"none"!==(null===(q=e.header_actions)||void 0===q?void 0:q.hold_action.action)})}
                @focus="${e=>{this.handleRippleFocus(e,t)}}"
                @blur="${e=>{this.handleRippleBlur(e,t)}}"
                @mousedown="${e=>{this.handleRippleActivate(e,t)}}"
                @mouseup="${e=>{this.handleRippleDeactivate(e,t)}}"
                @touchstart="${e=>{this.handleRippleActivate(e,t)}}"
                @touchend="${e=>{this.handleRippleDeactivate(e,t)}}"
                @touchcancel="${e=>{this.handleRippleDeactivate(e,t)}}"
              >
                <div id="state__value">
                  <span id="state" style="${this._computeHeaderStateColor(e,null===(g=this._headerState)||void 0===g?void 0:g[t])}"
                    >${0===(null===(W=this._headerState)||void 0===W?void 0:W[t])?0:e.show.as_duration?ro(null===(m=this._headerState)||void 0===m?void 0:m[t],e.show.as_duration):this._computeLastState(null===(x=this._headerState)||void 0===x?void 0:x[t],t)||Vt}</span
                  >
                  ${e.show.as_duration?"":I`<span id="uom">${eo(t,null===(v=this._config)||void 0===v?void 0:v.series,this._entities)}</span>`}
                </div>
                ${e.show.name_in_header?I`<div id="state__name">${Qt(t,null===(y=this._config)||void 0===y?void 0:y.series,this._entities)}</div>`:""}
                <mwc-ripple unbounded id="ripple-${t}"></mwc-ripple>
              </div>
            `})}
      </div>
    `}_renderLastUpdated(){var e,t;return(null===(t=null===(e=this._config)||void 0===e?void 0:e.show)||void 0===t?void 0:t.last_updated)?I` <div id="last_updated">${function(e,t,o,i=!0){const a=lo(e,t)?{hour12:!0}:{hourCycle:"h23"},n=Oo(e,t);return i?new Intl.DateTimeFormat(n,Object.assign({year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},a)).format(o):new Intl.DateTimeFormat(n,Object.assign({hour:"numeric",minute:"numeric",second:"numeric"},a)).format(o)}(this._config,this._hass,this._lastUpdated,!0)}</div> `:I``}_renderVersion(){var e,t;return(null===(t=null===(e=this._config)||void 0===e?void 0:e.show)||void 0===t?void 0:t.version)?I` <div id="version_info">apexcharts-card v${Je}</div> `:I``}async _initialLoad(){var e,t,o,i,a;await new Promise(e=>requestAnimationFrame(e)),await this.updateComplete,"server"===(null==(a=this._hass)?void 0:a.locale).time_zone&&(this._serverTimeOffset=(i=null===(e=this._hass)||void 0===e?void 0:e.config.time_zone)?60*(Xt().utcOffset()-Xt().tz(i).utcOffset())*1e3:0);const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#graph"),r=null===(o=this.shadowRoot)||void 0===o?void 0:o.querySelector("#brush");if(!this._apexChart&&n&&this._config){this._loaded=!0;const e=function(e,t,o){const i=ic(),a={chart:{height:e.section_mode?"100%":void 0,locales:[e.locale&&i[e.locale]||(null==t?void 0:t.language)&&i[t.language]||ac()],defaultLocale:e.locale&&i[e.locale]&&e.locale||(null==t?void 0:t.language)&&i[t.language]&&t.language||"en",type:e.chart_type||Ct,stacked:null==e?void 0:e.stacked,foreColor:"var(--primary-text-color)",width:"100%",zoom:{enabled:!1},toolbar:{show:!1}},grid:{strokeDashArray:3},fill:{opacity:nc(e,!1),type:Wc(e,!1)},series:rc(e,t,!1),labels:sc(e,t),xaxis:pc(e,t),yaxis:bc(e),tooltip:{x:{formatter:Mc(e,t)},y:{formatter:zc(e,t)}},dataLabels:{enabled:lc(e),enabledOnSeries:fc(e),formatter:Oc(e,o,t)},plotOptions:{radialBar:dc(e,t)},legend:{position:"bottom",show:!0,formatter:hc(e,t),markers:Ac(e)},stroke:{curve:uc(e,!1),lineCap:"radialBar"===e.chart_type?"round":"butt",colors:"pie"===e.chart_type||"donut"===e.chart_type?["var(--card-background-color)"]:void 0,width:qc(e,!1),dashArray:gc(e,!1)},markers:{showNullDataPoints:!1},noData:{text:"Loading..."}};let n={};"minimal"===e.layout&&(n=Rs);return e.apex_config?Jt(Jt(a,n),mc(e.apex_config)):Jt(a,n)}(this._config,this._hass,this._graphs);this._config.series_in_brush.length&&(e.chart.id=Math.random().toString(36).substring(7)),this._apexChart=new vs(n,e);const t=[];t.push(this._apexChart.render()),this._config.series_in_brush.length&&r&&(this._apexBrush=new vs(r,function(e,t,o){var i;const a=ic(),n={chart:{locales:[e.locale&&a[e.locale]||(null==t?void 0:t.language)&&a[t.language]||ac()],defaultLocale:e.locale&&a[e.locale]&&e.locale||(null==t?void 0:t.language)&&a[t.language]&&t.language||"en",type:e.chart_type||Ct,stacked:null==e?void 0:e.stacked,foreColor:"var(--primary-text-color)",width:"100%",height:"120px",zoom:{enabled:!1},toolbar:{show:!1},id:Math.random().toString(36).substring(7),brush:{target:o,enabled:!0}},grid:{strokeDashArray:3},fill:{opacity:nc(e,!0),type:Wc(e,!0)},series:rc(e,t,!0),xaxis:pc(e,t),yaxis:{tickAmount:2,decimalsInFloat:1},tooltip:{enabled:!1},dataLabels:{enabled:!1},legend:{show:!1},stroke:{curve:uc(e,!0),lineCap:"radialBar"===e.chart_type?"round":"butt",colors:"pie"===e.chart_type||"donut"===e.chart_type?["var(--card-background-color)"]:void 0,width:qc(e,!0),dashArray:gc(e,!1)},markers:{showNullDataPoints:!1},noData:{text:"Loading..."}};return(null===(i=e.brush)||void 0===i?void 0:i.apex_config)?Jt(n,mc(e.brush.apex_config)):n}(this._config,this._hass,e.chart.id)),t.push(this._apexBrush.render())),await Promise.all(t),this._firstDataLoad()}}async _updateData(){var e,t,o,i,a,n,r,s,p,b,c,M,z,l,O,d;if(!this._config||!this._apexChart||!this._graphs)return;const{start:h,end:A}=this._getSpanDates(),u=new Date;this._lastUpdated=u;const f=!0!==(null===(e=po())||void 0===e?void 0:e.editMode)&&this._config.cache;try{const e=this._graphs.map((e,t)=>(e&&(e.cache=f),null==e?void 0:e._updateHistory(this._seriesOffset[t]?new Date(h.getTime()+this._seriesOffset[t]):h,this._seriesOffset[t]?new Date(A.getTime()+this._seriesOffset[t]):A)));await Promise.all(e);let q={series:[]};const g={series:[]};Ut.includes(this._config.chart_type)?(this._graphs.forEach((e,t)=>{var o,i,a,n,r,s,p,b,c,M,z,l;if(!e)return[];const O=null===(o=this._config)||void 0===o?void 0:o.series[t].show.in_header;if(O&&"raw"!==O&&(this._headerState[t]="after_now"===O||"before_now"===O?e.nowValue(u.getTime()+(this._seriesOffset[t]?this._seriesOffset[t]:0),"before_now"===O):e.lastState),!(null===(i=this._config)||void 0===i?void 0:i.series[t].show.in_chart)&&!(null===(a=this._config)||void 0===a?void 0:a.series[t].show.in_brush))return;if(0===e.history.length)return(null===(n=this._config)||void 0===n?void 0:n.series[t].show.in_chart)&&q.series.push({data:[]}),void((null===(r=this._config)||void 0===r?void 0:r.series[t].show.in_brush)&&g.series.push({data:[]}));let d=[];const h=this._serverTimeOffset+(this._seriesOffset[t]||0)-(this._seriesTimeDelta[t]||0);if(d=h?function(e,t){return t?e.map(e=>[e[0]-t,e[1]]):e}(e.history,h):[...e.history],"column"!==(null===(s=this._config)||void 0===s?void 0:s.series[t].type)&&(null===(p=this._config)||void 0===p?void 0:p.series[t].extend_to)){const e=d.slice(-1)[0];"end"===(null===(b=this._config)||void 0===b?void 0:b.series[t].extend_to)&&e[0]<A.getTime()-this._serverTimeOffset?d.push([A.getTime()-this._serverTimeOffset,e[1]]):"now"===(null===(c=this._config)||void 0===c?void 0:c.series[t].extend_to)&&e[0]<u.getTime()-this._serverTimeOffset&&d.push([u.getTime()-this._serverTimeOffset,e[1]])}const f=(null===(M=this._config)||void 0===M?void 0:M.series[t].invert)?{data:this._invertData(d)}:{data:d};(null===(z=this._config)||void 0===z?void 0:z.series[t].show.in_chart)&&q.series.push(f),(null===(l=this._config)||void 0===l?void 0:l.series[t].show.in_brush)&&g.series.push(f)}),q.annotations=this._computeAnnotations(h,A,new Date(u.getTime()-this._serverTimeOffset)),this._yAxisConfig&&(q.yaxis=this._computeYAxisAutoMinMax(h,A)),this._apexBrush||(q.xaxis={min:h.getTime()-this._serverTimeOffset,max:this._findEndOfChart(new Date(A.getTime()-this._serverTimeOffset),!1)})):q={series:this._graphs.flatMap((e,t)=>{var o,i,a,n;if(!e)return[];let r=0;if(0===e.history.length)"raw"!==(null===(o=this._config)||void 0===o?void 0:o.series[t].show.in_header)&&(this._headerState[t]=null),r=0;else{const o=e.lastState;r=o||0,"raw"!==(null===(i=this._config)||void 0===i?void 0:i.series[t].show.in_header)&&(this._headerState[t]=o)}return(null===(a=this._config)||void 0===a?void 0:a.series[t].show.in_chart)?"radialBar"===(null===(n=this._config)||void 0===n?void 0:n.chart_type)?[so(r,this._config.series[t].min,this._config.series[t].max)]:[r]:[]})},q.colors=this._computeChartColors(!1),this._apexBrush&&(g.colors=this._computeChartColors(!0)),(null===(t=this._config.experimental)||void 0===t?void 0:t.color_threshold)&&this._config.series.some(e=>e.color_threshold)&&(q.markers={colors:to(this._config.series_in_graph.flatMap((e,t)=>"column"===e.type?[]:[this._colors[t]]))},q.legend={markers:{fillColors:to(this._colors)}},q.tooltip={marker:{fillColors:q.legend.markers.fillColors}},q.fill={gradient:{type:"vertical",colorStops:this._config.series_in_graph.map((e,t)=>{var o,i,a,n;if(!e.color_threshold||![void 0,"area","line"].includes(e.type))return[];const r=null===(i=null===(o=this._graphs)||void 0===o?void 0:o[e.index])||void 0===i?void 0:i.min,s=null===(n=null===(a=this._graphs)||void 0===a?void 0:a[e.index])||void 0===n?void 0:n.max;return void 0===r||void 0===s?[]:this._computeFillColorStops(e,r,s,oo(this._colors[t]),e.invert)||[]})}},this._apexBrush&&(g.fill={gradient:{type:"vertical",colorStops:this._config.series_in_brush.map((e,t)=>{var o,i,a,n;if(!e.color_threshold||![void 0,"area","line"].includes(e.type))return[];const r=null===(i=null===(o=this._graphs)||void 0===o?void 0:o[e.index])||void 0===i?void 0:i.min,s=null===(n=null===(a=this._graphs)||void 0===a?void 0:a[e.index])||void 0===n?void 0:n.max;return void 0===r||void 0===s?[]:this._computeFillColorStops(e,r,s,oo(this._colors[t]),e.invert)||[]})}}));const W=this._apexBrush&&this._brushInit&&(null===(a=null===(i=null===(o=this._apexChart.axes)||void 0===o?void 0:o.w)||void 0===i?void 0:i.globals)||void 0===a?void 0:a.maxX)===(null===(s=null===(r=null===(n=this._apexBrush.axes)||void 0===n?void 0:n.w)||void 0===r?void 0:r.globals)||void 0===s?void 0:s.maxX),m=null===(c=null===(b=null===(p=this._apexChart.axes)||void 0===p?void 0:p.w)||void 0===b?void 0:b.globals)||void 0===c?void 0:c.minX,x=null===(l=null===(z=null===(M=this._apexChart.axes)||void 0===M?void 0:M.w)||void 0===z?void 0:z.globals)||void 0===l?void 0:l.maxX;this._headerState=[...this._headerState];const v=[];if(v.push(null===(O=this._apexChart)||void 0===O?void 0:O.updateOptions(q,!1,!Ut.includes(this._config.chart_type))),this._apexBrush){const e=h.getTime()-this._serverTimeOffset,t=this._findEndOfChart(new Date(A.getTime()-this._serverTimeOffset),!1);g.xaxis={min:e,max:t},W||!this._brushInit?g.chart={selection:{enabled:!0,xaxis:{min:g.xaxis.max-(this._brushSelectionSpan?this._brushSelectionSpan:this._graphSpan/4),max:g.xaxis.max}}}:g.chart={selection:{enabled:!0,xaxis:{min:m<e?e:m,max:m<e?e+(x-m):x}}};const o=oo("var(--primary-text-color)");g.chart.selection.stroke={color:o},g.chart.selection.fill={color:o,opacity:.1},this._brushInit=!0,v.push(null===(d=this._apexBrush)||void 0===d?void 0:d.updateOptions(g,!1,!1))}await Promise.all(v)}catch(q){Kt(q)}this._updating=!1}_computeAnnotations(e,t,o){return Object.assign(Object.assign({},this._computeMinMaxPointsAnnotations(e,t)),this._computeNowAnnotation(o))}_computeMinMaxPointsAnnotations(e,t){var o,i,a,n;const r=e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),s=null===(o=this._config)||void 0===o?void 0:o.series_in_graph.flatMap((o,i)=>{var a,n;if(o.show.extremas){const{min:s,max:p}=(null===(n=null===(a=this._graphs)||void 0===a?void 0:a[o.index])||void 0===n?void 0:n.minMaxWithTimestamp(this._seriesOffset[o.index]?new Date(e.getTime()+this._seriesOffset[o.index]).getTime():e.getTime(),this._seriesOffset[o.index]?new Date(t.getTime()+this._seriesOffset[o.index]).getTime():t.getTime(),this._serverTimeOffset-(this._seriesTimeDelta[o.index]||0)))||{min:[0,null],max:[0,null]},b=oo(this._colors[i]),c=io(b),M=[];if(s[0]&&["min","min+time",!0,"time"].includes(o.show.extremas)){const e="time"===o.show.extremas||"min+time"===o.show.extremas;M.push(...this._getPointAnnotationStyle(s,this._seriesOffset[o.index],b,c,o,i,o.invert,r,e))}if(p[0]&&["max","max+time",!0,"time"].includes(o.show.extremas)){const e="time"===o.show.extremas||"max+time"===o.show.extremas;M.push(...this._getPointAnnotationStyle(p,this._seriesOffset[o.index],b,c,o,i,o.invert,r,e))}return M}return[]});return{points:[...s||[],...(null===(n=null===(a=null===(i=this._config)||void 0===i?void 0:i.apex_config)||void 0===a?void 0:a.annotations)||void 0===n?void 0:n.points)||[]]}}_getPointAnnotationStyle(e,t,o,i,a,n,r=!1,s,p){var b,c,M;const z=[],l=(null===(c=null===(b=this._config)||void 0===b?void 0:b.apex_config)||void 0===c?void 0:c.yaxis)&&Array.isArray(this._config.apex_config.yaxis)&&this._config.apex_config.yaxis.length>1;if(z.push({x:t?e[0]-t:e[0],y:r&&e[1]?-e[1]:e[1],seriesIndex:n,yAxisIndex:l?n:0,marker:{strokeColor:o,fillColor:"var(--card-background-color)"},label:{text:ho(e[1],null===(M=this._hass)||void 0===M?void 0:M.locale,a.float_precision),borderColor:"var(--card-background-color)",borderWidth:2,style:{background:o,color:i}}}),p){let o=qt(oo("var(--card-background-color)"));o=o.isValid&&o.getLuminance()>.5?o.darken(20):o.lighten(20);const i=io(o.toHexString());let a={timeStyle:"medium"};s||(a.dateStyle="medium"),a=Object.assign(Object.assign({},a),lo(this._config,this._hass)?{hour12:!0}:{hourCycle:"h23"});const p=Oo(this._config,this._hass);z.push({x:t?e[0]-t:e[0],y:r&&e[1]?-e[1]:e[1],seriesIndex:n,yAxisIndex:l?n:0,marker:{size:0},label:{text:`${Intl.DateTimeFormat(p,a).format(e[0])}`,borderColor:"var(--card-background-color)",offsetY:-22,borderWidth:0,style:{background:o.toHexString(),color:i,fontSize:"8px",fontWeight:200}}})}return z}_computeNowAnnotation(e){var t,o,i,a,n;if(null===(o=null===(t=this._config)||void 0===t?void 0:t.now)||void 0===o?void 0:o.show){const t=oo(this._config.now.color||"var(--primary-color)"),o=io(t);return{xaxis:[{x:e.getTime(),strokeDashArray:3,label:{text:this._config.now.label,borderColor:t,style:{color:o,background:t}},borderColor:t},...(null===(n=null===(a=null===(i=this._config)||void 0===i?void 0:i.apex_config)||void 0===a?void 0:a.annotations)||void 0===n?void 0:n.xaxis)||[]]}}return{}}_computeYAxisAutoMinMax(e,t){var o,i,a;if(this._config)return null===(o=this._yAxisConfig)||void 0===o||o.map(o=>{var i,a;if(o.min_type!==ke.FIXED||o.max_type!==ke.FIXED){const n=null===(i=o.series_id)||void 0===i?void 0:i.map(o=>{var i,a;const n=null===(i=this._graphs[o])||void 0===i?void 0:i.minMaxWithTimestampForYAxis(this._seriesOffset[o]?new Date(e.getTime()+this._seriesOffset[o]).getTime():e.getTime(),this._seriesOffset[o]?new Date(t.getTime()+this._seriesOffset[o]).getTime():t.getTime());if(n){if(null===(a=this._config)||void 0===a?void 0:a.series[o].invert){const e=n.min[1],t=n.max[1];null!==e&&(n.max[1]=-e),null!==t&&(n.min[1]=-t)}return n}});let r=null,s=null;null==n||n.forEach(e=>{e&&((null==r||null!==e.min[1]&&r>e.min[1])&&(r=e.min[1]),(null==s||null!==e.max[1]&&s<e.max[1])&&(s=e.max[1]))}),void 0!==o.align_to&&(null!==r&&o.min_type!==ke.FIXED&&r%o.align_to!==0&&(r=r>=0?r-r%o.align_to:-(o.align_to+r%o.align_to-r)),null!==s&&o.max_type!==ke.FIXED&&s%o.align_to!==0&&(s=s>=0?o.align_to-s%o.align_to+s:s%o.align_to-s)),null===(a=o.series_id)||void 0===a||a.forEach(e=>{null!==r&&o.min_type!==ke.FIXED&&(this._config.apex_config.yaxis[e].min=this._getMinMaxBasedOnType(!0,r,o.min,o.min_type)),null!==s&&o.max_type!==ke.FIXED&&(this._config.apex_config.yaxis[e].max=this._getMinMaxBasedOnType(!1,s,o.max,o.max_type))})}}),null===(a=null===(i=this._config)||void 0===i?void 0:i.apex_config)||void 0===a?void 0:a.yaxis}_getMinMaxBasedOnType(e,t,o,i){switch(i){case ke.AUTO:return t;case ke.SOFT:return e&&t>o||!e&&t<o?o:t;case ke.ABSOLUTE:return t+o;default:return t}}_getTypeOfMinMax(e){const t=/[+-]?\d+(\.\d+)?/g;if("number"==typeof e)return[e,ke.FIXED];if(void 0===e||"auto"===e)return[void 0,ke.AUTO];if("string"==typeof e&&"auto"!==e){const o=e.match(t);if(!o||1!==o.length)throw new Error(`Bad yaxis min/max format: ${e}`);const i=parseFloat(o[0]);if(e.startsWith("~"))return[i,ke.SOFT];if(e.startsWith("|")&&e.endsWith("|"))return[i,ke.ABSOLUTE]}throw new Error(`Bad yaxis min/max format: ${e}`)}_computeChartColors(e){var t,o,i;const a=to(e?this._brushColors:this._colors),n=e?null===(t=this._config)||void 0===t?void 0:t.series_in_brush:null===(o=this._config)||void 0===o?void 0:o.series_in_graph;return null==n||n.forEach((e,t)=>{var o,i;if((null===(i=null===(o=this._config)||void 0===o?void 0:o.experimental)||void 0===i?void 0:i.color_threshold)&&($t.includes(this._config.chart_type)||"column"===e.type)&&e.color_threshold&&e.color_threshold.length>0){const o=this._colors;a[t]=function({value:i},a=e.color_threshold,n=o[t]){let r=a[0].color||n;return a.forEach(e=>{i>e.value&&(r=e.color||n)}),oo(r)}}}),a.slice(0,null===(i=this._config)||void 0===i?void 0:i.series_in_graph.length)}_computeFillColorStops(e,t,o,i,a=!1){if(!e.color_threshold)return;const n=o-t,r=e.color_threshold.flatMap((r,s,p)=>{if(r.value>o&&p[s-1]&&p[s-1].value>o||r.value<t&&p[s+1]&&p[s+1].value<t)return[];let b;const c=void 0!==e.opacity?e.opacity:"area"===e.type?.7:1;let M=void 0===r.opacity?c:r.opacity;if(r.value>o&&p[s-1]){const e=(o-p[s-1].value)/(r.value-p[s-1].value);b=bo(qt(p[s-1].color||i).toHexString(),qt(r.color||i).toHexString(),e);const t=void 0===p[s-1].opacity?c:p[s-1].opacity,a=void 0===r.opacity?c:r.opacity;M=t>a?(t-a)*(1-e)+a:(a-t)*e+t,M=M<0?-M:M}else if(r.value<t&&p[s+1]){const e=(p[s+1].value-t)/(p[s+1].value-r.value);b=bo(qt(p[s+1].color||i).toHexString(),qt(r.color||i).toHexString(),e);const o=void 0===p[s+1].opacity?c:p[s+1].opacity,a=void 0===r.opacity?c:r.opacity;M=o>a?(o-a)*(1-e)+a:(a-o)*e+o,M=M<0?-M:M}return b=b||qt(r.color||i).toHexString(),[void 0,"line"].includes(e.type)&&(b=qt(b).setAlpha(M).toHex8String()),[{color:b||qt(r.color||i).toHexString(),offset:n<=0?0:a?100-(o-r.value)*(100/n):(o-r.value)*(100/n),opacity:M}]});return a?r:r.reverse()}_computeHeaderStateColor(e,t){var o,i,a;let n="";if(null===(i=null===(o=this._config)||void 0===o?void 0:o.header)||void 0===i?void 0:i.colorize_states){if(!((null===(a=this._config.experimental)||void 0===a?void 0:a.color_threshold)&&e.show.header_color_threshold&&e.color_threshold&&e.color_threshold.length>0&&null!==t))return this._headerColors&&this._headerColors.length>0?`color: ${this._headerColors[e.index]};`:"";{const o=e.color_threshold.findIndex(e=>e.value>t);if(o<0)n=oo(e.color_threshold[e.color_threshold.length-1].color||this._headerColors[e.index]);else if(0===o)n=oo(e.color_threshold[0].color||this._headerColors[e.index]);else{const i=e.color_threshold[o-1],a=e.color_threshold[o];if("column"===e.type)n=oo(i.color||this._headerColors[e.index]);else{const o=(t-i.value)/(a.value-i.value);n=bo(oo(i.color||this._headerColors[e.index]),oo(a.color||this._headerColors[e.index]),o)}}}}return n?`color: ${n};`:""}_computeLastState(e,t){var o,i;return null===e?e:ho(e,null===(o=this._hass)||void 0===o?void 0:o.locale,null===(i=this._config)||void 0===i?void 0:i.series[t].float_precision)}_findEndOfChart(e,t){var o,i;const a=new Date(e);let n=0;const r=t?null===(o=this._config)||void 0===o?void 0:o.series_in_brush:null===(i=this._config)||void 0===i?void 0:i.series_in_graph;return(null==r?void 0:r.reduce((e,t)=>e&&"raw"!==t.group_by.func,(null==r?void 0:r.length)>0))&&(n=null==r?void 0:r.reduce((e,t)=>{const o=yt(t.group_by.duration);return-1===e||o<e?o:e},-1)),new Date(a.getTime()-(n||0)).getTime()}_invertData(e){return e.map(e=>null===e[1]?e:[e[0],-e[1]])}_getSpanDates(){var e,t,o,i,a;let n=new Date,r=new Date(n.getTime()-this._graphSpan+1);const s=Xt();if("server"===(null===(e=this._hass)||void 0===e?void 0:e.locale).time_zone&&s.tz(this._hass.config.time_zone),null===(o=null===(t=this._config)||void 0===t?void 0:t.span)||void 0===o?void 0:o.start){r=s.startOf(this._config.span.start).toDate(),n=new Date(r.getTime()+this._graphSpan)}else if(null===(a=null===(i=this._config)||void 0===i?void 0:i.span)||void 0===a?void 0:a.end){const e=s.endOf(this._config.span.end);n=new Date(e.toDate().getTime()+1),r=new Date(n.getTime()-this._graphSpan+1)}return this._offset&&(n.setTime(n.getTime()+this._offset),r.setTime(r.getTime()+this._offset)),{start:r,end:n}}_handleAction(e,t){var o,i;if(null===(o=e.detail)||void 0===o?void 0:o.action){const o=t.header_actions?JSON.parse(JSON.stringify(t.header_actions)):{};switch(e.detail.action){case"tap":case"hold":case"double_tap":o.entity=(null===(i=o[`${e.detail.action}_action`])||void 0===i?void 0:i.entity)||t.entity,je(this,this._hass,o,e.detail.action)}}}_handleTitleAction(e){var t,o,i,a,n,r;if(null===(t=e.detail)||void 0===t?void 0:t.action){const t=(null===(i=null===(o=this._config)||void 0===o?void 0:o.header)||void 0===i?void 0:i.title_actions)?JSON.parse(JSON.stringify(null===(n=null===(a=this._config)||void 0===a?void 0:a.header)||void 0===n?void 0:n.title_actions)):{};switch(e.detail.action){case"tap":case"hold":case"double_tap":t.entity=null===(r=t[`${e.detail.action}_action`])||void 0===r?void 0:r.entity,je(this,this._hass,t,e.detail.action)}}}handleRippleActivate(e,t){var o;const i=null===(o=this.shadowRoot)||void 0===o?void 0:o.getElementById(`ripple-${t}`);i&&"function"==typeof i.startFocus&&i.startPress(e)}handleRippleDeactivate(e,t){var o;const i=null===(o=this.shadowRoot)||void 0===o?void 0:o.getElementById(`ripple-${t}`);i&&"function"==typeof i.startFocus&&i.endPress()}handleRippleFocus(e,t){var o;const i=null===(o=this.shadowRoot)||void 0===o?void 0:o.getElementById(`ripple-${t}`);i&&"function"==typeof i.startFocus&&i.startFocus()}handleRippleBlur(e,t){var o;const i=null===(o=this.shadowRoot)||void 0===o?void 0:o.getElementById(`ripple-${t}`);i&&"function"==typeof i.startFocus&&i.endFocus()}getCardSize(){return 3}getGridOptions(){var e;return(null===(e=this._config)||void 0===e?void 0:e.section_mode)?{rows:6,columns:12,min_rows:2,min_columns:6}:{}}static getStubConfig(e,t,o){const i=(e,t,o,a,n,r)=>{const s=[];(null==n?void 0:n.length)&&s.push(e=>n.includes(e.split(".")[0])),r&&s.push(t=>e.states[t]&&r(e.states[t]));const p=((e,t,o)=>{(!o||o>e.length)&&(o=e.length);const i=[];for(let a=0;a<e.length&&i.length<o;a++){let o=!0;for(const i of t)if(!i(e[a])){o=!1;break}o&&i.push(e[a])}return i})(o,s,t);if(p.length<t&&a.length){const o=i(e,t-p.length,a,[],n,r);p.push(...o)}return p},a=i(e,2,t,o,["sensor"],e=>!isNaN(Number(e.state))),n={header:{show:!0,title:"ApexCharts-Card",show_states:!0,colorize_states:!0},series:[]};return a[0]&&(n.series[0]={entity:a[0],data_generator:"// REMOVE ME\nconst now = new Date();\nconst data = [];\nfor(let i = 0; i <= 24; i++) {\n  data.push([now.getTime() - i * 1000 * 60 * 60, Math.floor((Math.random() * 10) + 1)])\n}\nreturn data.reverse();\n"}),a[1]&&(n.series[1]={entity:a[1],type:"column",data_generator:"// REMOVE ME\nconst now = new Date();\nconst data = [];\nfor(let i = 0; i <= 24; i++) {\n  data.push([now.getTime() - i * 1000 * 60 * 60, Math.floor((Math.random() * 10) + 1)])\n}\nreturn data.reverse();\n"}),n}};e([Ne({type:Boolean})],Gc.prototype,"_updating",void 0),e([Ne({attribute:!1})],Gc.prototype,"_config",void 0),e([Ne({attribute:!1})],Gc.prototype,"_headerState",void 0),e([Ne({attribute:!1})],Gc.prototype,"_lastUpdated",void 0),e([Ne({type:Boolean})],Gc.prototype,"_warning",void 0),e([function(e){return(t,o)=>{const i="function"==typeof t?t:t[o];Object.assign(i,e)}}({passive:!0})],Gc.prototype,"handleRippleActivate",null),Gc=e([(e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)})("apexcharts-card")],Gc),window.customCards=window.customCards||[],window.customCards.push({type:"apexcharts-card",name:"ApexCharts Card",preview:!0,description:"A graph card based on ApexCharts"});
