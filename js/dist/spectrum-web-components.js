/*! For license information please see spectrum-web-components.js.LICENSE.txt */
(()=>{"use strict";var t,e,o,r,a={655:(t,e,o)=>{function r(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(o[r[a]]=t[r[a]])}return o}function a(t,e,o,r){var a,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(s=(i<3?a(s):i>3?a(e,o,s):a(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s}o.d(e,{_T:()=>r,gn:()=>a}),Object.create,Object.create},599:(t,e,o)=>{o.d(e,{o:()=>c});var r=o(655),a=o(392),i=o(338);const s=new Set;new MutationObserver((()=>{const t="rtl"===document.documentElement.dir?document.documentElement.dir:"ltr";s.forEach((e=>{e.setAttribute("dir",t)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});class c extends(function(t){class e extends t{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return"ltr"===this.dir}hasVisibleFocusInTree(){const t=this.getRootNode().activeElement;if(!t)return!1;try{return t.matches(":focus-visible")||t.matches(".focus-visible")}catch(e){return t.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let e=this.assignedSlot||this.parentNode;for(;e!==document.documentElement&&void 0===(t=e).startManagingContentDirection&&"SP-THEME"!==t.tagName;)e=e.assignedSlot||e.parentNode||e.host;const o=this.dir;if(this.dir="rtl"===e.dir?e.dir:this.dir||"ltr",o===this.dir&&this.setAttribute("dir",this.dir),e===document.documentElement)s.add(this);else{const{localName:t}=e;t.search("-")>-1&&!customElements.get(t)?customElements.whenDefined(t).then((()=>{e.startManagingContentDirection(this)})):e.startManagingContentDirection(this)}this._dirParent=e}var t;super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?s.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return(0,r.gn)([(0,i.Cb)({reflect:!0})],e.prototype,"dir",void 0),e}(a.oi)){}},171:(t,e,o)=>{o.d(e,{i:()=>r});const r=t=>t.querySelector('button:not([tabindex="-1"]), [href]:not([tabindex="-1"]), input:not([tabindex="-1"]), select:not([tabindex="-1"]), textarea:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"]), [focusable]:not([tabindex="-1"])')},731:(t,e,o)=>{o.d(e,{G:()=>r});const r=(t,e,{position:o,prepareCallback:r}={position:"beforeend"})=>{let{length:a}=t;if(0===a)return()=>t;let i=1,s=0;"afterbegin"!==o&&"afterend"!==o||(i=-1,s=a-1);const c=new Array(a),l=new Array(a),n=document.createComment("placeholder for reparented element");do{const a=t[s];r&&(l[s]=r(a)),c[s]=n.cloneNode();const u=a.parentElement||a.getRootNode();u&&u!==a&&u.replaceChild(c[s],a),e.insertAdjacentElement(o,a),s+=i}while(--a>0);return function(){return function(t,e,o=[]){for(let r=0;r<e.length;++r){const a=e[r],i=t[r],s=i.parentElement||i.getRootNode();o[r]&&o[r](a),s&&s!==i&&s.replaceChild(a,i),delete t[r]}return e}(c,t,l)}}},692:(t,e,o)=>{var r;o.d(e,{Al:()=>M,Jb:()=>z,Ld:()=>C,dy:()=>w,sY:()=>I});const a=globalThis.trustedTypes,i=a?a.createPolicy("lit-html",{createHTML:t=>t}):void 0,s=`lit$${(Math.random()+"").slice(9)}$`,c="?"+s,l=`<${c}>`,n=document,u=(t="")=>n.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,m=Array.isArray,p=t=>{var e;return m(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,h=/-->/g,g=/>/g,v=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,f=/'/g,x=/"/g,y=/^(?:script|style|textarea|title)$/i,k=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),w=k(1),z=(k(2),Symbol.for("lit-noChange")),C=Symbol.for("lit-nothing"),q=new WeakMap,I=(t,e,o)=>{var r,a;const i=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let s=i._$litPart$;if(void 0===s){const t=null!==(a=null==o?void 0:o.renderBefore)&&void 0!==a?a:null;i._$litPart$=s=new T(e.insertBefore(u(),t),t,void 0,null!=o?o:{})}return s._$AI(t),s},E=n.createTreeWalker(n,129,null,!1),A=(t,e)=>{const o=t.length-1,r=[];let a,c=2===e?"<svg>":"",n=b;for(let e=0;e<o;e++){const o=t[e];let i,u,d=-1,m=0;for(;m<o.length&&(n.lastIndex=m,u=n.exec(o),null!==u);)m=n.lastIndex,n===b?"!--"===u[1]?n=h:void 0!==u[1]?n=g:void 0!==u[2]?(y.test(u[2])&&(a=RegExp("</"+u[2],"g")),n=v):void 0!==u[3]&&(n=v):n===v?">"===u[0]?(n=null!=a?a:b,d=-1):void 0===u[1]?d=-2:(d=n.lastIndex-u[2].length,i=u[1],n=void 0===u[3]?v:'"'===u[3]?x:f):n===x||n===f?n=v:n===h||n===g?n=b:(n=v,a=void 0);const p=n===v&&t[e+1].startsWith("/>")?" ":"";c+=n===b?o+l:d>=0?(r.push(i),o.slice(0,d)+"$lit$"+o.slice(d)+s+p):o+s+(-2===d?(r.push(void 0),e):p)}const u=c+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==i?i.createHTML(u):u,r]};class S{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,l=0;const n=t.length-1,d=this.parts,[m,p]=A(t,e);if(this.el=S.createElement(m,o),E.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=E.nextNode())&&d.length<n;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(s)){const o=p[l++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(s),e=/([.?@])?(.*)/.exec(o);d.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?U:"?"===e[1]?L:"@"===e[1]?P:F})}else d.push({type:6,index:i})}for(const e of t)r.removeAttribute(e)}if(y.test(r.tagName)){const t=r.textContent.split(s),e=t.length-1;if(e>0){r.textContent=a?a.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],u()),E.nextNode(),d.push({type:2,index:++i});r.append(t[e],u())}}}else if(8===r.nodeType)if(r.data===c)d.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(s,t+1));)d.push({type:7,index:i}),t+=s.length-1}i++}}static createElement(t,e){const o=n.createElement("template");return o.innerHTML=t,o}}function $(t,e,o=t,r){var a,i,s,c;if(e===z)return e;let l=void 0!==r?null===(a=o._$Cl)||void 0===a?void 0:a[r]:o._$Cu;const n=d(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==n&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===n?l=void 0:(l=new n(t),l._$AT(t,o,r)),void 0!==r?(null!==(s=(c=o)._$Cl)&&void 0!==s?s:c._$Cl=[])[r]=l:o._$Cu=l),void 0!==l&&(e=$(t,l._$AS(t,e.values),l,r)),e}class _{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:r}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:n).importNode(o,!0);E.currentNode=a;let i=E.nextNode(),s=0,c=0,l=r[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new T(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new H(i,this,t)),this.v.push(e),l=r[++c]}s!==(null==l?void 0:l.index)&&(i=E.nextNode(),s++)}return a}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class T{constructor(t,e,o,r){var a;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cg=null===(a=null==r?void 0:r.isConnected)||void 0===a||a}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=$(this,t,e),d(t)?t===C||null==t||""===t?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==z&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):p(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==C&&d(this._$AH)?this._$AA.nextSibling.data=t:this.k(n.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:r}=t,a="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=S.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===a)this._$AH.m(o);else{const t=new _(a,this),e=t.p(this.options);t.m(o),this.k(e),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new S(t)),e}S(t){m(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const a of t)r===e.length?e.push(o=new T(this.M(u()),this.M(u()),this,this.options)):o=e[r],o._$AI(a),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,o,r,a){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const a=this.strings;let i=!1;if(void 0===a)t=$(this,t,e,0),i=!d(t)||t!==this._$AH&&t!==z,i&&(this._$AH=t);else{const r=t;let s,c;for(t=a[0],s=0;s<a.length-1;s++)c=$(this,r[o+s],e,s),c===z&&(c=this._$AH[s]),i||(i=!d(c)||c!==this._$AH[s]),c===C?t=C:t!==C&&(t+=(null!=c?c:"")+a[s+1]),this._$AH[s]=c}i&&!r&&this.C(t)}C(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class U extends F{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===C?void 0:t}}const B=a?a.emptyScript:"";class L extends F{constructor(){super(...arguments),this.type=4}C(t){t&&t!==C?this.element.setAttribute(this.name,B):this.element.removeAttribute(this.name)}}class P extends F{constructor(t,e,o,r,a){super(t,e,o,r,a),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=$(this,t,e,0))&&void 0!==o?o:C)===z)return;const r=this._$AH,a=t===C&&r!==C||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==C&&(r===C||a);a&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class H{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){$(this,t)}}const M={L:"$lit$",P:s,V:c,I:1,N:A,R:_,j:p,D:$,H:T,F,O:L,W:P,B:U,Z:H},D=window.litHtmlPolyfillSupport;null==D||D(S,T),(null!==(r=globalThis.litHtmlVersions)&&void 0!==r?r:globalThis.litHtmlVersions=[]).push("2.2.6")},338:(t,e,o)=>{o.d(e,{Cb:()=>a,IO:()=>c,vZ:()=>u,SB:()=>i});const r=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function a(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):r(t,e)}function i(t){return a({...t,state:!0})}const s=({finisher:t,descriptor:e})=>(o,r)=>{var a;if(void 0===r){const r=null!==(a=o.originalKey)&&void 0!==a?a:o.key,i=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(o.key)}:{...o,key:r};return null!=t&&(i.finisher=function(e){t(e,r)}),i}{const a=o.constructor;void 0!==e&&Object.defineProperty(o,r,e(r)),null==t||t(a,r)}};function c(t,e){return s({descriptor:o=>{const r={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;r.get=function(){var o,r;return void 0===this[e]&&(this[e]=null!==(r=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}var l;const n=null!=(null===(l=window.HTMLSlotElement)||void 0===l?void 0:l.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function u(t,e,o){let r,a=t;return"object"==typeof t?(a=t.slot,r=t):r={flatten:e},o?function(t){const{slot:e,selector:o}=null!=t?t:{};return s({descriptor:r=>({get(){var r;const a="slot"+(e?`[name=${e}]`:":not([name])"),i=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(a),s=null!=i?n(i,t):[];return o?s.filter((t=>t.matches(o))):s},enumerable:!0,configurable:!0})})}({slot:a,flatten:e,selector:o}):s({descriptor:t=>({get(){var t,e;const o="slot"+(a?`[name=${a}]`:":not([name])"),i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(o);return null!==(e=null==i?void 0:i.assignedNodes(r))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},796:(t,e,o)=>{o.d(e,{o:()=>a});var r=o(692);const a=t=>null!=t?t:r.Ld},392:(t,e,o)=>{o.d(e,{oi:()=>k,iv:()=>l,dy:()=>y.dy,Ld:()=>y.Ld,sY:()=>y.sY,FV:()=>r});const r=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),i=new WeakMap;class s{constructor(t,e,o){if(this._$cssResult$=!0,o!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&i.set(e,t))}return t}toString(){return this.cssText}}const c=t=>new s("string"==typeof t?t:t+"",void 0,a),l=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new s(o,t,a)},n=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return c(e)})(t):t;var u;const d=window.trustedTypes,m=d?d.emptyScript:"",p=window.reactiveElementPolyfillSupport,b={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},h=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:h};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Ep(o,e);void 0!==r&&(this._$Ev.set(r,o),t.push(r))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const a=this[t];this[e]=r,this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{r?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),r=window.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=g){var r,a;const i=this.constructor._$Ep(t,o);if(void 0!==i&&!0===o.reflect){const s=(null!==(a=null===(r=o.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==a?a:b.toAttribute)(e,o.type);this._$El=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,e){var o,r;const a=this.constructor,i=a._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=a.getPropertyOptions(i),s=t.converter,c=null!==(r=null!==(o=null==s?void 0:s.fromAttribute)&&void 0!==o?o:"function"==typeof s?s:null)&&void 0!==r?r:b.fromAttribute;this._$El=i,this[i]=c(e,t.type),this._$El=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:v}),(null!==(u=globalThis.reactiveElementVersions)&&void 0!==u?u:globalThis.reactiveElementVersions=[]).push("1.3.3");var f,x,y=o(692);class k extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,y.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return y.Jb}}k.finalized=!0,k._$litElement$=!0,null===(f=globalThis.litElementHydrateSupport)||void 0===f||f.call(globalThis,{LitElement:k});const w=globalThis.litElementPolyfillSupport;null==w||w({LitElement:k}),(null!==(x=globalThis.litElementVersions)&&void 0!==x?x:globalThis.litElementVersions=[]).push("3.2.1")}},i={};function s(t){var e=i[t];if(void 0!==e)return e.exports;var o=i[t]={exports:{}};return a[t].call(o.exports,o,o.exports,s),o.exports}s.m=a,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,s.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var a=Object.create(null);s.r(a);var i={};t=t||[null,e({}),e([]),e(e)];for(var c=2&r&&o;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((t=>i[t]=()=>o[t]));return i.default=()=>o,s.d(a,i),a},s.d=(t,e)=>{for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},s.f={},s.e=t=>Promise.all(Object.keys(s.f).reduce(((e,o)=>(s.f[o](t,e),e)),[])),s.u=t=>t+".spectrum-web-components.js",s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o={},r="helix-import-ui:",s.l=(t,e,a,i)=>{if(o[t])o[t].push(e);else{var c,l;if(void 0!==a)for(var n=document.getElementsByTagName("script"),u=0;u<n.length;u++){var d=n[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){c=d;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.setAttribute("data-webpack",r+a),c.src=t),o[t]=[e];var m=(e,r)=>{c.onerror=c.onload=null,clearTimeout(p);var a=o[t];if(delete o[t],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((t=>t(r))),e)return e(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),l&&document.head.appendChild(c)}},s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.p="./js/dist/",(()=>{var t={179:0};s.f.j=(e,o)=>{var r=s.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise(((o,a)=>r=t[e]=[o,a]));o.push(r[2]=a);var i=s.p+s.u(e),c=new Error;s.l(i,(o=>{if(s.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}}),"chunk-"+e,e)}};var e=(e,o)=>{var r,a,[i,c,l]=o,n=0;if(i.some((e=>0!==t[e]))){for(r in c)s.o(c,r)&&(s.m[r]=c[r]);l&&l(s)}for(e&&e(o);n<i.length;n++)a=i[n],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0},o=globalThis.webpackChunkhelix_import_ui=globalThis.webpackChunkhelix_import_ui||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})(),(()=>{var t=s(392);const e=t.iv`
:host,:root{--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1.0;--spectrum-global-color-opacity-100:1;--spectrum-global-color-opacity-90:0.9;--spectrum-global-color-opacity-80:0.8;--spectrum-global-color-opacity-70:0.7;--spectrum-global-color-opacity-60:0.6;--spectrum-global-color-opacity-55:0.55;--spectrum-global-color-opacity-50:0.5;--spectrum-global-color-opacity-42:0.42;--spectrum-global-color-opacity-40:0.4;--spectrum-global-color-opacity-30:0.3;--spectrum-global-color-opacity-25:0.25;--spectrum-global-color-opacity-20:0.2;--spectrum-global-color-opacity-15:0.15;--spectrum-global-color-opacity-10:0.1;--spectrum-global-color-opacity-8:0.08;--spectrum-global-color-opacity-7:0.07;--spectrum-global-color-opacity-6:0.06;--spectrum-global-color-opacity-5:0.05;--spectrum-global-color-opacity-4:0.04;--spectrum-global-color-opacity-0:0;--spectrum-global-color-celery-400-rgb:34,184,51;--spectrum-global-color-celery-400:rgb(var(--spectrum-global-color-celery-400-rgb));--spectrum-global-color-celery-500-rgb:68,202,73;--spectrum-global-color-celery-500:rgb(var(--spectrum-global-color-celery-500-rgb));--spectrum-global-color-celery-600-rgb:105,220,99;--spectrum-global-color-celery-600:rgb(var(--spectrum-global-color-celery-600-rgb));--spectrum-global-color-celery-700-rgb:142,235,127;--spectrum-global-color-celery-700:rgb(var(--spectrum-global-color-celery-700-rgb));--spectrum-global-color-chartreuse-400-rgb:148,192,8;--spectrum-global-color-chartreuse-400:rgb(var(--spectrum-global-color-chartreuse-400-rgb));--spectrum-global-color-chartreuse-500-rgb:166,211,18;--spectrum-global-color-chartreuse-500:rgb(var(--spectrum-global-color-chartreuse-500-rgb));--spectrum-global-color-chartreuse-600-rgb:184,229,37;--spectrum-global-color-chartreuse-600:rgb(var(--spectrum-global-color-chartreuse-600-rgb));--spectrum-global-color-chartreuse-700-rgb:205,245,71;--spectrum-global-color-chartreuse-700:rgb(var(--spectrum-global-color-chartreuse-700-rgb));--spectrum-global-color-yellow-400-rgb:228,194,0;--spectrum-global-color-yellow-400:rgb(var(--spectrum-global-color-yellow-400-rgb));--spectrum-global-color-yellow-500-rgb:244,213,0;--spectrum-global-color-yellow-500:rgb(var(--spectrum-global-color-yellow-500-rgb));--spectrum-global-color-yellow-600-rgb:249,232,92;--spectrum-global-color-yellow-600:rgb(var(--spectrum-global-color-yellow-600-rgb));--spectrum-global-color-yellow-700-rgb:252,246,187;--spectrum-global-color-yellow-700:rgb(var(--spectrum-global-color-yellow-700-rgb));--spectrum-global-color-magenta-400-rgb:222,61,130;--spectrum-global-color-magenta-400:rgb(var(--spectrum-global-color-magenta-400-rgb));--spectrum-global-color-magenta-500-rgb:237,87,149;--spectrum-global-color-magenta-500:rgb(var(--spectrum-global-color-magenta-500-rgb));--spectrum-global-color-magenta-600-rgb:249,114,167;--spectrum-global-color-magenta-600:rgb(var(--spectrum-global-color-magenta-600-rgb));--spectrum-global-color-magenta-700-rgb:255,143,185;--spectrum-global-color-magenta-700:rgb(var(--spectrum-global-color-magenta-700-rgb));--spectrum-global-color-fuchsia-400-rgb:205,57,206;--spectrum-global-color-fuchsia-400:rgb(var(--spectrum-global-color-fuchsia-400-rgb));--spectrum-global-color-fuchsia-500-rgb:223,81,224;--spectrum-global-color-fuchsia-500:rgb(var(--spectrum-global-color-fuchsia-500-rgb));--spectrum-global-color-fuchsia-600-rgb:235,110,236;--spectrum-global-color-fuchsia-600:rgb(var(--spectrum-global-color-fuchsia-600-rgb));--spectrum-global-color-fuchsia-700-rgb:244,140,242;--spectrum-global-color-fuchsia-700:rgb(var(--spectrum-global-color-fuchsia-700-rgb));--spectrum-global-color-purple-400-rgb:157,87,243;--spectrum-global-color-purple-400:rgb(var(--spectrum-global-color-purple-400-rgb));--spectrum-global-color-purple-500-rgb:172,111,249;--spectrum-global-color-purple-500:rgb(var(--spectrum-global-color-purple-500-rgb));--spectrum-global-color-purple-600-rgb:187,135,251;--spectrum-global-color-purple-600:rgb(var(--spectrum-global-color-purple-600-rgb));--spectrum-global-color-purple-700-rgb:202,159,252;--spectrum-global-color-purple-700:rgb(var(--spectrum-global-color-purple-700-rgb));--spectrum-global-color-indigo-400-rgb:104,109,244;--spectrum-global-color-indigo-400:rgb(var(--spectrum-global-color-indigo-400-rgb));--spectrum-global-color-indigo-500-rgb:124,129,251;--spectrum-global-color-indigo-500:rgb(var(--spectrum-global-color-indigo-500-rgb));--spectrum-global-color-indigo-600-rgb:145,149,255;--spectrum-global-color-indigo-600:rgb(var(--spectrum-global-color-indigo-600-rgb));--spectrum-global-color-indigo-700-rgb:167,170,255;--spectrum-global-color-indigo-700:rgb(var(--spectrum-global-color-indigo-700-rgb));--spectrum-global-color-seafoam-400-rgb:0,158,152;--spectrum-global-color-seafoam-400:rgb(var(--spectrum-global-color-seafoam-400-rgb));--spectrum-global-color-seafoam-500-rgb:3,178,171;--spectrum-global-color-seafoam-500:rgb(var(--spectrum-global-color-seafoam-500-rgb));--spectrum-global-color-seafoam-600-rgb:54,197,189;--spectrum-global-color-seafoam-600:rgb(var(--spectrum-global-color-seafoam-600-rgb));--spectrum-global-color-seafoam-700-rgb:93,214,207;--spectrum-global-color-seafoam-700:rgb(var(--spectrum-global-color-seafoam-700-rgb));--spectrum-global-color-red-400-rgb:234,56,41;--spectrum-global-color-red-400:rgb(var(--spectrum-global-color-red-400-rgb));--spectrum-global-color-red-500-rgb:246,88,67;--spectrum-global-color-red-500:rgb(var(--spectrum-global-color-red-500-rgb));--spectrum-global-color-red-600-rgb:255,117,94;--spectrum-global-color-red-600:rgb(var(--spectrum-global-color-red-600-rgb));--spectrum-global-color-red-700-rgb:255,149,129;--spectrum-global-color-red-700:rgb(var(--spectrum-global-color-red-700-rgb));--spectrum-global-color-orange-400-rgb:244,129,12;--spectrum-global-color-orange-400:rgb(var(--spectrum-global-color-orange-400-rgb));--spectrum-global-color-orange-500-rgb:254,154,46;--spectrum-global-color-orange-500:rgb(var(--spectrum-global-color-orange-500-rgb));--spectrum-global-color-orange-600-rgb:255,181,88;--spectrum-global-color-orange-600:rgb(var(--spectrum-global-color-orange-600-rgb));--spectrum-global-color-orange-700-rgb:253,206,136;--spectrum-global-color-orange-700:rgb(var(--spectrum-global-color-orange-700-rgb));--spectrum-global-color-green-400-rgb:18,162,108;--spectrum-global-color-green-400:rgb(var(--spectrum-global-color-green-400-rgb));--spectrum-global-color-green-500-rgb:43,180,125;--spectrum-global-color-green-500:rgb(var(--spectrum-global-color-green-500-rgb));--spectrum-global-color-green-600-rgb:67,199,143;--spectrum-global-color-green-600:rgb(var(--spectrum-global-color-green-600-rgb));--spectrum-global-color-green-700-rgb:94,217,162;--spectrum-global-color-green-700:rgb(var(--spectrum-global-color-green-700-rgb));--spectrum-global-color-blue-400-rgb:52,143,244;--spectrum-global-color-blue-400:rgb(var(--spectrum-global-color-blue-400-rgb));--spectrum-global-color-blue-500-rgb:84,163,246;--spectrum-global-color-blue-500:rgb(var(--spectrum-global-color-blue-500-rgb));--spectrum-global-color-blue-600-rgb:114,183,249;--spectrum-global-color-blue-600:rgb(var(--spectrum-global-color-blue-600-rgb));--spectrum-global-color-blue-700-rgb:143,202,252;--spectrum-global-color-blue-700:rgb(var(--spectrum-global-color-blue-700-rgb));--spectrum-global-color-gray-50-rgb:29,29,29;--spectrum-global-color-gray-50:rgb(var(--spectrum-global-color-gray-50-rgb));--spectrum-global-color-gray-75-rgb:38,38,38;--spectrum-global-color-gray-75:rgb(var(--spectrum-global-color-gray-75-rgb));--spectrum-global-color-gray-100-rgb:50,50,50;--spectrum-global-color-gray-100:rgb(var(--spectrum-global-color-gray-100-rgb));--spectrum-global-color-gray-200-rgb:63,63,63;--spectrum-global-color-gray-200:rgb(var(--spectrum-global-color-gray-200-rgb));--spectrum-global-color-gray-300-rgb:84,84,84;--spectrum-global-color-gray-300:rgb(var(--spectrum-global-color-gray-300-rgb));--spectrum-global-color-gray-400-rgb:112,112,112;--spectrum-global-color-gray-400:rgb(var(--spectrum-global-color-gray-400-rgb));--spectrum-global-color-gray-500-rgb:144,144,144;--spectrum-global-color-gray-500:rgb(var(--spectrum-global-color-gray-500-rgb));--spectrum-global-color-gray-600-rgb:178,178,178;--spectrum-global-color-gray-600:rgb(var(--spectrum-global-color-gray-600-rgb));--spectrum-global-color-gray-700-rgb:209,209,209;--spectrum-global-color-gray-700:rgb(var(--spectrum-global-color-gray-700-rgb));--spectrum-global-color-gray-800-rgb:235,235,235;--spectrum-global-color-gray-800:rgb(var(--spectrum-global-color-gray-800-rgb));--spectrum-global-color-gray-900-rgb:255,255,255;--spectrum-global-color-gray-900:rgb(var(--spectrum-global-color-gray-900-rgb));--spectrum-alias-background-color-primary:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-secondary:var(
--spectrum-global-color-gray-75
);--spectrum-alias-background-color-tertiary:var(
--spectrum-global-color-gray-50
);--spectrum-alias-background-color-modal-overlay:rgba(0,0,0,.5);--spectrum-alias-dropshadow-color:rgba(0,0,0,.5);--spectrum-alias-background-color-hover-overlay:hsla(0,0%,100%,.06);--spectrum-alias-highlight-hover:hsla(0,0%,100%,.07);--spectrum-alias-highlight-down:hsla(0,0%,100%,.1);--spectrum-alias-highlight-selected:rgba(84,163,246,.15);--spectrum-alias-highlight-selected-hover:rgba(84,163,246,.25);--spectrum-alias-text-highlight-color:rgba(84,163,246,.25);--spectrum-alias-background-color-quickactions:rgba(50,50,50,.9);--spectrum-alias-border-color-selected:var(
--spectrum-global-color-blue-600
);--spectrum-alias-border-color-translucent:hsla(0,0%,100%,.1);--spectrum-alias-radial-reaction-color-default:hsla(0,0%,92%,.6);--spectrum-alias-pasteboard-background-color:var(
--spectrum-global-color-gray-50
);--spectrum-alias-appframe-border-color:var(
--spectrum-global-color-gray-50
);--spectrum-alias-appframe-separator-color:var(
--spectrum-global-color-gray-50
);--spectrum-scrollbar-mac-s-track-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-scrollbar-mac-m-track-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-scrollbar-mac-l-track-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-slider-s-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-ramp-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-range-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-ramp-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-range-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-ramp-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-range-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-ramp-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-range-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-ramp-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-range-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-ramp-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-range-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-ramp-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-range-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-ramp-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-range-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-ramp-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-range-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-ramp-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-range-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-ramp-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-range-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-ramp-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-range-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-ramp-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-range-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-ramp-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-range-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-ramp-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-range-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-ramp-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-range-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-well-background-color:hsla(0,0%,92%,.02);--spectrum-well-border-color:hsla(0,0%,100%,.05)}
`,o=["spectrum","express"],r=["medium","large","medium-express","large-express"],a=["light","lightest","dark","darkest","light-express","lightest-express","dark-express","darkest-express"];class i extends HTMLElement{constructor(){super(),this._dir="",this._theme="spectrum",this._color="",this._scale="",this.trackedChildren=new Set,this._updateRequested=!1,this._contextConsumers=new Map,this.attachShadow({mode:"open"});const t=document.importNode(i.template.content,!0);this.shadowRoot.appendChild(t),this.shouldAdoptStyles(),this.addEventListener("sp-query-theme",this.onQueryTheme),this.addEventListener("sp-language-context",this._handleContextPresence),this.updateComplete=this.__createDeferredPromise()}static get observedAttributes(){return["color","scale","theme","lang","dir"]}set dir(t){if(t===this.dir)return;this.setAttribute("dir",t),this._dir=t;const e="rtl"===t?t:"ltr";this.trackedChildren.forEach((t=>{t.setAttribute("dir",e)}))}get dir(){return this._dir}attributeChangedCallback(t,e,o){e!==o&&("color"===t?this.color=o:"scale"===t?this.scale=o:"lang"===t&&o?(this.lang=o,this._provideContext()):"theme"===t?this.theme=o:"dir"===t&&(this.dir=o))}requestUpdate(){void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?this.shouldAdoptStyles():window.ShadyCSS.styleElement(this)}get theme(){const t=i.themeFragmentsByKind.get("theme"),{name:e}=t&&t.get("default")||{};return this._theme||e||""}set theme(t){if(t===this._theme)return;const e=t&&o.includes(t)?t:this.theme;e!==this._theme&&(this._theme=e,this.requestUpdate()),e?this.setAttribute("theme",e):this.removeAttribute("theme")}get color(){const t=i.themeFragmentsByKind.get("color"),{name:e}=t&&t.get("default")||{};return this._color||e||""}set color(t){if(t===this._color)return;const e=t&&a.includes(t)?t:this.color;e!==this._color&&(this._color=e,this.requestUpdate()),e?this.setAttribute("color",e):this.removeAttribute("color")}get scale(){const t=i.themeFragmentsByKind.get("scale"),{name:e}=t&&t.get("default")||{};return this._scale||e||""}set scale(t){if(t===this._scale)return;const e=t&&r.includes(t)?t:this.scale;e!==this._scale&&(this._scale=e,this.requestUpdate()),e?this.setAttribute("scale",e):this.removeAttribute("scale")}get styles(){const t=[...i.themeFragmentsByKind.keys()],e=(t,e,o)=>{const r=o&&"theme"!==o&&"express"===this.theme?t.get(`${e}-express`):t.get(e),a="spectrum"===e||!o||this.hasAttribute(o);if(r&&a)return r.styles};return[...t.reduce(((t,o)=>{const r=i.themeFragmentsByKind.get(o);let a;if("app"===o||"core"===o)a=e(r,o);else{const{[o]:t}=this;a=e(r,t,o)}return a&&t.push(a),t}),[])]}static get template(){return this.templateElement||(this.templateElement=document.createElement("template"),this.templateElement.innerHTML="<slot></slot>"),this.templateElement}__createDeferredPromise(){return new Promise((t=>{this.__resolve=t}))}onQueryTheme(t){if(t.defaultPrevented)return;t.preventDefault();const{detail:e}=t;e.color=this.color||void 0,e.scale=this.scale||void 0,e.lang=this.lang||document.documentElement.lang||navigator.language,e.theme=this.theme||void 0}connectedCallback(){if(this.shouldAdoptStyles(),void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this),i.instances.add(this),!this.hasAttribute("dir")){let t=this.assignedSlot||this.parentNode;for(;t!==document.documentElement&&!(t instanceof i);)t=t.assignedSlot||t.parentNode||t.host;this.dir="rtl"===t.dir?t.dir:"ltr"}}disconnectedCallback(){i.instances.delete(this)}startManagingContentDirection(t){this.trackedChildren.add(t)}stopManagingContentDirection(t){this.trackedChildren.delete(t)}async shouldAdoptStyles(){this._updateRequested||(this.updateComplete=this.__createDeferredPromise(),this._updateRequested=!0,this._updateRequested=await!1,this.adoptStyles(),this.__resolve(!0))}adoptStyles(){const e=this.styles;if(void 0!==window.ShadyCSS&&!window.ShadyCSS.nativeShadow&&window.ShadyCSS.ScopingShim){const t=[];for(const[e,o]of i.themeFragmentsByKind)for(const[r,{styles:a}]of o){if("default"===r)continue;let o=a.cssText;i.defaultFragments.has(r)||(o=o.replace(":host",`:host([${e}='${r}'])`)),t.push(o)}window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t,this.localName),window.ShadyCSS.prepareTemplate(i.template,this.localName)}else if(t.FV){const t=[];for(const o of e)t.push(o.styleSheet);this.shadowRoot.adoptedStyleSheets=t}else this.shadowRoot.querySelectorAll("style").forEach((t=>t.remove())),e.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.shadowRoot.appendChild(e)}))}static registerThemeFragment(t,e,o){const r=i.themeFragmentsByKind.get(e)||new Map;0===r.size&&(i.themeFragmentsByKind.set(e,r),r.set("default",{name:t,styles:o}),i.defaultFragments.add(t)),r.set(t,{name:t,styles:o}),i.instances.forEach((t=>t.shouldAdoptStyles()))}_provideContext(){this._contextConsumers.forEach((t=>t(this.lang)))}_handleContextPresence(t){const e=t.composedPath()[0];if(this._contextConsumers.has(e))this._contextConsumers.delete(e);else{this._contextConsumers.set(e,t.detail.callback);const o=this._contextConsumers.get(e);o&&o(this.lang||document.documentElement.lang||navigator.language)}}}i.themeFragmentsByKind=new Map,i.defaultFragments=new Set(["spectrum"]),i.instances=new Set;const c=t.iv`
:host,:root{--spectrum-global-animation-linear:cubic-bezier(0,0,1,1);--spectrum-global-animation-duration-0:0ms;--spectrum-global-animation-duration-100:130ms;--spectrum-global-animation-duration-200:160ms;--spectrum-global-animation-duration-300:190ms;--spectrum-global-animation-duration-400:220ms;--spectrum-global-animation-duration-500:250ms;--spectrum-global-animation-duration-600:300ms;--spectrum-global-animation-duration-700:350ms;--spectrum-global-animation-duration-800:400ms;--spectrum-global-animation-duration-900:450ms;--spectrum-global-animation-duration-1000:500ms;--spectrum-global-animation-duration-2000:1000ms;--spectrum-global-animation-duration-4000:2000ms;--spectrum-global-animation-ease-in-out:cubic-bezier(0.45,0,0.4,1);--spectrum-global-animation-ease-in:cubic-bezier(0.5,0,1,1);--spectrum-global-animation-ease-out:cubic-bezier(0,0,0.4,1);--spectrum-global-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1.0;--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-black:rgb(var(--spectrum-global-color-static-black-rgb));--spectrum-global-color-static-white-rgb:255,255,255;--spectrum-global-color-static-white:rgb(var(--spectrum-global-color-static-white-rgb));--spectrum-global-color-static-blue-rgb:0,87,191;--spectrum-global-color-static-blue:rgb(var(--spectrum-global-color-static-blue-rgb));--spectrum-global-color-static-gray-50-rgb:255,255,255;--spectrum-global-color-static-gray-50:rgb(var(--spectrum-global-color-static-gray-50-rgb));--spectrum-global-color-static-gray-75-rgb:255,255,255;--spectrum-global-color-static-gray-75:rgb(var(--spectrum-global-color-static-gray-75-rgb));--spectrum-global-color-static-gray-100-rgb:255,255,255;--spectrum-global-color-static-gray-100:rgb(var(--spectrum-global-color-static-gray-100-rgb));--spectrum-global-color-static-gray-200-rgb:235,235,235;--spectrum-global-color-static-gray-200:rgb(var(--spectrum-global-color-static-gray-200-rgb));--spectrum-global-color-static-gray-300-rgb:217,217,217;--spectrum-global-color-static-gray-300:rgb(var(--spectrum-global-color-static-gray-300-rgb));--spectrum-global-color-static-gray-400-rgb:179,179,179;--spectrum-global-color-static-gray-400:rgb(var(--spectrum-global-color-static-gray-400-rgb));--spectrum-global-color-static-gray-500-rgb:146,146,146;--spectrum-global-color-static-gray-500:rgb(var(--spectrum-global-color-static-gray-500-rgb));--spectrum-global-color-static-gray-600-rgb:110,110,110;--spectrum-global-color-static-gray-600:rgb(var(--spectrum-global-color-static-gray-600-rgb));--spectrum-global-color-static-gray-700-rgb:71,71,71;--spectrum-global-color-static-gray-700:rgb(var(--spectrum-global-color-static-gray-700-rgb));--spectrum-global-color-static-gray-800-rgb:34,34,34;--spectrum-global-color-static-gray-800:rgb(var(--spectrum-global-color-static-gray-800-rgb));--spectrum-global-color-static-gray-900-rgb:0,0,0;--spectrum-global-color-static-gray-900:rgb(var(--spectrum-global-color-static-gray-900-rgb));--spectrum-global-color-static-red-400-rgb:237,64,48;--spectrum-global-color-static-red-400:rgb(var(--spectrum-global-color-static-red-400-rgb));--spectrum-global-color-static-red-500-rgb:217,28,21;--spectrum-global-color-static-red-500:rgb(var(--spectrum-global-color-static-red-500-rgb));--spectrum-global-color-static-red-600-rgb:187,2,2;--spectrum-global-color-static-red-600:rgb(var(--spectrum-global-color-static-red-600-rgb));--spectrum-global-color-static-red-700-rgb:154,0,0;--spectrum-global-color-static-red-700:rgb(var(--spectrum-global-color-static-red-700-rgb));--spectrum-global-color-static-red-800-rgb:124,0,0;--spectrum-global-color-static-red-800:rgb(var(--spectrum-global-color-static-red-800-rgb));--spectrum-global-color-static-orange-400-rgb:250,139,26;--spectrum-global-color-static-orange-400:rgb(var(--spectrum-global-color-static-orange-400-rgb));--spectrum-global-color-static-orange-500-rgb:233,117,0;--spectrum-global-color-static-orange-500:rgb(var(--spectrum-global-color-static-orange-500-rgb));--spectrum-global-color-static-orange-600-rgb:209,97,0;--spectrum-global-color-static-orange-600:rgb(var(--spectrum-global-color-static-orange-600-rgb));--spectrum-global-color-static-orange-700-rgb:182,80,0;--spectrum-global-color-static-orange-700:rgb(var(--spectrum-global-color-static-orange-700-rgb));--spectrum-global-color-static-orange-800-rgb:155,64,0;--spectrum-global-color-static-orange-800:rgb(var(--spectrum-global-color-static-orange-800-rgb));--spectrum-global-color-static-yellow-200-rgb:250,237,123;--spectrum-global-color-static-yellow-200:rgb(var(--spectrum-global-color-static-yellow-200-rgb));--spectrum-global-color-static-yellow-300-rgb:250,224,23;--spectrum-global-color-static-yellow-300:rgb(var(--spectrum-global-color-static-yellow-300-rgb));--spectrum-global-color-static-yellow-400-rgb:238,205,0;--spectrum-global-color-static-yellow-400:rgb(var(--spectrum-global-color-static-yellow-400-rgb));--spectrum-global-color-static-yellow-500-rgb:221,185,0;--spectrum-global-color-static-yellow-500:rgb(var(--spectrum-global-color-static-yellow-500-rgb));--spectrum-global-color-static-yellow-600-rgb:201,164,0;--spectrum-global-color-static-yellow-600:rgb(var(--spectrum-global-color-static-yellow-600-rgb));--spectrum-global-color-static-yellow-700-rgb:181,144,0;--spectrum-global-color-static-yellow-700:rgb(var(--spectrum-global-color-static-yellow-700-rgb));--spectrum-global-color-static-yellow-800-rgb:160,125,0;--spectrum-global-color-static-yellow-800:rgb(var(--spectrum-global-color-static-yellow-800-rgb));--spectrum-global-color-static-chartreuse-300-rgb:176,222,27;--spectrum-global-color-static-chartreuse-300:rgb(var(--spectrum-global-color-static-chartreuse-300-rgb));--spectrum-global-color-static-chartreuse-400-rgb:157,203,13;--spectrum-global-color-static-chartreuse-400:rgb(var(--spectrum-global-color-static-chartreuse-400-rgb));--spectrum-global-color-static-chartreuse-500-rgb:139,182,4;--spectrum-global-color-static-chartreuse-500:rgb(var(--spectrum-global-color-static-chartreuse-500-rgb));--spectrum-global-color-static-chartreuse-600-rgb:122,162,0;--spectrum-global-color-static-chartreuse-600:rgb(var(--spectrum-global-color-static-chartreuse-600-rgb));--spectrum-global-color-static-chartreuse-700-rgb:106,141,0;--spectrum-global-color-static-chartreuse-700:rgb(var(--spectrum-global-color-static-chartreuse-700-rgb));--spectrum-global-color-static-chartreuse-800-rgb:90,120,0;--spectrum-global-color-static-chartreuse-800:rgb(var(--spectrum-global-color-static-chartreuse-800-rgb));--spectrum-global-color-static-celery-200-rgb:126,229,114;--spectrum-global-color-static-celery-200:rgb(var(--spectrum-global-color-static-celery-200-rgb));--spectrum-global-color-static-celery-300-rgb:87,212,86;--spectrum-global-color-static-celery-300:rgb(var(--spectrum-global-color-static-celery-300-rgb));--spectrum-global-color-static-celery-400-rgb:48,193,61;--spectrum-global-color-static-celery-400:rgb(var(--spectrum-global-color-static-celery-400-rgb));--spectrum-global-color-static-celery-500-rgb:15,172,38;--spectrum-global-color-static-celery-500:rgb(var(--spectrum-global-color-static-celery-500-rgb));--spectrum-global-color-static-celery-600-rgb:0,150,20;--spectrum-global-color-static-celery-600:rgb(var(--spectrum-global-color-static-celery-600-rgb));--spectrum-global-color-static-celery-700-rgb:0,128,15;--spectrum-global-color-static-celery-700:rgb(var(--spectrum-global-color-static-celery-700-rgb));--spectrum-global-color-static-celery-800-rgb:0,107,15;--spectrum-global-color-static-celery-800:rgb(var(--spectrum-global-color-static-celery-800-rgb));--spectrum-global-color-static-green-400-rgb:29,169,115;--spectrum-global-color-static-green-400:rgb(var(--spectrum-global-color-static-green-400-rgb));--spectrum-global-color-static-green-500-rgb:0,148,97;--spectrum-global-color-static-green-500:rgb(var(--spectrum-global-color-static-green-500-rgb));--spectrum-global-color-static-green-600-rgb:0,126,80;--spectrum-global-color-static-green-600:rgb(var(--spectrum-global-color-static-green-600-rgb));--spectrum-global-color-static-green-700-rgb:0,105,65;--spectrum-global-color-static-green-700:rgb(var(--spectrum-global-color-static-green-700-rgb));--spectrum-global-color-static-green-800-rgb:0,86,53;--spectrum-global-color-static-green-800:rgb(var(--spectrum-global-color-static-green-800-rgb));--spectrum-global-color-static-seafoam-200-rgb:75,206,199;--spectrum-global-color-static-seafoam-200:rgb(var(--spectrum-global-color-static-seafoam-200-rgb));--spectrum-global-color-static-seafoam-300-rgb:32,187,180;--spectrum-global-color-static-seafoam-300:rgb(var(--spectrum-global-color-static-seafoam-300-rgb));--spectrum-global-color-static-seafoam-400-rgb:0,166,160;--spectrum-global-color-static-seafoam-400:rgb(var(--spectrum-global-color-static-seafoam-400-rgb));--spectrum-global-color-static-seafoam-500-rgb:0,145,139;--spectrum-global-color-static-seafoam-500:rgb(var(--spectrum-global-color-static-seafoam-500-rgb));--spectrum-global-color-static-seafoam-600-rgb:0,124,118;--spectrum-global-color-static-seafoam-600:rgb(var(--spectrum-global-color-static-seafoam-600-rgb));--spectrum-global-color-static-seafoam-700-rgb:0,103,99;--spectrum-global-color-static-seafoam-700:rgb(var(--spectrum-global-color-static-seafoam-700-rgb));--spectrum-global-color-static-seafoam-800-rgb:10,83,80;--spectrum-global-color-static-seafoam-800:rgb(var(--spectrum-global-color-static-seafoam-800-rgb));--spectrum-global-color-static-blue-200-rgb:130,193,251;--spectrum-global-color-static-blue-200:rgb(var(--spectrum-global-color-static-blue-200-rgb));--spectrum-global-color-static-blue-300-rgb:98,173,247;--spectrum-global-color-static-blue-300:rgb(var(--spectrum-global-color-static-blue-300-rgb));--spectrum-global-color-static-blue-400-rgb:66,151,244;--spectrum-global-color-static-blue-400:rgb(var(--spectrum-global-color-static-blue-400-rgb));--spectrum-global-color-static-blue-500-rgb:27,127,245;--spectrum-global-color-static-blue-500:rgb(var(--spectrum-global-color-static-blue-500-rgb));--spectrum-global-color-static-blue-600-rgb:4,105,227;--spectrum-global-color-static-blue-600:rgb(var(--spectrum-global-color-static-blue-600-rgb));--spectrum-global-color-static-blue-700-rgb:0,87,190;--spectrum-global-color-static-blue-700:rgb(var(--spectrum-global-color-static-blue-700-rgb));--spectrum-global-color-static-blue-800-rgb:0,72,153;--spectrum-global-color-static-blue-800:rgb(var(--spectrum-global-color-static-blue-800-rgb));--spectrum-global-color-static-indigo-200-rgb:178,181,255;--spectrum-global-color-static-indigo-200:rgb(var(--spectrum-global-color-static-indigo-200-rgb));--spectrum-global-color-static-indigo-300-rgb:155,159,255;--spectrum-global-color-static-indigo-300:rgb(var(--spectrum-global-color-static-indigo-300-rgb));--spectrum-global-color-static-indigo-400-rgb:132,137,253;--spectrum-global-color-static-indigo-400:rgb(var(--spectrum-global-color-static-indigo-400-rgb));--spectrum-global-color-static-indigo-500-rgb:109,115,246;--spectrum-global-color-static-indigo-500:rgb(var(--spectrum-global-color-static-indigo-500-rgb));--spectrum-global-color-static-indigo-600-rgb:87,93,232;--spectrum-global-color-static-indigo-600:rgb(var(--spectrum-global-color-static-indigo-600-rgb));--spectrum-global-color-static-indigo-700-rgb:68,74,208;--spectrum-global-color-static-indigo-700:rgb(var(--spectrum-global-color-static-indigo-700-rgb));--spectrum-global-color-static-indigo-800-rgb:68,74,208;--spectrum-global-color-static-indigo-800:rgb(var(--spectrum-global-color-static-indigo-800-rgb));--spectrum-global-color-static-purple-400-rgb:178,121,250;--spectrum-global-color-static-purple-400:rgb(var(--spectrum-global-color-static-purple-400-rgb));--spectrum-global-color-static-purple-500-rgb:161,93,246;--spectrum-global-color-static-purple-500:rgb(var(--spectrum-global-color-static-purple-500-rgb));--spectrum-global-color-static-purple-600-rgb:142,67,234;--spectrum-global-color-static-purple-600:rgb(var(--spectrum-global-color-static-purple-600-rgb));--spectrum-global-color-static-purple-700-rgb:120,43,216;--spectrum-global-color-static-purple-700:rgb(var(--spectrum-global-color-static-purple-700-rgb));--spectrum-global-color-static-purple-800-rgb:98,23,190;--spectrum-global-color-static-purple-800:rgb(var(--spectrum-global-color-static-purple-800-rgb));--spectrum-global-color-static-fuchsia-400-rgb:228,93,230;--spectrum-global-color-static-fuchsia-400:rgb(var(--spectrum-global-color-static-fuchsia-400-rgb));--spectrum-global-color-static-fuchsia-500-rgb:211,63,212;--spectrum-global-color-static-fuchsia-500:rgb(var(--spectrum-global-color-static-fuchsia-500-rgb));--spectrum-global-color-static-fuchsia-600-rgb:188,39,187;--spectrum-global-color-static-fuchsia-600:rgb(var(--spectrum-global-color-static-fuchsia-600-rgb));--spectrum-global-color-static-fuchsia-700-rgb:163,10,163;--spectrum-global-color-static-fuchsia-700:rgb(var(--spectrum-global-color-static-fuchsia-700-rgb));--spectrum-global-color-static-fuchsia-800-rgb:135,0,136;--spectrum-global-color-static-fuchsia-800:rgb(var(--spectrum-global-color-static-fuchsia-800-rgb));--spectrum-global-color-static-magenta-200-rgb:253,127,175;--spectrum-global-color-static-magenta-200:rgb(var(--spectrum-global-color-static-magenta-200-rgb));--spectrum-global-color-static-magenta-300-rgb:242,98,157;--spectrum-global-color-static-magenta-300:rgb(var(--spectrum-global-color-static-magenta-300-rgb));--spectrum-global-color-static-magenta-400-rgb:226,68,135;--spectrum-global-color-static-magenta-400:rgb(var(--spectrum-global-color-static-magenta-400-rgb));--spectrum-global-color-static-magenta-500-rgb:205,40,111;--spectrum-global-color-static-magenta-500:rgb(var(--spectrum-global-color-static-magenta-500-rgb));--spectrum-global-color-static-magenta-600-rgb:179,15,89;--spectrum-global-color-static-magenta-600:rgb(var(--spectrum-global-color-static-magenta-600-rgb));--spectrum-global-color-static-magenta-700-rgb:149,0,72;--spectrum-global-color-static-magenta-700:rgb(var(--spectrum-global-color-static-magenta-700-rgb));--spectrum-global-color-static-magenta-800-rgb:119,0,58;--spectrum-global-color-static-magenta-800:rgb(var(--spectrum-global-color-static-magenta-800-rgb));--spectrum-global-color-static-transparent-white-200:hsla(0,0%,100%,.1);--spectrum-global-color-static-transparent-white-300:hsla(0,0%,100%,.25);--spectrum-global-color-static-transparent-white-400:hsla(0,0%,100%,.4);--spectrum-global-color-static-transparent-white-500:hsla(0,0%,100%,.55);--spectrum-global-color-static-transparent-white-600:hsla(0,0%,100%,.7);--spectrum-global-color-static-transparent-white-700:hsla(0,0%,100%,.8);--spectrum-global-color-static-transparent-white-800:hsla(0,0%,100%,.9);--spectrum-global-color-static-transparent-white-900-rgb:255,255,255;--spectrum-global-color-static-transparent-white-900:rgb(var(--spectrum-global-color-static-transparent-white-900-rgb));--spectrum-global-color-static-transparent-black-200:rgba(0,0,0,.1);--spectrum-global-color-static-transparent-black-300:rgba(0,0,0,.25);--spectrum-global-color-static-transparent-black-400:rgba(0,0,0,.4);--spectrum-global-color-static-transparent-black-500:rgba(0,0,0,.55);--spectrum-global-color-static-transparent-black-600:rgba(0,0,0,.7);--spectrum-global-color-static-transparent-black-700:rgba(0,0,0,.8);--spectrum-global-color-static-transparent-black-800:rgba(0,0,0,.9);--spectrum-global-color-static-transparent-black-900-rgb:0,0,0;--spectrum-global-color-static-transparent-black-900:rgb(var(--spectrum-global-color-static-transparent-black-900-rgb));--spectrum-global-color-sequential-cerulean:#e9fff1,#c8f1e4,#a5e3d7,#82d5ca,#68c5c1,#54b4ba,#3fa2b2,#2991ac,#2280a2,#1f6d98,#1d5c8d,#1a4b83,#1a3979,#1a266f,#191264,#180057;--spectrum-global-color-sequential-forest:#ffffdf,#e2f6ba,#c4eb95,#a4e16d,#8dd366,#77c460,#5fb65a,#48a754,#36984f,#2c894d,#237a4a,#196b47,#105c45,#094d41,#033f3e,#00313a;--spectrum-global-color-sequential-rose:#fff4dd,#ffddd7,#ffc5d2,#feaecb,#fa96c4,#f57ebd,#ef64b5,#e846ad,#d238a1,#bb2e96,#a3248c,#8a1b83,#71167c,#560f74,#370b6e,#000968;--spectrum-global-color-diverging-orange-yellow-seafoam:#580000,#79260b,#9c4511,#bd651a,#dd8629,#f5ad52,#fed693,#ffffe0,#bbe4d1,#76c7be,#3ea8a6,#208288,#076769,#00494b,#002c2d;--spectrum-global-color-diverging-red-yellow-blue:#4a001e,#751232,#a52747,#c65154,#e47961,#f0a882,#fad4ac,#ffffe0,#bce2cf,#89c0c4,#579eb9,#397aa8,#1c5796,#163771,#10194d;--spectrum-global-color-diverging-red-blue:#4a001e,#731331,#9f2945,#cc415a,#e06e85,#ed9ab0,#f8c3d9,#faf0ff,#c6d0f2,#92b2de,#5d94cb,#2f74b3,#265191,#163670,#0b194c;--spectrum-semantic-negative-background-color:var(
--spectrum-global-color-static-red-600
);--spectrum-semantic-negative-color-default:var(
--spectrum-global-color-red-500
);--spectrum-semantic-negative-color-hover:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-dark:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-border-color:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-icon-color:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-status-color:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-text-color-large:var(
--spectrum-global-color-red-500
);--spectrum-semantic-negative-text-color-small:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-text-color-small-hover:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-text-color-small-down:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-text-color-small-key-focus:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-down:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-color-key-focus:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-background-color-default:var(
--spectrum-global-color-static-red-600
);--spectrum-semantic-negative-background-color-hover:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-negative-background-color-down:var(
--spectrum-global-color-static-red-800
);--spectrum-semantic-negative-background-color-key-focus:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-notice-background-color:var(
--spectrum-global-color-static-orange-600
);--spectrum-semantic-notice-color-default:var(
--spectrum-global-color-orange-500
);--spectrum-semantic-notice-color-dark:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-border-color:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-icon-color:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-status-color:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-text-color-large:var(
--spectrum-global-color-orange-500
);--spectrum-semantic-notice-text-color-small:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-color-down:var(
--spectrum-global-color-orange-700
);--spectrum-semantic-notice-color-key-focus:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-background-color-default:var(
--spectrum-global-color-static-orange-600
);--spectrum-semantic-notice-background-color-hover:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-notice-background-color-down:var(
--spectrum-global-color-static-orange-800
);--spectrum-semantic-notice-background-color-key-focus:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-positive-background-color:var(
--spectrum-global-color-static-green-600
);--spectrum-semantic-positive-color-default:var(
--spectrum-global-color-green-500
);--spectrum-semantic-positive-color-dark:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-border-color:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-icon-color:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-status-color:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-text-color-large:var(
--spectrum-global-color-green-500
);--spectrum-semantic-positive-text-color-small:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-color-down:var(
--spectrum-global-color-green-700
);--spectrum-semantic-positive-color-key-focus:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-background-color-default:var(
--spectrum-global-color-static-green-600
);--spectrum-semantic-positive-background-color-hover:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-positive-background-color-down:var(
--spectrum-global-color-static-green-800
);--spectrum-semantic-positive-background-color-key-focus:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-informative-background-color:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-informative-color-default:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-informative-color-dark:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-border-color:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-icon-color:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-status-color:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-text-color-large:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-informative-text-color-small:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-color-down:var(
--spectrum-global-color-blue-700
);--spectrum-semantic-informative-color-key-focus:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-background-color-default:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-informative-background-color-hover:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-informative-background-color-down:var(
--spectrum-global-color-static-blue-800
);--spectrum-semantic-informative-background-color-key-focus:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-cta-background-color-default:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-cta-background-color-hover:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-cta-background-color-down:var(
--spectrum-global-color-static-blue-800
);--spectrum-semantic-cta-background-color-key-focus:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-emphasized-border-color-default:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-emphasized-border-color-hover:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-emphasized-border-color-down:var(
--spectrum-global-color-blue-700
);--spectrum-semantic-emphasized-border-color-key-focus:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-neutral-background-color-default:var(
--spectrum-global-color-static-gray-700
);--spectrum-semantic-neutral-background-color-hover:var(
--spectrum-global-color-static-gray-800
);--spectrum-semantic-neutral-background-color-down:var(
--spectrum-global-color-static-gray-900
);--spectrum-semantic-neutral-background-color-key-focus:var(
--spectrum-global-color-static-gray-800
);--spectrum-semantic-presence-color-1:var(
--spectrum-global-color-static-red-500
);--spectrum-semantic-presence-color-2:var(
--spectrum-global-color-static-orange-400
);--spectrum-semantic-presence-color-3:var(
--spectrum-global-color-static-yellow-400
);--spectrum-semantic-presence-color-4-rgb:75,204,162;--spectrum-semantic-presence-color-4:rgb(var(--spectrum-semantic-presence-color-4-rgb));--spectrum-semantic-presence-color-5-rgb:0,199,255;--spectrum-semantic-presence-color-5:rgb(var(--spectrum-semantic-presence-color-5-rgb));--spectrum-semantic-presence-color-6-rgb:0,140,184;--spectrum-semantic-presence-color-6:rgb(var(--spectrum-semantic-presence-color-6-rgb));--spectrum-semantic-presence-color-7-rgb:126,75,243;--spectrum-semantic-presence-color-7:rgb(var(--spectrum-semantic-presence-color-7-rgb));--spectrum-semantic-presence-color-8:var(
--spectrum-global-color-static-fuchsia-600
);--spectrum-global-dimension-static-percent-50:50%;--spectrum-global-dimension-static-percent-70:70%;--spectrum-global-dimension-static-percent-100:100%;--spectrum-global-dimension-static-breakpoint-xsmall:304px;--spectrum-global-dimension-static-breakpoint-small:768px;--spectrum-global-dimension-static-breakpoint-medium:1280px;--spectrum-global-dimension-static-breakpoint-large:1768px;--spectrum-global-dimension-static-breakpoint-xlarge:2160px;--spectrum-global-dimension-static-grid-columns:12;--spectrum-global-dimension-static-grid-fluid-width:100%;--spectrum-global-dimension-static-grid-fixed-max-width:1280px;--spectrum-global-dimension-static-size-0:0px;--spectrum-global-dimension-static-size-10:1px;--spectrum-global-dimension-static-size-25:2px;--spectrum-global-dimension-static-size-40:3px;--spectrum-global-dimension-static-size-50:4px;--spectrum-global-dimension-static-size-65:5px;--spectrum-global-dimension-static-size-75:6px;--spectrum-global-dimension-static-size-85:7px;--spectrum-global-dimension-static-size-100:8px;--spectrum-global-dimension-static-size-115:9px;--spectrum-global-dimension-static-size-125:10px;--spectrum-global-dimension-static-size-130:11px;--spectrum-global-dimension-static-size-150:12px;--spectrum-global-dimension-static-size-160:13px;--spectrum-global-dimension-static-size-175:14px;--spectrum-global-dimension-static-size-185:15px;--spectrum-global-dimension-static-size-200:16px;--spectrum-global-dimension-static-size-225:18px;--spectrum-global-dimension-static-size-250:20px;--spectrum-global-dimension-static-size-275:22px;--spectrum-global-dimension-static-size-300:24px;--spectrum-global-dimension-static-size-325:26px;--spectrum-global-dimension-static-size-350:28px;--spectrum-global-dimension-static-size-400:32px;--spectrum-global-dimension-static-size-450:36px;--spectrum-global-dimension-static-size-500:40px;--spectrum-global-dimension-static-size-550:44px;--spectrum-global-dimension-static-size-600:48px;--spectrum-global-dimension-static-size-700:56px;--spectrum-global-dimension-static-size-800:64px;--spectrum-global-dimension-static-size-900:72px;--spectrum-global-dimension-static-size-1000:80px;--spectrum-global-dimension-static-size-1200:96px;--spectrum-global-dimension-static-size-1700:136px;--spectrum-global-dimension-static-size-2400:192px;--spectrum-global-dimension-static-size-2500:200px;--spectrum-global-dimension-static-size-2600:208px;--spectrum-global-dimension-static-size-2800:224px;--spectrum-global-dimension-static-size-3200:256px;--spectrum-global-dimension-static-size-3400:272px;--spectrum-global-dimension-static-size-3500:280px;--spectrum-global-dimension-static-size-3600:288px;--spectrum-global-dimension-static-size-3800:304px;--spectrum-global-dimension-static-size-4600:368px;--spectrum-global-dimension-static-size-5000:400px;--spectrum-global-dimension-static-size-6000:480px;--spectrum-global-dimension-static-size-16000:1280px;--spectrum-global-dimension-static-font-size-50:11px;--spectrum-global-dimension-static-font-size-75:12px;--spectrum-global-dimension-static-font-size-100:14px;--spectrum-global-dimension-static-font-size-150:15px;--spectrum-global-dimension-static-font-size-200:16px;--spectrum-global-dimension-static-font-size-300:18px;--spectrum-global-dimension-static-font-size-400:20px;--spectrum-global-dimension-static-font-size-500:22px;--spectrum-global-dimension-static-font-size-600:25px;--spectrum-global-dimension-static-font-size-700:28px;--spectrum-global-dimension-static-font-size-800:32px;--spectrum-global-dimension-static-font-size-900:36px;--spectrum-global-dimension-static-font-size-1000:40px;--spectrum-global-font-family-base:adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-family-serif:adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-global-font-family-code:"Source Code Pro",Monaco,monospace;--spectrum-global-font-weight-thin:100;--spectrum-global-font-weight-ultra-light:200;--spectrum-global-font-weight-light:300;--spectrum-global-font-weight-regular:400;--spectrum-global-font-weight-medium:500;--spectrum-global-font-weight-semi-bold:600;--spectrum-global-font-weight-bold:700;--spectrum-global-font-weight-extra-bold:800;--spectrum-global-font-weight-black:900;--spectrum-global-font-style-regular:normal;--spectrum-global-font-style-italic:italic;--spectrum-global-font-letter-spacing-none:0;--spectrum-global-font-letter-spacing-small:0.0125em;--spectrum-global-font-letter-spacing-han:0.05em;--spectrum-global-font-letter-spacing-medium:0.06em;--spectrum-global-font-line-height-large:1.7;--spectrum-global-font-line-height-medium:1.5;--spectrum-global-font-line-height-small:1.3;--spectrum-global-font-multiplier-0:0em;--spectrum-global-font-multiplier-25:0.25em;--spectrum-global-font-multiplier-75:0.75em;--spectrum-global-font-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-zh:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light","sans-serif";--spectrum-global-font-font-family-zhhans:adobe-clean-han-simplified-c,source-han-simplified-c,"SimSun","Heiti SC Light","sans-serif";--spectrum-global-font-font-family-ko:adobe-clean-han-korean,source-han-korean,"Malgun Gothic","Apple Gothic","sans-serif";--spectrum-global-font-font-family-ja:adobe-clean-han-japanese,"Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","Osaka",YuGothic,"Yu Gothic","メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS PGothic","sans-serif";--spectrum-global-font-font-family-condensed:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light",adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-loupe-entry-animation-duration:var(
--spectrum-global-animation-duration-300
);--spectrum-alias-loupe-exit-animation-duration:var(
--spectrum-global-animation-duration-300
);--spectrum-alias-heading-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-heading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-regular-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-light:var(
--spectrum-global-font-weight-light
);--spectrum-alias-heading-text-font-weight-light-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-heavy:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-heavy-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-quiet:var(
--spectrum-global-font-weight-light
);--spectrum-alias-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-strong-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-margin-bottom:var(
--spectrum-global-font-multiplier-25
);--spectrum-alias-subheading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-body-text-font-family:var(
--spectrum-global-font-family-base
);--spectrum-alias-body-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-body-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-body-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-body-margin-bottom:var(
--spectrum-global-font-multiplier-75
);--spectrum-alias-detail-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-detail-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-detail-text-font-weight-light:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-heading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-heading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-heading-text-font-weight-quiet:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-body-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-body-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-subheading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-detail-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-code-text-font-family:var(
--spectrum-global-font-family-code
);--spectrum-alias-code-text-font-weight-regular:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-code-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-code-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-code-margin-bottom:var(
--spectrum-global-font-multiplier-0
);--spectrum-alias-font-family-ar:var(--spectrum-global-font-font-family-ar);--spectrum-alias-font-family-he:var(--spectrum-global-font-font-family-he);--spectrum-alias-font-family-zh:var(--spectrum-global-font-font-family-zh);--spectrum-alias-font-family-zhhans:var(
--spectrum-global-font-font-family-zhhans
);--spectrum-alias-font-family-ko:var(--spectrum-global-font-font-family-ko);--spectrum-alias-font-family-ja:var(--spectrum-global-font-font-family-ja);--spectrum-alias-font-family-condensed:var(
--spectrum-global-font-font-family-condensed
);--spectrum-alias-button-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-component-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-han-component-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-serif-text-font-family:var(
--spectrum-global-font-family-serif
);--spectrum-alias-han-heading-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-han-heading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-regular-emphasis:var(
--spectrum-global-font-weight-extra-bold
);--spectrum-alias-han-heading-text-font-weight-regular-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-light:var(
--spectrum-global-font-weight-light
);--spectrum-alias-han-heading-text-font-weight-light-emphasis:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-heading-text-font-weight-light-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-heavy:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-heavy-emphasis:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-heavy-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-body-text-line-height:var(
--spectrum-global-font-line-height-large
);--spectrum-alias-han-body-text-font-weight-regular:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-body-text-font-weight-emphasis:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-body-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-subheading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-subheading-text-font-weight-emphasis:var(
--spectrum-global-font-weight-extra-bold
);--spectrum-alias-han-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-detail-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-detail-text-font-weight-emphasis:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-black
)}:host,:root{--spectrum-alias-item-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-item-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-item-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-item-rounded-border-radius-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-rounded-border-radius-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-rounded-border-radius-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-rounded-border-radius-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-item-text-size-s:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-item-text-size-m:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-item-text-size-l:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-item-text-size-xl:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-item-text-padding-top-s:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-item-text-padding-top-m:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-text-padding-top-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-text-padding-bottom-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-text-padding-bottom-l:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-text-padding-bottom-xl:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-icon-padding-top-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icon-padding-top-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icon-padding-top-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icon-padding-top-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-icon-padding-bottom-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icon-padding-bottom-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icon-padding-bottom-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icon-padding-bottom-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-padding-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-padding-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-padding-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-padding-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-rounded-padding-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-rounded-padding-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-rounded-padding-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-rounded-padding-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-item-icononly-padding-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icononly-padding-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icononly-padding-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icononly-padding-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-control-gap-s:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-gap-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-gap-l:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-control-gap-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-icon-gap-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-workflow-icon-gap-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-workflow-icon-gap-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-workflow-icon-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-mark-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-mark-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-ui-icon-gap-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-ui-icon-gap-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-ui-icon-gap-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-ui-icon-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-clearbutton-gap-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-clearbutton-gap-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-clearbutton-gap-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-clearbutton-gap-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-workflow-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-workflow-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-rounded-workflow-padding-left-s:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-rounded-workflow-padding-left-l:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-padding-top-s:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-item-mark-padding-top-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-mark-padding-top-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-mark-padding-bottom-s:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-item-mark-padding-bottom-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-mark-padding-bottom-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-mark-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-mark-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-mark-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-control-1-size-s:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-item-control-1-size-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-2-size-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-control-2-size-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-control-2-size-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-control-2-size-xxl:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-control-2-border-radius-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-2-border-radius-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-control-2-border-radius-l:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-2-border-radius-xl:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-2-border-radius-xxl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-2-padding-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-2-padding-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-2-padding-l:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-2-padding-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-control-3-height-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-control-3-height-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-control-3-height-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-control-3-border-radius-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-3-border-radius-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-control-3-border-radius-l:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-3-border-radius-xl:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-3-padding-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-3-padding-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-3-padding-l:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-3-padding-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-mark-size-s:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-size-l:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-item-mark-size-xl:var(
--spectrum-global-dimension-size-325
);--spectrum-alias-heading-xxxl-text-size:var(
--spectrum-global-dimension-font-size-1300
);--spectrum-alias-heading-xxl-text-size:var(
--spectrum-global-dimension-font-size-1100
);--spectrum-alias-heading-xl-text-size:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-l-text-size:var(
--spectrum-global-dimension-font-size-700
);--spectrum-alias-heading-m-text-size:var(
--spectrum-global-dimension-font-size-500
);--spectrum-alias-heading-s-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-xs-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-xxs-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-xxxl-margin-top:var(
--spectrum-global-dimension-font-size-1200
);--spectrum-alias-heading-xxl-margin-top:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-xl-margin-top:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-l-margin-top:var(
--spectrum-global-dimension-font-size-600
);--spectrum-alias-heading-m-margin-top:var(
--spectrum-global-dimension-font-size-400
);--spectrum-alias-heading-s-margin-top:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-xs-margin-top:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-xxs-margin-top:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-heading-han-xxxl-text-size:var(
--spectrum-global-dimension-font-size-1300
);--spectrum-alias-heading-han-xxl-text-size:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-han-xl-text-size:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-han-l-text-size:var(
--spectrum-global-dimension-font-size-600
);--spectrum-alias-heading-han-m-text-size:var(
--spectrum-global-dimension-font-size-400
);--spectrum-alias-heading-han-s-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-han-xs-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-han-xxs-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-han-xxxl-margin-top:var(
--spectrum-global-dimension-font-size-1200
);--spectrum-alias-heading-han-xxl-margin-top:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-han-xl-margin-top:var(
--spectrum-global-dimension-font-size-700
);--spectrum-alias-heading-han-l-margin-top:var(
--spectrum-global-dimension-font-size-500
);--spectrum-alias-heading-han-m-margin-top:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-han-s-margin-top:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-han-xs-margin-top:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-han-xxs-margin-top:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-component-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-component-border-radius-quiet:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-component-focusring-gap:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-component-focusring-gap-emphasized:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-component-focusring-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-component-focusring-size-emphasized:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-input-border-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-input-focusring-gap:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-input-quiet-focusline-gap:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-control-two-size-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-control-two-size-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-control-two-size-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-control-two-size-xxl:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-control-two-border-radius-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-control-two-border-radius-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-control-two-border-radius-l:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-control-two-border-radius-xl:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-control-two-border-radius-xxl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-control-two-focus-ring-border-radius-s:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-control-two-focus-ring-border-radius-m:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-control-two-focus-ring-border-radius-l:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-control-two-focus-ring-border-radius-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-control-two-focus-ring-border-radius-xxl:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-control-three-height-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-control-three-height-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-control-three-height-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-infieldbutton-icon-margin-y-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-infieldbutton-icon-margin-y-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-infieldbutton-icon-margin-y-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-infieldbutton-icon-margin-y-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-infieldbutton-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-infieldbutton-border-radius-sided:0;--spectrum-alias-infieldbutton-border-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-infieldbutton-fill-padding-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-infieldbutton-fill-padding-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-infieldbutton-fill-padding-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-infieldbutton-fill-padding-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-infieldbutton-padding-s:0;--spectrum-alias-infieldbutton-padding-m:0;--spectrum-alias-infieldbutton-padding-l:0;--spectrum-alias-infieldbutton-padding-xl:0;--spectrum-alias-infieldbutton-full-height-s:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-infieldbutton-full-height-m:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-infieldbutton-full-height-l:var(
--spectrum-global-dimension-size-500
);--spectrum-alias-infieldbutton-full-height-xl:var(
--spectrum-global-dimension-size-600
);--spectrum-alias-infieldbutton-half-height-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-infieldbutton-half-height-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-infieldbutton-half-height-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-infieldbutton-half-height-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-stepperbutton-gap:0;--spectrum-alias-stepperbutton-width-s:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-stepperbutton-width-m:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-stepperbutton-width-l:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-stepperbutton-width-xl:var(
--spectrum-global-dimension-size-450
);--spectrum-alias-stepperbutton-icon-x-offset-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-stepperbutton-icon-x-offset-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-stepperbutton-icon-x-offset-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-stepperbutton-icon-x-offset-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-stepperbutton-icon-y-offset-top-s:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-stepperbutton-icon-y-offset-top-m:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-stepperbutton-icon-y-offset-top-l:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-stepperbutton-icon-y-offset-top-xl:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-stepperbutton-icon-y-offset-bottom-s:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-stepperbutton-icon-y-offset-bottom-m:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-stepperbutton-icon-y-offset-bottom-l:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-stepperbutton-icon-y-offset-bottom-xl:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-stepperbutton-radius-touching:0;--spectrum-alias-clearbutton-icon-margin-s:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-clearbutton-icon-margin-m:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-clearbutton-icon-margin-l:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-clearbutton-icon-margin-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-clearbutton-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-pickerbutton-icononly-padding-x-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-pickerbutton-icononly-padding-x-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-pickerbutton-icononly-padding-x-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-pickerbutton-icononly-padding-x-xl:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-pickerbutton-icon-margin-y-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-pickerbutton-icon-margin-y-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-pickerbutton-icon-margin-y-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-pickerbutton-icon-margin-y-xl:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-pickerbutton-label-padding-y-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-pickerbutton-label-padding-y-m:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-pickerbutton-label-padding-y-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-pickerbutton-label-padding-y-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-pickerbutton-border-radius-rounded:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-pickerbutton-border-radius-rounded-sided:0;--spectrum-alias-search-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-search-border-radius-quiet:0;--spectrum-alias-combobox-quiet-button-offset-x:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-thumbnail-border-radius-small:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-actiongroup-button-gap:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-actiongroup-button-gap-compact:var(
--spectrum-global-dimension-size-0
);--spectrum-alias-actiongroup-button-gap-quiet:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-actiongroup-button-gap-quiet-compact:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-search-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-search-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-search-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-percent-50:50%;--spectrum-alias-percent-70:70%;--spectrum-alias-percent-100:100%;--spectrum-alias-breakpoint-xsmall:304px;--spectrum-alias-breakpoint-small:768px;--spectrum-alias-breakpoint-medium:1280px;--spectrum-alias-breakpoint-large:1768px;--spectrum-alias-breakpoint-xlarge:2160px;--spectrum-alias-grid-columns:12;--spectrum-alias-grid-fluid-width:100%;--spectrum-alias-grid-fixed-max-width:1280px;--spectrum-alias-border-size-thin:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-border-size-thick:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-border-size-thicker:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-border-size-thickest:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-border-offset-thin:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-border-offset-thick:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-border-offset-thicker:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-border-offset-thickest:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-baseline:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-grid-gutter-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-gutter-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-gutter-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-gutter-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-gutter-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-grid-margin-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-margin-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-margin-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-margin-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-margin-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-grid-layout-region-margin-bottom-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-layout-region-margin-bottom-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-layout-region-margin-bottom-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-layout-region-margin-bottom-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-layout-region-margin-bottom-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-radial-reaction-size-default:var(
--spectrum-global-dimension-static-size-550
);--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-focus-ring-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-focus-ring-gap-small:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-focus-ring-size-small:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-dropshadow-blur:var(--spectrum-global-dimension-size-50);--spectrum-alias-dropshadow-offset-y:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-font-size-default:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-layout-label-gap-size:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-pill-button-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-pill-button-text-baseline:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-border-radius-xsmall:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-border-radius-small:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-border-radius-regular:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-border-radius-medium:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-border-radius-large:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-border-radius-xlarge:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-focus-ring-border-radius-xsmall:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-focus-ring-border-radius-small:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-focus-ring-border-radius-medium:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-focus-ring-border-radius-large:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-focus-ring-border-radius-xlarge:var(
--spectrum-global-dimension-size-350
);--spectrum-alias-single-line-height:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-single-line-width:var(
--spectrum-global-dimension-size-2400
);--spectrum-alias-workflow-icon-size-s:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-workflow-icon-size-m:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-workflow-icon-size-xl:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-ui-icon-alert-size-75:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-alert-size-100:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-ui-icon-alert-size-200:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-ui-icon-alert-size-300:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-ui-icon-cornertriangle-size-75:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-200:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-ui-icon-asterisk-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-asterisk-size-100:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-avatar-size-50:var(--spectrum-global-dimension-size-200);--spectrum-alias-avatar-size-75:var(--spectrum-global-dimension-size-225);--spectrum-alias-avatar-size-200:var(--spectrum-global-dimension-size-275);--spectrum-alias-avatar-size-300:var(--spectrum-global-dimension-size-325);--spectrum-alias-avatar-size-500:var(--spectrum-global-dimension-size-400);--spectrum-alias-avatar-size-700:var(--spectrum-global-dimension-size-500);--spectrum-alias-avatar-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-alias-tag-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-tag-border-size-default:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-tag-border-size-key-focus:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-tag-border-size-disabled:var(
--spectrum-global-dimension-size-0
);--spectrum-alias-tag-border-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-tag-padding-right-s:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-tag-padding-right-m:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-tag-padding-right-l:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-tag-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-tag-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-tag-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-tag-font-size-s:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-tag-font-size-m:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-tag-font-size-l:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-tag-text-padding-top-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-tag-text-padding-top-m:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-tag-text-padding-top-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-tag-icon-size-s:var(--spectrum-global-dimension-size-200);--spectrum-alias-tag-icon-size-m:var(--spectrum-global-dimension-size-225);--spectrum-alias-tag-icon-margin-top-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-tag-icon-margin-top-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-tag-icon-margin-top-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-tag-icon-margin-right-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-tag-icon-margin-right-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-tag-icon-margin-right-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-tag-clearbutton-width-s:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-tag-clearbutton-width-m:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-tag-clearbutton-width-l:var(
--spectrum-global-dimension-size-500
);--spectrum-alias-tag-clearbutton-icon-margin-s:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-tag-clearbutton-icon-margin-m:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-tag-clearbutton-icon-margin-l:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-tag-focusring-size:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-tag-focusring-gap:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-tag-focusring-gap-selected:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-colorloupe-width:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-colorloupe-height:var(
--spectrum-global-dimension-static-size-800
)}:host,:root{--spectrum-alias-colorhandle-outer-border-color:rgba(0,0,0,.42);--spectrum-alias-transparent-blue-background-color-hover:rgba(0,87,190,.15);--spectrum-alias-transparent-blue-background-color-down:rgba(0,72,153,.3);--spectrum-alias-transparent-blue-background-color-key-focus:var(
--spectrum-alias-transparent-blue-background-color-hover
);--spectrum-alias-transparent-blue-background-color-mouse-focus:var(
--spectrum-alias-transparent-blue-background-color-hover
);--spectrum-alias-transparent-blue-background-color:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-transparent-red-background-color-hover:rgba(154,0,0,.15);--spectrum-alias-transparent-red-background-color-down:rgba(124,0,0,.3);--spectrum-alias-transparent-red-background-color-key-focus:var(
--spectrum-alias-transparent-red-background-color-hover
);--spectrum-alias-transparent-red-background-color-mouse-focus:var(
--spectrum-alias-transparent-red-background-color-hover
);--spectrum-alias-transparent-red-background-color:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-component-text-color-disabled:var(
--spectrum-global-color-gray-500
);--spectrum-alias-component-text-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-component-text-color-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-component-text-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-component-text-color-key-focus:var(
--spectrum-alias-component-text-color-hover
);--spectrum-alias-component-text-color-mouse-focus:var(
--spectrum-alias-component-text-color-hover
);--spectrum-alias-component-text-color:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-component-text-color-selected-default:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-component-text-color-selected-hover:var(
--spectrum-alias-component-text-color-hover
);--spectrum-alias-component-text-color-selected-down:var(
--spectrum-alias-component-text-color-down
);--spectrum-alias-component-text-color-selected-key-focus:var(
--spectrum-alias-component-text-color-key-focus
);--spectrum-alias-component-text-color-selected-mouse-focus:var(
--spectrum-alias-component-text-color-mouse-focus
);--spectrum-alias-component-text-color-selected:var(
--spectrum-alias-component-text-color-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-default:var(
--spectrum-global-color-static-white
);--spectrum-alias-component-text-color-emphasized-selected-hover:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-down:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-key-focus:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-mouse-focus:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-error-default:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-component-text-color-error-hover:var(
--spectrum-semantic-negative-text-color-small-hover
);--spectrum-alias-component-text-color-error-down:var(
--spectrum-semantic-negative-text-color-small-down
);--spectrum-alias-component-text-color-error-key-focus:var(
--spectrum-semantic-negative-text-color-small-key-focus
);--spectrum-alias-component-text-color-error-mouse-focus:var(
--spectrum-semantic-negative-text-color-small-key-focus
);--spectrum-alias-component-text-color-error:var(
--spectrum-alias-component-text-color-error-default
);--spectrum-alias-component-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-alias-component-icon-color-default:var(
--spectrum-alias-icon-color
);--spectrum-alias-component-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-component-icon-color-down:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-component-icon-color-key-focus:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-component-icon-color-mouse-focus:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-component-icon-color:var(
--spectrum-alias-component-icon-color-default
);--spectrum-alias-component-icon-color-selected:var(
--spectrum-alias-icon-color-selected-neutral-subdued
);--spectrum-alias-component-icon-color-emphasized-selected-default:var(
--spectrum-global-color-static-white
);--spectrum-alias-component-icon-color-emphasized-selected-hover:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-icon-color-emphasized-selected-down:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-icon-color-emphasized-selected-key-focus:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-icon-color-emphasized-selected:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-quiet-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet-selected-disabled:var(
--spectrum-alias-component-background-color-disabled
);--spectrum-alias-component-background-color-default:var(
--spectrum-global-color-gray-75
);--spectrum-alias-component-background-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-component-background-color-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-component-background-color:var(
--spectrum-alias-component-background-color-default
);--spectrum-alias-component-background-color-selected-default:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected-hover:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected-key-focus:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected:var(
--spectrum-alias-component-background-color-selected-default
);--spectrum-alias-component-background-color-quiet-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet-down:var(
--spectrum-global-color-gray-300
);--spectrum-alias-component-background-color-quiet-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet:var(
--spectrum-alias-component-background-color-quiet-default
);--spectrum-alias-component-background-color-quiet-selected-default:var(
--spectrum-alias-component-background-color-selected-default
);--spectrum-alias-component-background-color-quiet-selected-hover:var(
--spectrum-alias-component-background-color-selected-hover
);--spectrum-alias-component-background-color-quiet-selected-down:var(
--spectrum-alias-component-background-color-selected-down
);--spectrum-alias-component-background-color-quiet-selected-key-focus:var(
--spectrum-alias-component-background-color-selected-key-focus
);--spectrum-alias-component-background-color-quiet-selected:var(
--spectrum-alias-component-background-color-selected-default
);--spectrum-alias-component-background-color-emphasized-selected-default:var(
--spectrum-semantic-cta-background-color-default
);--spectrum-alias-component-background-color-emphasized-selected-hover:var(
--spectrum-semantic-cta-background-color-hover
);--spectrum-alias-component-background-color-emphasized-selected-down:var(
--spectrum-semantic-cta-background-color-down
);--spectrum-alias-component-background-color-emphasized-selected-key-focus:var(
--spectrum-semantic-cta-background-color-key-focus
);--spectrum-alias-component-background-color-emphasized-selected:var(
--spectrum-alias-component-background-color-emphasized-selected-default
);--spectrum-alias-component-border-color-disabled:var(
--spectrum-alias-border-color-disabled
);--spectrum-alias-component-border-color-quiet-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-default:var(
--spectrum-alias-border-color
);--spectrum-alias-component-border-color-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-alias-component-border-color-down:var(
--spectrum-alias-border-color-down
);--spectrum-alias-component-border-color-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color:var(
--spectrum-alias-component-border-color-default
);--spectrum-alias-component-border-color-selected-default:var(
--spectrum-alias-border-color
);--spectrum-alias-component-border-color-selected-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-alias-component-border-color-selected-down:var(
--spectrum-alias-border-color-down
);--spectrum-alias-component-border-color-selected-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color-selected:var(
--spectrum-alias-component-border-color-selected-default
);--spectrum-alias-component-border-color-quiet-default:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-quiet-hover:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-quiet-down:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-quiet-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color-quiet:var(
--spectrum-alias-component-border-color-quiet-default
);--spectrum-alias-component-border-color-quiet-selected-default:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-border-color-quiet-selected-hover:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-border-color-quiet-selected-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-border-color-quiet-selected-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color-quiet-selected:var(
--spectrum-alias-component-border-color-quiet-selected-default
);--spectrum-alias-component-border-color-emphasized-selected-default:var(
--spectrum-semantic-cta-background-color-default
);--spectrum-alias-component-border-color-emphasized-selected-hover:var(
--spectrum-semantic-cta-background-color-hover
);--spectrum-alias-component-border-color-emphasized-selected-down:var(
--spectrum-semantic-cta-background-color-down
);--spectrum-alias-component-border-color-emphasized-selected-key-focus:var(
--spectrum-semantic-cta-background-color-key-focus
);--spectrum-alias-component-border-color-emphasized-selected:var(
--spectrum-alias-component-border-color-emphasized-selected-default
);--spectrum-alias-tag-border-color-default:var(
--spectrum-alias-border-color-darker-default
);--spectrum-alias-tag-border-color-hover:var(
--spectrum-alias-border-color-darker-hover
);--spectrum-alias-tag-border-color-down:var(
--spectrum-alias-border-color-darker-hover
);--spectrum-alias-tag-border-color-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-tag-border-color-error-default:var(
--spectrum-semantic-negative-color-default
);--spectrum-alias-tag-border-color-error-hover:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-tag-border-color-error-down:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-tag-border-color-error-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-tag-border-color-error-selected:var(
--spectrum-semantic-negative-color-default
);--spectrum-alias-tag-border-color-selected:var(
--spectrum-alias-tag-background-color-selected-default
);--spectrum-alias-tag-border-color:var(
--spectrum-alias-tag-border-color-default
);--spectrum-alias-tag-border-color-disabled:var(
--spectrum-alias-border-color-disabled
);--spectrum-alias-tag-border-color-error:var(
--spectrum-alias-tag-border-color-error-default
);--spectrum-alias-tag-text-color-default:var(
--spectrum-alias-label-text-color
);--spectrum-alias-tag-text-color-hover:var(
--spectrum-alias-text-color-hover
);--spectrum-alias-tag-text-color-down:var(--spectrum-alias-text-color-down);--spectrum-alias-tag-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-alias-tag-text-color-disabled:var(
--spectrum-global-color-gray-500
);--spectrum-alias-tag-text-color:var(
--spectrum-alias-tag-text-color-default
);--spectrum-alias-tag-text-color-error-default:var(
--spectrum-global-color-red-600
);--spectrum-alias-tag-text-color-error-hover:var(
--spectrum-global-color-red-700
);--spectrum-alias-tag-text-color-error-down:var(
--spectrum-global-color-red-700
);--spectrum-alias-tag-text-color-error-key-focus:var(
--spectrum-global-color-red-700
);--spectrum-alias-tag-text-color-error:var(
--spectrum-alias-tag-text-color-error-default
);--spectrum-alias-tag-text-color-selected:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-tag-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-tag-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-tag-icon-color-key-focus:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-tag-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-alias-tag-icon-color:var(
--spectrum-alias-tag-icon-color-default
);--spectrum-alias-tag-icon-color-error:var(--spectrum-global-color-red-600);--spectrum-alias-tag-icon-color-selected:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-tag-background-color-default:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-tag-background-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color:var(
--spectrum-alias-tag-background-color-default
);--spectrum-alias-tag-background-color-error-default:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color-error-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color-error-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-tag-background-color-error-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color-error:var(
--spectrum-alias-tag-background-color-error-default
);--spectrum-alias-tag-background-color-error-selected-default:var(
--spectrum-semantic-negative-color-default
);--spectrum-alias-tag-background-color-error-selected-hover:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-tag-background-color-error-selected-down:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-tag-background-color-error-selected-key-focus:var(
--spectrum-global-color-red-600
);--spectrum-alias-tag-background-color-error-selected:var(
--spectrum-alias-tag-background-color-error-selected-default
);--spectrum-alias-tag-background-color-selected-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-tag-background-color-selected-hover:var(
--spectrum-global-color-gray-800
);--spectrum-alias-tag-background-color-selected-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-tag-background-color-selected-key-focus:var(
--spectrum-global-color-gray-900
);--spectrum-alias-tag-background-color-selected:var(
--spectrum-alias-tag-background-color-selected-default
);--spectrum-alias-tag-focusring-border-color-default:transparent;--spectrum-alias-tag-focusring-border-color-key-focus:transparent;--spectrum-alias-tag-focusring-border-color-disabled:transparent;--spectrum-alias-tag-focusring-border-color-selected-key-focus:var(
--spectrum-alias-focus-ring-color
);--spectrum-alias-tag-focusring-border-color:var(
--spectrum-alias-tag-focusring-border-color-default
);--spectrum-alias-avatar-border-color-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-down:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color:var(
--spectrum-alias-avatar-border-color-default
);--spectrum-alias-avatar-border-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected-down:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected:var(
--spectrum-alias-avatar-border-color-selected-default
);--spectrum-alias-avatar-border-color-selected-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-toggle-background-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-toggle-background-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-background-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-toggle-background-color-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-background-color:var(
--spectrum-alias-toggle-background-color-default
);--spectrum-alias-toggle-background-color-emphasized-selected-default:var(
--spectrum-global-color-blue-500
);--spectrum-alias-toggle-background-color-emphasized-selected-hover:var(
--spectrum-global-color-blue-600
);--spectrum-alias-toggle-background-color-emphasized-selected-down:var(
--spectrum-global-color-blue-700
);--spectrum-alias-toggle-background-color-emphasized-selected-key-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-toggle-background-color-emphasized-selected:var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
);--spectrum-alias-toggle-border-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-toggle-border-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-border-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-toggle-border-color-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-border-color:var(
--spectrum-alias-toggle-border-color-default
);--spectrum-alias-toggle-icon-color-selected:var(
--spectrum-global-color-gray-75
);--spectrum-alias-toggle-icon-color-emphasized-selected:var(
--spectrum-global-color-gray-75
);--spectrum-alias-button-primary-background-color-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-button-primary-background-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-primary-background-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-button-primary-background-color-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-primary-background-color:var(
--spectrum-alias-button-primary-background-color-default
);--spectrum-alias-button-primary-border-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-primary-border-color-hover:var(
--spectrum-alias-button-primary-background-color-hover
);--spectrum-alias-button-primary-border-color-down:var(
--spectrum-alias-button-primary-background-color-down
);--spectrum-alias-button-primary-border-color-key-focus:var(
--spectrum-alias-button-primary-background-color-key-focus
);--spectrum-alias-button-primary-border-color:var(
--spectrum-alias-button-primary-border-color-default
);--spectrum-alias-button-primary-text-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-primary-text-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-primary-text-color-down:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-primary-text-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-primary-text-color:var(
--spectrum-alias-button-primary-text-color-default
);--spectrum-alias-button-primary-icon-color-default:var(
--spectrum-alias-button-primary-text-color-default
);--spectrum-alias-button-primary-icon-color-hover:var(
--spectrum-alias-button-primary-text-color-hover
);--spectrum-alias-button-primary-icon-color-down:var(
--spectrum-alias-button-primary-text-color-down
);--spectrum-alias-button-primary-icon-color-key-focus:var(
--spectrum-alias-button-primary-text-color-key-focus
);--spectrum-alias-button-primary-icon-color:var(
--spectrum-alias-button-primary-icon-color-default
);--spectrum-alias-button-secondary-background-color-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-button-secondary-background-color-hover:var(
--spectrum-global-color-gray-700
);--spectrum-alias-button-secondary-background-color-down:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-secondary-background-color-key-focus:var(
--spectrum-global-color-gray-700
);--spectrum-alias-button-secondary-background-color:var(
--spectrum-alias-button-secondary-background-color-default
);--spectrum-alias-button-secondary-border-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-button-secondary-border-color-hover:var(
--spectrum-alias-button-secondary-background-color-hover
);--spectrum-alias-button-secondary-border-color-down:var(
--spectrum-alias-button-secondary-background-color-down
);--spectrum-alias-button-secondary-border-color-key-focus:var(
--spectrum-alias-button-secondary-background-color-key-focus
);--spectrum-alias-button-secondary-border-color:var(
--spectrum-alias-button-secondary-border-color-default
);--spectrum-alias-button-secondary-text-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-button-secondary-text-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-secondary-text-color-down:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-secondary-text-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-secondary-text-color:var(
--spectrum-alias-button-secondary-text-color-default
);--spectrum-alias-button-secondary-icon-color-default:var(
--spectrum-alias-button-secondary-text-color-default
);--spectrum-alias-button-secondary-icon-color-hover:var(
--spectrum-alias-button-secondary-text-color-hover
);--spectrum-alias-button-secondary-icon-color-down:var(
--spectrum-alias-button-secondary-text-color-down
);--spectrum-alias-button-secondary-icon-color-key-focus:var(
--spectrum-alias-button-secondary-text-color-key-focus
);--spectrum-alias-button-secondary-icon-color:var(
--spectrum-alias-button-secondary-icon-color-default
);--spectrum-alias-button-negative-background-color-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-button-negative-background-color-hover:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-background-color-down:var(
--spectrum-global-color-red-700
);--spectrum-alias-button-negative-background-color-key-focus:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-background-color:var(
--spectrum-alias-button-negative-background-color-default
);--spectrum-alias-button-negative-border-color-default:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-border-color-hover:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-border-color-down:var(
--spectrum-global-color-red-700
);--spectrum-alias-button-negative-border-color-key-focus:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-border-color:var(
--spectrum-alias-button-negative-border-color-default
);--spectrum-alias-button-negative-text-color-default:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-text-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-negative-text-color-down:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-negative-text-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-negative-text-color:var(
--spectrum-alias-button-negative-text-color-default
);--spectrum-alias-button-negative-icon-color-default:var(
--spectrum-alias-button-negative-text-color-default
);--spectrum-alias-button-negative-icon-color-hover:var(
--spectrum-alias-button-negative-text-color-hover
);--spectrum-alias-button-negative-icon-color-down:var(
--spectrum-alias-button-negative-text-color-down
);--spectrum-alias-button-negative-icon-color-key-focus:var(
--spectrum-alias-button-negative-text-color-key-focus
);--spectrum-alias-button-negative-icon-color:var(
--spectrum-alias-button-negative-icon-color-default
);--spectrum-alias-input-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-input-border-color-quiet-disabled:var(
--spectrum-alias-border-color-mid
);--spectrum-alias-input-border-color-default:var(
--spectrum-alias-border-color
);--spectrum-alias-input-border-color-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-alias-input-border-color-down:var(
--spectrum-alias-border-color-mouse-focus
);--spectrum-alias-input-border-color-mouse-focus:var(
--spectrum-alias-border-color-mouse-focus
);--spectrum-alias-input-border-color-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-input-border-color:var(
--spectrum-alias-input-border-color-default
);--spectrum-alias-input-border-color-invalid-default:var(
--spectrum-semantic-negative-color-default
);--spectrum-alias-input-border-color-invalid-hover:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-input-border-color-invalid-down:var(
--spectrum-semantic-negative-color-down
);--spectrum-alias-input-border-color-invalid-mouse-focus:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-input-border-color-invalid-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-input-border-color-invalid:var(
--spectrum-alias-input-border-color-invalid-default
);--spectrum-alias-background-color-yellow-default:var(
--spectrum-global-color-static-yellow-300
);--spectrum-alias-background-color-yellow-hover:var(
--spectrum-global-color-static-yellow-400
);--spectrum-alias-background-color-yellow-key-focus:var(
--spectrum-global-color-static-yellow-400
);--spectrum-alias-background-color-yellow-down:var(
--spectrum-global-color-static-yellow-500
);--spectrum-alias-background-color-yellow:var(
--spectrum-alias-background-color-yellow-default
);--spectrum-alias-infieldbutton-background-color:var(
--spectrum-global-color-gray-200
);--spectrum-alias-infieldbutton-fill-loudnessLow-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-border-color-disabled:var(
--spectrum-alias-component-background-color-disabled
);--spectrum-alias-infieldbutton-fill-border-color-default:var(
--spectrum-alias-input-border-color-default
);--spectrum-alias-infieldbutton-fill-border-color-hover:var(
--spectrum-alias-input-border-color-hover
);--spectrum-alias-infieldbutton-fill-border-color-down:var(
--spectrum-alias-input-border-color-down
);--spectrum-alias-infieldbutton-fill-border-color-mouse-focus:var(
--spectrum-alias-input-border-color-mouse-focus
);--spectrum-alias-infieldbutton-fill-border-color-key-focus:var(
--spectrum-alias-input-border-color-key-focus
);--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-default:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-hover:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-down:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-key-focus:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-default:var(
--spectrum-alias-component-background-color-default
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-hover:var(
--spectrum-alias-component-background-color-hover
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-down:var(
--spectrum-alias-component-background-color-down
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-key-focus:var(
--spectrum-alias-component-background-color-key-focus
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-disabled:var(
--spectrum-alias-component-background-color-disabled
);--spectrum-alias-actionbutton-staticBlack-border-color-default:rgba(0,0,0,.4);--spectrum-alias-actionbutton-staticBlack-background-color-default:transparent;--spectrum-alias-actionbutton-staticBlack-border-color-hover:rgba(0,0,0,.55);--spectrum-alias-actionbutton-staticBlack-background-color-hover:rgba(0,0,0,.25);--spectrum-alias-actionbutton-staticBlack-border-color-down:rgba(0,0,0,.7);--spectrum-alias-actionbutton-staticBlack-background-color-down:rgba(0,0,0,.4);--spectrum-alias-actionbutton-staticBlack-border-color-key-focus:rgba(0,0,0,.55);--spectrum-alias-actionbutton-staticBlack-background-color-key-focus:rgba(0,0,0,.25);--spectrum-alias-actionbutton-staticBlack-border-color-disabled:rgba(0,0,0,.25);--spectrum-alias-actionbutton-staticBlack-background-color-disabled:transparent;--spectrum-alias-actionbutton-staticBlack-border-color-disabled-selected:transparent;--spectrum-alias-actionbutton-staticBlack-background-color-disabled-selected:rgba(0,0,0,.1);--spectrum-alias-actionbutton-staticWhite-border-color-default:hsla(0,0%,100%,.4);--spectrum-alias-actionbutton-staticWhite-background-color-default:transparent;--spectrum-alias-actionbutton-staticWhite-border-color-hover:hsla(0,0%,100%,.55);--spectrum-alias-actionbutton-staticWhite-background-color-hover:hsla(0,0%,100%,.25);--spectrum-alias-actionbutton-staticWhite-border-color-down:hsla(0,0%,100%,.7);--spectrum-alias-actionbutton-staticWhite-background-color-down:hsla(0,0%,100%,.4);--spectrum-alias-actionbutton-staticWhite-border-color-key-focus:hsla(0,0%,100%,.55);--spectrum-alias-actionbutton-staticWhite-background-color-key-focus:hsla(0,0%,100%,.25);--spectrum-alias-actionbutton-staticWhite-border-color-disabled:hsla(0,0%,100%,.25);--spectrum-alias-actionbutton-staticWhite-background-color-disabled:transparent;--spectrum-alias-actionbutton-staticWhite-border-color-disabled-selected:transparent;--spectrum-alias-actionbutton-staticWhite-background-color-disabled-selected:hsla(0,0%,100%,.1);--spectrum-alias-tabs-divider-background-color-default:var(
--spectrum-global-color-gray-300
);--spectrum-alias-tabs-divider-background-color-quiet:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-tabitem-text-color-default:var(
--spectrum-alias-label-text-color
);--spectrum-alias-tabitem-text-color-hover:var(
--spectrum-alias-text-color-hover
);--spectrum-alias-tabitem-text-color-down:var(
--spectrum-alias-text-color-down
);--spectrum-alias-tabitem-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-alias-tabitem-text-color-mouse-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-alias-tabitem-text-color:var(
--spectrum-alias-tabitem-text-color-default
);--spectrum-alias-tabitem-text-color-selected-default:var(
--spectrum-global-color-gray-900
);--spectrum-alias-tabitem-text-color-selected-hover:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-selected-down:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-selected-key-focus:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-selected-mouse-focus:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-selected:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-emphasized:var(
--spectrum-alias-tabitem-text-color-default
);--spectrum-alias-tabitem-text-color-emphasized-selected-default:var(
--spectrum-global-color-static-blue-500
);--spectrum-alias-tabitem-text-color-emphasized-selected-hover:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-text-color-emphasized-selected-down:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-text-color-emphasized-selected-key-focus:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-text-color-emphasized-selected-mouse-focus:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-text-color-emphasized-selected:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-selection-indicator-color-default:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-selection-indicator-color-emphasized:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-icon-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-alias-tabitem-icon-color-default:var(
--spectrum-alias-icon-color
);--spectrum-alias-tabitem-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-tabitem-icon-color-down:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-tabitem-icon-color-key-focus:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-tabitem-icon-color-mouse-focus:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-tabitem-icon-color:var(
--spectrum-alias-tabitem-icon-color-default
);--spectrum-alias-tabitem-icon-color-selected:var(
--spectrum-alias-icon-color-selected-neutral
);--spectrum-alias-tabitem-icon-color-emphasized:var(
--spectrum-alias-tabitem-text-color-default
);--spectrum-alias-tabitem-icon-color-emphasized-selected:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-assetcard-selectionindicator-background-color-ordered:var(
--spectrum-global-color-blue-500
);--spectrum-alias-assetcard-overlay-background-color:rgba(27,127,245,.1);--spectrum-alias-assetcard-border-color-selected:var(
--spectrum-global-color-blue-500
);--spectrum-alias-assetcard-border-color-selected-hover:var(
--spectrum-global-color-blue-500
);--spectrum-alias-assetcard-border-color-selected-down:var(
--spectrum-global-color-blue-600
);--spectrum-alias-background-color-default:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-background-color-transparent:transparent;--spectrum-alias-background-color-overbackground-down:hsla(0,0%,100%,.2);--spectrum-alias-background-color-quiet-overbackground-hover:hsla(0,0%,100%,.1);--spectrum-alias-background-color-quiet-overbackground-down:hsla(0,0%,100%,.2);--spectrum-alias-background-color-overbackground-disabled:hsla(0,0%,100%,.1);--spectrum-alias-background-color-quickactions-overlay:rgba(0,0,0,.2);--spectrum-alias-placeholder-text-color:var(
--spectrum-global-color-gray-800
);--spectrum-alias-placeholder-text-color-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-placeholder-text-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-placeholder-text-color-selected:var(
--spectrum-global-color-gray-800
);--spectrum-alias-label-text-color:var(--spectrum-global-color-gray-700);--spectrum-alias-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-key-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-text-color-mouse-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-text-color-invalid:var(--spectrum-global-color-red-500);--spectrum-alias-text-color-selected:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-selected-neutral:var(
--spectrum-global-color-gray-900
);--spectrum-alias-text-color-overbackground:var(
--spectrum-global-color-static-white
);--spectrum-alias-text-color-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-text-color-quiet-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-heading-text-color:var(--spectrum-global-color-gray-900);--spectrum-alias-link-primary-text-color-default:var(
--spectrum-global-color-blue-600
);--spectrum-alias-link-primary-text-color-hover:var(
--spectrum-global-color-blue-600
);--spectrum-alias-link-primary-text-color-down:var(
--spectrum-global-color-blue-700
);--spectrum-alias-link-primary-text-color-key-focus:var(
--spectrum-alias-text-color-key-focus
);--spectrum-alias-link-primary-text-color:var(
--spectrum-alias-link-primary-text-color-default
);--spectrum-alias-link-secondary-text-color-default:var(
--spectrum-alias-link-primary-text-color-default
);--spectrum-alias-link-secondary-text-color-hover:var(
--spectrum-alias-link-primary-text-color-hover
);--spectrum-alias-link-secondary-text-color-down:var(
--spectrum-alias-link-primary-text-color-down
);--spectrum-alias-link-secondary-text-color-key-focus:var(
--spectrum-alias-link-primary-text-color-key-focus
);--spectrum-alias-link-secondary-text-color:var(
--spectrum-alias-link-secondary-text-color-default
);--spectrum-alias-border-color:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-hover:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-down:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-key-focus:var(
--spectrum-global-color-blue-400
);--spectrum-alias-border-color-mouse-focus:var(
--spectrum-global-color-blue-500
);--spectrum-alias-border-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-border-color-extralight:var(
--spectrum-global-color-gray-100
);--spectrum-alias-border-color-light:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-mid:var(--spectrum-global-color-gray-300);--spectrum-alias-border-color-dark:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-darker-default:var(
--spectrum-global-color-gray-600
);--spectrum-alias-border-color-darker-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-border-color-darker-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-border-color-transparent:transparent;--spectrum-alias-border-color-translucent-dark:rgba(0,0,0,.05);--spectrum-alias-border-color-translucent-darker:rgba(0,0,0,.1);--spectrum-alias-focus-color:var(--spectrum-global-color-blue-400);--spectrum-alias-focus-ring-color:var(--spectrum-alias-focus-color);--spectrum-alias-track-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-track-fill-color-overbackground:var(
--spectrum-global-color-static-white
);--spectrum-alias-track-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-alias-thumbnail-darksquare-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-alias-thumbnail-lightsquare-background-color:var(
--spectrum-global-color-static-white
);--spectrum-alias-track-color-overbackground:hsla(0,0%,100%,.2);--spectrum-alias-icon-color:var(--spectrum-global-color-gray-700);--spectrum-alias-icon-color-overbackground:var(
--spectrum-global-color-static-white
);--spectrum-alias-icon-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-key-focus:var(
--spectrum-global-color-gray-900
);--spectrum-alias-icon-color-disabled:var(--spectrum-global-color-gray-400);--spectrum-alias-icon-color-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-icon-color-quiet-overbackground-disabled:hsla(0,0%,100%,.15);--spectrum-alias-icon-color-selected-neutral:var(
--spectrum-global-color-gray-900
);--spectrum-alias-icon-color-selected-neutral-subdued:var(
--spectrum-global-color-gray-800
);--spectrum-alias-icon-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-icon-color-selected-hover:var(
--spectrum-global-color-blue-600
);--spectrum-alias-icon-color-selected-down:var(
--spectrum-global-color-blue-700
);--spectrum-alias-icon-color-selected-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-image-opacity-disabled:var(
--spectrum-global-color-opacity-30
);--spectrum-alias-toolbar-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-alias-code-highlight-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-code-highlight-background-color:var(
--spectrum-global-color-gray-75
);--spectrum-alias-code-highlight-color-keyword:var(
--spectrum-global-color-fuchsia-600
);--spectrum-alias-code-highlight-color-section:var(
--spectrum-global-color-red-600
);--spectrum-alias-code-highlight-color-literal:var(
--spectrum-global-color-blue-600
);--spectrum-alias-code-highlight-color-attribute:var(
--spectrum-global-color-seafoam-600
);--spectrum-alias-code-highlight-color-class:var(
--spectrum-global-color-magenta-600
);--spectrum-alias-code-highlight-color-variable:var(
--spectrum-global-color-purple-600
);--spectrum-alias-code-highlight-color-title:var(
--spectrum-global-color-indigo-600
);--spectrum-alias-code-highlight-color-string:var(
--spectrum-global-color-fuchsia-600
);--spectrum-alias-code-highlight-color-function:var(
--spectrum-global-color-blue-600
);--spectrum-alias-code-highlight-color-comment:var(
--spectrum-global-color-gray-700
);--spectrum-alias-categorical-color-1:var(
--spectrum-global-color-static-seafoam-200
);--spectrum-alias-categorical-color-2:var(
--spectrum-global-color-static-indigo-700
);--spectrum-alias-categorical-color-3:var(
--spectrum-global-color-static-orange-500
);--spectrum-alias-categorical-color-4:var(
--spectrum-global-color-static-magenta-500
);--spectrum-alias-categorical-color-5:var(
--spectrum-global-color-static-indigo-200
);--spectrum-alias-categorical-color-6:var(
--spectrum-global-color-static-celery-200
);--spectrum-alias-categorical-color-7:var(
--spectrum-global-color-static-blue-500
);--spectrum-alias-categorical-color-8:var(
--spectrum-global-color-static-purple-800
);--spectrum-alias-categorical-color-9:var(
--spectrum-global-color-static-yellow-500
);--spectrum-alias-categorical-color-10:var(
--spectrum-global-color-static-orange-700
);--spectrum-alias-categorical-color-11:var(
--spectrum-global-color-static-green-600
);--spectrum-alias-categorical-color-12:var(
--spectrum-global-color-static-chartreuse-300
);--spectrum-alias-categorical-color-13:var(
--spectrum-global-color-static-blue-200
);--spectrum-alias-categorical-color-14:var(
--spectrum-global-color-static-fuchsia-500
);--spectrum-alias-categorical-color-15:var(
--spectrum-global-color-static-magenta-200
);--spectrum-alias-categorical-color-16:var(
--spectrum-global-color-static-yellow-200
)}:host,:root{--spectrum-colorloupe-express-visibility:none;--spectrum-colorloupe-spectrum-visibility:block;--spectrum-colorloupe-outer-border-color:transparent;--spectrum-colorloupe-outer-border-size:0;--spectrum-colorloupe-outer-stroke-color:var(
--spectrum-global-color-static-transparent-black-200
);--spectrum-colorloupe-outer-stroke-width:var(
--spectrum-alias-border-size-thick
);--spectrum-colorhandle-background-offset:calc(var(--spectrum-global-dimension-static-size-25)*-1);--spectrum-colorhandle-inner-shadow-color:var(
--spectrum-colorhandle-outer-shadow-color
);--spectrum-colorhandle-outer-shadow-color:rgba(0,0,0,.42);--spectrum-colorhandle-outer-shadow-blur:0;--spectrum-colorhandle-outer-shadow-spread:var(
--spectrum-alias-border-size-thin
);--spectrum-colorcontrol-checkerboard-light-color:var(
--spectrum-global-color-static-white
);--spectrum-colorcontrol-checkerboard-dark-color:var(
--spectrum-global-color-static-gray-300
);--spectrum-slider-m-track-inside-border-radius:var(
--spectrum-slider-m-track-border-radius
);--spectrum-slider-label-text-size:var(
--spectrum-global-dimension-font-size-75
)}:host,:root{font-family:var(--spectrum-alias-body-text-font-family);font-size:var(--spectrum-alias-font-size-default)}:host:lang(ar),:root:lang(ar){font-family:var(--spectrum-alias-font-family-ar)}:host:lang(he),:root:lang(he){font-family:var(--spectrum-alias-font-family-he)}:host:lang(zh-Hans),:root:lang(zh-Hans){font-family:var(--spectrum-alias-font-family-zhhans)}:host:lang(zh-Hant),:root:lang(zh-Hant){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(zh),:root:lang(zh){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(ko),:root:lang(ko){font-family:var(--spectrum-alias-font-family-ko)}:host:lang(ja),:root:lang(ja){font-family:var(--spectrum-alias-font-family-ja)}:host{display:block}#scale,#theme{height:100%;width:100%}
`;i.registerThemeFragment("spectrum","theme",c),i.registerThemeFragment("dark","color",e);const l=t.iv`
:host,:root{--spectrum-global-dimension-scale-factor:1;--spectrum-global-dimension-size-0:0px;--spectrum-global-dimension-size-10:1px;--spectrum-global-dimension-size-25:2px;--spectrum-global-dimension-size-30:2px;--spectrum-global-dimension-size-40:3px;--spectrum-global-dimension-size-50:4px;--spectrum-global-dimension-size-65:5px;--spectrum-global-dimension-size-75:6px;--spectrum-global-dimension-size-85:7px;--spectrum-global-dimension-size-100:8px;--spectrum-global-dimension-size-115:9px;--spectrum-global-dimension-size-125:10px;--spectrum-global-dimension-size-130:11px;--spectrum-global-dimension-size-150:12px;--spectrum-global-dimension-size-160:13px;--spectrum-global-dimension-size-175:14px;--spectrum-global-dimension-size-185:15px;--spectrum-global-dimension-size-200:16px;--spectrum-global-dimension-size-225:18px;--spectrum-global-dimension-size-250:20px;--spectrum-global-dimension-size-275:22px;--spectrum-global-dimension-size-300:24px;--spectrum-global-dimension-size-325:26px;--spectrum-global-dimension-size-350:28px;--spectrum-global-dimension-size-400:32px;--spectrum-global-dimension-size-450:36px;--spectrum-global-dimension-size-500:40px;--spectrum-global-dimension-size-550:44px;--spectrum-global-dimension-size-600:48px;--spectrum-global-dimension-size-650:52px;--spectrum-global-dimension-size-675:54px;--spectrum-global-dimension-size-700:56px;--spectrum-global-dimension-size-750:60px;--spectrum-global-dimension-size-800:64px;--spectrum-global-dimension-size-900:72px;--spectrum-global-dimension-size-1000:80px;--spectrum-global-dimension-size-1125:90px;--spectrum-global-dimension-size-1200:96px;--spectrum-global-dimension-size-1250:100px;--spectrum-global-dimension-size-1600:128px;--spectrum-global-dimension-size-1700:136px;--spectrum-global-dimension-size-1800:144px;--spectrum-global-dimension-size-2000:160px;--spectrum-global-dimension-size-2400:192px;--spectrum-global-dimension-size-2500:200px;--spectrum-global-dimension-size-3000:240px;--spectrum-global-dimension-size-3400:272px;--spectrum-global-dimension-size-3600:288px;--spectrum-global-dimension-size-4600:368px;--spectrum-global-dimension-size-5000:400px;--spectrum-global-dimension-size-6000:480px;--spectrum-global-dimension-font-size-25:10px;--spectrum-global-dimension-font-size-50:11px;--spectrum-global-dimension-font-size-75:12px;--spectrum-global-dimension-font-size-100:14px;--spectrum-global-dimension-font-size-150:15px;--spectrum-global-dimension-font-size-200:16px;--spectrum-global-dimension-font-size-300:18px;--spectrum-global-dimension-font-size-400:20px;--spectrum-global-dimension-font-size-500:22px;--spectrum-global-dimension-font-size-600:25px;--spectrum-global-dimension-font-size-700:28px;--spectrum-global-dimension-font-size-800:32px;--spectrum-global-dimension-font-size-900:36px;--spectrum-global-dimension-font-size-1000:40px;--spectrum-global-dimension-font-size-1100:45px;--spectrum-global-dimension-font-size-1200:50px;--spectrum-global-dimension-font-size-1300:60px;--spectrum-alias-item-text-padding-top-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-text-padding-bottom-s:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-item-workflow-padding-left-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-rounded-workflow-padding-left-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-rounded-workflow-padding-left-xl:21px;--spectrum-alias-item-mark-padding-top-m:var(
--spectrum-global-dimension-static-size-75
);--spectrum-alias-item-mark-padding-bottom-m:var(
--spectrum-global-dimension-static-size-75
);--spectrum-alias-item-mark-padding-left-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-1-size-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-1-size-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-2-size-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-3-height-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-3-width-s:23px;--spectrum-alias-item-control-3-width-m:var(
--spectrum-global-dimension-static-size-325
);--spectrum-alias-item-control-3-width-l:29px;--spectrum-alias-item-control-3-width-xl:33px;--spectrum-alias-item-mark-size-m:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-component-focusring-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-control-two-size-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-control-three-height-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-control-three-width-s:23px;--spectrum-alias-control-three-width-m:var(
--spectrum-global-dimension-static-size-325
);--spectrum-alias-control-three-width-l:29px;--spectrum-alias-control-three-width-xl:33px;--spectrum-alias-search-padding-left-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-focus-ring-border-radius-regular:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-focus-ring-radius-default:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-workflow-icon-size-l:var(
--spectrum-global-dimension-static-size-250
);--spectrum-alias-ui-icon-chevron-size-75:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-chevron-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-chevron-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-chevron-size-300:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-chevron-size-400:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-chevron-size-500:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-checkmark-size-50:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-checkmark-size-75:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-checkmark-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-checkmark-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-checkmark-size-300:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-checkmark-size-400:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-checkmark-size-500:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-checkmark-size-600:var(
--spectrum-global-dimension-static-size-225
);--spectrum-alias-ui-icon-dash-size-50:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-dash-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-dash-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-dash-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-dash-size-300:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-dash-size-400:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-dash-size-500:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-dash-size-600:var(
--spectrum-global-dimension-static-size-225
);--spectrum-alias-ui-icon-cross-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-cross-size-100:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-cross-size-200:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-cross-size-300:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-cross-size-400:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-cross-size-500:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-cross-size-600:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-arrow-size-75:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-arrow-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-arrow-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-arrow-size-300:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-arrow-size-400:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-arrow-size-500:var(
--spectrum-global-dimension-static-size-225
);--spectrum-alias-ui-icon-arrow-size-600:var(
--spectrum-global-dimension-static-size-250
);--spectrum-alias-ui-icon-triplegripper-size-100-width:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-doublegripper-size-100-height:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-ui-icon-singlegripper-size-100-height:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-ui-icon-cornertriangle-size-100:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-300:var(
--spectrum-global-dimension-static-size-85
);--spectrum-alias-ui-icon-asterisk-size-200:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-asterisk-size-300:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-avatar-size-100:var(--spectrum-global-dimension-size-250);--spectrum-alias-avatar-size-400:var(--spectrum-global-dimension-size-350);--spectrum-alias-avatar-size-600:var(--spectrum-global-dimension-size-450);--spectrum-alias-tag-icon-size-l:var(
--spectrum-global-dimension-static-size-250
);--spectrum-alias-tag-focusring-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-badge-s-neutral-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-l-neutral-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-s-primary-fill-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-m-primary-fill-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-l-primary-fill-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-xl-primary-fill-texticon-padding-left:21px;--spectrum-button-m-primary-outline-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-checkbox-l-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-dialog-confirm-title-text-size:var(
--spectrum-alias-heading-s-text-size
);--spectrum-dialog-confirm-description-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-dialog-confirm-padding:var(
--spectrum-global-dimension-static-size-500
);--spectrum-helptext-s-neutral-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-helptext-m-neutral-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-helptext-xl-neutral-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-listitem-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-listitem-m-textthumbnail-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-picker-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-progressbar-s-border-radius:var(
--spectrum-global-dimension-static-size-25
);--spectrum-progressbar-m-border-radius:var(
--spectrum-global-dimension-static-size-40
);--spectrum-progressbar-xl-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-progresscircle-s-border-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-progresscircle-m-border-size:3px;--spectrum-statuslight-s-info-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-l-info-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-info-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-xl-info-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-tag-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-textfield-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-tooltip-neutral-text-margin-bottom:var(
--spectrum-global-dimension-static-size-65
)}:host,:root{--spectrum-global-alias-appframe-border-size:2px}
`;i.registerThemeFragment("medium","scale",l),customElements.define("sp-theme",i);var n=s(655),u=s(599),d=s(338);const m=t.iv`
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
`;class p extends u.o{static get styles(){return[m]}render(){return t.dy`
            <slot></slot>
        `}}let b;(0,n.gn)([(0,d.Cb)()],p.prototype,"label",void 0),(0,n.gn)([(0,d.Cb)({reflect:!0})],p.prototype,"size",void 0);const h=function(t,...e){return b?b(t,...e):e.reduce(((e,o,r)=>e+o+t[r+1]),t[0])},g=t=>{b=t};function v(t,{validSizes:e=["s","m","l","xl"],noDefaultSize:o,defaultSize:r="m"}={}){class a extends t{constructor(){super(...arguments),this._size=r}get size(){return this._size||r}set size(t){const a=o?null:r,i=t?t.toLocaleLowerCase():t,s=e.includes(i)?i:a;if(s&&this.setAttribute("size",s),this._size===s)return;const c=this._size;this._size=s,this.requestUpdate("size",c)}update(t){this.hasAttribute("size")||o||this.setAttribute("size",this.size),super.update(t)}}return(0,n.gn)([(0,d.Cb)({type:String,reflect:!0})],a.prototype,"size",null),a}customElements.define("sp-icon-edit",class extends p{render(){return g(t.dy),(({width:t=24,height:e=24,hidden:o=!1,title:r="Edit"}={})=>h`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 36 36"
    width="${t}"
    aria-hidden="${o?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M33.567 8.2 27.8 2.432a1.215 1.215 0 0 0-.866-.353H26.9a1.371 1.371 0 0 0-.927.406L5.084 23.372a.99.99 0 0 0-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 0 0 .062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 0 0 .414-.249l20.888-20.889a1.372 1.372 0 0 0 .4-.883 1.221 1.221 0 0 0-.346-.945ZM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}),customElements.define("sp-icon-anchor-select",class extends p{render(){return g(t.dy),(({width:t=24,height:e=24,hidden:o=!1,title:r="Anchor Select"}={})=>h`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 36 36"
    width="${t}"
    aria-hidden="${o?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="m10 6 18 18H18l-8 8ZM8.5 2.054a.5.5 0 0 0-.5.5v32.78a.5.5 0 0 0 .5.5.49.49 0 0 0 .35-.147L18.524 26h13a.5.5 0 0 0 .354-.854L8.854 2.2a.49.49 0 0 0-.354-.146Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});var f=s(796);let x=!0;try{document.body.querySelector(":focus-visible")}catch(t){x=!1,s.e(202).then(s.t.bind(s,202,19))}const y=t=>{var e;const o=Symbol("endPolyfillCoordination");return e=o,class extends t{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),x||requestAnimationFrame((()=>{null==this[o]&&(this[o]=(t=>{if(null==t.shadowRoot||t.hasAttribute("data-js-focus-visible"))return()=>{};if(!self.applyFocusVisiblePolyfill){const e=()=>{self.applyFocusVisiblePolyfill&&t.shadowRoot&&self.applyFocusVisiblePolyfill(t.shadowRoot),t.manageAutoFocus&&t.manageAutoFocus()};return self.addEventListener("focus-visible-polyfill-ready",e,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",e)}}return self.applyFocusVisiblePolyfill(t.shadowRoot),t.manageAutoFocus&&t.manageAutoFocus(),()=>{}})(this))}))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),x||requestAnimationFrame((()=>{null!=this[o]&&(this[o](),this[o]=null)}))}}};class k extends(y(u.o)){constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this._tabIndex=0,this.manipulatingTabindex=!1}get tabIndex(){if(this.focusElement===this){const t=this.hasAttribute("tabindex")?Number(this.getAttribute("tabindex")):NaN;return isNaN(t)?-1:t}const t=parseFloat(this.hasAttribute("tabindex")&&this.getAttribute("tabindex")||"0");return this.disabled||t<0?-1:this.focusElement?this.focusElement.tabIndex:t}set tabIndex(t){if(this.manipulatingTabindex)this.manipulatingTabindex=!1;else if(this.focusElement!==this){if(-1===t?this.addEventListener("pointerdown",this.onPointerdownManagementOfTabIndex):(this.manipulatingTabindex=!0,this.removeEventListener("pointerdown",this.onPointerdownManagementOfTabIndex)),-1===t||this.disabled)return this.setAttribute("tabindex","-1"),this.removeAttribute("focusable"),void(-1!==t&&this.manageFocusElementTabindex(t));this.setAttribute("focusable",""),this.hasAttribute("tabindex")?this.removeAttribute("tabindex"):this.manipulatingTabindex=!1,this.manageFocusElementTabindex(t)}else if(t!==this.tabIndex){this._tabIndex=t;const e=this.disabled?"-1":""+t;this.setAttribute("tabindex",e)}}onPointerdownManagementOfTabIndex(){-1===this.tabIndex&&(this.tabIndex=0,this.focus({preventScroll:!0}))}async manageFocusElementTabindex(t){this.focusElement||await this.updateComplete,null===t?this.focusElement.removeAttribute("tabindex"):this.focusElement.tabIndex=t}get focusElement(){throw new Error("Must implement focusElement getter!")}focus(t){!this.disabled&&this.focusElement&&(this.focusElement!==this?this.focusElement.focus(t):HTMLElement.prototype.focus.apply(this,[t]))}blur(){const t=this.focusElement||this;t!==this?t.blur():HTMLElement.prototype.blur.apply(this)}click(){if(this.disabled)return;const t=this.focusElement||this;t!==this?t.click():HTMLElement.prototype.click.apply(this)}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focusElement.focus())}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("tabindex")&&"-1"===this.getAttribute("tabindex")||this.setAttribute("focusable","")}update(t){t.has("disabled")&&this.handleDisabledChanged(this.disabled,t.get("disabled")),super.update(t)}updated(t){super.updated(t),t.has("disabled")&&this.disabled&&this.blur()}async handleDisabledChanged(t,e){const o=()=>this.focusElement!==this&&void 0!==this.focusElement.disabled;t?(this.manipulatingTabindex=!0,this.setAttribute("tabindex","-1"),await this.updateComplete,o()?this.focusElement.disabled=!0:this.setAttribute("aria-disabled","true")):e&&(this.manipulatingTabindex=!0,this.focusElement===this?this.setAttribute("tabindex",""+this._tabIndex):this.removeAttribute("tabindex"),await this.updateComplete,o()?this.focusElement.disabled=!1:this.removeAttribute("aria-disabled"))}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{requestAnimationFrame((()=>{this.manageAutoFocus()}))}))}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],k.prototype,"disabled",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean})],k.prototype,"autofocus",void 0),(0,n.gn)([(0,d.Cb)({type:Number})],k.prototype,"tabIndex",null);class w{constructor(t,{direction:e,elementEnterAction:o,elements:r,focusInIndex:a,isFocusableElement:i,listenerScope:s}={elements:()=>[]}){this._currentIndex=-1,this._direction=()=>"both",this.directionLength=5,this.elementEnterAction=t=>{},this._focused=!1,this._focusInIndex=t=>0,this.isFocusableElement=t=>!0,this._listenerScope=()=>this.host,this.offset=0,this.handleFocusin=t=>{if(!this.isEventWithinListenerScope(t))return;this.isRelatedTargetAnElement(t)&&this.hostContainsFocus();const e=t.composedPath();let o=-1;e.find((t=>(o=this.elements.indexOf(t),-1!==o))),this.currentIndex=o>-1?o:this.currentIndex},this.handleFocusout=t=>{this.isRelatedTargetAnElement(t)&&this.hostNoLongerContainsFocus()},this.handleKeydown=t=>{if(!this.acceptsEventCode(t.code)||t.defaultPrevented)return;let e=0;switch(t.code){case"ArrowRight":e+=1;break;case"ArrowDown":e+="grid"===this.direction?this.directionLength:1;break;case"ArrowLeft":e-=1;break;case"ArrowUp":e-="grid"===this.direction?this.directionLength:1;break;case"End":this.currentIndex=0,e-=1;break;case"Home":this.currentIndex=this.elements.length-1,e+=1}t.preventDefault(),"grid"===this.direction&&this.currentIndex+e<0?this.currentIndex=0:"grid"===this.direction&&this.currentIndex+e>this.elements.length-1?this.currentIndex=this.elements.length-1:this.setCurrentIndexCircularly(e),this.elementEnterAction(this.elements[this.currentIndex]),this.focus()},this.host=t,this.host.addController(this),this._elements=r,this.isFocusableElement=i||this.isFocusableElement,"string"==typeof e?this._direction=()=>e:"function"==typeof e&&(this._direction=e),this.elementEnterAction=o||this.elementEnterAction,"number"==typeof a?this._focusInIndex=()=>a:"function"==typeof a&&(this._focusInIndex=a),"object"==typeof s?this._listenerScope=()=>s:"function"==typeof s&&(this._listenerScope=s)}get currentIndex(){return-1===this._currentIndex&&(this._currentIndex=this.focusInIndex),this._currentIndex-this.offset}set currentIndex(t){this._currentIndex=t+this.offset}get direction(){return this._direction()}get elements(){return this.cachedElements||(this.cachedElements=this._elements()),this.cachedElements}set focused(t){t!==this.focused&&(this._focused=t)}get focused(){return this._focused}get focusInElement(){return this.elements[this.focusInIndex]}get focusInIndex(){return this._focusInIndex(this.elements)}isEventWithinListenerScope(t){return this._listenerScope()===this.host||t.composedPath().includes(this._listenerScope())}update({elements:t}={elements:()=>[]}){this.unmanage(),this._elements=t,this.clearElementCache(),this.manage()}focus(t){let e=this.elements[this.currentIndex];e&&this.isFocusableElement(e)||(this.setCurrentIndexCircularly(1),e=this.elements[this.currentIndex]),e&&this.isFocusableElement(e)&&e.focus(t)}clearElementCache(t=0){delete this.cachedElements,this.offset=t}setCurrentIndexCircularly(t){const{length:e}=this.elements;let o=e,r=(e+this.currentIndex+t)%e;for(;o&&this.elements[r]&&!this.isFocusableElement(this.elements[r]);)r=(e+r+t)%e,o-=1;this.currentIndex=r}hostContainsFocus(){this.host.addEventListener("focusout",this.handleFocusout),this.host.addEventListener("keydown",this.handleKeydown),this.focused=!0}hostNoLongerContainsFocus(){this.host.addEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown),this.currentIndex=this.focusInIndex,this.focused=!1}isRelatedTargetAnElement(t){const e=t.relatedTarget;return!this.elements.includes(e)}acceptsEventCode(t){if("End"===t||"Home"===t)return!0;switch(this.direction){case"horizontal":return"ArrowLeft"===t||"ArrowRight"===t;case"vertical":return"ArrowUp"===t||"ArrowDown"===t;case"both":case"grid":return t.startsWith("Arrow")}}manage(){this.addEventListeners()}unmanage(){this.removeEventListeners()}addEventListeners(){this.host.addEventListener("focusin",this.handleFocusin)}removeEventListeners(){this.host.removeEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown)}hostConnected(){this.addEventListeners()}hostDisconnected(){this.removeEventListeners()}}class z extends w{constructor(){super(...arguments),this.managed=!0,this.manageIndexesAnimationFrame=0}set focused(t){t!==this.focused&&(super.focused=t,this.manageTabindexes())}get focused(){return super.focused}clearElementCache(t=0){cancelAnimationFrame(this.manageIndexesAnimationFrame),super.clearElementCache(t),this.managed&&(this.manageIndexesAnimationFrame=requestAnimationFrame((()=>this.manageTabindexes())))}manageTabindexes(){this.focused?this.updateTabindexes((()=>({tabIndex:-1}))):this.updateTabindexes((t=>({removeTabIndex:t.contains(this.focusInElement)&&t!==this.focusInElement,tabIndex:t===this.focusInElement?0:-1})))}updateTabindexes(t){this.elements.forEach((e=>{const{tabIndex:o,removeTabIndex:r}=t(e);if(!r)return void(e.tabIndex=o);e.removeAttribute("tabindex");const a=e;a.requestUpdate&&a.requestUpdate()}))}manage(){this.managed=!0,this.manageTabindexes(),super.manage()}unmanage(){this.managed=!1,this.updateTabindexes((()=>({tabIndex:0}))),super.unmanage()}hostUpdated(){this.host.hasUpdated||this.manageTabindexes()}}const C=t.iv`
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
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-s-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-s-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
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
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-m-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-m-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
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
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-l-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-l-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
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
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-xl-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-xl-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
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
);line-height:var(--spectrum-tabs-compact-item-height)}:host([direction^=horizontal]) #list{align-items:center;border-bottom:var(--spectrum-tabs-quiet-textonly-divider-size) solid}:host([direction^=horizontal]) ::slotted(:not([slot])){vertical-align:top}:host([dir=ltr][direction^=horizontal]) ::slotted(:not([slot]):not(:first-child)){margin-left:var(
--spectrum-tabs-textonly-tabitem-margin-right
)}:host([dir=rtl][direction^=horizontal]) ::slotted(:not([slot]):not(:first-child)){margin-right:var(
--spectrum-tabs-textonly-tabitem-margin-right
)}:host([direction^=horizontal]) #selection-indicator{bottom:0;bottom:calc(var(--spectrum-tabs-quiet-textonly-divider-size)*-1);height:var(--spectrum-tabs-quiet-textonly-divider-size);position:absolute}:host([direction^=horizontal][compact]) #list{align-items:end;box-sizing:content-box;height:var(--spectrum-tabs-compact-item-height)}:host([quiet]) #list{display:inline-flex}:host([dir=ltr][direction^=vertical]) #list{border-left:var(--spectrum-tabs-quiet-textonly-divider-size) solid}:host([dir=rtl][direction^=vertical]) #list{border-right:var(--spectrum-tabs-quiet-textonly-divider-size) solid}:host([direction^=vertical]) #list{display:inline-flex;flex-direction:column;padding:0}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])){margin-left:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])){margin-right:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2)}:host([direction^=vertical]) ::slotted(:not([slot])){height:var(
--spectrum-tabs-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-vertical-textonly-tabitem-height);margin-bottom:var(--spectrum-tabs-vertical-textonly-tabitem-gap);padding-bottom:0;padding-left:var(
--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x
);padding-right:var(
--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x
);padding-top:0}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([direction^=vertical]) .spectrum-Icon{height:var(
--spectrum-tabs-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-vertical-textonly-tabitem-height)}:host([direction^=vertical][compact]) #list ::slotted(:not([slot])){height:var(
--spectrum-tabs-compact-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-compact-vertical-textonly-tabitem-height);margin-bottom:var(--spectrum-tabs-compact-vertical-textonly-tabitem-gap)}:host([dir=ltr][direction^=vertical]) #selection-indicator{left:0}:host([dir=rtl][direction^=vertical]) #selection-indicator{right:0}:host([dir=ltr][direction^=vertical]) #selection-indicator{left:calc(var(--spectrum-tabs-quiet-textonly-divider-size)*-1)}:host([dir=rtl][direction^=vertical]) #selection-indicator{right:calc(var(--spectrum-tabs-quiet-textonly-divider-size)*-1)}:host([direction^=vertical]) #selection-indicator{position:absolute;width:var(--spectrum-tabs-quiet-textonly-divider-size)}#list{border-bottom-color:var(
--spectrum-tabs-textonly-divider-background-color
)}:host([dir=ltr][direction^=vertical]) #list{border-left-color:var(
--spectrum-tabs-vertical-textonly-divider-background-color
)}:host([dir=rtl][direction^=vertical]) #list{border-right-color:var(
--spectrum-tabs-vertical-textonly-divider-background-color
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
)}:host([dir=ltr][direction^=vertical][compact]) #list,:host([dir=ltr][direction^=vertical][quiet]) #list{border-left-color:var(
--spectrum-tabs-vertical-quiet-textonly-divider-background-color
)}:host([dir=rtl][direction^=vertical][compact]) #list,:host([dir=rtl][direction^=vertical][quiet]) #list{border-right-color:var(
--spectrum-tabs-vertical-quiet-textonly-divider-background-color
)}:host([direction^=vertical][compact]) #list #selection-indicator,:host([direction^=vertical][quiet]) #list #selection-indicator{background-color:var(
--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected
)}:host([dir=ltr][direction^=vertical][emphasized]) #list{border-left-color:var(
--spectrum-tabs-emphasized-textonly-divider-background-color
)}:host([dir=rtl][direction^=vertical][emphasized]) #list{border-right-color:var(
--spectrum-tabs-emphasized-textonly-divider-background-color
)}:host([direction^=vertical][emphasized]) #list #selection-indicator{background-color:var(
--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected
)}@media (forced-colors:active){#list{--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:HighlightText;--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:HighlightText;--spectrum-tabs-emphasized-textonly-divider-background-color:transparent;--spectrum-tabs-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-textonly-divider-background-color:transparent;--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-disabled:GrayText;--spectrum-tabs-textonly-tabitem-icon-color-hover:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-selected:HighlightText;--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-textonly-tabitem-text-color-disabled:GrayText;--spectrum-tabs-textonly-tabitem-text-color-hover:ButtonText;--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-text-color-selected:HighlightText;--spectrum-tabs-textonly-tabitem-text-color:ButtonText;--spectrum-tabs-vertical-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:Highlight;forced-color-adjust:none}::slotted(:not([slot])):before{background-color:ButtonFace}::slotted([selected]:not([slot])){color:HighlightText}::slotted([selected]:not([slot])):before{background-color:Highlight;color:HighlightText}:host([emphasized]) #list ::slotted(:not([slot])):before{background-color:ButtonFace}:host([emphasized]) #list ::slotted([selected]:not([slot])){color:HighlightText}:host([emphasized]) #list ::slotted([selected]:not([slot])):before{background-color:Highlight;color:HighlightText}}:host{--spectrum-tabs-emphasized-textonly-divider-background-color:transparent;--spectrum-tabs-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-textonly-divider-background-color:transparent;display:grid}:host([direction^=vertical]){grid-template-columns:auto 1fr}:host([direction=vertical]){gap:var(--spectrum-tabs-textonly-tabitem-focus-ring-size)}#selection-indicator{border-radius:0}:host([disabled]) #selection-indicator{background-color:var(
--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]) ::slotted(sp-tab){color:var(
--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}#list{justify-content:var(--swc-tabs-list-justify-content)}:host([disabled]) #list{pointer-events:none}:host([direction=vertical-right]) #selection-indicator,:host([direction=vertical]) #selection-indicator{height:1px;top:0}:host([compact]){--spectrum-tabs-height:var(--spectrum-tabs-quiet-compact-height)}:host([direction=horizontal]:not([quiet])) #list{border-bottom-color:var(
--spectrum-tabs-rule-color,var(--spectrum-global-color-gray-200)
)}:host([dir][direction=horizontal]) #selection-indicator{width:1px}:host([dir=ltr][direction=vertical-right]) #list{border-left:0;border-right:var(
--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)
) solid;border-right-color:var(
--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200)
)}:host([dir=rtl][direction=vertical-right]) #list{border-left:var(
--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)
) solid;border-left-color:var(
--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200)
);border-right:0}:host([dir=ltr][direction=vertical-right]) #selection-indicator{left:auto;right:calc(var(--spectrum-tabs-vertical-rule-width, var(--spectrum-alias-border-size-thick))*-1)}:host([dir=rtl][direction=vertical-right]) #selection-indicator{left:calc(var(--spectrum-tabs-vertical-rule-width, var(--spectrum-alias-border-size-thick))*-1);right:auto}#selection-indicator.first-position{transition:none}
`,q="transform: translateX(0px) scaleX(0) scaleY(0)";class I extends(v(k)){constructor(){super(...arguments),this.auto=!1,this.direction="horizontal",this.emphasized=!1,this.label="",this.selectionIndicatorStyle=q,this.shouldAnimate=!1,this._selected="",this._tabs=[],this.rovingTabindexController=new z(this,{focusInIndex:t=>{let e=0;return t.find(((t,o)=>{const r=this.selected?!t.disabled&&t.value===this.selected:!t.disabled;return e=o,r}))?e:-1},direction:()=>"horizontal"===this.direction?"horizontal":"vertical",elementEnterAction:t=>{this.auto&&(this.shouldAnimate=!0,this.selectTarget(t))},elements:()=>this.tabs,isFocusableElement:t=>!t.disabled,listenerScope:()=>this.tabList}),this.onClick=t=>{if(this.disabled)return;const e=t.composedPath().find((t=>t.parentElement===this));e&&!e.disabled&&(this.shouldAnimate=!0,this.selectTarget(e))},this.onKeyDown=t=>{if("Enter"===t.code||"Space"===t.code){t.preventDefault();const e=t.target;e&&this.selectTarget(e)}},this.updateCheckedState=()=>{if(this.tabs.length||(this.tabs=[...this.querySelectorAll('[role="tab"]')]),this.tabs.forEach((t=>{t.removeAttribute("selected")})),this.selected){const t=this.tabs.find((t=>t.value===this.selected));t?t.selected=!0:this.selected=""}else{const t=this.tabs[0];t&&t.setAttribute("tabindex","0")}this.updateSelectionIndicator(),this.tabChangeResolver()},this.updateSelectionIndicator=async()=>{const t=this.tabs.find((t=>t.selected));if(!t)return void(this.selectionIndicatorStyle=q);await Promise.all([t.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const e=t.getBoundingClientRect(),o=this.getBoundingClientRect();if("horizontal"===this.direction){const t=e.width,r="ltr"===this.dir?e.left-o.left:e.right-o.right;this.selectionIndicatorStyle=`transform: translateX(${r}px) scaleX(${"ltr"===this.dir?t:-1*t});`}else{const t=e.height,r=e.top-o.top;this.selectionIndicatorStyle=`transform: translateY(${r}px) scaleY(${t});`}},this.tabChangePromise=Promise.resolve(),this.tabChangeResolver=function(){}}static get styles(){return[C]}get selected(){return this._selected}set selected(t){const e=this.selected;t!==e&&(this._selected=t,this.shouldUpdateCheckedState(),this.requestUpdate("selected",e))}set tabs(t){t!==this.tabs&&(this._tabs=t,this.rovingTabindexController.clearElementCache())}get tabs(){return this._tabs}get focusElement(){return this.rovingTabindexController.focusInElement||this}manageAutoFocus(){const t=[...this.children].map((t=>void 0!==t.updateComplete?t.updateComplete:Promise.resolve(!0)));Promise.all(t).then((()=>super.manageAutoFocus()))}managePanels({target:t}){t.assignedElements().map((t=>{const{value:e,id:o}=t,r=this.querySelector(`[role="tab"][value="${e}"]`);r&&(r.setAttribute("aria-controls",o),t.setAttribute("aria-labelledby",r.id)),t.selected=e===this.selected}))}render(){return t.dy`
            <div
                aria-label=${(0,f.o)(this.label?this.label:void 0)}
                @click=${this.onClick}
                @keydown=${this.onKeyDown}
                @sp-tab-contentchange=${this.updateSelectionIndicator}
                id="list"
                role="tablist"
            >
                <slot @slotchange=${this.onSlotChange}></slot>
                <div
                    id="selection-indicator"
                    class=${(0,f.o)(this.shouldAnimate?void 0:"first-position")}
                    style=${this.selectionIndicatorStyle}
                    role="presentation"
                ></div>
            </div>
            <slot name="tab-panel" @slotchange=${this.managePanels}></slot>
        `}willUpdate(t){if(!this.hasUpdated){const t=this.querySelector(":scope > [selected]");t&&this.selectTarget(t)}if(super.updated(t),t.has("selected")){if(t.get("selected")){const e=this.querySelector(`[role="tabpanel"][value="${t.get("selected")}"]`);e&&(e.selected=!1)}const e=this.querySelector(`[role="tabpanel"][value="${this.selected}"]`);e&&(e.selected=!0)}t.has("direction")&&("horizontal"===this.direction?this.removeAttribute("aria-orientation"):this.setAttribute("aria-orientation","vertical")),t.has("dir")&&this.updateSelectionIndicator(),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),this.shouldAnimate||void 0===t.get("shouldAnimate")||(this.shouldAnimate=!0)}selectTarget(t){const e=t.getAttribute("value");if(e){const t=this.selected;this.selected=e,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=t)}}onSlotChange(){this.tabs=[...this.querySelectorAll('[role="tab"]')],this.shouldUpdateCheckedState()}shouldUpdateCheckedState(){this.tabChangeResolver(),this.tabChangePromise=new Promise((t=>this.tabChangeResolver=t)),setTimeout(this.updateCheckedState)}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.tabChangePromise,t}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.addEventListener("loadingdone",this.updateSelectionIndicator)}disconnectedCallback(){window.removeEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.removeEventListener("loadingdone",this.updateSelectionIndicator),super.disconnectedCallback()}}(0,n.gn)([(0,d.Cb)({type:Boolean})],I.prototype,"auto",void 0),(0,n.gn)([(0,d.Cb)({reflect:!0})],I.prototype,"direction",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],I.prototype,"emphasized",void 0),(0,n.gn)([(0,d.Cb)()],I.prototype,"label",void 0),(0,n.gn)([(0,d.Cb)({attribute:!1})],I.prototype,"selectionIndicatorStyle",void 0),(0,n.gn)([(0,d.Cb)({attribute:!1})],I.prototype,"shouldAnimate",void 0),(0,n.gn)([(0,d.IO)("#list")],I.prototype,"tabList",void 0),(0,n.gn)([(0,d.Cb)({reflect:!0})],I.prototype,"selected",null),customElements.define("sp-tabs",I);class E{constructor(t,{target:e,config:o,callback:r,skipInitial:a}){this.t=!1,this.i=!1,this.callback=()=>!0,(this.h=t).addController(this),this.o=null===e||null!=e?e:this.h,this.l=o,this.t=null!=a?a:this.t,this.callback=null!=r?r:this.callback,window.MutationObserver?this.u=new MutationObserver((t=>{this.handleChanges(t),this.h.requestUpdate()})):console.warn("MutationController error: browser does not support MutationObserver.")}handleChanges(t){this.value=this.callback(t,this.u)}hostConnected(){this.o&&this.observe(this.o)}hostDisconnected(){this.disconnect()}async hostUpdated(){const t=this.u.takeRecords();(t.length||!this.t&&this.i)&&this.handleChanges(t),this.i=!1}observe(t){this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate()}disconnect(){this.u.disconnect()}}const A=Symbol("assignedNodes");function S(t,e){var o;class r extends t{constructor(...t){super(t),this.slotHasContent=!1,new E(this,{config:{characterData:!0,subtree:!0},callback:t=>{for(const e of t)if("characterData"===e.type)return void this.manageTextObservedSlot()}})}manageTextObservedSlot(){if(!this[A])return;const t=[...this[A]].filter((t=>!!t.tagName||!!t.textContent&&t.textContent.trim()));this.slotHasContent=t.length>0}update(t){if(!this.hasUpdated){const{childNodes:t}=this,o=[...t].filter((t=>t.tagName?e?t.getAttribute("slot")===e:!t.hasAttribute("slot"):!!t.textContent&&t.textContent.trim()));this.slotHasContent=o.length>0}super.update(t)}firstUpdated(t){super.firstUpdated(t),this.manageTextObservedSlot()}}return o=A,(0,n.gn)([(0,d.Cb)({type:Boolean,attribute:!1})],r.prototype,"slotHasContent",void 0),(0,n.gn)([(0,d.vZ)(e,!0)],r.prototype,o,void 0),r}const $=Symbol("slotContentIsPresent");function _(t,e){var o;const r=Array.isArray(e)?e:[e];return o=$,class extends t{constructor(...t){super(t),this[o]=new Map,this.managePresenceObservedSlot=()=>{let t=!1;r.forEach((e=>{const o=!!this.querySelector(e),r=this[$].get(e)||!1;t=t||r!==o,this[$].set(e,!!this.querySelector(e))})),t&&this.requestUpdate()},new E(this,{config:{childList:!0,subtree:!0},callback:()=>{this.managePresenceObservedSlot()}}),this.managePresenceObservedSlot()}get slotContentIsPresent(){if(1===r.length)return this[$].get(r[0])||!1;throw new Error("Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.")}getSlotContentPresence(t){if(this[$].has(t))return this[$].get(t)||!1;throw new Error(`The provided selector \`${t}\` is not being observed.`)}}}const T=t.iv`
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
)}:host(:focus-visible){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus
)}:host(.focus-visible):before{border-color:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus
)}:host(:focus-visible):before{border-color:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus
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
`;class F extends(y(S(_(u.o,'[slot="icon"]'),""))){constructor(){super(...arguments),this.disabled=!1,this.label="",this.selected=!1,this.vertical=!1,this.value=""}static get styles(){return[T]}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return!!this.label||this.slotHasContent}handleContentChange(){this.dispatchEvent(new Event("sp-tab-contentchange",{bubbles:!0,composed:!0}))}render(){return t.dy`
            ${this.hasIcon?t.dy`
                      <slot name="icon"></slot>
                  `:t.dy``}
            <label id="item-label" ?hidden=${!this.hasLabel}>
                ${this.slotHasContent?t.dy``:this.label}
                <slot>${this.label}</slot>
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","tab"),this.hasAttribute("id")||(this.id="sp-tab-"+F.instanceCount++),this.shadowRoot.addEventListener("slotchange",this.handleContentChange)}updated(t){super.updated(t),t.has("label")&&void 0!==t.get("label")&&this.handleContentChange(),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.setAttribute("tabindex",this.selected?"0":"-1")),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}}F.instanceCount=0,(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],F.prototype,"disabled",void 0),(0,n.gn)([(0,d.Cb)({reflect:!0})],F.prototype,"label",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],F.prototype,"selected",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],F.prototype,"vertical",void 0),(0,n.gn)([(0,d.Cb)({type:String,reflect:!0})],F.prototype,"value",void 0),customElements.define("sp-tab",F);const U=t.iv`
:host{display:inline-flex}:host(:not([selected])){display:none}
`;class B extends u.o{constructor(){super(...arguments),this.selected=!1,this.value=""}render(){return t.dy`
            <slot></slot>
        `}firstUpdated(){this.slot="tab-panel",this.setAttribute("role","tabpanel"),this.tabIndex=0,this.hasAttribute("id")||(this.id="sp-tab-panel-"+B.instanceCount++)}updated(t){t.has("selected")&&(this.selected?(this.removeAttribute("aria-hidden"),this.tabIndex=0):(this.setAttribute("aria-hidden","true"),this.tabIndex=-1))}}function L(e){class o extends e{renderAnchor({id:e,className:o,ariaHidden:r,labelledby:a,tabindex:i,anchorContent:s=t.dy`<slot></slot>`}){return t.dy`<a
                    id=${e}
                    class=${(0,f.o)(o)}
                    href=${(0,f.o)(this.href)}
                    download=${(0,f.o)(this.download)}
                    target=${(0,f.o)(this.target)}
                    aria-label=${(0,f.o)(this.label)}
                    aria-labelledby=${(0,f.o)(a)}
                    aria-hidden=${(0,f.o)(r?"true":void 0)}
                    tabindex=${(0,f.o)(i)}
                    rel=${(0,f.o)(this.rel)}
                >${s}</a>`}}return(0,n.gn)([(0,d.Cb)({reflect:!0})],o.prototype,"download",void 0),(0,n.gn)([(0,d.Cb)()],o.prototype,"label",void 0),(0,n.gn)([(0,d.Cb)({reflect:!0})],o.prototype,"href",void 0),(0,n.gn)([(0,d.Cb)({reflect:!0})],o.prototype,"target",void 0),(0,n.gn)([(0,d.Cb)({reflect:!0})],o.prototype,"rel",void 0),o}B.styles=[U],B.instanceCount=0,(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],B.prototype,"selected",void 0),(0,n.gn)([(0,d.Cb)({type:String,reflect:!0})],B.prototype,"value",void 0),customElements.define("sp-tab-panel",B);class P extends(L(S(_(k,'[slot="icon"]')))){constructor(){super(),this.active=!1,this.type="button",this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0})}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return this.slotHasContent}get focusElement(){return this}get buttonContent(){const e=[t.dy`
                <div id="label" ?hidden=${!this.hasLabel}>
                    <slot
                        id="slot"
                        @slotchange=${this.manageTextObservedSlot}
                    ></slot>
                </div>
            `];return this.hasIcon&&e.unshift(t.dy`
                <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
            `),e}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;if(this.anchorElement)this.anchorElement.click(),t=!0;else if("button"!==this.type){const e=document.createElement("button");e.type=this.type,this.insertAdjacentElement("afterend",e),e.click(),e.remove(),t=!0}return t}renderAnchor(){return t.dy`
            ${this.buttonContent}
            ${super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"})}
        `}renderButton(){return t.dy`
            ${this.buttonContent}
        `}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton()}handleKeydown(t){const{code:e}=t;"Space"===e&&(t.preventDefault(),void 0===this.href&&(this.addEventListener("keyup",this.handleKeyup),this.active=!0))}handleKeypress(t){const{code:e}=t;switch(e){case"Enter":case"NumpadEnter":this.click()}}handleKeyup(t){const{code:e}=t;"Space"===e&&(this.removeEventListener("keyup",this.handleKeyup),this.active=!1,this.click())}handleRemoveActive(){this.active=!1}handlePointerdown(){this.active=!0}manageAnchor(){this.href&&this.href.length>0?("button"===this.getAttribute("role")&&this.setAttribute("role","link"),this.removeEventListener("click",this.shouldProxyClick)):(this.hasAttribute("role")&&"link"!==this.getAttribute("role")||this.setAttribute("role","button"),this.addEventListener("click",this.shouldProxyClick))}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("tabindex")||(this.tabIndex=0),this.manageAnchor(),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keypress",this.handleKeypress),this.addEventListener("pointerdown",this.handlePointerdown)}updated(t){super.updated(t),t.has("href")&&this.manageAnchor(),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("focusout",this.handleRemoveActive),this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("focusout",this.handleRemoveActive),this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1)}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],P.prototype,"active",void 0),(0,n.gn)([(0,d.Cb)({type:String})],P.prototype,"type",void 0),(0,n.gn)([(0,d.IO)(".anchor")],P.prototype,"anchorElement",void 0);const H=t.iv`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host([disabled]){cursor:default}::slotted([slot=icon]){max-height:100%}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host([variant=black]:not([quiet])[disabled]){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-disabled,rgba(0,0,0,.25)
)}:host([variant=black]:not([quiet])[disabled][selected]){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-disabled-selected,transparent
)}:host([variant=black]:not([quiet])[disabled]:not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-disabled,transparent
)}:host([variant=black]:not([quiet]):not([disabled])){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-default,rgba(0,0,0,.4)
)}:host([variant=black]:not([quiet]):not([disabled]):hover){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-hover,rgba(0,0,0,.55)
)}:host([variant=black]:not([quiet]):not([disabled])[active]){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-down,rgba(0,0,0,.7)
)}:host([variant=black]:not([quiet]):not([disabled]).focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-key-focus,rgba(0,0,0,.55)
)}:host([variant=black]:not([quiet]):not([disabled]):focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-key-focus,rgba(0,0,0,.55)
)}:host([variant=black]:not([quiet]):not([disabled]).is-keyboardFocused){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-key-focus,rgba(0,0,0,.55)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-default,transparent
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected]):hover){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-hover,rgba(0,0,0,.25)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected])[active]){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-down,rgba(0,0,0,.4)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected]).focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-key-focus,rgba(0,0,0,.25)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected]):focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-key-focus,rgba(0,0,0,.25)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected]).is-keyboardFocused){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-key-focus,rgba(0,0,0,.25)
)}:host([variant=black][quiet][disabled]){border-color:transparent}:host([variant=black][quiet][disabled]:not([selected])){background-color:transparent}:host([variant=black][quiet]:not([disabled])){border-color:transparent}:host([variant=black][quiet]:not([disabled]):not([selected])){background-color:var(
--spectrum-alias-component-background-color-quiet-default,var(--spectrum-alias-background-color-transparent)
)}:host([variant=black][quiet]:not([disabled]):not([selected]):hover){background-color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-25))}:host([variant=black][quiet]:not([disabled]):not([selected])[active]){background-color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([variant=black][quiet]:not([disabled]):not([selected]).focus-visible){background-color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-25))}:host([variant=black][quiet]:not([disabled]):not([selected]):focus-visible){background-color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-25))}:host([variant=black][quiet]:not([disabled]):not([selected]).is-keyboardFocused){background-color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-25))}:host([size][variant=black][disabled][selected]){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-disabled-selected,rgba(0,0,0,.1)
)}:host([size][variant=black][disabled][selected]) .hold-affordance{color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([size][variant=black][disabled][selected]) #label{color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([size][variant=black][disabled][selected]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([variant=black][disabled]) .hold-affordance{color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([variant=black][disabled]) #label{color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([variant=black][disabled]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([variant=black][selected]:not([disabled])){background-color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-90))}:host([variant=black][selected]:not([disabled]):hover){background-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black][selected]:not([disabled])[active]){background-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black][selected]:not([disabled]).focus-visible){background-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black][selected]:not([disabled]):focus-visible){background-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black][selected]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black][selected]:not([disabled])) .hold-affordance{color:inherit}:host([variant=black][selected]:not([disabled])) #label{color:inherit}:host([variant=black][selected]:not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=black]) .hold-affordance{color:var(
--spectrum-ActionButton-static-black-color
)}:host([variant=black]:not([disabled]):not([selected])) .hold-affordance{color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-90))}:host([variant=black]:not([disabled]):not([selected]):hover) .hold-affordance{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]):hover) #label{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]):hover) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected])[active]) .hold-affordance{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected])[active]) #label{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected])[active]) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]).focus-visible) .hold-affordance{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]):focus-visible) .hold-affordance{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]).focus-visible) #label{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]):focus-visible) #label{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]).is-keyboardFocused) .hold-affordance{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]).is-keyboardFocused) #label{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected])) #label{color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-90))}:host([variant=black]:not([disabled]):not([selected])) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-90))}:host([variant=black]) #label{color:var(
--spectrum-ActionButton-static-black-color
)}:host([variant=black]) ::slotted([slot=icon]){color:var(
--spectrum-ActionButton-static-black-color
)}:host([variant=white]:not([quiet])[disabled]){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-disabled,hsla(0,0%,100%,.25)
)}:host([variant=white]:not([quiet])[disabled][selected]){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-disabled-selected,transparent
)}:host([variant=white]:not([quiet])[disabled]:not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-disabled,transparent
)}:host([variant=white]:not([quiet]):not([disabled])){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-default,hsla(0,0%,100%,.4)
)}:host([variant=white]:not([quiet]):not([disabled]):hover){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-hover,hsla(0,0%,100%,.55)
)}:host([variant=white]:not([quiet]):not([disabled])[active]){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-down,hsla(0,0%,100%,.7)
)}:host([variant=white]:not([quiet]):not([disabled]).focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-key-focus,hsla(0,0%,100%,.55)
)}:host([variant=white]:not([quiet]):not([disabled]):focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-key-focus,hsla(0,0%,100%,.55)
)}:host([variant=white]:not([quiet]):not([disabled]).is-keyboardFocused){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-key-focus,hsla(0,0%,100%,.55)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-default,transparent
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected]):hover){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-hover,hsla(0,0%,100%,.25)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected])[active]){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-down,hsla(0,0%,100%,.4)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected]).focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected]):focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected]).is-keyboardFocused){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host([variant=white][quiet][disabled]){border-color:transparent}:host([variant=white][quiet][disabled]:not([selected])){background-color:transparent}:host([variant=white][quiet]:not([disabled])){border-color:transparent}:host([variant=white][quiet]:not([disabled]):not([selected])){background-color:var(
--spectrum-alias-component-background-color-quiet-default,var(--spectrum-alias-background-color-transparent)
)}:host([variant=white][quiet]:not([disabled]):not([selected]):hover){background-color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-25))}:host([variant=white][quiet]:not([disabled]):not([selected])[active]){background-color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([variant=white][quiet]:not([disabled]):not([selected]).focus-visible){background-color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-25))}:host([variant=white][quiet]:not([disabled]):not([selected]):focus-visible){background-color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-25))}:host([variant=white][quiet]:not([disabled]):not([selected]).is-keyboardFocused){background-color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-25))}:host([size][variant=white][disabled][selected]){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-disabled-selected,hsla(0,0%,100%,.1)
)}:host([size][variant=white][disabled][selected]) .hold-affordance{color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([size][variant=white][disabled][selected]) #label{color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([size][variant=white][disabled][selected]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([variant=white][disabled]) .hold-affordance{color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([variant=white][disabled]) #label{color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([variant=white][disabled]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([variant=white][selected]:not([disabled])){background-color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-90))}:host([variant=white][selected]:not([disabled]):hover){background-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white][selected]:not([disabled])[active]){background-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white][selected]:not([disabled]).focus-visible){background-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white][selected]:not([disabled]):focus-visible){background-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white][selected]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white][selected]:not([disabled])) .hold-affordance{color:inherit}:host([variant=white][selected]:not([disabled])) #label{color:inherit}:host([variant=white][selected]:not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=white]) .hold-affordance{color:var(
--spectrum-ActionButton-static-white-color
)}:host([variant=white]:not([disabled]):not([selected])) .hold-affordance{color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-90))}:host([variant=white]:not([disabled]):not([selected]):hover) .hold-affordance{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]):hover) #label{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]):hover) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected])[active]) .hold-affordance{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected])[active]) #label{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected])[active]) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]).focus-visible) .hold-affordance{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]):focus-visible) .hold-affordance{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]).focus-visible) #label{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]):focus-visible) #label{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]).is-keyboardFocused) .hold-affordance{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]).is-keyboardFocused) #label{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected])) #label{color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-90))}:host([variant=white]:not([disabled]):not([selected])) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-90))}:host([variant=white]) #label{color:var(
--spectrum-ActionButton-static-white-color
)}:host([variant=white]) ::slotted([slot=icon]){color:var(
--spectrum-ActionButton-static-white-color
)}:host([size=s]){--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-s-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-s-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-s-texticon-padding-left,var(--spectrum-global-dimension-size-85)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-s-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-s-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-s-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-s-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-s-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-s-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-40)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-s-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-40)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-s-textonly-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-s-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-s-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-s-textonly-height,var(--spectrum-global-dimension-size-300)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-s-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-s-textonly-padding-right,var(--spectrum-global-dimension-size-115)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-s-textonly-padding-left,var(--spectrum-global-dimension-size-115)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-s-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-s-icononly-padding-right,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-s-icononly-padding-left,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-global-dimension-size-300
)}:host([size=m]){--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-m-texticon-padding-left
);--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-m-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-m-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-m-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-m-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-m-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-m-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-m-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-m-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-m-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-m-textonly-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-m-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-m-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-actionbutton-m-textonly-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-m-textonly-height,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-m-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-m-textonly-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-m-textonly-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-m-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-m-icononly-padding-right,var(--spectrum-global-dimension-size-85)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-m-icononly-padding-left,var(--spectrum-global-dimension-size-85)
)}:host([size=l]){--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-l-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-l-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-l-texticon-padding-left,var(--spectrum-global-dimension-size-160)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-l-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-l-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-l-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-l-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-l-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-l-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-65)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-l-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-65)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-l-textonly-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-l-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-l-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-actionbutton-l-textonly-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-l-textonly-height,var(--spectrum-global-dimension-size-500)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-l-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-l-textonly-padding-right,var(--spectrum-global-dimension-size-185)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-l-textonly-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-l-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-l-icononly-padding-right,var(--spectrum-global-dimension-size-125)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-l-icononly-padding-left,var(--spectrum-global-dimension-size-125)
)}:host([size=xl]){--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-xl-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-xl-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-xl-texticon-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-xl-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-xl-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-xl-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-xl-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-xl-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-xl-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-75)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-xl-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-75)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-xl-textonly-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-xl-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-xl-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-actionbutton-xl-textonly-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-xl-textonly-height,var(--spectrum-global-dimension-size-600)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-xl-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-xl-textonly-padding-right,var(--spectrum-global-dimension-size-225)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-xl-textonly-padding-left,var(--spectrum-global-dimension-size-225)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-xl-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-xl-icononly-padding-right,var(--spectrum-global-dimension-size-160)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-xl-icononly-padding-left,var(--spectrum-global-dimension-size-160)
)}:host{--spectrum-actionbutton-padding-left-adjusted:calc(var(--spectrum-actionbutton-texticon-padding-left) - var(--spectrum-actionbutton-texticon-border-size));--spectrum-actionbutton-textonly-padding-left-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-left) - var(--spectrum-actionbutton-textonly-border-size));--spectrum-actionbutton-textonly-padding-right-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-right) - var(--spectrum-actionbutton-textonly-border-size));--spectrum-actionbutton-icononly-padding-left-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-left) - var(--spectrum-actionbutton-icononly-border-size));--spectrum-actionbutton-icononly-padding-right-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-right) - var(--spectrum-actionbutton-icononly-border-size));--spectrum-actionbutton-focus-ring-border-radius-adjusted:calc(var(--spectrum-actionbutton-quiet-textonly-border-radius) + var(--spectrum-actionbutton-focus-ring-gap))}:host([dir=ltr]){padding-left:var(
--spectrum-actionbutton-textonly-padding-left-adjusted
);padding-right:var(--spectrum-actionbutton-textonly-padding-right-adjusted)}:host([dir=rtl]){padding-left:var(--spectrum-actionbutton-textonly-padding-right-adjusted);padding-right:var(
--spectrum-actionbutton-textonly-padding-left-adjusted
)}:host{border-radius:var(--spectrum-actionbutton-textonly-border-radius);border-width:var(--spectrum-actionbutton-textonly-border-size);color:inherit;font-size:var(--spectrum-actionbutton-textonly-text-size);font-weight:var(--spectrum-actionbutton-textonly-text-font-weight);height:var(--spectrum-actionbutton-textonly-height);line-height:var(--spectrum-actionbutton-textonly-text-line-height);min-width:var(--spectrum-actionbutton-textonly-min-width);position:relative}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted))*-1)}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted))*-1)}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(
--spectrum-actionbutton-texticon-icon-gap
)}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(
--spectrum-actionbutton-texticon-icon-gap
)}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}.hold-affordance+::slotted([slot=icon]),:host([dir]) slot[icon-only] sp-icon,:host([dir]) slot[icon-only]::slotted([slot=icon]){margin-left:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-icononly-padding-left-adjusted))*-1);margin-right:calc((var(--spectrum-actionbutton-textonly-padding-right-adjusted) - var(--spectrum-actionbutton-icononly-padding-right-adjusted))*-1)}#label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) .hold-affordance{right:var(
--spectrum-actionbutton-textonly-hold-icon-padding-right
)}:host([dir=rtl]) .hold-affordance{left:var(
--spectrum-actionbutton-textonly-hold-icon-padding-right
)}:host([dir=rtl]) .hold-affordance{transform:matrix(-1,0,0,1,0,0)}.hold-affordance{bottom:var(--spectrum-actionbutton-textonly-hold-icon-padding-bottom);position:absolute}:host([quiet]){border-radius:var(--spectrum-actionbutton-quiet-textonly-border-radius);border-width:var(
--spectrum-actionbutton-quiet-textonly-border-size
);font-size:var(--spectrum-actionbutton-quiet-textonly-text-size);font-weight:var(--spectrum-actionbutton-quiet-textonly-text-font-weight)}:host{--spectrum-actionbutton-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap,var(--spectrum-global-dimension-static-size-0)
);--spectrum-actionbutton-focus-ring-size:var(
--spectrum-alias-component-focusring-size,var(--spectrum-global-dimension-static-size-10)
);--spectrum-actionbutton-focus-ring-color:var(
--spectrum-actionbutton-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host:after{border-radius:var(
--spectrum-actionbutton-focus-ring-border-radius-adjusted
);bottom:0;content:"";left:0;margin:calc((var(--spectrum-actionbutton-focus-ring-gap) + var(--spectrum-actionbutton-textonly-border-size))*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host(.focus-visible){box-shadow:none!important}:host(:focus-visible){box-shadow:none!important}:host(.focus-visible):after{box-shadow:0 0 0 var(--spectrum-actionbutton-focus-ring-size) var(--spectrum-actionbutton-focus-ring-color)}:host(:focus-visible):after{box-shadow:0 0 0 var(--spectrum-actionbutton-focus-ring-size) var(--spectrum-actionbutton-focus-ring-color)}:host([variant=white]){--spectrum-actionbutton-focus-ring-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=black]){--spectrum-actionbutton-focus-ring-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([emphasized][selected]),:host([variant=black]),:host([variant=white]){--spectrum-actionbutton-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap-emphasized,var(--spectrum-global-dimension-static-size-25)
);--spectrum-actionbutton-focus-ring-size:var(
--spectrum-alias-component-focusring-size-emphasized,var(--spectrum-global-dimension-static-size-25)
)}:host{background-color:var(
--spectrum-actionbutton-m-textonly-background-color,var(--spectrum-alias-component-background-color-default)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color,var(--spectrum-alias-component-border-color-default)
);color:var(
--spectrum-actionbutton-m-textonly-text-color,var(--spectrum-alias-component-text-color-default)
)}::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}.hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color,var(--spectrum-alias-component-icon-color-default)
)}:host(:hover){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-hover,var(--spectrum-alias-component-background-color-hover)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-hover,var(--spectrum-alias-component-border-color-hover)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host(:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}:host(:hover) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}:host(.focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(.focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host(:focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host(.focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host(:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host(.focus-visible) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host(:focus-visible) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host([active]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-down,var(--spectrum-alias-component-background-color-down)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-down,var(--spectrum-alias-component-border-color-down)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host([active]) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-down,var(--spectrum-alias-component-icon-color-down)
)}:host([disabled]),:host([disabled]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-disabled,var(--spectrum-alias-component-background-color-disabled)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-disabled,var(--spectrum-alias-component-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([disabled]) ::slotted([slot=icon]),:host([disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([disabled]) .hold-affordance,:host([disabled]) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([selected]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected,var(--spectrum-alias-component-background-color-selected-default)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected,var(--spectrum-alias-component-border-color-selected-default)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([selected]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-key-focus,var(--spectrum-alias-component-background-color-selected-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-key-focus,var(--spectrum-alias-component-background-color-selected-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([selected].focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([selected]:focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([selected].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected]:hover){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-hover,var(--spectrum-alias-component-background-color-selected-hover)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-hover,var(--spectrum-alias-component-border-color-selected-hover)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-selected-hover)
)}:host([selected]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-hover,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected][active]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-down,var(--spectrum-alias-component-background-color-selected-down)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-down,var(--spectrum-alias-component-border-color-selected-down)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-selected-down)
)}:host([selected][active]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-down,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected][disabled]),:host([selected][disabled]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-disabled,var(--spectrum-alias-component-background-color-disabled)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([selected][disabled]) ::slotted([slot=icon]),:host([selected][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([emphasized][quiet][selected]),:host([emphasized][selected]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected,var(
--spectrum-alias-component-background-color-emphasized-selected-default
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected,var(--spectrum-alias-component-border-color-emphasized-selected-default)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected,var(--spectrum-alias-component-text-color-emphasized-selected-default)
)}:host([emphasized][quiet][selected]) ::slotted([slot=icon]),:host([emphasized][selected]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected,var(--spectrum-alias-component-icon-color-emphasized-selected-default)
)}:host([emphasized][quiet][selected].focus-visible),:host([emphasized][selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-emphasized-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-key-focus,var(
--spectrum-alias-component-border-color-emphasized-selected-key-focus
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected]:focus-visible),:host([emphasized][selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-emphasized-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-key-focus,var(
--spectrum-alias-component-border-color-emphasized-selected-key-focus
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected].focus-visible) ::slotted([slot=icon]),:host([emphasized][selected].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected]:focus-visible) ::slotted([slot=icon]),:host([emphasized][selected]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected]:hover),:host([emphasized][selected]:hover){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-hover,var(
--spectrum-alias-component-background-color-emphasized-selected-hover
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-hover,var(--spectrum-alias-component-border-color-emphasized-selected-hover)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-emphasized-selected-hover)
)}:host([emphasized][quiet][selected]:hover) ::slotted([slot=icon]),:host([emphasized][selected]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-hover,var(--spectrum-alias-component-icon-color-emphasized-selected-hover)
)}:host([emphasized][quiet][selected][active]),:host([emphasized][selected][active]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-down,var(
--spectrum-alias-component-background-color-emphasized-selected-down
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-down,var(--spectrum-alias-component-border-color-emphasized-selected-down)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-emphasized-selected-down)
)}:host([emphasized][quiet][selected][active]) ::slotted([slot=icon]),:host([emphasized][selected][active]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-down,var(--spectrum-alias-component-icon-color-emphasized-selected-down)
)}:host([emphasized][quiet][selected][disabled]),:host([emphasized][quiet][selected][disabled]),:host([emphasized][selected][disabled]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-disabled,var(--spectrum-alias-component-background-color-disabled)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([emphasized][quiet][selected][disabled]) ::slotted([slot=icon]),:host([emphasized][quiet][selected][disabled]) ::slotted([slot=icon]),:host([emphasized][selected][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([quiet]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color,var(--spectrum-alias-component-background-color-quiet-default)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color,var(--spectrum-alias-component-border-color-quiet-default)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([quiet]:hover){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-hover,var(--spectrum-alias-component-background-color-quiet-hover)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-hover,var(--spectrum-alias-component-border-color-quiet-hover)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([quiet].focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-quiet-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host([quiet]:focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-quiet-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host([quiet][active]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-down,var(--spectrum-alias-component-background-color-quiet-down)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-down,var(--spectrum-alias-component-border-color-quiet-down)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host([quiet][disabled]),:host([quiet][disabled]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-disabled,var(--spectrum-alias-component-background-color-quiet-disabled)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-disabled,var(--spectrum-alias-component-border-color-quiet-disabled)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([quiet][selected]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected,var(--spectrum-alias-component-background-color-selected-default)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected,var(--spectrum-alias-component-border-color-quiet-selected-default)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([quiet][selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-quiet-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-quiet-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([quiet][selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-quiet-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-quiet-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([quiet][selected]:hover){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-hover,var(--spectrum-alias-component-background-color-quiet-selected-hover)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-hover,var(--spectrum-alias-component-border-color-quiet-selected-hover)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-selected-hover)
)}:host([quiet][selected][active]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-down,var(--spectrum-alias-component-background-color-quiet-selected-down)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-down,var(--spectrum-alias-component-border-color-quiet-selected-down)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-selected-down)
)}:host([quiet][selected][disabled]),:host([quiet][selected][disabled]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-disabled,var(--spectrum-alias-component-background-color-quiet-selected-disabled)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-quiet-disabled)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([variant=black]),:host([variant=white]){--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-white-rgb:255,255,255;--spectrum-ActionButton-static-black-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
);--spectrum-ActionButton-static-white-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=black][selected]),:host([variant=white][selected]){color:inherit!important}@media (forced-colors:active){:host{--spectrum-actionbutton-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap-emphasized,var(--spectrum-global-dimension-static-size-25)
);--spectrum-actionbutton-focus-ring-size:var(
--spectrum-alias-component-focusring-size-emphasized,var(--spectrum-global-dimension-static-size-25)
);--spectrum-actionbutton-focus-ring-color:ButtonText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected:Highlight;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-down:Highlight;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-quiet-textonly-background-color-selected:Highlight;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-down:Highlight;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-quiet-textonly-border-color:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-border-color-down:Highlight;--spectrum-actionbutton-m-quiet-textonly-border-color-hover:Highlight;--spectrum-actionbutton-m-quiet-textonly-border-color-selected:HighlightText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-texticon-icon-color-selected:HighlightText;--spectrum-actionbutton-m-texticon-icon-color-selected-disabled:GrayText;--spectrum-actionbutton-m-texticon-icon-color-selected-down:HighlightText;--spectrum-actionbutton-m-texticon-icon-color-selected-hover:HighlightText;--spectrum-actionbutton-m-texticon-icon-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-textonly-background-color-selected:Highlight;--spectrum-actionbutton-m-textonly-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-selected-down:Highlight;--spectrum-actionbutton-m-textonly-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-textonly-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-textonly-border-color-selected:HighlightText;--spectrum-actionbutton-m-textonly-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-textonly-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-textonly-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-textonly-border-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-textonly-text-color-selected:HighlightText;--spectrum-actionbutton-m-textonly-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-textonly-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-textonly-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-textonly-text-color-selected-key-focus:HighlightText}:host:after{forced-color-adjust:none}:host([selected]:not([disabled])) #label{forced-color-adjust:none}:host([size][variant=black][selected]:not([disabled])),:host([size][variant=white][selected]:not([disabled])){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected,var(--spectrum-alias-component-background-color-selected-default)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected,var(--spectrum-alias-component-border-color-quiet-selected-default)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([size][variant=black][selected]:not([disabled])) .hold-affordance,:host([size][variant=white][selected]:not([disabled])) .hold-affordance{color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([size][variant=black][selected]:not([disabled])) #label,:host([size][variant=white][selected]:not([disabled])) #label{color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)!important}:host([size][variant=black][selected]:not([disabled])) ::slotted([slot=icon]),:host([size][variant=white][selected]:not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)!important}:host([size][variant=black][selected]:not([disabled])).focus-visible,:host([size][variant=black][selected]:not([disabled])).is-keyboardFocused,:host([size][variant=black][selected]:not([disabled])):hover,:host([size][variant=black][selected]:not([disabled])[active]),:host([size][variant=white][selected]:not([disabled])).focus-visible,:host([size][variant=white][selected]:not([disabled])).is-keyboardFocused,:host([size][variant=white][selected]:not([disabled])):hover,:host([size][variant=white][selected]:not([disabled])[active]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected,var(--spectrum-alias-component-background-color-selected-default)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected,var(--spectrum-alias-component-border-color-quiet-selected-default)
)}:host([size][variant=black][selected]:not([disabled])).is-keyboardFocused,:host([size][variant=black][selected]:not([disabled])):focus-visible,:host([size][variant=black][selected]:not([disabled])):hover,:host([size][variant=black][selected]:not([disabled])[active]),:host([size][variant=white][selected]:not([disabled])).is-keyboardFocused,:host([size][variant=white][selected]:not([disabled])):focus-visible,:host([size][variant=white][selected]:not([disabled])):hover,:host([size][variant=white][selected]:not([disabled])[active]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected,var(--spectrum-alias-component-background-color-selected-default)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected,var(--spectrum-alias-component-border-color-quiet-selected-default)
)}:host([size][variant=black][selected]:not([disabled])).focus-visible .hold-affordance,:host([size][variant=black][selected]:not([disabled])).is-keyboardFocused .hold-affordance,:host([size][variant=black][selected]:not([disabled])):hover .hold-affordance,:host([size][variant=black][selected]:not([disabled])[active]) .hold-affordance,:host([size][variant=white][selected]:not([disabled])).focus-visible .hold-affordance,:host([size][variant=white][selected]:not([disabled])).is-keyboardFocused .hold-affordance,:host([size][variant=white][selected]:not([disabled])):hover .hold-affordance,:host([size][variant=white][selected]:not([disabled])[active]) .hold-affordance{color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([size][variant=black][selected]:not([disabled])).is-keyboardFocused .hold-affordance,:host([size][variant=black][selected]:not([disabled])):focus-visible .hold-affordance,:host([size][variant=black][selected]:not([disabled])):hover .hold-affordance,:host([size][variant=black][selected]:not([disabled])[active]) .hold-affordance,:host([size][variant=white][selected]:not([disabled])).is-keyboardFocused .hold-affordance,:host([size][variant=white][selected]:not([disabled])):focus-visible .hold-affordance,:host([size][variant=white][selected]:not([disabled])):hover .hold-affordance,:host([size][variant=white][selected]:not([disabled])[active]) .hold-affordance{color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([size][variant=black][selected]:not([disabled])).focus-visible #label,:host([size][variant=black][selected]:not([disabled])).is-keyboardFocused #label,:host([size][variant=black][selected]:not([disabled])):hover #label,:host([size][variant=black][selected]:not([disabled])[active]) #label,:host([size][variant=white][selected]:not([disabled])).focus-visible #label,:host([size][variant=white][selected]:not([disabled])).is-keyboardFocused #label,:host([size][variant=white][selected]:not([disabled])):hover #label,:host([size][variant=white][selected]:not([disabled])[active]) #label{color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([size][variant=black][selected]:not([disabled])).is-keyboardFocused #label,:host([size][variant=black][selected]:not([disabled])):focus-visible #label,:host([size][variant=black][selected]:not([disabled])):hover #label,:host([size][variant=black][selected]:not([disabled])[active]) #label,:host([size][variant=white][selected]:not([disabled])).is-keyboardFocused #label,:host([size][variant=white][selected]:not([disabled])):focus-visible #label,:host([size][variant=white][selected]:not([disabled])):hover #label,:host([size][variant=white][selected]:not([disabled])[active]) #label{color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([size][variant=black][selected]:not([disabled])).focus-visible ::slotted([slot=icon]),:host([size][variant=black][selected]:not([disabled])).is-keyboardFocused ::slotted([slot=icon]),:host([size][variant=black][selected]:not([disabled])):hover ::slotted([slot=icon]),:host([size][variant=black][selected]:not([disabled])[active])::slotted([slot=icon]),:host([size][variant=white][selected]:not([disabled])).focus-visible ::slotted([slot=icon]),:host([size][variant=white][selected]:not([disabled])).is-keyboardFocused ::slotted([slot=icon]),:host([size][variant=white][selected]:not([disabled])):hover ::slotted([slot=icon]),:host([size][variant=white][selected]:not([disabled])[active])::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([size][variant=black][selected]:not([disabled])).is-keyboardFocused ::slotted([slot=icon]),:host([size][variant=black][selected]:not([disabled])):focus-visible ::slotted([slot=icon]),:host([size][variant=black][selected]:not([disabled])):hover ::slotted([slot=icon]),:host([size][variant=black][selected]:not([disabled])[active])::slotted([slot=icon]),:host([size][variant=white][selected]:not([disabled])).is-keyboardFocused ::slotted([slot=icon]),:host([size][variant=white][selected]:not([disabled])):focus-visible ::slotted([slot=icon]),:host([size][variant=white][selected]:not([disabled])):hover ::slotted([slot=icon]),:host([size][variant=white][selected]:not([disabled])[active])::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([size][variant=black][disabled][selected]),:host([size][variant=white][disabled][selected]),:host([variant=black][selected][disabled]),:host([variant=white][selected][disabled]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-disabled,var(
--spectrum-alias-component-background-color-quiet-selected-disabled
)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-quiet-disabled)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([size][variant=black][disabled][selected]) .hold-affordance,:host([size][variant=white][disabled][selected]) .hold-affordance,:host([variant=black][selected][disabled]) .hold-affordance,:host([variant=white][selected][disabled]) .hold-affordance{color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([size][variant=black][disabled][selected]) #label,:host([size][variant=white][disabled][selected]) #label,:host([variant=black][selected][disabled]) #label,:host([variant=white][selected][disabled]) #label{color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([size][variant=black][disabled][selected]) ::slotted([slot=icon]),:host([size][variant=white][disabled][selected]) ::slotted([slot=icon]),:host([variant=black][selected][disabled]) ::slotted([slot=icon]),:host([variant=white][selected][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}}:host{display:inline-flex;flex-direction:row}:host:after{border-radius:var(
--spectrum-actionbutton-after-border-radius,calc(var(--spectrum-actionbutton-quiet-textonly-border-radius) + var(--spectrum-actionbutton-focus-ring-gap))
)}:host([disabled]){cursor:auto;pointer-events:none}:host([dir]){-webkit-appearance:none}::slotted([slot=icon]){flex-shrink:0}#button{inset:0;position:absolute}#label{flex-grow:var(--spectrum-actionbutton-label-flex-grow);text-align:var(--spectrum-actionbutton-label-text-align)}:host([emphasized][quiet][selected]:not([disabled])) .hold-affordance,:host([emphasized][selected]:not([disabled])) .hold-affordance{color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected,var(--spectrum-alias-component-icon-color-emphasized-selected-default)
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
)}@media (forced-colors:active){:host([variant=black]){--spectrum-actionbutton-focus-ring-color:ButtonText}:host([size][disabled]),:host([size][variant=black][disabled]),:host([size][variant=black][disabled]:not([quiet])),:host([size][variant=black][disabled][emphaized]),:host([size][variant=white][disabled]),:host([size][variant=white][disabled]:not([quiet])),:host([size][variant=white][disabled][emphaized]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-disabled,var(
--spectrum-alias-component-background-color-quiet-selected-disabled
)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-quiet-disabled)
)}:host([size][disabled]) #label,:host([size][disabled]) .hold-affordance,:host([size][disabled]) ::slotted(*),:host([size][variant=black][disabled]) #label,:host([size][variant=black][disabled]) .hold-affordance,:host([size][variant=black][disabled]) ::slotted(*),:host([size][variant=black][disabled]:not([quiet])) #label,:host([size][variant=black][disabled]:not([quiet])) .hold-affordance,:host([size][variant=black][disabled]:not([quiet])) ::slotted(*),:host([size][variant=black][disabled][emphaized]) #label,:host([size][variant=black][disabled][emphaized]) .hold-affordance,:host([size][variant=black][disabled][emphaized]) ::slotted(*),:host([size][variant=white][disabled]) #label,:host([size][variant=white][disabled]) .hold-affordance,:host([size][variant=white][disabled]) ::slotted(*),:host([size][variant=white][disabled]:not([quiet])) #label,:host([size][variant=white][disabled]:not([quiet])) .hold-affordance,:host([size][variant=white][disabled]:not([quiet])) ::slotted(*),:host([size][variant=white][disabled][emphaized]) #label,:host([size][variant=white][disabled][emphaized]) .hold-affordance,:host([size][variant=white][disabled][emphaized]) ::slotted(*){color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}}
`,M=t.iv`
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
`;let D;const R=function(t,...e){return D?D(t,...e):e.reduce(((e,o,r)=>e+o+t[r+1]),t[0])},j=t=>{D=t};customElements.define("sp-icon-corner-triangle300",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"
    />
  </svg>`}});const O={s:"spectrum-UIIcon-CornerTriangle75",m:"spectrum-UIIcon-CornerTriangle100",l:"spectrum-UIIcon-CornerTriangle200",xl:"spectrum-UIIcon-CornerTriangle300"};let N;class V extends(v(P)){constructor(){super(),this.emphasized=!1,this.holdAffordance=!1,this.quiet=!1,this.role="button",this.selected=!1,this.toggles=!1,this._value="",this.onClick=()=>{this.toggles&&(this.selected=!this.selected,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=!this.selected))},this.addEventListener("click",this.onClick),this.addEventListener("pointerdown",this.onPointerdown)}static get styles(){return[H,M]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return(this.textContent||"").trim()}onPointerdown(){this.addEventListener("pointerup",this.onPointerup),this.addEventListener("pointercancel",this.onPointerup),N=setTimeout((()=>{this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"pointer"}}))}),300)}onPointerup(){clearTimeout(N),this.removeEventListener("pointerup",this.onPointerup),this.removeEventListener("pointercancel",this.onPointerup)}handleKeydown(t){if(!this.holdAffordance)return super.handleKeydown(t);const{code:e,altKey:o}=t;("Space"===e||o&&"ArrowDown"===e)&&(t.preventDefault(),"ArrowDown"===e&&(t.stopPropagation(),t.stopImmediatePropagation()),this.addEventListener("keyup",this.handleKeyup),this.active=!0)}handleKeyup(t){if(!this.holdAffordance)return super.handleKeyup(t);const{code:e,altKey:o}=t;("Space"===e||o&&"ArrowDown"===e)&&(t.stopPropagation(),this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"keyboard"}})),this.active=!1)}get buttonContent(){const e=super.buttonContent;return this.holdAffordance&&e.unshift(t.dy`
                <sp-icon-corner-triangle300
                    class="hold-affordance ${O[this.size]}"
                ></sp-icon-corner-triangle300>
            `),e}updated(t){super.updated(t);const e="button"===this.role&&(this.selected||this.toggles);(t.has("selected")||t.has("role"))&&(e?this.setAttribute("aria-pressed",this.selected?"true":"false"):this.removeAttribute("aria-pressed"))}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],V.prototype,"emphasized",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"hold-affordance"})],V.prototype,"holdAffordance",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],V.prototype,"quiet",void 0),(0,n.gn)([(0,d.Cb)({reflect:!0})],V.prototype,"role",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],V.prototype,"selected",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],V.prototype,"toggles",void 0),(0,n.gn)([(0,d.Cb)({reflect:!0})],V.prototype,"variant",void 0),(0,n.gn)([(0,d.Cb)({type:String})],V.prototype,"value",null),customElements.define("sp-action-button",V);const G=t.iv`
:host{--spectrum-buttongroup-button-gap-reset:0}:host{display:flex}::slotted(*){flex-shrink:0}:host([dir=ltr]) ::slotted(:not(:first-of-type)){margin-left:var(
--spectrum-buttongroup-button-gap-x,var(--spectrum-global-dimension-static-size-200)
)}:host([dir=rtl]) ::slotted(:not(:first-of-type)){margin-right:var(
--spectrum-buttongroup-button-gap-x,var(--spectrum-global-dimension-static-size-200)
)}:host([vertical]){display:inline-flex;flex-direction:column}:host([dir=ltr][vertical]) ::slotted(:not(:first-of-type)){margin-left:var(
--spectrum-buttongroup-button-gap-reset
)}:host([dir=rtl][vertical]) ::slotted(:not(:first-of-type)){margin-right:var(
--spectrum-buttongroup-button-gap-reset
)}:host([vertical]) ::slotted(:not(:first-of-type)){margin-top:var(
--spectrum-buttongroup-button-gap-y,var(--spectrum-global-dimension-static-size-200)
)}:host([vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-flex-grow:1}:host([dir=ltr][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:left}:host([dir=rtl][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:right}
`;class K extends u.o{constructor(){super(...arguments),this.vertical=!1}static get styles(){return[G]}render(){return t.dy`
            <slot></slot>
        `}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],K.prototype,"vertical",void 0),customElements.define("sp-button-group",K);const W=t.iv`
:host{display:inline-flex;vertical-align:top}:host([dir]){-webkit-appearance:none}:host([disabled]){cursor:auto;pointer-events:none}#button{inset:0;position:absolute}:host:after{pointer-events:none}slot[name=icon]::slotted(img),slot[name=icon]::slotted(svg){fill:currentColor;stroke:currentColor;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}
`;class Y extends P{static get styles(){return[W]}}const Z=t.iv`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);margin:0;overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host([disabled]){cursor:default}::slotted([slot=icon]){flex-shrink:0;max-height:100%}:host:after{border-radius:calc(var(
--spectrum-button-m-primary-fill-texticon-border-radius,
var(--spectrum-global-dimension-size-200)
) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
));bottom:0;content:"";display:block;left:0;margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1);position:absolute;right:0;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host(.focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-2)}:host(:focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-2)}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}@media (forced-colors:active){:host{--spectrum-button-m-accent-fill-texticon-background-color-down:Highlight;--spectrum-button-m-accent-fill-texticon-background-color-hover:Highlight;--spectrum-button-m-accent-fill-texticon-background-color-key-focus:Highlight;--spectrum-button-m-accent-fill-texticon-background-color:ButtonText;--spectrum-button-m-accent-fill-texticon-icon-color:ButtonFace;--spectrum-button-m-accent-fill-texticon-text-color:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color-down:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color-hover:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color-key-focus:ButtonFace;--spectrum-button-m-accent-outline-texticon-border-color:ButtonText;--spectrum-button-m-accent-outline-texticon-border-color-down:Highlight;--spectrum-button-m-accent-outline-texticon-border-color-hover:Highlight;--spectrum-button-m-accent-outline-texticon-border-color-key-focus:Highlight;--spectrum-button-m-accent-outline-texticon-icon-color:ButtonText;--spectrum-button-m-accent-outline-texticon-icon-color-down:ButtonText;--spectrum-button-m-accent-outline-texticon-icon-color-hover:ButtonText;--spectrum-button-m-accent-outline-texticon-icon-color-key-focus:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color-down:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color-hover:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color-key-focus:ButtonText;--spectrum-button-m-primary-fill-texticon-icon-color-disabled:GrayText;--spectrum-button-m-primary-fill-texticon-text-color-disabled:GrayText;--spectrum-button-m-primary-fill-white-texticon-icon-color-disabled:GrayText;--spectrum-button-m-primary-fill-white-texticon-text-color-disabled:GrayText;--spectrum-button-m-secondary-fill-white-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-secondary-outline-white-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-fill-black-texticon-icon-color-disabled:GrayText;--spectrum-button-m-primary-fill-black-texticon-text-color-disabled:GrayText;--spectrum-button-m-secondary-fill-black-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-secondary-outline-black-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-fill-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-outline-texticon-background-color-disabled:ButtonFace}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) ButtonText;forced-color-adjust:none}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) ButtonText;forced-color-adjust:none}:host([variant=accent]) #label{forced-color-adjust:none}}:host([size=s]){--spectrum-button-primary-fill-textonly-text-padding-bottom:var(
--spectrum-button-s-primary-fill-textonly-text-padding-bottom
);--spectrum-button-primary-fill-texticon-text-size:var(
--spectrum-button-s-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-button-primary-fill-texticon-text-font-weight:var(
--spectrum-button-s-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-fill-texticon-text-line-height:var(
--spectrum-button-s-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-fill-texticon-icon-gap:var(
--spectrum-button-s-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-button-primary-fill-texticon-focus-ring-size:var(
--spectrum-button-s-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-fill-texticon-border-size:var(
--spectrum-button-s-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-texticon-padding-left:var(
--spectrum-button-s-primary-fill-texticon-padding-left,var(--spectrum-global-dimension-size-125)
);--spectrum-button-primary-fill-texticon-border-radius:var(
--spectrum-button-s-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-fill-textonly-border-size:var(
--spectrum-button-s-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-textonly-min-width:var(
--spectrum-button-s-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-675)
);--spectrum-button-primary-fill-textonly-padding-left:var(
--spectrum-button-s-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-fill-textonly-padding-right:var(
--spectrum-button-s-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-fill-textonly-height:var(
--spectrum-button-s-primary-fill-textonly-height,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-fill-textonly-text-padding-top:calc(var(
--spectrum-button-s-primary-fill-textonly-text-padding-top,
var(--spectrum-global-dimension-static-size-50)
) - 1px)}:host([size=m]){--spectrum-button-primary-fill-texticon-padding-left:var(
--spectrum-button-m-primary-fill-texticon-padding-left
);--spectrum-button-primary-fill-texticon-text-size:var(
--spectrum-button-m-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-button-primary-fill-texticon-text-font-weight:var(
--spectrum-button-m-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-fill-texticon-text-line-height:var(
--spectrum-button-m-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-fill-texticon-icon-gap:var(
--spectrum-button-m-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-button-primary-fill-texticon-focus-ring-size:var(
--spectrum-button-m-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-fill-texticon-border-size:var(
--spectrum-button-m-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-texticon-border-radius:var(
--spectrum-button-m-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-200)
);--spectrum-button-primary-fill-textonly-text-padding-top:var(
--spectrum-button-m-primary-fill-textonly-text-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-button-primary-fill-textonly-border-size:var(
--spectrum-button-m-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-textonly-min-width:var(
--spectrum-button-m-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-900)
);--spectrum-button-primary-fill-textonly-padding-left:var(
--spectrum-button-m-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-200)
);--spectrum-button-primary-fill-textonly-padding-right:var(
--spectrum-button-m-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-200)
);--spectrum-button-primary-fill-textonly-height:var(
--spectrum-button-m-primary-fill-textonly-height,var(--spectrum-global-dimension-size-400)
);--spectrum-button-primary-fill-textonly-text-padding-bottom:calc(var(
--spectrum-button-m-primary-fill-textonly-text-padding-bottom,
var(--spectrum-global-dimension-size-115)
) - 1px)}:host([size=l]){--spectrum-button-primary-fill-textonly-text-padding-top:var(
--spectrum-button-l-primary-fill-textonly-text-padding-top
);--spectrum-button-primary-fill-texticon-text-size:var(
--spectrum-button-l-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-button-primary-fill-texticon-text-font-weight:var(
--spectrum-button-l-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-fill-texticon-text-line-height:var(
--spectrum-button-l-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-fill-texticon-icon-gap:var(
--spectrum-button-l-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-button-primary-fill-texticon-focus-ring-size:var(
--spectrum-button-l-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-fill-texticon-border-size:var(
--spectrum-button-l-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-texticon-padding-left:var(
--spectrum-button-l-primary-fill-texticon-padding-left,var(--spectrum-global-dimension-size-225)
);--spectrum-button-primary-fill-texticon-border-radius:var(
--spectrum-button-l-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-250)
);--spectrum-button-primary-fill-textonly-text-padding-bottom:var(
--spectrum-button-l-primary-fill-textonly-text-padding-bottom,var(--spectrum-global-dimension-size-130)
);--spectrum-button-primary-fill-textonly-border-size:var(
--spectrum-button-l-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-textonly-min-width:var(
--spectrum-button-l-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-1125)
);--spectrum-button-primary-fill-textonly-padding-left:var(
--spectrum-button-l-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-250)
);--spectrum-button-primary-fill-textonly-padding-right:var(
--spectrum-button-l-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-250)
);--spectrum-button-primary-fill-textonly-height:var(
--spectrum-button-l-primary-fill-textonly-height,var(--spectrum-global-dimension-size-500)
)}:host([size=xl]){--spectrum-button-primary-fill-texticon-padding-left:var(
--spectrum-button-xl-primary-fill-texticon-padding-left
);--spectrum-button-primary-fill-texticon-text-size:var(
--spectrum-button-xl-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-button-primary-fill-texticon-text-font-weight:var(
--spectrum-button-xl-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-fill-texticon-text-line-height:var(
--spectrum-button-xl-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-fill-texticon-icon-gap:var(
--spectrum-button-xl-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-button-primary-fill-texticon-focus-ring-size:var(
--spectrum-button-xl-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-fill-texticon-border-size:var(
--spectrum-button-xl-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-texticon-border-radius:var(
--spectrum-button-xl-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-fill-textonly-text-padding-top:var(
--spectrum-button-xl-primary-fill-textonly-text-padding-top,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-fill-textonly-border-size:var(
--spectrum-button-xl-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-textonly-min-width:var(
--spectrum-button-xl-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-1250)
);--spectrum-button-primary-fill-textonly-padding-left:var(
--spectrum-button-xl-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-fill-textonly-padding-right:var(
--spectrum-button-xl-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-fill-textonly-height:var(
--spectrum-button-xl-primary-fill-textonly-height,var(--spectrum-global-dimension-size-600)
);--spectrum-button-primary-fill-textonly-text-padding-bottom:calc(var(
--spectrum-button-xl-primary-fill-textonly-text-padding-bottom,
var(--spectrum-global-dimension-size-175)
) - 1px)}:host{--spectrum-button-primary-fill-padding-left-adjusted:calc(var(--spectrum-button-primary-fill-texticon-padding-left) - var(--spectrum-button-primary-fill-texticon-border-size));--spectrum-button-primary-fill-textonly-padding-left-adjusted:calc(var(--spectrum-button-primary-fill-textonly-padding-left) - var(--spectrum-button-primary-fill-texticon-border-size));--spectrum-button-primary-fill-textonly-padding-right-adjusted:calc(var(--spectrum-button-primary-fill-textonly-padding-right) - var(--spectrum-button-primary-fill-texticon-border-size))}:host([dir=ltr]){padding-left:var(
--spectrum-button-primary-fill-textonly-padding-left-adjusted
);padding-right:var(
--spectrum-button-primary-fill-textonly-padding-right-adjusted
)}:host([dir=rtl]){padding-left:var(
--spectrum-button-primary-fill-textonly-padding-right-adjusted
);padding-right:var(
--spectrum-button-primary-fill-textonly-padding-left-adjusted
)}:host{--spectrum-button-focus-ring-color:var(
--spectrum-button-m-primary-fill-texticon-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);border-radius:var(--spectrum-button-primary-fill-texticon-border-radius);border-style:solid;border-width:var(
--spectrum-button-primary-fill-texticon-border-size
);color:inherit;font-size:var(--spectrum-button-primary-fill-texticon-text-size);font-weight:var(--spectrum-button-primary-fill-texticon-text-font-weight);height:auto;min-height:var(--spectrum-button-primary-fill-textonly-height);min-width:var(--spectrum-button-primary-fill-textonly-min-width);padding-bottom:0;padding-top:0}:host(:hover),:host([active]){box-shadow:none}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc((var(
--spectrum-button-primary-fill-textonly-padding-left-adjusted
) - var(--spectrum-button-primary-fill-padding-left-adjusted))*-1)}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc((var(
--spectrum-button-primary-fill-textonly-padding-left-adjusted
) - var(--spectrum-button-primary-fill-padding-left-adjusted))*-1)}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(
--spectrum-button-primary-fill-texticon-icon-gap
)}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(
--spectrum-button-primary-fill-texticon-icon-gap
)}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}:host:after{border-radius:calc(var(--spectrum-button-primary-fill-texticon-border-radius) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
))}#label{line-height:var(
--spectrum-button-primary-fill-texticon-text-line-height
);padding-bottom:calc(var(--spectrum-button-primary-fill-textonly-text-padding-bottom) - var(--spectrum-button-primary-fill-textonly-border-size));padding-top:calc(var(--spectrum-button-primary-fill-textonly-text-padding-top) - var(--spectrum-button-primary-fill-textonly-border-size))}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) var(--spectrum-button-focus-ring-color)}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) var(--spectrum-button-focus-ring-color)}:host([variant=white]){--spectrum-button-focus-ring-color:var(
--spectrum-button-m-primary-fill-white-texticon-focus-ring-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=black]){--spectrum-button-focus-ring-color:var(
--spectrum-button-m-primary-fill-black-texticon-focus-ring-color-key-focus,var(--spectrum-global-color-static-black)
)}:host(:not([variant=white]):not([variant=black])[disabled]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-fill-texticon-icon-color-disabled,var(--spectrum-global-color-gray-500)
)}:host(:not([variant=white]):not([variant=black])[disabled]) #label{color:var(
--spectrum-button-m-primary-fill-texticon-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=white][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-fill-white-texticon-icon-color-disabled,var(--spectrum-global-color-static-transparent-white-500)
)}:host([variant=white][disabled]) #label{color:var(
--spectrum-button-m-primary-fill-white-texticon-text-color-disabled,var(--spectrum-global-color-static-transparent-white-500)
)}:host([variant=white][treatment=fill]:not([variant=secondary]):not([disabled])){background-color:var(
--spectrum-button-m-primary-fill-white-texticon-background-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=fill]:not([variant=secondary]):not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=white][treatment=fill]:not([variant=secondary]):not([disabled])) #label{color:inherit}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color,var(--spectrum-global-color-static-transparent-white-200)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-white-texticon-icon-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])) #label{color:var(
--spectrum-button-m-secondary-fill-white-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=fill][disabled]){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-disabled,var(--spectrum-global-color-static-transparent-white-200)
)}:host([variant=white][treatment=outline]:not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-white-texticon-icon-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=outline]:not([disabled])) #label{color:var(
--spectrum-button-m-secondary-outline-white-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=outline][disabled]){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-white-texticon-border-color-disabled,var(--spectrum-global-color-static-transparent-white-200)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled])){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]):hover){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled])[active]){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled])){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-white-texticon-border-color,var(--spectrum-global-color-static-transparent-white-200)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=black][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-fill-black-texticon-icon-color-disabled,var(--spectrum-global-color-static-transparent-black-500)
)}:host([variant=black][disabled]) #label{color:var(
--spectrum-button-m-primary-fill-black-texticon-text-color-disabled,var(--spectrum-global-color-static-transparent-black-500)
)}:host([variant=black][treatment=fill]:not([variant=secondary]):not([disabled])){background-color:var(
--spectrum-button-m-primary-fill-black-texticon-background-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=fill]:not([variant=secondary]):not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=black][treatment=fill]:not([variant=secondary]):not([disabled])) #label{color:inherit}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color,var(--spectrum-global-color-static-transparent-black-200)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-black-texticon-icon-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])) #label{color:var(
--spectrum-button-m-secondary-fill-black-texticon-text-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-down,var(--spectrum-global-color-static-transparent-black-400)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=fill][disabled]){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-disabled,var(--spectrum-global-color-static-transparent-black-200)
)}:host([variant=black][treatment=outline]:not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-black-texticon-icon-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=outline]:not([disabled])) #label{color:var(
--spectrum-button-m-secondary-outline-black-texticon-text-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=outline][disabled]){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-black-texticon-border-color-disabled,var(--spectrum-global-color-static-transparent-black-200)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled])){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-black-texticon-border-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]):hover){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled])[active]){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-down,var(--spectrum-global-color-static-transparent-black-400)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled])){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-black-texticon-border-color,var(--spectrum-global-color-static-transparent-black-200)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-down,var(--spectrum-global-color-static-transparent-black-400)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color,var(--spectrum-semantic-cta-background-color-default)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-fill-texticon-icon-color,var(--spectrum-global-color-static-white)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-accent-fill-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-hover,var(--spectrum-semantic-cta-background-color-hover)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-down,var(--spectrum-semantic-cta-background-color-down)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-key-focus)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-key-focus)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-key-focus)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color,var(--spectrum-global-color-static-red-600)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-fill-texticon-icon-color,var(--spectrum-global-color-static-white)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-negative-fill-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-hover,var(--spectrum-global-color-static-red-700)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-down,var(--spectrum-global-color-static-red-800)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-key-focus,var(--spectrum-global-color-static-red-700)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-key-focus,var(--spectrum-global-color-static-red-700)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-key-focus,var(--spectrum-global-color-static-red-700)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-fill-texticon-icon-color,var(--spectrum-global-color-gray-50)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-primary-fill-texticon-text-color,var(--spectrum-global-color-gray-50)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color,var(--spectrum-global-color-gray-200)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-hover,var(--spectrum-global-color-gray-300)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-down,var(--spectrum-global-color-gray-400)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=fill]:not([variant=white]):not([variant=black])[disabled]){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-disabled,var(--spectrum-global-color-gray-200)
)}:host([treatment=fill][disabled]){border-color:var(
--spectrum-button-m-primary-fill-texticon-border-color-disabled,transparent
)}:host([treatment=fill]:not([disabled])){border-color:var(
--spectrum-button-m-primary-fill-texticon-border-color,transparent
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color,var(--spectrum-semantic-emphasized-border-color-default)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color,var(--spectrum-semantic-emphasized-border-color-default)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-hover,var(--spectrum-alias-transparent-blue-background-color-hover)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-hover,var(--spectrum-semantic-emphasized-border-color-hover)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-hover,var(--spectrum-semantic-emphasized-border-color-hover)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-hover,var(--spectrum-semantic-emphasized-border-color-hover)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-down,var(--spectrum-alias-transparent-blue-background-color-down)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-down,var(--spectrum-semantic-emphasized-border-color-down)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-down,var(--spectrum-semantic-emphasized-border-color-down)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-down,var(--spectrum-semantic-emphasized-border-color-down)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-blue-background-color-key-focus)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-blue-background-color-key-focus)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-blue-background-color-key-focus)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color,var(--spectrum-semantic-emphasized-border-color-default)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color,var(--spectrum-global-color-red-500)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color,var(--spectrum-global-color-red-500)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-hover,var(--spectrum-alias-transparent-red-background-color-hover)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-hover,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-hover,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-hover,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-down,var(--spectrum-alias-transparent-red-background-color-down)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-down,var(--spectrum-global-color-red-700)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-down,var(--spectrum-global-color-red-700)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-down,var(--spectrum-global-color-red-700)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-red-background-color-key-focus)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-red-background-color-key-focus)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-red-background-color-key-focus)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color,var(--spectrum-global-color-red-500)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-hover,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-down,var(--spectrum-global-color-gray-400)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color,var(--spectrum-global-color-gray-300)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-hover,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-hover,var(--spectrum-global-color-gray-400)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-down,var(--spectrum-global-color-gray-400)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-down,var(--spectrum-global-color-gray-500)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-400)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-400)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-400)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline]:not([variant=white]):not([variant=black])[disabled]){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-disabled,var(--spectrum-global-color-gray-200)
)}@media (forced-colors:active){:host{--spectrum-button-m-accent-fill-texticon-background-color-down:Highlight;--spectrum-button-m-accent-fill-texticon-background-color-hover:Highlight;--spectrum-button-m-accent-fill-texticon-background-color-key-focus:Highlight;--spectrum-button-m-accent-fill-texticon-background-color:ButtonText;--spectrum-button-m-accent-fill-texticon-icon-color:ButtonFace;--spectrum-button-m-accent-fill-texticon-text-color:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color-down:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color-hover:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color-key-focus:ButtonFace;--spectrum-button-m-accent-outline-texticon-border-color:ButtonText;--spectrum-button-m-accent-outline-texticon-border-color-down:Highlight;--spectrum-button-m-accent-outline-texticon-border-color-hover:Highlight;--spectrum-button-m-accent-outline-texticon-border-color-key-focus:Highlight;--spectrum-button-m-accent-outline-texticon-icon-color:ButtonText;--spectrum-button-m-accent-outline-texticon-icon-color-down:ButtonText;--spectrum-button-m-accent-outline-texticon-icon-color-hover:ButtonText;--spectrum-button-m-accent-outline-texticon-icon-color-key-focus:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color-down:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color-hover:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color-key-focus:ButtonText;--spectrum-button-m-primary-fill-texticon-icon-color-disabled:GrayText;--spectrum-button-m-primary-fill-texticon-text-color-disabled:GrayText;--spectrum-button-m-primary-fill-white-texticon-icon-color-disabled:GrayText;--spectrum-button-m-primary-fill-white-texticon-text-color-disabled:GrayText;--spectrum-button-m-secondary-fill-white-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-secondary-outline-white-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-fill-black-texticon-icon-color-disabled:GrayText;--spectrum-button-m-primary-fill-black-texticon-text-color-disabled:GrayText;--spectrum-button-m-secondary-fill-black-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-secondary-outline-black-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-fill-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-outline-texticon-background-color-disabled:ButtonFace}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) ButtonText;forced-color-adjust:none}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) ButtonText;forced-color-adjust:none}:host([variant=accent]) #label{forced-color-adjust:none}}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
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
)}@media (forced-colors:active){:host([treatment][disabled]){border-color:graytext}:host([treatment]:not([disabled]):hover){border-color:highlight}}
`,X=["accent","primary","secondary","negative","white","black"];class J extends(v(Y)){constructor(){super(...arguments),this._variant="accent",this.treatment="fill"}static get styles(){return[...super.styles,Z]}get variant(){return this._variant}set variant(t){if(t!==this.variant){switch(this.requestUpdate("variant",this.variant),t){case"cta":this._variant="accent";break;case"overBackground":this._variant="white",this.treatment="outline";break;default:X.includes(t)?this._variant=t:this._variant="accent"}this.setAttribute("variant",this.variant)}}set quiet(t){this.treatment=t?"outline":"fill"}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("variant")||this.setAttribute("variant",this.variant)}}(0,n.gn)([(0,d.Cb)()],J.prototype,"variant",null),(0,n.gn)([(0,d.Cb)({reflect:!0})],J.prototype,"treatment",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean})],J.prototype,"quiet",null),customElements.define("sp-button",J),customElements.define("sp-icon-asterisk100",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 01.167-.036L3.5 3.148l.13-2.7a.1.1 0 01.081-.111.15.15 0 01.03 0l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"
    />
  </svg>`}});const Q=t.iv`
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
`,tt=t.iv`
:host([size=s]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-s-padding-top,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-s-padding-bottom,var(--spectrum-global-dimension-size-65)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-s-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-s-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-s-asterisk-gap,var(--spectrum-global-dimension-size-50)
)}:host([size=m]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-m-padding-top,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-m-padding-bottom,var(--spectrum-global-dimension-size-65)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-m-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-m-asterisk-gap,var(--spectrum-global-dimension-size-50)
)}:host([size=l]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-l-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-l-padding-bottom,var(--spectrum-global-dimension-size-115)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-l-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-l-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-l-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-l-asterisk-gap,var(--spectrum-global-dimension-size-65)
)}:host([size=xl]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-xl-padding-top,var(--spectrum-global-dimension-size-115)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-xl-padding-bottom,var(--spectrum-global-dimension-size-130)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-xl-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-xl-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-xl-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-xl-asterisk-gap,var(--spectrum-global-dimension-size-65)
)}:host{-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;font-smoothing:subpixel-antialiased;box-sizing:border-box;display:block;font-size:var(--spectrum-fieldlabel-text-size);font-weight:var(--spectrum-fieldlabel-text-font-weight);line-height:var(--spectrum-fieldlabel-text-line-height);padding-bottom:var(--spectrum-fieldlabel-padding-bottom);padding-left:0;padding-right:0;padding-top:var(--spectrum-fieldlabel-padding-top);vertical-align:top}:host([dir=ltr]) .required-icon{margin-left:var(
--spectrum-fieldlabel-asterisk-gap
);margin-right:0}:host([dir=rtl]) .required-icon{margin-left:0;margin-right:var(
--spectrum-fieldlabel-asterisk-gap
)}.required-icon{margin-bottom:0;margin-top:0}:host([dir=ltr][side-aligned=start]){padding-left:0;padding-right:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl][side-aligned=start]){padding-left:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
);padding-right:0}:host([side-aligned=start]){display:inline-block;padding-bottom:0;padding-top:var(
--spectrum-fieldlabel-m-side-padding-top,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][side-aligned=start]) .required-icon{margin-left:var(
--spectrum-fieldlabel-asterisk-gap
);margin-right:0}:host([dir=rtl][side-aligned=start]) .required-icon{margin-left:0;margin-right:var(
--spectrum-fieldlabel-asterisk-gap
)}:host([side-aligned=start]) .required-icon{margin-bottom:0;margin-top:var(
--spectrum-fieldlabel-m-side-asterisk-margin-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][side-aligned=end]){text-align:right}:host([dir=rtl][side-aligned=end]){text-align:left}:host([dir=ltr][side-aligned=end]){padding-left:0;padding-right:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl][side-aligned=end]){padding-left:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
);padding-right:0}:host([side-aligned=end]){display:inline-block;padding-bottom:0;padding-top:var(
--spectrum-fieldlabel-m-side-padding-top,var(--spectrum-global-dimension-size-100)
)}:host{color:var(
--spectrum-fieldlabel-m-text-color,var(--spectrum-alias-label-text-color)
)}:host([disabled]){color:var(
--spectrum-fieldlabel-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]) .required-icon{color:var(
--spectrum-fieldlabel-m-asterisk-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.required-icon{color:var(
--spectrum-fieldlabel-m-asterisk-color,var(--spectrum-global-color-gray-600)
)}:host([side-aligned=start]) .required-icon{margin-top:0}
`;class et extends(v(u.o)){constructor(){super(...arguments),this.disabled=!1,this.id="",this.for="",this.required=!1}static get styles(){return[tt,Q]}handleClick(t){if(!this.target||this.disabled||t.defaultPrevented)return;this.target.focus();const e=this.getRootNode(),o=this.target,r=o.getRootNode(),a=r.host;r===e&&o.forceFocusVisible?o.forceFocusVisible():a&&a.forceFocusVisible&&a.forceFocusVisible()}async manageFor(){if(!this.for)return;const t=this.getRootNode(),e=t.querySelector(`#${this.for}`);return e?(e.localName.search("-")>0&&await customElements.whenDefined(e.localName),void 0!==e.updateComplete&&await e.updateComplete,this.target=e.focusElement||e,this.target&&(this.target.getRootNode()===t?this.target.setAttribute("aria-labelledby",this.id):this.target.setAttribute("aria-label",this.labelText)),Promise.resolve()):void 0}get labelText(){const t=this.slotEl.assignedNodes({flatten:!0});return t.length?t.map((t=>(t.textContent||"").trim())).join(" "):""}render(){return t.dy`
            <label>
                <slot @slotchange=${this.manageFor}></slot>
                ${this.required?t.dy`
                          <sp-icon-asterisk100
                              class="required-icon spectrum-UIIcon-Asterisk100"
                          ></sp-icon-asterisk100>
                      `:t.dy``}
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("click",this.handleClick)}willUpdate(t){this.hasAttribute("id")||this.setAttribute("id",`${this.tagName.toLowerCase()}-${et.instanceCount++}`),(t.has("for")||t.has("id"))&&this.manageFor()}}et.instanceCount=0,(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],et.prototype,"disabled",void 0),(0,n.gn)([(0,d.Cb)({type:String})],et.prototype,"id",void 0),(0,n.gn)([(0,d.Cb)({type:String})],et.prototype,"for",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],et.prototype,"required",void 0),(0,n.gn)([(0,d.IO)("slot")],et.prototype,"slotEl",void 0),(0,n.gn)([(0,d.Cb)({type:String,reflect:!0,attribute:"side-aligned"})],et.prototype,"sideAligned",void 0),customElements.define("sp-field-label",et);var ot=s(692);const rt=t=>(...e)=>({_$litDirective$:t,values:e});class at{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:it}=ot.Al,st=t=>void 0===t.strings,ct={},lt=rt(class extends at{constructor(t){if(super(t),3!==t.type&&1!==t.type&&4!==t.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!st(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===ot.Jb||e===ot.Ld)return e;const o=t.element,r=t.name;if(3===t.type){if(e===o[r])return ot.Jb}else if(4===t.type){if(!!e===o.hasAttribute(r))return ot.Jb}else if(1===t.type&&o.getAttribute(r)===e+"")return ot.Jb;return((t,e=ct)=>{t._$AH=e})(t),e}});class nt{constructor(t,{mode:e}={mode:"internal"}){this.mode="internal",this.handleSlotchange=({target:t})=>{this.handleHelpText(t),this.handleNegativeHelpText(t)},this.host=t,this.instanceCount=nt.instanceCount++,this.id=`sp-help-text-${this.instanceCount}`,this.mode=e}get isInternal(){return"internal"===this.mode}render(e){return t.dy`
            <div id=${(0,f.o)(this.isInternal?this.id:void 0)}>
                <slot
                    name=${e?"negative-help-text":`pass-through-help-text-${this.instanceCount}`}
                    @slotchange=${this.handleSlotchange}
                >
                    <slot name="help-text"></slot>
                </slot>
            </div>
        `}addId(){const t=this.helpTextElement?this.helpTextElement.id:this.id;this.conditionId=function(t,e,o){const r=Array.isArray(o)?o:[o],a=t.getAttribute(e),i=a?a.split(/\s+/):[],s=r.every((t=>i.indexOf(t)>-1));return s?()=>{}:(i.push(...r),t.setAttribute(e,i.join(" ")),()=>function(t,e,o){const r=t.getAttribute(e);let a=r?r.split(/\s+/):[];a=a.filter((t=>!o.find((e=>t===e)))),a.length?t.setAttribute(e,a.join(" ")):t.removeAttribute(e)}(t,e,r))}(this.host,"aria-describedby",t),this.host.hasAttribute("tabindex")&&(this.previousTabindex=parseFloat(this.host.getAttribute("tabindex"))),this.host.tabIndex=0}removeId(){this.conditionId&&(this.conditionId(),delete this.conditionId),this.helpTextElement||(this.previousTabindex?this.host.tabIndex=this.previousTabindex:this.host.removeAttribute("tabindex"))}handleHelpText(t){if(this.isInternal)return;this.helpTextElement&&this.helpTextElement.id===this.id&&this.helpTextElement.removeAttribute("id"),this.removeId();const e=t.assignedElements()[0];this.helpTextElement=e,e&&(e.id||(e.id=this.id),this.addId())}handleNegativeHelpText(t){"negative-help-text"===t.name&&t.assignedElements().forEach((t=>t.variant="negative"))}}nt.instanceCount=0,customElements.define("sp-icon-checkmark100",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"
    />
  </svg>`}}),customElements.define("sp-icon-alert",class extends p{render(){return g(t.dy),(({width:t=24,height:e=24,hidden:o=!1,title:r="Alert"}={})=>h`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 36 36"
    width="${t}"
    aria-hidden="${o?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M17.127 2.579.4 32.512A1 1 0 0 0 1.272 34h33.456a1 1 0 0 0 .872-1.488L18.873 2.579a1 1 0 0 0-1.746 0ZM20 29.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});const ut=t.iv`
:host{--spectrum-textfield-texticon-padding-left:var(
--spectrum-textfield-m-texticon-padding-left
);--spectrum-textfield-quiet-texticon-border-bottom-size:var(
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
)}:host([multiline]){resize:both}:host([multiline][readonly]){resize:none}#textfield{width:100%}#textfield,textarea{resize:inherit}.input{min-width:var(--spectrum-textfield-texticon-min-width)}:host([focused]) .input{caret-color:var(--swc-test-caret-color);forced-color-adjust:var(--swc-test-forced-color-adjust)}:host([grows]) .input{height:100%;left:0;overflow:hidden;position:absolute;resize:none;top:0}:host([grows]) #sizer{-webkit-appearance:none;-moz-appearance:textfield;border:var(--spectrum-textfield-texticon-border-size) solid;border-radius:var(--spectrum-textfield-texticon-border-radius);box-sizing:border-box;font-family:var(--spectrum-textfield-texticon-text-font-family);font-size:var(--spectrum-textfield-texticon-text-size);line-height:var(--spectrum-textfield-texticon-text-line-height);margin:0;outline:none;overflow:visible;overflow-wrap:break-word;padding:var(--spectrum-textarea-padding-top) var(--spectrum-textarea-padding-right) var(--spectrum-textarea-padding-bottom) calc(var(--spectrum-textarea-padding-left) - 1px);text-indent:0;text-overflow:ellipsis;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:top;white-space:pre-wrap;width:100%;word-break:break-word}:host([grows][quiet]) #sizer{border-bottom-width:var(--spectrum-textfield-quiet-texticon-border-size);border-left-width:0;border-radius:var(--spectrum-textfield-quiet-texticon-border-radius);border-right-width:0;border-top-width:0;overflow-y:hidden;resize:none}.icon,.icon-workflow{pointer-events:none}:host([multiline]) #textfield{display:inline-grid}:host([multiline]) textarea{transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([multiline][focused]:not([quiet])) textarea,:host([multiline][focused]:not([quiet]):hover) textarea{box-shadow:0 0 0 calc(var(
--spectrum-textfield-m-texticon-focus-ring-border-width,
var(--spectrum-alias-component-focusring-size)
)) var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
)!important}:host([multiline]:not([quiet])) #textfield:after{box-shadow:none}
`,dt=t.iv`
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
`,mt=["text","url","tel","email","password"];class pt extends(function(t,{mode:e}={mode:"internal"}){return class extends t{constructor(){super(...arguments),this.helpTextManager=new nt(this,{mode:e})}get helpTextId(){return this.helpTextManager.id}renderHelpText(t){return this.helpTextManager.render(t)}}}(k)){constructor(){super(...arguments),this.allowedKeys="",this.focused=!1,this.invalid=!1,this.label="",this.placeholder="",this._type="text",this.grows=!1,this.maxlength=-1,this.minlength=-1,this.multiline=!1,this.readonly=!1,this.valid=!1,this._value="",this.quiet=!1,this.required=!1}static get styles(){return[ut,dt]}get type(){var t;return null!==(t=mt.find((t=>t===this._type)))&&void 0!==t?t:"text"}set type(t){const e=this._type;this._type=t,this.requestUpdate("type",e)}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}get focusElement(){return this.inputElement}setSelectionRange(t,e,o="none"){this.inputElement.setSelectionRange(t,e,o)}select(){this.inputElement.select()}handleInput(){if(this.allowedKeys&&this.inputElement.value&&!new RegExp(`^[${this.allowedKeys}]*$`,"u").test(this.inputElement.value)){const t=this.inputElement.selectionStart-1;return this.inputElement.value=this.value.toString(),void this.inputElement.setSelectionRange(t,t)}this.value=this.inputElement.value}handleChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}onFocus(){this.focused=!this.readonly&&!0}onBlur(){this.focused=!this.readonly&&!1}renderStateIcons(){return this.invalid?t.dy`
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
                aria-invalid=${(0,f.o)(this.invalid||void 0)}
                class="input"
                maxlength=${(0,f.o)(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${(0,f.o)(this.minlength>-1?this.minlength:void 0)}
                pattern=${(0,f.o)(this.pattern)}
                placeholder=${this.placeholder}
                .value=${this.displayValue}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${(0,f.o)(this.autocomplete)}
            ></textarea>
        `}get renderInput(){return t.dy`
            <!-- @ts-ignore -->
            <input
                type=${this.type}
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.placeholder}
                aria-invalid=${(0,f.o)(this.invalid||void 0)}
                class="input"
                maxlength=${(0,f.o)(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${(0,f.o)(this.minlength>-1?this.minlength:void 0)}
                pattern=${(0,f.o)(this.pattern)}
                placeholder=${this.placeholder}
                .value=${lt(this.displayValue)}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${(0,f.o)(this.autocomplete)}
            />
        `}renderField(){return t.dy`
            ${this.renderStateIcons()}
            ${this.multiline?this.renderMultiline:this.renderInput}
        `}render(){return t.dy`
            <div id="textfield">${this.renderField()}</div>
            ${this.renderHelpText(this.invalid)}
        `}update(t){(t.has("value")||t.has("required")&&this.required)&&this.updateComplete.then((()=>{this.checkValidity()})),super.update(t)}checkValidity(){let t=this.inputElement.checkValidity();return(this.required||this.value&&this.pattern)&&((this.disabled||this.multiline)&&this.pattern&&(t=new RegExp(`^${this.pattern}$`,"u").test(this.value.toString())),void 0!==this.minlength&&(t=t&&this.value.toString().length>this.minlength),this.valid=t,this.invalid=!t),t}}(0,n.gn)([(0,d.Cb)({attribute:"allowed-keys"})],pt.prototype,"allowedKeys",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],pt.prototype,"focused",void 0),(0,n.gn)([(0,d.IO)(".input")],pt.prototype,"inputElement",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],pt.prototype,"invalid",void 0),(0,n.gn)([(0,d.Cb)()],pt.prototype,"label",void 0),(0,n.gn)([(0,d.Cb)()],pt.prototype,"placeholder",void 0),(0,n.gn)([(0,d.Cb)({attribute:"type",reflect:!0})],pt.prototype,"_type",void 0),(0,n.gn)([(0,d.SB)()],pt.prototype,"type",null),(0,n.gn)([(0,d.Cb)()],pt.prototype,"pattern",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],pt.prototype,"grows",void 0),(0,n.gn)([(0,d.Cb)({type:Number})],pt.prototype,"maxlength",void 0),(0,n.gn)([(0,d.Cb)({type:Number})],pt.prototype,"minlength",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],pt.prototype,"multiline",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],pt.prototype,"readonly",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],pt.prototype,"valid",void 0),(0,n.gn)([(0,d.Cb)({type:String})],pt.prototype,"value",null),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],pt.prototype,"quiet",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],pt.prototype,"required",void 0),(0,n.gn)([(0,d.Cb)({type:String,reflect:!0})],pt.prototype,"autocomplete",void 0);class bt extends pt{constructor(){super(...arguments),this._value=""}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}}(0,n.gn)([(0,d.Cb)({type:String})],bt.prototype,"value",null),customElements.define("sp-textfield",bt);const ht=(t,e)=>{var o,r;const a=t._$AN;if(void 0===a)return!1;for(const t of a)null===(r=(o=t)._$AO)||void 0===r||r.call(o,e,!1),ht(t,e);return!0},gt=t=>{let e,o;do{if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e}while(0===(null==o?void 0:o.size))},vt=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),yt(e)}};function ft(t){void 0!==this._$AN?(gt(this),this._$AM=t,vt(this)):this._$AM=t}function xt(t,e=!1,o=0){const r=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(e)if(Array.isArray(r))for(let t=o;t<r.length;t++)ht(r[t],!1),gt(r[t]);else null!=r&&(ht(r,!1),gt(r));else ht(this,t)}const yt=t=>{var e,o,r,a;2==t.type&&(null!==(e=(r=t)._$AP)&&void 0!==e||(r._$AP=xt),null!==(o=(a=t)._$AQ)&&void 0!==o||(a._$AQ=ft))};class kt extends at{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),vt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var o,r;t!==this.isConnected&&(this.isConnected=t,t?null===(o=this.reconnected)||void 0===o||o.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),e&&(ht(this,t),gt(this))}setValue(t){if(st(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const wt=["",()=>{}],zt=rt(class extends kt{constructor(){super(...arguments),this.start=wt,this.streamInside=wt,this.end=wt,this.streamOutside=wt,this.state="off",this.handleStart=t=>{this.callHandler(this.start[1],t),t.defaultPrevented||(this.removeListeners(),this.addListeners("on"))},this.handleStream=t=>{this.callHandler(this.streamInside[1],t)},this.handleEnd=t=>{this.callHandler(this.end[1],t),this.removeListeners(),this.addListeners("off")},this.handleBetween=t=>{this.callHandler(this.streamOutside[1],t)}}render(e){return t.Ld}update(t,[{start:e,end:o,streamInside:r=wt,streamOutside:a=wt}]){var i;this.element!==t.element&&(this.element=t.element,this.removeListeners()),this.host=(null===(i=t.options)||void 0===i?void 0:i.host)||this.element,this.start=e,this.end=o,this.streamInside=r,this.streamOutside=a,this.addListeners()}addListeners(t){this.state=t||this.state,"off"===this.state?(this.addListener(this.streamOutside[0],this.handleBetween),this.addListener(this.start[0],this.handleStart)):"on"===this.state&&(this.addListener(this.streamInside[0],this.handleStream),this.addListener(this.end[0],this.handleEnd))}callHandler(t,e){"function"==typeof t?t.call(this.host,e):t.handleEvent(e)}addListener(t,e){Array.isArray(t)?t.map((t=>{this.element.addEventListener(t,e)})):this.element.addEventListener(t,e)}removeListener(t,e){Array.isArray(t)?t.map((t=>{this.element.removeEventListener(t,e)})):this.element.removeEventListener(t,e)}removeListeners(){this.removeListener(this.start[0],this.handleStart),this.removeListener(this.streamInside[0],this.handleStream),this.removeListener(this.end[0],this.handleEnd),this.removeListener(this.streamOutside[0],this.handleBetween)}disconnected(){this.removeListeners()}reconnected(){this.addListeners()}});let Ct=new Map,qt=!1;try{qt="exceptZero"===new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay}catch(rt){}let It=!1;try{It="unit"===new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style}catch(t){}const Et={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class At{format(t){let e="";if(e=qt||null==this.options.signDisplay?this.numberFormatter.format(t):function(t,e,o){if("auto"===e)return t.format(o);if("never"===e)return t.format(Math.abs(o));{let r=!1;if("always"===e?r=o>0||Object.is(o,0):"exceptZero"===e&&(Object.is(o,-0)||Object.is(o,0)?o=Math.abs(o):r=o>0),r){let e=t.format(-o),r=t.format(o),a=e.replace(r,"").replace(/\u200e|\u061C/,"");return 1!==[...a].length&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),e.replace(r,"!!!").replace(a,"+").replace("!!!",r)}return t.format(o)}}(this.numberFormatter,this.options.signDisplay,t),"unit"===this.options.style&&!It){var o;let{unit:t,unitDisplay:r="short",locale:a}=this.resolvedOptions(),i=null===(o=Et[t])||void 0===o?void 0:o[r];e+=i[a]||i.default}return e}formatToParts(t){return this.numberFormatter.formatToParts(t)}formatRange(t,e){if("function"==typeof this.numberFormatter.formatRange)return this.numberFormatter.formatRange(t,e);if(e<t)throw new RangeError("End date must be >= start date");return`${this.format(t)} – ${this.format(e)}`}formatRangeToParts(t,e){if("function"==typeof this.numberFormatter.formatRangeToParts)return this.numberFormatter.formatRangeToParts(t,e);if(e<t)throw new RangeError("End date must be >= start date");let o=this.numberFormatter.formatToParts(t),r=this.numberFormatter.formatToParts(e);return[...o.map((t=>({...t,source:"startRange"}))),{type:"literal",value:" – ",source:"shared"},...r.map((t=>({...t,source:"endRange"})))]}resolvedOptions(){let t=this.numberFormatter.resolvedOptions();return qt||null==this.options.signDisplay||(t={...t,signDisplay:this.options.signDisplay}),It||"unit"!==this.options.style||(t={...t,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),t}constructor(t,e={}){this.numberFormatter=function(t,e={}){let{numberingSystem:o}=e;if(o&&-1===t.indexOf("-u-nu-")&&(t=`${t}-u-nu-${o}`),"unit"===e.style&&!It){var r;let{unit:t,unitDisplay:o="short"}=e;if(!t)throw new Error('unit option must be provided with style: "unit"');if(!(null===(r=Et[t])||void 0===r?void 0:r[o]))throw new Error(`Unsupported unit ${t} with unitDisplay = ${o}`);e={...e,style:"decimal"}}let a=t+(e?Object.entries(e).sort(((t,e)=>t[0]<e[0]?-1:1)).join():"");if(Ct.has(a))return Ct.get(a);let i=new Intl.NumberFormat(t,e);return Ct.set(a,i),i}(t,e),this.options=e}}const St=new RegExp("^.*\\(.*\\).*$"),$t=["latn","arab","hanidec"];class _t{parse(t){return Ft(this.locale,this.options,t).parse(t)}isValidPartialNumber(t,e,o){return Ft(this.locale,this.options,t).isValidPartialNumber(t,e,o)}getNumberingSystem(t){return Ft(this.locale,this.options,t).options.numberingSystem}constructor(t,e={}){this.locale=t,this.options=e}}const Tt=new Map;function Ft(t,e,o){let r=Ut(t,e);if(!t.includes("-nu-")&&!r.isValidPartialNumber(o))for(let a of $t)if(a!==r.options.numberingSystem){let r=Ut(t+(t.includes("-u-")?"-nu-":"-u-nu-")+a,e);if(r.isValidPartialNumber(o))return r}return r}function Ut(t,e){let o=t+(e?Object.entries(e).sort(((t,e)=>t[0]<e[0]?-1:1)).join():""),r=Tt.get(o);return r||(r=new Bt(t,e),Tt.set(o,r)),r}class Bt{parse(t){let e=this.sanitize(t);e=Pt(e,this.symbols.group,"").replace(this.symbols.decimal,".").replace(this.symbols.minusSign,"-").replace(this.symbols.numeral,this.symbols.index);let o=e?+e:NaN;return isNaN(o)?NaN:("accounting"===this.options.currencySign&&St.test(t)&&(o*=-1),"percent"===this.options.style&&(o/=100,o=+o.toFixed((null!==(r=this.options.maximumFractionDigits)&&void 0!==r?r:0)+2)),o);var r}sanitize(t){return t=(t=t.replace(this.symbols.literals,"")).replace("-",this.symbols.minusSign),"arab"===this.options.numberingSystem&&(t=Pt(t=(t=t.replace(",",this.symbols.decimal)).replace(String.fromCharCode(1548),this.symbols.decimal),".",this.symbols.group)),"fr-FR"===this.options.locale&&(t=Pt(t,".",String.fromCharCode(8239))),t}isValidPartialNumber(t,e=-1/0,o=1/0){return(t=this.sanitize(t)).startsWith(this.symbols.minusSign)&&e<0?t=t.slice(this.symbols.minusSign.length):this.symbols.plusSign&&t.startsWith(this.symbols.plusSign)&&o>0&&(t=t.slice(this.symbols.plusSign.length)),!t.startsWith(this.symbols.group)&&0===(t=Pt(t,this.symbols.group,"").replace(this.symbols.numeral,"").replace(this.symbols.decimal,"")).length}constructor(t,e={}){this.formatter=new Intl.NumberFormat(t,e),this.options=this.formatter.resolvedOptions(),this.symbols=function(t,e,o){var r,a,i,s;let c=t.formatToParts(-10000.111),l=t.formatToParts(10000.111),n=t.formatToParts(1);var u;let d=null!==(u=null===(r=c.find((t=>"minusSign"===t.type)))||void 0===r?void 0:r.value)&&void 0!==u?u:"-",m=null===(a=l.find((t=>"plusSign"===t.type)))||void 0===a?void 0:a.value;m||"exceptZero"!==(null==o?void 0:o.signDisplay)&&"always"!==(null==o?void 0:o.signDisplay)||(m="+");let p=null===(i=c.find((t=>"decimal"===t.type)))||void 0===i?void 0:i.value,b=null===(s=c.find((t=>"group"===t.type)))||void 0===s?void 0:s.value,h=c.filter((t=>!Lt.has(t.type))).map((t=>Ht(t.value))),g=n.filter((t=>!Lt.has(t.type))).map((t=>Ht(t.value))),v=[...new Set([...g,...h])].sort(((t,e)=>e.length-t.length)),f=0===v.length?new RegExp("[\\p{White_Space}]","gu"):new RegExp(`${v.join("|")}|[\\p{White_Space}]`,"gu"),x=[...new Intl.NumberFormat(e.locale,{useGrouping:!1}).format(9876543210)].reverse(),y=new Map(x.map(((t,e)=>[t,e])));return{minusSign:d,plusSign:m,decimal:p,group:b,literals:f,numeral:new RegExp(`[${x.join("")}]`,"g"),index:t=>String(y.get(t))}}(this.formatter,this.options,e)}}const Lt=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]);function Pt(t,e,o){return t.replaceAll?t.replaceAll(e,o):t.split(e).join(o)}function Ht(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}function Mt(){return t=/^iPhone/,"undefined"!=typeof window&&null!=window.navigator&&t.test(window.navigator.platform);var t}customElements.define("sp-icon-chevron75",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M7.482 4.406l-.001-.001L3.86.783a.84.84 0 00-1.188 1.188L5.702 5l-3.03 3.03A.84.84 0 003.86 9.216l3.621-3.622h.001a.84.84 0 000-1.19z"
    />
  </svg>`}});const Dt=t.iv`
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
`,Rt=t.iv`
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
);forced-color-adjust:none}}:host{width:var(--spectrum-stepper-width)}#textfield{width:100%}sp-field-button{--spectrum-dropdown-height:100%;--spectrum-dropdown-padding-x:0}.input{font-feature-settings:"tnum";font-variant-numeric:tabular-nums}:host([readonly]) .buttons{pointer-events:none;visibility:hidden}:host([hide-stepper]:not([quiet])) .input{border-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr][invalid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][invalid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][valid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][valid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet][invalid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][invalid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr][quiet][valid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][valid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr]:not([hide-stepper])) .icon-workflow{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl]:not([hide-stepper])) .icon-workflow{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet]:not([hide-stepper])) .icon-workflow{left:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet]:not([hide-stepper])) .icon-workflow{right:var(--spectrum-stepper-button-width)}:host([readonly]:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .input{border-color:transparent}
`,jt={"１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","０":"0","、":",","，":",","。":".","．":".","％":"%","＋":"+",ー:"-"};class Ot extends pt{constructor(){super(...arguments),this.focused=!1,this._forcedUnit="",this.formatOptions={},this.hideStepper=!1,this.indeterminate=!1,this.keyboardFocused=!1,this.resolvedLanguage=document.documentElement.lang||navigator.language,this.stepperActive=!1,this.stepModifier=10,this._value=NaN,this._trackingValue="",this.changeCount=0,this.wasIndeterminate=!1}static get styles(){return[...super.styles,Rt,Dt]}set value(t){const e=this.validateInput(t);if(e===this.value)return;const o=this._value;this._value=e,this.requestUpdate("value",o)}get value(){return this._value}get inputValue(){return this.indeterminate?this.formattedValue:this.inputElement.value}get valueAsString(){return this._value.toString()}set valueAsString(t){this.value=this.numberParser.parse(t)}get formattedValue(){return isNaN(this.value)?"":this.numberFormatter.format(this.value)+(this.focused?"":this._forcedUnit)}convertValueToNumber(t){return this.numberParser.parse(t)}get _step(){var t;return void 0!==this.step?this.step:"percent"===(null===(t=this.formatOptions)||void 0===t?void 0:t.style)?.01:1}handlePointerdown(t){if(0!==t.button)return void t.preventDefault();this.stepperActive=!0,this.buttons.setPointerCapture(t.pointerId);const e=this.buttons.children[0].getBoundingClientRect(),o=this.buttons.children[1].getBoundingClientRect();this.findChange=t=>{t.clientX>=e.x&&t.clientY>=e.y&&t.clientX<=e.x+e.width&&t.clientY<=e.y+e.height?this.change=t=>this.increment(t.shiftKey?this.stepModifier:1):t.clientX>=o.x&&t.clientY>=o.y&&t.clientX<=o.x+o.width&&t.clientY<=o.y+o.height&&(this.change=t=>this.decrement(t.shiftKey?this.stepModifier:1))},this.findChange(t),this.startChange(t)}startChange(t){this.changeCount=0,this.doChange(t),this.safty=setTimeout((()=>{this.doNextChange(t)}),400)}doChange(t){this.change(t)}handlePointermove(t){this.findChange(t)}handlePointerup(t){this.buttons.releasePointerCapture(t.pointerId),cancelAnimationFrame(this.nextChange),clearTimeout(this.safty),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.stepperActive=!1}doNextChange(t){return this.changeCount+=1,this.changeCount%5==0&&this.doChange(t),requestAnimationFrame((()=>{this.nextChange=this.doNextChange(t)}))}stepBy(t){if(this.disabled||this.readonly)return;const e=void 0!==this.min?this.min:0;let o=this.value;o+=t*this._step,isNaN(this.value)?this.value=e:this.value=o,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.indeterminate=!1,this.focus()}increment(t=1){this.stepBy(1*t)}decrement(t=1){this.stepBy(-1*t)}handleKeydown(t){switch(t.code){case"ArrowUp":t.preventDefault(),this.increment(t.shiftKey?this.stepModifier:1),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}));break;case"ArrowDown":t.preventDefault(),this.decrement(t.shiftKey?this.stepModifier:1),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}}onScroll(t){t.preventDefault();const e=t.shiftKey?t.deltaX/Math.abs(t.deltaX):t.deltaY/Math.abs(t.deltaY);0===e||isNaN(e)||this.stepBy(e*(t.shiftKey?this.stepModifier:1))}onFocus(){super.onFocus(),this._trackingValue=this.inputValue,this.keyboardFocused=!this.readonly&&!0,this.addEventListener("wheel",this.onScroll,{passive:!1})}onBlur(){super.onBlur(),this.keyboardFocused=!this.readonly&&!1,this.removeEventListener("wheel",this.onScroll)}handleFocusin(){this.focused=!this.readonly&&!0,this.keyboardFocused=!this.readonly&&!0}handleFocusout(){this.focused=!this.readonly&&!1,this.keyboardFocused=!this.readonly&&!1}handleChange(){const t=this.convertValueToNumber(this.inputValue);this.wasIndeterminate&&(this.wasIndeterminate=!1,this.indeterminateValue=void 0,isNaN(t))?this.indeterminate=!0:(this.value=t,super.handleChange())}handleInput(){this.indeterminate&&(this.wasIndeterminate=!0,this.indeterminateValue=this.value,this.inputElement.value=this.inputElement.value.replace("-",""));const{value:t,selectionStart:e}=this.inputElement,o=t.split("").map((t=>jt[t]||t)).join("");if(this.numberParser.isValidPartialNumber(o)){const t=this.convertValueToNumber(o);return!o&&this.indeterminateValue?(this.indeterminate=!0,this._value=this.indeterminateValue):(this.indeterminate=!1,this._value=this.validateInput(t)),this._trackingValue=o,void(this.inputElement.value=o)}const r=o.length,a=(e||r)-(r-this._trackingValue.length);this.inputElement.value=this.indeterminate?"-":this._trackingValue,this.inputElement.setSelectionRange(a,a)}validateInput(t){if(void 0!==this.min&&(t=Math.max(this.min,t)),void 0!==this.max&&(t=Math.min(this.max,t)),this.step){const e=(t-(void 0!==this.min?this.min:0))%this.step;if(0!==e&&(1===Math.round(e/this.step)?t+=this.step-e:t-=e),void 0!==this.max)for(;t>this.max;)t-=this.step}return t}get displayValue(){const t=this.focused?"":"-";return this.indeterminate?t:this.formattedValue}clearNumberFormatterCache(){this._numberFormatter=void 0,this._numberParser=void 0}get numberFormatter(){if(!this._numberFormatter||!this._numberFormatterFocused){const t=this.formatOptions,{style:e,unit:o,unitDisplay:r}=t,a=(0,n._T)(t,["style","unit","unitDisplay"]);"unit"!==e&&(a.style=e),this._numberFormatterFocused=new At(this.resolvedLanguage,a);try{this._numberFormatter=new At(this.resolvedLanguage,this.formatOptions),this._forcedUnit="",this._numberFormatter.format(1)}catch(t){"unit"===e&&(this._forcedUnit=o),this._numberFormatter=this._numberFormatterFocused}}return this.focused?this._numberFormatterFocused:this._numberFormatter}get numberParser(){if(!this._numberParser||!this._numberParserFocused){const t=this.formatOptions,{style:e,unit:o,unitDisplay:r}=t,a=(0,n._T)(t,["style","unit","unitDisplay"]);"unit"!==e&&(a.style=e),this._numberParserFocused=new _t(this.resolvedLanguage,a);try{this._numberParser=new _t(this.resolvedLanguage,this.formatOptions),this._forcedUnit="",this._numberParser.parse("0")}catch(t){"unit"===e&&(this._forcedUnit=o),this._numberParser=this._numberParserFocused}}return this.focused?this._numberParserFocused:this._numberParser}renderField(){return this.autocomplete="off",t.dy`
            ${super.renderField()}
            ${this.hideStepper?t.dy``:t.dy`
                      <span
                          class="buttons"
                          @focusin=${this.handleFocusin}
                          @focusout=${this.handleFocusout}
                          ${zt({start:["pointerdown",this.handlePointerdown],streamInside:[["pointermove","pointerenter","pointerleave","pointerover","pointerout"],this.handlePointermove],end:[["pointerup","pointercancel"],this.handlePointerup]})}
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
        `}update(t){(t.has("formatOptions")||t.has("resolvedLanguage"))&&this.clearNumberFormatterCache(),super.update(t)}willUpdate(){this.multiline=!1}firstUpdated(t){super.firstUpdated(t),this.addEventListener("keydown",this.handleKeydown)}updated(t){if(t.has("value")||t.has("max")||t.has("min")||t.has("min")){const t=this.numberParser.parse(this.inputValue.replace(this._forcedUnit,""));this.value=t}if(t.has("min")||t.has("formatOptions")){let t="numeric";const o=void 0!==this.min&&this.min<0,{maximumFractionDigits:r}=this.formatOptions,a=r&&r>0;Mt()?o?t="text":a&&(t="decimal"):(e=/Android/,"undefined"!=typeof window&&null!=window.navigator&&e.test(window.navigator.userAgent)&&(o?t="numeric":a&&(t="decimal"))),this.inputElement.inputMode=t}var e}connectedCallback(){super.connectedCallback(),this.resolveLanguage()}disconnectedCallback(){this.resolveLanguage(),super.disconnectedCallback()}resolveLanguage(){const t=new CustomEvent("sp-language-context",{bubbles:!0,composed:!0,detail:{callback:t=>{this.resolvedLanguage=t}},cancelable:!0});this.dispatchEvent(t)}}(0,n.gn)([(0,d.IO)(".buttons")],Ot.prototype,"buttons",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Ot.prototype,"focused",void 0),(0,n.gn)([(0,d.Cb)({type:Object,attribute:"format-options"})],Ot.prototype,"formatOptions",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"hide-stepper"})],Ot.prototype,"hideStepper",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Ot.prototype,"indeterminate",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"keyboard-focused"})],Ot.prototype,"keyboardFocused",void 0),(0,n.gn)([(0,d.Cb)({type:Number})],Ot.prototype,"max",void 0),(0,n.gn)([(0,d.Cb)({type:Number})],Ot.prototype,"min",void 0),(0,n.gn)([(0,d.Cb)({attribute:!1})],Ot.prototype,"resolvedLanguage",void 0),(0,n.gn)([(0,d.Cb)({type:Number})],Ot.prototype,"step",void 0),(0,n.gn)([(0,d.Cb)({type:Number,reflect:!0,attribute:"step-modifier"})],Ot.prototype,"stepModifier",void 0),(0,n.gn)([(0,d.Cb)({type:Number})],Ot.prototype,"value",null),customElements.define("sp-number-field",Ot);class Nt extends k{constructor(){super(...arguments),this.checked=!1,this.readonly=!1}get focusElement(){return this.inputElement}handleChange(t){if(this.readonly)return void(this.inputElement.checked=this.checked);this.checked=this.inputElement.checked;const e=new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable});this.dispatchEvent(e)}render(){return t.dy`
            <input
                id="input"
                aria-labelledby="label"
                type="checkbox"
                .checked=${this.checked}
                @change=${this.handleChange}
            />
        `}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Nt.prototype,"checked",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Nt.prototype,"readonly",void 0),(0,n.gn)([(0,d.IO)("#input")],Nt.prototype,"inputElement",void 0),customElements.define("sp-icon-checkmark75",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3.667 9.07a.96.96 0 01-.737-.344L.753 6.114a.96.96 0 111.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 011.51 1.186L4.422 8.704a.962.962 0 01-.741.367z"
    />
  </svg>`}}),customElements.define("sp-icon-checkmark200",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M4.313 10.98a1.042 1.042 0 01-.8-.375L.647 7.165a1.042 1.042 0 011.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 011.64 1.287l-6.24 7.94a1.04 1.04 0 01-.804.399z"
    />
  </svg>`}}),customElements.define("sp-icon-checkmark300",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.102 12.514a1.087 1.087 0 01-.834-.39L.988 8.19A1.085 1.085 0 012.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 011.707 1.34L5.955 12.1a1.089 1.089 0 01-.838.415z"
    />
  </svg>`}}),customElements.define("sp-icon-dash75",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M6.99 4.96H1.01a.96.96 0 010-1.92h5.98a.96.96 0 010 1.92z" />
  </svg>`}}),customElements.define("sp-icon-dash100",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M8.5 6h-7a1 1 0 010-2h7a1 1 0 010 2z" />
  </svg>`}}),customElements.define("sp-icon-dash200",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M10.021 7.042H1.98a1.042 1.042 0 110-2.083h8.043a1.042 1.042 0 010 2.083z" />
  </svg>`}}),customElements.define("sp-icon-dash300",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M10.61 7.085H1.39a1.085 1.085 0 010-2.17h9.22a1.085 1.085 0 010 2.17z" />
  </svg>`}});const Vt=t.iv`
:host{align-items:flex-start;max-width:100%;min-height:var(--spectrum-checkbox-height);position:relative}#input{box-sizing:border-box;cursor:pointer;font-family:inherit;font-size:100%;height:100%;line-height:1.15;margin:0;opacity:.0001;overflow:visible;padding:0;position:absolute;width:100%;z-index:1}#input:disabled{cursor:default}#input:checked+#box:before{border-width:calc(var(--spectrum-checkbox-box-size)/2)}#input:checked+#box #checkmark{opacity:1;transform:scale(1)}#input.focus-visible+#box:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}#input:focus-visible+#box:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}:host([size=s]){--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-s-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-s-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-s-box-size,var(--spectrum-alias-control-two-size-s)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-s-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-s-text-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-s-text-padding-top,var(--spectrum-global-dimension-static-size-50)
);--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-s-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-s-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-s-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-75)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-s-height,var(--spectrum-global-dimension-size-300)
)}:host([size=m]){--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-m-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-m-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-m-box-size,var(--spectrum-alias-control-two-size-m)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-m-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-m-text-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-m-text-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-m-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-m-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-m-height,var(--spectrum-global-dimension-size-400)
)}:host([size=l]){--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-l-text-padding-top
);--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-l-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-l-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-l-box-size,var(--spectrum-alias-control-two-size-l)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-l-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-l-text-gap,var(--spectrum-global-dimension-size-130)
);--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-l-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-l-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-l-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-l-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-200)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-l-height,var(--spectrum-global-dimension-size-500)
)}:host([size=xl]){--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-xl-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-xl-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-xl-box-size,var(--spectrum-alias-control-two-size-xl)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-xl-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-xl-text-gap,var(--spectrum-global-dimension-size-160)
);--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-xl-text-padding-top,var(--spectrum-global-dimension-size-150)
);--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-xl-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-xl-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-xl-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-xl-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-300)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-xl-height,var(--spectrum-global-dimension-size-600)
)}:host([indeterminate]) #box:before,:host([indeterminate]) #input:checked+#box:before{border-width:calc(var(--spectrum-checkbox-box-size)/2)}:host([indeterminate]) #box #checkmark,:host([indeterminate]) #input:checked+#box #checkmark{display:none}:host([indeterminate]) #box #partialCheckmark,:host([indeterminate]) #input:checked+#box #partialCheckmark{display:block;opacity:1;transform:scale(1)}:host([dir=ltr]) #label{text-align:left}:host([dir=rtl]) #label{text-align:right}:host([dir=ltr]) #label{margin-left:var(
--spectrum-checkbox-text-gap
)}:host([dir=rtl]) #label{margin-right:var(
--spectrum-checkbox-text-gap
)}#label{font-size:var(--spectrum-checkbox-text-size);font-style:var(--spectrum-checkbox-text-font-style);font-weight:var(--spectrum-checkbox-text-font-weight);line-height:var(--spectrum-checkbox-text-line-height);margin-top:var(
--spectrum-checkbox-text-padding-top
);transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}#box{box-sizing:border-box;flex-grow:0;flex-shrink:0;height:var(--spectrum-checkbox-box-size);margin:calc((var(--spectrum-checkbox-height) - var(--spectrum-checkbox-box-size))/2) 0;position:relative;width:var(--spectrum-checkbox-box-size)}#box:before{border-radius:var(--spectrum-checkbox-box-border-radius);border-style:solid;border-width:var(--spectrum-checkbox-box-border-size);box-sizing:border-box;content:"";display:block;height:var(--spectrum-checkbox-box-size);position:absolute;transition:border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-checkbox-box-size);z-index:0}#box:after{border-radius:calc(var(--spectrum-checkbox-box-border-radius) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
));bottom:0;content:"";display:block;left:0;margin:var(
--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)
);position:absolute;right:0;top:0;transform:translate(0);transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host([dir=ltr]) #checkmark,:host([dir=ltr]) #partialCheckmark{left:50%}:host([dir=rtl]) #checkmark,:host([dir=rtl]) #partialCheckmark{right:50%}#checkmark,#partialCheckmark{opacity:0;position:absolute;top:50%;transform:scale(0);transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([dir=ltr]) #checkmark{margin-left:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host([dir=rtl]) #checkmark{margin-right:calc(var(--spectrum-checkbox-checkmark-size)/-2)}#checkmark{margin-top:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host([dir=ltr]) #partialCheckmark{margin-left:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host([dir=rtl]) #partialCheckmark{margin-right:calc(var(--spectrum-checkbox-checkmark-size)/-2)}#partialCheckmark{display:none;margin-top:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host{color:var(
--spectrum-checkbox-m-text-color,var(--spectrum-alias-component-text-color-default)
)}#checkmark,#partialCheckmark{color:var(
--spectrum-checkbox-m-checkmark-color,var(--spectrum-alias-toggle-icon-color-selected)
)}#box:before{background-color:var(
--spectrum-checkbox-m-box-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-alias-toggle-border-color-default)
);forced-color-adjust:none}#label{color:var(
--spectrum-checkbox-m-text-color,var(--spectrum-alias-component-text-color-default)
)}#input:checked+#box:before,:host([indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected,var(--spectrum-alias-toggle-background-color-default)
)}:host(:hover) #input:checked+#box:before,:host(:hover[indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-hover)
)}:host(:active) #input:checked+#box:before,:host(:active[indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-down,var(--spectrum-alias-toggle-background-color-down)
)}:host{border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-alias-toggle-border-color-default)
)}:host(:hover) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-hover,var(--spectrum-alias-toggle-border-color-hover)
)}:host(:hover) #label{color:var(
--spectrum-checkbox-m-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host(:active) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-down,var(--spectrum-alias-toggle-border-color-down)
)}:host(:active) #label{color:var(
--spectrum-checkbox-m-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host([readonly]){border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-alias-toggle-border-color-default)
)}:host([readonly]:hover) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-hover,var(--spectrum-alias-toggle-border-color-hover)
)}:host([readonly]:hover) #label{color:var(
--spectrum-checkbox-m-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([readonly]:active) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-down,var(--spectrum-alias-toggle-border-color-down)
)}:host([readonly]:active) #label{color:var(
--spectrum-checkbox-m-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host([readonly]) #input:checked:disabled+#box:before,:host([readonly]) #input:disabled+#box:before{background-color:var(
--spectrum-checkbox-m-box-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-alias-toggle-border-color-default)
)}:host([readonly]) #input:checked:disabled~#label,:host([readonly]) #input:disabled~#label{color:var(
--spectrum-checkbox-m-text-color,var(--spectrum-alias-component-text-color-default)
);forced-color-adjust:none}#input:disabled+#box:before,:host([dir]) #input:checked:disabled+#box:before{background-color:var(
--spectrum-checkbox-m-box-background-color-disabled,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-checkbox-m-box-border-color-disabled,var(--spectrum-global-color-gray-400)
)}#input:checked:disabled~#label,#input:disabled~#label{color:var(
--spectrum-checkbox-m-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
);forced-color-adjust:none}#input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}#input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}#input.focus-visible+#box:after{box-shadow:0 0 0 var(
--spectrum-checkbox-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);forced-color-adjust:none}#input:focus-visible+#box:after{box-shadow:0 0 0 var(
--spectrum-checkbox-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);forced-color-adjust:none}#input:checked.focus-visible+#box:before,:host([indeterminate]) #input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}#input:checked:focus-visible+#box:before,:host([indeterminate]) #input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}#input.focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}#input:focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected,var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
)
)}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected,var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
)
)}:host([emphasized]:hover) #input:checked+#box:before,:host([emphasized][indeterminate]:hover) #box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-emphasized-selected-hover)
)}:host([emphasized]:active) #input:checked+#box:before,:host([emphasized][indeterminate]:active) #box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected-down,var(--spectrum-alias-toggle-background-color-emphasized-selected-down)
)}:host([invalid][dir]) #box:before,:host([invalid][dir]) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error,var(--spectrum-global-color-red-500)
)}:host([invalid]) #label{color:var(
--spectrum-checkbox-m-text-color-error,var(--spectrum-alias-component-text-color-error-default)
)}:host([invalid]) #input.focus-visible+#box:before,:host([invalid][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]) #input:focus-visible+#box:before,:host([invalid][indeterminate]) #input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]) #input.focus-visible~#label,:host([invalid][indeterminate]) #input.focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-error-hover,var(--spectrum-alias-component-text-color-error-hover)
)}:host([invalid]) #input:focus-visible~#label,:host([invalid][indeterminate]) #input:focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-error-hover,var(--spectrum-alias-component-text-color-error-hover)
)}:host([invalid]:hover) #box:before,:host([invalid][dir]:hover) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]:hover) #label{color:var(
--spectrum-checkbox-m-text-color-error-hover,var(--spectrum-alias-component-text-color-error-hover)
)}:host([invalid]:active) #box:before,:host([invalid]:active) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-down,var(--spectrum-global-color-red-700)
)}:host([invalid]:active) #label{color:var(
--spectrum-checkbox-m-text-color-error-down,var(--spectrum-alias-component-text-color-error-down)
)}@media (forced-colors:active){#input.focus-visible+#box{forced-color-adjust:none;outline-color:var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);outline-offset:var(
--spectrum-checkbox-m-focus-ring-gap-key-focus,var(--spectrum-alias-focus-ring-gap)
);outline-style:auto;outline-width:var(
--spectrum-checkbox-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
)}#input:focus-visible+#box{forced-color-adjust:none;outline-color:var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);outline-offset:var(
--spectrum-checkbox-m-focus-ring-gap-key-focus,var(--spectrum-alias-focus-ring-gap)
);outline-style:auto;outline-width:var(
--spectrum-checkbox-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
)}:host{--spectrum-checkbox-m-box-background-color-disabled:ButtonFace;--spectrum-checkbox-m-box-background-color:ButtonFace;--spectrum-checkbox-m-box-border-color-disabled:GrayText;--spectrum-checkbox-m-box-border-color-down:Highlight;--spectrum-checkbox-m-box-border-color-error-down:Highlight;--spectrum-checkbox-m-box-border-color-hover:Highlight;--spectrum-checkbox-m-box-border-color-key-focus:Highlight;--spectrum-checkbox-m-box-border-color-selected-down:Highlight;--spectrum-checkbox-m-box-border-color-selected-hover:Highlight;--spectrum-checkbox-m-box-border-color-selected-key-focus:Highlight;--spectrum-checkbox-m-box-border-color-selected:Highlight;--spectrum-checkbox-m-box-border-color:ButtonText;--spectrum-checkbox-m-emphasized-box-border-color-selected-down:Highlight;--spectrum-checkbox-m-emphasized-box-border-color-selected-hover:Highlight;--spectrum-checkbox-m-emphasized-box-border-color-selected:Highlight;--spectrum-checkbox-m-focus-ring-color-key-focus:FieldText;--spectrum-checkbox-m-text-color-disabled:GrayText;--spectrum-checkbox-m-text-color-down:FieldText;--spectrum-checkbox-m-text-color-error-down:FieldText;--spectrum-checkbox-m-text-color-error-hover:FieldText;--spectrum-checkbox-m-checkmark-color:HighlightText;--spectrum-checkbox-m-focus-ring-gap-key-focus:var(
--spectrum-global-dimension-static-size-25,2px
);--spectrum-checkbox-m-focus-ring-size:var(
--spectrum-global-dimension-static-size-40,3px
);--spectrum-checkbox-m-box-border-color-error:FieldText;--spectrum-checkbox-m-box-border-color-error-hover:FieldText;--spectrum-checkbox-m-text-color-error:FieldText;--spectrum-checkbox-m-text-color-hover:FieldText;--spectrum-checkbox-m-text-color-key-focus:FieldText;--spectrum-checkbox-m-text-color:FieldText}:host([invalid][dir]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-alias-toggle-border-color-default)
)}:host([invalid][indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error,var(--spectrum-global-color-red-500)
)}:host([invalid][dir]) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error,var(--spectrum-global-color-red-500)
)}}:host{display:inline-flex;vertical-align:top}:host(:focus){outline:none}:host([disabled]){pointer-events:none}:host(:empty) label{display:none}
`,Gt=t.iv`
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
`,Kt={s:t.dy`
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
    `},Wt={s:t.dy`
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
    `};class Yt extends(v(Nt)){constructor(){super(...arguments),this.indeterminate=!1,this.invalid=!1,this.emphasized=!1}static get styles(){return[Vt,dt,Gt]}render(){return t.dy`
            ${super.render()}
            <span id="box">
                ${Kt[this.size]}
                ${Wt[this.size]}
            </span>
            <label id="label"><slot></slot></label>
        `}updated(t){super.updated(t),t.has("invalid")&&(this.invalid?this.inputElement.setAttribute("aria-invalid","true"):this.inputElement.removeAttribute("aria-invalid")),t.has("indeterminate")&&(this.indeterminate?this.inputElement.setAttribute("aria-checked","mixed"):this.inputElement.removeAttribute("aria-checked"))}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Yt.prototype,"indeterminate",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Yt.prototype,"invalid",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Yt.prototype,"emphasized",void 0),customElements.define("sp-checkbox",Yt);const Zt=t.iv`
:host([size=s]){--spectrum-link-primary-text-size:var(
--spectrum-link-s-primary-text-size,var(--spectrum-global-dimension-font-size-75)
)}:host([size=m]){--spectrum-link-primary-text-size:var(
--spectrum-link-m-primary-text-size,var(--spectrum-global-dimension-font-size-100)
)}:host([size=l]){--spectrum-link-primary-text-size:var(
--spectrum-link-l-primary-text-size,var(--spectrum-global-dimension-font-size-200)
)}:host([size=xl]){--spectrum-link-primary-text-size:var(
--spectrum-link-xl-primary-text-size,var(--spectrum-global-dimension-font-size-300)
)}a{-webkit-text-decoration-skip:objects;background-color:transparent;cursor:pointer;font-size:var(--spectrum-link-primary-text-size);outline:none;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}a,a.focus-visible,a.focus-visible{text-decoration:underline}a.focus-visible{-webkit-text-decoration-style:double;text-decoration-style:double}a:focus-visible{text-decoration:underline;-webkit-text-decoration-style:double;text-decoration-style:double}:host([quiet]) a{text-decoration:none}:host([quiet]) a:hover{text-decoration:underline}a{color:var(
--spectrum-link-m-primary-text-color,var(--spectrum-alias-link-primary-text-color-default)
)}a:hover{color:var(
--spectrum-link-m-primary-text-color-hover,var(--spectrum-alias-link-primary-text-color-hover)
)}a:active{color:var(
--spectrum-link-m-primary-text-color-down,var(--spectrum-alias-link-primary-text-color-down)
)}a.focus-visible{color:var(
--spectrum-link-m-primary-text-color-key-focus,var(--spectrum-alias-link-primary-text-color-key-focus)
)}a:focus-visible{color:var(
--spectrum-link-m-primary-text-color-key-focus,var(--spectrum-alias-link-primary-text-color-key-focus)
)}:host([variant=secondary]) a{color:inherit}:host([variant=secondary]) a:hover{color:inherit}:host([variant=secondary]) a:active{color:inherit}:host([variant=secondary]) a:focus{color:inherit}:host([over-background]) a{color:var(
--spectrum-link-m-primary-overbackground-text-color,var(--spectrum-alias-text-color-overbackground)
)}:host([over-background]) a:hover{color:var(
--spectrum-link-m-primary-overbackground-text-color-hover,var(--spectrum-alias-text-color-overbackground)
)}:host([over-background]) a:active{color:var(
--spectrum-link-m-primary-overbackground-text-color-down,var(--spectrum-alias-text-color-overbackground)
)}:host([over-background]) a:focus{color:var(
--spectrum-link-m-primary-overbackground-text-color-key-focus,var(--spectrum-alias-text-color-overbackground)
)}@media (forced-colors:active){:host([variant=secondary]) a{color:linktext}:host([variant=secondary]) a:hover{color:linktext}:host([variant=secondary]) a:active{color:linktext}:host([variant=secondary]) a:focus{color:linktext}}:host{display:inline}:host(:focus){outline:none}:host([href]) a.focus-visible{text-decoration:underline;-webkit-text-decoration-style:double;text-decoration-style:double}:host([href]) a:focus-visible{text-decoration:underline;-webkit-text-decoration-style:double;text-decoration-style:double}
`;class Xt extends(v(L(k),{noDefaultSize:!0})){static get styles(){return[Zt]}get focusElement(){return this.anchorElement}render(){return this.renderAnchor({id:"anchor"})}}(0,n.gn)([(0,d.IO)("#anchor")],Xt.prototype,"anchorElement",void 0),(0,n.gn)([(0,d.Cb)({type:String,reflect:!0})],Xt.prototype,"variant",void 0),customElements.define("sp-link",Xt);const Jt=t.iv`
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
`;class Qt extends u.o{constructor(){super(...arguments),this.label=""}static get styles(){return[Jt]}render(){return"file"===this.variant?(e=this.label,t.dy`
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
        `;var e}}(0,n.gn)([(0,d.Cb)({type:String,reflect:!0})],Qt.prototype,"variant",void 0),(0,n.gn)([(0,d.Cb)()],Qt.prototype,"label",void 0),customElements.define("sp-asset",Qt);const te=t.iv`
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
`;class ee extends u.o{constructor(){super(...arguments),this.open=!1,this.color="rgba(255, 0, 0, 0.5)"}static get styles(){return[te]}render(){return t.dy`
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
        `}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],ee.prototype,"open",void 0),(0,n.gn)([(0,d.Cb)({type:String})],ee.prototype,"color",void 0),customElements.define("sp-color-loupe",ee);const oe=t.iv`
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
`;class re extends u.o{constructor(){super(...arguments),this.disabled=!1,this.focused=!1,this.open=!1,this.color="rgba(255, 0, 0, 0.5)"}static get styles(){return[oe]}handlePointerdown(t){"touch"===t.pointerType&&(this.open=!0),this.setPointerCapture(t.pointerId)}handlePointerup(t){this.open=!1,this.releasePointerCapture(t.pointerId)}render(){return t.dy`
            <div class="color" style="background-color: ${this.color}"></div>
            <sp-color-loupe
                color=${this.color}
                ?open=${this.open&&!this.disabled}
            ></sp-color-loupe>
        `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("pointerdown",this.handlePointerdown),this.addEventListener("pointerup",this.handlePointerup),this.addEventListener("pointercancel",this.handlePointerup)}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],re.prototype,"disabled",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],re.prototype,"focused",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],re.prototype,"open",void 0),(0,n.gn)([(0,d.Cb)({type:String})],re.prototype,"color",void 0),customElements.define("sp-color-handle",re);const ae=rt(class extends at{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,r;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.st)||void 0===o?void 0:o.has(t))&&this.et.add(t);return this.render(e)}const a=t.element.classList;this.et.forEach((t=>{t in e||(a.remove(t),this.et.delete(t))}));for(const t in e){const o=!!e[t];o===this.et.has(t)||(null===(r=this.st)||void 0===r?void 0:r.has(t))||(o?(a.add(t),this.et.add(t)):(a.remove(t),this.et.delete(t)))}return ot.Jb}}),ie=t.iv`
#button{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}#button:focus{outline:none}#button::-moz-focus-inner{border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}#button:disabled{cursor:default}:host([dir=ltr]) #button{padding-left:var(
--spectrum-picker-textonly-padding-left-adjusted
);padding-right:var(--spectrum-picker-textonly-padding-right-adjusted)}:host([dir=rtl]) #button{padding-left:var(--spectrum-picker-textonly-padding-right-adjusted);padding-right:var(
--spectrum-picker-textonly-padding-left-adjusted
)}#button{align-items:center;border-radius:var(--spectrum-picker-texticon-border-radius);border-style:solid;border-width:var(--spectrum-picker-texticon-border-size);display:flex;height:var(--spectrum-picker-texticon-height);justify-content:center;margin:0;min-width:var(--spectrum-picker-texticon-min-width);padding-bottom:0;padding-top:0;transition:background-color var(--spectrum-global-animation-duration-100,.13s),box-shadow var(--spectrum-global-animation-duration-100,.13s),border-color var(--spectrum-global-animation-duration-100,.13s);width:var(--spectrum-picker-texticon-width)}#button:disabled,:host([disabled]) #button{border-width:var(
--spectrum-picker-texticon-disabled-border-size
);cursor:default}:host([dir=ltr]) #button .icon{margin-right:var(
--spectrum-picker-texticon-icon-gap
)}:host([dir=rtl]) #button .icon{margin-left:var(
--spectrum-picker-texticon-icon-gap
)}.icon{flex-shrink:0}:host([dir=ltr]) #button #label+.icon{margin-left:calc((var(--spectrum-picker-textonly-padding-left-adjusted) - var(--spectrum-picker-padding-left-adjusted))*-1)}:host([dir=rtl]) #button #label+.icon{margin-right:calc((var(--spectrum-picker-textonly-padding-left-adjusted) - var(--spectrum-picker-padding-left-adjusted))*-1)}:host([size=s]){--spectrum-picker-texticon-border-size:var(
--spectrum-picker-s-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-s-texticon-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-s-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-s-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-s-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-s-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-s-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-s-texticon-popover-max-width,var(--spectrum-global-dimension-size-1800)
);--spectrum-picker-texticon-padding-left:var(
--spectrum-picker-s-texticon-padding-left,var(--spectrum-global-dimension-size-85)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-s-texticon-height,var(--spectrum-global-dimension-size-300)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-s-texticon-min-width,var(--spectrum-global-dimension-size-450)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-s-texticon-width,var(--spectrum-global-dimension-size-2000)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-s-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-border-size:var(
--spectrum-picker-s-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-s-textonly-padding-left,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-s-textonly-padding-right,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-textonly-border-radius:var(
--spectrum-picker-s-textonly-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([size=m]){--spectrum-picker-texticon-padding-left:var(
--spectrum-picker-m-texticon-padding-left
);--spectrum-picker-texticon-border-size:var(
--spectrum-picker-m-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-m-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-m-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-m-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-m-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-m-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-m-texticon-popover-max-width,var(--spectrum-global-dimension-size-2400)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-m-texticon-height,var(--spectrum-global-dimension-size-400)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-m-texticon-min-width,var(--spectrum-global-dimension-size-600)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-m-texticon-width,var(--spectrum-global-dimension-size-2400)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-border-size:var(
--spectrum-picker-m-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-m-textonly-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-m-textonly-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-picker-textonly-border-radius:var(
--spectrum-picker-m-textonly-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([size=l]){--spectrum-picker-texticon-border-size:var(
--spectrum-picker-l-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-l-texticon-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-l-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-l-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-l-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-l-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-l-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-l-texticon-popover-max-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-texticon-padding-left:var(
--spectrum-picker-l-texticon-padding-left,var(--spectrum-global-dimension-size-160)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-l-texticon-height,var(--spectrum-global-dimension-size-500)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-l-texticon-min-width,var(--spectrum-global-dimension-size-750)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-l-texticon-width,var(--spectrum-global-dimension-size-2500)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-l-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-border-size:var(
--spectrum-picker-l-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-l-textonly-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-l-textonly-padding-right,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-textonly-border-radius:var(
--spectrum-picker-l-textonly-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([size=xl]){--spectrum-picker-texticon-border-size:var(
--spectrum-picker-xl-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-xl-texticon-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-xl-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-xl-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-xl-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-xl-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-225)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-xl-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-xl-texticon-popover-max-width,var(--spectrum-global-dimension-size-3600)
);--spectrum-picker-texticon-padding-left:var(
--spectrum-picker-xl-texticon-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-xl-texticon-height,var(--spectrum-global-dimension-size-600)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-xl-texticon-min-width,var(--spectrum-global-dimension-size-900)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-xl-texticon-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-xl-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-border-size:var(
--spectrum-picker-xl-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-xl-textonly-padding-left,var(--spectrum-global-dimension-size-225)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-xl-textonly-padding-right,var(--spectrum-global-dimension-size-225)
);--spectrum-picker-textonly-border-radius:var(
--spectrum-picker-xl-textonly-border-radius,var(--spectrum-alias-component-border-radius)
)}:host{--spectrum-picker-texticon-min-width:var(
--spectrum-global-dimension-size-400
);--spectrum-picker-texticon-disabled-border-size:0;--spectrum-picker-texticon-popover-max-width:var(
--spectrum-global-dimension-size-3000
);--spectrum-picker-texticon-width:var(
--spectrum-global-dimension-size-2400
);--spectrum-picker-texticon-border-size-increase-focus:1px;--spectrum-picker-padding-left-adjusted:calc(var(--spectrum-picker-texticon-padding-left) - var(--spectrum-picker-texticon-border-size));--spectrum-picker-textonly-padding-left-adjusted:calc(var(--spectrum-picker-textonly-padding-left) - var(--spectrum-picker-textonly-border-size));--spectrum-picker-textonly-padding-right-adjusted:calc(var(--spectrum-picker-textonly-padding-right) - var(--spectrum-picker-textonly-border-size));--spectrum-picker-focus-ring-border-radius-adjusted:calc(var(--spectrum-picker-textonly-border-radius) + var(--spectrum-picker-focus-ring-gap))}:host{--spectrum-picker-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap,var(--spectrum-global-dimension-static-size-0)
);--spectrum-picker-focus-ring-size:var(
--spectrum-alias-component-focusring-size,var(--spectrum-global-dimension-static-size-10)
);--spectrum-picker-focus-ring-color:var(
--spectrum-picker-m-textonly-focusring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}#button{transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}#button:after{border-radius:var(--spectrum-picker-focus-ring-border-radius-adjusted);bottom:0;content:"";left:0;margin:calc((var(--spectrum-picker-focus-ring-gap) + var(--spectrum-picker-textonly-border-size))*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}#button.focus-visible{box-shadow:none!important}#button:focus-visible{box-shadow:none!important}#button.focus-visible:after{box-shadow:0 0 0 var(--spectrum-picker-focus-ring-size) var(--spectrum-picker-focus-ring-color)}#button:focus-visible:after{box-shadow:0 0 0 var(--spectrum-picker-focus-ring-size) var(--spectrum-picker-focus-ring-color)}:host([quiet]){--spectrum-picker-texticon-border-size:0;--spectrum-picker-texticon-border-radius:0;--spectrum-picker-textonly-padding-left:0;--spectrum-picker-textonly-padding-right:0}:host([quiet]) #button{min-width:0;width:auto}:host([quiet]) #button:disabled.focus-visible,:host([quiet][disabled]) #button.focus-visible{box-shadow:none}:host([quiet]) #button:disabled:focus-visible,:host([quiet][disabled]) #button:focus-visible{box-shadow:none}:host([dir=ltr]) #label{text-align:left}:host([dir=rtl]) #label{text-align:right}#label{flex:1 1 auto;font-size:var(--spectrum-picker-texticon-text-size);height:calc(var(--spectrum-picker-texticon-height) - var(--spectrum-picker-texticon-border-size)*2);line-height:calc(var(--spectrum-picker-texticon-height) - var(--spectrum-picker-texticon-border-size)*2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#label.placeholder{font-style:var(--spectrum-picker-texticon-placeholder-font-style);font-weight:var(
--spectrum-picker-texticon-placeholder-font-weight
);transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}.picker{display:inline-block;flex-shrink:0;position:relative;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-out;vertical-align:top}:host([dir=ltr]) .validation-icon{margin-left:var(
--spectrum-picker-texticon-error-icon-margin-left
)}:host([dir=rtl]) .validation-icon{margin-right:var(
--spectrum-picker-texticon-error-icon-margin-left
)}:host([dir=ltr]) #label~.picker{margin-left:var(
--spectrum-picker-texticon-ui-icon-gap
)}:host([dir=rtl]) #label~.picker{margin-right:var(
--spectrum-picker-texticon-ui-icon-gap
)}#popover{max-width:var(
--spectrum-picker-texticon-popover-max-width
)}:host([dir=ltr]) .spectrum-Picker-popover--quiet{margin-left:calc((var(
--spectrum-picker-m-quiet-texticon-popover-offset-x,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))*-1)}:host([dir=rtl]) .spectrum-Picker-popover--quiet{margin-right:calc((var(
--spectrum-picker-m-quiet-texticon-popover-offset-x,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))*-1)}#button{background-color:var(
--spectrum-picker-m-texticon-background-color,var(--spectrum-alias-component-background-color-default)
);border-color:var(
--spectrum-picker-m-texticon-border-color,var(--spectrum-alias-component-border-color-default)
);color:var(
--spectrum-picker-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}#button:hover{background-color:var(
--spectrum-picker-m-texticon-background-color-hover,var(--spectrum-alias-component-background-color-hover)
);border-color:var(
--spectrum-picker-m-texticon-border-color-hover,var(--spectrum-alias-component-border-color-hover)
);color:var(
--spectrum-picker-m-texticon-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}#button:hover .picker{color:var(
--spectrum-picker-m-texticon-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}#button:active,:host([open]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-down,var(--spectrum-alias-component-background-color-down)
);border-color:var(
--spectrum-picker-m-texticon-border-color-down,var(--spectrum-alias-component-border-color-down)
)}#button:active.placeholder #label,:host([open]) #button.placeholder #label{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-down,var(--spectrum-alias-placeholder-text-color-down)
)}#button.focus-visible,:host([focused]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-picker-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}#button:focus-visible,:host([focused]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-picker-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}#button.focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}#button:focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([invalid]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error,var(--spectrum-semantic-negative-color-default)
)}:host([invalid]) #button .validation-icon{color:var(
--spectrum-picker-m-texticon-validation-icon-color-error,var(--spectrum-semantic-negative-icon-color)
)}:host([invalid]) #button:hover{border-color:var(
--spectrum-picker-m-texticon-border-color-error-hover,var(--spectrum-semantic-negative-color-hover)
)}:host([invalid]) #button:active,:host([invalid][open]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error-down,var(--spectrum-semantic-negative-color-down)
)}:host([invalid]) #button.focus-visible,:host([invalid][focused]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([invalid]) #button:focus-visible,:host([invalid][focused]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#button:disabled,:host([disabled]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-disabled,var(--spectrum-alias-component-background-color-disabled)
);color:var(
--spectrum-picker-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}#button:disabled .icon,#button:disabled .picker,#button:disabled .validation-icon,:host([disabled]) #button .icon,:host([disabled]) #button .picker,:host([disabled]) #button .validation-icon{color:var(
--spectrum-picker-m-texticon-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}#button:disabled #label.placeholder,:host([disabled]) #button #label.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.picker{color:var(
--spectrum-picker-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}#label.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color,var(--spectrum-alias-placeholder-text-color)
)}#label.placeholder:hover{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-hover,var(--spectrum-alias-placeholder-text-color-hover)
)}#label.placeholder:active{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-mouse-focus,var(--spectrum-alias-placeholder-text-color-down)
)}:host([quiet]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color,var(--spectrum-alias-component-background-color-quiet-default)
);border-color:var(
--spectrum-picker-m-quiet-texticon-border-color,var(--spectrum-alias-component-border-color-quiet-default)
);color:var(
--spectrum-picker-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([quiet]) #button:hover{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-hover,var(--spectrum-alias-component-background-color-quiet-hover)
);color:var(
--spectrum-picker-m-texticon-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([quiet]) #button:focus-visible,:host([quiet][focused]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([quiet]) #button.focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(
--spectrum-picker-m-quiet-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([quiet]) #button:focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(
--spectrum-picker-m-quiet-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([quiet]) #button.focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(
--spectrum-picker-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host([quiet]) #button:focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(
--spectrum-picker-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host([quiet]) #button:active,:host([quiet][open]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-down,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-picker-m-quiet-texticon-border-color-down,var(--spectrum-alias-component-border-color-quiet-down)
)}:host([quiet]) #button:active.focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button.focus-visible,:host([quiet][open][focused]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([quiet]) #button:active:focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button:focus-visible,:host([quiet][open][focused]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([quiet][invalid]) #button.focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([quiet][invalid]) #button:focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([quiet]) #button:disabled,:host([quiet][disabled]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-disabled,var(--spectrum-alias-component-background-color-quiet-disabled)
);color:var(
--spectrum-picker-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host{display:inline-flex;max-width:100%;min-width:var(--spectrum-picker-min-width);vertical-align:top;width:var(--spectrum-picker-width)}:host([quiet]){min-width:0;width:auto}:host([size]){--spectrum-picker-width:var(--spectrum-global-dimension-size-2400)}#button{max-width:100%;min-width:100%;width:100%}:host([readonly]) #button{-webkit-user-select:inherit;user-select:inherit}sp-popover{display:none}.picker,.validation-icon{flex-shrink:0}:host([focused]:not([quiet])) #button #label.placeholder{color:var(
--spectrum-picker-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([focused]:not([quiet])) #button .picker{color:var(
--spectrum-picker-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}.visually-hidden{clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}:host([dir=ltr]) #label.visually-hidden+.picker{margin-left:auto}:host([dir=rtl]) #label.visually-hidden+.picker{margin-right:auto}
`;var se=s(731);customElements.define("sp-icon-chevron100",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3 9.95a.875.875 0 01-.615-1.498L5.88 5 2.385 1.547A.875.875 0 013.615.302L7.74 4.377a.876.876 0 010 1.246L3.615 9.698A.872.872 0 013 9.95z"
    />
  </svg>`}});const ce=async(t,e,o,r)=>{const{Overlay:a}=await s.e(749).then(s.bind(s,749));return a.open(t,e,o,r)};class le extends Event{constructor({root:t}){super("sp-overlay-close",{bubbles:!0,composed:!0}),this.root=t}}const ne=t.iv`
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
)}:host([dir=ltr]:focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl].focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl]:focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
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
`;class ue extends Event{constructor(){super("sp-menu-item-removed",{bubbles:!0,composed:!0}),this.focused=!1}get item(){return this._item}reset(t){this._item=t}}class de extends Event{constructor(){super("sp-menu-item-added-or-updated",{bubbles:!0,composed:!0})}set focusRoot(t){this.item.menuData.focusRoot=this.item.menuData.focusRoot||t}set selectionRoot(t){this.item.menuData.selectionRoot=this.item.menuData.selectionRoot||t}get item(){return this._item}set currentAncestorWithSelects(t){this._currentAncestorWithSelects=t}get currentAncestorWithSelects(){return this._currentAncestorWithSelects}reset(t){this._item=t,this._currentAncestorWithSelects=void 0,t.menuData={focusRoot:void 0,selectionRoot:void 0}}}const me=new de,pe=new ue;class be extends(L(k)){constructor(){super(),this.isInSubmenu=!1,this.active=!1,this.focused=!1,this.selected=!1,this._value="",this.hasSubmenu=!1,this.noWrap=!1,this.open=!1,this.handleSubmenuChange=()=>{var t;null===(t=this.menuData.selectionRoot)||void 0===t||t.selectOrToggleItem(this)},this.handleSubmenuPointerenter=()=>{this.leaveTimeout&&(clearTimeout(this.leaveTimeout),delete this.leaveTimeout)},this.menuData={focusRoot:void 0,selectionRoot:void 0},this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0}),new E(this,{config:{characterData:!0,childList:!0,subtree:!0},callback:()=>{this.breakItemChildrenCache()}})}static get styles(){return[ne,dt,Dt]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return this.itemChildren.content.reduce(((t,e)=>t+(e.textContent||"").trim()),"")}get focusElement(){return this}get itemChildren(){if(this._itemChildren)return this._itemChildren;const t=this.shadowRoot.querySelector('slot[name="icon"]'),e=t?t.assignedElements().map((t=>{const e=t.cloneNode(!0);return e.removeAttribute("slot"),e.classList.toggle("icon"),e})):[],o=this.shadowRoot.querySelector("slot:not([name])"),r=o?o.assignedNodes().map((t=>t.cloneNode(!0))):[];return this._itemChildren={icon:e,content:r},this._itemChildren}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;return this.anchorElement&&(this.anchorElement.click(),t=!0),t}breakItemChildrenCache(){this._itemChildren=void 0,this.triggerUpdate()}render(){return t.dy`
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
        `}manageSubmenu(t){const e=t.target.assignedElements({flatten:!0});this.hasSubmenu=this.open||!!e.length}handleRemoveActive(t){"pointerleave"===t.type&&this.hasSubmenu||this.hasSubmenu||this.open||(this.active=!1)}handlePointerdown(){this.active=!0}firstUpdated(t){super.firstUpdated(t),this.setAttribute("tabindex","-1"),this.addEventListener("pointerdown",this.handlePointerdown),this.hasAttribute("id")||(this.id="sp-menu-item-"+be.instanceCount++),this.addEventListener("pointerenter",this.closeOverlaysForRoot)}closeOverlaysForRoot(){if(this.open)return;const t=new le({root:this.menuData.focusRoot});this.dispatchEvent(t)}handleSubmenuClick(){this.openOverlay()}handlePointerenter(){if(this.leaveTimeout)return clearTimeout(this.leaveTimeout),void delete this.leaveTimeout;this.openOverlay()}handlePointerleave(){this.hasSubmenu&&this.open&&(this.leaveTimeout=setTimeout((()=>{delete this.leaveTimeout,this.closeOverlay&&this.closeOverlay()}),100))}async openOverlay(){if(!this.hasSubmenu||this.open||this.disabled)return;this.open=!0,this.active=!0;const t=this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements()[0];t.addEventListener("pointerenter",this.handleSubmenuPointerenter),t.addEventListener("change",this.handleSubmenuChange);const e=document.createElement("sp-popover"),o=(0,se.G)([t],e,{position:"beforeend",prepareCallback:t=>{const e=t.slot;return t.tabIndex=0,t.removeAttribute("slot"),t.isSubmenu=!0,t=>{t.tabIndex=-1,t.slot=e,t.isSubmenu=!1}}}),r=ce(this,"click",e,{placement:this.isLTR?"right-start":"left-start",receivesFocus:"auto",root:this.menuData.focusRoot}),a=async()=>{delete this.closeOverlay,(await r)()};this.closeOverlay=a,this.addEventListener("sp-closed",(t=>{t.stopPropagation(),delete this.closeOverlay,o(),this.open=!1,this.active=!1}),{once:!0}),e.addEventListener("change",a)}updateAriaSelected(){const t=this.getAttribute("role");"option"===t?this.setAttribute("aria-selected",this.selected?"true":"false"):"menuitemcheckbox"!==t&&"menuitemradio"!==t||this.setAttribute("aria-checked",this.selected?"true":"false")}setRole(t){this.setAttribute("role",t),this.updateAriaSelected()}updated(t){super.updated(t),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1),t.has("selected")&&this.updateAriaSelected(),t.has("hasSubmenu")&&(this.hasSubmenu?(this.addEventListener("click",this.handleSubmenuClick),this.addEventListener("pointerenter",this.handlePointerenter),this.addEventListener("pointerleave",this.handlePointerleave)):this.closeOverlay||(this.removeEventListener("click",this.handleSubmenuClick),this.removeEventListener("pointerenter",this.handlePointerenter),this.removeEventListener("pointerleave",this.handlePointerleave)))}connectedCallback(){super.connectedCallback(),this.isInSubmenu=!!this.closest('[slot="submenu"]'),this.isInSubmenu||(me.reset(this),this.dispatchEvent(me),this._parentElement=this.parentElement)}disconnectedCallback(){var t;pe.reset(this),this.isInSubmenu||null===(t=this._parentElement)||void 0===t||t.dispatchEvent(pe),this.isInSubmenu=!1,super.disconnectedCallback()}async triggerUpdate(){this.isInSubmenu||(await new Promise((t=>requestAnimationFrame(t))),me.reset(this),this.dispatchEvent(me))}}be.instanceCount=0,(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],be.prototype,"active",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],be.prototype,"focused",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],be.prototype,"selected",void 0),(0,n.gn)([(0,d.Cb)({type:String})],be.prototype,"value",null),(0,n.gn)([(0,d.Cb)({type:Boolean})],be.prototype,"hasSubmenu",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"no-wrap",hasChanged:()=>!1})],be.prototype,"noWrap",void 0),(0,n.gn)([(0,d.IO)(".anchor")],be.prototype,"anchorElement",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean})],be.prototype,"open",void 0);const he=t.iv`
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
)}:host{--spectrum-listitem-selectable-padding-right:calc(var(--spectrum-global-dimension-size-100) + var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-listitem-icon-gap));width:var(--swc-menu-width)}:host(:focus){outline:none}::slotted(*){--swc-menu-width:100%}
`;function ge(t,e){return!!e&&(t===e||t.contains(e))}class ve extends u.o{constructor(){super(),this.isSubmenu=!1,this.label="",this.value="",this.valueSeparator=",",this.selected=[],this.selectedItems=[],this.childItemSet=new Set,this.focusedItemIndex=0,this.focusInItemIndex=0,this.selectedItemsMap=new Map,this._willUpdateItems=!1,this._notFirstUpdated=!1,this.cacheUpdated=Promise.resolve(),this.addEventListener("sp-menu-item-added-or-updated",this.onSelectableItemAddedOrUpdated),this.addEventListener("sp-menu-item-added-or-updated",this.onFocusableItemAddedOrUpdated,{capture:!0}),this.addEventListener("sp-menu-item-removed",this.removeChildItem),this.addEventListener("click",this.onClick),this.addEventListener("focusin",this.handleFocusin)}static get styles(){return[he]}get childItems(){return this.cachedChildItems||(this.cachedChildItems=this.updateCachedMenuItems()),this.cachedChildItems}updateCachedMenuItems(){this.cachedChildItems=[];const t=this.menuSlot?this.menuSlot.assignedElements({flatten:!0}):[];for(const e of t){const t=e instanceof be?[e]:[...e.querySelectorAll("*")];for(const e of t)this.childItemSet.has(e)&&this.cachedChildItems.push(e)}return this.cachedChildItems}get childRole(){if("listbox"===this.resolvedRole)return"option";switch(this.resolvedSelects){case"single":return"menuitemradio";case"multiple":return"menuitemcheckbox";default:return"menuitem"}}get ownRole(){return"menu"}onFocusableItemAddedOrUpdated(t){var e;t.item.menuData.focusRoot&&(this.tabIndex=-1),t.focusRoot=this,this.addChildItem(t.item),"inherit"===this.selects?(this.resolvedSelects="inherit",this.resolvedRole=(null===(e=t.currentAncestorWithSelects)||void 0===e?void 0:e.getAttribute("role"))||this.getAttribute("role")||void 0):this.selects?(this.resolvedRole=this.getAttribute("role")||void 0,this.resolvedSelects=this.selects,t.currentAncestorWithSelects=this):(this.resolvedRole=this.getAttribute("role")||void 0,this.resolvedSelects="none"===this.resolvedRole?"ignore":"none")}onSelectableItemAddedOrUpdated(t){"single"!==this.resolvedSelects&&"multiple"!==this.resolvedSelects&&(this.selects||"ignore"===this.resolvedSelects)||t.item.menuData.selectionRoot||(t.item.setRole(this.childRole),t.selectionRoot=this)}addChildItem(t){this.childItemSet.add(t),this.handleItemsChanged()}async removeChildItem(t){this.childItemSet.delete(t.item),this.cachedChildItems=void 0,t.item.focused&&(this.handleItemsChanged(),await this.updateComplete,this.focus())}focus({preventScroll:t}={}){if(!this.childItems.length||this.childItems.every((t=>t.disabled)))return;if(this.childItems.some((t=>t.menuData.focusRoot!==this)))return void super.focus({preventScroll:t});this.focusMenuItemByOffset(0),super.focus({preventScroll:t});const e=this.querySelector("[selected]");e&&!t&&e.scrollIntoView({block:"nearest"})}onClick(t){if(t.defaultPrevented)return;const e=t.composedPath().find((t=>t instanceof Element&&t.getAttribute("role")===this.childRole));(null==e?void 0:e.href)&&e.href.length||(null==e?void 0:e.menuData.selectionRoot)===this&&this.childItems.length&&(t.preventDefault(),e.hasSubmenu||e.open||(this.selectOrToggleItem(e),this.prepareToCleanUp()))}handleFocusin(t){var e;const o=ge(this,t.relatedTarget);if(o||this.childItems.some((t=>t.menuData.focusRoot!==this)))return;const r=this.getRootNode().activeElement,a=(null===(e=this.childItems[this.focusedItemIndex])||void 0===e?void 0:e.menuData.selectionRoot)||this;if((r!==a||!o)&&(a.focus({preventScroll:!0}),r&&0===this.focusedItemIndex)){const t=this.childItems.findIndex((t=>t===r));t>0&&this.focusMenuItemByOffset(t)}this.startListeningToKeyboard()}startListeningToKeyboard(){this.addEventListener("keydown",this.handleKeydown),this.addEventListener("focusout",this.handleFocusout)}handleFocusout(t){if(ge(this,t.relatedTarget))t.composedPath()[0].focused=!1;else{if(this.stopListeningToKeyboard(),t.target===this&&this.childItems.some((t=>t.menuData.focusRoot===this))){const t=this.childItems[this.focusedItemIndex];t&&(t.focused=!1)}this.removeAttribute("aria-activedescendant")}}stopListeningToKeyboard(){this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)}async selectOrToggleItem(t){const e=this.resolvedSelects,o=new Map(this.selectedItemsMap),r=this.selected.slice(),a=this.selectedItems.slice(),i=this.value;if(this.childItems[this.focusedItemIndex].focused=!1,this.focusedItemIndex=this.childItems.indexOf(t),this.forwardFocusVisibleToItem(t),"multiple"===e){this.selectedItemsMap.has(t)?this.selectedItemsMap.delete(t):this.selectedItemsMap.set(t,!0);const e=[],o=[];this.childItemSet.forEach((t=>{t.menuData.selectionRoot===this&&this.selectedItemsMap.has(t)&&(e.push(t.value),o.push(t))})),this.selected=e,this.selectedItems=o,this.value=this.selected.join(this.valueSeparator)}else this.selectedItemsMap.clear(),this.selectedItemsMap.set(t,!0),this.value=t.value,this.selected=[t.value],this.selectedItems=[t];if(await this.updateComplete,!this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0})))return this.selected=r,this.selectedItems=a,this.selectedItemsMap=o,void(this.value=i);if("single"===e){for(const e of o.keys())e!==t&&(e.selected=!1);t.selected=!0}else"multiple"===e&&(t.selected=!t.selected)}navigateWithinMenu(t){const{code:e}=t,o=this.childItems[this.focusedItemIndex],r="ArrowDown"===e?1:-1,a=this.focusMenuItemByOffset(r);a!==o&&(t.preventDefault(),a.scrollIntoView({block:"nearest"}))}navigateBetweenRelatedMenus(t){const e=this.isLTR&&"ArrowRight"===t||!this.isLTR&&"ArrowLeft"===t,o=this.isLTR&&"ArrowLeft"===t||!this.isLTR&&"ArrowRight"===t;if(e){const t=this.childItems[this.focusedItemIndex];t.hasSubmenu&&(this.blur(),t.openOverlay())}else o&&this.isSubmenu&&this.dispatchEvent(new Event("close",{bubbles:!0}))}handleKeydown(t){var e;const{code:o}=t;if("Tab"!==o){if("Space"===o){const t=this.childItems[this.focusedItemIndex];if(t.hasSubmenu)return this.blur(),void t.openOverlay()}"Space"!==o&&"Enter"!==o?"ArrowDown"!==o&&"ArrowUp"!==o?this.navigateBetweenRelatedMenus(o):this.navigateWithinMenu(t):null===(e=this.childItems[this.focusedItemIndex])||void 0===e||e.click()}else this.prepareToCleanUp()}focusMenuItemByOffset(t){const e=t||1;this.childItems[this.focusedItemIndex].focused=!1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+t)%this.childItems.length;let o=this.childItems[this.focusedItemIndex],r=this.childItems.length;for(;o.disabled&&r;)r-=1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+e)%this.childItems.length,o=this.childItems[this.focusedItemIndex];return(null==o?void 0:o.disabled)||this.forwardFocusVisibleToItem(o),o}prepareToCleanUp(){document.addEventListener("focusout",(()=>{requestAnimationFrame((()=>{const t=this.childItems[this.focusedItemIndex];t&&(t.focused=!1,this.updateSelectedItemIndex())}))}),{once:!0})}updateSelectedItemIndex(){let t=0;const e=new Map,o=[],r=[];let a=this.childItems.length;for(;a;){a-=1;const i=this.childItems[a];i.menuData.selectionRoot===this&&(i.selected&&(t=a,e.set(i,!0),o.unshift(i.value),r.unshift(i)),a!==t&&(i.focused=!1))}r.map(((t,e)=>{e>0&&(t.focused=!1)})),this.selectedItemsMap=e,this.selected=o,this.selectedItems=r,this.value=this.selected.join(this.valueSeparator),this.focusedItemIndex=t,this.focusInItemIndex=t}handleItemsChanged(){if(this.cachedChildItems=void 0,!this._willUpdateItems){let t=()=>{};this.cacheUpdated=new Promise((e=>t=e)),this._willUpdateItems=!0,window.requestAnimationFrame((()=>{void 0===this.cachedChildItems&&(this.updateSelectedItemIndex(),this.updateItemFocus()),this._willUpdateItems=!1,t()}))}}updateItemFocus(){if(0==this.childItems.length)return;const t=this.childItems[this.focusInItemIndex];this.getRootNode().activeElement===t.menuData.focusRoot&&this.forwardFocusVisibleToItem(t)}forwardFocusVisibleToItem(t){t.menuData.focusRoot===this&&(t.focused=this.hasVisibleFocusInTree(),this.setAttribute("aria-activedescendant",t.id),t.menuData.selectionRoot&&t.menuData.selectionRoot!==this&&t.menuData.selectionRoot.focus())}render(){return t.dy`
            <slot></slot>
        `}firstUpdated(t){if(super.firstUpdated(t),!this.hasAttribute("tabindex")){const t=this.getAttribute("role");"group"===t?this.tabIndex=-1:"none"!==t&&(this.tabIndex=0)}const e=[new Promise((t=>requestAnimationFrame((()=>t(!0)))))];[...this.children].forEach((t=>{"sp-menu-item"===t.localName&&e.push(t.updateComplete)})),this.childItemsUpdated=Promise.all(e)}updated(t){super.updated(t),t.has("selects")&&this._notFirstUpdated&&this.selectsChanged(),t.has("label")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label")),this._notFirstUpdated=!0}selectsChanged(){const t=[new Promise((t=>requestAnimationFrame((()=>t(!0)))))];this.childItemSet.forEach((e=>{t.push(e.triggerUpdate())})),this.childItemsUpdated=Promise.all(t)}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role",this.ownRole),this.updateComplete.then((()=>this.updateItemFocus()))}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.childItemsUpdated,await this.cacheUpdated,t}}(0,n.gn)([(0,d.Cb)({type:String,reflect:!0})],ve.prototype,"label",void 0),(0,n.gn)([(0,d.Cb)({type:String,reflect:!0})],ve.prototype,"selects",void 0),(0,n.gn)([(0,d.Cb)({type:String})],ve.prototype,"value",void 0),(0,n.gn)([(0,d.Cb)({type:String,attribute:"value-separator"})],ve.prototype,"valueSeparator",void 0),(0,n.gn)([(0,d.Cb)({attribute:!1})],ve.prototype,"selected",void 0),(0,n.gn)([(0,d.Cb)({attribute:!1})],ve.prototype,"selectedItems",void 0),(0,n.gn)([(0,d.IO)("slot:not([name])")],ve.prototype,"menuSlot",void 0),customElements.define("sp-menu",ve);const fe=t.iv`
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
`;class xe extends u.o{constructor(){super(...arguments),this.open=!1}static get styles(){return[fe]}render(){return t.dy``}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],xe.prototype,"open",void 0),customElements.define("sp-underlay",xe);var ye=s(171);class ke{constructor(t,e){this.key=Symbol("match-media-key"),this.matches=!1,this.host=t,this.media=window.matchMedia(e),this.matches=this.media.matches,this.onChange=this.onChange.bind(this),t.addController(this)}hostConnected(){this.media.addEventListener("change",this.onChange)}hostDisconnected(){this.media.removeEventListener("change",this.onChange)}onChange(t){this.matches!==t.matches&&(this.matches=t.matches,this.host.requestUpdate(this.key,!this.matches))}}const we=t.iv`
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
)}
`,ze=t.iv`
:host([dir=ltr]){left:0}:host([dir=rtl]){right:0}:host{bottom:0;display:flex;justify-content:center;position:fixed;width:100%;z-index:2}@media (max-width:375px){.spectrum-Tray{border-radius:var(--spectrum-tray-border-radius,0)}}.tray{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]) .tray{opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host{--spectrum-dialog-confirm-exit-animation-delay:0ms;--spectrum-tray-margin-top:64px}:host([dir=ltr]) .spectrum-Tray-wrapper{left:0}:host([dir=rtl]) .spectrum-Tray-wrapper{right:0}.spectrum-Tray-wrapper{bottom:0;display:flex;justify-content:center;position:fixed;width:100%;z-index:2}.tray{border-radius:var(
--spectrum-tray-full-width-border-radius,var(--spectrum-alias-border-radius-regular)
) var(
--spectrum-tray-full-width-border-radius,var(--spectrum-alias-border-radius-regular)
) var(--spectrum-tray-border-radius,0) var(--spectrum-tray-border-radius,0);max-height:calc(100vh - var(--spectrum-tray-margin-top));max-width:var(--spectrum-tray-max-width,375px);min-height:var(
--spectrum-tray-min-height,var(--spectrum-global-dimension-static-size-800)
);outline:none;overflow:auto;padding:var(--spectrum-tray-padding-y,0) var(
--spectrum-tray-padding-x,var(--spectrum-global-dimension-static-size-100)
);transform:translateY(100%);transition:opacity var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0ms),visibility 0ms linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0ms) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
)),transform var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0ms);width:var(--spectrum-tray-width,100%)}:host([open]) .tray{transform:translateY(0);transition:transform var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
),opacity var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
)}@media (max-width:375px){.tray{border-radius:var(--spectrum-tray-border-radius,0)}}:host{align-items:flex-end;max-height:var(--swc-visual-viewport-height);position:fixed!important}sp-underlay{touch-action:none}.tray{display:inline-flex;overscroll-behavior:contain;padding:var(--spectrum-tray-padding-y,0) var(--spectrum-tray-padding-x,0)}::slotted(.visually-hidden){clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}
`;class Ce extends u.o{constructor(){super(...arguments),this.open=!1,this.prefersMotion=new ke(this,"(prefers-reduced-motion: no-preference)"),this.transitionPromise=Promise.resolve()}static get styles(){return[we,ze]}focus(){const t=(0,ye.i)(this);t?t.focus():1===this.children.length?this.tray.focus():super.focus()}overlayWillCloseCallback(){return!!this.open&&(this.close(),!0)}close(){this.open=!1,this.prefersMotion.matches||this.dispatchClosed()}dispatchClosed(){this.dispatchEvent(new Event("close",{bubbles:!0}))}handleUnderlayTransitionend(){this.open||(this.dispatchClosed(),this.resolveTransitionPromise())}handleTrayTransitionend(){this.open&&this.resolveTransitionPromise()}update(t){t.has("open")&&void 0!==t.get("open")&&this.prefersMotion.matches&&(this.transitionPromise=new Promise((t=>this.resolveTransitionPromise=t))),super.update(t)}render(){return t.dy`
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
        `}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.transitionPromise,t}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Ce.prototype,"open",void 0),(0,n.gn)([(0,d.IO)(".tray")],Ce.prototype,"tray",void 0),customElements.define("sp-tray",Ce);const qe=t.iv`
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
`;class Ie extends u.o{constructor(){super(...arguments),this.dialog=!1,this.open=!1,this.placement="none",this.tip=!1}static get styles(){return[qe]}renderTip(){return t.dy`
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
        `}connectedCallback(){super.connectedCallback(),this.addEventListener("sp-overlay-query",this.onOverlayQuery)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sp-overlay-query",this.onOverlayQuery)}onOverlayQuery(t){if(!t.target)return;if(t.target!==this)return;const e=this.shadowRoot.querySelector("#tip");e&&(t.detail.overlayContentTipElement=e)}render(){return t.dy`
            <slot></slot>
            ${this.tip?this.renderTip():t.Ld}
        `}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Ie.prototype,"dialog",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Ie.prototype,"open",void 0),(0,n.gn)([(0,d.Cb)({reflect:!0})],Ie.prototype,"placement",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Ie.prototype,"tip",void 0),customElements.define("sp-popover",Ie);const Ee={s:"spectrum-UIIcon-ChevronDown75",m:"spectrum-UIIcon-ChevronDown100",l:"spectrum-UIIcon-ChevronDown200",xl:"spectrum-UIIcon-ChevronDown300"};class Ae extends(v(k)){constructor(){super(),this.isMobile=new ke(this,"(max-width: 700px) and (hover: none) and (pointer: coarse), (max-height: 700px) and (hover: none) and (pointer: coarse)"),this.disabled=!1,this.focused=!1,this.invalid=!1,this.open=!1,this.readonly=!1,this.selects="single",this.menuItems=[],this.placement="bottom-start",this.quiet=!1,this.value="",this.listRole="listbox",this.itemRole="option",this.onKeydown=t=>{this.focused=!0,"ArrowDown"!==t.code&&"ArrowUp"!==t.code||(t.preventDefault(),this.toggle(!0))},this.overlayOpenCallback=async()=>{this.updateMenuItems(),await this.itemsUpdated,await this.optionsMenu.updateComplete,requestAnimationFrame((()=>this.menuStateResolver()))},this.overlayCloseCallback=async()=>{this.restoreChildren&&(this.restoreChildren(),this.restoreChildren=void 0),this.close(),requestAnimationFrame((()=>this.menuStateResolver()))},this._willUpdateItems=!1,this.itemsUpdated=Promise.resolve(),this.menuStatePromise=Promise.resolve(),this.selectionPromise=Promise.resolve(),this.onKeydown=this.onKeydown.bind(this)}get target(){return this.button}get focusElement(){return this.open?this.optionsMenu:this.button}forceFocusVisible(){this.focused=!0}onButtonBlur(){this.focused=!1,this.target.removeEventListener("keydown",this.onKeydown)}onButtonClick(){this.toggle()}focus(t){super.focus(t),!this.disabled&&this.focusElement&&(this.focused=this.hasVisibleFocusInTree())}onHelperFocus(){this.focused=!0,this.button.focus()}onButtonFocus(){this.target.addEventListener("keydown",this.onKeydown)}handleChange(t){t.stopPropagation();const e=t.target,[o]=e.selectedItems;this.setValueFromItem(o,t)}async setValueFromItem(t,e){const o=this.selectedItem,r=this.value;if(this.selectedItem=t,this.value=t.value,this.open=!1,await this.updateComplete,!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0,composed:!0})))return e&&e.preventDefault(),this.selectedItem.selected=!1,o&&(o.selected=!0),this.selectedItem=o,this.value=r,void(this.open=!0);o&&(o.selected=!1),t.selected=!!this.selects}toggle(t){this.readonly||(this.open=void 0!==t?t:!this.open)}close(){this.readonly||(this.open=!1)}async generatePopover(e){this.popoverFragment||(this.popoverFragment=document.createDocumentFragment()),(0,t.sY)(this.renderPopover,this.popoverFragment,{host:this}),this.popover=this.popoverFragment.children[0],this.optionsMenu=this.popover.children[1],e&&console.warn(`Deprecation Notice: You no longer need to provide an sp-menu child to ${this.tagName.toLowerCase()}. Any styling or attributes on the sp-menu will be ignored.`)}async openMenu(){let t=[];const e=this.querySelector(":scope > sp-menu");await this.generatePopover(e),t=e?Array.from(e.children):Array.from(this.children).filter((t=>!t.hasAttribute("slot"))),0!==t.length?(this.restoreChildren=(0,se.G)(t,this.optionsMenu,{position:"beforeend",prepareCallback:t=>(this.value===t.value&&(t.selected=!0),t=>{void 0!==t.focused&&(t.focused=!1)})}),this.sizePopover(this.popover),this.closeOverlay=Se.openOverlay(this,"modal",this.popover,{placement:this.isMobile.matches?"none":this.placement,receivesFocus:"auto"})):this.menuStateResolver()}sizePopover(t){this.isMobile.matches?t.style.setProperty("--swc-menu-width","100%"):this.quiet||t.style.setProperty("min-width",`${this.offsetWidth}px`)}async closeMenu(){if(this.closeOverlay){const t=this.closeOverlay;delete this.closeOverlay,(await t)()}}get selectedItemContent(){return this.selectedItem?this.selectedItem.itemChildren:{icon:[],content:[]}}renderLabelContent(e){return this.value&&this.selectedItem?e:t.dy`
            <slot name="label">${this.label}</slot>
        `}get buttonContent(){const e={"visually-hidden":"only"===this.icons&&!!this.value,placeholder:!this.value};return[t.dy`
                <span id="icon" ?hidden=${"none"===this.icons}>
                    ${this.selectedItemContent.icon}
                </span>
                <span id="label" class=${ae(e)}>
                    ${this.renderLabelContent(this.selectedItemContent.content)}
                </span>
                ${this.invalid?t.dy`
                          <sp-icon-alert
                              class="validation-icon"
                          ></sp-icon-alert>
                      `:t.Ld}
                <sp-icon-chevron100
                    class="picker ${Ee[this.size]}"
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
        `}updateMenuItems(t){if(this.open&&"sp-menu-item-removed"===(null==t?void 0:t.type))return;if(this._willUpdateItems)return;this._willUpdateItems=!0,(null==t?void 0:t.item)===this.selectedItem&&this.requestUpdate();let e=()=>{};this.itemsUpdated=new Promise((t=>e=t)),window.requestAnimationFrame((async()=>{this.open?(await this.optionsMenu.updateComplete,this.menuItems=this.optionsMenu.childItems):this.menuItems=[...this.querySelectorAll("sp-menu-item")],this.manageSelection(),e(),this._willUpdateItems=!1}))}async manageSelection(){let t;await this.menuStatePromise,this.selectionPromise=new Promise((t=>this.selectionResolver=t)),this.menuItems.forEach((e=>{this.value!==e.value||e.disabled?e.selected=!1:t=e})),t?(t.selected=!!this.selects,this.selectedItem=t):(this.value="",this.selectedItem=void 0),this.open&&(await this.optionsMenu.updateComplete,this.optionsMenu.updateSelectedItemIndex()),this.selectionResolver()}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.menuStatePromise,await this.itemsUpdated,await this.selectionPromise,t}connectedCallback(){this.updateMenuItems(),this.addEventListener("sp-menu-item-added-or-updated",this.updateMenuItems),this.addEventListener("sp-menu-item-removed",this.updateMenuItems),super.connectedCallback()}disconnectedCallback(){this.close(),super.disconnectedCallback()}}Ae.openOverlay=async(t,e,o,r)=>await ce(t,e,o,r),(0,n.gn)([(0,d.IO)("#button")],Ae.prototype,"button",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Ae.prototype,"disabled",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Ae.prototype,"focused",void 0),(0,n.gn)([(0,d.Cb)({type:String,reflect:!0})],Ae.prototype,"icons",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Ae.prototype,"invalid",void 0),(0,n.gn)([(0,d.Cb)()],Ae.prototype,"label",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Ae.prototype,"open",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Ae.prototype,"readonly",void 0),(0,n.gn)([(0,d.Cb)()],Ae.prototype,"placement",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Ae.prototype,"quiet",void 0),(0,n.gn)([(0,d.Cb)({type:String})],Ae.prototype,"value",void 0),(0,n.gn)([(0,d.Cb)({attribute:!1})],Ae.prototype,"selectedItem",void 0);class Se extends Ae{constructor(){super(...arguments),this.onKeydown=t=>{const{code:e}=t;if(this.focused=!0,!e.startsWith("Arrow")||this.readonly)return;if(t.preventDefault(),"ArrowUp"===e||"ArrowDown"===e)return void this.toggle(!0);const o=this.selectedItem?this.menuItems.indexOf(this.selectedItem):-1,r=this.value&&"ArrowRight"!==e?-1:1;let a=o+r;for(;this.menuItems[a]&&this.menuItems[a].disabled;)a+=r;this.menuItems[a]&&!this.menuItems[a].disabled&&(this.value&&a===o||this.setValueFromItem(this.menuItems[a]))}}static get styles(){return[ie,Dt]}}customElements.define("sp-picker",Se),customElements.define("sp-menu-item",be);const $e=t.iv`
:host([size=s]){--spectrum-divider-height:var(
--spectrum-divider-s-height,var(--spectrum-global-dimension-size-10)
);--spectrum-divider-vertical-height:var(
--spectrum-divider-s-vertical-height,var(--spectrum-global-dimension-size-10)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-s-vertical-width,var(--spectrum-global-dimension-size-10)
)}:host([size=m]){--spectrum-divider-height:var(
--spectrum-divider-m-height,var(--spectrum-global-dimension-size-25)
);--spectrum-divider-vertical-height:var(
--spectrum-divider-m-vertical-height,var(--spectrum-global-dimension-size-25)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-m-vertical-width,var(--spectrum-global-dimension-size-25)
)}:host([size=l]){--spectrum-divider-height:var(
--spectrum-divider-l-height,var(--spectrum-global-dimension-size-50)
);--spectrum-divider-vertical-height:var(
--spectrum-divider-l-vertical-height,var(--spectrum-global-dimension-size-50)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-l-vertical-width,var(--spectrum-global-dimension-size-50)
)}:host{--spectrum-divider-vertical-height:100%}:host{border-width:medium;border:var(--spectrum-divider-height);border-radius:var(--spectrum-divider-height);height:var(--spectrum-divider-height);overflow:visible;width:100%}:host([vertical]){height:var(
--spectrum-divider-vertical-height
);width:var(--spectrum-divider-vertical-width)}:host{--spectrum-divider-l-background-color:var(
--spectrum-global-color-gray-800
);--spectrum-divider-m-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-divider-s-background-color:var(
--spectrum-global-color-gray-300
)}:host([size=l]){background-color:var(
--spectrum-divider-l-background-color,var(--spectrum-global-color-gray-800)
)}:host([size=m]){background-color:var(
--spectrum-divider-m-background-color,var(--spectrum-global-color-gray-300)
)}:host([size=s]){background-color:var(
--spectrum-divider-s-background-color,var(--spectrum-global-color-gray-300)
)}:host{display:block}hr{border:none;margin:0}
`;class _e extends(v(u.o,{validSizes:["s","m","l"]})){constructor(){super(...arguments),this.vertical=!1}render(){return t.dy``}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","separator")}updated(t){super.updated(t),t.has("vertical")&&(this.vertical?this.setAttribute("aria-orientation","vertical"):this.removeAttribute("aria-orientation"))}}_e.styles=[$e],(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],_e.prototype,"vertical",void 0),customElements.define("sp-divider",_e);const Te=t.iv`
:host([size=s]){--spectrum-helptext-neutral-textonly-text-padding-bottom:var(
--spectrum-helptext-s-neutral-textonly-text-padding-bottom
);--spectrum-helptext-neutral-texticon-text-size:var(
--spectrum-helptext-s-neutral-texticon-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-helptext-neutral-texticon-icon-gap:var(
--spectrum-helptext-s-neutral-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-helptext-negative-texticon-icon-padding-top:var(
--spectrum-helptext-s-negative-texticon-icon-padding-top,var(--spectrum-global-dimension-size-50)
);--spectrum-helptext-negative-texticon-icon-padding-bottom:var(
--spectrum-helptext-s-negative-texticon-icon-padding-bottom,var(--spectrum-global-dimension-size-50)
);--spectrum-helptext-neutral-textonly-text-transform:var(
--spectrum-helptext-s-neutral-textonly-text-transform,none
);--spectrum-helptext-neutral-textonly-text-padding-top:var(
--spectrum-helptext-s-neutral-textonly-text-padding-top,var(--spectrum-global-dimension-static-size-50)
);--spectrum-helptext-neutral-textonly-text-line-height:var(
--spectrum-helptext-s-neutral-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-helptext-neutral-textonly-text-letter-spacing:var(
--spectrum-helptext-s-neutral-textonly-text-letter-spacing,var(--spectrum-global-font-letter-spacing-none)
)}:host([size=m]){--spectrum-helptext-neutral-textonly-text-padding-bottom:var(
--spectrum-helptext-m-neutral-textonly-text-padding-bottom
);--spectrum-helptext-neutral-texticon-text-size:var(
--spectrum-helptext-m-neutral-texticon-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-helptext-neutral-texticon-icon-gap:var(
--spectrum-helptext-m-neutral-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-helptext-negative-texticon-icon-padding-top:var(
--spectrum-helptext-m-negative-texticon-icon-padding-top,var(--spectrum-global-dimension-size-40)
);--spectrum-helptext-negative-texticon-icon-padding-bottom:var(
--spectrum-helptext-m-negative-texticon-icon-padding-bottom,var(--spectrum-global-dimension-size-40)
);--spectrum-helptext-neutral-textonly-text-transform:var(
--spectrum-helptext-m-neutral-textonly-text-transform,none
);--spectrum-helptext-neutral-textonly-text-padding-top:var(
--spectrum-helptext-m-neutral-textonly-text-padding-top,var(--spectrum-global-dimension-static-size-50)
);--spectrum-helptext-neutral-textonly-text-line-height:var(
--spectrum-helptext-m-neutral-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-helptext-neutral-textonly-text-letter-spacing:var(
--spectrum-helptext-m-neutral-textonly-text-letter-spacing,var(--spectrum-global-font-letter-spacing-none)
)}:host([size=l]){--spectrum-helptext-neutral-texticon-text-size:var(
--spectrum-helptext-l-neutral-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-helptext-neutral-texticon-icon-gap:var(
--spectrum-helptext-l-neutral-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-helptext-negative-texticon-icon-padding-top:var(
--spectrum-helptext-l-negative-texticon-icon-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-helptext-negative-texticon-icon-padding-bottom:var(
--spectrum-helptext-l-negative-texticon-icon-padding-bottom,var(--spectrum-global-dimension-size-75)
);--spectrum-helptext-neutral-textonly-text-transform:var(
--spectrum-helptext-l-neutral-textonly-text-transform,none
);--spectrum-helptext-neutral-textonly-text-padding-top:var(
--spectrum-helptext-l-neutral-textonly-text-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-helptext-neutral-textonly-text-padding-bottom:var(
--spectrum-helptext-l-neutral-textonly-text-padding-bottom,var(--spectrum-global-dimension-size-115)
);--spectrum-helptext-neutral-textonly-text-line-height:var(
--spectrum-helptext-l-neutral-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-helptext-neutral-textonly-text-letter-spacing:var(
--spectrum-helptext-l-neutral-textonly-text-letter-spacing,var(--spectrum-global-font-letter-spacing-none)
)}:host([size=xl]){--spectrum-helptext-neutral-textonly-text-padding-top:var(
--spectrum-helptext-xl-neutral-textonly-text-padding-top
);--spectrum-helptext-neutral-texticon-text-size:var(
--spectrum-helptext-xl-neutral-texticon-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-helptext-neutral-texticon-icon-gap:var(
--spectrum-helptext-xl-neutral-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-helptext-negative-texticon-icon-padding-top:var(
--spectrum-helptext-xl-negative-texticon-icon-padding-top,var(--spectrum-global-dimension-size-115)
);--spectrum-helptext-negative-texticon-icon-padding-bottom:var(
--spectrum-helptext-xl-negative-texticon-icon-padding-bottom,var(--spectrum-global-dimension-size-115)
);--spectrum-helptext-neutral-textonly-text-transform:var(
--spectrum-helptext-xl-neutral-textonly-text-transform,none
);--spectrum-helptext-neutral-textonly-text-padding-bottom:var(
--spectrum-helptext-xl-neutral-textonly-text-padding-bottom,var(--spectrum-global-dimension-size-130)
);--spectrum-helptext-neutral-textonly-text-line-height:var(
--spectrum-helptext-xl-neutral-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-helptext-neutral-textonly-text-letter-spacing:var(
--spectrum-helptext-xl-neutral-textonly-text-letter-spacing,var(--spectrum-global-font-letter-spacing-none)
)}:host{display:flex;font-size:var(--spectrum-helptext-neutral-texticon-text-size)}:host([dir=ltr]) .icon{margin-right:var(
--spectrum-helptext-neutral-texticon-icon-gap
)}:host([dir=rtl]) .icon{margin-left:var(
--spectrum-helptext-neutral-texticon-icon-gap
)}.icon{flex-shrink:0;padding-bottom:var(
--spectrum-helptext-negative-texticon-icon-padding-bottom
);padding-top:var(
--spectrum-helptext-negative-texticon-icon-padding-top
)}:host([dir=ltr]) .text{margin-right:var(
--spectrum-helptext-neutral-texticon-icon-gap
)}:host([dir=rtl]) .text{margin-left:var(
--spectrum-helptext-neutral-texticon-icon-gap
)}.text{letter-spacing:var(
--spectrum-helptext-neutral-textonly-text-letter-spacing
);line-height:var(--spectrum-helptext-neutral-textonly-text-line-height);padding-bottom:var(
--spectrum-helptext-neutral-textonly-text-padding-bottom
);padding-top:var(
--spectrum-helptext-neutral-textonly-text-padding-top
);text-transform:var(--spectrum-helptext-neutral-textonly-text-transform)}:host([variant=neutral]){--spectrum-helptext-m-texticon-text-color-disabled:var(
--spectrum-helptext-m-neutral-texticon-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-helptext-m-texticon-icon-color-disabled:var(
--spectrum-helptext-m-neutral-texticon-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
);--spectrum-helptext-m-texticon-text-color:var(
--spectrum-helptext-m-neutral-texticon-text-color,var(--spectrum-alias-label-text-color)
);--spectrum-helptext-m-texticon-icon-color:var(
--spectrum-helptext-m-neutral-texticon-icon-color,var(--spectrum-alias-icon-color)
)}:host([variant=negative]){--spectrum-helptext-m-texticon-text-color-disabled:var(
--spectrum-helptext-m-negative-texticon-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-helptext-m-texticon-icon-color-disabled:var(
--spectrum-helptext-m-negative-texticon-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
);--spectrum-helptext-m-texticon-text-color:var(
--spectrum-helptext-m-negative-texticon-text-color,var(--spectrum-semantic-negative-text-color-small)
);--spectrum-helptext-m-texticon-icon-color:var(
--spectrum-helptext-m-negative-texticon-icon-color,var(--spectrum-semantic-negative-icon-color)
)}.icon{color:var(
--spectrum-helptext-m-texticon-icon-color
)}.text{color:var(
--spectrum-helptext-m-texticon-text-color
)}:host([disabled]) .icon{color:var(
--spectrum-helptext-m-texticon-icon-color-disabled
)}:host([disabled]) .text{color:var(
--spectrum-helptext-m-texticon-text-color-disabled
)}
`;class Fe extends(v(u.o)){constructor(){super(...arguments),this.icon=!1,this.variant="neutral"}static get styles(){return[Te]}render(){return t.dy`
            ${"negative"===this.variant&&this.icon?t.dy`
                      <sp-icon-alert class="icon"></sp-icon-alert>
                  `:t.Ld}
            <div class="text"><slot></slot></div>
        `}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Fe.prototype,"icon",void 0),(0,n.gn)([(0,d.Cb)({reflect:!0})],Fe.prototype,"variant",void 0),customElements.define("sp-help-text",Fe);const Ue=t.iv`
:host{--spectrum-accordion-item-title-padding-y:var(
--spectrum-global-dimension-size-150
);--spectrum-accordion-animation-duration:var(
--spectrum-global-animation-duration-100,130ms
)}:host{display:block;list-style:none;margin:0;padding:0}
`;class Be extends u.o{constructor(){super(...arguments),this.allowMultiple=!1,this.focusGroupController=new w(this,{direction:"vertical",elements:()=>this.items,isFocusableElement:t=>!t.disabled})}static get styles(){return[Ue]}get items(){return[...this.defaultNodes||[]].filter((t=>void 0!==t.tagName))}focus(){this.focusGroupController.focus()}async onToggle(t){const e=t.target;if(await 0,this.allowMultiple||t.defaultPrevented)return;const o=[...this.items];o&&!o.length||o.forEach((t=>{t!==e&&(t.open=!1)}))}handleSlotchange(){this.focusGroupController.clearElementCache()}render(){return t.dy`
            <slot
                @slotchange=${this.handleSlotchange}
                @sp-accordion-item-toggle=${this.onToggle}
            ></slot>
        `}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"allow-multiple"})],Be.prototype,"allowMultiple",void 0),(0,n.gn)([(0,d.vZ)()],Be.prototype,"defaultNodes",void 0),customElements.define("sp-accordion",Be);const Le=t.iv`
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
)}:host([dir=ltr]) #header{text-align:left}:host([dir=rtl]) #header{text-align:right}#header{align-items:center;-webkit-appearance:none;appearance:none;background-color:inherit;border:0;box-sizing:border-box;cursor:pointer;display:flex;font-family:inherit;font-size:var(
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
`;class Pe extends k{constructor(){super(...arguments),this.open=!1,this.label="",this.disabled=!1}static get styles(){return[Le,Dt]}get focusElement(){return this.shadowRoot.querySelector("#header")}onClick(){this.disabled||this.toggle()}toggle(){this.open=!this.open,this.dispatchEvent(new CustomEvent("sp-accordion-item-toggle",{bubbles:!0,composed:!0,cancelable:!0}))||(this.open=!this.open)}render(){return t.dy`
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
        `}updated(t){super.updated(t),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Pe.prototype,"open",void 0),(0,n.gn)([(0,d.Cb)({type:String,reflect:!0})],Pe.prototype,"label",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Pe.prototype,"disabled",void 0),customElements.define("sp-accordion-item",Pe);const He=t.iv`
:host{--spectrum-sidenav-item-padding-y:var(
--spectrum-global-dimension-size-65
)}:host{list-style-type:none;margin:0;padding:0}:host{--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,var(--spectrum-global-font-weight-regular)
);display:block;width:240px}:host([variant=multilevel]){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-multilevel-main-item-font-weight,var(--spectrum-global-font-weight-bold)
)}
`,Me=t.iv`
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
`;class De extends(L(k)){constructor(){super(...arguments),this.value=void 0,this.selected=!1,this.expanded=!1}static get styles(){return[Me]}get parentSideNav(){return this._parentSidenav||(this._parentSidenav=this.closest("sp-sidenav")),this._parentSidenav}get hasChildren(){return!!this.querySelector("sp-sidenav-item")}get depth(){let t=0,e=this.parentElement;for(;e instanceof De;)t++,e=e.parentElement;return t}handleSideNavSelect(t){this.selected=t.target===this}handleClick(t){!this.href&&t&&t.preventDefault(),this.disabled||(this.hasChildren?this.expanded=!this.expanded:this.value&&this.announceSelected(this.value))}announceSelected(t){const e=new CustomEvent("sidenav-select",{bubbles:!0,composed:!0,detail:{value:t}});this.dispatchEvent(e)}click(){this.handleClick()}get focusElement(){return this.shadowRoot.querySelector("#item-link")}update(t){this.hasAttribute("slot")||(this.slot="descendant"),super.update(t)}render(){return t.dy`
            <a
                href=${this.href||"#"}
                target=${(0,f.o)(this.target)}
                download=${(0,f.o)(this.download)}
                rel=${(0,f.o)(this.rel)}
                data-level="${this.depth}"
                @click="${this.handleClick}"
                id="item-link"
                aria-current=${(0,f.o)(this.selected&&this.href?"page":void 0)}
            >
                <slot name="icon"></slot>
                ${this.label}
                <slot></slot>
            </a>
            ${this.expanded?t.dy`
                      <slot name="descendant"></slot>
                  `:t.dy``}
        `}updated(t){this.hasChildren&&this.expanded&&!this.selected&&(this.focusElement.tabIndex=-1),super.updated(t)}connectedCallback(){super.connectedCallback(),this.startTrackingSelection()}disconnectedCallback(){this.stopTrackingSelection(),super.disconnectedCallback()}async startTrackingSelection(){const t=this.parentSideNav;t&&(await t.updateComplete,t.startTrackingSelectionForItem(this),this.selected=null!=this.value&&this.value===t.value)}stopTrackingSelection(){const t=this.parentSideNav;t&&t.stopTrackingSelectionForItem(this),this._parentSidenav=void 0}}(0,n.gn)([(0,d.Cb)()],De.prototype,"value",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],De.prototype,"selected",void 0),(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],De.prototype,"expanded",void 0);const Re=t.iv`
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
`;class je extends u.o{constructor(){super(...arguments),this.label=""}static get styles(){return[Me,Re]}update(t){this.hasAttribute("slot")||(this.slot="descendant"),super.update(t)}render(){return t.dy`
            <h2 id="heading">${this.label}</h2>
            <div id="list" aria-labelledby="heading">
                <slot name="descendant"></slot>
            </div>
        `}}(0,n.gn)([(0,d.Cb)({reflect:!0})],je.prototype,"label",void 0);class Oe extends k{constructor(){super(...arguments),this.items=new Set,this.rovingTabindexController=new z(this,{focusInIndex:t=>t.findIndex((t=>this.value?!t.disabled&&!this.isDisabledChild(t)&&t.value===this.value:!t.disabled&&!this.isDisabledChild(t))),direction:"vertical",elements:()=>[...this.querySelectorAll("sp-sidenav-item")],isFocusableElement:t=>!t.disabled&&!this.isDisabledChild(t)}),this.manageTabIndex=!1,this.value=void 0}static get styles(){return[He]}startTrackingSelectionForItem(t){this.items.add(t),this.rovingTabindexController.clearElementCache()}stopTrackingSelectionForItem(t){this.items.delete(t),this.rovingTabindexController.clearElementCache()}handleSelect(t){if(t.stopPropagation(),this.value===t.detail.value)return;const e=this.value;this.value=t.detail.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))?this.items.forEach((e=>e.handleSideNavSelect(t))):(this.value=e,t.target.selected=!1,t.preventDefault())}focus(){this.rovingTabindexController.focus()}blur(){this.focusElement!==this&&super.blur()}click(){this.focusElement!==this&&super.click()}get focusElement(){return this.rovingTabindexController.focusInElement||this}isDisabledChild(t){if(t.disabled)return!0;let e=t.parentElement;for(;e instanceof je||!e.disabled&&e instanceof De&&e.expanded;)e=e.parentElement;return e!==this}handleSlotchange(){this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage()}render(){return t.dy`
            <nav @sidenav-select=${this.handleSelect}>
                <slot
                    name="descendant"
                    @slotchange=${this.handleSlotchange}
                ></slot>
            </nav>
        `}firstUpdated(t){super.firstUpdated(t);const e=this.querySelector("[selected]");e&&(this.value=e.value)}updated(t){super.updated(t),t.has("manageTabIndex")&&(this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage())}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"manage-tab-index"})],Oe.prototype,"manageTabIndex",void 0),(0,n.gn)([(0,d.Cb)({reflect:!0})],Oe.prototype,"value",void 0),customElements.define("sp-sidenav",Oe),customElements.define("sp-sidenav-heading",je),customElements.define("sp-sidenav-item",De);const Ne=t.iv`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host(:disabled){cursor:default}@media (forced-colors:active){:host{--spectrum-alias-component-icon-color-default:ButtonText;--spectrum-alias-component-icon-color-disabled:GrayText;--spectrum-alias-component-icon-color-down:Highlight;--spectrum-alias-component-icon-color-hover:Highlight;--spectrum-alias-component-icon-color-key-focus:Highlight;--spectrum-alias-component-icon-color-mouse-focus:Highlight;--spectrum-closebutton-m-black-background-color-down:ButtonFace;--spectrum-closebutton-m-black-background-color-hover:ButtonFace;--spectrum-closebutton-m-black-background-color-key-focus:ButtonFace;--spectrum-closebutton-m-black-background-color-mouse-focus:ButtonFace;--spectrum-closebutton-m-black-uiicon-color:ButtonText;--spectrum-closebutton-m-black-uiicon-color-disabled:GrayText;--spectrum-closebutton-m-black-uiicon-color-down:Highlight;--spectrum-closebutton-m-black-uiicon-color-hover:Highlight;--spectrum-closebutton-m-black-uiicon-color-key-focus:Highlight;--spectrum-closebutton-m-black-uiicon-color-mouse-focus:Highlight;--spectrum-closebutton-m-white-background-color-down:ButtonFace;--spectrum-closebutton-m-white-background-color-hover:ButtonFace;--spectrum-closebutton-m-white-background-color-key-focus:ButtonFace;--spectrum-closebutton-m-white-background-color-mouse-focus:ButtonFace;--spectrum-closebutton-m-white-uiicon-color:ButtonText;--spectrum-closebutton-m-white-uiicon-color-disabled:GrayText;--spectrum-closebutton-m-white-uiicon-color-down:Highlight;--spectrum-closebutton-m-white-uiicon-color-hover:Highlight;--spectrum-closebutton-m-white-uiicon-color-key-focus:Highlight;--spectrum-closebutton-m-white-uiicon-color-mouse-focus:Highlight}:host(.focus-visible):after{border-radius:100%;bottom:0;box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-alias-component-icon-color-default,var(--spectrum-alias-icon-color)
);content:"";display:block;forced-color-adjust:none;left:0;margin:var(
--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)
);position:absolute;right:0;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host(:focus-visible):after{border-radius:100%;bottom:0;box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-alias-component-icon-color-default,var(--spectrum-alias-icon-color)
);content:"";display:block;forced-color-adjust:none;left:0;margin:var(
--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)
);position:absolute;right:0;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}}:host{--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-white-rgb:255,255,255;border-color:transparent;border-width:0;color:inherit;position:relative}:host{--spectrum-closebutton-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap-emphasized,var(--spectrum-global-dimension-static-size-25)
);--spectrum-closebutton-focus-ring-size:var(
--spectrum-alias-component-focusring-size-emphasized,var(--spectrum-global-dimension-static-size-25)
);--spectrum-closebutton-focus-ring-color:var(
--spectrum-alias-focus-ring-color,var(--spectrum-alias-focus-color)
);transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host:after{border-radius:calc(var(--spectrum-CloseButton-size) + var(--spectrum-closebutton-focus-ring-gap));bottom:0;content:"";left:0;margin:calc(var(--spectrum-closebutton-focus-ring-gap)*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host(.focus-visible){box-shadow:none!important}:host(:focus-visible){box-shadow:none!important}:host(.focus-visible):after{box-shadow:0 0 0 var(--spectrum-closebutton-focus-ring-size) var(--spectrum-closebutton-focus-ring-color)}:host(:focus-visible):after{box-shadow:0 0 0 var(--spectrum-closebutton-focus-ring-size) var(--spectrum-closebutton-focus-ring-color)}:host([variant=white]){--spectrum-closebutton-focus-ring-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=black]){--spectrum-closebutton-focus-ring-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host{align-items:center;border-radius:var(--spectrum-CloseButton-size);display:inline-flex;flex-direction:row;justify-content:center;padding:0}:host([size=s]){--spectrum-CloseButton-size:var(--spectrum-global-dimension-size-300);border-radius:var(
--spectrum-global-dimension-size-300
);height:var(--spectrum-global-dimension-size-300);width:var(--spectrum-global-dimension-size-300)}:host([size=m]){--spectrum-CloseButton-size:var(--spectrum-global-dimension-size-400);border-radius:var(
--spectrum-global-dimension-size-400
);height:var(--spectrum-global-dimension-size-400);width:var(--spectrum-global-dimension-size-400)}:host([size=l]){--spectrum-CloseButton-size:var(--spectrum-global-dimension-size-500);border-radius:var(
--spectrum-global-dimension-size-500
);height:var(--spectrum-global-dimension-size-500);width:var(--spectrum-global-dimension-size-500)}:host([size=xl]){--spectrum-CloseButton-size:var(--spectrum-global-dimension-size-600);border-radius:var(
--spectrum-global-dimension-size-600
);height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600)}:host(:disabled){background-color:transparent}:host(:disabled) .icon{color:var(
--spectrum-alias-component-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host(:not(:disabled)){background-color:transparent}:host(:not(:disabled):hover){background-color:var(
--spectrum-global-color-gray-200
)}:host(:not(:disabled):hover) .icon{color:var(
--spectrum-alias-component-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host(:not(:disabled)[active]){background-color:var(
--spectrum-global-color-gray-300
)}:host(:not(:disabled)[active]) .icon{color:var(
--spectrum-alias-component-icon-color-down,var(--spectrum-alias-icon-color-down)
)}:host(:not(:disabled).focus-visible){background-color:var(
--spectrum-global-color-gray-300
)}:host(:not(:disabled):focus-visible){background-color:var(
--spectrum-global-color-gray-300
)}:host(:not(:disabled).focus-visible) .icon{color:var(
--spectrum-alias-component-icon-color-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host(:not(:disabled):focus-visible) .icon{color:var(
--spectrum-alias-component-icon-color-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host(:not(:disabled)[focused]){background-color:var(
--spectrum-global-color-gray-300
)}:host(:not(:disabled)[focused]) .icon{color:var(
--spectrum-alias-component-icon-color-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host(:not(:disabled)) .icon{color:var(
--spectrum-alias-component-icon-color-default,var(--spectrum-alias-icon-color)
)}:host(:not(:disabled):focus) .icon{color:var(
--spectrum-alias-component-icon-color-mouse-focus,var(--spectrum-alias-icon-color-down)
)}:host(:not(:disabled).is-focused) .icon{color:var(
--spectrum-alias-component-icon-color-mouse-focus,var(--spectrum-alias-icon-color-down)
)}:host([variant=black]:not(:disabled)){background-color:transparent}:host([variant=black]:not(:disabled):hover){background-color:var(
--spectrum-closebutton-m-black-background-color-hover,rgba(0,0,0,.25)
)}:host([variant=black]:not(:disabled):hover) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-hover,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled)[active]){background-color:var(
--spectrum-closebutton-m-black-background-color-down,rgba(0,0,0,.4)
)}:host([variant=black]:not(:disabled)[active]) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-down,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled).focus-visible){background-color:var(
--spectrum-closebutton-m-black-background-color-mouse-focus,transparent
)}:host([variant=black]:not(:disabled):focus-visible){background-color:var(
--spectrum-closebutton-m-black-background-color-mouse-focus,transparent
)}:host([variant=black]:not(:disabled).focus-visible) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-mouse-focus,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled):focus-visible) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-mouse-focus,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled)[focused]){background-color:var(
--spectrum-closebutton-m-black-background-color-key-focus,rgba(0,0,0,.25)
)}:host([variant=black]:not(:disabled)[focused]) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-key-focus,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled)) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color,var(--spectrum-global-color-static-black)
)}:host([variant=black]:disabled) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-disabled,rgba(0,0,0,.4)
)}:host([variant=white]:not(:disabled)){background-color:transparent}:host([variant=white]:not(:disabled):hover){background-color:var(
--spectrum-closebutton-m-white-background-color-hover,hsla(0,0%,100%,.25)
)}:host([variant=white]:not(:disabled):hover) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled)[active]){background-color:var(
--spectrum-closebutton-m-white-background-color-down,hsla(0,0%,100%,.4)
)}:host([variant=white]:not(:disabled)[active]) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-down,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled).focus-visible){background-color:var(
--spectrum-closebutton-m-white-background-color-mouse-focus,transparent
)}:host([variant=white]:not(:disabled):focus-visible){background-color:var(
--spectrum-closebutton-m-white-background-color-mouse-focus,transparent
)}:host([variant=white]:not(:disabled).focus-visible) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-mouse-focus,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled):focus-visible) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-mouse-focus,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled)[focused]){background-color:var(
--spectrum-closebutton-m-white-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host([variant=white]:not(:disabled)[focused]) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled)) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color,var(--spectrum-global-color-static-white)
)}:host([variant=white]:disabled) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-disabled,hsla(0,0%,100%,.4)
)}.icon{margin:0}@media (forced-colors:active){:host{--spectrum-alias-component-icon-color-default:ButtonText;--spectrum-alias-component-icon-color-disabled:GrayText;--spectrum-alias-component-icon-color-down:Highlight;--spectrum-alias-component-icon-color-hover:Highlight;--spectrum-alias-component-icon-color-key-focus:Highlight;--spectrum-alias-component-icon-color-mouse-focus:Highlight;--spectrum-closebutton-m-black-background-color-down:ButtonFace;--spectrum-closebutton-m-black-background-color-hover:ButtonFace;--spectrum-closebutton-m-black-background-color-key-focus:ButtonFace;--spectrum-closebutton-m-black-background-color-mouse-focus:ButtonFace;--spectrum-closebutton-m-black-uiicon-color:ButtonText;--spectrum-closebutton-m-black-uiicon-color-disabled:GrayText;--spectrum-closebutton-m-black-uiicon-color-down:Highlight;--spectrum-closebutton-m-black-uiicon-color-hover:Highlight;--spectrum-closebutton-m-black-uiicon-color-key-focus:Highlight;--spectrum-closebutton-m-black-uiicon-color-mouse-focus:Highlight;--spectrum-closebutton-m-white-background-color-down:ButtonFace;--spectrum-closebutton-m-white-background-color-hover:ButtonFace;--spectrum-closebutton-m-white-background-color-key-focus:ButtonFace;--spectrum-closebutton-m-white-background-color-mouse-focus:ButtonFace;--spectrum-closebutton-m-white-uiicon-color:ButtonText;--spectrum-closebutton-m-white-uiicon-color-disabled:GrayText;--spectrum-closebutton-m-white-uiicon-color-down:Highlight;--spectrum-closebutton-m-white-uiicon-color-hover:Highlight;--spectrum-closebutton-m-white-uiicon-color-key-focus:Highlight;--spectrum-closebutton-m-white-uiicon-color-mouse-focus:Highlight}:host(.focus-visible):after{border-radius:100%;bottom:0;box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-alias-component-icon-color-default,var(--spectrum-alias-icon-color)
);content:"";display:block;forced-color-adjust:none;left:0;margin:var(
--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)
);position:absolute;right:0;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host(:focus-visible):after{border-radius:100%;bottom:0;box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-alias-component-icon-color-default,var(--spectrum-alias-icon-color)
);content:"";display:block;forced-color-adjust:none;left:0;margin:var(
--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)
);position:absolute;right:0;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}}
`;customElements.define("sp-icon-cross75",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.188 4l2.14-2.14A.84.84 0 106.141.672L4 2.812 1.86.672A.84.84 0 00.672 1.86L2.812 4 .672 6.14A.84.84 0 101.86 7.328L4 5.188l2.14 2.14A.84.84 0 107.328 6.14z"
    />
  </svg>`}}),customElements.define("sp-icon-cross100",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.238 4l2.456-2.457A.875.875 0 106.456.306L4 2.763 1.543.306A.875.875 0 00.306 1.544L2.763 4 .306 6.457a.875.875 0 101.238 1.237L4 5.237l2.456 2.457a.875.875 0 101.238-1.237z"
    />
  </svg>`}}),customElements.define("sp-icon-cross200",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.29 5l2.922-2.922a.911.911 0 00-1.29-1.29L5 3.712 2.078.789a.911.911 0 00-1.29 1.289L3.712 5 .79 7.922a.911.911 0 101.289 1.29L5 6.288 7.923 9.21a.911.911 0 001.289-1.289z"
    />
  </svg>`}}),customElements.define("sp-icon-cross300",class extends p{render(){return j(t.dy),R`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M7.344 6l3.395-3.396a.95.95 0 00-1.344-1.342L6 4.657 2.604 1.262a.95.95 0 00-1.342 1.342L4.657 6 1.262 9.396a.95.95 0 001.343 1.343L6 7.344l3.395 3.395a.95.95 0 001.344-1.344z"
    />
  </svg>`}});const Ve=t.iv`
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
`,Ge={s:()=>t.dy`
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
    `};class Ke extends(v(Y)){constructor(){super(...arguments),this.variant=""}static get styles(){return[...super.styles,Ne,Ve]}get buttonContent(){return[Ge[this.size]()]}}(0,n.gn)([(0,d.Cb)({reflect:!0})],Ke.prototype,"variant",void 0),customElements.define("sp-close-button",Ke),customElements.define("sp-icon-info",class extends p{render(){return g(t.dy),(({width:t=24,height:e=24,hidden:o=!1,title:r="Info"}={})=>h`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 36 36"
    width="${t}"
    aria-hidden="${o?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm-.3 4.3a2.718 2.718 0 0 1 2.864 2.824 2.664 2.664 0 0 1-2.864 2.863 2.705 2.705 0 0 1-2.864-2.864A2.717 2.717 0 0 1 17.7 6.3ZM22 27a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-6h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9h1a1 1 0 0 1 1 1Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}),customElements.define("sp-icon-checkmark-circle",class extends p{render(){return g(t.dy),(({width:t=24,height:e=24,hidden:o=!1,title:r="Checkmark Circle"}={})=>h`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${t}"
    height="${e}"
    viewBox="0 0 36 36"
    aria-hidden="${o?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm10.666 9.08L16.018 27.341a1.208 1.208 0 0 1-.875.461c-.024.002-.05.002-.073.002a1.2 1.2 0 0 1-.85-.351l-7.784-7.795a1.2 1.2 0 0 1 0-1.698l1.326-1.325a1.201 1.201 0 0 1 1.695 0l5.346 5.347L25.314 8.473A1.203 1.203 0 0 1 27 8.263l1.455 1.133a1.205 1.205 0 0 1 .211 1.684Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});const We=t.iv`
:host{--spectrum-toast-icon-padding-y:var(
--spectrum-global-dimension-size-85
);--spectrum-toast-neutral-content-padding-top:var(
--spectrum-global-dimension-size-65
);--spectrum-toast-content-padding-bottom:var(
--spectrum-global-dimension-size-65
);--spectrum-toast-button-margin-right:var(
--spectrum-global-dimension-size-130
)}:host([dir=ltr]){padding-right:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]){padding-left:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]){padding-left:var(
--spectrum-toast-neutral-padding-left,var(--spectrum-global-dimension-size-200)
)}:host([dir=rtl]){padding-right:var(
--spectrum-toast-neutral-padding-left,var(--spectrum-global-dimension-size-200)
)}:host{-webkit-font-smoothing:antialiased;align-items:stretch;border-radius:var(
--spectrum-toast-neutral-border-radius,var(--spectrum-alias-border-radius-regular)
);box-sizing:border-box;display:inline-flex;flex-direction:row;font-size:var(
--spectrum-toast-neutral-text-size,var(--spectrum-global-dimension-font-size-100)
);font-weight:var(
--spectrum-toast-neutral-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);padding-bottom:var(
--spectrum-toast-neutral-padding-y,var(--spectrum-global-dimension-size-100)
);padding-top:var(
--spectrum-toast-neutral-padding-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]) .type{margin-right:var(
--spectrum-toast-neutral-icon-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl]) .type{margin-left:var(
--spectrum-toast-neutral-icon-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=ltr]) .type{margin-left:0}:host([dir=rtl]) .type{margin-right:0}.type{flex-grow:0;flex-shrink:0;margin-bottom:var(--spectrum-toast-icon-padding-y);margin-top:var(--spectrum-toast-icon-padding-y)}:host([dir=ltr]) .content{padding-right:var(
--spectrum-toast-neutral-content-padding-right,var(--spectrum-global-dimension-size-200)
)}:host([dir=rtl]) .content{padding-left:var(
--spectrum-toast-neutral-content-padding-right,var(--spectrum-global-dimension-size-200)
)}:host([dir=ltr]) .content{padding-left:0}:host([dir=rtl]) .content{padding-right:0}:host([dir=ltr]) .content{text-align:left}:host([dir=rtl]) .content{text-align:right}.content{box-sizing:border-box;display:inline-block;flex:1 1 auto;font-size:var(
--spectrum-toast-info-text-size,var(--spectrum-global-dimension-font-size-100)
);font-weight:var(
--spectrum-toast-info-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);line-height:var(
--spectrum-toast-info-text-line-height,var(--spectrum-alias-component-text-line-height)
);padding-bottom:var(--spectrum-toast-content-padding-bottom);padding-top:var(
--spectrum-toast-neutral-content-padding-top,var(--spectrum-global-dimension-size-65)
)}.buttons{align-items:flex-start;display:flex;flex:0 0 auto}:host([dir=ltr]) .buttons .spectrum-ClearButton+.spectrum-ClearButton,:host([dir=ltr]) .buttons .spectrum-ClearButton+::slotted([slot=action]),:host([dir=ltr]) .buttons slot[name=action]+.spectrum-ClearButton,:host([dir=ltr]) .buttons slot[name=action]+::slotted([slot=action]){margin-left:var(
--spectrum-toast-neutral-button-gap-x,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .buttons .spectrum-ClearButton+.spectrum-ClearButton,:host([dir=rtl]) .buttons .spectrum-ClearButton+::slotted([slot=action]),:host([dir=rtl]) .buttons slot[name=action]+.spectrum-ClearButton,:host([dir=rtl]) .buttons slot[name=action]+::slotted([slot=action]){margin-right:var(
--spectrum-toast-neutral-button-gap-x,var(--spectrum-global-dimension-size-100)
)}.body{align-self:center;flex:1 1 auto}:host([dir=ltr]) .body ::slotted([slot=action]){float:right}:host([dir=rtl]) .body ::slotted([slot=action]){float:left}:host([dir=ltr]) .body ::slotted([slot=action]){margin-right:var(
--spectrum-toast-button-margin-right
)}:host([dir=rtl]) .body ::slotted([slot=action]){margin-left:var(
--spectrum-toast-button-margin-right
)}:host([dir=ltr]) .body+.buttons{padding-left:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .body+.buttons{padding-right:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]) .body+.buttons{border-left-width:1px}:host([dir=rtl]) .body+.buttons{border-right-width:1px}:host([dir=ltr]) .body+.buttons{border-left-style:solid}:host([dir=rtl]) .body+.buttons{border-right-style:solid}:host{background-color:var(
--spectrum-toast-neutral-background-color,var(--spectrum-semantic-neutral-background-color-default)
);color:var(
--spectrum-toast-neutral-background-color,var(--spectrum-semantic-neutral-background-color-default)
)}.content{color:var(
--spectrum-toast-neutral-text-color,var(--spectrum-global-color-static-white)
)}.type{color:#fff}:host([dir=ltr]) .buttons{border-left-color:hsla(0,0%,100%,.2)}:host([dir=rtl]) .buttons{border-right-color:hsla(0,0%,100%,.2)}:host([variant=error]),:host([variant=negative]){background-color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
);color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}:host([variant=error]) .closeButton.focus-visible:not(:active),:host([variant=negative]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}:host([variant=error]) .closeButton:focus-visible:not(:active),:host([variant=negative]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}:host([variant=info]){background-color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
);color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
)}:host([variant=info]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
)}:host([variant=info]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
)}:host([variant=positive]),:host([variant=success]){background-color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
);color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}:host([variant=positive]) .closeButton.focus-visible:not(:active),:host([variant=success]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}:host([variant=positive]) .closeButton:focus-visible:not(:active),:host([variant=success]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}@media (forced-colors:active){:host{border:1px solid transparent}}.content{line-height:1.5}:host(:not([open])){display:none}
`,Ye=["negative","positive","info","error","warning"];class Ze extends u.o{constructor(){super(...arguments),this.open=!1,this._timeout=null,this._variant="",this.countdownStart=0,this.nextCount=-1,this.doCountdown=t=>{this.countdownStart||(this.countdownStart=performance.now()),t-this.countdownStart>this._timeout?(this.shouldClose(),this.countdownStart=0):this.countdown()},this.countdown=()=>{cancelAnimationFrame(this.nextCount),this.nextCount=requestAnimationFrame(this.doCountdown)},this.holdCountdown=()=>{this.stopCountdown(),this.addEventListener("focusout",this.resumeCountdown)},this.resumeCountdown=()=>{this.removeEventListener("focusout",this.holdCountdown),this.countdown()}}static get styles(){return[We]}set timeout(t){const e=null!==typeof t&&t>0?Math.max(6e3,t):null,o=this.timeout;e&&this.countdownStart&&(this.countdownStart=performance.now()),this._timeout=e,this.requestUpdate("timeout",o)}get timeout(){return this._timeout}set variant(t){if(t===this.variant)return;const e=this.variant;Ye.includes(t)?(this.setAttribute("variant",t),this._variant=t):(this.removeAttribute("variant"),this._variant=""),this.requestUpdate("variant",e)}get variant(){return this._variant}renderIcon(e){switch(e){case"info":return t.dy`
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
        `}updated(t){super.updated(t),t.has("open")&&(this.open?this.timeout&&this.startCountdown():this.timeout&&this.stopCountdown()),t.has("timeout")&&(null!==this.timeout&&this.open?this.startCountdown():this.stopCountdown())}}(0,n.gn)([(0,d.Cb)({type:Boolean,reflect:!0})],Ze.prototype,"open",void 0),(0,n.gn)([(0,d.Cb)({type:Number})],Ze.prototype,"timeout",null),(0,n.gn)([(0,d.Cb)({type:String})],Ze.prototype,"variant",null),customElements.define("sp-toast",Ze)})()})();