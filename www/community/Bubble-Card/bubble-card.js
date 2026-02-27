/*! For license information please see bubble-card.js.LICENSE.txt */
(()=>{"use strict";var e={134:(e,t,n)=>{n.r(t),n.d(t,{deleteFile:()=>h,deleteModuleFile:()=>C,ensureBCTProviderAvailable:()=>c,getAllModulesLastModified:()=>T,getCachedAggregatedModules:()=>E,getModuleLastModified:()=>M,isBCTAvailableSync:()=>d,isMigrationDone:()=>v,listFiles:()=>u,readAllModules:()=>w,readConfig:()=>g,readFile:()=>p,setMigrationDone:()=>y,writeConfig:()=>f,writeFile:()=>b,writeModuleYaml:()=>k});var o=n(382);const i=5e3,a=3e4,r=6e4,s={checked:!1,available:!1,lastChecked:0,retryAt:0,pendingPromise:null};function l(e){try{window.__bubble_bct_available=!!e}catch(e){}}async function c(e){const t=Date.now();if(!e){if(s.checked&&s.available&&t-s.lastChecked<r)return!0;if(s.checked&&!s.available){if(s.retryAt&&t<s.retryAt)return!1}else s.checked=!1,s.available=!1,s.retryAt=0,l(!1);return!1}if(s.pendingPromise)return s.pendingPromise;if(s.checked&&s.available&&t-s.lastChecked<3e5)return!0;if(s.checked&&!s.available){if(s.retryAt&&t<s.retryAt)return!1;s.checked=!1}else if(s.retryAt&&t<s.retryAt)return!1;return s.pendingPromise=(async()=>{try{const t=await e.callWS({type:"bubble_card_tools/list_modules"}),n=!!t&&Array.isArray(t.files);s.checked=!0,s.available=n,s.lastChecked=Date.now(),s.retryAt=n?0:Date.now()+a,l(n);const o=e?.user?.is_admin||e?.user?.is_owner;if(n&&"function"==typeof e?.connection?.subscribeEvents&&!S&&o)try{e.connection.subscribeEvents(()=>{!function(){try{localStorage.removeItem(A())}catch(e){}}();try{document.dispatchEvent(new CustomEvent("yaml-modules-updated"))}catch(e){}},"bubble_card_tools.updated"),S=!0}catch(e){}return n}catch(e){return s.checked&&s.available?(s.checked=!1,s.available=!1,s.lastChecked=Date.now(),s.retryAt=Date.now()+i,l(!1)):(s.lastChecked=Date.now(),s.retryAt=Date.now()+i),!1}finally{s.pendingPromise=null}})(),s.pendingPromise}function d(){const e=Date.now();return!!(s.checked&&s.available&&e-s.lastChecked<3e5)||!(s.checked&&!s.available&&s.retryAt&&e<s.retryAt)&&!("undefined"==typeof window||!window.__bubble_bct_available)}async function u(e){if(!await c(e))return[];try{const t=await e.callWS({type:"bubble_card_tools/list_modules"});return Array.isArray(t?.files)?t.files:[]}catch(e){return[]}}async function p(e,t){if(!await c(e))return null;try{return await e.callWS({type:"bubble_card_tools/read_module",name:t})}catch(e){return null}}async function b(e,t,n){if(!await c(e))return{status:"unavailable"};try{return await e.callWS({type:"bubble_card_tools/write_module",name:t,content:n})}catch(e){return{status:"error",error:String(e?.message||e)}}}async function h(e,t){if(!await c(e))return{status:"unavailable"};try{return await e.callWS({type:"bubble_card_tools/delete_module",name:t})}catch(e){return{status:"error",error:String(e?.message||e)}}}const m="config.yaml";async function g(e){const t=await p(e,m);if(!t||"string"!=typeof t.content)return{};try{const e=o.Ay.load(t.content)||{};return"object"==typeof e&&e?e:{}}catch(e){return{}}}async function f(e,t){try{const n=o.Ay.dump(t??{},{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0});return await b(e,m,n)}catch(e){return{status:"error",error:String(e?.message||e)}}}async function y(e,t={}){const n={...await g(e)||{},migration:{done:!0,sources:t,migrated_at:(new Date).toISOString(),version:1}};return await f(e,n)}async function v(e){const t=await g(e);return!(!t||!t.migration||!0!==t.migration.done)}function _(e,t){if(!t||"object"!=typeof t)return null;const{yaml:n,editor_raw:o,id:i,...a}=t;return{...a,id:e}}async function w(e){const t=await u(e);if(!t||0===t.length)return new Map;const n=(L()||{version:$,files:{}}).files||{},i=new Map;for(const e of t)e?.name&&/\.ya?ml$/i.test(e.name)&&e.name!==m&&i.set(e.name,e.updated_at||null);const a=[],r=[];i.forEach((e,t)=>{const o=n[t];o&&o.updated_at===e?r.push({name:t,updated_at:e,modules:o.modules||{}}):a.push({name:t,updated_at:e})});const s=a.map(async t=>{const n=await p(e,t.name);if(!n||!n.content)return{name:t.name,updated_at:t.updated_at,modules:{}};let i=null;try{i=o.Ay.load(n.content)}catch(e){i=null}const a={};if(i&&"object"==typeof i){const e=Object.keys(i);if(1===e.length){const t=e[0],n=i[t];if(n&&(n.name||n.code)){const e=_(t,n);a[t]=e}}else for(const t of e){const e=i[t];if(e&&"object"==typeof e&&(e.name||e.code)){const n=_(t,e);a[t]=n}}}return{name:t.name,updated_at:t.updated_at,modules:a}}),l=await Promise.all(s),c={};for(const e of r)c[e.name]={updated_at:e.updated_at,modules:e.modules};for(const e of l)c[e.name]={updated_at:e.updated_at,modules:e.modules};const d=new Map;Object.values(c).forEach(e=>{const t=e?.modules||{};Object.keys(t).forEach(e=>{d.set(e,t[e])})});const b={};return d.forEach((e,t)=>{b[t]=e}),function(e){try{localStorage.setItem(A(),JSON.stringify(e))}catch(e){}}({version:$,files:c,aggregatedModules:b,updatedAt:(new Date).toISOString()}),d}async function x(e){try{await w(e)}catch(e){}}async function k(e,t,n){let i="";if("string"==typeof n)i=n;else if(n&&"object"==typeof n){const e={},a={...n};delete a.id,delete a.yaml,delete a.editor_raw,Array.isArray(a.supported)&&Array.isArray(a.unsupported)&&delete a.unsupported,e[t]=a,i=o.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0})}const a=`modules/${t}.yaml`,r=await b(e,a,i);return r&&"error"===r.status||await x(e),r}async function C(e,t){const n=`modules/${t}.yaml`,o=await h(e,n);return o&&"error"===o.status||await x(e),o}const $=1;let S=!1;function A(){try{const e="undefined"!=typeof location?location.host:"default";return`bubble-card-bct-cache-v${$}:${e}`}catch(e){return`bubble-card-bct-cache-v${$}:default`}}function L(){try{const e=localStorage.getItem(A());if(!e)return null;const t=JSON.parse(e);return t&&"object"==typeof t?t:null}catch(e){return null}}function E(){const e=L(),t=e?.aggregatedModules;return t&&"object"==typeof t&&Object.keys(t).length>0?t:null}function M(e){try{const t=L();if(!t||!t.files)return null;const n=`modules/${e}.yaml`,o=t.files[n];return o&&o.updated_at?o.updated_at:null}catch(e){return null}}function T(){try{const e=L();if(!e||!e.files)return new Map;const t=new Map;return Object.keys(e.files).forEach(n=>{if(n.startsWith("modules/")&&n.endsWith(".yaml")){const o=n.replace("modules/","").replace(".yaml",""),i=e.files[n];i&&i.updated_at&&t.set(o,i.updated_at)}}),t}catch(e){return new Map}}},140:(e,t,n)=>{n.d(t,{$i:()=>r,Bz:()=>a,qd:()=>i});var o=n(716);function i(e,t=40){if(Array.isArray(e)&&3===e.length){for(let t=0;t<3;t++)if(e[t]<0||e[t]>255)return;return e.every(e=>Math.abs(e-255)<=t)}}function a(e,t,n=1){if(!e||"string"!=typeof e)return`rgba(0, 0, 0, ${t})`;let o;if(e.startsWith("#"))o=4===e.length?"rgba("+Math.min(255,parseInt(e.charAt(1).repeat(2),16)*n)+", "+Math.min(255,parseInt(e.charAt(2).repeat(2),16)*n)+", "+Math.min(255,parseInt(e.charAt(3).repeat(2),16)*n)+", "+t+")":"rgba("+Math.min(255,parseInt(e.slice(1,3),16)*n)+", "+Math.min(255,parseInt(e.slice(3,5),16)*n)+", "+Math.min(255,parseInt(e.slice(5,7),16)*n)+", "+t+")";else if(e.startsWith("rgb")){let i=e.match(/\d+/g);i&&i.length>=3&&(o="rgba("+Math.min(255,i[0]*n)+", "+Math.min(255,i[1]*n)+", "+Math.min(255,i[2]*n)+", "+t+")")}else if(e.startsWith("var(--")){let i=e.slice(4,-1),r=window.getComputedStyle(document.documentElement).getPropertyValue(i);r&&(r.startsWith("#")||r.startsWith("rgb"))&&(o=a(r,t,n))}return o??`rgba(0, 0, 0, ${t})`}function r(e=!0){const t=(0,o.qL)("var(--primary-background-color, #ffffff)");let n=(0,o.E2)(t)||(0,o.rY)(t)||[255,255,255];const i=[0,145,255].map((e,t)=>Math.round(.7*e+.3*n[t])),a=`rgb(${i[0]}, ${i[1]}, ${i[2]})`;return e&&document.documentElement.style.setProperty("--bubble-default-color",a),a}},175:(e,t,n)=>{n.d(t,{H2:()=>l,L:()=>m,NH:()=>c,Y1:()=>p,Zu:()=>h,gQ:()=>f,lc:()=>v,m_:()=>u,mg:()=>w,nu:()=>d,pZ:()=>y,rz:()=>b,uH:()=>g,zD:()=>_});var o=n(716),i=n(388),a=n(642),r=n(315);function s(e,t,n){return t.force_icon||t.icon?"":(0,i.Qp)(e,n,!0)}function l(e,t,n){const a=t.entity??e.config.entity,r=a?.startsWith("input_select")||a?.startsWith("select")||t.select_attribute,l=t.sub_button_type,c=null!=l?"select"===l:r,d=l??(r?"select":"default");return{index:n,entity:a,context:e,state:e._hass.states[a],name:t.name??(0,o.D$)(e,"friendly_name",a)??"",attributeType:t.attribute??"",attribute:(0,o.D$)(e,t.attribute??"",a),isOn:(0,o.$C)(e,a),showName:t.show_name??!1,showState:t.show_state??!1,showAttribute:t.show_attribute??!1,showLastChanged:t.show_last_changed??!1,showLastUpdated:t.show_last_updated??!1,showIcon:t.show_icon??!0,showBackground:t.show_background??!0,stateBackground:t.state_background??!0,lightBackground:t.light_background??!0,showArrow:t.show_arrow??!0,isSelect:c,icon:(0,i.sW)(e,a,t.icon??""),image:s(e,t,a),subButtonType:d,alwaysVisible:t.always_visible??!1,subButton:t}}function c(e,t,n,i){if(!t||!n)return;const a=i?.scrolling_effect??e.config?.scrolling_effect??!0,r={...e,config:{...e.config,scrolling_effect:a}};(0,o.Nl)(r,t,n)}function d(e,t,n=null){const{state:i,name:a,attribute:r,attributeType:s,showName:l,showState:u,showAttribute:p,showLastChanged:b,showLastUpdated:h,entity:m}=e,g=[];if(l&&a&&"unknown"!==a&&g.push(a),i&&u&&"unknown"!==i.state){const a=(0,o.Vw)(m);if(a){const r=(0,o.ls)(i),s=(0,o.PF)(t._hass,i,r);s&&g.push(s),n&&"active"===i.state?(0,o.df)(n,t,m,()=>{if(n.isConnected&&t._hass?.states?.[m]){const i=t._hass.states[m];if(i&&"active"===i.state){const o=d({...e,state:i},t,n);n.nameContainer&&c(t,n.nameContainer,o,e.subButton)}else(0,o.j9)(n)}else(0,o.j9)(n)}):n&&a&&(0,o.j9)(n)}else g.push(t._hass.formatEntityState(i)),n&&(0,o.j9)(n)}else n&&(0,o.j9)(n);if(i&&b&&"unknown"!==i.last_changed&&g.push((0,o.r6)(i.last_changed,t._hass.locale.language)),i&&h&&"unknown"!==i.last_updated&&g.push((0,o.r6)(i.last_updated,t._hass.locale.language)),i&&p)if(s.includes("forecast")){const e="km"===t._hass.config.unit_system.length,n=t._hass?.locale?.language||"en-US";if(s.includes("temperature")&&null!=r){const e=parseFloat(r),i=(0,o.$z)(t._hass),a=0===e||0===e?0:1;g.push((0,o.IU)(e,a,i,n))}else if(s.includes("humidity")&&null!=r)g.push((0,o.IU)(parseFloat(r),0,"%",n));else if(s.includes("precipitation")&&null!=r)g.push((0,o.IU)(parseFloat(r),1,"mm",n));else if(s.includes("wind_speed")&&null!=r){const t=e?"km/h":"mph";g.push((0,o.IU)(parseFloat(r),1,t,n))}else null!=r&&"unknown"!==r&&g.push(r)}else{const e=t._hass.formatEntityAttributeValue(i,s),n=i.attributes?.[s],o=e&&"string"==typeof e&&e.trim().startsWith("0")&&e.trim().length>1;(0!==r&&"unknown"!==r&&null!=r||o)&&"unknown"!==n&&null!=n&&g.push(e??r)}return g.length?g.join(" · ").charAt(0).toUpperCase()+g.join(" · ").slice(1):""}function u(e,t,n){const{showIcon:o,isSelect:i}=t;if(!e._hasVisibilityConditions){const t=!n&&!o&&!i;e.classList.toggle("hidden",t)}e.dropdownContainer&&(e.dropdownContainer.classList.toggle("no-icon-select-container",!n&&!o&&i),e.dropdownArrow.classList.toggle("no-icon-select-arrow",!n&&!o&&i))}function p(e,t){const{showBackground:n,isOn:a,stateBackground:r,lightBackground:s,entity:l,context:c}=t;if(!n)return(e.classList.contains("background-on")||e.classList.contains("background-off"))&&e.classList.remove("background-on","background-off"),void(e.style.getPropertyValue("--bubble-sub-button-light-background-color")&&e.style.removeProperty("--bubble-sub-button-light-background-color"));const d=(0,i.S1)(t.state,l),u=e._previousColorSignature!==d;if(e._previousColorSignature=d,a&&r){let t;if((0,o.m_)(c,l))t="var(--red-color, var(--error-color))";else{const e=c.config.card_type;if("slider"===c.config.button_type){let e=null;if(c.elements?.rangeFill)try{e=getComputedStyle(c.elements.rangeFill).backgroundColor}catch(e){}t=(0,o.C$)(c,l,s,e,null)}else{const n="button"===e?c.card?.style.getPropertyValue("--bubble-button-background-color"):c.popUp?.style.getPropertyValue("--bubble-button-background-color");t=(0,o.C$)(c,l,s,n||null)}}(e.style.getPropertyValue("--bubble-sub-button-light-background-color")!==t||u)&&e.style.setProperty("--bubble-sub-button-light-background-color",t),e.classList.contains("background-on")||(e.classList.add("background-on"),e.classList.remove("background-off"))}else e.classList.contains("background-off")||(e.classList.add("background-off"),e.classList.remove("background-on")),e.style.getPropertyValue("--bubble-sub-button-light-background-color")&&e.style.removeProperty("--bubble-sub-button-light-background-color")}function b(e,t){const{subButton:n,isSelect:i,entity:r}=t;if(("none"!==n.tap_action?.action||"none"!==n.double_tap_action?.action||"none"!==n.hold_action?.action)&&!e.actionAdded){const o={tap_action:{action:i?"none":"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}};if("slider"!==t.subButtonType||t.alwaysVisible)if(i){const t={...n,tap_action:{action:"none"}};(0,a.dN)(e,t,r),e.setAttribute("no-slide","")}else(0,a.dN)(e,n,r,o);else{const t={...n,tap_action:{action:"none"}};(0,a.dN)(e,t,r),e.setAttribute("no-slide","")}(0,a.pd)(e,e.feedback),i&&(e.style.pointerEvents="auto",e.style.cursor="pointer"),e.actionAdded=!0}if("slider"===t.subButtonType&&!t.alwaysVisible&&(e.classList.add("bubble-action"),e.style.cursor="pointer",e.style.pointerEvents="auto",!e.haRipple))try{e.haRipple=(0,o.n)("ha-ripple"),e.appendChild(e.haRipple)}catch(e){}}function h(e,t,n,o=null){const i=t.visibility,a=t=>{e?.sliderAlwaysVisible&&e.sliderWrapper&&(t?(e.sliderWrapper.style.removeProperty("display"),e.sliderWrapper.removeAttribute("aria-hidden")):(e.sliderWrapper.style.display="none",e.sliderWrapper.setAttribute("aria-hidden","true")))};if(null!=i){e._hasVisibilityConditions=!0;const t=(0,r.eC)(i);if((0,r.db)(t)){const i=(0,r.XH)(t,n);void 0!==e._previousVisibilityState&&e._previousVisibilityState===i||(e.classList.toggle("hidden",!i),e._previousVisibilityState=i,(t=>{if(!t&&e.sliderOpen&&!e.sliderAlwaysVisible&&e.sliderWrapper&&o){e.sliderWrapper.classList.add("is-hidden"),e.sliderOpen=!1,e.sliderCloseBtn&&e.sliderCloseBtn.classList.add("is-hidden");const t=e._parentGroupContainer;if(t&&t.classList&&t.classList.remove("group-slider-open"),!t&&o.elements){const e=(e,t)=>{e&&e.classList.toggle("is-hidden",t)};e(o.elements?.nameContainer,!1),e(o.elements?.iconContainer,!1),e(o.elements?.image,!1),e(o.elements?.buttonsContainer,!1),o.elements?.subButtonContainer&&(o.elements.subButtonContainer.style.opacity="",o.elements.subButtonContainer.style.pointerEvents="")}if(e._globalBlockerAdded&&e._globalBlockerHandler){try{(e._globalBlockerEvents||["pointerdown","pointerup","click","touchstart","touchend","mousedown","mouseup"]).forEach(t=>document.removeEventListener(t,e._globalBlockerHandler,!0))}catch(e){}try{delete e._globalBlockerHandler,delete e._globalBlockerEvents}catch(e){}e._globalBlockerAdded=!1}try{e._blockerPointerDownInside=!1}catch(e){}}})(i)),a(i)}else a(!0)}else e._hasVisibilityConditions=!1,a(!0)}function m(e,t,n="main",o=null){try{const i=t.width;if(t.fill_width||null==i||""===i)t.fill_width?(e.style.removeProperty("width"),e.style.removeProperty("flex")):null!=i&&""!==i||(e.style.removeProperty("width"),e.style.removeProperty("flex"));else{const t=Number(i);if(!Number.isNaN(t)&&t>0){let i="main"===n;if("bottom"===n&&o)if(o.classList.contains("alignment-start")||o.classList.contains("alignment-end")||o.classList.contains("alignment-center"))i=!0;else{const e=o.style.getPropertyValue("--bubble-sub-button-group-justify-content");if(e){const t=e.trim().toLowerCase();i=["start","end","center"].includes(t)}}const a=i?"px":"%";let r=`${t}${a}`;if("%"===a&&o&&o.classList.contains("display-inline")){const e=8,n=parseInt(o.dataset.totalButtonsWithWidth||"0",10);n>0&&(r=`calc(${t}% - ${(n-1)*e/n}px)`)}e.style.width=r,e.style.flex="0 0 auto"}else if("string"==typeof i){let t=i;if(i.includes("%")&&o&&o.classList.contains("display-inline")){const e=i.match(/(\d+(?:\.\d+)?)%/);if(e){const n=parseFloat(e[1]),i=8,a=parseInt(o.dataset.totalButtonsWithWidth||"0",10);a>0&&(t=`calc(${n}% - ${(a-1)*i/a}px)`)}}e.style.width=t,e.style.flex="0 0 auto"}}}catch(e){}}function g(e,t){try{const n=t.custom_height;if(null!=n&&""!==n){const t=Number(n);!Number.isNaN(t)&&t>0&&e.style.setProperty("--bubble-sub-button-height",`${t}px`)}else e.style.removeProperty("--bubble-sub-button-height")}catch(e){}}function f(e,t){if(!e||!e.classList)return;const n=!!t?.fill_width;e.classList.toggle("fill-width",n)}function y(e,t,n){if(t.hide_when_parent_unavailable&&n.config.entity&&!n.detectedEditor){if("unavailable"===(0,o.Gu)(n,n.config.entity))return e.style.display="none",!0;"none"===e.style.display&&(e.style.display="")}return!1}function v(e){return!!e&&!Array.isArray(e)&&(Array.isArray(e.main)||Array.isArray(e.bottom))}function _(e){if(!Array.isArray(e))return{main:[],bottom:[]};const t=[];return e.forEach(e=>{e&&t.push({...e})}),{main:t,bottom:[]}}function w(e){if(!e)return{main:[],bottom:[]};const t=e.sub_button;return v(t)?{main:Array.isArray(t.main)?[...t.main]:[],bottom:Array.isArray(t.bottom)?[...t.bottom]:[]}:_(t||[])}},241:(e,t,n)=>{function o(){try{const e=localStorage.getItem("bubble-card-module-store");if(!e)return null;const t=JSON.parse(e);if(localStorage.getItem("bubble-card-api-failure-timestamp")&&t&&t.expiration<Date.now()){console.log("🛡️ API in cooldown period after failure and cache expired, temporary extension of validity");const e=Date.now()+72e5;return t.expiration=e,localStorage.setItem("bubble-card-module-store",JSON.stringify(t)),console.log("⏳ Cache extended until",new Date(e)),t}return t&&t.expiration>Date.now()?t:t||null}catch(e){return console.error("Error reading cache:",e),null}}function i(e){if(e&&0!==Object.keys(e).length)try{const t=Date.now()+864e5;localStorage.setItem("bubble-card-module-store",JSON.stringify({modules:e,expiration:t,lastFetchedAt:Date.now()})),console.log("Module data cached until",new Date(t))}catch(e){console.error("Error saving to cache:",e)}}function a(e,t,n="info"){if(e.hass){const o=new CustomEvent("hass-notification",{detail:{message:t,severity:n},bubbles:!0,composed:!0});e.dispatchEvent(o)}else console.log(`[${n}] ${t}`)}n.d(t,{TJ:()=>o,aN:()=>i,qk:()=>a})},264:(e,t,n)=>{n.d(t,{N5:()=>d,extractYamlFromMarkdown:()=>c,oV:()=>l,tF:()=>u});var o=n(382),i=n(933),a=n(937);function r(e){if(!e||"string"!=typeof e)return null;const t=e.trim().toLowerCase().replace(/['"]/g,""),n=(0,a.n$)(),o=n.find(e=>e.id.toLowerCase()===t||e.name.toLowerCase()===t);if(o)return o.id;const i=t.replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),r=n.find(e=>e.id.replace(/-/g,"")===i.replace(/-/g,"")||e.name.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")===i);return r?r.id:t}function s(e){if(!e||"string"!=typeof e)return[];const t=[...(0,a.n$)()].sort((e,t)=>{const n=(e?.name||e?.id||"").length;return(t?.name||t?.id||"").length-n});let n=e.trim();n=n.replace(/^[\[\(\{]\s*/,"").replace(/\s*[\]\)\}]\s*$/,""),n=n.split("|")[0]||n,n=n.split("**")[0]||n;const o=[],i=(e,t)=>{if(!t)return null;const n=e.trimStart(),o=n.toLowerCase(),i=t.toLowerCase();if(!o.startsWith(i))return null;return(a=o[i.length])&&!/\s|,|;|\||\/|&|\+|\]|\)|\}/.test(a)?null:{length:e.length-n.length+i.length};var a};for(let e=0;e<10;e++){let e=null,a=null;n=n.replace(/^\s*(?:-|\*|•)\s*/g,"");for(const o of t){const t=i(n,o.name),r=i(n,o.id);if(e=t||r,e){a=o;break}}if(!e||!a)break;if(o.includes(a.id)||o.push(a.id),n=n.slice(e.length),n=n.replace(/^\s*(?:,|;|\||\/|&|\+|\band\b|\bor\b)\s*/i,""),!n.trim())break}return o}function l(e){if(!e)return null;try{const t=o.Ay.load(e);if(t&&"object"==typeof t){const e=Object.keys(t);if(e.length>0){if(t[e[0]]?.name)return e[0];for(const n of e)if(t[n]?.name)return n;return e[0]}}}catch(e){console.warn("Error during YAML parsing for key extraction:",e)}try{const t=/^([a-zA-Z0-9_-]+)(?:\s*:|:)/m,n=e.match(t);if(n&&n[1])return n[1]}catch(e){console.warn("Error during key extraction by regex:",e)}return null}function c(e,t=null){if(!e)return"";const n=[...e.matchAll(/```(?:yaml|yml)\s+([\s\S]*?)```/g)];if(n.length>0){for(const e of n){let n=e[1].trim();try{const e=o.Ay.load(n);if(e&&"object"==typeof e){const i=Object.keys(e)[0];if(e[i]?.name||e[i]?.code||e[i]?.description||e[i]?.version)return t&&"object"==typeof e[i]&&!e[i].link&&(e[i].link=t,n=o.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0})),n}}catch(e){}}let e=n[0][1].trim();if(t)try{const n=o.Ay.load(e);if(n&&"object"==typeof n){const i=Object.keys(n)[0];i&&"object"==typeof n[i]&&!n[i].link&&(n[i].link=t,e=o.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0}))}}catch(e){}return e}const i=[...e.matchAll(/```\s*([\s\S]*?)```/g)];if(i.length>0){let e="";for(const t of i){const n=t[1].trim();n.length>e.length&&(e=n)}if(t&&e)try{const n=o.Ay.load(e);if(n&&"object"==typeof n){const i=Object.keys(n)[0];i&&"object"==typeof n[i]&&!n[i].link&&(n[i].link=t,e=o.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0}))}}catch(e){}return e}return""}function d(e){return e&&Array.isArray(e)?e.filter(e=>e&&e.title).map(e=>{try{const t=e.title.match(/\[(.*?)\]/);let n=t?(0,i.TL)(t[1]):`discussion-${e.number}`,o="",a=e.html_url;if(e.body&&(o=c(e.body,a),o)){const e=l(o);e&&(n=e)}const r=u(o,n,{bodyText:e.body,title:e.title,defaultCreator:e.user?.login||""});return{id:r.id,name:r.name,description: ''
      <div class="bubble-info warning">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          Bubble Card Tools required
        </h4>
        <div class="content">
          ${e?o.qy`
            <p><b>To use the Module Store and to install/edit modules, install <code>Bubble Card Tools</code>.</b></p>
            <p>Existing modules will still be read from legacy sources for compatibility.</p>
          `:o.qy`
            <p><b>No modules detected yet.</b> To install or edit modules and use the Module Store, install <code>Bubble Card Tools</code>.</p>
          `}
        </div>
      </div>
    `}if(!e._storeModules){const t=(0,s.TJ)();if(t){e._storeModules=t.modules,e._isLoadingStore=!1;const n=Date.now(),o=n-(t.lastFetchedAt||(t.expiration?t.expiration-864e5:0))>216e5,i=t.expiration<n+36e5;(o||i)&&k(e,!0)}else e._isLoadingStore=!0,k(e)}if(e._storeAutoRefreshTimer||(e._storeAutoRefreshTimer=setInterval(()=>{k(e,!0)},216e5)),e._isLoadingStore){const t=e._loadingProgress||0,n=e._loadingStatus||"Loading modules";return o.qy`
      <div class="store-loading">
        <div class="bubble-loading-icon">
          <div class="icon-center-wrapper">
            <ha-icon icon="mdi:puzzle"></ha-icon>
          </div>
          <div class="bubble-loading-orbit">
            <div class="bubble-loading-satellite"></div>
          </div>
        </div>
        <div class="bubble-progress-container">
          <div class="bubble-progress-track">
            <div class="bubble-progress-bar" style="width: ${t}%">
              <div class="bubble-progress-glow"></div>
            </div>
          </div>
          <div class="bubble-progress-percentage">
            <span class="bubble-progress-text">${n}</span>
            <span class="bubble-progress-value">${Math.round(t)}%</span>
          </div>
        </div>
      </div>
    `}return e._storeError?o.qy`
      <div class="bubble-info error">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          Loading error
        </h4>
        <div class="content">
          <p>Could not load modules from GitHub: ${e._storeError}</p>
          <mwc-button @click=${()=>k(e)}>
            <ha-icon icon="mdi:refresh" style="margin-right: 8px;"></ha-icon>
            Retry
          </mwc-button>
        </div>
      </div>
    `:([...new Set(e._storeModules.filter(e=>e.type).map(e=>e.type.toLowerCase()))].sort(),void 0===e._zoomedImage&&(e._zoomedImage=null),e._toggleImageZoom=t=>{e._zoomedImage===t?e._zoomedImage=null:e._zoomedImage=t,e.requestUpdate()},o.qy`
    <div class="module-store">
      <div class="store-header">
        <div class="store-header-top">
          <div class="store-header-title">
            <ha-icon icon="mdi:puzzle-plus-outline"></ha-icon>
            <span>Module Store</span>
          </div>
          <div 
            class="store-refresh-button" 
            @click=${()=>{e._isApiCallInProgress=!1,k(e,!1)}}
            title="Refresh module list"
          >
            <ha-icon icon="mdi:refresh"></ha-icon>
          </div>
        </div>
        <div class="store-search">
          <ha-textfield
            label="Search for a module"
            icon
            .value=${e._storeSearchQuery||""}
            @input=${t=>{e._storeSearchQuery=t.target.value,e.requestUpdate()}}
          >
            <slot name="prefix" slot="leadingIcon">
              <ha-icon slot="prefix" icon="mdi:magnify"></ha-icon>
            </slot>
          </ha-textfield>
        </div>
        <div class="store-filters">

          <ha-formfield label="Show only modules compatible with this card">
            <ha-switch
              .checked=${e._storeShowOnlyCompatible??!0}
              @change=${t=>{e._storeShowOnlyCompatible=t.target.checked,e.requestUpdate()}}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>

      ${e._rankingInfoDismissed?"":o.qy`
        <div class="bubble-info info">
          <div class="bubble-info-header">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:information-outline"></ha-icon>
              How modules are ranked
              <div class="bubble-info-dismiss bubble-badge" @click=${e._dismissRankingInfo} title="Dismiss" 
                style="
                  display: inline-flex;
                  align-items: center;
                  position: absolute;
                  right: 16px;
                  padding: 0 8px;
                  cursor: pointer;"
              >
                <ha-icon icon="mdi:close" style="margin: 0;"></ha-icon>
                Dismiss
              </div>
            </h4>
          </div>
          <div class="content">
            <p>Due to a limitation in GitHub's API, only top-level reactions like ❤️ 👍 🚀 on the main discussion post are counted for popularity, along with other factors like recent activity, number of comments, updates...</p>
            <p><b>Click the "More info" button and show some love there if you find a module useful!</b></p>
          </div>
        </div>
      `}

      ${e._rateLimitWarning?o.qy`
        <div class="bubble-info warning">
          <div class="bubble-info-header">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:alert-outline"></ha-icon>
              API rate limit reached
              <div class="bubble-info-dismiss bubble-badge" @click=${()=>{e._rateLimitWarning=!1,h(),e.requestUpdate()}} title="Dismiss" 
                style="
                  display: inline-flex;
                  align-items: center;
                  position: absolute;
                  right: 16px;
                  padding: 0 8px;
                  cursor: pointer;"
              >
                <ha-icon icon="mdi:close" style="margin: 0;"></ha-icon>
                Dismiss
              </div>
            </h4>
          </div>
          <div class="content">
            <p>GitHub API rate limit was reached. The module list is loaded from cache. ${e._rateLimitResetTime?`Please try again in ${function(e){const t=e-Date.now();if(t<=0)return"now";const n=Math.ceil(t/6e4);if(n<60)return`${n} minute${n>1?"s":""}`;const o=Math.floor(n/60),i=n%60;return 0===i?`${o} hour${o>1?"s":""}`:`${o} hour${o>1?"s":""} and ${i} minute${i>1?"s":""}`}(e._rateLimitResetTime)}.`:"Please try again later."}</p>
          </div>
        </div>
      `:""}

      <div class="store-modules">
        ${g(e).map(t=>{const n=y(t.id),i=v(t.id),r=w(t.id,t.version),s=e._config.card_type??"";let c=!0;return c=Array.isArray(t.supportedCards)?t.supportedCards.includes(s):!t.unsupportedCards||!t.unsupportedCards.includes(s),o.qy`
            <div class="store-module-card">
              <div class="store-module-header ${c?"":"warning"}">
                <div class="bubble-section-title">
                  <ha-icon icon="mdi:puzzle"></ha-icon>
                  <h3>${t.name}</h3>
                </div>

                <div class="store-module-meta">
                  <div class="store-module-author">
                    ${t.userAvatar?o.qy`
                      <img src="${t.userAvatar}" alt="${t.creator||"Anonymous"}" class="author-avatar">
                    `:""}
                    <span>by ${t.creator||"Anonymous"}</span>
                  </div>
                  <div class="version-container">
                    ${f(t)?o.qy`<span class="bubble-badge new-badge"><ha-icon icon="mdi:bell-outline"></ha-icon> New</span>`:""}
                    ${c?"":o.qy`<span class="bubble-badge incompatible-badge">Incompatible</span>`}
                    ${r?o.qy`<span class="bubble-badge update-badge">Update available</span>`:""}
                    ${i?o.qy`<span class="bubble-badge yaml-badge">YAML</span>`:""}
                    <span class="bubble-badge version-badge">${t.version||""}</span>
                  </div>
                </div>

                <div class="store-module-badges bubble-badges">
                </div>
              </div>

              <div class="store-module-content">
                <div class="store-module-description">
                  ${t.description?o.qy`
                    <p class="module-description" .innerHTML=${(0,a.bx)(t.description)}></p>
                  `:o.qy`
                    <p><em>No description</em></p>
                  `}
                  ${t.imageUrl?o.qy`
                    <div class="module-preview-container">
                      <img src="${t.imageUrl}" alt="${t.name}" class="module-preview-image">
                      <div class="module-preview-zoom-btn" @click=${n=>{n.stopPropagation(),e._toggleImageZoom(t.imageUrl)}}>
                        <ha-icon icon="mdi:magnify"></ha-icon>
                      </div>
                    </div>
                  `:""}
                </div>

                <div class="store-module-actions bubble-badges">
                  ${n?o.qy`
                      ${r?o.qy`
                          ${x(t)?o.qy`
                              <a 
                                href="${t.moduleLink}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="bubble-badge update-button hoverable"
                                style="cursor: pointer;"
                              >
                                <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                                <span>Update (Manual install)</span>
                              </a>
                            `:o.qy`
                              <div 
                                @click=${()=>(0,l.G)(e,t)}
                                class="bubble-badge update-button hoverable"
                                style="cursor: pointer;"
                              >
                                <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                                <span>Update</span>
                              </div>
                            `}
                        `:o.qy`
                          <div class="bubble-badge installed-button">
                            <ha-icon icon="mdi:check"></ha-icon>
                            <span>${i?"Installed via YAML":"Installed"}</span>
                          </div>
                        `}
                    `:o.qy`
                      ${x(t)?o.qy`
                          <a
                            href="${t.moduleLink}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="bubble-badge install-button hoverable"
                            style="cursor: pointer;"
                          >
                            <ha-icon icon="mdi:github"></ha-icon>
                            <span>Manual install</span>
                          </a>
                        `:o.qy`
                          <div
                            @click=${()=>(0,l.G)(e,t)}
                            class="bubble-badge install-button hoverable"
                            style="cursor: pointer;"
                          >
                            <ha-icon icon="mdi:download"></ha-icon>
                            <span>Install</span>
                          </div>
                        `}
                    `}
                  <a
                    href="${t.moduleLink}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bubble-badge link-button"
                  >
                    <ha-icon icon="mdi:github"></ha-icon>
                    More info / Issue report
                  </a>
                </div>
              </div>
            </div>
          `})}
      </div>

      ${0===g(e).length?o.qy`
        <div class="bubble-info">
          <h4 class="bubble-section-title">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            No modules found
          </h4>
          <div class="content">
            <p>No modules match your search criteria. Try modifying your search or filters.</p>
          </div>
        </div>
      `:""}
      
      <div class="back-to-top-button" @click=${()=>(0,a.XY)(e)}>
        <ha-icon icon="mdi:arrow-up"></ha-icon>
      </div>
    </div>

    ${e._zoomedImage?o.qy`
      <div class="module-preview-fullscreen" @click=${()=>e._toggleImageZoom(null)}>
        <img src="${e._zoomedImage}" alt="Fullscreen preview">
      </div>
    `:""}
  `)}function g(e){if(!e._storeModules)return[];let t=[...e._storeModules];const n=new Map([["smart_icons"]]);if(t=t.filter(e=>{const t=e&&e.id;return!t||!n.has(t)||y(t)}),e._storeSearchQuery){const n=e._storeSearchQuery.toLowerCase();t=t.filter(e=>e.name&&e.name.toLowerCase().includes(n)||e.description&&e.description.toLowerCase().includes(n)||e.creator&&e.creator.toLowerCase().includes(n)||e.type&&e.type.toLowerCase().includes(n))}if(e._storeShowOnlyCompatible){const n=e._config.card_type??"";t=t.filter(e=>e.supportedCards&&Array.isArray(e.supportedCards)?e.supportedCards.includes(n):!e.unsupportedCards||!e.unsupportedCards.includes(n))}return e._storeSelectedType&&"all"!==e._storeSelectedType&&(t=t.filter(t=>t.type&&t.type.toLowerCase()===e._storeSelectedType.toLowerCase())),t=(o=t)&&Array.isArray(o)?o.map(e=>{let t=0,n=!1,o=!1;if(e.comments&&(t+=Math.min(e.comments,8),n=!0),e.reactions?.total_count&&(t+=5*e.reactions.total_count,n=!0),e.reactions?.heart&&(t+=10*e.reactions.total_count,n=!0),e.createdAt){const n=new Date(e.createdAt),i=(new Date-n)/864e5;i<=7?(t+=30,o=!0):i<=30?(t+=15,o=!0):i<=90&&(t+=5)}if(e.updated_at){const n=new Date(e.updated_at),i=(new Date-n)/864e5;i<=7?(t+=25,o=!0):i<=30?(t+=15,o=!0):i<=90&&(t+=8)}return n||o||(t-=30),n&&o&&(t+=20),"Clooos"===e.creator&&(t+=100),f(e)&&(t+=1e4),{...e,relevanceScore:t}}).sort((e,t)=>t.relevanceScore-e.relevanceScore):[],t;var o}function f(e){if(!e.createdAt)return!1;const t=new Date(e.createdAt);return(new Date-t)/864e5<=14}function y(e){return i.Ki.has(e)}function v(e){if(!y(e))return!1;if(i.sq.has(e))return"yaml"===i.sq.get(e);try{return!JSON.parse(localStorage.getItem("bubble-card-modules")||"{}")[e]}catch(e){return console.warn("Error checking module installation source:",e),!1}}function _(){const e=Array.from(i.Ki.keys()),t=[];let n=0;const o=(0,s.TJ)();return o&&o.modules&&o.modules.length?(e.forEach(e=>{const a=o.modules.find(t=>t.id===e);a&&w(e,a.version)&&(n++,t.push({id:e,name:a.name||i.Ki.get(e).name||e,currentVersion:i.Ki.get(e).version||"0",newVersion:a.version}))}),{hasUpdates:n>0,updateCount:n,modules:t}):{hasUpdates:!1,updateCount:0,modules:[]}}function w(e,t){if(!y(e)||!t)return!1;const n=(i.Ki.get(e)||{}).version||"0";return(0,a._O)(t,n)>0}function x(e){if(!e||!e.yamlContent)return!0;const t=e.yamlContent.trim();if(!t)return!0;try{const e=c.Ay.load(t);if(!e||"object"!=typeof e)return!0;const n=Object.keys(e);if(n.length>1){let t=0;for(const o of n){const n=e[o];n&&"object"==typeof n&&(n.name||n.code)&&t++}if(t>1)return!0}if(1===n.length){const t=e[n[0]];if(t&&"object"==typeof t){const e=Object.keys(t);let n=0;for(const o of e){const e=t[o];e&&"object"==typeof e&&(e.name||e.code)&&n++}if(n>1)return!0}}if(1===n.length){const t=e[n[0]];if(!t||"object"!=typeof t)return!0;if(!t.name||!t.code)return!0}}catch(e){return console.warn("Error checking module YAML compatibility:",e),!0}return!1}async function k(e,t=!1){if(e._isApiCallInProgress)return;e._isApiCallInProgress=!0;const n=!t&&void 0!==e._storeModules;if(!t){e._isLoadingStore=!0,e._storeError=null,e._loadingProgress=5,e._loadingStatus="Connecting to GitHub",e.requestUpdate();let t=setInterval(()=>{if(!e._isLoadingStore)return void clearInterval(t);const n=e._loadingProgress||0;let o=0;n<40?o=2.5*Math.random():n<60?o=1.5*Math.random():n<75?o=.8*Math.random():n<90&&(o=.3*Math.random()),n<90&&(e._loadingProgress=n+o,e.requestUpdate())},200);e._progressInterval=t}try{if(!n){const n=localStorage.getItem("bubble-card-api-failure-timestamp");if(n){const o=parseInt(n),i=18e5;if(Date.now()-o<i){const n=(0,s.TJ)();return n&&!e._storeModules&&(e._storeModules=n.modules,e._isLoadingStore=!1,e.requestUpdate()),t||(e._loadingStatus="Loading from cache",e._loadingProgress=100,e.requestUpdate(),e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null)),void(e._isApiCallInProgress=!1)}localStorage.removeItem("bubble-card-api-failure-timestamp")}}let o=[],i=1,a=!0,l=!1;for(t||(e._loadingStatus="Downloading module data",e._loadingProgress=Math.max(e._loadingProgress,50),e.requestUpdate());a;){let n,r=0;const s=2;for(;r<=s;)try{if(n=await fetch(`https://api.github.com/repos/Clooos/Bubble-Card/discussions?per_page=100&page=${i}`,{method:"GET",headers:{Accept:"application/vnd.github.v3+json","X-GitHub-Api-Version":"2022-11-28"}}),n.ok||n.status>=400&&n.status<500)break;if(!(r<s))break;console.warn(`⚠️ Server error ${n.status} on page ${i}, retrying in ${500*(r+1)}ms...`),await new Promise(e=>setTimeout(e,500*(r+1))),r++}catch(e){if(!(r<s)){if(console.warn(`⚠️ Network error on page ${i} after ${s} retries:`,e.message),o.length>0){console.warn(`Using ${o.length} discussions from previous pages`),l=!0,a=!1,n=null;break}throw e}console.warn(`⚠️ Network error on page ${i}, retrying in ${500*(r+1)}ms...`),await new Promise(e=>setTimeout(e,500*(r+1))),r++}if(!n)continue;if(t||(e._loadingStatus=`Processing page ${i}`,e._loadingProgress=Math.max(e._loadingProgress,Math.min(50+5*i,80)),e.requestUpdate()),!n.ok){const t=n.headers.get("x-ratelimit-remaining"),r=n.headers.get("x-ratelimit-reset"),s=null!==t?Number(t):null,c=r?1e3*parseInt(r,10):null;if(403===n.status&&0===s&&(c&&(e._rateLimitResetTime=c),e._rateLimitWarning=!0,b(e._rateLimitResetTime)),o.length>0&&n.status>=500){console.warn(`⚠️ Server error on page ${i}, using ${o.length} discussions from previous pages`),l=!0,a=!1;continue}throw localStorage.setItem("bubble-card-api-failure-timestamp",Date.now().toString()),new Error(`REST API Error: ${n.status}`)}const c=await n.json();0===c.length?a=!1:(o=[...o,...c],i++,a&&await new Promise(e=>setTimeout(e,1e3)));const d=n.headers.get("x-ratelimit-remaining"),u=n.headers.get("x-ratelimit-reset");d<=5&&(console.warn("⚠️ API limit approaching, stopping pagination"),l=!0,a=!1,u&&(e._rateLimitResetTime=1e3*parseInt(u)))}t||(e._loadingStatus="Filtering modules",e._loadingProgress=Math.max(e._loadingProgress,85),e.requestUpdate());const c=o.filter(e=>{const t=e.category?.name;return"Share your Modules"===t}),d=(0,r.N5)(c),u=(0,s.TJ)(),p=d.length>0;if(l&&u&&u.modules&&u.modules.length>d.length)return console.warn("⚠️ Rate limit reached with incomplete data, preserving existing cache"),e._rateLimitWarning=!0,b(e._rateLimitResetTime),t||(e._loadingStatus="Rate limit reached - Using cached data",e._loadingProgress=Math.max(e._loadingProgress,95),e.requestUpdate()),await new Promise(e=>setTimeout(e,300)),t||(e._loadingProgress=100,e._loadingStatus="Loaded from cache (API limit reached)",e.requestUpdate()),e._storeModules=u.modules,e._isLoadingStore=!1,e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null),void e.requestUpdate();e._rateLimitWarning=!1,h(),t||(e._loadingStatus="Saving to cache",e._loadingProgress=Math.max(e._loadingProgress,95),e.requestUpdate()),p&&(0,s.aN)(d),t||(await new Promise(e=>setTimeout(e,300)),e._loadingProgress=100,e._loadingStatus="Complete",e.requestUpdate()),t&&e._storeModules||(e._storeModules=p?d:u?.modules||[],e._isLoadingStore=!1,e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null),e.requestUpdate()),t&&e._storeModules&&p&&(e._storeModules=d,e.requestUpdate())}catch(n){if(console.error("Error loading modules:",n),!t){e._loadingStatus="Error - Loading from cache",e._loadingProgress=Math.max(e._loadingProgress,85),e.requestUpdate();const t=(0,s.TJ)();t?(await new Promise(e=>setTimeout(e,300)),e._storeModules=t.modules,e._isLoadingStore=!1,e._loadingProgress=100,e._loadingStatus="Loaded from cache",e.requestUpdate()):(e._storeError=n.message,e._isLoadingStore=!1,e.requestUpdate()),e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null)}}finally{e._isApiCallInProgress=!1,t||e.requestUpdate()}}},772:(e,t,n)=>{n.d(t,{Kr:()=>w,AQ:()=>_});var o=n(716),i=n(391),a=n(653),r=n(175),s=n(388),l=n(752),c=n(531);var d=n(345),u=n(459);function p(e,t){const n=!(!t.alwaysVisible||!t.subButton?.show_button_info);return{entity:t.entity,...void 0!==t.subButton?.min_value?{min_value:t.subButton.min_value}:{},...void 0!==t.subButton?.max_value?{max_value:t.subButton.max_value}:{},...void 0!==t.subButton?.step?{step:t.subButton.step}:{},...void 0!==t.subButton?.tap_to_slide?{tap_to_slide:t.subButton.tap_to_slide}:{},...void 0!==t.subButton?.relative_slide?{relative_slide:t.subButton.relative_slide}:{},...void 0!==t.subButton?.read_only_slider?{read_only_slider:t.subButton.read_only_slider}:{},...void 0!==t.subButton?.slider_live_update?{slider_live_update:t.subButton.slider_live_update}:{},...void 0!==t.subButton?.invert_slider_value?{invert_slider_value:t.subButton.invert_slider_value}:{},...void 0!==t.subButton?.slider_fill_orientation?{slider_fill_orientation:t.subButton.slider_fill_orientation}:{},slider_value_position:n?"right":t.subButton?.slider_value_position??"right",...void 0!==t.subButton?.use_accent_color?{use_accent_color:t.subButton.use_accent_color}:{},...void 0!==t.subButton?.allow_light_slider_to_0?{allow_light_slider_to_0:t.subButton.allow_light_slider_to_0}:{},...void 0!==t.subButton?.light_transition?{light_transition:t.subButton.light_transition}:{},...void 0!==t.subButton?.light_transition_time?{light_transition_time:t.subButton.light_transition_time}:{},...void 0!==t.subButton?.light_slider_type?{light_slider_type:t.subButton.light_slider_type}:{},...void 0!==t.subButton?.hue_force_saturation?{hue_force_saturation:t.subButton.hue_force_saturation}:{},...void 0!==t.subButton?.hue_force_saturation_value?{hue_force_saturation_value:t.subButton.hue_force_saturation_value}:{}}}function b(e,t){try{const n="function"==typeof t.composedPath?t.composedPath():[];return!(!Array.isArray(n)||0===n.length)&&(n.includes(e.sliderWrapper)||n.includes(e.sliderContainer)||n.includes(e.sliderCloseBtn))}catch(e){return!1}}function h(e){if(e&&e._globalBlockerAdded&&e._globalBlockerHandler){try{(e._globalBlockerEvents||["pointerdown","pointerup","click","touchstart","touchend","mousedown","mouseup"]).forEach(t=>document.removeEventListener(t,e._globalBlockerHandler,!0))}catch(e){}try{delete e._globalBlockerHandler,delete e._globalBlockerEvents}catch(e){}e._globalBlockerAdded=!1}}function m(e,t){e&&(e.sliderAlwaysVisible||e.sliderCloseBtn&&e.sliderCloseBtn.classList.toggle("is-hidden",!t))}function g(e,t){const n=e=>{e&&e.classList.toggle("is-hidden",t)};n(e.elements?.nameContainer),n(e.elements?.iconContainer),n(e.elements?.image),n(e.elements?.buttonsContainer),e.elements?.subButtonContainer&&(e.elements.subButtonContainer.style.opacity=t?"0":"",e.elements.subButtonContainer.style.pointerEvents=t?"none":"")}function f(e,t){if(!t.sliderWrapper)return;t.sliderWrapper.classList.add("is-hidden");const n=t._parentGroupContainer;n&&n.classList?n.classList.remove("group-slider-open"):(function(e){g(e,!1)}(e),function(e){if(e.elements&&e.elements.cardWrapper){try{e.elements.cardWrapper.style.removeProperty("--bubble-sub-slider-left-offset")}catch(e){}try{e.elements.cardWrapper.style.removeProperty("--bubble-sub-slider-width")}catch(e){}}}(e)),t.sliderOpen=!1,m(t,!1),h(t);try{t._blockerPointerDownInside=!1}catch(e){}}function y(e,t,n){if(!t.sliderWrapper){const n=(0,o.n)("div","bubble-sub-slider-wrapper is-hidden");(e.elements.cardWrapper||e.elements.mainContainer||e.content).appendChild(n),t.sliderWrapper=n;const i=(0,o.n)("div","bubble-sub-button-slider");n.appendChild(i),t.sliderContainer=i;const a=(0,o.n)("div","bubble-sub-slider-close"),r=(0,o.n)("ha-icon");r.setAttribute("icon","mdi:close");try{a.haRipple=(0,o.n)("ha-ripple"),a.appendChild(a.haRipple)}catch(e){}a.appendChild(r),n.appendChild(a),t.sliderCloseBtn=a}const a=["pointerdown","pointermove","touchstart","touchmove","mousedown","mousemove","click"];if(!t._stopPropAdded&&t.sliderContainer){const e=e=>e.stopPropagation();a.forEach(n=>{t.sliderContainer.addEventListener(n,e,{passive:!1})}),t._stopPropAdded=!0,t._stopPropHandler=e}if(t.sliderContext)t.sliderContext.config=p(0,n);else{const o={_hass:e._hass,config:p(0,n),elements:{mainContainer:t.sliderContainer,cardWrapper:e.elements.cardWrapper||e.elements.mainContainer||e.content},content:e.content,card:e.card};(0,d.H)(o,{targetElement:t.sliderContainer,sliderLiveUpdate:!!n.subButton?.slider_live_update,withValueDisplay:!0,persistentValueDisplay:!0,holdToSlide:!0,readOnlySlider:!!n.subButton?.read_only_slider}),t.sliderContext=o}if(n.alwaysVisible){t.sliderAlwaysVisible=!0;const i=n.groupContainer||e.elements.subButtonContainer;if(t.sliderWrapper.parentNode!==i){try{t.sliderWrapper.parentNode?.removeChild(t.sliderWrapper)}catch(e){}i.appendChild(t.sliderWrapper)}t.sliderWrapper.classList.add("inline"),t.sliderContainer.classList.add("inline");const a=!!n.subButton?.show_button_info;if(t.sliderContext?.elements?.rangeValue){t.sliderInfoWrapper||(t.sliderInfoWrapper=(0,o.n)("div","bubble-sub-button-info-wrapper"),t.sliderContainer.insertBefore(t.sliderInfoWrapper,t.sliderContainer.firstChild));const e=t.sliderContext.elements.rangeValue;e&&e.parentNode!==t.sliderInfoWrapper&&(t.sliderInfoWrapper.appendChild(e),e.classList.add("in-info-wrapper")),t.sliderContainer.classList.add("has-info-wrapper"),t.sliderWrapper.classList.add("has-info-wrapper"),a?(t.nameContainer&&t.nameContainer.parentNode!==t.sliderInfoWrapper&&t.sliderInfoWrapper.appendChild(t.nameContainer),t.sliderContainer.classList.add("with-button-info"),t.sliderWrapper.classList.add("with-button-info")):(t.nameContainer&&t.nameContainer.parentNode===t.sliderInfoWrapper&&t.appendChild(t.nameContainer),t.sliderContainer.classList.remove("with-button-info"),t.sliderWrapper.classList.remove("with-button-info"))}n.subButton?.fill_width?(t.sliderWrapper.classList.add("fill-width"),t.sliderContainer.classList.add("fill-width")):(t.sliderWrapper.classList.remove("fill-width"),t.sliderContainer.classList.remove("fill-width"));try{const e=n.subButton?.width;if(n.subButton?.fill_width||null==e||""===e)n.subButton?.fill_width?(t.sliderWrapper.style.removeProperty("width"),t.sliderWrapper.classList.remove("has-custom-width"),t.sliderContainer&&(t.sliderContainer.classList.remove("has-custom-width"),t.sliderContainer.style.removeProperty("--slider-container-min-width"))):null!=e&&""!==e||(t.sliderWrapper.style.removeProperty("width"),t.sliderWrapper.classList.remove("has-custom-width"),t.sliderContainer&&(t.sliderContainer.classList.remove("has-custom-width"),t.sliderContainer.style.removeProperty("--slider-container-min-width")));else{const o=Number(e);if(!Number.isNaN(o)&&o>0){const e="main"===n.section?"px":"%";t.sliderWrapper.style.setProperty("width",`${o}${e}`),t.sliderWrapper.classList.add("has-custom-width"),t.sliderContainer&&(t.sliderContainer.classList.add("has-custom-width"),"main"===n.section&&(o<96?t.sliderContainer.style.setProperty("--slider-container-min-width",`${o}px`):t.sliderContainer.style.removeProperty("--slider-container-min-width")))}else"string"==typeof e&&(t.sliderWrapper.style.setProperty("width",e),t.sliderWrapper.classList.add("has-custom-width"),t.sliderContainer&&t.sliderContainer.classList.add("has-custom-width"))}}catch(e){}try{const e=n.subButton?.custom_height;if(null!=e&&""!==e){const n=Number(e);!Number.isNaN(n)&&n>0&&(t.sliderWrapper.style.setProperty("--bubble-sub-slider-height",`${n}px`),t.sliderWrapper.style.setProperty("height",`${n}px`),t.sliderContainer&&t.sliderContainer.style.setProperty("height",`${n}px`))}else t.sliderWrapper.style.removeProperty("--bubble-sub-slider-height"),t.sliderWrapper.style.removeProperty("height"),t.sliderContainer&&t.sliderContainer.style.removeProperty("height")}catch(e){}t.sliderWrapper.classList.remove("is-hidden"),t.classList.add("inline-slider-host"),t.sliderOpen=!0;try{t.classList.remove("bubble-action","bubble-action-enabled")}catch(e){}if(t.haRipple){try{t.removeChild(t.haRipple)}catch(e){}try{delete t.haRipple}catch(e){}}if(t.sliderCloseBtn&&(t.sliderCloseBtn.style.display="none"),t._outsideClickListenerAdded&&t._outsideClickHandler){try{document.removeEventListener("click",t._outsideClickHandler,!1)}catch(e){}try{delete t._outsideClickHandler}catch(e){}t._outsideClickListenerAdded=!1}h(t)}else{if(t.sliderAlwaysVisible=!1,t.setAttribute("no-slide",""),t.classList.remove("inline-slider-host"),!t.sliderToggleAdded){if(t.addEventListener("click",n=>{n.stopPropagation(),t.sliderOpen?f(e,t):function(e,t){if(!t.sliderWrapper)return;const n=t._parentGroupContainer;n&&n.classList?n.classList.add("group-slider-open"):g(e,!0),t.sliderWrapper.classList.remove("is-hidden"),t.sliderOpen=!0,m(t,!0),function(e,t){if(!t||t._globalBlockerAdded)return;const n=n=>{if(!t.sliderOpen||t.sliderAlwaysVisible)return;const o=n.target,i=function(e,t){return e.sliderWrapper&&e.sliderWrapper.contains(t)||e.sliderContainer&&e.sliderContainer.contains(t)||e.sliderCloseBtn&&e.sliderCloseBtn.contains(t)}(t,o)||b(t,n),a=n.type;if("pointerdown"!==a&&"touchstart"!==a&&"mousedown"!==a){if("pointerup"===a||"touchend"===a||"mouseup"===a||"click"===a){const o=!0===t._blockerPointerDownInside,a=!(!t.sliderContext||!t.sliderContext.dragging);if(i||o||a)return;try{n.preventDefault()}catch(e){}n.stopPropagation();try{n.stopImmediatePropagation()}catch(e){}return void f(e,t)}}else if(t._blockerPointerDownInside=!!i,!i){try{n.preventDefault()}catch(e){}n.stopPropagation();try{n.stopImmediatePropagation()}catch(e){}}},o=["pointerdown","pointerup","click","touchstart","touchend","mousedown","mouseup"];o.forEach(e=>document.addEventListener(e,n,!0)),t._globalBlockerAdded=!0,t._globalBlockerHandler=n,t._globalBlockerEvents=o}(e,t)}(e,t)}),t.sliderCloseBtn){const n=n=>{n.preventDefault(),n.stopPropagation();try{n.stopImmediatePropagation()}catch(e){}f(e,t)};try{t.sliderCloseBtn.removeEventListener("click",t._closeHandler),t.sliderCloseBtn.removeEventListener("touchend",t._closeHandler)}catch(e){}t.sliderCloseBtn.addEventListener("click",n),t.sliderCloseBtn.addEventListener("touchend",n),t.sliderCloseBtn.addEventListener("touchstart",e=>{e.preventDefault(),e.stopPropagation()},{passive:!1}),t._closeHandler=n}t.sliderToggleAdded=!0}const o=!!n.overlayAtCardLevel,i=e.elements.cardWrapper||e.elements.mainContainer||e.content,a=o?i:n.groupContainer||i;if(t.sliderWrapper.parentNode!==a){try{t.sliderWrapper.parentNode?.removeChild(t.sliderWrapper)}catch(e){}a.appendChild(t.sliderWrapper)}t.sliderWrapper.classList.remove("inline"),t.sliderContainer.classList.remove("inline"),t.sliderWrapper.classList.remove("fill-width"),t.sliderContainer.classList.remove("fill-width");try{t._parentGroupContainer=o?null:n.groupContainer||null}catch(e){}}if(n.alwaysVisible){if(t._outsideClickListenerAdded&&t._outsideClickHandler){try{document.removeEventListener("click",t._outsideClickHandler,!1)}catch(e){}try{delete t._outsideClickHandler}catch(e){}t._outsideClickListenerAdded=!1}}else if(!t._outsideClickListenerAdded){const n=n=>{if(!t.sliderOpen||t.sliderAlwaysVisible)return;const o=n.target,i=t.sliderContainer&&t.sliderContainer.contains(o)||b(t,n),a=!0===t._blockerPointerDownInside,r=!(!t.sliderContext||!t.sliderContext.dragging);i||t.contains&&t.contains(o)||a||r||f(e,t)};document.addEventListener("click",n,{passive:!0}),t._outsideClickListenerAdded=!0,t._outsideClickHandler=n}try{t.sliderCloseBtn&&(n.overlayAtCardLevel?t.sliderCloseBtn.classList.add("top-aligned"):t.sliderCloseBtn.classList.remove("top-aligned")),t.sliderWrapper&&(n.overlayAtCardLevel?t.sliderWrapper.classList.add("top-aligned"):t.sliderWrapper.classList.remove("top-aligned"))}catch(e){}!function(e,t){if(!e||!t)return;const n=null!=t.index?String(t.index).replace(/_/g,"-"):null,o=e.dataset?.sliderIndexClass;if(n){const t=`bubble-sub-button-slider-${n}`;o&&o!==t&&e.classList.remove(o),e.classList.add(t),e.dataset.sliderIndexClass=t}else o&&(e.classList.remove(o),delete e.dataset.sliderIndexClass);const a=(0,i.mp)(t.subButton?.name),r=e.dataset?.sliderNameClass;r&&r!==a&&e.classList.remove(r),a?(e.classList.add(a),e.dataset.sliderNameClass=a):r&&delete e.dataset.sliderNameClass}(t.sliderContainer,n)}function v(e,t,n){(0,r.gQ)(t,n.subButton),(0,r.L)(t,n.subButton,n.section||"main",n.groupContainer||null),(0,r.uH)(t,n.subButton),"slider"===n.subButtonType?function(e,t,n){const o=(0,r.nu)(n,e,t);(0,r.Y1)(t,n);const i=t._previousDisplayedState,a=t._previousState,l=n.state?.state,c=i!==o,d=a!==l;t._previousDisplayedState=o,t._previousState=l,(c||d||void 0===i)&&((0,r.rz)(t,n),(0,r.m_)(t,n,o),t.nameContainer&&(0,r.NH)(e,t.nameContainer,o,n.subButton));const p=n.subButton?.light_slider_type??n.light_slider_type;let b;if(b="hue"===p?n.subButton?.icon||"mdi:palette":"saturation"===p?n.subButton?.icon||"mdi:contrast-circle":"white_temp"===p?n.subButton?.icon||"mdi:thermometer":n.icon,n.showIcon&&b){let e=t.icon;if(e||(e=document.createElement("ha-icon"),e.classList.add("bubble-sub-button-icon"),e.classList.add("show-icon"),t.appendChild(e),t.icon=e),e.icon!==b){e.setAttribute("icon",b);try{e.icon=b}catch(e){}}(0,s.jA)(e,o)}else t.icon&&(t.icon.classList.remove("show-icon"),t.icon.classList.add("hidden"));if(t.icon?.getAttribute("icon")!==t.icon?.icon)try{t.icon.icon=t.icon.getAttribute("icon")}catch(e){}y(e,t,n);const h=!(!n.alwaysVisible||!n.subButton?.show_button_info);h&&t.icon&&t.sliderInfoWrapper?t.icon.parentNode!==t.sliderInfoWrapper&&t.sliderInfoWrapper.appendChild(t.icon):t.icon&&!h&&t.icon.parentNode!==t&&t.appendChild(t.icon),t.sliderContext&&(t.sliderContext._hass=e._hass,(0,u.VM)(t.sliderContext))}(e,t,n):"select"===n.subButtonType||!n.subButton?.sub_button_type&&n.isSelect?function(e,t,n){const{isSelect:o,showArrow:i,entity:a,subButton:d}=n;o&&t.dropdownSelect&&(function(e,t,n){const o=e._hass.states[n]?.state,i=e.previousValues[n]?.state;o!==i&&(o&&t.dropdownSelect&&t.dropdownSelect.value!==o&&(t.dropdownSelect.value=o,t.dropdownSelect.dispatchEvent(new Event("change",{bubbles:!0}))),e.previousValues[n]={state:o})}(e,t,a),(0,l.O)(e,t,a,d),function(e,t){e.style.removeProperty("padding"),t?(e.dropdownArrow.style.display="",e.dropdownContainer.style.width="24px"):(e.dropdownArrow.style.display="none",e.dropdownContainer.style.width="0px")}(t,i));const u=(0,r.nu)(n,e,t);(0,r.Y1)(t,n);const p=t._previousDisplayedState,b=t._previousState,h=n.state?.state,m=p!==u,g=b!==h;t._previousDisplayedState=u,t._previousState=h,(m||g||void 0===p)&&((0,r.rz)(t,n),(0,r.m_)(t,n,u),t.nameContainer&&(0,r.NH)(e,t.nameContainer,u,n.subButton));const f=!(!o||!t.dropdownSelect)&&Array.from(t.dropdownSelect.children).find(e=>e.hasAttribute("selected"))?.value,y=t._prevSelectedOption,v=t._prevConfigIcon,_=y!==f,w=v!==n.icon;t._prevSelectedOption=f,t._prevConfigIcon=n.icon,(0,s.DK)(t,n,u,{beforeIconUpdate:(n,o)=>{if(_||w||void 0===y)if(f){const i=(0,c.z_)(e,o.state,o.subButton.select_attribute,f);if(i&&!o.subButton.icon)return n.tagName!==i.tagName||n.icon!==i.icon||n.getAttribute?.("attribute")!==i.getAttribute?.("attribute")||n.getAttribute?.("attributeValue")!==i.getAttribute?.("attributeValue")?(t.replaceChild(i,n),t.icon=i,i):n;n.icon!==o.icon&&n.setAttribute("icon",o.icon)}else n.icon!==o.icon&&n.setAttribute("icon",o.icon);return n}}),t.icon?.getAttribute("icon")!==t.icon?.icon&&t.icon.setAttribute("icon",t.icon.icon)}(e,t,n):function(e,t,n){const o=(0,r.nu)(n,e,t);(0,r.Y1)(t,n);const i=t._previousDisplayedState,a=t._previousState,l=n.state?.state,c=i!==o,d=a!==l;t._previousDisplayedState=o,t._previousState=l,(c||d||void 0===i)&&((0,r.rz)(t,n),(0,r.m_)(t,n,o),t.nameContainer&&(0,r.NH)(e,t.nameContainer,o,n.subButton)),(0,s.DK)(t,n,o),t.icon?.getAttribute("icon")!==t.icon?.icon&&t.icon.setAttribute("icon",t.icon.icon)}(e,t,n)}function _(e){const t=(0,r.mg)(e.config),n=Array.isArray(t.main)?t.main:[],o=Array.isArray(t.bottom)?t.bottom:[],i=[];return n.filter(e=>e&&!Array.isArray(e.group)).forEach(t=>{const n=t.entity??e.config.entity,o=e._hass.states[n];i.push(o?.state??"unknown")}),[...n.filter(e=>e&&Array.isArray(e.group)).map(e=>e.group),...o.filter(e=>e&&Array.isArray(e.group)).map(e=>e.group)].forEach(t=>{t.forEach(t=>{if(t){const n=t.entity??e.config.entity,o=e._hass.states[n];i.push(o?.state??"unknown")}})}),i}function w(e,t=e.config.sub_button){!function(e){e.elements&&Object.keys(e.elements).forEach(t=>{const n=e.elements[t];n&&n.sliderContext&&n.sliderContext.config&&(n.sliderContext._hass=e._hass,(0,u.VM)(n.sliderContext))}),e.elements&&e.elements.groups&&Object.values(e.elements.groups).forEach(t=>{t.buttons&&Object.values(t.buttons).forEach(t=>{t&&t.sliderContext&&t.sliderContext.config&&(t.sliderContext._hass=e._hass,(0,u.VM)(t.sliderContext))})})}(e),function(e,t){if(!t)return;let n;n=Array.isArray(t)?{main:t,bottom:[]}:(0,r.lc)(t)?t:(0,r.zD)(t||[]),e.previousValues=e.previousValues||{},(Array.isArray(n.main)?n.main:[]).filter(e=>e&&!Array.isArray(e.group)),e.previousValues.mainSubButtons;const s=Array.isArray(n.bottom)?n.bottom:[],l=e.config?.sub_button?.main_layout??"inline",c=(Array.isArray(n.main)?n.main:[]).some(e=>e&&Array.isArray(e.group)&&e.group.length>0),d=s.some(e=>e&&Array.isArray(e.group)&&e.group.length>0),u=s.some(e=>e&&!Array.isArray(e.group));let p=1;"rows"===l||c||u||d||(Array.isArray(n.main)?n.main:[]).forEach(t=>{if(!t||Array.isArray(t.group))return;const n=(0,r.H2)(e,t,p);if("fan_modes"===n.attributeType&&null==n.attribute){let a=e.elements[n.index];if(!a){const e=["bubble-sub-button",`bubble-sub-button-${n.index}`];if(t?.name){const n=(0,i.mp)(t.name);n&&e.push(n)}a=(0,o.n)("div",e.join(" "))}return a.classList.add("hidden"),void p++}let a=e.elements[n.index];const s="slider"===n.subButtonType&&n.alwaysVisible;a?s&&a.parentElement&&a.parentElement.removeChild(a):a=(0,i.nE)(e,n.index,n.isSelect,n.showArrow,n.entity,t,null,{attachToDom:!s}),s||a.isConnected||!e.elements.subButtonContainer||e.elements.subButtonContainer.appendChild(a),(0,r.pZ)(a,t,e)||(v(e,a,{...n,subButton:t,groupContainer:null,section:"main"}),(0,r.Zu)(a,t,e._hass,e)),p++}),function(e,t){let n;e.elements.groups=e.elements.groups||{},e.previousValues=e.previousValues||{},e.previousValues.groupButtons=e.previousValues.groupButtons||{},n=Array.isArray(t)?{main:t,bottom:[]}:t&&(Array.isArray(t.main)||Array.isArray(t.bottom))?t:(0,r.mg)(e.config);const o=(Array.isArray(n.main)?n.main:[]).filter(e=>e&&!Array.isArray(e.group)),a=(Array.isArray(n.bottom)?n.bottom:[]).filter(e=>e&&!Array.isArray(e.group)),s=(Array.isArray(n.main)?n.main:[]).map((e,t)=>({key:`g_main_${t}`,position:"top",item:e})).filter(({item:e})=>e&&Array.isArray(e.group)&&e.group.length>0),l=(Array.isArray(n.bottom)?n.bottom:[]).map((e,t)=>({key:`g_bottom_${t}`,position:"bottom",item:e})).filter(({item:e})=>e&&Array.isArray(e.group)&&e.group.length>0),c=e.config?.sub_button?.main_layout??"inline",d=e.config?.sub_button?.bottom_layout??"inline",u=o,p=s.length>0,b="rows"===c||p||a.length>0||l.length>0;let h=[];u.length>0&&b&&(h=[{key:"g_main_auto",position:"top",item:{group:u,buttons_layout:"inline"}}]);const m=(Array.isArray(n.bottom)?n.bottom:[]).filter(e=>e&&Array.isArray(e.group)&&e.group.length>0);let g=[];a.length>0&&(m.length>0?a.forEach((e,t)=>{g.push({key:`g_bottom_individual_${t}`,position:"bottom",item:{group:[e],buttons_layout:"inline"}})}):g=[{key:"g_bottom_auto",position:"bottom",item:{group:a,buttons_layout:"inline"}}]);const f=[...s,...h,...l,...g].map(({key:e,position:t,item:n})=>({key:e,group:{buttons:n.group,position:t,justify_content:n.justify_content,group_layout:"bottom"===t?d:c,display:n.buttons_layout}}));let y=h.length>0?1:o.length+1;f.forEach(({key:t,group:n})=>{if(!n||!Array.isArray(n.buttons))return;e.elements.groups[t]||(e.elements.groups[t]={buttons:{}}),e.previousValues.groupButtons[t]||(e.previousValues.groupButtons[t]=[]);const o=e.elements.groups[t],a=o.container;if(!a)return;const s=n.buttons.filter(e=>e&&!e.fill_width&&null!=e.width&&""!==e.width).length;s>0&&a.classList.contains("display-inline")?a.dataset.totalButtonsWithWidth=s.toString():delete a.dataset.totalButtonsWithWidth,n.buttons.forEach((s,l)=>{if(!s)return;const c=y;y++;const d=`${t}_button_${l}`,u=(0,r.H2)(e,s,c),p="slider"===u.subButtonType&&u.alwaysVisible;let b=o.buttons?o.buttons[d]:null;if(b){const e=`bubble-sub-button-${String(c).replace(/_/g,"-")}`,t=Array.from(b.classList).find(e=>e.startsWith("bubble-sub-button-")&&"bubble-sub-button"!==e);t!==e&&(t&&b.classList.remove(t),b.classList.add(e))}else b=(0,i.nE)(e,c,u.isSelect,u.showArrow,u.entity,s,a,{attachToDom:!p}),o.buttons||(o.buttons={}),o.buttons[d]=b;if(p&&b.parentElement?b.parentElement.removeChild(b):p||b.isConnected||!a||a.appendChild(b),(0,r.pZ)(b,s,e))return;const h="top"===(n.position||"top")&&"slider"===s.sub_button_type&&!s.always_visible,m="bottom"===(n.position||"top"),g=m?{...s,fill_width:null==s.fill_width||s.fill_width}:s,f=m?"bottom":"main";v(e,b,{...u,subButton:g,groupContainer:a,overlayAtCardLevel:h,section:f}),(0,r.Zu)(b,s,e._hass,e)}),function(e){if(!e)return;const t=Array.from(e.querySelectorAll(".bubble-sub-button")),n=Array.from(e.querySelectorAll(".bubble-sub-slider-wrapper.inline")),o=0===t.length||t.every(e=>e.classList.contains("hidden")||"none"===e.style.display),i=n.some(e=>"none"!==e.style.display&&!e.classList.contains("hidden")),a=o&&!i;e.classList.toggle("hidden",a)}(a),(0,i.cj)(a)})}(e,n),(0,a.iJ)(e)}(e,t),function(e){Array.isArray(e.subButtonIcon)||(e.subButtonIcon=[]);("pop-up"===e.config.card_type?e.popUp:e.content).querySelectorAll(".bubble-sub-button-icon").forEach((t,n)=>{e.subButtonIcon[n]=t}),e.elements&&e.elements.groups&&Object.values(e.elements.groups).forEach(t=>{t.container&&t.container.querySelectorAll(".bubble-sub-button-icon").forEach(t=>{e.subButtonIcon.push(t)})})}(e)}},868:(e,t,n)=>{n.d(t,{G:()=>c,m:()=>d});var o=n(888),i=n(241),a=n(264),r=n(716),s=n(382);function l(e){try{e._processedSchemas&&(e._processedSchemas={}),e._schemaCache?Object.keys(e._schemaCache).forEach(t=>{delete e._schemaCache[t]}):e._schemaCache={},e.lastEvaluatedStyles="",e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),(0,r.rC)(e,"editor-refresh",{}),e.requestUpdate(),setTimeout(()=>{e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),e.requestUpdate(),setTimeout(()=>{if(e._config){const t={...e._config};e.stylesYAML&&(e.stylesYAML=null,document.dispatchEvent(new CustomEvent("yaml-modules-updated"))),(0,r.rC)(e,"config-changed",{config:t}),e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card)}e.requestUpdate()},100)},50)}catch(e){}}async function c(e,t){try{let c="";if(t.yamlContent&&""!==t.yamlContent.trim()?c=t.yamlContent:t.description&&""!==t.description.trim()&&(c=t.description),!c)throw new Error("No YAML content found for this module");const d=(0,a.oV)(c)||t.id,u=(0,a.tF)(c,d,{title:t.name,defaultCreator:t.creator});let p=c;try{const e=s.Ay.load(c);if(e&&"object"==typeof e){const n=Object.keys(e);if(1===n.length){const o=n[0],i=e[o];if(i&&"object"==typeof i)if(i[d]){t.moduleLink&&"object"==typeof i[d]&&(i[d].link=t.moduleLink);const e={};e[d]=i[d],p=s.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0})}else if(o===d&&Object.keys(i).some(e=>"object"==typeof i[e]&&i[e].name&&i[e].code)){const e={};Object.entries(i).forEach(([t,n])=>{"object"==typeof n&&"unsupported"!==t&&"editor"!==t&&n.name||(e[t]=n)}),t.moduleLink&&(e.link=t.moduleLink),e.code&&"string"==typeof e.code&&(e.code=e.code.replace(/\n/g,"\n      "));const n={};n[d]=e,p=s.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}else if(o===d)t.moduleLink&&!e[d].link&&(e[d].link=t.moduleLink),p=s.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1});else{t.moduleLink&&(i.link=t.moduleLink);const e={};e[d]=i,p=s.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}}else{t.moduleLink&&(e.link=t.moduleLink);const n={};n[d]=e,p=s.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}p=p.replace(/code: \|/g,"code: |").replace(/description: ''
    <div class="module-editor-form">
        <div class="form-content">
          <h3>
            <ha-icon style="margin: 8px;" icon="${e._showNewModuleForm?"mdi:puzzle-plus-outline":"mdi:puzzle-edit-outline"}"></ha-icon>
            ${e._showNewModuleForm?"Create new Module":"default"===e._editingModule.id?"Edit Default Module":"Edit Module"}
          </h3>
          
          <div class="module-editor-not-default" style="display: ${"default"===e._editingModule.id?"none":""}">
            ${t?o.qy`
              <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                  <ha-icon icon="mdi:file-document-alert"></ha-icon>
                  Read-only Module
                </h4>
                <div class="content">
                  <p>This Module is installed from a YAML file. You need to modify the <code>bubble-modules.yaml</code> 
                  file directly, or remove it from your YAML file then import it here.</p>
                </div>
              </div>
            `:""}
            
            <ha-textfield
              label="Module ID"
              .value=${e._editingModule.id||""}
              @input=${t=>{const n=e._editingModule.id;e._editingModule.id=t.target.value,e._showNewModuleForm&&e._config.modules&&(p(e,t.target.value,n),(0,i.rC)(e,"config-changed",{config:e._config}))}}
              ?disabled=${!e._showNewModuleForm||t}
            ></ha-textfield>
            <span class="helper-text">
              Must be unique and cannot be changed after the Module is created.
            </span>
            
            <ha-textfield
              label="Module Name"
              .value=${e._editingModule.name||""}
              @input=${t=>{e._editingModule.name=t.target.value}}
              ?disabled=${t}
            ></ha-textfield>
            
            <ha-textfield
              label="Version"
              .value=${e._editingModule.version||"1.0"}
              @input=${t=>{e._editingModule.version=t.target.value}}
              ?disabled=${t}
            ></ha-textfield>
            
            <ha-textfield
              label="Creator"
              .value=${e._editingModule.creator||""}
              @input=${t=>{e._editingModule.creator=t.target.value}}
              ?disabled=${t}
            ></ha-textfield>
            
            <ha-expansion-panel 
              .header=${o.qy`
                <ha-icon icon="mdi:filter-check-outline" style="margin-right: 8px;"></ha-icon>
                Supported cards
              `}
              @expanded-changed=${e=>e.stopPropagation()}
            >
              <div>
                ${function(e,t=!1){const n=[{id:"button",name:"Button"},{id:"calendar",name:"Calendar"},{id:"climate",name:"Climate"},{id:"cover",name:"Cover"},{id:"horizontal-buttons-stack",name:"Horizontal buttons stack"},{id:"media-player",name:"Media player"},{id:"pop-up",name:"Pop-up"},{id:"select",name:"Select"},{id:"separator",name:"Separator"},{id:"sub-buttons",name:"Sub-buttons"}],i=n.map(e=>e.id);void 0===e._editingModule.supported&&(e._editingModule.unsupported&&e._editingModule.unsupported.length>0?e._editingModule.supported=i.filter(t=>!e._editingModule.unsupported.includes(t)):e._editingModule.supported=void 0);const a=!e._editingModule.supported||Array.isArray(e._editingModule.supported)&&e._editingModule.supported.length===i.length&&i.every(t=>e._editingModule.supported.includes(t));return o.qy`
    <div class="checkbox-grid">
      <ha-formfield label="All cards" style="grid-column: 1 / -1; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid var(--divider-color);">
        <ha-checkbox
          .checked=${a}
          @change=${n=>{t||(n.target.checked?delete e._editingModule.supported:e._editingModule.supported=[],e.requestUpdate())}}
          ?disabled=${t}
        ></ha-checkbox>
      </ha-formfield>
      ${n.map(n=>o.qy`
        <ha-formfield label="${n.name}">
          <ha-checkbox
            .checked=${!e._editingModule.supported||e._editingModule.supported.includes(n.id)}
            @change=${o=>{t||(e._editingModule.supported||(e._editingModule.supported=i.slice()),o.target.checked?(e._editingModule.supported.includes(n.id)||e._editingModule.supported.push(n.id),e._editingModule.supported.length===i.length&&i.every(t=>e._editingModule.supported.includes(t))&&delete e._editingModule.supported):e._editingModule.supported=e._editingModule.supported.filter(e=>e!==n.id),e.requestUpdate())}}
            ?disabled=${t}
          ></ha-checkbox>
        </ha-formfield>
      `)}
    </div>
    <div class="helper-text">
      Select the card types that this module supports.
    </div>
  `}(e,t)}
              </div>
            </ha-expansion-panel>

            <ha-expansion-panel 
              .header=${o.qy`
                <ha-icon icon="mdi:file-document-outline" style="margin-right: 8px;"></ha-icon>
                Description
              `}
              @expanded-changed=${e=>e.stopPropagation()}
            >
              <div class="code-editor-container">
                <ha-code-editor
                  class="${t?"disabled":""}"
                  mode="yaml"
                  .value=${e._editingModule.description||""}
                  @value-changed=${t=>{e._editingModule.description=t.detail.value}}
                ></ha-code-editor>
              </div>
              <span class="helper-text">
                This description appears in your module and in the Module Store (if you share it), so make sure it's clear and concise. <b>You can use HTML and inline CSS</b>, but note that it will only be rendered in your module, the Module Store will not display it.            
              </span>
            </ha-expansion-panel>
          </div>

          <ha-expansion-panel 
            .header=${o.qy`
              <ha-icon icon="mdi:code-json" style="margin-right: 8px;"></ha-icon>
              Code (CSS/JS template)
            `}
            @expanded-changed=${e=>e.stopPropagation()}
          >
            <div class="code-editor-container">
              <ha-code-editor
                class="${t?"disabled":""}"
                mode="yaml"
                .value=${e._editingModule.code||""}
                @value-changed=${n=>(n=>{if(!e._editingModule||!e._config||t)return;const o=e._editingModule.id;if("function"==typeof e._clearCurrentModuleError&&e._clearCurrentModuleError(o),!e._originalModuleState){const t=a.Ki.get(o);t&&(e._originalModuleState=JSON.parse(JSON.stringify(t)))}e._editingModule.code=n;try{e._moduleCodeDebounce&&clearTimeout(e._moduleCodeDebounce)}catch(e){}e._moduleCodeDebounce=setTimeout(()=>{e.stylesYAML&&(e.stylesYAML=null);const t={...a.Ki.get(o)||{},code:e._editingModule.code,id:o};a.Ki.set(o,t),p(e,o,e._previousModuleId),h(o,t)},140)})(n.detail.value)}
              ></ha-code-editor>
            </div>
            ${e.createErrorConsole(e)}
            <span class="helper-text">
              More information and examples about the CSS and JS template possibilities can be found in the <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#styling" target="_blank">Styling and Templates documentation</a>. Tip: You can enlarge the editor by clicking on the panel title (Bubble Card configuration).
            </span>
          </ha-expansion-panel>
          
          <ha-expansion-panel 
            style="display: ${"default"===e._editingModule.id?"none":""}" 
            .header=${o.qy`
              <ha-icon icon="mdi:form-select" style="margin-right: 8px;"></ha-icon>
              Optional: Editor schema (YAML)
            `}
            @expanded-changed=${e=>e.stopPropagation()}
          >
            <div class="editor-schema-container">
              <ha-code-editor
                class="${t?"disabled":""}"
                mode="yaml"
                .value=${e._editingModule.editor_raw||("object"==typeof e._editingModule.editor?s.Ay.dump(e._editingModule.editor):e._editingModule.editor||"")}
                @value-changed=${n=>{e._editingModule.editor_raw=n.detail.value,clearTimeout(e._editorSchemaDebounce),e._editorSchemaDebounce=setTimeout(()=>{try{const o=s.Ay.load(n.detail.value);null!==o&&"object"==typeof o&&((n=>{if(e._editingModule&&e._config&&!t)try{const t=e._editingModule.id;if(!e._originalModuleState){const n=a.Ki.get(t);n&&(e._originalModuleState=JSON.parse(JSON.stringify(n)))}const o=e._editingModule.editor_raw;e._editingModule.editor=n,o&&(e._editingModule.editor_raw=o);const r=a.Ki.get(t);if(r){const o={...r,editor:n};a.Ki.set(t,o),e._schemaCache&&delete e._schemaCache[t],e._processedSchemas&&delete e._processedSchemas[t],e.requestUpdate(),setTimeout(()=>{(0,i.rC)(e,"editor-refresh",{}),e.requestUpdate()},50)}}catch(e){console.warn("Error applying live editor schema:",e)}})(o),e._yamlErrorMessage&&(e._yamlErrorMessage=null,e.requestUpdate()))}catch(t){console.warn("Invalid YAML for editor schema:",t),e._editingModule.editor=e._editingModule.editor_raw||n.detail.value,e._yamlErrorMessage=t.message,e.requestUpdate()}},100)}}
              ></ha-code-editor>
            </div>
            <div class="bubble-info error" 
                style="display: ${e._yamlErrorMessage?"":"none"}">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    Error in YAML schema
                </h4>
                <div class="content">
                    <pre style="margin: 0; white-space: pre-wrap; font-size: 12px;">${e._yamlErrorMessage?e._yamlErrorMessage.charAt(0).toUpperCase()+e._yamlErrorMessage.slice(1):""}</pre>
                </div>
            </div>
            <span class="helper-text">
              This allows you to add a visual editor to your module. Learn about all available editor schema options in the <a href="https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md" target="_blank">editor schema documentation</a>.
            </span>

            ${e._editingModule.editor&&Array.isArray(e._editingModule.editor)&&e._editingModule.editor.length>0?o.qy`
              <div class="form-preview">
                <h4>Editor preview</h4>
                <div class="form-preview-container">
                  <ha-form
                    .hass=${e.hass}
                    .data=${{}}
                    .schema=${e._editingModule.editor}
                    .computeLabel=${e._computeLabelCallback||(e=>e.label||e.name)}
                  ></ha-form>
                </div>
              </div>
            `:""}
          </ha-expansion-panel>

          ${!t&&v?o.qy`
            <div class="bubble-info warning" style="margin-top: 8px;">
              <h4 class="bubble-section-title">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                Save disabled
              </h4>
              <div class="content">
                <p style="margin: 0;">
                  ${g?o.qy`Fix the error(s) in the Editor schema (YAML) above to enable saving.`:""}
                  ${g&&f?o.qy`<br>`:""}
                  ${f?o.qy`Fix the error(s) in the CSS/JS template above to enable saving.`:""}
                </p>
              </div>
            </div>
          `:""}

          <hr>

          <ha-expansion-panel 
            .header=${o.qy`
              <ha-icon icon="mdi:export" style="margin-right: 8px;"></ha-icon>
              Export Module
            `}
            @expanded-changed=${e=>e.stopPropagation()}
          >
            <div class="content">
                <div class="export-section">
                    <div class="export-buttons">
                        <button class="icon-button" @click=${()=>{const t=(0,l.generateYamlExport)(e._editingModule);(0,l.lW)(e,t,"YAML format copied to clipboard!",_)}}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        Copy YAML
                        </button>
                        
                        <button class="icon-button" @click=${()=>{const t=(0,l.Hs)(e._editingModule);(0,l.lW)(e,t,"GitHub Discussion format copied to clipboard!",_)}}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        Copy for GitHub
                        </button>
                        
                        <button class="icon-button" @click=${()=>{(0,l.Ac)(e,e._editingModule,_)}}>
                        <ha-icon icon="mdi:file-download"></ha-icon>
                        Download YAML
                        </button>
                    </div>
                    
                    <div class="export-preview">
                        <ha-expansion-panel 
                          .header=${"Export preview"}
                          @expanded-changed=${e=>e.stopPropagation()}
                        >
                        <pre id="export-preview-content">Click on a button above to generate the preview</pre>
                        </ha-expansion-panel>
                    </div>

                    <div class="bubble-info">
                      <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Sharing your Module to the Store
                      </h4>
                      <div class="content">
                        <p>To share your Module to the Module Store, click on <strong>Copy for GitHub</strong> and paste the content in a new discussion in the
                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules" target="_blank">Share your Modules</a> category.
                        <strong>Edit the description</strong> (if needed), <strong>the example</strong> (for YAML users), and remember to <strong>include at least one screenshot</strong> for the Module Store.</p>
                        <p><strong>Your Module becomes available right after that</strong> (after a Store refresh), so double-check that everything is correctly written and the Module is working as expected. You can of course edit/update the Module after it is shared.</p>
                      </div>
                    </div>
                </div>
            </div>
          </ha-expansion-panel>
          
          <div class="module-editor-buttons-container">
            <button class="icon-button" style="flex: 1;" @click=${()=>{try{if(!e._showNewModuleForm&&e._editingModule){const t=e._editingModule.id;"function"==typeof e._clearCurrentModuleError&&e._clearCurrentModuleError(t),function(e,t){if(!t)return;let n;e._originalModuleState?(n=e._originalModuleState,e._originalModuleState=null):n=a.Ki.get(t),n&&(e.lastEvaluatedStyles="",e.stylesYAML=null,a.Ki.set(t,{...n}),e._schemaCache&&delete e._schemaCache[t],e._processedSchemas&&delete e._processedSchemas[t],e.handleCustomStyles&&e.handleCustomStyles(e,e.card),h(t,n),setTimeout(()=>{if(e._config){const t={...e._config};(0,i.rC)(e,"config-changed",{config:t})}e.requestUpdate()},50))}(e,t)}else if(e._showNewModuleForm&&e._editingModule){const t=e._editingModule.id;e._config&&e._config.modules&&t&&(e._config.modules=e._config.modules.filter(e=>e!==t),(0,i.rC)(e,"config-changed",{config:e._config}),a.Ki.has(t)&&a.Ki.delete(t),b(e))}}finally{e._editingModule=null,e._showNewModuleForm=!1,e._previousModuleId=null,m(!1),e.requestUpdate(),setTimeout(()=>(0,u.XY)(e),0)}}}>
              <ha-icon icon="mdi:close"></ha-icon>
              Cancel
            </button>
            
            <button class="icon-button ${t||v?"disabled":""}" ?disabled=${t||v} style="flex: 1;" @click=${()=>{t||v||("function"==typeof e._clearCurrentModuleError&&e._editingModule?.id&&e._clearCurrentModuleError(e._editingModule.id),async function(e,t){try{const o=t.id,l=e._config.modules&&e._config.modules.includes(o),d=a.Ki.get(o),u=d&&!0===d.is_global;if(t.editor_raw&&"string"==typeof t.editor_raw)try{const e=s.Ay.load(t.editor_raw);null!==e&&"object"==typeof e&&(t.editor=e)}catch(e){console.warn("Couldn't parse editor schema during save, using fallback:",e)}t.editor_raw&&delete t.editor_raw,t.supported&&t.unsupported&&delete t.unsupported;const p=[{id:"button",name:"Button"},{id:"calendar",name:"Calendar"},{id:"climate",name:"Climate"},{id:"cover",name:"Cover"},{id:"horizontal-buttons-stack",name:"Horizontal buttons stack"},{id:"media-player",name:"Media player"},{id:"pop-up",name:"Pop-up"},{id:"select",name:"Select"},{id:"separator",name:"Separator"},{id:"sub-buttons",name:"Sub-buttons"}].map(e=>e.id);t.supported&&Array.isArray(t.supported)&&t.supported.length===p.length&&p.every(e=>t.supported.includes(e))&&delete t.supported;const{generateYamlExport:g}=await Promise.resolve().then(n.bind(n,397)),f=g(t),v=(0,r.tF)(f,t.id,{title:t.name,defaultCreator:t.creator});u&&(v.is_global=!0),document.dispatchEvent(new CustomEvent("yaml-modules-updated"));const _=Array.from(a.Ki.keys()),w=new Map;_.forEach(e=>{e===t.id?w.set(t.id,v):w.set(e,a.Ki.get(e))}),_.includes(t.id)||w.set(t.id,v),a.Ki.clear(),w.forEach((e,t)=>{a.Ki.set(t,e)}),e._config&&e._config.modules&&(e._config.modules.includes(o)||e._config.modules.push(o),(0,i.rC)(e,"config-changed",{config:e._config}));let x=!1;try{if(await(0,c.ensureBCTProviderAvailable)(e.hass)){await(0,c.writeModuleYaml)(e.hass,o,f);try{a.sq.set(o,"file")}catch(e){}document.dispatchEvent(new CustomEvent("yaml-modules-updated")),x=!0}}catch(e){console.warn("File-based save failed; keeping changes local only:",e)}if(!x)try{a.sq.set(o,"editor")}catch(e){}h(o,v),e.stylesYAML=null,l&&b(e),e._editingModule=null,e._showNewModuleForm=!1,y(e),m(!1)}catch(e){console.error("Error saving module:",e)}finally{m(!1)}}(e,e._editingModule),setTimeout(()=>(0,u.XY)(e),0))}}>
              <ha-icon icon="mdi:content-save"></ha-icon>
              Save Module
            </button>
          </div>
        </div>
    </div>
  `}function f(){return[{id:"button",name:"Button"},{id:"calendar",name:"Calendar"},{id:"climate",name:"Climate"},{id:"cover",name:"Cover"},{id:"horizontal-buttons-stack",name:"Horizontal buttons stack"},{id:"media-player",name:"Media player"},{id:"pop-up",name:"Pop-up"},{id:"select",name:"Select"},{id:"separator",name:"Separator"},{id:"sub-buttons",name:"Sub-buttons"}]}function y(e){e._processedSchemas&&(e._processedSchemas={}),e._selectedModuleTab=0,"function"==typeof e._getProcessedSchema&&(e._schemaCache?Object.keys(e._schemaCache).forEach(t=>{delete e._schemaCache[t]}):e._schemaCache={}),e.lastEvaluatedStyles="",e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),(0,i.rC)(e,"editor-refresh",{}),e.requestUpdate(),setTimeout(()=>{e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),e.requestUpdate(),setTimeout(()=>{if(e._config){const t={...e._config};e.stylesYAML&&(e.stylesYAML=null,document.dispatchEvent(new CustomEvent("yaml-modules-updated"))),(0,i.rC)(e,"config-changed",{config:t}),e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card)}e.requestUpdate()},100)},50)}function v(e,t){e._originalModuleState=null;const n=a.Ki.get(t);n?(e._editingModule={id:t,...n},m(!0),e._editingModule.code||(e._editingModule.code=""),e._editingModule.editor&&"string"==typeof e._editingModule.editor&&(e._editingModule.editorReference=e._editingModule.editor,e._editingModule.editor=[]),"object"==typeof e._editingModule.editor?e._editingModule.editor_raw=s.Ay.dump(e._editingModule.editor):e._editingModule.editor_raw=e._editingModule.editor||"",e.requestUpdate(),setTimeout(()=>(0,u.XY)(e),0)):console.error(`Module ${t} not found`)}async function _(e,t){if(confirm(`Are you sure you want to delete module "${t}"?`))try{a.Ki.delete(t);try{a.sq.delete(t)}catch(e){}document.dispatchEvent(new CustomEvent("yaml-modules-updated"));let n=!1;try{await(0,c.ensureBCTProviderAvailable)(e.hass)&&(await(0,c.deleteModuleFile)(e.hass,t),document.dispatchEvent(new CustomEvent("yaml-modules-updated")),n=!0)}catch(e){console.warn("File-based deletion failed; keeping changes local only:",e)}e._config&&e._config.modules&&(e._config.modules=e._config.modules.filter(e=>e!==t),(0,i.rC)(e,"config-changed",{config:e._config}),b(e)),y(e),m(!1)}catch(e){console.error("Error deleting module:",e)}finally{m(!1)}}function w(e){if(!e._editingModuleInitialized){e._editingModule=null,e._showNewModuleForm=!1,e._showManualImportForm=!1,e._manualYamlContent="",e._exportContent=null,e._exportType=null,e._exportStep=0,e._schemaCache={},e._processedSchemas={},e._originalModuleState=null,e._previousModuleId=null,e._generateUniqueModuleId=(e="my_module")=>{if(!a.Ki.has(e))return e;let t=1,n=`${e}_${t}`;for(;a.Ki.has(n);)t++,n=`${e}_${t}`;return n};const t=e._generateUniqueModuleId("my_module");e._newModuleTemplate={id:t,name:"My Module",description: ''
      ${this.label?l.qy`<label class="bc-object-label">${this.label}</label>`:l.s6}
      <div class="bc-object-items">
        ${e.map((e,t)=>this._renderItem(e,t))}
        <ha-button 
          class="bc-object-add-button"
          @click=${this._addItem}
          ?disabled=${this.disabled}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
          ${this.hass?.localize?.("ui.common.add")||"Add"}
        </ha-button>
      </div>
      ${this.helper?l.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:l.s6}
    `}_renderSingle(){return this.value?l.qy`
        ${this.label?l.qy`<label class="bc-object-label">${this.label}</label>`:l.s6}
        <div class="bc-object-items">
          ${this._renderItem(this.value,0)}
        </div>
        ${this.helper?l.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:l.s6}
      `:l.qy`
      ${this.label?l.qy`<label class="bc-object-label">${this.label}</label>`:l.s6}
      <ha-button 
        class="bc-object-add-button"
        @click=${this._addItem}
        ?disabled=${this.disabled}
      >
        <ha-icon icon="mdi:plus"></ha-icon>
        ${this.hass?.localize?.("ui.common.add")||"Add"}
      </ha-button>
      ${this.helper?l.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:l.s6}
    `}_renderItem(e,t){const n=this._formatValue(e,this.selector)||`Item ${t+1}`,o=this._getDescription(e),i=this.selector?.bc_object?.multiple||!1;return l.qy`
      <ha-expansion-panel outlined class="bc-object-item">
        <h4 slot="header" class="bc-object-item-header">
          <div class="bc-object-item-title-container">
            <span class="bc-object-item-label">${n}</span>
            ${o?l.qy`<span class="bc-object-item-description">${o}</span>`:l.s6}
          </div>
          <div class="button-container" @click=${e=>e.stopPropagation()} @mousedown=${e=>e.stopPropagation()} @touchstart=${e=>e.stopPropagation()}>
            <ha-icon-button
              class="delete-icon"
              @click=${()=>this._deleteItem(t)}
              ?disabled=${this.disabled}
              .label="${this.hass?.localize?.("ui.common.delete")||"Delete"}"
            >
              <ha-icon icon="${i?"mdi:delete":"mdi:close"}"></ha-icon>
            </ha-icon-button>
          </div>
        </h4>
        <div class="bc-object-item-content">
          <ha-form
            .hass=${this.hass}
            .data=${e}
            .schema=${this._generateSchema(this.selector?.bc_object?.fields,e)}
            .disabled=${this.disabled}
            .computeLabel=${e=>this._computeLabel(e)}
            .computeHelper=${e=>this._computeHelper(e)}
            .localizeValue=${this.localizeValue}
            @value-changed=${e=>this._itemChanged(e,t)}
          ></ha-form>
        </div>
      </ha-expansion-panel>
    `}_addItem(){if(this.selector?.bc_object?.multiple){const e=[...Array.isArray(this.value)?this.value:[],{}];(0,s.rC)(this,"value-changed",{value:e})}else(0,s.rC)(this,"value-changed",{value:{}})}_deleteItem(e){if(this.selector?.bc_object?.multiple){const t=[...this.value||[]];t.splice(e,1),(0,s.rC)(this,"value-changed",{value:t})}else(0,s.rC)(this,"value-changed",{value:void 0})}_itemChanged(e,t){if(e.stopPropagation(),this.selector?.bc_object?.multiple){const n=[...this.value||[]];n[t]=e.detail.value,(0,s.rC)(this,"value-changed",{value:n})}else(0,s.rC)(this,"value-changed",{value:e.detail.value})}static styles=l.AH`
    :host {
      display: block;
    }

    .bc-object-label {
      display: block;
      margin-bottom: 8px;
      font-weight: var(--ha-font-weight-medium, 500);
    }

    .bc-object-items {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .bc-object-item {
      --expansion-panel-summary-padding: 0 16px;
      width: 100% !important;
      max-width: 100% !important;
    }

    .bc-object-item-header {
      display: flex;
      align-items: center;
      margin: 0;
      width: 100%;
      justify-content: space-between;
    }

    .bc-object-item-title-container {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 12px 0;
      overflow: hidden;
    }

    .bc-object-item-label {
      font-weight: var(--ha-font-weight-medium, 500);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .bc-object-item-description {
      font-size: 0.9em;
      color: var(--secondary-text-color);
      margin-top: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .bc-object-item-content {
      padding: 16px;
      width: 100% !important;
      box-sizing: border-box;
    }

    .button-container {
      display: flex;
      align-items: center;
      margin-left: 8px;
    }

    .delete-icon {
      color: var(--secondary-text-color);
    }

    .delete-icon ha-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .delete-icon[disabled] {
      color: var(--disabled-text-color);
      opacity: 0.5;
    }

    .bc-object-add-button {
      align-self: flex-start;
    }

    ha-input-helper-text {
      display: block;
      margin-top: 4px;
    }
  `}customElements.define("ha-selector-bc_object",c);var d=n(371);function u(e){const t=e._config.entity;return(0,d.zD)(t)}function p({hass:e,data:t={},entity:n,computeLabel:o,onFormChange:i,onToggleChange:a,isReadOnly:r,showEntityFilterToggle:s=!1,entityFilterValue:c=!1,onEntityFilterToggle:d,showEntityFilterInfo:u=c,rangeFormDisabled:p=!1,forceValuePositionRight:b=!1}){const h=n?.startsWith("light")&&["hue","saturation","white_temp"].includes(t.light_slider_type),m=h,g=(e,t,n={})=>{"function"==typeof a&&a(e,t,n)},f=(e,t)=>({control:e,eventType:t});return l.qy`

        <ha-expansion-panel outlined>
            <h4 slot="header">
                <ha-icon icon="mdi:gesture-swipe-horizontal"></ha-icon>
                Slider behavior
            </h4>
            <div class="content">
                ${s?l.qy`
                    <div class="checkbox-wrapper">
                        <ha-formfield label="Disable entity filter (for custom slider)">
                            <ha-switch
                                .checked=${c}
                                @change=${e=>{return t=e.target.checked,void("function"==typeof d&&d(t));var t}}
                            ></ha-switch>
                        </ha-formfield>
                    </div>
                    <div class="bubble-info" style="display: ${u?"":"none"}">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Custom slider
                        </h4>
                        <div class="content">
                            <p>To create a custom slider (read only), select an <b>entity with a numeric state</b> above, then define the <b>min</b> and <b>max</b> values below.</p>
                            <p>For example, this allows you to display your solar production within a specific range.</p>
                        </div>
                    </div>
                `:""}
                <div class="range-inputs" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
                    <ha-textfield
                        label="Min value"
                        type="number"
                        step="any"
                        .value="${t.min_value??""}"
                        .disabled=${p}
                        @input="${e=>{const t=e.target.value;g("min_value",""===t?void 0:Number(t),f("ha-textfield","input"))}}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Max value"
                        type="number"
                        step="any"
                        .value="${t.max_value??""}"
                        .disabled=${p}
                        @input="${e=>{const t=e.target.value;g("max_value",""===t?void 0:Number(t),f("ha-textfield","input"))}}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Step"
                        type="number"
                        step="any"
                        .value="${t.step??""}"
                        .disabled=${p}
                        @input="${e=>{const t=e.target.value;g("step",""===t?void 0:Number(t),f("ha-textfield","input"))}}"
                    ></ha-textfield>
                </div>
                <ha-formfield>
                    <ha-switch
                        .checked=${t.tap_to_slide&&!t.relative_slide}
                        @change=${e=>g("tap_to_slide",e.target.checked,f("ha-switch","change"))}
                        .disabled=${t.relative_slide||r}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Tap to slide (previous behavior)</label>
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${!t.tap_to_slide&&t.relative_slide}
                        @change=${e=>g("relative_slide",e.target.checked,f("ha-switch","change"))}
                        .disabled=${t.tap_to_slide||r}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Relative slide (incompatible with tap to slide)</label>
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${t.read_only_slider??r}
                        @change=${e=>g("read_only_slider",e.target.checked,f("ha-switch","change"))}
                        .disabled=${r}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Read only slider</label>
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${t.slider_live_update??!1}
                        @change=${e=>g("slider_live_update",e.target.checked,f("ha-switch","change"))}
                        .disabled=${r}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Slider live update</label>
                    </div>
                </ha-formfield>
                <div class="bubble-info" style="display: ${t.slider_live_update?"":"none"}">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Slider live update
                    </h4>
                    <div class="content">
                        <p>By default, sliders are updated only on release. When this option is enabled, the slider will update the entity state while sliding. <b>This feature is not recommended for all entities, disable it if you encounter issues.</b></p>
                    </div>
                </div>
            </div>
        </ha-expansion-panel>
        <ha-expansion-panel outlined>
            <h4 slot="header">
                <ha-icon icon="mdi:view-grid"></ha-icon>
                Slider layout
            </h4>
            <div class="content">
                <ha-select
                    label="Fill orientation"
                    .value="${t.slider_fill_orientation||"left"}"
                    @selected="${e=>g("slider_fill_orientation",e.target.value,f("ha-select","selected"))}"
                    @closed="${e=>e.stopPropagation()}"
                    fixedMenuPosition
                >
                    <mwc-list-item value="left">Fill from left (default)</mwc-list-item>
                    <mwc-list-item value="right">Fill from right</mwc-list-item>
                    <mwc-list-item value="top">Fill from top</mwc-list-item>
                    <mwc-list-item value="bottom">Fill from bottom</mwc-list-item>
                </ha-select>
                <div class="bubble-info" style="display: ${["top","bottom"].includes(t.slider_fill_orientation)?"":"none"}">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Vertical slider behavior
                    </h4>
                    <div class="content">
                        <p>When using vertical fill orientation (top or bottom), swiping over the card on mobile will activate the slider. This is because there's no way to distinguish between scrolling and slider interaction.</p>
                    </div>
                </div>
                ${h?"":l.qy`
                    <ha-select
                        label="Value position"
                        .value="${b?"right":t.slider_value_position||"right"}"
                        .disabled=${b}
                        @selected="${e=>g("slider_value_position",e.target.value,f("ha-select","selected"))}"
                        @closed="${e=>e.stopPropagation()}"
                        fixedMenuPosition
                    >
                        <mwc-list-item value="right">Right (default)</mwc-list-item>
                        <mwc-list-item value="left">Left</mwc-list-item>
                        <mwc-list-item value="center">Center</mwc-list-item>
                        <mwc-list-item value="hidden">Hidden</mwc-list-item>
                    </ha-select>
                    ${b?l.qy`
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                Value position locked
                            </h4>
                            <div class="content">
                                <p>Value position is forced to "Right" because "Show button info" is enabled. Disable it to change this setting.</p>
                            </div>
                        </div>
                    `:""}
                `}
                <ha-formfield style="display: ${m?"none":""}">
                    <ha-switch
                        .checked=${t.invert_slider_value??!1}
                        @change=${e=>g("invert_slider_value",e.target.checked,f("ha-switch","change"))}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Invert slider direction (100% fill equals minimum)</label>
                    </div>
                </ha-formfield>
            </div>
        </ha-expansion-panel>
        ${n?.startsWith("light")?l.qy`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:lightbulb-outline"></ha-icon>
                    Light options
                </h4>
                <div class="content">
                    <ha-select
                        label="Light slider mode"
                        .value="${t.light_slider_type||"brightness"}"
                        @selected="${e=>g("light_slider_type",e.target.value,f("ha-select","selected"))}"
                        @closed="${e=>e.stopPropagation()}"
                        fixedMenuPosition
                    >
                        <mwc-list-item value="brightness">Brightness (default)</mwc-list-item>
                        <mwc-list-item value="hue">Color (Hue)</mwc-list-item>
                        <mwc-list-item value="saturation">Saturation</mwc-list-item>
                        <mwc-list-item value="white_temp">White temperature</mwc-list-item>
                    </ha-select>
                    ${"hue"===t.light_slider_type?l.qy`
                        <ha-formfield>
                            <ha-switch
                                .checked=${t.hue_force_saturation??!1}
                                @change=${e=>g("hue_force_saturation",e.target.checked,f("ha-switch","change"))}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Force saturation when adjusting Hue</label>
                            </div>
                        </ha-formfield>
                        ${t.hue_force_saturation?l.qy`
                            <ha-textfield
                                label="Forced saturation value (0-100)"
                                type="number"
                                min="0"
                                max="100"
                                .value=${String(t.hue_force_saturation_value??100)}
                                @input=${e=>g("hue_force_saturation_value",e.target.value,f("ha-textfield","input"))}
                            ></ha-textfield>
                        `:""}
                    `:""}
                    ${["hue","saturation","white_temp"].includes(t.light_slider_type)?l.qy``:l.qy`
                        <ha-formfield>
                            <ha-switch
                                .checked=${t.use_accent_color??!1}
                                @change=${e=>g("use_accent_color",e.target.checked,f("ha-switch","change"))}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Use accent color instead of light color</label>
                            </div>
                        </ha-formfield>
                    `}
                    ${t.tap_to_slide?"":l.qy`
                        <ha-formfield>
                            <ha-switch
                                .checked=${t.allow_light_slider_to_0??!1}
                                @change=${e=>g("allow_light_slider_to_0",e.target.checked,f("ha-switch","change"))}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Allow slider to turn off light (reach 0%)</label>
                            </div>
                        </ha-formfield>
                    `}
                    <ha-formfield>
                        <ha-switch
                            .checked=${t.light_transition??!1}
                            @change=${e=>g("light_transition",e.target.checked,f("ha-switch","change"))}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Enable smooth brightness transitions</label>
                        </div>
                    </ha-formfield>
                    ${t.light_transition?l.qy`
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                Light transition
                            </h4>
                            <div class="content">
                                <p><b>Important:</b> This feature only works for lights that support the 
                                <a target="_blank" rel="noopener noreferrer" href="https://www.home-assistant.io/integrations/light/#action-lightturn_on">light.turn_on</a> transition attribute.</p>
                                <p>Enabling this for lights that do not support transitions will unfortunately have no effect. Defaults to 500ms unless overridden below.</p>
                            </div>
                        </div>
                        <ha-textfield
                            label="Transition time (ms)"
                            type="number"
                            min="1"
                            max="100000"
                            .value=${t.light_transition_time}
                            @input=${e=>g("light_transition_time",e.target.value,f("ha-textfield","input"))}
                        ></ha-textfield>
                    `:""}
                </div>
            </ha-expansion-panel>
        `:""}
    `}function b(e){let t={};"slider"!==e._config.button_type||e._disableEntityFilter||(t={filter:[{domain:["light","media_player","cover","input_number","number","climate","fan"]},{domain:"sensor",device_class:"battery"}]});const n="pop-up"===e._config.card_type;let o=e._config.button_action||"";e._config.button_type||(e._config.button_type=n?"name":"switch");let i=e._config.button_type;return l.qy`
        <div class="card-config">
            ${n?"":e.makeDropdown("Card type","card_type",e.cardTypeList)}
            ${e.makeDropdown("Button type","button_type",[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text (No entity required)",value:"name"}])}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:"slider"!==i?"Entity (toggle)":"Entity (See text below for supported entities)",selector:{entity:t}}]}   
                .computeLabel=${e._computeLabelCallback}
                .disabled="${"name"===e._config.button_type}"
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:cog"></ha-icon>
                ${n?"Header card settings":"Card settings"}
                </h4>
                <div class="content">     
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Icon","icon")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            ${function(e){void 0===e._disableEntityFilter&&(e._disableEntityFilter=!1);const t="slider"===e._config.button_type;return l.qy`
        <ha-expansion-panel outlined style="display: ${t?"":"none"}">
            <h4 slot="header">
            <ha-icon icon="mdi:tune-variant"></ha-icon>
            Slider settings
            </h4>
            <div class="content">
                ${p({hass:e.hass,data:e._config,entity:e._config.entity,computeLabel:e._computeLabelCallback,onFormChange:e._valueChanged,onToggleChange:(t,n,o={})=>{if(!t)return;const i=(o.control||"").toUpperCase(),a=o.eventType||("HA-TEXTFIELD"===i?"input":"HA-COMBO-BOX"===i?"value-changed":"change"),r={configValue:t,tagName:i||"INPUT"};"HA-SWITCH"===i?r.checked=n:r.value=n;const s={type:a,target:r,detail:"value-changed"===a||"selected"===a?{value:n}:void 0};e._valueChanged(s)},isReadOnly:u(e),showEntityFilterToggle:!0,entityFilterValue:e._disableEntityFilter,onEntityFilterToggle:t=>{e._disableEntityFilter=t,e.requestUpdate()},showEntityFilterInfo:e._disableEntityFilter,rangeFormDisabled:"name"===e._config.button_type})}
            </div>
        </ha-expansion-panel>
    `}(e)}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap"></ha-icon>
                Tap action on icon
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined style="display: ${"slider"===e._config.button_type&&e._config.tap_to_slide?"none":""}">
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    <!-- 
                      Default button action mapping to match create.js defaults:
                      - name: tap="none", double="none", hold="none"
                      - state: tap="more-info", double="none", hold="more-info" 
                      - slider: tap="more-info"(sensor)/"toggle"(others), double="none", hold="none"
                      - switch: tap="toggle", double="none", hold="more-info"
                    -->
                    ${e.makeActionPanel("Tap action",o,"name"===e._config.button_type?"none":"state"===e._config.button_type||"slider"===e._config.button_type&&(0,s.md)(e,"sensor",e._config.entity)?"more-info":"toggle","button_action")}
                    ${e.makeActionPanel("Double tap action",o,"none","button_action")}
                    ${e.makeActionPanel("Hold action",o,"name"===e._config.button_type||"slider"===e._config.button_type?"none":"more-info","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:palette"></ha-icon>
                Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    ${n?"":e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${n?"":e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Button card ${n?"(as pop-up header)":""}
                </h4>
                <div class="content">
                    <p>This card is very versatile. It can be used as a <b>switch</b>, a <b>slider</b>, a <b>state</b> or a <b>name/text</b> button. Select the type of button you want to get more information about it.</p>
                    
                    ${"switch"!==e._config.button_type&&e._config.button_type?"":l.qy`
                        <p><strong>Switch button:</strong> This is the default button type. By default, it toggles an entity and its background color changes based on the entity's state or the color of a light. You can change its action in the <b>Tap action on card</b> section.</p>
                    `}
                    
                    ${"slider"===e._config.button_type?l.qy`
                        <p><strong>Slider button:</strong> This button type lets you control entities with adjustable ranges. It's ideal for dimming lights, and its fill color will adapt to the light's color. You can also use it to display values, such as a battery level.</p>
                        <p>Supported entities for sliders:</p>
                        <ul class="icon-list">
                            <li><ha-icon icon="mdi:lightbulb-outline"></ha-icon>Light (brightness)</li>
                            <li><ha-icon icon="mdi:speaker"></ha-icon>Media player (volume)</li>
                            <li><ha-icon icon="mdi:window-shutter"></ha-icon>Cover (position)</li>
                            <li><ha-icon icon="mdi:fan"></ha-icon>Fan (percentage)</li>
                            <li><ha-icon icon="mdi:thermometer"></ha-icon>Climate (temperature)</li>
                            <li><ha-icon icon="mdi:numeric"></ha-icon>Input number and number (value)</li>
                            <li><ha-icon icon="mdi:battery-50"></ha-icon>Battery sensor (percentage, read only)</li>
                        </ul>
                        <p>You can also use any entity with a <b>numeric state</b> by disabling the entity filter in <b>Slider settings</b>, then define the <b>min</b> and <b>max</b> values. This option is read only.</p>
                    `:""}
                    
                    ${"state"===e._config.button_type?l.qy`
                        <p><strong>State button:</strong> Perfect for displaying information from a sensor or any entity. When you press it, it will show the "More info" panel of the entity. Its background color does not change.</p>
                    `:""}
                    
                    ${"name"===e._config.button_type?l.qy`
                        <p><strong>Name/Text button:</strong> The only button type that doesn't need an entity. It allows you to display a short text, a name or a title. You can also add actions to it. Its background color does not change.</p>
                    `:""}
                </div>
            </div>
            ${n?"":e.makeVersion()}
        </div>
    `}function h(e,t){delete e._config[t+"_name"],delete e._config[t+"_icon"],delete e._config[t+"_link"],delete e._config[t+"_entity"],delete e._config[t+"_pir_sensor"];for(let n=t;n<e.buttonIndex;n++)e._config[n+"_name"]=e._config[n+1+"_name"],e._config[n+"_icon"]=e._config[n+1+"_icon"],e._config[n+"_link"]=e._config[n+1+"_link"],e._config[n+"_entity"]=e._config[n+1+"_entity"],e._config[n+"_pir_sensor"]=e._config[n+1+"_pir_sensor"];delete e._config[e.buttonIndex+"_name"],delete e._config[e.buttonIndex+"_icon"],delete e._config[e.buttonIndex+"_link"],delete e._config[e.buttonIndex+"_entity"],delete e._config[e.buttonIndex+"_pir_sensor"],e.buttonIndex--,(0,s.rC)(e,"config-changed",{config:e._config})}var m=n(175);const g={en:{cards:{calendar:{busy:"Busy",all_day:"All day"}},editor:{calendar:{entity:"Entity",color:"Color",days:"Max days",limit:"Limit",list_of_calendars:"List of calendars",show_end:"Show end time",show_progress:"Show progress",show_place:"Show place",text_scrolling:"Text scrolling effect",name:"Calendar",new_calendar:"Add another calendar",remove_calendar:"Remove this calendar",settings:"Calendar settings"}}},fr:{cards:{calendar:{busy:"Occupé",all_day:"Journée"}},editor:{calendar:{entity:"Entité",color:"Couleur",days:"Jours max.",limit:"Limite",list_of_calendars:"Liste des calendriers",show_end:"Voir l'heure de fin",show_progress:"Voir la progression",show_place:"Voir le lieu",text_scrolling:"Effet de défilement du texte",name:"Calendrier",new_calendar:"Ajouter un autre calendrier",remove_calendar:"Supprimer ce calendrier",settings:"Paramètres du calendrier"}}},de:{cards:{calendar:{busy:"Beschäftigt",all_day:"Ganztägig"}},editor:{calendar:{entity:"Entität",color:"Farbe",days:"Max tage",limit:"Anzeigelimit",list_of_calendars:"Kalenderliste",show_end:"Endzeitpunkt anzeigen",show_progress:"Fortschritt anzeigen",text_scrolling:"Lauftext",name:"Kalender",new_calendar:"Kalender hinzufügen",remove_calendar:"Kalender entfernen",settings:"Kalendereinstellungen"}}},"zh-Hans":{cards:{calendar:{busy:"忙碌",all_day:"全天"}},editor:{calendar:{entity:"实体",color:"颜色",days:"最大天数",limit:"限制",list_of_calendars:"日历列表",show_end:"显示结束时间",show_progress:"显示进度",text_scrolling:"文字滚动效果",name:"日历",new_calendar:"添加另一个日历",remove_calendar:"删除此日历",settings:"日历设置"}}}};function f(e,t){return e[t]}function y(e,t){try{const n=g[t];return e.split(".").reduce(f,n)}catch{return}}function v(e){return function(t){const n=function(e){return e?.locale.language??"en"}(e),o=y(t,n);if(o)return o;return y(t,"en")||t}}function _(e){return Array.from(e).reduce((e,t)=>t.charCodeAt(0)+((e<<5)-e),0)}function w(e){const t=(16777215&e).toString(16).toUpperCase();return"#"+"00000".substring(0,6-t.length)+t}function x(e){if(e.date){const t=e.date.split("-"),n=parseInt(t[0],10),o=parseInt(t[1],10)-1,i=parseInt(t[2],10);return new Date(n,o,i)}return new Date(e.dateTime)}function k(e,t){const n=x(e.start),o=x(t.start),i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),a=new Date(o.getFullYear(),o.getMonth(),o.getDate()),r=i.getTime()-a.getTime();if(0!==r)return r;const s=void 0!==e.start.date,l=void 0!==t.start.date;return s&&!l?-1:!s&&l?1:s||l?0:n.getTime()-o.getTime()}const C=e=>e.title||e.label;class $ extends l.WF{getSchema(e){const t=v(this.hass);return[{type:"expandable",name:"",title:e?this.hass.states[e].attributes.friendly_name||e:t("editor.calendar.new_calendar"),schema:[{name:"entity",title:t("editor.calendar.entity"),selector:{entity:{domain:["calendar"]}}},{name:"color",title:t("editor.calendar.color"),selector:{ui_color:{}}}]}]}static properties={hass:{},value:{type:Array},label:{}};constructor(){super(),this.value=[]}render(){const e=v(this.hass),t=e=>()=>{const t=[...this.value||[]];t.splice(e,1),this.valueChanged({detail:{value:t}})},n=this.value??[];return l.qy`
      <ha-expansion-panel outlined style="--expansion-panel-summary-padding: 0 8px;">
        <h4 slot="header" style="display: flex; align-items: center; margin: 10px 0;">
          <ha-icon icon="mdi:calendar" style="margin: 8px;"></ha-icon>
          &nbsp;${e("editor.calendar.list_of_calendars")}
        </h4>
        <div class="content"> 
          ${n.map((n,o)=>l.qy`
              <div style="display: flex; align-items: center; margin: 12px 4px 14px 4px">
                <ha-form
                  .data=${n}
                  .schema=${this.getSchema(n.entity)}
                  .hass=${this.hass}
                  .computeLabel=${C}
                  @value-changed=${e=>{e.stopPropagation();const t=[...this.value||[]];t[o]=e.detail.value,this.valueChanged({detail:{value:t}})}}
                  style="flex-grow: 1;"
                ></ha-form>
                <ha-button @click=${t(o)}>
                  <ha-icon icon="mdi:calendar-remove"></ha-icon>&nbsp;
                  ${e("editor.calendar.remove_calendar")}
                </ha-button>
              </div>
            `)}
          <ha-button @click=${()=>{const e=[...this.value||[]];e.push({entity:"",color:""}),this.valueChanged({detail:{value:e}})}} style="margin: 12px 4px 14px 4px;">
            <ha-icon icon="mdi:calendar-plus"></ha-icon>&nbsp;
            ${e("editor.calendar.new_calendar")}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}valueChanged(e){const t=e.detail.value.map(e=>{const t=e.entity?w(_(e.entity)):"";return{entity:e.entity,color:e.color||t}});(0,s.rC)(this,"value-changed",{value:t},void 0)}}function S(e,t,n,o){if(void 0===e._lazyContentLoadedFlags&&(e._lazyContentLoadedFlags={}),n&&!e._lazyContentLoadedFlags[t]&&(e._lazyContentLoadedFlags[t]=!0),e._lazyContentLoadedFlags[t])return o()}function A(){return"undefined"!=typeof customElements&&void 0!==customElements.get("ha-dropdown")}function L({trigger:e,items:t}){const n=t.map(e=>"divider"===e.type?A()?l.qy`<wa-divider role="separator" aria-orientation="horizontal" orientation="horizontal"></wa-divider>`:l.qy`<li divider role="separator"></li>`:function({icon:e,label:t,disabled:n=!1,onClick:o,variant:i=null,type:a="item",checked:r=!1}){return A()?l.qy`
            <ha-dropdown-item 
                ?disabled=${n} 
                @click=${o} 
                variant=${i||""}
                type=${"checkbox"===a?"checkbox":""}
                ?checked=${"checkbox"===a&&r}
            >
                ${e?l.qy`<ha-icon icon="${e}" slot="icon"></ha-icon>`:""}
                ${t}
            </ha-dropdown-item>
        `:l.qy`
            <mwc-list-item 
                graphic="icon" 
                ?disabled=${n} 
                @click=${o} 
                class=${"danger"===i?"warning":""}
                ?selected=${"checkbox"===a&&r}
            >
                ${e?l.qy`<ha-icon icon="${e}" slot="graphic"></ha-icon>`:""}
                ${t}
            </mwc-list-item>
        `}(e));return A()?l.qy`
            <ha-dropdown>
                ${e}
                ${n}
            </ha-dropdown>
        `:l.qy`
            <ha-button-menu corner="BOTTOM_START" menuCorner="START" fixed @closed=${e=>e.stopPropagation()} @click=${e=>e.stopPropagation()}>
                ${e}
                ${n}
            </ha-button-menu>
        `}function E(e,t,n,o,i,a,r,s,c,u={}){const{panelKeyPrefix:b="sub_button",buttonTitle:h=`Button ${n+1}${t.name?` - ${t.name}`:""}`,arrayLength:m=null}=u;void 0===e._expandedPanelStates&&(e._expandedPanelStates={});const g=t.entity??e._config.entity,f=(0,d.zD)(g),y=g?.startsWith("input_select")||g?.startsWith("select")||t.select_attribute;if(!t.sub_button_type&&y)try{setTimeout(()=>i({sub_button_type:"select"}))}catch(e){}const v=e.hass.states[g]?.attributes,_=e._selectable_attributes.some(e=>v?.[e]),w=Object.keys(e.hass.states[g]?.attributes||{}).map(t=>{let n=e.hass.states[g];return{label:e.hass.formatEntityAttributeName(n,t),value:t}}).filter(t=>e._selectable_attributes.includes(t.value)),x=t.visibility??[],k=[{label:"Default (button)",value:"default"},...f?[]:[{label:"Slider",value:"slider"}],...y||_?[{label:"Dropdown / Select",value:"select"}]:[]],C=`${b}_main_${n}`,$=`${b}_settings_${n}`,A=`${b}_actions_${n}`,E=`${b}_visibility_${n}`,M=`${b}_layout_${n}`,T=`${b}_type_slider_${n}`,B="slider"===t.sub_button_type&&t.always_visible,P="select"===t.sub_button_type||!t.sub_button_type&&y||B,I="string"==typeof o&&o.startsWith("sub_button.bottom"),O=null==t.fill_width?!!I:t.fill_width;let q=!1;if("string"==typeof o&&o.includes(".group")){const t=o.match(/^sub_button\.(main|bottom)\.(\d+)\.group$/);if(t){const[,n,o]=t,i=e._config.sub_button;if(i&&i[n]){const e=i[n][parseInt(o,10)];if(e&&e.justify_content){const t=e.justify_content.toLowerCase();q=["end","start","center"].includes(t)}}}}const j=null===m||n>0,z=null===m||n<m-1;return l.qy`
    <ha-expansion-panel 
      outlined
      @expanded-changed=${t=>{e._expandedPanelStates[C]=t.target.expanded,e.requestUpdate()}}
    >
      <h4 slot="header">
        <ha-icon icon="mdi:border-radius"></ha-icon>
        ${h}
        <div class="button-container" @click=${e=>e.stopPropagation()} @mousedown=${e=>e.stopPropagation()} @touchstart=${e=>e.stopPropagation()}>
          ${L({trigger:l.qy`
              <mwc-icon-button slot="trigger" class="icon-button header" title="Options">
                <ha-icon style="display: flex" icon="mdi:dots-vertical"></ha-icon>
              </mwc-icon-button>
            `,items:[{type:"item",icon:"mdi:arrow-left",label:"Move left",disabled:!j,onClick:e=>{e.stopPropagation(),j&&r(-1)}},{type:"item",icon:"mdi:arrow-right",label:"Move right",disabled:!z,onClick:e=>{e.stopPropagation(),z&&r(1)}},{type:"divider"},{type:"item",icon:"mdi:content-copy",label:"Copy",onClick:e=>{e.stopPropagation(),s(e)}},{type:"item",icon:"mdi:content-cut",label:"Cut",onClick:e=>{e.stopPropagation(),c(e)}},{type:"divider"},{type:"item",icon:"mdi:delete",label:"Delete",variant:"danger",onClick:e=>{e.stopPropagation(),a(e)}}]})}
        </div>
      </h4>
      <div class="content">
        ${S(e,C,!!e._expandedPanelStates[C],()=>l.qy`
          <ha-expansion-panel 
            outlined
            @expanded-changed=${t=>{e._expandedPanelStates[$]=t.target.expanded,e.requestUpdate()}}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:cog"></ha-icon>
              Button settings
            </h4>
            <div class="content">
              ${S(e,$,!!e._expandedPanelStates[$],()=>l.qy` 
                <ha-form
                  .hass=${e.hass}
                  .data=${t}
                  .schema=${[{name:"entity",label:"Optional - Entity (default to card entity)",selector:{entity:{}}}]}   
                  .computeLabel=${e._computeLabelCallback}
                  @value-changed=${e=>i(e.detail.value)}
                ></ha-form>
                <ha-form
                  .hass=${e.hass}
                  .data=${{sub_button_type:t.sub_button_type??"default"}}
                  .schema=${[{name:"sub_button_type",selector:{select:{options:k,mode:"dropdown"}}}]}
                  .computeLabel=${()=>"Sub-button type"}
                  @value-changed=${e=>i({sub_button_type:e.detail.value.sub_button_type})}
                ></ha-form>
                ${"slider"===t.sub_button_type?l.qy`
                  <div class="bubble-info">
                    <h4 class="bubble-section-title">
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                      Slider behavior
                    </h4>
                    <div class="content">
                      <p>By default, you need to tap the sub-button to reveal the slider. To make the slider always visible, enable the "Always show slider" option in the Layout section below.</p>
                    </div>
                  </div>
                `:""}
                ${("select"===t.sub_button_type||!t.sub_button_type&&y)&&_?l.qy`
                  <ha-form
                    .hass=${e.hass}
                    .data=${{select_attribute:t.select_attribute}}
                    .schema=${[{name:"select_attribute",selector:{select:{options:w,mode:"dropdown"}}}]}
                    .computeLabel=${()=>"Optional - Select menu (from attributes)"}
                    @value-changed=${e=>i({select_attribute:e.detail.value.select_attribute})}
                  ></ha-form>
                `:""}
                <div class="ha-textfield">
                  <ha-textfield
                    label="Optional - Name"
                    .value="${t.name??""}"
                    @input="${e=>i({name:e.target.value})}"
                  ></ha-textfield>
                </div>
                <div class="ha-icon-picker">
                  <ha-icon-picker
                    label="Optional - Icon"
                    .value="${t.icon}"
                    item-label-path="label"
                    item-value-path="value"
                    @value-changed="${e=>i({icon:e.detail.value})}"
                  ></ha-icon-picker>
                </div>
              `)}
              ${e.makeShowState(t,`${o}.${n}.`,o,n)}
            </div>
          </ha-expansion-panel>

          ${"slider"===t.sub_button_type?l.qy`
            <ha-expansion-panel 
              outlined
              @expanded-changed=${t=>{e._expandedPanelStates[T]=t.target.expanded,e.requestUpdate()}}
            >
              <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                Slider settings
              </h4>
              <div class="content">
                ${S(e,T,!!e._expandedPanelStates[T],()=>l.qy`
                  ${p({hass:e.hass,data:t,entity:g,computeLabel:e._computeLabelCallback,onFormChange:e=>i(e.detail.value),onToggleChange:(e,t)=>i({[e]:t}),isReadOnly:f,forceValuePositionRight:!(!t.always_visible||!t.show_button_info)})}
                `)}
              </div>
            </ha-expansion-panel>
          `:""}

          <ha-expansion-panel 
            outlined 
            @expanded-changed=${t=>{e._expandedPanelStates[A]=t.target.expanded,e.requestUpdate()}}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:gesture-tap"></ha-icon>
              Tap action on button
            </h4>
            <div class="content">
              ${S(e,A,!!e._expandedPanelStates[A],()=>l.qy`
                ${B?l.qy`
                  <div class="bubble-info">
                    <h4 class="bubble-section-title">
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                      Actions disabled
                    </h4>
                    <div class="content">
                      <p>Tap, double tap, and hold actions are disabled on this sub-button because "Always show slider" is enabled.</p>
                    </div>
                  </div>
                `:""}
                <div style="${P?"opacity: 0.5; pointer-events: none;":""}">
                  ${e.makeActionPanel("Tap action",t,"more-info",o,n)}
                </div>
                <div style="${P?"opacity: 0.5; pointer-events: none;":""}">
                  ${e.makeActionPanel("Double tap action",t,"none",o,n)}
                </div>
                <div style="${P?"opacity: 0.5; pointer-events: none;":""}">
                  ${e.makeActionPanel("Hold action",t,"none",o,n)}
                </div>
              `)}
            </div>
          </ha-expansion-panel>

          <ha-expansion-panel 
            outlined
            @expanded-changed=${t=>{e._expandedPanelStates[E]=t.target.expanded,e.requestUpdate()}}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:eye"></ha-icon>
              Visibility
            </h4>
            <div class="content">
              ${S(e,E,!!e._expandedPanelStates[E],()=>l.qy`
                <ha-formfield label="Hide when parent entity is unavailable">
                  <ha-switch
                    .checked=${t.hide_when_parent_unavailable??!1}
                    @change=${e=>i({hide_when_parent_unavailable:e.target.checked})}
                  ></ha-switch>
                </ha-formfield>
                <ha-card-conditions-editor
                  .hass=${e.hass}
                  .conditions=${x}
                  @value-changed=${e=>i({visibility:e.detail.value})}
                >
                </ha-card-conditions-editor>
                <ha-alert alert-type="info">
                  The sub-button will be shown when ALL conditions are fulfilled. If no conditions are set, the sub-button will always be shown.
                </ha-alert>
              `)}
            </div>
          </ha-expansion-panel>

          <ha-expansion-panel 
            outlined
            @expanded-changed=${t=>{e._expandedPanelStates[M]=t.target.expanded,e.requestUpdate()}}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:view-grid"></ha-icon>
              Layout
            </h4>
            <div class="content">
              ${S(e,M,!!e._expandedPanelStates[M],()=>l.qy`
                ${I?l.qy`
                  <ha-formfield label="Fill available width">
                    <ha-switch
                      .checked=${O??!0}
                      @change=${e=>i({fill_width:e.target.checked})}
                    ></ha-switch>
                  </ha-formfield>
                `:""}
                ${"slider"===t.sub_button_type?l.qy`
                  <ha-formfield label="Always show slider">
                    <ha-switch
                      .checked=${t.always_visible??!1}
                      @change=${e=>i({always_visible:e.target.checked})}
                    ></ha-switch>
                  </ha-formfield>
                `:""}
                ${"slider"===t.sub_button_type&&t.always_visible?l.qy`
                  <ha-formfield label="Show button info (Icon, name, state...)">
                    <ha-switch
                      .checked=${t.show_button_info??!1}
                      @change=${e=>i({show_button_info:e.target.checked})}
                    ></ha-switch>
                  </ha-formfield>
                `:""}
                <ha-textfield
                  label="${I&&!q?"Custom button width (%)":"Custom button width (px)"}"
                  type="number"
                  min="${I&&!q?0:"slider"===t.sub_button_type&&t.always_visible?68:36}"
                  max="${I&&!q?100:600}"
                  .value="${t.width??""}"
                  .disabled=${!0===O}
                  @input="${e=>{const t=e.target.value;i({width:""===t?void 0:Number(t)})}}"
                ></ha-textfield>
                <ha-textfield
                  label="Custom button height (px)"
                  type="number"
                  min="20"
                  max="600"
                  .value="${t.custom_height??""}"
                  @input="${e=>{const t=e.target.value;i({custom_height:""===t?void 0:Number(t)})}}"
                ></ha-textfield>
                ${"slider"===t.sub_button_type&&t.always_visible?"":l.qy`
                  <ha-select
                    label="Content layout"
                    .value="${t.content_layout??"icon-left"}"
                    @selected="${e=>i({content_layout:e.target.value})}"
                    @closed="${e=>e.stopPropagation()}"
                    fixedMenuPosition
                  >
                    <mwc-list-item value="icon-left">Icon on left (default)</mwc-list-item>
                    <mwc-list-item value="icon-top">Icon on top</mwc-list-item>
                    <mwc-list-item value="icon-bottom">Icon on bottom</mwc-list-item>
                    <mwc-list-item value="icon-right">Icon on right</mwc-list-item>
                  </ha-select>
                `}
              `)}
            </div>
          </ha-expansion-panel>
        `)}
      </div>
    </ha-expansion-panel>
  `}function M(e,t,n){return o=>{if(o?.stopPropagation(),t){try{e._clipboardButton=JSON.parse(JSON.stringify(t))}catch(n){e._clipboardButton=t}n&&n(e._clipboardButton),e.requestUpdate()}}}function T(e,t,n,o){return i=>{i?.stopPropagation(),M(e,t,o)(i),n&&n(i)}}function B(e,t){return t===e._config.sub_button?.main?"main":t===e._config.sub_button?.bottom?"bottom":null}function P(e,t,n){try{e._config.sub_button[t]=n(e._config.sub_button[t])}catch(o){try{e._config.sub_button={...e._config.sub_button,[t]:n(e._config.sub_button[t])}}catch(o){e._config={...e._config,sub_button:{...e._config.sub_button,[t]:n(e._config.sub_button[t])}}}}}function I(e,t,n,o){return i=>{i?.stopPropagation();const a=B(e,t);if(!a)return[...t].splice(n,1),o&&o(e),void e.requestUpdate();const r=[...e._config.sub_button[a]];r.splice(n,1),P(e,a,()=>r),o&&o(e),e.requestUpdate()}}function O(e,t,n,o){return i=>{const a=n+i;if(a<0||a>=t.length)return;const r=B(e,t);if(!r){const i=[...t];return[i[n],i[a]]=[i[a],i[n]],o&&o(e),void e.requestUpdate()}const s=[...e._config.sub_button[r]];[s[n],s[a]]=[s[a],s[n]],P(e,r,()=>s),o&&o(e),e.requestUpdate()}}function q(e){const t=e.filter(e=>e&&!Array.isArray(e.group));return 0===t.length?[...e]:[{name:"Automatically grouped",buttons_layout:"inline",group:t},...e.filter(e=>e&&Array.isArray(e.group))]}function j(e,t){const n=e._clipboardButton||(t?t():null);return n?`Paste "${n.name||"sub-button"}"`:"Paste"}customElements.define("ha-selector-calendar_entity",$);const z="bubble-card-subbutton-clipboard";function D(){try{const e=localStorage.getItem(z);if(!e)return null;const t=JSON.parse(e);return t&&"object"==typeof t?t.payload??null:null}catch(e){return null}}function N(e){if(e)try{const t=JSON.parse(JSON.stringify(e)),n={type:t&&Array.isArray(t.buttons)?"group":"sub-button",savedAt:Date.now(),payload:t};localStorage.setItem(z,JSON.stringify(n))}catch(e){}}function U(e,t){if("sub-buttons"===e._config.card_type&&"main"===t)return[];if(Array.isArray(e._config.sub_button)){const t=(0,m.zD)(e._config.sub_button),n={};Array.isArray(t.main)&&t.main.length&&(n.main=t.main.slice()),Array.isArray(t.bottom)&&t.bottom.length&&(n.bottom=t.bottom.slice());try{e._config.sub_button=n}catch(t){e._config={...e._config,sub_button:n}}}if(!e._config.sub_button)try{e._config.sub_button={}}catch(t){e._config={...e._config,sub_button:{}}}if(!Array.isArray(e._config.sub_button[t]))try{e._config.sub_button[t]=[]}catch(n){try{e._config.sub_button={...e._config.sub_button,[t]:[]}}catch(n){e._config={...e._config,sub_button:{...e._config.sub_button,[t]:[]}}}}return e._config.sub_button[t]}function R(e,t,n,o){const i=n([...U(e,t)]);try{e._config.sub_button[t]=i}catch(n){try{e._config.sub_button={...e._config.sub_button,[t]:i}}catch(n){e._config={...e._config,sub_button:{...e._config.sub_button,[t]:i}}}}o&&o(e),e.requestUpdate()}function V(e,t,n,o,i){const a=[...U(e,t)],r=o({...a[n]});a[n]=r;try{e._config.sub_button[t]=a}catch(n){try{e._config.sub_button={...e._config.sub_button,[t]:a}}catch(n){e._config={...e._config,sub_button:{...e._config.sub_button,[t]:a}}}}i&&i(e),e.requestUpdate()}function F(e){const t=e._config.sub_button,n="sub-buttons"===e._config.card_type,o=e=>Array.isArray(e)&&e.some(e=>!!e&&(Array.isArray(e.group),!0)),i=!n&&o(t?.main),a=o(t?.bottom),r=!(!t||void 0===t.main_layout&&void 0===t.bottom_layout);if(!i&&!a&&!r){try{delete e._config.sub_button}catch(t){e._config={...e._config},delete e._config.sub_button}return void e._valueChanged({target:{configValue:"sub_button",value:void 0}})}if(a){e._firstRowsComputation=!0;const t=Boolean(window.isSectionView),n=Object.prototype.hasOwnProperty.call(e._config,"card_layout");if(t&&n&&"normal"===e._config.card_layout){try{delete e._config.card_layout}catch(t){const n={...e._config};delete n.card_layout,e._config=n}e._valueChanged({target:{configValue:"card_layout",value:void 0}})}}const s={};i&&(s.main=(t.main||[]).filter(e=>!!e)),a&&(s.bottom=(t.bottom||[]).filter(e=>!!e)),t&&void 0!==t.main_layout&&!n&&(s.main_layout=t.main_layout),t&&void 0!==t.bottom_layout&&(s.bottom_layout=t.bottom_layout),e._valueChanged({target:{configValue:"sub_button",value:s}})}function H(e,t){const n=(0,m.mg)(e._config),o=Array.isArray(n?.[t])?n[t]:[];return{items:o,hasGroups:o.some(e=>e&&Array.isArray(e.group)),hasIndividualButtons:o.some(e=>e&&!Array.isArray(e.group))}}function W(e,t){let{items:n,hasGroups:o,hasIndividualButtons:i}=H(e,t);o&&i&&(n=q(n),R(e,t,()=>n,F));const{isDismissed:a,dismiss:r}=function(e,t){const n=`bubble-card-groups-info-dismissed-${t}`;if(e._groupsInfoDismissed||(e._groupsInfoDismissed={}),void 0===e._groupsInfoDismissed[t])try{e._groupsInfoDismissed[t]="true"===localStorage.getItem(n)}catch(n){e._groupsInfoDismissed[t]=!1}return{isDismissed:e._groupsInfoDismissed[t],dismiss:()=>{e._groupsInfoDismissed[t]=!0;try{localStorage.setItem(n,"true")}catch(e){}e.requestUpdate()}}}(e,t),s=()=>{R(e,t,e=>{const t=q(e),n=t.filter(e=>e&&Array.isArray(e.group)).length;return[...t,{name:`Group ${n+1}`,buttons_layout:"inline",group:[]}]},F)};return l.qy`
    ${o&&!a?l.qy`
      <div class="bubble-info">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          Groups mode
          <div class="bubble-info-dismiss bubble-badge" @click=${r} title="Dismiss" 
            style="display: inline-flex; align-items: center; position: absolute; right: 16px; padding: 0 8px; cursor: pointer;">
            <ha-icon icon="mdi:close" style="margin: 0;"></ha-icon>
            Dismiss
          </div>
        </h4>
        <div class="content">
          <p>You are now in <b>groups mode</b>. All sub-buttons must be inside a group to ensure consistent ordering. You can rename, reorder, or delete groups as needed.</p>
        </div>
      </div>
    `:""}
    ${n.map((n,o)=>{if(!n)return null;if(Array.isArray(n.group))return function(e,t,n,o){const i=`${o}_group_${n}`,a="main"===o?e._config.sub_button.main:e._config.sub_button.bottom,r=t=>{V(e,o,n,e=>{const n={...e},i=Array.isArray(e.group)?[...e.group]:[],a=i.some(e=>e&&!0===e.fill_width);if(Object.prototype.hasOwnProperty.call(t,"name")&&(n.name=t.name),Object.prototype.hasOwnProperty.call(t,"buttons_layout")&&(n.buttons_layout=t.buttons_layout),"bottom"===o&&Object.prototype.hasOwnProperty.call(t,"justify_content")){const e=t.justify_content;if("fill"===e){if(Object.prototype.hasOwnProperty.call(n,"justify_content")&&delete n.justify_content,Array.isArray(i)){for(let e=0;e<i.length;e+=1){const t=i[e];if(t)if("bottom"===o){if(!1===t.fill_width){const{fill_width:n,...o}=t;i[e]={...o}}}else!0!==t.fill_width&&(i[e]={...t,fill_width:!0})}n.group=i}}else if(a);else if(n.justify_content=e,Array.isArray(i)){for(let e=0;e<i.length;e+=1){const t=i[e];t&&!1!==t.fill_width&&(i[e]={...t,fill_width:!1})}n.group=i}}return n},F)},s=a[n],c=I(e,a,n,F),d=O(e,a,n,F),u=M(e,s,N),p=T(e,s,c,N),b=function(e,t,n,o,i){return()=>{const a=e._clipboardButton||(i?i():null);if(!a)return;e._clipboardButton=a;const r=B(e,t);if(!r)return;const s=[...e._config.sub_button[r]],l={...s[n]};Array.isArray(l.group)||(l.group=[]);const c="bottom"===r&&l.justify_content&&"fill"!==l.justify_content;if(Array.isArray(a?.buttons)||Array.isArray(a?.group)){let e=JSON.parse(JSON.stringify(a.buttons||a.group||[]));c&&(e=e.map(e=>e?{...e,fill_width:!1}:e)),l.group=[...l.group,...e]}else{let e=JSON.parse(JSON.stringify(a));c&&e&&(e.fill_width=!1),l.group=[...l.group,e]}s[n]=l,P(e,r,()=>s),o&&o(e),e.requestUpdate()}}(e,a,n,F,D),h=n>0,m=n<a.length-1;return l.qy`
    <ha-expansion-panel 
      outlined
      style="border-style: dashed;"
      @expanded-changed=${t=>{e._expandedPanelStates[i]=t.target.expanded,e.requestUpdate()}}
    >
      <h4 slot="header">
        <ha-icon icon="mdi:format-list-group"></ha-icon>
        ${t.name||`Group ${n+1}`}
        <div class="button-container" @click=${e=>e.stopPropagation()} @mousedown=${e=>e.stopPropagation()} @touchstart=${e=>e.stopPropagation()}>
          ${L({trigger:l.qy`
              <mwc-icon-button slot="trigger" class="icon-button header" title="Options">
                <ha-icon style="display: flex" icon="mdi:dots-vertical"></ha-icon>
              </mwc-icon-button>
            `,items:[{type:"item",icon:"mdi:arrow-up",label:"Move up",disabled:!h,onClick:e=>{e.stopPropagation(),h&&d(-1)}},{type:"item",icon:"mdi:arrow-down",label:"Move down",disabled:!m,onClick:e=>{e.stopPropagation(),m&&d(1)}},{type:"divider"},{type:"item",icon:"mdi:content-copy",label:"Copy group",onClick:e=>{e.stopPropagation(),u(e)}},{type:"item",icon:"mdi:content-cut",label:"Cut group",onClick:e=>{e.stopPropagation(),p(e)}},{type:"divider"},{type:"item",icon:"mdi:delete",label:"Delete",variant:"danger",onClick:e=>{e.stopPropagation(),c(e)}}]})}
        </div>
      </h4>
      <div class="content">
        ${S(e,i,!!e._expandedPanelStates[i],()=>l.qy`
          <ha-form
            .hass=${e.hass}
            .data=${{name:t.name??""}}
            .schema=${[{name:"name",label:"Group name",selector:{text:{}}}]}
            .computeLabel=${e._computeLabelCallback}
            @value-changed=${e=>r(e.detail.value)}
          ></ha-form>

          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:view-grid"></ha-icon>
              Group layout
            </h4>
            <div class="content">
              <ha-form
                .hass=${e.hass}
                .data=${(()=>{const e=(Array.isArray(t.group)?t.group:[]).some(e=>e&&!0===e.fill_width)?"fill":t.justify_content??"fill";return{buttons_layout:t.buttons_layout??"inline",justify_content:e}})()}
                .schema=${(()=>{const e=(Array.isArray(t.group)?t.group:[]).some(e=>e&&!0===e.fill_width);let n=[{value:"fill",label:"Fill available width (default)"},{value:"end",label:"Right"},{value:"start",label:"Left"},{value:"center",label:"Center"},{value:"space-between",label:"Space between"},{value:"space-around",label:"Space around"},{value:"space-evenly",label:"Space evenly"}];"column"===t.buttons_layout&&(n=n.filter(e=>!["space-between","space-around","space-evenly"].includes(e.value)));const i=[{name:"buttons_layout",label:"Buttons layout",selector:{select:{options:[{value:"inline",label:"Inline"},{value:"column",label:"Column"}],mode:"dropdown"}}}];return"bottom"===o&&i.push({name:"justify_content",label:"Buttons alignment",selector:{select:{options:n,mode:"dropdown"}},disabled:e}),i})()}
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e=>r(e.detail.value)}
              ></ha-form>
              ${"bottom"!==o?"":(Array.isArray(t.group)?t.group:[]).some(e=>e&&!0===e.fill_width)?l.qy`
                  <div class="bubble-info">
                    <h4 class="bubble-section-title">
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                      Buttons alignment locked by sub-button settings
                    </h4>
                    <div class="content">
                      <p>One or more sub-buttons explicitly enable "Fill available width". To change alignment, first disable "Fill available width" in those sub-buttons.</p>
                    </div>
                  </div>
                `:""}
            </div>
          </ha-expansion-panel>

          <h4 class="group-buttons-header">Group sub-buttons</h4>
          ${Array.isArray(t.group)?t.group.map((i,a)=>{if(!i)return null;const r=t=>{t?.stopPropagation(),V(e,o,n,e=>{const t={...e},n=Array.isArray(t.group)?[...t.group]:[];return n.splice(a,1),t.group=n,t},F)},s=Array.isArray(t.group)?t.group[a]:null,l=M(e,s,N),c=T(e,s,r,N),d=(Array.isArray(t.group)?t.group:[]).length;return E(e,i,a,`sub_button.${o}.${n}.group`,t=>{V(e,o,n,e=>{const n={...e},o=Array.isArray(n.group)?[...n.group]:[];return o[a]={...o[a]||{},...t},n.group=o,n},F)},r,t=>{const i=a+t,r=U(e,o),s=Array.isArray(r[n]?.group)?r[n].group:[];i<0||i>=s.length||V(e,o,n,e=>{const t={...e},n=Array.isArray(t.group)?[...t.group]:[];return[n[a],n[i]]=[n[i],n[a]],t.group=n,t},F)},l,c,{panelKeyPrefix:`${o}_group_${n}_button`,buttonTitle:i.name||`Button ${a+1}`,arrayLength:d})}):null}

          <div class="element-actions">
            <button class="icon-button paste-button no-bg ${e._clipboardButton||D()?"":"disabled"}" @click=${b}>
              <ha-icon icon="mdi:content-paste"></ha-icon>
              <span class="paste-button-text">
                ${j(e,D)}
              </span>
            </button>
            <button class="icon-button" @click=${()=>{V(e,o,n,t=>{const n={...t};Array.isArray(n.group)||(n.group=[]);const i="bottom"===o&&n.justify_content&&"fill"!==n.justify_content?{entity:e._config.entity,fill_width:!1}:{entity:e._config.entity};return n.group=[...n.group,i],n},F)}}>
              <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
              Add sub-button
            </button>
          </div>
        `)}
      </div>
    </ha-expansion-panel>
  `}(e,n,o,t);const i="main"===t?e._config.sub_button.main:e._config.sub_button.bottom,a=I(e,i,o,F),r=O(e,i,o,F),s=i[o],c=M(e,s,N),d=T(e,s,a,N),u=i.length;return E(e,n,o,`sub_button.${t}`,n=>{R(e,t,e=>{const t=[...e];return t[o]={...t[o]||{},...n},t},F)},a,r,c,d,{panelKeyPrefix:`${t}_button`,buttonTitle:`Button ${o+1}${n.name?` - ${n.name}`:""}`,arrayLength:u})})}

    <div class="element-actions">
      ${(()=>{const n=U(e,"main"===t?"main":"bottom"),o=function(e,t,n,o){return()=>{const i=e._clipboardButton||(o?o():null);if(!i)return;e._clipboardButton=i;const a=JSON.parse(JSON.stringify(i)),r=B(e,t),s=Array.isArray(a.buttons)||Array.isArray(a.group),l=r?e._config.sub_button[r]:t;let c=s?q(l):[...l];s?c.push({name:a.name,buttons_layout:a.display||a.buttons_layout||"inline",justify_content:a.justify_content,group:a.buttons||a.group||[]}):c.push(a),r&&P(e,r,()=>c),n&&n(e),e.requestUpdate()}}(e,n,F,D);return l.qy`
          <button class="icon-button paste-button no-bg ${e._clipboardButton||D()?"":"disabled"}" @click=${o}>
            <ha-icon icon="mdi:content-paste"></ha-icon>
            <span class="paste-button-text">
              ${j(e,D)}
            </span>
          </button>
        `})()}
      ${o?l.qy`
        <button class="icon-button" @click=${()=>{s()}}>
          <ha-icon icon="mdi:format-list-group-plus"></ha-icon>
          Add group
        </button>
      `:L({trigger:l.qy`
          <button slot="trigger" class="icon-button add-menu-trigger">
            <ha-icon icon="mdi:plus"></ha-icon>
            Add
          </button>
        `,items:[{type:"item",icon:"mdi:shape-square-rounded-plus",label:"Add sub-button",onClick:()=>{R(e,t,t=>[...t,{entity:e._config.entity}],F)}},{type:"item",icon:"mdi:format-list-group-plus",label:"Add group",onClick:()=>{s()}}]})}
    </div>
  `}function Y(e,t){if(!H(e,t).hasGroups)return"";const n=`${t}_layout`,o=e._config?.sub_button?.[n]??"inline";return l.qy`
    <ha-form
      .hass=${e.hass}
      .data=${{[n]:o}}
      .schema=${[{name:n,label:"Groups placement",selector:{select:{options:[{value:"inline",label:"Inline"},{value:"rows",label:"Rows (stack groups vertically)"}],mode:"dropdown"}}}]}
      .computeLabel=${e._computeLabelCallback}
      @value-changed=${t=>{const o=t.detail?.value?.[n];if(!e._config.sub_button)try{e._config.sub_button={}}catch(t){e._config={...e._config,sub_button:{}}}try{e._config.sub_button[n]=o}catch(t){try{e._config.sub_button={...e._config.sub_button,[n]:o}}catch(t){e._config={...e._config,sub_button:{...e._config.sub_button,[n]:o}}}}F(e),e.requestUpdate()}}
    ></ha-form>
  `}var K=n(933),X=n(766),J=n(937),G=n(868),Q=n(134);const Z="sensor.bubble_card_modules",ee=["modules","store"],te="bubble-card-force-unsupported-modules";function ne(){return"undefined"!=typeof customElements&&void 0!==customElements.get("ha-tab-group")&&void 0!==customElements.get("ha-tab-group-tab")?"ha-tab-group":"undefined"!=typeof customElements&&void 0!==customElements.get("sl-tab-group")?"sl-tab-group":"ha-tabs"}async function oe(e,t,n){try{if(!e.hass)return!1;if(!await(0,Q.ensureBCTProviderAvailable)(e.hass))return console.warn("Bubble Card Tools is required to change global status."),!1;const o={...a.Ki.get(t)||{}};return!0===n?o.is_global=!0:delete o.is_global,a.Ki.set(t,o),await(0,Q.writeModuleYaml)(e.hass,t,o),document.dispatchEvent(new CustomEvent("yaml-modules-updated")),!0}catch(e){return console.error("Error setting module global status:",e),!1}}function ie(e,t){try{const n=a.Ki.get(e);if(n&&"object"==typeof n&&!0===n.is_global)return!0;if(Q.isBCTAvailableSync&&(0,Q.isBCTAvailableSync)())return!1;if(!t||!t.states||!t.states[Z])return!1;const o=t.states[Z];if(!o.attributes||!o.attributes.modules)return!1;const i=o.attributes.modules[e];return i&&!0===i.is_global}catch(t){return console.warn(`Error checking if module ${e} is global:`,t),!1}}function ae(e,t){const n=e._config?.modules||[],o=Array.isArray(n)?n:[n];return!o.includes(`!${t}`)&&(!!o.includes(t)||ie(t,e.hass))}function re(e){if(!a.Ki||0===a.Ki.size)return[];let t=Array.from(a.Ki.keys());const n=e._myModulesSearchQuery;if(n&&n.trim()){const e=n.toLowerCase().trim();t=t.filter(t=>{const n=(0,K.a7)(t),o=(n.name||t).toLowerCase(),i=(n.description||"").toLowerCase(),a=(n.creator||"").toLowerCase();return o.includes(e)||i.includes(e)||a.includes(e)})}if(!e._myModulesSortOrder)try{const t=localStorage.getItem("bubble-card-modules-sort-order");e._myModulesSortOrder=t||"default"}catch(t){e._myModulesSortOrder="default"}const o=e._myModulesSortOrder||"default",i=(0,Q.getAllModulesLastModified)(),r=e=>{const t=i.get(e);if(!t)return 0;const n=new Date(t).getTime();return isNaN(n)?0:n};return t.sort((t,n)=>{if("default"===t)return-1;if("default"===n)return 1;const i=(0,K.a7)(t),a=(0,K.a7)(n),s=ae(e,t),l=ae(e,n);switch(o){case"alphabetical":return(i.name||t).localeCompare(a.name||n,void 0,{sensitivity:"base"});case"default":if(s!==l)return s?-1:1;const e=r(t),o=r(n);return e!==o&&e>0&&o>0?o-e:(i.name||t).localeCompare(a.name||n,void 0,{sensitivity:"base"});case"recent-first":const c=r(t),d=r(n);return c!==d&&c>0&&d>0?d-c:(i.name||t).localeCompare(a.name||n,void 0,{sensitivity:"base"});default:if(s!==l)return s?-1:1;const u=r(t),p=r(n);return u!==p&&u>0&&p>0?p-u:(i.name||t).localeCompare(a.name||n,void 0,{sensitivity:"base"})}}),t}class se extends l.WF{_previewStyleApplied=!1;_entityCache={};_cachedAttributeList=null;_cachedAttributeListEntity=null;_expandedPanelStates={};_moduleErrorCache={};_moduleCodeEvaluating=null;_rowsAutoMode=void 0;_autoRowsComputeScheduled=!1;_previewCardRoot=null;_previewCardHost=null;_previewCardScore=-1/0;_cardContextListener=null;_lastMeasuredHeights=null;constructor(){super(),this._expandedPanelStates={},this._cardContextListener=e=>this._handleCardContext(e),window.addEventListener("bubble-card-context",this._cardContextListener)}setConfig(e){const t=this._previewCardHost||this._previewCardRoot?.host||null,n=!!t?.isConnected;this._config={...e},n?this._previewCardScore=-1/0:this._resetPreviewCardReference(),void 0===this._rowsAutoMode&&(this._rowsAutoMode=!0),void 0!==this._config?.grid_options?.rows&&null!==this._config?.grid_options?.rows&&""!==this._config?.grid_options?.rows&&(this._rowsAutoMode=!1)}_deepQuerySelector(e,t,n=6){try{if(!e||n<0)return null;const o=e.querySelector?.(t);if(o)return o;const i=e.querySelectorAll?.("*")||[];for(const e of i)if(e?.shadowRoot){const o=this._deepQuerySelector(e.shadowRoot,t,n-1);if(o)return o}return null}catch(e){return null}}_getEditorPreviewContainer(){try{const e=document.querySelector("body > home-assistant");return e?.shadowRoot?.querySelector("hui-dialog-edit-card")?.shadowRoot?.querySelector("ha-dialog > div.content > div.element-preview")||null}catch(e){return null}}_removeRowsOverrideAndRecalculate=()=>{try{const e={...this._config};if(e.grid_options){const{rows:t,...n}=e.grid_options;Object.keys(n).length>0?e.grid_options=n:delete e.grid_options}delete e.rows,this._rowsAutoMode=!0,this._config=e,(0,s.rC)(this,"config-changed",{config:e}),requestAnimationFrame(()=>{try{this._firstRowsComputation=!0,this._lastMeasuredHeights=null,this._setupAutoRowsObserver();const e=this._getBubbleCardFromPreview();e?this._computeAndApplyRows(e):this._waitForPreviewAndRecompute()}catch(e){}})}catch(e){console.error("Bubble Card Editor: failed to remove rows override",e)}};_waitForPreviewAndRecompute(e=0){try{const e=this._getBubbleCardFromPreview();if(e){this._setupAutoRowsObserver();const t=this._computeAndApplyRows(e);if(t?.applied)return}}catch(e){}e+1>=40||setTimeout(()=>this._waitForPreviewAndRecompute(e+1),50)}_scheduleAutoRowsCompute(){this._autoRowsComputeScheduled||(this._autoRowsComputeScheduled=!0,requestAnimationFrame(()=>{this._autoRowsComputeScheduled=!1;try{if(void 0!==this._config?.grid_options?.rows&&null!==this._config?.grid_options?.rows&&""!==this._config?.grid_options?.rows||!1===this._rowsAutoMode)return;this._setupAutoRowsObserver();const e=this._getBubbleCardFromPreview();e&&this._computeAndApplyRows(e)}catch(e){}}))}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config?.card_type||""}get _button_type(){return this._config?.button_type||("pop-up"===this._config?.card_type?"":"switch")}get _entity(){return this._config?.entity||""}get _selectable_attributes(){return["source_list","sound_mode_list","hvac_modes","fan_modes","swing_modes","preset_modes","effect_list"]}updated(e){super.updated(e),e.has("hass")&&(this.listsUpdated=!1,this._entityCache={},this._cachedAttributeList=null,this._cachedAttributeListEntity=null),this._setupAutoRowsObserver()}async firstUpdated(e){if(super.firstUpdated(e),this.hass&&this.hass.loadFragmentTranslation)try{await this.hass.loadFragmentTranslation("config")}catch(e){console.error("Bubble Card Editor: Failed to load 'config' fragment translation",e)}}disconnectedCallback(){super.disconnectedCallback?.();try{this._errorListener&&(window.removeEventListener("bubble-card-error",this._errorListener),this._errorListener=null)}catch(e){}try{this._moduleChangeHandler&&(window.removeEventListener("bubble-card-modules-changed",this._moduleChangeHandler),window.removeEventListener("bubble-card-module-updated",this._moduleChangeHandler),document.removeEventListener("yaml-modules-updated",this._moduleChangeHandler),this._moduleChangeHandler=null,this._moduleChangeListenerAdded=!1)}catch(e){}try{this._storeAutoRefreshTimer&&(clearInterval(this._storeAutoRefreshTimer),this._storeAutoRefreshTimer=null)}catch(e){}try{this._progressInterval&&(clearInterval(this._progressInterval),this._progressInterval=null)}catch(e){}try{this._editorSchemaDebounce&&(clearTimeout(this._editorSchemaDebounce),this._editorSchemaDebounce=null)}catch(e){}try{this._cardContextListener&&(window.removeEventListener("bubble-card-context",this._cardContextListener),this._cardContextListener=null)}catch(e){}se._resizeObserver&&this._observedElements&&(this._observedElements.forEach(e=>{se._resizeObserver.unobserve(e),se._editorInstanceMap.delete(e)}),this._observedElements=[])}render(){if(!this.hass)return l.qy``;const e=v(this.hass);if(!this._previewStyleApplied){const e=document.querySelector("body > home-assistant"),t=e?.shadowRoot?.querySelector("hui-dialog-edit-card")?.shadowRoot?.querySelector("ha-dialog > div.content > div.element-preview");t?.style&&"sticky"!==t.style.position&&(t.style.position="sticky",t.style.top="0",t.style.height="calc(100vh - 224px)",t.style.overflowY="auto",this._previewStyleApplied=!0)}this.listsUpdated||(this._initializeLists(e),this.listsUpdated=!0);const t=this.cardTypeList;switch(this.buttonTypeList,this._config?.card_type){case"pop-up":return function(e){const t=e._config?.trigger??[];if(e._config.button_action,"pop-up"===e._config.card_type&&!e._config.hash){const t={...e._config};let n=!1;return setTimeout(()=>{n=!1===window.popUpError,function(e,t){if(!e.shadowRoot)return;const n=e.shadowRoot.querySelector("#vertical-stack-alert-container");n&&(n.style.display=t?"block":"none");const o=e.shadowRoot.querySelector(".icon-button ha-icon");o&&(o.icon=t?"mdi:content-save":"mdi:plus");const i=e.shadowRoot.querySelector("#button-text");i&&(i.textContent=t?"Update Hash":"Create Pop-up");const a=e.shadowRoot.querySelector("#include-example");a&&(a.disabled=t);const r=e.shadowRoot.querySelector(".mdc-form-field .mdc-label");r&&(r.textContent="Include example configuration"+(t?" (disabled because pop-up is already in a vertical stack)":""))}(e,n)},0),e.createPopUpConfig=()=>function(e,t){try{const t=!1===window.popUpError,n=e.shadowRoot.querySelector("#include-example")?.checked||!1;let o="#pop-up-name";const i=e.shadowRoot.querySelector("#hash-input");if(i&&i.value&&(o=i.value),t)return e._config.hash=o,(0,s.rC)(e,"config-changed",{config:e._config}),void console.info("Pop-up already in a vertical stack. Hash updated. Note that manually creating a vertical stack is no longer required.");if(n){const t=function(e,t="light",n=2){const o=[];return e&&e.states?(Object.keys(e.states).forEach(i=>{if(!(o.length>=n)&&i.startsWith(t+".")){let t=!1;"brightness"in e.states[i].attributes&&(t=!0),o.push({entity:i,supportsBrightness:t})}}),o):o}(e.hass);e._config={type:"vertical-stack",cards:[{type:"custom:bubble-card",card_type:"pop-up",name:"Living room",icon:"mdi:sofa-outline",hash:o},{type:"custom:bubble-card",card_type:"separator",name:"Lights (example)",icon:"mdi:lightbulb-outline"},{type:"horizontal-stack",cards:t.length>0?t.map(e=>({type:"custom:bubble-card",card_type:"button",button_type:e.supportsBrightness?"slider":"switch",entity:e.entity,show_state:!0})):[{type:"custom:bubble-card",card_type:"button",button_type:"name",name:"Floor lamp",icon:"mdi:floor-lamp-outline"}]}]}}else e._config={type:"vertical-stack",cards:[{type:"custom:bubble-card",card_type:"pop-up",hash:o}]},window.bubbleNewlyCreatedHashes=window.bubbleNewlyCreatedHashes||new Set,window.bubbleNewlyCreatedHashes.add(o);(0,s.rC)(e,"config-changed",{config:e._config})}catch(n){console.error("Error creating pop-up:",n),e._config=t,e._config.hash=e.shadowRoot.querySelector("#hash-input")?.value||"#pop-up-name",(0,s.rC)(e,"config-changed",{config:e._config})}}(e,t),l.qy`
            <div class="card-config">
                ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
                <div id="vertical-stack-alert-container" style="display: none;">
                    <div class="bubble-info warning">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:alert-outline"></ha-icon>
                            Old configuration detected
                        </h4>
                        <div class="content">
                            <p>This pop-up is already inside a vertical stack (old method). This is no longer required, but it will work fine. You can simply update the hash below.</p>
                        </div>
                    </div>
                </div>
                <ha-textfield
                    label="Hash (e.g. #kitchen)"
                    .value="${e._config?.hash||"#pop-up-name"}"
                    id="hash-input"
                ></ha-textfield>
                <ha-formfield .label="Include example configuration">
                    <ha-switch
                        aria-label="Include example configuration"
                        .checked=${!1}
                        id="include-example"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Include example configuration</label>
                    </div>
                </ha-formfield>
                
                <button class="icon-button" @click="${()=>e.createPopUpConfig()}">
                    <ha-icon icon="mdi:plus"></ha-icon>
                    <span id="button-text">Create pop-up</span>
                </button>

                <hr />

                <div class="bubble-info">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Pop-up
                    </h4>
                    <div class="content">
                        <p>Pop-ups are a great way to declutter your dashboard and quickly display more information when you need it.</p>
                        <p>If it's your first time creating a pop-up, you can use the example configuration to get started.</p>
                    </div>
                </div>
                
                ${e.makeVersion()}
            </div>
        `}return l.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-textfield
                label="Hash (e.g. #kitchen)"
                .value="${e._config?.hash||"#pop-up-name"}"
                .configValue="${"hash"}"
                @input="${e._valueChanged}"
            ></ha-textfield>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:dock-top"></ha-icon>
                  Header settings
                </h4>
                <div class="content">
                    <ha-formfield .label="Show header">
                        <ha-switch
                            aria-label="Show header"
                            .checked=${e._config.show_header??!0}
                            .configValue="${"show_header"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Show header</label> 
                        </div>
                    </ha-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Hidden header
                        </h4>
                        <div class="content">
                            <p>You can completely hide the pop-up header, including the close button. To close it when hidden, either make a long swipe within the pop-up or click outside of it.</p>
                        </div>
                    </div>
                    <div style="${e._config?.show_header??1?"":"display: none;"}">
                        <hr />
                        ${b(e)}
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Pop-up settings
                </h4>
                <div class="content">
                    <ha-textfield
                        label="Auto close in milliseconds (e.g. 15000)"
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="1000"
                        .value="${e._config?.auto_close||""}"
                        .configValue="${"auto_close"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Slide to close distance (default to 400)"
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="10"
                        .value="${e._config.slide_to_close_distance??400}"
                        .configValue="${"slide_to_close_distance"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-formfield .label="Close the pop-up by clicking outside of it (a refresh is needed)">
                        <ha-switch
                            aria-label="Close the pop-up by clicking outside of it (a refresh is needed)"
                            .checked=${e._config?.close_by_clicking_outside??!0}
                            .configValue="${"close_by_clicking_outside"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Close the pop-up by clicking outside of it (a refresh is needed)</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Close the pop-up after any click or tap">
                        <ha-switch
                            aria-label="Close the pop-up after any click or tap"
                            .checked=${e._config?.close_on_click||!1}
                            .configValue="${"close_on_click"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Close the pop-up after any click or tap</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Update cards in background (not recommended)">
                        <ha-switch
                            aria-label="Update cards in background (not recommended)"
                            .checked=${e._config?.background_update||!1}
                            .configValue="${"background_update"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Update cards in background (not recommended)</label> 
                        </div>
                    </ha-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Background updates
                        </h4>
                        <div class="content">
                            <p>Background updates are only recommended if you encounter issues with certain cards within your pop-up.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:bell"></ha-icon>
                  Pop-up trigger
                </h4>
                <div class="content">
                    <ha-formfield>
                        <ha-switch
                            .checked=${e._config.trigger_close??!0}
                            .configValue="${"trigger_close"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Close pop-up when conditions are not met</label> 
                        </div>
                    </ha-formfield>
                    <ha-card-conditions-editor
                        .hass=${e.hass}
                        .conditions=${t}
                        @value-changed=${t=>e._conditionChanged(t)}
                    >
                    </ha-card-conditions-editor>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            About conditions
                        </h4>
                        <div class="content">
                            <p>The pop-up will be opened when ALL conditions are fulfilled. For example you can open a "Security" pop-up with a camera when a person is in front of your house.</p>
                            <p>You can also create a toggle helper (<code>input_boolean</code>) and trigger its opening/closing in an automation.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Pop-up open/close action
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Open action",e._config,"none")}
                    ${e.makeActionPanel("Close action",e._config,"none")}
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            About actions
                        </h4>
                        <div class="content">
                            <p>This allows you to trigger an action on pop-up open/close.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Pop-up styling
                        </h4>
                        <div class="content"> 
                            <ha-textfield
                                label="Margin (fix centering on some themes) (e.g. 13px)"
                                .value="${e._config?.margin||"7px"}"
                                .configValue="${"margin"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Top margin on mobile (e.g. -56px if your header is hidden)"
                                .value="${e._config?.margin_top_mobile||"0px"}"
                                .configValue="${"margin_top_mobile"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Top margin on desktop (e.g. 50vh for an half sized pop-up)"
                                .value="${e._config?.margin_top_desktop||"0px"}"
                                .configValue="${"margin_top_desktop"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Width on desktop (100% by default on mobile)"
                                .value="${e._config?.width_desktop||"540px"}"
                                .configValue="${"width_desktop"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Background color (any var, hex, rgb or rgba value)"
                                .value="${e._config?.bg_color||""}"
                                .configValue="${"bg_color"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Background opacity (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${void 0!==e._config?.bg_opacity?e._config?.bg_opacity:"88"}"
                                .configValue="${"bg_opacity"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Background blur (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${void 0!==e._config?.bg_blur?e._config?.bg_blur:"10"}"
                                .configValue="${"bg_blur"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Backdrop blur (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${void 0!==e._config?.backdrop_blur?e._config?.backdrop_blur:"0"}"
                                .configValue="${"backdrop_blur"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Shadow opacity (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .configValue="${"shadow_opacity"}"
                                .value="${void 0!==e._config?.shadow_opacity?e._config?.shadow_opacity:"0"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-formfield .label="Hide pop-up backdrop (a refresh is needed)">
                                <ha-switch
                                    aria-label="Hide pop-up backdrop (a refresh is needed)"
                                    .checked=${e._config.hide_backdrop??!1}
                                    .configValue="${"hide_backdrop"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Hide pop-up backdrop (a refresh is needed)</label> 
                                </div>
                            </ha-formfield>
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:information-outline"></ha-icon>
                                    Hide pop-up backdrop
                                </h4>
                                <div class="content">
                                    <p>This will hide the pop-up backdrop, which is a dark overlay that appears behind the pop-up.</p>
                                    <p>You can enable this setting for all your pop-ups at once by turning it on in the first pop-up on your dashboard.</p>
                                    <p><b>Hiding it is recommended if you encounter performance issues when opening/closing pop-ups.</b></p>
                                </div>
                            </div>
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info-container">
                <div class="bubble-info">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        How to use pop-ups
                    </h4>
                    <div class="content">
                        <p>Each pop-up is <b>hidden by default</b> and <b>can be opened by targeting its hash</b> (e.g., '#pop-up-name'), with <a href="https://github.com/Clooos/Bubble-Card#example" target="_blank" rel="noopener noreferrer">any card</a> that supports the <code>navigate</code> <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#tap-double-tap-and-hold-actions" target="_blank" rel="noopener noreferrer">action</a>.</p>
                        <p><b>You can also watch this <a href="https://www.youtube.com/watch?v=7mOV7BfWoFc" target="_blank" rel="noopener noreferrer">video</a> that explains how to create your first pop-up</b> (this video is outdated, you don't need to add a vertical stack anymore).</p>
                    </div>
                </div>
                
                <div class="bubble-info warning">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:alert-outline"></ha-icon>
                        Important
                    </h4>
                    <div class="content">
                        <p>To avoid misalignment with your view, place this card after all other dashboard cards. You can't trigger it from a different view.</p>
                        <p>If the content of your pop-up appears on the screen during page loading, <a href="https://github.com/Clooos/Bubble-Card#pop-up-initialization-fix" target="_blank" rel="noopener noreferrer">you can install this fix</a> (recommended).</p>
                    </div>
                </div>
            </div>
            ${e.makeVersion()}
      </div>
    `}(this);case"button":return b(this);case"sub-buttons":return function(e){const t="pop-up"===e._config.card_type;return l.qy`
        <div class="card-config">
            ${t?"":e.makeDropdown("Card type","card_type",e.cardTypeList)}

            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:cog"></ha-icon>
                    Card settings
                </h4>
                <div class="content">
                    <ha-formfield>
                        <ha-switch
                            label="Hide main background"
                            .checked="${e._config?.hide_main_background||!1}"
                            .configValue="${"hide_main_background"}"
                            @change="${e._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Hide main background</label> 
                        </div>
                    </ha-formfield>

                    <ha-formfield>
                        <ha-switch
                            label="Footer mode (Fixed position at bottom)"
                            .checked="${e._config?.footer_mode||!1}"
                            .configValue="${"footer_mode"}"
                            @change="${e._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Footer mode (Fixed position at bottom)</label> 
                        </div>
                    </ha-formfield>

                    ${e._config?.footer_mode?l.qy`
                        <div style="margin-top: 16px; padding-left: 16px; border-left: 2px solid var(--divider-color);">
                            <ha-formfield>
                                <ha-switch
                                    label="Full width footer"
                                    .checked="${e._config?.footer_full_width||!1}"
                                    .configValue="${"footer_full_width"}"
                                    @change="${e._valueChanged}"
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Full width footer (100% width)</label> 
                                </div>
                            </ha-formfield>

                            ${e._config?.footer_full_width?"":l.qy`
                                <ha-textfield
                                    label="Custom footer width (px)"
                                    type="number"
                                    value="${e._config?.footer_width||500}"
                                    .configValue="${"footer_width"}"
                                    @input="${e._valueChanged}"
                                    min="200"
                                    max="1200"
                                    step="10"
                                    style="margin-top: 8px;"
                                ></ha-textfield>
                                <div style="font-size: 0.8em; color: var(--secondary-text-color); margin-top: 4px;">
                                    Footer will be centered on the page
                                </div>
                            `}

                            <ha-textfield
                                label="Footer bottom distance (px)"
                                type="number"
                                value="${e._config?.footer_bottom_offset||16}"
                                .configValue="${"footer_bottom_offset"}"
                                @input="${e._valueChanged}"
                                min="0"
                                max="100"
                                step="1"
                                style="margin-top: 16px;"
                            ></ha-textfield>
                            <div style="font-size: 0.8em; color: var(--secondary-text-color); margin-top: 4px;">
                                Distance from the bottom of the page (default: 16px)
                            </div>
                        </div>
                    `:""}
                </div>
            </ha-expansion-panel>

            ${e.makeSubButtonPanel()}

            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:palette"></ha-icon>
                    Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    ${t?"":e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>

            ${e.makeModulesEditor()}

            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Sub-buttons card
                </h4>
                <div class="content">
                    <p>This card can only contain sub-buttons, perfect for displaying information, creating menus, and even a fixed footer menu at the bottom of the page.</p>
                </div>
            </div>

            ${t?"":e.makeVersion()}
        </div>
    `}(this);case"separator":return n=this,l.qy`
    <div class="card-config">
        ${n.makeDropdown("Card type","card_type",n.cardTypeList)}
        <ha-textfield
            label="Name"
            .value="${n._config?.name||""}"
            .configValue="${"name"}"
            @input="${n._valueChanged}"
        ></ha-textfield>
        ${n.makeDropdown("Icon","icon")}
        ${n.makeSubButtonPanel()}
        <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:palette"></ha-icon>
              Styling and layout options
            </h4>
            <div class="content">
                ${n.makeLayoutPanel()}
                ${n.makeStyleEditor()}
            </div>
        </ha-expansion-panel>
        ${n.makeModulesEditor()}
        <div class="bubble-info">
            <h4 class="bubble-section-title">
                <ha-icon icon="mdi:information-outline"></ha-icon>
                Separator card
            </h4>
            <div class="content">
                <p>This card is a simple separator for dividing your pop-up/dashboard into categories or sections. e.g. Lights, Devices, Covers, Settings, Automations...</p>
            </div>
        </div>
        ${n.makeVersion()}
  </div>
`;case"horizontal-buttons-stack":return function(e){if(!e.buttonAdded)for(e.buttonAdded=!0,e.buttonIndex=0;e._config[e.buttonIndex+1+"_link"];)e.buttonIndex++;return l.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <div id="buttons-container">
                ${function(e){let t=[];for(let n=1;n<=e.buttonIndex;n++)t.push(l.qy`
            <div class="${n}_button">
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="mdi:border-radius"></ha-icon>
                        Button ${n} ${e._config[n+"_name"]?"- "+e._config[n+"_name"]:""}
                        <div class="button-container">
                            <button class="icon-button header" @click="${()=>h(e,n)}">
                              <ha-icon icon="mdi:delete"></ha-icon>
                            </button>
                        </div>
                    </h4>
                    <div class="content">
                        <ha-textfield
                            label="Link / Hash to pop-up (e.g. #kitchen)"
                            .value="${e._config[n+"_link"]||""}"
                            .configValue="${n}_link"
                            @input="${e._valueChanged}"
                        ></ha-textfield>
                        <ha-textfield
                            label="Optional - Name"
                            .value="${e._config[n+"_name"]||""}"
                            .configValue="${n}_name"
                            @input="${e._valueChanged}"
                        ></ha-textfield>
                        <ha-icon-picker
                            label="Optional - Icon"
                            .value="${e._config[n+"_icon"]||""}"
                            .configValue="${n}_icon"
                            item-label-path="label"
                            item-value-path="value"
                            @value-changed="${e._valueChanged}"
                        ></ha-icon-picker>
                        <ha-form
                            .hass=${e.hass}
                            .data=${e._config}
                            .schema=${[{name:n+"_entity",label:"Optional - Light / Light group (For background color)",selector:{entity:{}}}]}   
                            .computeLabel=${e._computeLabelCallback}
                            @value-changed=${e._valueChanged}
                        ></ha-form>
                        <ha-form
                            .hass=${e.hass}
                            .data=${e._config}
                            .schema=${[{name:n+"_pir_sensor",label:"Optional - Presence / Occupancy sensor (For button auto order)",selector:{entity:{}}}]}   
                            .computeLabel=${e._computeLabelCallback}
                            @value-changed=${e._valueChanged}
                        ></ha-form>
                        <ha-alert alert-type="info">In fact you can also get the auto order with any entity type, for example you can add light groups to these fields and the order will change based on the last changed states.</ha-alert>
                    </div>
                </ha-expansion-panel>
            </div>
        `);return t}(e)}
            </div>
            <button class="icon-button" @click="${function(){e.buttonIndex++,e.requestUpdate()}}">
                <ha-icon icon="mdi:plus"></ha-icon>
                New button
            </button>
            <hr>
            <ha-formfield .label="Auto order">
                <ha-switch
                    aria-label="Toggle auto order"
                    .checked=${e._config?.auto_order||!1}
                    .configValue="${"auto_order"}"
                    @change=${e._valueChanged}
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Optional - Auto order (Presence/occupancy sensors needed)</label> 
                </div>
            </ha-formfield>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">  
                    ${e.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Horizontal buttons stack styling
                        </h4>
                        <div class="content"> 
                            <ha-textfield
                                label="Optional - Margin (fix centering on some themes) (e.g. 13px)"
                                .value="${e._config?.margin||"7px"}"
                                .configValue="${"margin"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Width on desktop (100% by default on mobile)"
                                .value="${e._config?.width_desktop||"540px"}"
                                .configValue="${"width_desktop"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-formfield .label="Optional - Rise animation (Displays an animation once the page has loaded)">
                                <ha-switch
                                    aria-label="Optional - Rise animation (Displays an animation once the page has loaded)"
                                    .checked=${void 0===e._config?.rise_animation||e._config?.rise_animation}
                                    .configValue="${"rise_animation"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Rise animation (Displays an animation once the page has loaded)</label> 
                                </div>
                            </ha-formfield>
                            <ha-formfield .label="Optional - Highlight current hash / view">
                                <ha-switch
                                    aria-label="Optional - Highlight current hash / view"
                                    .checked=${e._config?.highlight_current_view||!1}
                                    .configValue="${"highlight_current_view"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Highlight current hash / view</label> 
                                </div>
                            </ha-formfield>
                            <ha-formfield .label="Optional - Hide gradient">
                                <ha-switch
                                    aria-label="Optional - Hide gradient"
                                    .checked=${e._config.hide_gradient||!1}
                                    .configValue="${"hide_gradient"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Hide gradient</label> 
                                </div>
                            </ha-formfield>
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Horizontal buttons stack card
                </h4>
                <div class="content">
                    <p>This card is a good companion to the pop-up card, allowing you to open pop-ups or any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible and acts as a footer.</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"cover":return function(e){let t=e._config.button_action||"";return l.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:["cover"]}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Card settings
                </h4>
                <div class="content"> 
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Open icon","icon_open")}
                    ${e.makeDropdown("Optional - Closed icon","icon_close")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:window-shutter-cog"></ha-icon>
                  Custom services
                </h4>
                <div class="content"> 
                    <ha-textfield
                        label="Optional - Open service (cover.open_cover by default)"
                        .value="${e._config?.open_service||"cover.open_cover"}"
                        .configValue="${"open_service"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Stop service (cover.stop_cover by default)"
                        .value="${e._config?.stop_service||"cover.stop_cover"}"
                        .configValue="${"stop_service"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Close service (cover.close_cover by default)"
                        .value="${e._config?.close_service||"cover.close_cover"}"
                        .configValue="${"close_service"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on icon
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Double tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Hold action",t,"none","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content"> 
                    ${e.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Cover styling
                        </h4>
                        <div class="content"> 
                            ${e.makeDropdown("Optional - Arrow down icon","icon_down")}
                            ${e.makeDropdown("Optional - Arrow up icon","icon_up")}
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Cover card
                </h4>
                <div class="content">
                    <p>This card allows you to control your covers.</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"media-player":return function(e){let t=e._config.button_action||"";return l.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:["media_player"]}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Card settings
                </h4>
                <div class="content"> 
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Icon","icon")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                Media player settings
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${e.hass}
                        .data=${e._config}
                        .schema=${[{type:"grid",flatten:!0,schema:[{name:"min_volume",label:"Min volume",selector:{number:{step:"any"}}},{name:"max_volume",label:"Max volume",selector:{number:{step:"any"}}}]}]}   
                        .computeLabel=${e._computeLabelCallback}
                        @value-changed=${e._valueChanged}
                    ></ha-form>
                    <ha-formfield .label="Optional - Hide play/pause button">
                        <ha-switch
                            aria-label="Optional - Hide play/pause button"
                            .checked=${e._config.hide?.play_pause_button||!1}
                            .configValue="${"hide.play_pause_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide play/pause button</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide volume button">
                        <ha-switch
                            aria-label="Optional - Hide volume button"
                            .checked=${e._config.hide?.volume_button||!1}
                            .configValue="${"hide.volume_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide volume button</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide next button">
                        <ha-switch
                            aria-label="Optional - Hide next button"
                            .checked=${e._config.hide?.next_button||!1}
                            .configValue="${"hide.next_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide next button</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide previous button">
                        <ha-switch
                            aria-label="Optional - Hide previous button"
                            .checked=${e._config.hide?.previous_button||!1}
                            .configValue="${"hide.previous_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide previous button</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide power button">
                        <ha-switch
                            aria-label="Optional - Hide power button"
                            .checked=${e._config.hide?.power_button}
                            .configValue="${"hide.power_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide power button</label>
                        </div>
                    </ha-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Buttons default behavior
                        </h4>
                        <div class="content">
                            <p>Outside of the editor, buttons other than the power button only appear if the media player is turned on.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on icon
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Double tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Hold action",t,"none","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Media player styling
                        </h4>
                        <div class="content"> 
                            <ha-formfield .label="Optional - Blurred media cover in background">
                                <ha-switch
                                    aria-label="Optional - Blurred media cover in background"
                                    .checked=${e._config.cover_background??!1}
                                    .configValue="${"cover_background"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Blurred media cover in background</label> 
                                </div>
                            </ha-formfield>
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Media player card
                </h4>
                <div class="content">
                    <p>This card allows you to control a media player entity.</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"empty-column":return function(e){return l.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                </div>
            </ha-expansion-panel>
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Empty column card
                </h4>
                <div class="content">
                    <p>Just an empty card to fill any empty column.</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"select":return function(e){const t=e._config.entity,n=t?.startsWith("input_select")||t?.startsWith("select")||e._config.select_attribute,o=e.hass.states[t]?.attributes,i=e._selectable_attributes.some(e=>o?.[e]),a=Object.keys(e.hass.states[t]?.attributes||{}).map(n=>{let o=e.hass.states[t];return{label:e.hass.formatEntityAttributeName(o,n),value:n}}).filter(t=>e._selectable_attributes.includes(t.value));let r=e._config.button_action||"";return l.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.inputSelectList}
                .data=${e._config}
                .schema=${[{name:"entity",label:"Entity",selector:{entity:{}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            ${i?l.qy`
                <ha-form
                    .hass=${e.hass}
                    .data=${{select_attribute:e._config.select_attribute}}
                    .schema=${[{name:"select_attribute",selector:{select:{options:a,mode:"dropdown"}}}]}
                    .computeLabel=${()=>"Select menu (from attributes)"}
                    @value-changed=${t=>{e._valueChanged({target:{configValue:"select_attribute"},detail:{value:t.detail.value.select_attribute}})}}
                ></ha-form>
            `:""}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Card settings
                </h4>
                <div class="content">                   
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Icon","icon")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on icon
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                  Tap action on button
                </h4>
                <div class="content">
                    <div style="${n?"opacity: 0.5; pointer-events: none;":""}">
                        ${e.makeActionPanel("Tap action",r,"none","button_action")}
                    </div>
                    ${e.makeActionPanel("Double tap action",r,"none","button_action")}
                    ${e.makeActionPanel("Hold action",r,"none","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Select card
                </h4>
                <div class="content">
                    <p>This card allows you to have a select menu for your entities with selectable options:</p>
                    <ul class="icon-list">
                        <li><ha-icon icon="mdi:format-list-bulleted"></ha-icon>Input Select entities</li>
                        <li><ha-icon icon="mdi:form-dropdown"></ha-icon>Select entities</li>
                        <li><ha-icon icon="mdi:playlist-music"></ha-icon>Media players with&nbsp;<b>source list</b></li>
                        <li><ha-icon icon="mdi:speaker"></ha-icon>Media players with&nbsp;<b>sound mode list</b></li>
                        <li><ha-icon icon="mdi:thermostat"></ha-icon>Climate entities with&nbsp;<b>hvac modes</b></li>
                        <li><ha-icon icon="mdi:fan"></ha-icon>Climate/Fan entities with&nbsp;<b>fan modes</b></li>
                        <li><ha-icon icon="mdi:air-conditioner"></ha-icon>Climate entities with&nbsp;<b>swing modes</b></li>
                        <li><ha-icon icon="mdi:thermostat-auto"></ha-icon>Climate entities with&nbsp;<b>preset modes</b></li>
                        <li><ha-icon icon="mdi:lightbulb-group"></ha-icon>Light entities with&nbsp;<b>effect list</b></li>
                    </ul>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"climate":return function(e){let t=e._config.button_action||"";if("climate"===e._config.card_type&&!e.climateSubButtonsAdded&&e._config.entity){const t=e.hass.states[e._config.entity]?.attributes?.hvac_modes;if(t){const t=(0,m.mg)(e._config);if(!(Array.isArray(t.main)&&t.main.length>0)){const n={name:"HVAC modes menu",select_attribute:"hvac_modes",state_background:!1,show_arrow:!1};t.main.push(n),e._config.sub_button=t,e._firstRowsComputation=!0}}e.climateSubButtonsAdded=!0}return l.qy`
        <div class="card-config">
        ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
        <ha-form
            .hass=${e.hass}
            .data=${e._config}
            .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:["climate"]}}}]}   
            .computeLabel=${e._computeLabelCallback}
            @value-changed=${e._valueChanged}
        ></ha-form>
                                <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Card settings
                </h4>
                <div class="content">     
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Icon","icon")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                Climate settings
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${e.hass}
                        .data=${e._config}
                        .schema=${[{type:"grid",flatten:!0,schema:[{name:"min_temp",label:"Min temperature",selector:{number:{step:"any"}}},{name:"max_temp",label:"Max temperature",selector:{number:{step:"any"}}},{name:"step",label:"Step",selector:{number:{step:"any"}}}]}]}   
                        .computeLabel=${e._computeLabelCallback}
                        .disabled="${"name"===e._config.button_type}"
                        @value-changed=${e._valueChanged}
                    ></ha-form>
                    ${e.hass.states[e._config.entity]?.attributes?.target_temp_low?l.qy`
                        <ha-formfield .label="Optional - Hide target temp low">
                            <ha-switch
                                aria-label="Optional - Hide target temp low"
                                .checked=${e._config.hide_target_temp_low}
                                .configValue="${"hide_target_temp_low"}"
                                @change=${e._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Optional - Hide target temp low</label> 
                            </div>
                        </ha-formfield>
                    `:""}
                    ${e.hass.states[e._config.entity]?.attributes?.target_temp_high?l.qy`
                        <ha-formfield .label="Optional - Hide target temp high">
                            <ha-switch
                                aria-label="Optional - Hide target temp high"
                                .checked=${e._config.hide_target_temp_high}
                                .configValue="${"hide_target_temp_high"}"
                                @change=${e._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Optional - Hide target temp high</label> 
                            </div>
                        </ha-formfield>
                    `:""}
                    <ha-formfield .label="Optional - Hide temperature control">
                        <ha-switch
                            aria-label="Optional - Hide temperature control"
                            .checked=${e._config.hide_temperature}
                            .configValue="${"hide_temperature"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide temperature control</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Constant background color when ON">
                        <ha-switch
                            aria-label="Optional - Constant background color when ON"
                            .checked=${!0===e._config.state_color}
                            .configValue="${"state_color"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Constant background color when ON</label> 
                        </div>
                    </ha-formfield>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on icon
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Double tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Hold action",t,"none","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Climate card
                </h4>
                <div class="content">
                    <p>This card allows you to control your climate entities. You can also add a sub-button that display a dropdown menu for your climate modes (check if you have "Select menu" available when you create a new sub-button).</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"calendar":return function(e){const t=v(e.hass);return e._config.event_action||(e._config.event_action={tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}}),l.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entities",title:t("editor.calendar.entities"),selector:{calendar_entity:{}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  ${t("editor.calendar.settings")}
                </h4>
                <div class="content">
                    <ha-form
                      .hass=${e.hass}
                      .data=${e._config}
                      .schema=${[{name:"days",label:t("editor.calendar.days"),title:t("editor.calendar.days"),selector:{number:{step:1,min:1,max:7}}},{name:"limit",label:t("editor.calendar.limit"),title:t("editor.calendar.limit"),selector:{number:{step:1,min:1}}},{name:"show_end",label:t("editor.calendar.show_end"),title:t("editor.calendar.show_end"),selector:{boolean:{}}},{name:"show_progress",label:t("editor.calendar.show_progress"),title:t("editor.calendar.show_progress"),selector:{boolean:{}}},{name:"show_place",label:t("editor.calendar.show_place"),title:t("editor.calendar.show_place"),selector:{boolean:{}}},{name:"scrolling_effect",label:t("editor.calendar.text_scrolling"),title:t("editor.calendar.text_scrolling"),selector:{boolean:{}},default:!0}]}   
                      .computeLabel=${e._computeLabelCallback}
                      @value-changed=${e._valueChanged}
                    ></ha-form>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on day
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",e._config,"none")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                  Tap action on event
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",e._config.event_action,"none","event_action")}
                    ${e.makeActionPanel("Double tap action",e._config.event_action,"none","event_action")}
                    ${e.makeActionPanel("Hold action",e._config.event_action,"none","event_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content">
                    ${e.makeLayoutOptions()}
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Calendar card
                </h4>
                <div class="content">
                    <p>This card allows you to display a calendar and is scrollable, so you can view additional events.</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case void 0:return l.qy`
                    <div class="card-config">
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                You need to add a card type first
                            </h4>
                        </div>
                        ${this.makeDropdown("Card type","card_type",t)}
                        <img style="width: 100%; height: auto; border-radius: 24px;" src="https://raw.githubusercontent.com/Clooos/Bubble-Card/main/.github/bubble-card.gif">
                        
                        <div class="bubble-info-container">
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:tag-text"></ha-icon>
                                    Bubble Card ${o}
                                </h4>
                                <div class="content">
                                    <p>If you want to know what's new in this version, you can check the changelog <a href="https://github.com/Clooos/Bubble-Card/releases/tag/${o}" target="_blank" rel="noopener noreferrer"><b>here</b></a>.</p>
                                </div>
                            </div>
                            
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:help-circle-outline"></ha-icon>
                                    Resources & Help
                                </h4>
                                <div class="content">
                                    <p>If you have an issue or a question you can find more details in the GitHub documentation. You can also find useful resources and help in these links.</p>
                                    <div class="bubble-badges">
                                        <a href="https://github.com/Clooos/Bubble-Card" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:github"></ha-icon>
                                            <span>Documentation</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/issues" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:bug"></ha-icon>
                                            <span>Issues</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/questions-about-config-custom-styles-and-templates" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:help"></ha-icon>
                                            <span>Config Help</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:wrench"></ha-icon>
                                            <span>Shared Examples</span>
                                        </a>
                                        <a href="https://www.youtube.com/@cloooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:youtube"></ha-icon>
                                            <span>YouTube</span>
                                        </a>
                                        <a href="https://www.reddit.com/r/BubbleCard/" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:reddit"></ha-icon>
                                            <span>r/BubbleCard</span>
                                        </a>
                                        <a href="https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:home-assistant"></ha-icon>
                                            <span>HA Forum</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:heart-outline"></ha-icon>
                                    Support the Project
                                </h4>
                                <div class="content">
                                    <p>Hi I'm Clooos the Bubble Card developer. I dedicate most of my spare time to making this project the best it can be. So if you appreciate my work, any donation would be a great way to show your support.</p>
                                    <p>Also, check out my Patreon for exclusive custom styles, templates, and modules. Subscribing is probably the best way to support me and keep this project going.</p>
                                    <div class="bubble-badges">
                                        <a href="https://www.buymeacoffee.com/clooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <div class="bmc-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
                                                </svg>
                                            </div>
                                            <span>Buy me a beer</span>
                                        </a>
                                        <a href="https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR" target="_blank" rel="noopener noreferrer" class="bubble-badge support-badge">
                                            <div class="paypal-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z"/>
                                                </svg>
                                            </div>
                                            <span>PayPal</span>
                                        </a>
                                        <a href="https://www.patreon.com/Clooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <div class="patreon-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.957 7.21c-.004-3.064-2.391-5.576-5.191-6.482-3.478-1.125-8.064-.962-11.384.604C2.357 3.231 1.093 7.391 1.046 11.54c-.039 3.411.302 12.396 5.369 12.46 3.765.047 4.326-4.804 6.068-7.141 1.24-1.662 2.836-2.132 4.801-2.618 3.376-.836 5.678-3.501 5.673-7.031Z"/>
                                                </svg>
                                            </div>
                                            <span>Patreon</span>
                                        </a>
                                    </div>
                                    <div class="creator-message">
                                        <a href="https://www.reddit.com/user/Clooooos/" target="_blank" rel="noopener noreferrer">
                                            <img src="https://avatars.githubusercontent.com/u/36499953" alt="Clooos" class="creator-avatar">
                                        </a>
                                        <p class="bubble-thank-you">Thank you for being part of this awesome community! Cheers from Belgium! 🍻</p>
                                    </div>
                                </div>
                            </div>
                            ${this.makeVersion()}
                        </div>
                    </div>
                `}var n}makeLayoutOptions(){const e=window.isSectionView?"large":"normal",t="separator"===this._config.card_type?"0.8":"1",n="pop-up"!==this._config.card_type&&(this._config.card_layout?.includes("large")||window.isSectionView&&!this._config.card_layout);return l.qy`
            ${this._renderConditionalContent(this._config.grid_options?.rows,l.qy`
                <div class="bubble-info warning">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:alert-outline"></ha-icon>
                        Rows are already set in the "Layout" options
                    </h4>
                    <div class="content">
                        <p>If you want to change the rows, you can do it in the "Layout" options at the top of this editor. Or remove it from your config in YAML to enable this option.</p>
                    </div>
                </div>
            `)}
            ${this._renderConditionalContent(n,l.qy`
                <ha-textfield
                    label="Rows (Card height)"
                    type="number"
                    inputMode="numeric"
                    min="0"
                    step="0.1"
                    .disabled="${this._config.grid_options?.rows}"
                    .value="${this._config.rows||this._config.grid_options?.rows||t}"
                    .configValue="${"rows"}"
                    @input="${this._valueChanged}"
                ></ha-textfield>
                <br>
            `)}
            <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    Card layout deprecation
                </h4>
                <div class="content">
                    <p><b>The card layout options are deprecated, but still available for backwards compatibility.</b> Please use the new sub-button groups and layout options instead for better flexibility.</p>
                </div>
            </div>
            <ha-form
                .hass=${this.hass}
                .data=${{card_layout:this._config.card_layout||e}}
                .schema=${[{name:"card_layout",selector:{select:{options:[{label:"Normal (previous default)",value:"normal"},{label:"Large",value:"large"},{label:"Large with 2 sub-buttons rows",value:"large-2-rows"},{label:"Large with sub-buttons in a grid (Layout: min. 2 rows)",value:"large-sub-buttons-grid"}],mode:"dropdown"}}}]}
                .computeLabel=${()=>"pop-up"===this._config.card_type?"Header card layout":"Card layout"}
                @value-changed=${e=>{this._valueChanged({target:{configValue:"card_layout"},detail:{value:e.detail.value.card_layout}})}}
            ></ha-form>
        `}makeLayoutPanel(){return l.qy`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:view-grid"></ha-icon>
                    Layout
                </h4>
                <div class="content">
                    ${this.makeLayoutOptions()}
                </div>
            </ha-expansion-panel>
        `}makeShowState(e=this._config,t="",n=!1,o){const i=e?.entity??this._config.entity??"",a="name"===this._config.button_type,r=i?.startsWith("input_select")||i?.startsWith("select")||e.select_attribute,s="sub_button"===n||"string"==typeof n&&n.startsWith("sub_button"),c=s&&("select"===e?.sub_button_type||!e?.sub_button_type&&r),d=e?.show_attribute?Object.keys(this.hass.states[i]?.attributes||{}).map(e=>{let t=this.hass.states[i];return{label:this.hass.formatEntityAttributeName(t,e),value:e}}):[];return l.qy`

            <ha-formfield .label="Text scrolling effect">
                <ha-switch
                    aria-label="Text scrolling effect"
                    .checked=${e?.scrolling_effect??!0}
                    .configValue="${t+"scrolling_effect"}"
                    @change="${n?e=>this._arrayValueChange(o,{scrolling_effect:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Text scrolling effect</label> 
                </div>
            </ha-formfield>
            ${this._renderConditionalContent(s,l.qy`
                <ha-formfield .label="Show background">
                    <ha-switch
                        aria-label="Show background when entity is on"
                        .checked=${e?.show_background??!0}
                        @change="${e=>this._arrayValueChange(o,{show_background:e.target.checked},n)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Show background when entity is on</label> 
                    </div>
                </ha-formfield>
            `)}
            ${this._renderConditionalContent(s&&(e?.show_background??!0),l.qy`
                <ha-formfield .label="Background color based on state">
                    <ha-switch
                        aria-label="Background color based on state"
                        .checked=${e?.state_background??!0}
                        @change="${e=>this._arrayValueChange(o,{state_background:e.target.checked},n)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Background color based on state</label> 
                    </div>
                </ha-formfield>
            `)}
            ${this._renderConditionalContent(s&&(e?.state_background??!0)&&i.startsWith("light"),l.qy`
                <ha-formfield .label="Background color based on light color">
                    <ha-switch
                        aria-label="Background color based on light color"
                        .checked=${e?.light_background??!0}
                        @change="${e=>this._arrayValueChange(o,{light_background:e.target.checked},n)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Background color based on light color</label> 
                    </div>
                </ha-formfield>
            `)}
            ${this._renderConditionalContent(!s&&i.startsWith("light"),l.qy`
                <ha-formfield .label="Use accent color instead of light color">
                    <ha-switch
                        aria-label="Use accent color instead of light color"
                        .checked=${e?.use_accent_color??!1}
                        .configValue="${t+"use_accent_color"}"
                        @change="${this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Use accent color instead of light color</label> 
                    </div>
                </ha-formfield>
            `)}
            <ha-formfield .label="Show icon">
                <ha-switch
                    aria-label="Show icon"
                    .checked=${e?.show_icon??!0}
                    .configValue="${t+"show_icon"}"
                    @change="${n?e=>this._arrayValueChange(o,{show_icon:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show icon</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Prioritize icon over entity picture">
                <ha-switch
                    aria-label="Prioritize icon over entity picture"
                    .checked=${e?.force_icon??!1}
                    .configValue="${t+"force_icon"}"
                    .disabled="${a&&!s}"
                    @change="${n?e=>this._arrayValueChange(o,{force_icon:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Prioritize icon over entity picture</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show name">
                <ha-switch
                    aria-label="Show name"
                    .checked=${e?.show_name??!s}
                    .configValue="${t+"show_name"}"
                    @change="${n?e=>this._arrayValueChange(o,{show_name:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show name</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show entity state">
                <ha-switch
                    aria-label="Show entity state"
                    .checked="${e?.show_state??"state"===e.button_type}"
                    .configValue="${t+"show_state"}"
                    .disabled="${a&&!s}"
                    @change="${n?e=>this._arrayValueChange(o,{show_state:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show entity state</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show last changed">
                <ha-switch
                    aria-label="Show last changed"
                    .checked=${e?.show_last_changed}
                    .configValue="${t+"show_last_changed"}"
                    .disabled="${a&&!s}"
                    @change="${n?e=>this._arrayValueChange(o,{show_last_changed:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show last changed</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show last updated">
                <ha-switch
                    aria-label="Show last updated"
                    .checked=${e?.show_last_updated}
                    .configValue="${t+"show_last_updated"}"
                    .disabled="${a&&!s}"
                    @change="${n?e=>this._arrayValueChange(o,{show_last_updated:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show last updated</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show attribute">
                <ha-switch
                    aria-label="Show attribute"
                    .checked=${e?.show_attribute}
                    .configValue="${t+"show_attribute"}"
                    .disabled="${a&&!s}"
                    @change="${n?e=>this._arrayValueChange(o,{show_attribute:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show attribute</label> 
                </div>
            </ha-formfield>
            ${this._renderConditionalContent(e?.show_attribute,l.qy`
                <ha-form
                    .hass=${this.hass}
                    .data=${{attribute:e?.attribute}}
                    .schema=${[{name:"attribute",selector:{select:{options:d,mode:"dropdown"}}}]}
                    .disabled=${a&&!s}
                    .computeLabel=${()=>"Attribute to show"}
                    @value-changed=${e=>{const i=e.detail.value.attribute;n?this._arrayValueChange(o,{attribute:i},n):this._valueChanged({target:{configValue:t+"attribute"},detail:{value:i}})}}
                ></ha-form>
            `)}
            ${this._renderConditionalContent(c,l.qy`
                <ha-formfield .label="Show arrow (Select entities only)">
                    <ha-switch
                        aria-label="Show arrow (Select entities only)"
                        .checked=${e?.show_arrow??!0}
                        .configValue="${t+"show_arrow"}"
                        @change="${n?e=>this._arrayValueChange(o,{show_arrow:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Show arrow (Select menu only)</label> 
                    </div>
                </ha-formfield>
            `)}
        `}makeDropdown(e,t,n,o,i){if(e.includes("icon")||e.includes("Icon"))return l.qy`
                <div class="ha-icon-picker">
                    <ha-icon-picker
                        label="${e}"
                        .value="${this._config[t]||i}"
                        .configValue="${t}"
                        item-value-path="icon"
                        item-label-path="icon"
                        @value-changed="${this._valueChanged}"
                    ></ha-icon-picker>
                </div>
            `;if(e.includes("Entity")||e.includes("entity")){let n=[],i=[];switch(this._config.card_type){case"button":default:break;case"cover":n=["cover"];break;case"climate":n=["climate"];break;case"media-player":n=["media_player"];break;case"select":n=["input_select","select"],this._config.select_attribute&&(n=[])}return l.qy`
                <ha-entity-picker
                    label="${e}"
                    .hass="${this.hass}"
                    .value="${this._config[t]}"
                    .configValue="${t}"
                    .includeDomains="${n.length?n:void 0}"
                    .excludeDomains="${i.length?i:void 0}"
                    .disabled="${o}"
                    allow-custom-entity
                    @value-changed="${this._valueChanged}"
                ></ha-entity-picker>
            `}return l.qy`
                <ha-form
                    .hass=${this.hass}
                    .data=${{[t]:this["_"+t]}}
                    .schema=${[{name:t,selector:{select:{options:n,mode:"dropdown"}}}]}
                    .disabled=${o}
                    .computeLabel=${()=>e}
                    @value-changed=${e=>{const n=e.detail.value[t];this._valueChanged({target:{configValue:t},detail:{value:n}})}}
                ></ha-form>
          `}_renderConditionalContent(e,t){return e?t:l.qy``}makeActionPanel(e,t=this._config,n,o,i=this._config){const a="Tap action"===e?"mdi:gesture-tap":"Double tap action"===e?"mdi:gesture-double-tap":"Hold action"===e?"mdi:gesture-tap-hold":"mdi:gesture-tap",r="Tap action"===e?"tap_action":"Double tap action"===e?"double_tap_action":"Hold action"===e?"hold_action":"Open action"===e?"open_action":"close_action",s=o?`action_panel_${o}_${i}_${r}`:`action_panel_config_${r}`;let c;try{c="Tap action"===e?t.tap_action:"Double tap action"===e?t.double_tap_action:"Hold action"===e?t.hold_action:"Open action"===e?t.open_action:t.close_action}catch{}const d=t===this._config;return n||(n=d&&"Tap action"===e?"name"!==this._config.button_type?"more-info":"none":d?"none":""),l.qy`
            <ha-expansion-panel 
                outlined
                @expanded-changed=${e=>{this._expandedPanelStates[s]=e.target.expanded,this.requestUpdate()}}
            >
                <h4 slot="header">
                    <ha-icon icon="${a}"></ha-icon>
                    ${e}
                </h4>
                <div class="content"> 
                    ${S(this,s,!!this._expandedPanelStates[s],()=>l.qy`
                        <ha-form
                            .hass=${this.hass}
                            .data=${t}
                            .configValue="${(o?o+".":"")+(parseInt(i)==i?i+".":"")+r}" 
                            .schema=${[{name:r,label:e,selector:{ui_action:{default_action:n}}}]}  
                            .computeLabel=${this._computeLabelCallback}
                            @value-changed=${e=>this._ActionChanged(e,o,i)}
                        ></ha-form>
                        ${"call-service"===c?.action||"perform-action"===c?.action?l.qy`
                            <ha-formfield .label="Use default entity">
                                <ha-switch
                                    aria-label="Use default entity"
                                    .configValue="${(o?o+".":"")+(parseInt(i)==i?i+".":"")+r+".default_entity"}" 
                                    .checked=${"entity"===c?.target?.entity_id}
                                     @change=${this._updateActionsEntity}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Use default entity</label> 
                                </div>
                            </ha-formfield>
                        `:""}
                    `)}
                </div>
            </ha-expansion-panel>
        `}makeSubButtonPanel(){return void 0===(e=this)._expandedPanelStates&&(e._expandedPanelStates={}),void 0!==e._clipboardButton&&null!==e._clipboardButton||(e._clipboardButton=D()||null),function(e){if(Array.isArray(e._config.sub_button)){const t=(0,m.zD)(e._config.sub_button);try{e._config.sub_button=t}catch(n){e._config={...e._config,sub_button:t}}}else if(!e._config.sub_button||!(0,m.lc)(e._config.sub_button)){const t=(0,m.mg)(e._config);try{e._config.sub_button=t}catch(n){e._config={...e._config,sub_button:t}}}const t=(0,m.mg)(e._config);void 0===e._expandedPanelStates&&(e._expandedPanelStates={}),void 0!==e._clipboardButton&&null!==e._clipboardButton||(e._clipboardButton=D()||null);const n="sub-buttons"===e._config.card_type,o="pop-up"===e._config.card_type,i=["cover","media-player","climate"].includes(e._config.card_type),a=e._config.main_buttons_position||"default",r=e._config.main_buttons_alignment||"end",s="bottom"===a,c=e._config.main_buttons_full_width??!!s,d=Boolean(window.isSectionView),u=(e._config.card_layout||"").includes("large"),p=Object.prototype.hasOwnProperty.call(e._config,"card_layout"),b=p&&"normal"===e._config.card_layout,h=Array.isArray(t.bottom)&&t.bottom.some(e=>!!e),g=void 0!==e._config.rows&&null!==e._config.rows&&""!==e._config.rows,f=void 0!==e._config.grid_options?.rows&&null!==e._config.grid_options?.rows&&""!==e._config.grid_options?.rows,y=g&&!1===e._rowsAutoMode,v=f||y;return l.qy`
    <ha-expansion-panel outlined>
      <h4 slot="header">
        <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
        Sub-buttons editor
      </h4>
      <div class="content">
        ${v?l.qy`
          <div class="bubble-info warning">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:alert-outline"></ha-icon>
              Rows configuration detected
            </h4>
            <div class="content">
              <p>The card height (rows) is explicitly set in your configuration. This will prevent automatic row adjustments when sub-buttons are added (for example, when adding bottom sub-buttons). Click the button below to remove the override and let Bubble Card auto-calculate the rows.</p>
              <button class="icon-button" @click="${e._removeRowsOverrideAndRecalculate}">
                <ha-icon icon="mdi:autorenew"></ha-icon>
                Remove override and auto-calculate
              </button>
            </div>
          </div>
        `:""}
        ${i?l.qy`
          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:circle-outline"></ha-icon>
              Card specific buttons
            </h4>
            <div class="content">
              <ha-form
                  .hass=${e.hass}
                  .data=${{main_buttons_position:a}}
                  .schema=${[{name:"main_buttons_position",selector:{select:{options:[{label:"Default",value:"default"},{label:"Bottom (fixed)",value:"bottom"}],mode:"dropdown"}}}]}
                  .computeLabel=${()=>"Main buttons position"}
                  @value-changed=${t=>{e._valueChanged({target:{configValue:"main_buttons_position"},detail:{value:t.detail.value.main_buttons_position}})}}
              ></ha-form>
              ${e._renderConditionalContent(s,l.qy`
                  <ha-formfield .label="Full width action buttons">
                      <ha-switch
                          aria-label="Full width action buttons"
                          .checked="${c}"
                          .configValue="${"main_buttons_full_width"}"
                          @change="${e._valueChanged}"
                      ></ha-switch>
                      <div class="mdc-form-field">
                          <label class="mdc-label">Full width action buttons</label> 
                      </div>
                  </ha-formfield>
                  ${e._renderConditionalContent(!c,l.qy`
                      <ha-form
                          .hass=${e.hass}
                          .data=${{main_buttons_alignment:r}}
                          .schema=${[{name:"main_buttons_alignment",selector:{select:{options:[{label:"Right (default)",value:"end"},{label:"Center",value:"center"},{label:"Left",value:"start"},{label:"Space between",value:"space-between"}],mode:"dropdown"}}}]}
                          .computeLabel=${()=>"Main buttons alignment"}
                          @value-changed=${t=>{e._valueChanged({target:{configValue:"main_buttons_alignment"},detail:{value:t.detail.value.main_buttons_alignment}})}}
                      ></ha-form>
                  `)}
              `)}
            </div>
          </ha-expansion-panel>
        `:""}
        
        ${o?l.qy`
          ${Y(e,"main")}
          ${W(e,"main")}
        `:n?"":l.qy`
          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
              Main sub-buttons (top)
            </h4>
            <div class="content">
              ${Y(e,"main")}
              ${W(e,"main")}
            </div>
          </ha-expansion-panel>
        `}

        ${n?l.qy`
          ${Y(e,"bottom")}
          ${W(e,"bottom")}
        `:o?"":l.qy`
          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:arrow-down-circle-outline"></ha-icon>
              Bottom sub-buttons
            </h4>
            <div class="content">
              ${Y(e,"bottom")}
              ${e._renderConditionalContent(!u&&!h&&(b||!d&&!p),l.qy`
                <div class="bubble-info warning">
                  <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    Bottom sub-buttons and layout
                  </h4>
                  <div class="content">
                    <p>Adding bottom sub-buttons will automatically switch this card to the "Large" layout (this is the new recommended layout). This notice will disappear once you add bottom sub-buttons.</p>
                  </div>
                </div>
              `)}
              ${W(e,"bottom")}
            </div>
          </ha-expansion-panel>
        `}

        ${l.qy`
    <div class="bubble-info">
      <h4 class="bubble-section-title">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        Sub-buttons
      </h4>
      <div class="content">
        <p>This editor allows you to add customized sub-buttons to your card. Sub-buttons support three types:</p>
        <ul class="icon-list">
          <li><ha-icon icon="mdi:gesture-tap"></ha-icon><p><b>Default (button)</b> - Standard button with tap actions</p></li>
          <li><ha-icon icon="mdi:tune-variant"></ha-icon><p><b>Slider</b> - Control or display numeric values (brightness, volume, temperature, etc.)</p></li>
          <li><ha-icon icon="mdi:form-dropdown"></ha-icon><p><b>Dropdown / Select</b> - Dropdown menu for selectable entities</p></li>
        </ul>
        <p>Use <b>Slider</b> sub-buttons to control light brightness, media player volume, or climate temperature. Use <b>Dropdown</b> sub-buttons to select media sources, HVAC modes, or light effects. Use <b>Default</b> buttons for simple on/off controls or custom actions.</p>
        <p>You can organize sub-buttons individually or group them together. Groups can be arranged inline (side by side) or in rows (stacked vertically), and buttons within groups can be displayed inline or in a column layout.</p>
      </div>
    </div>
  `}
      </div>
    </ha-expansion-panel>
  `}(e);var e}makeVersion(){return l.qy`
            <h4 class="version">
                Bubble Card 
                <span class="version-number">
                    ${o}
                </span>
            </h4>
        `}makeStyleEditor(){const e="style_editor_panel";return l.qy`
            <ha-expansion-panel 
                outlined
                @expanded-changed="${t=>{this._expandedPanelStates[e]=t.target.expanded,this.requestUpdate()}}"
            >
                <h4 slot="header">
                    <ha-icon icon="mdi:code-braces"></ha-icon>
                    Custom styles & JS templates
                </h4>
                <div class="content">
                    ${S(this,e,!!this._expandedPanelStates[e],()=>l.qy`
                        <div class="code-editor">
                            <ha-code-editor
                                mode="yaml"
                                autofocus
                                autocomplete-entities
                                autocomplete-icons
                                .hass=${this.hass}
                                .value=${this._config.styles}
                                .configValue="${"styles"}"
                                @value-changed=${e=>{this._valueChanged(e),this._clearCurrentCardError()}}
                            ></ha-code-editor>
                        </div>
                        ${this.createErrorConsole()}
                    `)}
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Custom styles & JS templates
                        </h4>
                        <div class="content">
                            <p>For advanced users, you can edit the CSS style of this card in the above code editor. More information and examples <a href="https://github.com/Clooos/Bubble-Card#styling" target="_blank" rel="noopener noreferrer">here</a>. You don't need to add <code>styles: |</code> (only used in YAML mode). You can also add <a href="https://github.com/Clooos/Bubble-Card#templates" target="_blank" rel="noopener noreferrer">JS templates</a> (Jinja is not supported).</p>
                            <p><b>Check out my <a href="https://www.patreon.com/Clooos" target="_blank" rel="noopener noreferrer">Patreon</a></b> for more custom styles, templates, and modules. This is also the best way to show your support to my project.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
        `}_clearCurrentCardError(){if(!window.bubbleCardErrorRegistry)return;const e=this._config?.card_type,t=this._config?.entity;if(!e||!t)return;const n=`${e}_${t}`;window.bubbleCardErrorRegistry[n]&&(delete window.bubbleCardErrorRegistry[n],this.errorMessage="",this.errorSource="",this.requestUpdate())}_clearCurrentModuleError(e){this._moduleCodeEvaluating=e;try{window.bubbleCardErrorRegistry&&e&&Object.keys(window.bubbleCardErrorRegistry).forEach(t=>{window.bubbleCardErrorRegistry[t]?.moduleId===e&&delete window.bubbleCardErrorRegistry[t]})}catch(e){}this.errorMessage="",this.errorSource="",this.requestUpdate()}createErrorConsole(e=this){window.bubbleCardErrorRegistry||(window.bubbleCardErrorRegistry={});const t=()=>{if(void 0!==e._editingModule&&e._editingModule){const t=e._editingModule.id;if(!t)return e.errorMessage="",void(e.errorSource="");let n=!1;window.bubbleCardErrorRegistry&&Object.values(window.bubbleCardErrorRegistry).forEach(o=>{o.moduleId===t&&(e.errorMessage=o.message,e.errorSource=o.source,n=!0)}),n||(e.errorMessage="",e.errorSource="")}else{const t=e._config?.card_type,n=e._config?.entity;if(!t||!n)return e.errorMessage="",void(e.errorSource="");const o=`${t}_${n}`;if(window.bubbleCardErrorRegistry&&window.bubbleCardErrorRegistry[o]){const t=window.bubbleCardErrorRegistry[o];e.errorMessage=t.message,e.errorSource=t.source}else e.errorMessage="",e.errorSource=""}e.requestUpdate()};return e._errorListener||(e._errorListener=e=>{const n=e.detail;if(n&&"object"==typeof n&&n.context){const{message:e,context:t}=n;if(e){if(t.cardType&&t.entityId){const n=`${t.cardType}_${t.entityId}`;window.bubbleCardErrorRegistry[n]={message:e,source:"module"===t.sourceType?`Module ('${t.moduleId}')`:"Card Configuration (styles section)",cardType:t.cardType,entityId:t.entityId,moduleId:"module"===t.sourceType?t.moduleId:null}}}else if("module"===t.sourceType&&t.moduleId)Object.keys(window.bubbleCardErrorRegistry).forEach(e=>{window.bubbleCardErrorRegistry[e]?.moduleId===t.moduleId&&delete window.bubbleCardErrorRegistry[e]});else if(t.cardType&&t.entityId){const e=`${t.cardType}_${t.entityId}`;window.bubbleCardErrorRegistry[e]&&delete window.bubbleCardErrorRegistry[e]}}t()},window.addEventListener("bubble-card-error",e._errorListener)),t(),l.qy`
            <div class="bubble-info error" 
                style="display: ${e.errorMessage?"":"none"}; margin-bottom: 8px;">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    Error in JS template
                </h4>
                <div class="content">
                    <p>${e.errorMessage}</p>
                    ${e._editingModule&&"object"==typeof e._editingModule&&e._editingModule.id?l.qy`<hr><span class="helper-text" style="margin: 0;">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        JS template errors can sometimes be delayed in the Module Editor.
                    </span>`:""}
                </div>
            </div>
        `}_getProcessedSchema(e,t,n){const o=structuredClone(t);return this._updateAttributeSelectors(o,n,e)}_valueChangedInHaForm(e,t,n){let o=e.detail.value;if(o&&"object"==typeof o&&!Array.isArray(o)){const e=Object.keys(o);e.length>0&&e.every(e=>!isNaN(parseInt(e,10)))&&(o=e.sort((e,t)=>parseInt(e,10)-parseInt(t,10)).map(e=>o[e]))}this._workingModuleConfigs&&(this._workingModuleConfigs[t]=o);const i=this._cleanEmpty(o,t);(0,s.rC)(this,"config-changed",{config:{...this._config,[t]:i}}),this.requestUpdate()}_cleanEmpty(e,t){if(Array.isArray(e))return e.map(e=>this._cleanEmpty(e,void 0)).filter(e=>!this._isEmpty(e));if(e&&"object"==typeof e){const t={};return Object.keys(e).forEach(n=>{const o=this._cleanEmpty(e[n],n);this._isEmpty(o)||(t[n]=o)}),Object.keys(t).length>0?t:void 0}return"string"!=typeof e||""!==e||"state"===t?e:void 0}_isEmpty(e){return null==e||(Array.isArray(e)?0===e.length:"object"==typeof e&&0===Object.keys(e).length)}_updateAttributeSelectors=(e,t,n=void 0)=>{const o=(e,t,n)=>{const o=Array.isArray(e)?e:Object.entries(e||{}).map(([e,t])=>({name:e,...t}));if(Array.isArray(t)&&t.length>0){const i=t.find(e=>e&&"object"==typeof e&&e.entity)??t.find(e=>e&&"object"==typeof e)??t[0],a=this._updateAttributeSelectors(o,i,n);return Array.isArray(e)?a:a.reduce((e,t)=>{const{name:n,...o}=t;return e[n]=o,e},{})}const i=this._updateAttributeSelectors(o,t,n);return Array.isArray(e)?i:i.reduce((e,t)=>{const{name:n,...o}=t;return e[n]=o,e},{})};let i=n;return e.map(e=>{const n=((e,t)=>{if(e&&void 0!==t)return Array.isArray(e)?e:e[t]})(t,e.name);if(e.selector&&e.selector.entity&&(i=((e,t)=>{if(!e)return t;if("string"==typeof e)return e||t;if(Array.isArray(e)){const n=e.find(e=>e&&e.entity||"string"==typeof e);return"string"==typeof n?n||t:n?.entity??t}return e.entity??t})(n,void 0)),e.selector&&e.selector.attribute&&(e.selector.attribute.entity_id=i),Array.isArray(e.schema))e.schema=this._updateAttributeSelectors(e.schema,n,i);else if(e.selector&&e.selector.object&&e.selector.object.fields){const t=e.selector.object;e.selector={bc_object:{...t,fields:o(t.fields,n,i)}}}return e})};makeModulesEditor(){return function(e){if(void 0===e._selectedModuleTab&&(e._selectedModuleTab=0),void 0===e._expandedPanelStates&&(e._expandedPanelStates={}),void 0===e._myModulesSortOrder)try{const t=localStorage.getItem("bubble-card-modules-sort-order");e._myModulesSortOrder=t||"default"}catch(t){e._myModulesSortOrder="default"}const t=e._myModulesSortOrder||"default";if(void 0===e._forceUnsupportedModules)try{const t=localStorage.getItem(te);e._forceUnsupportedModules="true"===t}catch(t){e._forceUnsupportedModules=!1}const n="bubble-card-module-editor-tab-group";e._modulesLoaded||(0,a.wv)(e).then(()=>{if(e._modulesLoaded=!0,(!Q.isBCTAvailableSync||!(0,Q.isBCTAvailableSync)())&&function(e){const t={entityFound:!1,hasAttributes:!1,hasModulesAttribute:!1,modulesIsObject:!1,hasLastUpdated:!1,isReady:!1};if(!e||!e.states)return t;const n=e.states[Z];if(!n)return t;t.entityFound=!0;const o=n.attributes||{};return t.hasAttributes=!!n.attributes,"modules"in o&&(t.hasModulesAttribute=!0,t.modulesIsObject=null!==o.modules&&"object"==typeof o.modules),"last_updated"in o&&(t.hasLastUpdated="string"==typeof o.last_updated&&o.last_updated.length>0),t.isReady=t.entityFound&&t.hasModulesAttribute&&t.modulesIsObject&&t.hasLastUpdated,t}(e.hass).isReady){const t=e.hass.states[Z].attributes.modules;t&&t.default&&!0!==t.default.is_global&&oe(e,"default",!0).then(e=>{e?document.dispatchEvent(new CustomEvent("yaml-modules-updated")):console.warn(`Failed to set module 'default' to global in ${Z}.`)})}e.requestUpdate()});const o=(0,Q.isBCTAvailableSync)();if(e._bctRetryHandle&&o&&(clearTimeout(e._bctRetryHandle),e._bctRetryHandle=null),!e.hass||o||e._bctCheckAttempted)e.hass&&o&&!e._bctCheckAttempted&&(e._bctCheckInFlight||(e._bctCheckInFlight=!0,e._bctCheckAttempted=!0,(0,Q.ensureBCTProviderAvailable)(e.hass).finally(()=>{e._bctCheckInFlight=!1,(0,Q.isBCTAvailableSync)()!==o&&e.requestUpdate()})));else{const t=Date.now(),n=e._lastBctCheckAt??0,o=n?t-n:1/0,i=n&&o<5e3;if(e._bctCheckInFlight||i){if(i&&!e._bctRetryHandle){const t=Math.max(50,5e3-o);e._bctRetryHandle=setTimeout(()=>{e._bctRetryHandle=null,e.requestUpdate()},t)}}else e._bctRetryHandle&&(clearTimeout(e._bctRetryHandle),e._bctRetryHandle=null),e._bctCheckInFlight=!0,e._bctCheckAttempted=!0,e._lastBctCheckAt=t,(0,Q.ensureBCTProviderAvailable)(e.hass).finally(()=>{e._bctCheckInFlight=!1,e.requestUpdate()})}if((0,J.kA)(e),e._workingModuleConfigs||(e._workingModuleConfigs={}),e._modulesLoaded&&!a.Ki.has("default")&&o){const t="default:\n  name: Default\n  version: ''\n  description: ''
    <ha-expansion-panel outlined>
      <h4 slot="header">
        <ha-icon icon="mdi:puzzle"></ha-icon>
        Modules
        ${i.hasUpdates&&o?l.qy`
          <span class="bubble-badge update-badge" style="margin-left: 8px; font-size: 0.8em; vertical-align: middle; z-index: 7;">
            <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
            ${i.updateCount} update${i.updateCount>1?"s":""} available
          </span>
        `:""}
      </h4>
      <div class="content" style="margin: -8px 4px 14px 4px;">
        ${o?"":l.qy`
            <div class="bubble-info warning">
              <h4 class="bubble-section-title">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                Bubble Card Tools required
              </h4>
              <div class="content">
                ${a.Ki&&a.Ki.size>0||e.hass&&e.hass.states&&e.hass.states[Z]?l.qy`
                  <p><b>Since v3.1.0, to install, edit or delete modules, and to use the Module Store, please install <a href="https://github.com/Clooos/Bubble-Card-Tools" target="_blank" rel="noopener noreferrer">Bubble Card Tools</a> (everything is explained there).</b></p>
                  <p>Your existing modules will be automatically migrated once Bubble Card Tools is installed.</p>
                `:l.qy`
                  <p><b>No modules detected yet.</b> To create and manage modules and to use the Module Store, please install <a href="https://github.com/Clooos/Bubble-Card-Tools" target="_blank" rel="noopener noreferrer">Bubble Card Tools</a> (everything is explained there).</p>
                `}
              </div>
            </div>
        `}

        <div id="module-editor-top-marker"></div>
        
        ${(()=>{const t=ne(),i=e._selectedModuleTab||0,a=ee[i]??i.toString(),s=t=>{const n=ee.indexOf(t);e._selectedModuleTab=-1!==n?n:parseInt(t,10)||0,e.requestUpdate(),requestAnimationFrame(()=>(0,K.XY)(e,!1))};return"ha-tab-group"===t?l.qy`
        <ha-tab-group
          id="${n}"
          .activePanel=${a}
          @wa-tab-show=${r}
          @active-panel-changed=${r}
          >
          <ha-tab-group-tab
            slot="nav"
            panel=${ee[0]}
            .active=${a===ee[0]}
            @click=${()=>s(ee[0])}
          >
            <ha-icon icon="mdi:puzzle-heart-outline" style="margin-right: 8px;"></ha-icon>
            My Modules
          </ha-tab-group-tab>
            <ha-tab-group-tab
            slot="nav"
            panel=${ee[1]}
              .active=${a===ee[1]}
              ?disabled=${!o}
            @click=${()=>s(ee[1])}
          >
            <ha-icon icon="mdi:puzzle-plus-outline" style="margin-right: 8px;"></ha-icon>
            Module Store
          </ha-tab-group-tab>
        </ha-tab-group>
      `:"sl-tab-group"===t?l.qy`
        <sl-tab-group
          id="${n}"
          .selected=${i.toString()}
          @sl-tab-show=${r}
        >
          <sl-tab slot="nav" panel="0">
            <ha-icon icon="mdi:puzzle-heart-outline" style="color: inherit !important; margin-right: 8px;"></ha-icon>
            My Modules
          </sl-tab>
          <sl-tab slot="nav" panel="1" ?disabled=${!o}>
            <ha-icon icon="mdi:puzzle-plus-outline" style="color: inherit !important; margin-right: 8px;"></ha-icon>
            Module Store
          </sl-tab>
          <sl-tab-panel name="0"></sl-tab-panel>
          <sl-tab-panel name="1"></sl-tab-panel>
        </sl-tab-group>
      `:l.qy`
      <ha-tabs
        .selected=${i}
        @selected-changed=${r}
      >
        <paper-tab>
          <ha-icon icon="mdi:puzzle-heart-outline" style="margin-right: 8px;"></ha-icon>
          My Modules
        </paper-tab>
        <paper-tab class="${o?"":"disabled"}" ?disabled=${!o}>
          <ha-icon icon="mdi:puzzle-plus-outline" style="margin-right: 8px;"></ha-icon>
          Module Store
        </paper-tab>
      </ha-tabs>
    `})()}

        ${0!==e._selectedModuleTab&&o?(0,X._e)(e):l.qy`
          ${e._showManualImportForm?l.qy`
            <div class="module-editor-form">
              <div class="card-content">
                <h3>
                    <ha-icon icon="mdi:code-json" style="margin: 8px;"></ha-icon>
                    Import Module from YAML
                </h3>
                <p style="margin-top: 0;">Paste the complete YAML code of the module:</p>
                
                <div class="css-editor-container">
                  <ha-code-editor
                    .value=${e._manualYamlContent||""}
                    .mode=${"yaml"}
                    .autofocus=${!0}
                    @value-changed=${t=>{e._manualYamlContent=t.detail.value}}
                  ></ha-code-editor>
                </div>
                
                <div class="module-editor-buttons-container">
                  <button 
                    class="icon-button" 
                    style="flex: 1;"
                    @click=${()=>{e._showManualImportForm=!1,e.requestUpdate()}}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                    Cancel
                  </button>
                  <button 
                    class="icon-button" 
                    style="flex: 1;"
                    @click=${async()=>{try{const t=e._manualYamlContent;if(!t||""===t.trim())return void(0,s.rC)(e,"bubble-card-error",{message:"No YAML content provided"});const n=await(0,G.m)(e,t);e._showManualImportForm=!1,e._manualYamlContent="",n&&n.moduleId&&(e._recentlyToggledModuleId=n.moduleId,setTimeout(()=>{e._recentlyToggledModuleId=null,e.requestUpdate()},2e3)),e.requestUpdate(),n&&n.moduleId&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{const t=e.shadowRoot?.querySelector(`ha-expansion-panel[data-module-id="${n.moduleId}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"center"})})})}catch(e){console.error("Error installing manual module:",e)}}}
                  >
                    <ha-icon icon="mdi:content-save"></ha-icon>
                    Import Module
                  </button>
                </div>
              </div>
            </div>
          `:e._showNewModuleForm||e._editingModule?(0,J.cu)(e):l.qy`
            <!-- Search and Sort Controls -->
            <div class="my-modules-controls">
              <div class="my-modules-top-row">
                <div class="my-modules-search">
                  <ha-textfield
                    label="Search modules"
                    icon
                    .value=${e._myModulesSearchQuery||""}
                    @input=${t=>{e._myModulesSearchQuery=t.target.value,e.requestUpdate()}}
                  >
                    <slot name="prefix" slot="leadingIcon">
                      <ha-icon slot="prefix" icon="mdi:magnify"></ha-icon>
                    </slot>
                  </ha-textfield>
                </div>
                <div class="my-modules-sort-menu">
                  ${L({trigger:l.qy`
                      <mwc-icon-button slot="trigger" class="icon-button header sort-trigger" title="Sort modules">
                        <ha-icon icon="mdi:sort"></ha-icon>
                      </mwc-icon-button>
                    `,items:[{type:"checkbox",icon:"mdi:check-circle",label:"Active and recent first",checked:"default"===t,onClick:t=>{t.stopPropagation(),e._myModulesSortOrder="default";try{localStorage.setItem("bubble-card-modules-sort-order","default")}catch(e){}e.requestUpdate()}},{type:"checkbox",icon:"mdi:sort-alphabetical-ascending",label:"Alphabetical",checked:"alphabetical"===t,onClick:t=>{t.stopPropagation(),e._myModulesSortOrder="alphabetical";try{localStorage.setItem("bubble-card-modules-sort-order","alphabetical")}catch(e){}e.requestUpdate()}},{type:"checkbox",icon:"mdi:clock-outline",label:"Recent first",checked:"recent-first"===t,onClick:t=>{t.stopPropagation(),e._myModulesSortOrder="recent-first";try{localStorage.setItem("bubble-card-modules-sort-order","recent-first")}catch(e){}e.requestUpdate()}}]})}
                </div>
              </div>
              <ha-formfield label="Enable unsupported modules">
                <ha-switch
                  .checked=${!!e._forceUnsupportedModules}
                  @change=${t=>{const n=t.target.checked;e._forceUnsupportedModules=n;try{localStorage.setItem(te,n?"true":"false")}catch(e){}e.requestUpdate()}}
                ></ha-switch>
              </ha-formfield>
              ${e._forceUnsupportedModules?l.qy`
                <div class="bubble-info warning unsupported-modules-warning">
                  <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    Use carefully
                  </h4>
                  <div class="content">
                    <p>Some modules may work despite being marked as unsupported, while others can fail entirely.</p>
                  </div>
                </div>
              `:""}
            </div>
            
            <!-- Installed Modules List -->
            ${re(e).map(t=>{const{name:n,description: ''
                <ha-expansion-panel 
                  outlined 
                  class="${C?"disabled":""} ${E?"recently-toggled":""}"
                  data-module-id="${t}"
                  .expanded=${!!e._expandedPanelStates[t]}
                  @expanded-changed=${n=>{n.target.getAttribute("data-module-id")===t&&(e._expandedPanelStates[t]=n.target.expanded,e.requestUpdate())}}
                >
                  <h4 slot="header">
                    <ha-icon
                      icon="${h?"mdi:puzzle-check":"mdi:puzzle-outline"}"
                      style="${h?"opacity: 1; color: var(--info-color) !important;":"opacity: 0.3;"}"
                    ></ha-icon>
                    ${n}
                    <span class="module-badges" style="display: inline-flex; margin-left: auto;">
                      ${A?l.qy`
                        <span class="bubble-badge update-badge">
                          <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                          Update: ${L.newVersion}
                        </span>
                      `:""}
                      ${m?l.qy`
                        <span class="bubble-badge update-badge global-badge">
                          <ha-icon icon="mdi:cards-outline" style="color: var(--primary-text-color) !important;"></ha-icon>
                        </span>
                      `:""}
                    </span>
                  </h4>
                  <div class="content" style="margin-top: 4px;">
                    ${S(e,t,!!e._expandedPanelStates[t],()=>l.qy`
                      <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="module-toggles-container">
                          <span class="module-toggles-label">
                            APPLY TO
                          </span>
                          <div class="module-toggles">
                            <button 
                              class="bubble-badge toggle-badge ${h?"install-button":"link-button"}"
                              style="${"default"===t&&h?"cursor: default;":""} cursor: pointer;"
                              @click=${()=>{(t=>{const n=t.target,o=n.configValue,i=n.checked;e._config.modules=Array.isArray(e._config.modules)?e._config.modules:[];const a=ie(o,e.hass);i?(e._config.modules=e._config.modules.filter(e=>e!==`!${o}`),a||e._config.modules.includes(o)||(e._config.modules=[...e._config.modules,o])):a?(e._config.modules.includes(`!${o}`)||(e._config.modules=[...e._config.modules,`!${o}`]),e._config.modules=e._config.modules.filter(e=>e!==o)):e._config.modules=e._config.modules.filter(e=>e!==o);const r=e._myModulesSortOrder||"default",l=!0===e._expandedPanelStates?.[o];"default"===r&&(e._recentlyToggledModuleId=o,l&&(e._expandedPanelStates=e._expandedPanelStates||{},e._expandedPanelStates[o]=!0),setTimeout(()=>{e._recentlyToggledModuleId=null,e.requestUpdate()},2e3)),(0,s.rC)(e,"config-changed",{config:e._config}),e.requestUpdate(),"default"===r&&i&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{const t=e.shadowRoot?.querySelector(`ha-expansion-panel[data-module-id="${o}"]`);if(t){l&&!t.expanded&&(t.expanded=!0);const e=t.getBoundingClientRect();e.top>=0&&e.bottom<=window.innerHeight||t.scrollIntoView({behavior:"smooth",block:"start"})}})})})({target:{checked:!h,configValue:t}})}}
                            >
                              <ha-icon icon="mdi:card-outline"></ha-icon>
                              <span>This card</span>
                            </button>
                            
                            <button 
                              class="bubble-badge toggle-badge ${m&&!g?"update-button":"link-button"} ${y||!o?"disabled":""}"
                              style="cursor: pointer; ${y||!o?"opacity: 0.7; cursor: default;":""}"
                              @click=${()=>{y||(async(t,n)=>{await oe(e,t,n)&&(!0===n&&(e._config.modules=Array.isArray(e._config.modules)?e._config.modules.filter(e=>e!==`!${t}`):[]),(0,s.rC)(e,"config-changed",{config:e._config}),e.requestUpdate(),setTimeout(()=>e.requestUpdate(),100))})(t,!m)}}
                              ?disabled=${y||!o}
                            >
                              <ha-icon icon="mdi:cards-outline"></ha-icon>
                              <span>${"All cards"}</span>
                            </button>
                            ${y&&!f?l.qy`
                              <button 
                                class="bubble-badge toggle-badge"
                                style="padding: 4px;"
                                @click=${n=>{n.stopPropagation(),e._helpModuleId=e._helpModuleId===t?null:t,e.requestUpdate()}}
                                title="Show help"
                              >
                                <ha-icon icon="mdi:help"></ha-icon>
                              </button>
                            `:""}
                          </div>
                        </div>
                        
                        <!-- Module Action Buttons -->
                        <div class="module-actions">
                          ${A?l.qy`
                            <button 
                              class="icon-button update-button" 
                              style="margin: 0 24px;"
                              @click=${()=>{e._selectedModuleTab=1,e._storeSearchQuery=n,e.requestUpdate()}} 
                              title="Update Module"
                            >
                              <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                              Update
                            </button>
                          `:""}
                          <button class="icon-button ${o?"":"disabled"}" @click=${()=>(0,J.dK)(e,t)} title="Edit Module">
                            <ha-icon icon="mdi:pencil"></ha-icon>
                          </button>
                          ${X.dn&&(0,X.dn)(t)||"default"===t?"":l.qy`
                              <button class="icon-button ${o?"":"disabled"}" @click=${()=>(0,J.s)(e,t)} title="Delete Module">
                                <ha-icon icon="mdi:delete"></ha-icon>
                              </button>
                            `}
                        </div>
                      </div>
                      <hr>

                      ${e._helpModuleId===t?l.qy`
                        <div class="bubble-info">
                          <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Why "All cards" is disabled?
                          </h4>
                          <div class="content">
                            <p>Modules with custom editors cannot be applied globally. This feature is reserved for modules that only apply styles.</p>
                          </div>
                        </div>
                      `:""}

                      ${r.length>0?l.qy`
                          <h4 class="${h?"":"disabled"}">
                            <ha-icon icon="mdi:cog"></ha-icon>
                            Configuration
                          </h4>
                          <ha-form
                            class="${h?"":"disabled"}"
                            .hass=${e.hass}
                            .data=${_}
                            .schema=${$}
                            .computeLabel=${e._computeLabelCallback}
                            .disabled=${!h}
                            @value-changed=${n=>e._valueChangedInHaForm(n,t,r)}
                          ></ha-form>
                          <hr>
                        `:""}

                      <div class="bubble-info" style="display: ${a?"":"none"}">
                        <h4 class="bubble-section-title">
                          <ha-icon icon="mdi:information-outline"></ha-icon>
                            About this module
                        </h4>
                        <div class="content">
                          ${l.qy`<span .innerHTML=${a}></span>`}
                        </div>
                      </div>

                      ${u||p||b?l.qy`
                          <h4 class="version module-version">
                            ${u?`Created by ${u}`:""}
                            <span class="version-number">
                              ${p?l.qy`<a href="${p}" target="_blank" rel="noopener noreferrer">Module link</a> • `:""}
                              ${b||""}
                            </span>
                          </h4>
                          `:""}
                    `)}
                  </div>
                </ha-expansion-panel>
              `})}
            
            ${0===re(e).length?l.qy`
              <div class="bubble-info">
                <h4 class="bubble-section-title">
                  <ha-icon icon="mdi:information-outline"></ha-icon>
                  No modules found
                </h4>
                <div class="content">
                  <p>No modules match your search criteria. Try modifying your search or sort order.</p>
                </div>
              </div>
            `:""}
          `}

          <hr>
          ${e._showNewModuleForm||e._showManualImportForm||e._editingModule||!o?"":l.qy`
          <div class="module-editor-buttons-container" style="display: flex;">
            <button class="icon-button" style="flex: 1;" @click=${()=>{e._showNewModuleForm=!0,e._showManualImportForm=!1,e._generateUniqueModuleId&&(e._newModuleTemplate.id=e._generateUniqueModuleId("my_module")),e._editingModule={...e._newModuleTemplate},e._config.modules||(e._config.modules=e._config.style_templates||[]),e._config.modules.includes(e._editingModule.id)||(e._config.modules=[...e._config.modules,e._editingModule.id],(0,s.rC)(e,"config-changed",{config:e._config})),e.requestUpdate(),setTimeout(()=>(0,K.XY)(e),0)}}>
              <ha-icon icon="mdi:puzzle-plus"></ha-icon>
              Create new Module
            </button>
            
            <button class="icon-button" style="flex: 1;" @click=${()=>{e._showManualImportForm=!0,e._showNewModuleForm=!1,e._manualYamlContent="",e.requestUpdate(),setTimeout(()=>(0,K.XY)(e),0)}}>
              <ha-icon icon="mdi:code-json"></ha-icon>
              Import from YAML
            </button>
          </div>
          `}
        `}

        <div class="bubble-info">
          <h4 class="bubble-section-title">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            Modules
          </h4>
          <div class="content">
            <p>Modules are really powerful and the best way to apply <a href="https://github.com/Clooos/Bubble-Card#styling" target="_blank" rel="noopener noreferrer">custom styles</a> and/or <a href="https://github.com/Clooos/Bubble-Card#templates" target="_blank" rel="noopener noreferrer">JS templates</a> to your cards, without having to copy/paste the same code over and over again.</p>
            <p>This makes it easy to change things like the styles of all your cards, and for advanced users, to modify or add features with a real editor.</p>
            <p><b>If coding isn't your thing</b>, you can also find and install modules made by the community in the <b>Module Store</b>.</p>
          </div>
        </div>
      </div>
    </ha-expansion-panel>
  `,d=ne();return"sl-tab-group"===d?requestAnimationFrame(()=>{const t=e.shadowRoot?.getElementById(n);if(t&&"function"==typeof t.show){const n=void 0!==e._selectedModuleTab?e._selectedModuleTab.toString():"0";t.show(n)}}):"ha-tab-group"===d&&requestAnimationFrame(()=>{const t=e.shadowRoot?.getElementById(n);if(!t)return;const o=ee[e._selectedModuleTab??0]??(e._selectedModuleTab??0).toString();"activePanel"in t&&(t.activePanel=o),t.setAttribute("active-panel",o)}),c}(this)}makeModuleStore(){return(0,X._e)(this)}_normalizeConfigValuePath(e){const t=e=>null==e?"":String(e).trim();if("string"==typeof e||"number"==typeof e)return t(e);if(Array.isArray(e))return e.map(e=>t(e)).filter(Boolean).join(".");if(e&&"object"==typeof e){if(Array.isArray(e.path))return e.path.map(e=>t(e)).filter(Boolean).join(".");if(void 0!==e.path)return t(e.path);if(void 0!==e.key)return t(e.key)}return""}_valueChanged(e){const t=e.target,n=e.detail;let o,i=!1;const a=Boolean(t&&t.configValue&&Object.prototype.hasOwnProperty.call(t,"value")&&void 0===t.value);if("HA-SWITCH"===t.tagName?(o=t.checked,i=!0):void 0!==t.value?(o="string"==typeof t.value?t.value.replace(",","."):t.value,i=!0):a?(o=t.value,i=!0):void 0!==n?.value&&(i=!0),!i)return;if("string"==typeof o&&(o.endsWith(".")||"-"===o))return;let r={...this._config};try{const{configValue:i,checked:a}=t;if(i){const a=this._normalizeConfigValuePath(i);if(!a)return void console.warn("Bubble Card Editor: skipped update due to invalid configValue",i);const s=a.split(".").filter(Boolean);if(!s.length)return void console.warn("Bubble Card Editor: empty config path provided",i);if(s.length>1){let i=r,a="";for(let e=0;e<s.length-1;e++){const t=s[e];a=a?`${a}.${t}`:t,i[t]||(i[t]={}),i[t]={...i[t]},i=i[t]}const l=s[s.length-1];"input"===e.type?i[l]=o:n&&i[l]!==n.value?i[l]=n.value:"HA-SWITCH"===t.tagName&&(i[l]=o)}else{const i=s[0];"input"===e.type?r[i]=o:n&&r[i]!==n.value?r[i]=n.value:"HA-SWITCH"===t.tagName&&(r[i]=o)}}else r=n.value}catch(e){if(t.configValue&&n)r[t.configValue]=n.value;else{if(!n)return;r=n.value}}try{if("rows"===t?.configValue){const e=r?.rows,t=null==e||""===e;this._rowsAutoMode=t,t&&delete r.rows}else if("grid_options.rows"===t?.configValue){const e=r?.grid_options?.rows,t=null==e||""===e;this._rowsAutoMode=t,t&&r?.grid_options&&delete r.grid_options.rows}"card_type"===t?.configValue&&"calendar"===n?.value&&(void 0!==r.rows&&null!==r.rows&&""!==r.rows||(r.rows=1))}catch(e){}this._config=r,(0,s.rC)(this,"config-changed",{config:r})}_arrayValueChange(e,t,n){if(this._config.sub_button&&!this.subButtonJustAdded)return this.subButtonJustAdded=!0,void setTimeout(()=>this._arrayValueChange(e,t,n),10);const o=(e,t,n,o)=>{const i=String(t).split(".").filter(Boolean);let a=e;for(let e=0;e<i.length-1;e++){const t=i[e],n=i[e+1],o=!isNaN(parseInt(n,10));void 0!==a[t]&&null!==a[t]||(a[t]=o?[]:{}),Array.isArray(a[t])?a[t]=[...a[t]]:a[t]={...a[t]},a=a[t]}const r=i[i.length-1],s=Array.isArray(a[r])?a[r]:a[r]?[...a[r]]:[],l=Array.isArray(s)?[...s]:[],c=l[n]||{};return l[n]={...c,...o},a[r]=l,l[n]};let i;if("string"==typeof n&&n.includes("."))i=o(this._config,n,e,t);else{this._config[n]=this._config[n]||[];const o=[...this._config[n]],a=o[e]||{};o[e]={...a,...t},this._config[n]=o,i=o[e]}try{if("string"==typeof n&&n.startsWith("sub_button")){const t=i||{},a=t.entity??this._config.entity??"",r="string"==typeof a&&(a.startsWith("input_select")||a.startsWith("select")),s=!!t.select_attribute;if(!t.sub_button_type&&(r||s))if("string"==typeof n&&n.includes("."))o(this._config,n,e,{sub_button_type:"select"});else{const t=[...this._config[n]],o=t[e]||{};t[e]={...o,sub_button_type:"select"},this._config[n]=t}}}catch{}(0,s.rC)(this,"config-changed",{config:this._config}),this.requestUpdate();try{const e=String(n||"");("sub_button"===e||e.startsWith("sub_button"))&&this._scheduleAutoRowsCompute("sub_button changed")}catch(e){}}_ActionChanged(e,t,n){var o=!1;try{e.currentTarget&&e.currentTarget.__schema&&e.currentTarget.__schema[0]&&e.detail.value[e.currentTarget.__schema[0].name]&&e.detail.value[e.currentTarget.__schema[0].name].target&&e.detail.value[e.currentTarget.__schema[0].name].target.entity_id&&"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id[0]&&(o=!0)}catch{}try{e.currentTarget&&e.currentTarget.__schema&&e.currentTarget.__schema[0]&&e.detail.value[e.currentTarget.__schema[0].name]&&e.detail.value[e.currentTarget.__schema[0].name].target&&"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id&&(o=!0)}catch{}if(o&&e.currentTarget&&e.currentTarget.__schema&&e.currentTarget.__schema[0]&&e.detail.value[e.currentTarget.__schema[0].name]&&(e.detail.value[e.currentTarget.__schema[0].name].action="call-service",null!=e.detail.value[e.currentTarget.__schema[0].name].perform_action&&(e.detail.value[e.currentTarget.__schema[0].name].service=""+e.detail.value[e.currentTarget.__schema[0].name].perform_action,delete e.detail.value[e.currentTarget.__schema[0].name].perform_action)),"button_action"===t||"event_action"===t)this._config[t]=e.detail.value;else if("string"==typeof t&&t.startsWith("sub_button")){const o=e.detail.value,i=(e,t,n,o)=>{const i=String(t).split(".").filter(Boolean);let a=e;for(let e=0;e<i.length-1;e++){const t=i[e],n=i[e+1],o=!isNaN(parseInt(n,10));void 0!==a[t]&&null!==a[t]||(a[t]=o?[]:{}),Array.isArray(a[t])?a[t]=[...a[t]]:a[t]={...a[t]},a=a[t]}const r=i[i.length-1],s=Array.isArray(a[r])?a[r]:a[r]?[...a[r]]:[],l=Array.isArray(s)?[...s]:[],c=l[n]||{};return l[n]={...c,...o},a[r]=l,l[n]};if(t.includes("."))i(this._config,t,n,o);else{this._config[t]=this._config[t]||[];const e=[...this._config[t]],i=e[n]||{};e[n]={...i,...o},this._config[t]=e}}else t?this._config[t]=e.detail.value:this._config=e.detail.value;(0,s.rC)(this,"config-changed",{config:this._config})}_updateActionsEntity(e){let t=JSON.parse(JSON.stringify(this._config));const n=e.target.configValue.split(".");let o=0;for(o=0;o<n.length-2;o++)t=t[n[o]]?t[n[o]]:{};e.target.checked?t[n[o]]?t[n[o]].target={entity_id:"entity"}:t[n[o]]={target:{entity_id:"entity"}}:t[n[o]]&&"entity"===t[n[o]].target?.entity_id&&(t[n[o]].target={});const i=n[n.length-2],a=t&&"object"==typeof t&&t[i]?t[i]:{},r={value:{[i]:a}},s={__schema:[{name:i}]},l={...e,detail:r,currentTarget:s};let c=null,d=null;if("button_action"===n[0]||"event_action"===n[0])c=n[0];else if(n.length>=4){const e=n[n.length-3];c=n.slice(0,n.length-3).join(".");const t=parseInt(e,10);d=isNaN(t)?null:t}else if(n.length>=3){c=n[0];const e=parseInt(n[1],10);d=isNaN(e)?null:e}this._ActionChanged(l,c,d)}_computeLabelCallback=e=>e.label;_conditionChanged(e,t,n){if(e.stopPropagation(),n){this._config[n]=this._config[n]||[];let o=[...this._config[n]];o[t]=o[t]||{};const i=e.detail.value;o[t]={...o[t],visibility:i},this._config[n]=o}else if("pop-up"===this._config.card_type){const t=e.detail.value;this._config={...this._config,trigger:t}}(0,s.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}static get styles(){return l.AH`
        ${(0,l.iz)('div {\n  display: grid;\n  grid-gap: 12px;\n}\n\n/* Card type dropdown separator */\n.card-config > ha-form:first-of-type::after {\n  content: "";\n  position: relative;\n  background-color: var(--background-color, var(--secondary-background-color));\n  display: block;\n  width: 100%;\n  height: 1px;\n  top: 12px;\n  margin-bottom: 12px !important;\n  opacity: 0.6;\n}\n\n#add-button {\n  margin: 0 0 14px 0;\n  color: var(--text-primary-color);\n  width: 100%;\n  height: 32px;\n  border-radius: 16px;\n  border: none;\n  background-color: var(--accent-color);\n  cursor: pointer;\n}\n\np {\n  margin-bottom: 4px;\n}\n\nul {\n  margin: 0px 14px !important;\n  padding-left: 0px !important;\n}\n\nha-icon, a, p, button, h4 {\n  color: var(--primary-text-color) !important;\n}\n\nhr {\n  display: inline-block;\n  width: 100%;\n  height: 1px;\n  border: none;\n  background-color: var(--outline-color);\n  margin: 8px 0 0 0;\n}\n\ncode, code-block {\n  background: rgba(0,120,180,0.3);\n  color: var(--primary-text-color);\n  background-blend-mode: darken;\n  padding: 1px 3px;\n  border-radius: 6px;\n  font-size: 13px;\n}\n\ncode-block {\n  display: grid;\n  width: 100%;\n  padding: 0;\n  max-height: 285px;\n  overflow: auto;\n}\n\ncode-block pre {\n  white-space: pre;\n  overflow: auto;\n  margin: 8px;\n}\n\ncode-block.with-i pre {\n  white-space: pre-line;\n  overflow: auto;\n  margin: 8px;\n}\n\ncode-block.with-i pre > i {\n  white-space: pre;\n  font-style: normal;\n}\n\nimg {\n  max-width: 100%;\n  margin: 14px 0;\n}\n\nimg.example {\n  padding: 32px;\n  box-sizing: border-box;\n  background: rgba(0, 120, 180, 0.8);\n  border-radius: 6px;\n}\n\n.button-header {\n  height: auto;\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  margin: 0 8px;\n}\n\n.button-number {\n  display: inline-flex;\n  width: auto;\n}\n\n.remove-button {\n  display: inline-flex;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  text-align: center;\n  line-height: 24px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.content {\n  margin: 12px 4px 14px 4px;\n}\n\nh4 > ha-icon {\n  margin: 8px 12px 8px 8px;\n}\n\nha-expansion-panel h4:not(.version) {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\nha-expansion-panel > .content, ha-expansion-panel .content {\n  overflow-x: visible !important;\n  display: flex;\n  flex-direction: column; \n}\n\nha-form {\n  --expansion-panel-summary-padding: 2px 14px;\n}\n\nha-textfield {\n  width: 100%;\n}\n\nh3 {\n  margin: 4px 0;\n}\n\n.code-editor {\n  overflow: scroll;\n}\n\n.icon-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: rgba(0,120,180,0.5);\n  border: none;\n  cursor: pointer;\n  margin: 0;\n  border-radius: 32px;\n  font-size: 13px;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n\n.icon-button:hover {\n  background: rgba(0,120,180,0.7);\n  transform: translateY(-1px);\n}\n\n.icon-button:active {\n  background: rgba(0,120,180,0.9);\n}\n\n.icon-button.header {\n  background: none;\n  padding: 0;\n  margin: 0 4px;\n}\n\n.button-container {\n  display: flex;\n  margin-left: auto !important;\n}\n\nha-card-conditions-editor {\n  margin-top: -12px;\n}\n\n.disabled {\n  opacity: 0.5; \n  pointer-events: none;\n}\n\n.version {\n  font-size: 12px !important;\n  color: #fff;\n  background: rgba(0,0,0,0.1);\n  padding: 8px 16px;\n  border-radius: 32px;\n}\n\n.module-version {\n  margin: 0;\n}\n\n.version-number {\n  font-size: 10px;\n  background: rgba(0,120,180,1);\n  padding: 0px 8px;\n  border-radius: 12px;\n  margin-right: -6px;\n  float: right;\n  color: white;\n}\n\n.version-number a {\n  color: white !important;\n}\n\n.bubble-info-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.bubble-section-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: -6px !important;\n  color: var(--primary-text-color) !important;\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-left: 4px;\n}\n\n.bubble-section-title ha-icon {\n  color: var(--info-color) !important;\n  margin: 8px 8px 8px 0;\n  line-height: normal !important;\n}\n\n.bubble-section-title::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: var(--primary-color);\n  border-radius: 2px;\n}\n\n.bubble-info {\n  padding: 0 0 14px;\n  position: relative;\n  overflow: auto;\n}\n\n.bubble-info .content {\n  margin: 0;\n  padding: 0 18px;\n}\n\n.bubble-info::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: var(--info-color);\n  border-radius: 4px;\n  opacity: 0.12;\n  pointer-events: none;\n}\n\n.bubble-info.warning::before {\n  background-color: var(--warning-color);\n  opacity: 0.15;\n}\n\n.bubble-info.warning .bubble-section-title::before {\n  background: var(--warning-color);\n}\n\n.bubble-info.warning .bubble-section-title ha-icon {\n  color: var(--warning-color) !important;\n}\n\n.bubble-info.error::before {\n  background-color: var(--error-color);\n  opacity: 0.15;\n}\n\n.bubble-info.error .bubble-section-title::before {\n  background: var(--error-color);\n}\n\n.bubble-info.error .bubble-section-title ha-icon {\n  color: var(--error-color) !important;\n}\n\n.bubble-info h4 {\n  margin: 8px 0 0 0;\n  padding: 0 18px;\n}\n\n.bubble-info p {\n  margin: 0;\n}\n\n.bubble-info * {\n  z-index: 1;\n}\n\n.bubble-section-title + p {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.bubble-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin: 4px 0;\n  justify-content: flex-start;\n}\n\n.bubble-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px;\n  text-decoration: none;\n  font-size: 13px;\n  transition: all 0.2s ease;\n  box-shadow: none;\n  height: 26px;\n  border: none;\n  position: relative;\n  border-radius: 18px;\n  white-space: nowrap;\n  background-color: var(--mdc-text-field-disabled-line-color);\n}\n\n.bubble-badge:hover {\n  transform: translateY(-1px);\n  background: rgba(0, 120, 180, 0.5);\n}\n\n.bubble-badge ha-icon {\n  color: var(--primary-text-color) !important;\n  --mdc-icon-size: 16px;\n  line-height: normal;\n}\n\n.paypal-icon, .bmc-icon, .patreon-icon {\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.paypal-icon svg, .bmc-icon svg, .patreon-icon svg {\n  width: 100%;\n  height: 100%;\n  fill: var(--primary-text-color);\n}\n\n.bubble-thank-you {\n  margin: 0 !important;\n  padding: 8px !important;\n  opacity: 0.8;\n}\n\n.creator-message {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.creator-message a {\n  display: flex;\n  transition: all 0.2s ease;\n}\n\n.creator-message a:hover {\n  transform: scale(0.95);\n}\n\n.creator-avatar {\n  min-width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  margin: 0;\n}\n\nul.icon-list {\n  list-style-type: none;\n  padding-left: 0 !important;\n  margin-left: 0 !important;\n}\n\nul.icon-list li {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n  line-height: 24px;\n}\n\nul.icon-list li ha-icon {\n  min-width: 24px;\n  margin-right: 8px;\n  --mdc-icon-size: 18px;\n}\n\n.layout-subsection {\n  display: grid;\n  grid-gap: 12px;\n  padding: 12px 0 0;\n}\n\n.layout-subtitle {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--primary-text-color);\n}\n\n.layout-subtitle ha-icon {\n  margin-right: 8px;\n  --mdc-icon-size: 18px;\n}\n\n.element-actions {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.no-bg {\n  background: none;\n  box-shadow: none;\n}\n\nmwc-list-item[disabled] ha-icon {\n  opacity: 0.38;\n}:root {\n  --rgb-primary-color: 3, 169, 244;\n  --rgb-info-color: 33, 150, 243;\n  --rgb-warning-color: 255, 152, 0;\n  --rgb-error-color: 244, 67, 54;\n  --rgb-success-color: 76, 175, 80;\n}\n\n/* Module Store Styles */\n.module-store {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  position: relative;\n  padding-bottom: 40px;\n}\n\n.store-header {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 16px;\n  background-color: var(--card-background-color);\n  border-radius: 16px;\n  padding: 16px;\n  border: 1px solid var(--divider-color);\n  box-shadow: var(--shadow-elevation-1dp);\n  position: relative;\n  overflow: hidden;\n}\n\n.store-header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.store-header-title {\n  font-size: 16px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.store-header-title ha-icon {\n  color: var(--info-color) !important;\n}\n\n.store-refresh-button {\n  color: var(--primary-text-color);\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: var(--shadow-elevation-1dp);\n}\n\n.store-refresh-button:hover {\n  transform: rotate(180deg);\n  box-shadow: var(--shadow-elevation-2dp);\n}\n\n.store-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 32px;\n  overflow: hidden;\n}\n\n.store-search ha-textfield {\n  flex-grow: 1;\n}\n\n.store-filters {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 4px;\n}\n\n.store-filter-type {\n  flex-grow: 1;\n  min-width: 180px;\n}\n\n.store-modules {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.store-module-card {\n  display: flex;\n  flex-direction: column;\n  border-radius: 16px;\n  border: 1px solid var(--divider-color);\n  overflow: hidden;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  background-color: var(--card-background-color);\n  box-shadow: var(--shadow-elevation-1dp);\n  margin-bottom: 16px;\n}\n\n.store-module-card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-elevation-3dp);\n}\n\n.store-module-header {\n  position: relative;\n  padding: 16px 16px 0 0;\n  margin: 0;\n  border-radius: 0;\n  border-bottom: 1px solid var(--divider-color);\n}\n\n.store-module-header::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: var(--info-color);\n  border-radius: 0;\n  opacity: 0.12;\n  pointer-events: none;\n}\n\n.store-module-header.warning::before {\n  background-color: var(--warning-color);\n  opacity: 0.15;\n}\n\n.store-module-header .bubble-section-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding-left: 0;\n  margin-bottom: 0px !important;\n  position: relative;\n}\n\n.store-module-header .bubble-section-title::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: var(--primary-color);\n  border-radius: 0 2px 2px 0;\n}\n\n.store-module-header.warning .bubble-section-title::before {\n  background: var(--warning-color);\n}\n\n.store-module-header .bubble-section-title ha-icon {\n  margin: 0 0 0 19px;\n  color: var(--info-color) !important;\n}\n\n.store-module-header.warning .bubble-section-title ha-icon {\n  color: var(--warning-color) !important;\n}\n\n.store-module-header h3 {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.store-module-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 0 4px 18px;\n  margin-bottom: 0;\n}\n\n.store-module-badges {\n  margin: 0;\n  justify-content: flex-start;\n}\n\n.store-module-author {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n  color: var(--secondary-text-color);\n}\n\n.author-avatar {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  margin: 0;\n  border: 1px solid rgba(0,0,0,0.1);\n}\n\n.store-module-content {\n  padding: 0 16px;\n  background-color: var(--card-background-color);\n  grid-gap: 8px;\n}\n\n.module-description {\n  margin: 0 0 -4px;\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.module-preview-image {\n  border-radius: 12px;\n  max-height: 220px;\n  width: 100%;\n  object-fit: contain;\n  background-color: var(--secondary-background-color);\n  margin: 0;\n  transition: all 0.3s ease;\n}\n\n.module-preview-container {\n  position: relative;\n  margin-top: 8px;\n  overflow: hidden;\n  border-radius: 12px;\n}\n\n.module-preview-zoom-btn {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: var(--primary-color);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0.8;\n  transition: all 0.2s ease;\n  z-index: 5;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.2);\n}\n\n.module-preview-zoom-btn:hover {\n  opacity: 1;\n  transform: scale(1.1);\n}\n\n.module-preview-zoom-btn ha-icon {\n  color: white !important;\n  --mdc-icon-size: 20px;\n}\n\n.module-preview-fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-out;\n}\n\n.module-preview-fullscreen img {\n  max-width: 90%;\n  max-height: 90%;\n  object-fit: contain;\n  margin: 0;\n  border-radius: 6px;\n}\n\n.compatibility-warning {\n  margin-top: -8px;\n  margin-bottom: 12px;\n}\n\n.compatibility-warning ha-icon {\n  color: var(--warning-color) !important;\n}\n\n.store-module-actions {\n  margin: 12px 0 12px;\n  justify-content: flex-start;\n  border-top: 1px solid var(--divider-color);\n  padding-top: 12px;\n  display: flex;\n  gap: 8px;\n}\n\n.store-module-card.incompatible .store-module-actions {\n  opacity: 0.8;\n}\n\n.bubble-badge.install-button {\n  background-color: rgba(33, 150, 243, 0.7);\n  color: var(--primary-color);\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n\n.bubble-badge.install-button span {\n  color: var(--primary-text-color);\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n\n.bubble-badge.install-button ha-icon {\n  transition: color 0.2s ease;\n}\n\n.bubble-badge.install-button:hover {\n  transform: translateY(-1px);\n  background-color: rgba(33, 150, 243, 0.9);\n}\n\n.bubble-badge.install-button:hover span,\n.bubble-badge.install-button:hover ha-icon {\n  color: white !important;\n}\n\n.bubble-badge.update-button {\n  background-color: rgb(0, 220, 80);\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.bubble-badge.update-button ha-icon {\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.bubble-badge.update-button:hover {\n  transform: translateY(-1px);\n  background-color: rgb(0, 180, 60);\n}\n\n.bubble-badge.clickable {\n  cursor: pointer;\n}\n\n.bubble-badge.installed-button {\n  background-color: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);\n  color: var(--success-color, var(--primary-color));\n  opacity: 0.8;\n  cursor: default;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.bubble-badge.installed-button span {\n  color: var(--primary-text-color);\n  font-weight: 500;\n}\n\n.bubble-badge.installed-button:hover {\n  transform: none;\n  background: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);\n}\n\n.bubble-badge.link-button {\n  background-color: rgba(0, 0, 0, 0.06);\n  color: var(--secondary-text-color);\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.bubble-badge.link-button:hover {\n  background-color: rgba(0, 0, 0, 0.12);\n  transform: translateY(-1px);\n}\n\n.bubble-badge.update-badge {\n  background-color: rgb(0, 220, 80);\n  font-weight: 500;\n  font-size: 11px;\n  padding: 2px 8px;\n  height: 20px;\n  margin-left: auto !important;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.bubble-badge.update-badge ha-icon {\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.bubble-badge.update-badge:hover {\n  transform: none;\n}\n\n.bubble-badge.version-badge {\n  background-color: rgba(0, 0, 0, 0.08);\n  color: var(--primary-text-color);\n  font-weight: 500;\n  font-size: 11px;\n  padding: 2px 8px;\n  height: 20px;\n}\n\n.bubble-badge.incompatible-badge {\n  background-color: rgba(var(--rgb-warning-color), 0.12);\n  color: var(--warning-color);\n  font-weight: 500;\n  font-size: 11px;\n  padding: 2px 8px;\n  height: 20px;\n}\n\n.bubble-badge.incompatible-badge::before {\n  background-color: var(--warning-color);\n  opacity: 0.3;\n}\n\n.bubble-badge.new-badge {\n  background-color: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);\n  color: var(--primary-text-color);\n  font-weight: 500;\n  font-size: 11px;\n  padding: 2px 8px;\n  height: 20px;\n}\n\n.bubble-badge.new-badge::before {\n  background-color: var(--success-color, #28a745);\n  opacity: 0.2;\n}\n\n.bubble-badge.yaml-badge {\n  background-color: rgba(255, 167, 38, 0.45);\n  color: var(--primary-text-color);\n  font-weight: 700;\n  font-size: 11px;\n  padding: 2px 8px;\n  height: 20px;\n}\n\n.bubble-badge.yaml-badge::before {\n  background-color: #ff9800;\n  opacity: 0.5;\n}\n\n.version-container {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  gap: 8px;\n}\n\n/* Material tabs */\nha-tabs, ha-tab-group, sl-tab-group {\n  margin-bottom: 16px;\n  --primary-tab-color: var(--primary-color);\n  --secondary-tab-color: var(--secondary-text-color);\n  border-bottom: 1px solid var(--divider-color);\n  top: 0;\n  position: sticky;\n  background-color: var(--card-background-color);\n  z-index: 6;\n  padding-top: 16px;\n  margin-top: -24px;\n  top: -40px;\n}\n\nsl-tab-group {\n  border-bottom: none;\n}\n\nha-tab-group {\n  display: block;\n}\n\nha-tab-group-tab {\n  flex-grow: 1;\n  text-align: center;\n}\n\nha-tab-group-tab[active] {\n  color: var(--primary-text-color);\n  opacity: 1;\n}\n\nha-tab-group-tab[disabled] {\n  opacity: 0.4;\n  pointer-events: none;\n}\n.module-editor-top-marker {\n  display: flex;\n  position: relative;\n  top: 0;\n}\n\npaper-tab {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 120px;\n  font-weight: 500;\n  font-size: 14px;\n  transition: all 0.3s ease;\n  position: relative;\n  color: var(--secondary-tab-color);\n  padding: 0 16px;\n  opacity: 0.8;\n}\n\npaper-tab[aria-selected="true"] {\n  color: var(--primary-text-color);\n  opacity: 1;\n}\n\npaper-tab.disabled,\npaper-tab[disabled] {\n  opacity: 0.4;\n  pointer-events: none;\n}\n\npaper-tab ha-icon {\n  margin-right: 8px;\n  color: var(--secondary-tab-color);\n}\n\npaper-tab[aria-selected="true"] ha-icon {\n  color: var(--primary-tab-color) !important;\n}\n\npaper-tab::after {\n  content: \'\';\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 3px;\n  background-color: var(--primary-tab-color);\n  transition: all 0.3s ease;\n  transform: translateX(-50%);\n  border-radius: 3px 3px 0 0;\n  opacity: 0;\n}\n\npaper-tab[aria-selected="true"]::after {\n  width: 80%;\n  opacity: 1;\n}\n\npaper-tab:hover {\n  background-color: rgba(var(--rgb-primary-color), 0.05);\n}\n\n/* Tab ripple effect */\npaper-ripple {\n  color: var(--primary-tab-color);\n  opacity: 0.1;\n}\n\n#tabs {\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n  background-color: var(--card-background-color);\n  box-shadow: var(--shadow-elevation-1dp);\n}\n\n@media (max-width: 600px) {\n  paper-tab {\n    min-width: auto;\n    padding: 0 12px;\n    font-size: 13px;\n  }\n}\n\nsl-tab {\n  flex: 1;\n  text-align: center;\n}\n\n.bubble-badge.hoverable {\n  cursor: pointer !important;\n  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;\n}\n\n.bubble-badge.hoverable:active {\n  transform: translateY(0);\n}\n\n/* Back to top button */\n.back-to-top-button {\n  position: sticky;\n  bottom: 0px;\n  right: 20px;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background-color: var(--primary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(0,0,0,0.3);\n  transition: all 0.2s ease;\n  z-index: 10;\n  margin-left: auto;\n  margin-top: 16px;\n}\n\n.back-to-top-button:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 10px rgba(0,0,0,0.3);\n}\n\n.back-to-top-button:active {\n  transform: translateY(0);\n  box-shadow: 0 1px 3px rgba(0,0,0,0.3);\n}\n\n.back-to-top-button ha-icon {\n  color: white !important;\n  --mdc-icon-size: 22px;\n}\n\n.store-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 42px;\n  gap: 24px;\n  position: relative;\n  background-color: var(--card-background-color);\n  border-radius: 16px;\n  border: 1px solid var(--divider-color);\n  box-shadow: var(--shadow-elevation-1dp);\n  overflow: hidden;\n}\n\n.bubble-loading-icon {\n  position: relative;\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 8px;\n}\n\n.icon-center-wrapper {\n  position: absolute;\n  top: 3px;\n  left: 6px;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n\n.bubble-loading-icon ha-icon {\n  --mdc-icon-size: 26px;\n  color: var(--primary-color);\n  opacity: 0.9;\n  animation: pulseAnimation 3s ease-in-out infinite;\n  margin: 0;\n  padding: 0;\n}\n\n.bubble-loading-orbit {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 2px dashed rgba(var(--rgb-primary-color), 0.2);\n  border-radius: 50%;\n  animation: orbitRotation 8s linear infinite;\n}\n\n.bubble-loading-satellite {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  background-color: var(--info-color);\n  border-radius: 50%;\n  top: -6px;\n  left: calc(50% - 6px);\n  box-shadow: 0 0 10px rgba(var(--rgb-info-color), 0.7);\n  animation: pulseAnimation 2s ease-in-out infinite;\n  transform-origin: center center;\n}\n\n.bubble-progress-container {\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  position: relative;\n}\n\n.bubble-progress-track {\n  height: 10px;\n  background-color: rgba(var(--rgb-primary-color), 0.12);\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  backdrop-filter: blur(4px);\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n  transition: all 0.3s ease;\n  transform: translateZ(0);\n  contain: paint;\n}\n\n.bubble-progress-bar {\n  background: var(--info-color);\n  border-radius: 10px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 10px;\n}\n\n.bubble-progress-glow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.bubble-progress-percentage {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n  color: var(--primary-text-color);\n}\n\n.bubble-progress-text {\n  font-weight: 500;\n}\n\n.bubble-progress-value {\n  font-weight: 600;\n  color: var(--primary-color);\n  font-variant-numeric: tabular-nums;\n}\n\n.bubble-progress-dots {\n  display: flex;\n  gap: 4px;\n}\n\n.bubble-progress-dots .dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: var(--primary-color);\n  opacity: 0.5;\n}\n\n.bubble-progress-dots .dot:nth-child(1) {\n  animation: dotAnimation 1.4s ease-in-out infinite;\n}\n\n.bubble-progress-dots .dot:nth-child(2) {\n  animation: dotAnimation 1.4s ease-in-out 0.2s infinite;\n}\n\n.bubble-progress-dots .dot:nth-child(3) {\n  animation: dotAnimation 1.4s ease-in-out 0.4s infinite;\n}\n\n@keyframes orbitRotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes pulseAnimation {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.9;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 1;\n  }\n}\n\n@keyframes glowAnimation {\n  0% {\n    --x: 0%;\n    opacity: 0.5;\n  }\n  50% {\n    --x: 100%;\n    opacity: 1;\n  }\n  100% {\n    --x: 0%;\n    opacity: 0.5;\n  }\n}\n\n@keyframes dotAnimation {\n  0%, 100% {\n    transform: translateY(0);\n    opacity: 0.5;\n  }\n  50% {\n    transform: translateY(-4px);\n    opacity: 1;\n  }\n}\n\n/* Styles for the supported cards selector */\n.checkbox-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 8px;\n}\n\n@media (max-width: 600px) {\n  .checkbox-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n/* Module Editor Styles */\n.module-actions {\n  display: flex;\n  gap: 8px;\n  margin-left: auto;\n}\n\n.module-editor-form .card-content {\n  display: grid;\n  grid-gap: 16px;\n  padding: 0;\n}\n\n.module-editor-form h3 {\n  margin: 8px 0;\n  color: var(--primary-text-color);\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.module-editor-form h4:not(.bubble-section-title) {\n  margin: 0 !important;\n  font-size: 16px;\n}\n\n.module-editor-form ha-code-editor {\n  max-height: 600px;\n  width: 100%;\n  max-width: 100%;\n  border: 1px solid var(--divider-color);\n  border-radius: 4px;\n  overflow: scroll !important;\n  box-sizing: border-box;\n  display: block;\n}\n\n.module-editor-form ha-code-editor::part(editor) {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n\n.module-editor-form ha-code-editor .monaco-editor {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n\n.module-editor-form ha-code-editor .monaco-editor .monaco-editor-background {\n  width: 100% !important;\n}\n\n.module-editor-form ha-code-editor .monaco-editor .overflow-guard {\n  width: 100% !important;\n  max-width: 100% !important;\n  overflow-x: auto !important;\n}\n\n.module-editor-form ha-code-editor .monaco-editor .monaco-scrollable-element {\n  width: 100% !important;\n  max-width: 100% !important;\n  overflow-x: auto !important;\n}\n\n.css-editor-container {\n  width: 100%;\n  max-width: 100%;\n  max-height: 500px;\n  overflow-x: auto;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n\n.css-editor-container ha-code-editor {\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n  display: block;\n}\n\n.css-editor-container ha-code-editor::part(editor) {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n\n.css-editor-container ha-code-editor .monaco-editor {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n\n.css-editor-container ha-code-editor .monaco-editor .monaco-editor-background {\n  width: 100% !important;\n}\n\n.css-editor-container ha-code-editor .monaco-editor .overflow-guard {\n  width: 100% !important;\n  max-width: 100% !important;\n  overflow-x: auto !important;\n}\n\n.css-editor-container ha-code-editor .monaco-editor .monaco-scrollable-element {\n  width: 100% !important;\n  max-width: 100% !important;\n  overflow-x: auto !important;\n}\n\n.module-editor-form ha-textarea {\n  width: 100%;\n}\n\n.module-actions .icon-button {\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.module-actions .icon-button {\n  background: none;\n}\n\n.module-actions .icon-button ha-icon {\n  --mdc-icon-size: 18px;\n}\n\n.code-editor-container, .editor-schema-container {\n  position: relative;\n  margin-bottom: 8px;\n  overflow-x: auto;\n  overflow-y: visible;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n.code-editor-container ha-code-editor,\n.editor-schema-container ha-code-editor {\n  height: auto; \n  width: 100%;\n  max-width: 100%;\n  border: 1px solid var(--divider-color);\n  border-radius: 4px;\n  overflow: hidden;\n  box-sizing: border-box;\n  display: block;\n}\n\n.code-editor-container ha-code-editor::part(editor),\n.editor-schema-container ha-code-editor::part(editor) {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n\n.code-editor-container ha-code-editor .monaco-editor,\n.editor-schema-container ha-code-editor .monaco-editor {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n\n.code-editor-container ha-code-editor .monaco-editor .monaco-editor-background,\n.editor-schema-container ha-code-editor .monaco-editor .monaco-editor-background {\n  width: 100% !important;\n}\n\n.code-editor-container ha-code-editor .monaco-editor .overflow-guard,\n.editor-schema-container ha-code-editor .monaco-editor .overflow-guard {\n  width: 100% !important;\n  max-width: 100% !important;\n  overflow-x: auto !important;\n}\n\n.code-editor-container ha-code-editor .monaco-scrollable-element,\n.editor-schema-container ha-code-editor .monaco-scrollable-element {\n  width: 100% !important;\n  max-width: 100% !important;\n  overflow-x: auto !important;\n}\n\n.form-preview {\n  border: 1px solid var(--divider-color);\n  border-radius: 8px;\n  padding: 16px;\n}\n\n.form-preview h4 {\n  margin-top: 0;\n  margin-bottom: 16px;\n  color: var(--primary-color);\n  display: flex;\n  align-items: center;\n}\n\n.form-preview-container {\n  padding: 8px;\n  border-radius: 4px;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n\n.export-section {\n  margin-top: 12px;\n}\n\n.export-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 8px;\n  margin-bottom: 16px;\n}\n\n.export-buttons .icon-button {\n  flex: 1;\n  min-width: 160px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 16px;\n}\n\n.export-preview {\n  margin-top: 12px;\n  padding: 8px;\n  border: 1px solid var(--divider-color);\n  border-radius: 8px;\n  max-height: 300px;\n  overflow: auto;\n  background: var(--secondary-background-color);\n}\n\n.export-preview pre {\n  margin: 0;\n  white-space: pre-wrap;\n  font-family: monospace;\n  font-size: 12px;\n  line-height: 1.4;\n  padding: 8px;\n}\n\nha-expansion-panel {\n  --input-fill-color: none;\n  scroll-margin-top: 64px;\n  contain: inline-size;\n  overflow: clip;\n}\n\nha-expansion-panel > .content,\nha-expansion-panel .content {\n  min-width: 0;\n  max-width: 100%;\n  overflow-x: auto;\n  overflow-y: visible;\n  box-sizing: border-box;\n}\n\nha-yaml-editor,\nha-code-editor {\n  min-width: 0;\n  max-width: 100%;\n  width: 100%;\n  display: block;\n  box-sizing: border-box;\n  contain: inline-size;\n}\n\n@keyframes highlight {\n  0% { background-color: var(--primary-color); }\n  100% { background-color: transparent; }\n}\n\nha-expansion-panel.recently-toggled {\n  animation: highlight 2s;\n}\n\n.helper-text {\n  display: block;\n  color: var(--secondary-text-color);\n  font-size: 12px;\n  margin-top: -4px;\n  margin-bottom: 8px;\n}\n\n.helper-text a {\n  color: var(--primary-color);\n}\n\n.helper-text a:hover {\n  opacity: 0.8;\n}\n\n.bubble-info > div {\n  --mdc-icon-size: 18px;\n}\n\nha-formfield.apply-module-button {\n  height: 40px;\n  border-radius: 32px;\n  padding: 0 16px;\n  background-color: rgba(0, 0, 0, 0.1);;\n}\n\n.module-editor-buttons-container {\n  display: flex; \n  gap: 8px; \n  justify-content: flex-end;\n  position: sticky;\n  bottom: -24px;\n  background-color: var(--card-background-color);\n  padding: 8px 0;\n  z-index: 1;\n}\n\n.module-toggles-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.module-toggles-label {\n  font-size: 0.85em;\n  font-weight: 500;\n  color: var(--secondary-text-color);\n  padding-left: 4px;\n  margin-bottom: -4px;\n}\n\n.module-toggles {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n\n.module-badges {\n  display: inline-flex;\n  margin-left: auto;\n  gap: 4px;\n}\n\n/* Module status icon */\n.module-status-icon {\n  opacity: 0.3;\n  transition: opacity 0.2s ease, color 0.2s ease;\n}\n\n.module-status-icon--opaque {\n  opacity: 1;\n}\n\n.module-status-icon--active {\n  color: var(--info-color) !important;\n}\n\n.module-badges .update-badge {\n  margin-left: 0 !important;\n}\n\n.global-badge {\n  background-color: transparent !important;\n  border: 1px solid rgb(0, 220, 80);\n  padding: 1px 3px !important;\n}\n\n.update-badge + .global-badge {\n  margin-left: 4px !important;\n}\n\n.toggle-badge {\n  cursor: pointer !important;\n  border: 1px solid var(--primary-text-color);\n}\n\n/* My Modules Search and Sort Controls */\n.my-modules-controls {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 16px;\n  background-color: var(--card-background-color);\n  border-radius: 16px;\n  padding: 16px;\n  border: 1px solid var(--divider-color);\n  box-shadow: var(--shadow-elevation-1dp);\n}\n\n.my-modules-top-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.my-modules-search {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  border-radius: 32px;\n  overflow: hidden;\n}\n\n.my-modules-search ha-textfield {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.my-modules-sort-menu {\n  display: flex;\n  align-items: center;\n}\n\n\n.unsupported-modules-warning {\n  margin: 0;\n}\n\n.my-modules-sort-menu .sort-trigger {\n  background: none;\n  padding: 0;\n  margin: 0 4px;\n}\n\n.my-modules-sort-menu mwc-list-item[selected] {\n  background-color: rgba(var(--rgb-primary-color), 0.12) !important;\n}\n\n.my-modules-sort-menu mwc-list-item[selected]:hover {\n  background-color: rgba(var(--rgb-primary-color), 0.18) !important;\n}\n\nmwc-icon-button ha-icon {\n  line-height: 100% !important;\n}\n')}
    `}static _resizeObserver=null;static _editorInstanceMap=new WeakMap;_getBubbleCardFromPreview(){try{if(this._previewCardRoot){const e=this._previewCardRoot.host||this._previewCardHost;if(e?.isConnected||this._previewCardRoot.isConnected)return this._previewCardRoot}if(this._previewCardHost?.isConnected)return this._previewCardHost.shadowRoot||this._previewCardHost.getRootNode?.()||null;const e=this._getEditorPreviewContainer();if(e){const t=this._deepQuerySelector(e,"bubble-card"),n=t?.shadowRoot||null;if(n)return this._previewCardHost=t,this._previewCardRoot=n,n}}catch(e){return null}}_setupAutoRowsObserver(){const e=void 0!==this._config?.grid_options?.rows&&null!==this._config?.grid_options?.rows&&""!==this._config?.grid_options?.rows;if(!this._config||e||!1===this._rowsAutoMode)return;const t=this._getBubbleCardFromPreview();if(!t)return;const n=[t.querySelector(".bubble-sub-button-bottom-container"),t.querySelector(".bubble-buttons-container.bottom-fixed"),t.querySelector(".bubble-sub-button-container")].filter(Boolean);se._resizeObserver||(se._resizeObserver=new ResizeObserver(e=>{for(const t of e){const e=se._editorInstanceMap.get(t.target);if(e){const t=e._getBubbleCardFromPreview();t&&e._computeAndApplyRows(t)}}})),this._observedElements&&this._observedElements.forEach(e=>{n.includes(e)||(se._resizeObserver.unobserve(e),se._editorInstanceMap.delete(e))}),n.forEach(e=>{this._observedElements?.includes(e)||(se._resizeObserver.observe(e),se._editorInstanceMap.set(e,this))}),this._observedElements=n,requestAnimationFrame(()=>{const e=this._getBubbleCardFromPreview();e&&this._computeAndApplyRows(e)})}_hasCustomHeightStyles(){const e=[/\.bubble-container[^{]*\{[^}]*aspect-ratio\s*:/i,/\.bubble-container[^{]*\{[^}]*height\s*:\s*100%/i,/\.bubble-container[^{]*\{[^}]*height\s*:\s*\d+(\.\d+)?\s*(px|em|rem|vh|vw|%)/i],t=t=>!(!t||"string"!=typeof t)&&e.some(e=>e.test(t));if(this._config?.styles&&t(this._config.styles))return!0;try{if(a.Ki&&a.Ki.size>0){const e=new Set,n=new Set;Array.isArray(this._config?.modules)?this._config.modules.forEach(t=>{"string"==typeof t&&t.startsWith("!")?n.add(t.substring(1)):"string"==typeof t&&e.add(t)}):this._config?.modules&&"string"==typeof this._config.modules&&(this._config.modules.startsWith("!")?n.add(this._config.modules.substring(1)):e.add(this._config.modules)),a.Ki.has("default")&&!n.has("default")&&e.add("default"),a.Ki.forEach((t,o)=>{t&&"object"==typeof t&&!0===t.is_global&&!n.has(o)&&e.add(o)});for(const n of e){const e=a.Ki.get(n);if(e&&t("object"==typeof e?e.code:e))return!0}}}catch(e){}return!1}_computeAndApplyRows(e){try{if(!e||!1===this._rowsAutoMode||!this._config)return{applied:!1};if(this._hasCustomHeightStyles()){if(void 0!==this._config.rows&&!1!==this._rowsAutoMode){const e={...this._config};delete e.rows,this._config=e,(0,s.rC)(this,"config-changed",{config:e})}return{applied:!1}}const t="calendar"===this._config.card_type,n="separator"===this._config.card_type,o=e.querySelector(".bubble-sub-button-bottom-container"),i=e.querySelector(".bubble-buttons-container.bottom-fixed"),a=e.querySelector(".bubble-sub-button-container"),r=e.querySelector(".bubble-content-container"),l=o?o.getBoundingClientRect().height:0,c=i?i.getBoundingClientRect().height:0,d=a?a.getBoundingClientRect().height:0,u={bottomSub:Math.round(l),bottomMain:Math.round(c),mainSub:Math.round(d)};if(this._lastMeasuredHeights){const e=1,t=Math.abs(u.bottomSub-this._lastMeasuredHeights.bottomSub),n=Math.abs(u.bottomMain-this._lastMeasuredHeights.bottomMain),o=Math.abs(u.mainSub-this._lastMeasuredHeights.mainSub);if(t<e&&n<e&&o<e)return{applied:!1}}if(this._lastMeasuredHeights=u,t&&!(l>0||c>0)){if(this._firstRowsComputation=!0,1!==this._config.rows){const e={...this._config,rows:1};this._config=e,(0,s.rC)(this,"config-changed",{config:e})}return}const p=e.querySelector(".bubble-container");p&&p.getBoundingClientRect();let b=!1;r&&(b=Array.from(r.children||[]).some(e=>{const t=e.getBoundingClientRect(),n=getComputedStyle(e);return t.width>0&&t.height>0&&"none"!==n.display&&"hidden"!==n.visibility&&"0"!==n.opacity}));const h=d>0,m=(()=>{const e=this._config?.sub_button;return!!e&&(!Array.isArray(e)&&(Array.isArray(e.bottom)?e.bottom:[]).some(e=>!!e))})();let g=l+c;g<=0&&m&&(g=46);const f=e=>{if(!e)return 0;try{const t=getComputedStyle(e),n=parseFloat(t.bottom);return Number.isFinite(n)?Math.max(0,n):0}catch(e){return 0}};i&&l>0&&(g+=f(i));let y=0;if(h){y=d;const e=getComputedStyle(a),t=parseFloat(e.marginTop)||0,n=parseFloat(e.marginBottom)||0;y+=t+n+(parseFloat(e.paddingTop)||0)+(parseFloat(e.paddingBottom)||0)}const v=g>0,_=v?46:36;y>0&&(y=Math.max(y,_));const w=p||e?getComputedStyle(p||e):null,x=w?w.getPropertyValue("--row-height"):"",k=parseFloat(x)||56,C=w?w.getPropertyValue("--row-gap"):"",$=k+(parseFloat(C)||8),S="separator"===this._config.card_type?.8:1;let A;const L=v&&!h&&(b||t||n),E=g+y;if(E>0||L){const e=Number.isFinite($)&&$>0?$:k,t=(L?46:0)-36+("sub-buttons"===this._config.card_type?-4:0);A=S+Math.ceil((E||0)+t)/e,A=Math.max(.1,Math.round(1e3*A)/1e3)}else A=void 0;const M=this._config.rows;if(A===M||void 0===A&&void 0===M)return this._firstRowsComputation=!0,{applied:!1};if("number"==typeof A&&"number"==typeof M&&Math.abs(A-M)<.01)return{applied:!1};if(A===S&&void 0===M)return{applied:!1};if(!1===this._rowsAutoMode)return{applied:!1};const T={...this._config};return void 0===A?delete T.rows:T.rows=A,this._config=T,this._firstRowsComputation?((0,s.rC)(this,"config-changed",{config:T}),{applied:!0,rows:T.rows}):(this._firstRowsComputation=!0,{applied:!1,skippedFirst:!0})}catch(e){}return{applied:!1}}_initializeLists(e){let t=[];0===Object.keys(this._entityCache).length?Object.keys(this.hass.states).forEach(e=>{const n=this.hass.states[e],o=e.split(".")[0];this._entityCache[o]||(this._entityCache[o]=[]),this._entityCache[o].push(e),this._selectable_attributes.some(e=>n.attributes?.[e])&&(t.includes(e)||t.push(e))}):(["input_select","select"].forEach(e=>{this._entityCache[e]&&(t=[...t,...this._entityCache[e]])}),Object.keys(this.hass.states).forEach(e=>{const n=this.hass.states[e];this._selectable_attributes.some(e=>n.attributes?.[e])&&(t.includes(e)||t.push(e))})),["input_select","select"].forEach(e=>{this._entityCache[e]&&this._entityCache[e].forEach(e=>{t.includes(e)||t.push(e)})}),t=[...new Set(t)];const n={};t.forEach(e=>{this.hass.states[e]&&(n[e]=this.hass.states[e])}),this.inputSelectList={...this.hass},this.inputSelectList.states=n,this._entity?this._entity===this._cachedAttributeListEntity&&this._cachedAttributeList?this.attributeList=this._cachedAttributeList:(this.attributeList=Object.keys(this.hass.states[this._entity]?.attributes||{}).map(e=>{let t=this.hass.states[this._entity];return{label:this.hass.formatEntityAttributeName(t,e),value:e}}),this._cachedAttributeList=this.attributeList,this._cachedAttributeListEntity=this._entity):(this.attributeList=[],this._cachedAttributeList=null,this._cachedAttributeListEntity=null);const o=e("editor.calendar.name");(!this.cardTypeList||this._cachedCalendarLabel&&this._cachedCalendarLabel!==o)&&(this.cardTypeList=[{label:"Button (Switch, slider, ...)",value:"button"},{label:o,value:"calendar"},{label:"Cover",value:"cover"},{label:"Climate",value:"climate"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Media player",value:"media-player"},{label:"Pop-up",value:"pop-up"},{label:"Select",value:"select"},{label:"Separator",value:"separator"},{label:"Sub-buttons only",value:"sub-buttons"}],this._cachedCalendarLabel=o)}_handleCardContext(e){try{const t=e?.detail;if(!t)return;const n=this._scoreCardContext(t);if(n<=this._previewCardScore)return;const o=t.context||t.card?.closest?.("bubble-card")||t.card?.getRootNode?.()?.host||null,i=t.context?.shadowRoot||o?.shadowRoot||t.card?.getRootNode?.()||null;if(!i)return;this._previewCardScore=n,this._previewCardRoot=i,this._previewCardHost=o||i.host||null,this._setupAutoRowsObserver()}catch(e){}}_scoreCardContext(e){const t=e?.config||{},n=this._config||{};let o=0;return(e?.isEditor||e?.editMode)&&(o+=5),t.card_type&&t.card_type===n.card_type&&(o+=4),t.entity&&t.entity===n.entity&&(o+=3),t.hash&&t.hash===n.hash&&(o+=2),t.button_type&&t.button_type===n.button_type&&(o+=1),o}_resetPreviewCardReference(){this._previewCardRoot=null,this._previewCardHost=null,this._previewCardScore=-1/0,this._lastMeasuredHeights=null}}customElements.define("bubble-card-editor",se);const le={hashRecentlyAdded:!1,scrollY:0,currentHash:null,hashChangeProtection:!1,isAnimating:!1,animationDuration:300,activePopups:new Set,entityTriggeredPopup:null};if(!window.__bubbleLocationDeduperAdded)try{let e=null,t=0,n=!1,o="",i=window.location.hash||"";window.addEventListener("location-changed",()=>{const a=window.location.href,r=!!window.location.hash,s=a.split("#")[0];if(r)return e=s,t=Date.now(),n=!1,o=i||"",void(i=window.location.hash);if(n)return n=!1,e=null,o="",void(i=window.location.hash||"");if(e&&s===e&&Date.now()-t<1500&&!o)try{n=!0,history.back()}catch(e){}e=null,o="",i=window.location.hash||""}),window.__bubbleLocationDeduperAdded=!0}catch(e){}const ce=new Set(["HA-DIALOG","HA-MORE-INFO-DIALOG","HA-DIALOG-DATE-PICKER"]),de={recentlyClosedTimestamp:0,protectionWindow:500};function ue(){return!(le.hashRecentlyAdded||!location.hash||le.hashChangeProtection||(setTimeout(()=>{if(le.hashChangeProtection)return;const e=window.location.href.split("#")[0];history.replaceState(null,"",e),window.dispatchEvent(new Event("location-changed"))},50),0))}function pe(e){le.hashChangeProtection=!0;const t=e.startsWith("#")?window.location.href.split("#")[0]+e:e;history.pushState(null,"",t),window.dispatchEvent(new Event("location-changed")),setTimeout(()=>{le.hashChangeProtection=!1},200)}function be(e,t){e.config.background_update?e.popUp.style.display="none":e.editor||(e.hideContentTimeout=setTimeout(()=>{const{sectionRow:t,sectionRowContainer:n}=e;"hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!0,t.style.display="none",n?.classList.contains("card")&&(n.style.display="none",n.style.position=""))},t))}function he(e,t){const{showBackdrop:n,hideBackdrop:o}=Je(e);t?n():o()}function me(e,t){e.config.background_update||(t?e.verticalStack.contains(e.popUp)||e.verticalStack.appendChild(e.popUp):t||e.config.background_update||e.verticalStack.contains(e.popUp)&&e.verticalStack.removeChild(e.popUp))}function ge(e,t){le.isAnimating=!0,e.classList.add(t?"is-opening":"is-closing"),requestAnimationFrame(()=>{e.classList.toggle("is-popup-opened",t),e.classList.toggle("is-popup-closed",!t),setTimeout(()=>{le.isAnimating=!1,e.classList.remove("is-opening","is-closing")},le.animationDuration)})}function fe(e,t){if(e.boundClickOutside||(e.boundClickOutside=t=>function(e,t){(t.config.close_by_clicking_outside??1)&&(Date.now()-de.recentlyClosedTimestamp<de.protectionWindow||e.composedPath().find(e=>!(!e.classList&&!e.nodeName)&&(e.classList?.contains("bubble-pop-up")||ce.has(e.nodeName)))||ue())}(t,e)),e.resetCloseTimeout||(e.resetCloseTimeout=()=>function(e){e.config.auto_close&&e.closeTimeout&&(clearTimeout(e.closeTimeout),e.closeTimeout=setTimeout(ue,e.config.auto_close))}(e)),!e.touchHandlersInitialized){const{handleTouchStart:t,handleTouchMove:n,handleTouchEnd:o}=function(e){if(!e.handleTouchStart){let t=0,n=0,o=!1;e.handleTouchStart=e=>{t=e.touches[0].clientY,n=t,o=!1},e.handleTouchMove=i=>{if(1!==i.touches.length)return;n=i.touches[0].clientY;const a=n-t;Math.abs(a)>10&&(o=!0,a>0&&(e.popUp.style.transform=`translateY(${a}px)`,i.preventDefault()))},e.handleTouchEnd=i=>{o&&(n-t>100?ue():e.popUp.style.transform="",o=!1)}}return{handleTouchStart:e.handleTouchStart,handleTouchMove:e.handleTouchMove,handleTouchEnd:e.handleTouchEnd}}(e);e.handleTouchStart=t,e.handleTouchMove=n,e.handleTouchEnd=o,e.touchHandlersInitialized=!0}t&&!e.editor?(e.listenersAdded||(e.config.auto_close&&(e.popUp.addEventListener("touchstart",e.resetCloseTimeout,{passive:!0}),e.popUp.addEventListener("click",e.resetCloseTimeout,{passive:!0})),e.popUp&&(e.handleTouchStart&&e.popUp.addEventListener("touchstart",e.handleTouchStart,{passive:!0}),e.handleTouchMove&&e.popUp.addEventListener("touchmove",e.handleTouchMove,{passive:!1}),e.handleTouchEnd&&e.popUp.addEventListener("touchend",e.handleTouchEnd,{passive:!0}),e.handleHeaderTouchMove&&e.elements?.header&&e.elements.header.addEventListener("touchmove",e.handleHeaderTouchMove,{passive:!0}),e.handleHeaderTouchEnd&&e.elements?.header&&e.elements.header.addEventListener("touchend",e.handleHeaderTouchEnd,{passive:!0}),e.closeOnEscape&&window.addEventListener("keydown",e.closeOnEscape,{passive:!0}),e.config.close_on_click?(e.popUp.addEventListener("click",ue,{passive:!0}),e.popUp.dataset.closeOnClick="true"):delete e.popUp.dataset.closeOnClick),e.listenersAdded=!0),e.clickOutsideListenerAdded||(window.addEventListener("click",e.boundClickOutside,{passive:!0}),e.clickOutsideListenerAdded=!0)):(e.listenersAdded&&((0,s.qo)(!1),e.config.auto_close&&(e.popUp.removeEventListener("touchstart",e.resetCloseTimeout),e.popUp.removeEventListener("click",e.resetCloseTimeout)),e.popUp&&(e.handleTouchStart&&e.popUp.removeEventListener("touchstart",e.handleTouchStart),e.handleTouchMove&&e.popUp.removeEventListener("touchmove",e.handleTouchMove),e.handleTouchEnd&&e.popUp.removeEventListener("touchend",e.handleTouchEnd),e.handleHeaderTouchMove&&e.elements?.header&&e.elements.header.removeEventListener("touchmove",e.handleHeaderTouchMove),e.handleHeaderTouchEnd&&e.elements?.header&&e.elements.header.removeEventListener("touchend",e.handleHeaderTouchEnd),e.closeOnEscape&&window.removeEventListener("keydown",e.closeOnEscape),e.config.close_on_click&&(e.popUp.removeEventListener("click",ue),delete e.popUp.dataset.closeOnClick)),e.listenersAdded=!1),e.clickOutsideListenerAdded&&(window.removeEventListener("click",e.boundClickOutside),e.clickOutsideListenerAdded=!1))}function ye(e){["hideContentTimeout","removeDomTimeout","closeTimeout"].forEach(t=>{e[t]&&(clearTimeout(e[t]),e[t]=null)})}function ve(e,t=!1){(e.popUp.classList.contains("is-popup-opened")||t)&&(ye(e),le.activePopups.delete(e),le.entityTriggeredPopup===e&&(le.entityTriggeredPopup=null),ge(e.popUp,!1),he(e,!1),e.removeDomTimeout=setTimeout(()=>{me(e,!1),be(e,0),void 0!==le.scrollY&&window.scrollTo(0,le.scrollY)},le.animationDuration),fe(e,!1),(0,s.qo)(!1),e.config.close_action&&(0,i.VR)(e,e.config,"close_action"))}window.__bubbleDialogListenerAdded||(window.addEventListener("dialog-closed",()=>{de.recentlyClosedTimestamp=Date.now()},{capture:!0}),window.addEventListener("iron-overlay-closed",()=>{de.recentlyClosedTimestamp=Date.now()},{capture:!0}),window.__bubbleDialogListenerAdded=!0);const _e=".bubble-backdrop {\n  position: fixed;\n  background-color: var(--bubble-backdrop-background-color, var(--bubble-default-backdrop-background-color));\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 4;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.bubble-backdrop.is-visible {\n  opacity: 1;\n}\n\n.bubble-backdrop.is-hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.bubble-backdrop.has-blur {\n  backdrop-filter: var(--bubble-backdrop-filter, var(--custom-backdrop-filter));\n  -webkit-backdrop-filter: var(--bubble-backdrop-filter, var(--custom-backdrop-filter));\n}\n";var we=n(388),xe=n(772),ke=n(315),Ce=n(748);const $e=new Map,Se=new Map,Ae=/\/\*[\s\S]*?\*\//g,Le=/\s+/g,Ee=/\s*([{};,])\s*/g,Me=/([a-zA-Z0-9_-]+)\s*:\s*;/g,Te=/undefined(?=(?:(?:[^"]*"){2})*[^"]*$)/g,Be=/[^{};]+\s*{\s*}/g,Pe=/,(?=\s*[}\n])/g,Ie=/(@[^{}]*?\{(?:[^{}]*?\{[^{}]*?\})*?[^{}]*?\}|[^{}]*?\{[^{}]*?\})/g,Oe=/,\s*(\/\*.*\*\/)?$/,qe=/^[.:#&\[*]/,je=/^[>+~]/,ze=/^[a-zA-Z][a-zA-Z0-9-_]*$/,De=/::?[a-zA-Z_-][a-zA-Z0-9_-]*/,Ne=/^[()\[\]]+,?$/,Ue=async(e,t=e.card)=>{const n="STYLE"===t.tagName,o=n?null:t,i="pop-up"===e.cardType&&t===e.popUp,r=i&&(e.elements?.popUpContainer||("function"==typeof t.querySelector?t.querySelector(".bubble-pop-up-container"):null))||o,s=i?"visibility":"display",l=e.config.styles;if(void 0===e.cardLoaded&&!n&&(e.lastEvaluatedStyles="",e.initialLoad=!0,!e._moduleChangeListenerAdded)){const t=()=>{e.lastEvaluatedStyles="",e.stylesYAML=null,a.Ki.forEach((t,n)=>{e._processedSchemas?.[n]&&delete e._processedSchemas[n]});const t="pop-up"===e.cardType&&e.popUp?e.popUp:e.card;Ue(e,t)},n=()=>{e.lastEvaluatedStyles="",e._templateResultVersion=(e._templateResultVersion||0)+1,e._bb_cache&&(e._bb_cache.lastStateSignature="");const t="pop-up"===e.cardType&&e.popUp?e.popUp:e.card;Ue(e,t)};window.addEventListener("bubble-card-modules-changed",t),window.addEventListener("bubble-card-module-updated",t),(0,Ce.eX)(n),document.addEventListener("yaml-modules-updated",t),e._moduleChangeListenerAdded=!0,e._moduleChangeHandler=t,e._templateChangeHandler=n}e.initialLoad&&r?.style&&!r.dataset.bubbleStyleHideMode&&("visibility"===s?r.style.visibility="hidden":r.style.display="none",r.dataset.bubbleStyleHideMode=s);const c=function(e,t){if("STYLE"===t.tagName)return t;if(!e.styleElement||e.styleElement.parentElement!==t){const n=document.createElement("style");n.id="bubble-styles",t.appendChild(n),e.styleElement=n}return e.styleElement}(e,t);try{let t={};a.Ki.size>0?a.Ki.forEach((e,n)=>{t[n]=e}):t=await e.stylesYAML||{};let o=[];const i=new Set,s=[],d=new Set;Array.isArray(e.config.modules)?e.config.modules.forEach(e=>{"string"==typeof e&&e.startsWith("!")?d.add(e.substring(1)):"string"==typeof e&&s.push(e)}):e.config.modules&&"string"==typeof e.config.modules&&(e.config.modules.startsWith("!")?d.add(e.config.modules.substring(1)):s.push(e.config.modules)),a.Ki.has("default")&&!d.has("default")&&i.add("default");const u=e=>{if(!e||!e.states||!e.states["sensor.bubble_card_modules"])return;const t=e.states["sensor.bubble_card_modules"].attributes.modules;if(t)for(const e in t)!0===t[e].is_global&&a.Ki.has(e)&&!d.has(e)&&i.add(e)};(()=>{try{a.Ki.forEach((e,t)=>{e&&"object"==typeof e&&!0===e.is_global&&!d.has(t)&&i.add(t)})}catch(e){}})(),Q.isBCTAvailableSync&&(0,Q.isBCTAvailableSync)()||!e._hass||u(e._hass),s.forEach(e=>{a.Ki.has(e)&&!d.has(e)&&i.add(e)}),o=Array.from(i);let p="";o.length>0&&(p=o.map(n=>{try{let o=t[n]??"";if("object"==typeof o&&""===o.code||""===o)return"{}";const i="object"==typeof o&&o.code?o.code:o;return Re(e,i,{type:"module",id:n})}catch(e){return console.error(`Bubble Card - Error processing module "${n}" before evaluation:`,e),"{}"}}).join("\n"));let b="";try{b=Re(e,l,{type:"custom_styles"})}catch(e){console.error("Bubble Card - Error processing custom styles before evaluation:",e)}const h=`${p}\n${b}`.trim();let m=!0;n?h===c.textContent&&(m=!1):h===e.lastEvaluatedStyles?m=!1:e.lastEvaluatedStyles=h,m&&(c.textContent=h),e.initialLoad&&r?.style&&("visibility"===r.dataset.bubbleStyleHideMode?r.style.visibility="":r.style.display="",delete r.dataset.bubbleStyleHideMode,n||(e.initialLoad=!1,e.cardLoaded=!0))}catch(t){console.error("Error applying styles:",t),e.initialLoad&&o?.style&&(o.style.display="")}};function Re(e,t="",n={type:"unknown"}){if(!t)return"";if(e.editor&&e.templateEvaluationBlocked)return"";const o=["innerText","textContent","innerHTML"];["state","name"].forEach(n=>{o.map(e=>`card.querySelector('.bubble-${n}').${e} =`).some(e=>t.includes(e))&&!e.elements[n].templateDetected&&(e.elements[n].templateDetected=!0)});try{let n=$e.get(t);if(!n&&(n=Function("hass","entity","state","icon","subButtonState","subButtonIcon","getWeatherIcon","card","name","checkConditionsMet",`return \`${t}\`;`),$e.set(t,n),$e.size>500)){const e=$e.keys().next().value;$e.delete(e)}const o="pop-up"===e.config.card_type?e.popUp:e.card,i=n.call(e,e._hass,e.config.entity,(0,s.Gu)(e),e.elements.icon,(0,xe.AQ)(e),e.subButtonIcon,we.w1,o,o.name,ke.XH);e._localStyleCache||(e._localStyleCache=new Map);const a=e._localStyleCache.get(t);if(a&&a.raw===i)return a.cleaned;const r=function(e){if(!e||"string"!=typeof e)return"";if(Se.has(e)){const t=Se.get(e);return Se.delete(e),Se.set(e,t),t}let t=e;if(t.includes("/*")&&(t=t.replace(Ae,"")),t.includes("\n")){let e=0;const n=[],o=t.split("\n");for(let t=0;t<o.length;t++){const i=o[t],a=i.trim();if(!a)continue;let r=0,s=0;for(let e=0;e<i.length;e++)"{"===i[e]?r++:"}"===i[e]&&s++;let l=e>0;l||(l=r>0||s>0||a.startsWith("@")||a.startsWith("--")||Oe.test(a)||qe.test(a)||je.test(a)||ze.test(a)||De.test(a)||Ne.test(a)),l&&n.push(i),e+=r-s,e<0&&(e=0)}t=n.join("\n")}t=t.replace(Le," "),t=t.replace(Ee,"$1"),(t.includes(":;")||t.includes(": "))&&(t=t.replace(Me,"")),t.includes("undefined")&&(t=t.replace(Te,"")),t.includes("{")&&(t=t.replace(Be,"")),t.includes(",")&&(t=t.replace(Pe,""));const n=t.match(Ie);if(t=n?n.join("\n"):"",Se.set(e,t),Se.size>300){const e=Se.keys().next().value;Se.delete(e)}return t}(i);return e._localStyleCache.set(t,{raw:i,cleaned:r}),r}catch(t){let o="Unknown source";"module"===n.type&&n.id?o=`Module ('${n.id}')`:"custom_styles"===n.type?o="Card Configuration (styles section)":"unknown"===n.type&&(o="Direct call or unspecified source");const i=e.config?.card_type||"N/A",a=e.config?.entity||"N/A",r=`Bubble Card - Template Error:\n  Card Type: ${i}\n  Entity: ${a}\n  Source: ${o}\n  Error: ${t.message}`;if(e.editor){const o=t.message;e.lastEmittedEditorError=o;const r={cardType:i,entityId:a,sourceType:n.type,moduleId:n.id};requestAnimationFrame(()=>function(e,t){window.dispatchEvent(new CustomEvent("bubble-card-error",{detail:{message:e,context:t}}))}(o,r)),e.templateEvaluationBlocked=!0,e.templateErrorClearTimeout&&clearTimeout(e.templateErrorClearTimeout),e.templateErrorClearTimeout=setTimeout(()=>{e.templateEvaluationBlocked=!1;try{"function"==typeof e.handleCustomStyles&&(e.lastEvaluatedStyles="",e.stylesYAML=null,requestAnimationFrame(()=>e.handleCustomStyles(e,e.card)))}catch(e){}},900)}return console.error(r),""}}let Ve,Fe,He,We,Ye=!1;const Ke=window.matchMedia("(prefers-color-scheme: dark)");function Xe(){We=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color"),document.body.style.setProperty("--bubble-default-backdrop-background-color",(0,r.Bz)(We,.8,.6))}function Je(e){const t=e.config.hide_backdrop??!1;if(Ve)return Ve;const n=(0,s.n)("div","bubble-backdrop-host"),o=n.attachShadow({mode:"open"}),i=(0,s.n)("div","bubble-backdrop backdrop is-hidden");o.appendChild(i);const a=(0,s.n)("style");a.innerHTML=_e,o.appendChild(a);const r=(0,s.n)("style");r.dataset.bubbleTarget="backdrop",o.appendChild(r),t&&(n.style.display="none",n.style.pointerEvents="none"),document.body.appendChild(n);const l=e.config.backdrop_blur??0,c=parseFloat(l)>0;i.classList.toggle("has-blur",c),c?i.style.setProperty("--custom-backdrop-filter",`blur(${l}px)`):i.style.removeProperty("--custom-backdrop-filter");let d=!1;function u(){d||(d=!0,(e=>{try{if("function"==typeof window.requestIdleCallback)return void window.requestIdleCallback(e,{timeout:500})}catch(e){}setTimeout(e,350)})(()=>{d=!1;try{Ue(e,r)}catch(e){}}))}return u(),Ve={hideBackdrop:function(){i.classList.contains("is-hidden")||i.classList.add("is-hidden"),i.classList.remove("is-visible")},showBackdrop:function(){requestAnimationFrame(()=>{i.classList.contains("is-visible")||i.classList.add("is-visible"),i.classList.remove("is-hidden"),t||(n.style.display="",n.style.pointerEvents="")})},backdropElement:i,backdropCustomStyle:r,updateBackdropStyles:u},Ve}function Ge(e){if(!e.elements?.popUpContainer||!e.storedContent)return;const t=e.elements.popUpContainer;t.classList.remove("has-placeholder"),t.querySelector(".bubble-editor-placeholder")?.remove(),t.appendChild(e.storedContent),e.storedContent=null}function Qe(e){if(!e.verticalStack||!e.popUp)return;const{popUp:t,sectionRow:n,sectionRowContainer:o,elements:i,config:a}=e,r=e.editor||e.detectedEditor,l=function(e){if(!e.editor&&!e.detectedEditor)return!1;const t=["hui-card-preview","hui-section-preview","element-preview"];try{let n=e.popUp;for(;n;){if(n.tagName&&t.includes(n.tagName.toLowerCase()))return!0;if(n.classList?.contains("element-preview"))return!0;if(n.parentNode)n=n.parentNode;else{if(!(n.getRootNode()instanceof ShadowRoot))break;n=n.getRootNode().host}}}catch(e){}return!1}(e),c="hui-card"===n?.tagName?.toLowerCase();e.bubbleInstanceId=e.bubbleInstanceId||Math.random().toString(36).slice(2,15),window.bubbleNewlyCreatedInstances=window.bubbleNewlyCreatedInstances||new Set;const d=window.bubbleNewlyCreatedInstances.has(e.bubbleInstanceId)||window.bubbleNewlyCreatedHashes?.has(a.hash)&&l;if(d&&l&&window.bubbleNewlyCreatedInstances.add(e.bubbleInstanceId),r&&c&&o&&"none"===o.style.display&&(o.style.display="",o.style.position=""),r)e.editorAccess||((0,s.qo)(!1),t.classList.remove("is-popup-opened"),t.classList.add("is-popup-closed","editor"),i?.content?.classList.add("popup-content-in-editor-mode"),me(e,!0),e.editorAccess=!0,function(e){const{hideBackdrop:t}=Je(e),n=e.detectedEditor;e.editor||n?(t(),clearTimeout(e.removeDomTimeout),n||function(e){if(e.observer&&(e.observer.disconnect(),e.observer=null),e.sectionRow){const t=new IntersectionObserver(t=>{t.forEach(t=>{const n=e.editor||e.detectedEditor;t.isIntersecting&&!e.verticalStack.contains(e.popUp)&&n&&e.verticalStack.appendChild(e.popUp)})},{rootMargin:"100px",threshold:.01});t.observe(e.sectionRow),e.observer=t}}(e)):e.observer&&(e.observer.disconnect(),e.observer=null)}(e)),window.bubbleDialogListenerAdded||(window.addEventListener("dialog-closed",()=>{setTimeout(()=>{window.bubbleNewlyCreatedInstances?.clear(),window.bubbleNewlyCreatedHashes?.clear(),window.dispatchEvent(new Event("location-changed"))},100)},{capture:!0}),window.bubbleDialogListenerAdded=!0),l||d?Ge(e):function(e){if(!e.elements?.popUpContainer||e.storedContent)return;const t=e.elements.popUpContainer,n=document.createDocumentFragment();[...t.children].filter(e=>"STYLE"!==e.tagName).forEach(e=>n.appendChild(e)),e.storedContent=n,t.appendChild(function(e){const t=(0,s.n)("div","bubble-editor-placeholder"),n=(0,s.n)("ha-icon");n.icon="mdi:information-outline";const o=(0,s.n)("div","bubble-editor-placeholder-info"),i=(0,s.n)("div","bubble-editor-placeholder-hash");i.textContent=e.config.hash||"No hash defined";const a=(0,s.n)("div","bubble-editor-placeholder-hint");return a.textContent="Content hidden in edit mode for performance",o.appendChild(i),o.appendChild(a),t.appendChild(n),t.appendChild(o),t}(e)),t.classList.add("has-placeholder")}(e);else if(e.editorAccess){i?.content?.classList.remove("popup-content-in-editor-mode"),Ge(e),e.observer&&(e.observer.disconnect(),e.observer=null);const n=a.hash?a.hash.startsWith("#")?a.hash:"#"+a.hash:"";n&&location.hash===n?(t.classList.remove("editor","is-popup-closed"),t.classList.add("is-popup-opened"),(0,s.qo)(!0)):(me(e,!1),be(e,0),t.classList.remove("editor")),e.editorAccess=!1}}function Ze(e){const{backdropCustomStyle:t,updateBackdropStyles:n}=Je(e);(0,s.JK)(e,e.popUp),Ue(e,e.popUp),"function"==typeof n?n():requestAnimationFrame(()=>Ue(e,t));const o=e.config.show_header??!0;e.popUp.classList.contains("no-header")===o&&e.popUp.classList.toggle("no-header",!o)}Ke.addEventListener("change",Xe),Xe();var et=n(314);function tt(e){let t=e.config.button_type;return"custom"===t&&(console.error('Buttons "custom" have been removed. Use either "switch", "slider", "state" or  "name"'),t=""),e.config.entity?t||"switch":t||"name"}function nt(e){const t=e.config.entity;return(0,s.md)(e,"sensor",t)&&"%"===(0,s.D$)(e,"unit_of_measurement",t)}var ot=n(459);new WeakMap;var it=n(653);function at(e,t=e.content){const n=tt(e);"button"!==e.cardType&&e.buttonType!==n&&function(e,t=e.container){const n="button",o=tt(e),i="slider"===o,a={};a.slider={icon:!0,button:{tap_action:{action:(0,s.md)(e,"sensor")?"more-info":"toggle"},double_tap_action:{action:"none"},hold_action:{action:"none"}}},a.switch={icon:!0,button:{tap_action:{action:"toggle"},double_tap_action:{action:"none"},hold_action:{action:"more-info"}}},a.state={icon:{tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"more-info"}},button:{tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"more-info"}}},a.name={icon:{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}},button:{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}}};const r=(0,it.N0)(e,{type:n,appendTo:t,styles:".bubble-range-slider {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    cursor: ew-resize;\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2))));\n    overflow: hidden;\n}\n\n.bubble-background {\n    background-color: var(--bubble-button-background-color);\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2))));\n}\n\n.bubble-buttons-container {\n    display: contents;\n}",withSlider:i,holdToSlide:i,readOnlySlider:nt(e),withFeedback:!e.config.tap_to_slide,withSubButtons:!0,iconActions:a[o]?.icon,buttonActions:!e.config.tap_to_slide&&a[o]?.button});r.background.classList.add("bubble-button-background"),r.mainContainer.classList.add("bubble-button-card-container"),r.cardWrapper.classList.add("bubble-button-card"),i&&r.mainContainer.classList.add("bubble-button-slider-container"),t!==e.container?e.buttonType=o:e.cardType=n}(e,t),"name"!==n&&(function(e){const t=(0,s.Gu)(e),n=e.config.card_type;"unavailable"===t?"button"===n?e.card.classList.add("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.add("is-unavailable"):"button"===n?e.card.classList.remove("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.remove("is-unavailable")}(e),function(e){const t=e.config.card_type,n=tt(e),o=(0,s.md)(e,"light"),i=(0,s.$C)(e),a=(0,s.m_)(e),r=(0,we.VA)(e),l="button"===t?e.card.style.getPropertyValue("--bubble-button-background-color"):e.popUp.style.getPropertyValue("--bubble-button-background-color"),c=e.elements.background?.style.opacity;let d="",u="";const p=e.config.use_accent_color;"switch"===n&&i?a?(d="var(--red-color, var(--error-color))",u="1"):r&&o&&!p?(d=(0,s.C$)(e,e.config.entity,!0,null,null),u=".7"):(d="var(--bubble-button-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))",u="1"):(d="rgba(0, 0, 0, 0)",u=".5"),"slider"===n&&(0,ot.VM)(e),l===d&&c===u||function(e,t,n,o){const i=e.elements?.background;if(!i)return;const a="button"===o?e.card:e.popUp;a&&(a.style.setProperty("--bubble-button-background-color",t),i.style.opacity=n)}(e,d,u,t)}(e)),(0,et.wd)(e),(0,et.m9)(e),(0,et.Uk)(e),(0,xe.Kr)(e),"pop-up"!==e.cardType&&function(e){(0,s.JK)(e),Ue(e)}(e)}function rt(e){return e.cardContainer||e.card.parentNode?.host?.parentNode?.parentNode}function st(e){e.cardContainer&&(e.cardContainer.style.position="")}function lt(e,t){return function(e,t){return!(!e||void 0===e.supported_features)&&0!==(e.supported_features&t)}(e.attributes,t)}let ct=!1;function dt(e,t){const n=e.config[`${t}_name`]??"",o=e.config[`${t}_icon`]??"",i=e.config[`${t}_pir_sensor`],a=e.config[`${t}_link`],r=e.config[`${t}_entity`];ct=ct||location.hash===a;const l=(0,s.n)("ha-icon","bubble-icon icon");l.icon=o;const c=(0,s.n)("div","bubble-name name");c.innerText=n;const d=(0,s.n)("div","bubble-background-color background-color"),u=(0,s.n)("div","bubble-background background"),p=(0,s.n)("div",`bubble-button bubble-button-${t} button ${a.substring(1)}`);let b=localStorage.getItem(`bubbleButtonWidth-${a}`);return p.style.width=`${b}px`,p.appendChild(l),p.appendChild(c),p.appendChild(d),p.appendChild(u),p.addEventListener("click",()=>{location.hash!==a&&(ct=!1),ct?ue():pe(a),ct=!ct,(0,s.jp)("light")}),p.icon=l,p.name=c,p.backgroundColor=d,p.background=u,p.pirSensor=i,p.lightEntity=r,p.link=a,p.index=t,p.haRipple=(0,s.n)("ha-ripple"),p.appendChild(p.haRipple),window.addEventListener("location-changed",function(){e.config.highlight_current_view&&(location.pathname===a||location.hash===a?p.classList.add("highlight"):p.classList.remove("highlight"))}),e.elements.buttons.push(p),p}function ut(e,t){return Math.floor((t-e)/6e4)}function pt(e){const t=e.elements.calendarCardContent;if(!t)return;const n=t.scrollTop>0,o=t.scrollHeight>t.clientHeight&&t.scrollTop<t.scrollHeight-t.clientHeight-1;t.classList.toggle("can-scroll-top",n),t.classList.toggle("can-scroll-bottom",o);const i=t.clientHeight<=100?16:32;t.style.setProperty("--bubble-calendar-mask-size",`${i}px`)}function bt(e){const t=(0,s.D$)(e,"supported_features"),n=Number(t);return Number.isFinite(n)?n:0}function ht(e,t){return 0!==(e&t)}function mt(e){const t=e?._hass?.states?.[e?.config?.entity]?.state??"",n=bt(e),o=ht(n,1),i=ht(n,4096),a=ht(n,16384);return"playing"===t?o?{icon:"mdi:pause",service:"media_pause"}:i?{icon:"mdi:stop",service:"media_stop"}:{icon:"mdi:pause",service:"media_play_pause"}:a?{icon:"mdi:play",service:"media_play"}:{icon:"mdi:play",service:"media_play_pause"}}var gt=n(880);const ft=new Set(["off","unavailable","unknown","standby"]);function yt(e){const t=e.elements.buttonsContainer?.classList.contains("bottom-fixed");if(t)return;const n=e.elements.volumeSliderWrapper.classList.contains("is-hidden")?"1":"0";e.elements.mediaInfoContainer.style.opacity=n,e.elements.nameContainer.style.opacity=n,e.elements.subButtonContainer&&(e.elements.subButtonContainer.style.opacity=n),e.elements.playPauseButton.style.opacity=n,e.elements.previousButton.style.opacity=n,e.elements.nextButton.style.opacity=n,e.elements.powerButton.style.opacity=n,e.elements.volumeButton.style.opacity=n,e.elements.iconContainer&&(e.elements.iconContainer.style.opacity=n)}function vt(e){return e._mediaCoverState||(e._mediaCoverState={cachedUrl:"",resolvedUrl:"",iconDisplayedUrl:"",backgroundDisplayedUrl:"",idleTimeout:null,lastState:""}),e._mediaCoverState}function _t(e){const t=vt(e),n=Boolean(e.config.force_icon),o=n?"":(0,we.Qp)(e)||"",i=((0,s.Gu)(e)||"").toLowerCase(),a=n||ft.has(i),r="idle"===i;return t.lastState!==i&&(t.idleTimeout&&(clearTimeout(t.idleTimeout),t.idleTimeout=null),r&&t.cachedUrl&&(t.idleTimeout=setTimeout(()=>{t.cachedUrl="",t.resolvedUrl="",function(e){const t=vt(e);if(t.iconDisplayedUrl){const n=wt(e,"icon");n&&n.currentValue?(e.elements.icon&&(e.elements.icon.style.display=""),e.elements.image&&(e.elements.image.style.display=""),xt(n,"",()=>{t.iconDisplayedUrl="",e.elements.image&&(e.elements.image.style.display="none")})):(t.iconDisplayedUrl="",e.elements.icon&&(e.elements.icon.style.display=""),e.elements.image&&(e.elements.image.style.display="none"))}if(t.backgroundDisplayedUrl){const n=wt(e,"background");n&&n.currentValue?xt(n,"",()=>{t.backgroundDisplayedUrl=""}):t.backgroundDisplayedUrl=""}}(e)},2e3)),t.lastState=i),o&&o!==t.cachedUrl?(t.idleTimeout&&(clearTimeout(t.idleTimeout),t.idleTimeout=null),t.cachedUrl=o):a&&!o&&t.cachedUrl&&(t.idleTimeout&&(clearTimeout(t.idleTimeout),t.idleTimeout=null),t.cachedUrl=""),t.resolvedUrl=!r||o?o||(a?"":t.cachedUrl):t.cachedUrl,t}function wt(e,t){if(e._mediaCoverLayers=e._mediaCoverLayers||{},e._mediaCoverLayers[t])return e._mediaCoverLayers[t];const n="icon"===t?e.elements?.image:e.elements?.background;if(!n)return null;n.style.backgroundImage="",n.classList.add("icon"===t?"bubble-cover-icon-crossfade":"bubble-cover-background-crossfade");const o="icon"===t?"bubble-cover-crossfade-layer bubble-cover-crossfade-layer--icon":"bubble-cover-crossfade-layer bubble-cover-crossfade-layer--background",i=document.createElement("div");i.className=`${o} is-visible`;const a=document.createElement("div");for(a.className=o;n.firstChild;)n.removeChild(n.firstChild);n.append(i,a);const r={container:n,layers:[i,a],visibleIndex:0,currentValue:""};return e._mediaCoverLayers[t]=r,r}function xt(e,t,n){if(!e)return;if(e.currentValue===t)return void(n&&n());const o=0===e.visibleIndex?1:0,i=e.layers[e.visibleIndex],a=e.layers[o],r=()=>{a.classList.add("is-visible"),"function"==typeof requestAnimationFrame?requestAnimationFrame(()=>{setTimeout(()=>{i.classList.remove("is-visible"),e.visibleIndex=o,e.currentValue=t,n&&setTimeout(n,1e3)},50)}):setTimeout(()=>{i.classList.remove("is-visible"),e.visibleIndex=o,e.currentValue=t,n&&setTimeout(n,1e3)},50)};if(t){const o=`url(${t})`;if(a.style.backgroundImage===o)a.classList.remove("is-empty"),r();else{const i=new Image;i.onload=()=>{a.style.backgroundImage=o,a.classList.remove("is-empty"),r()},i.onerror=()=>{a.style.backgroundImage="",a.classList.add("is-empty"),e.currentValue="",n&&n()},i.src=t}}else a.style.backgroundImage="",a.classList.add("is-empty"),r()}var kt=n(345),Ct=n(361),$t=n(752);const St={"pop-up":async function(e){if("pop-up"!==e.cardType){if(e.getRootNode()instanceof ShadowRoot==0)return;if(function(e){try{if(e.cardType="pop-up",e.verticalStack=e.getRootNode(),!e.verticalStack||!e.verticalStack.host)throw new Error("Vertical stack not found, don't panic, it will be added automatically to your pop-up.");if(e.sectionRow=e.verticalStack.host.parentElement,e.sectionRowContainer=e.sectionRow?.parentElement,e.popUp=e.verticalStack.querySelector("#root"),!e.popUp)throw new Error("Vertical stack not found, don't panic, it will be added automatically to your pop-up.");e.popUp.classList.add("bubble-pop-up","pop-up","is-popup-closed"),e.cardTitle=e.verticalStack.querySelector(".card-header"),e.editor||e.config.background_update||e.verticalStack.removeChild(e.popUp),e.elements={},Je(e),e.cardTitle&&(e.cardTitle.style.display="none"),Ye=Ye||(e.config.hide_backdrop??!0),e.popUp.style.setProperty("--custom-height-offset-desktop",e.config.margin_top_desktop??"0px"),e.popUp.style.setProperty("--custom-height-offset-mobile",e.config.margin_top_mobile??"0px"),e.popUp.style.setProperty("--custom-margin",`-${e.config.margin??"7px"}`),e.popUp.style.setProperty("--custom-popup-filter",e.config.backdrop_blur&&"0"!==e.config.backdrop_blur?"none":`blur(${e.config.bg_blur??10}px)`),e.popUp.style.setProperty("--custom-shadow-opacity",(e.config.shadow_opacity??0)/100),e.boundOnUrlChange=function(e){let t=location.hash;return()=>{const n=location.hash,o=n!==t;if(t=n,Array.from(le.activePopups).filter(e=>e.config.hash&&e.config.hash!==n&&e.popUp.classList.contains("is-popup-opened")).forEach(e=>ve(e)),e.config.hash===n){const t=e.popUp.classList.contains("is-popup-opened"),a=Date.now()-de.recentlyClosedTimestamp<de.protectionWindow;if(t&&!o&&!le.entityTriggeredPopup&&!a)return void ue();if(le.entityTriggeredPopup)return;le.hashRecentlyAdded=!0,le.currentHash=n,le.hashChangeProtection=!0,function(e){const t=new Set(le.activePopups);for(const n of t)n!==e&&ve(n,!0)}(e),setTimeout(()=>{le.hashRecentlyAdded=!1,setTimeout(()=>{le.hashChangeProtection=!1},100)},100),requestAnimationFrame(()=>{!function(e){if(e.popUp.classList.contains("is-popup-opened"))return;if(le.activePopups.size>0&&le.entityTriggeredPopup)return;ye(e),le.scrollY=window.scrollY;const{popUp:t}=e;le.activePopups.add(e),requestAnimationFrame(()=>{le.activePopups.has(e)&&(e.verticalStack.contains(t)||me(e,!0),ge(t,!0),function(e){if(e.config.background_update)return void(e.popUp.style.display="");const{sectionRow:t,sectionRowContainer:n,popUp:o}=e;o.style.transform="","hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!1,t.style.display="",n?.classList.contains("card")&&(n.style.display="",n.style.position="absolute"))}(e),he(e,!0),setTimeout(()=>{t.classList.contains("is-popup-opened")&&le.activePopups.has(e)&&((0,s.qo)(!0),fe(e,!0),e.config.auto_close>0&&(e.closeTimeout&&clearTimeout(e.closeTimeout),e.closeTimeout=setTimeout(()=>{!le.activePopups.has(e)||e.config.hash!==location.hash&&e.config.hash?le.activePopups.has(e)&&ve(e):ue()},e.config.auto_close)),e.config.open_action&&(0,i.VR)(e.popUp,e.config,"open_action"))},le.animationDuration))})}(e)})}else requestAnimationFrame(()=>{e.popUp.classList.contains("is-popup-opened")&&e.config.hash&&e.config.hash!==n&&ve(e)})}}(e),window.addEventListener("location-changed",e.boundOnUrlChange),window.addEventListener("popstate",e.boundOnUrlChange),window.popUpError=!1}catch(t){if(console.warn(t),!window.popUpError){window.popUpError=!0;const t=(0,s.n)("div","bubble-error-text"),n=l.qy`
        <ha-alert 
          alert-type="error"
          .title=${"You need to define a unique hash for this pop-up"}
        >
          <p>Once created and saved, this pop-up will be <b>hidden by default</b> and <b>can be opened by targeting its hash</b>. You can trigger it using <a href="https://github.com/Clooos/Bubble-Card#example" target="_blank" rel="noopener noreferrer">any card</a> that supports the <code>navigate</code> <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#tap-double-tap-and-hold-actions" target="_blank" rel="noopener noreferrer">action</a> (check the example), or with the included <a href="https://github.com/Clooos/Bubble-Card#horizontal-buttons-stack" target="_blank" rel="noopener noreferrer">horizontal buttons stack</a> card.</p>
        </ha-alert>
      `;(0,l.XX)(n,t),e.content.appendChild(t)}}}(e),!e.popUp)return;if(function(e){e.elements={closeIcon:(0,s.n)("ha-icon","bubble-close-icon"),closeButton:(0,s.n)("div","bubble-close-button close-pop-up"),buttonContainer:(0,s.n)("div","bubble-button-container"),header:(0,s.n)("div","bubble-header")};const t=(0,s.n)("div","bubble-feedback-container"),n=(0,s.n)("div","bubble-feedback-element feedback-element");t.appendChild(n),e.elements.closeButton.appendChild(t),e.elements.closeIcon.icon="mdi:close",e.elements.closeButton.appendChild(e.elements.closeIcon),e.elements.closeButton.feedback=n;const o=t=>{t&&(t.stopPropagation(),t.preventDefault());const n=()=>{if(location.hash){const e=window.location.href.split("#")[0];history.replaceState(null,"",e),window.dispatchEvent(new Event("location-changed"))}};try{ue(),setTimeout(()=>{location.hash===e.config.hash&&n()},100)}catch(e){n()}(0,s.jp)("selection")};e.elements.closeButton.addEventListener("click",o),e.elements.closeButton.addEventListener("touchend",o),e.elements.closeButton.addEventListener("pointerdown",e=>{e.stopPropagation()}),e.elements.closeButton.haRipple=(0,s.n)("ha-ripple"),e.elements.closeButton.appendChild(e.elements.closeButton.haRipple);const i=e.popUp?.querySelector(".bubble-header-container");i?Object.assign(e.elements,{headerContainer:i,closeIcon:i.querySelector(".bubble-close-icon"),closeButton:i.querySelector(".bubble-close-button"),buttonContainer:i.querySelector(".bubble-button-container"),header:i.querySelector(".bubble-header")}):(e.elements.headerContainer=(0,s.n)("div","bubble-header-container"),e.elements.headerContainer.setAttribute("id","header-container"),e.elements.headerContainer.appendChild(e.elements.header),e.elements.headerContainer.appendChild(e.elements.closeButton),e.elements.header.appendChild(e.elements.buttonContainer)),e.handleTouchStart=e=>{Fe=e.touches[0].clientY},e.handleHeaderTouchMove=t=>{const n=t.touches[0].clientY-Fe;n>0&&(e.popUp.style.transform=`translateY(${n}px)`)},e.handleHeaderTouchEnd=t=>{const n=t.changedTouches[0].clientY-Fe;n>50?(e.popUp.style.transform=`translateY(calc(${n}px + (100% - ${n}px)))`,ue()):e.popUp.style.transform=""}}(e),function(e){try{if(!e.popUp)return;e.elements.style=(0,s.n)("style"),e.elements.style.innerText=".bubble-pop-up-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    margin-top: -50px;\n    max-width: 100%;\n    padding-top: 40px;\n    padding-bottom: 80px;\n    grid-gap: var(--bubble-pop-up-gap, 14px);\n    gap: var(--bubble-pop-up-gap, 14px);\n    column-gap: var(--bubble-pop-up-gap, 14px);\n    --grid-gap: var(--bubble-pop-up-gap, 14px);\n    --vertical-stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    --horizontal-stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    --stack-card-gap: var(--bubble-pop-up-gap, 14px);\n    --row-size: 1;\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\n    scrollbar-width: none; /* for Firefox */\n    overflow: auto; \n    grid-auto-rows: min-content;\n    padding: 18px 18px calc(140px + var(--custom-height-offset-mobile)) 18px;\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\n    touch-action: pan-y;\n}\n\n.bubble-pop-up-container > * {\n    flex-shrink: 0 !important;\n}\n\n.bubble-pop-up.card-content {\n    width: 100% !important;\n    padding: 0 !important;\n}\n\n.bubble-pop-up {\n    transition: transform 0.3s ease;\n    position: fixed;\n    width: 100%;\n    max-width: 100%;\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\n    box-sizing: border-box;\n    margin-left: var(--custom-margin);\n    left: 7px;\n    z-index: 5 !important;\n    bottom: calc(-56px - var(--custom-height-offset-mobile));\n}\n\n.bubble-pop-up-background {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    top: 0;\n    left: 0;\n    position: absolute;\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\n    backdrop-filter: var(--custom-popup-filter);\n    -webkit-backdrop-filter: var(--custom-popup-filter);\n    border: var(--bubble-pop-up-border, var(--bubble-border, none));\n    contain: layout paint;\n    pointer-events: none;\n}\n\n.bubble-pop-up-container::-webkit-scrollbar {\n    display: none; /* for Chrome, Safari, and Opera */\n}\n\n.is-popup-opened {\n    box-shadow: 0px 0px 50px rgba(0, 0, 0, var(--custom-shadow-opacity));\n}\n\n.is-popup-opened .bubble-pop-up-container > * {\n    contain: style;\n}\n\n.is-popup-closed { \n    transform: translateY(100%);\n    box-shadow: none !important;\n    contain: layout paint;\n}\n\n@media only screen and (min-width: 600px) {\n    .bubble-pop-up {\n        margin-left: 0 !important;\n        min-width: var(--desktop-width, 540px);\n        max-width: var(--desktop-width, 540px);\n        left: calc(50% - (var(--desktop-width, 540px) / 2));\n    }\n    .bubble-pop-up-container {\n        padding: 18px 18px calc(140px + var(--custom-height-offset-desktop)) 18px;\n    }\n}\n\n@media only screen and (min-width: 768px) {\n    .bubble-pop-up {\n      bottom: calc(-56px - var(--custom-height-offset-desktop));\n      left: calc(var(--mdc-drawer-width, 0px) / 2 + 50% - (var(--desktop-width, 540px) / 2));\n    }\n}\n\n.bubble-pop-up.editor {\n    transition: none !important;\n    position: relative !important;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    backdrop-filter: none !important;\n    display: flex !important;\n    transform: none !important;\n    height: auto !important;\n    min-width: auto;\n    z-index: 0 !important;\n}\n\n.bubble-pop-up.is-opening,\n.bubble-pop-up.is-closing {\n    will-change: transform;\n}\n\n/* Optimize performance during open/close transitions */\n.bubble-pop-up.is-opening .bubble-pop-up-container,\n.bubble-pop-up.is-closing .bubble-pop-up-container {\n    transform: translateZ(0);\n}\n\n.bubble-pop-up.is-opening .bubble-pop-up-background,\n.bubble-pop-up.is-closing .bubble-pop-up-background {\n    transform: translateZ(0);\n    contain: layout paint;\n}\n\n.bubble-header-container {\n    display: inline-flex;\n    height: 50px;\n    margin: 0;\n    padding: 0;\n    z-index: 3;\n    padding: 18px 18px 22px;\n    position: sticky;\n    top: 0;\n    background: none !important;\n    overflow: visible;\n}\n\n.bubble-header {\n    display: inline-flex;\n    flex-grow: 1;\n    margin-right: 14px;\n    color: var(--primary-text-color);\n}\n\n.bubble-name {\n    font-size: 14px;\n    font-weight: heavy;\n}\n\n.bubble-close-button {\n    display: flex;\n    position: relative;\n    height: 50px;\n    width: 50px;\n    border: var(--bubble-pop-up-close-button-border, var(--bubble-pop-up-border, var(--bubble-border, none)));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px));\n    z-index: 1;\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n    color: var(--primary-text-color);\n    flex-shrink: 0;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: all 0.3s ease;\n    box-sizing: border-box;\n}\n\n.bubble-close-icon {\n    --mdc-icon-size: 24px;\n    color: var(--primary-text-color);\n    line-height: normal;\n}\n\n.bubble-button-card-container {\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n}\n\n/* Container with placeholder - ensure proper sizing */\n.bubble-pop-up-container.has-placeholder {\n    min-height: 80px;\n    padding-top: 18px !important;\n    padding-bottom: 18px !important;\n    height: 72px !important;\n}\n\n/* Editor placeholder styling */\n.bubble-editor-placeholder {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 8px 16px;\n    margin-top: 20px;\n    background: var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)));\n    border-radius: var(--bubble-border-radius, 32px);\n    color: var(--primary-text-color);\n    font-size: 16px;\n    opacity: 0.8;\n    min-height: 56px;\n    box-sizing: border-box;\n    border: 1px dashed var(--divider-color, rgba(127, 127, 127, 0.3));\n    width: 100%;\n}\n\n.bubble-editor-placeholder ha-icon {\n    --mdc-icon-size: 24px;\n    color: var(--primary-text-color);\n    opacity: 0.6;\n    flex-shrink: 0;\n}\n\n.bubble-editor-placeholder-info {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    overflow: hidden;\n}\n\n.bubble-editor-placeholder-hash {\n    font-weight: 500;\n    font-size: 14px;\n    color: var(--primary-text-color);\n}\n\n.bubble-editor-placeholder-hint {\n    font-size: 11px;\n    color: var(--secondary-text-color);\n    opacity: 0.7;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.bubble-pop-up.editor > .bubble-pop-up-container {\n    padding-bottom: 18px !important;\n    mask-image: none;\n    -webkit-mask-image: none;  \n    overflow: hidden;  \n}\n\n.editor .bubble-pop-up-background {\n    width: 100%;\n    height: 100%;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    display: flex;\n    position: absolute;\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) !important;\n    backdrop-filter: none;\n    -webkit-backdrop-filter: none;\n}\n\n.editor * {\n    transition: none !important;\n}\n\n.no-header .bubble-header-container {\n    visibility: hidden !important;\n    height: 0px !important;\n    opacity: 0 !important;\n}\n\n.no-header .bubble-pop-up-container {\n    padding-top: 4px !important;\n}\n\n.no-header .bubble-pop-up-container.is-scrollable {\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\n}\n\n.large .bubble-header-container {\n  height: calc( var(--row-height,56px) * var(--row-size,1) + var(--row-gap,8px) * ( var(--row-size,1) - 1 ));\n}\n\n.large .bubble-close-button {\n    height: var(--row-height,56px);\n    width: var(--row-height,56px);\n    --mdc-icon-size: 28px !important;\n} ";let t,n=e.popUp.querySelector("style");function o(){t=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||getComputedStyle(document.body).getPropertyValue("--card-background-color");const n=e.config.bg_color?e.config.bg_color:t,o=Math.min(1,Math.max(0,(e.config.bg_opacity??88)/100)),i=(0,r.Bz)(n,o,1.02),a=Math.min(1,.65*o),s=(0,r.Bz)(n,a,1.02);e.popUp.style.setProperty("--bubble-pop-up-background-color",i),e.popUp.style.setProperty("--bubble-pop-up-fade-color",s)}e.stylesAdded&&n?e.elements.customStyle=n:(e.elements.customStyle=(0,s.n)("style"),e.popUp.appendChild(e.elements.customStyle),e.popUp.appendChild(e.elements.style),e.stylesAdded=!0),e.updatePopupColorListener=()=>{o()},Ke.addEventListener("change",e.updatePopupColorListener,{passive:!0}),o(),e.popUp.style.setProperty("--desktop-width",e.config.width_desktop??"540px"),e.closeOnEscape=t=>{"Escape"===t.key&&e.config.hash===location.hash&&ue()};let i=e.config.slide_to_close_distance??400;e.handleTouchMove=e=>{e.touches[0].clientY-Fe>i&&e.touches[0].clientY>He&&ue(),He=e.touches[0].clientY};const a=e.popUp.querySelector(".bubble-pop-up-container");if(null===a){e.elements.popUpContainer=(0,s.n)("div"),e.elements.popUpContainer.classList.add("bubble-pop-up-container");let l=e.popUp.firstChild;for(;l;)e.elements.popUpContainer.appendChild(l),l=e.popUp.firstChild}else e.elements.popUpContainer=a;e.elements.popUpContainer,e.popUpBackground=(0,s.n)("div","bubble-pop-up-background"),e.popUp.appendChild(e.popUpBackground),e.popUp.appendChild(e.elements.headerContainer),e.popUp.appendChild(e.elements.popUpContainer),e.config.background_update?e.popUp.style.display="none":e.config.hash!==location.hash&&be(e,0),window.dispatchEvent(new Event("location-changed"))}catch(c){console.error(c)}}(e),e.config.background_update&&!e.headerInitialized){if(e.config.entity||e.config.name||e.config.icon){const t=e.config.sub_button;if(t){const t=(0,m.mg)(e.config);e.config.sub_button={main:t.main||[],bottom:[]}}at(e,e.elements.header),e.config.sub_button=t}Ze(e),e.headerInitialized=!0}}else if(e.popUp&&e.elements){if(e.config.hash===location.hash||e.editor||e.config.background_update&&!e.headerInitialized){if(e.config.entity||e.config.name||e.config.icon){const t=e.config.sub_button;if(t){const t=(0,m.mg)(e.config);e.config.sub_button={main:t.main||[],bottom:[]}}at(e,e.elements.header),e.config.sub_button=t}Ze(e),e.config.background_update&&(e.headerInitialized=!0)}e.editor||function(e){const t=e.config.trigger,n=e.config.trigger_close??!0;if(t){const o=!e.hasPageLoaded;e.hasPageLoaded=!0;const i=(0,ke.eC)(t);if(0===i.length)return void(e.previousTrigger=!1);if((0,ke.db)(i)){const t=(0,ke.XH)(i,e._hass);if(t===e.previousTrigger)return;e.config.hash===location.hash?t||o||!n||ue():t&&pe(e.config.hash),e.previousTrigger=t}}else{let t=e.config.trigger_entity??"";if(""===t)return;let n=e.config.trigger_state??"",o=e.config.trigger_close??!1,i=e._hass.states[t]?.state;if(!t)return;if(!n)return;if(e.oldTriggerEntityState===i)return;const a=!e.hasPageLoaded;e.hasPageLoaded=!0,e.config.hash===location.hash?o&&n!==i&&(a||ue()):i===n&&pe(e.config.hash),e.oldTriggerEntityState=i}}(e),Qe(e)}},button:at,"sub-buttons":function(e,t=e.content){"sub-buttons"!==e.cardType&&function(e,t=e.container){const n="sub-buttons",o=(0,it.N0)(e,{type:n,appendTo:t,styles:".bubble-container.no-background,\n.bubble-container.no-background::after,\n.bubble-container.no-background::before {\n  background-color: transparent !important;\n  border-radius: 0 !important;\n  overflow: visible !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.no-background .bubble-sub-button-container {\n  right: 0;\n}\n\n.bubble-sub-button-container.space-between-justify {\n  justify-content: space-between !important;\n}\n\n.bubble-sub-button-container {\n  height: auto;\n  min-height: auto;\n  max-height: none;\n}\n\nha-card.footer-mode {\n  bottom: var(--bubble-footer-bottom, 16px);\n  height: auto;\n  margin-top: 0;\n  position: fixed;\n  width: calc(100% - var(--mdc-drawer-width, 0px) - 8px);\n  left: calc(var(--mdc-drawer-width, 0px) + 4px);\n  z-index: 5;\n}\n\nha-card.footer-mode:not(.footer-full-width) {\n  width: var(--bubble-footer-width, 500px);\n  left: calc(var(--mdc-drawer-width, 0px) + (100% - var(--mdc-drawer-width, 0px) - var(--bubble-footer-width, 500px)) / 2);\n}\n\n@media only screen and (max-width: 600px) {\n  ha-card.footer-mode {\n    width: calc(100% - 16px);\n    left: 8px;\n  }\n  \n  ha-card.footer-mode:not(.footer-full-width) {\n    width: calc(100% - 16px);\n    left: 8px;\n  }\n}\n\nha-card.footer-mode .bubble-container {\n  margin: 0;\n  box-shadow: var(--bubble-footer-box-shadow, 2px 2px 40px rgba(0, 0, 0, 0.4));\n}\n\nha-card.footer-mode .bubble-container::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.2;\n  background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n}\n\nha-card.footer-mode.editor {\n  position: relative;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n}\n\n.editor {\n  transition: none !important;\n}",withBaseElements:!1,withBackground:!0,withFeedback:!1,withSubButtons:!0});if(e.config.hide_main_background&&o.mainContainer.classList.add("no-background"),e.config.menu_style&&o.subButtonContainer.classList.add("menu-style"),e.config.menu_style&&e.config.labels_below&&o.subButtonContainer.classList.add("labels-below"),e.config.space_between_buttons&&o.subButtonContainer.classList.add("space-between-buttons"),e.config.hide_button_labels&&o.subButtonContainer.classList.add("hide-labels"),e.config.compact_mode&&o.subButtonContainer.classList.add("compact-mode"),e.config.footer_mode){e.card.classList.add("footer-mode"),e.config.footer_full_width?e.card.classList.add("footer-full-width"):e.config.footer_width&&e.card.style.setProperty("--bubble-footer-width",`${e.config.footer_width}px`);const t=e.config.footer_bottom_offset||16;e.card.style.setProperty("--bubble-footer-bottom",`${t}px`)}e.config.footer_mode&&!e.editor&&(e.cardContainer=e.card.parentNode.host?.parentNode?.parentNode,e.cardContainer,e.cardContainer.classList.contains("card")&&(e.cardContainer.style.position="absolute")),e.cardType=n}(e,t);const n=e.config.sub_button;if(n){const t=(0,m.mg)(e.config);e.config.sub_button={main:[],bottom:t.bottom||[]}}(0,xe.Kr)(e),e.config.sub_button=n,function(e){(0,s.JK)(e),Ue(e),e.config.footer_mode&&(function(e){const t=e.config.footer_bottom_offset||16;e.card.style.setProperty("--bubble-footer-bottom",`${t}px`)}(e),e.editor||function(e){const t=function(e){const t=document.querySelector("body > home-assistant");if(!t?.shadowRoot)return e?.parentNode;const n=t.shadowRoot.querySelector("home-assistant-main");if(!n?.shadowRoot)return e?.parentNode;const o=n.shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace");if(!o?.shadowRoot)return e?.parentNode;const i=o.shadowRoot.querySelector("hui-root");return i?.shadowRoot&&i.shadowRoot.querySelector("#view > hui-view > hui-sections-view")||e?.parentNode}(rt(e));t&&function(e,t,n){const o=()=>{const o=(Number(e.offsetHeight||e.getBoundingClientRect().height)||0)+(Number(n?.config?.footer_bottom_offset)||16)+16;t.style.paddingBottom=`${o}px`};requestAnimationFrame(()=>{requestAnimationFrame(o)})}(e.card,t,e)}(e))}(e),function(e){const t=e.editor||e.detectedEditor,n=e.card.classList.contains("editor");t?n||(st(e),e.card.classList.add("editor")):n&&(e.card.classList.remove("editor"),e.config.footer_mode?function(e){const t=rt(e);t&&""!==t.style.position||function(e){const t=rt(e);t?.classList.contains("card")&&(t.style.position="absolute",e.cardContainer=t)}(e)}(e):st(e))}(e)},separator:function(e){"separator"!==e.cardType&&function(e){const t="separator";e.elements={},e.elements.mainContainer=(0,s.n)("div","bubble-container bubble-separator separator-container"),e.elements.icon=(0,s.n)("ha-icon","bubble-icon"),e.elements.name=(0,s.n)("h4","bubble-name"),e.elements.line=(0,s.n)("div","bubble-line"),e.elements.mainContainer.appendChild(e.elements.icon),e.elements.mainContainer.appendChild(e.elements.name),e.elements.mainContainer.appendChild(e.elements.line),(0,it.N0)(e,{type:t,styles:".bubble-container {\n    display: flex;\n    background: none;\n    align-items: center;\n    height: 40px;\n    overflow: visible;\n    --bubble-separator-border: none;\n}\n.bubble-icon {\n    display: inline-flex;\n    height: auto;\n    width: auto;\n    margin: 0 22px 0 8px;\n}\n.bubble-name {\n    margin: 0 30px 0 0;\n    font-size: 16px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.bubble-name:empty {\n    display: none;\n}\n\n.bubble-line {\n    border-radius: 6px;\n    margin-right: 14px;\n    opacity: 0.6;\n    flex-grow: 1;\n    height: 6px;\n    background-color: var(--bubble-line-background-color, var(--ha-card-background-color, var(--secondary-background-color)));\n}\n\n.bubble-sub-button-container {\n    margin-left: 8px;\n}\n\n.rows-2 .bubble-sub-button-container {\n    margin-left: 14px;\n}\n\n.large .bubble-container {\n    height: calc( var(--row-height,44px) * var(--row-size,0.8) + var(--row-gap,8px) * ( var(--row-size,0.8) - 1 ))\n}\n\n.bubble-container.with-bottom-buttons {\n    align-items: flex-start;\n}\n\n.with-bottom-buttons .bubble-line {\n    margin-top: 15px;\n}\n\n.with-bottom-buttons .bubble-icon,\n.with-bottom-buttons .bubble-name,\n.with-bottom-buttons .bubble-line {\n    display: initial;\n    line-height: 36px;\n}",withMainContainer:!1,withBaseElements:!1,withSubButtons:!0,iconActions:!1,buttonActions:!1}),e.cardType=t}(e),function(e){e.elements.icon.icon=(0,we.sW)(e),""===e.elements.icon.icon&&""===e.elements.icon.style.margin?(e.elements.icon.style.margin="0px 8px",e.elements.icon.style.width="0px"):""!==e.elements.icon.icon&&"0px 8px"===e.elements.icon.style.margin&&(e.elements.icon.style.margin="",e.elements.icon.style.width="")}(e),(0,et.m9)(e,!1),(0,xe.Kr)(e),function(e){(0,s.JK)(e),Ue(e)}(e)},cover:function(e){"cover"!==e.cardType&&function(e){const t="cover",n=(0,it.N0)(e,{type:t,styles:".bubble-cover-button {\n  display: flex;\n  position: relative;\n  height: 36px;\n  width: 36px;\n  border-radius: var(--bubble-cover-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n  background-color: var(--bubble-cover-button-background-color);\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n\n.bubble-cover-button-icon {\n  --mdc-icon-size: 20px;\n  color: var(--primary-text-color);\n  line-height: normal;\n}\n\n.bubble-buttons-container {\n  align-items: center;\n  gap: 8px;\n}\n\n.bubble-button.disabled {\n  opacity: 0.3 !important;\n  pointer-events: none !important;\n  cursor: none !important;\n}\n\n.large .bubble-cover-button-icon {\n  --mdc-icon-size: 24px;\n}",withSubButtons:!0,iconActions:!0,buttonActions:!0});function o(e,t,n){const o=(0,s.n)("div",`bubble-cover-button ${t}`),i=(0,s.n)("ha-icon",`bubble-cover-button-icon ${n}`);i.setAttribute("icon",e);const a=(0,s.n)("div","bubble-feedback-container"),r=(0,s.n)("div","bubble-feedback-element feedback-element");return a.appendChild(r),o.appendChild(a),o.appendChild(i),o.icon=i,o.feedback=r,o.haRipple=(0,s.n)("ha-ripple"),o.appendChild(o.haRipple),o}n.buttonsContainer.classList.add("bubble-buttons","buttons-container"),n.buttonOpen=o("mdi:arrow-up","bubble-button bubble-open button open","bubble-icon-open"),n.buttonStop=o("mdi:stop","bubble-button bubble-stop button stop","bubble-icon-stop"),n.buttonClose=o("mdi:arrow-down","bubble-button bubble-close button close","bubble-icon-close"),n.buttonsContainer.append(n.buttonOpen,n.buttonStop,n.buttonClose),n.buttonOpen.addEventListener("click",()=>{(0,s.jp)("selection");const t=e.config.open_service??"cover.open_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})}),n.buttonStop.addEventListener("click",()=>{(0,s.jp)("selection");const t=e.config.stop_service??"cover.stop_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})}),n.buttonClose.addEventListener("click",()=>{(0,s.jp)("selection");const t=e.config.close_service??"cover.close_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})}),e.cardType=t}(e),(0,et.zQ)(e),(0,et.wd)(e),(0,et.m9)(e),(0,et.Uk)(e),function(e){const t=e._hass.states[e.config.entity],{current_position:n,assumed_state:o}=t.attributes,i=lt(t,1),a=lt(t,2),r=lt(t,8),l=function(e){return void 0!==e.attributes.current_position?100===e.attributes.current_position:"open"===e.state}(t),c=function(e){return void 0!==e.attributes.current_position?0===e.attributes.current_position:"closed"===e.state}(t),d="curtain"===(0,s.D$)(e,"device_class");e.elements.icon.icon=l?(0,we.sW)(e,e.config.entity,e.config.icon_open):(0,we.sW)(e,e.config.entity,e.config.icon_close);const u=e.config.icon_up||(d?"mdi:arrow-expand-horizontal":"mdi:arrow-up"),p=e.config.icon_down||(d?"mdi:arrow-collapse-horizontal":"mdi:arrow-down");e.elements.buttonOpen.icon.setAttribute("icon",u),e.elements.buttonClose.icon.setAttribute("icon",p),void 0!==n?(l?e.elements.buttonOpen.classList.add("disabled"):i&&e.elements.buttonOpen.classList.remove("disabled"),c?e.elements.buttonClose.classList.add("disabled"):a&&e.elements.buttonClose.classList.remove("disabled")):(e.elements.buttonOpen.classList.remove("disabled"),e.elements.buttonClose.classList.remove("disabled")),e.elements.buttonStop.style.display=r?"":"none"}(e),(0,xe.Kr)(e),function(e){(0,s.JK)(e),Ue(e)}(e)},"empty-column":function(e){"empty-column"!==e.cardType&&function(e){e.elements={},e.elements.emptyColumnCard=(0,s.n)("div","bubble-empty-column empty-column"),e.elements.style=(0,s.n)("style"),e.elements.style.innerText=".empty-column {\n    display: flex;\n    width: 100%;\n}\n",e.elements.customStyle=(0,s.n)("style"),e.content.innerHTML="",e.content.appendChild(e.elements.emptyColumnCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="empty-column"}(e)},"horizontal-buttons-stack":function(e){"horizontal-buttons-stack"!==e.cardType&&function(e){e.elements={},e.elements.buttons=[],e.elements.cardContainer=(0,s.n)("div","bubble-horizontal-buttons-stack-card-container horizontal-buttons-stack-container");let t=1;for(;e.config[t+"_link"];)e.elements.cardContainer.appendChild(dt(e,t)),t++;e.elements.style=(0,s.n)("style"),e.elements.style.innerText="@keyframes from-bottom {\n    0% { transform: translate(-50%, 100px); }\n    26% { transform: translate(-50%, -8px); }\n    46% { transform: translate(-50%, 1px); }\n    62% { transform: translate(-50%, -2px); }\n    70% { transform: translate(-50%, 0); }\n    100% { transform: translate(-50%, 0); }\n}\n@keyframes pulse {\n    0% { filter: brightness(0.7); }\n    100% { filter: brightness(1.3); }\n}\nha-card {\n    border-radius: 0;\n}\n.horizontal-buttons-stack-card {\n    bottom: 16px;\n    height: 51px;\n    margin-top: 0;\n    position: fixed;\n    width: calc(100% - var(--mdc-drawer-width, 0px) - 8px);\n    left: calc(var(--mdc-drawer-width, 0px) + 4px);\n    z-index: 6; /* Higher value hide the more-info panel */\n}\n@media only screen and (max-width: 870px) {\n    .horizontal-buttons-stack-card {\n        width: calc(100% - 16px);\n        left: 8px;\n    }\n\n    .horizontal-buttons-stack-card::before {\n        left: -10px;\n    }\n}\n.horizontal-buttons-stack-card::before {\n    content: '';\n    position: absolute;\n    top: -32px;\n    display: none;\n    background: linear-gradient(0deg, var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--primary-background-color)))) 50%, transparent);\n    width: 200%;\n    height: 100px;\n    pointer-events: none;\n}\n.has-gradient.horizontal-buttons-stack-card::before {\n    display: block;\n}\n\n.card-content {\n    width: calc(100% + 36px);\n    padding: 0 !important;\n    max-width: calc(var(--desktop-width) - 8px);\n    box-sizing: border-box;\n    overflow: scroll;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    mask-image: linear-gradient(\n        90deg,\n        #000000 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        transparent 100%\n    );\n}\n.is-scrollable.card-content {\n    padding: 0 !important;\n    width: 100%;\n}\n.is-scrolled.card-content {\n    padding: 0 !important;\n    width: 100%;\n    mask-image: linear-gradient(\n        90deg,\n        transparent 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        transparent 100%\n    );\n}\n.is-maxed-scroll.card-content {\n    mask-image: linear-gradient(\n        90deg,\n        transparent 0%,\n        #000000 calc(0% + 28px),\n        #000000 calc(100% - 28px),\n        #000000 100%\n    );\n}\n.card-content::-webkit-scrollbar {\n    display: none;\n}\n\n.bubble-horizontal-buttons-stack-card-container {\n    height: 51px;\n    position: relative;\n    margin: auto;\n}\n\n.bubble-button {\n    align-items: center;\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    color: var(--primary-text-color);\n    cursor: pointer;\n    display: inline-flex;\n    height: 50px;\n    left: 0;\n    padding: 0 16px;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 1;\n    transition: transform 1s;\n    box-sizing: border-box;\n}\n.bubble-button.highlight {\n    animation: pulse 1.4s infinite alternate;\n}\n.bubble-background-color {\n    border: 1px solid var(--primary-text-color);\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    box-sizing: border-box;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    transition: background-color 1s;\n    width: 100%;\n    z-index: 1;\n}\n.bubble-background {\n    opacity: 0.8;\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box !important;\n    position: absolute;\n    left: 0;\n    z-index: 0;\n    background-color: var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\n}\n.bubble-icon {\n    height: 24px;\n    width: 24px;\n    z-index: 2;\n}\n.bubble-icon + .bubble-name {\n    margin-left: 8px;\n    z-index: 2;\n}\n\n.horizontal-buttons-stack-card.editor {\n    position: relative;\n    width: 100%;\n    left: 0;\n    bottom: 0;\n}\n.horizontal-buttons-stack-card.editor::before {\n    background: none;\n}",e.elements.customStyle=(0,s.n)("style"),e.card.classList.add("horizontal-buttons-stack-card"),e.card.style.marginLeft=e.config.margin??"",e.config.hide_gradient||e.card.classList.add("has-gradient"),e.card.style.setProperty("--desktop-width",e.config.width_desktop??"500px"),e.elements.cardContainer.appendChild(e.elements.style),e.elements.cardContainer.appendChild(e.elements.customStyle),e.content.appendChild(e.elements.cardContainer),e.content.addEventListener("scroll",()=>{e.content.scrollLeft>0?e.content.classList.add("is-scrolled"):e.content.classList.remove("is-scrolled"),e.content.scrollWidth-12<e.content.offsetWidth+e.content.scrollLeft?e.content.classList.add("is-maxed-scroll"):e.content.classList.remove("is-maxed-scroll")}),(e.config.rise_animation??1)&&(e.content.style.animation="from-bottom .6s forwards",setTimeout(()=>{e.content.style.animation="none"},1500));let n=e.card.parentNode.host;n?.parentElement&&!e.editor&&"hui-card"===n?.parentElement?.tagName.toLowerCase()&&(n.parentElement.style.padding="0 0 80px"),e.cardType="horizontal-buttons-stack"}(e),function(e){Ue(e)}(e),function(e){if(!e.config.auto_order)return;const t=e._hass.states;e.elements.buttons.sort((e,n)=>{if(!t[e.pirSensor])return 1;if(!t[n.pirSensor])return-1;const o=t[e.pirSensor]?.last_updated,i=t[n.pirSensor]?.last_updated;return"on"===t[e.pirSensor]?.state&&"on"===t[n.pirSensor]?.state?o>i?-1:o===i?0:1:"on"===t[e.pirSensor]?.state?-1:"on"===t[n.pirSensor]?.state?1:o>i?-1:o===i?0:1})}(e),function(e){e.elements.buttons.forEach(t=>{const n=t.index,o=e.config[`${n}_name`]??"",i=e.config[`${n}_icon`]??"",a=e.config[`${n}_pir_sensor`],r=e.config[`${n}_link`],s=e.config[`${n}_entity`];t.pirSensor=a,t.lightEntity=s,t.link=r,o?(t.name.innerText=o,t.name.style.display=""):t.name.style.display="none",i?(t.icon.icon=i,t.icon.style.display=""):t.icon.style.display="none",void 0===r&&(t.remove(),e.elements.buttons=e.elements.buttons.filter(e=>e!==t),e.elements.buttons.forEach((e,t)=>{e.index=t+1}))});let t=e.elements.buttons.length+1;for(;void 0!==e.config[`${t}_link`];){if(!e.elements.buttons.find(e=>e.index===t)){const n=dt(e,t);e.elements.buttons.push(n)}t++}}(e),function(e){e.editor||e.detectedEditor?(e.elements.cardContainer.classList.add("editor"),e.card.classList.add("editor")):(e.elements.cardContainer.classList.remove("editor"),e.card.classList.remove("editor"))}(e),function(e){let t=0;for(let n=0;n<e.elements.buttons.length;++n){let o=localStorage.getItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`);e.elements.buttons[n].style.width="";const i=e.elements.buttons[n].offsetWidth;e.elements.buttons[n].style.width=`${i}px`,i>0&&(o=i,localStorage.setItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`,`${i}`)),null!==o&&(e.elements.buttons[n].style.transform=`translateX(${t}px)`,e.elements.buttons[n].style.width="",t+=+o+12)}e.elements.cardContainer.style.width=`${t}px`}(e),function(e){e.elements.buttons.forEach(t=>{const n=e._hass.states[t.lightEntity],o=n?.attributes.rgb_color,i=n?.state;if(o){const e=(0,r.qd)(o)?"rgba(255, 220, 200, 0.5)":`rgba(${o}, 0.5)`;t.backgroundColor.style.backgroundColor=e,t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"}else"on"==i?(t.backgroundColor.style.backgroundColor="rgba(255, 255, 255, 0.5)",t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"):(t.backgroundColor.style.backgroundColor="rgba(0, 0, 0, 0)",t.backgroundColor.style.borderColor="var(--primary-text-color)")})}(e),function(e){e.content.scrollWidth>=e.content.offsetWidth?e.content.classList.add("is-scrollable"):e.content.classList.remove("is-scrollable")}(e)},calendar:function(e){"calendar"!==e.cardType&&function(e){const t="calendar",n=(0,it.N0)(e,{type:t,styles:'.bubble-container {\n  height: var(--bubble-calendar-height, 56px);\n  display: flex;\n  gap: 8px;\n}\n.bubble-calendar-content {\n  flex-grow: 1;\n  min-width: 0;\n  height: 100%;\n  overflow: scroll;\n}\n.bubble-calendar-content.can-scroll-top {\n  mask-image: linear-gradient(to bottom, transparent 0%, black var(--bubble-calendar-mask-size, 16px), black 100%);\n  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black var(--bubble-calendar-mask-size, 16px), black 100%);\n}\n.bubble-calendar-content.can-scroll-bottom {\n  mask-image: linear-gradient(to bottom, black 0%, black calc(100% - var(--bubble-calendar-mask-size, 16px)), transparent 100%);\n  -webkit-mask-image: linear-gradient(to bottom, black 0%, black calc(100% - var(--bubble-calendar-mask-size, 16px)), transparent 100%);\n}\n.bubble-calendar-content.can-scroll-top.can-scroll-bottom {\n  mask-image: linear-gradient(to bottom, transparent 0%, black var(--bubble-calendar-mask-size, 16px), black calc(100% - var(--bubble-calendar-mask-size, 16px)), transparent 100%);\n  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black var(--bubble-calendar-mask-size, 16px), black calc(100% - var(--bubble-calendar-mask-size, 16px)), transparent 100%);\n}\n.card-content::after {\n  border-radius: 0 0 var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px)) var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\n  content: "";\n  display: flex;\n  height: 32px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  pointer-events: none;\n  transition: opacity .2s, transform .2s;\n  z-index: 1;\n}\n.bubble-sub-button-container {\n  flex-shrink: 0;\n  position: sticky !important;\n  top: 0;\n}\n.bubble-day-wrapper {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  gap: 8px;\n  padding: 7px 16px 7px 8px;\n  position: relative;\n  box-sizing: border-box;\n}\n.bubble-day-wrapper + .bubble-day-wrapper::before {\n  content: "";\n  position: absolute;\n  top: -1px;\n  left: 62px;\n  right: 16px;\n  height: 2px;\n  background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n}\n.bubble-day-chip {\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  border-radius: var(--bubble-button-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\n  background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n  position: relative;\n}\n.bubble-day-number {\n  font-size: 24px;\n  line-height: 20px;\n  font-weight: 600;\n  opacity: 0.6;\n}\n.is-active .bubble-day-number {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n.bubble-day-month {\n  font-size: 12px;\n  line-height: 12px;\n  font-weight: 400;\n  opacity: 0.6;\n}\n.is-active .bubble-day-month {\n  filter: brightness(1.1);\n  opacity: 1;\n}\n.bubble-day-events {\n  width: 100%;\n  border-radius: var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\n  min-width: 0;\n}\n.bubble-event {\n  background-color: var(--bubble-event-background-color);\n  background-image: var(--bubble-event-background-image);\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 4px 6px;\n  border-radius: var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\n  margin-left: -6px;\n  position: relative;\n  line-height: 1em;\n}\n.bubble-event-time {\n  font-size: 12px;\n  font-weight: 400;\n  white-space: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  opacity: 0.7;\n}\n.bubble-event-color {\n  height: 12px;\n  width: 12px;\n  border-radius: var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.bubble-event-name-wrapper {\n  width: 10px;\n  flex: 1;\n}\n.bubble-event-name {\n  font-size: 13px;\n  font-weight: 600;\n  max-width: 100%;\n  min-width: 0;\n  flex-shrink: 1;\n  flex-grow: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.bubble-event-place {\n  opacity: 0.6;\n  display: flex;\n  align-items: center;\n  margin-top: 2px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  min-width: 0;\n  flex-shrink: 1;\n  flex-grow: 1;\n}\n.bubble-event-place-icon {\n  display: inline-flex;\n  --mdc-icon-size: 12px;\n  margin-right: 4px;\n}\n\n.bubble-sub-button-container.fixed-top  {\n  margin-top: 10px;\n}\n\n.with-bottom-buttons .bubble-calendar-content {\n  height: 52px;\n}',withBaseElements:!1,withSubButtons:!0,iconActions:!1,buttonActions:!1});n.calendarCardContent=(0,s.n)("div","bubble-calendar-content"),n.mainContainer.style.setProperty("--bubble-calendar-height",56*(e.config.rows??1)+"px"),n.mainContainer.prepend(n.calendarCardContent),e.cardType=t}(e);const t=JSON.stringify(e.config.entities.map(t=>e._hass.states[t.entity]));e.cacheKey!==t&&(e.cacheKey=t,setTimeout(()=>{e.cacheKey=""},9e5),async function(e){const t=Math.max(1,e.config.days??7),n=new Date,o=n.toISOString(),i=new Date(n);i.setDate(i.getDate()+(t-1)),i.setHours(23,59,59,999);const a=`start=${o}&end=${i.toISOString()}`,r=e.config.entities.map(async t=>{const n=`calendars/${t.entity}?${a}`;return(await e._hass.callApi("get",n)).map(e=>({...e,entity:t}))}),s=await Promise.all(r);e.events=s.flat().sort(k).slice(0,e.config.limit??void 0)}(e).then(()=>{!async function(e){const t=v(e._hass),n=e.events.reduce((e,t)=>{const n=(e=>{const t=x(e);return`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}`})(t.start);return e[n]||(e[n]=[]),e[n].push(t),e},{});if(0===Object.keys(n).length){const e=(new Date).toISOString().split("T")[0];n[e]=[{start:{date:e},end:{date:e},summary:"No events",entity:{color:"transparent"}}]}const o=new DocumentFragment;Object.keys(n).sort().forEach(a=>{const r=x({date:a}),l=new Date,c=(0,s.n)("div","bubble-day-number"),d=e._hass.locale.language,u=e._hass.locale.time_format;c.innerHTML=`${r.getDate()}`;const p=(0,s.n)("div","bubble-day-month");p.innerHTML=r.toLocaleString(d,{month:"short"});const b=(0,s.n)("div","bubble-day-chip");b.appendChild(c),b.appendChild(p),r.getDate()===l.getDate()&&r.getMonth()===l.getMonth()&&b.classList.add("is-active"),(0,i.dN)(b,{...e.config},null);const h=(0,s.n)("div","bubble-day-events");n[a].forEach(n=>{const o=void 0!==n.start.date,a=new Date,r=x(n.start),l=x(n.end),c=(0,s.n)("div","bubble-event-time");c.innerHTML=o?t("cards.calendar.all_day"):r.toLocaleTimeString(d,{hour:"numeric",minute:"numeric",hour12:"12"===u}),o||!0!==e.config.show_end||(c.innerHTML+=` – ${l.toLocaleTimeString(d,{hour:"numeric",minute:"numeric",hour12:"12"===u})}`);const p=(0,s.n)("div","bubble-event-name-wrapper"),b=(0,s.n)("div","bubble-event-name"),m=n.summary||t("cards.calendar.busy");(0,s.Nl)(e,b,m),p.appendChild(b);const g=(0,s.n)("div","bubble-event-color");if(g.style.backgroundColor=n.entity.color?n.entity.color.startsWith("#")?n.entity.color:`var(--${n.entity.color}-color)`:w(_(n.entity.entity)),"transparent"===n.entity.color&&(g.style.display="none"),!0===e.config.show_place&&null!==n.location){const t=(0,s.n)("div","bubble-event-place");(0,s.Nl)(e,t,n.location),p.appendChild(t)}const f=(0,s.n)("div","bubble-event");f.appendChild(g),f.appendChild(c),f.appendChild(p),(0,i.dN)(f,e.config.event_action,n.entity.entity,{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}});const y="var(--bubble-event-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))";if(!0===e.config.show_progress&&o&&r<a)f.style.setProperty("--bubble-event-background-color",y);else if(!0===e.config.show_progress&&!o&&r<a){const e=ut(r,l),t=100*ut(r,a)/e;f.style.setProperty("--bubble-event-background-image",`linear-gradient(to right, ${y} ${t}%, transparent ${t}%)`)}h.appendChild(f)});const m=(0,s.n)("div","bubble-day-wrapper");m.appendChild(b),m.appendChild(h),o.appendChild(m),e.elements.mainContainer.scrollHeight>e.elements.mainContainer.offsetHeight&&e.content.classList.add("is-overflowing")}),e.elements.calendarCardContent.innerHTML="",e.elements.calendarCardContent.appendChild(o),setTimeout(()=>pt(e),0)}(e)})),function(e){if((0,s.JK)(e),Ue(e),e.elements?.calendarCardContent){pt(e);const t=e.elements.calendarCardContent;t&&!t._scrollListener&&(t._scrollListener=()=>pt(e),t.addEventListener("scroll",t._scrollListener))}}(e),(0,xe.Kr)(e)},"media-player":function(e){"media-player"!==e.cardType&&function(e){const t="media-player",n=(0,it.N0)(e,{type:t,styles:".bubble-media-button {\n    display: flex;\n    position: relative;\n    height: 36px;\n    width: 36px;\n    border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    background-color: var(--bubble-media-player-button-background-color);\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: all 0.3s ease;\n    box-sizing: border-box;\n}\n\n.bubble-media-player .bubble-entity-picture {\n    inset: 0;\n    pointer-events: none;\n}\n\n.bubble-cover-icon-crossfade,\n.bubble-cover-background-crossfade {\n    position: absolute;\n    inset: 0;\n    overflow: hidden;\n}\n\n.bubble-cover-crossfade-layer {\n    position: absolute;\n    inset: 0;\n    background-size: cover;\n    background-position: center;\n    opacity: 0;\n    transition: opacity 2s ease;\n    pointer-events: none;\n}\n\n.bubble-cover-crossfade-layer.is-visible {\n    opacity: 1;\n}\n\n.bubble-cover-crossfade-layer.is-empty {\n    opacity: 0;\n}\n\n.bubble-cover-crossfade-layer--icon {\n    z-index: 0;\n}\n\n.bubble-media-player .bubble-cover-background {\n    overflow: hidden;\n}\n\n.bubble-button-container {\n    align-items: center;\n    gap: 8px;\n  }\n\n.bubble-media-button-icon {\n    --mdc-icon-size: 20px;\n    color: var(--primary-text-color);\n    line-height: normal;\n}\n\n.bubble-play-pause-button,\n.full-width > .bubble-play-pause-button {\n    background-color: var(--bubble-accent-color, var(--bubble-default-color));\n}\n\n.bubble-play-pause-button .bubble-media-button-icon {\n    color: var(--bubble-media-player-play-pause-icon-color, var(--bubble-button-active-icon-color, var(--primary-background-color, white)));\n}\n\n.bubble-play-pause-button:not(.large) {\n    height: 36px;\n    width: 36px;\n}\n\n/* Volume slider wrapper (similar to sub-button slider) */\n.bubble-volume-slider-wrapper {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    height: 38px;\n    width: calc(100% - 16px);\n    left: 8px;\n    right: 8px;\n    z-index: 1;\n    opacity: 1;\n    transition: opacity .2s, transform .2s;\n    transform: translateX(0);\n    touch-action: none;\n}\n\n.bubble-volume-slider {\n    position: relative;\n    flex: 1 1 auto;\n    height: 100%;\n    overflow: hidden;\n    border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    background-color: var(--bubble-media-player-slider-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\n}\n\n.bubble-range-value {\n    display: flex;\n    justify-content: flex-end;\n    height: 38px;\n    align-items: center;\n    font-size: 12px;\n    opacity: 0.8;\n    z-index: 1;\n}\n\n.bubble-mute-button {\n    opacity: 1;\n    transition: opacity .2s, transform .2s;\n    transform: translateX(0);\n}\n\n.is-hidden {\n    opacity: 0 !important;\n    pointer-events: none;\n    transform: translateX(14px);\n}\n\n/* Keep hidden volume slider overlays inside card width */\n.bubble-volume-slider-wrapper.is-hidden {\n    right: calc(8px + 14px);\n}\n\n/* Position volume slider at bottom when buttons are in bottom-fixed mode */\n.bubble-wrapper.has-bottom-buttons .bubble-volume-slider-wrapper {\n    bottom: 8px;\n    top: auto;\n    width: 100%;\n    left: 0;\n    right: auto;\n    padding: 0px 8px;\n    box-sizing: border-box;\n}\n\n/* Bottom-fixed layout uses explicit width reduction to absorb the translateX */\n.bubble-wrapper.has-bottom-buttons .bubble-volume-slider-wrapper.is-hidden {\n    width: calc(100% - 14px);\n}\n\n.bubble-range-fill {\n    background-color: var(--bubble-accent-color, var(--bubble-default-color));\n    height: 101%; /* Ensure the fill covers the entire slider */\n}\n\n/* Original mute button (in icon container, normal mode) */\n.bubble-mute-button {\n    display: flex;\n    position: absolute;\n    height: 38px;\n    width: 38px;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Mute button in volume slider wrapper */\n.bubble-volume-slider-mute-button {\n    display: flex;\n    position: relative;\n    height: 36px;\n    width: 36px;\n    border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    background-color: var(--bubble-media-player-button-background-color);\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: all 0.3s ease;\n    box-sizing: border-box;\n    flex-shrink: 0;\n    touch-action: none;\n}\n\n/* Close button in volume slider wrapper */\n.bubble-volume-slider-close-button {\n    display: flex;\n    position: relative;\n    height: 36px;\n    width: 36px;\n    border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    background-color: var(--bubble-media-player-button-background-color);\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: all 0.3s ease;\n    box-sizing: border-box;\n    flex-shrink: 0;\n    touch-action: none;\n}\n\n.bubble-media-info-container {\n    display: flex;\n    line-height: 14px;\n    font-size: 12px;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n    margin: 0 16px 0 4px;\n    pointer-events: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.bubble-title,\n.bubble-artist {\n    display: flex;\n    margin: 2px 0;\n    position: relative;\n    white-space: nowrap;\n}\n\n.bubble-title {\n    font-weight: 600;\n}\n\n.bubble-background {\n    background-size: cover;\n    background-position: center;\n    filter: blur(50px);\n    opacity: 0.5;\n}\n\n.bubble-media-info-container.name-without-icon {\n    margin-left: 16px;\n}\n\n@media screen and (max-width: 250px) {\n    .bubble-previous-button {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 206px) {\n    .bubble-next-button {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 160px) {\n    .bubble-volume-button {\n        display: none;\n    }\n}\n\n.large .bubble-mute-button {\n  height: 42px;\n  width: 42px;\n}\n\n.large .bubble-volume-slider-wrapper {\n  height: 42px;\n}\n\n.large .bubble-volume-slider {\n  height: 42px;\n  border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n}\n\n.large .bubble-volume-slider-mute-button,\n.large .bubble-volume-slider-close-button {\n  height: 42px;\n  width: 42px;\n}\n\n.large .bubble-range-value {\n  place-items: center;\n  height: 42px;\n}\n\n.full-width > .bubble-play-pause-button,\n.large .full-width > .bubble-play-pause-button {\n    height: 36px;\n}\n\n.large .bubble-play-pause-button {\n  height: 42px;\n  width: 42px;\n}\n\n/* Ensure volume slider + its wrapper buttons match sub-buttons size when bottom-fixed */\n.bubble-wrapper.has-bottom-buttons .bubble-volume-slider-wrapper {\n    height: 36px;\n}\n\n.bubble-wrapper.has-bottom-buttons .bubble-volume-slider,\n.bubble-wrapper.has-bottom-buttons .bubble-range-value {\n    height: 36px;\n}\n\n.bubble-wrapper.has-bottom-buttons .bubble-volume-slider-mute-button,\n.bubble-wrapper.has-bottom-buttons .bubble-volume-slider-close-button {\n    height: 36px;\n    width: 36px;\n}\n\n.fixed-top .bubble-buttons-container {\n    margin-top: 7px;\n}\n\n.fixed-top .bubble-buttons-container:not(.bottom-fixed) {\n    height: 42px;\n}\n\n.fixed-top .bubble-volume-slider-wrapper {\n    margin-top: 7px;\n}",iconActions:!0,buttonActions:!0,withSubButtons:!0});function o(e,t){const n=(0,s.n)("div",`bubble-media-button ${t}`),o=(0,s.n)("ha-icon","bubble-media-button-icon");o.setAttribute("icon",e);const i=(0,s.n)("div","bubble-feedback-container"),a=(0,s.n)("div","bubble-feedback-element feedback-element");return i.appendChild(a),n.appendChild(i),n.appendChild(o),n.icon=o,n.feedback=a,n.haRipple=(0,s.n)("ha-ripple"),n.appendChild(n.haRipple),n}if(n.mediaInfoContainer=(0,s.n)("div","bubble-media-info-container"),n.playPauseButton=o("mdi:play","bubble-play-pause-button"),n.previousButton=o("mdi:skip-previous","bubble-previous-button"),n.nextButton=o("mdi:skip-next","bubble-next-button"),n.volumeButton=o("mdi:volume-high","bubble-volume-button"),n.powerButton=o("mdi:power","bubble-power-button"),n.muteButton=o("mdi:volume-off","bubble-mute-button is-hidden"),n.volumeSliderMuteButton=o("mdi:volume-high","bubble-volume-slider-mute-button"),n.volumeSliderCloseButton=o("mdi:close","bubble-volume-slider-close-button"),n.title=(0,s.n)("div","bubble-title"),n.artist=(0,s.n)("div","bubble-artist"),n.background.classList.add("bubble-cover-background"),n.buttonsContainer.classList.add("bubble-button-container"),n.iconContainer.appendChild(n.muteButton),n.mediaInfoContainer.append(n.title,n.artist),n.contentContainer.append(n.mediaInfoContainer),n.buttonsContainer.append(n.powerButton,n.previousButton,n.nextButton,n.volumeButton,n.playPauseButton),n.volumeSliderWrapper=(0,s.n)("div","bubble-volume-slider-wrapper is-hidden"),n.volumeSliderContainer=(0,s.n)("div","bubble-volume-slider"),(0,kt.H)(e,{targetElement:n.volumeSliderContainer,sliderLiveUpdate:!1,withValueDisplay:!0,holdToSlide:!1}),n.volumeSliderWrapper.appendChild(n.volumeSliderMuteButton),n.volumeSliderWrapper.appendChild(n.volumeSliderContainer),n.volumeSliderWrapper.appendChild(n.volumeSliderCloseButton),n.cardWrapper.appendChild(n.volumeSliderWrapper),!n._volumeStopPropAdded){const e=e=>e.stopPropagation();["pointerdown","pointermove","touchstart","touchmove","mousedown","mousemove","click"].forEach(t=>{n.volumeSliderWrapper.addEventListener(t,e,{passive:!1})}),n._volumeStopPropAdded=!0}function a(){if(n.volumeSliderWrapper.classList.contains("is-hidden"))return;const t=n.buttonsContainer?.classList.contains("bottom-fixed");n.volumeSliderWrapper.classList.add("is-hidden"),t?n.buttonsContainer.classList.remove("is-hidden"):(n.muteButton.classList.add("is-hidden"),yt(e))}if(n.volumeButton.addEventListener("click",t=>{t.stopPropagation();const o=n.buttonsContainer?.classList.contains("bottom-fixed");n.volumeSliderWrapper.classList.toggle("is-hidden"),o?n.buttonsContainer.classList.toggle("is-hidden"):(n.muteButton.classList.toggle("is-hidden"),yt(e))}),(0,i.pd)(n.volumeButton,n.volumeButton.feedback),!n._volumeOutsideListenerAdded){const e=e=>{if(n.volumeSliderWrapper.classList.contains("is-hidden"))return;const t=e.target;n.volumeSliderWrapper.contains(t)||n.volumeButton&&n.volumeButton.contains(t)||a()};document.addEventListener("click",e,{passive:!0}),n._volumeOutsideListenerAdded=!0,n._volumeOutsideHandler=e}n.powerButton.addEventListener("click",()=>{const t=(0,s.Gu)(e),n="off"!==t&&"unknown"!==t;e._hass.callService("media_player",n?"turn_off":"turn_on",{entity_id:e.config.entity})}),(0,i.pd)(n.powerButton,n.powerButton.feedback);const r=t=>{t.addEventListener("pointerdown",n=>{n.stopPropagation();const o=!0===(0,s.D$)(e,"is_volume_muted");e._hass.callService("media_player","volume_mute",{entity_id:e.config.entity,is_volume_muted:!o}),t.clicked=!0}),["click","touchstart","touchend","pointerup","pointercancel"].forEach(e=>{t.addEventListener(e,e=>{e.stopPropagation()})}),(0,i.pd)(t,t.feedback)};r(n.muteButton),r(n.volumeSliderMuteButton),n.previousButton.addEventListener("click",()=>{e._hass.callService("media_player","media_previous_track",{entity_id:e.config.entity})}),(0,i.pd)(n.previousButton,n.previousButton.feedback),n.nextButton.addEventListener("click",()=>{e._hass.callService("media_player","media_next_track",{entity_id:e.config.entity})}),(0,i.pd)(n.nextButton,n.nextButton.feedback),n.playPauseButton.addEventListener("click",()=>{const{service:t}=mt(e);e._hass.callService("media_player",t,{entity_id:e.config.entity}),n.playPauseButton.clicked=!0}),(0,i.pd)(n.playPauseButton,n.playPauseButton.feedback),n.volumeSliderCloseButton.addEventListener("click",e=>{e.stopPropagation(),a()}),(0,i.pd)(n.volumeSliderCloseButton,n.volumeSliderCloseButton.feedback),n.mainContainer.addEventListener("click",()=>(0,s.jp)("selection")),e.cardType=t}(e),(0,et.zQ)(e),(0,et.m9)(e),function(e){const t=(0,s.D$)(e,"media_title"),n=(0,s.D$)(e,"media_artist"),o=t+n;o!==e.previousMediaState&&(e.elements.artist.style.display=""===n?"none":"flex",e.previousMediaState=o),(0,s.Nl)(e,e.elements.title,t),(0,s.Nl)(e,e.elements.artist,n)}(e),function(e){const t=e=>null==e?"":String(e).trim(),n=t((0,s.D$)(e,"media_title")),o=t((0,s.D$)(e,"media_artist")),i=t((0,s.D$)(e,"source")),a=n+o===""||""!==n&&""!==i&&n===i,r=e.config.show_icon??!0,l="idle"===(0,s.Gu)(e);e.elements.mediaInfoContainer.style.display=a||l?"none":"",e.elements.nameContainer.style.display=a||l?"":"none",e.elements.mediaInfoContainer.classList.toggle("name-without-icon",!r)}(e),function(e){const t=e.elements.icon,n=e.elements.image,o=e.elements.iconContainer;if(!t||!o)return;const i=e.config.card_type,a=e.config.button_type,r=e.config.use_accent_color,l=(0,s.md)(e),c=(0,s.$C)(e),d=_t(e),u=Boolean(d.resolvedUrl)&&Boolean(n),p=(0,we.sW)(e),b=t.icon,h="name"===a||"pop-up"===i&&!a;let m="inherit";c&&((0,s.md)(e,"light")&&!r||!h?m=`var(--bubble-icon-color, ${(0,we.VA)(e)})`:"climate"===l&&(m=(0,gt.R)(e)));const g=o.style.color;"inherit"!==m?g!==m&&(o.style.color=m):""!==g&&(o.style.color=""),p&&b!==p&&(t.icon=p),t.style.color!==m&&(t.style.color=m);const f=()=>{if(n){const t=wt(e,"icon");t&&d.iconDisplayedUrl?xt(t,"",()=>{n&&(n.style.display="none")}):n&&(n.style.display="none")}t&&(t.style.display=""),d.iconDisplayedUrl=""};if(u){const o=wt(e,"icon");o?d.resolvedUrl!==d.iconDisplayedUrl?(t&&(t.style.display=""),n&&(n.style.display=""),xt(o,d.resolvedUrl),d.iconDisplayedUrl=d.resolvedUrl):(t&&(t.style.display=""),n&&(n.style.display="")):f()}else f();t.getAttribute("icon")!==t.icon&&t.setAttribute("icon",t.icon)}(e),function(e){if(!e.elements.background)return;const t=_t(e),n=Boolean(e.config.cover_background),o=n?t.resolvedUrl:"";if(n){if(o&&o!==t.backgroundDisplayedUrl){const n=wt(e,"background");n&&(xt(n,o),t.backgroundDisplayedUrl=o)}else if(!o&&t.backgroundDisplayedUrl){const n=wt(e,"background");n&&xt(n,""),t.backgroundDisplayedUrl=""}}else if(t.backgroundDisplayedUrl){const n=wt(e,"background");n&&xt(n,""),t.backgroundDisplayedUrl=""}}(e),(0,et.Uk)(e),function(e){e.elements.rangeFill&&(0,ot.VM)(e)}(e),function(e){const{icon:t}=mt(e);e.elements.playPauseButton.icon.setAttribute("icon",t),e.elements.playPauseButton.clicked=!1}(e),function(e){const t=1==(0,s.D$)(e,"is_volume_muted");"var(--primary-text-color)"!==e.elements.muteButton.icon.style.color&&(e.elements.muteButton.icon.style.color="var(--primary-text-color)"),t?e.elements.muteButton.icon.setAttribute("icon","mdi:volume-off"):e.elements.muteButton.icon.setAttribute("icon","mdi:volume-high"),e.elements.muteButton.clicked=!1,e.elements.volumeSliderMuteButton&&("var(--primary-text-color)"!==e.elements.volumeSliderMuteButton.icon.style.color&&(e.elements.volumeSliderMuteButton.icon.style.color="var(--primary-text-color)"),t?e.elements.volumeSliderMuteButton.icon.setAttribute("icon","mdi:volume-off"):e.elements.volumeSliderMuteButton.icon.setAttribute("icon","mdi:volume-high"),e.elements.volumeSliderMuteButton.clicked=!1)}(e),function(e){const t=(0,s.Gu)(e),n="off"!==t&&"unknown"!==t;e.elements.powerButton.icon.style.color=n?"var(--accent-color)":""}(e),(0,xe.Kr)(e),function(e){(0,s.JK)(e),Ue(e);const t=(0,s.Gu)(e),n="off"!==t&&"unknown"!==t,o="playing"===t,i="paused"===t,a="idle"===t,r=function(e){const t=e?._hass?.states?.[e?.config?.entity]?.state??"";return"playing"===t||"paused"===t||"unknown"===t||"on"===t}(e),l=function(e){const t=bt(e);return{canPrevious:ht(t,16),canNext:ht(t,32),canPlay:ht(t,16384),canPause:ht(t,1),canStop:ht(t,4096),canTurnOn:ht(t,128),canTurnOff:ht(t,256),canVolumeSet:ht(t,4),canVolumeStep:ht(t,1024),canMute:ht(t,8),canPlayMedia:ht(t,512),canSelectSource:ht(t,2048),canSelectSoundMode:ht(t,65536)}}(e),c=!e.config.hide?.power_button&&(l.canTurnOn||l.canTurnOff),d=!e.config.hide?.previous_button&&l.canPrevious&&(e.editor||r),u=!e.config.hide?.next_button&&l.canNext&&(e.editor||r),p=!e.config.hide?.volume_button&&(l.canVolumeSet||l.canVolumeStep||l.canMute)&&(e.editor||r||n),b=!e.config.hide?.play_pause_button&&(e.editor||r||n||a||i||o),h=!(c||d||u||p||b);(!n&&e.config.hide?.power_button||h)&&"none"!==e.elements.buttonsContainer.style.display?(e.elements.buttonsContainer.classList.add("hidden"),(0,et.iJ)(e)):h&&e.config.hide?.power_button||!e.elements.buttonsContainer.classList.contains("hidden")||(e.elements.buttonsContainer.classList.remove("hidden"),(0,et.iJ)(e)),c||"none"===e.elements.powerButton.style.display?c&&e.elements.powerButton.classList.contains("hidden")&&e.elements.powerButton.classList.remove("hidden"):e.elements.powerButton.classList.add("hidden"),d||"none"===e.elements.previousButton.style.display?d&&e.elements.previousButton.classList.contains("hidden")&&e.elements.previousButton.classList.remove("hidden"):e.elements.previousButton.classList.add("hidden"),u||"none"===e.elements.nextButton.style.display?u&&e.elements.nextButton.classList.contains("hidden")&&e.elements.nextButton.classList.remove("hidden"):e.elements.nextButton.classList.add("hidden"),p||"none"===e.elements.volumeButton.style.display?p&&e.elements.volumeButton.classList.contains("hidden")&&e.elements.volumeButton.classList.remove("hidden"):e.elements.volumeButton.classList.add("hidden"),b||"none"===e.elements.playPauseButton.style.display?b&&e.elements.playPauseButton.classList.contains("hidden")&&e.elements.playPauseButton.classList.remove("hidden"):e.elements.playPauseButton.classList.add("hidden"),e.elements.muteButton&&(p&&l.canMute||"none"===e.elements.muteButton.style.display?p&&l.canMute&&e.elements.muteButton.classList.contains("hidden")&&e.elements.muteButton.classList.remove("hidden"):e.elements.muteButton.classList.add("hidden")),function(e){let t=50,n=146;e.content.classList.contains("large")&&(t=58,n=160);const o=(0,s.Gu)(e),i="off"!==o&&"unknown"!==o;(e.config.hide?.play_pause_button||!e.editor&&!i)&&(e.content.classList.contains("large")?n-=42:n-=36),e.elements.cardWrapper.style.setProperty("--volume-slider-left-offset",`${t}px`),e.elements.cardWrapper.style.setProperty("--volume-slider-width-calc",`calc(100% - ${n}px)`)}(e)}(e)},select:function(e){e.cardType,"select"!==e.cardType&&(function(e){try{const t=e.config?.button_action||{};e.config.button_action={...t,tap_action:{action:"none"}}}catch(e){}(0,it.N0)(e,{type:"select",styles:".bubble-container {\n    overflow: inherit;\n    transition: border 0.3s ease;\n}\n\n.bubble-background {\n    cursor: pointer;\n}\n\n.with-bottom-buttons .bubble-dropdown-container {\n    display: initial !important;\n}",withFeedback:!0,withSubButtons:!0,withIconActions:!0,buttonActions:!0}).mainContainer.classList.add("bubble-select-card-container"),e.cardType="select"}(e),(0,Ct.Fi)(e),(0,Ct.XO)(e)),(0,$t.O)(e,e.elements,e.config.entity,e.config),(0,et.zQ)(e),(0,et.wd)(e),(0,et.m9)(e),(0,et.Uk)(e),(0,xe.Kr)(e),function(e){(0,s.JK)(e),Ue(e)}(e)},climate:function(e){"climate"!==e.cardType&&function(e){const t="climate",n=(0,it.N0)(e,{type:t,styles:".bubble-temperature-container, .bubble-low-temp-container, .bubble-high-temp-container {\n    display: inline-flex;\n    position: relative;\n    font-size: 12px;\n    white-space: nowrap;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n    height: 36px;\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n    background-color: var(--bubble-climate-button-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))));\n}\n\n.bubble-low-temp-container {\n    color: var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)));\n}\n\n.bubble-high-temp-container {\n    color: var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)));\n}\n\n.bubble-target-temperature-container {\n    display: flex;\n    gap: 10px;\n}\n\n.bubble-climate-minus-button,\n.bubble-climate-plus-button {\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    width: 34px;\n    height: 34px;\n    margin: 2px;\n    vertical-align: middle;\n    font-size: 18px;\n    color: var(--primary-text-color);\n    cursor: pointer;\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\n}\n\n.bubble-climate-minus-button-icon,\n.bubble-climate-plus-button-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    --mdc-icon-size: 16px;\n}\n\n.bubble-climate-temp-display {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    white-space: nowrap;\n    padding: 0 4px;\n    box-sizing: border-box;\n}\n\n@keyframes tap-warning {\n    10%, 90% { transform: translateX(-1px); }\n    20%, 80% { transform: translateX(1px); }\n    30%, 50%, 70% { transform: translateX(-2px); }\n    40%, 60% { transform: translateX(2px); }\n}\n\n/* Full width styles for climate buttons when in bottom position */\n\n.full-width > .bubble-temperature-container,\n.full-width > .bubble-target-temperature-container,\n.full-width .bubble-low-temp-container,\n.full-width .bubble-high-temp-container {\n    background-color: transparent;\n    gap: 8px;\n    flex: 1;\n}\n\n.full-width > .bubble-target-temperature-container {\n    display: flex;\n}\n\n.full-width .bubble-climate-minus-button,\n.full-width .bubble-climate-plus-button {\n    flex: 1;\n    width: 36px;\n    height: 36px;\n    margin: 0;\n    background-color: var(--bubble-main-buttons-background-color, var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))))));\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 18px));\n}\n\n.full-width .bubble-climate-minus-button-icon,\n.full-width .bubble-climate-plus-button-icon {\n    --mdc-icon-size: 20px;\n}\n\n.full-width .bubble-climate-temp-display {\n    flex: 1;\n    height: 36px;\n    background-color: var(--bubble-main-buttons-background-color, var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))))));\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 18px));\n    padding: 0;\n}",withSubButtons:!0,iconActions:!0,buttonActions:!0});function o(t,o,a){const r=(0,gt.N$)(e,a),l=(0,s.n)("div","bubble-climate-minus-button"),c=(0,s.n)("div","bubble-climate-plus-button"),d=(0,s.n)("ha-icon","bubble-climate-minus-button-icon");d.setAttribute("icon","mdi:minus"),l.appendChild(d),l.haRipple=(0,s.n)("ha-ripple"),l.appendChild(l.haRipple),(0,i.pd)(l);const u=(0,s.n)("ha-icon","bubble-climate-plus-button-icon");let p,b;u.setAttribute("icon","mdi:plus"),c.appendChild(u),c.haRipple=(0,s.n)("ha-ripple"),c.appendChild(c.haRipple),(0,i.pd)(c),"temperature"===o?(n.tempDisplay=(0,s.n)("div","bubble-temperature-display bubble-climate-temp-display"),p=n.tempDisplay):"target_temp_low"===o?(n.lowTempDisplay=(0,s.n)("div","bubble-low-temperature-display bubble-climate-temp-display"),p=n.lowTempDisplay):"target_temp_high"===o&&(n.highTempDisplay=(0,s.n)("div","bubble-high-temperature-display bubble-climate-temp-display"),p=n.highTempDisplay),t.appendChild(l),t.appendChild(p),t.appendChild(c);let h=parseFloat((0,s.D$)(e,o))||0,m=h;function g(){const t=parseFloat((0,s.D$)(e,o))||0;t!==m&&(h=t,m=t)}function f(){g();const t={entity_id:e.config.entity};"target_temp_low"===o?(t.target_temp_low=h,t.target_temp_high=(0,s.D$)(e,"target_temp_high")):"target_temp_high"===o?(t.target_temp_high=h,t.target_temp_low=(0,s.D$)(e,"target_temp_low")):t[o]=h,e._hass.callService("climate","set_temperature",t)}function y(t){g();const i=e._hass.states[e.config.entity],l=e.config.min_temp??i?.attributes?.min_temp??0,c=e.config.max_temp??i?.attributes?.max_temp??1e3;let d=parseFloat((h+t).toFixed(r));if(d=Math.min(c,Math.max(l,d)),d<l?d=l:d>c&&(d=c),d!==h)h=d,function(t){"temperature"===o?n.tempDisplay.innerText=(0,gt.cH)(t,e,a):"target_temp_low"===o?n.lowTempDisplay.innerText=(0,gt.cH)(t,e,a):"target_temp_high"===o&&(n.highTempDisplay.innerText=(0,gt.cH)(t,e,a))}(h),clearTimeout(b),b=setTimeout(f,700);else{(0,s.jp)("failure");const t=e.elements.mainContainer;t.style.animation="tap-warning 0.4s cubic-bezier(.36,.07,.19,.97) both",setTimeout(()=>{t.style.animation=""},500)}}l.addEventListener("click",()=>y(-a)),c.addEventListener("click",()=>y(a))}n.temperatureContainer=(0,s.n)("div","bubble-temperature-container"),n.targetTemperatureContainer=(0,s.n)("div","bubble-target-temperature-container"),n.background.classList.add("bubble-color-background"),n.buttonsContainer.append(n.temperatureContainer,n.targetTemperatureContainer);const a=e._hass.states[e.config.entity],r="°C"===e._hass.config.unit_system.temperature,l=e.config.step??(a.attributes.target_temp_step?a.attributes.target_temp_step:r?.5:1);o(n.temperatureContainer,"temperature",l),n.lowTempContainer=(0,s.n)("div","bubble-low-temp-container"),o(n.lowTempContainer,"target_temp_low",l),n.targetTemperatureContainer.appendChild(n.lowTempContainer),n.highTempContainer=(0,s.n)("div","bubble-high-temp-container"),o(n.highTempContainer,"target_temp_high",l),n.targetTemperatureContainer.appendChild(n.highTempContainer),e.cardType=t}(e),(0,et.zQ)(e),(0,et.m9)(e),(0,et.wd)(e),(0,et.Uk)(e),function(e){const t=(0,s.D$)(e,"temperature"),n=(0,s.Gu)(e);(0,gt.N$)(e),e.config.hide_temperature||"unavailable"===n||""===t||void 0===t?e.elements.temperatureContainer?.classList.add("hidden"):e.elements.temperatureContainer?.classList.remove("hidden"),t!==e.previousTemp&&(e.previousTemp=t,e.elements.tempDisplay&&""!==t&&void 0!==t&&(e.elements.tempDisplay.innerText=(0,gt.cH)(t,e)))}(e),function(e){const t=(0,s.D$)(e,"target_temp_low"),n=e.config.hide_target_temp_low,o=(0,s.Gu)(e);(0,gt.N$)(e),"unavailable"===o||""===t||void 0===t||n?(e.elements.targetTemperatureContainer?.classList.add("hidden"),e.elements.lowTempContainer?.classList.add("hidden")):(e.elements.targetTemperatureContainer?.classList.remove("hidden"),e.elements.lowTempContainer?.classList.remove("hidden")),t!==e.previousTargetTempLow&&(e.previousTargetTempLow=t,e.elements.lowTempDisplay&&""!==t&&void 0!==t&&(e.elements.lowTempDisplay.innerText=(0,gt.cH)(t,e)))}(e),function(e){const t=(0,s.D$)(e,"target_temp_high"),n=e.config.hide_target_temp_high,o=(0,s.Gu)(e);(0,gt.N$)(e),"unavailable"===o||""===t||void 0===t||n?e.elements.highTempContainer?.classList.add("hidden"):(e.elements.highTempContainer?.classList.remove("hidden"),e.elements.targetTemperatureContainer?.classList.remove("hidden")),t!==e.previousTargetTempHigh&&(e.previousTargetTempHigh=t,e.elements.highTempDisplay&&""!==t&&void 0!==t&&(e.elements.highTempDisplay.innerText=(0,gt.cH)(t,e)))}(e),(0,xe.Kr)(e),function(e){(0,s.JK)(e),Ue(e);const t=(0,s.Gu)(e);e.previousState!==t&&(e.previousState=t,e.elements.background.style.backgroundColor=`var(--bubble-climate-background-color, ${(0,gt.R)(e)})`),e.config.card_layout,e.elements.hvacModeDropdown}(e)}};class At extends HTMLElement{editor=!1;isConnected=!1;_editorUpdateTimeout=null;connectedCallback(){this.isConnected=!0,function(e){if(!e.content){let t=e.shadowRoot||e.attachShadow({mode:"open"}),n=document.createElement("ha-card");n.style.cssText="background: none; border: none; box-shadow: none; border-radius: 16px;";let o=document.createElement("div");o.className="card-content",o.style.padding="0",n.appendChild(o),t.appendChild(n),e.card=n,e.content=o}}(this),(0,a.nO)(this),(0,r.$i)(),this._hass&&this.updateBubbleCard()}disconnectedCallback(){this.isConnected=!1,(0,i.Xs)();try{this.content&&(0,s.Iz)(this.content)}catch(e){}try{this.context&&(0,s.bE)(this.context)}catch(e){}try{this._moduleChangeHandler&&(window.removeEventListener("bubble-card-modules-changed",this._moduleChangeHandler),window.removeEventListener("bubble-card-module-updated",this._moduleChangeHandler),document.removeEventListener("yaml-modules-updated",this._moduleChangeHandler),this._moduleChangeHandler=null,this._moduleChangeListenerAdded=!1)}catch(e){}clearTimeout(this._editorUpdateTimeout)}get detectedEditor(){return!!this.editor&&"hui-dialog-edit-card"===window.history?.state?.dialog}set editMode(e){this.editor!==e&&(this.editor=e,["pop-up","horizontal-buttons-stack","sub-buttons"].includes(this.config.card_type)&&this.updateBubbleCard())}set hass(e){this._hass=e,this.updateBubbleCard()}updateBubbleCard(){if(!this.isConnected&&"pop-up"!==this.config.card_type)return;const e=this.config.card_type;St[e]&&(St[e](this),this._notifyEditorContext())}setConfig(e){if(e.error)throw new Error(e.error);const t={...e};if(!t.card_type)throw new Error("You need to define a card type");if(void 0!==t.grid_options?.rows&&(t.rows=t.grid_options.rows),"pop-up"===t.card_type){if(t.hash&&t.button_type&&"name"!==t.button_type&&!t.entity&&t.modules)throw new Error("You need to define an entity")}else if("horizontal-buttons-stack"===t.card_type){const e={};for(const n in t)if(/^\d+_icon$/.test(n)){const o=n.replace("_icon","_link");if(void 0===t[o])throw new Error("You need to define "+o);if(e[t[o]])throw new Error("You can't use "+t[o]+" twice");e[t[o]]=!0}}else if(["button","cover","climate","select","media-player"].includes(t.card_type)){if(!t.entity&&"name"!==t.button_type)throw new Error("You need to define an entity")}else if("calendar"===t.card_type&&!t.entities)throw new Error("You need to define an entity list");if("select"===t.card_type&&t.entity&&!t.select_attribute&&!t.entity.startsWith("input_select")&&!t.entity.startsWith("select"))throw new Error('"Select menu (from attributes)" missing');this.config=t}getCardSize(){switch(this.config.card_type){case"pop-up":return-1e5;case"button":case"sub-buttons":case"separator":case"empty-column":case"horizontal-buttons-stack":case"calendar":case"media-player":case"select":case"climate":return 1;case"cover":return 2}}getGridOptions(){const e=this.config.columns;let t={columns:e?3*e:12,rows:this.config.rows??"auto"};return"horizontal-buttons-stack"===this.config.card_type?t.rows=1.3:"separator"===this.config.card_type&&void 0===this.config.grid_options?.rows&&(t.rows=this.config.rows?"auto":.8),t}getLayoutOptions(){let e=1;"pop-up"===this.config.card_type?e=0:"horizontal-buttons-stack"===this.config.card_type?e=1:"cover"===this.config.card_type&&(e=2);let t=4;return"pop-up"===this.config.card_type?t=0:"horizontal-buttons-stack"===this.config.card_type&&(t=4),{grid_columns:this.config.columns??t,grid_rows:this.config.rows??e}}static getConfigElement(){return document.createElement("bubble-card-editor")}_notifyEditorContext(){try{if(!this.config||!this.card)return;const e={context:this,card:this.card,config:this.config,card_type:this.config.card_type,entity:this.config.entity,hash:this.config.hash,isEditor:this.detectedEditor,editMode:this.editor};window.dispatchEvent(new CustomEvent("bubble-card-context",{detail:e}))}catch(e){}}}customElements.define("bubble-card",At),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description: ''