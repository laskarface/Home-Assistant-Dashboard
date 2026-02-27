/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),n=new WeakMap;class i{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet;const a=this._strings;if(t&&void 0===e){const t=void 0!==a&&1===a.length;t&&(e=n.get(a)),void 0===e&&((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(a,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,a,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(a)+e[n+1]),e[0]);return new i(n,e,a)},o=e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return new i("string"==typeof(n=t)?n:String(n),void 0,a);var n},s=t?e=>e:e=>e instanceof CSSStyleSheet?o(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:d,getOwnPropertyDescriptor:_,getOwnPropertyNames:c,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,m=globalThis;let g;const p=m.trustedTypes,f=p?p.emptyScript:"",y=m.reactiveElementPolyfillSupportDevMode;{const e=m.litIssuedWarnings??=new Set;g=(t,a)=>{a+=` See https://lit.dev/msg/${t} for more information.`,e.has(a)||(console.warn(a),e.add(a))},g("dev-mode","Lit is in dev mode. Not recommended for production!"),m.ShadyDOM?.inUse&&void 0===y&&g("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")}const v=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},k=(e,t)=>!l(e,t),b={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class M extends HTMLElement{static addInitializer(e){this.__prepare(),(this._initializers??=[]).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this.__prepare(),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol.for(`${String(e)} (@property() cache)`),n=this.getPropertyDescriptor(e,a,t);void 0!==n&&d(this.prototype,e,n)}}static getPropertyDescriptor(e,t,a){const{get:n,set:i}=_(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};if(null==n){if("value"in(_(this.prototype,e)??{}))throw new Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);g("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get(){return n?.call(this)},set(t){const r=n?.call(this);i.call(this,t),this.requestUpdate(e,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static __prepare(){if(this.hasOwnProperty(v("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e._initializers&&(this._initializers=[...e._initializers]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...c(e),...h(e)];for(const a of t)this.createProperty(a,e[a])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,a]of t)this.elementProperties.set(e,a)}this.__attributeToPropertyMap=new Map;for(const[e,t]of this.elementProperties){const a=this.__attributeNameForProperty(e,t);void 0!==a&&this.__attributeToPropertyMap.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles),this.hasOwnProperty("createProperty")&&g("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators"),this.hasOwnProperty("getPropertyDescriptor")&&g("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static __attributeNameForProperty(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((e=>this.enableUpdating=e)),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((e=>e(this)))}addController(e){(this.__controllers??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this.__controllers?.delete(e)}__saveInstanceProperties(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this.__instanceProperties=e)}createRenderRoot(){const a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((a,n)=>{if(t)a.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of n){const n=document.createElement("style"),i=e.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,a.appendChild(n)}})(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this.__controllers?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,a){this._$attributeToProperty(e,a)}__propertyToAttribute(e,t){const a=this.constructor.elementProperties.get(e),n=this.constructor.__attributeNameForProperty(e,a);if(void 0!==n&&!0===a.reflect){const i=(void 0!==a.converter?.toAttribute?a.converter:w).toAttribute(t,a.type);this.constructor.enabledWarnings.includes("migration")&&void 0===i&&g("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`),this.__reflectingProperty=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this.__reflectingProperty=null}}_$attributeToProperty(e,t){const a=this.constructor,n=a.__attributeToPropertyMap.get(e);if(void 0!==n&&this.__reflectingProperty!==n){const e=a.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this.__reflectingProperty=n,this[n]=i.fromAttribute(t,e.type),this.__reflectingProperty=null}}requestUpdate(e,t,a){if(void 0!==e){e instanceof Event&&g("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()"),a??=this.constructor.getPropertyOptions(e);if(!(a.hasChanged??k)(this[e],t))return;this._$changeProperty(e,t,a)}!1===this.isUpdatePending&&(this.__updatePromise=this.__enqueueUpdate())}_$changeProperty(e,t,a){this._$changedProperties.has(e)||this._$changedProperties.set(e,t),!0===a.reflect&&this.__reflectingProperty!==e&&(this.__reflectingProperties??=new Set).add(e)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){const e=this.performUpdate();return this.constructor.enabledWarnings.includes("async-perform-update")&&"function"==typeof e?.then&&g("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`),e}performUpdate(){if(!this.isUpdatePending)return;var e;if(e={kind:"update"},m.emitLitDebugLogEvents&&m.dispatchEvent(new CustomEvent("lit-debug",{detail:e})),!this.hasUpdated){this.renderRoot??=this.createRenderRoot();{const e=[...this.constructor.elementProperties.keys()].filter((e=>this.hasOwnProperty(e)&&e in u(this)));if(e.length)throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${e.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(const[e,t]of this.__instanceProperties)this[e]=t;this.__instanceProperties=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,a]of e)!0!==a.wrapped||this._$changedProperties.has(t)||void 0===this[t]||this._$changeProperty(t,this[t],a)}let t=!1;const a=this._$changedProperties;try{t=this.shouldUpdate(a),t?(this.willUpdate(a),this.__controllers?.forEach((e=>e.hostUpdate?.())),this.update(a)):this.__markUpdated()}catch(e){throw t=!1,this.__markUpdated(),e}t&&this._$didUpdate(a)}willUpdate(e){}_$didUpdate(e){this.__controllers?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update")&&g("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&=this.__reflectingProperties.forEach((e=>this.__propertyToAttribute(e,this[e]))),this.__markUpdated()}updated(e){}firstUpdated(e){}}M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[v("elementProperties")]=new Map,M[v("finalized")]=new Map,y?.({ReactiveElement:M});{M.enabledWarnings=["change-in-update","async-perform-update"];const e=function(e){e.hasOwnProperty(v("enabledWarnings"))||(e.enabledWarnings=e.enabledWarnings.slice())};M.enableWarning=function(t){e(this),this.enabledWarnings.includes(t)||this.enabledWarnings.push(t)},M.disableWarning=function(t){e(this);const a=this.enabledWarnings.indexOf(t);a>=0&&this.enabledWarnings.splice(a,1)}}(m.reactiveElementVersions??=[]).push("2.0.4"),m.reactiveElementVersions.length>1&&g("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T=globalThis,$=e=>{T.emitLitDebugLogEvents&&T.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))};let D,S=0;T.litIssuedWarnings??=new Set,D=(e,t)=>{t+=e?` See https://lit.dev/msg/${e} for more information.`:"",T.litIssuedWarnings.has(t)||(console.warn(t),T.litIssuedWarnings.add(t))},D("dev-mode","Lit is in dev mode. Not recommended for production!");const x=T.ShadyDOM?.inUse&&!0===T.ShadyDOM?.noPatch?T.ShadyDOM.wrap:e=>e,Y=T.trustedTypes,z=Y?Y.createPolicy("lit-html",{createHTML:e=>e}):void 0,L=e=>e,j=(e,t,a)=>L,E=e=>{if(ie!==j)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");ie=e},C=()=>{ie=j},H=(e,t,a)=>ie(e,t,a),F="$lit$",V=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+V,A=`<${O}>`,P=document,I=()=>P.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,W=Array.isArray,U="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,K=/>/g,J=new RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,q=/"/g,G=/^(?:script|style|textarea|title)$/i,Q=(X=1,(e,...t)=>(e.some((e=>void 0===e))&&console.warn("Some template strings are undefined.\nThis is probably caused by illegal octal escape sequences."),t.some((e=>e?._$litStatic$))&&D("","Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.\nPlease use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions"),{_$litType$:X,strings:e,values:t}));var X;const ee=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),ae=new WeakMap,ne=P.createTreeWalker(P,129);let ie=j;function re(e,t){if(!W(e)||!e.hasOwnProperty("raw")){let e="invalid template strings array";throw e="\n          Internal Error: expected template strings to be an array\n          with a 'raw' field. Faking a template strings array by\n          calling html or svg like an ordinary function is effectively\n          the same as calling unsafeHtml and can lead to major security\n          issues, e.g. opening your code up to XSS attacks.\n          If you're using the html or svg tagged template functions normally\n          and still seeing this error, please file a bug at\n          https://github.com/lit/lit/issues/new?template=bug_report.md\n          and include information about your build tooling, if any.\n        ".trim().replace(/\n */g,"\n"),new Error(e)}return void 0!==z?z.createHTML(t):t}class oe{constructor({strings:e,_$litType$:t},a){let n;this.parts=[];let i=0,r=0;const o=e.length-1,s=this.parts,[l,d]=((e,t)=>{const a=e.length-1,n=[];let i,r=2===t?"<svg>":3===t?"<math>":"",o=B;for(let t=0;t<a;t++){const a=e[t];let s,l,d=-1,_=0;for(;_<a.length&&(o.lastIndex=_,l=o.exec(a),null!==l);)if(_=o.lastIndex,o===B){if("!--"===l[1])o=R;else if(void 0!==l[1])o=K;else if(void 0!==l[2])G.test(l[2])&&(i=new RegExp(`</${l[2]}`,"g")),o=J;else if(void 0!==l[3])throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else o===J?">"===l[0]?(o=i??B,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?J:'"'===l[3]?q:Z):o===q||o===Z?o=J:o===R||o===K?o=B:(o=J,i=void 0);console.assert(-1===d||o===J||o===Z||o===q,"unexpected parse state B");const c=o===J&&e[t+1].startsWith("/>")?" ":"";r+=o===B?a+A:d>=0?(n.push(s),a.slice(0,d)+F+a.slice(d)+V+c):a+V+(-2===d?t:c)}return[re(e,r+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]})(e,t);if(this.el=oe.createElement(l,a),ne.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=ne.nextNode())&&s.length<o;){if(1===n.nodeType){{const e=n.localName;if(/^(?:textarea|template)$/i.test(e)&&n.innerHTML.includes(V)){const t=`Expressions are not supported inside \`${e}\` elements. See https://lit.dev/msg/expression-in-${e} for more information.`;if("template"===e)throw new Error(t);D("",t)}}if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(F)){const t=d[r++],a=n.getAttribute(e).split(V),o=/([.?@])?(.*)/.exec(t);s.push({type:1,index:i,name:o[2],strings:a,ctor:"."===o[1]?ce:"?"===o[1]?he:"@"===o[1]?ue:_e}),n.removeAttribute(e)}else e.startsWith(V)&&(s.push({type:6,index:i}),n.removeAttribute(e));if(G.test(n.tagName)){const e=n.textContent.split(V),t=e.length-1;if(t>0){n.textContent=Y?Y.emptyScript:"";for(let a=0;a<t;a++)n.append(e[a],I()),ne.nextNode(),s.push({type:2,index:++i});n.append(e[t],I())}}}else if(8===n.nodeType){if(n.data===O)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(V,e+1));)s.push({type:7,index:i}),e+=V.length-1}}i++}if(d.length!==r)throw new Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+e.join("${...}")+"`");$&&$({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){const a=P.createElement("template");return a.innerHTML=e,a}}function se(e,t,a=e,n){if(t===ee)return t;let i=void 0!==n?a.__directives?.[n]:a.__directive;const r=N(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$notifyDirectiveConnectionChanged?.(!1),void 0===r?i=void 0:(i=new r(e),i._$initialize(e,a,n)),void 0!==n?(a.__directives??=[])[n]=i:a.__directive=i),void 0!==i&&(t=se(e,i._$resolve(e,t.values),i,n)),t}class le{constructor(e,t){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){const{el:{content:t},parts:a}=this._$template,n=(e?.creationScope??P).importNode(t,!0);ne.currentNode=n;let i=ne.nextNode(),r=0,o=0,s=a[0];for(;void 0!==s;){if(r===s.index){let t;2===s.type?t=new de(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new me(i,this,e)),this._$parts.push(t),s=a[++o]}r!==s?.index&&(i=ne.nextNode(),r++)}return ne.currentNode=P,n}_update(e){let t=0;for(const a of this._$parts)void 0!==a&&($&&$({kind:"set part",part:a,value:e[t],valueIndex:t,values:e,templateInstance:this}),void 0!==a.strings?(a._$setValue(e,a,t),t+=a.strings.length-2):a._$setValue(e[t])),t++}}let de=class e{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(e,t,a,n){this.type=2,this._$committedValue=te,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=a,this.options=n,this.__isConnected=n?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let e=x(this._$startNode).parentNode;const t=this._$parent;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){if(null===this.parentNode)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=se(this,e,t),N(e))e===te||null==e||""===e?(this._$committedValue!==te&&($&&$({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=te):e!==this._$committedValue&&e!==ee&&this._commitText(e);else if(void 0!==e._$litType$)this._commitTemplateResult(e);else if(void 0!==e.nodeType){if(this.options?.host===e)return this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),void console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");this._commitNode(e)}else(e=>W(e)||"function"==typeof e?.[Symbol.iterator])(e)?this._commitIterable(e):this._commitText(e)}_insert(e){return x(x(this._$startNode).parentNode).insertBefore(e,this._$endNode)}_commitNode(e){if(this._$committedValue!==e){if(this._$clear(),ie!==j){const e=this._$startNode.parentNode?.nodeName;if("STYLE"===e||"SCRIPT"===e){let t="Forbidden";throw t="STYLE"===e?"Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":"Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(t)}}$&&$({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==te&&N(this._$committedValue)){const t=x(this._$startNode).nextSibling;void 0===this._textSanitizer&&(this._textSanitizer=H(t,"data","property")),e=this._textSanitizer(e),$&&$({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{const t=P.createTextNode("");this._commitNode(t),void 0===this._textSanitizer&&(this._textSanitizer=H(t,"data","property")),e=this._textSanitizer(e),$&&$({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){const{values:t,_$litType$:a}=e,n="number"==typeof a?this._$getTemplate(e):(void 0===a.el&&(a.el=oe.createElement(re(a.h,a.h[0]),this.options)),a);if(this._$committedValue?._$template===n)$&&$({kind:"template updating",template:n,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:t}),this._$committedValue._update(t);else{const e=new le(n,this),a=e._clone(this.options);$&&$({kind:"template instantiated",template:n,instance:e,parts:e._$parts,options:this.options,fragment:a,values:t}),e._update(t),$&&$({kind:"template instantiated and updated",template:n,instance:e,parts:e._$parts,options:this.options,fragment:a,values:t}),this._commitNode(a),this._$committedValue=e}}_$getTemplate(e){let t=ae.get(e.strings);return void 0===t&&ae.set(e.strings,t=new oe(e)),t}_commitIterable(t){W(this._$committedValue)||(this._$committedValue=[],this._$clear());const a=this._$committedValue;let n,i=0;for(const r of t)i===a.length?a.push(n=new e(this._insert(I()),this._insert(I()),this,this.options)):n=a[i],n._$setValue(r),i++;i<a.length&&(this._$clear(n&&x(n._$endNode).nextSibling,i),a.length=i)}_$clear(e=x(this._$startNode).nextSibling,t){for(this._$notifyConnectionChanged?.(!1,!0,t);e&&e!==this._$endNode;){const t=x(e).nextSibling;x(e).remove(),e=t}}setConnected(e){if(void 0!==this._$parent)throw new Error("part.setConnected() may only be called on a RootPart returned from render().");this.__isConnected=e,this._$notifyConnectionChanged?.(e)}};class _e{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(e,t,a,n,i){this.type=1,this._$committedValue=te,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=n,this.options=i,a.length>2||""!==a[0]||""!==a[1]?(this._$committedValue=new Array(a.length-1).fill(new String),this.strings=a):this._$committedValue=te,this._sanitizer=void 0}_$setValue(e,t=this,a,n){const i=this.strings;let r=!1;if(void 0===i)e=se(this,e,t,0),r=!N(e)||e!==this._$committedValue&&e!==ee,r&&(this._$committedValue=e);else{const n=e;let o,s;for(e=i[0],o=0;o<i.length-1;o++)s=se(this,n[a+o],t,o),s===ee&&(s=this._$committedValue[o]),r||=!N(s)||s!==this._$committedValue[o],s===te?e=te:e!==te&&(e+=(s??"")+i[o+1]),this._$committedValue[o]=s}r&&!n&&this._commitValue(e)}_commitValue(e){e===te?x(this.element).removeAttribute(this.name):(void 0===this._sanitizer&&(this._sanitizer=ie(this.element,this.name,"attribute")),e=this._sanitizer(e??""),$&&$({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),x(this.element).setAttribute(this.name,e??""))}}class ce extends _e{constructor(){super(...arguments),this.type=3}_commitValue(e){void 0===this._sanitizer&&(this._sanitizer=ie(this.element,this.name,"property")),e=this._sanitizer(e),$&&$({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===te?void 0:e}}class he extends _e{constructor(){super(...arguments),this.type=4}_commitValue(e){$&&$({kind:"commit boolean attribute",element:this.element,name:this.name,value:!(!e||e===te),options:this.options}),x(this.element).toggleAttribute(this.name,!!e&&e!==te)}}class ue extends _e{constructor(e,t,a,n,i){if(super(e,t,a,n,i),this.type=5,void 0!==this.strings)throw new Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){if((e=se(this,e,t,0)??te)===ee)return;const a=this._$committedValue,n=e===te&&a!==te||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,i=e!==te&&(a===te||n);$&&$({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:n,addListener:i,oldListener:a}),n&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,e),this._$committedValue=e}handleEvent(e){"function"==typeof this._$committedValue?this._$committedValue.call(this.options?.host??this.element,e):this._$committedValue.handleEvent(e)}}class me{constructor(e,t,a){this.element=e,this.type=6,this._$disconnectableChildren=void 0,this._$parent=t,this.options=a}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){$&&$({kind:"commit to element binding",element:this.element,value:e,options:this.options}),se(this,e)}}const ge={_ChildPart:de},pe=T.litHtmlPolyfillSupportDevMode;pe?.(oe,de),(T.litHtmlVersions??=[]).push("3.2.1"),T.litHtmlVersions.length>1&&D("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");const fe=(e,t,a)=>{if(null==t)throw new TypeError(`The container to render into may not be ${t}`);const n=S++,i=a?.renderBefore??t;let r=i._$litPart$;if($&&$({kind:"begin render",id:n,value:e,container:t,options:a,part:r}),void 0===r){const e=a?.renderBefore??null;i._$litPart$=r=new de(t.insertBefore(I(),e),e,void 0,a??{})}return r._$setValue(e),$&&$({kind:"end render",id:n,value:e,container:t,options:a,part:r}),r};fe.setSanitizer=E,fe.createSanitizer=H,fe._testOnlyClearSanitizerFactoryDoNotCallOrElse=C;let ye;{const e=globalThis.litIssuedWarnings??=new Set;ye=(t,a)=>{a+=` See https://lit.dev/msg/${t} for more information.`,e.has(a)||(console.warn(a),e.add(a))}}class ve extends M{constructor(){super(...arguments),this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.__childPart=fe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return ee}}var we;ve._$litElement$=!0,ve[(we="finalized",we)]=!0,globalThis.litElementHydrateSupport?.({LitElement:ve});const ke=globalThis.litElementPolyfillSupportDevMode;ke?.({LitElement:ve}),(globalThis.litElementVersions??=[]).push("4.1.1"),globalThis.litElementVersions.length>1&&ye("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let be;{const e=globalThis.litIssuedWarnings??=new Set;be=(t,a)=>{a+=` See https://lit.dev/msg/${t} for more information.`,e.has(a)||(console.warn(a),e.add(a))}}const Me={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:k},Te=(e=Me,t,a)=>{const{kind:n,metadata:i}=a;null==i&&be("missing-class-metadata",`The class ${t} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(a.name,e),"accessor"===n){const{name:n}=a;return{set(a){const i=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this._$changeProperty(n,void 0,e),t}}}if("setter"===n){const{name:n}=a;return function(a){const i=this[n];t.call(this,a),this.requestUpdate(n,i,e)}}throw new Error(`Unsupported decorator location: ${n}`)};function $e(e){return(t,a)=>"object"==typeof a?Te(e,t,a):((e,t,a)=>{const n=t.hasOwnProperty(a);return t.constructor.createProperty(a,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */globalThis.litIssuedWarnings??=new Set;const De="3.1.0",Se=30,xe=5,Ye="cache_data_",ze=0,Le="📅 Calendar Card Pro",je=500,Ee=200,Ce=300,He=3e5,Fe={WEEK:1,MONTH:1.5},Ve=.2,Oe={TOUCH_SIZE:100,POINTER_SIZE:50},Ae=["Germany","Deutschland","United States","USA","United States of America","United Kingdom","Great Britain","France","Italy","Italia","Spain","España","Netherlands","Nederland","Austria","Österreich","Switzerland","Schweiz"];var Pe=Object.defineProperty,Ie=Object.defineProperties,Ne=Object.getOwnPropertyDescriptors,We=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,Re=(e,t,a)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Ke=(e,t)=>{for(var a in t||(t={}))Ue.call(t,a)&&Re(e,a,t[a]);if(We)for(var a of We(t))Be.call(t,a)&&Re(e,a,t[a]);return e},Je=(e,t)=>Ie(e,Ne(t));let Ze=!1,qe=ze;const Ge={title:["background: #424242","color: white","display: inline-block","line-height: 20px","text-align: center","border-radius: 20px 0 0 20px","font-size: 12px","font-weight: bold","padding: 4px 8px 4px 12px","margin: 5px 0"].join(";"),version:["background: #4fc3f7","color: white","display: inline-block","line-height: 20px","text-align: center","border-radius: 0 20px 20px 0","font-size: 12px","font-weight: bold","padding: 4px 12px 4px 8px","margin: 5px 0"].join(";"),prefix:["color: #4fc3f7","font-weight: bold"].join(";"),error:["color: #f44336","font-weight: bold"].join(";"),warn:["color: #ff9800","font-weight: bold"].join(";")};function Qe(e){!function(e){if(Ze)return;console.groupCollapsed(`%c${Le}%cv${e} `,Ge.title,Ge.version),console.log("%c Description: %c A calendar card that supports multiple calendars with individual styling. ","font-weight: bold","font-weight: normal"),console.log("%c GitHub: %c https://github.com/alexpfau/calendar-card-pro ","font-weight: bold","font-weight: normal"),console.groupEnd(),Ze=!0}(e)}function Xe(e,t,...a){const n=function(e){if(null==e)return;if("string"==typeof e)return e;if("object"==typeof e)try{return Ke({},e)}catch(t){try{return{value:JSON.stringify(e)}}catch(t){return{value:String(e)}}}return String(e)}(t);if(e instanceof Error){const t=e.message||"Unknown error",i="string"==typeof n?` during ${n}`:"",[r,o]=it(`Error${i}: ${t}`,Ge.error);console.error(r,o),e.stack&&console.error(e.stack),n&&"object"==typeof n&&console.error("Context:",Je(Ke({},n),{timestamp:(new Date).toISOString()})),a.length>0&&console.error("Additional data:",...a)}else if("string"==typeof e){const t="string"==typeof n?` during ${n}`:"",[i,r]=it(`${e}${t}`,Ge.error);n&&"object"==typeof n?console.error(i,r,Ke({context:Je(Ke({},n),{timestamp:(new Date).toISOString()})},a.length>0?{additionalData:a}:{})):a.length>0?console.error(i,r,...a):console.error(i,r)}else{const t="string"==typeof n?` during ${n}`:"",[i,r]=it(`Unknown error${t}:`,Ge.error);console.error(i,r,e),n&&"object"==typeof n&&console.error("Context:",Je(Ke({},n),{timestamp:(new Date).toISOString()})),a.length>0&&console.error("Additional data:",...a)}}function et(e,...t){nt(1,e,Ge.warn,console.warn,...t)}function tt(e,...t){nt(2,e,Ge.prefix,console.log,...t)}function at(e,...t){nt(3,e,Ge.prefix,console.log,...t)}function nt(e,t,a,n,...i){if(qe<e)return;const[r,o]=it(t,a);i.length>0?n(r,o,...i):n(r,o)}function it(e,t){return[`%c[${Le}] ${e}`,t]}const rt={entities:[],start_date:void 0,days_to_show:3,compact_days_to_show:void 0,compact_events_to_show:void 0,compact_events_complete_days:!1,show_empty_days:!1,filter_duplicates:!1,split_multiday_events:!1,language:void 0,title:void 0,title_font_size:void 0,title_color:void 0,background_color:"var(--ha-card-background)",accent_color:"#03a9f4",vertical_line_width:"2px",day_spacing:"10px",event_spacing:"4px",additional_card_spacing:"0px",height:"auto",max_height:"none",first_day_of_week:"system",show_week_numbers:null,show_current_week_number:!0,week_number_font_size:"12px",week_number_color:"var(--primary-text-color)",week_number_background_color:"#03a9f450",day_separator_width:"0px",day_separator_color:"var(--secondary-text-color)",week_separator_width:"0px",week_separator_color:"#03a9f450",month_separator_width:"0px",month_separator_color:"var(--primary-text-color)",today_indicator:!1,today_indicator_position:"15% 50%",today_indicator_color:"#03a9f4",today_indicator_size:"6px",date_vertical_alignment:"middle",weekday_font_size:"14px",weekday_color:"var(--primary-text-color)",day_font_size:"26px",day_color:"var(--primary-text-color)",show_month:!0,month_font_size:"12px",month_color:"var(--primary-text-color)",weekend_weekday_color:void 0,weekend_day_color:void 0,weekend_month_color:void 0,today_weekday_color:void 0,today_day_color:void 0,today_month_color:void 0,event_background_opacity:0,show_past_events:!1,show_countdown:!1,show_progress_bar:!1,progress_bar_color:"var(--secondary-text-color)",progress_bar_height:"calc(var(--calendar-card-font-size-time) * 0.75)",progress_bar_width:"60px",event_font_size:"14px",event_color:"var(--primary-text-color)",empty_day_color:"var(--primary-text-color)",show_time:!0,show_single_allday_time:!0,time_24h:"system",show_end_time:!0,time_font_size:"12px",time_color:"var(--secondary-text-color)",time_icon_size:"14px",show_location:!0,remove_location_country:!1,location_font_size:"12px",location_color:"var(--secondary-text-color)",location_icon_size:"14px",weather:{entity:void 0,position:"date",date:{show_conditions:!0,show_high_temp:!0,show_low_temp:!1,icon_size:"14px",font_size:"12px",color:"var(--primary-text-color)"},event:{show_conditions:!0,show_temp:!0,icon_size:"14px",font_size:"12px",color:"var(--primary-text-color)"}},tap_action:{action:"none"},hold_action:{action:"none"},refresh_interval:Se,refresh_on_navigate:!0};function ot(e){const t=function(e){if(!e||"object"!=typeof e)return null;if("states"in e&&"object"==typeof e.states){const t=Object.keys(e.states).find((e=>e.startsWith("calendar.")));if(t)return t}return Object.keys(e).find((e=>e.startsWith("calendar.")))||null}(e);return{type:"custom:calendar-card-pro",entities:t?[t]:[],days_to_show:3,show_location:!0,_description: ''
  /* ===== CORE CONTAINER STYLES ===== */

  :host {
    display: block;
    height: 100%;
  }

  ha-card {
    /* Layout */
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: hidden;

    /* Box model */
    box-sizing: border-box;
    padding: calc(var(--calendar-card-spacing-additional) + 16px) 16px
      calc(var(--calendar-card-spacing-additional) + 16px) 8px;

    /* Visual */
    background: var(--calendar-card-background-color, var(--card-background-color));
    cursor: pointer;
  }

  /* Focus states */
  ha-card:focus {
    outline: none;
  }

  ha-card:focus-visible {
    outline: 2px solid var(--calendar-card-line-color-vertical);
  }

  /* Structure containers for stable DOM */
  .header-container,
  .content-container {
    width: 100%;
  }

  /* Content container with unified scrolling behavior */
  .content-container {
    max-height: var(--calendar-card-max-height, none);
    height: var(--calendar-card-height, auto);
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: 1px;
    hyphens: auto;

    /* Hide scrollbars across browsers */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
  }

  /* Show scrollbars on hover */
  .content-container:hover {
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: var(--secondary-text-color) transparent; /* Firefox */
    -ms-overflow-style: auto; /* IE/Edge */
  }

  .card-header-placeholder {
    height: 0;
  }

  /* ===== HEADER STYLES ===== */

  .card-header {
    /* Layout */
    float: left;

    /* Spacing */
    margin: 0 0 16px 8px;
    padding: 0;

    /* Typography */
    color: var(--calendar-card-color-title, var(--primary-text-color));
    font-size: var(--calendar-card-font-size-title, var(--paper-font-headline_-_font-size));
    font-weight: var(--paper-font-headline_-_font-weight);
    letter-spacing: var(--paper-font-headline_-_letter-spacing);
    line-height: var(--paper-font-headline_-_line-height);

    /* Additional Typography */
    -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
    text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
    opacity: var(--dark-primary-opacity);
  }

  /* ===== WEEK NUMBER & SEPARATOR STYLES ===== */

  /* Table structure for week number pills and their separator lines
   * Creates consistent alignment with calendar data below */
  /* Margins are applied dynamically in renderWeekRow */
  .week-row-table {
    height: calc(var(--calendar-card-week-number-font-size) * 1.5);
    width: 100%;
    table-layout: fixed;
    padding-left: 8px;
    border-spacing: 0;
    border: none !important;
  }

  /* Make both cells take full height of the row */
  .week-number-cell,
  .separator-cell {
    height: 100%;
  }

  /* Left cell containing the week number pill
   * Sized to match date column width for proper alignment */
  .week-number-cell {
    width: var(--calendar-card-date-column-width);
    position: relative;
    text-align: center;
    vertical-align: middle;
    padding-right: 12px; /* Match date column padding */
  }

  /* Week number pill - positioned absolutely and centered within its cell */
  .week-number {
    width: calc(var(--calendar-card-week-number-font-size) * 2.5);
    height: calc(var(--calendar-card-week-number-font-size) * 1.5);
    display: inline-flex; /* Centering */
    align-items: center;
    justify-content: center;
    font-size: var(--calendar-card-week-number-font-size);
    font-weight: 500;
    color: var(--calendar-card-week-number-color);
    background-color: var(--calendar-card-week-number-bg-color);
    border-radius: 999px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  /* Safari-specific adjustment for iOS vertical alignment issues */
  @supports (-webkit-touch-callout: none) {
    .week-number {
      /* Adjust padding to improve vertical alignment on iOS Safari */
      padding-top: calc(var(--calendar-card-week-number-font-size) * 0.1);
    }
  }

  /* Right cell containing the horizontal separator line
   * Takes up remaining width of the table */
  .separator-cell {
    vertical-align: middle;
  }

  /* The actual separator line */
  .separator-line {
    width: 100%;
    height: var(--separator-border-width, 0);
    background-color: var(--separator-border-color, transparent);
    /* Only show when width > 0px */
    display: var(--separator-display, none);
  }

  /* Day separator - Horizontal line between individual days
   * Used when days aren't at week or month boundaries */
  .separator {
    width: 100%;
    margin-left: 8px;
  }

  /* Week separator (full-width) - Used when show_week_numbers is null
   * Creates a horizontal line at week boundaries without week number pill
   * Margins are applied dynamically in createSeparatorStyle in render.ts */
  .week-separator {
    width: 100%;
    margin-left: 8px;
    border-top-style: solid; /* Ensure line is visible */
  }

  /* Month separator - Used at month boundaries
   * Creates a horizontal line between months, has priority over week separators
   * Margins are applied dynamically in createSeparatorStyle in render.ts */
  .month-separator {
    width: 100%;
    margin-left: 8px;
    border-top-style: solid; /* Ensure line is visible */
  }

  /* ===== DAY TABLE STYLES ===== */

  table {
    /* Layout */
    width: 100%;
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: separate;

    /* Borders & Spacing */
    margin-bottom: var(--calendar-card-day-spacing);
  }

  .day-table {
    /* Override the default table border-bottom for day tables */
    border: none !important;
  }

  table:last-of-type {
    margin-bottom: 0;
    border-bottom: 0;
  }

  /* ===== DATE COLUMN STYLES ===== */

  .date-column {
    /* Layout */
    width: var(--calendar-card-date-column-width);
    min-width: var(--calendar-card-date-column-width);
    max-width: var(--calendar-card-date-column-width);
    vertical-align: var(--calendar-card-date-column-vertical-alignment);
    text-align: center;
    position: relative;

    /* Borders & Spacing */
    padding-left: 8px;
    padding-right: 12px;
  }

  .date-content {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2; /* Ensure date content is above indicator */
  }

  /* Today indicator styling */
  .today-indicator-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  /* Date components */
  .weekday {
    font-size: var(--calendar-card-font-size-weekday);
    line-height: var(--calendar-card-font-size-weekday);
    color: var(--calendar-card-color-weekday);
  }

  .day {
    font-size: var(--calendar-card-font-size-day);
    line-height: var(--calendar-card-font-size-day);
    font-weight: 500;
    color: var(--calendar-card-color-day);
  }

  .month {
    font-size: var(--calendar-card-font-size-month);
    line-height: var(--calendar-card-font-size-month);
    text-transform: uppercase;
    color: var(--calendar-card-color-month);
  }

  /* Today indicator styling */
  .today-indicator-container {
    position: absolute;
    color: var(--calendar-card-today-indicator-color);
    pointer-events: none;
    z-index: 1;
  }

  /* Set proper sizing for icon-based indicators */
  ha-icon.today-indicator {
    --mdc-icon-size: var(--calendar-card-today-indicator-size);
  }

  /* Special styling for image type */
  img.today-indicator.image {
    width: var(--calendar-card-today-indicator-size);
    height: auto;
    max-height: var(--calendar-card-today-indicator-size);
    object-fit: contain;
  }

  /* Special styling for emoji type */
  span.today-indicator.emoji {
    font-size: var(--calendar-card-today-indicator-size);
    line-height: 1;
  }

  /* Animation for pulse indicator */
  ha-icon.today-indicator.pulse {
    animation: pulse-animation 2s infinite ease-in-out;
  }

  /* Special styling for glow effect */
  ha-icon.today-indicator.glow {
    filter: drop-shadow(
      0 0 calc(var(--calendar-card-today-indicator-size) * 0.5)
        var(--calendar-card-today-indicator-color)
    );
  }

  /* Pulse animation keyframes */
  @keyframes pulse-animation {
    0% {
      transform: scale(0.95);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.1);
      opacity: 1;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.7;
    }
  }

  /* Date column weather */
  .date-column .weather {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .weather ha-icon {
    margin-right: 1px;
  }

  .weather-temp-high,
  .weather-temp-low {
    line-height: 1;
    vertical-align: middle;
  }

  .weather-temp-high {
    font-weight: 500;
  }

  .weather-temp-low {
    opacity: 0.8;
  }

  /* ===== EVENT STYLES ===== */

  /* Base event */
  .event {
    padding: var(--calendar-card-event-spacing) 0 var(--calendar-card-event-spacing) 12px;
    border-radius: 0;
  }

  /* Event positioning variations */
  .event-first.event-last {
    border-radius: 0 var(--calendar-card-event-border-radius)
      var(--calendar-card-event-border-radius) 0;
  }

  .event-first {
    border-radius: 0 var(--calendar-card-event-border-radius) 0 0;
  }

  .event-middle {
    /* No additional styles needed */
  }

  .event-last {
    border-radius: 0 0 var(--calendar-card-event-border-radius) 0;
  }

  /* Past event styling */
  .past-event .event-content {
    opacity: 0.6;
  }

  /* Event content */
  .event-content {
    display: flex;
    flex-direction: column;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .summary {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .event-title {
    font-size: var(--calendar-card-font-size-event);
    font-weight: 500;
    line-height: 1.2;
    color: var(--calendar-card-color-event);
    margin-right: 12px;
    padding-bottom: 2px;
  }

  /* Text label styling */
  .calendar-label {
    display: inline;
    margin-right: 4px;
  }

  /* MDI icon label styling */
  .label-icon {
    --mdc-icon-size: var(--calendar-card-font-size-event);
    vertical-align: middle;
    margin-right: 4px;
  }

  /* Image label styling */
  .label-image {
    height: var(--calendar-card-font-size-event);
    width: auto;
    vertical-align: middle;
    margin-right: 4px;
  }

  /* Event weather */
  .event-weather {
    display: flex;
    font-weight: 500;
    margin-left: 8px;
    margin-right: 12px;
  }

  .event-weather ha-icon {
    margin-right: 2px;
  }

  /* ===== TIME & LOCATION STYLES ===== */

  .time-location {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }

  .time,
  .location {
    display: flex;
    align-items: center;
    line-height: 1.2;
    margin-top: 2px;
    margin-right: 12px;
  }

  .time span,
  .location span {
    display: inline-block;
    vertical-align: middle;
  }

  .time {
    font-size: var(--calendar-card-font-size-time);
    color: var(--calendar-card-color-time);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .time-actual {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .time-countdown {
    text-align: right;
    color: var(--calendar-card-color-time);
    font-size: var(--calendar-card-font-size-time);
    margin-left: 8px;
    margin-right: 12px;
    white-space: nowrap;
  }

  .location {
    font-size: var(--calendar-card-font-size-location);
    color: var(--calendar-card-color-location);
  }

  /* ===== PROGRESS BAR STYLES ===== */

  .progress-bar {
    width: var(--calendar-card-progress-bar-width);
    height: var(--calendar-card-progress-bar-height);
    background-color: color-mix(in srgb, var(--calendar-card-progress-bar-color) 20%, transparent);
    border-radius: 999px;
    overflow: hidden;
    margin-left: 8px;
    margin-right: 12px;
  }

  .progress-bar-filled {
    height: 100%;
    background-color: var(--calendar-card-progress-bar-color);
    border-radius: 999px 0 0 999px;
  }

  /* ===== ICON STYLES ===== */

  ha-icon {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: relative;
    vertical-align: top;
    top: 0;
    margin-right: 4px;
  }

  .time ha-icon {
    --mdc-icon-size: var(--calendar-card-icon-size-time, 14px);
  }

  .location ha-icon {
    --mdc-icon-size: var(--calendar-card-icon-size-location, 14px);
  }

  /* ===== STATUS MESSAGES ===== */

  .loading,
  .error {
    text-align: center;
    padding: 16px;
  }

  .error {
    color: var(--error-color);
  }
`;function Yn(e){e.style.opacity="0",e.style.transition=`opacity ${Ce}ms ease-out`,setTimeout((()=>{e.parentNode&&(e.parentNode.removeChild(e),at("Removed hold indicator"))}),Ce)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zn=1,Ln=2,jn=e=>(...t)=>({_$litDirective$:e,values:t});class En{constructor(e){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(e,t,a){this.__part=e,this._$parent=t,this.__attributeIndex=a}_$resolve(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cn=jn(class extends En{constructor(e){if(super(e),e.type!==zn||"class"!==e.name||e.strings?.length>2)throw new Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this._previousClasses){this._previousClasses=new Set,void 0!==e.strings&&(this._staticClasses=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this._staticClasses?.has(e)&&this._previousClasses.add(e);return this.render(t)}const a=e.element.classList;for(const e of this._previousClasses)e in t||(a.remove(e),this._previousClasses.delete(e));for(const e in t){const n=!!t[e];n===this._previousClasses.has(e)||this._staticClasses?.has(e)||(n?(a.add(e),this._previousClasses.add(e)):(a.remove(e),this._previousClasses.delete(e)))}return ee}}),Hn="important",Fn=" !"+Hn;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vn=jn(class extends En{constructor(e){if(super(e),e.type!==zn||"style"!==e.name||e.strings?.length>2)throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,a)=>{const n=e[a];return null==n?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(e,[t]){const{style:a}=e.element;if(void 0===this._previousStyleProperties)return this._previousStyleProperties=new Set(Object.keys(t)),this.render(t);for(const e of this._previousStyleProperties)null==t[e]&&(this._previousStyleProperties.delete(e),e.includes("-")?a.removeProperty(e):a[e]=null);for(const e in t){const n=t[e];if(null!=n){this._previousStyleProperties.add(e);const t="string"==typeof n&&n.endsWith(Fn);e.includes("-")||t?a.setProperty(e,t?n.slice(0,-11):n,t?Hn:""):a[e]=n}}return ee}}),{_ChildPart:On}=ge,An=window.ShadyDOM?.inUse&&!0===window.ShadyDOM?.noPatch?window.ShadyDOM.wrap:e=>e,Pn=()=>document.createComment(""),In=(e,t,a)=>{const n=An(e._$startNode).parentNode,i=void 0===t?e._$endNode:t._$startNode;if(void 0===a){const t=An(n).insertBefore(Pn(),i),r=An(n).insertBefore(Pn(),i);a=new On(t,r,e,e.options)}else{const t=An(a._$endNode).nextSibling,r=a._$parent,o=r!==e;if(o){let t;a._$reparentDisconnectables?.(e),a._$parent=e,void 0!==a._$notifyConnectionChanged&&(t=e._$isConnected)!==r._$isConnected&&a._$notifyConnectionChanged(t)}if(t!==i||o){let e=a._$startNode;for(;e!==t;){const t=An(e).nextSibling;An(n).insertBefore(e,i),e=t}}}return a},Nn=(e,t,a=e)=>(e._$setValue(t,a),e),Wn={},Un=e=>{e._$notifyConnectionChanged?.(!1,!0);let t=e._$startNode;const a=An(e._$endNode).nextSibling;for(;t!==a;){const e=An(t).nextSibling;An(t).remove(),t=e}},Bn=(e,t,a)=>{const n=new Map;for(let i=t;i<=a;i++)n.set(e[i],i);return n};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rn=jn(class extends En{constructor(e){if(super(e),e.type!==Ln)throw new Error("repeat() can only be used in text expressions")}_getValuesAndKeys(e,t,a){let n;void 0===a?a=t:void 0!==t&&(n=t);const i=[],r=[];let o=0;for(const t of e)i[o]=n?n(t,o):o,r[o]=a(t,o),o++;return{values:r,keys:i}}render(e,t,a){return this._getValuesAndKeys(e,t,a).values}update(e,[t,a,n]){const i=e._$committedValue;const{values:r,keys:o}=this._getValuesAndKeys(t,a,n);if(!Array.isArray(i))return this._itemKeys=o,r;const s=this._itemKeys??=[],l=[];let d,_,c=0,h=i.length-1,u=0,m=r.length-1;for(;c<=h&&u<=m;)if(null===i[c])c++;else if(null===i[h])h--;else if(s[c]===o[u])l[u]=Nn(i[c],r[u]),c++,u++;else if(s[h]===o[m])l[m]=Nn(i[h],r[m]),h--,m--;else if(s[c]===o[m])l[m]=Nn(i[c],r[m]),In(e,l[m+1],i[c]),c++,m--;else if(s[h]===o[u])l[u]=Nn(i[h],r[u]),In(e,i[c],i[h]),h--,u++;else if(void 0===d&&(d=Bn(o,u,m),_=Bn(s,c,h)),d.has(s[c]))if(d.has(s[h])){const t=_.get(o[u]),a=void 0!==t?i[t]:null;if(null===a){const t=In(e,i[c]);Nn(t,r[u]),l[u]=t}else l[u]=Nn(a,r[u]),In(e,i[c],a),i[t]=null;u++}else Un(i[h]),h--;else Un(i[c]),c++;for(;u<=m;){const t=In(e,l[m+1]);Nn(t,r[u]),l[u++]=t}for(;c<=h;){const e=i[c++];null!==e&&Un(e)}return this._itemKeys=o,((e,t=Wn)=>{e._$committedValue=t})(e,l),ee}});function Kn(e,t){const a={};return e&&Array.isArray(e)?(e.forEach((e=>{if(!e.datetime)return;let n,i,r;"hourly"===t?(r=new Date(e.datetime),i=r.getHours(),n=`${Ga(r)}_${i}`):(r=new Date(e.datetime),n=Ga(r));const o=function(e,t){const a=void 0!==t&&(t>=18||t<6);if(a&&Zn[e])return Zn[e];return Jn[e]||"mdi:weather-cloudy-alert"}(e.condition,i);a[n]={icon:o,condition:e.condition,temperature:Math.round(e.temperature),templow:void 0!==e.templow?Math.round(e.templow):void 0,datetime:e.datetime,hour:i,precipitation:e.precipitation,precipitation_probability:e.precipitation_probability}})),a):a}const Jn={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:weather-cloudy-alert"},Zn={sunny:"mdi:weather-night",partlycloudy:"mdi:weather-night-partly-cloudy","lightning-rainy":"mdi:weather-lightning"};function qn(e,t){const a=Tt(t);return"loading"===e?Q`
      <div class="calendar-card">
        <div class="loading">${a.loading}</div>
      </div>
    `:Q`
    <div class="calendar-card">
      <div class="error">${a.error}</div>
    </div>
  `}function Gn(e,t,a,n="day"){const i=parseFloat(a.day_spacing);if("day"===n)return{borderTopWidth:e,borderTopColor:t,borderTopStyle:"solid",marginTop:"0px",marginBottom:`${i}px`};let r=Fe.WEEK;"month"===n&&(r=Fe.MONTH);const o=i*r;return{borderTopWidth:e,borderTopColor:t,borderTopStyle:"solid",marginTop:`${o}px`,marginBottom:`${o}px`}}function Qn(e,t,a,n,i=!1,r="day"){if("0px"===e||i)return te;const o=Gn(e,t,n,r);return Q`<div class="${a}" style=${Vn(o)}></div>`}function Xn(e){return Qn(e.month_separator_width,e.month_separator_color,"month-separator",e,!1,"month")}function ei(e,t=!1){return Qn(e.week_separator_width,e.week_separator_color,"week-separator",e,t,"week")}function ti(e,t){if(!e.today_indicator||!t)return te;const a=e.today_indicator,n=function(e){if(void 0===e||!1===e)return"none";if(!0===e)return"dot";if("string"==typeof e)return"pulse"===e||"glow"===e?e:e.startsWith("mdi:")?"mdi":e.startsWith("/")||e.includes(".png")||e.includes(".jpg")||e.includes(".svg")||e.includes(".webp")||e.includes(".gif")?"image":/[\p{Emoji}]/u.test(e)?"emoji":"dot";return"none"}(a);if("none"===n)return te;const i=function(e){const t={position:"absolute",transform:"translate(-50%, -50%)"},a=e.trim().split(/\s+/);return a.length>=1&&(t.left=a[0]),a.length>=2?t.top=a[1]:t.top="50%",t}(e.today_indicator_position);return Q`
    <div class="today-indicator-container">
      ${function(e,t,a){let n="";switch(e){case"dot":case"pulse":case"glow":n="mdi:circle";break;case"mdi":n="string"==typeof t?t:"mdi:circle";break;case"image":return"string"==typeof t?Q`
          <img 
            src="${t}" 
            class="today-indicator image"
            style=${Vn(a)}
            alt="Today">
          </img>`:te;case"emoji":return"string"==typeof t?Q` <span class="today-indicator emoji" style=${Vn(a)}>
          ${t}
        </span>`:te;default:return te}if(n)return Q` <ha-icon
      icon="${n}"
      class="today-indicator ${e}"
      style=${Vn(a)}
    >
    </ha-icon>`;return te}(n,a,i)}
    </div>
  `}function ai(e,t,a,n,i){var r,o,s,l;const d=0===e.getDay()||6===e.getDay();let _=t.weekday_color,c=t.day_color,h=t.month_color;d&&(_=t.weekend_weekday_color||_,c=t.weekend_day_color||c,h=t.weekend_month_color||h),n&&(_=t.today_weekday_color||_,c=t.today_day_color||c,h=t.today_month_color||h);const u=Tt(a),m=u.daysOfWeek[e.getDay()],g=e.getDate(),p=u.months[e.getMonth()],f=("date"===(null==(r=t.weather)?void 0:r.position)||"both"===(null==(o=t.weather)?void 0:o.position))&&(null==(s=t.weather)?void 0:s.entity);let y=te;if(f&&(null==i?void 0:i.daily)){const a=function(e,t){if(!t)return;return t[Ga(e)]}(e,i.daily);if(a){const e=(null==(l=t.weather)?void 0:l.date)||{},n=!1!==e.show_conditions,i=!1!==e.show_high_temp,r=!0===e.show_low_temp&&void 0!==a.templow,o=e.icon_size||"14px",s=e.font_size||"12px",d=e.color||"var(--primary-text-color)";y=Q`
        <div class="weather" style="font-size: ${s}; color: ${d};">
          ${n?Q`
                <ha-icon
                  .icon=${a.icon}
                  style="--mdc-icon-size: ${o};"
                ></ha-icon>
              `:te}
          ${i?Q` <span class="weather-temp-high">${a.temperature}°</span> `:te}
          ${r?Q` <span class="weather-temp-low">/${a.templow}°</span> `:te}
        </div>
      `}}return Q`
    <div
      class="weekday"
      style=${Vn({"font-size":t.weekday_font_size,color:_})}
    >
      ${m}
    </div>
    <div
      class="day"
      style=${Vn({"font-size":t.day_font_size,color:c})}
    >
      ${g}
    </div>
    ${t.show_month?Q`
          <div
            class="month"
            style=${Vn({"font-size":t.month_font_size,color:h})}
          >
            ${p}
          </div>
        `:te}
    ${y}
  `}function ni(e,t,a,n,i,r,o){const s=new Date,l=new Date(s.getFullYear(),s.getMonth(),s.getDate()),d=new Date(e.timestamp).toDateString(),_=d===l.toDateString(),c=new Date(l);c.setDate(c.getDate()+1);const h=d===c.toDateString();let u=te;const m=(null==i?void 0:i.isNewMonth)||!1,g=(null==i?void 0:i.isNewWeek)||!1,p=m&&"0px"!==t.month_separator_width,f=g&&(null!==t.show_week_numbers||"0px"!==t.week_separator_width),y=t.day_separator_width,v=t.day_separator_color;if(n&&"0px"!==y&&!p&&!f){const e=Gn(y,v,t,"day");u=Q`<div class="separator" style=${Vn(e)}></div>`}return Q`
    ${u}
    <table
      class=${Cn({"day-table":!0,today:_,tomorrow:h,"future-day":!_})}
    >
      ${Rn(e.events,((e,t)=>`${e._entityId}-${e.summary}-${t}`),((n,i)=>function(e,t,a,n,i,r,o,s){var l,d;const _=Boolean(e._isEmptyDay),c=new Date(t.timestamp),h=function(e){const t=e.getDay();return 0===t||6===t}(c),u=new Date,m=new Date(u.getFullYear(),u.getMonth(),u.getDate()),g=new Date(m);g.setDate(g.getDate()+1);let p=!1;if(!_){if(!e.start.dateTime){let t=e.end.date?qa(e.end.date):null;if(t){const e=new Date(t);e.setDate(e.getDate()-1),t=e}p=null!==t&&m>t}else{const t=e.end.dateTime?new Date(e.end.dateTime):null;p=null!==t&&u>t}}const f=yn(e._entityId,n,void 0,e),y=n.event_background_opacity>0?n.event_background_opacity:0,v=y>0?yn(e._entityId,n,y,e):"",w=null!=(l=wn(e._entityId,"show_time",n,e))?l:n.show_time,k=null!=(d=wn(e._entityId,"show_location",n,e))?d:n.show_location,b=!e.start.dateTime,M=b&&e.time&&(e.time.includes(Tt(i).multiDay)||e.time.includes(Tt(i).endsTomorrow)||e.time.includes(Tt(i).endsToday)),T=w&&!(b&&!M&&!n.show_single_allday_time)&&!_;let $=null;!n.show_countdown||_||p||($=Ka(e,i));const D=kn(e),S=D&&n.show_progress_bar?function(e){if(!kn(e))return null;const t=new Date,a=new Date(e.start.dateTime),n=new Date(e.end.dateTime).getTime()-a.getTime(),i=t.getTime()-a.getTime();return Math.min(100,Math.max(0,Math.floor(i/n*100)))}(e):null,x=Ra(e,n,i,s),Y=e.location&&k?Ja(e.location,n.remove_location_country):"",z=0===a,L=a===t.events.length-1,j={event:!0,"event-first":z,"event-middle":!z&&!L,"event-last":L,"past-event":p};return Q`
    <tr>
      ${0===a?Q`
            <td
              class="date-column ${h?"weekend":""}"
              rowspan="${t.events.length}"
              style="position: relative;"
            >
              ${ai(c,n,i,r,o)}
              ${ti(n,r)}
            </td>
          `:""}
      <td
        class=${Cn(j)}
        style="border-left: var(--calendar-card-line-width-vertical) solid ${f}; background-color: ${v};"
      >
        <div class="event-content">
          ${function(e,t,a){var n;const i=!!e._isEmptyDay,r=i?"var(--calendar-card-empty-day-color)":(null==(n=e._matchedConfig)?void 0:n.color)||t.event_color;return Q`
    <div class="summary-row">
      <div class="summary">
        ${vn(e._entityId,t,e)?(o=vn(e._entityId,t,e),o?o.startsWith("mdi:")?Q`<ha-icon icon="${o}" class="label-icon"> </ha-icon>`:o.startsWith("/local/")||/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(o)?Q`<img src="${o}" class="label-image"> </img>`:Q`<span class="calendar-label">${o}</span>`:te):""}
        <span
          class="event-title ${i?"empty-day-title":""}"
          style="color: ${r}"
        >
          ${i?`✓ ${e.summary}`:e.summary}
        </span>
      </div>
      ${function(e,t,a){var n,i,r;const o=(null==(n=t.weather)?void 0:n.entity)&&("event"===t.weather.position||"both"===t.weather.position);if(!o||!(null==a?void 0:a.hourly))return Q``;if(null==(i=e.end)?void 0:i.dateTime){const t=new Date;if(new Date(e.end.dateTime)<t)return Q``}const s=function(e,t,a){if(e.start.date&&!e.start.dateTime&&a)return a[Ga(qa(e.start.date))];if(!e.start.dateTime||!t)return;const n=new Date(e.start.dateTime),i=Ga(n),r=n.getHours(),o=t[`${i}_${r}`];if(o)return o;let s=-1,l=24;return Object.keys(t).forEach((e=>{if(e.startsWith(i)){const t=e.split("_")[1],a=parseInt(t);if(!isNaN(a)){const e=Math.abs(a-r);e<l&&(l=e,s=a)}}})),s>=0?t[`${i}_${s}`]:void 0}(e,a.hourly,a.daily);if(!s)return Q``;const l=(null==(r=t.weather)?void 0:r.event)||{},d=!1!==l.show_conditions,_=!1!==l.show_temp,c=l.icon_size||"14px",h=l.font_size||"12px",u=l.color||"var(--secondary-text-color)";return Q`
    <div class="event-weather">
      ${d?Q`<ha-icon .icon=${s.icon} style="--mdc-icon-size: ${c};"></ha-icon>`:te}
      ${_?Q`<span style="font-size: ${h}; color: ${u};">
            ${s.temperature}°
          </span>`:te}
    </div>
  `}(e,t,a)}
    </div>
  `;var o}(e,n,o)}
          <div class="time-location">
            ${T?Q`
                  <div class="time">
                    <div class="time-actual">
                      <ha-icon icon="mdi:clock-outline"></ha-icon>
                      <span>${x}</span>
                    </div>
                    ${$?Q`<div class="time-countdown">${$}</div>`:null!==S&&n.show_progress_bar?Q`
                            <div class="progress-bar">
                              <div
                                class="progress-bar-filled"
                                style="width: ${S}%"
                              ></div>
                            </div>
                          `:te}
                  </div>
                `:$?Q`
                    <div class="time">
                      <div class="time-actual"></div>
                      <div class="time-countdown">${$}</div>
                    </div>
                  `:null!==S&&n.show_progress_bar?Q`
                      <div class="time">
                        <div class="time-actual"></div>
                        <div class="progress-bar">
                          <div
                            class="progress-bar-filled"
                            style="width: ${S}%"
                          ></div>
                        </div>
                      </div>
                    `:te}
            ${Y?Q`
                  <div class="location">
                    <ha-icon icon="mdi:map-marker"></ha-icon>
                    <span>${Y}</span>
                  </div>
                `:""}
          </div>
        </div>
      </td>
    </tr>
  `}(n,e,i,t,a,_,r,o)))}
    </table>
  `}function ii(e,t,a,n,i){return Q`
    ${e.map(((r,o)=>{var s;const l=o>0?e[o-1]:void 0,d=null!=(s=r.weekNumber)?s:null;let _=!1;if(l){_=r.weekNumber!==l.weekNumber}else _=!0;const c=l&&r.monthNumber!==l.monthNumber,h=0===o,u={isNewWeek:_,isNewMonth:Boolean(c)};let m=te;return!c||"0px"===t.month_separator_width||_&&null!==t.show_week_numbers?_&&(m=h&&null!==t.show_week_numbers&&!t.show_current_week_number?c?Xn(t):ei(t,h):null!==t.show_week_numbers?function(e,t,a,n=!1){if(null===e)return te;const i=parseFloat(a.day_spacing),r=i*(t?Fe.MONTH:Fe.WEEK)/2,o={marginTop:(n?0:r-i)+"px",marginBottom:`${r}px`},s={};return n?s["--separator-display"]="none":t&&"0px"!==a.month_separator_width?(s["--separator-border-width"]=a.month_separator_width,s["--separator-border-color"]=a.month_separator_color,s["--separator-display"]="block"):"0px"!==a.week_separator_width?(s["--separator-border-width"]=a.week_separator_width,s["--separator-border-color"]=a.week_separator_color,s["--separator-display"]="block"):s["--separator-display"]="none",Q`
    <table class="week-row-table" style=${Vn(o)}>
      <tr>
        <td class="week-number-cell">
          <div class="week-number">${e}</div>
        </td>
        <td class="separator-cell" style=${Vn(s)}>
          <div class="separator-line"></div>
        </td>
      </tr>
    </table>
  `}(d,Boolean(c),t,h):ei(t,h)):m=Xn(t),Q`
        ${m}
        ${ni(r,t,a,l,u,n,i)}
      `}))}
  `}var ri=r`
  ha-textfield,
  ha-select,
  ha-formfield,
  ha-entity-picker,
  ha-icon-picker {
    display: block;
    margin: 8px 0;
  }

  .card-config {
    display: flex;
    flex-direction: column;
    padding: 4px 0;
  }

  .helper-text {
    color: var(--secondary-text-color);
    font-size: 10px;
    line-height: 1.1;
    margin-top: -4px;
    margin-bottom: 8px;
  }

  h3 {
    margin: 24px 0 6px 0;
    font-size: 14px;
  }

  h3:first-of-type {
    margin-top: 8px;
  }

  h4 {
    margin: 24px 0 6px 0;
  }

  h5 {
    margin: 2px 0 0 0;
  }

  .panel-content {
    padding: 8px 0 12px 0;
  }

  .action-config {
    display: flex;
    flex-direction: column;
  }

  ha-expansion-panel {
    margin: 8px 0;
  }

  ha-button {
    margin: 8px 0;
  }

  .indicator-field {
    display: flex;
    flex-direction: column;
    margin: 8px 0;
  }

  ha-formfield {
    display: flex;
    align-items: center;
    padding: 8px 0;
  }

  .date-input {
    position: relative;
    margin-bottom: 16px;
    width: 100%;
  }

  .date-input .mdc-text-field {
    width: 100%;
    height: 56px;
    border-radius: 4px 4px 0 0;
    padding: 0;
    background-color: var(
      --mdc-text-field-fill-color,
      var(--input-fill-color, rgba(var(--rgb-primary-text-color), 0.06))
    );
    border-bottom: 1px solid var(--mdc-text-field-idle-line-color, var(--secondary-text-color));
    transition:
      background-color 15ms linear,
      border-bottom-color 15ms linear;
    box-sizing: border-box;
    position: relative;
    overflow: hidden; /* Important for containing the ripple */
  }

  .date-input .mdc-text-field__ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0; /* Hidden by default */
    background-color: var(--mdc-ripple-color, var(--primary-text-color));
    transition:
      opacity 15ms linear,
      background-color 15ms linear;
    z-index: 1;
  }

  .date-input .mdc-floating-label {
    position: absolute;
    top: 8px;
    left: 4px;
    -webkit-font-smoothing: antialiased;
    font-family: var(
      --mdc-typography-subtitle1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    transform: scale(0.75);
    color: var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6));
    pointer-events: none;
    transition: color 15ms linear;
    z-index: 2;
  }

  .date-input .value-container {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 8px 16px 8px;
    position: relative;
    z-index: 2;
  }

  .date-input .value-text {
    -webkit-font-smoothing: antialiased;
    font-family: var(
      --mdc-typography-subtitle1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    color: var(--primary-text-color);
  }

  .date-input input[type='date'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }

  /* Handle focus and hover states with JavaScript toggling classes */
  .date-input .mdc-text-field.focused {
    border-bottom: 2px solid var(--primary-color);
  }

  .date-input .mdc-text-field.focused .mdc-floating-label {
    color: var(--primary-color);
  }
`,oi=Object.defineProperty,si=Object.getOwnPropertySymbols,li=Object.prototype.hasOwnProperty,di=Object.prototype.propertyIsEnumerable,_i=(e,t,a)=>t in e?oi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ci=(e,t)=>{for(var a in t||(t={}))li.call(t,a)&&_i(e,a,t[a]);if(si)for(var a of si(t))di.call(t,a)&&_i(e,a,t[a]);return e},hi=(e,t,a,n)=>{for(var i,r=void 0,o=e.length-1;o>=0;o--)(i=e[o])&&(r=i(t,a,r)||r);return r&&oi(t,a,r),r};const ui={max_events_to_show:"compact_events_to_show",vertical_line_color:"accent_color",horizontal_line_width:"day_separator_width",horizontal_line_color:"day_separator_color"},mi={max_events_to_show:"compact_events_to_show"};class gi extends ve{static get styles(){return ri}connectedCallback(){super.connectedCallback(),this._loadCustomElements()}async _loadCustomElements(){if(!customElements.get("ha-entity-picker"))try{const e=customElements.get("hui-entities-card");e&&"function"==typeof e.getConfigElement?await e.getConfigElement():console.warn("Could not load ha-entity-picker: getConfigElement not available")}catch(e){console.warn("Could not load ha-entity-picker",e)}}setConfig(e){this._config=ci(ci({},rt),e)}getConfigValue(e,t){var a;if(!this._config)return t;if(!e.includes(".")){let n=null!=(a=this._config[e])?a:t;if("time_24h"===e){if(!0===n)return"true";if(!1===n)return"false"}return n}const n=e.split(".");let i=this._config;for(const e of n){if(null==i)return t;if(/^\d+$/.test(e)){const a=parseInt(e,10);if(Array.isArray(i)&&a>=0&&a<i.length){i=i[a];continue}return t}if("object"!=typeof i||null===i||!(e in i))return t;i=i[e]}return null!=i?i:t}setConfigValue(e,t){if(!this._config)return;"time_24h"===e&&("true"===t?t=!0:"false"===t&&(t=!1));const a=JSON.parse(JSON.stringify(this._config));if(!e.includes("."))return void 0===t?delete a[e]:a[e]=t,void this._fireConfigChanged(a);const n=e.split("."),i=n.pop();let r=a;for(const e of n)if(/^\d+$/.test(e)){const t=parseInt(e,10);for(Array.isArray(r)||(r=[]);r.length<=t;)r.push({});r[t]&&"object"==typeof r[t]||(r[t]={}),r=r[t]}else Object.prototype.hasOwnProperty.call(r,e)&&"object"==typeof r[e]||(r[e]={}),r=r[e];void 0===t?delete r[i]:r[i]=t,this._fireConfigChanged(a)}_fireConfigChanged(e){const t=zt(e,rt);this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t}}))}_findDeprecatedParams(e){return Object.keys(ui).filter((t=>t in e))}_findDeprecatedEntityParams(e){const t=[];return e.forEach(((e,a)=>{"object"==typeof e&&null!==e&&Object.keys(mi).forEach((n=>{n in e&&t.push({index:a,param:n})}))})),t}_upgradeConfig(){const e=ci({},this._config);let t=!1;for(const[a,n]of Object.entries(ui))a in e&&(e[n]=e[a],delete e[a],t=!0);Array.isArray(e.entities)&&(e.entities=e.entities.map((e=>{if("object"==typeof e&&null!==e){const a=ci({},e);for(const[e,n]of Object.entries(mi))e in a&&(a[n]=a[e],delete a[e],t=!0);return a}return e}))),t&&this._fireConfigChanged(e)}_getTranslation(e){var t,a,n;const i=(null==(t=this._config)?void 0:t.language)||(null==(n=null==(a=this.hass)?void 0:a.locale)?void 0:n.language)||"en",r=e.includes(".")?e:`editor.${e}`;return function(e,t,a){const n=Tt(e);if("string"==typeof t&&t.includes(".")){const[e,i]=t.split(".");if("editor"===e&&n.editor&&i in n.editor){const e=n.editor[i];if("string"==typeof e||Array.isArray(e))return e}return void 0!==a?a:i}if(t in n){const e=n[t];if("string"==typeof e||Array.isArray(e))return e}return void 0!==a?a:t}(r.startsWith("editor.")&&!function(e){const t=Tt(e);return Boolean((null==t?void 0:t.editor)&&Object.keys(t.editor).length>0)}(i)?"en":i,r,e)}_valueChanged(e){if(!e.target)return;e.stopPropagation();const t=e.target,a=t.getAttribute("name");let n=t.value;if(a)if("language_mode"!==a){if("height_mode"===a){const e=t.value,a=this.getConfigValue("height"),n=this.getConfigValue("max_height");return this.setConfigValue("height",void 0),this.setConfigValue("max_height",void 0),void("fixed"===e?this.setConfigValue("height",a&&"auto"!==a?a:"300px"):"maximum"===e&&this.setConfigValue("max_height",n&&"none"!==n?n:"300px"))}if("start_date_mode"!==a)return"start_date_fixed"===a||"start_date_offset"===a?(this.setConfigValue("start_date",t.value),void this.requestUpdate()):void("remove_location_country_selector"!==a&&("show_week_numbers"===a&&"null"===n&&(n=null),"HA-SWITCH"===t.tagName&&(n=t.checked),"number"===t.getAttribute("type")&&""!==n&&(n=parseFloat(n)),this.setConfigValue(a,n)));this._handleStartDateModeChange(t.value)}else{const e=t.value;"system"===e?this.setConfigValue("language",void 0):"custom"===e&&(this.getConfigValue("language")||this.setConfigValue("language","en"))}}_serviceDataChanged(e){if(!e.target)return;const t=e.target,a=t.getAttribute("name");if(!a)return;let n=t.value;try{n=n?JSON.parse(n):{},this.setConfigValue(a,n)}catch(e){}}_getStartDateMode(){const e=this.getConfigValue("start_date",""),t=null!=e?String(e):"";return t&&""!==t?/^\d{4}-\d{2}-\d{2}$/.test(t)?"fixed":/^[+-]?\d+$/.test(t)?"offset":"fixed":"default"}_getStartDateValue(e){const t=this.getConfigValue("start_date",""),a=null!=t?String(t):"";return"fixed"===e&&/^\d{4}-\d{2}-\d{2}$/.test(a)||"offset"===e&&/^[+-]?\d+$/.test(a)?a:""}_handleStartDateModeChange(e){if("default"===e)this.setConfigValue("start_date",void 0);else if("fixed"===e){const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");this.setConfigValue("start_date",`${t}-${a}-${n}`)}else"offset"===e&&this.setConfigValue("start_date","+0")}render(){var e,t;if(!this.hass||!this._config)return Q``;const a=this._findDeprecatedParams(this._config),n=this._findDeprecatedEntityParams(null!=(t=null==(e=this._config)?void 0:e.entities)?t:[]),i=a.length>0||n.length>0?Q`
          <div style="border-radius: 8px; overflow: hidden;">
            <ha-alert alert-type="warning">
              <div style="height: 6px"></div>
              <b>${this._getTranslation("editor.deprecated_config_detected")}</b><br />
              ${this._getTranslation("editor.deprecated_config_explanation")}<br />
              <span style="color: var(--warning-color); font-size: 0.95em;">
                ${this._getTranslation("editor.deprecated_config_update_hint")}
              </span>
              <div style="text-align:center;">
                <ha-button @click="${()=>this._upgradeConfig()}">
                  <ha-icon icon="mdi:autorenew"></ha-icon>
                  ${this._getTranslation("editor.update_config")}
                </ha-button>
              </div>
            </ha-alert>
          </div>
        `:null;return Q`
      ${i}
      <div class="card-config">
        <!-- CALENDAR ENTITIES -->
        ${this.addExpansionPanel(this._getTranslation("calendar_entities"),"M21,17V8H7V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H7C5.89,19 5,18.1 5,17V5A2,2 0 0,1 7,3H8V1H10V3H18V1H20V3H21M3,21H17V23H3C1.89,23 1,22.1 1,21V9H3V21M19,15H15V11H19V15Z",Q` ${this._renderCalendarEntities()} `,!0)}

        <!-- CORE SETTINGS -->
        ${this.addExpansionPanel(this._getTranslation("core_settings"),"M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z",Q`
            <!-- Display Range -->
            <h3>${this._getTranslation("time_range")}</h3>
            <div class="helper-text">${this._getTranslation("time_range_note")}</div>
            ${this.addTextField("days_to_show",this._getTranslation("days_to_show"),"number")}
            <div class="helper-text">${this._getTranslation("days_to_show_note")}</div>
            ${this.addSelectField("start_date_mode",this._getTranslation("start_date_mode"),[{value:"default",label:this._getTranslation("start_date_mode_default")},{value:"fixed",label:this._getTranslation("start_date_mode_fixed")},{value:"offset",label:this._getTranslation("start_date_mode_offset")}],!1,String(this._getStartDateMode()),(e=>{this._handleStartDateModeChange(e),this.requestUpdate()}))}
            ${(()=>{const e=this._getStartDateMode();return"fixed"===e?this.addDateField("start_date_fixed",this._getTranslation("start_date_fixed"),this._getStartDateValue("fixed")):"offset"===e?Q`
                  ${this.addTextField("start_date_offset",this._getTranslation("start_date_offset"),"text",this._getStartDateValue("offset"))}
                  <div class="helper-text">${this._getTranslation("start_date_offset_note")}</div>
                `:Q``})()}

            <!-- Compact Mode -->
            <h3>${this._getTranslation("compact_mode")}</h3>
            <div class="helper-text">${this._getTranslation("compact_mode_note")}</div>
            ${this.addTextField("compact_days_to_show",this._getTranslation("compact_days_to_show"),"number")}
            ${this.addTextField("compact_events_to_show",this._getTranslation("compact_events_to_show"),"number")}
            ${this.addBooleanField("compact_events_complete_days",this._getTranslation("compact_events_complete_days"))}
            <div class="helper-text">
              ${this._getTranslation("compact_events_complete_days_note")}
            </div>

            <!-- Event Visibility -->
            <h3>${this._getTranslation("event_visibility")}</h3>
            ${this.addBooleanField("show_past_events",this._getTranslation("show_past_events"))}
            ${this.addBooleanField("show_empty_days",this._getTranslation("show_empty_days"))}
            ${this.addBooleanField("filter_duplicates",this._getTranslation("filter_duplicates"))}

            <!-- Language & Time Formats -->
            <h3>${this._getTranslation("language_time_formats")}</h3>
            ${this.addSelectField("language_mode",this._getTranslation("language_mode"),[{value:"system",label:this._getTranslation("system")},{value:"custom",label:this._getTranslation("custom")}],!1,void 0!==this.getConfigValue("language")?"custom":"system")}
            ${(()=>void 0!==this.getConfigValue("language")?Q`
                    ${this.addTextField("language",this._getTranslation("language_code"))}
                    <div class="helper-text">${this._getTranslation("language_code_note")}</div>
                  `:Q``)()}
            ${this.addSelectField("time_24h",this._getTranslation("time_24h"),[{value:"system",label:this._getTranslation("system")},{value:"true",label:this._getTranslation("24h")},{value:"false",label:this._getTranslation("12h")}])}
          `)}

        <!-- APPEARANCE & LAYOUT -->
        ${this.addExpansionPanel(this._getTranslation("appearance_layout"),"M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z",Q`
            <!-- Title Styling -->
            <h3>${this._getTranslation("title_styling")}</h3>
            ${this.addTextField("title",this._getTranslation("title"))}
            ${this.addTextField("title_font_size",this._getTranslation("title_font_size"))}
            ${this.addTextField("title_color",this._getTranslation("title_color"))}

            <!-- Card Styling -->
            <h3>${this._getTranslation("card_styling")}</h3>
            ${this.addTextField("background_color",this._getTranslation("background_color"))}
            ${this.addSelectField("height_mode",this._getTranslation("height_mode"),[{value:"auto",label:this._getTranslation("auto")},{value:"fixed",label:this._getTranslation("fixed")},{value:"maximum",label:this._getTranslation("maximum")}],!1,(()=>void 0!==this.getConfigValue("height")&&"auto"!==this.getConfigValue("height")?"fixed":void 0!==this.getConfigValue("max_height")&&"none"!==this.getConfigValue("max_height")?"maximum":"auto")())}
            ${(()=>void 0!==this.getConfigValue("height")&&"auto"!==this.getConfigValue("height")?Q`
                  ${this.addTextField("height",this._getTranslation("height_value"))}
                  <div class="helper-text">${this._getTranslation("fixed_height_note")}</div>
                `:void 0!==this.getConfigValue("max_height")&&"none"!==this.getConfigValue("max_height")?Q`
                  ${this.addTextField("max_height",this._getTranslation("height_value"))}
                  <div class="helper-text">${this._getTranslation("max_height_note")}</div>
                `:Q``)()}

            <!-- Event Styling -->
            <h3>${this._getTranslation("event_styling")}</h3>
            ${this.addTextField("accent_color",this._getTranslation("accent_color"))}
            ${this.addTextField("event_background_opacity",this._getTranslation("event_background_opacity"),"number")}
            ${this.addTextField("vertical_line_width",this._getTranslation("vertical_line_width"))}

            <!-- Spacing & Alignment -->
            <h3>${this._getTranslation("spacing_alignment")}</h3>
            ${this.addTextField("day_spacing",this._getTranslation("day_spacing"))}
            ${this.addTextField("event_spacing",this._getTranslation("event_spacing"))}
            ${this.addTextField("additional_card_spacing",this._getTranslation("additional_card_spacing"))}
          `)}

        <!-- DATE DISPLAY -->
        ${this.addExpansionPanel(this._getTranslation("date_display"),"M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z",Q`
            <!-- Date Column Formatting -->
            <h3>${this._getTranslation("vertical_alignment")}</h3>
            ${this.addSelectField("date_vertical_alignment",this._getTranslation("date_vertical_alignment"),[{value:"top",label:this._getTranslation("top")},{value:"middle",label:this._getTranslation("middle")},{value:"bottom",label:this._getTranslation("bottom")}])}

            <!-- Date Column Formatting -->
            <h3>${this._getTranslation("date_formatting")}</h3>

            <!-- Weekday Formatting -->
            <h5>${this._getTranslation("weekday_font")}</h5>
            ${this.addTextField("weekday_font_size",this._getTranslation("weekday_font_size"))}
            ${this.addTextField("weekday_color",this._getTranslation("weekday_color"))}

            <!-- Day Formatting -->
            <h5>${this._getTranslation("day_font")}</h5>
            ${this.addTextField("day_font_size",this._getTranslation("day_font_size"))}
            ${this.addTextField("day_color",this._getTranslation("day_color"))}

            <!-- Month Formatting -->
            <h5>${this._getTranslation("month_font")}</h5>
            ${this.addBooleanField("show_month",this._getTranslation("show_month"))}
            ${this.addTextField("month_font_size",this._getTranslation("month_font_size"))}
            ${this.addTextField("month_color",this._getTranslation("month_color"))}

            <!-- Weekend Highlighting -->
            <h5>${this._getTranslation("weekend_highlighting")}</h5>
            ${this.addTextField("weekend_weekday_color",this._getTranslation("weekend_weekday_color"))}
            ${this.addTextField("weekend_day_color",this._getTranslation("weekend_day_color"))}
            ${this.addTextField("weekend_month_color",this._getTranslation("weekend_month_color"))}

            <!-- Today Highlighting -->
            <h5>${this._getTranslation("today_highlighting")}</h5>
            ${this.addTextField("today_weekday_color",this._getTranslation("today_weekday_color"))}
            ${this.addTextField("today_day_color",this._getTranslation("today_day_color"))}
            ${this.addTextField("today_month_color",this._getTranslation("today_month_color"))}

            <!-- Today Indicator -->
            <h3>${this._getTranslation("today_indicator")}</h3>
            ${this.addTodayIndicatorField("today_indicator",this._getTranslation("today_indicator"))}
            ${(()=>{const e=this.getConfigValue("today_indicator");return e&&"none"!==e?Q`
                  ${this.addTextField("today_indicator_position",this._getTranslation("today_indicator_position"))}
                  ${this.addTextField("today_indicator_color",this._getTranslation("today_indicator_color"))}
                  ${this.addTextField("today_indicator_size",this._getTranslation("today_indicator_size"))}
                `:Q``})()}

            <!-- Week Numbers & Separators -->
            <h3>${this._getTranslation("week_numbers_separators")}</h3>

            <!-- Week Numbers -->
            <h5>${this._getTranslation("week_numbers")}</h5>
            ${this.addSelectField("first_day_of_week",this._getTranslation("first_day_of_week"),[{value:"system",label:this._getTranslation("system")},{value:"sunday",label:this._getTranslation("sunday")},{value:"monday",label:this._getTranslation("monday")}])}
            ${this.addSelectField("show_week_numbers",this._getTranslation("show_week_numbers"),[{value:"null",label:this._getTranslation("none")},{value:"iso",label:"ISO"},{value:"simple",label:this._getTranslation("simple")}])}
            ${(()=>{const e=this.getConfigValue("show_week_numbers");return"iso"===e?Q`<div class="helper-text">
                  ${this._getTranslation("week_number_note_iso")}
                </div>`:"simple"===e?Q`<div class="helper-text">
                  ${this._getTranslation("week_number_note_simple")}
                </div>`:Q``})()}
            ${(()=>{const e=this.getConfigValue("show_week_numbers");return e&&"null"!==e?Q`
                  ${this.addBooleanField("show_current_week_number",this._getTranslation("show_current_week_number"))}
                  ${this.addTextField("week_number_font_size",this._getTranslation("week_number_font_size"))}
                  ${this.addTextField("week_number_color",this._getTranslation("week_number_color"))}
                  ${this.addTextField("week_number_background_color",this._getTranslation("week_number_background_color"))}
                `:Q``})()}

            <!-- Day Separator -->
            <h5>${this._getTranslation("day_separator")}</h5>
            ${this.addBooleanField("day_separator_toggle",this._getTranslation("show_day_separator"),"0px"!==this.getConfigValue("day_separator_width")&&"0"!==this.getConfigValue("day_separator_width"),(e=>{e.target.checked?this.setConfigValue("day_separator_width","1px"):this.setConfigValue("day_separator_width","0px")}),!0)}
            ${(()=>"0px"!==this.getConfigValue("day_separator_width")&&"0"!==this.getConfigValue("day_separator_width")?Q`
                ${this.addTextField("day_separator_width",this._getTranslation("day_separator_width"))}
                ${this.addTextField("day_separator_color",this._getTranslation("day_separator_color"))}
              `:Q``)()}

            <!-- Week Separator -->
            <h5>${this._getTranslation("week_separator")}</h5>
            ${this.addBooleanField("week_separator_toggle",this._getTranslation("show_week_separator"),"0px"!==this.getConfigValue("week_separator_width")&&"0"!==this.getConfigValue("week_separator_width"),(e=>{e.target.checked?this.setConfigValue("week_separator_width","1px"):this.setConfigValue("week_separator_width","0px")}),!0)}
            ${(()=>"0px"!==this.getConfigValue("week_separator_width")&&"0"!==this.getConfigValue("week_separator_width")?Q`
                ${this.addTextField("week_separator_width",this._getTranslation("week_separator_width"))}
                ${this.addTextField("week_separator_color",this._getTranslation("week_separator_color"))}
              `:Q``)()}

            <!-- Month Separator -->
            <h5>${this._getTranslation("month_separator")}</h5>
            ${this.addBooleanField("month_separator_toggle",this._getTranslation("show_month_separator"),"0px"!==this.getConfigValue("month_separator_width")&&"0"!==this.getConfigValue("month_separator_width"),(e=>{e.target.checked?this.setConfigValue("month_separator_width","1px"):this.setConfigValue("month_separator_width","0px")}),!0)}
            ${(()=>"0px"!==this.getConfigValue("month_separator_width")&&"0"!==this.getConfigValue("month_separator_width")?Q`
                ${this.addTextField("month_separator_width",this._getTranslation("month_separator_width"))}
                ${this.addTextField("month_separator_color",this._getTranslation("month_separator_color"))}
              `:Q``)()}
          `)}

        <!-- EVENT DISPLAY -->
        ${this.addExpansionPanel(this._getTranslation("event_display"),"M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M5,13V15H16V13H5M5,9V11H19V9H5Z",Q`
            <!-- Event Content -->
            <h3>${this._getTranslation("event_title")}</h3>
            ${this.addTextField("event_font_size",this._getTranslation("event_font_size"))}
            ${this.addTextField("event_color",this._getTranslation("event_color"))}
            ${this.addTextField("empty_day_color",this._getTranslation("empty_day_color"))}

            <!-- Time Display -->
            <h3>${this._getTranslation("time")}</h3>
            ${this.addBooleanField("show_time",this._getTranslation("show_time"))}
            ${(()=>!0!==this.getConfigValue("show_time")?Q``:Q`
                ${this.addBooleanField("show_single_allday_time",this._getTranslation("show_single_allday_time"))}
                ${this.addBooleanField("show_end_time",this._getTranslation("show_end_time"))}
                ${this.addTextField("time_font_size",this._getTranslation("time_font_size"))}
                ${this.addTextField("time_color",this._getTranslation("time_color"))}
                ${this.addTextField("time_icon_size",this._getTranslation("time_icon_size"))}
              `)()}

            <!-- Location Display -->
            <h3>${this._getTranslation("location")}</h3>
            ${this.addBooleanField("show_location",this._getTranslation("show_location"))}
            ${(()=>!0!==this.getConfigValue("show_location")?Q``:Q`
                ${this.addTextField("location_font_size",this._getTranslation("location_font_size"))}
                ${this.addTextField("location_color",this._getTranslation("location_color"))}
                ${this.addTextField("location_icon_size",this._getTranslation("location_icon_size"))}
                ${this.addSelectField("remove_location_country_selector",this._getTranslation("remove_location_country"),[{value:"false",label:this._getTranslation("none")},{value:"true",label:this._getTranslation("simple")},{value:"custom",label:this._getTranslation("custom")}],!1,(()=>{if(!this._config||!this._config.hasOwnProperty("remove_location_country"))return"false";const e=this._config.remove_location_country;return!0===e||"true"===e?"true":!1===e||"false"===e?"false":"string"==typeof e?"custom":"false"})(),(e=>{"true"===e?this.setConfigValue("remove_location_country",!0):"false"===e?this.setConfigValue("remove_location_country",!1):"custom"===e&&this._config&&"custom"!==this._config.remove_location_country&&"string"!=typeof this._config.remove_location_country&&this.setConfigValue("remove_location_country","USA|United States|Canada")}))}
                ${(()=>{if(!this._config||!this._config.hasOwnProperty("remove_location_country")||!0===this._config.remove_location_country||!1===this._config.remove_location_country||"true"===this._config.remove_location_country||"false"===this._config.remove_location_country)return Q``;const e=this._config.remove_location_country;return"string"==typeof e&&"true"!==e&&"false"!==e?Q`
                      <ha-textfield
                        label="${this._getTranslation("custom_country_pattern")}"
                        .value="${e}"
                        @change="${e=>this.setConfigValue("remove_location_country",e.target.value)}"
                      ></ha-textfield>
                      <div class="helper-text">
                        ${this._getTranslation("custom_country_pattern_note")}
                      </div>
                    `:Q``})()}
              `)()}

            <!-- Progress Indicators -->
            <h3>${this._getTranslation("progress_indicators")}</h3>
            ${this.addBooleanField("show_countdown",this._getTranslation("show_countdown"))}
            ${this.addBooleanField("show_progress_bar",this._getTranslation("show_progress_bar"))}
            ${(()=>!0!==this.getConfigValue("show_progress_bar")?Q``:Q`
                ${this.addTextField("progress_bar_color",this._getTranslation("progress_bar_color"))}
                ${this.addTextField("progress_bar_height",this._getTranslation("progress_bar_height"))}
                ${this.addTextField("progress_bar_width",this._getTranslation("progress_bar_width"))}
              `)()}

            <!-- Multi-day Event Handling -->
            <h3>${this._getTranslation("multiday_event_handling")}</h3>
            ${this.addBooleanField("split_multiday_events",this._getTranslation("split_multiday_events"))}
          `)}

        <!-- WEATHER INTEGRATION -->
        ${this.addExpansionPanel(this._getTranslation("weather_integration"),"M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z",Q`
            <!-- Weather Entity & Position -->
            <h3>${this._getTranslation("weather_entity_position")}</h3>
            ${this.addEntityPickerField("weather.entity",this._getTranslation("weather_entity"),["weather"])}

            <!-- Only show the rest of the weather config when an entity is selected -->
            ${(()=>this.getConfigValue("weather.entity")?Q`
                ${this.addSelectField("weather.position",this._getTranslation("weather_position"),[{value:"none",label:this._getTranslation("none")},{value:"date",label:this._getTranslation("date")},{value:"event",label:this._getTranslation("event")},{value:"both",label:this._getTranslation("both")}])}

                <!-- Conditionally render weather settings based on selected position -->
                ${(()=>{const e=this.getConfigValue("weather.position","none");return Q`
                    ${"date"===e||"both"===e?Q`
                          <!-- Date Column Weather -->
                          <h3>${this._getTranslation("date_column_weather")}</h3>
                          ${this.addBooleanField("weather.date.show_conditions",this._getTranslation("show_conditions"))}
                          ${this.addBooleanField("weather.date.show_high_temp",this._getTranslation("show_high_temp"))}
                          ${this.addBooleanField("weather.date.show_low_temp",this._getTranslation("show_low_temp"))}
                          ${this.addTextField("weather.date.icon_size",this._getTranslation("icon_size"))}
                          ${this.addTextField("weather.date.font_size",this._getTranslation("font_size"))}
                          ${this.addTextField("weather.date.color",this._getTranslation("color"))}
                        `:Q``}
                    ${"event"===e||"both"===e?Q`
                          <!-- Event Row Weather -->
                          <h3>${this._getTranslation("event_row_weather")}</h3>
                          ${this.addBooleanField("weather.event.show_conditions",this._getTranslation("show_conditions"))}
                          ${this.addBooleanField("weather.event.show_temp",this._getTranslation("show_temp"))}
                          ${this.addTextField("weather.event.icon_size",this._getTranslation("icon_size"))}
                          ${this.addTextField("weather.event.font_size",this._getTranslation("font_size"))}
                          ${this.addTextField("weather.event.color",this._getTranslation("color"))}
                        `:Q``}
                  `})()}
              `:Q``)()}
          `)}

        <!-- INTERACTIONS -->
        ${this.addExpansionPanel(this._getTranslation("interactions"),"M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M9,12.44V9A2,2 0 0,1 11,7A2,2 0 0,1 13,9V12.44C14.19,11.75 15,10.47 15,9A4,4 0 0,0 11,5A4,4 0 0,0 7,9C7,10.47 7.81,11.75 9,12.44Z",Q`
            <!-- Tap Action -->
            <h3>${this._getTranslation("tap_action")}</h3>
            ${this._renderActionConfig("tap_action")}

            <!-- Hold Action -->
            <h3>${this._getTranslation("hold_action")}</h3>
            ${this._renderActionConfig("hold_action")}

            <!-- Refresh Settings -->
            <h3>${this._getTranslation("refresh_settings")}</h3>
            ${this.addTextField("refresh_interval",this._getTranslation("refresh_interval"),"number")}
            ${this.addBooleanField("refresh_on_navigate",this._getTranslation("refresh_on_navigate"))}
          `)}
      </div>
    `}addTextField(e,t,a,n){let i=this.getConfigValue(e,n);return void 0===i&&(i=""),Q`
      <ha-textfield
        name="${e}"
        label="${null!=t?t:this._getTranslation(e)}"
        type="${null!=a?a:"text"}"
        .value="${i}"
        @keyup="${this._valueChanged}"
        @change="${this._valueChanged}"
      ></ha-textfield>
    `}addEntityPickerField(e,t,a,n){return Q`
      <ha-entity-picker
        .hass="${this.hass}"
        name="${e}"
        label="${null!=t?t:this._getTranslation(e)}"
        .value="${this.getConfigValue(e,n)}"
        .includeDomains="${a}"
        @value-changed="${t=>{t.stopPropagation(),this.setConfigValue(e,t.detail.value)}}"
      ></ha-entity-picker>
    `}addBooleanField(e,t,a,n,i=!1){return Q`
      <ha-formfield label="${null!=t?t:this._getTranslation(e)}">
        <ha-switch
          name="${e}"
          .checked="${this.getConfigValue(e,a)}"
          @change="${e=>{i||this._valueChanged(e),n&&n(e)}}"
        ></ha-switch>
      </ha-formfield>
    `}addSelectField(e,t,a,n,i,r){return Q`
      <ha-select
        name="${e}"
        label="${null!=t?t:this._getTranslation(e)}"
        .value="${this.getConfigValue(e,i)}"
        .clearable="${null!=n&&n}"
        @change="${e=>{if(this._valueChanged(e),r&&e.target){const t=e.target.value;r(t)}}}"
        @closed="${e=>e.stopPropagation()}"
      >
        ${null==a?void 0:a.map((e=>Q`
            <mwc-list-item value="${e.value}">${e.label}</mwc-list-item>
          `))}
      </ha-select>
    `}addDateField(e,t,a){var n;let i=this.getConfigValue(e,a);void 0===i&&(i="");const r=!i||"string"!=typeof i&&"number"!=typeof i?"":function(e,t,a="YYYY-MM-DD"){if(!e||isNaN(e.getTime()))return"";if(!t||"YYYY-MM-DD"===t.date_format)return Yt(e);try{if(!t.date_format||"system"===t.date_format){const a=t.language||navigator.language;return new Intl.DateTimeFormat(a,{year:"numeric",month:"2-digit",day:"2-digit"}).format(e)}if("language"===t.date_format&&t.language)return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"2-digit",day:"2-digit"}).format(e);if("DD/MM/YYYY"===t.date_format){const t=String(e.getDate()).padStart(2,"0");return`${t}/${String(e.getMonth()+1).padStart(2,"0")}/${e.getFullYear()}`}if("MM/DD/YYYY"===t.date_format){const t=String(e.getDate()).padStart(2,"0");return`${String(e.getMonth()+1).padStart(2,"0")}/${t}/${e.getFullYear()}`}}catch(e){console.warn("Error formatting date:",e)}return"YYYY-MM-DD"===a?Yt(e):(new Intl.DateTimeFormat).format(e)}(new Date(i),null==(n=this.hass)?void 0:n.locale);return Q`
      <div class="date-input">
        <div class="mdc-text-field mdc-text-field--filled">
          <!-- Ripple overlay element for hover effect -->
          <div class="mdc-text-field__ripple"></div>

          <span class="mdc-floating-label mdc-floating-label--float-above">
            ${null!=t?t:this._getTranslation(e)}
          </span>

          <div class="value-container">
            <span class="value-text">${r}</span>
          </div>
        </div>

        <input
          type="date"
          name="${e}"
          .value="${i}"
          @focus="${e=>{const t=e.target.closest(".date-input"),a=null==t?void 0:t.querySelector(".mdc-text-field"),n=null==t?void 0:t.querySelector(".mdc-floating-label"),i=null==t?void 0:t.querySelector(".mdc-text-field__ripple");a&&(a.classList.add("focused"),a.style.borderBottom="2px solid var(--primary-color)",n&&(n.style.color="var(--primary-color)")),i&&(i.style.opacity="0.08")}}"
          @blur="${e=>{const t=e.target.closest(".date-input"),a=null==t?void 0:t.querySelector(".mdc-text-field"),n=null==t?void 0:t.querySelector(".mdc-floating-label"),i=null==t?void 0:t.querySelector(".mdc-text-field__ripple");a&&(a.classList.remove("focused"),a.style.borderBottom="1px solid var(--mdc-text-field-idle-line-color, var(--secondary-text-color))",n&&(n.style.color="var(--mdc-select-label-ink-color, rgba(0,0,0,.6))")),i&&(i.style.opacity="0")}}"
          @mouseover="${e=>{const t=e.target.closest(".date-input"),a=null==t?void 0:t.querySelector(".mdc-text-field"),n=null==t?void 0:t.querySelector(".mdc-text-field__ripple");a&&!a.classList.contains("focused")&&(a.style.borderBottomColor="var(--primary-text-color)",n&&(n.style.opacity="0.04"))}}"
          @mouseout="${e=>{const t=e.target.closest(".date-input"),a=null==t?void 0:t.querySelector(".mdc-text-field"),n=null==t?void 0:t.querySelector(".mdc-text-field__ripple");a&&!a.classList.contains("focused")&&(a.style.borderBottomColor="var(--mdc-text-field-idle-line-color, var(--secondary-text-color))",n&&(n.style.opacity="0"))}}"
          @change="${e=>{this._valueChanged(e);const t=e.target,a=t.closest(".date-input"),n=null==a?void 0:a.querySelector(".value-container span");n&&t.value&&(n.textContent=new Date(t.value).toLocaleDateString())}}"
        />
      </div>
    `}addExpansionPanel(e,t,a,n){return Q`
      <ha-expansion-panel .header="${e}" .expanded="${null!=n&&n}" outlined>
        <ha-svg-icon slot="leading-icon" .path=${t}></ha-svg-icon>
        <div class="panel-content">${a}</div>
      </ha-expansion-panel>
    `}addButton(e,t,a){return Q`
      <ha-button @click="${a}">
        <ha-icon icon="${t}"></ha-icon>
        ${e}
      </ha-button>
    `}addIconPickerField(e,t){return Q`
      <ha-icon-picker
        .hass="${this.hass}"
        name="${e}"
        label="${null!=t?t:this._getTranslation(e)}"
        .value="${this.getConfigValue(e)}"
        @value-changed="${t=>{this.setConfigValue(e,t.detail.value)}}"
      ></ha-icon-picker>
    `}addTodayIndicatorField(e,t){const a=[{value:"none",label:this._getTranslation("none")},{value:"dot",label:this._getTranslation("dot")},{value:"pulse",label:this._getTranslation("pulse")},{value:"glow",label:this._getTranslation("glow")},{value:"icon",label:this._getTranslation("icon")},{value:"emoji",label:this._getTranslation("emoji")},{value:"image",label:this._getTranslation("image")}];return this._renderTypeSelector(e,null!=t?t:this._getTranslation(e),a,"indicator")}_renderCalendarEntity(e,t){const a="string"==typeof e,n=a?e:e.entity,i=a||!e.label?`${this._getTranslation("calendar")}: ${n}`:`${this._getTranslation("calendar")}: ${e.label} (${n})`;return Q`
      ${this.addExpansionPanel(i,"M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z",Q`
          <!-- Entity Identification Section -->
          <div class="editor-section">
            <h4>${this._getTranslation("entity_identification")}</h4>
            ${this.addEntityPickerField(`entities.${t}${a?"":".entity"}`,this._getTranslation("entity"),["calendar"])}
          </div>

          ${a?Q``:Q`
                <!-- Display Settings Section -->
                <div class="editor-section">
                  <h4>${this._getTranslation("display_settings")}</h4>

                  <div class="subsection">
                    <h5>${this._getTranslation("label")}</h5>
                    ${(()=>{const e=`entities.${t}.label`,a=[{value:"none",label:this._getTranslation("none")},{value:"text",label:this._getTranslation("text_emoji")},{value:"icon",label:this._getTranslation("icon")},{value:"image",label:this._getTranslation("image")}];return this._renderTypeSelector(e,this._getTranslation("label_type"),a,"label")})()}
                    <div class="helper-text">${this._getTranslation("label_note")}</div>
                  </div>

                  <div class="subsection">
                    <h5>${this._getTranslation("colors")}</h5>
                    ${this.addTextField(`entities.${t}.color`,this._getTranslation("event_color"))}
                    <div class="helper-text">${this._getTranslation("entity_color_note")}</div>

                    ${this.addTextField(`entities.${t}.accent_color`,this._getTranslation("accent_color"))}
                    <div class="helper-text">
                      ${this._getTranslation("entity_accent_color_note")}
                    </div>
                  </div>
                </div>

                <!-- Event Filtering Section -->
                <div class="editor-section">
                  <h4>${this._getTranslation("event_filtering")}</h4>

                  ${this.addTextField(`entities.${t}.blocklist`,this._getTranslation("blocklist"))}
                  <div class="helper-text">${this._getTranslation("blocklist_note")}</div>

                  ${this.addTextField(`entities.${t}.allowlist`,this._getTranslation("allowlist"))}
                  <div class="helper-text">${this._getTranslation("allowlist_note")}</div>
                </div>

                <!-- Entity Overrides Section -->
                <div class="editor-section">
                  <h4>${this._getTranslation("entity_overrides")}</h4>
                  <div class="helper-text section-note">
                    ${this._getTranslation("entity_overrides_note")}
                  </div>

                  ${this.addTextField(`entities.${t}.compact_events_to_show`,this._getTranslation("compact_events_to_show"),"number")}
                  <div class="helper-text">
                    ${this._getTranslation("entity_compact_events_note")}
                  </div>

                  ${this.addBooleanField(`entities.${t}.show_time`,this._getTranslation("show_time"))}
                  <div class="helper-text">${this._getTranslation("entity_show_time_note")}</div>

                  ${this.addBooleanField(`entities.${t}.show_location`,this._getTranslation("show_location"))}
                  <div class="helper-text">
                    ${this._getTranslation("entity_show_location_note")}
                  </div>

                  ${this.addBooleanField(`entities.${t}.split_multiday_events`,this._getTranslation("split_multiday_events"))}
                  <div class="helper-text">
                    ${this._getTranslation("entity_split_multiday_note")}
                  </div>
                </div>
              `}

          <!-- Entity Action Buttons -->
          <div class="editor-section button-section">
            ${this.addButton(this._getTranslation("remove"),"mdi:trash-can",(()=>this._removeCalendarEntity(t)))}
            ${a?Q`
                  ${this.addButton(this._getTranslation("convert_to_advanced"),"mdi:code-json",(()=>this._convertEntityToObject(t)))}
                `:Q``}
          </div>
        `)}
    `}_renderCalendarEntities(){var e;const t=(null==(e=this._config)?void 0:e.entities)||[];return Q`
      ${t.map(((e,t)=>this._renderCalendarEntity(e,t)))}
      ${this.addButton(this._getTranslation("add_calendar"),"mdi:plus",(()=>this._addCalendarEntity()))}
    `}_addCalendarEntity(){var e;const t=[...(null==(e=this._config)?void 0:e.entities)||[]];t.push({entity:"calendar.calendar"}),this.setConfigValue("entities",t)}_removeCalendarEntity(e){var t;const a=[...(null==(t=this._config)?void 0:t.entities)||[]];a.splice(e,1),this.setConfigValue("entities",a)}_convertEntityToObject(e){var t;const a=[...(null==(t=this._config)?void 0:t.entities)||[]],n=a[e];a[e]={entity:n},this.setConfigValue("entities",a)}_renderActionConfig(e){const t=this.getConfigValue(e,{action:"none"}),a=t.action||"none";return Q`
      <div class="action-config">
        <ha-select
          name="${e}.action"
          .value="${a}"
          @change="${this._valueChanged}"
          @closed="${e=>e.stopPropagation()}"
        >
          <mwc-list-item value="none">${this._getTranslation("none")}</mwc-list-item>
          <mwc-list-item value="expand">${this._getTranslation("expand")}</mwc-list-item>
          <mwc-list-item value="more-info">${this._getTranslation("more_info")}</mwc-list-item>
          <mwc-list-item value="navigate">${this._getTranslation("navigate")}</mwc-list-item>
          <mwc-list-item value="url">${this._getTranslation("url")}</mwc-list-item>
          <mwc-list-item value="call-service"
            >${this._getTranslation("call_service")}</mwc-list-item
          >
        </ha-select>

        ${"navigate"===a?Q`
              <ha-textfield
                name="${e}.navigation_path"
                .value="${t.navigation_path||""}"
                label="${this._getTranslation("navigation_path")}"
                @change="${this._valueChanged}"
              ></ha-textfield>
            `:Q``}
        ${"url"===a?Q`
              <ha-textfield
                name="${e}.url_path"
                .value="${t.url_path||""}"
                label="${this._getTranslation("url_path")}"
                @change="${this._valueChanged}"
              ></ha-textfield>
            `:Q``}
        ${"call-service"===a?Q`
              <ha-textfield
                name="${e}.service"
                .value="${t.service||""}"
                label="${this._getTranslation("service")}"
                @change="${this._valueChanged}"
              ></ha-textfield>
              <ha-textfield
                name="${e}.service_data"
                .value="${t.service_data?JSON.stringify(t.service_data):"{}"}"
                label="${this._getTranslation("service_data")}"
                @change="${this._serviceDataChanged}"
              ></ha-textfield>
            `:Q``}
      </div>
    `}getValueType(e,t="label"){return e&&!1!==e?!0===e?"indicator"===t?"dot":"none":"string"==typeof e?e.startsWith("mdi:")?"icon":e.startsWith("/")||/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(e)?"image":"indicator"===t?["dot","pulse","glow"].includes(e)?e:"emoji":"text":"none":"none"}_handleValueTypeChange(e,t,a,n="label"){e.stopPropagation();const i=e.target.value;let r;"none"===i?r="indicator"!==n&&void 0:"icon"===i?r="string"==typeof a&&a.startsWith("mdi:")?a:"indicator"===n?"mdi:star":"mdi:calendar":"image"===i?r="string"==typeof a&&(a.startsWith("/")||/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(a))?a:"indicator"===n?"/local/image.jpg":"/local/calendar.jpg":"indicator"===n?["dot","pulse","glow"].includes(i)?r=i:"emoji"===i&&(r="string"!=typeof a||a.startsWith("mdi:")||/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(a)||/^\/local\//i.test(a)||["dot","pulse","glow"].includes(a)?"🗓️":a):"text"===i&&(r="string"==typeof a&&"text"===this.getValueType(a,"label")?a:"📅"),this.setConfigValue(t,r)}_renderTypeSelector(e,t,a,n="label"){const i=this.getConfigValue(e),r=this.getValueType(i,n);return Q`
      <div class="type-selector-field">
        <ha-select
          name="${e}_type"
          label="${t}"
          .value="${r}"
          @change="${t=>this._handleValueTypeChange(t,e,i,n)}"
          @closed="${e=>e.stopPropagation()}"
        >
          ${a.map((e=>Q` <mwc-list-item value="${e.value}">${e.label}</mwc-list-item> `))}
        </ha-select>

        ${this._renderTypeField(r,e,i,n)}
      </div>
    `}_renderTypeField(e,t,a,n){if("icon"===e)return Q`
        <div class="icon-picker-wrapper">
          <ha-icon-picker
            .hass="${this.hass}"
            .value="${a}"
            @value-changed="${e=>{const a=e.detail.value;if(a){const e=a.startsWith("mdi:")?a:`mdi:${a}`;this.setConfigValue(t,e)}else this.setConfigValue(t,"indicator"===n?"dot":"")}}"
          ></ha-icon-picker>
        </div>
      `;if("emoji"===e||"text"===e){const n="emoji"===e?this._getTranslation("emoji_value"):this._getTranslation("text_value"),i="emoji"===e?this._getTranslation("emoji_indicator_note"):this._getTranslation("text_label_note");return Q`
        <ha-textfield
          name="${t}"
          label="${n}"
          .value="${a}"
          @change="${this._valueChanged}"
        ></ha-textfield>
        <div class="helper-text">${i}</div>
      `}return"image"===e?Q`
        <ha-textfield
          name="${t}"
          label="${this._getTranslation("image_path")}"
          .value="${a}"
          @change="${this._valueChanged}"
        ></ha-textfield>
        <div class="helper-text">${this._getTranslation("image_indicator_note")}</div>
      `:Q``}}hi([$e({attribute:!1})],gi.prototype,"hass"),hi([$e({attribute:!1})],gi.prototype,"_config");var pi=Object.defineProperty,fi=Object.defineProperties,yi=Object.getOwnPropertyDescriptor,vi=Object.getOwnPropertyDescriptors,wi=Object.getOwnPropertySymbols,ki=Object.prototype.hasOwnProperty,bi=Object.prototype.propertyIsEnumerable,Mi=(e,t,a)=>t in e?pi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Ti=(e,t)=>{for(var a in t||(t={}))ki.call(t,a)&&Mi(e,a,t[a]);if(wi)for(var a of wi(t))bi.call(t,a)&&Mi(e,a,t[a]);return e},$i=(e,t,a,n)=>{for(var i,r=n>1?void 0:n?yi(t,a):t,o=e.length-1;o>=0;o--)(i=e[o])&&(r=(n?i(t,a,r):i(r))||r);return n&&r&&pi(t,a,r),r};let Di=class extends ve{constructor(){super(),this.config=Ti({},rt),this.events=[],this.isLoading=!0,this.isExpanded=!1,this.weatherForecasts={daily:{},hourly:{}},this._instanceId=Dt(),this._language="",this._lastUpdateTime=Date.now(),this._weatherUnsubscribers=[],this._activePointerId=null,this._holdTriggered=!1,this._holdTimer=null,this._holdIndicator=null,this._handleVisibilityChange=()=>{if("visible"===document.visibilityState){Date.now()-this._lastUpdateTime>He&&(at("Visibility changed to visible, updating events"),this.updateEvents())}},this._instanceId=Dt(),Qe(De)}static getConfigElement(){return document.createElement("calendar-card-pro-editor")}get safeHass(){return this.hass||null}get effectiveLanguage(){return!this._language&&this.hass&&(this._language=Mt(this.config.language,this.hass.locale)),this._language||"en"}get groupedEvents(){return hn(this.events,this.config,this.isExpanded,this.effectiveLanguage)}static get styles(){return xn}connectedCallback(){super.connectedCallback(),at("Component connected"),this.startRefreshTimer(),this.updateEvents(),this._setupWeatherSubscriptions(),document.addEventListener("visibilitychange",this._handleVisibilityChange)}disconnectedCallback(){super.disconnectedCallback(),this._cleanupWeatherSubscriptions(),this._refreshTimerId&&clearTimeout(this._refreshTimerId),this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null),this._holdIndicator&&(Yn(this._holdIndicator),this._holdIndicator=null),document.removeEventListener("visibilitychange",this._handleVisibilityChange),at("Component disconnected")}updated(e){var t,a,n,i,r,o,s;(e.has("hass")&&(null==(t=this.hass)?void 0:t.locale)||e.has("config")&&(null==(a=e.get("config"))?void 0:a.language)!==this.config.language)&&(this._language=Mt(this.config.language,null==(n=this.hass)?void 0:n.locale)),e.has("config")&&(null==(r=null==(i=this.config)?void 0:i.weather)?void 0:r.entity)!==(null==(s=null==(o=e.get("config"))?void 0:o.weather)?void 0:s.entity)&&this._setupWeatherSubscriptions()}getCustomStyles(){return function(e){var t,a,n,i,r,o,s,l,d,_,c,h;const u={"--calendar-card-background-color":e.background_color,"--calendar-card-font-size-weekday":e.weekday_font_size,"--calendar-card-font-size-day":e.day_font_size,"--calendar-card-font-size-month":e.month_font_size,"--calendar-card-font-size-event":e.event_font_size,"--calendar-card-font-size-time":e.time_font_size,"--calendar-card-font-size-location":e.location_font_size,"--calendar-card-color-weekday":e.weekday_color,"--calendar-card-color-day":e.day_color,"--calendar-card-color-month":e.month_color,"--calendar-card-color-event":e.event_color,"--calendar-card-color-time":e.time_color,"--calendar-card-color-location":e.location_color,"--calendar-card-line-color-vertical":e.accent_color,"--calendar-card-line-width-vertical":e.vertical_line_width,"--calendar-card-day-spacing":e.day_spacing,"--calendar-card-event-spacing":e.event_spacing,"--calendar-card-spacing-additional":e.additional_card_spacing,"--calendar-card-height":e.height||"auto","--calendar-card-max-height":e.max_height,"--calendar-card-progress-bar-color":e.progress_bar_color,"--calendar-card-progress-bar-height":e.progress_bar_height,"--calendar-card-progress-bar-width":e.progress_bar_width,"--calendar-card-icon-size-time":e.time_icon_size||"14px","--calendar-card-icon-size-location":e.location_icon_size||"14px","--calendar-card-date-column-width":1.75*parseFloat(e.day_font_size)+"px","--calendar-card-date-column-vertical-alignment":e.date_vertical_alignment,"--calendar-card-event-border-radius":"calc(var(--ha-card-border-radius, 10px) / 2)","--ha-ripple-hover-opacity":"0.04","--ha-ripple-hover-color":e.accent_color,"--ha-ripple-pressed-opacity":"0.12","--ha-ripple-pressed-color":e.accent_color,"--calendar-card-today-indicator-color":e.today_indicator_color,"--calendar-card-today-indicator-size":e.today_indicator_size,"--calendar-card-week-number-font-size":e.week_number_font_size,"--calendar-card-week-number-color":e.week_number_color,"--calendar-card-week-number-bg-color":e.week_number_background_color,"--calendar-card-empty-day-color":e.empty_day_color===rt.empty_day_color?"color-mix(in srgb, var(--primary-text-color) 60%, transparent)":e.empty_day_color,"--calendar-card-weather-date-icon-size":(null==(a=null==(t=e.weather)?void 0:t.date)?void 0:a.icon_size)||"14px","--calendar-card-weather-date-font-size":(null==(i=null==(n=e.weather)?void 0:n.date)?void 0:i.font_size)||"12px","--calendar-card-weather-date-color":(null==(o=null==(r=e.weather)?void 0:r.date)?void 0:o.color)||"var(--primary-text-color)","--calendar-card-weather-event-icon-size":(null==(l=null==(s=e.weather)?void 0:s.event)?void 0:l.icon_size)||"14px","--calendar-card-weather-event-font-size":(null==(_=null==(d=e.weather)?void 0:d.event)?void 0:_.font_size)||"12px","--calendar-card-weather-event-color":(null==(h=null==(c=e.weather)?void 0:c.event)?void 0:h.color)||"var(--primary-text-color)"};return e.title_font_size&&(u["--calendar-card-font-size-title"]=e.title_font_size),e.title_color&&(u["--calendar-card-color-title"]=e.title_color),u}(this.config)}startRefreshTimer(){this._refreshTimerId&&clearTimeout(this._refreshTimerId);const e=this.config.refresh_interval||Se,t=60*e*1e3;this._refreshTimerId=window.setTimeout((()=>{this.updateEvents(),this.startRefreshTimer()}),t),at(`Scheduled next refresh in ${e} minutes`)}_setupWeatherSubscriptions(){var e,t;if(this._cleanupWeatherSubscriptions(),!(null==(t=null==(e=this.config)?void 0:e.weather)?void 0:t.entity)||!this.hass)return;(function(e){if(!e||!e.entity)return[];return"date"===(e.position||"date")?["daily"]:["daily","hourly"]})(this.config.weather).forEach((e=>{const t=function(e,t,a,n){var i;if(!(null==e?void 0:e.connection)||!(null==(i=null==t?void 0:t.weather)?void 0:i.entity))return;const r=t.weather.entity;try{return e.connection.subscribeMessage((e=>{if(e&&Array.isArray(e.forecast)){const t=Kn(e.forecast,a);n(t)}}),{type:"weather/subscribe_forecast",forecast_type:a,entity_id:r})}catch(e){return void Xe("Failed to subscribe to weather forecast",{entity:r,forecast_type:a,error:e})}}(this.hass,this.config,e,(t=>{var a;this.weatherForecasts=(a=Ti({},this.weatherForecasts),fi(a,vi({[e]:t}))),this.requestUpdate()}));t&&this._weatherUnsubscribers.push(t)}))}_cleanupWeatherSubscriptions(){this._weatherUnsubscribers.forEach((e=>{"function"==typeof e&&e()})),this._weatherUnsubscribers=[]}_handlePointerDown(e){var t;this._activePointerId=e.pointerId,this._holdTriggered=!1,"none"!==(null==(t=this.config.hold_action)?void 0:t.action)&&(this._holdTimer&&clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout((()=>{this._activePointerId===e.pointerId&&(this._holdTriggered=!0,this._holdIndicator=function(e,t){const a=document.createElement("div");a.style.position="absolute",a.style.pointerEvents="none",a.style.borderRadius="50%",a.style.backgroundColor=t.accent_color,a.style.opacity=`${Ve}`,a.style.transform="translate(-50%, -50%) scale(0)",a.style.transition=`transform ${Ee}ms ease-out`,a.style.left=e.pageX+"px",a.style.top=e.pageY+"px";const n="touch"===e.pointerType?Oe.TOUCH_SIZE:Oe.POINTER_SIZE;return a.style.width=`${n}px`,a.style.height=`${n}px`,document.body.appendChild(a),setTimeout((()=>{a.style.transform="translate(-50%, -50%) scale(1)"}),10),at("Created hold indicator"),a}(e,this.config))}),je))}_handlePointerUp(e){if(e.pointerId===this._activePointerId){if(this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null),this._holdTriggered&&this.config.hold_action){at("Executing hold action");const e=Dn(this.config.entities);Sn(this.config.hold_action,this.safeHass,this,e,(()=>this.toggleExpanded()))}else if(!this._holdTriggered&&this.config.tap_action){at("Executing tap action");const e=Dn(this.config.entities);Sn(this.config.tap_action,this.safeHass,this,e,(()=>this.toggleExpanded()))}this._activePointerId=null,this._holdTriggered=!1,this._holdIndicator&&(Yn(this._holdIndicator),this._holdIndicator=null)}}_handlePointerCancel(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null),this._activePointerId=null,this._holdTriggered=!1,this._holdIndicator&&(Yn(this._holdIndicator),this._holdIndicator=null)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key){e.preventDefault();const t=Dn(this.config.entities);Sn(this.config.tap_action,this.safeHass,this,t,(()=>this.toggleExpanded()))}}setConfig(e){var t,a,n,i,r,o;const s=this.config;let l=Ti(Ti({},rt),e);var d;this.config=l,this.config.entities=(d=this.config.entities,Array.isArray(d)?d.map((e=>"string"==typeof e?{entity:e,color:"var(--primary-text-color)",accent_color:void 0}:"object"==typeof e&&e.entity?{entity:e.entity,label:e.label,color:e.color||"var(--primary-text-color)",accent_color:e.accent_color||void 0,show_time:e.show_time,show_location:e.show_location,compact_events_to_show:e.compact_events_to_show,blocklist:e.blocklist,allowlist:e.allowlist,split_multiday_events:e.split_multiday_events}:null)).filter(Boolean):[]),this._instanceId=St(this.config.entities,this.config.days_to_show,this.config.show_past_events,this.config.start_date);((null==(a=null==(t=this.config)?void 0:t.weather)?void 0:a.entity)!==(null==(n=e.weather)?void 0:n.entity)||(null==(r=null==(i=this.config)?void 0:i.weather)?void 0:r.position)!==(null==(o=e.weather)?void 0:o.position))&&this._setupWeatherSubscriptions();(function(e,t){if(!e||0===Object.keys(e).length)return!0;const a=(e.entities||[]).map((e=>"string"==typeof e?e:e.entity)).sort().join(","),n=(t.entities||[]).map((e=>"string"==typeof e?e:e.entity)).sort().join(","),i=(null==e?void 0:e.refresh_interval)!==(null==t?void 0:t.refresh_interval),r=a!==n||e.days_to_show!==t.days_to_show||e.start_date!==t.start_date||e.show_past_events!==t.show_past_events||e.filter_duplicates!==t.filter_duplicates;return(r||i)&&at("Configuration change requires data refresh"),r||i})(s,this.config)&&(at("Configuration changed, refreshing data"),this.updateEvents(!0)),this.startRefreshTimer()}async updateEvents(e=!1){if(at(`Updating events (force=${e})`),this.safeHass&&this.config.entities.length){try{this.isLoading=!0,await this.updateComplete;const t=await cn(this.safeHass,this.config,this._instanceId,e);this.isLoading=!1,await this.updateComplete,this.events=[...t],this._lastUpdateTime=Date.now(),tt("Event update completed successfully")}catch(e){Xe("Failed to update events:",e),this.isLoading=!1}this._setupWeatherSubscriptions()}else this.isLoading=!1}toggleExpanded(){(this.config.compact_events_to_show||this.config.compact_days_to_show)&&(this.isExpanded=!this.isExpanded)}handleAction(e){const t=Dn(this.config.entities);Sn(e,this.safeHass,this,t,(()=>this.toggleExpanded()))}render(){const e=this.getCustomStyles(),t={keyDown:e=>this._handleKeyDown(e),pointerDown:e=>this._handlePointerDown(e),pointerUp:e=>this._handlePointerUp(e),pointerCancel:()=>this._handlePointerCancel(),pointerLeave:()=>this._handlePointerCancel()};let a;if(this.isLoading)a=qn("loading",this.effectiveLanguage);else if(this.safeHass&&this.config.entities.length)if(0===this.events.length){a=ii(hn([],this.config,this.isExpanded,this.effectiveLanguage),this.config,this.effectiveLanguage,this.weatherForecasts,this.safeHass)}else a=ii(this.groupedEvents,this.config,this.effectiveLanguage,this.weatherForecasts,this.safeHass);else a=qn("error",this.effectiveLanguage);return function(e,t,a,n,i=!1){return Q`
    <ha-card
      class="calendar-card-pro ${i?"max-height-set":""}"
      style=${Vn(e)}
      tabindex="0"
      @keydown=${n.keyDown}
      @pointerdown=${n.pointerDown}
      @pointerup=${n.pointerUp}
      @pointercancel=${n.pointerCancel}
      @pointerleave=${n.pointerLeave}
    >
      <ha-ripple></ha-ripple>

      <!-- Title is always rendered with the same structure, even if empty -->
      <div class="header-container">
        ${t?Q`<h1 class="card-header">${t}</h1>`:Q`<div class="card-header-placeholder"></div>`}
      </div>

      <!-- Content container is always present -->
      <div class="content-container">${a}</div>
    </ha-card>
  `}(e,this.config.title,a,t)}};var Si;Di.getStubConfig=ot,$i([$e({attribute:!1})],Di.prototype,"hass",2),$i([$e({attribute:!1})],Di.prototype,"config",2),$i([$e({attribute:!1})],Di.prototype,"events",2),$i([$e({attribute:!1})],Di.prototype,"isLoading",2),$i([$e({attribute:!1})],Di.prototype,"isExpanded",2),$i([$e({attribute:!1})],Di.prototype,"weatherForecasts",2),Di=$i([(Si="calendar-card-pro",(e,t)=>{void 0!==t?t.addInitializer((()=>{customElements.define(Si,e)})):customElements.define(Si,e)})],Di),customElements.define("calendar-card-pro-editor",gi);const xi=customElements.get("calendar-card-pro");xi&&(xi.getStubConfig=ot),window.customCards=window.customCards||[],window.customCards.push({type:"calendar-card-pro",name:"Calendar Card Pro",preview:!0,description: ''

