/*! For license information please see spectrum-web-components.js.LICENSE.txt */
(()=>{"use strict";var t,e,o,r,s={599:(t,e,o)=>{o.d(e,{o:()=>l});var r=o(392),s=o(338),c=Object.defineProperty,a=Object.getOwnPropertyDescriptor;const i=new Set;new MutationObserver((()=>{const t="rtl"===document.documentElement.dir?document.documentElement.dir:"ltr";i.forEach((e=>{e.setAttribute("dir",t)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const n=t=>void 0!==t.startManagingContentDirection||"SP-THEME"===t.tagName;class l extends(function(t){class e extends t{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return"ltr"===this.dir}hasVisibleFocusInTree(){const t=this.getRootNode().activeElement;if(!t)return!1;try{return t.matches(":focus-visible")||t.matches(".focus-visible")}catch(e){return t.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let t=this.assignedSlot||this.parentNode;for(;t!==document.documentElement&&!n(t);)t=t.assignedSlot||t.parentNode||t.host;const e=this.dir;if(this.dir="rtl"===t.dir?t.dir:this.dir||"ltr",e===this.dir&&this.setAttribute("dir",this.dir),t===document.documentElement)i.add(this);else{const{localName:e}=t;e.search("-")>-1&&!customElements.get(e)?customElements.whenDefined(e).then((()=>{t.startManagingContentDirection(this)})):t.startManagingContentDirection(this)}this._dirParent=t}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?i.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return((t,e,o,r)=>{for(var s,i=r>1?void 0:r?a(e,o):e,n=t.length-1;n>=0;n--)(s=t[n])&&(i=(r?s(e,o,i):s(i))||i);r&&i&&c(e,o,i)})([(0,s.Cb)({reflect:!0})],e.prototype,"dir",2),e}(r.oi)){}},171:(t,e,o)=>{o.d(e,{i:()=>r});const r=t=>t.querySelector('button:not([tabindex="-1"]), [href]:not([tabindex="-1"]), input:not([tabindex="-1"]), select:not([tabindex="-1"]), textarea:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"]), [focusable]:not([tabindex="-1"])')},731:(t,e,o)=>{o.d(e,{G:()=>r});const r=(t,e,{position:o,prepareCallback:r}={position:"beforeend"})=>{let{length:s}=t;if(0===s)return()=>t;let c=1,a=0;("afterbegin"===o||"afterend"===o)&&(c=-1,a=s-1);const i=new Array(s),n=new Array(s),l=document.createComment("placeholder for reparented element");do{const s=t[a];r&&(n[a]=r(s)),i[a]=l.cloneNode();const u=s.parentElement||s.getRootNode();u&&u!==s&&u.replaceChild(i[a],s),e.insertAdjacentElement(o,s),a+=c}while(--s>0);return function(){return function(t,e,o=[]){for(let r=0;r<e.length;++r){const s=e[r],c=t[r],a=c.parentElement||c.getRootNode();o[r]&&o[r](s),a&&a!==c&&a.replaceChild(s,c),delete t[r]}return e}(i,t,n)}}},692:(t,e,o)=>{var r;o.d(e,{Al:()=>D,Jb:()=>C,Ld:()=>I,dy:()=>z,sY:()=>M});const s=window,c=s.trustedTypes,a=c?c.createPolicy("lit-html",{createHTML:t=>t}):void 0,i=`lit$${(Math.random()+"").slice(9)}$`,n="?"+i,l=`<${n}>`,u=document,d=(t="")=>u.createComment(t),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,b=t=>p(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),h=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,g=/>/g,f=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),x=/'/g,y=/"/g,k=/^(?:script|style|textarea|title)$/i,w=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),z=w(1),C=(w(2),Symbol.for("lit-noChange")),I=Symbol.for("lit-nothing"),q=new WeakMap,E=u.createTreeWalker(u,129,null,!1),S=(t,e)=>{const o=t.length-1,r=[];let s,c=2===e?"<svg>":"",n=h;for(let e=0;e<o;e++){const o=t[e];let a,u,d=-1,m=0;for(;m<o.length&&(n.lastIndex=m,u=n.exec(o),null!==u);)m=n.lastIndex,n===h?"!--"===u[1]?n=v:void 0!==u[1]?n=g:void 0!==u[2]?(k.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=f):void 0!==u[3]&&(n=f):n===f?">"===u[0]?(n=null!=s?s:h,d=-1):void 0===u[1]?d=-2:(d=n.lastIndex-u[2].length,a=u[1],n=void 0===u[3]?f:'"'===u[3]?y:x):n===y||n===x?n=f:n===v||n===g?n=h:(n=f,s=void 0);const p=n===f&&t[e+1].startsWith("/>")?" ":"";c+=n===h?o+l:d>=0?(r.push(a),o.slice(0,d)+"$lit$"+o.slice(d)+i+p):o+i+(-2===d?(r.push(void 0),e):p)}const u=c+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==a?a.createHTML(u):u,r]};class ${constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let s=0,a=0;const l=t.length-1,u=this.parts,[m,p]=S(t,e);if(this.el=$.createElement(m,o),E.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=E.nextNode())&&u.length<l;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(i)){const o=p[a++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(i),e=/([.?@])?(.*)/.exec(o);u.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?P:"?"===e[1]?L:"@"===e[1]?O:U})}else u.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(k.test(r.tagName)){const t=r.textContent.split(i),e=t.length-1;if(e>0){r.textContent=c?c.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],d()),E.nextNode(),u.push({type:2,index:++s});r.append(t[e],d())}}}else if(8===r.nodeType)if(r.data===n)u.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(i,t+1));)u.push({type:7,index:s}),t+=i.length-1}s++}}static createElement(t,e){const o=u.createElement("template");return o.innerHTML=t,o}}function A(t,e,o=t,r){var s,c,a,i;if(e===C)return e;let n=void 0!==r?null===(s=o._$Co)||void 0===s?void 0:s[r]:o._$Cl;const l=m(e)?void 0:e._$litDirective$;return(null==n?void 0:n.constructor)!==l&&(null===(c=null==n?void 0:n._$AO)||void 0===c||c.call(n,!1),void 0===l?n=void 0:(n=new l(t),n._$AT(t,o,r)),void 0!==r?(null!==(a=(i=o)._$Co)&&void 0!==a?a:i._$Co=[])[r]=n:o._$Cl=n),void 0!==n&&(e=A(t,n._$AS(t,e.values),n,r)),e}class _{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:r}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:u).importNode(o,!0);E.currentNode=s;let c=E.nextNode(),a=0,i=0,n=r[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new T(c,c.nextSibling,this,t):1===n.type?e=new n.ctor(c,n.name,n.strings,this,t):6===n.type&&(e=new B(c,this,t)),this.u.push(e),n=r[++i]}a!==(null==n?void 0:n.index)&&(c=E.nextNode(),a++)}return s}p(t){let e=0;for(const o of this.u)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class T{constructor(t,e,o,r){var s;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cm=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),m(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==C&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):b(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==I&&m(this._$AH)?this._$AA.nextSibling.data=t:this.T(u.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=$.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(o);else{const t=new _(s,this),e=t.v(this.options);t.p(o),this.T(e),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new $(t)),e}k(t){p(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const s of t)r===e.length?e.push(o=new T(this.O(d()),this.O(d()),this,this.options)):o=e[r],o._$AI(s),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class U{constructor(t,e,o,r,s){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const s=this.strings;let c=!1;if(void 0===s)t=A(this,t,e,0),c=!m(t)||t!==this._$AH&&t!==C,c&&(this._$AH=t);else{const r=t;let a,i;for(t=s[0],a=0;a<s.length-1;a++)i=A(this,r[o+a],e,a),i===C&&(i=this._$AH[a]),c||(c=!m(i)||i!==this._$AH[a]),i===I?t=I:t!==I&&(t+=(null!=i?i:"")+s[a+1]),this._$AH[a]=i}c&&!r&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class P extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}}const j=c?c.emptyScript:"";class L extends U{constructor(){super(...arguments),this.type=4}j(t){t&&t!==I?this.element.setAttribute(this.name,j):this.element.removeAttribute(this.name)}}class O extends U{constructor(t,e,o,r,s){super(t,e,o,r,s),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=A(this,t,e,0))&&void 0!==o?o:I)===C)return;const r=this._$AH,s=t===I&&r!==I||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,c=t!==I&&(r===I||s);s&&this.element.removeEventListener(this.name,this,r),c&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class B{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const D={P:"$lit$",A:i,M:n,C:1,L:S,R:_,D:b,V:A,I:T,H:U,N:L,U:O,B:P,F:B},F=s.litHtmlPolyfillSupport;null==F||F($,T),(null!==(r=s.litHtmlVersions)&&void 0!==r?r:s.litHtmlVersions=[]).push("2.6.1");const M=(t,e,o)=>{var r,s;const c=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let a=c._$litPart$;if(void 0===a){const t=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:null;c._$litPart$=a=new T(e.insertBefore(d(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a}},338:(t,e,o)=>{o.d(e,{Cb:()=>s,IO:()=>i,vZ:()=>u,SB:()=>c});const r=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function s(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):r(t,e)}function c(t){return s({...t,state:!0})}const a=({finisher:t,descriptor:e})=>(o,r)=>{var s;if(void 0===r){const r=null!==(s=o.originalKey)&&void 0!==s?s:o.key,c=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(o.key)}:{...o,key:r};return null!=t&&(c.finisher=function(e){t(e,r)}),c}{const s=o.constructor;void 0!==e&&Object.defineProperty(o,r,e(r)),null==t||t(s,r)}};function i(t,e){return a({descriptor:o=>{const r={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;r.get=function(){var o,r;return void 0===this[e]&&(this[e]=null!==(r=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}var n;const l=null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function u(t,e,o){let r,s=t;return"object"==typeof t?(s=t.slot,r=t):r={flatten:e},o?function(t){const{slot:e,selector:o}=null!=t?t:{};return a({descriptor:r=>({get(){var r;const s="slot"+(e?`[name=${e}]`:":not([name])"),c=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(s),a=null!=c?l(c,t):[];return o?a.filter((t=>t.matches(o))):a},enumerable:!0,configurable:!0})})}({slot:s,flatten:e,selector:o}):a({descriptor:t=>({get(){var t,e;const o="slot"+(s?`[name=${s}]`:":not([name])"),c=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(o);return null!==(e=null==c?void 0:c.assignedNodes(r))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},796:(t,e,o)=>{o.d(e,{o:()=>s});var r=o(692);const s=t=>null!=t?t:r.Ld},392:(t,e,o)=>{o.d(e,{oi:()=>w,iv:()=>n,dy:()=>k.dy,Ld:()=>k.Ld,sY:()=>k.sY,FV:()=>s});const r=window,s=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),a=new WeakMap;class i{constructor(t,e,o){if(this._$cssResult$=!0,o!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&a.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new i(o,t,c)},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,c))(e)})(t):t;var u;const d=window,m=d.trustedTypes,p=m?m.emptyScript:"",b=d.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},v=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:v};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Ep(o,e);void 0!==r&&(this._$Ev.set(r,o),t.push(r))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),s=r.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=g){var r;const s=this.constructor._$Ep(t,o);if(void 0!==s&&!0===o.reflect){const c=(void 0!==(null===(r=o.converter)||void 0===r?void 0:r.toAttribute)?o.converter:h).toAttribute(e,o.type);this._$El=t,null==c?this.removeAttribute(s):this.setAttribute(s,c),this._$El=null}}_$AK(t,e){var o;const r=this.constructor,s=r._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=r.getPropertyOptions(s),c="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:h;this._$El=s,this[s]=c.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==b||b({ReactiveElement:f}),(null!==(u=d.reactiveElementVersions)&&void 0!==u?u:d.reactiveElementVersions=[]).push("1.6.1");var x,y,k=o(692);class w extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,k.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return k.Jb}}w.finalized=!0,w._$litElement$=!0,null===(x=globalThis.litElementHydrateSupport)||void 0===x||x.call(globalThis,{LitElement:w});const z=globalThis.litElementPolyfillSupport;null==z||z({LitElement:w}),(null!==(y=globalThis.litElementVersions)&&void 0!==y?y:globalThis.litElementVersions=[]).push("3.2.2")}},c={};function a(t){var e=c[t];if(void 0!==e)return e.exports;var o=c[t]={exports:{}};return s[t].call(o.exports,o,o.exports,a),o.exports}a.m=s,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,a.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var s=Object.create(null);a.r(s);var c={};t=t||[null,e({}),e([]),e(e)];for(var i=2&r&&o;"object"==typeof i&&!~t.indexOf(i);i=e(i))Object.getOwnPropertyNames(i).forEach((t=>c[t]=()=>o[t]));return c.default=()=>o,a.d(s,c),s},a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,o)=>(a.f[o](t,e),e)),[])),a.u=t=>t+".spectrum-web-components.js",a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o={},r="helix-import-ui:",a.l=(t,e,s,c)=>{if(o[t])o[t].push(e);else{var i,n;if(void 0!==s)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+s){i=d;break}}i||(n=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",r+s),i.src=t),o[t]=[e];var m=(e,r)=>{i.onerror=i.onload=null,clearTimeout(p);var s=o[t];if(delete o[t],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((t=>t(r))),e)return e(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),n&&document.head.appendChild(i)}},a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.p="./js/dist/",(()=>{var t={179:0};a.f.j=(e,o)=>{var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var s=new Promise(((o,s)=>r=t[e]=[o,s]));o.push(r[2]=s);var c=a.p+a.u(e),i=new Error;a.l(c,(o=>{if(a.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var s=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+c+")",i.name="ChunkLoadError",i.type=s,i.request=c,r[1](i)}}),"chunk-"+e,e)}};var e=(e,o)=>{var r,s,[c,i,n]=o,l=0;if(c.some((e=>0!==t[e]))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);n&&n(a)}for(e&&e(o);l<c.length;l++)s=c[l],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0},o=globalThis.webpackChunkhelix_import_ui=globalThis.webpackChunkhelix_import_ui||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})(),(()=>{var t=a(392);const e=t.iv`
:host,:root{--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1.0;--spectrum-global-color-opacity-100:1;--spectrum-global-color-opacity-90:0.9;--spectrum-global-color-opacity-80:0.8;--spectrum-global-color-opacity-70:0.7;--spectrum-global-color-opacity-60:0.6;--spectrum-global-color-opacity-55:0.55;--spectrum-global-color-opacity-50:0.5;--spectrum-global-color-opacity-42:0.42;--spectrum-global-color-opacity-40:0.4;--spectrum-global-color-opacity-30:0.3;--spectrum-global-color-opacity-25:0.25;--spectrum-global-color-opacity-20:0.2;--spectrum-global-color-opacity-15:0.15;--spectrum-global-color-opacity-10:0.1;--spectrum-global-color-opacity-8:0.08;--spectrum-global-color-opacity-7:0.07;--spectrum-global-color-opacity-6:0.06;--spectrum-global-color-opacity-5:0.05;--spectrum-global-color-opacity-4:0.04;--spectrum-global-color-opacity-0:0.00;--spectrum-global-color-celery-400-rgb:34,184,51;--spectrum-global-color-celery-400:rgb(var(--spectrum-global-color-celery-400-rgb));--spectrum-global-color-celery-500-rgb:68,202,73;--spectrum-global-color-celery-500:rgb(var(--spectrum-global-color-celery-500-rgb));--spectrum-global-color-celery-600-rgb:105,220,99;--spectrum-global-color-celery-600:rgb(var(--spectrum-global-color-celery-600-rgb));--spectrum-global-color-celery-700-rgb:142,235,127;--spectrum-global-color-celery-700:rgb(var(--spectrum-global-color-celery-700-rgb));--spectrum-global-color-chartreuse-400-rgb:148,192,8;--spectrum-global-color-chartreuse-400:rgb(var(--spectrum-global-color-chartreuse-400-rgb));--spectrum-global-color-chartreuse-500-rgb:166,211,18;--spectrum-global-color-chartreuse-500:rgb(var(--spectrum-global-color-chartreuse-500-rgb));--spectrum-global-color-chartreuse-600-rgb:184,229,37;--spectrum-global-color-chartreuse-600:rgb(var(--spectrum-global-color-chartreuse-600-rgb));--spectrum-global-color-chartreuse-700-rgb:205,245,71;--spectrum-global-color-chartreuse-700:rgb(var(--spectrum-global-color-chartreuse-700-rgb));--spectrum-global-color-yellow-400-rgb:228,194,0;--spectrum-global-color-yellow-400:rgb(var(--spectrum-global-color-yellow-400-rgb));--spectrum-global-color-yellow-500-rgb:244,213,0;--spectrum-global-color-yellow-500:rgb(var(--spectrum-global-color-yellow-500-rgb));--spectrum-global-color-yellow-600-rgb:249,232,92;--spectrum-global-color-yellow-600:rgb(var(--spectrum-global-color-yellow-600-rgb));--spectrum-global-color-yellow-700-rgb:252,246,187;--spectrum-global-color-yellow-700:rgb(var(--spectrum-global-color-yellow-700-rgb));--spectrum-global-color-magenta-400-rgb:222,61,130;--spectrum-global-color-magenta-400:rgb(var(--spectrum-global-color-magenta-400-rgb));--spectrum-global-color-magenta-500-rgb:237,87,149;--spectrum-global-color-magenta-500:rgb(var(--spectrum-global-color-magenta-500-rgb));--spectrum-global-color-magenta-600-rgb:249,114,167;--spectrum-global-color-magenta-600:rgb(var(--spectrum-global-color-magenta-600-rgb));--spectrum-global-color-magenta-700-rgb:255,143,185;--spectrum-global-color-magenta-700:rgb(var(--spectrum-global-color-magenta-700-rgb));--spectrum-global-color-fuchsia-400-rgb:205,57,206;--spectrum-global-color-fuchsia-400:rgb(var(--spectrum-global-color-fuchsia-400-rgb));--spectrum-global-color-fuchsia-500-rgb:223,81,224;--spectrum-global-color-fuchsia-500:rgb(var(--spectrum-global-color-fuchsia-500-rgb));--spectrum-global-color-fuchsia-600-rgb:235,110,236;--spectrum-global-color-fuchsia-600:rgb(var(--spectrum-global-color-fuchsia-600-rgb));--spectrum-global-color-fuchsia-700-rgb:244,140,242;--spectrum-global-color-fuchsia-700:rgb(var(--spectrum-global-color-fuchsia-700-rgb));--spectrum-global-color-purple-400-rgb:157,87,243;--spectrum-global-color-purple-400:rgb(var(--spectrum-global-color-purple-400-rgb));--spectrum-global-color-purple-500-rgb:172,111,249;--spectrum-global-color-purple-500:rgb(var(--spectrum-global-color-purple-500-rgb));--spectrum-global-color-purple-600-rgb:187,135,251;--spectrum-global-color-purple-600:rgb(var(--spectrum-global-color-purple-600-rgb));--spectrum-global-color-purple-700-rgb:202,159,252;--spectrum-global-color-purple-700:rgb(var(--spectrum-global-color-purple-700-rgb));--spectrum-global-color-indigo-400-rgb:104,109,244;--spectrum-global-color-indigo-400:rgb(var(--spectrum-global-color-indigo-400-rgb));--spectrum-global-color-indigo-500-rgb:124,129,251;--spectrum-global-color-indigo-500:rgb(var(--spectrum-global-color-indigo-500-rgb));--spectrum-global-color-indigo-600-rgb:145,149,255;--spectrum-global-color-indigo-600:rgb(var(--spectrum-global-color-indigo-600-rgb));--spectrum-global-color-indigo-700-rgb:167,170,255;--spectrum-global-color-indigo-700:rgb(var(--spectrum-global-color-indigo-700-rgb));--spectrum-global-color-seafoam-400-rgb:0,158,152;--spectrum-global-color-seafoam-400:rgb(var(--spectrum-global-color-seafoam-400-rgb));--spectrum-global-color-seafoam-500-rgb:3,178,171;--spectrum-global-color-seafoam-500:rgb(var(--spectrum-global-color-seafoam-500-rgb));--spectrum-global-color-seafoam-600-rgb:54,197,189;--spectrum-global-color-seafoam-600:rgb(var(--spectrum-global-color-seafoam-600-rgb));--spectrum-global-color-seafoam-700-rgb:93,214,207;--spectrum-global-color-seafoam-700:rgb(var(--spectrum-global-color-seafoam-700-rgb));--spectrum-global-color-red-400-rgb:234,56,41;--spectrum-global-color-red-400:rgb(var(--spectrum-global-color-red-400-rgb));--spectrum-global-color-red-500-rgb:246,88,67;--spectrum-global-color-red-500:rgb(var(--spectrum-global-color-red-500-rgb));--spectrum-global-color-red-600-rgb:255,117,94;--spectrum-global-color-red-600:rgb(var(--spectrum-global-color-red-600-rgb));--spectrum-global-color-red-700-rgb:255,149,129;--spectrum-global-color-red-700:rgb(var(--spectrum-global-color-red-700-rgb));--spectrum-global-color-orange-400-rgb:244,129,12;--spectrum-global-color-orange-400:rgb(var(--spectrum-global-color-orange-400-rgb));--spectrum-global-color-orange-500-rgb:254,154,46;--spectrum-global-color-orange-500:rgb(var(--spectrum-global-color-orange-500-rgb));--spectrum-global-color-orange-600-rgb:255,181,88;--spectrum-global-color-orange-600:rgb(var(--spectrum-global-color-orange-600-rgb));--spectrum-global-color-orange-700-rgb:253,206,136;--spectrum-global-color-orange-700:rgb(var(--spectrum-global-color-orange-700-rgb));--spectrum-global-color-green-400-rgb:18,162,108;--spectrum-global-color-green-400:rgb(var(--spectrum-global-color-green-400-rgb));--spectrum-global-color-green-500-rgb:43,180,125;--spectrum-global-color-green-500:rgb(var(--spectrum-global-color-green-500-rgb));--spectrum-global-color-green-600-rgb:67,199,143;--spectrum-global-color-green-600:rgb(var(--spectrum-global-color-green-600-rgb));--spectrum-global-color-green-700-rgb:94,217,162;--spectrum-global-color-green-700:rgb(var(--spectrum-global-color-green-700-rgb));--spectrum-global-color-blue-400-rgb:52,143,244;--spectrum-global-color-blue-400:rgb(var(--spectrum-global-color-blue-400-rgb));--spectrum-global-color-blue-500-rgb:84,163,246;--spectrum-global-color-blue-500:rgb(var(--spectrum-global-color-blue-500-rgb));--spectrum-global-color-blue-600-rgb:114,183,249;--spectrum-global-color-blue-600:rgb(var(--spectrum-global-color-blue-600-rgb));--spectrum-global-color-blue-700-rgb:143,202,252;--spectrum-global-color-blue-700:rgb(var(--spectrum-global-color-blue-700-rgb));--spectrum-global-color-gray-50-rgb:29,29,29;--spectrum-global-color-gray-50:rgb(var(--spectrum-global-color-gray-50-rgb));--spectrum-global-color-gray-75-rgb:38,38,38;--spectrum-global-color-gray-75:rgb(var(--spectrum-global-color-gray-75-rgb));--spectrum-global-color-gray-100-rgb:50,50,50;--spectrum-global-color-gray-100:rgb(var(--spectrum-global-color-gray-100-rgb));--spectrum-global-color-gray-200-rgb:63,63,63;--spectrum-global-color-gray-200:rgb(var(--spectrum-global-color-gray-200-rgb));--spectrum-global-color-gray-300-rgb:84,84,84;--spectrum-global-color-gray-300:rgb(var(--spectrum-global-color-gray-300-rgb));--spectrum-global-color-gray-400-rgb:112,112,112;--spectrum-global-color-gray-400:rgb(var(--spectrum-global-color-gray-400-rgb));--spectrum-global-color-gray-500-rgb:144,144,144;--spectrum-global-color-gray-500:rgb(var(--spectrum-global-color-gray-500-rgb));--spectrum-global-color-gray-600-rgb:178,178,178;--spectrum-global-color-gray-600:rgb(var(--spectrum-global-color-gray-600-rgb));--spectrum-global-color-gray-700-rgb:209,209,209;--spectrum-global-color-gray-700:rgb(var(--spectrum-global-color-gray-700-rgb));--spectrum-global-color-gray-800-rgb:235,235,235;--spectrum-global-color-gray-800:rgb(var(--spectrum-global-color-gray-800-rgb));--spectrum-global-color-gray-900-rgb:255,255,255;--spectrum-global-color-gray-900:rgb(var(--spectrum-global-color-gray-900-rgb));--spectrum-alias-background-color-primary:var(--spectrum-global-color-gray-100);--spectrum-alias-background-color-secondary:var(--spectrum-global-color-gray-75);--spectrum-alias-background-color-tertiary:var(--spectrum-global-color-gray-50);--spectrum-alias-background-color-modal-overlay:rgba(0,0,0,.5);--spectrum-alias-dropshadow-color:rgba(0,0,0,.5);--spectrum-alias-background-color-hover-overlay:hsla(0,0%,100%,.06);--spectrum-alias-highlight-hover:hsla(0,0%,100%,.07);--spectrum-alias-highlight-down:hsla(0,0%,100%,.1);--spectrum-alias-highlight-selected:rgba(84,163,246,.15);--spectrum-alias-highlight-selected-hover:rgba(84,163,246,.25);--spectrum-alias-text-highlight-color:rgba(84,163,246,.25);--spectrum-alias-background-color-quickactions:rgba(50,50,50,.9);--spectrum-alias-border-color-selected:var(--spectrum-global-color-blue-600);--spectrum-alias-border-color-translucent:hsla(0,0%,100%,.1);--spectrum-alias-radial-reaction-color-default:hsla(0,0%,92%,.6);--spectrum-alias-pasteboard-background-color:var(--spectrum-global-color-gray-50);--spectrum-alias-appframe-border-color:var(--spectrum-global-color-gray-50);--spectrum-alias-appframe-separator-color:var(--spectrum-global-color-gray-50);--spectrum-scrollbar-mac-s-track-background-color:var(--spectrum-global-color-gray-100);--spectrum-scrollbar-mac-m-track-background-color:var(--spectrum-global-color-gray-100);--spectrum-scrollbar-mac-l-track-background-color:var(--spectrum-global-color-gray-100);--spectrum-slider-s-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-ramp-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-range-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-ramp-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-range-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-ramp-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-range-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-ramp-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-range-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-ramp-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-range-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-ramp-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-range-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-ramp-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-range-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-ramp-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-range-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-ramp-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-range-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-ramp-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-range-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-ramp-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-range-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-ramp-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-range-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-ramp-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-range-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-ramp-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-range-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-ramp-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-range-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-ramp-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-range-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-well-background-color:hsla(0,0%,92%,.02);--spectrum-well-border-color:hsla(0,0%,100%,.05)}:host,:root{color-scheme:dark}:host,:root{--spectrum-overlay-opacity:0.5;--spectrum-drop-shadow-color:rgba(0,0,0,.5);--spectrum-background-base-color:var(--spectrum-gray-50);--spectrum-background-layer-1-color:var(--spectrum-gray-75);--spectrum-background-layer-2-color:var(--spectrum-gray-100);--spectrum-neutral-background-color-default:var(--spectrum-gray-400);--spectrum-neutral-background-color-hover:var(--spectrum-gray-300);--spectrum-neutral-background-color-down:var(--spectrum-gray-200);--spectrum-neutral-background-color-key-focus:var(--spectrum-gray-300);--spectrum-neutral-subdued-background-color-default:var(--spectrum-gray-400);--spectrum-neutral-subdued-background-color-hover:var(--spectrum-gray-300);--spectrum-neutral-subdued-background-color-down:var(--spectrum-gray-200);--spectrum-neutral-subdued-background-color-key-focus:var(--spectrum-gray-300);--spectrum-accent-background-color-default:var(--spectrum-accent-color-500);--spectrum-accent-background-color-hover:var(--spectrum-accent-color-400);--spectrum-accent-background-color-down:var(--spectrum-accent-color-300);--spectrum-accent-background-color-key-focus:var(--spectrum-accent-color-400);--spectrum-informative-background-color-default:var(--spectrum-informative-color-500);--spectrum-informative-background-color-hover:var(--spectrum-informative-color-400);--spectrum-informative-background-color-down:var(--spectrum-informative-color-300);--spectrum-informative-background-color-key-focus:var(--spectrum-informative-color-400);--spectrum-negative-background-color-default:var(--spectrum-negative-color-500);--spectrum-negative-background-color-hover:var(--spectrum-negative-color-400);--spectrum-negative-background-color-down:var(--spectrum-negative-color-300);--spectrum-negative-background-color-key-focus:var(--spectrum-negative-color-400);--spectrum-positive-background-color-default:var(--spectrum-positive-color-500);--spectrum-positive-background-color-hover:var(--spectrum-positive-color-400);--spectrum-positive-background-color-down:var(--spectrum-positive-color-300);--spectrum-positive-background-color-key-focus:var(--spectrum-positive-color-400);--spectrum-notice-background-color-default:var(--spectrum-notice-color-800);--spectrum-gray-background-color-default:var(--spectrum-gray-700);--spectrum-red-background-color-default:var(--spectrum-red-700);--spectrum-orange-background-color-default:var(--spectrum-orange-800);--spectrum-yellow-background-color-default:var(--spectrum-yellow-1000);--spectrum-chartreuse-background-color-default:var(--spectrum-chartreuse-900);--spectrum-celery-background-color-default:var(--spectrum-celery-800);--spectrum-green-background-color-default:var(--spectrum-green-700);--spectrum-seafoam-background-color-default:var(--spectrum-seafoam-700);--spectrum-cyan-background-color-default:var(--spectrum-cyan-700);--spectrum-blue-background-color-default:var(--spectrum-blue-700);--spectrum-indigo-background-color-default:var(--spectrum-indigo-700);--spectrum-purple-background-color-default:var(--spectrum-purple-700);--spectrum-fuchsia-background-color-default:var(--spectrum-fuchsia-700);--spectrum-magenta-background-color-default:var(--spectrum-magenta-700);--spectrum-neutral-visual-color:var(--spectrum-gray-600);--spectrum-accent-visual-color:var(--spectrum-accent-color-900);--spectrum-informative-visual-color:var(--spectrum-informative-color-900);--spectrum-negative-visual-color:var(--spectrum-negative-color-700);--spectrum-notice-visual-color:var(--spectrum-notice-color-900);--spectrum-positive-visual-color:var(--spectrum-positive-color-800);--spectrum-gray-visual-color:var(--spectrum-gray-600);--spectrum-red-visual-color:var(--spectrum-red-700);--spectrum-orange-visual-color:var(--spectrum-orange-900);--spectrum-yellow-visual-color:var(--spectrum-yellow-1100);--spectrum-chartreuse-visual-color:var(--spectrum-chartreuse-900);--spectrum-celery-visual-color:var(--spectrum-celery-800);--spectrum-green-visual-color:var(--spectrum-green-800);--spectrum-seafoam-visual-color:var(--spectrum-seafoam-800);--spectrum-cyan-visual-color:var(--spectrum-cyan-900);--spectrum-blue-visual-color:var(--spectrum-blue-900);--spectrum-indigo-visual-color:var(--spectrum-indigo-900);--spectrum-purple-visual-color:var(--spectrum-purple-900);--spectrum-fuchsia-visual-color:var(--spectrum-fuchsia-900);--spectrum-magenta-visual-color:var(--spectrum-magenta-900);--spectrum-opacity-checkerboard-square-dark:var(--spectrum-gray-800);--spectrum-gray-50:#1d1d1d;--spectrum-gray-75:#262626;--spectrum-gray-100:#323232;--spectrum-gray-200:#3f3f3f;--spectrum-gray-300:#545454;--spectrum-gray-400:#707070;--spectrum-gray-500:#909090;--spectrum-gray-600:#b2b2b2;--spectrum-gray-700:#d1d1d1;--spectrum-gray-800:#ebebeb;--spectrum-gray-900:#fff;--spectrum-blue-100:#003877;--spectrum-blue-200:#00418a;--spectrum-blue-300:#004da3;--spectrum-blue-400:#0059c2;--spectrum-blue-500:#0367e0;--spectrum-blue-600:#1379f3;--spectrum-blue-700:#348ff4;--spectrum-blue-800:#54a3f6;--spectrum-blue-900:#72b7f9;--spectrum-blue-1000:#8fcafc;--spectrum-blue-1100:#aedbfe;--spectrum-blue-1200:#cce9ff;--spectrum-blue-1300:#e8f6ff;--spectrum-blue-1400:#fff;--spectrum-red-100:#7b0000;--spectrum-red-200:#8d0000;--spectrum-red-300:#a50000;--spectrum-red-400:#be0403;--spectrum-red-500:#d71913;--spectrum-red-600:#ea3829;--spectrum-red-700:#f65843;--spectrum-red-800:#ff755e;--spectrum-red-900:#ff9581;--spectrum-red-1000:#ffb0a1;--spectrum-red-1100:#ffc9bd;--spectrum-red-1200:#ffded8;--spectrum-red-1300:#fff1ee;--spectrum-red-1400:#fff;--spectrum-orange-100:#662500;--spectrum-orange-200:#752d00;--spectrum-orange-300:#893700;--spectrum-orange-400:#9e4200;--spectrum-orange-500:#b44e00;--spectrum-orange-600:#ca5d00;--spectrum-orange-700:#e16d00;--spectrum-orange-800:#f4810c;--spectrum-orange-900:#fe9a2e;--spectrum-orange-1000:#ffb558;--spectrum-orange-1100:#fdce88;--spectrum-orange-1200:#ffe1b3;--spectrum-orange-1300:#fff2dd;--spectrum-orange-1400:#fffdf9;--spectrum-yellow-100:#4c3600;--spectrum-yellow-200:#584000;--spectrum-yellow-300:#674c00;--spectrum-yellow-400:#775900;--spectrum-yellow-500:#886800;--spectrum-yellow-600:#9b7800;--spectrum-yellow-700:#ae8900;--spectrum-yellow-800:#c09c00;--spectrum-yellow-900:#d3ae00;--spectrum-yellow-1000:#e4c200;--spectrum-yellow-1100:#f4d500;--spectrum-yellow-1200:#f9e85c;--spectrum-yellow-1300:#fcf6bb;--spectrum-yellow-1400:#fff;--spectrum-chartreuse-100:#304000;--spectrum-chartreuse-200:#374a00;--spectrum-chartreuse-300:#415700;--spectrum-chartreuse-400:#4c6600;--spectrum-chartreuse-500:#597600;--spectrum-chartreuse-600:#680;--spectrum-chartreuse-700:#759a00;--spectrum-chartreuse-800:#84ad01;--spectrum-chartreuse-900:#94c008;--spectrum-chartreuse-1000:#a6d312;--spectrum-chartreuse-1100:#b8e525;--spectrum-chartreuse-1200:#cdf547;--spectrum-chartreuse-1300:#e7fe9a;--spectrum-chartreuse-1400:#fff;--spectrum-celery-100:#00450a;--spectrum-celery-200:#00500c;--spectrum-celery-300:#005e0e;--spectrum-celery-400:#006d0f;--spectrum-celery-500:#007f0f;--spectrum-celery-600:#009112;--spectrum-celery-700:#04a51e;--spectrum-celery-800:#22b833;--spectrum-celery-900:#44ca49;--spectrum-celery-1000:#69dc63;--spectrum-celery-1100:#8eeb7f;--spectrum-celery-1200:#b4f7a2;--spectrum-celery-1300:#ddfdd3;--spectrum-celery-1400:#fff;--spectrum-green-100:#044329;--spectrum-green-200:#004e2f;--spectrum-green-300:#005c38;--spectrum-green-400:#006c43;--spectrum-green-500:#007d4e;--spectrum-green-600:#008f5d;--spectrum-green-700:#12a26c;--spectrum-green-800:#2bb47d;--spectrum-green-900:#43c78f;--spectrum-green-1000:#5ed9a2;--spectrum-green-1100:#81e9b8;--spectrum-green-1200:#b1f4d1;--spectrum-green-1300:#dffaea;--spectrum-green-1400:#fefffc;--spectrum-seafoam-100:#12413f;--spectrum-seafoam-200:#0e4c49;--spectrum-seafoam-300:#045a57;--spectrum-seafoam-400:#006965;--spectrum-seafoam-500:#007a75;--spectrum-seafoam-600:#008c87;--spectrum-seafoam-700:#009e98;--spectrum-seafoam-800:#03b2ab;--spectrum-seafoam-900:#36c5bd;--spectrum-seafoam-1000:#5dd6cf;--spectrum-seafoam-1100:#84e6df;--spectrum-seafoam-1200:#b0f2ec;--spectrum-seafoam-1300:#dff9f6;--spectrum-seafoam-1400:#fefffe;--spectrum-cyan-100:#003d62;--spectrum-cyan-200:#00476f;--spectrum-cyan-300:#00557f;--spectrum-cyan-400:#006491;--spectrum-cyan-500:#0074a2;--spectrum-cyan-600:#0086b4;--spectrum-cyan-700:#0099c6;--spectrum-cyan-800:#0eadd7;--spectrum-cyan-900:#2cc1e6;--spectrum-cyan-1000:#54d3f1;--spectrum-cyan-1100:#7fe4f9;--spectrum-cyan-1200:#a7f1ff;--spectrum-cyan-1300:#d7faff;--spectrum-cyan-1400:#fff;--spectrum-indigo-100:#282c8c;--spectrum-indigo-200:#2f34a3;--spectrum-indigo-300:#393fbb;--spectrum-indigo-400:#464bd3;--spectrum-indigo-500:#555be7;--spectrum-indigo-600:#686df4;--spectrum-indigo-700:#7c81fb;--spectrum-indigo-800:#9195ff;--spectrum-indigo-900:#a7aaff;--spectrum-indigo-1000:#bcbeff;--spectrum-indigo-1100:#d0d2ff;--spectrum-indigo-1200:#e2e4ff;--spectrum-indigo-1300:#f3f3fe;--spectrum-indigo-1400:#fff;--spectrum-purple-100:#4c0d9d;--spectrum-purple-200:#5911b1;--spectrum-purple-300:#691cc8;--spectrum-purple-400:#7a2dda;--spectrum-purple-500:#8c41e9;--spectrum-purple-600:#9d57f3;--spectrum-purple-700:#ac6ff9;--spectrum-purple-800:#bb87fb;--spectrum-purple-900:#ca9ffc;--spectrum-purple-1000:#d7b6fe;--spectrum-purple-1100:#e4ccfe;--spectrum-purple-1200:#efdfff;--spectrum-purple-1300:#f9f0ff;--spectrum-purple-1400:#fffdff;--spectrum-fuchsia-100:#6b036a;--spectrum-fuchsia-200:#7b007b;--spectrum-fuchsia-300:#900091;--spectrum-fuchsia-400:#a50da6;--spectrum-fuchsia-500:#b925b9;--spectrum-fuchsia-600:#cd39ce;--spectrum-fuchsia-700:#df51e0;--spectrum-fuchsia-800:#eb6eec;--spectrum-fuchsia-900:#f48cf2;--spectrum-fuchsia-1000:#faa8f5;--spectrum-fuchsia-1100:#fec2f8;--spectrum-fuchsia-1200:#ffdbfa;--spectrum-fuchsia-1300:#ffeffc;--spectrum-fuchsia-1400:#fffdff;--spectrum-magenta-100:#76003a;--spectrum-magenta-200:#890042;--spectrum-magenta-300:#a0004d;--spectrum-magenta-400:#b6125a;--spectrum-magenta-500:#cb266d;--spectrum-magenta-600:#de3d82;--spectrum-magenta-700:#ed5795;--spectrum-magenta-800:#f972a7;--spectrum-magenta-900:#ff8fb9;--spectrum-magenta-1000:#ffacca;--spectrum-magenta-1100:#ffc6da;--spectrum-magenta-1200:#ffdde9;--spectrum-magenta-1300:#fff0f5;--spectrum-magenta-1400:#fffcfd}
`,o=["spectrum","express"],r=["medium","large","medium-express","large-express"],s=["light","lightest","dark","darkest","light-express","lightest-express","dark-express","darkest-express"],c=class extends HTMLElement{constructor(){super(),this._dir="",this._theme="spectrum",this._color="",this._scale="",this.trackedChildren=new Set,this._updateRequested=!1,this._contextConsumers=new Map,this.attachShadow({mode:"open"});const t=document.importNode(c.template.content,!0);this.shadowRoot.appendChild(t),this.shouldAdoptStyles(),this.addEventListener("sp-query-theme",this.onQueryTheme),this.addEventListener("sp-language-context",this._handleContextPresence),this.updateComplete=this.__createDeferredPromise()}static get observedAttributes(){return["color","scale","theme","lang","dir"]}set dir(t){if(t===this.dir)return;this.setAttribute("dir",t),this._dir=t;const e="rtl"===t?t:"ltr";this.trackedChildren.forEach((t=>{t.setAttribute("dir",e)}))}get dir(){return this._dir}attributeChangedCallback(t,e,o){e!==o&&("color"===t?this.color=o:"scale"===t?this.scale=o:"lang"===t&&o?(this.lang=o,this._provideContext()):"theme"===t?this.theme=o:"dir"===t&&(this.dir=o))}requestUpdate(){void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?this.shouldAdoptStyles():window.ShadyCSS.styleElement(this)}get theme(){const t=c.themeFragmentsByKind.get("theme"),{name:e}=t&&t.get("default")||{};return this._theme||e||""}set theme(t){if(t===this._theme)return;const e=t&&o.includes(t)?t:this.theme;e!==this._theme&&(this._theme=e,this.requestUpdate()),e?this.setAttribute("theme",e):this.removeAttribute("theme")}get color(){const t=c.themeFragmentsByKind.get("color"),{name:e}=t&&t.get("default")||{};return this._color||e||""}set color(t){if(t===this._color)return;const e=t&&s.includes(t)?t:this.color;e!==this._color&&(this._color=e,this.requestUpdate()),e?this.setAttribute("color",e):this.removeAttribute("color")}get scale(){const t=c.themeFragmentsByKind.get("scale"),{name:e}=t&&t.get("default")||{};return this._scale||e||""}set scale(t){if(t===this._scale)return;const e=t&&r.includes(t)?t:this.scale;e!==this._scale&&(this._scale=e,this.requestUpdate()),e?this.setAttribute("scale",e):this.removeAttribute("scale")}get styles(){const t=[...c.themeFragmentsByKind.keys()],e=(t,e,o)=>{const r=o&&"theme"!==o&&"express"===this.theme?t.get(`${e}-express`):t.get(e),s="spectrum"===e||!o||this.hasAttribute(o);if(r&&s)return r.styles};return[...t.reduce(((t,o)=>{const r=c.themeFragmentsByKind.get(o);let s;if("app"===o||"core"===o)s=e(r,o);else{const{[o]:t}=this;s=e(r,t,o)}return s&&t.push(s),t}),[])]}static get template(){return this.templateElement||(this.templateElement=document.createElement("template"),this.templateElement.innerHTML="<slot></slot>"),this.templateElement}__createDeferredPromise(){return new Promise((t=>{this.__resolve=t}))}onQueryTheme(t){if(t.defaultPrevented)return;t.preventDefault();const{detail:e}=t;e.color=this.color||void 0,e.scale=this.scale||void 0,e.lang=this.lang||document.documentElement.lang||navigator.language,e.theme=this.theme||void 0}connectedCallback(){if(this.shouldAdoptStyles(),void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this),c.instances.add(this),!this.hasAttribute("dir")){let t=this.assignedSlot||this.parentNode;for(;t!==document.documentElement&&!(t instanceof c);)t=t.assignedSlot||t.parentNode||t.host;this.dir="rtl"===t.dir?t.dir:"ltr"}}disconnectedCallback(){c.instances.delete(this)}startManagingContentDirection(t){this.trackedChildren.add(t)}stopManagingContentDirection(t){this.trackedChildren.delete(t)}async shouldAdoptStyles(){this._updateRequested||(this.updateComplete=this.__createDeferredPromise(),this._updateRequested=!0,this._updateRequested=await!1,this.adoptStyles(),this.__resolve(!0))}adoptStyles(){const e=this.styles;if(void 0!==window.ShadyCSS&&!window.ShadyCSS.nativeShadow&&window.ShadyCSS.ScopingShim){const t=[];for(const[e,o]of c.themeFragmentsByKind)for(const[r,{styles:s}]of o){if("default"===r)continue;let o=s.cssText;c.defaultFragments.has(r)||(o=o.replace(":host",`:host([${e}='${r}'])`)),t.push(o)}window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t,this.localName),window.ShadyCSS.prepareTemplate(c.template,this.localName)}else if(t.FV){const t=[];for(const o of e)t.push(o.styleSheet);this.shadowRoot.adoptedStyleSheets=t}else this.shadowRoot.querySelectorAll("style").forEach((t=>t.remove())),e.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.shadowRoot.appendChild(e)}))}static registerThemeFragment(t,e,o){const r=c.themeFragmentsByKind.get(e)||new Map;0===r.size&&(c.themeFragmentsByKind.set(e,r),r.set("default",{name:t,styles:o}),c.defaultFragments.add(t)),r.set(t,{name:t,styles:o}),c.instances.forEach((t=>t.shouldAdoptStyles()))}_provideContext(){this._contextConsumers.forEach((([t,e])=>t(this.lang,e)))}_handleContextPresence(t){const e=t.composedPath()[0];if(this._contextConsumers.has(e))return;this._contextConsumers.set(e,[t.detail.callback,()=>this._contextConsumers.delete(e)]);const[o,r]=this._contextConsumers.get(e)||[];o&&r&&o(this.lang||document.documentElement.lang||navigator.language,r)}};let i=c;i.themeFragmentsByKind=new Map,i.defaultFragments=new Set(["spectrum"]),i.instances=new Set;const n=t.iv`
:host,:root{--spectrum-global-animation-linear:cubic-bezier(0,0,1,1);--spectrum-global-animation-duration-0:0ms;--spectrum-global-animation-duration-100:130ms;--spectrum-global-animation-duration-200:160ms;--spectrum-global-animation-duration-300:190ms;--spectrum-global-animation-duration-400:220ms;--spectrum-global-animation-duration-500:250ms;--spectrum-global-animation-duration-600:300ms;--spectrum-global-animation-duration-700:350ms;--spectrum-global-animation-duration-800:400ms;--spectrum-global-animation-duration-900:450ms;--spectrum-global-animation-duration-1000:500ms;--spectrum-global-animation-duration-2000:1000ms;--spectrum-global-animation-duration-4000:2000ms;--spectrum-global-animation-ease-in-out:cubic-bezier(.45,0,.40,1);--spectrum-global-animation-ease-in:cubic-bezier(.50,0,1,1);--spectrum-global-animation-ease-out:cubic-bezier(0,0,0.40,1);--spectrum-global-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1.0;--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-black:rgb(var(--spectrum-global-color-static-black-rgb));--spectrum-global-color-static-white-rgb:255,255,255;--spectrum-global-color-static-white:rgb(var(--spectrum-global-color-static-white-rgb));--spectrum-global-color-static-blue-rgb:0,87,191;--spectrum-global-color-static-blue:rgb(var(--spectrum-global-color-static-blue-rgb));--spectrum-global-color-static-gray-50-rgb:255,255,255;--spectrum-global-color-static-gray-50:rgb(var(--spectrum-global-color-static-gray-50-rgb));--spectrum-global-color-static-gray-75-rgb:255,255,255;--spectrum-global-color-static-gray-75:rgb(var(--spectrum-global-color-static-gray-75-rgb));--spectrum-global-color-static-gray-100-rgb:255,255,255;--spectrum-global-color-static-gray-100:rgb(var(--spectrum-global-color-static-gray-100-rgb));--spectrum-global-color-static-gray-200-rgb:235,235,235;--spectrum-global-color-static-gray-200:rgb(var(--spectrum-global-color-static-gray-200-rgb));--spectrum-global-color-static-gray-300-rgb:217,217,217;--spectrum-global-color-static-gray-300:rgb(var(--spectrum-global-color-static-gray-300-rgb));--spectrum-global-color-static-gray-400-rgb:179,179,179;--spectrum-global-color-static-gray-400:rgb(var(--spectrum-global-color-static-gray-400-rgb));--spectrum-global-color-static-gray-500-rgb:146,146,146;--spectrum-global-color-static-gray-500:rgb(var(--spectrum-global-color-static-gray-500-rgb));--spectrum-global-color-static-gray-600-rgb:110,110,110;--spectrum-global-color-static-gray-600:rgb(var(--spectrum-global-color-static-gray-600-rgb));--spectrum-global-color-static-gray-700-rgb:71,71,71;--spectrum-global-color-static-gray-700:rgb(var(--spectrum-global-color-static-gray-700-rgb));--spectrum-global-color-static-gray-800-rgb:34,34,34;--spectrum-global-color-static-gray-800:rgb(var(--spectrum-global-color-static-gray-800-rgb));--spectrum-global-color-static-gray-900-rgb:0,0,0;--spectrum-global-color-static-gray-900:rgb(var(--spectrum-global-color-static-gray-900-rgb));--spectrum-global-color-static-red-400-rgb:237,64,48;--spectrum-global-color-static-red-400:rgb(var(--spectrum-global-color-static-red-400-rgb));--spectrum-global-color-static-red-500-rgb:217,28,21;--spectrum-global-color-static-red-500:rgb(var(--spectrum-global-color-static-red-500-rgb));--spectrum-global-color-static-red-600-rgb:187,2,2;--spectrum-global-color-static-red-600:rgb(var(--spectrum-global-color-static-red-600-rgb));--spectrum-global-color-static-red-700-rgb:154,0,0;--spectrum-global-color-static-red-700:rgb(var(--spectrum-global-color-static-red-700-rgb));--spectrum-global-color-static-red-800-rgb:124,0,0;--spectrum-global-color-static-red-800:rgb(var(--spectrum-global-color-static-red-800-rgb));--spectrum-global-color-static-orange-400-rgb:250,139,26;--spectrum-global-color-static-orange-400:rgb(var(--spectrum-global-color-static-orange-400-rgb));--spectrum-global-color-static-orange-500-rgb:233,117,0;--spectrum-global-color-static-orange-500:rgb(var(--spectrum-global-color-static-orange-500-rgb));--spectrum-global-color-static-orange-600-rgb:209,97,0;--spectrum-global-color-static-orange-600:rgb(var(--spectrum-global-color-static-orange-600-rgb));--spectrum-global-color-static-orange-700-rgb:182,80,0;--spectrum-global-color-static-orange-700:rgb(var(--spectrum-global-color-static-orange-700-rgb));--spectrum-global-color-static-orange-800-rgb:155,64,0;--spectrum-global-color-static-orange-800:rgb(var(--spectrum-global-color-static-orange-800-rgb));--spectrum-global-color-static-yellow-200-rgb:250,237,123;--spectrum-global-color-static-yellow-200:rgb(var(--spectrum-global-color-static-yellow-200-rgb));--spectrum-global-color-static-yellow-300-rgb:250,224,23;--spectrum-global-color-static-yellow-300:rgb(var(--spectrum-global-color-static-yellow-300-rgb));--spectrum-global-color-static-yellow-400-rgb:238,205,0;--spectrum-global-color-static-yellow-400:rgb(var(--spectrum-global-color-static-yellow-400-rgb));--spectrum-global-color-static-yellow-500-rgb:221,185,0;--spectrum-global-color-static-yellow-500:rgb(var(--spectrum-global-color-static-yellow-500-rgb));--spectrum-global-color-static-yellow-600-rgb:201,164,0;--spectrum-global-color-static-yellow-600:rgb(var(--spectrum-global-color-static-yellow-600-rgb));--spectrum-global-color-static-yellow-700-rgb:181,144,0;--spectrum-global-color-static-yellow-700:rgb(var(--spectrum-global-color-static-yellow-700-rgb));--spectrum-global-color-static-yellow-800-rgb:160,125,0;--spectrum-global-color-static-yellow-800:rgb(var(--spectrum-global-color-static-yellow-800-rgb));--spectrum-global-color-static-chartreuse-300-rgb:176,222,27;--spectrum-global-color-static-chartreuse-300:rgb(var(--spectrum-global-color-static-chartreuse-300-rgb));--spectrum-global-color-static-chartreuse-400-rgb:157,203,13;--spectrum-global-color-static-chartreuse-400:rgb(var(--spectrum-global-color-static-chartreuse-400-rgb));--spectrum-global-color-static-chartreuse-500-rgb:139,182,4;--spectrum-global-color-static-chartreuse-500:rgb(var(--spectrum-global-color-static-chartreuse-500-rgb));--spectrum-global-color-static-chartreuse-600-rgb:122,162,0;--spectrum-global-color-static-chartreuse-600:rgb(var(--spectrum-global-color-static-chartreuse-600-rgb));--spectrum-global-color-static-chartreuse-700-rgb:106,141,0;--spectrum-global-color-static-chartreuse-700:rgb(var(--spectrum-global-color-static-chartreuse-700-rgb));--spectrum-global-color-static-chartreuse-800-rgb:90,120,0;--spectrum-global-color-static-chartreuse-800:rgb(var(--spectrum-global-color-static-chartreuse-800-rgb));--spectrum-global-color-static-celery-200-rgb:126,229,114;--spectrum-global-color-static-celery-200:rgb(var(--spectrum-global-color-static-celery-200-rgb));--spectrum-global-color-static-celery-300-rgb:87,212,86;--spectrum-global-color-static-celery-300:rgb(var(--spectrum-global-color-static-celery-300-rgb));--spectrum-global-color-static-celery-400-rgb:48,193,61;--spectrum-global-color-static-celery-400:rgb(var(--spectrum-global-color-static-celery-400-rgb));--spectrum-global-color-static-celery-500-rgb:15,172,38;--spectrum-global-color-static-celery-500:rgb(var(--spectrum-global-color-static-celery-500-rgb));--spectrum-global-color-static-celery-600-rgb:0,150,20;--spectrum-global-color-static-celery-600:rgb(var(--spectrum-global-color-static-celery-600-rgb));--spectrum-global-color-static-celery-700-rgb:0,128,15;--spectrum-global-color-static-celery-700:rgb(var(--spectrum-global-color-static-celery-700-rgb));--spectrum-global-color-static-celery-800-rgb:0,107,15;--spectrum-global-color-static-celery-800:rgb(var(--spectrum-global-color-static-celery-800-rgb));--spectrum-global-color-static-green-400-rgb:29,169,115;--spectrum-global-color-static-green-400:rgb(var(--spectrum-global-color-static-green-400-rgb));--spectrum-global-color-static-green-500-rgb:0,148,97;--spectrum-global-color-static-green-500:rgb(var(--spectrum-global-color-static-green-500-rgb));--spectrum-global-color-static-green-600-rgb:0,126,80;--spectrum-global-color-static-green-600:rgb(var(--spectrum-global-color-static-green-600-rgb));--spectrum-global-color-static-green-700-rgb:0,105,65;--spectrum-global-color-static-green-700:rgb(var(--spectrum-global-color-static-green-700-rgb));--spectrum-global-color-static-green-800-rgb:0,86,53;--spectrum-global-color-static-green-800:rgb(var(--spectrum-global-color-static-green-800-rgb));--spectrum-global-color-static-seafoam-200-rgb:75,206,199;--spectrum-global-color-static-seafoam-200:rgb(var(--spectrum-global-color-static-seafoam-200-rgb));--spectrum-global-color-static-seafoam-300-rgb:32,187,180;--spectrum-global-color-static-seafoam-300:rgb(var(--spectrum-global-color-static-seafoam-300-rgb));--spectrum-global-color-static-seafoam-400-rgb:0,166,160;--spectrum-global-color-static-seafoam-400:rgb(var(--spectrum-global-color-static-seafoam-400-rgb));--spectrum-global-color-static-seafoam-500-rgb:0,145,139;--spectrum-global-color-static-seafoam-500:rgb(var(--spectrum-global-color-static-seafoam-500-rgb));--spectrum-global-color-static-seafoam-600-rgb:0,124,118;--spectrum-global-color-static-seafoam-600:rgb(var(--spectrum-global-color-static-seafoam-600-rgb));--spectrum-global-color-static-seafoam-700-rgb:0,103,99;--spectrum-global-color-static-seafoam-700:rgb(var(--spectrum-global-color-static-seafoam-700-rgb));--spectrum-global-color-static-seafoam-800-rgb:10,83,80;--spectrum-global-color-static-seafoam-800:rgb(var(--spectrum-global-color-static-seafoam-800-rgb));--spectrum-global-color-static-blue-200-rgb:130,193,251;--spectrum-global-color-static-blue-200:rgb(var(--spectrum-global-color-static-blue-200-rgb));--spectrum-global-color-static-blue-300-rgb:98,173,247;--spectrum-global-color-static-blue-300:rgb(var(--spectrum-global-color-static-blue-300-rgb));--spectrum-global-color-static-blue-400-rgb:66,151,244;--spectrum-global-color-static-blue-400:rgb(var(--spectrum-global-color-static-blue-400-rgb));--spectrum-global-color-static-blue-500-rgb:27,127,245;--spectrum-global-color-static-blue-500:rgb(var(--spectrum-global-color-static-blue-500-rgb));--spectrum-global-color-static-blue-600-rgb:4,105,227;--spectrum-global-color-static-blue-600:rgb(var(--spectrum-global-color-static-blue-600-rgb));--spectrum-global-color-static-blue-700-rgb:0,87,190;--spectrum-global-color-static-blue-700:rgb(var(--spectrum-global-color-static-blue-700-rgb));--spectrum-global-color-static-blue-800-rgb:0,72,153;--spectrum-global-color-static-blue-800:rgb(var(--spectrum-global-color-static-blue-800-rgb));--spectrum-global-color-static-indigo-200-rgb:178,181,255;--spectrum-global-color-static-indigo-200:rgb(var(--spectrum-global-color-static-indigo-200-rgb));--spectrum-global-color-static-indigo-300-rgb:155,159,255;--spectrum-global-color-static-indigo-300:rgb(var(--spectrum-global-color-static-indigo-300-rgb));--spectrum-global-color-static-indigo-400-rgb:132,137,253;--spectrum-global-color-static-indigo-400:rgb(var(--spectrum-global-color-static-indigo-400-rgb));--spectrum-global-color-static-indigo-500-rgb:109,115,246;--spectrum-global-color-static-indigo-500:rgb(var(--spectrum-global-color-static-indigo-500-rgb));--spectrum-global-color-static-indigo-600-rgb:87,93,232;--spectrum-global-color-static-indigo-600:rgb(var(--spectrum-global-color-static-indigo-600-rgb));--spectrum-global-color-static-indigo-700-rgb:68,74,208;--spectrum-global-color-static-indigo-700:rgb(var(--spectrum-global-color-static-indigo-700-rgb));--spectrum-global-color-static-indigo-800-rgb:68,74,208;--spectrum-global-color-static-indigo-800:rgb(var(--spectrum-global-color-static-indigo-800-rgb));--spectrum-global-color-static-purple-400-rgb:178,121,250;--spectrum-global-color-static-purple-400:rgb(var(--spectrum-global-color-static-purple-400-rgb));--spectrum-global-color-static-purple-500-rgb:161,93,246;--spectrum-global-color-static-purple-500:rgb(var(--spectrum-global-color-static-purple-500-rgb));--spectrum-global-color-static-purple-600-rgb:142,67,234;--spectrum-global-color-static-purple-600:rgb(var(--spectrum-global-color-static-purple-600-rgb));--spectrum-global-color-static-purple-700-rgb:120,43,216;--spectrum-global-color-static-purple-700:rgb(var(--spectrum-global-color-static-purple-700-rgb));--spectrum-global-color-static-purple-800-rgb:98,23,190;--spectrum-global-color-static-purple-800:rgb(var(--spectrum-global-color-static-purple-800-rgb));--spectrum-global-color-static-fuchsia-400-rgb:228,93,230;--spectrum-global-color-static-fuchsia-400:rgb(var(--spectrum-global-color-static-fuchsia-400-rgb));--spectrum-global-color-static-fuchsia-500-rgb:211,63,212;--spectrum-global-color-static-fuchsia-500:rgb(var(--spectrum-global-color-static-fuchsia-500-rgb));--spectrum-global-color-static-fuchsia-600-rgb:188,39,187;--spectrum-global-color-static-fuchsia-600:rgb(var(--spectrum-global-color-static-fuchsia-600-rgb));--spectrum-global-color-static-fuchsia-700-rgb:163,10,163;--spectrum-global-color-static-fuchsia-700:rgb(var(--spectrum-global-color-static-fuchsia-700-rgb));--spectrum-global-color-static-fuchsia-800-rgb:135,0,136;--spectrum-global-color-static-fuchsia-800:rgb(var(--spectrum-global-color-static-fuchsia-800-rgb));--spectrum-global-color-static-magenta-200-rgb:253,127,175;--spectrum-global-color-static-magenta-200:rgb(var(--spectrum-global-color-static-magenta-200-rgb));--spectrum-global-color-static-magenta-300-rgb:242,98,157;--spectrum-global-color-static-magenta-300:rgb(var(--spectrum-global-color-static-magenta-300-rgb));--spectrum-global-color-static-magenta-400-rgb:226,68,135;--spectrum-global-color-static-magenta-400:rgb(var(--spectrum-global-color-static-magenta-400-rgb));--spectrum-global-color-static-magenta-500-rgb:205,40,111;--spectrum-global-color-static-magenta-500:rgb(var(--spectrum-global-color-static-magenta-500-rgb));--spectrum-global-color-static-magenta-600-rgb:179,15,89;--spectrum-global-color-static-magenta-600:rgb(var(--spectrum-global-color-static-magenta-600-rgb));--spectrum-global-color-static-magenta-700-rgb:149,0,72;--spectrum-global-color-static-magenta-700:rgb(var(--spectrum-global-color-static-magenta-700-rgb));--spectrum-global-color-static-magenta-800-rgb:119,0,58;--spectrum-global-color-static-magenta-800:rgb(var(--spectrum-global-color-static-magenta-800-rgb));--spectrum-global-color-static-transparent-white-200:hsla(0,0%,100%,.1);--spectrum-global-color-static-transparent-white-300:hsla(0,0%,100%,.25);--spectrum-global-color-static-transparent-white-400:hsla(0,0%,100%,.4);--spectrum-global-color-static-transparent-white-500:hsla(0,0%,100%,.55);--spectrum-global-color-static-transparent-white-600:hsla(0,0%,100%,.7);--spectrum-global-color-static-transparent-white-700:hsla(0,0%,100%,.8);--spectrum-global-color-static-transparent-white-800:hsla(0,0%,100%,.9);--spectrum-global-color-static-transparent-white-900-rgb:255,255,255;--spectrum-global-color-static-transparent-white-900:rgb(var(--spectrum-global-color-static-transparent-white-900-rgb));--spectrum-global-color-static-transparent-black-200:rgba(0,0,0,.1);--spectrum-global-color-static-transparent-black-300:rgba(0,0,0,.25);--spectrum-global-color-static-transparent-black-400:rgba(0,0,0,.4);--spectrum-global-color-static-transparent-black-500:rgba(0,0,0,.55);--spectrum-global-color-static-transparent-black-600:rgba(0,0,0,.7);--spectrum-global-color-static-transparent-black-700:rgba(0,0,0,.8);--spectrum-global-color-static-transparent-black-800:rgba(0,0,0,.9);--spectrum-global-color-static-transparent-black-900-rgb:0,0,0;--spectrum-global-color-static-transparent-black-900:rgb(var(--spectrum-global-color-static-transparent-black-900-rgb));--spectrum-global-color-sequential-cerulean:#e9fff1,#c8f1e4,#a5e3d7,#82d5ca,#68c5c1,#54b4ba,#3fa2b2,#2991ac,#2280a2,#1f6d98,#1d5c8d,#1a4b83,#1a3979,#1a266f,#191264,#180057;--spectrum-global-color-sequential-forest:#ffffdf,#e2f6ba,#c4eb95,#a4e16d,#8dd366,#77c460,#5fb65a,#48a754,#36984f,#2c894d,#237a4a,#196b47,#105c45,#094d41,#033f3e,#00313a;--spectrum-global-color-sequential-rose:#fff4dd,#ffddd7,#ffc5d2,#feaecb,#fa96c4,#f57ebd,#ef64b5,#e846ad,#d238a1,#bb2e96,#a3248c,#8a1b83,#71167c,#560f74,#370b6e,#000968;--spectrum-global-color-diverging-orange-yellow-seafoam:#580000,#79260b,#9c4511,#bd651a,#dd8629,#f5ad52,#fed693,#ffffe0,#bbe4d1,#76c7be,#3ea8a6,#208288,#076769,#00494b,#002c2d;--spectrum-global-color-diverging-red-yellow-blue:#4a001e,#751232,#a52747,#c65154,#e47961,#f0a882,#fad4ac,#ffffe0,#bce2cf,#89c0c4,#579eb9,#397aa8,#1c5796,#163771,#10194d;--spectrum-global-color-diverging-red-blue:#4a001e,#731331,#9f2945,#cc415a,#e06e85,#ed9ab0,#f8c3d9,#faf0ff,#c6d0f2,#92b2de,#5d94cb,#2f74b3,#265191,#163670,#0b194c;--spectrum-semantic-negative-background-color:var(--spectrum-global-color-static-red-600);--spectrum-semantic-negative-color-default:var(--spectrum-global-color-red-500);--spectrum-semantic-negative-color-hover:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-color-dark:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-border-color:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-icon-color:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-status-color:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-text-color-large:var(--spectrum-global-color-red-500);--spectrum-semantic-negative-text-color-small:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-text-color-small-hover:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-text-color-small-down:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-text-color-small-key-focus:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-color-down:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-color-key-focus:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-background-color-default:var(--spectrum-global-color-static-red-600);--spectrum-semantic-negative-background-color-hover:var(--spectrum-global-color-static-red-700);--spectrum-semantic-negative-background-color-down:var(--spectrum-global-color-static-red-800);--spectrum-semantic-negative-background-color-key-focus:var(--spectrum-global-color-static-red-700);--spectrum-semantic-notice-background-color:var(--spectrum-global-color-static-orange-600);--spectrum-semantic-notice-color-default:var(--spectrum-global-color-orange-500);--spectrum-semantic-notice-color-dark:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-border-color:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-icon-color:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-status-color:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-text-color-large:var(--spectrum-global-color-orange-500);--spectrum-semantic-notice-text-color-small:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-color-down:var(--spectrum-global-color-orange-700);--spectrum-semantic-notice-color-key-focus:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-background-color-default:var(--spectrum-global-color-static-orange-600);--spectrum-semantic-notice-background-color-hover:var(--spectrum-global-color-static-orange-700);--spectrum-semantic-notice-background-color-down:var(--spectrum-global-color-static-orange-800);--spectrum-semantic-notice-background-color-key-focus:var(--spectrum-global-color-static-orange-700);--spectrum-semantic-positive-background-color:var(--spectrum-global-color-static-green-600);--spectrum-semantic-positive-color-default:var(--spectrum-global-color-green-500);--spectrum-semantic-positive-color-dark:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-border-color:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-icon-color:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-status-color:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-text-color-large:var(--spectrum-global-color-green-500);--spectrum-semantic-positive-text-color-small:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-color-down:var(--spectrum-global-color-green-700);--spectrum-semantic-positive-color-key-focus:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-background-color-default:var(--spectrum-global-color-static-green-600);--spectrum-semantic-positive-background-color-hover:var(--spectrum-global-color-static-green-700);--spectrum-semantic-positive-background-color-down:var(--spectrum-global-color-static-green-800);--spectrum-semantic-positive-background-color-key-focus:var(--spectrum-global-color-static-green-700);--spectrum-semantic-informative-background-color:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-informative-color-default:var(--spectrum-global-color-blue-500);--spectrum-semantic-informative-color-dark:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-border-color:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-icon-color:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-status-color:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-text-color-large:var(--spectrum-global-color-blue-500);--spectrum-semantic-informative-text-color-small:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-color-down:var(--spectrum-global-color-blue-700);--spectrum-semantic-informative-color-key-focus:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-background-color-default:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-informative-background-color-hover:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-informative-background-color-down:var(--spectrum-global-color-static-blue-800);--spectrum-semantic-informative-background-color-key-focus:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-cta-background-color-default:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-cta-background-color-hover:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-cta-background-color-down:var(--spectrum-global-color-static-blue-800);--spectrum-semantic-cta-background-color-key-focus:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-emphasized-border-color-default:var(--spectrum-global-color-blue-500);--spectrum-semantic-emphasized-border-color-hover:var(--spectrum-global-color-blue-600);--spectrum-semantic-emphasized-border-color-down:var(--spectrum-global-color-blue-700);--spectrum-semantic-emphasized-border-color-key-focus:var(--spectrum-global-color-blue-600);--spectrum-semantic-neutral-background-color-default:var(--spectrum-global-color-static-gray-700);--spectrum-semantic-neutral-background-color-hover:var(--spectrum-global-color-static-gray-800);--spectrum-semantic-neutral-background-color-down:var(--spectrum-global-color-static-gray-900);--spectrum-semantic-neutral-background-color-key-focus:var(--spectrum-global-color-static-gray-800);--spectrum-semantic-presence-color-1:var(--spectrum-global-color-static-red-500);--spectrum-semantic-presence-color-2:var(--spectrum-global-color-static-orange-400);--spectrum-semantic-presence-color-3:var(--spectrum-global-color-static-yellow-400);--spectrum-semantic-presence-color-4-rgb:75,204,162;--spectrum-semantic-presence-color-4:rgb(var(--spectrum-semantic-presence-color-4-rgb));--spectrum-semantic-presence-color-5-rgb:0,199,255;--spectrum-semantic-presence-color-5:rgb(var(--spectrum-semantic-presence-color-5-rgb));--spectrum-semantic-presence-color-6-rgb:0,140,184;--spectrum-semantic-presence-color-6:rgb(var(--spectrum-semantic-presence-color-6-rgb));--spectrum-semantic-presence-color-7-rgb:126,75,243;--spectrum-semantic-presence-color-7:rgb(var(--spectrum-semantic-presence-color-7-rgb));--spectrum-semantic-presence-color-8:var(--spectrum-global-color-static-fuchsia-600);--spectrum-global-dimension-static-percent-50:50%;--spectrum-global-dimension-static-percent-70:70%;--spectrum-global-dimension-static-percent-100:100%;--spectrum-global-dimension-static-breakpoint-xsmall:304px;--spectrum-global-dimension-static-breakpoint-small:768px;--spectrum-global-dimension-static-breakpoint-medium:1280px;--spectrum-global-dimension-static-breakpoint-large:1768px;--spectrum-global-dimension-static-breakpoint-xlarge:2160px;--spectrum-global-dimension-static-grid-columns:12;--spectrum-global-dimension-static-grid-fluid-width:100%;--spectrum-global-dimension-static-grid-fixed-max-width:1280px;--spectrum-global-dimension-static-size-0:0px;--spectrum-global-dimension-static-size-10:1px;--spectrum-global-dimension-static-size-25:2px;--spectrum-global-dimension-static-size-40:3px;--spectrum-global-dimension-static-size-50:4px;--spectrum-global-dimension-static-size-65:5px;--spectrum-global-dimension-static-size-75:6px;--spectrum-global-dimension-static-size-85:7px;--spectrum-global-dimension-static-size-100:8px;--spectrum-global-dimension-static-size-115:9px;--spectrum-global-dimension-static-size-125:10px;--spectrum-global-dimension-static-size-130:11px;--spectrum-global-dimension-static-size-150:12px;--spectrum-global-dimension-static-size-160:13px;--spectrum-global-dimension-static-size-175:14px;--spectrum-global-dimension-static-size-185:15px;--spectrum-global-dimension-static-size-200:16px;--spectrum-global-dimension-static-size-225:18px;--spectrum-global-dimension-static-size-250:20px;--spectrum-global-dimension-static-size-275:22px;--spectrum-global-dimension-static-size-300:24px;--spectrum-global-dimension-static-size-325:26px;--spectrum-global-dimension-static-size-350:28px;--spectrum-global-dimension-static-size-400:32px;--spectrum-global-dimension-static-size-450:36px;--spectrum-global-dimension-static-size-500:40px;--spectrum-global-dimension-static-size-550:44px;--spectrum-global-dimension-static-size-600:48px;--spectrum-global-dimension-static-size-700:56px;--spectrum-global-dimension-static-size-800:64px;--spectrum-global-dimension-static-size-900:72px;--spectrum-global-dimension-static-size-1000:80px;--spectrum-global-dimension-static-size-1200:96px;--spectrum-global-dimension-static-size-1700:136px;--spectrum-global-dimension-static-size-2400:192px;--spectrum-global-dimension-static-size-2500:200px;--spectrum-global-dimension-static-size-2600:208px;--spectrum-global-dimension-static-size-2800:224px;--spectrum-global-dimension-static-size-3200:256px;--spectrum-global-dimension-static-size-3400:272px;--spectrum-global-dimension-static-size-3500:280px;--spectrum-global-dimension-static-size-3600:288px;--spectrum-global-dimension-static-size-3800:304px;--spectrum-global-dimension-static-size-4600:368px;--spectrum-global-dimension-static-size-5000:400px;--spectrum-global-dimension-static-size-6000:480px;--spectrum-global-dimension-static-size-16000:1280px;--spectrum-global-dimension-static-font-size-50:11px;--spectrum-global-dimension-static-font-size-75:12px;--spectrum-global-dimension-static-font-size-100:14px;--spectrum-global-dimension-static-font-size-150:15px;--spectrum-global-dimension-static-font-size-200:16px;--spectrum-global-dimension-static-font-size-300:18px;--spectrum-global-dimension-static-font-size-400:20px;--spectrum-global-dimension-static-font-size-500:22px;--spectrum-global-dimension-static-font-size-600:25px;--spectrum-global-dimension-static-font-size-700:28px;--spectrum-global-dimension-static-font-size-800:32px;--spectrum-global-dimension-static-font-size-900:36px;--spectrum-global-dimension-static-font-size-1000:40px;--spectrum-global-font-family-base:adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-family-serif:adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-global-font-family-code:"Source Code Pro",Monaco,monospace;--spectrum-global-font-weight-thin:100;--spectrum-global-font-weight-ultra-light:200;--spectrum-global-font-weight-light:300;--spectrum-global-font-weight-regular:400;--spectrum-global-font-weight-medium:500;--spectrum-global-font-weight-semi-bold:600;--spectrum-global-font-weight-bold:700;--spectrum-global-font-weight-extra-bold:800;--spectrum-global-font-weight-black:900;--spectrum-global-font-style-regular:normal;--spectrum-global-font-style-italic:italic;--spectrum-global-font-letter-spacing-none:0;--spectrum-global-font-letter-spacing-small:0.0125em;--spectrum-global-font-letter-spacing-han:0.05em;--spectrum-global-font-letter-spacing-medium:0.06em;--spectrum-global-font-line-height-large:1.7;--spectrum-global-font-line-height-medium:1.5;--spectrum-global-font-line-height-small:1.3;--spectrum-global-font-multiplier-0:0em;--spectrum-global-font-multiplier-25:0.25em;--spectrum-global-font-multiplier-75:0.75em;--spectrum-global-font-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-zh:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light","sans-serif";--spectrum-global-font-font-family-zhhans:adobe-clean-han-simplified-c,source-han-simplified-c,"SimSun","Heiti SC Light","sans-serif";--spectrum-global-font-font-family-ko:adobe-clean-han-korean,source-han-korean,"Malgun Gothic","Apple Gothic","sans-serif";--spectrum-global-font-font-family-ja:adobe-clean-han-japanese,"Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","Osaka",YuGothic,"Yu Gothic","メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS PGothic","sans-serif";--spectrum-global-font-font-family-condensed:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light",adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-loupe-entry-animation-duration:var(--spectrum-global-animation-duration-300);--spectrum-alias-loupe-exit-animation-duration:var(--spectrum-global-animation-duration-300);--spectrum-alias-heading-text-line-height:var(--spectrum-global-font-line-height-small);--spectrum-alias-heading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-regular-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-light:var(--spectrum-global-font-weight-light);--spectrum-alias-heading-text-font-weight-light-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-heavy:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-heavy-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-quiet:var(--spectrum-global-font-weight-light);--spectrum-alias-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-strong-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-margin-bottom:var(--spectrum-global-font-multiplier-25);--spectrum-alias-subheading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-body-text-font-family:var(--spectrum-global-font-family-base);--spectrum-alias-body-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-body-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-body-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-body-margin-bottom:var(--spectrum-global-font-multiplier-75);--spectrum-alias-detail-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-detail-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-detail-text-font-weight-light:var(--spectrum-global-font-weight-regular);--spectrum-alias-detail-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-heading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-heading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-heading-text-font-weight-quiet:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-body-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-body-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-subheading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-detail-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-detail-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-code-text-font-family:var(--spectrum-global-font-family-code);--spectrum-alias-code-text-font-weight-regular:var(--spectrum-global-font-weight-regular);--spectrum-alias-code-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-code-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-code-margin-bottom:var(--spectrum-global-font-multiplier-0);--spectrum-alias-font-family-ar:var(--spectrum-global-font-font-family-ar);--spectrum-alias-font-family-he:var(--spectrum-global-font-font-family-he);--spectrum-alias-font-family-zh:var(--spectrum-global-font-font-family-zh);--spectrum-alias-font-family-zhhans:var(--spectrum-global-font-font-family-zhhans);--spectrum-alias-font-family-ko:var(--spectrum-global-font-font-family-ko);--spectrum-alias-font-family-ja:var(--spectrum-global-font-font-family-ja);--spectrum-alias-font-family-condensed:var(--spectrum-global-font-font-family-condensed);--spectrum-alias-component-text-line-height:var(--spectrum-global-font-line-height-small);--spectrum-alias-han-component-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-serif-text-font-family:var(--spectrum-global-font-family-serif);--spectrum-alias-han-heading-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-han-heading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-regular-emphasis:var(--spectrum-global-font-weight-extra-bold);--spectrum-alias-han-heading-text-font-weight-regular-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-light:var(--spectrum-global-font-weight-light);--spectrum-alias-han-heading-text-font-weight-light-emphasis:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-heading-text-font-weight-light-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-heavy:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-heavy-emphasis:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-heavy-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-body-text-line-height:var(--spectrum-global-font-line-height-large);--spectrum-alias-han-body-text-font-weight-regular:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-body-text-font-weight-emphasis:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-body-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-subheading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-subheading-text-font-weight-emphasis:var(--spectrum-global-font-weight-extra-bold);--spectrum-alias-han-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-detail-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-detail-text-font-weight-emphasis:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-detail-text-font-weight-strong:var(--spectrum-global-font-weight-black)}:host,:root{--spectrum-alias-item-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-item-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-item-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-item-rounded-border-radius-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-rounded-border-radius-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-rounded-border-radius-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-rounded-border-radius-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-text-size-s:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-item-text-size-m:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-item-text-size-l:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-item-text-size-xl:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-item-text-padding-top-s:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-item-text-padding-top-m:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-text-padding-top-xl:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-text-padding-bottom-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-text-padding-bottom-l:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-text-padding-bottom-xl:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-icon-padding-top-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icon-padding-top-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icon-padding-top-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icon-padding-top-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-icon-padding-bottom-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icon-padding-bottom-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icon-padding-bottom-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icon-padding-bottom-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-padding-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-padding-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-padding-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-padding-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-rounded-padding-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-rounded-padding-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-rounded-padding-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-rounded-padding-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-icononly-padding-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icononly-padding-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icononly-padding-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icononly-padding-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-control-gap-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-gap-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-gap-l:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-control-gap-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-workflow-icon-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-workflow-icon-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-workflow-icon-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-workflow-icon-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-mark-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-mark-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-ui-icon-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-ui-icon-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-ui-icon-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-ui-icon-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-clearbutton-gap-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-clearbutton-gap-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-clearbutton-gap-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-clearbutton-gap-xl:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-workflow-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-workflow-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-workflow-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-rounded-workflow-padding-left-s:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-rounded-workflow-padding-left-l:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-mark-padding-top-s:var(--spectrum-global-dimension-size-40);--spectrum-alias-item-mark-padding-top-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-padding-top-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-mark-padding-bottom-s:var(--spectrum-global-dimension-size-40);--spectrum-alias-item-mark-padding-bottom-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-padding-bottom-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-mark-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-mark-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-control-1-size-s:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-item-control-1-size-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-2-size-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-control-2-size-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-control-2-size-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-control-2-size-xxl:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-control-2-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-2-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-control-2-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-2-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-2-border-radius-xxl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-2-padding-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-2-padding-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-2-padding-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-2-padding-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-control-3-height-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-control-3-height-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-control-3-height-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-control-3-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-3-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-control-3-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-3-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-3-padding-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-3-padding-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-3-padding-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-3-padding-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-mark-size-s:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-mark-size-l:var(--spectrum-global-dimension-size-275);--spectrum-alias-item-mark-size-xl:var(--spectrum-global-dimension-size-325);--spectrum-alias-heading-xxxl-text-size:var(--spectrum-global-dimension-font-size-1300);--spectrum-alias-heading-xxl-text-size:var(--spectrum-global-dimension-font-size-1100);--spectrum-alias-heading-xl-text-size:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-l-text-size:var(--spectrum-global-dimension-font-size-700);--spectrum-alias-heading-m-text-size:var(--spectrum-global-dimension-font-size-500);--spectrum-alias-heading-s-text-size:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-xs-text-size:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-xxs-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-xxxl-margin-top:var(--spectrum-global-dimension-font-size-1200);--spectrum-alias-heading-xxl-margin-top:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-xl-margin-top:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-l-margin-top:var(--spectrum-global-dimension-font-size-600);--spectrum-alias-heading-m-margin-top:var(--spectrum-global-dimension-font-size-400);--spectrum-alias-heading-s-margin-top:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-xs-margin-top:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-xxs-margin-top:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-heading-han-xxxl-text-size:var(--spectrum-global-dimension-font-size-1300);--spectrum-alias-heading-han-xxl-text-size:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-han-xl-text-size:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-han-l-text-size:var(--spectrum-global-dimension-font-size-600);--spectrum-alias-heading-han-m-text-size:var(--spectrum-global-dimension-font-size-400);--spectrum-alias-heading-han-s-text-size:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-han-xs-text-size:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-han-xxs-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-han-xxxl-margin-top:var(--spectrum-global-dimension-font-size-1200);--spectrum-alias-heading-han-xxl-margin-top:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-han-xl-margin-top:var(--spectrum-global-dimension-font-size-700);--spectrum-alias-heading-han-l-margin-top:var(--spectrum-global-dimension-font-size-500);--spectrum-alias-heading-han-m-margin-top:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-han-s-margin-top:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-han-xs-margin-top:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-han-xxs-margin-top:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-component-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-component-border-radius-quiet:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-component-focusring-gap:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-component-focusring-gap-emphasized:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-component-focusring-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-component-focusring-size-emphasized:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-input-border-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-input-focusring-gap:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-input-quiet-focusline-gap:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-control-two-size-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-two-size-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-control-two-size-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-control-two-size-xxl:var(--spectrum-global-dimension-size-250);--spectrum-alias-control-two-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-control-two-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-control-two-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-control-two-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-control-two-border-radius-xxl:var(--spectrum-global-dimension-size-125);--spectrum-alias-control-two-focus-ring-border-radius-s:var(--spectrum-global-dimension-size-125);--spectrum-alias-control-two-focus-ring-border-radius-m:var(--spectrum-global-dimension-size-130);--spectrum-alias-control-two-focus-ring-border-radius-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-control-two-focus-ring-border-radius-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-control-two-focus-ring-border-radius-xxl:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-three-height-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-three-height-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-control-three-height-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-infieldbutton-icon-margin-y-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-infieldbutton-icon-margin-y-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-infieldbutton-icon-margin-y-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-infieldbutton-icon-margin-y-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-infieldbutton-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-infieldbutton-border-radius-sided:0;--spectrum-alias-infieldbutton-border-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-infieldbutton-fill-padding-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-infieldbutton-fill-padding-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-infieldbutton-fill-padding-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-infieldbutton-fill-padding-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-infieldbutton-padding-s:0;--spectrum-alias-infieldbutton-padding-m:0;--spectrum-alias-infieldbutton-padding-l:0;--spectrum-alias-infieldbutton-padding-xl:0;--spectrum-alias-infieldbutton-full-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-infieldbutton-full-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-infieldbutton-full-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-infieldbutton-full-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-infieldbutton-half-height-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-infieldbutton-half-height-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-infieldbutton-half-height-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-infieldbutton-half-height-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-stepperbutton-gap:0;--spectrum-alias-stepperbutton-width-s:var(--spectrum-global-dimension-size-225);--spectrum-alias-stepperbutton-width-m:var(--spectrum-global-dimension-size-300);--spectrum-alias-stepperbutton-width-l:var(--spectrum-global-dimension-size-400);--spectrum-alias-stepperbutton-width-xl:var(--spectrum-global-dimension-size-450);--spectrum-alias-stepperbutton-icon-x-offset-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-stepperbutton-icon-x-offset-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-stepperbutton-icon-x-offset-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-stepperbutton-icon-x-offset-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-stepperbutton-icon-y-offset-top-s:var(--spectrum-global-dimension-size-25);--spectrum-alias-stepperbutton-icon-y-offset-top-m:var(--spectrum-global-dimension-size-50);--spectrum-alias-stepperbutton-icon-y-offset-top-l:var(--spectrum-global-dimension-size-65);--spectrum-alias-stepperbutton-icon-y-offset-top-xl:var(--spectrum-global-dimension-size-75);--spectrum-alias-stepperbutton-icon-y-offset-bottom-s:var(--spectrum-global-dimension-size-10);--spectrum-alias-stepperbutton-icon-y-offset-bottom-m:var(--spectrum-global-dimension-size-25);--spectrum-alias-stepperbutton-icon-y-offset-bottom-l:var(--spectrum-global-dimension-size-40);--spectrum-alias-stepperbutton-icon-y-offset-bottom-xl:var(--spectrum-global-dimension-size-50);--spectrum-alias-stepperbutton-radius-touching:0;--spectrum-alias-clearbutton-icon-margin-s:var(--spectrum-global-dimension-size-100);--spectrum-alias-clearbutton-icon-margin-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-clearbutton-icon-margin-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-clearbutton-icon-margin-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-clearbutton-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-search-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-search-border-radius-quiet:0;--spectrum-alias-combobox-quiet-button-offset-x:var(--spectrum-global-dimension-size-100);--spectrum-alias-thumbnail-border-radius-small:var(--spectrum-global-dimension-size-25);--spectrum-alias-search-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-search-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-search-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-percent-50:50%;--spectrum-alias-percent-70:70%;--spectrum-alias-percent-100:100%;--spectrum-alias-breakpoint-xsmall:304px;--spectrum-alias-breakpoint-small:768px;--spectrum-alias-breakpoint-medium:1280px;--spectrum-alias-breakpoint-large:1768px;--spectrum-alias-breakpoint-xlarge:2160px;--spectrum-alias-grid-columns:12;--spectrum-alias-grid-fluid-width:100%;--spectrum-alias-grid-fixed-max-width:1280px;--spectrum-alias-border-size-thin:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-border-size-thick:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-border-size-thicker:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-border-size-thickest:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-border-offset-thin:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-border-offset-thick:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-border-offset-thicker:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-border-offset-thickest:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-baseline:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-grid-gutter-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-gutter-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-gutter-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-gutter-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-gutter-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-grid-margin-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-margin-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-margin-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-margin-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-margin-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-grid-layout-region-margin-bottom-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-layout-region-margin-bottom-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-layout-region-margin-bottom-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-layout-region-margin-bottom-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-layout-region-margin-bottom-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-radial-reaction-size-default:var(--spectrum-global-dimension-static-size-550);--spectrum-alias-focus-ring-gap:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-focus-ring-size:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-focus-ring-gap-small:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-focus-ring-size-small:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-dropshadow-blur:var(--spectrum-global-dimension-size-50);--spectrum-alias-dropshadow-offset-y:var(--spectrum-global-dimension-size-10);--spectrum-alias-font-size-default:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-layout-label-gap-size:var(--spectrum-global-dimension-size-100);--spectrum-alias-pill-button-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-pill-button-text-baseline:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-border-radius-xsmall:var(--spectrum-global-dimension-size-10);--spectrum-alias-border-radius-small:var(--spectrum-global-dimension-size-25);--spectrum-alias-border-radius-regular:var(--spectrum-global-dimension-size-50);--spectrum-alias-border-radius-medium:var(--spectrum-global-dimension-size-100);--spectrum-alias-border-radius-large:var(--spectrum-global-dimension-size-200);--spectrum-alias-border-radius-xlarge:var(--spectrum-global-dimension-size-300);--spectrum-alias-focus-ring-border-radius-xsmall:var(--spectrum-global-dimension-size-50);--spectrum-alias-focus-ring-border-radius-small:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-focus-ring-border-radius-medium:var(--spectrum-global-dimension-size-150);--spectrum-alias-focus-ring-border-radius-large:var(--spectrum-global-dimension-size-250);--spectrum-alias-focus-ring-border-radius-xlarge:var(--spectrum-global-dimension-size-350);--spectrum-alias-single-line-height:var(--spectrum-global-dimension-size-400);--spectrum-alias-single-line-width:var(--spectrum-global-dimension-size-2400);--spectrum-alias-workflow-icon-size-s:var(--spectrum-global-dimension-size-200);--spectrum-alias-workflow-icon-size-m:var(--spectrum-global-dimension-size-225);--spectrum-alias-workflow-icon-size-xl:var(--spectrum-global-dimension-size-275);--spectrum-alias-ui-icon-alert-size-75:var(--spectrum-global-dimension-size-200);--spectrum-alias-ui-icon-alert-size-100:var(--spectrum-global-dimension-size-225);--spectrum-alias-ui-icon-alert-size-200:var(--spectrum-global-dimension-size-250);--spectrum-alias-ui-icon-alert-size-300:var(--spectrum-global-dimension-size-275);--spectrum-alias-ui-icon-triplegripper-size-100-height:var(--spectrum-global-dimension-size-100);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(--spectrum-global-dimension-size-200);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(--spectrum-global-dimension-size-300);--spectrum-alias-ui-icon-cornertriangle-size-75:var(--spectrum-global-dimension-size-65);--spectrum-alias-ui-icon-cornertriangle-size-200:var(--spectrum-global-dimension-size-75);--spectrum-alias-ui-icon-asterisk-size-75:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-asterisk-size-100:var(--spectrum-global-dimension-size-100);--spectrum-alias-colorloupe-width:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-colorloupe-height:var(--spectrum-global-dimension-static-size-800)}:host,:root{--spectrum-alias-colorhandle-outer-border-color:rgba(0,0,0,.42);--spectrum-alias-transparent-blue-background-color-hover:rgba(0,87,190,.15);--spectrum-alias-transparent-blue-background-color-down:rgba(0,72,153,.3);--spectrum-alias-transparent-blue-background-color-key-focus:var(--spectrum-alias-transparent-blue-background-color-hover);--spectrum-alias-transparent-blue-background-color-mouse-focus:var(--spectrum-alias-transparent-blue-background-color-hover);--spectrum-alias-transparent-blue-background-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-transparent-red-background-color-hover:rgba(154,0,0,.15);--spectrum-alias-transparent-red-background-color-down:rgba(124,0,0,.3);--spectrum-alias-transparent-red-background-color-key-focus:var(--spectrum-alias-transparent-red-background-color-hover);--spectrum-alias-transparent-red-background-color-mouse-focus:var(--spectrum-alias-transparent-red-background-color-hover);--spectrum-alias-transparent-red-background-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-component-text-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-component-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-component-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-component-text-color-key-focus:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color-mouse-focus:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-selected-default:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-selected-hover:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color-selected-down:var(--spectrum-alias-component-text-color-down);--spectrum-alias-component-text-color-selected-key-focus:var(--spectrum-alias-component-text-color-key-focus);--spectrum-alias-component-text-color-selected-mouse-focus:var(--spectrum-alias-component-text-color-mouse-focus);--spectrum-alias-component-text-color-selected:var(--spectrum-alias-component-text-color-selected-default);--spectrum-alias-component-text-color-emphasized-selected-default:var(--spectrum-global-color-static-white);--spectrum-alias-component-text-color-emphasized-selected-hover:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-down:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-key-focus:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-mouse-focus:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-error-default:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-component-text-color-error-hover:var(--spectrum-semantic-negative-text-color-small-hover);--spectrum-alias-component-text-color-error-down:var(--spectrum-semantic-negative-text-color-small-down);--spectrum-alias-component-text-color-error-key-focus:var(--spectrum-semantic-negative-text-color-small-key-focus);--spectrum-alias-component-text-color-error-mouse-focus:var(--spectrum-semantic-negative-text-color-small-key-focus);--spectrum-alias-component-text-color-error:var(--spectrum-alias-component-text-color-error-default);--spectrum-alias-component-icon-color-disabled:var(--spectrum-alias-icon-color-disabled);--spectrum-alias-component-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-component-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-alias-component-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-component-icon-color-key-focus:var(--spectrum-alias-icon-color-hover);--spectrum-alias-component-icon-color-mouse-focus:var(--spectrum-alias-icon-color-down);--spectrum-alias-component-icon-color:var(--spectrum-alias-component-icon-color-default);--spectrum-alias-component-icon-color-selected:var(--spectrum-alias-icon-color-selected-neutral-subdued);--spectrum-alias-component-icon-color-emphasized-selected-default:var(--spectrum-global-color-static-white);--spectrum-alias-component-icon-color-emphasized-selected-hover:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected-down:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected-key-focus:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-background-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-quiet-disabled:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-selected-disabled:var(--spectrum-alias-component-background-color-disabled);--spectrum-alias-component-background-color-default:var(--spectrum-global-color-gray-75);--spectrum-alias-component-background-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-component-background-color-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-component-background-color:var(--spectrum-alias-component-background-color-default);--spectrum-alias-component-background-color-selected-default:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-hover:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-key-focus:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-quiet-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-hover:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-down:var(--spectrum-global-color-gray-300);--spectrum-alias-component-background-color-quiet-key-focus:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet:var(--spectrum-alias-component-background-color-quiet-default);--spectrum-alias-component-background-color-quiet-selected-default:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-quiet-selected-hover:var(--spectrum-alias-component-background-color-selected-hover);--spectrum-alias-component-background-color-quiet-selected-down:var(--spectrum-alias-component-background-color-selected-down);--spectrum-alias-component-background-color-quiet-selected-key-focus:var(--spectrum-alias-component-background-color-selected-key-focus);--spectrum-alias-component-background-color-quiet-selected:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-emphasized-selected-default:var(--spectrum-semantic-cta-background-color-default);--spectrum-alias-component-background-color-emphasized-selected-hover:var(--spectrum-semantic-cta-background-color-hover);--spectrum-alias-component-background-color-emphasized-selected-down:var(--spectrum-semantic-cta-background-color-down);--spectrum-alias-component-background-color-emphasized-selected-key-focus:var(--spectrum-semantic-cta-background-color-key-focus);--spectrum-alias-component-background-color-emphasized-selected:var(--spectrum-alias-component-background-color-emphasized-selected-default);--spectrum-alias-component-border-color-disabled:var(--spectrum-alias-border-color-disabled);--spectrum-alias-component-border-color-quiet-disabled:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-default:var(--spectrum-alias-border-color);--spectrum-alias-component-border-color-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-component-border-color-down:var(--spectrum-alias-border-color-down);--spectrum-alias-component-border-color-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color:var(--spectrum-alias-component-border-color-default);--spectrum-alias-component-border-color-selected-default:var(--spectrum-alias-border-color);--spectrum-alias-component-border-color-selected-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-component-border-color-selected-down:var(--spectrum-alias-border-color-down);--spectrum-alias-component-border-color-selected-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-selected:var(--spectrum-alias-component-border-color-selected-default);--spectrum-alias-component-border-color-quiet-default:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-hover:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-down:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-quiet:var(--spectrum-alias-component-border-color-quiet-default);--spectrum-alias-component-border-color-quiet-selected-default:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-hover:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-quiet-selected:var(--spectrum-alias-component-border-color-quiet-selected-default);--spectrum-alias-component-border-color-emphasized-selected-default:var(--spectrum-semantic-cta-background-color-default);--spectrum-alias-component-border-color-emphasized-selected-hover:var(--spectrum-semantic-cta-background-color-hover);--spectrum-alias-component-border-color-emphasized-selected-down:var(--spectrum-semantic-cta-background-color-down);--spectrum-alias-component-border-color-emphasized-selected-key-focus:var(--spectrum-semantic-cta-background-color-key-focus);--spectrum-alias-component-border-color-emphasized-selected:var(--spectrum-alias-component-border-color-emphasized-selected-default);--spectrum-alias-toggle-background-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-toggle-background-color-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-background-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-toggle-background-color-key-focus:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-background-color:var(--spectrum-alias-toggle-background-color-default);--spectrum-alias-toggle-background-color-emphasized-selected-default:var(--spectrum-global-color-blue-500);--spectrum-alias-toggle-background-color-emphasized-selected-hover:var(--spectrum-global-color-blue-600);--spectrum-alias-toggle-background-color-emphasized-selected-down:var(--spectrum-global-color-blue-700);--spectrum-alias-toggle-background-color-emphasized-selected-key-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-toggle-background-color-emphasized-selected:var(--spectrum-alias-toggle-background-color-emphasized-selected-default);--spectrum-alias-toggle-border-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-toggle-border-color-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-border-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-toggle-border-color-key-focus:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-border-color:var(--spectrum-alias-toggle-border-color-default);--spectrum-alias-toggle-icon-color-selected:var(--spectrum-global-color-gray-75);--spectrum-alias-toggle-icon-color-emphasized-selected:var(--spectrum-global-color-gray-75);--spectrum-alias-input-border-color-disabled:var(--spectrum-alias-border-color-transparent);--spectrum-alias-input-border-color-quiet-disabled:var(--spectrum-alias-border-color-mid);--spectrum-alias-input-border-color-default:var(--spectrum-alias-border-color);--spectrum-alias-input-border-color-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-input-border-color-down:var(--spectrum-alias-border-color-mouse-focus);--spectrum-alias-input-border-color-mouse-focus:var(--spectrum-alias-border-color-mouse-focus);--spectrum-alias-input-border-color-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-input-border-color:var(--spectrum-alias-input-border-color-default);--spectrum-alias-input-border-color-invalid-default:var(--spectrum-semantic-negative-color-default);--spectrum-alias-input-border-color-invalid-hover:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-input-border-color-invalid-down:var(--spectrum-semantic-negative-color-down);--spectrum-alias-input-border-color-invalid-mouse-focus:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-input-border-color-invalid-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-input-border-color-invalid:var(--spectrum-alias-input-border-color-invalid-default);--spectrum-alias-background-color-yellow-default:var(--spectrum-global-color-static-yellow-300);--spectrum-alias-background-color-yellow-hover:var(--spectrum-global-color-static-yellow-400);--spectrum-alias-background-color-yellow-key-focus:var(--spectrum-global-color-static-yellow-400);--spectrum-alias-background-color-yellow-down:var(--spectrum-global-color-static-yellow-500);--spectrum-alias-background-color-yellow:var(--spectrum-alias-background-color-yellow-default);--spectrum-alias-infieldbutton-background-color:var(--spectrum-global-color-gray-200);--spectrum-alias-infieldbutton-fill-loudnessLow-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-border-color-disabled:var(--spectrum-alias-component-background-color-disabled);--spectrum-alias-infieldbutton-fill-border-color-default:var(--spectrum-alias-input-border-color-default);--spectrum-alias-infieldbutton-fill-border-color-hover:var(--spectrum-alias-input-border-color-hover);--spectrum-alias-infieldbutton-fill-border-color-down:var(--spectrum-alias-input-border-color-down);--spectrum-alias-infieldbutton-fill-border-color-mouse-focus:var(--spectrum-alias-input-border-color-mouse-focus);--spectrum-alias-infieldbutton-fill-border-color-key-focus:var(--spectrum-alias-input-border-color-key-focus);--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-default:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-hover:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-down:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-key-focus:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-default:var(--spectrum-alias-component-background-color-default);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-hover:var(--spectrum-alias-component-background-color-hover);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-down:var(--spectrum-alias-component-background-color-down);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-key-focus:var(--spectrum-alias-component-background-color-key-focus);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-disabled:var(--spectrum-alias-component-background-color-disabled);--spectrum-alias-tabs-divider-background-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-tabs-divider-background-color-quiet:var(--spectrum-alias-background-color-transparent);--spectrum-alias-tabitem-text-color-default:var(--spectrum-alias-label-text-color);--spectrum-alias-tabitem-text-color-hover:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color-down:var(--spectrum-alias-text-color-down);--spectrum-alias-tabitem-text-color-key-focus:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color-mouse-focus:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-text-color-selected-default:var(--spectrum-global-color-gray-900);--spectrum-alias-tabitem-text-color-selected-hover:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-down:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-key-focus:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-mouse-focus:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-emphasized:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-text-color-emphasized-selected-default:var(--spectrum-global-color-static-blue-500);--spectrum-alias-tabitem-text-color-emphasized-selected-hover:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-down:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-key-focus:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-mouse-focus:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-selection-indicator-color-default:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-selection-indicator-color-emphasized:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-icon-color-disabled:var(--spectrum-alias-text-color-disabled);--spectrum-alias-tabitem-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-tabitem-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tabitem-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-tabitem-icon-color-key-focus:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tabitem-icon-color-mouse-focus:var(--spectrum-alias-icon-color-down);--spectrum-alias-tabitem-icon-color:var(--spectrum-alias-tabitem-icon-color-default);--spectrum-alias-tabitem-icon-color-selected:var(--spectrum-alias-icon-color-selected-neutral);--spectrum-alias-tabitem-icon-color-emphasized:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-icon-color-emphasized-selected:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-assetcard-selectionindicator-background-color-ordered:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-overlay-background-color:rgba(27,127,245,.1);--spectrum-alias-assetcard-border-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-border-color-selected-hover:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-border-color-selected-down:var(--spectrum-global-color-blue-600);--spectrum-alias-background-color-default:var(--spectrum-global-color-gray-100);--spectrum-alias-background-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-background-color-transparent:transparent;--spectrum-alias-background-color-overbackground-down:hsla(0,0%,100%,.2);--spectrum-alias-background-color-quiet-overbackground-hover:hsla(0,0%,100%,.1);--spectrum-alias-background-color-quiet-overbackground-down:hsla(0,0%,100%,.2);--spectrum-alias-background-color-overbackground-disabled:hsla(0,0%,100%,.1);--spectrum-alias-background-color-quickactions-overlay:rgba(0,0,0,.2);--spectrum-alias-placeholder-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-placeholder-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-placeholder-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-placeholder-text-color-selected:var(--spectrum-global-color-gray-800);--spectrum-alias-label-text-color:var(--spectrum-global-color-gray-700);--spectrum-alias-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-key-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-mouse-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-text-color-invalid:var(--spectrum-global-color-red-500);--spectrum-alias-text-color-selected:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-selected-neutral:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-text-color-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-text-color-quiet-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-heading-text-color:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-hover:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-down:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-key-focus:var(--spectrum-global-color-blue-400);--spectrum-alias-border-color-mouse-focus:var(--spectrum-global-color-blue-500);--spectrum-alias-border-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-extralight:var(--spectrum-global-color-gray-100);--spectrum-alias-border-color-light:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-mid:var(--spectrum-global-color-gray-300);--spectrum-alias-border-color-dark:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-darker-default:var(--spectrum-global-color-gray-600);--spectrum-alias-border-color-darker-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color-darker-down:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color-transparent:transparent;--spectrum-alias-border-color-translucent-dark:rgba(0,0,0,.05);--spectrum-alias-border-color-translucent-darker:rgba(0,0,0,.1);--spectrum-alias-focus-color:var(--spectrum-global-color-blue-400);--spectrum-alias-focus-ring-color:var(--spectrum-alias-focus-color);--spectrum-alias-track-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-track-fill-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-track-color-disabled:var(--spectrum-global-color-gray-300);--spectrum-alias-thumbnail-darksquare-background-color:var(--spectrum-global-color-gray-300);--spectrum-alias-thumbnail-lightsquare-background-color:var(--spectrum-global-color-static-white);--spectrum-alias-track-color-overbackground:hsla(0,0%,100%,.2);--spectrum-alias-icon-color:var(--spectrum-global-color-gray-700);--spectrum-alias-icon-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-icon-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-key-focus:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-disabled:var(--spectrum-global-color-gray-400);--spectrum-alias-icon-color-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-icon-color-quiet-overbackground-disabled:hsla(0,0%,100%,.15);--spectrum-alias-icon-color-selected-neutral:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-selected-neutral-subdued:var(--spectrum-global-color-gray-800);--spectrum-alias-icon-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-icon-color-selected-hover:var(--spectrum-global-color-blue-600);--spectrum-alias-icon-color-selected-down:var(--spectrum-global-color-blue-700);--spectrum-alias-icon-color-selected-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-image-opacity-disabled:var(--spectrum-global-color-opacity-30);--spectrum-alias-toolbar-background-color:var(--spectrum-global-color-gray-100);--spectrum-alias-code-highlight-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-code-highlight-background-color:var(--spectrum-global-color-gray-75);--spectrum-alias-code-highlight-color-keyword:var(--spectrum-global-color-fuchsia-600);--spectrum-alias-code-highlight-color-section:var(--spectrum-global-color-red-600);--spectrum-alias-code-highlight-color-literal:var(--spectrum-global-color-blue-600);--spectrum-alias-code-highlight-color-attribute:var(--spectrum-global-color-seafoam-600);--spectrum-alias-code-highlight-color-class:var(--spectrum-global-color-magenta-600);--spectrum-alias-code-highlight-color-variable:var(--spectrum-global-color-purple-600);--spectrum-alias-code-highlight-color-title:var(--spectrum-global-color-indigo-600);--spectrum-alias-code-highlight-color-string:var(--spectrum-global-color-fuchsia-600);--spectrum-alias-code-highlight-color-function:var(--spectrum-global-color-blue-600);--spectrum-alias-code-highlight-color-comment:var(--spectrum-global-color-gray-700);--spectrum-alias-categorical-color-1:var(--spectrum-global-color-static-seafoam-200);--spectrum-alias-categorical-color-2:var(--spectrum-global-color-static-indigo-700);--spectrum-alias-categorical-color-3:var(--spectrum-global-color-static-orange-500);--spectrum-alias-categorical-color-4:var(--spectrum-global-color-static-magenta-500);--spectrum-alias-categorical-color-5:var(--spectrum-global-color-static-indigo-200);--spectrum-alias-categorical-color-6:var(--spectrum-global-color-static-celery-200);--spectrum-alias-categorical-color-7:var(--spectrum-global-color-static-blue-500);--spectrum-alias-categorical-color-8:var(--spectrum-global-color-static-purple-800);--spectrum-alias-categorical-color-9:var(--spectrum-global-color-static-yellow-500);--spectrum-alias-categorical-color-10:var(--spectrum-global-color-static-orange-700);--spectrum-alias-categorical-color-11:var(--spectrum-global-color-static-green-600);--spectrum-alias-categorical-color-12:var(--spectrum-global-color-static-chartreuse-300);--spectrum-alias-categorical-color-13:var(--spectrum-global-color-static-blue-200);--spectrum-alias-categorical-color-14:var(--spectrum-global-color-static-fuchsia-500);--spectrum-alias-categorical-color-15:var(--spectrum-global-color-static-magenta-200);--spectrum-alias-categorical-color-16:var(--spectrum-global-color-static-yellow-200)}:host,:root{--spectrum-colorloupe-express-visibility:none;--spectrum-colorloupe-spectrum-visibility:block;--spectrum-colorloupe-outer-border-color:transparent;--spectrum-colorloupe-outer-border-size:0;--spectrum-colorloupe-outer-stroke-color:var(--spectrum-global-color-static-transparent-black-200);--spectrum-colorloupe-outer-stroke-width:var(--spectrum-alias-border-size-thick);--spectrum-colorhandle-background-offset:calc(var(--spectrum-global-dimension-static-size-25)*-1);--spectrum-colorhandle-inner-shadow-color:var(--spectrum-colorhandle-outer-shadow-color);--spectrum-colorhandle-outer-shadow-color:rgba(0,0,0,.42);--spectrum-colorhandle-outer-shadow-blur:0;--spectrum-colorhandle-outer-shadow-spread:var(--spectrum-alias-border-size-thin);--spectrum-colorcontrol-checkerboard-light-color:var(--spectrum-global-color-static-white);--spectrum-colorcontrol-checkerboard-dark-color:var(--spectrum-global-color-static-gray-300);--spectrum-slider-m-track-inside-border-radius:var(--spectrum-slider-m-track-border-radius);--spectrum-slider-label-text-size:var(--spectrum-global-dimension-font-size-75)}:host,:root{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host,:root{--spectrum-focus-indicator-color:var(--spectrum-blue-800);--spectrum-static-white-focus-indicator-color:var(--spectrum-white);--spectrum-static-black-focus-indicator-color:var(--spectrum-black);--spectrum-overlay-color:var(--spectrum-black);--spectrum-opacity-disabled:0.3;--spectrum-disabled-background-color:var(--spectrum-gray-200);--spectrum-disabled-static-white-background-color:var(--spectrum-transparent-white-200);--spectrum-disabled-static-black-background-color:var(--spectrum-transparent-black-200);--spectrum-background-opacity-default:0;--spectrum-background-opacity-hover:0.1;--spectrum-background-opacity-down:0.1;--spectrum-background-opacity-key-focus:0.1;--spectrum-neutral-content-color-default:var(--spectrum-gray-800);--spectrum-neutral-content-color-hover:var(--spectrum-gray-900);--spectrum-neutral-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-content-color-focus-hover:var(--spectrum-neutral-content-color-down);--spectrum-neutral-content-color-focus:var(--spectrum-neutral-content-color-down);--spectrum-neutral-content-color-key-focus:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-default:var(--spectrum-gray-700);--spectrum-neutral-subdued-content-color-hover:var(--spectrum-gray-800);--spectrum-neutral-subdued-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-key-focus:var(--spectrum-gray-800);--spectrum-accent-content-color-default:var(--spectrum-accent-color-900);--spectrum-accent-content-color-hover:var(--spectrum-accent-color-1000);--spectrum-accent-content-color-down:var(--spectrum-accent-color-1100);--spectrum-accent-content-color-key-focus:var(--spectrum-accent-color-1000);--spectrum-negative-content-color-default:var(--spectrum-negative-color-900);--spectrum-negative-content-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-content-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-content-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-disabled-content-color:var(--spectrum-gray-400);--spectrum-disabled-static-white-content-color:var(--spectrum-transparent-white-500);--spectrum-disabled-static-black-content-color:var(--spectrum-transparent-black-500);--spectrum-disabled-border-color:var(--spectrum-gray-300);--spectrum-disabled-static-white-border-color:var(--spectrum-transparent-white-300);--spectrum-disabled-static-black-border-color:var(--spectrum-transparent-black-300);--spectrum-negative-border-color-default:var(--spectrum-negative-color-900);--spectrum-negative-border-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-border-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-border-color-focus-hover:var(--spectrum-negative-border-color-down);--spectrum-negative-border-color-focus:var(--spectrum-negative-color-1000);--spectrum-negative-border-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-swatch-border-color:var(--spectrum-gray-900);--spectrum-swatch-border-opacity:0.51;--spectrum-swatch-disabled-icon-border-color:var(--spectrum-black);--spectrum-swatch-disabled-icon-border-opacity:0.51;--spectrum-thumbnail-border-color:var(--spectrum-gray-800);--spectrum-thumbnail-border-opacity:0.1;--spectrum-thumbnail-opacity-disabled:var(--spectrum-opacity-disabled);--spectrum-opacity-checkerboard-square-light:var(--spectrum-white);--spectrum-avatar-opacity-disabled:var(--spectrum-opacity-disabled);--spectrum-color-area-border-color:var(--spectrum-gray-900);--spectrum-color-area-border-opacity:0.1;--spectrum-color-slider-border-color:var(--spectrum-gray-900);--spectrum-color-slider-border-opacity:0.1;--spectrum-color-loupe-drop-shadow-color:var(--spectrum-transparent-black-300);--spectrum-color-loupe-drop-shadow-y:2px;--spectrum-color-loupe-drop-shadow-blur:8px;--spectrum-color-loupe-inner-border:var(--spectrum-transparent-black-200);--spectrum-color-loupe-outer-border:var(--spectrum-white);--spectrum-card-selection-background-color:var(--spectrum-gray-100);--spectrum-card-selection-background-color-opacity:0.95;--spectrum-drop-zone-background-color:var(--spectrum-accent-visual-color);--spectrum-drop-zone-background-color-opacity:0.1;--spectrum-drop-zone-background-color-opacity-filled:0.3;--spectrum-white:#fff;--spectrum-transparent-white-100:hsla(0,0%,100%,0);--spectrum-transparent-white-200:hsla(0,0%,100%,.1);--spectrum-transparent-white-300:hsla(0,0%,100%,.25);--spectrum-transparent-white-400:hsla(0,0%,100%,.4);--spectrum-transparent-white-500:hsla(0,0%,100%,.55);--spectrum-transparent-white-600:hsla(0,0%,100%,.7);--spectrum-transparent-white-700:hsla(0,0%,100%,.8);--spectrum-transparent-white-800:hsla(0,0%,100%,.9);--spectrum-transparent-white-900:#fff;--spectrum-black:#000;--spectrum-transparent-black-100:transparent;--spectrum-transparent-black-200:rgba(0,0,0,.1);--spectrum-transparent-black-300:rgba(0,0,0,.25);--spectrum-transparent-black-400:rgba(0,0,0,.4);--spectrum-transparent-black-500:rgba(0,0,0,.55);--spectrum-transparent-black-600:rgba(0,0,0,.7);--spectrum-transparent-black-700:rgba(0,0,0,.8);--spectrum-transparent-black-800:rgba(0,0,0,.9);--spectrum-transparent-black-900:#000;--spectrum-radio-button-selection-indicator:4px;--spectrum-field-label-to-component:0px;--spectrum-help-text-to-component:0px;--spectrum-button-minimum-width-multiplier:2.25;--spectrum-divider-thickness-small:1px;--spectrum-divider-thickness-medium:2px;--spectrum-divider-thickness-large:4px;--spectrum-swatch-rectangle-width-multiplier:2;--spectrum-swatch-slash-thickness-extra-small:2px;--spectrum-swatch-slash-thickness-small:3px;--spectrum-swatch-slash-thickness-medium:4px;--spectrum-swatch-slash-thickness-large:5px;--spectrum-progress-bar-minimum-width:48px;--spectrum-progress-bar-maximum-width:768px;--spectrum-meter-minimum-width:48px;--spectrum-meter-maximum-width:768px;--spectrum-in-line-alert-minimum-width:240px;--spectrum-popover-tip-width:16px;--spectrum-popover-tip-height:8px;--spectrum-menu-item-label-to-description:1px;--spectrum-picker-minimum-width-multiplier:2;--spectrum-text-field-minimum-width-multiplier:1.5;--spectrum-combo-box-minimum-width-multiplier:2.5;--spectrum-combo-box-quiet-minimum-width-multiplier:2;--spectrum-combo-box-visual-to-field-button-quiet:0;--spectrum-alert-dialog-minimum-width:288px;--spectrum-alert-dialog-maximum-width:480px;--spectrum-contextual-help-minimum-width:268px;--spectrum-breadcrumbs-height:var(--spectrum-component-height-300);--spectrum-breadcrumbs-height-compact:var(--spectrum-component-height-200);--spectrum-breadcrumbs-end-edge-to-text:0px;--spectrum-breadcrumbs-truncated-menu-to-separator-icon:0px;--spectrum-breadcrumbs-start-edge-to-truncated-menu:0px;--spectrum-breadcrumbs-truncated-menu-to-bottom-text:0px;--spectrum-color-area-border-width:var(--spectrum-border-width-100);--spectrum-color-area-border-rounding:var(--spectrum-corner-radius-100);--spectrum-color-wheel-color-area-margin:12px;--spectrum-color-slider-minimum-length:200px;--spectrum-color-slider-border-width:1px;--spectrum-color-slider-border-rounding:4px;--spectrum-floating-action-button-drop-shadow-blur:12px;--spectrum-illustrated-message-maximum-width:380px;--spectrum-search-field-minimum-width-multiplier:3;--spectrum-color-loupe-outer-border-width:var(--spectrum-border-width-200);--spectrum-card-minimum-width:100px;--spectrum-card-preview-minimum-height:130px;--spectrum-card-selection-background-size:40px;--spectrum-drop-zone-width:428px;--spectrum-drop-zone-content-maximum-width:var(--spectrum-illustrated-message-maximum-width);--spectrum-drop-zone-border-dash-length:8px;--spectrum-drop-zone-border-dash-gap:4px;--spectrum-drop-zone-title-size:var(--spectrum-illustrated-message-title-size);--spectrum-drop-zone-cjk-title-size:var(--spectrum-illustrated-message-cjk-title-size);--spectrum-drop-zone-body-size:var(--spectrum-illustrated-message-body-size);--spectrum-android-elevation:2dp;--spectrum-spacing-50:2px;--spectrum-spacing-75:4px;--spectrum-spacing-100:8px;--spectrum-spacing-200:12px;--spectrum-spacing-300:16px;--spectrum-spacing-400:24px;--spectrum-spacing-500:32px;--spectrum-spacing-600:40px;--spectrum-spacing-700:48px;--spectrum-spacing-800:64px;--spectrum-spacing-900:80px;--spectrum-spacing-1000:96px;--spectrum-focus-indicator-thickness:2px;--spectrum-focus-indicator-gap:2px;--spectrum-border-width-200:2px;--spectrum-border-width-400:4px;--spectrum-field-edge-to-text-quiet:0px;--spectrum-field-edge-to-visual-quiet:0px;--spectrum-field-edge-to-border-quiet:0px;--spectrum-field-edge-to-alert-icon-quiet:0px;--spectrum-field-edge-to-validation-icon-quiet:0px;--spectrum-text-underline-thickness:1px;--spectrum-text-underline-gap:1px;--spectrum-informative-color-100:var(--spectrum-blue-100);--spectrum-informative-color-200:var(--spectrum-blue-200);--spectrum-informative-color-300:var(--spectrum-blue-300);--spectrum-informative-color-400:var(--spectrum-blue-400);--spectrum-informative-color-500:var(--spectrum-blue-500);--spectrum-informative-color-600:var(--spectrum-blue-600);--spectrum-informative-color-700:var(--spectrum-blue-700);--spectrum-informative-color-800:var(--spectrum-blue-800);--spectrum-informative-color-900:var(--spectrum-blue-900);--spectrum-informative-color-1000:var(--spectrum-blue-1000);--spectrum-informative-color-1100:var(--spectrum-blue-1100);--spectrum-informative-color-1200:var(--spectrum-blue-1200);--spectrum-informative-color-1300:var(--spectrum-blue-1300);--spectrum-informative-color-1400:var(--spectrum-blue-1400);--spectrum-negative-color-100:var(--spectrum-red-100);--spectrum-negative-color-200:var(--spectrum-red-200);--spectrum-negative-color-300:var(--spectrum-red-300);--spectrum-negative-color-400:var(--spectrum-red-400);--spectrum-negative-color-500:var(--spectrum-red-500);--spectrum-negative-color-600:var(--spectrum-red-600);--spectrum-negative-color-700:var(--spectrum-red-700);--spectrum-negative-color-800:var(--spectrum-red-800);--spectrum-negative-color-900:var(--spectrum-red-900);--spectrum-negative-color-1000:var(--spectrum-red-1000);--spectrum-negative-color-1100:var(--spectrum-red-1100);--spectrum-negative-color-1200:var(--spectrum-red-1200);--spectrum-negative-color-1300:var(--spectrum-red-1300);--spectrum-negative-color-1400:var(--spectrum-red-1400);--spectrum-notice-color-100:var(--spectrum-orange-100);--spectrum-notice-color-200:var(--spectrum-orange-200);--spectrum-notice-color-300:var(--spectrum-orange-300);--spectrum-notice-color-400:var(--spectrum-orange-400);--spectrum-notice-color-500:var(--spectrum-orange-500);--spectrum-notice-color-600:var(--spectrum-orange-600);--spectrum-notice-color-700:var(--spectrum-orange-700);--spectrum-notice-color-800:var(--spectrum-orange-800);--spectrum-notice-color-900:var(--spectrum-orange-900);--spectrum-notice-color-1000:var(--spectrum-orange-1000);--spectrum-notice-color-1100:var(--spectrum-orange-1100);--spectrum-notice-color-1200:var(--spectrum-orange-1200);--spectrum-notice-color-1300:var(--spectrum-orange-1300);--spectrum-notice-color-1400:var(--spectrum-orange-1400);--spectrum-positive-color-100:var(--spectrum-green-100);--spectrum-positive-color-200:var(--spectrum-green-200);--spectrum-positive-color-300:var(--spectrum-green-300);--spectrum-positive-color-400:var(--spectrum-green-400);--spectrum-positive-color-500:var(--spectrum-green-500);--spectrum-positive-color-600:var(--spectrum-green-600);--spectrum-positive-color-700:var(--spectrum-green-700);--spectrum-positive-color-800:var(--spectrum-green-800);--spectrum-positive-color-900:var(--spectrum-green-900);--spectrum-positive-color-1000:var(--spectrum-green-1000);--spectrum-positive-color-1100:var(--spectrum-green-1100);--spectrum-positive-color-1200:var(--spectrum-green-1200);--spectrum-positive-color-1300:var(--spectrum-green-1300);--spectrum-positive-color-1400:var(--spectrum-green-1400);--spectrum-default-font-family:var(--spectrum-sans-serif-font-family);--spectrum-sans-serif-font-family:Adobe Clean;--spectrum-serif-font-family:Adobe Clean Serif;--spectrum-cjk-font-family:Adobe Clean Han;--spectrum-light-font-weight:light;--spectrum-regular-font-weight:regular;--spectrum-medium-font-weight:medium;--spectrum-bold-font-weight:bold;--spectrum-extra-bold-font-weight:extra-bold;--spectrum-black-font-weight:#000;--spectrum-italic-font-style:italic;--spectrum-default-font-style:normal;--spectrum-line-height-100:1.3;--spectrum-line-height-200:1.5;--spectrum-cjk-line-height-100:1.5;--spectrum-cjk-line-height-200:1.7;--spectrum-cjk-letter-spacing:0.05em;--spectrum-heading-sans-serif-font-family:var(--spectrum-sans-serif-font-family);--spectrum-heading-serif-font-family:var(--spectrum-serif-font-family);--spectrum-heading-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-heading-sans-serif-light-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-sans-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-light-font-weight:var(--spectrum-regular-font-weight);--spectrum-heading-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-light-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-cjk-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-sans-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-light-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-light-strong-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-cjk-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-heavy-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-heavy-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-emphasized-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-sans-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-heading-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-heading-cjk-light-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-heavy-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-heavy-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-sans-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-light-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-light-strong-emphasized-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-cjk-light-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-heavy-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-heavy-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-size-xxxl:var(--spectrum-font-size-1300);--spectrum-heading-size-xxl:var(--spectrum-font-size-1100);--spectrum-heading-size-xl:var(--spectrum-font-size-900);--spectrum-heading-size-l:var(--spectrum-font-size-700);--spectrum-heading-size-m:var(--spectrum-font-size-500);--spectrum-heading-size-s:var(--spectrum-font-size-300);--spectrum-heading-size-xs:var(--spectrum-font-size-200);--spectrum-heading-size-xxs:var(--spectrum-font-size-100);--spectrum-heading-cjk-size-xxxl:var(--spectrum-font-size-1300);--spectrum-heading-cjk-size-xxl:var(--spectrum-font-size-900);--spectrum-heading-cjk-size-xl:var(--spectrum-font-size-800);--spectrum-heading-cjk-size-l:var(--spectrum-font-size-600);--spectrum-heading-cjk-size-m:var(--spectrum-font-size-400);--spectrum-heading-cjk-size-s:var(--spectrum-font-size-300);--spectrum-heading-cjk-size-xs:var(--spectrum-font-size-200);--spectrum-heading-cjk-size-xxs:var(--spectrum-font-size-100);--spectrum-heading-line-height:var(--spectrum-line-height-100);--spectrum-heading-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-heading-margin-top-multiplier:0.88888889;--spectrum-heading-margin-bottom-multiplier:0.25;--spectrum-heading-color:var(--spectrum-gray-900);--spectrum-body-sans-serif-font-family:var(--spectrum-sans-serif-font-family);--spectrum-body-serif-font-family:var(--spectrum-serif-font-family);--spectrum-body-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-body-sans-serif-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-body-serif-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-serif-font-style:var(--spectrum-default-font-style);--spectrum-body-cjk-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-cjk-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-sans-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-body-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-sans-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-serif-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-cjk-emphasized-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-body-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-sans-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-body-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-body-size-xxxl:var(--spectrum-font-size-600);--spectrum-body-size-xxl:var(--spectrum-font-size-500);--spectrum-body-size-xl:var(--spectrum-font-size-400);--spectrum-body-size-l:var(--spectrum-font-size-300);--spectrum-body-size-m:var(--spectrum-font-size-200);--spectrum-body-size-s:var(--spectrum-font-size-100);--spectrum-body-size-xs:var(--spectrum-font-size-75);--spectrum-body-line-height:var(--spectrum-line-height-200);--spectrum-body-cjk-line-height:var(--spectrum-cjk-line-height-200);--spectrum-body-margin-multiplier:0.75;--spectrum-body-color:var(--spectrum-gray-800);--spectrum-detail-sans-serif-font-family:var(--spectrum-sans-serif-font-family);--spectrum-detail-serif-font-family:var(--spectrum-serif-font-family);--spectrum-detail-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-detail-sans-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-light-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-light-font-weight:var(--spectrum-light-font-weight);--spectrum-detail-cjk-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-strong-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-light-strong-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-light-strong-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-cjk-light-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-strong-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-light-strong-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-light-strong-emphasized-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-light-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-size-xl:var(--spectrum-font-size-200);--spectrum-detail-size-l:var(--spectrum-font-size-100);--spectrum-detail-size-m:var(--spectrum-font-size-75);--spectrum-detail-size-s:var(--spectrum-font-size-50);--spectrum-detail-line-height:var(--spectrum-line-height-100);--spectrum-detail-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-detail-margin-top-multiplier:0.88888889;--spectrum-detail-margin-bottom-multiplier:0.25;--spectrum-detail-letter-spacing:0.06em;--spectrum-detail-sans-serif-text-transform:uppercase;--spectrum-detail-serif-text-transform:uppercase;--spectrum-detail-color:var(--spectrum-gray-900);--spectrum-code-font-family:Source Code Pro;--spectrum-code-cjk-font-family:var(--spectrum-code-font-family);--spectrum-code-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-font-style:var(--spectrum-default-font-style);--spectrum-code-cjk-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-cjk-font-style:var(--spectrum-default-font-style);--spectrum-code-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-strong-font-style:var(--spectrum-default-font-style);--spectrum-code-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-code-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-code-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-code-cjk-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-code-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-code-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-code-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-code-size-xl:var(--spectrum-font-size-400);--spectrum-code-size-l:var(--spectrum-font-size-300);--spectrum-code-size-m:var(--spectrum-font-size-200);--spectrum-code-size-s:var(--spectrum-font-size-100);--spectrum-code-size-xs:var(--spectrum-font-size-75);--spectrum-code-line-height:var(--spectrum-line-height-200);--spectrum-code-cjk-line-height:var(--spectrum-cjk-line-height-200);--spectrum-code-color:var(--spectrum-gray-800)}:host,:root{--spectrum-neutral-background-color-selected-default:var(--spectrum-gray-700);--spectrum-neutral-background-color-selected-hover:var(--spectrum-gray-800);--spectrum-neutral-background-color-selected-down:var(--spectrum-gray-900);--spectrum-neutral-background-color-selected-key-focus:var(--spectrum-gray-800);--spectrum-slider-track-thickness:2px;--spectrum-slider-handle-gap:4px;--spectrum-color-loupe-height:64px;--spectrum-color-loupe-width:48px;--spectrum-color-loupe-bottom-to-color-handle:12px;--spectrum-color-loupe-inner-border-width:var(--spectrum-border-width-200);--spectrum-border-width-100:1px;--spectrum-accent-color-100:var(--spectrum-blue-100);--spectrum-accent-color-200:var(--spectrum-blue-200);--spectrum-accent-color-300:var(--spectrum-blue-300);--spectrum-accent-color-400:var(--spectrum-blue-400);--spectrum-accent-color-500:var(--spectrum-blue-500);--spectrum-accent-color-600:var(--spectrum-blue-600);--spectrum-accent-color-700:var(--spectrum-blue-700);--spectrum-accent-color-800:var(--spectrum-blue-800);--spectrum-accent-color-900:var(--spectrum-blue-900);--spectrum-accent-color-1000:var(--spectrum-blue-1000);--spectrum-accent-color-1100:var(--spectrum-blue-1100);--spectrum-accent-color-1200:var(--spectrum-blue-1200);--spectrum-accent-color-1300:var(--spectrum-blue-1300);--spectrum-accent-color-1400:var(--spectrum-blue-1400);--spectrum-heading-sans-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-cjk-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-sans-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-emphasized-font-weight:var(--spectrum-bold-font-weight)}:host,:root{--system-spectrum-actionbutton-background-color-default:var(--spectrum-gray-75);--system-spectrum-actionbutton-background-color-hover:var(--spectrum-gray-200);--system-spectrum-actionbutton-background-color-down:var(--spectrum-gray-300);--system-spectrum-actionbutton-background-color-focus:var(--spectrum-gray-200);--system-spectrum-actionbutton-border-color-default:var(--spectrum-gray-400);--system-spectrum-actionbutton-border-color-hover:var(--spectrum-gray-500);--system-spectrum-actionbutton-border-color-down:var(--spectrum-gray-600);--system-spectrum-actionbutton-border-color-focus:var(--spectrum-gray-500);--system-spectrum-actionbutton-content-color-default:var(--spectrum-neutral-content-color-default);--system-spectrum-actionbutton-content-color-hover:var(--spectrum-neutral-content-color-hover);--system-spectrum-actionbutton-content-color-down:var(--spectrum-neutral-content-color-down);--system-spectrum-actionbutton-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--system-spectrum-actionbutton-background-color-disabled:transparent;--system-spectrum-actionbutton-border-color-disabled:var(--spectrum-disabled-border-color);--system-spectrum-actionbutton-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-actionbutton-quiet-background-color-default:transparent;--system-spectrum-actionbutton-quiet-background-color-hover:var(--spectrum-gray-200);--system-spectrum-actionbutton-quiet-background-color-down:var(--spectrum-gray-300);--system-spectrum-actionbutton-quiet-background-color-focus:var(--spectrum-gray-200);--system-spectrum-actionbutton-quiet-border-color-default:transparent;--system-spectrum-actionbutton-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-quiet-border-color-down:transparent;--system-spectrum-actionbutton-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-quiet-background-color-disabled:transparent;--system-spectrum-actionbutton-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-selected-background-color-default:var(--spectrum-neutral-subdued-background-color-default);--system-spectrum-actionbutton-selected-background-color-hover:var(--spectrum-neutral-subdued-background-color-hover);--system-spectrum-actionbutton-selected-background-color-down:var(--spectrum-neutral-subdued-background-color-down);--system-spectrum-actionbutton-selected-background-color-focus:var(--spectrum-neutral-subdued-background-color-key-focus);--system-spectrum-actionbutton-selected-border-color-default:transparent;--system-spectrum-actionbutton-selected-border-color-hover:transparent;--system-spectrum-actionbutton-selected-border-color-down:transparent;--system-spectrum-actionbutton-selected-border-color-focus:transparent;--system-spectrum-actionbutton-selected-content-color-default:var(--spectrum-white);--system-spectrum-actionbutton-selected-content-color-hover:var(--spectrum-white);--system-spectrum-actionbutton-selected-content-color-down:var(--spectrum-white);--system-spectrum-actionbutton-selected-content-color-focus:var(--spectrum-white);--system-spectrum-actionbutton-selected-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-actionbutton-selected-border-color-disabled:transparent;--system-spectrum-actionbutton-selected-emphasized-background-color-default:var(--spectrum-accent-background-color-default);--system-spectrum-actionbutton-selected-emphasized-background-color-hover:var(--spectrum-accent-background-color-hover);--system-spectrum-actionbutton-selected-emphasized-background-color-down:var(--spectrum-accent-background-color-down);--system-spectrum-actionbutton-selected-emphasized-background-color-focus:var(--spectrum-accent-background-color-key-focus);--system-spectrum-actionbutton-staticblack-quiet-border-color-default:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-default:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-down:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-down:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-background-color-default:transparent;--system-spectrum-actionbutton-staticblack-background-color-hover:var(--spectrum-transparent-black-300);--system-spectrum-actionbutton-staticblack-background-color-down:var(--spectrum-transparent-black-400);--system-spectrum-actionbutton-staticblack-background-color-focus:var(--spectrum-transparent-black-300);--system-spectrum-actionbutton-staticblack-border-color-default:var(--spectrum-transparent-black-400);--system-spectrum-actionbutton-staticblack-border-color-hover:var(--spectrum-transparent-black-500);--system-spectrum-actionbutton-staticblack-border-color-down:var(--spectrum-transparent-black-600);--system-spectrum-actionbutton-staticblack-border-color-focus:var(--spectrum-transparent-black-500);--system-spectrum-actionbutton-staticblack-content-color-default:var(--spectrum-black);--system-spectrum-actionbutton-staticblack-content-color-hover:var(--spectrum-black);--system-spectrum-actionbutton-staticblack-content-color-down:var(--spectrum-black);--system-spectrum-actionbutton-staticblack-content-color-focus:var(--spectrum-black);--system-spectrum-actionbutton-staticblack-focus-indicator-color:var(--spectrum-static-black-focus-indicator-color);--system-spectrum-actionbutton-staticblack-background-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-border-color-disabled:var(--spectrum-disabled-static-black-border-color);--system-spectrum-actionbutton-staticblack-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--system-spectrum-actionbutton-staticblack-selected-background-color-default:var(--spectrum-transparent-black-800);--system-spectrum-actionbutton-staticblack-selected-background-color-hover:var(--spectrum-transparent-black-900);--system-spectrum-actionbutton-staticblack-selected-background-color-down:var(--spectrum-transparent-black-900);--system-spectrum-actionbutton-staticblack-selected-background-color-focus:var(--spectrum-transparent-black-900);--system-spectrum-actionbutton-staticblack-selected-border-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-selected-content-color-default:var(--spectrum-white);--system-spectrum-actionbutton-staticblack-selected-content-color-hover:var(--spectrum-white);--system-spectrum-actionbutton-staticblack-selected-content-color-down:var(--spectrum-white);--system-spectrum-actionbutton-staticblack-selected-content-color-focus:var(--spectrum-white);--system-spectrum-actionbutton-staticblack-selected-background-color-disabled:var(--spectrum-disabled-static-black-background-color);--system-spectrum-actionbutton-staticwhite-background-color-default:transparent;--system-spectrum-actionbutton-staticwhite-background-color-hover:var(--spectrum-transparent-white-300);--system-spectrum-actionbutton-staticwhite-background-color-down:var(--spectrum-transparent-white-400);--system-spectrum-actionbutton-staticwhite-background-color-focus:var(--spectrum-transparent-white-300);--system-spectrum-actionbutton-staticwhite-border-color-default:var(--spectrum-transparent-white-400);--system-spectrum-actionbutton-staticwhite-border-color-hover:var(--spectrum-transparent-white-500);--system-spectrum-actionbutton-staticwhite-border-color-down:var(--spectrum-transparent-white-600);--system-spectrum-actionbutton-staticwhite-border-color-focus:var(--spectrum-transparent-white-500);--system-spectrum-actionbutton-staticwhite-content-color-default:var(--spectrum-white);--system-spectrum-actionbutton-staticwhite-content-color-hover:var(--spectrum-white);--system-spectrum-actionbutton-staticwhite-content-color-down:var(--spectrum-white);--system-spectrum-actionbutton-staticwhite-content-color-focus:var(--spectrum-white);--system-spectrum-actionbutton-staticwhite-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color);--system-spectrum-actionbutton-staticwhite-background-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-border-color-disabled:var(--spectrum-disabled-static-white-border-color);--system-spectrum-actionbutton-staticwhite-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--system-spectrum-actionbutton-staticwhite-selected-background-color-default:var(--spectrum-transparent-white-800);--system-spectrum-actionbutton-staticwhite-selected-background-color-hover:var(--spectrum-transparent-white-900);--system-spectrum-actionbutton-staticwhite-selected-background-color-down:var(--spectrum-transparent-white-900);--system-spectrum-actionbutton-staticwhite-selected-background-color-focus:var(--spectrum-transparent-white-900);--system-spectrum-actionbutton-staticwhite-selected-content-color-default:var(--spectrum-black);--system-spectrum-actionbutton-staticwhite-selected-content-color-hover:var(--spectrum-black);--system-spectrum-actionbutton-staticwhite-selected-content-color-down:var(--spectrum-black);--system-spectrum-actionbutton-staticwhite-selected-content-color-focus:var(--spectrum-black);--system-spectrum-actionbutton-staticwhite-selected-background-color-disabled:var(--spectrum-disabled-static-white-background-color);--system-spectrum-actionbutton-staticwhite-selected-border-color-disabled:transparent}:host,:root{--system-spectrum-checkbox-control-color-default:var(--spectrum-gray-600);--system-spectrum-checkbox-control-color-hover:var(--spectrum-gray-700);--system-spectrum-checkbox-control-color-down:var(--spectrum-gray-800);--system-spectrum-checkbox-control-color-focus:var(--spectrum-gray-700);--system-spectrum-checkbox-control-selected-color-default:var(--spectrum-gray-700);--system-spectrum-checkbox-control-selected-color-hover:var(--spectrum-gray-800);--system-spectrum-checkbox-control-selected-color-down:var(--spectrum-gray-900)}:host,:root{--system-spectrum-button-background-color-default:var(--spectrum-gray-75);--system-spectrum-button-background-color-hover:var(--spectrum-gray-200);--system-spectrum-button-background-color-down:var(--spectrum-gray-300);--system-spectrum-button-background-color-focus:var(--spectrum-gray-200);--system-spectrum-button-border-color-default:var(--spectrum-gray-400);--system-spectrum-button-border-color-hover:var(--spectrum-gray-500);--system-spectrum-button-border-color-down:var(--spectrum-gray-600);--system-spectrum-button-border-color-focus:var(--spectrum-gray-500);--system-spectrum-button-content-color-default:var(--spectrum-neutral-content-color-default);--system-spectrum-button-content-color-hover:var(--spectrum-neutral-content-color-hover);--system-spectrum-button-content-color-down:var(--spectrum-neutral-content-color-down);--system-spectrum-button-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--system-spectrum-button-background-color-disabled:transparent;--system-spectrum-button-border-color-disabled:var(--spectrum-disabled-border-color);--system-spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-accent-background-color-default:var(--spectrum-accent-background-color-default);--system-spectrum-button-accent-background-color-hover:var(--spectrum-accent-background-color-hover);--system-spectrum-button-accent-background-color-down:var(--spectrum-accent-background-color-down);--system-spectrum-button-accent-background-color-focus:var(--spectrum-accent-background-color-key-focus);--system-spectrum-button-accent-border-color-default:transparent;--system-spectrum-button-accent-border-color-hover:transparent;--system-spectrum-button-accent-border-color-down:transparent;--system-spectrum-button-accent-border-color-focus:transparent;--system-spectrum-button-accent-content-color-default:var(--spectrum-white);--system-spectrum-button-accent-content-color-hover:var(--spectrum-white);--system-spectrum-button-accent-content-color-down:var(--spectrum-white);--system-spectrum-button-accent-content-color-focus:var(--spectrum-white);--system-spectrum-button-accent-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-button-accent-border-color-disabled:transparent;--system-spectrum-button-accent-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-accent-outline-background-color-default:transparent;--system-spectrum-button-accent-outline-background-color-hover:var(--spectrum-accent-color-200);--system-spectrum-button-accent-outline-background-color-down:var(--spectrum-accent-color-300);--system-spectrum-button-accent-outline-background-color-focus:var(--spectrum-accent-color-200);--system-spectrum-button-accent-outline-border-color-default:var(--spectrum-accent-color-900);--system-spectrum-button-accent-outline-border-color-hover:var(--spectrum-accent-color-1000);--system-spectrum-button-accent-outline-border-color-down:var(--spectrum-accent-color-1100);--system-spectrum-button-accent-outline-border-color-focus:var(--spectrum-accent-color-1000);--system-spectrum-button-accent-outline-content-color-default:var(--spectrum-accent-content-color-default);--system-spectrum-button-accent-outline-content-color-hover:var(--spectrum-accent-content-color-hover);--system-spectrum-button-accent-outline-content-color-down:var(--spectrum-accent-content-color-down);--system-spectrum-button-accent-outline-content-color-focus:var(--spectrum-accent-content-color-key-focus);--system-spectrum-button-accent-outline-background-color-disabled:transparent;--system-spectrum-button-accent-outline-border-color-disabled:var(--spectrum-disabled-border-color);--system-spectrum-button-accent-outline-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-negative-background-color-default:var(--spectrum-negative-background-color-default);--system-spectrum-button-negative-background-color-hover:var(--spectrum-negative-background-color-hover);--system-spectrum-button-negative-background-color-down:var(--spectrum-negative-background-color-down);--system-spectrum-button-negative-background-color-focus:var(--spectrum-negative-background-color-key-focus);--system-spectrum-button-negative-border-color-default:transparent;--system-spectrum-button-negative-border-color-hover:transparent;--system-spectrum-button-negative-border-color-down:transparent;--system-spectrum-button-negative-border-color-focus:transparent;--system-spectrum-button-negative-content-color-default:var(--spectrum-white);--system-spectrum-button-negative-content-color-hover:var(--spectrum-white);--system-spectrum-button-negative-content-color-down:var(--spectrum-white);--system-spectrum-button-negative-content-color-focus:var(--spectrum-white);--system-spectrum-button-negative-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-button-negative-border-color-disabled:transparent;--system-spectrum-button-negative-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-negative-outline-background-color-default:transparent;--system-spectrum-button-negative-outline-background-color-hover:var(--spectrum-negative-color-200);--system-spectrum-button-negative-outline-background-color-down:var(--spectrum-negative-color-300);--system-spectrum-button-negative-outline-background-color-focus:var(--spectrum-negative-color-200);--system-spectrum-button-negative-outline-border-color-default:var(--spectrum-negative-color-900);--system-spectrum-button-negative-outline-border-color-hover:var(--spectrum-negative-color-1000);--system-spectrum-button-negative-outline-border-color-down:var(--spectrum-negative-color-1100);--system-spectrum-button-negative-outline-border-color-focus:var(--spectrum-negative-color-1000);--system-spectrum-button-negative-outline-content-color-default:var(--spectrum-negative-content-color-default);--system-spectrum-button-negative-outline-content-color-hover:var(--spectrum-negative-content-color-hover);--system-spectrum-button-negative-outline-content-color-down:var(--spectrum-negative-content-color-down);--system-spectrum-button-negative-outline-content-color-focus:var(--spectrum-negative-content-color-key-focus);--system-spectrum-button-negative-outline-background-color-disabled:transparent;--system-spectrum-button-negative-outline-border-color-disabled:var(--spectrum-disabled-border-color);--system-spectrum-button-negative-outline-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-primary-background-color-default:var(--spectrum-neutral-background-color-default);--system-spectrum-button-primary-background-color-hover:var(--spectrum-neutral-background-color-hover);--system-spectrum-button-primary-background-color-down:var(--spectrum-neutral-background-color-down);--system-spectrum-button-primary-background-color-focus:var(--spectrum-neutral-background-color-key-focus);--system-spectrum-button-primary-border-color-default:transparent;--system-spectrum-button-primary-border-color-hover:transparent;--system-spectrum-button-primary-border-color-down:transparent;--system-spectrum-button-primary-border-color-focus:transparent;--system-spectrum-button-primary-content-color-default:var(--spectrum-white);--system-spectrum-button-primary-content-color-hover:var(--spectrum-white);--system-spectrum-button-primary-content-color-down:var(--spectrum-white);--system-spectrum-button-primary-content-color-focus:var(--spectrum-white);--system-spectrum-button-primary-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-button-primary-border-color-disabled:transparent;--system-spectrum-button-primary-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-primary-outline-background-color-default:transparent;--system-spectrum-button-primary-outline-background-color-hover:var(--spectrum-gray-300);--system-spectrum-button-primary-outline-background-color-down:var(--spectrum-gray-400);--system-spectrum-button-primary-outline-background-color-focus:var(--spectrum-gray-300);--system-spectrum-button-primary-outline-border-color-default:var(--spectrum-gray-800);--system-spectrum-button-primary-outline-border-color-hover:var(--spectrum-gray-900);--system-spectrum-button-primary-outline-border-color-down:var(--spectrum-gray-900);--system-spectrum-button-primary-outline-border-color-focus:var(--spectrum-gray-900);--system-spectrum-button-primary-outline-content-color-default:var(--spectrum-neutral-content-color-default);--system-spectrum-button-primary-outline-content-color-hover:var(--spectrum-neutral-content-color-hover);--system-spectrum-button-primary-outline-content-color-down:var(--spectrum-neutral-content-color-down);--system-spectrum-button-primary-outline-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--system-spectrum-button-primary-outline-background-color-disabled:transparent;--system-spectrum-button-primary-outline-border-color-disabled:var(--spectrum-disabled-border-color);--system-spectrum-button-primary-outline-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-secondary-background-color-default:var(--spectrum-gray-200);--system-spectrum-button-secondary-background-color-hover:var(--spectrum-gray-300);--system-spectrum-button-secondary-background-color-down:var(--spectrum-gray-400);--system-spectrum-button-secondary-background-color-focus:var(--spectrum-gray-300);--system-spectrum-button-secondary-border-color-default:transparent;--system-spectrum-button-secondary-border-color-hover:transparent;--system-spectrum-button-secondary-border-color-down:transparent;--system-spectrum-button-secondary-border-color-focus:transparent;--system-spectrum-button-secondary-content-color-default:var(--spectrum-neutral-content-color-default);--system-spectrum-button-secondary-content-color-hover:var(--spectrum-neutral-content-color-hover);--system-spectrum-button-secondary-content-color-down:var(--spectrum-neutral-content-color-down);--system-spectrum-button-secondary-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--system-spectrum-button-secondary-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-button-secondary-border-color-disabled:transparent;--system-spectrum-button-secondary-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-secondary-outline-background-color-default:transparent;--system-spectrum-button-secondary-outline-background-color-hover:var(--spectrum-gray-300);--system-spectrum-button-secondary-outline-background-color-down:var(--spectrum-gray-400);--system-spectrum-button-secondary-outline-background-color-focus:var(--spectrum-gray-300);--system-spectrum-button-secondary-outline-border-color-default:var(--spectrum-gray-300);--system-spectrum-button-secondary-outline-border-color-hover:var(--spectrum-gray-400);--system-spectrum-button-secondary-outline-border-color-down:var(--spectrum-gray-500);--system-spectrum-button-secondary-outline-border-color-focus:var(--spectrum-gray-400);--system-spectrum-button-secondary-outline-content-color-default:var(--spectrum-neutral-content-color-default);--system-spectrum-button-secondary-outline-content-color-hover:var(--spectrum-neutral-content-color-hover);--system-spectrum-button-secondary-outline-content-color-down:var(--spectrum-neutral-content-color-down);--system-spectrum-button-secondary-outline-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--system-spectrum-button-secondary-outline-background-color-disabled:transparent;--system-spectrum-button-secondary-outline-border-color-disabled:var(--spectrum-disabled-border-color);--system-spectrum-button-secondary-outline-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-quiet-background-color-default:transparent;--system-spectrum-button-quiet-background-color-hover:var(--spectrum-gray-200);--system-spectrum-button-quiet-background-color-down:var(--spectrum-gray-300);--system-spectrum-button-quiet-background-color-focus:var(--spectrum-gray-200);--system-spectrum-button-quiet-border-color-default:transparent;--system-spectrum-button-quiet-border-color-hover:transparent;--system-spectrum-button-quiet-border-color-down:transparent;--system-spectrum-button-quiet-border-color-focus:transparent;--system-spectrum-button-quiet-background-color-disabled:transparent;--system-spectrum-button-quiet-border-color-disabled:transparent;--system-spectrum-button-selected-background-color-default:var(--spectrum-neutral-subdued-background-color-default);--system-spectrum-button-selected-background-color-hover:var(--spectrum-neutral-subdued-background-color-hover);--system-spectrum-button-selected-background-color-down:var(--spectrum-neutral-subdued-background-color-down);--system-spectrum-button-selected-background-color-focus:var(--spectrum-neutral-subdued-background-color-key-focus);--system-spectrum-button-selected-border-color-default:transparent;--system-spectrum-button-selected-border-color-hover:transparent;--system-spectrum-button-selected-border-color-down:transparent;--system-spectrum-button-selected-border-color-focus:transparent;--system-spectrum-button-selected-content-color-default:var(--spectrum-white);--system-spectrum-button-selected-content-color-hover:var(--spectrum-white);--system-spectrum-button-selected-content-color-down:var(--spectrum-white);--system-spectrum-button-selected-content-color-focus:var(--spectrum-white);--system-spectrum-button-selected-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-button-selected-border-color-disabled:transparent;--system-spectrum-button-selected-emphasized-background-color-default:var(--spectrum-accent-background-color-default);--system-spectrum-button-selected-emphasized-background-color-hover:var(--spectrum-accent-background-color-hover);--system-spectrum-button-selected-emphasized-background-color-down:var(--spectrum-accent-background-color-down);--system-spectrum-button-selected-emphasized-background-color-focus:var(--spectrum-accent-background-color-key-focus);--system-spectrum-button-staticblack-quiet-border-color-default:transparent;--system-spectrum-button-staticwhite-quiet-border-color-default:transparent;--system-spectrum-button-staticblack-quiet-border-color-hover:transparent;--system-spectrum-button-staticwhite-quiet-border-color-hover:transparent;--system-spectrum-button-staticblack-quiet-border-color-down:transparent;--system-spectrum-button-staticwhite-quiet-border-color-down:transparent;--system-spectrum-button-staticblack-quiet-border-color-focus:transparent;--system-spectrum-button-staticwhite-quiet-border-color-focus:transparent;--system-spectrum-button-staticblack-quiet-border-color-disabled:transparent;--system-spectrum-button-staticwhite-quiet-border-color-disabled:transparent;--system-spectrum-button-staticwhite-background-color-default:var(--spectrum-transparent-white-800);--system-spectrum-button-staticwhite-background-color-hover:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-background-color-down:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-background-color-focus:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-border-color-default:transparent;--system-spectrum-button-staticwhite-border-color-hover:transparent;--system-spectrum-button-staticwhite-border-color-down:transparent;--system-spectrum-button-staticwhite-border-color-focus:transparent;--system-spectrum-button-staticwhite-content-color-default:var(--spectrum-black);--system-spectrum-button-staticwhite-content-color-hover:var(--spectrum-black);--system-spectrum-button-staticwhite-content-color-down:var(--spectrum-black);--system-spectrum-button-staticwhite-content-color-focus:var(--spectrum-black);--system-spectrum-button-staticwhite-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color);--system-spectrum-button-staticwhite-background-color-disabled:var(--spectrum-disabled-static-white-background-color);--system-spectrum-button-staticwhite-border-color-disabled:transparent;--system-spectrum-button-staticwhite-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--system-spectrum-button-staticwhite-outline-background-color-default:transparent;--system-spectrum-button-staticwhite-outline-background-color-hover:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-outline-background-color-down:var(--spectrum-transparent-white-400);--system-spectrum-button-staticwhite-outline-background-color-focus:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-outline-border-color-default:var(--spectrum-transparent-white-800);--system-spectrum-button-staticwhite-outline-border-color-hover:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-outline-border-color-down:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-outline-border-color-focus:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-outline-content-color-default:var(--spectrum-white);--system-spectrum-button-staticwhite-outline-content-color-hover:var(--spectrum-white);--system-spectrum-button-staticwhite-outline-content-color-down:var(--spectrum-white);--system-spectrum-button-staticwhite-outline-content-color-focus:var(--spectrum-white);--system-spectrum-button-staticwhite-outline-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color);--system-spectrum-button-staticwhite-outline-background-color-disabled:transparent;--system-spectrum-button-staticwhite-outline-border-color-disabled:var(--spectrum-disabled-static-white-border-color);--system-spectrum-button-staticwhite-outline-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--system-spectrum-button-staticwhite-selected-background-color-default:var(--spectrum-transparent-white-800);--system-spectrum-button-staticwhite-selected-background-color-hover:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-selected-background-color-down:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-selected-background-color-focus:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-selected-content-color-default:var(--spectrum-black);--system-spectrum-button-staticwhite-selected-content-color-hover:var(--spectrum-black);--system-spectrum-button-staticwhite-selected-content-color-down:var(--spectrum-black);--system-spectrum-button-staticwhite-selected-content-color-focus:var(--spectrum-black);--system-spectrum-button-staticwhite-selected-background-color-disabled:var(--spectrum-disabled-static-white-background-color);--system-spectrum-button-staticwhite-selected-border-color-disabled:transparent;--system-spectrum-button-staticwhite-secondary-background-color-default:var(--spectrum-transparent-white-200);--system-spectrum-button-staticwhite-secondary-background-color-hover:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-secondary-background-color-down:var(--spectrum-transparent-white-400);--system-spectrum-button-staticwhite-secondary-background-color-focus:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-secondary-border-color-default:transparent;--system-spectrum-button-staticwhite-secondary-border-color-hover:transparent;--system-spectrum-button-staticwhite-secondary-border-color-down:transparent;--system-spectrum-button-staticwhite-secondary-border-color-focus:transparent;--system-spectrum-button-staticwhite-secondary-content-color-default:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-content-color-hover:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-content-color-down:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-content-color-focus:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color);--system-spectrum-button-staticwhite-secondary-background-color-disabled:var(--spectrum-disabled-static-white-background-color);--system-spectrum-button-staticwhite-secondary-border-color-disabled:transparent;--system-spectrum-button-staticwhite-secondary-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--system-spectrum-button-staticwhite-secondary-outline-background-color-default:transparent;--system-spectrum-button-staticwhite-secondary-outline-background-color-hover:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-secondary-outline-background-color-down:var(--spectrum-transparent-white-400);--system-spectrum-button-staticwhite-secondary-outline-background-color-focus:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-secondary-outline-border-color-default:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-secondary-outline-border-color-hover:var(--spectrum-transparent-white-400);--system-spectrum-button-staticwhite-secondary-outline-border-color-down:var(--spectrum-transparent-white-500);--system-spectrum-button-staticwhite-secondary-outline-border-color-focus:var(--spectrum-transparent-white-400);--system-spectrum-button-staticwhite-secondary-outline-content-color-default:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-outline-content-color-hover:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-outline-content-color-down:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-outline-content-color-focus:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-outline-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color);--system-spectrum-button-staticwhite-secondary-outline-background-color-disabled:transparent;--system-spectrum-button-staticwhite-secondary-outline-border-color-disabled:var(--spectrum-disabled-static-white-border-color);--system-spectrum-button-staticwhite-secondary-outline-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--system-spectrum-button-staticblack-background-color-default:var(--spectrum-transparent-black-800);--system-spectrum-button-staticblack-background-color-hover:var(--spectrum-transparent-black-900);--system-spectrum-button-staticblack-background-color-down:var(--spectrum-transparent-black-900);--system-spectrum-button-staticblack-background-color-focus:var(--spectrum-transparent-black-900);--system-spectrum-button-staticblack-border-color-default:transparent;--system-spectrum-button-staticblack-border-color-hover:transparent;--system-spectrum-button-staticblack-border-color-down:transparent;--system-spectrum-button-staticblack-border-color-focus:transparent;--system-spectrum-button-staticblack-content-color-default:var(--spectrum-white);--system-spectrum-button-staticblack-content-color-hover:var(--spectrum-white);--system-spectrum-button-staticblack-content-color-down:var(--spectrum-white);--system-spectrum-button-staticblack-content-color-focus:var(--spectrum-white);--system-spectrum-button-staticblack-focus-indicator-color:var(--spectrum-static-black-focus-indicator-color);--system-spectrum-button-staticblack-background-color-disabled:var(--spectrum-disabled-static-black-background-color);--system-spectrum-button-staticblack-border-color-disabled:transparent;--system-spectrum-button-staticblack-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--system-spectrum-button-staticblack-outline-background-color-default:transparent;--system-spectrum-button-staticblack-outline-background-color-hover:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-outline-background-color-down:var(--spectrum-transparent-black-400);--system-spectrum-button-staticblack-outline-background-color-focus:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-outline-border-color-default:var(--spectrum-transparent-black-400);--system-spectrum-button-staticblack-outline-border-color-hover:var(--spectrum-transparent-black-500);--system-spectrum-button-staticblack-outline-border-color-down:var(--spectrum-transparent-black-600);--system-spectrum-button-staticblack-outline-border-color-focus:var(--spectrum-transparent-black-500);--system-spectrum-button-staticblack-outline-content-color-default:var(--spectrum-black);--system-spectrum-button-staticblack-outline-content-color-hover:var(--spectrum-black);--system-spectrum-button-staticblack-outline-content-color-down:var(--spectrum-black);--system-spectrum-button-staticblack-outline-content-color-focus:var(--spectrum-black);--system-spectrum-button-staticblack-outline-focus-indicator-color:var(--spectrum-static-black-focus-indicator-color);--system-spectrum-button-staticblack-outline-background-color-disabled:transparent;--system-spectrum-button-staticblack-outline-border-color-disabled:var(--spectrum-disabled-static-black-border-color);--system-spectrum-button-staticblack-outline-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--system-spectrum-button-staticblack-secondary-background-color-default:var(--spectrum-transparent-black-200);--system-spectrum-button-staticblack-secondary-background-color-hover:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-secondary-background-color-down:var(--spectrum-transparent-black-400);--system-spectrum-button-staticblack-secondary-background-color-focus:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-secondary-border-color-default:transparent;--system-spectrum-button-staticblack-secondary-border-color-hover:transparent;--system-spectrum-button-staticblack-secondary-border-color-down:transparent;--system-spectrum-button-staticblack-secondary-border-color-focus:transparent;--system-spectrum-button-staticblack-secondary-content-color-default:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-content-color-hover:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-content-color-down:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-content-color-focus:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-focus-indicator-color:var(--spectrum-static-black-focus-indicator-color);--system-spectrum-button-staticblack-secondary-background-color-disabled:var(--spectrum-disabled-static-black-background-color);--system-spectrum-button-staticblack-secondary-border-color-disabled:transparent;--system-spectrum-button-staticblack-secondary-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--system-spectrum-button-staticblack-secondary-outline-background-color-default:transparent;--system-spectrum-button-staticblack-secondary-outline-background-color-hover:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-secondary-outline-background-color-down:var(--spectrum-transparent-black-400);--system-spectrum-button-staticblack-secondary-outline-background-color-focus:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-secondary-outline-border-color-default:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-secondary-outline-border-color-hover:var(--spectrum-transparent-black-400);--system-spectrum-button-staticblack-secondary-outline-border-color-down:var(--spectrum-transparent-black-500);--system-spectrum-button-staticblack-secondary-outline-border-color-focus:var(--spectrum-transparent-black-400);--system-spectrum-button-staticblack-secondary-outline-content-color-default:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-outline-content-color-hover:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-outline-content-color-down:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-outline-content-color-focus:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-outline-focus-indicator-color:var(--spectrum-static-black-focus-indicator-color);--system-spectrum-button-staticblack-secondary-outline-background-color-disabled:transparent;--system-spectrum-button-staticblack-secondary-outline-border-color-disabled:var(--spectrum-disabled-static-black-border-color);--system-spectrum-button-staticblack-secondary-outline-content-color-disabled:var(--spectrum-disabled-static-black-content-color)}:host,:root{--system-spectrum-closebutton-background-color-default:transparent;--system-spectrum-closebutton-background-color-hover:var(--spectrum-gray-200);--system-spectrum-closebutton-background-color-down:var(--spectrum-gray-300);--system-spectrum-closebutton-background-color-focus:var(--spectrum-gray-200)}:host,:root{--system-spectrum-radio-button-border-color-default:var(--spectrum-gray-600);--system-spectrum-radio-button-border-color-hover:var(--spectrum-gray-700);--system-spectrum-radio-button-border-color-down:var(--spectrum-gray-800);--system-spectrum-radio-button-border-color-focus:var(--spectrum-gray-700);--system-spectrum-radio-button-checked-border-color-default:var(--spectrum-gray-700);--system-spectrum-radio-button-checked-border-color-hover:var(--spectrum-gray-800);--system-spectrum-radio-button-checked-border-color-down:var(--spectrum-gray-900);--system-spectrum-radio-button-checked-border-color-focus:var(--spectrum-gray-800);--system-spectrum-radio-emphasized-button-checked-border-color-default:var(--spectrum-accent-color-900);--system-spectrum-radio-emphasized-button-checked-border-color-hover:var(--spectrum-accent-color-1000);--system-spectrum-radio-emphasized-button-checked-border-color-down:var(--spectrum-accent-color-1100);--system-spectrum-radio-emphasized-button-checked-border-color-focus:var(--spectrum-accent-color-1000)}:host,:root{--system-spectrum-switch-background-color-selected-default:var(--spectrum-gray-700);--system-spectrum-switch-background-color-selected-hover:var(--spectrum-gray-800);--system-spectrum-switch-background-color-selected-down:var(--spectrum-gray-900);--system-spectrum-switch-background-color-selected-focus:var(--spectrum-gray-800);--system-spectrum-switch-handle-border-color-default:var(--spectrum-gray-600);--system-spectrum-switch-handle-border-color-hover:var(--spectrum-gray-700);--system-spectrum-switch-handle-border-color-down:var(--spectrum-gray-800);--system-spectrum-switch-handle-border-color-focus:var(--spectrum-gray-700);--system-spectrum-switch-handle-border-color-selected-default:var(--spectrum-gray-700);--system-spectrum-switch-handle-border-color-selected-hover:var(--spectrum-gray-800);--system-spectrum-switch-handle-border-color-selected-down:var(--spectrum-gray-900);--system-spectrum-switch-handle-border-color-selected-focus:var(--spectrum-gray-800)}:host,:root{--system-spectrum-toast-background-color-default:var(--spectrum-neutral-subdued-background-color-default)}:host,:root{--system-spectrum-actiongroup-gap-size-compact:0;--system-spectrum-actiongroup-horizontal-spacing-compact:-1px;--system-spectrum-actiongroup-vertical-spacing-compact:-1px}:host,:root{--system-spectrum-tag-border-color:var(--spectrum-gray-700);--system-spectrum-tag-border-color-hover:var(--spectrum-gray-800);--system-spectrum-tag-border-color-active:var(--spectrum-gray-900);--system-spectrum-tag-border-color-focus:var(--spectrum-gray-800);--system-spectrum-tag-size-small-corner-radius:var(--spectrum-corner-radius-100);--system-spectrum-tag-size-medium-corner-radius:var(--spectrum-corner-radius-100);--system-spectrum-tag-size-large-corner-radius:var(--spectrum-corner-radius-100);--system-spectrum-tag-background-color:var(--spectrum-gray-75);--system-spectrum-tag-background-color-hover:var(--spectrum-gray-75);--system-spectrum-tag-background-color-active:var(--spectrum-gray-200);--system-spectrum-tag-background-color-focus:var(--spectrum-gray-75);--system-spectrum-tag-content-color:var(--spectrum-neutral-subdued-content-color-default);--system-spectrum-tag-content-color-hover:var(--spectrum-neutral-subdued-content-color-hover);--system-spectrum-tag-content-color-active:var(--spectrum-neutral-subdued-content-color-down);--system-spectrum-tag-content-color-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--system-spectrum-tag-border-color-selected:var(--spectrum-neutral-subdued-background-color-default);--system-spectrum-tag-border-color-selected-hover:var(--spectrum-neutral-subdued-background-color-hover);--system-spectrum-tag-border-color-selected-active:var(--spectrum-neutral-subdued-background-color-down);--system-spectrum-tag-border-color-selected-focus:var(--spectrum-neutral-subdued-background-color-key-focus);--system-spectrum-tag-background-color-selected:var(--spectrum-neutral-subdued-background-color-default);--system-spectrum-tag-background-color-selected-hover:var(--spectrum-neutral-subdued-background-color-hover);--system-spectrum-tag-background-color-selected-active:var(--spectrum-neutral-subdued-background-color-down);--system-spectrum-tag-background-color-selected-focus:var(--spectrum-neutral-subdued-background-color-key-focus);--system-spectrum-tag-border-color-disabled:transparent;--system-spectrum-tag-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-tag-size-small-spacing-inline-start:var(--spectrum-component-edge-to-visual-75);--system-spectrum-tag-size-small-label-spacing-inline-end:var(--spectrum-component-edge-to-text-75);--system-spectrum-tag-size-small-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-75);--system-spectrum-tag-size-medium-spacing-inline-start:var(--spectrum-component-edge-to-visual-100);--system-spectrum-tag-size-medium-label-spacing-inline-end:var(--spectrum-component-edge-to-text-100);--system-spectrum-tag-size-medium-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-100);--system-spectrum-tag-size-large-spacing-inline-start:var(--spectrum-component-edge-to-visual-200);--system-spectrum-tag-size-large-label-spacing-inline-end:var(--spectrum-component-edge-to-text-200);--system-spectrum-tag-size-large-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-200)}:host,:root{--system-spectrum-tooltip-backgound-color-default-neutral:var(--spectrum-neutral-subdued-background-color-default)}:host,:root{--system-spectrum-picker-background-color-default:var(--spectrum-gray-75);--system-spectrum-picker-background-color-default-open:var(--spectrum-gray-200);--system-spectrum-picker-background-color-active:var(--spectrum-gray-300);--system-spectrum-picker-background-color-hover:var(--spectrum-gray-200);--system-spectrum-picker-background-color-hover-open:var(--spectrum-gray-200);--system-spectrum-picker-background-color-key-focus:var(--spectrum-gray-200);--system-spectrum-picker-border-color-default:var(--spectrum-gray-400);--system-spectrum-picker-border-color-default-open:var(--spectrum-gray-400);--system-spectrum-picker-border-color-hover:var(--spectrum-gray-500);--system-spectrum-picker-border-color-hover-open:var(--spectrum-gray-500);--system-spectrum-picker-border-color-active:var(--spectrum-gray-600);--system-spectrum-picker-border-color-key-focus:var(--spectrum-gray-500)}:host,:root{--system:spectrum}:host,:root{--spectrum-animation-linear:cubic-bezier(0,0,1,1);--spectrum-animation-duration-0:0ms;--spectrum-animation-duration-100:130ms;--spectrum-animation-duration-200:160ms;--spectrum-animation-duration-300:190ms;--spectrum-animation-duration-400:220ms;--spectrum-animation-duration-500:250ms;--spectrum-animation-duration-600:300ms;--spectrum-animation-duration-700:350ms;--spectrum-animation-duration-800:400ms;--spectrum-animation-duration-900:450ms;--spectrum-animation-duration-1000:500ms;--spectrum-animation-duration-2000:1000ms;--spectrum-animation-duration-4000:2000ms;--spectrum-animation-ease-in-out:cubic-bezier(.45,0,.40,1);--spectrum-animation-ease-in:cubic-bezier(.50,0,1,1);--spectrum-animation-ease-out:cubic-bezier(0,0,0.40,1);--spectrum-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-sans-serif-font:var(--spectrum-sans-serif-font-family);--spectrum-sans-font-family-stack:var(--spectrum-sans-serif-font),adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-serif-font:var(--spectrum-serif-font-family);--spectrum-serif-font-family-stack:var(--spectrum-serif-font),adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-code-font-family-stack:"Source Code Pro",Monaco,monospace;--spectrum-cjk-font:var(--spectrum-cjk-font-family);--spectrum-cjk-font-family-stack:var(--spectrum-cjk-font),adobe-clean-han-japanese,sans-serif;--spectrum-docs-static-white-background-color:#0f797d;--spectrum-docs-static-black-background-color:#cef7f3}:host,:root{font-family:var(--spectrum-alias-body-text-font-family);font-size:var(--spectrum-alias-font-size-default)}:host:lang(ar),:root:lang(ar){font-family:var(--spectrum-alias-font-family-ar)}:host:lang(he),:root:lang(he){font-family:var(--spectrum-alias-font-family-he)}:host:lang(zh-Hans),:root:lang(zh-Hans){font-family:var(--spectrum-alias-font-family-zhhans)}:host:lang(zh-Hant),:root:lang(zh-Hant){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(zh),:root:lang(zh){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(ko),:root:lang(ko){font-family:var(--spectrum-alias-font-family-ko)}:host:lang(ja),:root:lang(ja){font-family:var(--spectrum-alias-font-family-ja)}:host{display:block}#scale,#theme{height:100%;width:100%}
`;i.registerThemeFragment("spectrum","theme",n),i.registerThemeFragment("dark","color",e);const l=t.iv`
:host,:root{--spectrum-global-dimension-scale-factor:1;--spectrum-global-dimension-size-0:0px;--spectrum-global-dimension-size-10:1px;--spectrum-global-dimension-size-25:2px;--spectrum-global-dimension-size-30:2px;--spectrum-global-dimension-size-40:3px;--spectrum-global-dimension-size-50:4px;--spectrum-global-dimension-size-65:5px;--spectrum-global-dimension-size-75:6px;--spectrum-global-dimension-size-85:7px;--spectrum-global-dimension-size-100:8px;--spectrum-global-dimension-size-115:9px;--spectrum-global-dimension-size-125:10px;--spectrum-global-dimension-size-130:11px;--spectrum-global-dimension-size-150:12px;--spectrum-global-dimension-size-160:13px;--spectrum-global-dimension-size-175:14px;--spectrum-global-dimension-size-185:15px;--spectrum-global-dimension-size-200:16px;--spectrum-global-dimension-size-225:18px;--spectrum-global-dimension-size-250:20px;--spectrum-global-dimension-size-275:22px;--spectrum-global-dimension-size-300:24px;--spectrum-global-dimension-size-325:26px;--spectrum-global-dimension-size-350:28px;--spectrum-global-dimension-size-400:32px;--spectrum-global-dimension-size-450:36px;--spectrum-global-dimension-size-500:40px;--spectrum-global-dimension-size-550:44px;--spectrum-global-dimension-size-600:48px;--spectrum-global-dimension-size-650:52px;--spectrum-global-dimension-size-675:54px;--spectrum-global-dimension-size-700:56px;--spectrum-global-dimension-size-750:60px;--spectrum-global-dimension-size-800:64px;--spectrum-global-dimension-size-900:72px;--spectrum-global-dimension-size-1000:80px;--spectrum-global-dimension-size-1125:90px;--spectrum-global-dimension-size-1200:96px;--spectrum-global-dimension-size-1250:100px;--spectrum-global-dimension-size-1600:128px;--spectrum-global-dimension-size-1700:136px;--spectrum-global-dimension-size-1800:144px;--spectrum-global-dimension-size-2000:160px;--spectrum-global-dimension-size-2400:192px;--spectrum-global-dimension-size-2500:200px;--spectrum-global-dimension-size-3000:240px;--spectrum-global-dimension-size-3400:272px;--spectrum-global-dimension-size-3600:288px;--spectrum-global-dimension-size-4600:368px;--spectrum-global-dimension-size-5000:400px;--spectrum-global-dimension-size-6000:480px;--spectrum-global-dimension-font-size-25:10px;--spectrum-global-dimension-font-size-50:11px;--spectrum-global-dimension-font-size-75:12px;--spectrum-global-dimension-font-size-100:14px;--spectrum-global-dimension-font-size-150:15px;--spectrum-global-dimension-font-size-200:16px;--spectrum-global-dimension-font-size-300:18px;--spectrum-global-dimension-font-size-400:20px;--spectrum-global-dimension-font-size-500:22px;--spectrum-global-dimension-font-size-600:25px;--spectrum-global-dimension-font-size-700:28px;--spectrum-global-dimension-font-size-800:32px;--spectrum-global-dimension-font-size-900:36px;--spectrum-global-dimension-font-size-1000:40px;--spectrum-global-dimension-font-size-1100:45px;--spectrum-global-dimension-font-size-1200:50px;--spectrum-global-dimension-font-size-1300:60px;--spectrum-alias-item-text-padding-top-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-text-padding-bottom-s:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-item-workflow-padding-left-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-rounded-workflow-padding-left-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-rounded-workflow-padding-left-xl:21px;--spectrum-alias-item-mark-padding-top-m:var(--spectrum-global-dimension-static-size-75);--spectrum-alias-item-mark-padding-bottom-m:var(--spectrum-global-dimension-static-size-75);--spectrum-alias-item-mark-padding-left-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-1-size-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-1-size-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-2-size-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-3-height-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-3-width-s:23px;--spectrum-alias-item-control-3-width-m:var(--spectrum-global-dimension-static-size-325);--spectrum-alias-item-control-3-width-l:29px;--spectrum-alias-item-control-3-width-xl:33px;--spectrum-alias-item-mark-size-m:var(--spectrum-global-dimension-size-250);--spectrum-alias-component-focusring-border-radius:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-control-two-size-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-control-three-height-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-control-three-width-s:23px;--spectrum-alias-control-three-width-m:var(--spectrum-global-dimension-static-size-325);--spectrum-alias-control-three-width-l:29px;--spectrum-alias-control-three-width-xl:33px;--spectrum-alias-search-padding-left-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-focus-ring-border-radius-regular:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-focus-ring-radius-default:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-workflow-icon-size-l:var(--spectrum-global-dimension-static-size-250);--spectrum-alias-ui-icon-chevron-size-75:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-chevron-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-chevron-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-chevron-size-300:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-chevron-size-400:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-chevron-size-500:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-checkmark-size-50:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-checkmark-size-75:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-checkmark-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-checkmark-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-checkmark-size-300:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-checkmark-size-400:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-checkmark-size-500:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-checkmark-size-600:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-dash-size-50:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-dash-size-75:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-dash-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-dash-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-dash-size-300:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-dash-size-400:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-dash-size-500:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-dash-size-600:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-cross-size-75:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-cross-size-100:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-cross-size-200:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-cross-size-300:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-cross-size-400:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-cross-size-500:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-cross-size-600:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-arrow-size-75:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-arrow-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-arrow-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-arrow-size-300:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-arrow-size-400:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-arrow-size-500:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-arrow-size-600:var(--spectrum-global-dimension-static-size-250);--spectrum-alias-ui-icon-triplegripper-size-100-width:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-doublegripper-size-100-height:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-ui-icon-singlegripper-size-100-height:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-ui-icon-cornertriangle-size-100:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-ui-icon-cornertriangle-size-300:var(--spectrum-global-dimension-static-size-85);--spectrum-alias-ui-icon-asterisk-size-200:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-asterisk-size-300:var(--spectrum-global-dimension-static-size-125);--spectrum-dialog-confirm-title-text-size:var(--spectrum-alias-heading-s-text-size);--spectrum-dialog-confirm-description-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-dialog-confirm-padding:var(--spectrum-global-dimension-static-size-500);--spectrum-listitem-m-texticon-padding-left:var(--spectrum-global-dimension-size-125);--spectrum-listitem-m-textthumbnail-padding-left:var(--spectrum-global-dimension-size-125)}:host,:root{--spectrum-global-alias-appframe-border-size:2px}:host,:root{--spectrum-field-label-text-to-asterisk-small:4px;--spectrum-field-label-text-to-asterisk-medium:4px;--spectrum-field-label-text-to-asterisk-large:5px;--spectrum-field-label-text-to-asterisk-extra-large:5px;--spectrum-field-label-top-to-asterisk-small:8px;--spectrum-field-label-top-to-asterisk-medium:12px;--spectrum-field-label-top-to-asterisk-large:15px;--spectrum-field-label-top-to-asterisk-extra-large:19px;--spectrum-field-label-top-margin-small:0px;--spectrum-field-label-top-margin-medium:4px;--spectrum-field-label-top-margin-large:5px;--spectrum-field-label-top-margin-extra-large:5px;--spectrum-field-label-to-component-quiet-small:-8px;--spectrum-field-label-to-component-quiet-medium:-8px;--spectrum-field-label-to-component-quiet-large:-12px;--spectrum-field-label-to-component-quiet-extra-large:-15px;--spectrum-help-text-top-to-workflow-icon-small:4px;--spectrum-help-text-top-to-workflow-icon-medium:3px;--spectrum-help-text-top-to-workflow-icon-large:6px;--spectrum-help-text-top-to-workflow-icon-extra-large:9px;--spectrum-status-light-dot-size-small:8px;--spectrum-status-light-dot-size-medium:8px;--spectrum-status-light-dot-size-large:10px;--spectrum-status-light-dot-size-extra-large:10px;--spectrum-status-light-top-to-dot-small:8px;--spectrum-status-light-top-to-dot-medium:12px;--spectrum-status-light-top-to-dot-large:15px;--spectrum-status-light-top-to-dot-extra-large:19px;--spectrum-action-button-edge-to-hold-icon-extra-small:3px;--spectrum-action-button-edge-to-hold-icon-small:3px;--spectrum-action-button-edge-to-hold-icon-medium:4px;--spectrum-action-button-edge-to-hold-icon-large:5px;--spectrum-action-button-edge-to-hold-icon-extra-large:6px;--spectrum-tooltip-tip-width:8px;--spectrum-tooltip-tip-height:4px;--spectrum-tooltip-maximum-width:160px;--spectrum-progress-circle-size-small:16px;--spectrum-progress-circle-size-medium:32px;--spectrum-progress-circle-size-large:64px;--spectrum-progress-circle-thickness-small:2px;--spectrum-progress-circle-thickness-medium:3px;--spectrum-progress-circle-thickness-large:4px;--spectrum-toast-height:48px;--spectrum-toast-maximum-width:336px;--spectrum-toast-top-to-workflow-icon:15px;--spectrum-toast-top-to-text:14px;--spectrum-toast-bottom-to-text:17px;--spectrum-action-bar-height:48px;--spectrum-action-bar-top-to-item-counter:14px;--spectrum-swatch-size-extra-small:16px;--spectrum-swatch-size-small:24px;--spectrum-swatch-size-medium:32px;--spectrum-swatch-size-large:40px;--spectrum-progress-bar-thickness-small:4px;--spectrum-progress-bar-thickness-medium:6px;--spectrum-progress-bar-thickness-large:8px;--spectrum-progress-bar-thickness-extra-large:10px;--spectrum-meter-default-width:192px;--spectrum-meter-thickness-small:4px;--spectrum-meter-thickness-large:6px;--spectrum-tag-top-to-avatar-small:4px;--spectrum-tag-top-to-avatar-medium:6px;--spectrum-tag-top-to-avatar-large:9px;--spectrum-tag-top-to-cross-icon-small:8px;--spectrum-tag-top-to-cross-icon-medium:12px;--spectrum-tag-top-to-cross-icon-large:15px;--spectrum-popover-top-to-content-area:4px;--spectrum-menu-item-edge-to-content-not-selected-small:28px;--spectrum-menu-item-edge-to-content-not-selected-medium:32px;--spectrum-menu-item-edge-to-content-not-selected-large:38px;--spectrum-menu-item-edge-to-content-not-selected-extra-large:45px;--spectrum-menu-item-top-to-disclosure-icon-small:7px;--spectrum-menu-item-top-to-disclosure-icon-medium:11px;--spectrum-menu-item-top-to-disclosure-icon-large:14px;--spectrum-menu-item-top-to-disclosure-icon-extra-large:17px;--spectrum-picker-visual-to-disclosure-icon-small:7px;--spectrum-picker-visual-to-disclosure-icon-medium:8px;--spectrum-picker-visual-to-disclosure-icon-large:9px;--spectrum-picker-visual-to-disclosure-icon-extra-large:10px;--spectrum-text-area-minimum-width:112px;--spectrum-text-area-minimum-height:56px;--spectrum-combo-box-visual-to-field-button-small:7px;--spectrum-combo-box-visual-to-field-button-medium:8px;--spectrum-combo-box-visual-to-field-button-large:9px;--spectrum-combo-box-visual-to-field-button-extra-large:10px;--spectrum-thumbnail-size-50:16px;--spectrum-thumbnail-size-75:18px;--spectrum-thumbnail-size-100:20px;--spectrum-thumbnail-size-200:22px;--spectrum-thumbnail-size-300:26px;--spectrum-thumbnail-size-400:28px;--spectrum-thumbnail-size-500:32px;--spectrum-thumbnail-size-600:36px;--spectrum-thumbnail-size-700:40px;--spectrum-thumbnail-size-800:44px;--spectrum-thumbnail-size-900:50px;--spectrum-thumbnail-size-1000:56px;--spectrum-alert-dialog-title-size:var(--spectrum-heading-size-s);--spectrum-alert-dialog-description-size:var(--spectrum-body-size-s);--spectrum-opacity-checkerboard-square-size:8px;--spectrum-breadcrumbs-height-multiline:72px;--spectrum-breadcrumbs-top-to-text:13px;--spectrum-breadcrumbs-top-to-text-compact:11px;--spectrum-breadcrumbs-top-to-text-multiline:12px;--spectrum-breadcrumbs-bottom-to-text:15px;--spectrum-breadcrumbs-bottom-to-text-compact:12px;--spectrum-breadcrumbs-bottom-to-text-multiline:9px;--spectrum-breadcrumbs-start-edge-to-text:8px;--spectrum-breadcrumbs-top-text-to-bottom-text:9px;--spectrum-breadcrumbs-top-to-separator-icon:19px;--spectrum-breadcrumbs-top-to-separator-icon-compact:15px;--spectrum-breadcrumbs-top-to-separator-icon-multiline:15px;--spectrum-breadcrumbs-separator-icon-to-bottom-text-multiline:11px;--spectrum-breadcrumbs-top-to-truncated-menu:8px;--spectrum-breadcrumbs-top-to-truncated-menu-compact:4px;--spectrum-avatar-size-50:16px;--spectrum-avatar-size-75:18px;--spectrum-avatar-size-100:20px;--spectrum-avatar-size-200:22px;--spectrum-avatar-size-300:26px;--spectrum-avatar-size-400:28px;--spectrum-avatar-size-500:32px;--spectrum-avatar-size-600:36px;--spectrum-avatar-size-700:40px;--spectrum-alert-banner-minimum-height:48px;--spectrum-alert-banner-width:832px;--spectrum-alert-banner-to-top-workflow-icon:15px;--spectrum-alert-banner-to-top-text:14px;--spectrum-alert-banner-to-bottom-text:17px;--spectrum-rating-indicator-width:18px;--spectrum-rating-indicator-to-icon:4px;--spectrum-color-area-width:192px;--spectrum-color-area-minimum-width:64px;--spectrum-color-area-height:192px;--spectrum-color-area-minimum-height:64px;--spectrum-color-wheel-width:192px;--spectrum-color-wheel-minimum-width:175px;--spectrum-color-slider-length:192px;--spectrum-illustrated-message-title-size:var(--spectrum-heading-size-m);--spectrum-illustrated-message-cjk-title-size:var(--spectrum-heading-cjk-size-m);--spectrum-illustrated-message-body-size:var(--spectrum-body-size-s);--spectrum-workflow-icon-size-50:14px;--spectrum-workflow-icon-size-75:16px;--spectrum-workflow-icon-size-100:18px;--spectrum-workflow-icon-size-200:20px;--spectrum-workflow-icon-size-300:22px;--spectrum-text-to-visual-50:6px;--spectrum-text-to-visual-75:7px;--spectrum-text-to-visual-100:8px;--spectrum-text-to-visual-200:9px;--spectrum-text-to-visual-300:10px;--spectrum-text-to-control-75:9px;--spectrum-text-to-control-100:10px;--spectrum-text-to-control-200:11px;--spectrum-text-to-control-300:13px;--spectrum-component-height-50:20px;--spectrum-component-height-75:24px;--spectrum-component-height-100:32px;--spectrum-component-height-200:40px;--spectrum-component-height-300:48px;--spectrum-component-pill-edge-to-visual-75:10px;--spectrum-component-pill-edge-to-visual-100:14px;--spectrum-component-pill-edge-to-visual-200:18px;--spectrum-component-pill-edge-to-visual-300:21px;--spectrum-component-pill-edge-to-visual-only-75:4px;--spectrum-component-pill-edge-to-visual-only-100:7px;--spectrum-component-pill-edge-to-visual-only-200:10px;--spectrum-component-pill-edge-to-visual-only-300:13px;--spectrum-component-pill-edge-to-text-75:12px;--spectrum-component-pill-edge-to-text-100:16px;--spectrum-component-pill-edge-to-text-200:20px;--spectrum-component-pill-edge-to-text-300:24px;--spectrum-component-edge-to-visual-50:6px;--spectrum-component-edge-to-visual-75:7px;--spectrum-component-edge-to-visual-100:10px;--spectrum-component-edge-to-visual-200:13px;--spectrum-component-edge-to-visual-300:15px;--spectrum-component-edge-to-visual-only-50:3px;--spectrum-component-edge-to-visual-only-75:4px;--spectrum-component-edge-to-visual-only-100:7px;--spectrum-component-edge-to-visual-only-200:10px;--spectrum-component-edge-to-visual-only-300:13px;--spectrum-component-edge-to-text-50:8px;--spectrum-component-edge-to-text-75:9px;--spectrum-component-edge-to-text-100:12px;--spectrum-component-edge-to-text-200:15px;--spectrum-component-edge-to-text-300:18px;--spectrum-component-top-to-workflow-icon-50:3px;--spectrum-component-top-to-workflow-icon-75:4px;--spectrum-component-top-to-workflow-icon-100:7px;--spectrum-component-top-to-workflow-icon-200:10px;--spectrum-component-top-to-workflow-icon-300:13px;--spectrum-component-top-to-text-50:3px;--spectrum-component-top-to-text-75:4px;--spectrum-component-top-to-text-100:6px;--spectrum-component-top-to-text-200:9px;--spectrum-component-top-to-text-300:12px;--spectrum-component-bottom-to-text-50:3px;--spectrum-component-bottom-to-text-75:5px;--spectrum-component-bottom-to-text-100:9px;--spectrum-component-bottom-to-text-200:11px;--spectrum-component-bottom-to-text-300:14px;--spectrum-component-to-menu-small:6px;--spectrum-component-to-menu-medium:6px;--spectrum-component-to-menu-large:7px;--spectrum-component-to-menu-extra-large:8px;--spectrum-field-edge-to-disclosure-icon-75:7px;--spectrum-field-edge-to-disclosure-icon-100:11px;--spectrum-field-edge-to-disclosure-icon-200:14px;--spectrum-field-edge-to-disclosure-icon-300:17px;--spectrum-field-top-to-alert-icon-small:4px;--spectrum-field-top-to-alert-icon-medium:7px;--spectrum-field-top-to-alert-icon-large:10px;--spectrum-field-top-to-alert-icon-extra-large:13px;--spectrum-field-top-to-validation-icon-small:7px;--spectrum-field-top-to-validation-icon-medium:11px;--spectrum-field-top-to-validation-icon-large:14px;--spectrum-field-top-to-validation-icon-extra-large:17px;--spectrum-field-top-to-progress-circle-small:4px;--spectrum-field-top-to-progress-circle-medium:8px;--spectrum-field-top-to-progress-circle-large:12px;--spectrum-field-top-to-progress-circle-extra-large:16px;--spectrum-field-edge-to-alert-icon-small:9px;--spectrum-field-edge-to-alert-icon-medium:12px;--spectrum-field-edge-to-alert-icon-large:15px;--spectrum-field-edge-to-alert-icon-extra-large:18px;--spectrum-field-edge-to-validation-icon-small:9px;--spectrum-field-edge-to-validation-icon-medium:12px;--spectrum-field-edge-to-validation-icon-large:15px;--spectrum-field-edge-to-validation-icon-extra-large:18px;--spectrum-field-text-to-alert-icon-small:8px;--spectrum-field-text-to-alert-icon-medium:12px;--spectrum-field-text-to-alert-icon-large:15px;--spectrum-field-text-to-alert-icon-extra-large:18px;--spectrum-field-text-to-validation-icon-small:8px;--spectrum-field-text-to-validation-icon-medium:12px;--spectrum-field-text-to-validation-icon-large:15px;--spectrum-field-text-to-validation-icon-extra-large:18px;--spectrum-field-width:192px;--spectrum-character-count-to-field-quiet-small:-3px;--spectrum-character-count-to-field-quiet-medium:-3px;--spectrum-character-count-to-field-quiet-large:-3px;--spectrum-character-count-to-field-quiet-extra-large:-4px;--spectrum-side-label-character-count-to-field:12px;--spectrum-side-label-character-count-top-margin-small:4px;--spectrum-side-label-character-count-top-margin-medium:8px;--spectrum-side-label-character-count-top-margin-large:11px;--spectrum-side-label-character-count-top-margin-extra-large:14px;--spectrum-disclosure-indicator-top-to-disclosure-icon-small:7px;--spectrum-disclosure-indicator-top-to-disclosure-icon-medium:11px;--spectrum-disclosure-indicator-top-to-disclosure-icon-large:14px;--spectrum-disclosure-indicator-top-to-disclosure-icon-extra-large:17px;--spectrum-navigational-indicator-top-to-back-icon-small:7px;--spectrum-navigational-indicator-top-to-back-icon-medium:11px;--spectrum-navigational-indicator-top-to-back-icon-large:14px;--spectrum-navigational-indicator-top-to-back-icon-extra-large:17px;--spectrum-color-control-track-width:24px;--spectrum-font-size-50:11px;--spectrum-font-size-75:12px;--spectrum-font-size-100:14px;--spectrum-font-size-200:16px;--spectrum-font-size-300:18px;--spectrum-font-size-400:20px;--spectrum-font-size-500:22px;--spectrum-font-size-600:25px;--spectrum-font-size-700:28px;--spectrum-font-size-800:32px;--spectrum-font-size-900:36px;--spectrum-font-size-1000:40px;--spectrum-font-size-1100:45px;--spectrum-font-size-1200:50px;--spectrum-font-size-1300:60px}:host,:root{--spectrum-edge-to-visual-only-75:4px;--spectrum-edge-to-visual-only-100:7px;--spectrum-edge-to-visual-only-200:10px;--spectrum-edge-to-visual-only-300:13px;--spectrum-slider-tick-mark-height:10px;--spectrum-slider-ramp-track-height:16px;--spectrum-colorwheel-path:"M 95 95 m -95 0 a 95 95 0 1 0 190 0 a 95 95 0 1 0 -190 0.2 M 95 95 m -73 0 a 73 73 0 1 0 146 0 a 73 73 0 1 0 -146 0";--spectrum-colorwheel-path-borders:"M 96 96 m -96 0 a 96 96 0 1 0 192 0 a 96 96 0 1 0 -192 0.2 M 96 96 m -72 0 a 72 72 0 1 0 144 0 a 72 72 0 1 0 -144 0";--spectrum-colorwheel-colorarea-container-size:144px;--spectrum-color-handle-size:16px;--spectrum-menu-item-selectable-edge-to-text-not-selected-small:28px;--spectrum-menu-item-selectable-edge-to-text-not-selected-medium:32px;--spectrum-menu-item-selectable-edge-to-text-not-selected-large:38px;--spectrum-menu-item-selectable-edge-to-text-not-selected-extra-large:45px;--spectrum-menu-item-checkmark-height-small:10px;--spectrum-menu-item-checkmark-height-medium:10px;--spectrum-menu-item-checkmark-height-large:12px;--spectrum-menu-item-checkmark-height-extra-large:14px;--spectrum-menu-item-checkmark-width-small:10px;--spectrum-menu-item-checkmark-width-medium:10px;--spectrum-menu-item-checkmark-width-large:12px;--spectrum-menu-item-checkmark-width-extra-large:14px}:host,:root{--spectrum-checkbox-control-size-small:12px;--spectrum-checkbox-control-size-medium:14px;--spectrum-checkbox-control-size-large:16px;--spectrum-checkbox-control-size-extra-large:18px;--spectrum-checkbox-top-to-control-small:6px;--spectrum-checkbox-top-to-control-medium:9px;--spectrum-checkbox-top-to-control-large:12px;--spectrum-checkbox-top-to-control-extra-large:15px;--spectrum-switch-control-width-small:23px;--spectrum-switch-control-width-medium:26px;--spectrum-switch-control-width-large:29px;--spectrum-switch-control-width-extra-large:33px;--spectrum-switch-control-height-small:12px;--spectrum-switch-control-height-medium:14px;--spectrum-switch-control-height-large:16px;--spectrum-switch-control-height-extra-large:18px;--spectrum-switch-top-to-control-small:6px;--spectrum-switch-top-to-control-medium:9px;--spectrum-switch-top-to-control-large:12px;--spectrum-switch-top-to-control-extra-large:15px;--spectrum-radio-button-control-size-small:12px;--spectrum-radio-button-control-size-medium:14px;--spectrum-radio-button-control-size-large:16px;--spectrum-radio-button-control-size-extra-large:18px;--spectrum-radio-button-top-to-control-small:6px;--spectrum-radio-button-top-to-control-medium:9px;--spectrum-radio-button-top-to-control-large:12px;--spectrum-radio-button-top-to-control-extra-large:15px;--spectrum-slider-control-height-small:14px;--spectrum-slider-control-height-medium:16px;--spectrum-slider-control-height-large:18px;--spectrum-slider-control-height-extra-large:20px;--spectrum-slider-handle-size-small:14px;--spectrum-slider-handle-size-medium:16px;--spectrum-slider-handle-size-large:18px;--spectrum-slider-handle-size-extra-large:20px;--spectrum-slider-handle-border-width-down-small:5px;--spectrum-slider-handle-border-width-down-medium:6px;--spectrum-slider-handle-border-width-down-large:7px;--spectrum-slider-handle-border-width-down-extra-large:8px;--spectrum-slider-bottom-to-handle-small:5px;--spectrum-slider-bottom-to-handle-medium:8px;--spectrum-slider-bottom-to-handle-large:11px;--spectrum-slider-bottom-to-handle-extra-large:14px;--spectrum-corner-radius-75:2px;--spectrum-corner-radius-100:4px;--spectrum-corner-radius-200:8px;--spectrum-drop-shadow-x:0px;--spectrum-drop-shadow-y:1px;--spectrum-drop-shadow-blur:4px}
`;i.registerThemeFragment("medium","scale",l),customElements.define("sp-theme",i);var u=a(599),d=a(338);const m=t.iv`
:host{fill:currentColor;color:inherit;display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){.spectrum-UIIcon,:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(
--spectrum-icon-size-s
);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(
--spectrum-icon-size-m
);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(
--spectrum-icon-size-l
);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(
--spectrum-icon-size-xl
);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(
--spectrum-icon-size-xxl
);width:var(--spectrum-icon-size-xxl)}:host{height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}#container{height:100%}::slotted(*),img,svg{color:inherit;height:100%;vertical-align:top;width:100%}@media (forced-colors:active){::slotted(*),img,svg{forced-color-adjust:auto}}
`;var p=Object.defineProperty,b=Object.getOwnPropertyDescriptor,h=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?b(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&p(e,o,c),c};class v extends u.o{static get styles(){return[m]}render(){return t.dy`
            <slot></slot>
        `}}let g;h([(0,d.Cb)()],v.prototype,"label",2),h([(0,d.Cb)({reflect:!0})],v.prototype,"size",2);const f=function(t,...e){return g?g(t,...e):e.reduce(((e,o,r)=>e+o+t[r+1]),t[0])},x=t=>{g=t};customElements.define("sp-icon-edit",class extends v{render(){return x(t.dy),(({width:t=24,height:e=24,hidden:o=!1,title:r="Edit"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${o?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${r}
  >
    <path
      d="M33.567 8.2 27.8 2.432a1.215 1.215 0 0 0-.866-.353H26.9a1.371 1.371 0 0 0-.927.406L5.084 23.372a.99.99 0 0 0-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 0 0 .062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 0 0 .414-.249l20.888-20.889a1.372 1.372 0 0 0 .4-.883 1.221 1.221 0 0 0-.346-.945ZM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}),customElements.define("sp-icon-anchor-select",class extends v{render(){return x(t.dy),(({width:t=24,height:e=24,hidden:o=!1,title:r="Anchor Select"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${o?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${r}
  >
    <path
      d="m10 6 18 18H18l-8 8ZM8.5 2.054a.5.5 0 0 0-.5.5v32.78a.5.5 0 0 0 .5.5.49.49 0 0 0 .35-.147L18.524 26h13a.5.5 0 0 0 .354-.854L8.854 2.2a.49.49 0 0 0-.354-.146Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}),customElements.define("sp-icon-alias",class extends v{render(){return x(t.dy),(({width:t=24,height:e=24,hidden:o=!1,title:r="Alias"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${o?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${r}
  >
    <path
      d="M29.241 2H12.8a.8.8 0 0 0-.8.806.785.785 0 0 0 .236.56l3.5 3.5a57.07 57.07 0 0 0-5.442 9.691 29.236 29.236 0 0 0-2.174 8.486c-.082.853-.12 1.7-.12 2.536a29.888 29.888 0 0 0 .576 5.753.827.827 0 0 0 1.618.023l.006-.023a25.346 25.346 0 0 1 2.594-6.919 22.717 22.717 0 0 1 4.3-5.429 48.574 48.574 0 0 1 7.33-5.429l4.209 4.209a.785.785 0 0 0 .56.236.8.8 0 0 0 .807-.8V2.759A.807.807 0 0 0 29.241 2Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});var y=Object.defineProperty,k=Object.getOwnPropertyDescriptor,w=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?k(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&y(e,o,c),c};function z(t,{validSizes:e=["s","m","l","xl"],noDefaultSize:o,defaultSize:r="m"}={}){class s extends t{constructor(){super(...arguments),this._size=r}get size(){return this._size||r}set size(t){const s=o?null:r,c=t&&t.toLocaleLowerCase(),a=e.includes(c)?c:s;if(a&&this.setAttribute("size",a),this._size===a)return;const i=this._size;this._size=a,this.requestUpdate("size",i)}update(t){!this.hasAttribute("size")&&!o&&this.setAttribute("size",this.size),super.update(t)}}return w([(0,d.Cb)({type:String,reflect:!0})],s.prototype,"size",1),s}var C=a(692);const I=t=>(...e)=>({_$litDirective$:t,values:e});class q{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const E=I(class extends q{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,r;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.st)||void 0===o?void 0:o.has(t))&&this.nt.add(t);return this.render(e)}const s=t.element.classList;this.nt.forEach((t=>{t in e||(s.remove(t),this.nt.delete(t))}));for(const t in e){const o=!!e[t];o===this.nt.has(t)||(null===(r=this.st)||void 0===r?void 0:r.has(t))||(o?(s.add(t),this.nt.add(t)):(s.remove(t),this.nt.delete(t)))}return C.Jb}});var S=a(796);class ${constructor(t,{target:e,config:o,callback:r,skipInitial:s}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,null!==e&&this.t.add(null!=e?e:t),this.o=null!=s?s:this.o,this.callback=r,window.IntersectionObserver?(this.u=new IntersectionObserver((t=>{const e=this.i;this.i=!1,this.o&&e||(this.handleChanges(t),this.h.requestUpdate())}),o),t.addController(this)):console.warn("IntersectionController error: browser does not support IntersectionObserver.")}handleChanges(t){var e;this.value=null===(e=this.callback)||void 0===e?void 0:e.call(this,t,this.u)}hostConnected(){for(const t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){const t=this.u.takeRecords();t.length&&this.handleChanges(t)}observe(t){this.t.add(t),this.u.observe(t),this.i=!0}unobserve(t){this.t.delete(t),this.u.unobserve(t)}disconnect(){this.u.disconnect()}}let A=!0;try{document.body.querySelector(":focus-visible")}catch(y){A=!1,a.e(202).then(a.t.bind(a,202,19))}const _=t=>{var e;const o=Symbol("endPolyfillCoordination");return e=o,class extends t{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),A||requestAnimationFrame((()=>{null==this[o]&&(this[o]=(t=>{if(null==t.shadowRoot||t.hasAttribute("data-js-focus-visible"))return()=>{};if(!self.applyFocusVisiblePolyfill){const e=()=>{self.applyFocusVisiblePolyfill&&t.shadowRoot&&self.applyFocusVisiblePolyfill(t.shadowRoot),t.manageAutoFocus&&t.manageAutoFocus()};return self.addEventListener("focus-visible-polyfill-ready",e,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",e)}}return self.applyFocusVisiblePolyfill(t.shadowRoot),t.manageAutoFocus&&t.manageAutoFocus(),()=>{}})(this))}))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),A||requestAnimationFrame((()=>{null!=this[o]&&(this[o](),this[o]=null)}))}}};var T=Object.defineProperty,U=Object.getOwnPropertyDescriptor,P=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?U(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&T(e,o,c),c};function j(){return new Promise((t=>requestAnimationFrame((()=>t()))))}class L extends(_(u.o)){constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this._tabIndex=0,this.manipulatingTabindex=!1,this._recentlyConnected=!1}get tabIndex(){if(this.focusElement===this){const t=this.hasAttribute("tabindex")?Number(this.getAttribute("tabindex")):NaN;return isNaN(t)?-1:t}const t=parseFloat(this.hasAttribute("tabindex")&&this.getAttribute("tabindex")||"0");return this.disabled||t<0?-1:this.focusElement?this.focusElement.tabIndex:t}set tabIndex(t){if(this.manipulatingTabindex)this.manipulatingTabindex=!1;else if(this.focusElement!==this){if(-1===t?this.addEventListener("pointerdown",this.onPointerdownManagementOfTabIndex):(this.manipulatingTabindex=!0,this.removeEventListener("pointerdown",this.onPointerdownManagementOfTabIndex)),-1===t||this.disabled)return this.setAttribute("tabindex","-1"),this.removeAttribute("focusable"),void(-1!==t&&this.manageFocusElementTabindex(t));this.setAttribute("focusable",""),this.hasAttribute("tabindex")?this.removeAttribute("tabindex"):this.manipulatingTabindex=!1,this.manageFocusElementTabindex(t)}else if(t!==this.tabIndex){this._tabIndex=t;const e=this.disabled?"-1":""+t;this.setAttribute("tabindex",e)}}onPointerdownManagementOfTabIndex(){-1===this.tabIndex&&(this.tabIndex=0,this.focus({preventScroll:!0}))}async manageFocusElementTabindex(t){this.focusElement||await this.updateComplete,null===t?this.focusElement.removeAttribute("tabindex"):this.focusElement.tabIndex=t}get focusElement(){throw new Error("Must implement focusElement getter!")}focus(t){this.disabled||!this.focusElement||(this.focusElement!==this?this.focusElement.focus(t):HTMLElement.prototype.focus.apply(this,[t]))}blur(){const t=this.focusElement||this;t!==this?t.blur():HTMLElement.prototype.blur.apply(this)}click(){if(this.disabled)return;const t=this.focusElement||this;t!==this?t.click():HTMLElement.prototype.click.apply(this)}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focusElement.focus())}firstUpdated(t){super.firstUpdated(t),(!this.hasAttribute("tabindex")||"-1"!==this.getAttribute("tabindex"))&&this.setAttribute("focusable","")}update(t){t.has("disabled")&&this.handleDisabledChanged(this.disabled,t.get("disabled")),super.update(t)}updated(t){super.updated(t),t.has("disabled")&&this.disabled&&this.blur()}async handleDisabledChanged(t,e){const o=()=>this.focusElement!==this&&void 0!==this.focusElement.disabled;t?(this.manipulatingTabindex=!0,this.setAttribute("tabindex","-1"),await this.updateComplete,o()?this.focusElement.disabled=!0:this.setAttribute("aria-disabled","true")):e&&(this.manipulatingTabindex=!0,this.focusElement===this?this.setAttribute("tabindex",""+this._tabIndex):this.removeAttribute("tabindex"),await this.updateComplete,o()?this.focusElement.disabled=!1:this.removeAttribute("aria-disabled"))}async getUpdateComplete(){const t=await super.getUpdateComplete();return this._recentlyConnected&&(this._recentlyConnected=!1,await j(),await j()),t}connectedCallback(){super.connectedCallback(),this._recentlyConnected=!0,this.updateComplete.then((()=>{this.manageAutoFocus()}))}}function O(t,e,o){return typeof t===e?()=>t:"function"==typeof t?t:o}P([(0,d.Cb)({type:Boolean,reflect:!0})],L.prototype,"disabled",2),P([(0,d.Cb)({type:Boolean})],L.prototype,"autofocus",2),P([(0,d.Cb)({type:Number})],L.prototype,"tabIndex",1);class B{constructor(t,{direction:e,elementEnterAction:o,elements:r,focusInIndex:s,isFocusableElement:c,listenerScope:a}={elements:()=>[]}){this._currentIndex=-1,this._direction=()=>"both",this.directionLength=5,this.elementEnterAction=t=>{},this._focused=!1,this._focusInIndex=t=>0,this.isFocusableElement=t=>!0,this._listenerScope=()=>this.host,this.offset=0,this.handleFocusin=t=>{if(!this.isEventWithinListenerScope(t))return;this.isRelatedTargetAnElement(t)&&this.hostContainsFocus();const e=t.composedPath();let o=-1;e.find((t=>(o=this.elements.indexOf(t),-1!==o))),this.currentIndex=o>-1?o:this.currentIndex},this.handleFocusout=t=>{this.isRelatedTargetAnElement(t)&&this.hostNoLongerContainsFocus()},this.handleKeydown=t=>{if(!this.acceptsEventCode(t.code)||t.defaultPrevented)return;let e=0;switch(t.code){case"ArrowRight":e+=1;break;case"ArrowDown":e+="grid"===this.direction?this.directionLength:1;break;case"ArrowLeft":e-=1;break;case"ArrowUp":e-="grid"===this.direction?this.directionLength:1;break;case"End":this.currentIndex=0,e-=1;break;case"Home":this.currentIndex=this.elements.length-1,e+=1}t.preventDefault(),"grid"===this.direction&&this.currentIndex+e<0?this.currentIndex=0:"grid"===this.direction&&this.currentIndex+e>this.elements.length-1?this.currentIndex=this.elements.length-1:this.setCurrentIndexCircularly(e),this.elementEnterAction(this.elements[this.currentIndex]),this.focus()},this.host=t,this.host.addController(this),this._elements=r,this.isFocusableElement=c||this.isFocusableElement,this._direction=O(e,"string",this._direction),this.elementEnterAction=o||this.elementEnterAction,this._focusInIndex=O(s,"number",this._focusInIndex),this._listenerScope=O(a,"object",this._listenerScope)}get currentIndex(){return-1===this._currentIndex&&(this._currentIndex=this.focusInIndex),this._currentIndex-this.offset}set currentIndex(t){this._currentIndex=t+this.offset}get direction(){return this._direction()}get elements(){return this.cachedElements||(this.cachedElements=this._elements()),this.cachedElements}set focused(t){t!==this.focused&&(this._focused=t)}get focused(){return this._focused}get focusInElement(){return this.elements[this.focusInIndex]}get focusInIndex(){return this._focusInIndex(this.elements)}isEventWithinListenerScope(t){return this._listenerScope()===this.host||t.composedPath().includes(this._listenerScope())}update({elements:t}={elements:()=>[]}){this.unmanage(),this._elements=t,this.clearElementCache(),this.manage()}focus(t){let e=this.elements[this.currentIndex];(!e||!this.isFocusableElement(e))&&(this.setCurrentIndexCircularly(1),e=this.elements[this.currentIndex]),e&&this.isFocusableElement(e)&&e.focus(t)}clearElementCache(t=0){delete this.cachedElements,this.offset=t}setCurrentIndexCircularly(t){const{length:e}=this.elements;let o=e,r=(e+this.currentIndex+t)%e;for(;o&&this.elements[r]&&!this.isFocusableElement(this.elements[r]);)r=(e+r+t)%e,o-=1;this.currentIndex=r}hostContainsFocus(){this.host.addEventListener("focusout",this.handleFocusout),this.host.addEventListener("keydown",this.handleKeydown),this.focused=!0}hostNoLongerContainsFocus(){this.host.addEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown),this.currentIndex=this.focusInIndex,this.focused=!1}isRelatedTargetAnElement(t){const e=t.relatedTarget;return!this.elements.includes(e)}acceptsEventCode(t){if("End"===t||"Home"===t)return!0;switch(this.direction){case"horizontal":return"ArrowLeft"===t||"ArrowRight"===t;case"vertical":return"ArrowUp"===t||"ArrowDown"===t;case"both":case"grid":return t.startsWith("Arrow")}}manage(){this.addEventListeners()}unmanage(){this.removeEventListeners()}addEventListeners(){this.host.addEventListener("focusin",this.handleFocusin)}removeEventListeners(){this.host.removeEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown)}hostConnected(){this.addEventListeners()}hostDisconnected(){this.removeEventListeners()}}class D extends B{constructor(){super(...arguments),this.managed=!0,this.manageIndexesAnimationFrame=0}set focused(t){t!==this.focused&&(super.focused=t,this.manageTabindexes())}get focused(){return super.focused}clearElementCache(t=0){cancelAnimationFrame(this.manageIndexesAnimationFrame),super.clearElementCache(t),this.managed&&(this.manageIndexesAnimationFrame=requestAnimationFrame((()=>this.manageTabindexes())))}manageTabindexes(){this.focused?this.updateTabindexes((()=>({tabIndex:-1}))):this.updateTabindexes((t=>({removeTabIndex:t.contains(this.focusInElement)&&t!==this.focusInElement,tabIndex:t===this.focusInElement?0:-1})))}updateTabindexes(t){this.elements.forEach((e=>{const{tabIndex:o,removeTabIndex:r}=t(e);if(!r)return void(e.tabIndex=o);e.removeAttribute("tabindex");const s=e;s.requestUpdate&&s.requestUpdate()}))}manage(){this.managed=!0,this.manageTabindexes(),super.manage()}unmanage(){this.managed=!1,this.updateTabindexes((()=>({tabIndex:0}))),super.unmanage()}hostUpdated(){this.host.hasUpdated||this.manageTabindexes()}}const F=t.iv`
:host([size=s]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-s-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-s-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-s-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-s-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-s-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-s-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-s-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-s-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-s-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-s-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-s-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-s-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-s-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-s-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-s-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-s-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-s-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-s-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-s-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-s-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-s-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-s-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-450)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-s-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-s-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-s-compact-textonly-height,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-s-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-s-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-85)
)}:host([size=m]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-m-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-m-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-m-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-m-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-m-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-m-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-m-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-m-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-m-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-m-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-m-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-m-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-m-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-m-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-m-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-m-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-m-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-m-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-m-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-400)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-m-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-m-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-m-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-550)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-m-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-m-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-m-compact-textonly-height,var(--spectrum-global-dimension-size-400)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-m-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-400)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-m-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-100)
)}:host([size=l]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-l-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-l-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-l-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-l-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-700)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-l-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-l-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-l-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-l-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-l-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-l-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-l-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-l-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-l-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-l-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-l-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-l-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-l-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-l-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-l-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-l-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-l-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-l-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-650)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-l-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-l-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-l-compact-textonly-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-l-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-l-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-115)
)}:host([size=xl]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-xl-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-800)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-xl-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-xl-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-xl-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-xl-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-xl-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-xl-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-xl-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-xl-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-xl-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-xl-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-xl-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-xl-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-xl-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-750)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-xl-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-xl-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-xl-compact-textonly-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-xl-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-xl-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-125)
)}:host{--spectrum-tabs-compact-item-height:calc(var(--spectrum-tabs-compact-textonly-height) - var(--spectrum-tabs-compact-textonly-divider-size))}#list{display:flex;margin:0;padding-bottom:0;padding-top:0;position:relative;vertical-align:top;z-index:0}:host([dir=ltr]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=ltr]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=ltr]) #selection-indicator{left:0}:host([dir=rtl]) #selection-indicator{right:0}#selection-indicator{border-radius:var(--spectrum-tabs-textonly-divider-border-radius);position:absolute;transform-origin:top left;transition:transform var(
--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration
) var(--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease);z-index:0}:host([compact]) ::slotted(:not([slot])){height:var(
--spectrum-tabs-compact-item-height
);line-height:var(--spectrum-tabs-compact-item-height)}:host([direction^=horizontal]) #list{align-items:center}:host([direction^=horizontal]) ::slotted(:not([slot])){vertical-align:top}:host([dir=ltr][direction^=horizontal]) ::slotted(:not([slot]):not(:first-child)){margin-left:var(
--spectrum-tabs-textonly-tabitem-margin-right
)}:host([dir=rtl][direction^=horizontal]) ::slotted(:not([slot]):not(:first-child)){margin-right:var(
--spectrum-tabs-textonly-tabitem-margin-right
)}:host([direction^=horizontal]) #selection-indicator{bottom:0;height:var(--spectrum-tabs-quiet-textonly-divider-size);position:absolute}:host([direction^=horizontal][compact]) #list{align-items:end;box-sizing:content-box;height:var(--spectrum-tabs-compact-item-height)}:host([quiet]) #list{display:inline-flex}:host([direction^=vertical]) #list{display:inline-flex;flex-direction:column;padding:0}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])){margin-left:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])){margin-right:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2)}:host([direction^=vertical]) ::slotted(:not([slot])){height:var(
--spectrum-tabs-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-vertical-textonly-tabitem-height);margin-bottom:var(--spectrum-tabs-vertical-textonly-tabitem-gap);padding-bottom:0;padding-left:var(
--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x
);padding-right:var(
--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x
);padding-top:0}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([direction^=vertical]) .spectrum-Icon{height:var(
--spectrum-tabs-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-vertical-textonly-tabitem-height)}:host([direction^=vertical][compact]) #list ::slotted(:not([slot])){height:var(
--spectrum-tabs-compact-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-compact-vertical-textonly-tabitem-height);margin-bottom:var(--spectrum-tabs-compact-vertical-textonly-tabitem-gap)}:host([dir=ltr][direction^=vertical]) #selection-indicator{left:0}:host([dir=rtl][direction^=vertical]) #selection-indicator{right:0}:host([direction^=vertical]) #selection-indicator{position:absolute;width:var(--spectrum-tabs-quiet-textonly-divider-size)}:host{--spectrum-tabs-list-background-direction:top}#list{background:linear-gradient(to var(--spectrum-tabs-list-background-direction),var(--spectrum-tabs-textonly-divider-background-color) 0 var(--spectrum-tabs-quiet-textonly-divider-size),transparent var(--spectrum-tabs-quiet-textonly-divider-size))}:host([direction^=vertical]){--spectrum-tabs-list-background-direction:right}:host([direction^=vertical][compact]) #list,:host([quiet]) #list,:host([quiet][compact]) #list{--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-quiet-textonly-divider-background-color
)}:host([direction^=vertical][emphasized]){--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-emphasized-textonly-divider-background-color
)}#selection-indicator{background-color:var(
--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected
)}:host([emphasized]) #selection-indicator{background-color:var(
--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected
)}:host([emphasized]) ::slotted([selected]:not([slot])){color:var(
--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected
)}:host([emphasized]) ::slotted([selected]:not([slot])) .spectrum-Icon{color:var(
--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected
)}:host([quiet]) #list{border-bottom-color:var(
--spectrum-tabs-quiet-textonly-divider-background-color
)}:host([quiet]) #selection-indicator{background-color:var(
--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected
)}:host([quiet][emphasized]) #list #selection-indicator{background-color:var(
--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected
)}:host([direction^=vertical][compact]) #list #selection-indicator,:host([direction^=vertical][quiet]) #list #selection-indicator{background-color:var(
--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected
)}:host([direction^=vertical][emphasized]) #list #selection-indicator{background-color:var(
--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected
)}@media (forced-colors:active){#list{--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:HighlightText;--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:HighlightText;--spectrum-tabs-emphasized-textonly-divider-background-color:transparent;--spectrum-tabs-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-textonly-divider-background-color:transparent;--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-disabled:GrayText;--spectrum-tabs-textonly-tabitem-icon-color-hover:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-selected:HighlightText;--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-textonly-tabitem-text-color-disabled:GrayText;--spectrum-tabs-textonly-tabitem-text-color-hover:ButtonText;--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-text-color-selected:HighlightText;--spectrum-tabs-textonly-tabitem-text-color:ButtonText;--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:Highlight;forced-color-adjust:none}::slotted(:not([slot])):before{background-color:ButtonFace}::slotted([selected]:not([slot])){color:HighlightText}::slotted([selected]:not([slot])):before{background-color:Highlight;color:HighlightText}:host([emphasized]) #list ::slotted(:not([slot])):before{background-color:ButtonFace}:host([emphasized]) #list ::slotted([selected]:not([slot])){color:HighlightText}:host([emphasized]) #list ::slotted([selected]:not([slot])):before{background-color:Highlight;color:HighlightText}}:host{display:grid;grid-template-columns:100%;position:relative}:host(:not([direction^=vertical])){grid-template-rows:auto 1fr}:host([direction^=vertical]){grid-template-columns:auto 1fr}:host([direction=vertical]){gap:var(--spectrum-tabs-textonly-tabitem-focus-ring-size)}#selection-indicator{border-radius:0;z-index:1}:host([dir=rtl]) #selection-indicator{left:0;right:auto}:host(:not([direction^=vertical])) #selection-indicator{bottom:0}:host([dir=ltr][direction=vertical]) #selection-indicator,:host([dir=rtl][direction=vertical-right]) #selection-indicator{left:0}:host([dir=ltr][direction=vertical-right]) #selection-indicator,:host([dir=rtl][direction=vertical]) #selection-indicator{left:auto;right:0}:host([disabled]) #selection-indicator{background-color:var(
--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]) ::slotted(sp-tab){color:var(
--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}#list{justify-content:var(--swc-tabs-list-justify-content)}:host(:not([direction^=vertical])) #list{padding-bottom:var(--spectrum-tabs-quiet-textonly-divider-size)}:host([dir=ltr][direction=vertical]) #list,:host([dir=rtl][direction=vertical-right]) #list{--spectrum-tabs-list-background-direction:right;padding-left:var(--spectrum-tabs-quiet-textonly-divider-size)}:host([dir=ltr][direction=vertical-right]) #list,:host([dir=rtl][direction=vertical]) #list{--spectrum-tabs-list-background-direction:left;padding-right:var(--spectrum-tabs-quiet-textonly-divider-size)}:host([disabled]) #list{pointer-events:none}:host([direction=vertical-right]) #selection-indicator,:host([direction=vertical]) #selection-indicator{top:0}:host([compact]){--spectrum-tabs-height:var(--spectrum-tabs-quiet-compact-height)}@media (forced-colors:none){:host([compact]:not([quiet])) #list{--spectrum-tabs-textonly-divider-background-color:unset!important}}:host([direction=horizontal]:not([quiet])) #list{border-bottom-color:var(
--spectrum-tabs-rule-color,var(--spectrum-global-color-gray-200)
)}:host([dir=rtl][direction=vertical-right]) #selection-indicator{left:0;right:auto}#selection-indicator.first-position{transition:none}:host([dir=ltr][direction=vertical-right]) ::slotted(:not([slot])){margin-left:0;margin-right:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2)}:host([dir=rtl][direction=vertical-right]) ::slotted(:not([slot])){margin-left:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2);margin-right:0}:host([dir][direction=horizontal]) #list.scroll{overflow-x:auto;scrollbar-width:none}:host([dir][direction=horizontal]) #list.scroll::-webkit-scrollbar{display:none}
`;var M=Object.defineProperty,R=Object.getOwnPropertyDescriptor,H=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?R(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&M(e,o,c),c};const N={baseSize:100,noSelectionStyle:"transform: translateX(0px) scaleX(0) scaleY(0)",transformX(t,e){return`transform: translateX(${t}px) scaleX(${e/this.baseSize});`},transformY(t,e){return`transform: translateY(${t}px) scaleY(${e/this.baseSize});`},baseStyles(){return t.iv`
            :host([direction='vertical-right']) #selection-indicator,
            :host([direction='vertical']) #selection-indicator {
                height: ${this.baseSize}px;
            }
            :host([dir][direction='horizontal']) #selection-indicator {
                width: ${this.baseSize}px;
            }
        `}};class V extends(z(L)){constructor(){super(),this.auto=!1,this.compact=!1,this.direction="horizontal",this.emphasized=!1,this.label="",this.enableTabsScroll=!1,this.quiet=!1,this.selectionIndicatorStyle=N.noSelectionStyle,this.shouldAnimate=!1,this._selected="",this._tabs=[],this.rovingTabindexController=new D(this,{focusInIndex:t=>{let e=0;return t.find(((t,o)=>{const r=this.selected?!t.disabled&&t.value===this.selected:!t.disabled;return e=o,r}))?e:-1},direction:()=>"horizontal"===this.direction?"horizontal":"vertical",elementEnterAction:t=>{this.auto&&(this.shouldAnimate=!0,this.selectTarget(t))},elements:()=>this.tabs,isFocusableElement:t=>!t.disabled,listenerScope:()=>this.tabList}),this.onTabsScroll=()=>{this.dispatchEvent(new Event("sp-tabs-scroll",{bubbles:!0,composed:!0}))},this.onClick=t=>{if(this.disabled)return;const e=t.composedPath().find((t=>t.parentElement===this));!e||e.disabled||(this.shouldAnimate=!0,this.selectTarget(e))},this.onKeyDown=t=>{if("Enter"===t.code||"Space"===t.code){t.preventDefault();const e=t.target;e&&this.selectTarget(e)}},this.updateCheckedState=()=>{if(this.tabs.length||(this.tabs=[...this.querySelectorAll('[role="tab"]')]),this.tabs.forEach((t=>{t.removeAttribute("selected")})),this.selected){const t=this.tabs.find((t=>t.value===this.selected));t?t.selected=!0:this.selected=""}else{const t=this.tabs[0];t&&t.setAttribute("tabindex","0")}this.updateSelectionIndicator(),this.tabChangeResolver()},this.updateSelectionIndicator=async()=>{const t=this.tabs.find((t=>t.selected));if(!t)return void(this.selectionIndicatorStyle=N.noSelectionStyle);await Promise.all([t.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const{width:e,height:o}=t.getBoundingClientRect();this.selectionIndicatorStyle="horizontal"===this.direction?N.transformX(t.offsetLeft,e):N.transformY(t.offsetTop,o)},this.tabChangePromise=Promise.resolve(),this.tabChangeResolver=function(){},new $(this,{config:{root:null,rootMargin:"0px",threshold:[0,1]},callback:()=>{this.updateSelectionIndicator()}})}static get styles(){return[F,N.baseStyles()]}get selected(){return this._selected}set selected(t){const e=this.selected;t!==e&&(this._selected=t,this.shouldUpdateCheckedState(),this.requestUpdate("selected",e))}set tabs(t){t!==this.tabs&&(this._tabs=t,this.rovingTabindexController.clearElementCache())}get tabs(){return this._tabs}get focusElement(){return this.rovingTabindexController.focusInElement||this}scrollTabs(t,e="smooth"){var o;null==(o=this.tabList)||o.scrollBy({left:t,top:0,behavior:e})}get scrollState(){var t,e,o,r;return{canScrollLeft:(null==(t=this.tabList)?void 0:t.scrollLeft)>0,canScrollRight:Math.ceil(null==(e=this.tabList)?void 0:e.scrollLeft)<(null==(o=this.tabList)?void 0:o.scrollWidth)-(null==(r=this.tabList)?void 0:r.clientWidth)}}manageAutoFocus(){const t=[...this.children].map((t=>void 0!==t.updateComplete?t.updateComplete:Promise.resolve(!0)));Promise.all(t).then((()=>super.manageAutoFocus()))}managePanels({target:t}){t.assignedElements().map((t=>{const{value:e,id:o}=t,r=this.querySelector(`[role="tab"][value="${e}"]`);r&&(r.setAttribute("aria-controls",o),t.setAttribute("aria-labelledby",r.id)),t.selected=e===this.selected}))}render(){return t.dy`
            <div
                class=${E({scroll:this.enableTabsScroll})}
                aria-label=${(0,S.o)(this.label?this.label:void 0)}
                @click=${this.onClick}
                @keydown=${this.onKeyDown}
                @sp-tab-contentchange=${this.updateSelectionIndicator}
                @scroll=${this.onTabsScroll}
                id="list"
                role="tablist"
                part="tablist"
            >
                <slot @slotchange=${this.onSlotChange}></slot>
                <div
                    id="selection-indicator"
                    class=${(0,S.o)(this.shouldAnimate?void 0:"first-position")}
                    style=${this.selectionIndicatorStyle}
                    role="presentation"
                ></div>
            </div>
            <slot name="tab-panel" @slotchange=${this.managePanels}></slot>
        `}willUpdate(t){if(!this.hasUpdated){const t=this.querySelector(":scope > [selected]");t&&this.selectTarget(t)}if(super.updated(t),t.has("selected")){if(t.get("selected")){const e=this.querySelector(`[role="tabpanel"][value="${t.get("selected")}"]`);e&&(e.selected=!1)}const e=this.querySelector(`[role="tabpanel"][value="${this.selected}"]`);e&&(e.selected=!0)}t.has("direction")&&("horizontal"===this.direction?this.removeAttribute("aria-orientation"):this.setAttribute("aria-orientation","vertical")),t.has("dir")&&this.updateSelectionIndicator(),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),!this.shouldAnimate&&void 0!==t.get("shouldAnimate")&&(this.shouldAnimate=!0)}selectTarget(t){const e=t.getAttribute("value");if(e){const t=this.selected;this.selected=e,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=t)}}onSlotChange(){this.tabs=[...this.querySelectorAll('[role="tab"]')],this.shouldUpdateCheckedState()}shouldUpdateCheckedState(){this.tabChangeResolver(),this.tabChangePromise=new Promise((t=>this.tabChangeResolver=t)),setTimeout(this.updateCheckedState)}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.tabChangePromise,t}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.addEventListener("loadingdone",this.updateSelectionIndicator)}disconnectedCallback(){window.removeEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.removeEventListener("loadingdone",this.updateSelectionIndicator),super.disconnectedCallback()}}H([(0,d.Cb)({type:Boolean})],V.prototype,"auto",2),H([(0,d.Cb)({type:Boolean,reflect:!0})],V.prototype,"compact",2),H([(0,d.Cb)({reflect:!0})],V.prototype,"direction",2),H([(0,d.Cb)({type:Boolean,reflect:!0})],V.prototype,"emphasized",2),H([(0,d.Cb)()],V.prototype,"label",2),H([(0,d.Cb)({type:Boolean})],V.prototype,"enableTabsScroll",2),H([(0,d.Cb)({type:Boolean,reflect:!0})],V.prototype,"quiet",2),H([(0,d.Cb)({attribute:!1})],V.prototype,"selectionIndicatorStyle",2),H([(0,d.Cb)({attribute:!1})],V.prototype,"shouldAnimate",2),H([(0,d.IO)("#list")],V.prototype,"tabList",2),H([(0,d.Cb)({reflect:!0})],V.prototype,"selected",1),customElements.define("sp-tabs",V);class K{constructor(t,{target:e,config:o,callback:r,skipInitial:s}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,null!==e&&this.t.add(null!=e?e:t),this.l=o,this.o=null!=s?s:this.o,this.callback=r,window.MutationObserver?(this.u=new MutationObserver((t=>{this.handleChanges(t),this.h.requestUpdate()})),t.addController(this)):console.warn("MutationController error: browser does not support MutationObserver.")}handleChanges(t){var e;this.value=null===(e=this.callback)||void 0===e?void 0:e.call(this,t,this.u)}hostConnected(){for(const t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){const t=this.u.takeRecords();(t.length||!this.o&&this.i)&&this.handleChanges(t),this.i=!1}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate()}disconnect(){this.u.disconnect()}}var G=Object.defineProperty,W=Object.getOwnPropertyDescriptor,Y=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?W(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&G(e,o,c),c};const Z=Symbol("assignedNodes");function X(t,e){var o;class r extends t{constructor(...t){super(t),this.slotHasContent=!1,new K(this,{config:{characterData:!0,subtree:!0},callback:t=>{for(const e of t)if("characterData"===e.type)return void this.manageTextObservedSlot()}})}manageTextObservedSlot(){if(!this[Z])return;const t=[...this[Z]].filter((t=>!!t.tagName||!!t.textContent&&t.textContent.trim()));this.slotHasContent=t.length>0}update(t){if(!this.hasUpdated){const{childNodes:t}=this,o=[...t].filter((t=>t.tagName?e?t.getAttribute("slot")===e:!t.hasAttribute("slot"):!!t.textContent&&t.textContent.trim()));this.slotHasContent=o.length>0}super.update(t)}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then((()=>{this.manageTextObservedSlot()}))}}return o=Z,Y([(0,d.Cb)({type:Boolean,attribute:!1})],r.prototype,"slotHasContent",2),Y([(0,d.vZ)(e,!0)],r.prototype,o,2),r}const J=Symbol("slotContentIsPresent");function Q(t,e){var o;const r=Array.isArray(e)?e:[e];return o=J,class extends t{constructor(...t){super(t),this[o]=new Map,this.managePresenceObservedSlot=()=>{let t=!1;r.forEach((e=>{const o=!!this.querySelector(e),r=this[J].get(e)||!1;t=t||r!==o,this[J].set(e,!!this.querySelector(e))})),t&&this.updateComplete.then((()=>{this.requestUpdate()}))},new K(this,{config:{childList:!0,subtree:!0},callback:()=>{this.managePresenceObservedSlot()}}),this.managePresenceObservedSlot()}get slotContentIsPresent(){if(1===r.length)return this[J].get(r[0])||!1;throw new Error("Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.")}getSlotContentPresence(t){if(this[J].has(t))return this[J].get(t)||!1;throw new Error(`The provided selector \`${t}\` is not being observed.`)}}}const tt=t.iv`
:host{box-sizing:border-box;cursor:pointer;height:var(--spectrum-tabs-quiet-textonly-tabitem-height);line-height:var(--spectrum-tabs-quiet-textonly-tabitem-height);outline:none;position:relative;text-decoration:none;transition:color var(
--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration
) ease-out;white-space:nowrap;z-index:1}:host([disabled]){cursor:default}:host([disabled]) #item-label{cursor:default}::slotted([slot=icon]){height:var(
--spectrum-tabs-quiet-textonly-tabitem-height
)}:host([dir=ltr]) slot[name=icon]+#item-label{margin-left:calc(var(--spectrum-tabs-quiet-textonly-tabitem-icon-gap) - var(--spectrum-global-dimension-size-40))}:host([dir=rtl]) slot[name=icon]+#item-label{margin-right:calc(var(--spectrum-tabs-quiet-textonly-tabitem-icon-gap) - var(--spectrum-global-dimension-size-40))}:host([dir=ltr]):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=ltr]):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host:before{border:var(--spectrum-tabs-textonly-tabitem-focus-ring-size) solid transparent;border-radius:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-radius
);box-sizing:border-box;content:"";height:var(--spectrum-tabs-textonly-tabitem-focus-ring-height);margin-top:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-height)/-2);pointer-events:none;position:absolute;top:50%}#item-label{cursor:pointer;display:inline-block;font-size:var(--spectrum-tabs-texticon-tabitem-text-size);font-weight:var(--spectrum-tabs-textonly-tabitem-text-font-weight);text-decoration:none;vertical-align:top}#item-label:empty{display:none}:host{color:var(
--spectrum-tabs-textonly-tabitem-text-color
)}::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color
)}:host(:hover){color:var(
--spectrum-tabs-textonly-tabitem-text-color-hover
)}:host(:hover) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-hover
)}:host([selected]){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected
)}:host([selected]) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-selected
)}:host(.focus-visible){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus
)}:host(.focus-visible){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus
)}:host(:focus-visible){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus
)}:host(.focus-visible):before{border-color:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus
)}:host(.focus-visible):before{border-color:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus
)}:host(:focus-visible):before{border-color:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus
)}:host(.focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus
)}:host(.focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus
)}:host(:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus
)}:host([disabled]){color:var(
--spectrum-tabs-textonly-tabitem-text-color-disabled
)}:host([disabled]) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-disabled
)}:host([disabled]){pointer-events:none}:host([vertical]){--sp-tab-vertial-margin-y:calc((var(
--spectrum-tabs-vertical-item-height,
var(--spectrum-global-dimension-size-550)
) - var(
--spectrum-tabs-focus-ring-height,
var(--spectrum-alias-single-line-height)
))/2);align-items:center;display:flex;flex-direction:column;height:auto!important;justify-content:center}:host([vertical]):before{bottom:0;height:auto;left:calc(var(--spectrum-tabs-focus-ring-size, var(--spectrum-alias-border-size-thick))*-1);margin-top:0!important;right:calc(var(--spectrum-tabs-focus-ring-size, var(--spectrum-alias-border-size-thick))*-1);top:0}:host([vertical]) ::slotted([slot=icon]){flex-shrink:0;height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);margin-top:var(--sp-tab-vertial-margin-y)}:host(:not([vertical])) ::slotted([slot=icon]){height:100%}:host([dir][vertical]) slot[name=icon]+#item-label{font-size:var(
--spectrum-tabs-text-size,var(--spectrum-alias-font-size-default)
);font-weight:var(
--spectrum-tabs-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);line-height:1;margin:var(--sp-tab-vertial-margin-y) 0}#item-label[hidden]{display:none}@media (forced-colors:active){:host:before{background-color:ButtonFace}:host ::slotted([slot=icon]){color:inherit;position:relative;z-index:1}#item-label{position:relative;z-index:1}:host([selected]){color:HighlightText}:host([selected]) ::slotted([slot=icon]){color:HighlightText}:host([selected]):before{background-color:Highlight;color:HighlightText}:host([selected]) #item-label{color:HighlightText}}
`;var et=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,rt=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?ot(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&et(e,o,c),c};const st=class extends(_(X(Q(u.o,'[slot="icon"]'),""))){constructor(){super(...arguments),this.disabled=!1,this.label="",this.selected=!1,this.vertical=!1,this.value=""}static get styles(){return[tt]}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return!!this.label||this.slotHasContent}handleContentChange(){this.dispatchEvent(new Event("sp-tab-contentchange",{bubbles:!0,composed:!0}))}render(){return t.dy`
            ${this.hasIcon?t.dy`
                      <slot name="icon"></slot>
                  `:t.dy``}
            <label id="item-label" ?hidden=${!this.hasLabel}>
                ${this.slotHasContent?t.dy``:this.label}
                <slot>${this.label}</slot>
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","tab"),this.hasAttribute("id")||(this.id="sp-tab-"+st.instanceCount++),this.shadowRoot.addEventListener("slotchange",this.handleContentChange)}updated(t){super.updated(t),t.has("label")&&void 0!==t.get("label")&&this.handleContentChange(),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.setAttribute("tabindex",this.selected?"0":"-1")),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}};let ct=st;ct.instanceCount=0,rt([(0,d.Cb)({type:Boolean,reflect:!0})],ct.prototype,"disabled",2),rt([(0,d.Cb)({reflect:!0})],ct.prototype,"label",2),rt([(0,d.Cb)({type:Boolean,reflect:!0})],ct.prototype,"selected",2),rt([(0,d.Cb)({type:Boolean,reflect:!0})],ct.prototype,"vertical",2),rt([(0,d.Cb)({type:String,reflect:!0})],ct.prototype,"value",2),customElements.define("sp-tab",ct);const at=t.iv`
:host{display:inline-flex}:host(:not([selected])){display:none}
`;var it=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,lt=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?nt(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&it(e,o,c),c};const ut=class extends u.o{constructor(){super(...arguments),this.selected=!1,this.value=""}render(){return t.dy`
            <slot></slot>
        `}firstUpdated(){this.slot="tab-panel",this.setAttribute("role","tabpanel"),this.tabIndex=0,this.hasAttribute("id")||(this.id="sp-tab-panel-"+ut.instanceCount++)}updated(t){t.has("selected")&&(this.selected?(this.removeAttribute("aria-hidden"),this.tabIndex=0):(this.setAttribute("aria-hidden","true"),this.tabIndex=-1))}};let dt=ut;dt.styles=[at],dt.instanceCount=0,lt([(0,d.Cb)({type:Boolean,reflect:!0})],dt.prototype,"selected",2),lt([(0,d.Cb)({type:String,reflect:!0})],dt.prototype,"value",2),customElements.define("sp-tab-panel",dt);var mt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,bt=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?pt(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&mt(e,o,c),c};function ht(e){class o extends e{renderAnchor({id:e,className:o,ariaHidden:r,labelledby:s,tabindex:c,anchorContent:a=t.dy`<slot></slot>`}){return t.dy`<a
                    id=${e}
                    class=${(0,S.o)(o)}
                    href=${(0,S.o)(this.href)}
                    download=${(0,S.o)(this.download)}
                    target=${(0,S.o)(this.target)}
                    aria-label=${(0,S.o)(this.label)}
                    aria-labelledby=${(0,S.o)(s)}
                    aria-hidden=${(0,S.o)(r?"true":void 0)}
                    tabindex=${(0,S.o)(c)}
                    rel=${(0,S.o)(this.rel)}
                >${a}</a>`}}return bt([(0,d.Cb)({reflect:!0})],o.prototype,"download",2),bt([(0,d.Cb)()],o.prototype,"label",2),bt([(0,d.Cb)({reflect:!0})],o.prototype,"href",2),bt([(0,d.Cb)({reflect:!0})],o.prototype,"target",2),bt([(0,d.Cb)({reflect:!0})],o.prototype,"rel",2),o}var vt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,ft=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?gt(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&vt(e,o,c),c};class xt extends(ht(X(Q(L,'[slot="icon"]')))){constructor(){super(),this.active=!1,this.type="button",this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0})}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return this.slotHasContent}get focusElement(){return this}get buttonContent(){const e=[t.dy`
                <span id="label" ?hidden=${!this.hasLabel}>
                    <slot @slotchange=${this.manageTextObservedSlot}></slot>
                </span>
            `];return this.hasIcon&&e.unshift(t.dy`
                <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
            `),e}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;if(this.anchorElement)this.anchorElement.click(),t=!0;else if("button"!==this.type){const e=document.createElement("button");e.type=this.type,this.insertAdjacentElement("afterend",e),e.click(),e.remove(),t=!0}return t}renderAnchor(){return t.dy`
            ${this.buttonContent}
            ${super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"})}
        `}renderButton(){return t.dy`
            ${this.buttonContent}
        `}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton()}handleKeydown(t){const{code:e}=t;"Space"===e&&(t.preventDefault(),void 0===this.href&&(this.addEventListener("keyup",this.handleKeyup),this.active=!0))}handleKeypress(t){const{code:e}=t;switch(e){case"Enter":case"NumpadEnter":this.click()}}handleKeyup(t){const{code:e}=t;"Space"===e&&(this.removeEventListener("keyup",this.handleKeyup),this.active=!1,this.click())}handleRemoveActive(){this.active=!1}handlePointerdown(){this.active=!0}manageAnchor(){this.href&&this.href.length>0?("button"===this.getAttribute("role")&&this.setAttribute("role","link"),this.removeEventListener("click",this.shouldProxyClick)):((!this.hasAttribute("role")||"link"===this.getAttribute("role"))&&this.setAttribute("role","button"),this.addEventListener("click",this.shouldProxyClick))}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("tabindex")||(this.tabIndex=0),this.manageAnchor(),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keypress",this.handleKeypress),this.addEventListener("pointerdown",this.handlePointerdown)}updated(t){super.updated(t),t.has("href")&&this.manageAnchor(),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("focusout",this.handleRemoveActive),this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointercancel",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("focusout",this.handleRemoveActive),this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointercancel",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1)}}ft([(0,d.Cb)({type:Boolean,reflect:!0})],xt.prototype,"active",2),ft([(0,d.Cb)({type:String})],xt.prototype,"type",2),ft([(0,d.IO)(".anchor")],xt.prototype,"anchorElement",2);const yt=t.iv`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(--mod-font-family-base,var(--spectrum-font-family-base));justify-content:center;line-height:var(
--mod-line-height-small,var(--spectrum-line-height-small)
);margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,border-color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-block-end:-2px;margin-block-start:-2px;padding:0}:host([disabled]){cursor:default}::slotted([slot=icon]){max-block-size:100%}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host{--spectrum-actionbutton-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-actionbutton-border-radius:var(--spectrum-corner-radius-100);--spectrum-actionbutton-border-width:var(--spectrum-border-width-100);--spectrum-actionbutton-focus-indicator-gap:var(
--spectrum-focus-indicator-gap
);--spectrum-actionbutton-focus-indicator-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-actionbutton-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-actionbutton-focus-indicator-border-radius:calc(var(--spectrum-actionbutton-border-radius) + var(--spectrum-actionbutton-focus-indicator-gap))}:host([size=xs]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-75)*2 + var(--spectrum-workflow-icon-size-75));--spectrum-actionbutton-height:var(--spectrum-component-height-50);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-50);--spectrum-actionbutton-font-size:var(--spectrum-font-size-50);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-50);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-extra-small
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-50) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-50) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-50) - var(--spectrum-actionbutton-border-width))}:host([size=s]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-75)*2 + var(--spectrum-workflow-icon-size-75));--spectrum-actionbutton-height:var(--spectrum-component-height-75);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-actionbutton-font-size:var(--spectrum-font-size-75);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-small
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-75) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-75) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-75) - var(--spectrum-actionbutton-border-width))}:host([size=m]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-100)*2 + var(--spectrum-workflow-icon-size-100));--spectrum-actionbutton-height:var(--spectrum-component-height-100);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-actionbutton-font-size:var(--spectrum-font-size-100);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-100);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-medium
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-100) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-100) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-100) - var(--spectrum-actionbutton-border-width))}:host([size=l]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-200)*2 + var(--spectrum-workflow-icon-size-200));--spectrum-actionbutton-height:var(--spectrum-component-height-200);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-actionbutton-font-size:var(--spectrum-font-size-200);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-200);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-large
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-200) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-200) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-200) - var(--spectrum-actionbutton-border-width))}:host([size=xl]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-300)*2 + var(--spectrum-workflow-icon-size-300));--spectrum-actionbutton-height:var(--spectrum-component-height-300);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-300);--spectrum-actionbutton-font-size:var(--spectrum-font-size-300);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-300);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-extra-large
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-300) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-300) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-300) - var(--spectrum-actionbutton-border-width))}@media (forced-colors:active){:host{--highcontrast-actionbutton-focus-indicator-color:ButtonText}:host:after{forced-color-adjust:none}:host([selected]){--highcontrast-actionbutton-background-color-default:Highlight;--highcontrast-actionbutton-background-color-hover:Highlight;--highcontrast-actionbutton-background-color-focus:Highlight;--highcontrast-actionbutton-background-color-down:Highlight;--highcontrast-actionbutton-background-color-disabled:ButtonFace;--highcontrast-actionbutton-border-color-default:HighlightText;--highcontrast-actionbutton-border-color-hover:HighlightText;--highcontrast-actionbutton-border-color-focus:HighlightText;--highcontrast-actionbutton-border-color-down:HighlightText;--highcontrast-actionbutton-border-color-disabled:GrayText;--highcontrast-actionbutton-content-color-default:HighlightText;--highcontrast-actionbutton-content-color-hover:HighlightText;--highcontrast-actionbutton-content-color-focus:HighlightText;--highcontrast-actionbutton-content-color-down:HighlightText;--highcontrast-actionbutton-content-color-disabled:GrayText}:host([selected]) #label,:host([selected]) .hold-affordance,:host([selected]) ::slotted([slot=icon]){forced-color-adjust:none}}:host{background-color:var(
--highcontrast-actionbutton-background-color-default,var(
--mod-actionbutton-background-color-default,var(--spectrum-actionbutton-background-color-default)
)
);border-color:var(
--highcontrast-actionbutton-border-color-default,var(
--mod-actionbutton-border-color-default,var(--spectrum-actionbutton-border-color-default)
)
);border-radius:var(
--mod-actionbutton-border-radius,var(--spectrum-actionbutton-border-radius)
);border-width:var(
--mod-actionbutton-border-width,var(--spectrum-actionbutton-border-width)
);color:var(
--highcontrast-actionbutton-content-color-default,var(
--mod-actionbutton-content-color-default,var(--spectrum-actionbutton-content-color-default)
)
);height:var(--mod-actionbutton-height,var(--spectrum-actionbutton-height));min-inline-size:var(
--mod-actionbutton-min-width,var(--spectrum-actionbutton-min-width)
);padding-inline-end:var(
--mod-actionbutton-edge-to-text,var(--spectrum-actionbutton-edge-to-text)
);padding-inline-start:var(
--mod-actionbutton-edge-to-text,var(--spectrum-actionbutton-edge-to-text)
);position:relative}:host(:hover){background-color:var(
--highcontrast-actionbutton-background-color-hover,var(
--mod-actionbutton-background-color-hover,var(--spectrum-actionbutton-background-color-hover)
)
);border-color:var(
--highcontrast-actionbutton-border-color-hover,var(
--mod-actionbutton-border-color-hover,var(--spectrum-actionbutton-border-color-hover)
)
);color:var(
--highcontrast-actionbutton-content-color-hover,var(
--mod-actionbutton-content-color-hover,var(--spectrum-actionbutton-content-color-hover)
)
)}:host(.focus-visible){background-color:var(
--highcontrast-actionbutton-background-color-focus,var(
--mod-actionbutton-background-color-focus,var(--spectrum-actionbutton-background-color-focus)
)
);border-color:var(
--highcontrast-actionbutton-border-color-focus,var(
--mod-actionbutton-border-color-focus,var(--spectrum-actionbutton-border-color-focus)
)
);color:var(
--highcontrast-actionbutton-content-color-focus,var(
--mod-actionbutton-content-color-focus,var(--spectrum-actionbutton-content-color-focus)
)
)}:host(.focus-visible){background-color:var(
--highcontrast-actionbutton-background-color-focus,var(
--mod-actionbutton-background-color-focus,var(--spectrum-actionbutton-background-color-focus)
)
);border-color:var(
--highcontrast-actionbutton-border-color-focus,var(
--mod-actionbutton-border-color-focus,var(--spectrum-actionbutton-border-color-focus)
)
);color:var(
--highcontrast-actionbutton-content-color-focus,var(
--mod-actionbutton-content-color-focus,var(--spectrum-actionbutton-content-color-focus)
)
)}:host(:focus-visible){background-color:var(
--highcontrast-actionbutton-background-color-focus,var(
--mod-actionbutton-background-color-focus,var(--spectrum-actionbutton-background-color-focus)
)
);border-color:var(
--highcontrast-actionbutton-border-color-focus,var(
--mod-actionbutton-border-color-focus,var(--spectrum-actionbutton-border-color-focus)
)
);color:var(
--highcontrast-actionbutton-content-color-focus,var(
--mod-actionbutton-content-color-focus,var(--spectrum-actionbutton-content-color-focus)
)
)}:host([active]){background-color:var(
--highcontrast-actionbutton-background-color-down,var(
--mod-actionbutton-background-color-down,var(--spectrum-actionbutton-background-color-down)
)
);border-color:var(
--highcontrast-actionbutton-border-color-down,var(
--mod-actionbutton-border-color-down,var(--spectrum-actionbutton-border-color-down)
)
);color:var(
--highcontrast-actionbutton-content-color-down,var(
--mod-actionbutton-content-color-down,var(--spectrum-actionbutton-content-color-down)
)
)}:host([disabled]){background-color:var(
--highcontrast-actionbutton-background-color-disabled,var(
--mod-actionbutton-background-color-disabled,var(--spectrum-actionbutton-background-color-disabled)
)
);border-color:var(
--highcontrast-actionbutton-border-color-disabled,var(
--mod-actionbutton-border-color-disabled,var(--spectrum-actionbutton-border-color-disabled)
)
);color:var(
--highcontrast-actionbutton-content-color-disabled,var(
--mod-actionbutton-content-color-disabled,var(--spectrum-actionbutton-content-color-disabled)
)
)}::slotted([slot=icon]){color:inherit;height:var(
--mod-actionbutton-icon-size,var(--spectrum-actionbutton-icon-size)
);margin-inline-start:calc((var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
) - var(
--mod-actionbutton-edge-to-visual,
var(--spectrum-actionbutton-edge-to-visual)
))*-1);padding-inline-start:calc((var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
) - var(
--mod-actionbutton-edge-to-visual,
var(--spectrum-actionbutton-edge-to-visual)
))*-1);width:var(
--mod-actionbutton-icon-size,var(--spectrum-actionbutton-icon-size)
)}slot[name=icon]+#label{padding-inline-end:0;padding-inline-start:var(
--mod-actionbutton-text-to-visual,var(--spectrum-actionbutton-text-to-visual)
)}.hold-affordance+::slotted([slot=icon]),slot[icon-only]::slotted([slot=icon]){margin-inline-end:calc((var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
) - var(
--mod-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
))*-1);margin-inline-start:calc((var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
) - var(
--mod-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
))*-1)}#label{color:inherit;font-size:var(
--mod-actionbutton-font-size,var(--spectrum-actionbutton-font-size)
);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}[dir=rtl] .hold-affordance{transform:matrix(-1,0,0,1,0,0)}.hold-affordance{color:inherit;inset-block-end:calc(var(
--mod-actionbutton-edge-to-hold-icon,
var(--spectrum-actionbutton-edge-to-hold-icon)
) - var(
--mod-actionbutton-border-width,
var(--spectrum-actionbutton-border-width)
));inset-inline-end:calc(var(
--mod-actionbutton-edge-to-hold-icon,
var(--spectrum-actionbutton-edge-to-hold-icon)
) - var(
--mod-actionbutton-border-width,
var(--spectrum-actionbutton-border-width)
));position:absolute}:host{transition:border-color var(
--mod-actionbutton-animation-duration,var(--spectrum-actionbutton-animation-duration)
) ease-in-out}:host:after{border-radius:var(
--mod-actionbutton-focus-indicator-border-radius,var(--spectrum-actionbutton-focus-indicator-border-radius)
);content:"";inset:0;margin:calc((var(
--mod-actionbutton-focus-indicator-gap,
var(--spectrum-actionbutton-focus-indicator-gap)
) + var(
--mod-actionbutton-border-width,
var(--spectrum-actionbutton-border-width)
))*-1);pointer-events:none;position:absolute;transition:box-shadow var(
--mod-actionbutton-animation-duration,var(--spectrum-actionbutton-animation-duration)
) ease-in-out}:host(.focus-visible){box-shadow:none}:host(.focus-visible){box-shadow:none}:host(:focus-visible){box-shadow:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-actionbutton-focus-indicator-thickness,var(--spectrum-actionbutton-focus-indicator-thickness)
) var(
--highcontrast-actionbutton-focus-indicator-color,var(
--mod-actionbutton-focus-indicator-color,var(--spectrum-actionbutton-focus-indicator-color)
)
)}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-actionbutton-focus-indicator-thickness,var(--spectrum-actionbutton-focus-indicator-thickness)
) var(
--highcontrast-actionbutton-focus-indicator-color,var(
--mod-actionbutton-focus-indicator-color,var(--spectrum-actionbutton-focus-indicator-color)
)
)}:host(:focus-visible):after{box-shadow:0 0 0 var(
--mod-actionbutton-focus-indicator-thickness,var(--spectrum-actionbutton-focus-indicator-thickness)
) var(
--highcontrast-actionbutton-focus-indicator-color,var(
--mod-actionbutton-focus-indicator-color,var(--spectrum-actionbutton-focus-indicator-color)
)
)}:host{--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-content-color-focus
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-border-color-disabled
);--spectrum-actionbutton-content-color-disabled:var(
--system-spectrum-actionbutton-content-color-disabled
)}:host([quiet]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-quiet-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-quiet-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-quiet-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-quiet-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-quiet-border-color-focus
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-quiet-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-quiet-border-color-disabled
)}:host([selected]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-selected-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-selected-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-selected-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-selected-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-selected-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-selected-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-selected-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-selected-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-selected-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-selected-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-selected-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-selected-content-color-focus
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-selected-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-selected-border-color-disabled
)}:host([selected][emphasized]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-selected-emphasized-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-selected-emphasized-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-selected-emphasized-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-selected-emphasized-background-color-focus
)}:host([variant=black][quiet]){--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-focus
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-disabled
)}:host([variant=white][quiet]){--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-focus
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-disabled
)}:host([variant=black]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticblack-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticblack-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticblack-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticblack-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticblack-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticblack-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticblack-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticblack-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-staticblack-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-staticblack-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-staticblack-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-staticblack-content-color-focus
);--spectrum-actionbutton-focus-indicator-color:var(
--system-spectrum-actionbutton-staticblack-focus-indicator-color
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticblack-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-border-color-disabled
);--spectrum-actionbutton-content-color-disabled:var(
--system-spectrum-actionbutton-staticblack-content-color-disabled
)}:host([variant=black][selected]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-focus
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-selected-border-color-disabled
);--spectrum-actionbutton-content-color-default:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-content-color-default
)
);--spectrum-actionbutton-content-color-hover:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-content-color-hover
)
);--spectrum-actionbutton-content-color-down:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-content-color-down
)
);--spectrum-actionbutton-content-color-focus:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-content-color-focus
)
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-disabled
)}:host([variant=white]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticwhite-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticwhite-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticwhite-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticwhite-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticwhite-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticwhite-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticwhite-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticwhite-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-staticwhite-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-staticwhite-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-staticwhite-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-staticwhite-content-color-focus
);--spectrum-actionbutton-focus-indicator-color:var(
--system-spectrum-actionbutton-staticwhite-focus-indicator-color
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-border-color-disabled
);--spectrum-actionbutton-content-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-content-color-disabled
)}:host([variant=white][selected]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-focus
);--spectrum-actionbutton-content-color-default:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-content-color-default
)
);--spectrum-actionbutton-content-color-hover:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-content-color-hover
)
);--spectrum-actionbutton-content-color-down:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-content-color-down
)
);--spectrum-actionbutton-content-color-focus:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-content-color-focus
)
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-selected-border-color-disabled
)}:host{display:inline-flex;flex-direction:row}:host([disabled]){cursor:auto;pointer-events:none}:host([dir]){-webkit-appearance:none}::slotted([slot=icon]){flex-shrink:0}#button{inset:0;position:absolute}#label{flex-grow:var(--spectrum-actionbutton-label-flex-grow);text-align:var(--spectrum-actionbutton-label-text-align)}:host([size=xs]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xs
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xs
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);min-width:var(--spectrum-actionbutton-height,0)}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}@media (forced-colors:active){:host{--highcontrast-actionbutton-border-color-disabled:GrayText;--highcontrast-actionbutton-content-color-disabled:GrayText}}
`,kt=t.iv`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-CornerTriangle75{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
)}.spectrum-UIIcon-CornerTriangle100{height:var(--spectrum-alias-ui-icon-cornertriangle-size-100);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}.spectrum-UIIcon-CornerTriangle200{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
)}.spectrum-UIIcon-CornerTriangle300{height:var(--spectrum-alias-ui-icon-cornertriangle-size-300);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}
`;let wt;const zt=function(t,...e){return wt?wt(t,...e):e.reduce(((e,o,r)=>e+o+t[r+1]),t[0])},Ct=t=>{wt=t};customElements.define("sp-icon-corner-triangle300",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Corner Triangle300"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"
    />
  </svg>`)()}});var It=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Et=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?qt(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&It(e,o,c),c};const St={xs:"spectrum-UIIcon-CornerTriangle75",s:"spectrum-UIIcon-CornerTriangle75",m:"spectrum-UIIcon-CornerTriangle100",l:"spectrum-UIIcon-CornerTriangle200",xl:"spectrum-UIIcon-CornerTriangle300"};let $t;class At extends(z(xt,{validSizes:["xs","s","m","l","xl"]})){constructor(){super(),this.emphasized=!1,this.holdAffordance=!1,this.quiet=!1,this.role="button",this.selected=!1,this.toggles=!1,this._value="",this.onClick=()=>{this.toggles&&(this.selected=!this.selected,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=!this.selected))},this.addEventListener("click",this.onClick),this.addEventListener("pointerdown",this.onPointerdown)}static get styles(){return[yt,kt]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return(this.textContent||"").trim()}onPointerdown(t){0===t.button&&(this.addEventListener("pointerup",this.onPointerup),this.addEventListener("pointercancel",this.onPointerup),$t=setTimeout((()=>{this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"pointer"}}))}),300))}onPointerup(){clearTimeout($t),this.removeEventListener("pointerup",this.onPointerup),this.removeEventListener("pointercancel",this.onPointerup)}handleKeydown(t){if(!this.holdAffordance)return super.handleKeydown(t);const{code:e,altKey:o}=t;("Space"===e||o&&"ArrowDown"===e)&&(t.preventDefault(),"ArrowDown"===e&&(t.stopPropagation(),t.stopImmediatePropagation()),this.addEventListener("keyup",this.handleKeyup),this.active=!0)}handleKeyup(t){if(!this.holdAffordance)return super.handleKeyup(t);const{code:e,altKey:o}=t;("Space"===e||o&&"ArrowDown"===e)&&(t.stopPropagation(),this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"keyboard"}})),this.active=!1)}get buttonContent(){const e=super.buttonContent;return this.holdAffordance&&e.unshift(t.dy`
                <sp-icon-corner-triangle300
                    class="hold-affordance ${St[this.size]}"
                ></sp-icon-corner-triangle300>
            `),e}updated(t){super.updated(t);const e="button"===this.role&&(this.selected||this.toggles);(t.has("selected")||t.has("role"))&&(e?this.setAttribute("aria-pressed",this.selected?"true":"false"):this.removeAttribute("aria-pressed"))}}Et([(0,d.Cb)({type:Boolean,reflect:!0})],At.prototype,"emphasized",2),Et([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"hold-affordance"})],At.prototype,"holdAffordance",2),Et([(0,d.Cb)({type:Boolean,reflect:!0})],At.prototype,"quiet",2),Et([(0,d.Cb)({reflect:!0})],At.prototype,"role",2),Et([(0,d.Cb)({type:Boolean,reflect:!0})],At.prototype,"selected",2),Et([(0,d.Cb)({type:Boolean,reflect:!0})],At.prototype,"toggles",2),Et([(0,d.Cb)({reflect:!0})],At.prototype,"variant",2),Et([(0,d.Cb)({type:String})],At.prototype,"value",1),customElements.define("sp-action-button",At);const _t=t.iv`
:host{--spectrum-buttongroup-spacing-horizontal:var(
--spectrum-spacing-300
);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host([size=s]){--spectrum-buttongroup-spacing-horizontal:var(
--spectrum-spacing-200
);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-200)}:host([size=m]){--spectrum-buttongroup-spacing-horizontal:var(
--spectrum-spacing-300
);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host([size=l]){--spectrum-buttongroup-spacing-horizontal:var(
--spectrum-spacing-300
);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host([size=xl]){--spectrum-buttongroup-spacing-horizontal:var(
--spectrum-spacing-300
);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host{display:flex;flex-wrap:wrap;gap:var(
--mod-buttongroup-spacing-horizontal,var(--spectrum-buttongroup-spacing-horizontal)
)}::slotted(*){flex-shrink:0}:host([vertical]){display:inline-flex;flex-direction:column;gap:var(
--mod-buttongroup-spacing-vertical,var(--spectrum-buttongroup-spacing-vertical)
)}:host([vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-flex-grow:1}:host([dir=ltr][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:left}:host([dir=rtl][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:right}
`;var Tt=Object.defineProperty;Object.getOwnPropertyDescriptor;class Ut extends(z(u.o)){constructor(){super(...arguments),this.vertical=!1}static get styles(){return[_t]}handleSlotchange({target:t}){t.assignedElements().forEach((t=>{t.size=this.size}))}render(){return t.dy`
            <slot @slotchange=${this.handleSlotchange}></slot>
        `}}((t,e,o,r)=>{for(var s,c=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(c=s(e,o,c)||c);c&&Tt(e,o,c)})([(0,d.Cb)({type:Boolean,reflect:!0})],Ut.prototype,"vertical"),customElements.define("sp-button-group",Ut);const Pt=t.iv`
:host{display:inline-flex;vertical-align:top}:host([dir]){-webkit-appearance:none}:host([disabled]){cursor:auto;pointer-events:none}#button{inset:0;position:absolute}:host:after{pointer-events:none}slot[name=icon]::slotted(img),slot[name=icon]::slotted(svg){fill:currentcolor;stroke:currentcolor;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}
`;class jt extends xt{static get styles(){return[Pt]}}const Lt=t.iv`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)
);justify-content:center;line-height:var(--mod-line-height-100,var(--spectrum-line-height-100));margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,border-color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-block-end:-2px;margin-block-start:-2px;padding:0}:host([disabled]){cursor:default}:host:after{bottom:0;display:block;left:0;margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-1);right:0;top:0;transition:opacity var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,margin var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out}:host(.focus-visible):after{margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-2)}:host(.focus-visible):after{margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-2)}:host(:focus-visible):after{margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-2)}#label{align-self:center;justify-self:center;text-align:center}#label[hidden]{display:none}:host{--spectrum-button-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-button-border-radius:var(--spectrum-corner-radius-100);--spectrum-button-border-width:var(--spectrum-border-width-200);--spectrum-button-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-button-focus-ring-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-button-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-button-focus-ring-border-radius:calc(var(--spectrum-button-border-radius) + var(--spectrum-button-focus-ring-gap))}:host([size=s]){--spectrum-button-min-width:calc(var(--spectrum-component-height-75)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(
--spectrum-component-pill-edge-to-text-75
);--spectrum-button-height:var(--spectrum-component-height-75);--spectrum-button-font-size:var(--spectrum-font-size-75);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-75) - var(--spectrum-button-border-width));--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-75) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-75);--spectrum-button-padding-label-top:var(
--spectrum-component-top-to-text-75
);--spectrum-button-padding-label-bottom:var(
--spectrum-component-bottom-to-text-75
)}:host([size=m]){--spectrum-button-min-width:calc(var(--spectrum-component-height-100)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(
--spectrum-component-pill-edge-to-text-100
);--spectrum-button-height:var(--spectrum-component-height-100);--spectrum-button-font-size:var(--spectrum-font-size-100);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-100) - var(--spectrum-button-border-width));--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-100) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-100);--spectrum-button-padding-label-top:var(
--spectrum-component-top-to-text-100
);--spectrum-button-padding-label-bottom:var(
--spectrum-component-bottom-to-text-100
)}:host([size=l]){--spectrum-button-min-width:calc(var(--spectrum-component-height-200)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(
--spectrum-component-pill-edge-to-text-200
);--spectrum-button-height:var(--spectrum-component-height-200);--spectrum-button-font-size:var(--spectrum-font-size-200);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-200) - var(--spectrum-button-border-width));--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-200) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-200);--spectrum-button-padding-label-top:var(
--spectrum-component-top-to-text-200
);--spectrum-button-padding-label-bottom:var(
--spectrum-component-bottom-to-text-200
)}:host([size=xl]){--spectrum-button-min-width:calc(var(--spectrum-component-height-300)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(
--spectrum-component-pill-edge-to-text-300
);--spectrum-button-height:var(--spectrum-component-height-300);--spectrum-button-font-size:var(--spectrum-font-size-300);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-300) - var(--spectrum-button-border-width));--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-300) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-300);--spectrum-button-padding-label-top:var(
--spectrum-component-top-to-text-300
);--spectrum-button-padding-label-bottom:var(
--spectrum-component-bottom-to-text-300
)}:host{block-size:auto;border-radius:var(
--mod-button-border-radius,var(--spectrum-button-border-radius)
);border-style:solid;border-width:var(
--mod-button-border-width,var(--spectrum-button-border-width)
);color:inherit;font-size:var(--mod-button-font-size,var(--spectrum-button-font-size));font-weight:var(--mod-bold-font-weight,var(--spectrum-bold-font-weight));height:var(--mod-button-height,var(--spectrum-button-height));min-block-size:var(
--mod-button-min-width,var(--spectrum-button-min-width)
);min-block-size:var(
--mod-spectrum-button-height,var(--spectrum-button-height)
);min-inline-size:var(
--mod-button-min-width,var(--spectrum-button-min-width)
);min-width:var(--mod-button-min-width,var(--spectrum-button-min-width));padding-block-end:0;padding-block-start:0;padding-inline-end:var(
--mod-button-edge-to-text,var(--spectrum-button-edge-to-text)
);padding-inline-start:var(
--mod-button-edge-to-visual,var(--spectrum-button-edge-to-visual)
);position:relative}:host(:hover),:host([active]){box-shadow:none}::slotted([slot=icon]){color:inherit;inset-block-end:calc(var(
--mod-spectrum-button-edge-to-visual,
var(--spectrum-button-edge-to-visual)
) - var(--mod-button-border-width, var(--spectrum-button-border-width)));inset-inline-end:calc(var(
--mod-spectrum-button-edge-to-visual,
var(--spectrum-button-edge-to-visual)
) - var(--mod-button-border-width, var(--spectrum-button-border-width)))}slot[name=icon]+#label{padding-inline-end:0;padding-inline-start:var(
--mod-button-padding-label-to-icon,var(--spectrum-button-padding-label-to-icon)
)}:host:after{border-radius:calc(var(--mod-button-border-radius, var(--spectrum-button-border-radius)) + var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap)))}#label{padding-block-end:var(
--mod-button-padding-label-bottom,var(--spectrum-button-padding-label-bottom)
);padding-block-start:var(
--mod-button-padding-label-top,var(--spectrum-button-padding-label-top)
)}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) var(
--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color)
)}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) var(
--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color)
)}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) var(
--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color)
)}:host{transition:border-color var(
--mod-button-animation-duration,var(--spectrum-button-animation-duration)
) ease-in-out}:host:after{border-radius:var(
--mod-button-focus-ring-border-radius,var(--spectrum-button-focus-ring-border-radius)
);content:"";inset:0;margin:calc((var(
--mod-button-focus-ring-gap,
var(--spectrum-button-focus-ring-gap)
) + var(
--mod-button-border-width,
var(--spectrum-button-border-width)
))*-1);pointer-events:none;position:absolute;transition:box-shadow var(
--mod-button-animation-duration,var(--spectrum-button-animation-duration)
) ease-in-out}:host(.focus-visible){box-shadow:none}:host(.focus-visible){box-shadow:none}:host(:focus-visible){box-shadow:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) var(
--highcontrast-button-focus-ring-color,var(
--mod-button-focus-ring-color,var(
--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color)
)
)
)}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) var(
--highcontrast-button-focus-ring-color,var(
--mod-button-focus-ring-color,var(
--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color)
)
)
)}:host(:focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) var(
--highcontrast-button-focus-ring-color,var(
--mod-button-focus-ring-color,var(
--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color)
)
)
)}:host{background-color:var(
--highcontrast-button-background-color-default,var(
--mod-button-background-color-default,var(--spectrum-button-background-color-default)
)
);border-color:var(
--highcontrast-button-border-color-default,var(
--mod-button-border-color-default,var(--spectrum-button-border-color-default)
)
);color:var(
--highcontrast-button-content-color-default,var(
--mod-button-content-color-default,var(--spectrum-button-content-color-default)
)
)}:host(:hover){background-color:var(
--highcontrast-button-background-color-hover,var(
--mod-button-background-color-hover,var(--spectrum-button-background-color-hover)
)
);border-color:var(
--highcontrast-button-border-color-hover,var(
--mod-button-border-color-hover,var(--spectrum-button-border-color-hover)
)
);color:var(
--highcontrast-button-content-color-hover,var(
--mod-button-content-color-hover,var(--spectrum-button-content-color-hover)
)
)}:host(.focus-visible){background-color:var(
--highcontrast-button-background-color-focus,var(
--mod-button-background-color-focus,var(--spectrum-button-background-color-focus)
)
);border-color:var(
--highcontrast-button-border-color-focus,var(
--mod-button-border-color-focus,var(--spectrum-button-border-color-focus)
)
);color:var(
--highcontrast-button-content-color-focus,var(
--mod-button-content-color-focus,var(--spectrum-button-content-color-focus)
)
)}:host(.focus-visible){background-color:var(
--highcontrast-button-background-color-focus,var(
--mod-button-background-color-focus,var(--spectrum-button-background-color-focus)
)
);border-color:var(
--highcontrast-button-border-color-focus,var(
--mod-button-border-color-focus,var(--spectrum-button-border-color-focus)
)
);color:var(
--highcontrast-button-content-color-focus,var(
--mod-button-content-color-focus,var(--spectrum-button-content-color-focus)
)
)}:host(:focus-visible){background-color:var(
--highcontrast-button-background-color-focus,var(
--mod-button-background-color-focus,var(--spectrum-button-background-color-focus)
)
);border-color:var(
--highcontrast-button-border-color-focus,var(
--mod-button-border-color-focus,var(--spectrum-button-border-color-focus)
)
);color:var(
--highcontrast-button-content-color-focus,var(
--mod-button-content-color-focus,var(--spectrum-button-content-color-focus)
)
)}:host([active]){background-color:var(
--highcontrast-button-background-color-down,var(
--mod-button-background-color-down,var(--spectrum-button-background-color-down)
)
);border-color:var(
--highcontrast-button-border-color-down,var(
--mod-button-border-color-down,var(--spectrum-button-border-color-down)
)
);color:var(
--highcontrast-button-content-color-down,var(
--mod-button-content-color-down,var(--spectrum-button-content-color-down)
)
)}:host([disabled]){background-color:var(
--highcontrast-button-background-color-disabled,var(
--mod-button-background-color-disabled,var(--spectrum-button-background-color-disabled)
)
);border-color:var(
--highcontrast-button-border-color-disabled,var(
--mod-button-border-color-disabled,var(--spectrum-button-border-color-disabled)
)
);color:var(
--highcontrast-button-content-color-disabled,var(
--mod-button-content-color-disabled,var(--spectrum-button-content-color-disabled)
)
)}@media (forced-colors:active){:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) ButtonTExt;forced-color-adjust:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) ButtonTExt;forced-color-adjust:none}:host(:focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) ButtonTExt;forced-color-adjust:none}:host([variant=accent][treatment=fill]){background-color:ButtonText;color:ButtonFace}:host([variant=accent][treatment=fill][disabled]){background-color:ButtonFace;color:GrayText}:host([variant=accent][treatment=fill].focus-visible),:host([variant=accent][treatment=fill]:hover),:host([variant=accent][treatment=fill][active]),:host([variant=accent][treatment=fill][focused]){background-color:Highlight}:host([variant=accent][treatment=fill].focus-visible),:host([variant=accent][treatment=fill]:hover),:host([variant=accent][treatment=fill][active]),:host([variant=accent][treatment=fill][focused]){background-color:Highlight}:host([variant=accent][treatment=fill]:focus-visible),:host([variant=accent][treatment=fill]:hover),:host([variant=accent][treatment=fill][active]),:host([variant=accent][treatment=fill][focused]){background-color:Highlight}:host([variant=accent][treatment=fill]) #label{forced-color-adjust:none}}:host([static=white]){--spectrum-button-focus-indicator-color:var(
--mod-static-black-focus-indicator-color,var(--spectrum-static-black-focus-indicator-color)
)}:host([static=black]){--spectrum-button-focus-indicator-color:var(
--mod-static-black-focus-indicator-color,var(--spectrum-static-black-focus-indicator-color)
)}:host{--spectrum-button-background-color-default:var(
--system-spectrum-button-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-content-color-disabled
)}:host([variant=accent]){--spectrum-button-background-color-default:var(
--system-spectrum-button-accent-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-accent-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-accent-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-accent-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-accent-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-accent-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-accent-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-accent-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-accent-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-accent-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-accent-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-accent-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-accent-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-accent-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-accent-content-color-disabled
)}:host([variant=accent][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-accent-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-accent-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-accent-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-accent-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-accent-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-accent-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-accent-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-accent-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-accent-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-accent-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-accent-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-accent-outline-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-accent-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-accent-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-accent-outline-content-color-disabled
)}:host([variant=negative]){--spectrum-button-background-color-default:var(
--system-spectrum-button-negative-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-negative-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-negative-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-negative-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-negative-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-negative-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-negative-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-negative-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-negative-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-negative-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-negative-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-negative-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-negative-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-negative-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-negative-content-color-disabled
)}:host([variant=negative][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-negative-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-negative-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-negative-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-negative-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-negative-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-negative-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-negative-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-negative-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-negative-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-negative-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-negative-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-negative-outline-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-negative-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-negative-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-negative-outline-content-color-disabled
)}:host([variant=primary]){--spectrum-button-background-color-default:var(
--system-spectrum-button-primary-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-primary-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-primary-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-primary-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-primary-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-primary-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-primary-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-primary-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-primary-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-primary-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-primary-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-primary-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-primary-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-primary-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-primary-content-color-disabled
)}:host([variant=primary][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-primary-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-primary-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-primary-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-primary-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-primary-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-primary-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-primary-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-primary-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-primary-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-primary-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-primary-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-primary-outline-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-primary-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-primary-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-primary-outline-content-color-disabled
)}:host([variant=secondary]){--spectrum-button-background-color-default:var(
--system-spectrum-button-secondary-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-secondary-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-secondary-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-secondary-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-secondary-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-secondary-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-secondary-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-secondary-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-secondary-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-secondary-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-secondary-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-secondary-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-secondary-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-secondary-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-secondary-content-color-disabled
)}:host([variant=secondary][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-secondary-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-secondary-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-secondary-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-secondary-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-secondary-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-secondary-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-secondary-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-secondary-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-secondary-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-secondary-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-secondary-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-secondary-outline-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-secondary-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-secondary-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-secondary-outline-content-color-disabled
)}:host([quiet]){--spectrum-button-background-color-default:var(
--system-spectrum-button-quiet-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-quiet-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-quiet-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-quiet-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-quiet-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-quiet-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-quiet-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-quiet-border-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-quiet-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-quiet-border-color-disabled
)}:host(.is-selected){--spectrum-button-background-color-default:var(
--system-spectrum-button-selected-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-selected-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-selected-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-selected-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-selected-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-selected-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-selected-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-selected-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-selected-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-selected-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-selected-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-selected-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-selected-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-selected-border-color-disabled
)}:host(.is-selected.spectrum-Button--emphasized){--spectrum-button-background-color-default:var(
--system-spectrum-button-selected-emphasized-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-selected-emphasized-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-selected-emphasized-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-selected-emphasized-background-color-focus
)}:host([static=black][quiet]){--spectrum-button-border-color-default:var(
--system-spectrum-button-staticblack-quiet-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticblack-quiet-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticblack-quiet-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticblack-quiet-border-color-focus
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticblack-quiet-border-color-disabled
)}:host([static=white][quiet]){--spectrum-button-border-color-default:var(
--system-spectrum-button-staticwhite-quiet-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticwhite-quiet-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticwhite-quiet-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticwhite-quiet-border-color-focus
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticwhite-quiet-border-color-disabled
)}:host([static=white]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticwhite-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticwhite-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticwhite-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticwhite-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticwhite-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticwhite-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticwhite-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticwhite-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticwhite-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticwhite-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticwhite-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticwhite-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticwhite-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticwhite-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticwhite-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticwhite-content-color-disabled
)}:host([static=white][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticwhite-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticwhite-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticwhite-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticwhite-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticwhite-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticwhite-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticwhite-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticwhite-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticwhite-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticwhite-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticwhite-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticwhite-outline-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticwhite-outline-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticwhite-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticwhite-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticwhite-outline-content-color-disabled
)}:host([static=white].is-selected){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticwhite-selected-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticwhite-selected-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticwhite-selected-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticwhite-selected-background-color-focus
);--spectrum-button-content-color-default:var(
--mod-button-static-content-color,var(--system-spectrum-button-staticwhite-selected-content-color-default)
);--spectrum-button-content-color-hover:var(
--mod-button-static-content-color,var(--system-spectrum-button-staticwhite-selected-content-color-hover)
);--spectrum-button-content-color-down:var(
--mod-button-static-content-color,var(--system-spectrum-button-staticwhite-selected-content-color-down)
);--spectrum-button-content-color-focus:var(
--mod-button-static-content-color,var(--system-spectrum-button-staticwhite-selected-content-color-focus)
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticwhite-selected-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticwhite-selected-border-color-disabled
)}:host([static=white][variant=secondary]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticwhite-secondary-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticwhite-secondary-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticwhite-secondary-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticwhite-secondary-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticwhite-secondary-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticwhite-secondary-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticwhite-secondary-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticwhite-secondary-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticwhite-secondary-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticwhite-secondary-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticwhite-secondary-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticwhite-secondary-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticwhite-secondary-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticwhite-secondary-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticwhite-secondary-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticwhite-secondary-content-color-disabled
)}:host([static=white][variant=secondary][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticwhite-secondary-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticwhite-secondary-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticwhite-secondary-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticwhite-secondary-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticwhite-secondary-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticwhite-secondary-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticwhite-secondary-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticwhite-secondary-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticwhite-secondary-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticwhite-secondary-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticwhite-secondary-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticwhite-secondary-outline-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticwhite-secondary-outline-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticwhite-secondary-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticwhite-secondary-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticwhite-secondary-outline-content-color-disabled
)}:host([static=black]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticblack-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticblack-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticblack-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticblack-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticblack-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticblack-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticblack-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticblack-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticblack-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticblack-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticblack-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticblack-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticblack-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticblack-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticblack-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticblack-content-color-disabled
)}:host([static=black][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticblack-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticblack-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticblack-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticblack-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticblack-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticblack-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticblack-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticblack-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticblack-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticblack-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticblack-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticblack-outline-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticblack-outline-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticblack-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticblack-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticblack-outline-content-color-disabled
)}:host([static=black][variant=secondary]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticblack-secondary-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticblack-secondary-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticblack-secondary-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticblack-secondary-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticblack-secondary-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticblack-secondary-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticblack-secondary-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticblack-secondary-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticblack-secondary-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticblack-secondary-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticblack-secondary-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticblack-secondary-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticblack-secondary-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticblack-secondary-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticblack-secondary-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticblack-secondary-content-color-disabled
)}:host([static=black][variant=secondary][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticblack-secondary-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticblack-secondary-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticblack-secondary-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticblack-secondary-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticblack-secondary-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticblack-secondary-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticblack-secondary-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticblack-secondary-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticblack-secondary-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticblack-secondary-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticblack-secondary-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticblack-secondary-outline-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticblack-secondary-outline-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticblack-secondary-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticblack-secondary-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticblack-secondary-outline-content-color-disabled
)}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}@media (forced-colors:active){:host([treatment][disabled]){border-color:graytext}:host([treatment]:not([disabled]):hover){border-color:highlight}}::slotted([slot=icon]){inset:unset}
`;var Ot=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Dt=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?Bt(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&Ot(e,o,c),c};const Ft=["accent","primary","secondary","negative","white","black"];class Mt extends(z(jt)){constructor(){super(...arguments),this._variant="accent",this.treatment="fill"}static get styles(){return[...super.styles,Lt]}get variant(){return this._variant}set variant(t){if(t!==this.variant){switch(this.requestUpdate("variant",this.variant),t){case"cta":this._variant="accent";break;case"overBackground":return this.removeAttribute("variant"),this.static="white",void(this.treatment="outline");case"white":case"black":return this.static=t,void this.removeAttribute("variant");case null:return;default:Ft.includes(t)?this._variant=t:this._variant="accent"}this.setAttribute("variant",this.variant)}}set quiet(t){this.treatment=t?"outline":"fill"}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("variant")||this.setAttribute("variant",this.variant)}}Dt([(0,d.Cb)()],Mt.prototype,"variant",1),Dt([(0,d.Cb)({type:String,reflect:!0})],Mt.prototype,"static",2),Dt([(0,d.Cb)({reflect:!0})],Mt.prototype,"treatment",2),Dt([(0,d.Cb)({type:Boolean})],Mt.prototype,"quiet",1),customElements.define("sp-button",Mt),customElements.define("sp-icon-asterisk100",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Asterisk100"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 01.167-.036L3.5 3.148l.13-2.7a.1.1 0 01.081-.111.15.15 0 01.03 0l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"
    />
  </svg>`)()}});const Rt=t.iv`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Asterisk75{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(
--spectrum-alias-ui-icon-asterisk-size-75,var(--spectrum-global-dimension-static-size-100)
)}.spectrum-UIIcon-Asterisk100{height:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
);width:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
)}.spectrum-UIIcon-Asterisk200{height:var(--spectrum-alias-ui-icon-asterisk-size-200);width:var(
--spectrum-alias-ui-icon-asterisk-size-200
)}.spectrum-UIIcon-Asterisk300{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(
--spectrum-alias-ui-icon-asterisk-size-300
)}
`;function Ht(t,e,o){const r=t.getAttribute(e);let s=r?r.split(/\s+/):[];s=s.filter((t=>!o.find((e=>t===e)))),s.length?t.setAttribute(e,s.join(" ")):t.removeAttribute(e)}function Nt(t,e,o){const r=Array.isArray(o)?o:[o],s=t.getAttribute(e),c=s?s.split(/\s+/):[];return r.every((t=>c.indexOf(t)>-1))?()=>{}:(c.push(...r),t.setAttribute(e,c.join(" ")),()=>Ht(t,e,r))}const Vt=Symbol("element resolver updated");class Kt{constructor(t,{selector:e}={selector:""}){this._element=null,this._selector="",this.mutationCallback=t=>{let e=!1;t.forEach((t=>{if(!e){if("childList"===t.type){const o=this.element&&[...t.removedNodes].includes(this.element),r=!!this.selector&&[...t.addedNodes].some((t=>{var e;return null==(e=null==t?void 0:t.matches)?void 0:e.call(t,this.selector)}));e=e||o||r}if("attributes"===t.type){const o=t.target===this.element,r=!!this.selector&&t.target.matches(this.selector);e=e||o||r}}})),e&&this.resolveElement()},this.host=t,this.selector=e,this.observer=new MutationObserver(this.mutationCallback),this.host.addController(this)}get element(){return this._element}set element(t){if(t===this.element)return;const e=this.element;this._element=t,this.host.requestUpdate(Vt,e)}get selector(){return this._selector}set selector(t){t!==this.selector&&(this.releaseElement(),this._selector=t,this.resolveElement())}hostConnected(){this.resolveElement(),this.observer.observe(this.host.getRootNode(),{subtree:!0,childList:!0,attributes:!0})}hostDisconnected(){this.releaseElement(),this.observer.disconnect()}resolveElement(){if(!this.selector)return void this.releaseElement();const t=this.host.getRootNode();this.element=t.querySelector(this.selector)}releaseElement(){this.element=null}}const Gt=t.iv`
:host{--spectrum-fieldlabel-color:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-medium
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-medium
)}:host([size=s]){--spectrum-fieldlabel-top-to-text:var(
--spectrum-component-top-to-text-75
);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-75);--spectrum-fieldlabel-line-height:var(--spectrum-line-height-100);--spectrum-fieldlabel-line-height-cjk:var(--spectrum-line-height-cjk-100);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-75
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-100);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-small
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-small
)}:host([size=m]){--spectrum-fieldlabel-top-to-text:var(
--spectrum-component-top-to-text-75
);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-75);--spectrum-fieldlabel-line-height:var(--spectrum-line-height-200);--spectrum-fieldlabel-line-height-cjk:var(--spectrum-line-height-cjk-200);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-75
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-medium
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-medium
)}:host([size=l]){--spectrum-fieldlabel-top-to-text:var(
--spectrum-component-top-to-text-100
);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-100
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-100);--spectrum-fieldlabel-line-height:var(--spectrum-line-height-100);--spectrum-fieldlabel-line-height-cjk:var(--spectrum-line-height-cjk-100);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-100
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-large
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-large
)}:host([size=xl]){--spectrum-fieldlabel-top-to-text:var(
--spectrum-component-top-to-text-200
);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-200
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-200);--spectrum-fieldlabel-line-height:var(--spectrum-line-height-200);--spectrum-fieldlabel-line-height-cjk:var(--spectrum-line-height-cjk-200);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-200
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-extra-large
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-extra-large
)}:host{-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;font-smoothing:subpixel-antialiased;box-sizing:border-box;color:var(--spectrum-fieldlabel-color);display:block;font-size:var(
--mod-fieldlabel-font-size,var(--spectrum-fieldlabel-font-size)
);font-weight:var(
--mod-font-weight-regular,var(--spectrum-font-weight-regular)
);line-height:var(
--mod-fieldlabel-line-height,var(--spectrum-fieldlabel-line-height)
);padding-block:var(--spectrum-fieldlabel-top-to-text) var(--spectrum-fieldlabel-bottom-to-text);padding-inline:0;vertical-align:top}:host(:lang(ja)),:host(:lang(ko)),:host(:lang(zh)){line-height:var(
--mod-fieldlabel-line-height-cjk,var(--spectrum-fieldlabel-line-height-cjk)
)}.required-icon{margin-block:0;margin-inline:var(
--mod-field-label-text-to-asterisk,var(--spectrum-field-label-text-to-asterisk)
) 0}:host([side-aligned=start]){display:inline-block;padding-block:var(
--mod-fieldlabel-side-padding-top,var(--spectrum-fieldlabel-side-padding-top)
) 0;padding-inline:0 var(
--mod-fieldlabel-side-padding-right,var(--spectrum-fieldlabel-side-padding-right)
)}:host([side-aligned=start]) .required-icon{margin-block:var(
--mod-field-label-text-to-asterisk,var(--spectrum-field-label-text-to-asterisk)
) 0;margin-inline:var(
--mod-field-label-text-to-asterisk,var(--spectrum-field-label-text-to-asterisk)
) 0}:host([side-aligned=end]){display:inline-block;padding-block:var(
--mod-fieldlabel-side-padding-top,var(--spectrum-fieldlabel-side-padding-top)
) 0;padding-inline:0 var(
--mod-fieldlabel-side-padding-right,var(--spectrum-fieldlabel-side-padding-right)
);text-align:end}:host([disabled]){color:var(
--mod-disabled-content-color,var(--spectrum-disabled-content-color)
)}:host([disabled]) .required-icon{color:var(
--mod-disabled-content-color,var(--spectrum-disabled-content-color)
)}
`;var Wt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Zt=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?Yt(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&Wt(e,o,c),c};const Xt=class extends(z(u.o)){constructor(){super(...arguments),this.disabled=!1,this.id="",this.for="",this.required=!1,this.resolvedElement=new Kt(this)}static get styles(){return[Gt,Rt]}handleClick(t){if(!this.target||this.disabled||t.defaultPrevented)return;this.target.focus();const e=this.getRootNode(),o=this.target,r=o.getRootNode(),s=r.host;r===e&&o.forceFocusVisible?o.forceFocusVisible():s&&s.forceFocusVisible&&s.forceFocusVisible()}addTarget(t){this.target=t.focusElement||t,this.target.getRootNode()===this.getRootNode()?Nt(this.target,"aria-labelledby",[this.id]):this.target.setAttribute("aria-label",this.labelText)}removeTarget(){this.target&&(this.target.getRootNode()===this.getRootNode()?Ht(this.target,"aria-labelledby",[this.id]):this.target.removeAttribute("aria-label"))}async manageTarget(){this.removeTarget();const t=this.resolvedElement.element;t?(t.localName.search("-")>0&&await customElements.whenDefined(t.localName),void 0!==t.updateComplete&&await t.updateComplete,this.addTarget(t)):this.target=t}get labelText(){const t=this.slotEl.assignedNodes({flatten:!0});return t.length?t.map((t=>(t.textContent||"").trim())).join(" "):""}render(){return t.dy`
            <label>
                <slot></slot>
                ${this.required?t.dy`
                          <sp-icon-asterisk100
                              class="required-icon spectrum-UIIcon-Asterisk100"
                          ></sp-icon-asterisk100>
                      `:t.dy``}
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("click",this.handleClick)}willUpdate(t){this.hasAttribute("id")||this.setAttribute("id",`${this.tagName.toLowerCase()}-${Xt.instanceCount++}`),t.has("for")&&(this.resolvedElement.selector=this.for?`#${this.for}`:""),(t.has("id")||t.has(Vt))&&this.manageTarget()}};let Jt=Xt;Jt.instanceCount=0,Zt([(0,d.Cb)({type:Boolean,reflect:!0})],Jt.prototype,"disabled",2),Zt([(0,d.Cb)({type:String})],Jt.prototype,"id",2),Zt([(0,d.Cb)({type:String})],Jt.prototype,"for",2),Zt([(0,d.Cb)({type:Boolean,reflect:!0})],Jt.prototype,"required",2),Zt([(0,d.IO)("slot")],Jt.prototype,"slotEl",2),Zt([(0,d.Cb)({type:String,reflect:!0,attribute:"side-aligned"})],Jt.prototype,"sideAligned",2),customElements.define("sp-field-label",Jt);const{I:Qt}=C.Al,te=t=>void 0===t.strings,ee={},oe=I(class extends q{constructor(t){if(super(t),3!==t.type&&1!==t.type&&4!==t.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!te(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===C.Jb||e===C.Ld)return e;const o=t.element,r=t.name;if(3===t.type){if(e===o[r])return C.Jb}else if(4===t.type){if(!!e===o.hasAttribute(r))return C.Jb}else if(1===t.type&&o.getAttribute(r)===e+"")return C.Jb;return((t,e=ee)=>{t._$AH=e})(t),e}}),re=class{constructor(t,{mode:e}={mode:"internal"}){this.mode="internal",this.handleSlotchange=({target:t})=>{this.handleHelpText(t),this.handleNegativeHelpText(t)},this.host=t,this.instanceCount=re.instanceCount++,this.id=`sp-help-text-${this.instanceCount}`,this.mode=e}get isInternal(){return"internal"===this.mode}render(e){return t.dy`
            <div id=${(0,S.o)(this.isInternal?this.id:void 0)}>
                <slot
                    name=${e?"negative-help-text":`pass-through-help-text-${this.instanceCount}`}
                    @slotchange=${this.handleSlotchange}
                >
                    <slot name="help-text"></slot>
                </slot>
            </div>
        `}addId(){const t=this.helpTextElement?this.helpTextElement.id:this.id;this.conditionId=Nt(this.host,"aria-describedby",t),this.host.hasAttribute("tabindex")&&(this.previousTabindex=parseFloat(this.host.getAttribute("tabindex"))),this.host.tabIndex=0}removeId(){this.conditionId&&(this.conditionId(),delete this.conditionId),!this.helpTextElement&&(this.previousTabindex?this.host.tabIndex=this.previousTabindex:this.host.removeAttribute("tabindex"))}handleHelpText(t){if(this.isInternal)return;this.helpTextElement&&this.helpTextElement.id===this.id&&this.helpTextElement.removeAttribute("id"),this.removeId();const e=t.assignedElements()[0];this.helpTextElement=e,e&&(e.id||(e.id=this.id),this.addId())}handleNegativeHelpText(t){"negative-help-text"===t.name&&t.assignedElements().forEach((t=>t.variant="negative"))}};let se=re;se.instanceCount=0,customElements.define("sp-icon-checkmark100",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Checkmark100"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"
    />
  </svg>`)()}}),customElements.define("sp-icon-alert",class extends v{render(){return x(t.dy),(({width:t=24,height:e=24,hidden:o=!1,title:r="Alert"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${o?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${r}
  >
    <path
      d="M17.127 2.579.4 32.512A1 1 0 0 0 1.272 34h33.456a1 1 0 0 0 .872-1.488L18.873 2.579a1 1 0 0 0-1.746 0ZM20 29.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});const ce=t.iv`
:host{--spectrum-textfield-quiet-texticon-border-bottom-size:var(
--spectrum-textfield-m-quiet-texticon-border-bottom-size,var(--spectrum-alias-input-border-size)
);--spectrum-textfield-quiet-texticon-success-icon-margin-left:var(
--spectrum-textfield-m-quiet-texticon-success-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-quiet-texticon-invalid-icon-margin-left:var(
--spectrum-textfield-m-quiet-texticon-invalid-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-quiet-texticon-border-radius:var(
--spectrum-textfield-m-quiet-texticon-border-radius,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-quiet-texticon-padding-left:var(
--spectrum-textfield-m-quiet-texticon-padding-left,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-quiet-texticon-padding-right:var(
--spectrum-textfield-m-quiet-texticon-padding-right,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-texticon-border-size:var(
--spectrum-textfield-m-texticon-border-size,var(--spectrum-alias-input-border-size)
);--spectrum-textfield-texticon-text-line-height:var(
--spectrum-textfield-m-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-textfield-texticon-text-size:var(
--spectrum-textfield-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-textfield-texticon-placeholder-text-font-style:var(
--spectrum-textfield-m-texticon-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-textfield-texticon-placeholder-text-font-weight:var(
--spectrum-textfield-m-texticon-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-textfield-texticon-success-icon-height:var(
--spectrum-textfield-m-texticon-success-icon-height,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-textfield-texticon-success-icon-width:var(
--spectrum-textfield-m-texticon-success-icon-width,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-textfield-texticon-success-icon-margin-left:var(
--spectrum-textfield-m-texticon-success-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-invalid-icon-height:var(
--spectrum-textfield-m-texticon-invalid-icon-height,var(--spectrum-alias-ui-icon-alert-size-100)
);--spectrum-textfield-texticon-invalid-icon-width:var(
--spectrum-textfield-m-texticon-invalid-icon-width,var(--spectrum-alias-ui-icon-alert-size-100)
);--spectrum-textfield-texticon-invalid-icon-margin-left:var(
--spectrum-textfield-m-texticon-invalid-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-min-width:var(
--spectrum-textfield-m-texticon-min-width,var(--spectrum-global-dimension-size-600)
);--spectrum-textfield-texticon-border-radius:var(
--spectrum-textfield-m-texticon-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-textfield-texticon-padding-right:var(
--spectrum-textfield-m-texticon-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-height:var(
--spectrum-textfield-m-texticon-height,var(--spectrum-global-dimension-size-400)
);--spectrum-textarea-text-padding-top:var(
--spectrum-textarea-m-text-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-textarea-text-padding-bottom:var(
--spectrum-textarea-m-text-padding-bottom,var(--spectrum-global-dimension-size-115)
);--spectrum-textarea-padding-left:var(
--spectrum-textarea-m-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textarea-padding-right:var(
--spectrum-textarea-m-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-textarea-height:var(
--spectrum-textarea-m-height,var(--spectrum-global-dimension-size-400)
);--spectrum-textfield-texticon-padding-top:3px;--spectrum-textfield-texticon-padding-bottom:5px;--spectrum-textfield-texticon-text-font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);--spectrum-textfield-texticon-icon-gap:var(
--spectrum-global-dimension-size-65
);--spectrum-textfield-quiet-texticon-icon-gap:var(
--spectrum-global-dimension-size-75
);--spectrum-textarea-min-height:var(--spectrum-textarea-height);--spectrum-textarea-height-adjusted:auto;--spectrum-textarea-padding-top:var(--spectrum-textarea-text-padding-top);--spectrum-textarea-padding-bottom:var(
--spectrum-textarea-text-padding-bottom
);--spectrum-textfield-texticon-padding-left:var(
--spectrum-alias-item-workflow-padding-left-m
)}#textfield{display:inline-flex;min-width:var(--spectrum-textfield-texticon-min-width);position:relative;width:var(
--spectrum-alias-single-line-width,var(--spectrum-global-dimension-size-2400)
)}:host([quiet][multiline]) #textfield .input{height:var(
--spectrum-textfield-texticon-height
);min-height:var(--spectrum-textfield-texticon-height)}#textfield:after{border-color:transparent;border-radius:calc(var(--spectrum-textfield-texticon-border-radius) + var(
--spectrum-textfield-m-texticon-focus-ring-gap,
var(--spectrum-alias-input-focusring-gap)
));bottom:0;content:"";left:0;margin:calc(var(
--spectrum-textfield-m-texticon-focus-ring-gap,
var(--spectrum-alias-input-focusring-gap)
)*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([quiet]) #textfield:after{border-radius:0}.input{-webkit-appearance:none;-moz-appearance:textfield;border:var(--spectrum-textfield-texticon-border-size) solid;border-radius:var(--spectrum-textfield-texticon-border-radius);box-sizing:border-box;font-family:var(--spectrum-textfield-texticon-text-font-family);font-size:var(--spectrum-textfield-texticon-text-size);height:var(--spectrum-textfield-texticon-height);line-height:var(--spectrum-textfield-texticon-text-line-height);margin:0;outline:none;overflow:visible;padding:var(--spectrum-textfield-texticon-padding-top) var(--spectrum-textfield-texticon-padding-right) var(--spectrum-textfield-texticon-padding-bottom) calc(var(--spectrum-textfield-texticon-padding-left) + 1px);text-indent:0;text-overflow:ellipsis;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:top;width:100%}.input::placeholder{font-style:var(--spectrum-textfield-texticon-placeholder-text-font-style);font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
);opacity:1;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}.input:lang(ja)::placeholder,.input:lang(ko)::placeholder,.input:lang(zh)::placeholder{font-style:normal}.input:hover::placeholder{font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
)}.input:disabled{opacity:1;resize:none}.input:disabled::placeholder{font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
)}.input::-ms-clear{height:0;width:0}.input::-webkit-inner-spin-button,.input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input:-moz-ui-invalid{box-shadow:none}:host([dir=ltr][valid]) #textfield .input{padding-right:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-success-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-success-icon-margin-left)
))}:host([dir=rtl][valid]) #textfield .input{padding-left:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-success-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-success-icon-margin-left)
))}:host([dir=ltr][invalid]) #textfield .input{padding-right:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-invalid-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-invalid-icon-margin-left)
))}:host([dir=rtl][invalid]) #textfield .input{padding-left:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-invalid-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-invalid-icon-margin-left)
))}:host([multiline]) .input{height:var(
--spectrum-textarea-height-adjusted
);min-height:var(--spectrum-textarea-min-height);overflow:auto;padding:var(--spectrum-textarea-padding-top) var(--spectrum-textarea-padding-right) var(--spectrum-textarea-padding-bottom) calc(var(--spectrum-textarea-padding-left) - 1px)}:host([dir=ltr][quiet]) .input{padding-left:var(
--spectrum-textfield-quiet-texticon-padding-left
)}:host([dir=rtl][quiet]) .input{padding-right:var(
--spectrum-textfield-quiet-texticon-padding-left
)}:host([dir=ltr][quiet]) .input{padding-right:var(
--spectrum-textfield-quiet-texticon-padding-right
)}:host([dir=rtl][quiet]) .input{padding-left:var(
--spectrum-textfield-quiet-texticon-padding-right
)}:host([quiet]) .input{border-bottom-width:var(
--spectrum-textfield-quiet-texticon-border-bottom-size
);border-left-width:0;border-radius:var(
--spectrum-textfield-quiet-texticon-border-radius
);border-right-width:0;border-top-width:0;overflow-y:hidden;resize:none}:host([dir=ltr][invalid][quiet]) .input{padding-right:calc(var(--spectrum-textfield-texticon-invalid-icon-width) + var(--spectrum-textfield-quiet-texticon-invalid-icon-margin-left))}:host([dir=rtl][invalid][quiet]) .input{padding-left:calc(var(--spectrum-textfield-texticon-invalid-icon-width) + var(--spectrum-textfield-quiet-texticon-invalid-icon-margin-left))}:host([dir=ltr][valid][quiet]) .input{padding-right:calc(var(--spectrum-textfield-texticon-success-icon-width) + var(--spectrum-textfield-quiet-texticon-success-icon-margin-left))}:host([dir=rtl][valid][quiet]) .input{padding-left:calc(var(--spectrum-textfield-texticon-success-icon-width) + var(--spectrum-textfield-quiet-texticon-success-icon-margin-left))}.icon{pointer-events:all;position:absolute}:host([dir=ltr][quiet]) .icon{padding-right:0}:host([dir=rtl][quiet]) .icon{padding-left:0}:host([dir=ltr][invalid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-invalid-icon-margin-left)
)}:host([dir=rtl][invalid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-invalid-icon-margin-left)
)}:host([invalid]) #textfield .icon{bottom:calc(var(--spectrum-textfield-texticon-height)/2 - var(--spectrum-textfield-texticon-invalid-icon-height)/2);height:var(--spectrum-textfield-texticon-invalid-icon-height);width:var(
--spectrum-textfield-texticon-invalid-icon-width
)}:host([dir=ltr][quiet][invalid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=rtl][quiet][invalid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=ltr][valid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-success-icon-margin-left)
)}:host([dir=rtl][valid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-success-icon-margin-left)
)}:host([valid]) #textfield .icon{bottom:calc(var(--spectrum-textfield-texticon-height)/2 - var(--spectrum-textfield-texticon-success-icon-height)/2);height:var(--spectrum-textfield-texticon-success-icon-height);width:var(
--spectrum-textfield-texticon-success-icon-width
)}:host([dir=ltr][quiet][valid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=rtl][quiet][valid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=ltr]) .icon-workflow{left:var(
--spectrum-textfield-texticon-padding-left
)}:host([dir=rtl]) .icon-workflow{right:var(
--spectrum-textfield-texticon-padding-left
)}.icon-workflow{display:block;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);position:absolute;top:calc(var(--spectrum-textfield-texticon-height)/2 - var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
)/2);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}:host([dir=ltr][quiet]) .icon-workflow{left:0}:host([dir=rtl][quiet]) .icon-workflow{right:0}:host([dir=ltr][quiet]) .icon-workflow~.input{padding-left:calc(var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-quiet-texticon-icon-gap))}:host([dir=rtl][quiet]) .icon-workflow~.input{padding-right:calc(var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-quiet-texticon-icon-gap))}:host([dir=ltr]) .icon-workflow+.input{padding-left:calc(var(--spectrum-textfield-texticon-padding-left) + var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-texticon-icon-gap))}:host([dir=rtl]) .icon-workflow+.input{padding-right:calc(var(--spectrum-textfield-texticon-padding-left) + var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-texticon-icon-gap))}:host([multiline]) .icon-workflow~.input{height:var(
--spectrum-textfield-texticon-height
);min-height:var(--spectrum-textfield-texticon-height)}#textfield:hover .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-hover,var(--spectrum-alias-input-border-color-hover)
);box-shadow:none}#textfield:hover .input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color-hover,var(--spectrum-alias-placeholder-text-color-hover)
)}#textfield:hover .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}#textfield:active .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-down,var(--spectrum-alias-input-border-color-down)
)}#textfield:active .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-down,var(--spectrum-alias-component-icon-color-down)
)}:host([valid]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-valid,var(--spectrum-semantic-positive-icon-color)
)}:host([invalid]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-invalid,var(--spectrum-semantic-negative-icon-color)
)}:host([invalid]) #textfield:hover .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-hover,var(--spectrum-alias-input-border-color-invalid-hover)
)}:host([disabled]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-invalid-disabled,var(--spectrum-alias-background-color-transparent)
)}:host([disabled]) #textfield .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}.icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}:host([focused]) #textfield:after{box-shadow:0 0 0 var(
--spectrum-textfield-m-texticon-focus-ring-border-width,var(--spectrum-alias-component-focusring-size)
) var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}:host([focused][quiet]) #textfield .input{box-shadow:none}:host([focused][quiet]) #textfield:after{border-bottom:2px solid var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);bottom:calc(var(
--spectrum-alias-input-quiet-focusline-gap,
var(--spectrum-global-dimension-static-size-10)
)*-1);box-shadow:none;margin:0}.input{background-color:var(
--spectrum-textfield-m-texticon-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-textfield-m-texticon-border-color,var(--spectrum-alias-input-border-color-default)
);color:var(
--spectrum-textfield-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}.input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color,var(--spectrum-global-color-gray-600)
)}.input:focus,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-down,var(--spectrum-alias-input-border-color-down)
)}.input.focus-visible,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}.input.focus-visible,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}.input:focus-visible,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input:focus{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input.focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input:focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}.input :disabled,:host([disabled]) #textfield .input,:host([disabled]) #textfield:hover .input{-webkit-text-fill-color:var(
--spectrum-textfield-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
);background-color:var(
--spectrum-textfield-m-texticon-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-textfield-m-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-disabled)
);color:var(
--spectrum-textfield-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}.input :disabled::placeholder,:host([disabled]) #textfield .input::placeholder,:host([disabled]) #textfield:hover .input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.input:read-only,:host([readonly]) #textfield .input,:host([readonly]) #textfield:hover .input{-webkit-text-fill-color:var(--spectrum-global-color-gray-800);background-color:var(
--spectrum-alias-background-color-transparent,transparent
);border-color:var(
--spectrum-alias-background-color-transparent,transparent
);color:var(--spectrum-global-color-gray-800)}:host([quiet]) .input{background-color:var(
--spectrum-textfield-m-quiet-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color,var(--spectrum-alias-input-border-color-default)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input:focus{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input.focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input:focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([invalid][quiet]) #textfield .input{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input:focus{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input.focus-visible{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input:focus-visible{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([disabled][quiet]) #textfield .input,:host([disabled][quiet]) #textfield:hover .input,:host([quiet]) .input :disabled{background-color:var(
--spectrum-textfield-m-quiet-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}@media (forced-colors:active){#textfield{--spectrum-textfield-m-quiet-texticon-border-color-disabled:GrayText;--spectrum-textfield-m-quiet-texticon-border-color-down:Highlight;--spectrum-textfield-m-quiet-texticon-border-color-hover:Highlight;--spectrum-textfield-m-quiet-texticon-border-color-invalid:Highlight;--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus:Highlight;--spectrum-textfield-m-quiet-texticon-border-color-invalid-mouse-focus:Highlight;--spectrum-textfield-m-quiet-texticon-border-color-mouse-focus:Highlight;--spectrum-textfield-m-texticon-border-color-disabled:GrayText;--spectrum-textfield-m-texticon-border-color-down:Highlight;--spectrum-textfield-m-texticon-border-color-hover:Highlight;--spectrum-textfield-m-texticon-border-color-invalid:Highlight;--spectrum-textfield-m-texticon-border-color-invalid-hover:Highlight;--spectrum-textfield-m-texticon-border-color-invalid-key-focus:Highlight;--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus:Highlight;--spectrum-textfield-m-texticon-border-color-key-focus:Highlight;--spectrum-textfield-m-texticon-placeholder-text-color:GrayText;--spectrum-textfield-m-texticon-placeholder-text-color-disabled:GrayText;--spectrum-textfield-m-texticon-placeholder-text-color-hover:GrayText;--spectrum-textfield-m-texticon-text-color-disabled:GrayText;--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus:Highlight;--spectrum-textfield-m-texticon-focus-ring-border-width:2px}:host([focused]) #textfield:after{forced-color-adjust:none}}:host{display:inline-flex;flex-direction:column;width:var(
--spectrum-alias-single-line-width,var(--spectrum-global-dimension-size-2400)
)}:host([multiline]){resize:both}:host([multiline][readonly]){resize:none}#textfield{width:100%}#textfield,textarea{resize:inherit}.input{min-width:var(--spectrum-textfield-texticon-min-width)}:host([focused]) .input{caret-color:var(--swc-test-caret-color);forced-color-adjust:var(--swc-test-forced-color-adjust)}:host([grows]) .input{height:100%;left:0;overflow:hidden;position:absolute;resize:none;top:0}:host([grows]) #sizer{-webkit-appearance:none;-moz-appearance:textfield;border:var(--spectrum-textfield-texticon-border-size) solid;border-radius:var(--spectrum-textfield-texticon-border-radius);box-sizing:border-box;font-family:var(--spectrum-textfield-texticon-text-font-family);font-size:var(--spectrum-textfield-texticon-text-size);line-height:var(--spectrum-textfield-texticon-text-line-height);margin:0;outline:none;overflow:visible;overflow-wrap:break-word;padding:var(--spectrum-textarea-padding-top) var(--spectrum-textarea-padding-right) var(--spectrum-textarea-padding-bottom) calc(var(--spectrum-textarea-padding-left) - 1px);text-indent:0;text-overflow:ellipsis;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:top;white-space:pre-wrap;width:100%;word-break:break-word}:host([grows][quiet]) #sizer{border-radius:var(--spectrum-textfield-quiet-texticon-border-radius);border-width:0 0 var(--spectrum-textfield-quiet-texticon-border-size) 0;overflow-y:hidden;resize:none}.icon,.icon-workflow{pointer-events:none}:host([multiline]) #textfield{display:inline-grid}:host([multiline]) textarea{transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([multiline][focused]:not([quiet])) textarea,:host([multiline][focused]:not([quiet]):hover) textarea{box-shadow:0 0 0 calc(var(
--spectrum-textfield-m-texticon-focus-ring-border-width,
var(--spectrum-alias-component-focusring-size)
)) var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
)!important}:host([multiline]:not([quiet])) #textfield:after{box-shadow:none}
`,ae=t.iv`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Checkmark50{height:var(--spectrum-alias-ui-icon-checkmark-size-50);width:var(
--spectrum-alias-ui-icon-checkmark-size-50
)}.spectrum-UIIcon-Checkmark75{height:var(--spectrum-alias-ui-icon-checkmark-size-75);width:var(
--spectrum-alias-ui-icon-checkmark-size-75
)}.spectrum-UIIcon-Checkmark100{height:var(--spectrum-alias-ui-icon-checkmark-size-100);width:var(
--spectrum-alias-ui-icon-checkmark-size-100
)}.spectrum-UIIcon-Checkmark200{height:var(--spectrum-alias-ui-icon-checkmark-size-200);width:var(
--spectrum-alias-ui-icon-checkmark-size-200
)}.spectrum-UIIcon-Checkmark300{height:var(--spectrum-alias-ui-icon-checkmark-size-300);width:var(
--spectrum-alias-ui-icon-checkmark-size-300
)}.spectrum-UIIcon-Checkmark400{height:var(--spectrum-alias-ui-icon-checkmark-size-400);width:var(
--spectrum-alias-ui-icon-checkmark-size-400
)}.spectrum-UIIcon-Checkmark500{height:var(--spectrum-alias-ui-icon-checkmark-size-500);width:var(
--spectrum-alias-ui-icon-checkmark-size-500
)}.spectrum-UIIcon-Checkmark600{height:var(--spectrum-alias-ui-icon-checkmark-size-600);width:var(
--spectrum-alias-ui-icon-checkmark-size-600
)}
`;var ie=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,le=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?ne(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&ie(e,o,c),c};const ue=["text","url","tel","email","password"];class de extends(function(t,{mode:e}={mode:"internal"}){return class extends t{constructor(){super(...arguments),this.helpTextManager=new se(this,{mode:e})}get helpTextId(){return this.helpTextManager.id}renderHelpText(t){return this.helpTextManager.render(t)}}}(L)){constructor(){super(...arguments),this.allowedKeys="",this.focused=!1,this.invalid=!1,this.label="",this.placeholder="",this._type="text",this.grows=!1,this.maxlength=-1,this.minlength=-1,this.multiline=!1,this.readonly=!1,this.valid=!1,this._value="",this.quiet=!1,this.required=!1}static get styles(){return[ce,ae]}get type(){var t;return null!=(t=ue.find((t=>t===this._type)))?t:"text"}set type(t){const e=this._type;this._type=t,this.requestUpdate("type",e)}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}get focusElement(){return this.inputElement}setSelectionRange(t,e,o="none"){this.inputElement.setSelectionRange(t,e,o)}select(){this.inputElement.select()}handleInput(){if(this.allowedKeys&&this.inputElement.value&&!new RegExp(`^[${this.allowedKeys}]*$`,"u").test(this.inputElement.value)){const t=this.inputElement.selectionStart-1;return this.inputElement.value=this.value.toString(),void this.inputElement.setSelectionRange(t,t)}this.value=this.inputElement.value}handleChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}onFocus(){this.focused=!this.readonly&&!0}onBlur(){this.focused=!this.readonly&&!1}renderStateIcons(){return this.invalid?t.dy`
                <sp-icon-alert id="invalid" class="icon"></sp-icon-alert>
            `:this.valid?t.dy`
                <sp-icon-checkmark100
                    id="valid"
                    class="icon spectrum-UIIcon-Checkmark100"
                ></sp-icon-checkmark100>
            `:t.Ld}get displayValue(){return this.value.toString()}get renderMultiline(){return t.dy`
            ${this.grows&&!this.quiet?t.dy`
                      <div id="sizer">${this.value}&#8203;</div>
                  `:t.Ld}
            <!-- @ts-ignore -->
            <textarea
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.placeholder}
                aria-invalid=${(0,S.o)(this.invalid||void 0)}
                class="input"
                maxlength=${(0,S.o)(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${(0,S.o)(this.minlength>-1?this.minlength:void 0)}
                pattern=${(0,S.o)(this.pattern)}
                placeholder=${this.placeholder}
                .value=${this.displayValue}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${(0,S.o)(this.autocomplete)}
            ></textarea>
        `}get renderInput(){return t.dy`
            <!-- @ts-ignore -->
            <input
                type=${this.type}
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.placeholder}
                aria-invalid=${(0,S.o)(this.invalid||void 0)}
                class="input"
                maxlength=${(0,S.o)(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${(0,S.o)(this.minlength>-1?this.minlength:void 0)}
                pattern=${(0,S.o)(this.pattern)}
                placeholder=${this.placeholder}
                .value=${oe(this.displayValue)}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${(0,S.o)(this.autocomplete)}
            />
        `}renderField(){return t.dy`
            ${this.renderStateIcons()}
            ${this.multiline?this.renderMultiline:this.renderInput}
        `}render(){return t.dy`
            <div id="textfield">${this.renderField()}</div>
            ${this.renderHelpText(this.invalid)}
        `}update(t){(t.has("value")||t.has("required")&&this.required)&&this.updateComplete.then((()=>{this.checkValidity()})),super.update(t)}checkValidity(){let t=this.inputElement.checkValidity();return(this.required||this.value&&this.pattern)&&((this.disabled||this.multiline)&&this.pattern&&(t=new RegExp(`^${this.pattern}$`,"u").test(this.value.toString())),void 0!==this.minlength&&(t=t&&this.value.toString().length>this.minlength),this.valid=t,this.invalid=!t),t}}le([(0,d.Cb)({attribute:"allowed-keys"})],de.prototype,"allowedKeys",2),le([(0,d.Cb)({type:Boolean,reflect:!0})],de.prototype,"focused",2),le([(0,d.IO)(".input")],de.prototype,"inputElement",2),le([(0,d.Cb)({type:Boolean,reflect:!0})],de.prototype,"invalid",2),le([(0,d.Cb)()],de.prototype,"label",2),le([(0,d.Cb)()],de.prototype,"placeholder",2),le([(0,d.Cb)({attribute:"type",reflect:!0})],de.prototype,"_type",2),le([(0,d.SB)()],de.prototype,"type",1),le([(0,d.Cb)()],de.prototype,"pattern",2),le([(0,d.Cb)({type:Boolean,reflect:!0})],de.prototype,"grows",2),le([(0,d.Cb)({type:Number})],de.prototype,"maxlength",2),le([(0,d.Cb)({type:Number})],de.prototype,"minlength",2),le([(0,d.Cb)({type:Boolean,reflect:!0})],de.prototype,"multiline",2),le([(0,d.Cb)({type:Boolean,reflect:!0})],de.prototype,"readonly",2),le([(0,d.Cb)({type:Boolean,reflect:!0})],de.prototype,"valid",2),le([(0,d.Cb)({type:String})],de.prototype,"value",1),le([(0,d.Cb)({type:Boolean,reflect:!0})],de.prototype,"quiet",2),le([(0,d.Cb)({type:Boolean,reflect:!0})],de.prototype,"required",2),le([(0,d.Cb)({type:String,reflect:!0})],de.prototype,"autocomplete",2);class me extends de{constructor(){super(...arguments),this._value=""}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}}le([(0,d.Cb)({type:String})],me.prototype,"value",1),customElements.define("sp-textfield",me);const pe=Symbol("language resolver updated");class be{constructor(t){this.language=document.documentElement.lang||navigator.language,this.host=t,this.host.addController(this)}hostConnected(){this.resolveLanguage()}hostDisconnected(){var t;null==(t=this.unsubscribe)||t.call(this)}resolveLanguage(){const t=new CustomEvent("sp-language-context",{bubbles:!0,composed:!0,detail:{callback:(t,e)=>{const o=this.language;this.language=t,this.unsubscribe=e,this.host.requestUpdate(pe,o)}},cancelable:!0});this.host.dispatchEvent(t)}}const he=(t,e)=>{var o,r;const s=t._$AN;if(void 0===s)return!1;for(const t of s)null===(r=(o=t)._$AO)||void 0===r||r.call(o,e,!1),he(t,e);return!0},ve=t=>{let e,o;do{if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e}while(0===(null==o?void 0:o.size))},ge=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),ye(e)}};function fe(t){void 0!==this._$AN?(ve(this),this._$AM=t,ge(this)):this._$AM=t}function xe(t,e=!1,o=0){const r=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(r))for(let t=o;t<r.length;t++)he(r[t],!1),ve(r[t]);else null!=r&&(he(r,!1),ve(r));else he(this,t)}const ye=t=>{var e,o,r,s;2==t.type&&(null!==(e=(r=t)._$AP)&&void 0!==e||(r._$AP=xe),null!==(o=(s=t)._$AQ)&&void 0!==o||(s._$AQ=fe))};class ke extends q{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),ge(this),this.isConnected=t._$AU}_$AO(t,e=!0){var o,r;t!==this.isConnected&&(this.isConnected=t,t?null===(o=this.reconnected)||void 0===o||o.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),e&&(he(this,t),ve(this))}setValue(t){if(te(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const we=["",()=>{}],ze=I(class extends ke{constructor(){super(...arguments),this.start=we,this.streamInside=we,this.end=we,this.streamOutside=we,this.state="off",this.handleStart=t=>{this.callHandler(this.start[1],t),!t.defaultPrevented&&(this.removeListeners(),this.addListeners("on"))},this.handleStream=t=>{this.callHandler(this.streamInside[1],t)},this.handleEnd=t=>{this.callHandler(this.end[1],t),this.removeListeners(),this.addListeners("off")},this.handleBetween=t=>{this.callHandler(this.streamOutside[1],t)}}render(e){return t.Ld}update(t,[{start:e,end:o,streamInside:r=we,streamOutside:s=we}]){var c;this.element!==t.element&&(this.element=t.element,this.removeListeners()),this.host=(null==(c=t.options)?void 0:c.host)||this.element,this.start=e,this.end=o,this.streamInside=r,this.streamOutside=s,this.addListeners()}addListeners(t){this.state=t||this.state,"off"===this.state?(this.addListener(this.streamOutside[0],this.handleBetween),this.addListener(this.start[0],this.handleStart)):"on"===this.state&&(this.addListener(this.streamInside[0],this.handleStream),this.addListener(this.end[0],this.handleEnd))}callHandler(t,e){"function"==typeof t?t.call(this.host,e):t.handleEvent(e)}addListener(t,e){Array.isArray(t)?t.map((t=>{this.element.addEventListener(t,e)})):this.element.addEventListener(t,e)}removeListener(t,e){Array.isArray(t)?t.map((t=>{this.element.removeEventListener(t,e)})):this.element.removeEventListener(t,e)}removeListeners(){this.removeListener(this.start[0],this.handleStart),this.removeListener(this.streamInside[0],this.handleStream),this.removeListener(this.end[0],this.handleEnd),this.removeListener(this.streamOutside[0],this.handleBetween)}disconnected(){this.removeListeners()}reconnected(){this.addListeners()}});let Ce=new Map,Ie=!1;try{Ie="exceptZero"===new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay}catch(t){}let qe=!1;try{qe="unit"===new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style}catch(t){}const Ee={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class Se{format(t){let e="";if(e=Ie||null==this.options.signDisplay?this.numberFormatter.format(t):function(t,e,o){if("auto"===e)return t.format(o);if("never"===e)return t.format(Math.abs(o));{let r=!1;if("always"===e?r=o>0||Object.is(o,0):"exceptZero"===e&&(Object.is(o,-0)||Object.is(o,0)?o=Math.abs(o):r=o>0),r){let e=t.format(-o),r=t.format(o),s=e.replace(r,"").replace(/\u200e|\u061C/,"");return 1!==[...s].length&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),e.replace(r,"!!!").replace(s,"+").replace("!!!",r)}return t.format(o)}}(this.numberFormatter,this.options.signDisplay,t),"unit"===this.options.style&&!qe){var o;let{unit:t,unitDisplay:r="short",locale:s}=this.resolvedOptions(),c=null===(o=Ee[t])||void 0===o?void 0:o[r];e+=c[s]||c.default}return e}formatToParts(t){return this.numberFormatter.formatToParts(t)}formatRange(t,e){if("function"==typeof this.numberFormatter.formatRange)return this.numberFormatter.formatRange(t,e);if(e<t)throw new RangeError("End date must be >= start date");return`${this.format(t)} – ${this.format(e)}`}formatRangeToParts(t,e){if("function"==typeof this.numberFormatter.formatRangeToParts)return this.numberFormatter.formatRangeToParts(t,e);if(e<t)throw new RangeError("End date must be >= start date");let o=this.numberFormatter.formatToParts(t),r=this.numberFormatter.formatToParts(e);return[...o.map((t=>({...t,source:"startRange"}))),{type:"literal",value:" – ",source:"shared"},...r.map((t=>({...t,source:"endRange"})))]}resolvedOptions(){let t=this.numberFormatter.resolvedOptions();return Ie||null==this.options.signDisplay||(t={...t,signDisplay:this.options.signDisplay}),qe||"unit"!==this.options.style||(t={...t,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),t}constructor(t,e={}){this.numberFormatter=function(t,e={}){let{numberingSystem:o}=e;if(o&&-1===t.indexOf("-u-nu-")&&(t=`${t}-u-nu-${o}`),"unit"===e.style&&!qe){var r;let{unit:t,unitDisplay:o="short"}=e;if(!t)throw new Error('unit option must be provided with style: "unit"');if(!(null===(r=Ee[t])||void 0===r?void 0:r[o]))throw new Error(`Unsupported unit ${t} with unitDisplay = ${o}`);e={...e,style:"decimal"}}let s=t+(e?Object.entries(e).sort(((t,e)=>t[0]<e[0]?-1:1)).join():"");if(Ce.has(s))return Ce.get(s);let c=new Intl.NumberFormat(t,e);return Ce.set(s,c),c}(t,e),this.options=e}}const $e=new RegExp("^.*\\(.*\\).*$"),Ae=["latn","arab","hanidec"];class _e{parse(t){return Ue(this.locale,this.options,t).parse(t)}isValidPartialNumber(t,e,o){return Ue(this.locale,this.options,t).isValidPartialNumber(t,e,o)}getNumberingSystem(t){return Ue(this.locale,this.options,t).options.numberingSystem}constructor(t,e={}){this.locale=t,this.options=e}}const Te=new Map;function Ue(t,e,o){let r=Pe(t,e);if(!t.includes("-nu-")&&!r.isValidPartialNumber(o))for(let s of Ae)if(s!==r.options.numberingSystem){let r=Pe(t+(t.includes("-u-")?"-nu-":"-u-nu-")+s,e);if(r.isValidPartialNumber(o))return r}return r}function Pe(t,e){let o=t+(e?Object.entries(e).sort(((t,e)=>t[0]<e[0]?-1:1)).join():""),r=Te.get(o);return r||(r=new je(t,e),Te.set(o,r)),r}class je{parse(t){let e=this.sanitize(t);e=Oe(e,this.symbols.group,"").replace(this.symbols.decimal,".").replace(this.symbols.minusSign,"-").replace(this.symbols.numeral,this.symbols.index);let o=e?+e:NaN;return isNaN(o)?NaN:("accounting"===this.options.currencySign&&$e.test(t)&&(o*=-1),"percent"===this.options.style&&(o/=100,o=+o.toFixed((null!==(r=this.options.maximumFractionDigits)&&void 0!==r?r:0)+2)),o);var r}sanitize(t){return t=(t=t.replace(this.symbols.literals,"")).replace("-",this.symbols.minusSign),"arab"===this.options.numberingSystem&&(t=Oe(t=(t=t.replace(",",this.symbols.decimal)).replace(String.fromCharCode(1548),this.symbols.decimal),".",this.symbols.group)),"fr-FR"===this.options.locale&&(t=Oe(t,".",String.fromCharCode(8239))),t}isValidPartialNumber(t,e=-1/0,o=1/0){return(t=this.sanitize(t)).startsWith(this.symbols.minusSign)&&e<0?t=t.slice(this.symbols.minusSign.length):this.symbols.plusSign&&t.startsWith(this.symbols.plusSign)&&o>0&&(t=t.slice(this.symbols.plusSign.length)),!t.startsWith(this.symbols.group)&&0===(t=Oe(t,this.symbols.group,"").replace(this.symbols.numeral,"").replace(this.symbols.decimal,"")).length}constructor(t,e={}){this.formatter=new Intl.NumberFormat(t,e),this.options=this.formatter.resolvedOptions(),this.symbols=function(t,e,o){var r,s,c,a;let i=t.formatToParts(-10000.111),n=t.formatToParts(10000.111),l=t.formatToParts(1);var u;let d=null!==(u=null===(r=i.find((t=>"minusSign"===t.type)))||void 0===r?void 0:r.value)&&void 0!==u?u:"-",m=null===(s=n.find((t=>"plusSign"===t.type)))||void 0===s?void 0:s.value;m||"exceptZero"!==(null==o?void 0:o.signDisplay)&&"always"!==(null==o?void 0:o.signDisplay)||(m="+");let p=null===(c=i.find((t=>"decimal"===t.type)))||void 0===c?void 0:c.value,b=null===(a=i.find((t=>"group"===t.type)))||void 0===a?void 0:a.value,h=i.filter((t=>!Le.has(t.type))).map((t=>Be(t.value))),v=l.filter((t=>!Le.has(t.type))).map((t=>Be(t.value))),g=[...new Set([...v,...h])].sort(((t,e)=>e.length-t.length)),f=0===g.length?new RegExp("[\\p{White_Space}]","gu"):new RegExp(`${g.join("|")}|[\\p{White_Space}]`,"gu"),x=[...new Intl.NumberFormat(e.locale,{useGrouping:!1}).format(9876543210)].reverse(),y=new Map(x.map(((t,e)=>[t,e])));return{minusSign:d,plusSign:m,decimal:p,group:b,literals:f,numeral:new RegExp(`[${x.join("")}]`,"g"),index:t=>String(y.get(t))}}(this.formatter,this.options,e)}}const Le=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]);function Oe(t,e,o){return t.replaceAll?t.replaceAll(e,o):t.split(e).join(o)}function Be(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}function De(){return function(t){return"undefined"!=typeof window&&null!=window.navigator&&t.test(window.navigator.platform)}(/^iPhone/)}customElements.define("sp-icon-chevron75",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Chevron75"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M7.482 4.406l-.001-.001L3.86.783a.84.84 0 00-1.188 1.188L5.702 5l-3.03 3.03A.84.84 0 003.86 9.216l3.621-3.622h.001a.84.84 0 000-1.19z"
    />
  </svg>`)()}});const Fe=t.iv`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronDown75{transform:rotate(90deg)}.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronLeft75{transform:rotate(180deg)}.spectrum-UIIcon-ChevronUp100,.spectrum-UIIcon-ChevronUp200,.spectrum-UIIcon-ChevronUp300,.spectrum-UIIcon-ChevronUp400,.spectrum-UIIcon-ChevronUp500,.spectrum-UIIcon-ChevronUp75{transform:rotate(270deg)}.spectrum-UIIcon-ChevronDown75,.spectrum-UIIcon-ChevronLeft75,.spectrum-UIIcon-ChevronRight75,.spectrum-UIIcon-ChevronUp75{height:var(--spectrum-alias-ui-icon-chevron-size-75);width:var(
--spectrum-alias-ui-icon-chevron-size-75
)}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronRight100,.spectrum-UIIcon-ChevronUp100{height:var(--spectrum-alias-ui-icon-chevron-size-100);width:var(
--spectrum-alias-ui-icon-chevron-size-100
)}.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronRight200,.spectrum-UIIcon-ChevronUp200{height:var(--spectrum-alias-ui-icon-chevron-size-200);width:var(
--spectrum-alias-ui-icon-chevron-size-200
)}.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronRight300,.spectrum-UIIcon-ChevronUp300{height:var(--spectrum-alias-ui-icon-chevron-size-300);width:var(
--spectrum-alias-ui-icon-chevron-size-300
)}.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronRight400,.spectrum-UIIcon-ChevronUp400{height:var(--spectrum-alias-ui-icon-chevron-size-400);width:var(
--spectrum-alias-ui-icon-chevron-size-400
)}.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronRight500,.spectrum-UIIcon-ChevronUp500{height:var(--spectrum-alias-ui-icon-chevron-size-500);width:var(
--spectrum-alias-ui-icon-chevron-size-500
)}
`,Me=t.iv`
:host{--spectrum-stepper-width:var(
--spectrum-global-dimension-size-900
);--spectrum-stepper-border-size:var(
--spectrum-alias-border-size-thin,var(--spectrum-global-dimension-static-size-10)
);--spectrum-stepper-button-height:calc(var(
--spectrum-alias-single-line-height,
var(--spectrum-global-dimension-size-400)
)/2);--spectrum-stepper-button-width:calc(var(--spectrum-global-dimension-size-300) - var(--spectrum-stepper-border-size));--spectrum-stepper-button-padding:calc(var(--spectrum-global-dimension-size-150)/2);--spectrum-stepper-border-radius-reset:0;--spectrum-stepper-border-size-reset:0;--spectrum-stepper-icon-nudge-top:var(--spectrum-global-dimension-size-10);--spectrum-stepper-icon-nudge:var(--spectrum-global-dimension-size-25);--spectrum-stepper-quiet-width:var(--spectrum-global-dimension-size-600);--spectrum-stepper-button-offset:calc(var(--spectrum-stepper-button-width)/2 - var(--spectrum-alias-ui-icon-chevron-size-75)/2);--spectrum-stepper-quiet-button-width:calc(var(--spectrum-stepper-button-width) - var(--spectrum-stepper-button-offset))}#textfield{border-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
);display:inline-flex;flex-direction:row;flex-wrap:nowrap;line-height:0;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-stepper-width)}#textfield:before{content:""}:host([dir=ltr]) .buttons{border-top-left-radius:0}:host([dir=rtl]) .buttons{border-top-right-radius:0}:host([dir=ltr]) .buttons{border-top-right-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=rtl]) .buttons{border-top-left-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr]) .buttons{border-bottom-right-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=rtl]) .buttons{border-bottom-left-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr]) .buttons{border-bottom-left-radius:0}:host([dir=rtl]) .buttons{border-bottom-right-radius:0}.buttons{display:block;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{padding-left:var(
--spectrum-stepper-button-padding
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{padding-right:var(
--spectrum-stepper-button-padding
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{padding-right:var(
--spectrum-stepper-button-padding
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{padding-left:var(
--spectrum-stepper-button-padding
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-left-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-right-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepDown,.stepUp{border-width:var(--spectrum-stepper-border-size);box-sizing:border-box;display:flex;height:var(--spectrum-stepper-button-height);margin:0!important;min-width:0;position:relative;width:var(--spectrum-stepper-button-width)}.stepDown .stepper-icon,.stepUp .stepper-icon{margin:0!important;opacity:1}:host([dir=ltr]) .stepUp{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepUp{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepUp{border-bottom:none;padding-top:var(--spectrum-stepper-icon-nudge-top)}:host([dir=ltr]) .stepDown{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepDown{padding-bottom:var(
--spectrum-stepper-icon-nudge
)}.textfield{flex:1;width:auto}:host([dir=ltr]) .input{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .input{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr]) .input{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .input{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.input,.textfield{min-width:0}:host([quiet]) #textfield{border-radius:var(
--spectrum-stepper-border-radius-reset
);width:var(--spectrum-stepper-quiet-width)}:host([quiet]) .buttons{border-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{border-right-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{border-left-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{border-left:none}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{border-right:none}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{padding-right:0}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{padding-left:0}:host([quiet]) .stepDown,:host([quiet]) .stepUp{border-radius:var(--spectrum-stepper-border-radius-reset);border-top:none;justify-content:flex-end;min-width:0;width:var(
--spectrum-stepper-quiet-button-width
)}:host([dir=ltr][quiet]) .stepDown:after,:host([dir=ltr][quiet]) .stepUp:after{right:calc(var(--spectrum-stepper-button-offset)*-1)}:host([dir=rtl][quiet]) .stepDown:after,:host([dir=rtl][quiet]) .stepUp:after{left:calc(var(--spectrum-stepper-button-offset)*-1)}:host([quiet]) .stepDown:after,:host([quiet]) .stepUp:after{content:"";height:100%;position:absolute;width:var(--spectrum-stepper-button-offset)}:host(:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .input,:host(:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .stepDown,:host(:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-hover,var(--spectrum-alias-input-border-color-hover)
)}:host([focused]) #textfield{border-color:var(
--spectrum-textfield-m-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
)}:host([focused]) #textfield .stepDown,:host([focused]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
)}:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
);box-shadow:none}:host([focused][invalid]) #textfield{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid]) #textfield .stepDown,:host([focused][invalid]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([keyboard-focused]) #textfield{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused]) #textfield .buttons,:host([keyboard-focused]) #textfield .input{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused]) #textfield .input,:host([keyboard-focused]) #textfield .stepDown,:host([keyboard-focused]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused][invalid]) #textfield{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([keyboard-focused][invalid]) #textfield .stepDown,:host([keyboard-focused][invalid]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([keyboard-focused][invalid]) #textfield .buttons{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([invalid]) #textfield .stepDown,:host([invalid]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([invalid][keyboard-focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([invalid][keyboard-focused]) #textfield .buttons{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([disabled]) #textfield .stepDown,:host([disabled]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-disabled)
)}.stepDown,.stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color,var(--spectrum-alias-input-border-color-default)
)}.stepDown:disabled,.stepUp:disabled{border-color:var(
--spectrum-textfield-m-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-disabled)
)}:host([quiet][disabled]) #textfield .stepDown,:host([quiet][disabled]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}:host([quiet]) .stepDown,:host([quiet]) .stepUp{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color,var(--spectrum-alias-input-border-color-default)
)}:host([quiet]) .stepDown:disabled,:host([quiet]) .stepUp:disabled{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}:host([quiet]) .input{box-shadow:none}:host([quiet][invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][invalid]) #textfield .stepDown{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][focused]) #textfield,:host([quiet][keyboard-focused]) #textfield{box-shadow:none}:host([quiet][focused]) #textfield .buttons,:host([quiet][focused]) #textfield .input,:host([quiet][keyboard-focused]) #textfield .buttons,:host([quiet][keyboard-focused]) #textfield .input{box-shadow:0 1px 0 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([quiet][focused]) #textfield .stepDown,:host([quiet][keyboard-focused]) #textfield .stepDown{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([quiet][focused][invalid]) #textfield,:host([quiet][keyboard-focused][invalid]) #textfield{box-shadow:none}:host([quiet][focused][invalid]) #textfield .buttons,:host([quiet][focused][invalid]) #textfield .input,:host([quiet][keyboard-focused][invalid]) #textfield .buttons,:host([quiet][keyboard-focused][invalid]) #textfield .input{box-shadow:0 1px 0 0 var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][focused][invalid]) #textfield .input,:host([quiet][keyboard-focused][invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][focused][invalid]) #textfield .stepDown,:host([quiet][keyboard-focused][invalid]) #textfield .stepDown{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}@media (forced-colors:active){#textfield{--spectrum-textfield-m-quiet-texticon-border-color-disabled:GrayText;--spectrum-textfield-m-texticon-border-color-disabled:GrayText;--spectrum-textfield-m-texticon-border-color-hover:Highlight;--spectrum-textfield-m-texticon-border-color-invalid:Highlight;--spectrum-textfield-m-texticon-border-color-invalid-key-focus:Highlight;--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus:Highlight;--spectrum-textfield-m-texticon-border-color-key-focus:Highlight;--spectrum-textfield-m-texticon-border-color-mouse-focus:Highlight;--spectrum-textfield-m-texticon-focus-ring-border-width:2px}:host([keyboard-focused]) #textfield{outline:2px solid var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused]) #textfield .buttons,:host([keyboard-focused]) #textfield .input{--spectrum-textfield-m-texticon-border-color:ButtonText}:host([quiet][focused]) #textfield,:host([quiet][keyboard-focused]) #textfield{outline:none}:host([quiet][focused]) #textfield .buttons,:host([quiet][focused]) #textfield .input,:host([quiet][keyboard-focused]) #textfield .buttons,:host([quiet][keyboard-focused]) #textfield .input{box-shadow:0 var(
--spectrum-textfield-m-texticon-focus-ring-border-width,var(--spectrum-alias-component-focusring-size)
) 0 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
);forced-color-adjust:none}:host([quiet][focused][invalid]) #textfield .buttons,:host([quiet][focused][invalid]) #textfield .input,:host([quiet][keyboard-focused][invalid]) #textfield .buttons,:host([quiet][keyboard-focused][invalid]) #textfield .input{box-shadow:0 var(
--spectrum-textfield-m-texticon-focus-ring-border-width,var(--spectrum-alias-component-focusring-size)
) 0 0 var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
);forced-color-adjust:none}}:host{width:var(--spectrum-stepper-width)}:host([quiet]){width:var(--spectrum-stepper-quiet-width)}#textfield,:host([quiet]) #textfield{width:100%}sp-field-button{--spectrum-dropdown-height:100%;--spectrum-dropdown-padding-x:0}.input{font-feature-settings:"tnum";font-variant-numeric:tabular-nums}.buttons{--mod-actionbutton-background-color-disabled:var(
--spectrum-global-color-gray-200
)}:host([readonly]) .buttons{pointer-events:none;visibility:hidden}:host([hide-stepper]:not([quiet])) .input{border-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr][invalid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][invalid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][valid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][valid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet][invalid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][invalid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr][quiet][valid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][valid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr]:not([hide-stepper])) .icon-workflow{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl]:not([hide-stepper])) .icon-workflow{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet]:not([hide-stepper])) .icon-workflow{left:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet]:not([hide-stepper])) .icon-workflow{right:var(--spectrum-stepper-button-width)}:host([readonly]:not([disabled],[invalid],[focused],[keyboard-focused])) #textfield:hover .input{border-color:transparent}
`;var Re=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Ne=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?He(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&Re(e,o,c),c};const Ve={"１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","０":"0","、":",","，":",","。":".","．":".","％":"%","＋":"+",ー:"-"};class Ke extends de{constructor(){super(...arguments),this.focused=!1,this._forcedUnit="",this.formatOptions={},this.hideStepper=!1,this.indeterminate=!1,this.keyboardFocused=!1,this.managedInput=!1,this.stepModifier=10,this._value=NaN,this._trackingValue="",this.changeCount=0,this.languageResolver=new be(this),this.wasIndeterminate=!1}static get styles(){return[...super.styles,Me,Fe]}set value(t){const e=this.validateInput(t);if(e===this.value)return;const o=this._value;this._value=e,this.requestUpdate("value",o)}get value(){return this._value}get inputValue(){return this.indeterminate?this.formattedValue:this.inputElement.value}get valueAsString(){return this._value.toString()}set valueAsString(t){this.value=this.numberParser.parse(t)}get formattedValue(){return isNaN(this.value)?"":this.numberFormatter.format(this.value)+(this.focused?"":this._forcedUnit)}convertValueToNumber(t){var e;if(De()&&"decimal"===this.inputElement.inputMode){const o=this.numberFormatter.formatToParts(1000.1),r=t.split("").find((t=>","===t||"."===t)),s=null==(e=o.find((t=>"decimal"===t.type)))?void 0:e.value;r&&s&&(t=t.replace(r,s))}return this.numberParser.parse(t)}get _step(){var t;return void 0!==this.step?this.step:"percent"===(null==(t=this.formatOptions)?void 0:t.style)?.01:1}handlePointerdown(t){if(0!==t.button)return void t.preventDefault();this.managedInput=!0,this.buttons.setPointerCapture(t.pointerId);const e=this.buttons.children[0].getBoundingClientRect(),o=this.buttons.children[1].getBoundingClientRect();this.findChange=t=>{t.clientX>=e.x&&t.clientY>=e.y&&t.clientX<=e.x+e.width&&t.clientY<=e.y+e.height?this.change=t=>this.increment(t.shiftKey?this.stepModifier:1):t.clientX>=o.x&&t.clientY>=o.y&&t.clientX<=o.x+o.width&&t.clientY<=o.y+o.height&&(this.change=t=>this.decrement(t.shiftKey?this.stepModifier:1))},this.findChange(t),this.startChange(t)}startChange(t){this.changeCount=0,this.doChange(t),this.safty=setTimeout((()=>{this.doNextChange(t)}),400)}doChange(t){this.change(t)}handlePointermove(t){this.findChange(t)}handlePointerup(t){this.buttons.releasePointerCapture(t.pointerId),cancelAnimationFrame(this.nextChange),clearTimeout(this.safty),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.managedInput=!1}doNextChange(t){return this.changeCount+=1,this.changeCount%5==0&&this.doChange(t),requestAnimationFrame((()=>{this.nextChange=this.doNextChange(t)}))}stepBy(t){if(this.disabled||this.readonly)return;const e=void 0!==this.min?this.min:0;let o=this.value;o+=t*this._step,isNaN(this.value)?this.value=e:this.value=o,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.indeterminate=!1,this.focus()}increment(t=1){this.stepBy(1*t)}decrement(t=1){this.stepBy(-1*t)}handleKeydown(t){switch(t.code){case"ArrowUp":t.preventDefault(),this.increment(t.shiftKey?this.stepModifier:1),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}));break;case"ArrowDown":t.preventDefault(),this.decrement(t.shiftKey?this.stepModifier:1),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}}onScroll(t){t.preventDefault(),this.managedInput=!0;const e=t.shiftKey?t.deltaX/Math.abs(t.deltaX):t.deltaY/Math.abs(t.deltaY);0!==e&&!isNaN(e)&&(this.stepBy(e*(t.shiftKey?this.stepModifier:1)),clearTimeout(this.queuedChangeEvent),this.queuedChangeEvent=setTimeout((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),100)),this.managedInput=!1}onFocus(){super.onFocus(),this._trackingValue=this.inputValue,this.keyboardFocused=!this.readonly&&!0,this.addEventListener("wheel",this.onScroll,{passive:!1})}onBlur(){super.onBlur(),this.keyboardFocused=!this.readonly&&!1,this.removeEventListener("wheel",this.onScroll)}handleFocusin(){this.focused=!this.readonly&&!0,this.keyboardFocused=!this.readonly&&!0}handleFocusout(){this.focused=!this.readonly&&!1,this.keyboardFocused=!this.readonly&&!1}handleChange(){const t=this.convertValueToNumber(this.inputValue);this.wasIndeterminate&&(this.wasIndeterminate=!1,this.indeterminateValue=void 0,isNaN(t))?this.indeterminate=!0:(this.value=t,super.handleChange())}handleInput(){this.indeterminate&&(this.wasIndeterminate=!0,this.indeterminateValue=this.value,this.inputElement.value=this.inputElement.value.replace("-",""));const{value:t,selectionStart:e}=this.inputElement,o=t.split("").map((t=>Ve[t]||t)).join("");if(this.numberParser.isValidPartialNumber(o)){const t=this.convertValueToNumber(o);return!o&&this.indeterminateValue?(this.indeterminate=!0,this._value=this.indeterminateValue):(this.indeterminate=!1,this._value=this.validateInput(t)),this._trackingValue=o,void(this.inputElement.value=o)}const r=o.length,s=(e||r)-(r-this._trackingValue.length);this.inputElement.value=this.indeterminate?"-":this._trackingValue,this.inputElement.setSelectionRange(s,s)}validateInput(t){if(void 0!==this.min&&(t=Math.max(this.min,t)),void 0!==this.max&&(t=Math.min(this.max,t)),this.step){const e=(t-(void 0!==this.min?this.min:0))%this.step;if(0===e||(1===Math.round(e/this.step)?t+=this.step-e:t-=e),void 0!==this.max)for(;t>this.max;)t-=this.step}return t}get displayValue(){const t=this.focused?"":"-";return this.indeterminate?t:this.formattedValue}clearNumberFormatterCache(){this._numberFormatter=void 0,this._numberParser=void 0}get numberFormatter(){if(!this._numberFormatter||!this._numberFormatterFocused){const{style:t,unit:e,unitDisplay:o,...r}=this.formatOptions;"unit"!==t&&(r.style=t),this._numberFormatterFocused=new Se(this.languageResolver.language,r);try{this._numberFormatter=new Se(this.languageResolver.language,this.formatOptions),this._forcedUnit="",this._numberFormatter.format(1)}catch(o){"unit"===t&&(this._forcedUnit=e),this._numberFormatter=this._numberFormatterFocused}}return this.focused?this._numberFormatterFocused:this._numberFormatter}get numberParser(){if(!this._numberParser||!this._numberParserFocused){const{style:t,unit:e,unitDisplay:o,...r}=this.formatOptions;"unit"!==t&&(r.style=t),this._numberParserFocused=new _e(this.languageResolver.language,r);try{this._numberParser=new _e(this.languageResolver.language,this.formatOptions),this._forcedUnit="",this._numberParser.parse("0")}catch(o){"unit"===t&&(this._forcedUnit=e),this._numberParser=this._numberParserFocused}}return this.focused?this._numberParserFocused:this._numberParser}renderField(){return this.autocomplete="off",t.dy`
            ${super.renderField()}
            ${this.hideStepper?t.dy``:t.dy`
                      <span
                          class="buttons"
                          @focusin=${this.handleFocusin}
                          @focusout=${this.handleFocusout}
                          ${ze({start:["pointerdown",this.handlePointerdown],streamInside:[["pointermove","pointerenter","pointerleave","pointerover","pointerout"],this.handlePointermove],end:[["pointerup","pointercancel"],this.handlePointerup]})}
                      >
                          <sp-action-button
                              class="stepUp"
                              label="Increment"
                              tabindex="-1"
                              ?focused=${this.focused}
                              ?disabled=${this.disabled||this.readonly||void 0!==this.max&&this.value===this.max}
                              ?quiet=${this.quiet}
                          >
                              <sp-icon-chevron75
                                  slot="icon"
                                  class="stepper-icon spectrum-UIIcon-ChevronUp75"
                              ></sp-icon-chevron75>
                          </sp-action-button>
                          <sp-action-button
                              class="stepDown"
                              label="Decrement"
                              tabindex="-1"
                              ?focused=${this.focused}
                              ?disabled=${this.disabled||this.readonly||void 0!==this.min&&this.value===this.min}
                              ?quiet=${this.quiet}
                          >
                              <sp-icon-chevron75
                                  slot="icon"
                                  class="stepper-icon spectrum-UIIcon-ChevronDown75"
                              ></sp-icon-chevron75>
                          </sp-action-button>
                      </span>
                  `}
        `}update(t){if((t.has("formatOptions")||t.has("resolvedLanguage"))&&this.clearNumberFormatterCache(),t.has("value")||t.has("max")||t.has("min")){const t=this.numberParser.parse(this.formattedValue.replace(this._forcedUnit,""));this.value=t}super.update(t)}willUpdate(t){this.multiline=!1,t.has(pe)&&this.clearNumberFormatterCache()}firstUpdated(t){super.firstUpdated(t),this.addEventListener("keydown",this.handleKeydown)}updated(t){if(t.has("min")||t.has("formatOptions")){let t="numeric";const e=void 0!==this.min&&this.min<0,{maximumFractionDigits:o}=this.numberFormatter.resolvedOptions(),r=o>0;De()?e?t="text":r&&(t="decimal"):function(t){return"undefined"!=typeof window&&null!=window.navigator&&t.test(window.navigator.userAgent)}(/Android/)&&(e?t="numeric":r&&(t="decimal")),this.inputElement.inputMode=t}}}Ne([(0,d.IO)(".buttons")],Ke.prototype,"buttons",2),Ne([(0,d.Cb)({type:Boolean,reflect:!0})],Ke.prototype,"focused",2),Ne([(0,d.Cb)({type:Object,attribute:"format-options"})],Ke.prototype,"formatOptions",2),Ne([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"hide-stepper"})],Ke.prototype,"hideStepper",2),Ne([(0,d.Cb)({type:Boolean,reflect:!0})],Ke.prototype,"indeterminate",2),Ne([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"keyboard-focused"})],Ke.prototype,"keyboardFocused",2),Ne([(0,d.Cb)({type:Number})],Ke.prototype,"max",2),Ne([(0,d.Cb)({type:Number})],Ke.prototype,"min",2),Ne([(0,d.Cb)({type:Number})],Ke.prototype,"step",2),Ne([(0,d.Cb)({type:Number,reflect:!0,attribute:"step-modifier"})],Ke.prototype,"stepModifier",2),Ne([(0,d.Cb)({type:Number})],Ke.prototype,"value",1),customElements.define("sp-number-field",Ke);var Ge=Object.defineProperty,We=Object.getOwnPropertyDescriptor,Ye=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?We(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&Ge(e,o,c),c};class Ze extends L{constructor(){super(...arguments),this.checked=!1,this.readonly=!1}get focusElement(){return this.inputElement}handleChange(){if(this.readonly)return void(this.inputElement.checked=this.checked);this.checked=this.inputElement.checked;const t=new CustomEvent("change",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(t)||(this.checked=!this.inputElement.checked,this.inputElement.checked=this.checked)}render(){return t.dy`
            <input
                id="input"
                aria-labelledby="label"
                type="checkbox"
                .checked=${this.checked}
                @change=${this.handleChange}
            />
        `}}Ye([(0,d.Cb)({type:Boolean,reflect:!0})],Ze.prototype,"checked",2),Ye([(0,d.Cb)({type:Boolean,reflect:!0})],Ze.prototype,"readonly",2),Ye([(0,d.IO)("#input")],Ze.prototype,"inputElement",2),customElements.define("sp-icon-checkmark75",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Checkmark75"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M3.667 9.07a.96.96 0 01-.737-.344L.753 6.114a.96.96 0 111.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 011.51 1.186L4.422 8.704a.962.962 0 01-.741.367z"
    />
  </svg>`)()}}),customElements.define("sp-icon-checkmark200",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Checkmark200"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M4.313 10.98a1.042 1.042 0 01-.8-.375L.647 7.165a1.042 1.042 0 011.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 011.64 1.287l-6.24 7.94a1.04 1.04 0 01-.804.399z"
    />
  </svg>`)()}}),customElements.define("sp-icon-checkmark300",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Checkmark300"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M5.102 12.514a1.087 1.087 0 01-.834-.39L.988 8.19A1.085 1.085 0 012.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 011.707 1.34L5.955 12.1a1.089 1.089 0 01-.838.415z"
    />
  </svg>`)()}}),customElements.define("sp-icon-dash75",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Dash75"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path d="M6.99 4.96H1.01a.96.96 0 010-1.92h5.98a.96.96 0 010 1.92z" />
  </svg>`)()}}),customElements.define("sp-icon-dash100",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Dash100"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path d="M8.5 6h-7a1 1 0 010-2h7a1 1 0 010 2z" />
  </svg>`)()}}),customElements.define("sp-icon-dash200",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Dash200"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path d="M10.021 7.042H1.98a1.042 1.042 0 110-2.083h8.043a1.042 1.042 0 010 2.083z" />
  </svg>`)()}}),customElements.define("sp-icon-dash300",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Dash300"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path d="M10.61 7.085H1.39a1.085 1.085 0 010-2.17h9.22a1.085 1.085 0 010 2.17z" />
  </svg>`)()}});const Xe=t.iv`
:host{--spectrum-checkbox-content-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-checkbox-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-checkbox-content-color-down:var(
--spectrum-neutral-content-color-down
);--spectrum-checkbox-content-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-checkbox-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-checkbox-content-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-checkbox-control-color-disabled:var(--spectrum-gray-400);--spectrum-checkbox-checkmark-color:var(--spectrum-gray-75);--spectrum-checkbox-invalid-color-default:var(
--spectrum-negative-color-900
);--spectrum-checkbox-invalid-color-hover:var(
--spectrum-negative-color-1000
);--spectrum-checkbox-invalid-color-down:var(--spectrum-negative-color-1100);--spectrum-checkbox-invalid-color-focus:var(
--spectrum-negative-color-1000
);--spectrum-checkbox-emphasized-color-default:var(
--spectrum-accent-color-900
);--spectrum-checkbox-emphasized-color-hover:var(
--spectrum-accent-color-1000
);--spectrum-checkbox-emphasized-color-down:var(
--spectrum-accent-color-1100
);--spectrum-checkbox-emphasized-color-focus:var(
--spectrum-accent-color-1000
);--spectrum-checkbox-font-size:var(--spectrum-font-size-100);--spectrum-checkbox-line-height:var(--spectrum-line-height-100);--spectrum-checkbox-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-checkbox-height:var(--spectrum-component-height-100);--spectrum-checkbox-control-size:var(
--spectrum-checkbox-control-size-medium
);--spectrum-checkbox-control-corner-radius:var(--spectrum-corner-radius-75);--spectrum-checkbox-focus-indicator-gap:var(
--spectrum-focus-indicator-gap
);--spectrum-checkbox-focus-indicator-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-checkbox-border-width:var(--spectrum-border-width-200);--spectrum-checkbox-selected-border-width:calc(var(--spectrum-checkbox-control-size)/2);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-100);--spectrum-checkbox-animation-duration:var(
--spectrum-animation-duration-100
)}:host([size=s]){--spectrum-checkbox-font-size:var(
--spectrum-font-size-75
);--spectrum-checkbox-height:var(--spectrum-component-height-75);--spectrum-checkbox-control-size:var(
--spectrum-checkbox-control-size-small
);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-75)}:host([size=m]){--spectrum-checkbox-font-size:var(
--spectrum-font-size-100
);--spectrum-checkbox-height:var(--spectrum-component-height-100);--spectrum-checkbox-control-size:var(
--spectrum-checkbox-control-size-medium
);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-100)}:host([size=l]){--spectrum-checkbox-font-size:var(
--spectrum-font-size-200
);--spectrum-checkbox-height:var(--spectrum-component-height-200);--spectrum-checkbox-control-size:var(
--spectrum-checkbox-control-size-large
);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-200);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-200)}:host([size=xl]){--spectrum-checkbox-font-size:var(
--spectrum-font-size-300
);--spectrum-checkbox-height:var(--spectrum-component-height-300);--spectrum-checkbox-control-size:var(
--spectrum-checkbox-control-size-extra-large
);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-300);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-300)}:host{align-items:flex-start;color:var(
--highcontrast-checkbox-content-color-default,var(
--mod-checkbox-content-color-default,var(--spectrum-checkbox-content-color-default)
)
);max-inline-size:100%;min-block-size:var(--mod-checkox-height,var(--spectrum-checkbox-height));position:relative}:host(:hover) #box:before{border-color:var(
--highcontrast-checkbox-highlight-color-hover,var(
--mod-checkbox-control-color-hover,var(--spectrum-checkbox-control-color-hover)
)
)}:host(:hover) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-hover,var(
--mod-checkbox-control-selected-color-hover,var(--spectrum-checkbox-control-selected-color-hover)
)
)}:host(:hover) #label{color:var(
--highcontrast-checkbox-content-color-hover,var(
--mod-checkbox-content-color-hover,var(--spectrum-checkbox-content-color-hover)
)
)}:host(:active) #box:before{border-color:var(
--highcontrast-checkbox-highlight-color-down,var(
--mod-checkbox-control-color-down,var(--spectrum-checkbox-control-color-down)
)
)}:host(:active) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-down,var(
--mod-checkbox-control-selected-color-down,var(--spectrum-checkbox-control-selected-color-down)
)
)}:host(:active) #label{color:var(
--highcontrast-checkbox-content-color-down,var(
--mod-checkbox-content-color-down,var(--spectrum-checkbox-content-color-down)
)
)}:host([invalid][dir]) #box:before,:host([invalid][dir]) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-invalid-color-default,var(--spectrum-checkbox-invalid-color-default)
)
)}:host([invalid]) #input.focus-visible+#box:before,:host([invalid][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-color-hover,var(
--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)
)
)}:host([invalid]) #input.focus-visible+#box:before,:host([invalid][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-color-hover,var(
--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)
)
)}:host([invalid]) #input:focus-visible+#box:before,:host([invalid][indeterminate]) #input:focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-color-hover,var(
--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)
)
)}:host([invalid]:hover) #box:before,:host([invalid][dir]:hover) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-hover,var(
--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)
)
)}:host([readonly]){border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)
)
)}:host([readonly]:hover) #box:before{border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)
)
)}:host([readonly]:active) #box:before{border-color:var(
--highcontrast-checkbox-selected-color-default,var(
--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)
)
)}:host([readonly]) #input:checked:disabled+#box:before,:host([readonly]) #input:disabled+#box:before{background-color:var(
--highcontrast-checkbox-background-color-default,var(
--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)
)
);border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)
)
)}:host([readonly]) #input:checked:disabled~#label,:host([readonly]) #input:disabled~#label{color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-content-color-default,var(--spectrum-checkbox-content-color-default)
)
);forced-color-adjust:none}:host([indeterminate]) #box:before,:host([indeterminate]) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-default,var(
--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)
)
);border-width:var(
--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width)
)}:host([indeterminate]) #box #checkmark,:host([indeterminate]) #input:checked+#box #checkmark{display:none}:host([indeterminate]) #box #partialCheckmark,:host([indeterminate]) #input:checked+#box #partialCheckmark{display:block;opacity:1;transform:scale(1)}:host([indeterminate]:hover) #box:before,:host([indeterminate]:hover) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-hover,var(
--mod-checkbox-control-selected-color-hover,var(--spectrum-checkbox-control-selected-color-hover)
)
)}:host([invalid][indeterminate]) #input:checked+#box:before,:host([invalid][indeterminate][size]) #box:before{border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-invalid-color-default,var(--spectrum-checkbox-invalid-color-default)
)
);border-width:var(
--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width)
)}:host([invalid][indeterminate]:hover) #box:before,:host([invalid][indeterminate]:hover) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)
)
)}:host([invalid][indeterminate]:hover) #label{color:var(
--highcontrast-checkbox-content-color-hover,var(
--mod-checkbox-content-color-hover,var(--spectrum-checkbox-content-color-hover)
)
)}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before{border-color:var(
--highcontrast-checkbox-highlight-color-default,var(
--mod-checkbox-emphasized-color-default,var(--spectrum-checkbox-emphasized-color-default)
)
)}:host([emphasized]:hover) #box:before{border-color:var(
--highcontrast-checkbox-color-hover,var(
--mod-checkbox-emphasized-color-hover,var(--spectrum-checkbox-emphasized-color-hover)
)
)}:host([emphasized]) #input.focus-visible+#box:before,:host([emphasized]) #input.focus-visible:checked+#box:before,:host([emphasized][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-emphasized-color-focus,var(--spectrum-checkbox-emphasized-color-focus)
)
)}:host([emphasized]) #input.focus-visible+#box:before,:host([emphasized]) #input.focus-visible:checked+#box:before,:host([emphasized][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-emphasized-color-focus,var(--spectrum-checkbox-emphasized-color-focus)
)
)}:host([emphasized]) #input:focus-visible+#box:before,:host([emphasized]) #input:focus-visible:checked+#box:before,:host([emphasized][indeterminate]) #input:focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-emphasized-color-focus,var(--spectrum-checkbox-emphasized-color-focus)
)
)}:host([emphasized][invalid]) #input.focus-visible:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-focus,var(
--mod-checkbox-invalid-color-focus,var(--spectrum-checkbox-invalid-color-focus)
)
)}:host([emphasized][invalid]) #input.focus-visible:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-focus,var(
--mod-checkbox-invalid-color-focus,var(--spectrum-checkbox-invalid-color-focus)
)
)}:host([emphasized][invalid]) #input:focus-visible:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-focus,var(
--mod-checkbox-invalid-color-focus,var(--spectrum-checkbox-invalid-color-focus)
)
)}:host([emphasized][invalid]:hover) #input:checked+#box:before,:host([emphasized][invalid][indeterminate]:hover) #box:before{border-color:var(
--highcontrast-checkbox-color-hover,var(
--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)
)
)}:host([emphasized]:hover) #input:checked+#box:before,:host([emphasized][indeterminate]:hover) #box:before{border-color:var(
--highcontrast-checkbox-highlight-color-hover,var(
--mod-checkbox-emphasized-color-hover,var(--spectrum-checkbox-emphasized-color-hover)
)
)}:host([emphasized]:active) #input:checked+#box:before,:host([emphasized][indeterminate]:active) #box:before{border-color:var(
--highcontrast-checkbox-highlight-color-default,var(
--mod-checkbox-emphasized-color-down,var(--spectrum-checkbox-emphasized-color-down)
)
)}:host([emphasized][invalid]:active) #box:before,:host([emphasized][invalid]:active) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-default,var(
--mod-checkbox-control-invalid-color-down,var(--spectrum-checkbox-invalid-color-down)
)
)}:host([emphasized].focus-visible) #box:before,:host([emphasized].focus-visible) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-focus,var(
--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)
)
)}:host([emphasized].focus-visible) #box:before,:host([emphasized].focus-visible) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-focus,var(
--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)
)
)}:host([emphasized]:focus-visible) #box:before,:host([emphasized]:focus-visible) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-focus,var(
--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)
)
)}#label{font-size:var(
--mod-checkbox-font-size,var(--spectrum-checkbox-font-size)
);line-height:var(
--mod-checkbox-line-height,var(--spectrum-checkbox-line-height)
);margin-block-start:var(
--mod-checkbox-top-to-text,var(--spectrum-checkbox-top-to-text)
);margin-inline-start:var(
--mod-checkbox-text-to-control,var(--spectrum-checkbox-text-to-control)
);text-align:start;transition:color var(
--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration)
) ease-in-out}#label:lang(js),#label:lang(ko),#label:lang(zh){line-height:var(
--mod-checkbox-line-height-cjk,var(--spectrum-checkbox-line-height-cjk)
)}#input{block-size:100%;box-sizing:border-box;color:var(
--mod-checkbox-control-color-default,var(--spectrum-checkbox-control-color-default)
);cursor:pointer;font-family:inherit;font-size:100%;inline-size:100%;line-height:1.15;margin:0;opacity:.0001;overflow:visible;padding:0;position:absolute;z-index:1}#input:disabled{cursor:default}#input:checked+#box:before{background-color:var(
--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)
);border-color:var(
--highcontrast-checkbox-highlight-color-default,var(
--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)
)
);border-width:var(
--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width)
)}#input:checked+#box #checkmark{opacity:1;transform:scale(1)}#input.focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-emphasized-color-focus,var(--spectrum-checkbox-emphasized-color-focus)
)
)}#input.focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-emphasized-color-focus,var(--spectrum-checkbox-emphasized-color-focus)
)
)}#input:focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-emphasized-color-focus,var(--spectrum-checkbox-emphasized-color-focus)
)
)}#input.focus-visible+#box:after{box-shadow:0 0 0 var(
--mod-checkbox-focus-indicator-thinkness,var(--spectrum-checkbox-focus-indicator-thickness)
) var(
--highcontrast-checkbox-focus-indicator-color,var(
--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)
)
);forced-color-adjust:none;margin:calc(var(
--mod-checkbox-focus-indicator-gap,
var(--spectrum-checkbox-focus-indicator-gap)
)*-1)}#input.focus-visible+#box:after{box-shadow:0 0 0 var(
--mod-checkbox-focus-indicator-thinkness,var(--spectrum-checkbox-focus-indicator-thickness)
) var(
--highcontrast-checkbox-focus-indicator-color,var(
--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)
)
);forced-color-adjust:none;margin:calc(var(
--mod-checkbox-focus-indicator-gap,
var(--spectrum-checkbox-focus-indicator-gap)
)*-1)}#input:focus-visible+#box:after{box-shadow:0 0 0 var(
--mod-checkbox-focus-indicator-thinkness,var(--spectrum-checkbox-focus-indicator-thickness)
) var(
--highcontrast-checkbox-focus-indicator-color,var(
--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)
)
);forced-color-adjust:none;margin:calc(var(
--mod-checkbox-focus-indicator-gap,
var(--spectrum-checkbox-focus-indicator-gap)
)*-1)}#input.focus-visible+#label{color:var(
--highcontrast-checkbox-content-color-focus,var(
--mod-checkbox-content-color-focus,var(--spectrum-checkbox-content-color-focus)
)
)}#input.focus-visible+#label{color:var(
--highcontrast-checkbox-content-color-focus,var(
--mod-checkbox-content-color-focus,var(--spectrum-checkbox-content-color-focus)
)
)}#input:focus-visible+#label{color:var(
--highcontrast-checkbox-content-color-focus,var(
--mod-checkbox-content-color-focus,var(--spectrum-checkbox-content-color-focus)
)
)}#box{--spectrum-checkbox-spacing:calc(var(--spectrum-checkbox-height) - var(--spectrum-checkbox-control-size));align-items:center;block-size:var(
--mod-checkbox-control-size,var(--spectrum-checkbox-control-size)
);box-sizing:border-box;display:flex;flex-grow:0;flex-shrink:0;inline-size:var(
--mod-checkbox-control-size,var(--spectrum-checkbox-control-size)
);justify-content:center;margin:calc(var(--mod-checkbox-spacing, var(--spectrum-checkbox-spacing))/2) 0;position:relative}#box:before{border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-control-color-default,var(--spectrum-checkbox-control-color-default)
)
);border-radius:var(--spectrum-checkbox-control-corner-radius);border-style:solid;border-width:var(
--mod-checkbox-border-width,var(--spectrum-checkbox-border-width)
);box-sizing:border-box;content:"";display:block;forced-color-adjust:none;height:var(
--mod-checkbox-control-size,var(--spectrum-checkbox-control-size)
);position:absolute;transition:border var(
--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration)
) ease-in-out,box-shadow var(
--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration)
) ease-in-out;width:var(
--mod-checkbox-control-size,var(--spectrum-checkbox-control-size)
);z-index:0}#box:after{border-radius:calc(var(--spectrum-checkbox-control-corner-radius) + var(--spectrum-checkbox-focus-indicator-gap));bottom:0;content:"";display:block;left:0;margin:var(
--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap)
);position:absolute;right:0;top:0;transform:translate(0);transition:box-shadow var(
--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration)
) ease-out,margin var(
--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration)
) ease-out}#checkmark,#partialCheckmark{color:var(
--highcontrast-checkbox-background-color-default,var(
--mode-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)
)
);opacity:0;transform:scale(0);transition:opacity var(
--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration)
) ease-in-out,transform var(
--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration)
) ease-in-out}#partialCheckmark{display:none}#input:disabled+#box:before,:host([dir]) #input:checked:disabled+#box:before{background-color:var(
--highcontrast-checkbox-background-color-default,var(
--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)
)
);border-color:var(
--highcontrast-checkbox-disabled-color-default,var(
--mod-checkbox-control-color-disabled,var(--spectrum-checkbox-control-color-disabled)
)
)}#input:checked:disabled~#label,#input:disabled~#label{color:var(
--highcontrast-checkbox-disabled-color-default,var(
--mod-checkbox-content-color-disabled,var(--spectrum-checkbox-content-color-disabled)
)
);forced-color-adjust:none}@media (forced-colors:active){#input.focus-visible+#box{forced-color-adjust:none;outline-color:var(
--highcontrast-checkbox-focus-indicator-color,var(
--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)
)
);outline-offset:var(
--highcontrast-checkbox-focus-indicator-gap,var(
--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap)
)
);outline-style:auto;outline-width:var(
--mod-focus-indicator-thickness,var(--spectrum-focus-indicator-thickness)
)}#input.focus-visible+#box{forced-color-adjust:none;outline-color:var(
--highcontrast-checkbox-focus-indicator-color,var(
--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)
)
);outline-offset:var(
--highcontrast-checkbox-focus-indicator-gap,var(
--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap)
)
);outline-style:auto;outline-width:var(
--mod-focus-indicator-thickness,var(--spectrum-focus-indicator-thickness)
)}#input:focus-visible+#box{forced-color-adjust:none;outline-color:var(
--highcontrast-checkbox-focus-indicator-color,var(
--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)
)
);outline-offset:var(
--highcontrast-checkbox-focus-indicator-gap,var(
--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap)
)
);outline-style:auto;outline-width:var(
--mod-focus-indicator-thickness,var(--spectrum-focus-indicator-thickness)
)}#input.focus-visible+#box:after{box-shadow:0 0 0 0 var(
--highcontrast-checkbox-focus-indicator-color,var(
--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)
)
)}#input.focus-visible+#box:after{box-shadow:0 0 0 0 var(
--highcontrast-checkbox-focus-indicator-color,var(
--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)
)
)}#input:focus-visible+#box:after{box-shadow:0 0 0 0 var(
--highcontrast-checkbox-focus-indicator-color,var(
--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)
)
)}:host{--highcontrast-checkbox-content-color-default:ButtonText;--highcontrast-checkbox-content-color-hover:ButtonText;--highcontrast-checkbox-content-color-down:ButtonText;--highcontrast-checkbox-content-color-focus:ButtonText;--highcontrast-checkbox-background-color-default:Background;--highcontrast-checkbox-color-default:ButtonText;--highcontrast-checkbox-color-hover:ButtonText;--highcontrast-checkbox-highlight-color-default:Highlight;--highcontrast-checkbox-highlight-color-hover:Highlight;--highcontrast-checkbox-highlight-color-down:Highlight;--highcontrast-checkbox-disabled-color-default:GrayText;--highcontrast-checkbox-highlight-color-focus:Highlight;--highcontrast-checkbox-focus-indicator-color:FieldText;--highcontrast-checkbox-color-focus:FieldText}}:host{--spectrum-checkbox-control-color-default:var(
--system-spectrum-checkbox-control-color-default
);--spectrum-checkbox-control-color-hover:var(
--system-spectrum-checkbox-control-color-hover
);--spectrum-checkbox-control-color-down:var(
--system-spectrum-checkbox-control-color-down
);--spectrum-checkbox-control-color-focus:var(
--system-spectrum-checkbox-control-color-focus
);--spectrum-checkbox-control-selected-color-default:var(
--system-spectrum-checkbox-control-selected-color-default
);--spectrum-checkbox-control-selected-color-hover:var(
--system-spectrum-checkbox-control-selected-color-hover
);--spectrum-checkbox-control-selected-color-down:var(
--system-spectrum-checkbox-control-selected-color-down
)}:host{display:inline-flex;vertical-align:top}:host(:focus){outline:none}:host([disabled]){pointer-events:none}:host(:empty) label{display:none}
`,Je=t.iv`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Dash50{height:var(--spectrum-alias-ui-icon-dash-size-50);width:var(
--spectrum-alias-ui-icon-dash-size-50
)}.spectrum-UIIcon-Dash75{height:var(--spectrum-alias-ui-icon-dash-size-75);width:var(
--spectrum-alias-ui-icon-dash-size-75
)}.spectrum-UIIcon-Dash100{height:var(--spectrum-alias-ui-icon-dash-size-100);width:var(
--spectrum-alias-ui-icon-dash-size-100
)}.spectrum-UIIcon-Dash200{height:var(--spectrum-alias-ui-icon-dash-size-200);width:var(
--spectrum-alias-ui-icon-dash-size-200
)}.spectrum-UIIcon-Dash300{height:var(--spectrum-alias-ui-icon-dash-size-300);width:var(
--spectrum-alias-ui-icon-dash-size-300
)}.spectrum-UIIcon-Dash400{height:var(--spectrum-alias-ui-icon-dash-size-400);width:var(
--spectrum-alias-ui-icon-dash-size-400
)}.spectrum-UIIcon-Dash500{height:var(--spectrum-alias-ui-icon-dash-size-500);width:var(
--spectrum-alias-ui-icon-dash-size-500
)}.spectrum-UIIcon-Dash600{height:var(--spectrum-alias-ui-icon-dash-size-600);width:var(
--spectrum-alias-ui-icon-dash-size-600
)}
`;var Qe=Object.defineProperty,to=Object.getOwnPropertyDescriptor,eo=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?to(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&Qe(e,o,c),c};const oo={s:t.dy`
        <sp-icon-checkmark75
            id="checkmark"
            class="spectrum-UIIcon-Checkmark75"
        ></sp-icon-checkmark75>
    `,m:t.dy`
        <sp-icon-checkmark100
            id="checkmark"
            class="spectrum-UIIcon-Checkmark100"
        ></sp-icon-checkmark100>
    `,l:t.dy`
        <sp-icon-checkmark200
            id="checkmark"
            class="spectrum-UIIcon-Checkmark200"
        ></sp-icon-checkmark200>
    `,xl:t.dy`
        <sp-icon-checkmark300
            id="checkmark"
            class="spectrum-UIIcon-Checkmark300"
        ></sp-icon-checkmark300>
    `},ro={s:t.dy`
        <sp-icon-dash75
            id="partialCheckmark"
            class="spectrum-UIIcon-Dash75"
        ></sp-icon-dash75>
    `,m:t.dy`
        <sp-icon-dash100
            id="partialCheckmark"
            class="spectrum-UIIcon-Dash100"
        ></sp-icon-dash100>
    `,l:t.dy`
        <sp-icon-dash200
            id="partialCheckmark"
            class="spectrum-UIIcon-Dash200"
        ></sp-icon-dash200>
    `,xl:t.dy`
        <sp-icon-dash300
            id="partialCheckmark"
            class="spectrum-UIIcon-Dash300"
        ></sp-icon-dash300>
    `};class so extends(z(Ze)){constructor(){super(...arguments),this.indeterminate=!1,this.invalid=!1,this.emphasized=!1}static get styles(){return[Xe,ae,Je]}render(){return t.dy`
            ${super.render()}
            <span id="box">
                ${oo[this.size]}
                ${ro[this.size]}
            </span>
            <label id="label"><slot></slot></label>
        `}updated(t){super.updated(t),t.has("invalid")&&(this.invalid?this.inputElement.setAttribute("aria-invalid","true"):this.inputElement.removeAttribute("aria-invalid")),t.has("indeterminate")&&(this.indeterminate?this.inputElement.setAttribute("aria-checked","mixed"):this.inputElement.removeAttribute("aria-checked"))}}eo([(0,d.Cb)({type:Boolean,reflect:!0})],so.prototype,"indeterminate",2),eo([(0,d.Cb)({type:Boolean,reflect:!0})],so.prototype,"invalid",2),eo([(0,d.Cb)({type:Boolean,reflect:!0})],so.prototype,"emphasized",2),customElements.define("sp-checkbox",so);const co=t.iv`
:host{--spectrum-link-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-link-text-color-primary-default:var(
--spectrum-accent-content-color-default
);--spectrum-link-text-color-primary-hover:var(
--spectrum-accent-content-color-hover
);--spectrum-link-text-color-primary-active:var(
--spectrum-accent-content-color-down
);--spectrum-link-text-color-primary-focus:var(
--spectrum-accent-content-color-key-focus
);--spectrum-link-text-color-secondary-default:var(
--spectrum-neutral-content-color-default
);--spectrum-link-text-color-secondary-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-link-text-color-secondary-active:var(
--spectrum-neutral-content-color-down
);--spectrum-link-text-color-secondary-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-link-text-color-white:var(--spectrum-white);--spectrum-link-text-color-black:var(--spectrum-black)}@media (forced-colors:active){a{--highcontrast-link-text-color-primary-default:LinkText;--highcontrast-link-text-color-primary-hover:LinkText;--highcontrast-link-text-color-primary-active:LinkText;--highcontrast-link-text-color-primary-focus:LinkText;--highcontrast-link-text-color-secondary-default:LinkText;--highcontrast-link-text-color-secondary-hover:LinkText;--highcontrast-link-text-color-secondary-active:LinkText;--highcontrast-link-text-color-secondary-focus:LinkText;--highcontrast-link-text-color-white:LinkText;--highcontrast-link-text-color-black:LinkText}}a{-webkit-text-decoration-skip:objects;background-color:transparent;color:var(
--highcontrast-link-text-color-primary-default,var(
--mod-link-text-color-primary-default,var(--spectrum-link-text-color-primary-default)
)
);cursor:pointer;outline:none;text-decoration:underline;transition:color var(
--mod-link-animation-duration,var(--spectrum-link-animation-duration)
) ease-in-out}a:hover{color:var(
--highcontrast-link-text-color-primary-hover,var(
--mod-link-text-color-primary-hover,var(--spectrum-link-text-color-primary-hover)
)
)}a:active{color:var(
--highcontrast-link-text-color-primary-active,var(
--mod-link-text-color-primary-active,var(--spectrum-link-text-color-primary-active)
)
)}a.focus-visible{color:var(
--highcontrast-link-text-color-primary-focus,var(
--mod-link-text-color-primary-focus,var(--spectrum-link-text-color-primary-focus)
)
);text-decoration:underline;text-decoration-color:var(--highcontrast-link-focus-color,inherit);text-decoration-style:double}a:focus-visible{color:var(
--highcontrast-link-text-color-primary-focus,var(
--mod-link-text-color-primary-focus,var(--spectrum-link-text-color-primary-focus)
)
);text-decoration:underline;text-decoration-color:var(--highcontrast-link-focus-color,inherit);text-decoration-style:double}:host([variant=secondary]) a{color:var(
--highcontrast-link-text-color-secondary-default,var(
--mod-link-text-color-secondary-default,var(--spectrum-link-text-color-secondary-default)
)
)}:host([variant=secondary]) a:hover{color:var(
--highcontrast-link-text-color-secondary-hover,var(
--mod-link-text-color-secondary-hover,var(--spectrum-link-text-color-secondary-hover)
)
)}:host([variant=secondary]) a:active{color:var(
--highcontrast-link-text-color-secondary-active,var(
--mod-link-text-color-secondary-active,var(--spectrum-link-text-color-secondary-active)
)
)}:host([variant=secondary]) a:focus{color:var(
--highcontrast-link-text-color-secondary-focus,var(
--mod-link-text-color-secondary-focus,var(--spectrum-link-text-color-secondary-focus)
)
)}:host([quiet]) a{text-decoration:none}:host([quiet]) a:hover{text-decoration:underline}:host([static=white]) a{color:var(
--highcontrast-link-text-color-white,var(--mod-link-text-color-white,var(--spectrum-link-text-color-white))
)}:host([static=white]) a:active,:host([static=white]) a:focus,:host([static=white]) a:hover{color:var(
--highcontrast-link-text-color-white,var(--mod-link-text-color-white,var(--spectrum-link-text-color-white))
)}:host([static=black]) a{color:var(
--highcontrast-link-text-color-black,var(--mod-link-text-color-black,var(--spectrum-link-text-color-black))
)}:host([static=black]) a:active,:host([static=black]) a:focus,:host([static=black]) a:hover{color:var(
--highcontrast-link-text-color-black,var(--mod-link-text-color-black,var(--spectrum-link-text-color-black))
)}:host{display:inline}:host(:focus){outline:none}:host([href]) a.focus-visible{text-decoration:underline;text-decoration-style:double}:host([href]) a:focus-visible{text-decoration:underline;text-decoration-style:double}
`;var ao=Object.defineProperty,io=Object.getOwnPropertyDescriptor,no=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?io(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&ao(e,o,c),c};class lo extends(ht(L)){constructor(){super(...arguments),this.quiet=!1}static get styles(){return[co]}get focusElement(){return this.anchorElement}render(){return this.renderAnchor({id:"anchor"})}}no([(0,d.IO)("#anchor")],lo.prototype,"anchorElement",2),no([(0,d.Cb)({type:String,reflect:!0})],lo.prototype,"variant",2),no([(0,d.Cb)({type:String,reflect:!0})],lo.prototype,"static",2),no([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"quiet"})],lo.prototype,"quiet",2),customElements.define("sp-link",lo);const uo=t.iv`
:host{align-items:center;display:flex;height:100%;justify-content:center;width:100%}::slotted(*){max-height:100%;max-width:100%;object-fit:contain;transition:opacity var(--spectrum-global-animation-duration-100,.13s)}.file,.folder{height:100%;margin:var(
--spectrum-asset-icon-margin,var(--spectrum-global-dimension-size-250)
);max-width:var(
--spectrum-asset-icon-max-width,var(--spectrum-global-dimension-static-size-1000)
);min-width:var(
--spectrum-asset-icon-min-width,var(--spectrum-global-dimension-size-600)
);width:100%}.folderBackground{fill:var(
--spectrum-asset-folder-background-color,var(--spectrum-global-color-gray-300)
)}.fileBackground{fill:var(
--spectrum-asset-file-background-color,var(--spectrum-global-color-gray-50)
)}.fileOutline,.folderOutline{fill:var(
--spectrum-asset-icon-outline-color,var(--spectrum-global-color-gray-500)
)}
`;var mo=Object.defineProperty,po=Object.getOwnPropertyDescriptor,bo=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?po(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&mo(e,o,c),c};class ho extends u.o{constructor(){super(...arguments),this.label=""}static get styles(){return[uo]}render(){return"file"===this.variant?(e=this.label,t.dy`
    <svg
        class="file"
        role="img"
        viewBox="0 0 128 128"
        aria-label=${e||"File"}
    >
        <path
            class="fileBackground"
            d="M24,126c-5.5,0-10-4.5-10-10V12c0-5.5,4.5-10,10-10h61.5c2.1,0,4.1,0.8,5.6,2.3l20.5,20.4c1.5,1.5,2.4,3.5,2.4,5.7V116c0,5.5-4.5,10-10,10H24z"
        ></path>
        <path
            class="fileOutline"
            d="M113.1,23.3L92.6,2.9C90.7,1,88.2,0,85.5,0H24c-6.6,0-12,5.4-12,12v104c0,6.6,5.4,12,12,12h80c6.6,0,12-5.4,12-12V30.4C116,27.8,114.9,25.2,113.1,23.3z M90,6l20.1,20H92c-1.1,0-2-0.9-2-2V6z M112,116c0,4.4-3.6,8-8,8H24c-4.4,0-8-3.6-8-8V12c0-4.4,3.6-8,8-8h61.5c0.2,0,0.3,0,0.5,0v20c0,3.3,2.7,6,6,6h20c0,0.1,0,0.3,0,0.4V116z"
        ></path>
    </svg>
`):"folder"===this.variant?(e=>t.dy`
    <svg
        class="folder"
        role="img"
        viewBox="0 0 32 32"
        aria-label=${e||"Folder"}
    >
        <path
            class="folderBackground"
            d="M3,29.5c-1.4,0-2.5-1.1-2.5-2.5V5c0-1.4,1.1-2.5,2.5-2.5h10.1c0.5,0,1,0.2,1.4,0.6l3.1,3.1c0.2,0.2,0.4,0.3,0.7,0.3H29c1.4,0,2.5,1.1,2.5,2.5v18c0,1.4-1.1,2.5-2.5,2.5H3z"
        ></path>
        <path
            class="folderOutline"
            d="M29,6H18.3c-0.1,0-0.2,0-0.4-0.2l-3.1-3.1C14.4,2.3,13.8,2,13.1,2H3C1.3,2,0,3.3,0,5v22c0,1.6,1.3,3,3,3h26c1.7,0,3-1.4,3-3V9C32,7.3,30.7,6,29,6z M31,27c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V7h28c1.1,0,2,0.9,2,2V27z"
        ></path>
    </svg>
`)(this.label):t.dy`
            <slot></slot>
        `;var e}}bo([(0,d.Cb)({type:String,reflect:!0})],ho.prototype,"variant",2),bo([(0,d.Cb)()],ho.prototype,"label",2),customElements.define("sp-asset",ho);const vo=t.iv`
:host{--spectrum-colorloupe-width-adjusted:calc(var(--spectrum-colorloupe-width, var(--spectrum-alias-colorloupe-width)) + var(--spectrum-global-dimension-static-size-100, 8px));--spectrum-colorloupe-height-adjusted:calc(var(
--spectrum-colorloupe-height,
var(--spectrum-alias-colorloupe-height)
) + var(--spectrum-global-dimension-static-size-100, 8px));--spectrum-colorloupe-offset:var(
--spectrum-global-dimension-static-size-200,16px
);--spectrum-colorloupe-animation-distance:var(
--spectrum-global-dimension-static-size-100,8px
)}:host{bottom:calc(50% + var(--spectrum-colorloupe-offset));height:var(--spectrum-colorloupe-height-adjusted);left:calc(50% - var(--spectrum-colorloupe-width-adjusted)/2);opacity:0;pointer-events:none;position:absolute;transform:translateY(var(--spectrum-colorloupe-animation-distance));transform-origin:bottom center;transition:transform .1s ease-in-out,opacity 125ms ease-in-out;width:var(--spectrum-colorloupe-width-adjusted)}:host([open]){opacity:1;transform:translate(0)}.outer{stroke-width:var(
--spectrum-colorloupe-outer-border-size,0
)}.spectrum-ColorLoupe-express{display:var(
--spectrum-colorloupe-express-visibility,none
)}.spectrum-ColorLoupe-spectrum{display:var(
--spectrum-colorloupe-spectrum-visibility,block
)}.outer{fill:var(
--spectrum-colorloupe-inner-border-color,var(--spectrum-global-color-static-white)
);stroke:var(--spectrum-colorloupe-outer-border-color,transparent)}.inner{fill:var(--spectrum-picked-color);stroke:var(
--spectrum-colorloupe-outer-stroke-color,var(--spectrum-global-color-static-transparent-black-200)
);stroke-width:var(
--spectrum-colorloupe-outer-stroke-width,var(--spectrum-alias-border-size-thick)
)}@media (forced-colors:active){:host{--spectrum-colorloupe-outer-border-color:CanvasText}}svg{height:inherit;width:inherit}
`;var go=Object.defineProperty,fo=Object.getOwnPropertyDescriptor,xo=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?fo(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&go(e,o,c),c};class yo extends u.o{constructor(){super(...arguments),this.open=!1,this.color="rgba(255, 0, 0, 0.5)"}static get styles(){return[vo]}render(){return t.dy`
            <svg style="--spectrum-picked-color: ${this.color};">
                <defs>
                    <path
                        id="spectrum-inner-loupe"
                        class="inner"
                        d="M24,0A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"
                    />
                    <path
                        id="express-inner-loupe"
                        class="inner"
                        d="M-14330.692,18055.742A15.922,15.922,0,0,1-14334,18046a16,16,0,0,1,16-16,16,16,0,0,1,16,16,15.925,15.925,0,0,1-3.166,9.555c-.009.016-.018.029-.028.045-2.577,4.033-12.77,14.4-12.77,14.4S-14328.027,18059.484-14330.692,18055.742Z"
                    />

                    <g id="loupe-checkerboard">
                        <g transform="translate(338 285)">
                            <g transform="translate(-338 -285)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -285)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -285)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -285)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-338 -269)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -269)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -269)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -269)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-338 -253)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -253)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -253)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -253)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-338 -237)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -237)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -237)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -237)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-338 -221)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -221)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -221)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -221)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                        </g>
                    </g>

                    <clipPath id="spectrum-loupe-clip">
                        <use xlink:href="#spectrum-inner-loupe" />
                    </clipPath>
                    <clipPath id="express-loupe-clip">
                        <use xlink:href="#express-inner-loupe" />
                    </clipPath>
                    <clipPath id="express-checkerboard-loupe-clip">
                        <use
                            xlink:href="#express-inner-loupe"
                            transform="translate(14688 -17741)"
                        />
                    </clipPath>

                    <filter
                        id="loupe-shadow"
                        x="-16px"
                        y="-16px"
                        width="96"
                        height="128"
                        filterUnits="userSpaceOnUse"
                    >
                        <feOffset input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="2" result="d" />
                        <feFlood flood-opacity="0.302" />
                        <feComposite operator="in" in2="d" />
                        <feComposite in="SourceGraphic" />
                    </filter>
                </defs>

                <g
                    transform="translate(4 4)"
                    class="spectrum-ColorLoupe-spectrum"
                >
                    <g clip-path="url(#spectrum-loupe-clip)">
                        <g transform="translate(-353.999 -289)">
                            <use xlink:href="#loupe-checkerboard" />
                        </g>
                    </g>
                    <g filter="url(#loupe-shadow)">
                        <use xlink:href="#spectrum-inner-loupe" />
                    </g>
                    <path
                        class="outer"
                        d="M24,2A21.98,21.98,0,0,0,2,24c0,6.2,4,14.794,11.568,24.853A144.233,144.233,0,0,0,24,61.132,144.085,144.085,0,0,0,34.4,48.893C41.99,38.816,46,30.209,46,24A21.98,21.98,0,0,0,24,2m0-2A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"
                    />
                </g>

                <g
                    transform="translate(-290 -235)"
                    class="spectrum-ColorLoupe-express"
                >
                    <g
                        transform="translate(-58 -45)"
                        clip-path="url(#express-checkerboard-loupe-clip)"
                    >
                        <use xlink:href="#loupe-checkerboard" />
                    </g>
                    <g
                        transform="matrix(1, 0, 0, 1, 290, 238)"
                        filter="url(#loupe-shadow)"
                    >
                        <g transform="translate(14340 -18024)">
                            <use
                                xlink:href="#express-inner-loupe"
                                stroke-width="6"
                                stroke="rgba(0, 0, 0, 0.15)"
                                clip-path="url(#express-loupe-clip)"
                            />
                        </g>
                    </g>
                    <g transform="translate(14630 -17786)" fill="none">
                        <path
                            class="outer"
                            d="M -14317.9482421875 18067.111328125 C -14315.0771484375 18064.130859375 -14308.7626953125 18057.462890625 -14306.884765625 18054.529296875 L -14306.8466796875 18054.4609375 L -14306.76953125 18054.359375 C -14304.9580078125 18051.931640625 -14304.0009765625 18049.041015625 -14304.0009765625 18046 C -14304.0009765625 18042.26171875 -14305.45703125 18038.74609375 -14308.1025390625 18036.1015625 C -14310.7470703125 18033.45703125 -14314.2626953125 18032 -14318.0009765625 18032 C -14321.7392578125 18032 -14325.2548828125 18033.45703125 -14327.8994140625 18036.1015625 C -14330.544921875 18038.74609375 -14332.0009765625 18042.26171875 -14332.0009765625 18046 C -14332.0009765625 18049.115234375 -14331 18052.0625 -14329.107421875 18054.5234375 L -14329.0634765625 18054.58203125 C -14327.1025390625 18057.3359375 -14320.802734375 18064.087890625 -14317.9482421875 18067.111328125 M -14317.96484375 18070 C -14317.96484375 18070 -14328.02734375 18059.484375 -14330.6923828125 18055.7421875 C -14332.767578125 18053.044921875 -14334.0009765625 18049.666015625 -14334.0009765625 18046 C -14334.0009765625 18037.166015625 -14326.8359375 18030 -14318.0009765625 18030 C -14309.166015625 18030 -14302.0009765625 18037.166015625 -14302.0009765625 18046 C -14302.0009765625 18049.580078125 -14303.177734375 18052.888671875 -14305.1669921875 18055.5546875 C -14305.17578125 18055.5703125 -14305.1845703125 18055.583984375 -14305.1953125 18055.599609375 C -14307.7724609375 18059.6328125 -14317.96484375 18070 -14317.96484375 18070 Z"
                            stroke="none"
                            fill="#fff"
                        />
                    </g>
                </g>
            </svg>
        `}}xo([(0,d.Cb)({type:Boolean,reflect:!0})],yo.prototype,"open",2),xo([(0,d.Cb)({type:String})],yo.prototype,"color",2),customElements.define("sp-color-loupe",yo);const ko=t.iv`
:host{--spectrum-colorhandle-checkerboard-size:var(
--spectrum-global-dimension-static-size-100,8px
);--spectrum-colorhandle-animation-duration:var(
--spectrum-global-animation-duration-100,130ms
);--spectrum-colorhandle-animation-easing:ease-in-out;--spectrum-colorhandle-hitarea-size:var(
--spectrum-global-dimension-size-300
)}:host(.focus-visible),:host([focused]){height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);margin-top:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}:host(.focus-visible),:host([focused]){height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);margin-top:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}:host(:focus-visible),:host([focused]){height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);margin-top:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}:host{background-position:var(
--spectrum-colorhandle-background-offset,calc(-1 * var(--spectrum-global-dimension-static-size-25))
) var(
--spectrum-colorhandle-background-offset,calc(-1 * var(--spectrum-global-dimension-static-size-25))
),var(
--spectrum-colorhandle-background-offset,calc(-1 * var(--spectrum-global-dimension-static-size-25))
) calc(var(--spectrum-colorhandle-checkerboard-size) + var(
--spectrum-colorhandle-background-offset,
calc(-1 * var(--spectrum-global-dimension-static-size-25))
)),calc(var(--spectrum-colorhandle-checkerboard-size) + var(
--spectrum-colorhandle-background-offset,
calc(-1 * var(--spectrum-global-dimension-static-size-25))
)) calc(-1 * var(--spectrum-colorhandle-checkerboard-size) + var(--spectrum-colorhandle-background-offset, calc(-1 * var(
--spectrum-global-dimension-static-size-25
)))),calc(-1 * var(--spectrum-colorhandle-checkerboard-size) + var(--spectrum-colorhandle-background-offset, calc(-1 * var(
--spectrum-global-dimension-static-size-25
)))) var(
--spectrum-colorhandle-background-offset,calc(-1 * var(--spectrum-global-dimension-static-size-25))
);background-size:var(--spectrum-global-dimension-static-size-200,16px) var(--spectrum-global-dimension-static-size-200,16px);border-style:solid;border-width:var(
--spectrum-colorhandle-inner-border-size,var(--spectrum-global-dimension-static-size-25)
);box-sizing:border-box;display:block;height:var(
--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)
);margin-left:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1/2);margin-top:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1/2);position:absolute;transition:width var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),height var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),border-width var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),margin-left var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),margin-top var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing);width:var(
--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)
);z-index:1}:host,:host:after{border-radius:100%}:host:after{content:"";display:block;height:var(--spectrum-colorhandle-hitarea-size);left:calc(50% - var(--spectrum-colorhandle-hitarea-size)/2);position:absolute;top:calc(50% - var(--spectrum-colorhandle-hitarea-size)/2);width:var(--spectrum-colorhandle-hitarea-size)}:host([disabled]){pointer-events:none}.color{border-radius:100%;height:100%;width:100%}:host{background-color:var(
--spectrum-colorcontrol-checkerboard-light-color,var(--spectrum-global-color-static-white)
);background-image:linear-gradient(-45deg,transparent 75.5%,var(
--spectrum-colorcontrol-checkerboard-dark-color,var(--spectrum-global-color-static-gray-300)
) 75.5%),linear-gradient(45deg,transparent 75.5%,var(
--spectrum-colorcontrol-checkerboard-dark-color,var(--spectrum-global-color-static-gray-300)
) 75.5%),linear-gradient(-45deg,var(
--spectrum-colorcontrol-checkerboard-dark-color,var(--spectrum-global-color-static-gray-300)
) 25.5%,transparent 25.5%),linear-gradient(45deg,var(
--spectrum-colorcontrol-checkerboard-dark-color,var(--spectrum-global-color-static-gray-300)
) 25.5%,transparent 25.5%);border-color:var(
--spectrum-colorhandle-inner-border-color,var(--spectrum-global-color-static-white)
);box-shadow:0 0 var(--spectrum-colorhandle-outer-shadow-blur,0) var(
--spectrum-colorhandle-outer-shadow-spread,var(--spectrum-alias-border-size-thin)
) var(--spectrum-colorhandle-outer-shadow-color,rgba(0,0,0,.42))}:host([disabled]){background:var(
--spectrum-colorhandle-fill-color-disabled,var(--spectrum-alias-track-color-disabled)
);border-color:var(
--spectrum-colorhandle-inner-border-color-disabled,var(--spectrum-global-color-gray-400)
);box-shadow:none}:host([disabled]) .color{display:none}.color{background-color:var(--spectrum-picked-color);box-shadow:inset 0 0 0 var(
--spectrum-colorhandle-outer-border-size,var(--spectrum-alias-border-size-thin)
) var(
--spectrum-colorhandle-inner-shadow-color,var(--spectrum-colorhandle-outer-shadow-color)
)}@media (forced-colors:active){:host{--spectrum-colorhandle-inner-border-color-disabled:GrayText;--spectrum-colorhandle-fill-color-disabled:Canvas;--spectrum-colorhandle-inner-border-color:CanvasText}:host([disabled]){forced-color-adjust:none}}:host{touch-action:none}:host(:focus){outline:none}
`;var wo=Object.defineProperty,zo=Object.getOwnPropertyDescriptor,Co=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?zo(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&wo(e,o,c),c};class Io extends u.o{constructor(){super(...arguments),this.disabled=!1,this.focused=!1,this.open=!1,this.color="rgba(255, 0, 0, 0.5)"}static get styles(){return[ko]}handlePointerdown(t){"touch"===t.pointerType&&(this.open=!0),this.setPointerCapture(t.pointerId)}handlePointerup(t){this.open=!1,this.releasePointerCapture(t.pointerId)}render(){return t.dy`
            <div class="color" style="background-color: ${this.color}"></div>
            <sp-color-loupe
                color=${this.color}
                ?open=${this.open&&!this.disabled}
            ></sp-color-loupe>
        `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("pointerdown",this.handlePointerdown),this.addEventListener("pointerup",this.handlePointerup),this.addEventListener("pointercancel",this.handlePointerup)}}Co([(0,d.Cb)({type:Boolean,reflect:!0})],Io.prototype,"disabled",2),Co([(0,d.Cb)({type:Boolean,reflect:!0})],Io.prototype,"focused",2),Co([(0,d.Cb)({type:Boolean,reflect:!0})],Io.prototype,"open",2),Co([(0,d.Cb)({type:String})],Io.prototype,"color",2),customElements.define("sp-color-handle",Io);const qo=t.iv`
#button{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)
);justify-content:center;line-height:var(--mod-line-height-100,var(--spectrum-line-height-100));margin:0;overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,border-color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}#button:focus{outline:none}#button::-moz-focus-inner{border:0;border-style:none;margin-block-end:-2px;margin-block-start:-2px;padding:0}#button:disabled{cursor:default}:host{--spectrum-picker-font-size:var(
--spectrum-font-size-100
);--spectrum-picker-font-weight:var(--spectrum-regular-font-weight);--spectrum-picker-placeholder-font-style:var(
--spectrum-default-font-style
);--spectrum-picker-min-inline-size:var(
--spectrum-picker-minimum-width-multiplier
);--spectrum-picker-block-size:var(--spectrum-component-height-100);--spectrum-picker-border-width:var(--spectrum-border-width-100);--spectrum-picker-border-radius:var(--spectrum-corner-radius-100);--spectrum-picker-spacing-edge-to-text:var(
--spectrum-component-edge-to-text-100
);--spectrum-picker-spacing-edge-to-text-quiet:var(
--spectrum-field-edge-to-text-quiet
);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-100);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-medium
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-medium
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-medium
);--spectrum-picker-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-picker-font-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-picker-font-color-default-open:var(
--spectrum-neutral-content-color-focus
);--spectrum-picker-font-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-picker-font-color-hover-open:var(
--spectrum-neutral-content-color-focus-hover
);--spectrum-picker-font-color-active:var(
--spectrum-neutral-content-color-down
);--spectrum-picker-font-color-key-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-picker-icon-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-picker-icon-color-default-open:var(
--spectrum-neutral-content-color-focus
);--spectrum-picker-icon-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-picker-icon-color-hover-open:var(
--spectrum-neutral-content-color-focus-hover
);--spectrum-picker-icon-color-active:var(
--spectrum-neutral-content-color-down
);--spectrum-picker-icon-color-key-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-picker-border-color-error-default:var(
--spectrum-negative-border-color-default
);--spectrum-picker-border-color-error-default-open:var(
--spectrum-negative-border-color-focus
);--spectrum-picker-border-color-error-hover:var(
--spectrum-negative-border-color-hover
);--spectrum-picker-border-color-error-hover-open:var(
--spectrum-negative-border-color-focus-hover
);--spectrum-picker-border-color-error-active:var(
--spectrum-negative-border-color-down
);--spectrum-picker-border-color-error-key-focus:var(
--spectrum-negative-border-color-key-focus
);--spectrum-picker-icon-color-error:var(--spectrum-negative-visual-color);--spectrum-picker-background-color-disabled:var(
--spectrum-disabled-background-color
);--spectrum-picker-font-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-picker-icon-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-picker-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--spectrum-picker-focus-indicator-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-picker-focus-indicator-color:var(
--spectrum-focus-indicator-color
)}:host([size=s]){--spectrum-picker-font-size:var(
--spectrum-font-size-75
);--spectrum-picker-block-size:var(--spectrum-component-height-75);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-75);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-small
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-small
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-small
)}:host([size=s][open])+.spectrum-Popover--bottom{--spectrum-picker-spacing-picker-to-popover:var(
--spectrum-component-to-menu-small
)}:host([size=m]){--spectrum-picker-font-size:var(
--spectrum-font-size-100
);--spectrum-picker-block-size:var(--spectrum-component-height-100);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-100);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-medium
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-medium
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-medium
)}:host([size=m][open])+.spectrum-Popover--bottom{--spectrum-picker-spacing-picker-to-popover:var(
--spectrum-component-to-menu-medium
)}:host([size=l]){--spectrum-picker-font-size:var(
--spectrum-font-size-200
);--spectrum-picker-block-size:var(--spectrum-component-height-200);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-200);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-large
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-large
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-large
)}:host([size=l][open])+.spectrum-Popover--bottom{--spectrum-picker-spacing-picker-to-popover:var(
--spectrum-component-to-menu-large
)}:host([size=xl]){--spectrum-picker-font-size:var(
--spectrum-font-size-300
);--spectrum-picker-block-size:var(--spectrum-component-height-300);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-300);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-extra-large
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-extra-large
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-extra-large
)}:host([size=xl][open])+.spectrum-Popover--bottom{--spectrum-picker-spacing-picker-to-popover:var(
--spectrum-component-to-menu-extra-large
)}@media (forced-colors:active){#button{--highcontrast-picker-focus-indicator-color:CanvasText;--highcontrast-picker-border-color-default:ButtonText;--highcontrast-picker-border-color-active:ButtonText;--highcontrast-picker-border-color-key-focus:Highlight;--highcontrast-picker-border-color-error-default-open:ButtonText;--highcontrast-picker-border-color-error-hover:ButtonText;--highcontrast-picker-border-color-error-active:ButtonText;--highcontrast-picker-font-color-default:ButtonText;--highcontrast-picker-font-color-default-open:ButtonText;--highcontrast-picker-font-color-key-focus:ButtonText;--highcontrast-picker-font-color-disabled:GrayText;--highcontrast-picker-background-color-default:Background;--highcontrast-picker-background-color-disabled:Background;--highcontrast-picker-icon-color-default:ButtonText;--highcontrast-picker-icon-color-default-open:ButtonText;--highcontrast-picker-icon-color-hover:ButtonText;--highcontrast-picker-icon-color-hover-open:ButtonText;--highcontrast-picker-icon-color-key-focus:Highlight;--highcontrast-picker-icon-color-error-default:ButtonText}#button:disabled,:host([disabled]) #button{border-color:GrayText;border-width:var(
--mod-picker-border-width,var(--spectrum-picker-border-width)
)}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{forced-color-adjust:none;outline:0}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{forced-color-adjust:none;outline:0}:host([quiet]) #button:focus-visible,:host([quiet][focused]) #button{forced-color-adjust:none;outline:0}}#button{background-color:var(
--highcontrast-picker-background-color-default,var(
--mod-picker-background-color-default,var(--spectrum-picker-background-color-default)
)
);block-size:var(--mod-picker-block-size,var(--spectrum-picker-block-size));border-color:var(
--highcontrast-picker-border-color-default,var(
--mod-picker-border-color-default,var(--spectrum-picker-border-color-default)
)
);border-radius:var(
--mod-picker-border-radius,var(--spectrum-picker-border-radius)
);border-style:solid;border-width:var(
--mod-picker-border-width,var(--spectrum-picker-border-width)
);color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-default,var(--spectrum-picker-font-color-default)
)
);display:flex;max-inline-size:100%;min-inline-size:var(
--mod-picker-min-inline-size,var(--spectrum-picker-min-inline-size)
);padding-block:0;padding-inline:var(
--mod-picker-spacing-edge-to-text,var(--spectrum-picker-spacing-edge-to-text)
);transition:background-color var(
--mod-picker-animation-duration,var(--spectrum-picker-animation-duration)
),box-shadow var(
--mod-picker-animation-duration,var(--spectrum-picker-animation-duration)
),border-color var(
--mod-picker-animation-duration,var(--spectrum-picker-animation-duration)
) ease-in-out}#button:after{block-size:calc(100% + var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
)*2 + var(--mod-picker-border-width, var(--spectrum-picker-border-width))*2);border-color:transparent;border-radius:calc(var(--mod-picker-border-radius, var(--spectrum-picker-border-radius)) + var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
) + var(--mod-picker-border-width, var(--spectrum-picker-border-width)));border-style:solid;border-width:var(
--mod-picker-focus-indicator-thickness,var(--spectrum-picker-focus-indicator-thickness)
);content:"";inline-size:calc(100% + var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
)*2 + var(--mod-picker-border-width, var(--spectrum-picker-border-width))*2);inset-block:0;inset-inline:0;margin-block-start:calc((var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
) + var(
--mod-picker-focus-indicator-thickness,
var(--spectrum-picker-focus-indicator-thickness)
) + var(
--mod-picker-border-width,
var(--spectrum-picker-border-width)
))*-1);margin-inline-start:calc((var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
) + var(
--mod-picker-focus-indicator-thickness,
var(--spectrum-picker-focus-indicator-thickness)
) + var(
--mod-picker-border-width,
var(--spectrum-picker-border-width)
))*-1);pointer-events:none;position:absolute}#button.focus-visible{outline:none}#button:focus-visible{outline:none}#button.focus-visible:after{border-color:var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
)}#button.focus-visible:after{border-color:var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
)}#button:focus-visible:after{border-color:var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
)}#button:hover{background-color:var(
--highcontrast-picker-background-color-default,var(
--mod-picker-background-color-hover,var(--spectrum-picker-background-color-hover)
)
);border-color:var(
--highcontrast-picker-border-color-default,var(
--mod-picker-border-color-hover,var(--spectrum-picker-border-color-hover)
)
);color:var(
--highcontrast-picker-font-color-default,var(--mod-picker-font-color-hover,(--spectrum-picker-font-color-hover))
)}#button:hover .picker{color:var(
--highcontrast-picker-icon-color-hover,var(
--mod-picker-icon-color-hover,var(--spectrum-picker-icon-color-hover)
)
)}#button:active{background-color:var(
--highcontrast-picker-background-active,var(
--mod-picker-background-color-active,var(--spectrum-picker-background-color-active)
)
);border-color:var(
--highcontrast-picker-border-color-active,var(
--mod-picker-border-active,var(--spectrum-picker-border-color-active)
)
)}#button:active:after{border-color:transparent}#button:active.placeholder #label{color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-active,var(--spectrum-picker-font-color-active)
)
)}#button.focus-visible,:host([focused]) #button{background-color:var(
--highcontrast-picker-background-color-default,var(
--mod-picker-background-color-key-focus,var(--spectrum-picker-background-color-key-focus)
)
);border-color:var(
--highcontrast-picker-border-color-key-focus,var(
--mod-picker-border-color-key-focus,var(--spectrum-picker-border-color-key-focus)
)
);border-width:var(
--mod-picker-border-width,var(--spectrum-picker-border-width)
);color:var(
--highcontrast-picker-font-color-key-focus,var(
--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)
)
)}#button.focus-visible,:host([focused]) #button{background-color:var(
--highcontrast-picker-background-color-default,var(
--mod-picker-background-color-key-focus,var(--spectrum-picker-background-color-key-focus)
)
);border-color:var(
--highcontrast-picker-border-color-key-focus,var(
--mod-picker-border-color-key-focus,var(--spectrum-picker-border-color-key-focus)
)
);border-width:var(
--mod-picker-border-width,var(--spectrum-picker-border-width)
);color:var(
--highcontrast-picker-font-color-key-focus,var(
--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)
)
)}#button:focus-visible,:host([focused]) #button{background-color:var(
--highcontrast-picker-background-color-default,var(
--mod-picker-background-color-key-focus,var(--spectrum-picker-background-color-key-focus)
)
);border-color:var(
--highcontrast-picker-border-color-key-focus,var(
--mod-picker-border-color-key-focus,var(--spectrum-picker-border-color-key-focus)
)
);border-width:var(
--mod-picker-border-width,var(--spectrum-picker-border-width)
);color:var(
--highcontrast-picker-font-color-key-focus,var(
--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)
)
)}#button.focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--highcontrast-picker-font-color-key-focus,var(
--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)
)
)}#button.focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--highcontrast-picker-font-color-key-focus,var(
--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)
)
)}#button:focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--highcontrast-picker-font-color-key-focus,var(
--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)
)
)}:host([open]) #button{background-color:var(
--highcontrast-picker-background-default-open,var(
--mod-picker-background-color-default-open,var(--spectrum-picker-background-color-default-open)
)
);border-color:var(
--highcontrast-picker-border-color-default-open,var(
--mod-picker-border-default-open,var(--spectrum-picker-border-color-default-open)
)
);color:var(
--highcontrast-picker-font-color-default-open,var(
--mod-picker-font-color-default-open,var(--spectrum-picker-font-color-default-open)
)
)}:host([open]) #button:hover{background-color:var(
--highcontrast-picker-background-color-hover-open,var(
--mod-picker-background-color-hover-open,var(--spectrum-picker-background-color-hover-open)
)
);border-color:var(
--highcontrast-picker-border-color-hover-open,var(
--mod-picker-border-color-hover-open,var(--spectrum-picker-border-color-hover-open)
)
);color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-hover-open,var(--spectrum-picker-font-color-hover-open)
)
)}:host([open]) #button:hover .picker{color:var(
--highcontrast-picker-icon-color-hover-open,var(
--mod-picker-icon-color-hover-open,var(--spectrum-picker-icon-color-hover-open)
)
)}:host([open]) #button .picker{color:var(
--highcontrast-picker-icon-color-default-open,var(
--mod-picker-icon-color-default-open,var(--spectrum-picker-icon-color-default-open)
)
)}:host([invalid]) #button{border-color:var(
--highcontrast-picker-border-color-error-default,var(
--mod-picker-border-color-error-default,var(--spectrum-picker-border-color-error-default)
)
)}:host([invalid]) #button .validation-icon{color:var(
--highcontrast-picker-icon-color-error-default,var(
--mod-picker-icon-color-error,var(--spectrum-picker-icon-color-error)
)
)}:host([invalid]) #button:hover{border-color:var(
--highcontrast-picker-border-color-error-hover,var(
--mod-picker-border-color-error-hover,var(--spectrum-picker-border-color-error-hover)
)
)}:host([invalid]) #button:active{border-color:var(
--highcontrast-picker-border-color-error-active,var(
--mod-picker-border-color-error-active,var(--spectrum-picker-border-color-error-active)
)
)}:host([invalid][open]) #button{border-color:var(
--highcontrast-picker-border-color-error-default-open,var(
--mod-picker-border-color-error-default-open,var(--spectrum-picker-border-color-error-default-open)
)
)}:host([invalid][open]) #button:hover{border-color:var(
--highcontrast-picker-border-color-error-hover-open,var(
--mod-picker-border-color-error-hover-open,var(--spectrum-picker-border-color-error-hover-open)
)
)}:host([invalid]) #button.focus-visible,:host([invalid][focused]) #button{border-color:var(
--highcontrast-picker-border-color-error-default,var(
--mod-picker-border-color-error-key-focus,var(--spectrum-picker-border-color-error-key-focus)
)
)}:host([invalid]) #button.focus-visible,:host([invalid][focused]) #button{border-color:var(
--highcontrast-picker-border-color-error-default,var(
--mod-picker-border-color-error-key-focus,var(--spectrum-picker-border-color-error-key-focus)
)
)}:host([invalid]) #button:focus-visible,:host([invalid][focused]) #button{border-color:var(
--highcontrast-picker-border-color-error-default,var(
--mod-picker-border-color-error-key-focus,var(--spectrum-picker-border-color-error-key-focus)
)
)}#button.is-loading .picker{color:var(
--highcontrast-picker-icon-color-disabled,var(
--mod-picker-icon-color-disabled,var(--spectrum-picker-icon-color-disabled)
)
)}#button:disabled,:host([disabled]) #button{background-color:var(
--highcontrast-picker-background-color-disabled,var(
--mod-picker-background-color-disabled,var(--spectrum-picker-background-color-disabled)
)
);border-color:transparent;border-width:var(
--mod-picker-border-width,var(--spectrum-picker-border-width)
);color:var(
--highcontrast-picker-font-color-disabled,var(
--mod-picker-font-color-disabled,var(--spectrum-picker-font-color-disabled)
)
);cursor:default}#button:disabled .icon,#button:disabled .picker,#button:disabled .validation-icon,:host([disabled]) #button .icon,:host([disabled]) #button .picker,:host([disabled]) #button .validation-icon{color:var(
--highcontrast-picker-icon-color-disabled,var(
--mod-picker-icon-color-disabled,var(--spectrum-picker-icon-color-disabled)
)
)}#button:disabled #label.placeholder,:host([disabled]) #button #label.placeholder{color:var(
--highcontrast-picker-font-color-disabled,var(
--mod-picker-font-color-disabled,var(--spectrum-picker-font-color-disabled)
)
)}.icon{flex-shrink:0;margin-inline-end:var(
--mod-picker-spacing-text-to-icon,var(--spectrum-picker-spacing-text-to-icon)
)}:host([quiet]) #button{inline-size:auto;min-inline-size:0}:host([quiet]) #button:disabled.focus-visible,:host([quiet][disabled]) #button.focus-visible{border-color:transparent}:host([quiet]) #button:disabled.focus-visible,:host([quiet][disabled]) #button.focus-visible{border-color:transparent}:host([quiet]) #button:disabled:focus-visible,:host([quiet][disabled]) #button:focus-visible{border-color:transparent}#label{block-size:calc(var(--mod-picker-block-size, var(--spectrum-picker-block-size)) - var(--mod-picker-border-width, var(--spectrum-picker-border-width))*2);flex:1 1 auto;font-size:var(--mod-picker-font-size,var(--spectrum-picker-font-size));line-height:calc(var(--mod-picker-block-size, var(--spectrum-picker-block-size)) - var(--mod-picker-border-width, var(--spectrum-picker-border-width))*2);overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap}#label.placeholder{color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-default,var(--spectrum-picker-font-color-default)
)
);font-style:var(
--mod-picker-placeholder-font-style,var(--spectrum-picker-placeholder-font-style)
);font-weight:var(
--mod-picker-font-weight,var(--spectrum-picker-font-weight)
);transition:color var(
--mod-picker-animation-duration,var(--spectrum-picker-animation-duration)
) ease-in-out}#label.placeholder:hover{color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-hover,var(--spectrum-picker-font-color-hover)
)
)}#label.placeholder:active{color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-active,var(--spectrum-picker-font-color-active)
)
)}.picker{color:var(
--highcontrast-picker-icon-color-default,var(
--mod-picker-icon-color-default,var(--spectrum-picker-icon-color-default)
)
);display:inline-block;flex-shrink:0;margin-inline-start:var(
--mod-picker-spacing-icon-to-disclosure-icon,var(--spectrum-picker-spacing-icon-to-disclosure-icon)
);position:relative;transition:color var(
--mod-picker-animation-duration,var(--spectrum-picker-animation-duration)
) ease-out;vertical-align:top}.picker.focus-visible{color:var(
--highcontrast-picker-icon-color-key-focus,var(
--mod-picker-icon-color-key-focus,var(--spectrum-picker-icon-color-key-focus)
)
)}.picker:focus-visible{color:var(
--highcontrast-picker-icon-color-key-focus,var(
--mod-picker-icon-color-key-focus,var(--spectrum-picker-icon-color-key-focus)
)
)}.picker:active{color:var(
--highcontrast-picker-icon-color-default,var(
--mod-picker-icon-color-active,var(--spectrum-picker-icon-color-active)
)
)}.validation-icon{margin-inline-start:var(
--mod-picker-spacing-text-to-alert-icon-inline-start,var(--spectrum-picker-spacing-text-to-alert-icon-inline-start)
)}#label~.picker{margin-inline-start:var(
--mod-picker-spacing-text-to-icon,var(--spectrum-picker-spacing-text-to-icon)
)}:host([quiet][open])+.spectrum-Popover--bottom{margin-inline-start:calc(var(
--mod-picker-popover-quiet-offset-x,
var(--spectrum-picker-popover-quiet-offset-x)
)*-1)}:host([quiet]) #button{background-color:transparent;border:none;border-radius:0;color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-default,var(--spectrum-picker-font-color-default)
)
);margin-block-start:calc(var(
--mod-picker-spacing-label-to-picker-quiet,
var(--spectrum-picker-spacing-label-to-picker-quiet)
) + 1px);padding-inline:var(
--mod-picker-spacing-edge-to-text-quiet,var(--spectrum-picker-spacing-edge-to-text-quiet)
)}:host([quiet]) #button:after{block-size:auto;border:none;inline-size:auto}:host([quiet]) #button:hover{background-color:transparent}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{background-color:transparent}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{background-color:transparent}:host([quiet]) #button:focus-visible,:host([quiet][focused]) #button{background-color:transparent}:host([quiet]) #button.focus-visible:after,:host([quiet][focused]) #button:after{border:none;border-radius:0;box-shadow:0 var(
--mod-picker-focus-indicator-thickness,var(--spectrum-picker-focus-indicator-thickness)
) 0 0 var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
);margin:calc((var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
) + var(
--mod-picker-border-width,
var(--spectrum-picker-border-width)
))*-1) 0}:host([quiet]) #button.focus-visible:after,:host([quiet][focused]) #button:after{border:none;border-radius:0;box-shadow:0 var(
--mod-picker-focus-indicator-thickness,var(--spectrum-picker-focus-indicator-thickness)
) 0 0 var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
);margin:calc((var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
) + var(
--mod-picker-border-width,
var(--spectrum-picker-border-width)
))*-1) 0}:host([quiet]) #button:focus-visible:after,:host([quiet][focused]) #button:after{border:none;border-radius:0;box-shadow:0 var(
--mod-picker-focus-indicator-thickness,var(--spectrum-picker-focus-indicator-thickness)
) 0 0 var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
);margin:calc((var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
) + var(
--mod-picker-border-width,
var(--spectrum-picker-border-width)
))*-1) 0}:host([quiet]) #button:active,:host([quiet][open]) #button{background-color:transparent}:host([quiet]) #button:disabled,:host([quiet][disabled]) #button{background-color:transparent}:host{--spectrum-picker-background-color-default:var(
--system-spectrum-picker-background-color-default
);--spectrum-picker-background-color-default-open:var(
--system-spectrum-picker-background-color-default-open
);--spectrum-picker-background-color-active:var(
--system-spectrum-picker-background-color-active
);--spectrum-picker-background-color-hover:var(
--system-spectrum-picker-background-color-hover
);--spectrum-picker-background-color-hover-open:var(
--system-spectrum-picker-background-color-hover-open
);--spectrum-picker-background-color-key-focus:var(
--system-spectrum-picker-background-color-key-focus
);--spectrum-picker-border-color-default:var(
--system-spectrum-picker-border-color-default
);--spectrum-picker-border-color-default-open:var(
--system-spectrum-picker-border-color-default-open
);--spectrum-picker-border-color-hover:var(
--system-spectrum-picker-border-color-hover
);--spectrum-picker-border-color-hover-open:var(
--system-spectrum-picker-border-color-hover-open
);--spectrum-picker-border-color-active:var(
--system-spectrum-picker-border-color-active
);--spectrum-picker-border-color-key-focus:var(
--system-spectrum-picker-border-color-key-focus
)}:host{display:inline-flex;max-width:100%;min-width:var(--spectrum-picker-min-width);vertical-align:top;width:var(--spectrum-picker-width)}:host([quiet]){min-width:0;width:auto}:host([size]){--spectrum-picker-width:var(--spectrum-global-dimension-size-2400)}#button{max-width:100%;min-width:100%;width:100%}#icon:not([hidden]){display:inline-flex}:host([readonly]) #button{-webkit-user-select:inherit;user-select:inherit}sp-popover{display:none}.picker,.validation-icon{flex-shrink:0}:host([focused]:not([quiet])) #button #label.placeholder{color:var(
--spectrum-picker-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([focused]:not([quiet])) #button .picker{color:var(
--spectrum-picker-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}.visually-hidden{clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}:host([dir=ltr]) #label.visually-hidden+.picker{margin-left:auto}:host([dir=rtl]) #label.visually-hidden+.picker{margin-right:auto}
`;var Eo=a(731);customElements.define("sp-icon-chevron100",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Chevron100"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M3 9.95a.875.875 0 01-.615-1.498L5.88 5 2.385 1.547A.875.875 0 013.615.302L7.74 4.377a.876.876 0 010 1.246L3.615 9.698A.872.872 0 013 9.95z"
    />
  </svg>`)()}});const So=async(t,e,o,r)=>{const{Overlay:s}=await a.e(749).then(a.bind(a,749));return s.open(t,e,o,r)};class $o extends Event{constructor({root:t}){super("sp-overlay-close",{bubbles:!0,composed:!0}),this.root=t}}const Ao=t.iv`
.checkmark{align-self:flex-start;display:none;opacity:1;transform:scale(1)}:host([dir=ltr]) .checkmark{padding-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .checkmark{padding-right:var(
--spectrum-listitem-texticon-icon-gap
)}.checkmark{flex-grow:0;margin-top:calc(var(--spectrum-listitem-texticon-ui-icon-margin-top) - var(--spectrum-listitem-texticon-padding-y) + 1px)}:host([dir=ltr]) .chevron{padding-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .chevron{padding-right:var(
--spectrum-listitem-texticon-icon-gap
)}.chevron{flex-grow:0;margin-top:calc(var(--spectrum-listitem-texticon-ui-icon-margin-top) - var(--spectrum-listitem-texticon-padding-y) + 1px)}:host([dir=ltr]){border-left:var(--spectrum-listitem-texticon-focus-indicator-size) solid transparent}:host([dir=rtl]){border-right:var(--spectrum-listitem-texticon-focus-indicator-size) solid transparent}:host{align-items:center;box-sizing:border-box;cursor:pointer;display:flex;font-size:var(--spectrum-listitem-texticon-text-size);font-style:normal;font-weight:var(--spectrum-listitem-texticon-text-font-weight);margin:0;min-height:var(--spectrum-listitem-texticon-height);padding:var(--spectrum-listitem-texticon-padding-y) var(--spectrum-listitem-texticon-padding-right) var(--spectrum-listitem-texticon-padding-y) var(--spectrum-listitem-texticon-padding-left);position:relative;text-decoration:none}:host(:focus){outline:none}:host([dir=ltr][selected]){padding-right:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([dir=rtl][selected]){padding-left:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([selected]) .checkmark{display:block}.icon,::slotted([slot=icon]){align-self:flex-start;flex-shrink:0}:host([dir=ltr]) .icon+#label,:host([dir=ltr]) slot[name=icon]+#label{margin-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .icon+#label,:host([dir=rtl]) slot[name=icon]+#label{margin-right:var(
--spectrum-listitem-texticon-icon-gap
)}.icon+#label,slot[name=icon]+#label{width:calc(100% - var(--spectrum-listitem-texticon-ui-icon-width) - var(--spectrum-listitem-texticon-icon-gap) - var(--spectrum-listitem-textthumbnail-padding-left) - var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
))}:host([no-wrap]) #label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) .checkmark,:host([dir=ltr]) .chevron{padding-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .checkmark,:host([dir=rtl]) .chevron{padding-right:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .chevron{transform:matrix(-1,0,0,1,0,0)}:host{background-color:var(
--spectrum-listitem-m-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-listitem-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([dir=ltr].focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=ltr].focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=ltr]:focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl].focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl].focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl]:focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host(.focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(.focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(.is-highlighted),:host(.is-open),:host(:focus),:host(:hover){background-color:var(
--spectrum-listitem-m-texticon-background-color-hover,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([selected]){color:var(
--spectrum-listitem-m-texticon-text-color-selected,var(--spectrum-alias-component-text-color-default)
)}:host([selected]) .checkmark{color:var(
--spectrum-listitem-m-texticon-ui-icon-color-selected,var(--spectrum-alias-icon-color-selected)
)}:host(:active),:host([active]){background-color:var(
--spectrum-listitem-m-texticon-background-color-down,var(--spectrum-alias-background-color-hover-overlay)
)}:host([disabled]){background-color:var(
--spectrum-listitem-m-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);background-image:none;color:var(
--spectrum-listitem-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
);cursor:default}@media (forced-colors:active){:host{--spectrum-listheading-text-color:ButtonText;--spectrum-listitem-m-texticon-background-color:ButtonFace;--spectrum-listitem-m-texticon-background-color-disabled:ButtonFace;--spectrum-listitem-m-texticon-background-color-down:ButtonFace;--spectrum-listitem-m-texticon-background-color-hover:Highlight;--spectrum-listitem-m-texticon-background-color-key-focus:Highlight;--spectrum-listitem-m-texticon-focus-indicator-color:Highlight;--spectrum-listitem-m-texticon-text-color:ButtonText;--spectrum-listitem-m-texticon-text-color-disabled:GrayText;--spectrum-listitem-m-texticon-text-color-hover:HighlightText;--spectrum-listitem-m-texticon-text-color-key-focus:HighlightText;--spectrum-listitem-m-texticon-text-color-selected:ButtonText;--spectrum-listitem-m-texticon-ui-icon-color-selected:Highlight;forced-color-adjust:none}:host(:not([disabled]).focus-visible),:host(:not([disabled]).is-highlighted),:host(:not([disabled]).is-open),:host(:not([disabled]):focus),:host(:not([disabled]):hover),:host(:not([disabled])[focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:not([disabled]).is-highlighted),:host(:not([disabled]).is-open),:host(:not([disabled]):focus),:host(:not([disabled]):focus-visible),:host(:not([disabled]):hover),:host(:not([disabled])[focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:not([disabled]).focus-visible[selected]) .checkmark,:host(:not([disabled]).is-highlighted[selected]) .checkmark,:host(:not([disabled]).is-open[selected]) .checkmark,:host(:not([disabled]):focus[selected]) .checkmark,:host(:not([disabled]):hover[selected]) .checkmark,:host(:not([disabled])[focused][selected]) .checkmark{color:HighlightText}:host(:not([disabled]).is-highlighted[selected]) .checkmark,:host(:not([disabled]).is-open[selected]) .checkmark,:host(:not([disabled]):focus-visible[selected]) .checkmark,:host(:not([disabled]):focus[selected]) .checkmark,:host(:not([disabled]):hover[selected]) .checkmark,:host(:not([disabled])[focused][selected]) .checkmark{color:HighlightText}}#label{flex:1 1 auto;-webkit-hyphens:auto;hyphens:auto;line-height:var(--spectrum-listitem-texticon-label-line-height);overflow-wrap:break-word;width:calc(100% - var(--spectrum-listitem-texticon-ui-icon-width) - var(--spectrum-listitem-texticon-icon-gap))}.spectrum-Menu-itemLabel--wrapping{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([hidden]){display:none}:host([disabled]){pointer-events:none}#button{inset:0;position:absolute}::slotted([slot=value]){align-self:start}:host([dir=ltr]) ::slotted([slot=value]){margin-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) ::slotted([slot=value]){margin-right:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=ltr]) [icon-only]::slotted(:last-of-type){margin-right:auto}:host([dir=rtl]) [icon-only]::slotted(:last-of-type){margin-left:auto}:host([dir=ltr]) ::slotted([slot=icon]){margin-right:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) ::slotted([slot=icon]){margin-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) slot[name=icon]+#label{margin-right:0}:host([dir=ltr]) slot[name=icon]+#label{margin-left:0}:host([dir=rtl]) .chevron{padding-left:var(--spectrum-listitem-texticon-icon-gap);padding-right:0}
`;var _o=Object.defineProperty,To=Object.getOwnPropertyDescriptor,Uo=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?To(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&_o(e,o,c),c};class Po extends Event{constructor(){super("sp-menu-item-removed",{bubbles:!0,composed:!0}),this.focused=!1}get item(){return this._item}reset(t){this._item=t}}class jo extends Event{constructor(){super("sp-menu-item-added-or-updated",{bubbles:!0,composed:!0})}set focusRoot(t){this.item.menuData.focusRoot=this.item.menuData.focusRoot||t}set selectionRoot(t){this.item.menuData.selectionRoot=this.item.menuData.selectionRoot||t}get item(){return this._item}set currentAncestorWithSelects(t){this._currentAncestorWithSelects=t}get currentAncestorWithSelects(){return this._currentAncestorWithSelects}reset(t){this._item=t,this._currentAncestorWithSelects=void 0,t.menuData={focusRoot:void 0,selectionRoot:void 0}}}const Lo=new jo,Oo=new Po,Bo=class extends(ht(L)){constructor(){super(),this.isInSubmenu=!1,this.active=!1,this.focused=!1,this.selected=!1,this._value="",this.hasSubmenu=!1,this.noWrap=!1,this.open=!1,this.handleSubmenuChange=()=>{var t;null==(t=this.menuData.selectionRoot)||t.selectOrToggleItem(this)},this.handleSubmenuPointerenter=()=>{this.leaveTimeout&&(clearTimeout(this.leaveTimeout),delete this.leaveTimeout)},this.menuData={focusRoot:void 0,selectionRoot:void 0},this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0}),new K(this,{config:{characterData:!0,childList:!0,subtree:!0},callback:()=>{this.breakItemChildrenCache()}})}static get styles(){return[Ao,ae,Fe]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return this.itemChildren.content.reduce(((t,e)=>t+(e.textContent||"").trim()),"")}get focusElement(){return this}get itemChildren(){var t,e;if(this._itemChildren)return this._itemChildren;const o=null==(t=this.shadowRoot)?void 0:t.querySelector('slot[name="icon"]'),r=o?o.assignedElements().map((t=>{const e=t.cloneNode(!0);return e.removeAttribute("slot"),e.classList.toggle("icon"),e})):[],s=null==(e=this.shadowRoot)?void 0:e.querySelector("slot:not([name])"),c=s?s.assignedNodes().map((t=>t.cloneNode(!0))):[];return this._itemChildren={icon:r,content:c},this._itemChildren}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;return this.anchorElement&&(this.anchorElement.click(),t=!0),t}breakItemChildrenCache(){this._itemChildren=void 0,this.triggerUpdate()}render(){return t.dy`
            <slot name="icon"></slot>
            <div id="label">
                <slot id="slot"></slot>
            </div>
            <slot name="value"></slot>
            ${this.selected?t.dy`
                      <sp-icon-checkmark100
                          id="selected"
                          class="spectrum-UIIcon-Checkmark100 icon checkmark"
                      ></sp-icon-checkmark100>
                  `:t.dy``}
            ${this.href&&this.href.length>0?super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"}):t.dy``}
            <slot
                hidden
                name="submenu"
                @slotchange=${this.manageSubmenu}
            ></slot>
            ${this.hasSubmenu?t.dy`
                      <sp-icon-chevron100
                          class="spectrum-UIIcon-ChevronRight100 chevron icon"
                      ></sp-icon-chevron100>
                  `:t.dy``}
        `}manageSubmenu(t){const e=t.target.assignedElements({flatten:!0});this.hasSubmenu=this.open||!!e.length}handleRemoveActive(t){"pointerleave"===t.type&&this.hasSubmenu||this.hasSubmenu||this.open||(this.active=!1)}handlePointerdown(){this.active=!0}firstUpdated(t){super.firstUpdated(t),this.setAttribute("tabindex","-1"),this.addEventListener("pointerdown",this.handlePointerdown),this.hasAttribute("id")||(this.id="sp-menu-item-"+Bo.instanceCount++),this.addEventListener("pointerenter",this.closeOverlaysForRoot)}closeOverlaysForRoot(){if(this.open)return;const t=new $o({root:this.menuData.focusRoot});this.dispatchEvent(t)}handleSubmenuClick(){this.openOverlay()}handlePointerenter(){if(this.leaveTimeout)return clearTimeout(this.leaveTimeout),void delete this.leaveTimeout;this.openOverlay()}handlePointerleave(){this.hasSubmenu&&this.open&&(this.leaveTimeout=setTimeout((()=>{delete this.leaveTimeout,this.closeOverlay&&this.closeOverlay()}),100))}async openOverlay(){if(!this.hasSubmenu||this.open||this.disabled)return;this.open=!0,this.active=!0;const t=this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements()[0];t.addEventListener("pointerenter",this.handleSubmenuPointerenter),t.addEventListener("change",this.handleSubmenuChange);const e=document.createElement("sp-popover"),o=(0,Eo.G)([t],e,{position:"beforeend",prepareCallback:t=>{const e=t.slot;return t.tabIndex=0,t.removeAttribute("slot"),t.isSubmenu=!0,t=>{t.tabIndex=-1,t.slot=e,t.isSubmenu=!1}}}),r=So(this,"click",e,{placement:this.isLTR?"right-start":"left-start",receivesFocus:"auto",root:this.menuData.focusRoot}),s=async()=>{delete this.closeOverlay,(await r)()};this.closeOverlay=s,this.addEventListener("sp-closed",(t=>{t.stopPropagation(),delete this.closeOverlay,o(),this.open=!1,this.active=!1}),{once:!0}),e.addEventListener("change",s)}updateAriaSelected(){const t=this.getAttribute("role");"option"===t?this.setAttribute("aria-selected",this.selected?"true":"false"):("menuitemcheckbox"===t||"menuitemradio"===t)&&this.setAttribute("aria-checked",this.selected?"true":"false")}setRole(t){this.setAttribute("role",t),this.updateAriaSelected()}updated(t){super.updated(t),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive),this.addEventListener("pointercancel",this.handleRemoveActive)):(this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive),this.removeEventListener("pointercancel",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1),t.has("selected")&&this.updateAriaSelected(),t.has("hasSubmenu")&&(this.hasSubmenu?(this.addEventListener("click",this.handleSubmenuClick),this.addEventListener("pointerenter",this.handlePointerenter),this.addEventListener("pointerleave",this.handlePointerleave)):this.closeOverlay||(this.removeEventListener("click",this.handleSubmenuClick),this.removeEventListener("pointerenter",this.handlePointerenter),this.removeEventListener("pointerleave",this.handlePointerleave)))}connectedCallback(){super.connectedCallback(),this.isInSubmenu=!!this.closest('[slot="submenu"]'),!this.isInSubmenu&&(Lo.reset(this),this.dispatchEvent(Lo),this._parentElement=this.parentElement)}disconnectedCallback(){var t;Oo.reset(this),this.isInSubmenu||null==(t=this._parentElement)||t.dispatchEvent(Oo),this.isInSubmenu=!1,super.disconnectedCallback()}async triggerUpdate(){this.isInSubmenu||(await new Promise((t=>requestAnimationFrame(t))),Lo.reset(this),this.dispatchEvent(Lo))}};let Do=Bo;Do.instanceCount=0,Uo([(0,d.Cb)({type:Boolean,reflect:!0})],Do.prototype,"active",2),Uo([(0,d.Cb)({type:Boolean,reflect:!0})],Do.prototype,"focused",2),Uo([(0,d.Cb)({type:Boolean,reflect:!0})],Do.prototype,"selected",2),Uo([(0,d.Cb)({type:String})],Do.prototype,"value",1),Uo([(0,d.Cb)({type:Boolean})],Do.prototype,"hasSubmenu",2),Uo([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"no-wrap",hasChanged:()=>!1})],Do.prototype,"noWrap",2),Uo([(0,d.IO)(".anchor")],Do.prototype,"anchorElement",2),Uo([(0,d.Cb)({type:Boolean})],Do.prototype,"open",2);const Fo=t.iv`
:host{--spectrum-menu-margin-x:var(
--spectrum-global-dimension-size-40
);--spectrum-listitem-texticon-heading-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-listitem-texticon-heading-text-font-weight:400;--spectrum-listitem-texticon-heading-text-transform:uppercase;--spectrum-listitem-texticon-heading-letter-spacing:0.06em;--spectrum-listitem-texticon-heading-margin:var(
--spectrum-global-dimension-size-75
) 0 0 0;--spectrum-listitem-texticon-heading-padding:0 var(--spectrum-global-dimension-size-450) 0 var(--spectrum-global-dimension-size-150);--spectrum-listitem-texticon-padding-y:var(
--spectrum-global-dimension-size-85
);--spectrum-listitem-texticon-selectable-padding-right:calc(var(--spectrum-listitem-texticon-ui-icon-width) + var(--spectrum-listitem-texticon-ui-icon-gap) + var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
));--spectrum-listitem-texticon-label-line-height:1.3;--spectrum-listitem-texticon-heading-line-height:var(
--spectrum-alias-body-text-line-height,var(--spectrum-global-font-line-height-medium)
)}:host{--spectrum-listitem-texticon-padding-left:var(
--spectrum-listitem-m-texticon-padding-left
);--spectrum-listitem-textthumbnail-padding-left:var(
--spectrum-listitem-m-textthumbnail-padding-left
);--spectrum-listitem-texticon-text-size:var(
--spectrum-listitem-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-listitem-texticon-text-font-weight:var(
--spectrum-listitem-m-texticon-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-listitem-texticon-icon-gap:var(
--spectrum-listitem-m-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-listitem-texticon-divider-padding:var(
--spectrum-listitem-m-texticon-divider-padding,var(--spectrum-global-dimension-static-size-40)
);--spectrum-listitem-texticon-ui-icon-margin-top:var(
--spectrum-listitem-m-texticon-ui-icon-margin-top,var(--spectrum-global-dimension-size-125)
);--spectrum-listitem-texticon-ui-icon-width:var(
--spectrum-listitem-m-texticon-ui-icon-width,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-listitem-texticon-ui-icon-gap:var(
--spectrum-listitem-m-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-listitem-texticon-padding-right:var(
--spectrum-listitem-m-texticon-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-listitem-texticon-focus-indicator-size:var(
--spectrum-listitem-m-texticon-focus-indicator-size,var(--spectrum-alias-border-size-thick)
);--spectrum-listitem-texticon-height:var(
--spectrum-listitem-m-texticon-height,var(--spectrum-global-dimension-size-400)
)}:host{box-sizing:border-box;display:inline-block;list-style-type:none;margin-bottom:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);margin-left:0;margin-right:0;margin-top:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);overflow:auto;padding:0}:host([dir=ltr][selects]) ::slotted(sp-menu-item){padding-right:var(
--spectrum-listitem-texticon-selectable-padding-right
)}:host([dir=rtl][selects]) ::slotted(sp-menu-item){padding-left:var(
--spectrum-listitem-texticon-selectable-padding-right
)}:host([dir=ltr][selects]) ::slotted(sp-menu-item[selected]){padding-right:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([dir=rtl][selects]) ::slotted(sp-menu-item[selected]){padding-left:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}::slotted(sp-menu){display:block}:host{--spectrum-listheading-text-color:var(
--spectrum-global-color-gray-700
)}:host{background-color:var(
--spectrum-listitem-m-texticon-background-color,var(--spectrum-alias-background-color-transparent)
)}:host{--spectrum-listitem-selectable-padding-right:calc(var(--spectrum-global-dimension-size-100) + var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-listitem-icon-gap));display:inline-flex;flex-direction:column;width:var(--swc-menu-width)}:host(:focus){outline:none}::slotted(*){--swc-menu-width:100%;flex-shrink:0}
`;var Mo=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,Ho=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?Ro(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&Mo(e,o,c),c};function No(t,e){return!!e&&(t===e||t.contains(e))}class Vo extends u.o{constructor(){super(),this.isSubmenu=!1,this.label="",this.value="",this.valueSeparator=",",this.selected=[],this.selectedItems=[],this.childItemSet=new Set,this.focusedItemIndex=0,this.focusInItemIndex=0,this.selectedItemsMap=new Map,this._willUpdateItems=!1,this._notFirstUpdated=!1,this.cacheUpdated=Promise.resolve(),this.addEventListener("sp-menu-item-added-or-updated",this.onSelectableItemAddedOrUpdated),this.addEventListener("sp-menu-item-added-or-updated",this.onFocusableItemAddedOrUpdated,{capture:!0}),this.addEventListener("sp-menu-item-removed",this.removeChildItem),this.addEventListener("click",this.onClick),this.addEventListener("focusin",this.handleFocusin)}static get styles(){return[Fo]}get childItems(){return this.cachedChildItems||(this.cachedChildItems=this.updateCachedMenuItems()),this.cachedChildItems}updateCachedMenuItems(){this.cachedChildItems=[];const t=this.menuSlot?this.menuSlot.assignedElements({flatten:!0}):[];for(const e of t){const t=e instanceof Do?[e]:[...e.querySelectorAll("*")];for(const e of t)this.childItemSet.has(e)&&this.cachedChildItems.push(e)}return this.cachedChildItems}get childRole(){if("listbox"===this.resolvedRole)return"option";switch(this.resolvedSelects){case"single":return"menuitemradio";case"multiple":return"menuitemcheckbox";default:return"menuitem"}}get ownRole(){return"menu"}onFocusableItemAddedOrUpdated(t){var e;t.item.menuData.focusRoot&&(this.tabIndex=-1),t.focusRoot=this,this.addChildItem(t.item),"inherit"===this.selects?(this.resolvedSelects="inherit",this.resolvedRole=(null==(e=t.currentAncestorWithSelects)?void 0:e.getAttribute("role"))||this.getAttribute("role")||void 0):this.selects?(this.resolvedRole=this.getAttribute("role")||void 0,this.resolvedSelects=this.selects,t.currentAncestorWithSelects=this):(this.resolvedRole=this.getAttribute("role")||void 0,this.resolvedSelects="none"===this.resolvedRole?"ignore":"none")}onSelectableItemAddedOrUpdated(t){("single"===this.resolvedSelects||"multiple"===this.resolvedSelects||!this.selects&&"ignore"!==this.resolvedSelects)&&!t.item.menuData.selectionRoot&&(t.item.setRole(this.childRole),t.selectionRoot=this)}addChildItem(t){this.childItemSet.add(t),this.handleItemsChanged()}async removeChildItem(t){this.childItemSet.delete(t.item),this.cachedChildItems=void 0,t.item.focused&&(this.handleItemsChanged(),await this.updateComplete,this.focus())}focus({preventScroll:t}={}){if(!this.childItems.length||this.childItems.every((t=>t.disabled)))return;if(this.childItems.some((t=>t.menuData.focusRoot!==this)))return void super.focus({preventScroll:t});this.focusMenuItemByOffset(0),super.focus({preventScroll:t});const e=this.querySelector("[selected]");e&&!t&&e.scrollIntoView({block:"nearest"})}onClick(t){if(t.defaultPrevented)return;const e=t.composedPath().find((t=>t instanceof Element&&t.getAttribute("role")===this.childRole));null!=e&&e.href&&e.href.length?this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})):(null==e?void 0:e.menuData.selectionRoot)===this&&this.childItems.length&&(t.preventDefault(),e.hasSubmenu||e.open||(this.selectOrToggleItem(e),this.prepareToCleanUp()))}handleFocusin(t){var e;const o=No(this,t.relatedTarget);if(o||this.childItems.some((t=>t.menuData.focusRoot!==this)))return;const r=this.getRootNode().activeElement,s=(null==(e=this.childItems[this.focusedItemIndex])?void 0:e.menuData.selectionRoot)||this;if((r!==s||!o)&&(s.focus({preventScroll:!0}),r&&0===this.focusedItemIndex)){const t=this.childItems.findIndex((t=>t===r));t>0&&this.focusMenuItemByOffset(t)}this.startListeningToKeyboard()}startListeningToKeyboard(){this.addEventListener("keydown",this.handleKeydown),this.addEventListener("focusout",this.handleFocusout)}handleFocusout(t){if(No(this,t.relatedTarget))t.composedPath()[0].focused=!1;else{if(this.stopListeningToKeyboard(),t.target===this&&this.childItems.some((t=>t.menuData.focusRoot===this))){const t=this.childItems[this.focusedItemIndex];t&&(t.focused=!1)}this.removeAttribute("aria-activedescendant")}}stopListeningToKeyboard(){this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)}async selectOrToggleItem(t){const e=this.resolvedSelects,o=new Map(this.selectedItemsMap),r=this.selected.slice(),s=this.selectedItems.slice(),c=this.value;if(this.childItems[this.focusedItemIndex].focused=!1,this.focusedItemIndex=this.childItems.indexOf(t),this.forwardFocusVisibleToItem(t),"multiple"===e){this.selectedItemsMap.has(t)?this.selectedItemsMap.delete(t):this.selectedItemsMap.set(t,!0);const e=[],o=[];this.childItemSet.forEach((t=>{t.menuData.selectionRoot===this&&this.selectedItemsMap.has(t)&&(e.push(t.value),o.push(t))})),this.selected=e,this.selectedItems=o,this.value=this.selected.join(this.valueSeparator)}else this.selectedItemsMap.clear(),this.selectedItemsMap.set(t,!0),this.value=t.value,this.selected=[t.value],this.selectedItems=[t];if(await this.updateComplete,!this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0})))return this.selected=r,this.selectedItems=s,this.selectedItemsMap=o,void(this.value=c);if("single"===e){for(const e of o.keys())e!==t&&(e.selected=!1);t.selected=!0}else"multiple"===e&&(t.selected=!t.selected)}navigateWithinMenu(t){const{code:e}=t,o=this.childItems[this.focusedItemIndex],r="ArrowDown"===e?1:-1,s=this.focusMenuItemByOffset(r);s!==o&&(t.preventDefault(),s.scrollIntoView({block:"nearest"}))}navigateBetweenRelatedMenus(t){const e=this.isLTR&&"ArrowRight"===t||!this.isLTR&&"ArrowLeft"===t,o=this.isLTR&&"ArrowLeft"===t||!this.isLTR&&"ArrowRight"===t;if(e){const t=this.childItems[this.focusedItemIndex];null!=t&&t.hasSubmenu&&(this.blur(),t.openOverlay())}else o&&this.isSubmenu&&this.dispatchEvent(new Event("close",{bubbles:!0}))}handleKeydown(t){var e;const{code:o}=t;if("Tab"!==o){if("Space"===o){const t=this.childItems[this.focusedItemIndex];if(null!=t&&t.hasSubmenu)return this.blur(),void t.openOverlay()}"Space"!==o&&"Enter"!==o?"ArrowDown"!==o&&"ArrowUp"!==o?this.navigateBetweenRelatedMenus(o):this.navigateWithinMenu(t):null==(e=this.childItems[this.focusedItemIndex])||e.click()}else this.prepareToCleanUp()}focusMenuItemByOffset(t){const e=t||1;this.childItems[this.focusedItemIndex].focused=!1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+t)%this.childItems.length;let o=this.childItems[this.focusedItemIndex],r=this.childItems.length;for(;o.disabled&&r;)r-=1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+e)%this.childItems.length,o=this.childItems[this.focusedItemIndex];return null!=o&&o.disabled||this.forwardFocusVisibleToItem(o),o}prepareToCleanUp(){document.addEventListener("focusout",(()=>{requestAnimationFrame((()=>{const t=this.childItems[this.focusedItemIndex];t&&(t.focused=!1,this.updateSelectedItemIndex())}))}),{once:!0})}updateSelectedItemIndex(){let t=0;const e=new Map,o=[],r=[];let s=this.childItems.length;for(;s;){s-=1;const c=this.childItems[s];c.menuData.selectionRoot===this&&(c.selected&&(t=s,e.set(c,!0),o.unshift(c.value),r.unshift(c)),s!==t&&(c.focused=!1))}r.map(((t,e)=>{e>0&&(t.focused=!1)})),this.selectedItemsMap=e,this.selected=o,this.selectedItems=r,this.value=this.selected.join(this.valueSeparator),this.focusedItemIndex=t,this.focusInItemIndex=t}handleItemsChanged(){if(this.cachedChildItems=void 0,!this._willUpdateItems){let t=()=>{};this.cacheUpdated=new Promise((e=>t=e)),this._willUpdateItems=!0,window.requestAnimationFrame((()=>{void 0===this.cachedChildItems&&(this.updateSelectedItemIndex(),this.updateItemFocus()),this._willUpdateItems=!1,t()}))}}updateItemFocus(){if(0==this.childItems.length)return;const t=this.childItems[this.focusInItemIndex];this.getRootNode().activeElement===t.menuData.focusRoot&&this.forwardFocusVisibleToItem(t)}forwardFocusVisibleToItem(t){t.menuData.focusRoot===this&&(t.focused=this.hasVisibleFocusInTree(),this.setAttribute("aria-activedescendant",t.id),t.menuData.selectionRoot&&t.menuData.selectionRoot!==this&&t.menuData.selectionRoot.focus())}render(){return t.dy`
            <slot></slot>
        `}firstUpdated(t){if(super.firstUpdated(t),!this.hasAttribute("tabindex")){const t=this.getAttribute("role");"group"===t?this.tabIndex=-1:"none"!==t&&(this.tabIndex=0)}const e=[new Promise((t=>requestAnimationFrame((()=>t(!0)))))];[...this.children].forEach((t=>{"sp-menu-item"===t.localName&&e.push(t.updateComplete)})),this.childItemsUpdated=Promise.all(e)}updated(t){super.updated(t),t.has("selects")&&this._notFirstUpdated&&this.selectsChanged(),t.has("label")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label")),this._notFirstUpdated=!0}selectsChanged(){const t=[new Promise((t=>requestAnimationFrame((()=>t(!0)))))];this.childItemSet.forEach((e=>{t.push(e.triggerUpdate())})),this.childItemsUpdated=Promise.all(t)}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role",this.ownRole),this.updateComplete.then((()=>this.updateItemFocus()))}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.childItemsUpdated,await this.cacheUpdated,t}}Ho([(0,d.Cb)({type:String,reflect:!0})],Vo.prototype,"label",2),Ho([(0,d.Cb)({type:String,reflect:!0})],Vo.prototype,"selects",2),Ho([(0,d.Cb)({type:String})],Vo.prototype,"value",2),Ho([(0,d.Cb)({type:String,attribute:"value-separator"})],Vo.prototype,"valueSeparator",2),Ho([(0,d.Cb)({attribute:!1})],Vo.prototype,"selected",2),Ho([(0,d.Cb)({attribute:!1})],Vo.prototype,"selectedItems",2),Ho([(0,d.IO)("slot:not([name])")],Vo.prototype,"menuSlot",2),customElements.define("sp-menu",Vo);const Ko=t.iv`
:host{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host{--spectrum-dialog-confirm-background-entry-animation-delay:0ms;--spectrum-dialog-confirm-background-exit-animation-ease:cubic-bezier(0.5,0,1,1);--spectrum-dialog-confirm-background-entry-animation-ease:cubic-bezier(0,0,0.4,1)}:host{bottom:0;left:0;overflow:hidden;position:fixed;right:0;top:0;transition:opacity var(
--spectrum-dialog-confirm-background-exit-animation-duration,var(--spectrum-global-animation-duration-300)
) var(
--spectrum-dialog-confirm-background-exit-animation-ease,var(--spectrum-global-animation-linear)
) var(
--spectrum-dialog-confirm-background-exit-animation-delay,var(--spectrum-global-animation-duration-200)
),visibility 0ms linear calc(var(
--spectrum-dialog-confirm-background-exit-animation-delay,
var(--spectrum-global-animation-duration-200)
) + var(
--spectrum-dialog-confirm-background-exit-animation-duration,
var(--spectrum-global-animation-duration-300)
));z-index:1}:host([open]){transition:opacity var(
--spectrum-dialog-confirm-background-entry-animation-duration,var(--spectrum-global-animation-duration-600)
) var(
--spectrum-dialog-confirm-background-entry-animation-ease,var(--spectrum-global-animation-linear)
) var(--spectrum-dialog-confirm-background-entry-animation-delay,0ms)}:host{background:var(
--spectrum-dialog-confirm-overlay-background-color,var(--spectrum-alias-background-color-modal-overlay)
)}
`;var Go=Object.defineProperty;Object.getOwnPropertyDescriptor;class Wo extends u.o{constructor(){super(...arguments),this.open=!1}static get styles(){return[Ko]}render(){return t.dy``}}((t,e,o,r)=>{for(var s,c=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(c=s(e,o,c)||c);c&&Go(e,o,c)})([(0,d.Cb)({type:Boolean,reflect:!0})],Wo.prototype,"open"),customElements.define("sp-underlay",Wo);var Yo=a(171);class Zo{constructor(t,e){this.key=Symbol("match-media-key"),this.matches=!1,this.host=t,this.host.addController(this),this.media=window.matchMedia(e),this.matches=this.media.matches,this.onChange=this.onChange.bind(this),t.addController(this)}hostConnected(){var t;null==(t=this.media)||t.addEventListener("change",this.onChange)}hostDisconnected(){var t;null==(t=this.media)||t.removeEventListener("change",this.onChange)}onChange(t){this.matches!==t.matches&&(this.matches=t.matches,this.host.requestUpdate(this.key,!this.matches))}}const Xo=t.iv`
.modal{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]) .modal{opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host{--spectrum-dialog-confirm-exit-animation-delay:0ms;--spectrum-dialog-fullscreen-margin:32px;--spectrum-dialog-max-height:90vh}.modal{border-radius:var(
--spectrum-dialog-confirm-border-radius,var(--spectrum-alias-component-border-radius)
);max-height:var(--spectrum-dialog-max-height);outline:none;overflow:hidden;pointer-events:auto;transform:translateY(var(
--spectrum-dialog-confirm-entry-animation-distance,var(--spectrum-global-dimension-size-250)
));transition:opacity var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0ms),visibility 0ms linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0ms) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
)),transform 0ms linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0ms) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
));z-index:2}:host([open]) .modal{transform:translateY(0);transition:transform var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
),opacity var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
)}@media only screen and (max-device-height:350px),only screen and (max-device-width:400px){:host([responsive]) .modal{border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}}.fullscreen{bottom:var(--spectrum-dialog-fullscreen-margin);left:var(
--spectrum-dialog-fullscreen-margin
);right:var(--spectrum-dialog-fullscreen-margin);top:var(--spectrum-dialog-fullscreen-margin)}.fullscreen,.fullscreenTakeover{max-height:none;max-width:none;position:fixed}.fullscreenTakeover{border:none;border-radius:0;bottom:0;box-sizing:border-box;left:0;right:0;top:0}.fullscreenTakeover,:host([open]) .fullscreenTakeover{transform:none}.modal{background:var(
--spectrum-dialog-confirm-background-color,var(--spectrum-alias-background-color-default)
)}:host{--spectrum-dialog-confirm-exit-animation-duration:var(--swc-test-duration);--spectrum-dialog-confirm-entry-animation-duration:var(
--swc-test-duration
);height:100dvh}
`,Jo=t.iv`
@media (forced-colors:active){.spectrum-Tray{--highcontrast-tray-background-color:Background}}:host{bottom:0;display:flex;inline-size:100%;inset-inline-start:0;justify-content:center;position:fixed}@media screen and (orientation:landscape){.spectrum-Tray{border-top-left-radius:var(
--mod-tray-corner-radius,var(--spectrum-tray-corner-radius)
);border-top-right-radius:var(
--mod-tray-corner-radius,var(--spectrum-tray-corner-radius)
);max-inline-size:var(
--mod-tray-max-inline-size,var(--spectrum-tray-max-inline-size)
)}}:host{--spectrum-tray-exit-animation-delay:0ms;--spectrum-tray-entry-animation-delay:160ms;--spectrum-tray-max-inline-size:375px;--spectrum-tray-spacing-edge-to-tray-safe-zone:64px;--spectrum-tray-entry-animation-duration:var(
--spectrum-animation-duration-500
);--spectrum-tray-exit-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-tray-corner-radius:var(--spectrum-corner-radius-100);--spectrum-tray-background-color:var(--spectrum-background-layer-2-color)}@media (forced-colors:active){.tray{--highcontrast-tray-background-color:Background}}.spectrum-Tray-wrapper{bottom:0;display:flex;inline-size:100%;inset-inline-start:0;justify-content:center;position:fixed}.tray{background-color:var(
--highcontrast-tray-background-color,var(--mod-tray-background-color,var(--spectrum-tray-background-color))
);border-radius:unset;inline-size:100%;margin-block-start:var(
--mod-tray-spacing-edge-to-tray-safe-zone,var(--spectrum-tray-spacing-edge-to-tray-safe-zone)
);max-block-size:calc(100vh - var(
--mod-tray-spacing-edge-to-tray-safe-zone,
var(--spectrum-tray-spacing-edge-to-tray-safe-zone)
));outline:none;overflow:auto;transform:translateY(100%);transition:opacity var(
--mod-tray-exit-animation-duration,var(--spectrum-tray-exit-animation-duration)
) cubic-bezier(.5,0,1,1) var(
--mod-tray-exit-animation-delay,var(--spectrum-tray-exit-animation-delay)
),visibility var(
--mod-tray-exit-animation-duration,var(--spectrum-tray-exit-animation-duration)
) linear calc(var(
--mod-tray-exit-animation-delay,
var(--spectrum-tray-exit-animation-delay)
) + var(
--mod-tray-exit-animation-duration,
var(--spectrum-tray-exit-animation-duration)
)),transform var(
--mod-tray-exit-animation-duration,var(--spectrum-tray-exit-animation-duration)
) cubic-bezier(.5,0,1,1) var(
--mod-tray-exit-animation-delay,var(--spectrum-tray-exit-animation-delay)
)}:host([open]) .tray{transform:translateY(0);transition:transform var(
--mod-tray-entry-animation-duration,var(--spectrum-tray-entry-animation-duration)
) cubic-bezier(0,0,.4,1) var(
--mod-tray-entry-animation-delay,var(--spectrum-tray-entry-animation-delay)
),opacity var(
--spectrum-tray-entry-animation-duration,var(--mod-tray-entry-animation-duration)
) cubic-bezier(0,0,.4,1) var(
--mod-tray-entry-animation-delay,var(--spectrum-tray-entry-animation-delay)
)}@media screen and (orientation:landscape){.tray{border-top-left-radius:var(
--mod-tray-corner-radius,var(--spectrum-tray-corner-radius)
);border-top-right-radius:var(
--mod-tray-corner-radius,var(--spectrum-tray-corner-radius)
);max-inline-size:var(
--mod-tray-max-inline-size,var(--spectrum-tray-max-inline-size)
)}}:host{align-items:flex-end;max-height:100vh;max-height:100dvh;position:fixed!important}sp-underlay{touch-action:none}.tray{display:inline-flex;overscroll-behavior:contain;padding:var(--spectrum-tray-padding-y,0) var(--spectrum-tray-padding-x,0)}::slotted(.visually-hidden){clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}
`;var Qo=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,er=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?tr(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&Qo(e,o,c),c};class or extends u.o{constructor(){super(...arguments),this.open=!1,this.prefersMotion=new Zo(this,"(prefers-reduced-motion: no-preference)"),this.transitionPromise=Promise.resolve(),this.animating=!1}static get styles(){return[Xo,Jo]}focus(){const t=(0,Yo.i)(this);t?t.focus():1===this.children.length?this.tray.focus():super.focus()}overlayWillCloseCallback(){return this.open?(this.close(),!0):this.animating}close(){this.open=!1,this.prefersMotion.matches||this.dispatchClosed()}dispatchClosed(){this.dispatchEvent(new Event("close",{bubbles:!0}))}handleUnderlayTransitionend(){this.open||(this.resolveTransitionPromise(),this.dispatchClosed())}handleTrayTransitionend(){this.open&&this.resolveTransitionPromise()}update(t){t.has("open")&&void 0!==t.get("open")&&this.prefersMotion.matches&&(this.animating=!0,this.transitionPromise=new Promise((t=>{this.resolveTransitionPromise=()=>{this.animating=!1,t()}}))),super.update(t)}render(){return t.dy`
            <sp-underlay
                ?open=${this.open}
                @click=${this.close}
                @transitionend=${this.handleUnderlayTransitionend}
            ></sp-underlay>
            <div
                class="tray modal"
                tabindex="-1"
                @transitionend=${this.handleTrayTransitionend}
            >
                <slot></slot>
            </div>
        `}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.transitionPromise,t}}er([(0,d.Cb)({type:Boolean,reflect:!0})],or.prototype,"open",2),er([(0,d.IO)(".tray")],or.prototype,"tray",2),customElements.define("sp-tray",or);const rr=t.iv`
:host{--spectrum-overlay-animation-distance:var(
--spectrum-picker-m-texticon-popover-offset-y,var(--spectrum-global-dimension-size-75)
);opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host([placement*=bottom][open]){transform:translateY(var(--spectrum-overlay-animation-distance))}:host([placement*=top][open]){transform:translateY(calc(var(--spectrum-overlay-animation-distance)*-1))}:host([placement*=right][open]){transform:translateX(var(--spectrum-overlay-animation-distance))}:host([placement*=left][open]){transform:translateX(calc(var(--spectrum-overlay-animation-distance)*-1))}:host{--spectrum-popover-target-offset:13px;--spectrum-popover-dialog-padding:30px 29px;--spectrum-popover-dialog-min-width:270px;--spectrum-popover-min-width:var(--spectrum-global-dimension-size-400);--spectrum-popover-min-height:var(--spectrum-global-dimension-size-400)}:host{border-radius:var(
--spectrum-popover-border-radius,var(--spectrum-alias-border-radius-regular)
);border-style:solid;border-width:var(
--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)
);box-sizing:border-box;display:inline-flex;flex-direction:column;min-height:var(
--spectrum-popover-min-height,var(--spectrum-global-dimension-size-400)
);min-width:var(
--spectrum-popover-min-width,var(--spectrum-global-dimension-size-400)
);outline:none;position:absolute}#tip{position:absolute;-webkit-transform:translate(0)}#tip .triangle{stroke-linecap:square;stroke-linejoin:miter;stroke-width:var(
--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)
)}:host([dialog]){min-width:var(
--spectrum-popover-dialog-min-width
);padding:var(--spectrum-popover-dialog-padding)}:host([placement*=left][tip]){margin-right:var(
--spectrum-popover-target-offset
)}:host([placement*=left]) #tip{left:100%}:host([placement*=right][tip]){margin-left:var(
--spectrum-popover-target-offset
)}:host([placement*=right]) #tip{right:100%;transform:scaleX(-1)}:host([placement*=left]) #tip,:host([placement*=right]) #tip{margin-top:calc(var(--spectrum-global-dimension-size-150)*-1);top:50%}:host([placement*=bottom][tip]){margin-top:var(
--spectrum-popover-target-offset
)}:host([placement*=bottom]) #tip{bottom:100%;transform:scaleY(-1)}:host([placement*=top][tip]){margin-bottom:var(
--spectrum-popover-target-offset
)}:host([placement*=top]) #tip{top:100%}:host([placement*=bottom]) #tip,:host([placement*=top]) #tip{left:50%;margin-left:calc(var(--spectrum-global-dimension-size-150)*-1)}:host{background-color:var(
--spectrum-popover-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark)
);clip-path:inset(-30px -30px);filter:drop-shadow(0 1px 4px var(
--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)
));-webkit-filter:drop-shadow(0 1px 4px var(
--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)
));will-change:filter}#tip .triangle{fill:var(
--spectrum-popover-background-color,var(--spectrum-global-color-gray-50)
);stroke:var(
--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark)
)}:host{--sp-popover-tip-size:24px;max-height:100%;max-width:100%;min-width:min-content}::slotted(*){overscroll-behavior:contain}.tip{height:calc(var(--sp-popover-tip-size)/2);left:0;position:absolute;width:var(--sp-popover-tip-size)}:host([placement*=right]) #tip{transform:none}:host([placement*=bottom]) #tip{transform:none}:host([placement*=top]) .tip{top:100%}:host([placement*=bottom]) .tip{bottom:100%;transform:scaleY(-1)}:host([placement*=left]) .tip{transform:rotate(-90deg) translateY(-200%);transform-origin:100% 0}:host([placement*=right]) .tip{transform:rotate(90deg);transform-origin:0 0}::slotted(.visually-hidden){clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}
`;var sr=Object.defineProperty,cr=Object.getOwnPropertyDescriptor,ar=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?cr(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&sr(e,o,c),c};class ir extends u.o{constructor(){super(...arguments),this.dialog=!1,this.open=!1,this.placement="none",this.tip=!1}static get styles(){return[rr]}renderTip(){return t.dy`
            <div id="tip">
                <svg
                    xmlns="http://www.w3.org/svg/2000"
                    class="tip"
                    viewBox="0 0 24 12"
                >
                    <path
                        class="triangle"
                        d="M 0.7071067811865476 0 L 11.414213562373096 10.707106781186548 L 22.121320343559645 0"
                    ></path>
                </svg>
            </div>
        `}connectedCallback(){super.connectedCallback(),this.addEventListener("sp-overlay-query",this.onOverlayQuery)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sp-overlay-query",this.onOverlayQuery)}onOverlayQuery(t){if(!t.target||t.target!==this)return;const e=this.shadowRoot.querySelector("#tip");e&&(t.detail.overlayContentTipElement=e)}render(){return t.dy`
            <slot></slot>
            ${this.tip?this.renderTip():t.Ld}
        `}}ar([(0,d.Cb)({type:Boolean,reflect:!0})],ir.prototype,"dialog",2),ar([(0,d.Cb)({type:Boolean,reflect:!0})],ir.prototype,"open",2),ar([(0,d.Cb)({reflect:!0})],ir.prototype,"placement",2),ar([(0,d.Cb)({type:Boolean,reflect:!0})],ir.prototype,"tip",2),customElements.define("sp-popover",ir);var nr=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,ur=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?lr(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&nr(e,o,c),c};const dr={s:"spectrum-UIIcon-ChevronDown75",m:"spectrum-UIIcon-ChevronDown100",l:"spectrum-UIIcon-ChevronDown200",xl:"spectrum-UIIcon-ChevronDown300"};class mr extends(z(L)){constructor(){super(),this.isMobile=new Zo(this,"(max-width: 700px) and (hover: none) and (pointer: coarse), (max-height: 700px) and (hover: none) and (pointer: coarse)"),this.disabled=!1,this.focused=!1,this.invalid=!1,this.open=!1,this.readonly=!1,this.selects="single",this.menuItems=[],this.placement="bottom-start",this.quiet=!1,this.value="",this.listRole="listbox",this.itemRole="option",this.onKeydown=t=>{this.focused=!0,("ArrowDown"===t.code||"ArrowUp"===t.code)&&(t.preventDefault(),this.toggle(!0))},this.overlayOpenCallback=async()=>{this.updateMenuItems(),await this.itemsUpdated,await this.optionsMenu.updateComplete,requestAnimationFrame((()=>this.menuStateResolver()))},this.overlayCloseCallback=async()=>{this.restoreChildren&&(this.restoreChildren(),this.restoreChildren=void 0),this.close(),requestAnimationFrame((()=>this.menuStateResolver()))},this._willUpdateItems=!1,this.itemsUpdated=Promise.resolve(),this.menuStatePromise=Promise.resolve(),this.selectionPromise=Promise.resolve(),this.onKeydown=this.onKeydown.bind(this)}get target(){return this.button}get focusElement(){return this.open?this.optionsMenu:this.button}forceFocusVisible(){this.focused=!0}onButtonBlur(){this.focused=!1,this.target.removeEventListener("keydown",this.onKeydown)}onButtonClick(){this.toggle()}focus(t){super.focus(t),!this.disabled&&this.focusElement&&(this.focused=this.hasVisibleFocusInTree())}onHelperFocus(){this.focused=!0,this.button.focus()}onButtonFocus(){this.target.addEventListener("keydown",this.onKeydown)}handleChange(t){const e=t.target,[o]=e.selectedItems;t.cancelable?(t.stopPropagation(),this.setValueFromItem(o,t)):this.open=!1}async setValueFromItem(t,e){const o=this.selectedItem,r=this.value;if(this.selectedItem=t,this.value=t.value,this.open=!1,await this.updateComplete,!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0,composed:!0})))return e&&e.preventDefault(),this.setMenuItemSelected(this.selectedItem,!1),o&&this.setMenuItemSelected(o,!0),this.selectedItem=o,this.value=r,void(this.open=!0);o&&this.setMenuItemSelected(o,!1),this.setMenuItemSelected(t,!!this.selects)}setMenuItemSelected(t,e){null!=this.selects&&(t.selected=e)}toggle(t){this.readonly||(this.open=void 0!==t?t:!this.open)}close(){this.readonly||(this.open=!1)}async generatePopover(){this.popoverFragment||(this.popoverFragment=document.createDocumentFragment()),(0,t.sY)(this.renderPopover,this.popoverFragment,{host:this}),this.popoverEl=this.popoverFragment.children[0],this.optionsMenu=this.popoverEl.children[1]}async openMenu(){let t=[];const e=this.querySelector(":scope > sp-menu");await this.generatePopover(),t=e?Array.from(e.children):Array.from(this.children).filter((t=>!t.hasAttribute("slot"))),0!==t.length?(this.restoreChildren=(0,Eo.G)(t,this.optionsMenu,{position:"beforeend",prepareCallback:t=>(this.value===t.value&&this.setMenuItemSelected(t,!0),t=>{void 0!==t.focused&&(t.focused=!1)})}),this.sizePopover(this.popoverEl),this.closeOverlay=pr.openOverlay(this,"modal",this.popoverEl,{placement:this.isMobile.matches?"none":this.placement,receivesFocus:"auto"})):this.menuStateResolver()}sizePopover(t){this.isMobile.matches?t.style.setProperty("--swc-menu-width","100%"):this.quiet||t.style.setProperty("min-width",`${this.offsetWidth}px`)}async closeMenu(){if(this.closeOverlay){const t=this.closeOverlay;delete this.closeOverlay,(await t)()}}get selectedItemContent(){return this.selectedItem?this.selectedItem.itemChildren:{icon:[],content:[]}}renderLabelContent(e){return this.value&&this.selectedItem?e:t.dy`
            <slot name="label">${this.label}</slot>
        `}get buttonContent(){const e={"visually-hidden":"only"===this.icons&&!!this.value,placeholder:!this.value};return[t.dy`
                <span id="icon" ?hidden=${"none"===this.icons}>
                    ${this.selectedItemContent.icon}
                </span>
                <span id="label" class=${E(e)}>
                    ${this.renderLabelContent(this.selectedItemContent.content)}
                </span>
                ${this.invalid?t.dy`
                          <sp-icon-alert
                              class="validation-icon"
                          ></sp-icon-alert>
                      `:t.Ld}
                <sp-icon-chevron100
                    class="picker ${dr[this.size]}"
                ></sp-icon-chevron100>
            `]}render(){return t.dy`
            <span
                id="focus-helper"
                tabindex="${this.focused?"-1":"0"}"
                @focus=${this.onHelperFocus}
            ></span>
            <button
                aria-haspopup="true"
                aria-expanded=${this.open?"true":"false"}
                aria-labelledby="button icon label"
                id="button"
                class="button"
                @blur=${this.onButtonBlur}
                @click=${this.onButtonClick}
                @focus=${this.onButtonFocus}
                ?disabled=${this.disabled}
                tabindex="-1"
            >
                ${this.buttonContent}
            </button>
        `}update(t){this.selects&&(this.selects="single"),t.has("disabled")&&this.disabled&&(this.open=!1),t.has("open")&&(this.open||void 0!==t.get("open"))&&(this.menuStatePromise=new Promise((t=>this.menuStateResolver=t)),this.open?this.openMenu():this.closeMenu()),t.has("value")&&!t.has("selectedItem")&&this.updateMenuItems(),super.update(t)}get dismissHelper(){return t.dy`
            <div class="visually-hidden">
                <button
                    tabindex="-1"
                    arial-label="Dismiss"
                    @click=${this.close}
                ></button>
            </div>
        `}get renderPopover(){const e=t.dy`
            ${this.dismissHelper}
            <sp-menu
                id="menu"
                role="${this.listRole}"
                @change=${this.handleChange}
                .selects=${this.selects}
            ></sp-menu>
            ${this.dismissHelper}
        `;return this.isMobile.matches?t.dy`
                <sp-tray
                    id="popover"
                    role="dialog"
                    @sp-menu-item-added-or-updated=${this.updateMenuItems}
                    .overlayOpenCallback=${this.overlayOpenCallback}
                    .overlayCloseCallback=${this.overlayCloseCallback}
                >
                    ${e}
                </sp-tray>
            `:t.dy`
            <sp-popover
                id="popover"
                role="dialog"
                @sp-menu-item-added-or-updated=${this.updateMenuItems}
                .overlayOpenCallback=${this.overlayOpenCallback}
                .overlayCloseCallback=${this.overlayCloseCallback}
            >
                ${e}
            </sp-popover>
        `}updateMenuItems(t){if(this.open&&"sp-menu-item-removed"===(null==t?void 0:t.type)||this._willUpdateItems)return;this._willUpdateItems=!0,(null==t?void 0:t.item)===this.selectedItem&&this.requestUpdate();let e=()=>{};this.itemsUpdated=new Promise((t=>e=t)),window.requestAnimationFrame((async()=>{this.open?(await this.optionsMenu.updateComplete,this.menuItems=this.optionsMenu.childItems):this.menuItems=[...this.querySelectorAll('sp-menu-item:not([slot="submenu"] *)')],this.manageSelection(),e(),this._willUpdateItems=!1}))}async manageSelection(){if(null==this.selects)return;let t;await this.menuStatePromise,this.selectionPromise=new Promise((t=>this.selectionResolver=t)),this.menuItems.forEach((e=>{this.value!==e.value||e.disabled?e.selected=!1:t=e})),t?(t.selected=!!this.selects,this.selectedItem=t):(this.value="",this.selectedItem=void 0),this.open&&(await this.optionsMenu.updateComplete,this.optionsMenu.updateSelectedItemIndex()),this.selectionResolver()}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.menuStatePromise,await this.itemsUpdated,await this.selectionPromise,t}connectedCallback(){this.updateMenuItems(),this.addEventListener("sp-menu-item-added-or-updated",this.updateMenuItems),this.addEventListener("sp-menu-item-removed",this.updateMenuItems),super.connectedCallback()}disconnectedCallback(){this.close(),super.disconnectedCallback()}}mr.openOverlay=async(t,e,o,r)=>await So(t,e,o,r),ur([(0,d.IO)("#button")],mr.prototype,"button",2),ur([(0,d.Cb)({type:Boolean,reflect:!0})],mr.prototype,"disabled",2),ur([(0,d.Cb)({type:Boolean,reflect:!0})],mr.prototype,"focused",2),ur([(0,d.Cb)({type:String,reflect:!0})],mr.prototype,"icons",2),ur([(0,d.Cb)({type:Boolean,reflect:!0})],mr.prototype,"invalid",2),ur([(0,d.Cb)()],mr.prototype,"label",2),ur([(0,d.Cb)({type:Boolean,reflect:!0})],mr.prototype,"open",2),ur([(0,d.Cb)({type:Boolean,reflect:!0})],mr.prototype,"readonly",2),ur([(0,d.Cb)()],mr.prototype,"placement",2),ur([(0,d.Cb)({type:Boolean,reflect:!0})],mr.prototype,"quiet",2),ur([(0,d.Cb)({type:String})],mr.prototype,"value",2),ur([(0,d.Cb)({attribute:!1})],mr.prototype,"selectedItem",2);class pr extends mr{constructor(){super(...arguments),this.onKeydown=t=>{const{code:e}=t;if(this.focused=!0,!e.startsWith("Arrow")||this.readonly)return;if(t.preventDefault(),"ArrowUp"===e||"ArrowDown"===e)return void this.toggle(!0);const o=this.selectedItem?this.menuItems.indexOf(this.selectedItem):-1,r=this.value&&"ArrowRight"!==e?-1:1;let s=o+r;for(;this.menuItems[s]&&this.menuItems[s].disabled;)s+=r;!this.menuItems[s]||this.menuItems[s].disabled||(!this.value||s!==o)&&this.setValueFromItem(this.menuItems[s])}}static get styles(){return[qo,Fe]}}customElements.define("sp-picker",pr),customElements.define("sp-menu-item",Do);const br=t.iv`
:host{--spectrum-divider-thickness:var(
--spectrum-divider-thickness-medium
);--spectrum-divider-background-color:var(
--spectrum-divider-background-color-medium
);--spectrum-divider-background-color-small:var(--spectrum-gray-300);--spectrum-divider-background-color-medium:var(--spectrum-gray-300);--spectrum-divider-background-color-large:var(--spectrum-gray-800);--spectrum-divider-background-color-small-static-white:var(
--spectrum-transparent-white-300
);--spectrum-divider-background-color-medium-static-white:var(
--spectrum-transparent-white-300
);--spectrum-divider-background-color-large-static-white:var(
--spectrum-transparent-white-800
);--spectrum-divider-background-color-small-static-black:var(
--spectrum-transparent-black-300
);--spectrum-divider-background-color-medium-static-black:var(
--spectrum-transparent-black-300
);--spectrum-divider-background-color-large-static-black:var(
--spectrum-transparent-black-800
)}:host([size=s]){--spectrum-divider-thickness:var(
--spectrum-divider-thickness-small
);--spectrum-divider-background-color:var(
--spectrum-divider-background-color-small
)}:host([size=m]){--spectrum-divider-thickness:var(
--spectrum-divider-thickness-medium
);--spectrum-divider-background-color:var(
--spectrum-divider-background-color-medium
)}:host([size=l]){--spectrum-divider-thickness:var(
--spectrum-divider-thickness-large
);--spectrum-divider-background-color:var(
--spectrum-divider-background-color-large
)}@media (forced-colors:active){:host{--spectrum-divider-background-color:CanvasText;--spectrum-divider-background-color-small-static-white:CanvasText;--spectrum-divider-background-color-medium-static-white:CanvasText;--spectrum-divider-background-color-large-static-white:CanvasText;--spectrum-divider-background-color-small-static-black:CanvasText;--spectrum-divider-background-color-medium-static-black:CanvasText;--spectrum-divider-background-color-large-static-black:CanvasText}}:host{background-color:var(
--mod-divider-background-color,var(--spectrum-divider-background-color)
);block-size:var(
--mod-divider-thickness,var(--spectrum-divider-thickness)
);border:none;border-radius:var(
--mod-divider-thickness,var(--spectrum-divider-thickness)
);border-width:var(
--mod-divider-thickness,var(--spectrum-divider-thickness)
);inline-size:100%;overflow:visible}:host([size=s]) .spectrum-Divider--staticWhite{--spectrum-divider-background-color:var(
--mod-divider-background-color-small-static-white,var(--spectrum-divider-background-color-small-static-white)
)}:host([size=m]) .spectrum-Divider--staticWhite{--spectrum-divider-background-color:var(
--mod-divider-background-color-medium-static-white,var(--spectrum-divider-background-color-medium-static-white)
)}:host([size=l]) .spectrum-Divider--staticWhite{--spectrum-divider-background-color:var(
--mod-divider-background-color-large-static-white,var(--spectrum-divider-background-color-large-static-white)
)}:host([size=s]) .spectrum-Divider--staticBlack{--spectrum-divider-background-color:var(
--mod-divider-background-color-small-static-black,var(--spectrum-divider-background-color-small-static-black)
)}:host([size=m]) .spectrum-Divider--staticBlack{--spectrum-divider-background-color:var(
--mod-divider-background-color-medium-static-black,var(--spectrum-divider-background-color-medium-static-black)
)}:host([size=l]) .spectrum-Divider--staticBlack{--spectrum-divider-background-color:var(
--mod-divider-background-color-large-static-black,var(--spectrum-divider-background-color-large-static-black)
)}:host([vertical]){block-size:100%;inline-size:var(
--mod-divider-thickness,var(--spectrum-divider-thickness)
)}:host{display:block}hr{border:none;margin:0}
`;var hr=Object.defineProperty;Object.getOwnPropertyDescriptor;class vr extends(z(u.o,{validSizes:["s","m","l"]})){constructor(){super(...arguments),this.vertical=!1}render(){return t.dy``}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","separator")}updated(t){super.updated(t),t.has("vertical")&&(this.vertical?this.setAttribute("aria-orientation","vertical"):this.removeAttribute("aria-orientation"))}}vr.styles=[br],((t,e,o,r)=>{for(var s,c=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(c=s(e,o,c)||c);c&&hr(e,o,c)})([(0,d.Cb)({type:Boolean,reflect:!0})],vr.prototype,"vertical"),customElements.define("sp-divider",vr);const gr=t.iv`
:host{--spectrum-helptext-line-height:var(
--spectrum-line-height-100
);--spectrum-helptext-content-color-default:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-helptext-icon-color-default:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-helptext-disabled-content-color:var(
--spectrum-disabled-content-color
)}:host([variant=neutral]){--spectrum-helptext-content-color-default:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-helptext-icon-color-default:var(
--spectrum-neutral-subdued-content-color-default
)}:host([variant=negative]){--spectrum-helptext-content-color-default:var(
--spectrum-negative-color-900
);--spectrum-helptext-icon-color-default:var(--spectrum-negative-color-900)}:host([disabled]){--spectrum-helptext-content-color-default:var(
--spectrum-helptext-disabled-content-color
);--spectrum-helptext-icon-color-default:var(
--spectrum-helptext-disabled-content-color
)}:host(:lang(ja)),:host(:lang(ko)),:host(:lang(zh)){--spectrum-helptext-line-height-cjk:var(
--spectrum-line-height-cjk-100
)}:host([size=s]){--spectrum-helptext-min-height:var(
--spectrum-component-height-75
);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-helptext-font-size:var(--spectrum-font-size-75);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-helptext-top-to-workflow-icon:var(
--spectrum-help-text-top-to-workflow-icon-small
);--spectrum-helptext-bottom-to-workflow-icon:var(
--spectrum-helptext-top-to-workflow-icon
);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-helptext-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
)}:host([size=m]){--spectrum-helptext-min-height:var(
--spectrum-component-height-75
);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-helptext-font-size:var(--spectrum-font-size-75);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-helptext-top-to-workflow-icon:var(
--spectrum-help-text-top-to-workflow-icon-medium
);--spectrum-helptext-bottom-to-workflow-icon:var(
--spectrum-helptext-top-to-workflow-icon
);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-helptext-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
)}:host([size=l]){--spectrum-helptext-min-height:var(
--spectrum-component-height-100
);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-helptext-font-size:var(--spectrum-font-size-100);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-100);--spectrum-helptext-top-to-workflow-icon:var(
--spectrum-help-text-top-to-workflow-icon-large
);--spectrum-helptext-bottom-to-workflow-icon:var(
--spectrum-helptext-top-to-workflow-icon
);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-helptext-bottom-to-text:var(
--spectrum-component-bottom-to-text-100
)}:host([size=xl]){--spectrum-helptext-min-height:var(
--spectrum-component-height-200
);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-300);--spectrum-helptext-font-size:var(--spectrum-font-size-200);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-200);--spectrum-helptext-top-to-workflow-icon:var(
--spectrum-help-text-top-to-workflow-icon-extra-large
);--spectrum-helptext-bottom-to-workflow-icon:var(
--spectrum-helptext-top-to-workflow-icon
);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-200);--spectrum-helptext-bottom-to-text:var(
--spectrum-component-bottom-to-text-200
)}@media (forced-colors:active){:host{--highcontrast-helptext-content-color-default:CanvasText;--highcontrast-helptext-icon-color-default:CanvasText;forced-color-adjust:none}.icon,.text{forced-color-adjust:none}}:host{color:var(
--highcontrast-helptext-content-color-default,var(
--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)
)
);display:flex;font-size:var(
--mod-helptext-font-size,var(--spectrum-helptext-font-size)
);min-height:var(
--mod-helptext-min-height,var(--spectrum-helptext-min-height)
)}.icon{flex-shrink:0;height:var(--mod-helptext-icon-size,var(--spectrum-helptext-icon-size));margin-inline-end:var(
--mod-helptext-text-to-visual,var(--spectrum-helptext-text-to-visual)
);padding-block-end:var(
--mod-helptext-bottom-to-workflow-icon,var(--spectrum-helptext-bottom-to-workflow-icon)
);padding-block-start:var(
--mod-helptext-top-to-workflow-icon,var(--spectrum-helptext-top-to-workflow-icon)
);width:var(--mod-helptext-icon-size,var(--spectrum-helptext-icon-size))}.text{line-height:var(
--mod-helptext-line-height,var(--spectrum-helptext-line-height)
);padding-block-end:var(
--mod-helptext-bottom-to-text,var(--spectrum-helptext-bottom-to-text)
);padding-block-start:var(
--mod-helptext-top-to-text,var(--spectrum-helptext-top-to-text)
)}:host(:lang(ja)) .text,:host(:lang(ko)) .text,:host(:lang(zh)) .text{line-height:var(
--mod-helptext-line-height-cjk,var(--spectrum-helptext-line-height-cjk)
)}:host([variant=neutral]) .text{color:var(
--highcontrast-helptext-content-color-default,var(
--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)
)
)}:host([variant=neutral]) .icon{color:var(
--highcontrast-helptext-icon-color-default,var(
--mod-helptext-icon-color-default,var(--spectrum-helptext-icon-color-default)
)
)}:host([variant=negative]) .text{color:var(
--highcontrast-helptext-content-color-default,var(
--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)
)
)}:host([variant=negative]) .icon{color:var(
--highcontrast-helptext-icon-color-default,var(
--mod-helptext-icon-color-default,var(--spectrum-helptext-icon-color-default)
)
)}:host([disabled]) .text{color:var(
--highcontrast-helptext-content-color-default,var(
--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)
)
)}:host([disabled]) .icon{color:var(
--highcontrast-helptext-icon-color-default,var(
--mod-helptext-icon-color-default,var(--spectrum-helptext-icon-color-default)
)
)}
`;var fr=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,yr=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?xr(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&fr(e,o,c),c};class kr extends(z(u.o)){constructor(){super(...arguments),this.icon=!1,this.variant="neutral"}static get styles(){return[gr]}render(){return t.dy`
            ${"negative"===this.variant&&this.icon?t.dy`
                      <sp-icon-alert class="icon"></sp-icon-alert>
                  `:t.Ld}
            <div class="text"><slot></slot></div>
        `}}yr([(0,d.Cb)({type:Boolean,reflect:!0})],kr.prototype,"icon",2),yr([(0,d.Cb)({reflect:!0})],kr.prototype,"variant",2),customElements.define("sp-help-text",kr);const wr=t.iv`
:host{--spectrum-accordion-item-title-padding-y:var(
--spectrum-global-dimension-size-150
);--spectrum-accordion-animation-duration:var(
--spectrum-global-animation-duration-100,130ms
)}:host{display:block;list-style:none;margin:0;padding:0}
`;var zr=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Ir=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?Cr(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&zr(e,o,c),c};class qr extends u.o{constructor(){super(...arguments),this.allowMultiple=!1,this.focusGroupController=new B(this,{direction:"vertical",elements:()=>this.items,isFocusableElement:t=>!t.disabled})}static get styles(){return[wr]}get items(){return[...this.defaultNodes||[]].filter((t=>void 0!==t.tagName))}focus(){this.focusGroupController.focus()}async onToggle(t){const e=t.target;if(await 0,this.allowMultiple||t.defaultPrevented)return;const o=[...this.items];o&&!o.length||o.forEach((t=>{t!==e&&(t.open=!1)}))}handleSlotchange(){this.focusGroupController.clearElementCache()}render(){return t.dy`
            <slot
                @slotchange=${this.handleSlotchange}
                @sp-accordion-item-toggle=${this.onToggle}
            ></slot>
        `}}Ir([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"allow-multiple"})],qr.prototype,"allowMultiple",2),Ir([(0,d.vZ)()],qr.prototype,"defaultNodes",2),customElements.define("sp-accordion",qr);const Er=t.iv`
:host([dir=ltr]) .indicator{left:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=rtl]) .indicator{right:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=rtl]) .indicator{transform:matrix(-1,0,0,1,0,0)}.indicator{display:block;position:absolute;top:calc(50% - var(
--spectrum-accordion-icon-height,
var(--spectrum-global-dimension-size-125)
)/2);transition:transform ease var(--spectrum-accordion-animation-duration)}:host{border-bottom:var(
--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)
) solid transparent;display:list-item;margin:0;position:relative;z-index:inherit}:host(:first-of-type){border-top:var(
--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)
) solid transparent}#heading{box-sizing:border-box;margin:0}:host([dir=ltr]) #header{padding-left:calc(var(
--spectrum-accordion-item-padding-x,
var(--spectrum-global-dimension-size-225)
) + var(
--spectrum-accordion-icon-height,
var(--spectrum-global-dimension-size-125)
) + var(
--spectrum-accordion-icon-gap,
var(--spectrum-global-dimension-size-100)
) + var(
--spectrum-accordion-item-border-left-size,
var(--spectrum-alias-border-size-thick)
))}:host([dir=rtl]) #header{padding-right:calc(var(
--spectrum-accordion-item-padding-x,
var(--spectrum-global-dimension-size-225)
) + var(
--spectrum-accordion-icon-height,
var(--spectrum-global-dimension-size-125)
) + var(
--spectrum-accordion-icon-gap,
var(--spectrum-global-dimension-size-100)
) + var(
--spectrum-accordion-item-border-left-size,
var(--spectrum-alias-border-size-thick)
))}:host([dir=ltr]) #header{padding-right:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=rtl]) #header{padding-left:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=ltr]) #header{text-align:left}:host([dir=rtl]) #header{text-align:right}#header{align-items:center;appearance:none;background-color:inherit;border:0;box-sizing:border-box;cursor:pointer;display:flex;font-family:inherit;font-size:var(
--spectrum-accordion-item-title-text-size,var(--spectrum-global-dimension-font-size-50)
);font-weight:500;justify-content:flex-start;letter-spacing:calc(var(
--spectrum-accordion-item-title-tracking,
var(--spectrum-global-font-letter-spacing-medium)
)/100);line-height:var(
--spectrum-accordion-text-line-height,var(--spectrum-alias-component-text-line-height)
);margin:0;padding-bottom:var(--spectrum-accordion-item-title-padding-y);padding-top:var(--spectrum-accordion-item-title-padding-y);position:relative;text-overflow:ellipsis;text-transform:uppercase;width:100%}#header:focus{outline:none}:host([dir=ltr]) #header:focus:after{left:0}:host([dir=rtl]) #header:focus:after{right:0}#header:focus:after{bottom:calc(var(
--spectrum-accordion-item-border-size,
var(--spectrum-alias-border-size-thin)
)*-1);content:"";position:absolute;top:calc(var(
--spectrum-accordion-item-border-size,
var(--spectrum-alias-border-size-thin)
)*-1);width:var(
--spectrum-accordion-item-border-left-size,var(--spectrum-alias-border-size-thick)
)}#content{display:none;padding-bottom:var(
--spectrum-accordion-item-content-padding,var(--spectrum-global-dimension-size-200)
);padding-left:var(
--spectrum-accordion-item-content-padding,var(--spectrum-global-dimension-size-200)
);padding-right:var(
--spectrum-accordion-item-content-padding,var(--spectrum-global-dimension-size-200)
);padding-top:0}:host([dir=ltr][open])>#heading>.indicator{transform:rotate(90deg)}:host([dir=rtl][open])>#heading>.indicator{transform:matrix(-1,0,0,1,0,0) rotate(90deg)}:host([dir=ltr][open])>.indicator{transform:rotate(90deg)}:host([dir=rtl][open])>.indicator{transform:matrix(-1,0,0,1,0,0) rotate(90deg)}:host([open])>#content{display:block}:host([disabled]) #header{cursor:default}:host{border-color:var(
--spectrum-accordion-border-color,var(--spectrum-global-color-gray-300)
)}.indicator{color:var(
--spectrum-accordion-icon-color,var(--spectrum-global-color-gray-600)
)}#header{color:var(
--spectrum-accordion-text-color,var(--spectrum-global-color-gray-700)
)}#header:hover{background-color:var(
--spectrum-accordion-item-background-color-hover,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-accordion-text-color-hover,var(--spectrum-global-color-gray-900)
)}#header:hover+.indicator{color:var(
--spectrum-accordion-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}#header.focus-visible:after{background-color:var(
--spectrum-accordion-item-border-left-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#header.focus-visible:after{background-color:var(
--spectrum-accordion-item-border-left-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#header:focus-visible:after{background-color:var(
--spectrum-accordion-item-border-left-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([open]) #header:hover{background-color:transparent}:host([disabled]) #header,:host([disabled]) #header.focus-visible,:host([disabled]) #header:hover{background-color:transparent;color:var(
--spectrum-accordion-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([disabled]) #header,:host([disabled]) #header:focus-visible,:host([disabled]) #header:hover{background-color:transparent;color:var(
--spectrum-accordion-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([disabled]) #header+.indicator{color:var(
--spectrum-accordion-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}@media (forced-colors:active){#header.focus-visible{outline:3px solid CanvasText}#header:focus-visible{outline:3px solid CanvasText}}:host{--spectrum-accordion-item-header-height:46px}#indicator{top:calc(50% - var(
--spectrum-accordion-icon-height,
var(--spectrum-global-dimension-size-125)
)/2)}#heading{height:auto;position:relative}#header{min-height:calc(100% - var(
--spectrum-accordion-item-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([open])>#header:after{height:calc(100% - var(
--spectrum-accordion-item-border-size,
var(--spectrum-alias-border-size-thin)
))}
`;var Sr=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,Ar=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?$r(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&Sr(e,o,c),c};class _r extends L{constructor(){super(...arguments),this.open=!1,this.label="",this.disabled=!1}static get styles(){return[Er,Fe]}get focusElement(){return this.shadowRoot.querySelector("#header")}onClick(){this.disabled||this.toggle()}toggle(){this.open=!this.open,this.dispatchEvent(new CustomEvent("sp-accordion-item-toggle",{bubbles:!0,composed:!0,cancelable:!0}))||(this.open=!this.open)}render(){return t.dy`
            <h3 id="heading">
                <button
                    id="header"
                    @click=${this.onClick}
                    aria-expanded=${this.open}
                    aria-controls="content"
                    ?disabled=${this.disabled}
                >
                    ${this.label}
                </button>
                <sp-icon-chevron100
                    class="indicator spectrum-UIIcon-ChevronRight100"
                ></sp-icon-chevron100>
            </h3>
            <div id="content" role="region" aria-labelledby="header">
                <slot></slot>
            </div>
        `}updated(t){super.updated(t),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}}Ar([(0,d.Cb)({type:Boolean,reflect:!0})],_r.prototype,"open",2),Ar([(0,d.Cb)({type:String,reflect:!0})],_r.prototype,"label",2),Ar([(0,d.Cb)({type:Boolean,reflect:!0})],_r.prototype,"disabled",2),customElements.define("sp-accordion-item",_r);const Tr=t.iv`
:host{--spectrum-sidenav-item-padding-y:var(
--spectrum-global-dimension-size-65
)}:host{list-style-type:none;margin:0;padding:0}:host{--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,var(--spectrum-global-font-weight-regular)
);display:block;width:240px}:host([variant=multilevel]){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-multilevel-main-item-font-weight,var(--spectrum-global-font-weight-bold)
)}
`,Ur=t.iv`
#list{--spectrum-sidenav-item-padding-y:var(
--spectrum-global-dimension-size-65
);list-style-type:none;margin:0;padding:0}:host{list-style-type:none;margin-bottom:var(
--spectrum-sidenav-item-gap,var(--spectrum-global-dimension-size-50)
);margin-left:0;margin-right:0;margin-top:var(
--spectrum-sidenav-item-gap,var(--spectrum-global-dimension-size-50)
)}#item-link{align-items:center;border-radius:var(
--spectrum-sidenav-item-border-radius,var(--spectrum-alias-border-radius-regular)
);box-sizing:border-box;cursor:pointer;display:inline-flex;font-size:var(
--spectrum-sidenav-item-text-size,var(--spectrum-alias-font-size-default)
);font-style:normal;font-weight:var(
--spectrum-sidenav-item-text-font-weight,var(--spectrum-global-font-weight-regular)
);-webkit-hyphens:auto;hyphens:auto;justify-content:left;min-height:var(
--spectrum-sidenav-item-height,var(--spectrum-alias-single-line-height)
);padding:var(--spectrum-sidenav-item-padding-y) var(
--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)
);position:relative;text-decoration:none;transition:background-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out;width:100%;word-break:break-word}#item-link:focus{outline:none}#item-link:before{border:var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) solid transparent;border-radius:var(
--spectrum-sidenav-item-border-radius,var(--spectrum-alias-border-radius-regular)
);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0;transition:border var(--spectrum-global-animation-duration-100,.13s) ease-out}:host([dir=ltr]) #item-link ::slotted([slot=icon]){margin-right:var(
--spectrum-sidenav-icon-gap,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) #item-link ::slotted([slot=icon]){margin-left:var(
--spectrum-sidenav-icon-gap,var(--spectrum-global-dimension-size-100)
)}#item-link ::slotted([slot=icon]){flex-shrink:0}:host([dir=ltr]) .spectrum-SideNav-heading{margin-right:0}:host([dir=rtl]) .spectrum-SideNav-heading{margin-left:0}:host([dir=ltr]) .spectrum-SideNav-heading{margin-left:0}:host([dir=rtl]) .spectrum-SideNav-heading{margin-right:0}:host([dir=ltr]) .spectrum-SideNav--multiLevel #list #item-link{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-margin-left,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) .spectrum-SideNav--multiLevel #list #item-link{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-margin-left,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=ltr]) .spectrum-SideNav--multiLevel #list #list #item-link{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-margin-left,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) .spectrum-SideNav--multiLevel #list #list #item-link{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-margin-left,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([selected])>#item-link{background-color:var(
--spectrum-sidenav-item-background-color-selected,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-selected,var(--spectrum-alias-text-color-hover)
)}.is-active>#item-link{background-color:var(
--spectrum-sidenav-item-background-color-down,var(--spectrum-alias-highlight-hover)
)}:host([disabled]) #item-link{background-color:var(
--spectrum-sidenav-item-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-sidenav-item-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);cursor:default;pointer-events:none}#item-link{background-color:var(
--spectrum-sidenav-item-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-sidenav-item-text-color,var(--spectrum-alias-text-color)
)}#item-link:hover{background-color:var(
--spectrum-sidenav-item-background-color-hover,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-hover,var(--spectrum-alias-text-color-hover)
)}#item-link:active{background-color:var(
--spectrum-sidenav-item-background-color-down,var(--spectrum-alias-highlight-hover)
)}#item-link.focus-visible{background-color:var(
--spectrum-sidenav-item-background-color-key-focus,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#item-link:focus-visible{background-color:var(
--spectrum-sidenav-item-background-color-key-focus,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#item-link.focus-visible:before{border-color:var(
--spectrum-sidenav-item-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#item-link.focus-visible:before{border-color:var(
--spectrum-sidenav-item-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#item-link:focus-visible:before{border-color:var(
--spectrum-sidenav-item-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}@media (forced-colors:active){:host{--spectrum-sidenav-item-text-color-selected:HighlightText;--spectrum-sidenav-item-background-color-selected:Highlight;--spectrum-sidenav-item-background-color-disabled:ButtonFace;--spectrum-sidenav-item-text-color-disabled:GrayText;--spectrum-sidenav-item-background-color:ButtonFace;--spectrum-sidenav-item-text-color:ButtonText;--spectrum-sidenav-item-background-color-hover:ButtonFace;--spectrum-sidenav-item-text-color-hover:ButtonText;--spectrum-sidenav-item-background-color-down:ButtonFace;--spectrum-sidenav-item-background-color-key-focus:ButtonFace;--spectrum-sidenav-item-text-color-key-focus:ButtonText;--spectrum-sidenav-item-border-color-key-focus:ButtonText;forced-color-adjust:none}}:host{display:block}:host([disabled]){pointer-events:none}:host([multiLevel]){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,700
)}::slotted(sp-sidenav-item:not([multiLevel])){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,400
)}#item-link{font-weight:var(--spectrum-web-component-sidenav-font-weight);justify-content:start}:host([dir=ltr]) #item-link[data-level="1"]{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level1,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=ltr]) #item-link[data-level="2"]{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level2,
var(--spectrum-global-dimension-size-300)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) #item-link[data-level="1"]{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level1,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) #item-link[data-level="2"]{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level2,
var(--spectrum-global-dimension-size-300)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}a ::slotted(sp-sidenav-item){display:none}
`;var Pr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,Lr=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?jr(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&Pr(e,o,c),c};const Or=class extends(ht(L)){constructor(){super(...arguments),this.value=void 0,this.selected=!1,this.expanded=!1}static get styles(){return[Ur]}get parentSideNav(){return this._parentSidenav||(this._parentSidenav=this.closest("sp-sidenav")),this._parentSidenav}get hasChildren(){return!!this.querySelector("sp-sidenav-item")}get depth(){let t=0,e=this.parentElement;for(;e instanceof Or;)t++,e=e.parentElement;return t}handleSideNavSelect(t){this.selected=t.target===this}handleClick(t){!this.href&&t&&t.preventDefault(),!this.disabled&&(!this.href||null!=t&&t.defaultPrevented)&&(this.hasChildren?this.expanded=!this.expanded:this.value&&this.announceSelected(this.value))}announceSelected(t){const e=new CustomEvent("sidenav-select",{bubbles:!0,composed:!0,detail:{value:t}});this.dispatchEvent(e)}click(){this.handleClick()}get focusElement(){return this.shadowRoot.querySelector("#item-link")}update(t){this.hasAttribute("slot")||(this.slot="descendant"),super.update(t)}render(){return t.dy`
            <a
                href=${this.href||"#"}
                target=${(0,S.o)(this.target)}
                download=${(0,S.o)(this.download)}
                rel=${(0,S.o)(this.rel)}
                data-level="${this.depth}"
                @click="${this.handleClick}"
                id="item-link"
                aria-current=${(0,S.o)(this.selected&&this.href?"page":void 0)}
            >
                <slot name="icon"></slot>
                ${this.label}
                <slot></slot>
            </a>
            ${this.expanded?t.dy`
                      <slot name="descendant"></slot>
                  `:t.dy``}
        `}updated(t){this.hasChildren&&this.expanded&&!this.selected&&(this.focusElement.tabIndex=-1),super.updated(t)}connectedCallback(){super.connectedCallback(),this.startTrackingSelection()}disconnectedCallback(){this.stopTrackingSelection(),super.disconnectedCallback()}async startTrackingSelection(){const t=this.parentSideNav;if(t&&(await t.updateComplete,t.startTrackingSelectionForItem(this),this.selected=null!=this.value&&this.value===t.value,!0===this.selected&&"multilevel"===t.variant)){let t=this.parentElement;for(;t instanceof Or;)t.expanded=!0,t=t.parentElement}}stopTrackingSelection(){const t=this.parentSideNav;t&&t.stopTrackingSelectionForItem(this),this._parentSidenav=void 0}};let Br=Or;Lr([(0,d.Cb)()],Br.prototype,"value",2),Lr([(0,d.Cb)({type:Boolean,reflect:!0})],Br.prototype,"selected",2),Lr([(0,d.Cb)({type:Boolean,reflect:!0})],Br.prototype,"expanded",2);const Dr=t.iv`
#list{--spectrum-sidenav-item-padding-y:var(
--spectrum-global-dimension-size-65
);list-style-type:none;margin:0;padding:0}:host([dir=ltr]) #heading{margin-right:0}:host([dir=rtl]) #heading{margin-left:0}:host([dir=ltr]) #heading{margin-left:0}:host([dir=rtl]) #heading{margin-right:0}#heading{border-radius:var(
--spectrum-sidenav-heading-border-radius,var(--spectrum-alias-border-radius-regular)
);color:var(
--spectrum-sidenav-heading-text-color,var(--spectrum-global-color-gray-700)
);font-size:var(
--spectrum-sidenav-heading-text-size,var(--spectrum-global-dimension-font-size-50)
);font-style:normal;font-weight:var(
--spectrum-sidenav-heading-text-font-weight,var(--spectrum-global-font-weight-medium)
);height:var(
--spectrum-sidenav-heading-height,var(--spectrum-alias-single-line-height)
);letter-spacing:var(
--spectrum-sidenav-heading-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-sidenav-heading-height,var(--spectrum-alias-single-line-height)
);margin-bottom:var(
--spectrum-sidenav-heading-gap-bottom,var(--spectrum-global-dimension-size-50)
);margin-top:var(
--spectrum-sidenav-heading-gap-top,var(--spectrum-global-dimension-size-200)
);padding-bottom:0;padding-left:var(
--spectrum-sidenav-heading-padding-x,var(--spectrum-global-dimension-size-150)
);padding-right:var(
--spectrum-sidenav-heading-padding-x,var(--spectrum-global-dimension-size-150)
);padding-top:0;text-transform:uppercase}:host{display:block}
`;var Fr=Object.defineProperty;Object.getOwnPropertyDescriptor;class Mr extends u.o{constructor(){super(...arguments),this.label=""}static get styles(){return[Ur,Dr]}update(t){this.hasAttribute("slot")||(this.slot="descendant"),super.update(t)}render(){return t.dy`
            <h2 id="heading">${this.label}</h2>
            <div id="list" aria-labelledby="heading">
                <slot name="descendant"></slot>
            </div>
        `}}((t,e,o,r)=>{for(var s,c=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(c=s(e,o,c)||c);c&&Fr(e,o,c)})([(0,d.Cb)({reflect:!0})],Mr.prototype,"label");var Rr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Nr=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?Hr(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&Rr(e,o,c),c};class Vr extends L{constructor(){super(...arguments),this.items=new Set,this.rovingTabindexController=new D(this,{focusInIndex:t=>t.findIndex((t=>this.value?!t.disabled&&!this.isDisabledChild(t)&&t.value===this.value:!t.disabled&&!this.isDisabledChild(t))),direction:"vertical",elements:()=>[...this.querySelectorAll("sp-sidenav-item")],isFocusableElement:t=>!t.disabled&&!this.isDisabledChild(t)}),this.manageTabIndex=!1,this.value=void 0,this.variant=void 0}static get styles(){return[Tr]}startTrackingSelectionForItem(t){this.items.add(t),this.rovingTabindexController.clearElementCache()}stopTrackingSelectionForItem(t){this.items.delete(t),this.rovingTabindexController.clearElementCache()}handleSelect(t){if(t.stopPropagation(),this.value===t.detail.value)return;const e=this.value;this.value=t.detail.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))?this.items.forEach((e=>e.handleSideNavSelect(t))):(this.value=e,t.target.selected=!1,t.preventDefault())}focus(){this.rovingTabindexController.focus()}blur(){this.focusElement!==this&&super.blur()}click(){this.focusElement!==this&&super.click()}get focusElement(){return this.rovingTabindexController.focusInElement||this}isDisabledChild(t){if(t.disabled)return!0;let e=t.parentElement;for(;e instanceof Mr||!e.disabled&&e instanceof Br&&e.expanded;)e=e.parentElement;return e!==this}handleSlotchange(){this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage()}render(){return t.dy`
            <nav @sidenav-select=${this.handleSelect}>
                <slot
                    name="descendant"
                    @slotchange=${this.handleSlotchange}
                ></slot>
            </nav>
        `}willUpdate(){if(!this.hasUpdated){const t=this.querySelector("[selected]");t&&(this.value=t.value)}}updated(t){super.updated(t),t.has("manageTabIndex")&&(this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage())}}Nr([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"manage-tab-index"})],Vr.prototype,"manageTabIndex",2),Nr([(0,d.Cb)({reflect:!0})],Vr.prototype,"value",2),Nr([(0,d.Cb)({reflect:!0})],Vr.prototype,"variant",2),customElements.define("sp-sidenav",Vr),customElements.define("sp-sidenav-heading",Mr),customElements.define("sp-sidenav-item",Br);const Kr=t.iv`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(--mod-font-family-base,var(--spectrum-font-family-base));line-height:var(
--mod-line-height-small,var(--spectrum-line-height-small)
);margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,border-color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-block-end:-2px;margin-block-start:-2px;padding:0}:host(:disabled){cursor:default}:host{--spectrum-closebutton-size-300:24px;--spectrum-closebutton-size-400:32px;--spectrum-closebutton-size-500:40px;--spectrum-closebutton-size-600:48px;--spectrum-closebutton-icon-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-closebutton-icon-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-closebutton-icon-color-down:var(
--spectrum-neutral-content-color-down
);--spectrum-closebutton-icon-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-closebutton-icon-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-closebutton-focus-indicator-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-closebutton-focus-indicator-gap:var(
--spectrum-focus-indicator-gap
);--spectrum-closebutton-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-closebutton-height:var(--spectrum-component-height-100);--spectrum-closebutton-width:var(--spectrum-closebutton-height);--spectrum-closebutton-size:var(--spectrum-closebutton-size-400);--spectrum-closebutton-border-radius:var(--spectrum-closebutton-size-400);--spectrum-closebutton-animation-duration:var(
--spectrum-animation-duration-100
)}:host([variant=white]){--spectrum-closebutton-static-background-color-default:transparent;--spectrum-closebutton-static-background-color-hover:var(
--spectrum-transparent-white-300
);--spectrum-closebutton-static-background-color-down:var(
--spectrum-transparent-white-400
);--spectrum-closebutton-static-background-color-focus:var(
--spectrum-transparent-white-300
);--spectrum-closebutton-icon-color-default:var(--spectrum-white);--spectrum-closebutton-icon-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--spectrum-closebutton-focus-indicator-color:var(
--spectrum-static-white-focus-indicator-color
)}:host([variant=black]){--spectrum-closebutton-static-background-color-default:transparent;--spectrum-closebutton-static-background-color-hover:var(
--spectrum-transparent-black-300
);--spectrum-closebutton-static-background-color-down:var(
--spectrum-transparent-black-400
);--spectrum-closebutton-static-background-color-focus:var(
--spectrum-transparent-black-300
);--spectrum-closebutton-icon-color-default:var(--spectrum-black);--spectrum-closebutton-icon-color-disabled:var(
--spectrum-disabled-static-black-content-color
);--spectrum-closebutton-focus-indicator-color:var(
--spectrum-static-black-focus-indicator-color
)}@media (forced-colors:active){:host{--highcontrast-closebutton-icon-color-disabled:GrayText;--highcontrast-closebutton-icon-color-down:Highlight;--highcontrast-closebutton-icon-color-hover:Highlight;--highcontrast-closebutton-icon-color-focus:Highlight;--highcontrast-closebutton-background-color-default:ButtonFace;--highcontrast-closebutton-focus-indicator-color:ButtonText}:host(.focus-visible):after{border-radius:100%;bottom:0;box-shadow:0 0 0 var(
--mod-closebutton-focus-indicator-thickness,var(--spectrum-closebutton-focus-indicator-thickness)
) var(
--highcontrast-closebutton-focus-indicator-color,var(
--mod-closebutton-focus-indicator-color,var(--spectrum-closebutton-focus-indicator-color)
)
);content:"";display:block;forced-color-adjust:none;left:0;margin:var(
--mod-closebutton-focus-indicator-gap,var(--spectrum-closebutton-focus-indicator-gap)
);position:absolute;right:0;top:0;transition:opacity var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-out,margin var(
--mod-closebutton-animation-duraction,var(--spectrum-closebutton-animation-duration)
) ease-out}:host(.focus-visible):after{border-radius:100%;bottom:0;box-shadow:0 0 0 var(
--mod-closebutton-focus-indicator-thickness,var(--spectrum-closebutton-focus-indicator-thickness)
) var(
--highcontrast-closebutton-focus-indicator-color,var(
--mod-closebutton-focus-indicator-color,var(--spectrum-closebutton-focus-indicator-color)
)
);content:"";display:block;forced-color-adjust:none;left:0;margin:var(
--mod-closebutton-focus-indicator-gap,var(--spectrum-closebutton-focus-indicator-gap)
);position:absolute;right:0;top:0;transition:opacity var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-out,margin var(
--mod-closebutton-animation-duraction,var(--spectrum-closebutton-animation-duration)
) ease-out}:host(:focus-visible):after{border-radius:100%;bottom:0;box-shadow:0 0 0 var(
--mod-closebutton-focus-indicator-thickness,var(--spectrum-closebutton-focus-indicator-thickness)
) var(
--highcontrast-closebutton-focus-indicator-color,var(
--mod-closebutton-focus-indicator-color,var(--spectrum-closebutton-focus-indicator-color)
)
);content:"";display:block;forced-color-adjust:none;left:0;margin:var(
--mod-closebutton-focus-indicator-gap,var(--spectrum-closebutton-focus-indicator-gap)
);position:absolute;right:0;top:0;transition:opacity var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-out,margin var(
--mod-closebutton-animation-duraction,var(--spectrum-closebutton-animation-duration)
) ease-out}:host([variant=black]){--highcontrast-closebutton-static-background-color-default:ButtonFace;--highcontrast-closebutton-icon-color-default:Highlight;--highcontrast-closebutton-icon-color-disabled:GrayText}:host([variant=white]){--highcontrast-closebutton-static-background-color-default:ButtonFace;--highcontrast-closebutton-icon-color-default:Highlight;--highcontrast-closebutton-icon-color-disabled:Highlight}}:host{align-items:center;border-color:transparent;border-radius:var(
--mod-closebutton-border-radius,var(--spectrum-closebutton-border-radius)
);border-width:0;color:inherit;display:inline-flex;flex-direction:row;height:var(
--mod-closebutton-height,var(--spectrum-closebutton-height)
);justify-content:center;padding:0;position:relative;transition:border-color var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-in-out;width:var(--mod-closebutton-width,var(--spectrum-closebutton-width))}:host:after{border-radius:calc(var(--mod-closebutton-size, var(--spectrum-closebutton-size)) + var(
--mod-closebutton-focus-indicator-gap,
var(--spectrum-closebutton-focus-indicator-gap)
));bottom:0;content:"";left:0;margin:calc(var(
--mod-closebutton-focus-indicator-gap,
var(--spectrum-closebutton-focus-indicator-gap)
)*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-in-out}:host(.focus-visible){box-shadow:none}:host(.focus-visible){box-shadow:none}:host(:focus-visible){box-shadow:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-closebutton-focus-indicator-thickness,var(--spectrum-closebutton-focus-indicator-thickness)
) var(
--highcontrast-closebutton-focus-indicator-color,var(
--mod-closebutton-focus-indicator-color,var(--spectrum-closebutton-focus-indicator-color)
)
)}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-closebutton-focus-indicator-thickness,var(--spectrum-closebutton-focus-indicator-thickness)
) var(
--highcontrast-closebutton-focus-indicator-color,var(
--mod-closebutton-focus-indicator-color,var(--spectrum-closebutton-focus-indicator-color)
)
)}:host(:focus-visible):after{box-shadow:0 0 0 var(
--mod-closebutton-focus-indicator-thickness,var(--spectrum-closebutton-focus-indicator-thickness)
) var(
--highcontrast-closebutton-focus-indicator-color,var(
--mod-closebutton-focus-indicator-color,var(--spectrum-closebutton-focus-indicator-color)
)
)}:host(:not(:disabled)){background-color:var(
--highcontrast-closebutton-background-color-default,var(
--mod-closebutton-background-color-default,var(--spectrum-closebutton-background-color-default)
)
)}:host(:not(:disabled):hover){background-color:var(
--mod-closebutton-background-color-hover,var(--spectrum-closebutton-background-color-hover)
)}:host(:not(:disabled):hover) .icon{color:var(
--highcontrast-closebutton-icon-color-hover,var(
--mod-closebutton-icon-color-hover,var(--spectrum-closebutton-icon-color-hover)
)
)}:host(:not(:disabled)[active]){background-color:var(
--mod-closebutton-background-color-down,var(--spectrum-closebutton-background-color-down)
)}:host(:not(:disabled)[active]) .icon{color:var(
--highcontrast-closebutton-icon-color-down,var(
--mod-closebutton-icon-color-down,var(--spectrum-closebutton-icon-color-down)
)
)}:host(:not(:disabled).focus-visible),:host(:not(:disabled)[focused]){background-color:var(
--mod-closebutton-background-color-focus,var(--spectrum-closebutton-background-color-focus)
)}:host(:not(:disabled).focus-visible),:host(:not(:disabled)[focused]){background-color:var(
--mod-closebutton-background-color-focus,var(--spectrum-closebutton-background-color-focus)
)}:host(:not(:disabled):focus-visible),:host(:not(:disabled)[focused]){background-color:var(
--mod-closebutton-background-color-focus,var(--spectrum-closebutton-background-color-focus)
)}:host(:not(:disabled).focus-visible) .icon,:host(:not(:disabled)[focused]) .icon{color:var(
--highcontrast-closebutton-icon-color-focus,var(
--mod-closebutton-icon-color-focus,var(--spectrum-closebutton-icon-color-focus)
)
)}:host(:not(:disabled).focus-visible) .icon,:host(:not(:disabled)[focused]) .icon{color:var(
--highcontrast-closebutton-icon-color-focus,var(
--mod-closebutton-icon-color-focus,var(--spectrum-closebutton-icon-color-focus)
)
)}:host(:not(:disabled):focus-visible) .icon,:host(:not(:disabled)[focused]) .icon{color:var(
--highcontrast-closebutton-icon-color-focus,var(
--mod-closebutton-icon-color-focus,var(--spectrum-closebutton-icon-color-focus)
)
)}:host(:not(:disabled)) .icon{color:var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)}:host(:not(:disabled).is-focused) .icon,:host(:not(:disabled):focus) .icon{color:var(
--highcontrast-closebutton-icon-color-focus,var(
--mod-closebutton-icon-color-focus,var(--spectrum-closebutton-icon-color-focus)
)
)}:host(:disabled){background-color:var(
--mod-closebutton-background-color-default,var(--spectrum-closebutton-background-color-default)
)}:host(:disabled) .icon{color:var(
--highcontrast-closebutton-icon-color-disabled,var(
--mod-closebutton-icon-color-disabled,var(--spectrum-closebutton-icon-color-disabled)
)
)}:host([variant=black]:not(:disabled)),:host([variant=white]:not(:disabled)){background-color:var(
--highcontrast-closebutton-static-background-color-default,var(
--mod-closebutton-static-background-color-default,var(--spectrum-closebutton-static-background-color-default)
)
)}:host([variant=black]:not(:disabled):hover),:host([variant=white]:not(:disabled):hover){background-color:var(
--highcontrast-closebutton-static-background-color-hover,var(
--mod-closebutton-static-background-color-hover,var(--spectrum-closebutton-static-background-color-hover)
)
)}:host([variant=black]:not(:disabled):hover) .icon,:host([variant=white]:not(:disabled):hover) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([variant=black][active]:not(:disabled)),:host([variant=white][active]:not(:disabled)){background-color:var(
--highcontrast-closebutton-static-background-color-down,var(
--mod-closebutton-static-background-color-down,var(--spectrum-closebutton-static-background-color-down)
)
)}:host([variant=black][active]:not(:disabled)) .icon,:host([variant=white][active]:not(:disabled)) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([variant=black]:not(:disabled).focus-visible),:host([variant=black][focused]:not(:disabled)),:host([variant=white]:not(:disabled).focus-visible),:host([variant=white][focused]:not(:disabled)){background-color:var(
--highcontrast-closebutton-static-background-color-focus,var(
--mod-closebutton-static-background-color-focus,var(--spectrum-closebutton-static-background-color-focus)
)
)}:host([variant=black]:not(:disabled).focus-visible),:host([variant=black][focused]:not(:disabled)),:host([variant=white]:not(:disabled).focus-visible),:host([variant=white][focused]:not(:disabled)){background-color:var(
--highcontrast-closebutton-static-background-color-focus,var(
--mod-closebutton-static-background-color-focus,var(--spectrum-closebutton-static-background-color-focus)
)
)}:host([variant=black]:not(:disabled):focus-visible),:host([variant=black][focused]:not(:disabled)),:host([variant=white]:not(:disabled):focus-visible),:host([variant=white][focused]:not(:disabled)){background-color:var(
--highcontrast-closebutton-static-background-color-focus,var(
--mod-closebutton-static-background-color-focus,var(--spectrum-closebutton-static-background-color-focus)
)
)}:host([variant=black]:not(:disabled).focus-visible) .icon,:host([variant=black][focused]:not(:disabled)) .icon,:host([variant=white]:not(:disabled).focus-visible) .icon,:host([variant=white][focused]:not(:disabled)) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([variant=black]:not(:disabled).focus-visible) .icon,:host([variant=black][focused]:not(:disabled)) .icon,:host([variant=white]:not(:disabled).focus-visible) .icon,:host([variant=white][focused]:not(:disabled)) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([variant=black]:not(:disabled):focus-visible) .icon,:host([variant=black][focused]:not(:disabled)) .icon,:host([variant=white]:not(:disabled):focus-visible) .icon,:host([variant=white][focused]:not(:disabled)) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([variant=black]:not(:disabled)) .is-focused .icon,:host([variant=black]:not(:disabled):focus) .icon,:host([variant=white]:not(:disabled)) .is-focused .icon,:host([variant=white]:not(:disabled):focus) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([variant=black]:not(:disabled)) .icon,:host([variant=white]:not(:disabled)) .icon{color:var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)}:host([variant=black]:disabled) .icon,:host([variant=white]:disabled) .icon{color:var(
--highcontrast-closebutton-icon-disabled,var(
--mod-closebutton-icon-color-disabled,var(--spectrum-closebutton-icon-color-disabled)
)
)}.icon{margin:0}:host{--spectrum-closebutton-background-color-default:var(
--system-spectrum-closebutton-background-color-default
);--spectrum-closebutton-background-color-hover:var(
--system-spectrum-closebutton-background-color-hover
);--spectrum-closebutton-background-color-down:var(
--system-spectrum-closebutton-background-color-down
);--spectrum-closebutton-background-color-focus:var(
--system-spectrum-closebutton-background-color-focus
)}
`;customElements.define("sp-icon-cross75",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Cross75"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M5.188 4l2.14-2.14A.84.84 0 106.141.672L4 2.812 1.86.672A.84.84 0 00.672 1.86L2.812 4 .672 6.14A.84.84 0 101.86 7.328L4 5.188l2.14 2.14A.84.84 0 107.328 6.14z"
    />
  </svg>`)()}}),customElements.define("sp-icon-cross100",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Cross100"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M5.238 4l2.456-2.457A.875.875 0 106.456.306L4 2.763 1.543.306A.875.875 0 00.306 1.544L2.763 4 .306 6.457a.875.875 0 101.238 1.237L4 5.237l2.456 2.457a.875.875 0 101.238-1.237z"
    />
  </svg>`)()}}),customElements.define("sp-icon-cross200",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Cross200"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M6.29 5l2.922-2.922a.911.911 0 00-1.29-1.29L5 3.712 2.078.789a.911.911 0 00-1.29 1.289L3.712 5 .79 7.922a.911.911 0 101.289 1.29L5 6.288 7.923 9.21a.911.911 0 001.289-1.289z"
    />
  </svg>`)()}}),customElements.define("sp-icon-cross300",class extends v{render(){return Ct(t.dy),(({width:t=24,height:e=24,title:o="Cross300"}={})=>zt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M7.344 6l3.395-3.396a.95.95 0 00-1.344-1.342L6 4.657 2.604 1.262a.95.95 0 00-1.342 1.342L4.657 6 1.262 9.396a.95.95 0 001.343 1.343L6 7.344l3.395 3.395a.95.95 0 001.344-1.344z"
    />
  </svg>`)()}});const Gr=t.iv`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Cross75{height:var(--spectrum-alias-ui-icon-cross-size-75);width:var(
--spectrum-alias-ui-icon-cross-size-75
)}.spectrum-UIIcon-Cross100{height:var(--spectrum-alias-ui-icon-cross-size-100);width:var(
--spectrum-alias-ui-icon-cross-size-100
)}.spectrum-UIIcon-Cross200{height:var(--spectrum-alias-ui-icon-cross-size-200);width:var(
--spectrum-alias-ui-icon-cross-size-200
)}.spectrum-UIIcon-Cross300{height:var(--spectrum-alias-ui-icon-cross-size-300);width:var(
--spectrum-alias-ui-icon-cross-size-300
)}.spectrum-UIIcon-Cross400{height:var(--spectrum-alias-ui-icon-cross-size-400);width:var(
--spectrum-alias-ui-icon-cross-size-400
)}.spectrum-UIIcon-Cross500{height:var(--spectrum-alias-ui-icon-cross-size-500);width:var(
--spectrum-alias-ui-icon-cross-size-500
)}.spectrum-UIIcon-Cross600{height:var(--spectrum-alias-ui-icon-cross-size-600);width:var(
--spectrum-alias-ui-icon-cross-size-600
)}
`;var Wr=Object.defineProperty;Object.getOwnPropertyDescriptor;const Yr={s:()=>t.dy`
        <sp-icon-cross75
            slot="icon"
            class="icon spectrum-UIIcon-Cross75"
        ></sp-icon-cross75>
    `,m:()=>t.dy`
        <sp-icon-cross100
            slot="icon"
            class="icon spectrum-UIIcon-Cross100"
        ></sp-icon-cross100>
    `,l:()=>t.dy`
        <sp-icon-cross200
            slot="icon"
            class="icon spectrum-UIIcon-Cross200"
        ></sp-icon-cross200>
    `,xl:()=>t.dy`
        <sp-icon-cross300
            slot="icon"
            class="icon spectrum-UIIcon-Cross300"
        ></sp-icon-cross300>
    `};class Zr extends(z(jt)){constructor(){super(...arguments),this.variant=""}static get styles(){return[...super.styles,Kr,Gr]}get buttonContent(){return[Yr[this.size]()]}}((t,e,o,r)=>{for(var s,c=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(c=s(e,o,c)||c);c&&Wr(e,o,c)})([(0,d.Cb)({reflect:!0})],Zr.prototype,"variant"),customElements.define("sp-close-button",Zr),customElements.define("sp-icon-info",class extends v{render(){return x(t.dy),(({width:t=24,height:e=24,hidden:o=!1,title:r="Info"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${o?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${r}
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm-.3 4.3a2.718 2.718 0 0 1 2.864 2.824 2.664 2.664 0 0 1-2.864 2.863 2.705 2.705 0 0 1-2.864-2.864A2.717 2.717 0 0 1 17.7 6.3ZM22 27a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-6h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9h1a1 1 0 0 1 1 1Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}),customElements.define("sp-icon-checkmark-circle",class extends v{render(){return x(t.dy),(({width:t=24,height:e=24,hidden:o=!1,title:r="Checkmark Circle"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    width=${t}
    height=${e}
    viewBox="0 0 36 36"
    aria-hidden=${o?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${r}
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm10.666 9.08L16.018 27.341a1.208 1.208 0 0 1-.875.461c-.024.002-.05.002-.073.002a1.2 1.2 0 0 1-.85-.351l-7.784-7.795a1.2 1.2 0 0 1 0-1.698l1.326-1.325a1.201 1.201 0 0 1 1.695 0l5.346 5.347L25.314 8.473A1.203 1.203 0 0 1 27 8.263l1.455 1.133a1.205 1.205 0 0 1 .211 1.684Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});const Xr=t.iv`
:host{--spectrum-toast-font-weight:var(
--spectrum-font-weight-regular
);--spectrum-toast-font-size:var(--spectrum-font-size-100);--spectrum-toast-corner-radius:var(--spectrum-corner-radius-100);--spectrum-toast-block-size:var(--spectrum-toast-height);--spectrum-toast-border-width:var(--spectrum-border-width-100);--spectrum-toast-line-height:var(--spectrum-line-height-100);--spectrum-toast-line-height-cjk:var(--spectrum-line-height-cjk-100);--spectrum-toast-spacing-icon-to-text:var(--spectrum-text-to-visual-100);--spectrum-toast-spacing-start-edge-to-text-and-icon:var(
--spectrum-spacing-300
);--spectrum-toast-spacing-text-and-action-button-to-divider:var(
--spectrum-spacing-300
);--spectrum-toast-spacing-top-edge-to-divider:var(--spectrum-spacing-100);--spectrum-toast-spacing-bottom-edge-to-divider:var(
--spectrum-spacing-100
);--spectrum-toast-spacing-top-edge-to-icon:var(
--spectrum-toast-top-to-workflow-icon
);--spectrum-toast-spacing-text-to-action-button-horizontal:var(
--spectrum-spacing-300
);--spectrum-toast-spacing-close-button:var(--spectrum-spacing-100);--spectrum-toast-spacing-block-start:var(--spectrum-spacing-100);--spectrum-toast-spacing-block-end:var(--spectrum-spacing-100);--spectrum-toast-spacing-top-edge-to-text:var(
--spectrum-toast-top-to-text
);--spectrum-toast-spacing-bottom-edge-to-text:var(
--spectrum-toast-bottom-to-text
);--spectrum-toast-negative-background-color-default:var(
--spectrum-negative-background-color-default
);--spectrum-toast-positive-background-color-default:var(
--spectrum-positive-background-color-default
);--spectrum-toast-informative-background-color-default:var(
--spectrum-informative-background-color-default
);--spectrum-toast-text-and-icon-color:var(--spectrum-white);--spectrum-toast-divider-color:var(--spectrum-transparent-white-300)}@media (forced-colors:active){:host{--highcontrast-toast-border-color:ButtonText;border:var(
--mod-toast-border-width,var(--spectrum-toast-border-width)
) solid var(--highcontrast-toast-border-color,transparent)}}:host{-webkit-font-smoothing:antialiased;align-items:stretch;background-color:var(
--highcontrast-toast-background-color-default,var(
--mod-toast-background-color-default,var(--spectrum-toast-background-color-default)
)
);border-radius:var(
--mod-toast-corner-radius,var(--spectrum-toast-corner-radius)
);box-sizing:border-box;color:var(
--highcontrast-toast-background-color-default,var(
--mod-toast-background-color-default,var(--spectrum-toast-background-color-default)
)
);display:inline-flex;flex-direction:row;font-size:var(--mod-toast-font-size,var(--spectrum-toast-font-size));font-weight:var(
--mod-toast-font-weight,var(--spectrum-toast-font-weight)
);min-block-size:var(--spectrum-toast-block-size);padding-inline-start:var(
--mod-toast-spacing-start-edge-to-text-and-icon,var(--spectrum-toast-spacing-start-edge-to-text-and-icon)
)}:host([variant=negative]){background-color:var(
--highcontrast-toast-negative-background-color-default,var(
--mod-toast-negative-background-color-default,var(--spectrum-toast-negative-background-color-default)
)
);color:var(
--highcontrast-toast-negative-background-color-default,var(
--mod-toast-negative-background-color-default,var(--spectrum-toast-negative-background-color-default)
)
)}:host([variant=negative]) .closeButton.focus-visible:not(:active){color:var(
--highcontrast-toast-negative-background-color-default,var(
--mod-toast-negative-background-color-default,var(--spectrum-toast-negative-background-color-default)
)
)}:host([variant=negative]) .closeButton.focus-visible:not(:active){color:var(
--highcontrast-toast-negative-background-color-default,var(
--mod-toast-negative-background-color-default,var(--spectrum-toast-negative-background-color-default)
)
)}:host([variant=negative]) .closeButton:focus-visible:not(:active){color:var(
--highcontrast-toast-negative-background-color-default,var(
--mod-toast-negative-background-color-default,var(--spectrum-toast-negative-background-color-default)
)
)}:host([variant=info]){background-color:var(
--highcontrast-toast-informative-background-color-default,var(
--mod-toast-informative-background-color-default,var(--spectrum-toast-informative-background-color-default)
)
);color:var(
--highcontrast-toast-informative-background-color-default,var(
--mod-toast-informative-background-color-default,var(--spectrum-toast-informative-background-color-default)
)
)}:host([variant=info]) .closeButton.focus-visible:not(:active){color:var(
--highcontrast-toast-informative-background-color-default,var(
--mod-toast-informative-background-color-default,var(--spectrum-toast-informative-background-color-default)
)
)}:host([variant=info]) .closeButton.focus-visible:not(:active){color:var(
--highcontrast-toast-informative-background-color-default,var(
--mod-toast-informative-background-color-default,var(--spectrum-toast-informative-background-color-default)
)
)}:host([variant=info]) .closeButton:focus-visible:not(:active){color:var(
--highcontrast-toast-informative-background-color-default,var(
--mod-toast-informative-background-color-default,var(--spectrum-toast-informative-background-color-default)
)
)}:host([variant=positive]){background-color:var(
--highcontrast-toast-positive-background-color-default,var(
--mod-toast-positive-background-color-default,var(--spectrum-toast-positive-background-color-default)
)
);color:var(
--highcontrast-toast-positive-background-color-default,var(
--mod-toast-positive-background-color-default,var(--spectrum-toast-positive-background-color-default)
)
)}:host([variant=positive]) .closeButton.focus-visible:not(:active){color:var(
--highcontrast-toast-positive-background-color-default,var(
--mod-toast-positive-background-color-default,var(--spectrum-toast-positive-background-color-default)
)
)}:host([variant=positive]) .closeButton.focus-visible:not(:active){color:var(
--highcontrast-toast-positive-background-color-default,var(
--mod-toast-positive-background-color-default,var(--spectrum-toast-positive-background-color-default)
)
)}:host([variant=positive]) .closeButton:focus-visible:not(:active){color:var(
--highcontrast-toast-positive-background-color-default,var(
--mod-toast-positive-background-color-default,var(--spectrum-toast-positive-background-color-default)
)
)}.type{flex-grow:0;flex-shrink:0;margin-block-start:var(
--mod-toast-spacing-top-edge-to-icon,var(--spectrum-toast-spacing-top-edge-to-icon)
);margin-inline-end:var(
--mod-toast-spacing-icon-to-text,var(--spectrum-toast-spacing-icon-to-text)
);margin-inline-start:0}.content,.type{color:var(
--highcontrast-toast-text-and-icon-color,var(
--mod-toast-text-and-icon-color,var(--spectrum-toast-text-and-icon-color)
)
)}.content{box-sizing:border-box;display:inline-block;flex:1 1 auto;line-height:var(
--mod-toast-line-height,var(--spectrum-toast-line-height)
);padding-block-end:calc(var(
--mod-toast-spacing-bottom-edge-to-text,
var(--spectrum-toast-spacing-bottom-edge-to-text)
) - var(
--mod-toast-spacing-block-end,
var(--spectrum-toast-spacing-block-end)
));padding-block-start:calc(var(
--mod-toast-spacing-top-edge-to-text,
var(--spectrum-toast-spacing-top-edge-to-text)
) - var(
--mod-toast-spacing-block-start,
var(--spectrum-toast-spacing-block-start)
));padding-inline-end:var(
--mod-toast-spacing-text-to-action-button-horizontal,var(--spectrum-toast-spacing-text-to-action-button-horizontal)
);padding-inline-start:0;text-align:start}.content:lang(ja),.content:lang(ko),.content:lang(zh){line-height:var(
--mod-toast-line-height-cjk,var(--spectrum-toast-line-height-cjk)
)}.buttons{align-items:flex-start;border-inline-start-color:var(
--mod-toast-divider-color,var(--spectrum-toast-divider-color)
);display:flex;flex:0 0 auto;margin-block-end:var(
--mod-toast-spacing-bottom-edge-to-divider,var(--spectrum-toast-spacing-bottom-edge-to-divider)
);margin-block-start:var(
--mod-toast-spacing-top-edge-to-divider,var(--spectrum-toast-spacing-top-edge-to-divider)
);padding-inline-end:var(
--mod-toast-spacing-close-button,var(--spectrum-toast-spacing-close-button)
)}.buttons .spectrum-CloseButton{align-self:flex-start}.body{align-items:center;align-self:center;display:flex;flex:1 1 auto;flex-wrap:wrap;padding-block-end:var(
--mod-toast-spacing-block-end,var(--spectrum-toast-spacing-block-end)
);padding-block-start:var(
--mod-toast-spacing-block-start,var(--spectrum-toast-spacing-block-start)
)}.body ::slotted([slot=action]){margin-inline-end:var(
--mod-toast-spacing-text-and-action-button-to-divider,var(--spectrum-toast-spacing-text-and-action-button-to-divider)
)}:host([dir=ltr]) .body ::slotted([slot=action]){margin-left:auto}:host([dir=rtl]) .body ::slotted([slot=action]){margin-right:auto;margin-inline-end:var(
--mod-toast-spacing-text-and-action-button-to-divider,var(--spectrum-toast-spacing-text-and-action-button-to-divider)
)}.body+.buttons{border-inline-start-style:solid;border-inline-start-width:1px;padding-inline-start:var(
--mod-toast-spacing-close-button,var(--spectrum-toast-spacing-close-button)
)}:host{--spectrum-toast-background-color-default:var(
--system-spectrum-toast-background-color-default
)}:host(:not([open])){display:none}
`;var Jr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,ts=(t,e,o,r)=>{for(var s,c=r>1?void 0:r?Qr(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(r?s(e,o,c):s(c))||c);return r&&c&&Jr(e,o,c),c};const es=["negative","positive","info","error","warning"];class os extends u.o{constructor(){super(...arguments),this.open=!1,this._timeout=null,this._variant="",this.countdownStart=0,this.nextCount=-1,this.doCountdown=t=>{this.countdownStart||(this.countdownStart=performance.now()),t-this.countdownStart>this._timeout?(this.shouldClose(),this.countdownStart=0):this.countdown()},this.countdown=()=>{cancelAnimationFrame(this.nextCount),this.nextCount=requestAnimationFrame(this.doCountdown)},this.holdCountdown=()=>{this.stopCountdown(),this.addEventListener("focusout",this.resumeCountdown)},this.resumeCountdown=()=>{this.removeEventListener("focusout",this.holdCountdown),this.countdown()}}static get styles(){return[Xr]}set timeout(t){const e=null!==typeof t&&t>0?Math.max(6e3,t):null,o=this.timeout;e&&this.countdownStart&&(this.countdownStart=performance.now()),this._timeout=e,this.requestUpdate("timeout",o)}get timeout(){return this._timeout}set variant(t){if(t===this.variant)return;const e=this.variant;es.includes(t)?(this.setAttribute("variant",t),this._variant=t):(this.removeAttribute("variant"),this._variant=""),this.requestUpdate("variant",e)}get variant(){return this._variant}renderIcon(e){switch(e){case"info":return t.dy`
                    <sp-icon-info
                        label="Information"
                        class="type"
                    ></sp-icon-info>
                `;case"negative":case"error":case"warning":return t.dy`
                    <sp-icon-alert label="Error" class="type"></sp-icon-alert>
                `;case"positive":case"success":return t.dy`
                    <sp-icon-checkmark-circle
                        label="Success"
                        class="type"
                    ></sp-icon-checkmark-circle>
                `;default:return t.dy``}}startCountdown(){this.countdown(),this.addEventListener("focusin",this.holdCountdown)}stopCountdown(){cancelAnimationFrame(this.nextCount),this.countdownStart=0}shouldClose(){this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0,cancelable:!0}))&&this.close()}close(){this.open=!1}render(){return t.dy`
            ${this.renderIcon(this.variant)}
            <div class="body" role="alert">
                <div class="content">
                    <slot></slot>
                </div>
                <slot name="action"></slot>
            </div>
            <div class="buttons">
                <sp-close-button
                    @click=${this.shouldClose}
                    label="Close"
                    variant="white"
                ></sp-close-button>
            </div>
        `}updated(t){super.updated(t),t.has("open")&&(this.open?this.timeout&&this.startCountdown():this.timeout&&this.stopCountdown()),t.has("timeout")&&(null!==this.timeout&&this.open?this.startCountdown():this.stopCountdown())}}ts([(0,d.Cb)({type:Boolean,reflect:!0})],os.prototype,"open",2),ts([(0,d.Cb)({type:Number})],os.prototype,"timeout",1),ts([(0,d.Cb)({type:String})],os.prototype,"variant",1),customElements.define("sp-toast",os)})()})();