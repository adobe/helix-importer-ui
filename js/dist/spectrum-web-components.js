/*! For license information please see spectrum-web-components.js.LICENSE.txt */
(()=>{"use strict";var t,e,r,o,s={321:(t,e,r)=>{r.d(e,{o:()=>a});var o=r(392);const s=new Set;new MutationObserver((()=>{const t="rtl"===document.documentElement.dir?document.documentElement.dir:"ltr";s.forEach((e=>{e.setAttribute("dir",t)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const c=t=>void 0!==t.startManagingContentDirection||"SP-THEME"===t.tagName;class a extends(function(t){return class extends t{get isLTR(){return"ltr"===this.dir}hasVisibleFocusInTree(){const t=((t=document)=>{var e;let r=t.activeElement;for(;null!=r&&r.shadowRoot&&r.shadowRoot.activeElement;)r=r.shadowRoot.activeElement;const o=r?[r]:[];for(;r;){const t=r.assignedSlot||r.parentElement||(null==(e=r.getRootNode())?void 0:e.host);t&&o.push(t),r=t}return o})(this.getRootNode())[0];if(!t)return!1;try{return t.matches(":focus-visible")||t.matches(".focus-visible")}catch(e){return t.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let t=this.assignedSlot||this.parentNode;for(;t!==document.documentElement&&!c(t);)t=t.assignedSlot||t.parentNode||t.host;if(this.dir="rtl"===t.dir?t.dir:this.dir||"ltr",t===document.documentElement)s.add(this);else{const{localName:e}=t;e.search("-")>-1&&!customElements.get(e)?customElements.whenDefined(e).then((()=>{t.startManagingContentDirection(this)})):t.startManagingContentDirection(this)}this._dirParent=t}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?s.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}}(o.oi)){}a.VERSION="0.39.4"},763:(t,e,r)=>{function o(t,e,r){const o=t.getAttribute(e);let s=o?o.split(/\s+/):[];s=s.filter((t=>!r.find((e=>t===e)))),s.length?t.setAttribute(e,s.join(" ")):t.removeAttribute(e)}function s(t,e,r){const s=Array.isArray(r)?r:[r],c=t.getAttribute(e),a=c?c.split(/\s+/):[];return s.every((t=>a.indexOf(t)>-1))?()=>{}:(a.push(...s),t.setAttribute(e,a.join(" ")),()=>o(t,e,s))}r.d(e,{H:()=>o,q:()=>s})},200:(t,e,r)=>{function o(t,e){window.__swc,customElements.define(t,e)}r.d(e,{N:()=>o})},259:(t,e,r)=>{r.d(e,{j:()=>s,m:()=>o});const o=Symbol("element resolver updated");class s{constructor(t,{selector:e}={selector:""}){this._element=null,this._selector="",this.mutationCallback=t=>{let e=!1;t.forEach((t=>{if(!e){if("childList"===t.type){const r=this.element&&[...t.removedNodes].includes(this.element),o=!!this.selector&&[...t.addedNodes].some(this.elementIsSelected);e=e||r||o}if("attributes"===t.type){const r=t.target===this.element,o=!!this.selector&&this.elementIsSelected(t.target);e=e||r||o}}})),e&&this.resolveElement()},this.elementIsSelected=t=>{var e;return this.selectorIsId?(null==t?void 0:t.id)===this.selectorAsId:null==(e=null==t?void 0:t.matches)?void 0:e.call(t,this.selector)},this.host=t,this.selector=e,this.observer=new MutationObserver(this.mutationCallback),this.host.addController(this)}get element(){return this._element}set element(t){if(t===this.element)return;const e=this.element;this._element=t,this.host.requestUpdate(o,e)}get selector(){return this._selector}set selector(t){t!==this.selector&&(this.releaseElement(),this._selector=t,this.resolveElement())}get selectorAsId(){return this.selector.slice(1)}get selectorIsId(){return!!this.selector&&this.selector.startsWith("#")}hostConnected(){this.resolveElement(),this.observer.observe(this.host.getRootNode(),{subtree:!0,childList:!0,attributes:!0})}hostDisconnected(){this.releaseElement(),this.observer.disconnect()}resolveElement(){if(!this.selector)return void this.releaseElement();const t=this.host.getRootNode();this.element=this.selectorIsId?t.getElementById(this.selectorAsId):t.querySelector(this.selector)}releaseElement(){this.element=null}}},954:(t,e,r)=>{r.d(e,{l8:()=>s,q$:()=>o});const o="(max-width: 700px) and (hover: none) and (pointer: coarse), (max-height: 700px) and (hover: none) and (pointer: coarse)";class s{constructor(t,e){this.key=Symbol("match-media-key"),this.matches=!1,this.host=t,this.host.addController(this),this.media=window.matchMedia(e),this.matches=this.media.matches,this.onChange=this.onChange.bind(this),t.addController(this)}hostConnected(){var t;null==(t=this.media)||t.addEventListener("change",this.onChange)}hostDisconnected(){var t;null==(t=this.media)||t.removeEventListener("change",this.onChange)}onChange(t){this.matches!==t.matches&&(this.matches=t.matches,this.host.requestUpdate(this.key,!this.matches))}}},250:(t,e,r)=>{function o(t){return"undefined"!=typeof window&&null!=window.navigator&&t.test(window.navigator.platform)}function s(){return o(/^iPhone/)}function c(){return s()||o(/^iPad/)||o(/^Mac/)&&navigator.maxTouchPoints>1}function a(){return t=/Android/,"undefined"!=typeof window&&null!=window.navigator&&t.test(window.navigator.userAgent);var t}r.d(e,{Dt:()=>a,IN:()=>s,gn:()=>c})},875:(t,e,r)=>{r.d(e,{XM:()=>s,Xe:()=>c,pX:()=>o});const o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>(...e)=>({_$litDirective$:t,values:e});class c{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},692:(t,e,r)=>{var o;r.d(e,{Jb:()=>S,Ld:()=>E,_$LH:()=>F,dy:()=>I,sY:()=>R});const s=window,c=s.trustedTypes,a=c?c.createPolicy("lit-html",{createHTML:t=>t}):void 0,i="$lit$",n=`lit$${(Math.random()+"").slice(9)}$`,l="?"+n,u=`<${l}>`,d=document,m=()=>d.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,h=Array.isArray,b=t=>h(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),g="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,k=/>/g,y=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),x=/'/g,w=/"/g,z=/^(?:script|style|textarea|title)$/i,C=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),I=C(1),S=(C(2),Symbol.for("lit-noChange")),E=Symbol.for("lit-nothing"),$=new WeakMap,A=d.createTreeWalker(d,129,null,!1);function j(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(e):e}const q=(t,e)=>{const r=t.length-1,o=[];let s,c=2===e?"<svg>":"",a=v;for(let e=0;e<r;e++){const r=t[e];let l,d,m=-1,p=0;for(;p<r.length&&(a.lastIndex=p,d=a.exec(r),null!==d);)p=a.lastIndex,a===v?"!--"===d[1]?a=f:void 0!==d[1]?a=k:void 0!==d[2]?(z.test(d[2])&&(s=RegExp("</"+d[2],"g")),a=y):void 0!==d[3]&&(a=y):a===y?">"===d[0]?(a=null!=s?s:v,m=-1):void 0===d[1]?m=-2:(m=a.lastIndex-d[2].length,l=d[1],a=void 0===d[3]?y:'"'===d[3]?w:x):a===w||a===x?a=y:a===f||a===k?a=v:(a=y,s=void 0);const h=a===y&&t[e+1].startsWith("/>")?" ":"";c+=a===v?r+u:m>=0?(o.push(l),r.slice(0,m)+i+r.slice(m)+n+h):r+n+(-2===m?(o.push(void 0),e):h)}return[j(t,c+(t[r]||"<?>")+(2===e?"</svg>":"")),o]};class _{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let s=0,a=0;const u=t.length-1,d=this.parts,[p,h]=q(t,e);if(this.el=_.createElement(p,r),A.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=A.nextNode())&&d.length<u;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(i)||e.startsWith(n)){const r=h[a++];if(t.push(e),void 0!==r){const t=o.getAttribute(r.toLowerCase()+i).split(n),e=/([.?@])?(.*)/.exec(r);d.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?P:"?"===e[1]?O:"@"===e[1]?B:D})}else d.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(z.test(o.tagName)){const t=o.textContent.split(n),e=t.length-1;if(e>0){o.textContent=c?c.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],m()),A.nextNode(),d.push({type:2,index:++s});o.append(t[e],m())}}}else if(8===o.nodeType)if(o.data===l)d.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(n,t+1));)d.push({type:7,index:s}),t+=n.length-1}s++}}static createElement(t,e){const r=d.createElement("template");return r.innerHTML=t,r}}function T(t,e,r=t,o){var s,c,a,i;if(e===S)return e;let n=void 0!==o?null===(s=r._$Co)||void 0===s?void 0:s[o]:r._$Cl;const l=p(e)?void 0:e._$litDirective$;return(null==n?void 0:n.constructor)!==l&&(null===(c=null==n?void 0:n._$AO)||void 0===c||c.call(n,!1),void 0===l?n=void 0:(n=new l(t),n._$AT(t,r,o)),void 0!==o?(null!==(a=(i=r)._$Co)&&void 0!==a?a:i._$Co=[])[o]=n:r._$Cl=n),void 0!==n&&(e=T(t,n._$AS(t,e.values),n,o)),e}class H{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:r},parts:o}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:d).importNode(r,!0);A.currentNode=s;let c=A.nextNode(),a=0,i=0,n=o[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new L(c,c.nextSibling,this,t):1===n.type?e=new n.ctor(c,n.name,n.strings,this,t):6===n.type&&(e=new M(c,this,t)),this._$AV.push(e),n=o[++i]}a!==(null==n?void 0:n.index)&&(c=A.nextNode(),a++)}return A.currentNode=d,s}v(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class L{constructor(t,e,r,o){var s;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cp=null===(s=null==o?void 0:o.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),p(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==S&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):b(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==E&&p(this._$AH)?this._$AA.nextSibling.data=t:this.$(d.createTextNode(t)),this._$AH=t}g(t){var e;const{values:r,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=_.createElement(j(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.v(r);else{const t=new H(s,this),e=t.u(this.options);t.v(r),this.$(e),this._$AH=t}}_$AC(t){let e=$.get(t.strings);return void 0===e&&$.set(t.strings,e=new _(t)),e}T(t){h(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const s of t)o===e.length?e.push(r=new L(this.k(m()),this.k(m()),this,this.options)):r=e[o],r._$AI(s),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class D{constructor(t,e,r,o,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,o){const s=this.strings;let c=!1;if(void 0===s)t=T(this,t,e,0),c=!p(t)||t!==this._$AH&&t!==S,c&&(this._$AH=t);else{const o=t;let a,i;for(t=s[0],a=0;a<s.length-1;a++)i=T(this,o[r+a],e,a),i===S&&(i=this._$AH[a]),c||(c=!p(i)||i!==this._$AH[a]),i===E?t=E:t!==E&&(t+=(null!=i?i:"")+s[a+1]),this._$AH[a]=i}c&&!o&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class P extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}const U=c?c.emptyScript:"";class O extends D{constructor(){super(...arguments),this.type=4}j(t){t&&t!==E?this.element.setAttribute(this.name,U):this.element.removeAttribute(this.name)}}class B extends D{constructor(t,e,r,o,s){super(t,e,r,o,s),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=T(this,t,e,0))&&void 0!==r?r:E)===S)return;const o=this._$AH,s=t===E&&o!==E||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,c=t!==E&&(o===E||s);s&&this.element.removeEventListener(this.name,this,o),c&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class M{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const F={O:i,P:n,A:l,C:1,M:q,L:H,R:b,D:T,I:L,V:D,H:O,N:B,U:P,F:M},N=s.litHtmlPolyfillSupport;null==N||N(_,L),(null!==(o=s.litHtmlVersions)&&void 0!==o?o:s.litHtmlVersions=[]).push("2.8.0");const R=(t,e,r)=>{var o,s;const c=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:e;let a=c._$litPart$;if(void 0===a){const t=null!==(s=null==r?void 0:r.renderBefore)&&void 0!==s?s:null;c._$litPart$=a=new L(e.insertBefore(m(),t),t,void 0,null!=r?r:{})}return a._$AI(t),a}},338:(t,e,r)=>{r.d(e,{Cb:()=>c,IO:()=>n,NH:()=>d,vZ:()=>m,SB:()=>a});const o=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}},s=(t,e,r)=>{e.constructor.createProperty(r,t)};function c(t){return(e,r)=>void 0!==r?s(t,e,r):o(t,e)}function a(t){return c({...t,state:!0})}const i=({finisher:t,descriptor:e})=>(r,o)=>{var s;if(void 0===o){const o=null!==(s=r.originalKey)&&void 0!==s?s:r.key,c=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(r.key)}:{...r,key:o};return null!=t&&(c.finisher=function(e){t(e,o)}),c}{const s=r.constructor;void 0!==e&&Object.defineProperty(r,o,e(o)),null==t||t(s,o)}};function n(t,e){return i({descriptor:r=>{const o={get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof r?Symbol():"__"+r;o.get=function(){var r,o;return void 0===this[e]&&(this[e]=null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(t))&&void 0!==o?o:null),this[e]}}return o}})}var l;const u=null!=(null===(l=window.HTMLSlotElement)||void 0===l?void 0:l.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function d(t){const{slot:e,selector:r}=null!=t?t:{};return i({descriptor:o=>({get(){var o;const s="slot"+(e?`[name=${e}]`:":not([name])"),c=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(s),a=null!=c?u(c,t):[];return r?a.filter((t=>t.matches(r))):a},enumerable:!0,configurable:!0})})}function m(t,e,r){let o,s=t;return"object"==typeof t?(s=t.slot,o=t):o={flatten:e},r?d({slot:s,flatten:e,selector:r}):i({descriptor:t=>({get(){var t,e;const r="slot"+(s?`[name=${s}]`:":not([name])"),c=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(r);return null!==(e=null==c?void 0:c.assignedNodes(o))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},796:(t,e,r)=>{r.d(e,{o:()=>s});var o=r(692);const s=t=>null!=t?t:o.Ld},959:(t,e,r)=>{r.d(e,{V:()=>i});var o=r(692),s=r(875);const c="important",a=" !"+c,i=(0,s.XM)(class extends s.Xe{constructor(t){var e;if(super(t),t.type!==s.pX.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const o=t[r];return null==o?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(t,[e]){const{style:r}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?r.removeProperty(t):r[t]="")}));for(const t in e){const o=e[t];if(null!=o){this.ht.add(t);const e="string"==typeof o&&o.endsWith(a);t.includes("-")||e?r.setProperty(t,e?o.slice(0,-11):o,e?c:""):r[t]=o}}return o.Jb}})},392:(t,e,r)=>{r.d(e,{oi:()=>z,iv:()=>n,dy:()=>w.dy,Ld:()=>w.Ld,FV:()=>s});const o=window,s=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),a=new WeakMap;class i{constructor(t,e,r){if(this._$cssResult$=!0,r!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new i(r,t,c)},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,c))(e)})(t):t;var u;const d=window,m=d.trustedTypes,p=m?m.emptyScript:"",h=d.reactiveElementPolyfillSupport,b={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},g=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:g},f="finalized";class k extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const o=this._$Ep(r,e);void 0!==o&&(this._$Ev.set(o,r),t.push(o))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),s=o.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=e.cssText,t.appendChild(r)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=v){var o;const s=this.constructor._$Ep(t,r);if(void 0!==s&&!0===r.reflect){const c=(void 0!==(null===(o=r.converter)||void 0===o?void 0:o.toAttribute)?r.converter:b).toAttribute(e,r.type);this._$El=t,null==c?this.removeAttribute(s):this.setAttribute(s,c),this._$El=null}}_$AK(t,e){var r;const o=this.constructor,s=o._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=o.getPropertyOptions(s),c="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(r=t.converter)||void 0===r?void 0:r.fromAttribute)?t.converter:b;this._$El=s,this[s]=c.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,r){let o=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}k[f]=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:k}),(null!==(u=d.reactiveElementVersions)&&void 0!==u?u:d.reactiveElementVersions=[]).push("1.6.3");var y,x,w=r(692);class z extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,w.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return w.Jb}}z.finalized=!0,z._$litElement$=!0,null===(y=globalThis.litElementHydrateSupport)||void 0===y||y.call(globalThis,{LitElement:z});const C=globalThis.litElementPolyfillSupport;null==C||C({LitElement:z}),(null!==(x=globalThis.litElementVersions)&&void 0!==x?x:globalThis.litElementVersions=[]).push("3.3.3")}},c={};function a(t){var e=c[t];if(void 0!==e)return e.exports;var r=c[t]={exports:{}};return s[t].call(r.exports,r,r.exports,a),r.exports}a.m=s,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,a.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var s=Object.create(null);a.r(s);var c={};t=t||[null,e({}),e([]),e(e)];for(var i=2&o&&r;"object"==typeof i&&!~t.indexOf(i);i=e(i))Object.getOwnPropertyNames(i).forEach((t=>c[t]=()=>r[t]));return c.default=()=>r,a.d(s,c),s},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,r)=>(a.f[r](t,e),e)),[])),a.u=t=>t+".spectrum-web-components.js",a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r={},o="helix-import-ui:",a.l=(t,e,s,c)=>{if(r[t])r[t].push(e);else{var i,n;if(void 0!==s)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==o+s){i=d;break}}i||(n=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",o+s),i.src=t),r[t]=[e];var m=(e,o)=>{i.onerror=i.onload=null,clearTimeout(p);var s=r[t];if(delete r[t],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((t=>t(o))),e)return e(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),n&&document.head.appendChild(i)}},a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.p="./js/dist/",(()=>{var t={179:0};a.f.j=(e,r)=>{var o=a.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var s=new Promise(((r,s)=>o=t[e]=[r,s]));r.push(o[2]=s);var c=a.p+a.u(e),i=new Error;a.l(c,(r=>{if(a.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var s=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+c+")",i.name="ChunkLoadError",i.type=s,i.request=c,o[1](i)}}),"chunk-"+e,e)}};var e=(e,r)=>{var o,s,[c,i,n]=r,l=0;if(c.some((e=>0!==t[e]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);n&&n(a)}for(e&&e(r);l<c.length;l++)s=c[l],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0},r=globalThis.webpackChunkhelix_import_ui=globalThis.webpackChunkhelix_import_ui||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),(()=>{var t=a(392);const e=t.iv`
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
);--spectrum-well-background-color:hsla(0,0%,92%,.02);--spectrum-well-border-color:hsla(0,0%,100%,.05)}:host,:root{color-scheme:dark}:host,:root{--spectrum-overlay-opacity:0.5;--spectrum-drop-shadow-color-rgb:0,0,0;--spectrum-drop-shadow-color-opacity:0.5;--spectrum-drop-shadow-color:rgba(var(--spectrum-drop-shadow-color-rgb),var(--spectrum-drop-shadow-color-opacity));--spectrum-background-base-color:var(--spectrum-gray-50);--spectrum-background-layer-1-color:var(--spectrum-gray-75);--spectrum-background-layer-2-color:var(--spectrum-gray-100);--spectrum-neutral-background-color-default:var(--spectrum-gray-400);--spectrum-neutral-background-color-hover:var(--spectrum-gray-300);--spectrum-neutral-background-color-down:var(--spectrum-gray-200);--spectrum-neutral-background-color-key-focus:var(--spectrum-gray-300);--spectrum-neutral-subdued-background-color-default:var(
--spectrum-gray-400
);--spectrum-neutral-subdued-background-color-hover:var(--spectrum-gray-300);--spectrum-neutral-subdued-background-color-down:var(--spectrum-gray-200);--spectrum-neutral-subdued-background-color-key-focus:var(
--spectrum-gray-300
);--spectrum-accent-background-color-default:var(
--spectrum-accent-color-500
);--spectrum-accent-background-color-hover:var(--spectrum-accent-color-400);--spectrum-accent-background-color-down:var(--spectrum-accent-color-300);--spectrum-accent-background-color-key-focus:var(
--spectrum-accent-color-400
);--spectrum-informative-background-color-default:var(
--spectrum-informative-color-500
);--spectrum-informative-background-color-hover:var(
--spectrum-informative-color-400
);--spectrum-informative-background-color-down:var(
--spectrum-informative-color-300
);--spectrum-informative-background-color-key-focus:var(
--spectrum-informative-color-400
);--spectrum-negative-background-color-default:var(
--spectrum-negative-color-500
);--spectrum-negative-background-color-hover:var(
--spectrum-negative-color-400
);--spectrum-negative-background-color-down:var(
--spectrum-negative-color-300
);--spectrum-negative-background-color-key-focus:var(
--spectrum-negative-color-400
);--spectrum-positive-background-color-default:var(
--spectrum-positive-color-500
);--spectrum-positive-background-color-hover:var(
--spectrum-positive-color-400
);--spectrum-positive-background-color-down:var(
--spectrum-positive-color-300
);--spectrum-positive-background-color-key-focus:var(
--spectrum-positive-color-400
);--spectrum-notice-background-color-default:var(
--spectrum-notice-color-800
);--spectrum-gray-background-color-default:var(--spectrum-gray-700);--spectrum-red-background-color-default:var(--spectrum-red-700);--spectrum-orange-background-color-default:var(--spectrum-orange-800);--spectrum-yellow-background-color-default:var(--spectrum-yellow-1000);--spectrum-chartreuse-background-color-default:var(
--spectrum-chartreuse-900
);--spectrum-celery-background-color-default:var(--spectrum-celery-800);--spectrum-green-background-color-default:var(--spectrum-green-700);--spectrum-seafoam-background-color-default:var(--spectrum-seafoam-700);--spectrum-cyan-background-color-default:var(--spectrum-cyan-700);--spectrum-blue-background-color-default:var(--spectrum-blue-700);--spectrum-indigo-background-color-default:var(--spectrum-indigo-700);--spectrum-purple-background-color-default:var(--spectrum-purple-700);--spectrum-fuchsia-background-color-default:var(--spectrum-fuchsia-700);--spectrum-magenta-background-color-default:var(--spectrum-magenta-700);--spectrum-neutral-visual-color:var(--spectrum-gray-600);--spectrum-accent-visual-color:var(--spectrum-accent-color-900);--spectrum-informative-visual-color:var(--spectrum-informative-color-900);--spectrum-negative-visual-color:var(--spectrum-negative-color-700);--spectrum-notice-visual-color:var(--spectrum-notice-color-900);--spectrum-positive-visual-color:var(--spectrum-positive-color-800);--spectrum-gray-visual-color:var(--spectrum-gray-600);--spectrum-red-visual-color:var(--spectrum-red-700);--spectrum-orange-visual-color:var(--spectrum-orange-900);--spectrum-yellow-visual-color:var(--spectrum-yellow-1100);--spectrum-chartreuse-visual-color:var(--spectrum-chartreuse-900);--spectrum-celery-visual-color:var(--spectrum-celery-800);--spectrum-green-visual-color:var(--spectrum-green-800);--spectrum-seafoam-visual-color:var(--spectrum-seafoam-800);--spectrum-cyan-visual-color:var(--spectrum-cyan-900);--spectrum-blue-visual-color:var(--spectrum-blue-900);--spectrum-indigo-visual-color:var(--spectrum-indigo-900);--spectrum-purple-visual-color:var(--spectrum-purple-900);--spectrum-fuchsia-visual-color:var(--spectrum-fuchsia-900);--spectrum-magenta-visual-color:var(--spectrum-magenta-900);--spectrum-opacity-checkerboard-square-dark:var(--spectrum-gray-800);--spectrum-gray-50-rgb:29,29,29;--spectrum-gray-50:rgba(var(--spectrum-gray-50-rgb));--spectrum-gray-75-rgb:38,38,38;--spectrum-gray-75:rgba(var(--spectrum-gray-75-rgb));--spectrum-gray-100-rgb:50,50,50;--spectrum-gray-100:rgba(var(--spectrum-gray-100-rgb));--spectrum-gray-200-rgb:63,63,63;--spectrum-gray-200:rgba(var(--spectrum-gray-200-rgb));--spectrum-gray-300-rgb:84,84,84;--spectrum-gray-300:rgba(var(--spectrum-gray-300-rgb));--spectrum-gray-400-rgb:112,112,112;--spectrum-gray-400:rgba(var(--spectrum-gray-400-rgb));--spectrum-gray-500-rgb:144,144,144;--spectrum-gray-500:rgba(var(--spectrum-gray-500-rgb));--spectrum-gray-600-rgb:178,178,178;--spectrum-gray-600:rgba(var(--spectrum-gray-600-rgb));--spectrum-gray-700-rgb:209,209,209;--spectrum-gray-700:rgba(var(--spectrum-gray-700-rgb));--spectrum-gray-800-rgb:235,235,235;--spectrum-gray-800:rgba(var(--spectrum-gray-800-rgb));--spectrum-gray-900-rgb:255,255,255;--spectrum-gray-900:rgba(var(--spectrum-gray-900-rgb));--spectrum-blue-100-rgb:0,56,119;--spectrum-blue-100:rgba(var(--spectrum-blue-100-rgb));--spectrum-blue-200-rgb:0,65,138;--spectrum-blue-200:rgba(var(--spectrum-blue-200-rgb));--spectrum-blue-300-rgb:0,77,163;--spectrum-blue-300:rgba(var(--spectrum-blue-300-rgb));--spectrum-blue-400-rgb:0,89,194;--spectrum-blue-400:rgba(var(--spectrum-blue-400-rgb));--spectrum-blue-500-rgb:3,103,224;--spectrum-blue-500:rgba(var(--spectrum-blue-500-rgb));--spectrum-blue-600-rgb:19,121,243;--spectrum-blue-600:rgba(var(--spectrum-blue-600-rgb));--spectrum-blue-700-rgb:52,143,244;--spectrum-blue-700:rgba(var(--spectrum-blue-700-rgb));--spectrum-blue-800-rgb:84,163,246;--spectrum-blue-800:rgba(var(--spectrum-blue-800-rgb));--spectrum-blue-900-rgb:114,183,249;--spectrum-blue-900:rgba(var(--spectrum-blue-900-rgb));--spectrum-blue-1000-rgb:143,202,252;--spectrum-blue-1000:rgba(var(--spectrum-blue-1000-rgb));--spectrum-blue-1100-rgb:174,219,254;--spectrum-blue-1100:rgba(var(--spectrum-blue-1100-rgb));--spectrum-blue-1200-rgb:204,233,255;--spectrum-blue-1200:rgba(var(--spectrum-blue-1200-rgb));--spectrum-blue-1300-rgb:232,246,255;--spectrum-blue-1300:rgba(var(--spectrum-blue-1300-rgb));--spectrum-blue-1400-rgb:255,255,255;--spectrum-blue-1400:rgba(var(--spectrum-blue-1400-rgb));--spectrum-red-100-rgb:123,0,0;--spectrum-red-100:rgba(var(--spectrum-red-100-rgb));--spectrum-red-200-rgb:141,0,0;--spectrum-red-200:rgba(var(--spectrum-red-200-rgb));--spectrum-red-300-rgb:165,0,0;--spectrum-red-300:rgba(var(--spectrum-red-300-rgb));--spectrum-red-400-rgb:190,4,3;--spectrum-red-400:rgba(var(--spectrum-red-400-rgb));--spectrum-red-500-rgb:215,25,19;--spectrum-red-500:rgba(var(--spectrum-red-500-rgb));--spectrum-red-600-rgb:234,56,41;--spectrum-red-600:rgba(var(--spectrum-red-600-rgb));--spectrum-red-700-rgb:246,88,67;--spectrum-red-700:rgba(var(--spectrum-red-700-rgb));--spectrum-red-800-rgb:255,117,94;--spectrum-red-800:rgba(var(--spectrum-red-800-rgb));--spectrum-red-900-rgb:255,149,129;--spectrum-red-900:rgba(var(--spectrum-red-900-rgb));--spectrum-red-1000-rgb:255,176,161;--spectrum-red-1000:rgba(var(--spectrum-red-1000-rgb));--spectrum-red-1100-rgb:255,201,189;--spectrum-red-1100:rgba(var(--spectrum-red-1100-rgb));--spectrum-red-1200-rgb:255,222,216;--spectrum-red-1200:rgba(var(--spectrum-red-1200-rgb));--spectrum-red-1300-rgb:255,241,238;--spectrum-red-1300:rgba(var(--spectrum-red-1300-rgb));--spectrum-red-1400-rgb:255,255,255;--spectrum-red-1400:rgba(var(--spectrum-red-1400-rgb));--spectrum-orange-100-rgb:102,37,0;--spectrum-orange-100:rgba(var(--spectrum-orange-100-rgb));--spectrum-orange-200-rgb:117,45,0;--spectrum-orange-200:rgba(var(--spectrum-orange-200-rgb));--spectrum-orange-300-rgb:137,55,0;--spectrum-orange-300:rgba(var(--spectrum-orange-300-rgb));--spectrum-orange-400-rgb:158,66,0;--spectrum-orange-400:rgba(var(--spectrum-orange-400-rgb));--spectrum-orange-500-rgb:180,78,0;--spectrum-orange-500:rgba(var(--spectrum-orange-500-rgb));--spectrum-orange-600-rgb:202,93,0;--spectrum-orange-600:rgba(var(--spectrum-orange-600-rgb));--spectrum-orange-700-rgb:225,109,0;--spectrum-orange-700:rgba(var(--spectrum-orange-700-rgb));--spectrum-orange-800-rgb:244,129,12;--spectrum-orange-800:rgba(var(--spectrum-orange-800-rgb));--spectrum-orange-900-rgb:254,154,46;--spectrum-orange-900:rgba(var(--spectrum-orange-900-rgb));--spectrum-orange-1000-rgb:255,181,88;--spectrum-orange-1000:rgba(var(--spectrum-orange-1000-rgb));--spectrum-orange-1100-rgb:253,206,136;--spectrum-orange-1100:rgba(var(--spectrum-orange-1100-rgb));--spectrum-orange-1200-rgb:255,225,179;--spectrum-orange-1200:rgba(var(--spectrum-orange-1200-rgb));--spectrum-orange-1300-rgb:255,242,221;--spectrum-orange-1300:rgba(var(--spectrum-orange-1300-rgb));--spectrum-orange-1400-rgb:255,253,249;--spectrum-orange-1400:rgba(var(--spectrum-orange-1400-rgb));--spectrum-yellow-100-rgb:76,54,0;--spectrum-yellow-100:rgba(var(--spectrum-yellow-100-rgb));--spectrum-yellow-200-rgb:88,64,0;--spectrum-yellow-200:rgba(var(--spectrum-yellow-200-rgb));--spectrum-yellow-300-rgb:103,76,0;--spectrum-yellow-300:rgba(var(--spectrum-yellow-300-rgb));--spectrum-yellow-400-rgb:119,89,0;--spectrum-yellow-400:rgba(var(--spectrum-yellow-400-rgb));--spectrum-yellow-500-rgb:136,104,0;--spectrum-yellow-500:rgba(var(--spectrum-yellow-500-rgb));--spectrum-yellow-600-rgb:155,120,0;--spectrum-yellow-600:rgba(var(--spectrum-yellow-600-rgb));--spectrum-yellow-700-rgb:174,137,0;--spectrum-yellow-700:rgba(var(--spectrum-yellow-700-rgb));--spectrum-yellow-800-rgb:192,156,0;--spectrum-yellow-800:rgba(var(--spectrum-yellow-800-rgb));--spectrum-yellow-900-rgb:211,174,0;--spectrum-yellow-900:rgba(var(--spectrum-yellow-900-rgb));--spectrum-yellow-1000-rgb:228,194,0;--spectrum-yellow-1000:rgba(var(--spectrum-yellow-1000-rgb));--spectrum-yellow-1100-rgb:244,213,0;--spectrum-yellow-1100:rgba(var(--spectrum-yellow-1100-rgb));--spectrum-yellow-1200-rgb:249,232,92;--spectrum-yellow-1200:rgba(var(--spectrum-yellow-1200-rgb));--spectrum-yellow-1300-rgb:252,246,187;--spectrum-yellow-1300:rgba(var(--spectrum-yellow-1300-rgb));--spectrum-yellow-1400-rgb:255,255,255;--spectrum-yellow-1400:rgba(var(--spectrum-yellow-1400-rgb));--spectrum-chartreuse-100-rgb:48,64,0;--spectrum-chartreuse-100:rgba(var(--spectrum-chartreuse-100-rgb));--spectrum-chartreuse-200-rgb:55,74,0;--spectrum-chartreuse-200:rgba(var(--spectrum-chartreuse-200-rgb));--spectrum-chartreuse-300-rgb:65,87,0;--spectrum-chartreuse-300:rgba(var(--spectrum-chartreuse-300-rgb));--spectrum-chartreuse-400-rgb:76,102,0;--spectrum-chartreuse-400:rgba(var(--spectrum-chartreuse-400-rgb));--spectrum-chartreuse-500-rgb:89,118,0;--spectrum-chartreuse-500:rgba(var(--spectrum-chartreuse-500-rgb));--spectrum-chartreuse-600-rgb:102,136,0;--spectrum-chartreuse-600:rgba(var(--spectrum-chartreuse-600-rgb));--spectrum-chartreuse-700-rgb:117,154,0;--spectrum-chartreuse-700:rgba(var(--spectrum-chartreuse-700-rgb));--spectrum-chartreuse-800-rgb:132,173,1;--spectrum-chartreuse-800:rgba(var(--spectrum-chartreuse-800-rgb));--spectrum-chartreuse-900-rgb:148,192,8;--spectrum-chartreuse-900:rgba(var(--spectrum-chartreuse-900-rgb));--spectrum-chartreuse-1000-rgb:166,211,18;--spectrum-chartreuse-1000:rgba(var(--spectrum-chartreuse-1000-rgb));--spectrum-chartreuse-1100-rgb:184,229,37;--spectrum-chartreuse-1100:rgba(var(--spectrum-chartreuse-1100-rgb));--spectrum-chartreuse-1200-rgb:205,245,71;--spectrum-chartreuse-1200:rgba(var(--spectrum-chartreuse-1200-rgb));--spectrum-chartreuse-1300-rgb:231,254,154;--spectrum-chartreuse-1300:rgba(var(--spectrum-chartreuse-1300-rgb));--spectrum-chartreuse-1400-rgb:255,255,255;--spectrum-chartreuse-1400:rgba(var(--spectrum-chartreuse-1400-rgb));--spectrum-celery-100-rgb:0,69,10;--spectrum-celery-100:rgba(var(--spectrum-celery-100-rgb));--spectrum-celery-200-rgb:0,80,12;--spectrum-celery-200:rgba(var(--spectrum-celery-200-rgb));--spectrum-celery-300-rgb:0,94,14;--spectrum-celery-300:rgba(var(--spectrum-celery-300-rgb));--spectrum-celery-400-rgb:0,109,15;--spectrum-celery-400:rgba(var(--spectrum-celery-400-rgb));--spectrum-celery-500-rgb:0,127,15;--spectrum-celery-500:rgba(var(--spectrum-celery-500-rgb));--spectrum-celery-600-rgb:0,145,18;--spectrum-celery-600:rgba(var(--spectrum-celery-600-rgb));--spectrum-celery-700-rgb:4,165,30;--spectrum-celery-700:rgba(var(--spectrum-celery-700-rgb));--spectrum-celery-800-rgb:34,184,51;--spectrum-celery-800:rgba(var(--spectrum-celery-800-rgb));--spectrum-celery-900-rgb:68,202,73;--spectrum-celery-900:rgba(var(--spectrum-celery-900-rgb));--spectrum-celery-1000-rgb:105,220,99;--spectrum-celery-1000:rgba(var(--spectrum-celery-1000-rgb));--spectrum-celery-1100-rgb:142,235,127;--spectrum-celery-1100:rgba(var(--spectrum-celery-1100-rgb));--spectrum-celery-1200-rgb:180,247,162;--spectrum-celery-1200:rgba(var(--spectrum-celery-1200-rgb));--spectrum-celery-1300-rgb:221,253,211;--spectrum-celery-1300:rgba(var(--spectrum-celery-1300-rgb));--spectrum-celery-1400-rgb:255,255,255;--spectrum-celery-1400:rgba(var(--spectrum-celery-1400-rgb));--spectrum-green-100-rgb:4,67,41;--spectrum-green-100:rgba(var(--spectrum-green-100-rgb));--spectrum-green-200-rgb:0,78,47;--spectrum-green-200:rgba(var(--spectrum-green-200-rgb));--spectrum-green-300-rgb:0,92,56;--spectrum-green-300:rgba(var(--spectrum-green-300-rgb));--spectrum-green-400-rgb:0,108,67;--spectrum-green-400:rgba(var(--spectrum-green-400-rgb));--spectrum-green-500-rgb:0,125,78;--spectrum-green-500:rgba(var(--spectrum-green-500-rgb));--spectrum-green-600-rgb:0,143,93;--spectrum-green-600:rgba(var(--spectrum-green-600-rgb));--spectrum-green-700-rgb:18,162,108;--spectrum-green-700:rgba(var(--spectrum-green-700-rgb));--spectrum-green-800-rgb:43,180,125;--spectrum-green-800:rgba(var(--spectrum-green-800-rgb));--spectrum-green-900-rgb:67,199,143;--spectrum-green-900:rgba(var(--spectrum-green-900-rgb));--spectrum-green-1000-rgb:94,217,162;--spectrum-green-1000:rgba(var(--spectrum-green-1000-rgb));--spectrum-green-1100-rgb:129,233,184;--spectrum-green-1100:rgba(var(--spectrum-green-1100-rgb));--spectrum-green-1200-rgb:177,244,209;--spectrum-green-1200:rgba(var(--spectrum-green-1200-rgb));--spectrum-green-1300-rgb:223,250,234;--spectrum-green-1300:rgba(var(--spectrum-green-1300-rgb));--spectrum-green-1400-rgb:254,255,252;--spectrum-green-1400:rgba(var(--spectrum-green-1400-rgb));--spectrum-seafoam-100-rgb:18,65,63;--spectrum-seafoam-100:rgba(var(--spectrum-seafoam-100-rgb));--spectrum-seafoam-200-rgb:14,76,73;--spectrum-seafoam-200:rgba(var(--spectrum-seafoam-200-rgb));--spectrum-seafoam-300-rgb:4,90,87;--spectrum-seafoam-300:rgba(var(--spectrum-seafoam-300-rgb));--spectrum-seafoam-400-rgb:0,105,101;--spectrum-seafoam-400:rgba(var(--spectrum-seafoam-400-rgb));--spectrum-seafoam-500-rgb:0,122,117;--spectrum-seafoam-500:rgba(var(--spectrum-seafoam-500-rgb));--spectrum-seafoam-600-rgb:0,140,135;--spectrum-seafoam-600:rgba(var(--spectrum-seafoam-600-rgb));--spectrum-seafoam-700-rgb:0,158,152;--spectrum-seafoam-700:rgba(var(--spectrum-seafoam-700-rgb));--spectrum-seafoam-800-rgb:3,178,171;--spectrum-seafoam-800:rgba(var(--spectrum-seafoam-800-rgb));--spectrum-seafoam-900-rgb:54,197,189;--spectrum-seafoam-900:rgba(var(--spectrum-seafoam-900-rgb));--spectrum-seafoam-1000-rgb:93,214,207;--spectrum-seafoam-1000:rgba(var(--spectrum-seafoam-1000-rgb));--spectrum-seafoam-1100-rgb:132,230,223;--spectrum-seafoam-1100:rgba(var(--spectrum-seafoam-1100-rgb));--spectrum-seafoam-1200-rgb:176,242,236;--spectrum-seafoam-1200:rgba(var(--spectrum-seafoam-1200-rgb));--spectrum-seafoam-1300-rgb:223,249,246;--spectrum-seafoam-1300:rgba(var(--spectrum-seafoam-1300-rgb));--spectrum-seafoam-1400-rgb:254,255,254;--spectrum-seafoam-1400:rgba(var(--spectrum-seafoam-1400-rgb));--spectrum-cyan-100-rgb:0,61,98;--spectrum-cyan-100:rgba(var(--spectrum-cyan-100-rgb));--spectrum-cyan-200-rgb:0,71,111;--spectrum-cyan-200:rgba(var(--spectrum-cyan-200-rgb));--spectrum-cyan-300-rgb:0,85,127;--spectrum-cyan-300:rgba(var(--spectrum-cyan-300-rgb));--spectrum-cyan-400-rgb:0,100,145;--spectrum-cyan-400:rgba(var(--spectrum-cyan-400-rgb));--spectrum-cyan-500-rgb:0,116,162;--spectrum-cyan-500:rgba(var(--spectrum-cyan-500-rgb));--spectrum-cyan-600-rgb:0,134,180;--spectrum-cyan-600:rgba(var(--spectrum-cyan-600-rgb));--spectrum-cyan-700-rgb:0,153,198;--spectrum-cyan-700:rgba(var(--spectrum-cyan-700-rgb));--spectrum-cyan-800-rgb:14,173,215;--spectrum-cyan-800:rgba(var(--spectrum-cyan-800-rgb));--spectrum-cyan-900-rgb:44,193,230;--spectrum-cyan-900:rgba(var(--spectrum-cyan-900-rgb));--spectrum-cyan-1000-rgb:84,211,241;--spectrum-cyan-1000:rgba(var(--spectrum-cyan-1000-rgb));--spectrum-cyan-1100-rgb:127,228,249;--spectrum-cyan-1100:rgba(var(--spectrum-cyan-1100-rgb));--spectrum-cyan-1200-rgb:167,241,255;--spectrum-cyan-1200:rgba(var(--spectrum-cyan-1200-rgb));--spectrum-cyan-1300-rgb:215,250,255;--spectrum-cyan-1300:rgba(var(--spectrum-cyan-1300-rgb));--spectrum-cyan-1400-rgb:255,255,255;--spectrum-cyan-1400:rgba(var(--spectrum-cyan-1400-rgb));--spectrum-indigo-100-rgb:40,44,140;--spectrum-indigo-100:rgba(var(--spectrum-indigo-100-rgb));--spectrum-indigo-200-rgb:47,52,163;--spectrum-indigo-200:rgba(var(--spectrum-indigo-200-rgb));--spectrum-indigo-300-rgb:57,63,187;--spectrum-indigo-300:rgba(var(--spectrum-indigo-300-rgb));--spectrum-indigo-400-rgb:70,75,211;--spectrum-indigo-400:rgba(var(--spectrum-indigo-400-rgb));--spectrum-indigo-500-rgb:85,91,231;--spectrum-indigo-500:rgba(var(--spectrum-indigo-500-rgb));--spectrum-indigo-600-rgb:104,109,244;--spectrum-indigo-600:rgba(var(--spectrum-indigo-600-rgb));--spectrum-indigo-700-rgb:124,129,251;--spectrum-indigo-700:rgba(var(--spectrum-indigo-700-rgb));--spectrum-indigo-800-rgb:145,149,255;--spectrum-indigo-800:rgba(var(--spectrum-indigo-800-rgb));--spectrum-indigo-900-rgb:167,170,255;--spectrum-indigo-900:rgba(var(--spectrum-indigo-900-rgb));--spectrum-indigo-1000-rgb:188,190,255;--spectrum-indigo-1000:rgba(var(--spectrum-indigo-1000-rgb));--spectrum-indigo-1100-rgb:208,210,255;--spectrum-indigo-1100:rgba(var(--spectrum-indigo-1100-rgb));--spectrum-indigo-1200-rgb:226,228,255;--spectrum-indigo-1200:rgba(var(--spectrum-indigo-1200-rgb));--spectrum-indigo-1300-rgb:243,243,254;--spectrum-indigo-1300:rgba(var(--spectrum-indigo-1300-rgb));--spectrum-indigo-1400-rgb:255,255,255;--spectrum-indigo-1400:rgba(var(--spectrum-indigo-1400-rgb));--spectrum-purple-100-rgb:76,13,157;--spectrum-purple-100:rgba(var(--spectrum-purple-100-rgb));--spectrum-purple-200-rgb:89,17,177;--spectrum-purple-200:rgba(var(--spectrum-purple-200-rgb));--spectrum-purple-300-rgb:105,28,200;--spectrum-purple-300:rgba(var(--spectrum-purple-300-rgb));--spectrum-purple-400-rgb:122,45,218;--spectrum-purple-400:rgba(var(--spectrum-purple-400-rgb));--spectrum-purple-500-rgb:140,65,233;--spectrum-purple-500:rgba(var(--spectrum-purple-500-rgb));--spectrum-purple-600-rgb:157,87,243;--spectrum-purple-600:rgba(var(--spectrum-purple-600-rgb));--spectrum-purple-700-rgb:172,111,249;--spectrum-purple-700:rgba(var(--spectrum-purple-700-rgb));--spectrum-purple-800-rgb:187,135,251;--spectrum-purple-800:rgba(var(--spectrum-purple-800-rgb));--spectrum-purple-900-rgb:202,159,252;--spectrum-purple-900:rgba(var(--spectrum-purple-900-rgb));--spectrum-purple-1000-rgb:215,182,254;--spectrum-purple-1000:rgba(var(--spectrum-purple-1000-rgb));--spectrum-purple-1100-rgb:228,204,254;--spectrum-purple-1100:rgba(var(--spectrum-purple-1100-rgb));--spectrum-purple-1200-rgb:239,223,255;--spectrum-purple-1200:rgba(var(--spectrum-purple-1200-rgb));--spectrum-purple-1300-rgb:249,240,255;--spectrum-purple-1300:rgba(var(--spectrum-purple-1300-rgb));--spectrum-purple-1400-rgb:255,253,255;--spectrum-purple-1400:rgba(var(--spectrum-purple-1400-rgb));--spectrum-fuchsia-100-rgb:107,3,106;--spectrum-fuchsia-100:rgba(var(--spectrum-fuchsia-100-rgb));--spectrum-fuchsia-200-rgb:123,0,123;--spectrum-fuchsia-200:rgba(var(--spectrum-fuchsia-200-rgb));--spectrum-fuchsia-300-rgb:144,0,145;--spectrum-fuchsia-300:rgba(var(--spectrum-fuchsia-300-rgb));--spectrum-fuchsia-400-rgb:165,13,166;--spectrum-fuchsia-400:rgba(var(--spectrum-fuchsia-400-rgb));--spectrum-fuchsia-500-rgb:185,37,185;--spectrum-fuchsia-500:rgba(var(--spectrum-fuchsia-500-rgb));--spectrum-fuchsia-600-rgb:205,57,206;--spectrum-fuchsia-600:rgba(var(--spectrum-fuchsia-600-rgb));--spectrum-fuchsia-700-rgb:223,81,224;--spectrum-fuchsia-700:rgba(var(--spectrum-fuchsia-700-rgb));--spectrum-fuchsia-800-rgb:235,110,236;--spectrum-fuchsia-800:rgba(var(--spectrum-fuchsia-800-rgb));--spectrum-fuchsia-900-rgb:244,140,242;--spectrum-fuchsia-900:rgba(var(--spectrum-fuchsia-900-rgb));--spectrum-fuchsia-1000-rgb:250,168,245;--spectrum-fuchsia-1000:rgba(var(--spectrum-fuchsia-1000-rgb));--spectrum-fuchsia-1100-rgb:254,194,248;--spectrum-fuchsia-1100:rgba(var(--spectrum-fuchsia-1100-rgb));--spectrum-fuchsia-1200-rgb:255,219,250;--spectrum-fuchsia-1200:rgba(var(--spectrum-fuchsia-1200-rgb));--spectrum-fuchsia-1300-rgb:255,239,252;--spectrum-fuchsia-1300:rgba(var(--spectrum-fuchsia-1300-rgb));--spectrum-fuchsia-1400-rgb:255,253,255;--spectrum-fuchsia-1400:rgba(var(--spectrum-fuchsia-1400-rgb));--spectrum-magenta-100-rgb:118,0,58;--spectrum-magenta-100:rgba(var(--spectrum-magenta-100-rgb));--spectrum-magenta-200-rgb:137,0,66;--spectrum-magenta-200:rgba(var(--spectrum-magenta-200-rgb));--spectrum-magenta-300-rgb:160,0,77;--spectrum-magenta-300:rgba(var(--spectrum-magenta-300-rgb));--spectrum-magenta-400-rgb:182,18,90;--spectrum-magenta-400:rgba(var(--spectrum-magenta-400-rgb));--spectrum-magenta-500-rgb:203,38,109;--spectrum-magenta-500:rgba(var(--spectrum-magenta-500-rgb));--spectrum-magenta-600-rgb:222,61,130;--spectrum-magenta-600:rgba(var(--spectrum-magenta-600-rgb));--spectrum-magenta-700-rgb:237,87,149;--spectrum-magenta-700:rgba(var(--spectrum-magenta-700-rgb));--spectrum-magenta-800-rgb:249,114,167;--spectrum-magenta-800:rgba(var(--spectrum-magenta-800-rgb));--spectrum-magenta-900-rgb:255,143,185;--spectrum-magenta-900:rgba(var(--spectrum-magenta-900-rgb));--spectrum-magenta-1000-rgb:255,172,202;--spectrum-magenta-1000:rgba(var(--spectrum-magenta-1000-rgb));--spectrum-magenta-1100-rgb:255,198,218;--spectrum-magenta-1100:rgba(var(--spectrum-magenta-1100-rgb));--spectrum-magenta-1200-rgb:255,221,233;--spectrum-magenta-1200:rgba(var(--spectrum-magenta-1200-rgb));--spectrum-magenta-1300-rgb:255,240,245;--spectrum-magenta-1300:rgba(var(--spectrum-magenta-1300-rgb));--spectrum-magenta-1400-rgb:255,252,253;--spectrum-magenta-1400:rgba(var(--spectrum-magenta-1400-rgb));--spectrum-icon-color-blue-primary-default:var(--spectrum-blue-800);--spectrum-icon-color-green-primary-default:var(--spectrum-green-800);--spectrum-icon-color-red-primary-default:var(--spectrum-red-700);--spectrum-icon-color-yellow-primary-default:var(--spectrum-yellow-1000)}:host,:root{--spectrum-menu-item-background-color-default-rgb:255,255,255;--spectrum-menu-item-background-color-default-opacity:0;--spectrum-menu-item-background-color-default:rgba(var(--spectrum-menu-item-background-color-default-rgb),var(--spectrum-menu-item-background-color-default-opacity));--spectrum-menu-item-background-color-hover:var(
--spectrum-transparent-white-200
);--spectrum-menu-item-background-color-down:var(
--spectrum-transparent-white-200
);--spectrum-menu-item-background-color-key-focus:var(
--spectrum-transparent-white-200
);--spectrum-drop-zone-background-color-rgb:var(
--spectrum-blue-900-rgb
);--spectrum-calendar-day-background-color-selected:rgba(var(--spectrum-blue-800-rgb),0.15);--spectrum-calendar-day-background-color-hover:rgba(var(--spectrum-white-rgb),0.07);--spectrum-calendar-day-today-background-color-selected-hover:rgba(var(--spectrum-blue-800-rgb),0.25);--spectrum-calendar-day-background-color-selected-hover:rgba(var(--spectrum-blue-800-rgb),0.25);--spectrum-calendar-day-background-color-down:var(
--spectrum-transparent-white-200
);--spectrum-calendar-day-background-color-cap-selected:rgba(var(--spectrum-blue-800-rgb),0.25);--spectrum-calendar-day-background-color-key-focus:rgba(var(--spectrum-white-rgb),0.07);--spectrum-calendar-day-border-color-key-focus:var(--spectrum-blue-700);--spectrum-badge-label-icon-color-primary:var(--spectrum-black);--spectrum-coach-indicator-ring-default-color:var(--spectrum-blue-700);--spectrum-coach-indicator-ring-dark-color:var(--spectrum-gray-900);--spectrum-coach-indicator-ring-light-color:var(--spectrum-gray-50);--spectrum-well-border-color:rgba(var(--spectrum-white-rgb),0.05);--spectrum-steplist-current-marker-color-key-focus:var(
--spectrum-blue-700
);--spectrum-treeview-item-background-color-quiet-selected:rgba(var(--spectrum-gray-900-rgb),0.07);--spectrum-treeview-item-background-color-selected:rgba(var(--spectrum-blue-800-rgb),0.15);--spectrum-logic-button-and-background-color:var(--spectrum-blue-800);--spectrum-logic-button-and-border-color:var(--spectrum-blue-800);--spectrum-logic-button-and-background-color-hover:var(
--spectrum-blue-1000
);--spectrum-logic-button-and-border-color-hover:var(--spectrum-blue-1000);--spectrum-logic-button-or-background-color:var(--spectrum-magenta-700);--spectrum-logic-button-or-border-color:var(--spectrum-magenta-700);--spectrum-logic-button-or-background-color-hover:var(
--spectrum-magenta-900
);--spectrum-logic-button-or-border-color-hover:var(--spectrum-magenta-900)}
`,r=["spectrum","express"],o=["medium","large","medium-express","large-express"],s=["light","lightest","dark","darkest","light-express","lightest-express","dark-express","darkest-express"],c=class e extends HTMLElement{constructor(){super(),this._dir="",this._theme="spectrum",this._color="",this._scale="",this.trackedChildren=new Set,this._updateRequested=!1,this._contextConsumers=new Map,this.attachShadow({mode:"open"});const t=document.importNode(e.template.content,!0);this.shadowRoot.appendChild(t),this.shouldAdoptStyles(),this.addEventListener("sp-query-theme",this.onQueryTheme),this.addEventListener("sp-language-context",this._handleContextPresence),this.updateComplete=this.__createDeferredPromise()}static get observedAttributes(){return["color","scale","theme","lang","dir"]}set dir(t){if(t===this.dir)return;this.setAttribute("dir",t),this._dir=t;const e="rtl"===t?t:"ltr";this.trackedChildren.forEach((t=>{t.setAttribute("dir",e)}))}get dir(){return this._dir}attributeChangedCallback(t,e,r){e!==r&&("color"===t?this.color=r:"scale"===t?this.scale=r:"lang"===t&&r?(this.lang=r,this._provideContext()):"theme"===t?this.theme=r:"dir"===t&&(this.dir=r))}requestUpdate(){void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?this.shouldAdoptStyles():window.ShadyCSS.styleElement(this)}get theme(){const t=e.themeFragmentsByKind.get("theme"),{name:r}=t&&t.get("default")||{};return this._theme||r||""}set theme(t){if(t===this._theme)return;const e=t&&r.includes(t)?t:this.theme;e!==this._theme&&(this._theme=e,this.requestUpdate()),e?this.setAttribute("theme",e):this.removeAttribute("theme")}get color(){const t=e.themeFragmentsByKind.get("color"),{name:r}=t&&t.get("default")||{};return this._color||r||""}set color(t){if(t===this._color)return;const e=t&&s.includes(t)?t:this.color;e!==this._color&&(this._color=e,this.requestUpdate()),e?this.setAttribute("color",e):this.removeAttribute("color")}get scale(){const t=e.themeFragmentsByKind.get("scale"),{name:r}=t&&t.get("default")||{};return this._scale||r||""}set scale(t){if(t===this._scale)return;const e=t&&o.includes(t)?t:this.scale;e!==this._scale&&(this._scale=e,this.requestUpdate()),e?this.setAttribute("scale",e):this.removeAttribute("scale")}get styles(){const t=[...e.themeFragmentsByKind.keys()],r=(t,e,r)=>{const o=r&&"theme"!==r&&"express"===this.theme?t.get(`${e}-express`):t.get(e),s="spectrum"===e||!r||this.hasAttribute(r);if(o&&s)return o.styles};return[...t.reduce(((t,o)=>{const s=e.themeFragmentsByKind.get(o);let c;if("app"===o||"core"===o)c=r(s,o);else{const{[o]:t}=this;c=r(s,t,o)}return c&&t.push(c),t}),[])]}static get template(){return this.templateElement||(this.templateElement=document.createElement("template"),this.templateElement.innerHTML="<slot></slot>"),this.templateElement}__createDeferredPromise(){return new Promise((t=>{this.__resolve=t}))}onQueryTheme(t){if(t.defaultPrevented)return;t.preventDefault();const{detail:e}=t;e.color=this.color||void 0,e.scale=this.scale||void 0,e.lang=this.lang||document.documentElement.lang||navigator.language,e.theme=this.theme||void 0}connectedCallback(){if(this.shouldAdoptStyles(),void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this),e.instances.add(this),!this.hasAttribute("dir")){let t=this.assignedSlot||this.parentNode;for(;t!==document.documentElement&&!(t instanceof e);)t=t.assignedSlot||t.parentNode||t.host;this.dir="rtl"===t.dir?t.dir:"ltr"}}disconnectedCallback(){e.instances.delete(this)}startManagingContentDirection(t){this.trackedChildren.add(t)}stopManagingContentDirection(t){this.trackedChildren.delete(t)}async shouldAdoptStyles(){this._updateRequested||(this.updateComplete=this.__createDeferredPromise(),this._updateRequested=!0,this._updateRequested=await!1,this.adoptStyles(),this.__resolve(!0))}adoptStyles(){const r=this.styles;if(void 0!==window.ShadyCSS&&!window.ShadyCSS.nativeShadow&&window.ShadyCSS.ScopingShim){const t=[];for(const[r,o]of e.themeFragmentsByKind)for(const[s,{styles:c}]of o){if("default"===s)continue;let o=c.cssText;e.defaultFragments.has(s)||(o=o.replace(":host",`:host([${r}='${s}'])`)),t.push(o)}window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t,this.localName),window.ShadyCSS.prepareTemplate(e.template,this.localName)}else if(t.FV){const t=[];for(const e of r)t.push(e.styleSheet);this.shadowRoot.adoptedStyleSheets=t}else this.shadowRoot.querySelectorAll("style").forEach((t=>t.remove())),r.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.shadowRoot.appendChild(e)}))}static registerThemeFragment(t,r,o){const s=e.themeFragmentsByKind.get(r)||new Map;0===s.size&&(e.themeFragmentsByKind.set(r,s),s.set("default",{name:t,styles:o}),e.defaultFragments.add(t)),s.set(t,{name:t,styles:o}),e.instances.forEach((t=>t.shouldAdoptStyles()))}_provideContext(){this._contextConsumers.forEach((([t,e])=>t(this.lang,e)))}_handleContextPresence(t){t.stopPropagation();const e=t.composedPath()[0];if(this._contextConsumers.has(e))return;this._contextConsumers.set(e,[t.detail.callback,()=>this._contextConsumers.delete(e)]);const[r,o]=this._contextConsumers.get(e)||[];r&&o&&r(this.lang||document.documentElement.lang||navigator.language,o)}};c.themeFragmentsByKind=new Map,c.defaultFragments=new Set(["spectrum"]),c.instances=new Set;let i=c;const n=t.iv`
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
);--spectrum-alias-clearbutton-icon-margin-s:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-clearbutton-icon-margin-m:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-clearbutton-icon-margin-l:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-clearbutton-icon-margin-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-clearbutton-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-combobox-quiet-button-offset-x:var(
--spectrum-global-dimension-size-100
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
)}:host,:root{--spectrum-alias-transparent-blue-background-color-hover:rgba(0,87,190,.15);--spectrum-alias-transparent-blue-background-color-down:rgba(0,72,153,.3);--spectrum-alias-transparent-blue-background-color-key-focus:var(
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
);--spectrum-alias-text-color-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-text-color-quiet-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-heading-text-color:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-hover:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-down:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-key-focus:var(
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
)}:host,:root{--spectrum-colorcontrol-checkerboard-light-color:var(
--spectrum-global-color-static-white
);--spectrum-colorcontrol-checkerboard-dark-color:var(
--spectrum-global-color-static-gray-300
)}:host,:root{-webkit-tap-highlight-color:rgb(0 0 0/0)}:host,:root{--spectrum-focus-indicator-color:var(--spectrum-blue-800);--spectrum-static-white-focus-indicator-color:var(--spectrum-white);--spectrum-static-black-focus-indicator-color:var(--spectrum-black);--spectrum-overlay-color:var(--spectrum-black);--spectrum-opacity-disabled:0.3;--spectrum-neutral-subdued-content-color-selected:var(
--spectrum-neutral-subdued-content-color-down
);--spectrum-accent-content-color-selected:var(
--spectrum-accent-content-color-down
);--spectrum-disabled-background-color:var(--spectrum-gray-200);--spectrum-disabled-static-white-background-color:var(
--spectrum-transparent-white-200
);--spectrum-disabled-static-black-background-color:var(
--spectrum-transparent-black-200
);--spectrum-background-opacity-default:0;--spectrum-background-opacity-hover:0.1;--spectrum-background-opacity-down:0.1;--spectrum-background-opacity-key-focus:0.1;--spectrum-neutral-content-color-default:var(--spectrum-gray-800);--spectrum-neutral-content-color-hover:var(--spectrum-gray-900);--spectrum-neutral-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-content-color-focus-hover:var(
--spectrum-neutral-content-color-down
);--spectrum-neutral-content-color-focus:var(
--spectrum-neutral-content-color-down
);--spectrum-neutral-content-color-key-focus:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-default:var(--spectrum-gray-700);--spectrum-neutral-subdued-content-color-hover:var(--spectrum-gray-800);--spectrum-neutral-subdued-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-key-focus:var(
--spectrum-gray-800
);--spectrum-accent-content-color-default:var(--spectrum-accent-color-900);--spectrum-accent-content-color-hover:var(--spectrum-accent-color-1000);--spectrum-accent-content-color-down:var(--spectrum-accent-color-1100);--spectrum-accent-content-color-key-focus:var(
--spectrum-accent-color-1000
);--spectrum-negative-content-color-default:var(
--spectrum-negative-color-900
);--spectrum-negative-content-color-hover:var(
--spectrum-negative-color-1000
);--spectrum-negative-content-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-content-color-key-focus:var(
--spectrum-negative-color-1000
);--spectrum-disabled-content-color:var(--spectrum-gray-400);--spectrum-disabled-static-white-content-color:var(
--spectrum-transparent-white-500
);--spectrum-disabled-static-black-content-color:var(
--spectrum-transparent-black-500
);--spectrum-disabled-border-color:var(--spectrum-gray-300);--spectrum-disabled-static-white-border-color:var(
--spectrum-transparent-white-300
);--spectrum-disabled-static-black-border-color:var(
--spectrum-transparent-black-300
);--spectrum-negative-border-color-default:var(
--spectrum-negative-color-900
);--spectrum-negative-border-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-border-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-border-color-focus-hover:var(
--spectrum-negative-border-color-down
);--spectrum-negative-border-color-focus:var(--spectrum-negative-color-1000);--spectrum-negative-border-color-key-focus:var(
--spectrum-negative-color-1000
);--spectrum-swatch-border-color:var(--spectrum-gray-900);--spectrum-swatch-border-opacity:0.51;--spectrum-swatch-disabled-icon-border-color:var(--spectrum-black);--spectrum-swatch-disabled-icon-border-opacity:0.51;--spectrum-thumbnail-border-color:var(--spectrum-gray-800);--spectrum-thumbnail-border-opacity:0.1;--spectrum-thumbnail-opacity-disabled:var(--spectrum-opacity-disabled);--spectrum-opacity-checkerboard-square-light:var(--spectrum-white);--spectrum-avatar-opacity-disabled:var(--spectrum-opacity-disabled);--spectrum-color-area-border-color:var(--spectrum-gray-900);--spectrum-color-area-border-opacity:0.1;--spectrum-color-slider-border-color:var(--spectrum-gray-900);--spectrum-color-slider-border-opacity:0.1;--spectrum-color-loupe-drop-shadow-color:var(
--spectrum-transparent-black-300
);--spectrum-color-loupe-drop-shadow-y:2px;--spectrum-color-loupe-drop-shadow-blur:8px;--spectrum-color-loupe-inner-border:var(--spectrum-transparent-black-200);--spectrum-color-loupe-outer-border:var(--spectrum-white);--spectrum-card-selection-background-color:var(--spectrum-gray-100);--spectrum-card-selection-background-color-opacity:0.95;--spectrum-drop-zone-background-color:var(--spectrum-accent-visual-color);--spectrum-drop-zone-background-color-opacity:0.1;--spectrum-drop-zone-background-color-opacity-filled:0.3;--spectrum-coach-mark-pagination-color:var(--spectrum-gray-600);--spectrum-color-handle-inner-border-color:var(--spectrum-black);--spectrum-color-handle-inner-border-opacity:0.42;--spectrum-color-handle-outer-border-opacity:var(
--spectrum-color-handle-inner-border-opacity
);--spectrum-floating-action-button-drop-shadow-color:var(
--spectrum-transparent-black-300
);--spectrum-floating-action-button-shadow-color:var(
--spectrum-floating-action-button-drop-shadow-color
);--spectrum-table-row-hover-color:var(--spectrum-gray-900);--spectrum-table-row-hover-opacity:0.07;--spectrum-table-selected-row-background-color:var(
--spectrum-informative-background-color-default
);--spectrum-table-selected-row-background-opacity:0.1;--spectrum-table-selected-row-background-color-non-emphasized:var(
--spectrum-neutral-background-color-selected-default
);--spectrum-table-selected-row-background-opacity-non-emphasized:0.1;--spectrum-table-row-down-opacity:0.1;--spectrum-table-selected-row-background-opacity-hover:0.15;--spectrum-table-selected-row-background-opacity-non-emphasized-hover:0.15;--spectrum-white-rgb:255,255,255;--spectrum-white:rgba(var(--spectrum-white-rgb));--spectrum-transparent-white-100-rgb:255,255,255;--spectrum-transparent-white-100-opacity:0;--spectrum-transparent-white-100:rgba(var(--spectrum-transparent-white-100-rgb),var(--spectrum-transparent-white-100-opacity));--spectrum-transparent-white-200-rgb:255,255,255;--spectrum-transparent-white-200-opacity:0.1;--spectrum-transparent-white-200:rgba(var(--spectrum-transparent-white-200-rgb),var(--spectrum-transparent-white-200-opacity));--spectrum-transparent-white-300-rgb:255,255,255;--spectrum-transparent-white-300-opacity:0.25;--spectrum-transparent-white-300:rgba(var(--spectrum-transparent-white-300-rgb),var(--spectrum-transparent-white-300-opacity));--spectrum-transparent-white-400-rgb:255,255,255;--spectrum-transparent-white-400-opacity:0.4;--spectrum-transparent-white-400:rgba(var(--spectrum-transparent-white-400-rgb),var(--spectrum-transparent-white-400-opacity));--spectrum-transparent-white-500-rgb:255,255,255;--spectrum-transparent-white-500-opacity:0.55;--spectrum-transparent-white-500:rgba(var(--spectrum-transparent-white-500-rgb),var(--spectrum-transparent-white-500-opacity));--spectrum-transparent-white-600-rgb:255,255,255;--spectrum-transparent-white-600-opacity:0.7;--spectrum-transparent-white-600:rgba(var(--spectrum-transparent-white-600-rgb),var(--spectrum-transparent-white-600-opacity));--spectrum-transparent-white-700-rgb:255,255,255;--spectrum-transparent-white-700-opacity:0.8;--spectrum-transparent-white-700:rgba(var(--spectrum-transparent-white-700-rgb),var(--spectrum-transparent-white-700-opacity));--spectrum-transparent-white-800-rgb:255,255,255;--spectrum-transparent-white-800-opacity:0.9;--spectrum-transparent-white-800:rgba(var(--spectrum-transparent-white-800-rgb),var(--spectrum-transparent-white-800-opacity));--spectrum-transparent-white-900-rgb:255,255,255;--spectrum-transparent-white-900:rgba(var(--spectrum-transparent-white-900-rgb));--spectrum-black-rgb:0,0,0;--spectrum-black:rgba(var(--spectrum-black-rgb));--spectrum-transparent-black-100-rgb:0,0,0;--spectrum-transparent-black-100-opacity:0;--spectrum-transparent-black-100:rgba(var(--spectrum-transparent-black-100-rgb),var(--spectrum-transparent-black-100-opacity));--spectrum-transparent-black-200-rgb:0,0,0;--spectrum-transparent-black-200-opacity:0.1;--spectrum-transparent-black-200:rgba(var(--spectrum-transparent-black-200-rgb),var(--spectrum-transparent-black-200-opacity));--spectrum-transparent-black-300-rgb:0,0,0;--spectrum-transparent-black-300-opacity:0.25;--spectrum-transparent-black-300:rgba(var(--spectrum-transparent-black-300-rgb),var(--spectrum-transparent-black-300-opacity));--spectrum-transparent-black-400-rgb:0,0,0;--spectrum-transparent-black-400-opacity:0.4;--spectrum-transparent-black-400:rgba(var(--spectrum-transparent-black-400-rgb),var(--spectrum-transparent-black-400-opacity));--spectrum-transparent-black-500-rgb:0,0,0;--spectrum-transparent-black-500-opacity:0.55;--spectrum-transparent-black-500:rgba(var(--spectrum-transparent-black-500-rgb),var(--spectrum-transparent-black-500-opacity));--spectrum-transparent-black-600-rgb:0,0,0;--spectrum-transparent-black-600-opacity:0.7;--spectrum-transparent-black-600:rgba(var(--spectrum-transparent-black-600-rgb),var(--spectrum-transparent-black-600-opacity));--spectrum-transparent-black-700-rgb:0,0,0;--spectrum-transparent-black-700-opacity:0.8;--spectrum-transparent-black-700:rgba(var(--spectrum-transparent-black-700-rgb),var(--spectrum-transparent-black-700-opacity));--spectrum-transparent-black-800-rgb:0,0,0;--spectrum-transparent-black-800-opacity:0.9;--spectrum-transparent-black-800:rgba(var(--spectrum-transparent-black-800-rgb),var(--spectrum-transparent-black-800-opacity));--spectrum-transparent-black-900-rgb:0,0,0;--spectrum-transparent-black-900:rgba(var(--spectrum-transparent-black-900-rgb));--spectrum-icon-color-inverse:var(--spectrum-gray-50);--spectrum-icon-color-primary-default:var(
--spectrum-neutral-content-color-default
);--spectrum-radio-button-selection-indicator:4px;--spectrum-field-label-to-component:0px;--spectrum-help-text-to-component:0px;--spectrum-button-minimum-width-multiplier:2.25;--spectrum-divider-thickness-small:1px;--spectrum-divider-thickness-medium:2px;--spectrum-divider-thickness-large:4px;--spectrum-swatch-rectangle-width-multiplier:2;--spectrum-swatch-slash-thickness-extra-small:2px;--spectrum-swatch-slash-thickness-small:3px;--spectrum-swatch-slash-thickness-medium:4px;--spectrum-swatch-slash-thickness-large:5px;--spectrum-progress-bar-minimum-width:48px;--spectrum-progress-bar-maximum-width:768px;--spectrum-meter-minimum-width:48px;--spectrum-meter-maximum-width:768px;--spectrum-meter-default-width:var(--spectrum-meter-width);--spectrum-in-line-alert-minimum-width:240px;--spectrum-popover-tip-width:16px;--spectrum-popover-tip-height:8px;--spectrum-menu-item-label-to-description:1px;--spectrum-menu-item-section-divider-height:8px;--spectrum-picker-minimum-width-multiplier:2;--spectrum-picker-end-edge-to-disclousure-icon-quiet:var(
--spectrum-picker-end-edge-to-disclosure-icon-quiet
);--spectrum-picker-end-edge-to-disclosure-icon-quiet:0px;--spectrum-text-field-minimum-width-multiplier:1.5;--spectrum-combo-box-minimum-width-multiplier:2.5;--spectrum-combo-box-quiet-minimum-width-multiplier:2;--spectrum-combo-box-visual-to-field-button-quiet:0px;--spectrum-alert-dialog-minimum-width:288px;--spectrum-alert-dialog-maximum-width:480px;--spectrum-contextual-help-minimum-width:268px;--spectrum-breadcrumbs-height:var(--spectrum-component-height-300);--spectrum-breadcrumbs-height-compact:var(--spectrum-component-height-200);--spectrum-breadcrumbs-end-edge-to-text:0px;--spectrum-breadcrumbs-truncated-menu-to-separator-icon:0px;--spectrum-breadcrumbs-start-edge-to-truncated-menu:0px;--spectrum-breadcrumbs-truncated-menu-to-bottom-text:0px;--spectrum-alert-banner-to-top-workflow-icon:var(
--spectrum-alert-banner-top-to-workflow-icon
);--spectrum-alert-banner-to-top-text:var(
--spectrum-alert-banner-top-to-text
);--spectrum-alert-banner-to-bottom-text:var(
--spectrum-alert-banner-bottom-to-text
);--spectrum-color-area-border-width:var(--spectrum-border-width-100);--spectrum-color-area-border-rounding:var(--spectrum-corner-radius-100);--spectrum-color-wheel-color-area-margin:12px;--spectrum-color-slider-border-width:1px;--spectrum-color-slider-border-rounding:4px;--spectrum-floating-action-button-drop-shadow-blur:12px;--spectrum-floating-action-button-drop-shadow-y:4px;--spectrum-illustrated-message-maximum-width:380px;--spectrum-search-field-minimum-width-multiplier:3;--spectrum-color-loupe-height:64px;--spectrum-color-loupe-width:48px;--spectrum-color-loupe-bottom-to-color-handle:12px;--spectrum-color-loupe-outer-border-width:var(--spectrum-border-width-200);--spectrum-color-loupe-inner-border-width:1px;--spectrum-card-minimum-width:100px;--spectrum-card-preview-minimum-height:130px;--spectrum-card-selection-background-size:40px;--spectrum-drop-zone-width:428px;--spectrum-drop-zone-content-maximum-width:var(
--spectrum-illustrated-message-maximum-width
);--spectrum-drop-zone-border-dash-length:8px;--spectrum-drop-zone-border-dash-gap:4px;--spectrum-drop-zone-title-size:var(
--spectrum-illustrated-message-title-size
);--spectrum-drop-zone-cjk-title-size:var(
--spectrum-illustrated-message-cjk-title-size
);--spectrum-drop-zone-body-size:var(
--spectrum-illustrated-message-body-size
);--spectrum-color-handle-border-width:var(--spectrum-border-width-200);--spectrum-color-handle-inner-border-width:1px;--spectrum-color-handle-outer-border-width:1px;--spectrum-color-handle-drop-shadow-x:0;--spectrum-color-handle-drop-shadow-y:0;--spectrum-color-handle-drop-shadow-blur:0;--spectrum-table-row-height-small-compact:var(
--spectrum-component-height-75
);--spectrum-table-row-height-medium-compact:var(
--spectrum-component-height-100
);--spectrum-table-row-height-large-compact:var(
--spectrum-component-height-200
);--spectrum-table-row-height-extra-large-compact:var(
--spectrum-component-height-300
);--spectrum-table-row-top-to-text-small-compact:var(
--spectrum-component-top-to-text-75
);--spectrum-table-row-top-to-text-medium-compact:var(
--spectrum-component-top-to-text-100
);--spectrum-table-row-top-to-text-large-compact:var(
--spectrum-component-top-to-text-200
);--spectrum-table-row-top-to-text-extra-large-compact:var(
--spectrum-component-top-to-text-300
);--spectrum-table-row-bottom-to-text-small-compact:var(
--spectrum-component-bottom-to-text-75
);--spectrum-table-row-bottom-to-text-medium-compact:var(
--spectrum-component-bottom-to-text-100
);--spectrum-table-row-bottom-to-text-large-compact:var(
--spectrum-component-bottom-to-text-200
);--spectrum-table-row-bottom-to-text-extra-large-compact:var(
--spectrum-component-bottom-to-text-300
);--spectrum-table-border-divider-width:1px;--spectrum-tab-item-height-small:var(--spectrum-component-height-200);--spectrum-tab-item-height-medium:var(--spectrum-component-height-300);--spectrum-tab-item-height-large:var(--spectrum-component-height-400);--spectrum-tab-item-height-extra-large:var(
--spectrum-component-height-500
);--spectrum-tab-item-compact-height-small:var(
--spectrum-component-height-75
);--spectrum-tab-item-compact-height-medium:var(
--spectrum-component-height-100
);--spectrum-tab-item-compact-height-large:var(
--spectrum-component-height-200
);--spectrum-tab-item-compact-height-extra-large:var(
--spectrum-component-height-300
);--spectrum-tab-item-start-to-edge-quiet:0px;--spectrum-in-field-button-width-stacked-small:20px;--spectrum-in-field-button-width-stacked-medium:28px;--spectrum-in-field-button-width-stacked-large:36px;--spectrum-in-field-button-width-stacked-extra-large:44px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-small:7px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-medium:9px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-large:13px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-extra-large:16px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-small:3px;--spectrum-android-elevation:2dp;--spectrum-spacing-50:2px;--spectrum-spacing-75:4px;--spectrum-spacing-100:8px;--spectrum-spacing-200:12px;--spectrum-spacing-300:16px;--spectrum-spacing-400:24px;--spectrum-spacing-500:32px;--spectrum-spacing-600:40px;--spectrum-spacing-700:48px;--spectrum-spacing-800:64px;--spectrum-spacing-900:80px;--spectrum-spacing-1000:96px;--spectrum-focus-indicator-thickness:2px;--spectrum-focus-indicator-gap:2px;--spectrum-border-width-200:2px;--spectrum-border-width-400:4px;--spectrum-field-edge-to-text-quiet:0px;--spectrum-field-edge-to-visual-quiet:0px;--spectrum-field-edge-to-border-quiet:0px;--spectrum-field-edge-to-alert-icon-quiet:0px;--spectrum-field-edge-to-validation-icon-quiet:0px;--spectrum-text-underline-thickness:1px;--spectrum-text-underline-gap:1px;--spectrum-informative-color-100:var(--spectrum-blue-100);--spectrum-informative-color-200:var(--spectrum-blue-200);--spectrum-informative-color-300:var(--spectrum-blue-300);--spectrum-informative-color-400:var(--spectrum-blue-400);--spectrum-informative-color-500:var(--spectrum-blue-500);--spectrum-informative-color-600:var(--spectrum-blue-600);--spectrum-informative-color-700:var(--spectrum-blue-700);--spectrum-informative-color-800:var(--spectrum-blue-800);--spectrum-informative-color-900:var(--spectrum-blue-900);--spectrum-informative-color-1000:var(--spectrum-blue-1000);--spectrum-informative-color-1100:var(--spectrum-blue-1100);--spectrum-informative-color-1200:var(--spectrum-blue-1200);--spectrum-informative-color-1300:var(--spectrum-blue-1300);--spectrum-informative-color-1400:var(--spectrum-blue-1400);--spectrum-negative-color-100:var(--spectrum-red-100);--spectrum-negative-color-200:var(--spectrum-red-200);--spectrum-negative-color-300:var(--spectrum-red-300);--spectrum-negative-color-400:var(--spectrum-red-400);--spectrum-negative-color-500:var(--spectrum-red-500);--spectrum-negative-color-600:var(--spectrum-red-600);--spectrum-negative-color-700:var(--spectrum-red-700);--spectrum-negative-color-800:var(--spectrum-red-800);--spectrum-negative-color-900:var(--spectrum-red-900);--spectrum-negative-color-1000:var(--spectrum-red-1000);--spectrum-negative-color-1100:var(--spectrum-red-1100);--spectrum-negative-color-1200:var(--spectrum-red-1200);--spectrum-negative-color-1300:var(--spectrum-red-1300);--spectrum-negative-color-1400:var(--spectrum-red-1400);--spectrum-notice-color-100:var(--spectrum-orange-100);--spectrum-notice-color-200:var(--spectrum-orange-200);--spectrum-notice-color-300:var(--spectrum-orange-300);--spectrum-notice-color-400:var(--spectrum-orange-400);--spectrum-notice-color-500:var(--spectrum-orange-500);--spectrum-notice-color-600:var(--spectrum-orange-600);--spectrum-notice-color-700:var(--spectrum-orange-700);--spectrum-notice-color-800:var(--spectrum-orange-800);--spectrum-notice-color-900:var(--spectrum-orange-900);--spectrum-notice-color-1000:var(--spectrum-orange-1000);--spectrum-notice-color-1100:var(--spectrum-orange-1100);--spectrum-notice-color-1200:var(--spectrum-orange-1200);--spectrum-notice-color-1300:var(--spectrum-orange-1300);--spectrum-notice-color-1400:var(--spectrum-orange-1400);--spectrum-positive-color-100:var(--spectrum-green-100);--spectrum-positive-color-200:var(--spectrum-green-200);--spectrum-positive-color-300:var(--spectrum-green-300);--spectrum-positive-color-400:var(--spectrum-green-400);--spectrum-positive-color-500:var(--spectrum-green-500);--spectrum-positive-color-600:var(--spectrum-green-600);--spectrum-positive-color-700:var(--spectrum-green-700);--spectrum-positive-color-800:var(--spectrum-green-800);--spectrum-positive-color-900:var(--spectrum-green-900);--spectrum-positive-color-1000:var(--spectrum-green-1000);--spectrum-positive-color-1100:var(--spectrum-green-1100);--spectrum-positive-color-1200:var(--spectrum-green-1200);--spectrum-positive-color-1300:var(--spectrum-green-1300);--spectrum-positive-color-1400:var(--spectrum-green-1400);--spectrum-default-font-family:var(--spectrum-sans-serif-font-family);--spectrum-sans-serif-font-family:Adobe Clean;--spectrum-serif-font-family:Adobe Clean Serif;--spectrum-cjk-font-family:Adobe Clean Han;--spectrum-light-font-weight:300;--spectrum-regular-font-weight:400;--spectrum-medium-font-weight:500;--spectrum-bold-font-weight:700;--spectrum-extra-bold-font-weight:800;--spectrum-black-font-weight:900;--spectrum-italic-font-style:italic;--spectrum-default-font-style:normal;--spectrum-line-height-100:1.3;--spectrum-line-height-200:1.5;--spectrum-cjk-line-height-100:1.5;--spectrum-cjk-line-height-200:1.7;--spectrum-cjk-letter-spacing:0.05em;--spectrum-heading-sans-serif-font-family:var(
--spectrum-sans-serif-font-family
);--spectrum-heading-serif-font-family:var(--spectrum-serif-font-family);--spectrum-heading-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-heading-sans-serif-light-font-weight:var(
--spectrum-light-font-weight
);--spectrum-heading-sans-serif-light-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-serif-light-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-heading-serif-light-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-cjk-light-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-cjk-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-serif-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-sans-serif-heavy-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-serif-heavy-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-serif-heavy-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-cjk-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-strong-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-heading-sans-serif-light-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-serif-light-strong-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-heading-serif-light-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-cjk-light-strong-font-weight:var(
--spectrum-extra-bold-font-weight
);--spectrum-heading-cjk-light-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-strong-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-sans-serif-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-serif-strong-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-serif-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-cjk-strong-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-cjk-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-heavy-strong-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-sans-serif-heavy-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-serif-heavy-strong-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-serif-heavy-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-cjk-heavy-strong-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-cjk-heavy-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-light-emphasized-font-weight:var(
--spectrum-light-font-weight
);--spectrum-heading-sans-serif-light-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-serif-light-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-heading-serif-light-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-cjk-light-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-heading-cjk-light-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-serif-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-cjk-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-cjk-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-heavy-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-sans-serif-heavy-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-serif-heavy-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-serif-heavy-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-cjk-heavy-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-cjk-heavy-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-light-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-heading-sans-serif-light-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-serif-light-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-heading-serif-light-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-cjk-light-strong-emphasized-font-weight:var(
--spectrum-extra-bold-font-weight
);--spectrum-heading-cjk-light-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-sans-serif-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-serif-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-serif-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-cjk-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-cjk-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-heavy-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-sans-serif-heavy-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-serif-heavy-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-serif-heavy-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-cjk-heavy-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-cjk-heavy-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-size-xxxl:var(--spectrum-font-size-1300);--spectrum-heading-size-xxl:var(--spectrum-font-size-1100);--spectrum-heading-size-xl:var(--spectrum-font-size-900);--spectrum-heading-size-l:var(--spectrum-font-size-700);--spectrum-heading-size-m:var(--spectrum-font-size-500);--spectrum-heading-size-s:var(--spectrum-font-size-300);--spectrum-heading-size-xs:var(--spectrum-font-size-200);--spectrum-heading-size-xxs:var(--spectrum-font-size-100);--spectrum-heading-cjk-size-xxxl:var(--spectrum-font-size-1300);--spectrum-heading-cjk-size-xxl:var(--spectrum-font-size-900);--spectrum-heading-cjk-size-xl:var(--spectrum-font-size-800);--spectrum-heading-cjk-size-l:var(--spectrum-font-size-600);--spectrum-heading-cjk-size-m:var(--spectrum-font-size-400);--spectrum-heading-cjk-size-s:var(--spectrum-font-size-300);--spectrum-heading-cjk-size-xs:var(--spectrum-font-size-200);--spectrum-heading-cjk-size-xxs:var(--spectrum-font-size-100);--spectrum-heading-line-height:var(--spectrum-line-height-100);--spectrum-heading-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-heading-margin-top-multiplier:0.88888889;--spectrum-heading-margin-bottom-multiplier:0.25;--spectrum-heading-color:var(--spectrum-gray-900);--spectrum-body-sans-serif-font-family:var(
--spectrum-sans-serif-font-family
);--spectrum-body-serif-font-family:var(--spectrum-serif-font-family);--spectrum-body-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-body-sans-serif-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-body-serif-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-serif-font-style:var(--spectrum-default-font-style);--spectrum-body-cjk-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-cjk-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-strong-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-body-sans-serif-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-body-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-body-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-body-sans-serif-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-body-serif-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-body-serif-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-body-cjk-emphasized-font-weight:var(
--spectrum-extra-bold-font-weight
);--spectrum-body-cjk-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-body-sans-serif-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-body-sans-serif-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-body-serif-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-body-serif-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-body-cjk-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-body-cjk-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-body-size-xxxl:var(--spectrum-font-size-600);--spectrum-body-size-xxl:var(--spectrum-font-size-500);--spectrum-body-size-xl:var(--spectrum-font-size-400);--spectrum-body-size-l:var(--spectrum-font-size-300);--spectrum-body-size-m:var(--spectrum-font-size-200);--spectrum-body-size-s:var(--spectrum-font-size-100);--spectrum-body-size-xs:var(--spectrum-font-size-75);--spectrum-body-line-height:var(--spectrum-line-height-200);--spectrum-body-cjk-line-height:var(--spectrum-cjk-line-height-200);--spectrum-body-margin-multiplier:0.75;--spectrum-body-color:var(--spectrum-gray-800);--spectrum-detail-sans-serif-font-family:var(
--spectrum-sans-serif-font-family
);--spectrum-detail-serif-font-family:var(--spectrum-serif-font-family);--spectrum-detail-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-detail-sans-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-sans-serif-light-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-serif-light-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-serif-light-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-cjk-light-font-weight:var(--spectrum-light-font-weight);--spectrum-detail-cjk-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-strong-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-detail-sans-serif-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-serif-strong-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-detail-serif-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-strong-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-sans-serif-light-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-serif-light-strong-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-serif-light-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-cjk-light-strong-font-weight:var(
--spectrum-extra-bold-font-weight
);--spectrum-detail-cjk-light-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-sans-serif-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-detail-sans-serif-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-serif-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-detail-serif-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-cjk-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-detail-cjk-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-sans-serif-light-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-sans-serif-light-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-serif-light-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-serif-light-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-cjk-light-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-cjk-light-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-sans-serif-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-detail-sans-serif-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-serif-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-detail-serif-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-cjk-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-detail-cjk-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-sans-serif-light-strong-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-sans-serif-light-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-serif-light-strong-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-serif-light-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-cjk-light-strong-emphasized-font-weight:var(
--spectrum-extra-bold-font-weight
);--spectrum-detail-cjk-light-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-size-xl:var(--spectrum-font-size-200);--spectrum-detail-size-l:var(--spectrum-font-size-100);--spectrum-detail-size-m:var(--spectrum-font-size-75);--spectrum-detail-size-s:var(--spectrum-font-size-50);--spectrum-detail-line-height:var(--spectrum-line-height-100);--spectrum-detail-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-detail-margin-top-multiplier:0.88888889;--spectrum-detail-margin-bottom-multiplier:0.25;--spectrum-detail-letter-spacing:0.06em;--spectrum-detail-sans-serif-text-transform:uppercase;--spectrum-detail-serif-text-transform:uppercase;--spectrum-detail-color:var(--spectrum-gray-900);--spectrum-code-font-family:Source Code Pro;--spectrum-code-cjk-font-family:var(--spectrum-code-font-family);--spectrum-code-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-font-style:var(--spectrum-default-font-style);--spectrum-code-cjk-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-cjk-font-style:var(--spectrum-default-font-style);--spectrum-code-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-strong-font-style:var(--spectrum-default-font-style);--spectrum-code-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-code-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-code-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-code-cjk-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-code-cjk-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-code-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-code-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-code-cjk-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-code-cjk-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-code-size-xl:var(--spectrum-font-size-400);--spectrum-code-size-l:var(--spectrum-font-size-300);--spectrum-code-size-m:var(--spectrum-font-size-200);--spectrum-code-size-s:var(--spectrum-font-size-100);--spectrum-code-size-xs:var(--spectrum-font-size-75);--spectrum-code-line-height:var(--spectrum-line-height-200);--spectrum-code-cjk-line-height:var(--spectrum-cjk-line-height-200);--spectrum-code-color:var(--spectrum-gray-800)}:host,:root{--spectrum-neutral-background-color-selected-default:var(
--spectrum-gray-700
);--spectrum-neutral-background-color-selected-hover:var(
--spectrum-gray-800
);--spectrum-neutral-background-color-selected-down:var(--spectrum-gray-900);--spectrum-neutral-background-color-selected-key-focus:var(
--spectrum-gray-800
);--spectrum-color-handle-outer-border-color:var(--spectrum-black);--spectrum-slider-track-thickness:2px;--spectrum-slider-handle-gap:4px;--spectrum-picker-border-width:var(--spectrum-border-width-100);--spectrum-in-field-button-fill-stacked-inner-border-rounding:0px;--spectrum-in-field-button-edge-to-fill:0px;--spectrum-in-field-button-stacked-inner-edge-to-fill:0px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium:3px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large:4px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large:5px;--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-small:var(
--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-small
);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-medium:var(
--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium
);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-large:var(
--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large
);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-extra-large:var(
--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large
);--spectrum-border-width-100:1px;--spectrum-accent-color-100:var(--spectrum-blue-100);--spectrum-accent-color-200:var(--spectrum-blue-200);--spectrum-accent-color-300:var(--spectrum-blue-300);--spectrum-accent-color-400:var(--spectrum-blue-400);--spectrum-accent-color-500:var(--spectrum-blue-500);--spectrum-accent-color-600:var(--spectrum-blue-600);--spectrum-accent-color-700:var(--spectrum-blue-700);--spectrum-accent-color-800:var(--spectrum-blue-800);--spectrum-accent-color-900:var(--spectrum-blue-900);--spectrum-accent-color-1000:var(--spectrum-blue-1000);--spectrum-accent-color-1100:var(--spectrum-blue-1100);--spectrum-accent-color-1200:var(--spectrum-blue-1200);--spectrum-accent-color-1300:var(--spectrum-blue-1300);--spectrum-accent-color-1400:var(--spectrum-blue-1400);--spectrum-heading-sans-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-cjk-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-sans-serif-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-heading-serif-emphasized-font-weight:var(
--spectrum-bold-font-weight
)}:host,:root{--system-spectrum-actionbutton-background-color-default:var(
--spectrum-gray-75
);--system-spectrum-actionbutton-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-actionbutton-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-actionbutton-background-color-focus:var(
--spectrum-gray-200
);--system-spectrum-actionbutton-border-color-default:var(
--spectrum-gray-400
);--system-spectrum-actionbutton-border-color-hover:var(--spectrum-gray-500);--system-spectrum-actionbutton-border-color-down:var(--spectrum-gray-600);--system-spectrum-actionbutton-border-color-focus:var(--spectrum-gray-500);--system-spectrum-actionbutton-background-color-disabled:transparent;--system-spectrum-actionbutton-border-color-disabled:var(
--spectrum-disabled-border-color
);--system-spectrum-actionbutton-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-actionbutton-quiet-background-color-default:transparent;--system-spectrum-actionbutton-quiet-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-actionbutton-quiet-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-actionbutton-quiet-background-color-focus:var(
--spectrum-gray-200
);--system-spectrum-actionbutton-quiet-border-color-default:transparent;--system-spectrum-actionbutton-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-quiet-border-color-down:transparent;--system-spectrum-actionbutton-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-quiet-background-color-disabled:transparent;--system-spectrum-actionbutton-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-selected-border-color-default:transparent;--system-spectrum-actionbutton-selected-border-color-hover:transparent;--system-spectrum-actionbutton-selected-border-color-down:transparent;--system-spectrum-actionbutton-selected-border-color-focus:transparent;--system-spectrum-actionbutton-selected-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-actionbutton-selected-border-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-default:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-default:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-down:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-down:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-background-color-default:transparent;--system-spectrum-actionbutton-staticblack-background-color-hover:var(
--spectrum-transparent-black-300
);--system-spectrum-actionbutton-staticblack-background-color-down:var(
--spectrum-transparent-black-400
);--system-spectrum-actionbutton-staticblack-background-color-focus:var(
--spectrum-transparent-black-300
);--system-spectrum-actionbutton-staticblack-border-color-default:var(
--spectrum-transparent-black-400
);--system-spectrum-actionbutton-staticblack-border-color-hover:var(
--spectrum-transparent-black-500
);--system-spectrum-actionbutton-staticblack-border-color-down:var(
--spectrum-transparent-black-600
);--system-spectrum-actionbutton-staticblack-border-color-focus:var(
--spectrum-transparent-black-500
);--system-spectrum-actionbutton-staticblack-content-color-default:var(
--spectrum-black
);--system-spectrum-actionbutton-staticblack-content-color-hover:var(
--spectrum-black
);--system-spectrum-actionbutton-staticblack-content-color-down:var(
--spectrum-black
);--system-spectrum-actionbutton-staticblack-content-color-focus:var(
--spectrum-black
);--system-spectrum-actionbutton-staticblack-focus-indicator-color:var(
--spectrum-static-black-focus-indicator-color
);--system-spectrum-actionbutton-staticblack-background-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-border-color-disabled:var(
--spectrum-disabled-static-black-border-color
);--system-spectrum-actionbutton-staticblack-content-color-disabled:var(
--spectrum-disabled-static-black-content-color
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-default:var(
--spectrum-transparent-black-800
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-hover:var(
--spectrum-transparent-black-900
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-down:var(
--spectrum-transparent-black-900
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-focus:var(
--spectrum-transparent-black-900
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-default:var(
--spectrum-white
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-hover:var(
--spectrum-white
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-down:var(
--spectrum-white
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-focus:var(
--spectrum-white
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-disabled:var(
--spectrum-disabled-static-black-background-color
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-border-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-background-color-default:transparent;--system-spectrum-actionbutton-staticwhite-background-color-hover:var(
--spectrum-transparent-white-300
);--system-spectrum-actionbutton-staticwhite-background-color-down:var(
--spectrum-transparent-white-400
);--system-spectrum-actionbutton-staticwhite-background-color-focus:var(
--spectrum-transparent-white-300
);--system-spectrum-actionbutton-staticwhite-border-color-default:var(
--spectrum-transparent-white-400
);--system-spectrum-actionbutton-staticwhite-border-color-hover:var(
--spectrum-transparent-white-500
);--system-spectrum-actionbutton-staticwhite-border-color-down:var(
--spectrum-transparent-white-600
);--system-spectrum-actionbutton-staticwhite-border-color-focus:var(
--spectrum-transparent-white-500
);--system-spectrum-actionbutton-staticwhite-content-color-default:var(
--spectrum-white
);--system-spectrum-actionbutton-staticwhite-content-color-hover:var(
--spectrum-white
);--system-spectrum-actionbutton-staticwhite-content-color-down:var(
--spectrum-white
);--system-spectrum-actionbutton-staticwhite-content-color-focus:var(
--spectrum-white
);--system-spectrum-actionbutton-staticwhite-focus-indicator-color:var(
--spectrum-static-white-focus-indicator-color
);--system-spectrum-actionbutton-staticwhite-background-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-border-color-disabled:var(
--spectrum-disabled-static-white-border-color
);--system-spectrum-actionbutton-staticwhite-content-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-default:var(
--spectrum-transparent-white-800
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-hover:var(
--spectrum-transparent-white-900
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-down:var(
--spectrum-transparent-white-900
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-focus:var(
--spectrum-transparent-white-900
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-default:var(
--spectrum-black
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-hover:var(
--spectrum-black
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-down:var(
--spectrum-black
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-focus:var(
--spectrum-black
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-disabled:var(
--spectrum-disabled-static-white-background-color
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-border-color-disabled:transparent}:host,:root{--system-spectrum-actiongroup-gap-size-compact:0;--system-spectrum-actiongroup-horizontal-spacing-compact:-1px;--system-spectrum-actiongroup-vertical-spacing-compact:-1px}:host,:root{--system-spectrum-button-background-color-default:var(--spectrum-gray-75);--system-spectrum-button-background-color-hover:var(--spectrum-gray-200);--system-spectrum-button-background-color-down:var(--spectrum-gray-300);--system-spectrum-button-background-color-focus:var(--spectrum-gray-200);--system-spectrum-button-border-color-default:var(--spectrum-gray-400);--system-spectrum-button-border-color-hover:var(--spectrum-gray-500);--system-spectrum-button-border-color-down:var(--spectrum-gray-600);--system-spectrum-button-border-color-focus:var(--spectrum-gray-500);--system-spectrum-button-content-color-default:var(
--spectrum-neutral-content-color-default
);--system-spectrum-button-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--system-spectrum-button-content-color-down:var(
--spectrum-neutral-content-color-down
);--system-spectrum-button-content-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--system-spectrum-button-background-color-disabled:transparent;--system-spectrum-button-border-color-disabled:var(
--spectrum-disabled-border-color
);--system-spectrum-button-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-accent-background-color-default:var(
--spectrum-accent-background-color-default
);--system-spectrum-button-accent-background-color-hover:var(
--spectrum-accent-background-color-hover
);--system-spectrum-button-accent-background-color-down:var(
--spectrum-accent-background-color-down
);--system-spectrum-button-accent-background-color-focus:var(
--spectrum-accent-background-color-key-focus
);--system-spectrum-button-accent-border-color-default:transparent;--system-spectrum-button-accent-border-color-hover:transparent;--system-spectrum-button-accent-border-color-down:transparent;--system-spectrum-button-accent-border-color-focus:transparent;--system-spectrum-button-accent-content-color-default:var(
--spectrum-white
);--system-spectrum-button-accent-content-color-hover:var(--spectrum-white);--system-spectrum-button-accent-content-color-down:var(--spectrum-white);--system-spectrum-button-accent-content-color-focus:var(--spectrum-white);--system-spectrum-button-accent-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-button-accent-border-color-disabled:transparent;--system-spectrum-button-accent-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-accent-outline-background-color-default:transparent;--system-spectrum-button-accent-outline-background-color-hover:var(
--spectrum-accent-color-200
);--system-spectrum-button-accent-outline-background-color-down:var(
--spectrum-accent-color-300
);--system-spectrum-button-accent-outline-background-color-focus:var(
--spectrum-accent-color-200
);--system-spectrum-button-accent-outline-border-color-default:var(
--spectrum-accent-color-900
);--system-spectrum-button-accent-outline-border-color-hover:var(
--spectrum-accent-color-1000
);--system-spectrum-button-accent-outline-border-color-down:var(
--spectrum-accent-color-1100
);--system-spectrum-button-accent-outline-border-color-focus:var(
--spectrum-accent-color-1000
);--system-spectrum-button-accent-outline-content-color-default:var(
--spectrum-accent-content-color-default
);--system-spectrum-button-accent-outline-content-color-hover:var(
--spectrum-accent-content-color-hover
);--system-spectrum-button-accent-outline-content-color-down:var(
--spectrum-accent-content-color-down
);--system-spectrum-button-accent-outline-content-color-focus:var(
--spectrum-accent-content-color-key-focus
);--system-spectrum-button-accent-outline-background-color-disabled:transparent;--system-spectrum-button-accent-outline-border-color-disabled:var(
--spectrum-disabled-border-color
);--system-spectrum-button-accent-outline-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-negative-background-color-default:var(
--spectrum-negative-background-color-default
);--system-spectrum-button-negative-background-color-hover:var(
--spectrum-negative-background-color-hover
);--system-spectrum-button-negative-background-color-down:var(
--spectrum-negative-background-color-down
);--system-spectrum-button-negative-background-color-focus:var(
--spectrum-negative-background-color-key-focus
);--system-spectrum-button-negative-border-color-default:transparent;--system-spectrum-button-negative-border-color-hover:transparent;--system-spectrum-button-negative-border-color-down:transparent;--system-spectrum-button-negative-border-color-focus:transparent;--system-spectrum-button-negative-content-color-default:var(
--spectrum-white
);--system-spectrum-button-negative-content-color-hover:var(
--spectrum-white
);--system-spectrum-button-negative-content-color-down:var(--spectrum-white);--system-spectrum-button-negative-content-color-focus:var(
--spectrum-white
);--system-spectrum-button-negative-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-button-negative-border-color-disabled:transparent;--system-spectrum-button-negative-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-negative-outline-background-color-default:transparent;--system-spectrum-button-negative-outline-background-color-hover:var(
--spectrum-negative-color-200
);--system-spectrum-button-negative-outline-background-color-down:var(
--spectrum-negative-color-300
);--system-spectrum-button-negative-outline-background-color-focus:var(
--spectrum-negative-color-200
);--system-spectrum-button-negative-outline-border-color-default:var(
--spectrum-negative-color-900
);--system-spectrum-button-negative-outline-border-color-hover:var(
--spectrum-negative-color-1000
);--system-spectrum-button-negative-outline-border-color-down:var(
--spectrum-negative-color-1100
);--system-spectrum-button-negative-outline-border-color-focus:var(
--spectrum-negative-color-1000
);--system-spectrum-button-negative-outline-content-color-default:var(
--spectrum-negative-content-color-default
);--system-spectrum-button-negative-outline-content-color-hover:var(
--spectrum-negative-content-color-hover
);--system-spectrum-button-negative-outline-content-color-down:var(
--spectrum-negative-content-color-down
);--system-spectrum-button-negative-outline-content-color-focus:var(
--spectrum-negative-content-color-key-focus
);--system-spectrum-button-negative-outline-background-color-disabled:transparent;--system-spectrum-button-negative-outline-border-color-disabled:var(
--spectrum-disabled-border-color
);--system-spectrum-button-negative-outline-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-primary-background-color-default:var(
--spectrum-neutral-background-color-default
);--system-spectrum-button-primary-background-color-hover:var(
--spectrum-neutral-background-color-hover
);--system-spectrum-button-primary-background-color-down:var(
--spectrum-neutral-background-color-down
);--system-spectrum-button-primary-background-color-focus:var(
--spectrum-neutral-background-color-key-focus
);--system-spectrum-button-primary-border-color-default:transparent;--system-spectrum-button-primary-border-color-hover:transparent;--system-spectrum-button-primary-border-color-down:transparent;--system-spectrum-button-primary-border-color-focus:transparent;--system-spectrum-button-primary-content-color-default:var(
--spectrum-white
);--system-spectrum-button-primary-content-color-hover:var(--spectrum-white);--system-spectrum-button-primary-content-color-down:var(--spectrum-white);--system-spectrum-button-primary-content-color-focus:var(--spectrum-white);--system-spectrum-button-primary-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-button-primary-border-color-disabled:transparent;--system-spectrum-button-primary-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-primary-outline-background-color-default:transparent;--system-spectrum-button-primary-outline-background-color-hover:var(
--spectrum-gray-300
);--system-spectrum-button-primary-outline-background-color-down:var(
--spectrum-gray-400
);--system-spectrum-button-primary-outline-background-color-focus:var(
--spectrum-gray-300
);--system-spectrum-button-primary-outline-border-color-default:var(
--spectrum-gray-800
);--system-spectrum-button-primary-outline-border-color-hover:var(
--spectrum-gray-900
);--system-spectrum-button-primary-outline-border-color-down:var(
--spectrum-gray-900
);--system-spectrum-button-primary-outline-border-color-focus:var(
--spectrum-gray-900
);--system-spectrum-button-primary-outline-content-color-default:var(
--spectrum-neutral-content-color-default
);--system-spectrum-button-primary-outline-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--system-spectrum-button-primary-outline-content-color-down:var(
--spectrum-neutral-content-color-down
);--system-spectrum-button-primary-outline-content-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--system-spectrum-button-primary-outline-background-color-disabled:transparent;--system-spectrum-button-primary-outline-border-color-disabled:var(
--spectrum-disabled-border-color
);--system-spectrum-button-primary-outline-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-secondary-background-color-default:var(
--spectrum-gray-200
);--system-spectrum-button-secondary-background-color-hover:var(
--spectrum-gray-300
);--system-spectrum-button-secondary-background-color-down:var(
--spectrum-gray-400
);--system-spectrum-button-secondary-background-color-focus:var(
--spectrum-gray-300
);--system-spectrum-button-secondary-border-color-default:transparent;--system-spectrum-button-secondary-border-color-hover:transparent;--system-spectrum-button-secondary-border-color-down:transparent;--system-spectrum-button-secondary-border-color-focus:transparent;--system-spectrum-button-secondary-content-color-default:var(
--spectrum-neutral-content-color-default
);--system-spectrum-button-secondary-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--system-spectrum-button-secondary-content-color-down:var(
--spectrum-neutral-content-color-down
);--system-spectrum-button-secondary-content-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--system-spectrum-button-secondary-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-button-secondary-border-color-disabled:transparent;--system-spectrum-button-secondary-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-secondary-outline-background-color-default:transparent;--system-spectrum-button-secondary-outline-background-color-hover:var(
--spectrum-gray-300
);--system-spectrum-button-secondary-outline-background-color-down:var(
--spectrum-gray-400
);--system-spectrum-button-secondary-outline-background-color-focus:var(
--spectrum-gray-300
);--system-spectrum-button-secondary-outline-border-color-default:var(
--spectrum-gray-300
);--system-spectrum-button-secondary-outline-border-color-hover:var(
--spectrum-gray-400
);--system-spectrum-button-secondary-outline-border-color-down:var(
--spectrum-gray-500
);--system-spectrum-button-secondary-outline-border-color-focus:var(
--spectrum-gray-400
);--system-spectrum-button-secondary-outline-content-color-default:var(
--spectrum-neutral-content-color-default
);--system-spectrum-button-secondary-outline-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--system-spectrum-button-secondary-outline-content-color-down:var(
--spectrum-neutral-content-color-down
);--system-spectrum-button-secondary-outline-content-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--system-spectrum-button-secondary-outline-background-color-disabled:transparent;--system-spectrum-button-secondary-outline-border-color-disabled:var(
--spectrum-disabled-border-color
);--system-spectrum-button-secondary-outline-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-quiet-background-color-default:transparent;--system-spectrum-button-quiet-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-button-quiet-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-button-quiet-background-color-focus:var(
--spectrum-gray-200
);--system-spectrum-button-quiet-border-color-default:transparent;--system-spectrum-button-quiet-border-color-hover:transparent;--system-spectrum-button-quiet-border-color-down:transparent;--system-spectrum-button-quiet-border-color-focus:transparent;--system-spectrum-button-quiet-background-color-disabled:transparent;--system-spectrum-button-quiet-border-color-disabled:transparent;--system-spectrum-button-selected-background-color-default:var(
--spectrum-neutral-subdued-background-color-default
);--system-spectrum-button-selected-background-color-hover:var(
--spectrum-neutral-subdued-background-color-hover
);--system-spectrum-button-selected-background-color-down:var(
--spectrum-neutral-subdued-background-color-down
);--system-spectrum-button-selected-background-color-focus:var(
--spectrum-neutral-subdued-background-color-key-focus
);--system-spectrum-button-selected-border-color-default:transparent;--system-spectrum-button-selected-border-color-hover:transparent;--system-spectrum-button-selected-border-color-down:transparent;--system-spectrum-button-selected-border-color-focus:transparent;--system-spectrum-button-selected-content-color-default:var(
--spectrum-white
);--system-spectrum-button-selected-content-color-hover:var(
--spectrum-white
);--system-spectrum-button-selected-content-color-down:var(--spectrum-white);--system-spectrum-button-selected-content-color-focus:var(
--spectrum-white
);--system-spectrum-button-selected-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-button-selected-border-color-disabled:transparent;--system-spectrum-button-selected-emphasized-background-color-default:var(
--spectrum-accent-background-color-default
);--system-spectrum-button-selected-emphasized-background-color-hover:var(
--spectrum-accent-background-color-hover
);--system-spectrum-button-selected-emphasized-background-color-down:var(
--spectrum-accent-background-color-down
);--system-spectrum-button-selected-emphasized-background-color-focus:var(
--spectrum-accent-background-color-key-focus
);--system-spectrum-button-staticblack-quiet-border-color-default:transparent;--system-spectrum-button-staticwhite-quiet-border-color-default:transparent;--system-spectrum-button-staticblack-quiet-border-color-hover:transparent;--system-spectrum-button-staticwhite-quiet-border-color-hover:transparent;--system-spectrum-button-staticblack-quiet-border-color-down:transparent;--system-spectrum-button-staticwhite-quiet-border-color-down:transparent;--system-spectrum-button-staticblack-quiet-border-color-focus:transparent;--system-spectrum-button-staticwhite-quiet-border-color-focus:transparent;--system-spectrum-button-staticblack-quiet-border-color-disabled:transparent;--system-spectrum-button-staticwhite-quiet-border-color-disabled:transparent;--system-spectrum-button-staticwhite-background-color-default:var(
--spectrum-transparent-white-800
);--system-spectrum-button-staticwhite-background-color-hover:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-background-color-down:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-background-color-focus:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-border-color-default:transparent;--system-spectrum-button-staticwhite-border-color-hover:transparent;--system-spectrum-button-staticwhite-border-color-down:transparent;--system-spectrum-button-staticwhite-border-color-focus:transparent;--system-spectrum-button-staticwhite-content-color-default:var(
--spectrum-black
);--system-spectrum-button-staticwhite-content-color-hover:var(
--spectrum-black
);--system-spectrum-button-staticwhite-content-color-down:var(
--spectrum-black
);--system-spectrum-button-staticwhite-content-color-focus:var(
--spectrum-black
);--system-spectrum-button-staticwhite-focus-indicator-color:var(
--spectrum-static-white-focus-indicator-color
);--system-spectrum-button-staticwhite-background-color-disabled:var(
--spectrum-disabled-static-white-background-color
);--system-spectrum-button-staticwhite-border-color-disabled:transparent;--system-spectrum-button-staticwhite-content-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--system-spectrum-button-staticwhite-outline-background-color-default:transparent;--system-spectrum-button-staticwhite-outline-background-color-hover:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-outline-background-color-down:var(
--spectrum-transparent-white-400
);--system-spectrum-button-staticwhite-outline-background-color-focus:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-outline-border-color-default:var(
--spectrum-transparent-white-800
);--system-spectrum-button-staticwhite-outline-border-color-hover:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-outline-border-color-down:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-outline-border-color-focus:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-outline-content-color-default:var(
--spectrum-white
);--system-spectrum-button-staticwhite-outline-content-color-hover:var(
--spectrum-white
);--system-spectrum-button-staticwhite-outline-content-color-down:var(
--spectrum-white
);--system-spectrum-button-staticwhite-outline-content-color-focus:var(
--spectrum-white
);--system-spectrum-button-staticwhite-outline-focus-indicator-color:var(
--spectrum-static-white-focus-indicator-color
);--system-spectrum-button-staticwhite-outline-background-color-disabled:transparent;--system-spectrum-button-staticwhite-outline-border-color-disabled:var(
--spectrum-disabled-static-white-border-color
);--system-spectrum-button-staticwhite-outline-content-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--system-spectrum-button-staticwhite-selected-background-color-default:var(
--spectrum-transparent-white-800
);--system-spectrum-button-staticwhite-selected-background-color-hover:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-selected-background-color-down:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-selected-background-color-focus:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-selected-content-color-default:var(
--spectrum-black
);--system-spectrum-button-staticwhite-selected-content-color-hover:var(
--spectrum-black
);--system-spectrum-button-staticwhite-selected-content-color-down:var(
--spectrum-black
);--system-spectrum-button-staticwhite-selected-content-color-focus:var(
--spectrum-black
);--system-spectrum-button-staticwhite-selected-background-color-disabled:var(
--spectrum-disabled-static-white-background-color
);--system-spectrum-button-staticwhite-selected-border-color-disabled:transparent;--system-spectrum-button-staticwhite-secondary-background-color-default:var(
--spectrum-transparent-white-200
);--system-spectrum-button-staticwhite-secondary-background-color-hover:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-secondary-background-color-down:var(
--spectrum-transparent-white-400
);--system-spectrum-button-staticwhite-secondary-background-color-focus:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-secondary-border-color-default:transparent;--system-spectrum-button-staticwhite-secondary-border-color-hover:transparent;--system-spectrum-button-staticwhite-secondary-border-color-down:transparent;--system-spectrum-button-staticwhite-secondary-border-color-focus:transparent;--system-spectrum-button-staticwhite-secondary-content-color-default:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-content-color-hover:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-content-color-down:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-content-color-focus:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-focus-indicator-color:var(
--spectrum-static-white-focus-indicator-color
);--system-spectrum-button-staticwhite-secondary-background-color-disabled:var(
--spectrum-disabled-static-white-background-color
);--system-spectrum-button-staticwhite-secondary-border-color-disabled:transparent;--system-spectrum-button-staticwhite-secondary-content-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--system-spectrum-button-staticwhite-secondary-outline-background-color-default:transparent;--system-spectrum-button-staticwhite-secondary-outline-background-color-hover:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-secondary-outline-background-color-down:var(
--spectrum-transparent-white-400
);--system-spectrum-button-staticwhite-secondary-outline-background-color-focus:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-secondary-outline-border-color-default:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-secondary-outline-border-color-hover:var(
--spectrum-transparent-white-400
);--system-spectrum-button-staticwhite-secondary-outline-border-color-down:var(
--spectrum-transparent-white-500
);--system-spectrum-button-staticwhite-secondary-outline-border-color-focus:var(
--spectrum-transparent-white-400
);--system-spectrum-button-staticwhite-secondary-outline-content-color-default:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-outline-content-color-hover:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-outline-content-color-down:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-outline-content-color-focus:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-outline-focus-indicator-color:var(
--spectrum-static-white-focus-indicator-color
);--system-spectrum-button-staticwhite-secondary-outline-background-color-disabled:transparent;--system-spectrum-button-staticwhite-secondary-outline-border-color-disabled:var(
--spectrum-disabled-static-white-border-color
);--system-spectrum-button-staticwhite-secondary-outline-content-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--system-spectrum-button-staticblack-background-color-default:var(
--spectrum-transparent-black-800
);--system-spectrum-button-staticblack-background-color-hover:var(
--spectrum-transparent-black-900
);--system-spectrum-button-staticblack-background-color-down:var(
--spectrum-transparent-black-900
);--system-spectrum-button-staticblack-background-color-focus:var(
--spectrum-transparent-black-900
);--system-spectrum-button-staticblack-border-color-default:transparent;--system-spectrum-button-staticblack-border-color-hover:transparent;--system-spectrum-button-staticblack-border-color-down:transparent;--system-spectrum-button-staticblack-border-color-focus:transparent;--system-spectrum-button-staticblack-content-color-default:var(
--spectrum-white
);--system-spectrum-button-staticblack-content-color-hover:var(
--spectrum-white
);--system-spectrum-button-staticblack-content-color-down:var(
--spectrum-white
);--system-spectrum-button-staticblack-content-color-focus:var(
--spectrum-white
);--system-spectrum-button-staticblack-focus-indicator-color:var(
--spectrum-static-black-focus-indicator-color
);--system-spectrum-button-staticblack-background-color-disabled:var(
--spectrum-disabled-static-black-background-color
);--system-spectrum-button-staticblack-border-color-disabled:transparent;--system-spectrum-button-staticblack-content-color-disabled:var(
--spectrum-disabled-static-black-content-color
);--system-spectrum-button-staticblack-outline-background-color-default:transparent;--system-spectrum-button-staticblack-outline-background-color-hover:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-outline-background-color-down:var(
--spectrum-transparent-black-400
);--system-spectrum-button-staticblack-outline-background-color-focus:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-outline-border-color-default:var(
--spectrum-transparent-black-400
);--system-spectrum-button-staticblack-outline-border-color-hover:var(
--spectrum-transparent-black-500
);--system-spectrum-button-staticblack-outline-border-color-down:var(
--spectrum-transparent-black-600
);--system-spectrum-button-staticblack-outline-border-color-focus:var(
--spectrum-transparent-black-500
);--system-spectrum-button-staticblack-outline-content-color-default:var(
--spectrum-black
);--system-spectrum-button-staticblack-outline-content-color-hover:var(
--spectrum-black
);--system-spectrum-button-staticblack-outline-content-color-down:var(
--spectrum-black
);--system-spectrum-button-staticblack-outline-content-color-focus:var(
--spectrum-black
);--system-spectrum-button-staticblack-outline-focus-indicator-color:var(
--spectrum-static-black-focus-indicator-color
);--system-spectrum-button-staticblack-outline-background-color-disabled:transparent;--system-spectrum-button-staticblack-outline-border-color-disabled:var(
--spectrum-disabled-static-black-border-color
);--system-spectrum-button-staticblack-outline-content-color-disabled:var(
--spectrum-disabled-static-black-content-color
);--system-spectrum-button-staticblack-secondary-background-color-default:var(
--spectrum-transparent-black-200
);--system-spectrum-button-staticblack-secondary-background-color-hover:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-secondary-background-color-down:var(
--spectrum-transparent-black-400
);--system-spectrum-button-staticblack-secondary-background-color-focus:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-secondary-border-color-default:transparent;--system-spectrum-button-staticblack-secondary-border-color-hover:transparent;--system-spectrum-button-staticblack-secondary-border-color-down:transparent;--system-spectrum-button-staticblack-secondary-border-color-focus:transparent;--system-spectrum-button-staticblack-secondary-content-color-default:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-content-color-hover:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-content-color-down:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-content-color-focus:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-focus-indicator-color:var(
--spectrum-static-black-focus-indicator-color
);--system-spectrum-button-staticblack-secondary-background-color-disabled:var(
--spectrum-disabled-static-black-background-color
);--system-spectrum-button-staticblack-secondary-border-color-disabled:transparent;--system-spectrum-button-staticblack-secondary-content-color-disabled:var(
--spectrum-disabled-static-black-content-color
);--system-spectrum-button-staticblack-secondary-outline-background-color-default:transparent;--system-spectrum-button-staticblack-secondary-outline-background-color-hover:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-secondary-outline-background-color-down:var(
--spectrum-transparent-black-400
);--system-spectrum-button-staticblack-secondary-outline-background-color-focus:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-secondary-outline-border-color-default:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-secondary-outline-border-color-hover:var(
--spectrum-transparent-black-400
);--system-spectrum-button-staticblack-secondary-outline-border-color-down:var(
--spectrum-transparent-black-500
);--system-spectrum-button-staticblack-secondary-outline-border-color-focus:var(
--spectrum-transparent-black-400
);--system-spectrum-button-staticblack-secondary-outline-content-color-default:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-outline-content-color-hover:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-outline-content-color-down:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-outline-content-color-focus:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-outline-focus-indicator-color:var(
--spectrum-static-black-focus-indicator-color
);--system-spectrum-button-staticblack-secondary-outline-background-color-disabled:transparent;--system-spectrum-button-staticblack-secondary-outline-border-color-disabled:var(
--spectrum-disabled-static-black-border-color
);--system-spectrum-button-staticblack-secondary-outline-content-color-disabled:var(
--spectrum-disabled-static-black-content-color
)}:host,:root{--system-spectrum-checkbox-control-color-default:var(--spectrum-gray-600);--system-spectrum-checkbox-control-color-hover:var(--spectrum-gray-700);--system-spectrum-checkbox-control-color-down:var(--spectrum-gray-800);--system-spectrum-checkbox-control-color-focus:var(--spectrum-gray-700)}:host,:root{--system-spectrum-closebutton-background-color-default:transparent;--system-spectrum-closebutton-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-closebutton-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-closebutton-background-color-focus:var(
--spectrum-gray-200
)}:host,:root{--system-spectrum-infieldbutton-spectrum-infield-button-border-width:var(
--spectrum-border-width-100
);--system-spectrum-infieldbutton-spectrum-infield-button-border-color:inherit;--system-spectrum-infieldbutton-spectrum-infield-button-border-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-infieldbutton-spectrum-infield-button-border-radius-reset:0;--system-spectrum-infieldbutton-spectrum-infield-button-stacked-top-border-radius-start-start:var(
--spectrum-infield-button-border-radius-reset
);--system-spectrum-infieldbutton-spectrum-infield-button-stacked-bottom-border-radius-end-start:var(
--spectrum-infield-button-border-radius-reset
);--system-spectrum-infieldbutton-spectrum-infield-button-background-color:var(
--spectrum-gray-75
);--system-spectrum-infieldbutton-spectrum-infield-button-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-infieldbutton-spectrum-infield-button-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-infieldbutton-spectrum-infield-button-background-color-key-focus:var(
--spectrum-gray-200
)}:host,:root{--system-spectrum-radio-button-border-color-default:var(
--spectrum-gray-600
);--system-spectrum-radio-button-border-color-hover:var(--spectrum-gray-700);--system-spectrum-radio-button-border-color-down:var(--spectrum-gray-800);--system-spectrum-radio-button-border-color-focus:var(--spectrum-gray-700);--system-spectrum-radio-emphasized-button-checked-border-color-default:var(
--spectrum-accent-color-900
);--system-spectrum-radio-emphasized-button-checked-border-color-hover:var(
--spectrum-accent-color-1000
);--system-spectrum-radio-emphasized-button-checked-border-color-down:var(
--spectrum-accent-color-1100
);--system-spectrum-radio-emphasized-button-checked-border-color-focus:var(
--spectrum-accent-color-1000
)}:host,:root{--system-spectrum-switch-handle-border-color-default:var(
--spectrum-gray-600
);--system-spectrum-switch-handle-border-color-hover:var(
--spectrum-gray-700
);--system-spectrum-switch-handle-border-color-down:var(--spectrum-gray-800);--system-spectrum-switch-handle-border-color-focus:var(
--spectrum-gray-700
);--system-spectrum-switch-handle-border-color-selected-default:var(
--spectrum-gray-700
);--system-spectrum-switch-handle-border-color-selected-hover:var(
--spectrum-gray-800
);--system-spectrum-switch-handle-border-color-selected-down:var(
--spectrum-gray-900
);--system-spectrum-switch-handle-border-color-selected-focus:var(
--spectrum-gray-800
)}:host,:root{--system-spectrum-tag-border-color:var(--spectrum-gray-700);--system-spectrum-tag-border-color-hover:var(--spectrum-gray-800);--system-spectrum-tag-border-color-active:var(--spectrum-gray-900);--system-spectrum-tag-border-color-focus:var(--spectrum-gray-800);--system-spectrum-tag-size-small-corner-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-tag-size-medium-corner-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-tag-size-large-corner-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-tag-background-color:var(--spectrum-gray-75);--system-spectrum-tag-background-color-hover:var(--spectrum-gray-75);--system-spectrum-tag-background-color-active:var(--spectrum-gray-200);--system-spectrum-tag-background-color-focus:var(--spectrum-gray-75);--system-spectrum-tag-content-color:var(
--spectrum-neutral-subdued-content-color-default
);--system-spectrum-tag-content-color-hover:var(
--spectrum-neutral-subdued-content-color-hover
);--system-spectrum-tag-content-color-active:var(
--spectrum-neutral-subdued-content-color-down
);--system-spectrum-tag-content-color-focus:var(
--spectrum-neutral-subdued-content-color-key-focus
);--system-spectrum-tag-border-color-selected:var(
--spectrum-neutral-subdued-background-color-default
);--system-spectrum-tag-border-color-selected-hover:var(
--spectrum-neutral-subdued-background-color-hover
);--system-spectrum-tag-border-color-selected-active:var(
--spectrum-neutral-subdued-background-color-down
);--system-spectrum-tag-border-color-selected-focus:var(
--spectrum-neutral-subdued-background-color-key-focus
);--system-spectrum-tag-border-color-disabled:transparent;--system-spectrum-tag-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-tag-size-small-spacing-inline-start:var(
--spectrum-component-edge-to-visual-75
);--system-spectrum-tag-size-small-label-spacing-inline-end:var(
--spectrum-component-edge-to-text-75
);--system-spectrum-tag-size-small-clear-button-spacing-inline-end:var(
--spectrum-component-edge-to-visual-75
);--system-spectrum-tag-size-medium-spacing-inline-start:var(
--spectrum-component-edge-to-visual-100
);--system-spectrum-tag-size-medium-label-spacing-inline-end:var(
--spectrum-component-edge-to-text-100
);--system-spectrum-tag-size-medium-clear-button-spacing-inline-end:var(
--spectrum-component-edge-to-visual-100
);--system-spectrum-tag-size-large-spacing-inline-start:var(
--spectrum-component-edge-to-visual-200
);--system-spectrum-tag-size-large-label-spacing-inline-end:var(
--spectrum-component-edge-to-text-200
);--system-spectrum-tag-size-large-clear-button-spacing-inline-end:var(
--spectrum-component-edge-to-visual-200
)}:host,:root{--system-spectrum-toast-background-color-default:var(
--spectrum-neutral-subdued-background-color-default
)}:host,:root{--system-spectrum-tooltip-backgound-color-default-neutral:var(
--spectrum-neutral-subdued-background-color-default
)}:host,:root{--system-spectrum-picker-background-color-default:var(--spectrum-gray-75);--system-spectrum-picker-background-color-default-open:var(
--spectrum-gray-200
);--system-spectrum-picker-background-color-active:var(--spectrum-gray-300);--system-spectrum-picker-background-color-hover:var(--spectrum-gray-200);--system-spectrum-picker-background-color-hover-open:var(
--spectrum-gray-200
);--system-spectrum-picker-background-color-key-focus:var(
--spectrum-gray-200
);--system-spectrum-picker-border-color-default:var(--spectrum-gray-500);--system-spectrum-picker-border-color-default-open:var(
--spectrum-gray-500
);--system-spectrum-picker-border-color-hover:var(--spectrum-gray-600);--system-spectrum-picker-border-color-hover-open:var(--spectrum-gray-600);--system-spectrum-picker-border-color-active:var(--spectrum-gray-700);--system-spectrum-picker-border-color-key-focus:var(--spectrum-gray-600)}:host,:root{--system-spectrum-slider-track-color:var(--spectrum-gray-300);--system-spectrum-slider-track-fill-color:var(--spectrum-gray-700);--system-spectrum-slider-ramp-track-color:var(--spectrum-gray-400);--system-spectrum-slider-ramp-track-color-disabled:var(
--spectrum-gray-200
);--system-spectrum-slider-handle-background-color:transparent;--system-spectrum-slider-handle-background-color-disabled:transparent;--system-spectrum-slider-ramp-handle-background-color:var(
--spectrum-gray-100
);--system-spectrum-slider-ticks-handle-background-color:var(
--spectrum-gray-100
);--system-spectrum-slider-handle-border-color:var(--spectrum-gray-700);--system-spectrum-slider-handle-disabled-background-color:var(
--spectrum-gray-100
);--system-spectrum-slider-tick-mark-color:var(--spectrum-gray-300);--system-spectrum-slider-handle-border-color-hover:var(
--spectrum-gray-800
);--system-spectrum-slider-handle-border-color-down:var(--spectrum-gray-800);--system-spectrum-slider-handle-border-color-key-focus:var(
--spectrum-gray-800
);--system-spectrum-slider-handle-focus-ring-color-key-focus:var(
--spectrum-focus-indicator-color
)}:host,:root{--system-spectrum-popover-border-width:var(--spectrum-border-width-100)}:host,:root{--system-spectrum-stepper-border-width:var(--spectrum-border-width-100);--system-spectrum-stepper-buttons-border-style:none;--system-spectrum-stepper-buttons-border-width:0;--system-spectrum-stepper-buttons-background-color:var(--spectrum-gray-50);--system-spectrum-stepper-border-color:var(--spectrum-gray-500);--system-spectrum-stepper-border-color-hover:var(--spectrum-gray-600);--system-spectrum-stepper-border-color-focus:var(--spectrum-gray-800);--system-spectrum-stepper-border-color-focus-hover:var(
--spectrum-gray-800
);--system-spectrum-stepper-border-color-keyboard-focus:var(
--spectrum-gray-900
);--system-spectrum-stepper-button-border-radius-reset:0px;--system-spectrum-stepper-button-background-color-focus:var(
--spectrum-gray-300
);--system-spectrum-stepper-button-background-color-keyboard-focus:var(
--spectrum-gray-200
)}:host,:root{--system-spectrum-textfield-border-color:var(--spectrum-gray-500);--system-spectrum-textfield-border-color-hover:var(--spectrum-gray-600);--system-spectrum-textfield-border-color-focus:var(--spectrum-gray-800);--system-spectrum-textfield-border-color-focus-hover:var(
--spectrum-gray-900
);--system-spectrum-textfield-border-color-keyboard-focus:var(
--spectrum-gray-900
);--system-spectrum-textfield-border-width:var(--spectrum-border-width-100)}:host,:root{--system-spectrum-search-border-radius:var(--spectrum-corner-radius-100);--system-spectrum-search-edge-to-visual:var(
--spectrum-component-edge-to-visual-100
);--system-spectrum-search-border-color-default:var(--spectrum-gray-500);--system-spectrum-search-border-color-hover:var(--spectrum-gray-600);--system-spectrum-search-border-color-focus:var(--spectrum-gray-800);--system-spectrum-search-border-color-focus-hover:var(--spectrum-gray-900);--system-spectrum-search-border-color-key-focus:var(--spectrum-gray-900);--system-spectrum-search-sizes-border-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-search-sizes-edge-to-visual:var(
--spectrum-component-edge-to-visual-75
);--system-spectrum-search-sizem-border-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-search-sizem-edge-to-visual:var(
--spectrum-component-edge-to-visual-100
);--system-spectrum-search-sizel-border-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-search-sizel-edge-to-visual:var(
--spectrum-component-edge-to-visual-200
);--system-spectrum-search-sizexl-border-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-search-sizexl-edge-to-visual:var(
--spectrum-component-edge-to-visual-300
)}:host,:root{--system-spectrum-tabs-font-weight:var(--spectrum-default-font-weight)}:host,:root{--system-spectrum-pickerbutton-spectrum-picker-button-background-color:var(
--spectrum-gray-75
);--system-spectrum-pickerbutton-spectrum-picker-button-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-pickerbutton-spectrum-picker-button-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-pickerbutton-spectrum-picker-button-background-color-key-focus:var(
--spectrum-gray-200
);--system-spectrum-pickerbutton-spectrum-picker-button-border-color:inherit;--system-spectrum-pickerbutton-spectrum-picker-button-border-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-pickerbutton-spectrum-picker-button-border-radius-rounded-sided:0;--system-spectrum-pickerbutton-spectrum-picker-button-border-radius-sided:0;--system-spectrum-pickerbutton-spectrum-picker-button-border-width:var(
--spectrum-border-width-100
)}:host,:root{--system:spectrum;--spectrum-animation-linear:cubic-bezier(0,0,1,1);--spectrum-animation-duration-0:0ms;--spectrum-animation-duration-100:130ms;--spectrum-animation-duration-200:160ms;--spectrum-animation-duration-300:190ms;--spectrum-animation-duration-400:220ms;--spectrum-animation-duration-500:250ms;--spectrum-animation-duration-600:300ms;--spectrum-animation-duration-700:350ms;--spectrum-animation-duration-800:400ms;--spectrum-animation-duration-900:450ms;--spectrum-animation-duration-1000:500ms;--spectrum-animation-duration-2000:1000ms;--spectrum-animation-duration-4000:2000ms;--spectrum-animation-duration-6000:3000ms;--spectrum-animation-ease-in-out:cubic-bezier(0.45,0,0.4,1);--spectrum-animation-ease-in:cubic-bezier(0.5,0,1,1);--spectrum-animation-ease-out:cubic-bezier(0,0,0.4,1);--spectrum-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-sans-font-family-stack:adobe-clean,var(--spectrum-sans-serif-font-family),"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-sans-serif-font:var(--spectrum-sans-font-family-stack);--spectrum-serif-font-family-stack:adobe-clean-serif,var(--spectrum-serif-font-family),"Source Serif Pro",Georgia,serif;--spectrum-serif-font:var(--spectrum-serif-font-family-stack);--spectrum-code-font-family-stack:"Source Code Pro",Monaco,monospace;--spectrum-cjk-font-family-stack:adobe-clean-han-japanese,var(--spectrum-cjk-font-family),sans-serif;--spectrum-cjk-font:var(--spectrum-code-font-family-stack);--spectrum-docs-static-white-background-color-rgb:15,121,125;--spectrum-docs-static-white-background-color:rgba(var(--spectrum-docs-static-white-background-color-rgb));--spectrum-docs-static-black-background-color-rgb:206,247,243;--spectrum-docs-static-black-background-color:rgba(var(--spectrum-docs-static-black-background-color-rgb))}

/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/:host,:root{--spectrum-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-font-family:var(--spectrum-sans-font-family-stack);--spectrum-font-style:var(--spectrum-default-font-style);--spectrum-font-size:var(--spectrum-font-size-100);font-family:var(--spectrum-font-family);font-size:var(--spectrum-font-size);font-style:var(--spectrum-font-style)}.spectrum:lang(ar){font-family:var(--spectrum-font-family-ar)}.spectrum:lang(he){font-family:var(--spectrum-font-family-he)}.spectrum-Heading{--spectrum-heading-sans-serif-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-heading-serif-font-family:var(
--spectrum-serif-font-family-stack
);--spectrum-heading-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-heading-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-heading-font-color:var(--spectrum-heading-color);--spectrum-heading-margin-start:calc(var(--mod-heading-font-size, var(--spectrum-heading-font-size))*var(--spectrum-heading-margin-top-multiplier));--spectrum-heading-margin-end:calc(var(--mod-heading-font-size, var(--spectrum-heading-font-size))*var(--spectrum-heading-margin-bottom-multiplier))}@media (forced-colors:active){.spectrum-Heading{--highcontrast-heading-font-color:Text}}.spectrum-Heading--sizeXXS{--spectrum-heading-font-size:var(--spectrum-heading-size-xxs);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxs)}.spectrum-Heading--sizeXS{--spectrum-heading-font-size:var(--spectrum-heading-size-xs);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xs)}.spectrum-Heading--sizeS{--spectrum-heading-font-size:var(--spectrum-heading-size-s);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-s)}.spectrum-Heading--sizeM{--spectrum-heading-font-size:var(--spectrum-heading-size-m);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-m)}.spectrum-Heading--sizeL{--spectrum-heading-font-size:var(--spectrum-heading-size-l);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-l)}.spectrum-Heading--sizeXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xl)}.spectrum-Heading--sizeXXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xxl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxl)}.spectrum-Heading--sizeXXXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xxxl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxxl)}.spectrum-Heading{color:var(
--highcontrast-heading-font-color,var(--mod-heading-font-color,var(--spectrum-heading-font-color))
);font-family:var(
--mod-heading-sans-serif-font-family,var(--spectrum-heading-sans-serif-font-family)
);font-size:var(--mod-heading-font-size,var(--spectrum-heading-font-size));font-style:var(
--mod-heading-sans-serif-font-style,var(--spectrum-heading-sans-serif-font-style)
);font-weight:var(
--mod-heading-sans-serif-font-weight,var(--spectrum-heading-sans-serif-font-weight)
);line-height:var(
--mod-heading-line-height,var(--spectrum-heading-line-height)
);margin-block-end:0;margin-block-start:0}.spectrum-Heading .spectrum-Heading-strong,.spectrum-Heading strong{font-style:var(
--mod-heading-sans-serif-strong-font-style,var(--spectrum-heading-sans-serif-strong-font-style)
);font-weight:var(
--mod-heading-sans-serif-strong-font-weight,var(--spectrum-heading-sans-serif-strong-font-weight)
)}.spectrum-Heading .spectrum-Heading-emphasized,.spectrum-Heading em{font-style:var(
--mod-heading-sans-serif-emphasized-font-style,var(--spectrum-heading-sans-serif-emphasized-font-style)
);font-weight:var(
--mod-heading-sans-serif-emphasized-font-weight,var(--spectrum-heading-sans-serif-emphasized-font-weight)
)}.spectrum-Heading .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading em strong,.spectrum-Heading strong em{font-style:var(
--mod-heading-sans-serif-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-sans-serif-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-strong-emphasized-font-weight)
)}.spectrum-Heading:lang(ja),.spectrum-Heading:lang(ko),.spectrum-Heading:lang(zh){font-family:var(
--mod-heading-cjk-font-family,var(--spectrum-heading-cjk-font-family)
);font-size:var(
--mod-heading-cjk-font-size,var(--spectrum-heading-cjk-font-size)
);font-style:var(
--mod-heading-cjk-font-style,var(--spectrum-heading-cjk-font-style)
);font-weight:var(
--mod-heading-cjk-font-weight,var(--spectrum-heading-cjk-font-weight)
);letter-spacing:var(
--mod-heading-cjk-letter-spacing,var(--spectrum-heading-cjk-letter-spacing)
);line-height:var(
--mod-heading-cjk-line-height,var(--spectrum-heading-cjk-line-height)
)}.spectrum-Heading:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em,.spectrum-Heading:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em,.spectrum-Heading:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em{font-style:var(
--mod-heading-cjk-emphasized-font-style,var(--spectrum-heading-cjk-emphasized-font-style)
);font-weight:var(
--mod-heading-cjk-emphasized-font-weight,var(--spectrum-heading-cjk-emphasized-font-weight)
)}.spectrum-Heading:lang(ja) .spectrum-Heading-strong,.spectrum-Heading:lang(ja) strong,.spectrum-Heading:lang(ko) .spectrum-Heading-strong,.spectrum-Heading:lang(ko) strong,.spectrum-Heading:lang(zh) .spectrum-Heading-strong,.spectrum-Heading:lang(zh) strong{font-style:var(
--mod-heading-cjk-strong-font-style,var(--spectrum-heading-cjk-strong-font-style)
);font-weight:var(
--mod-heading-cjk-strong-font-weight,var(--spectrum-heading-cjk-strong-font-weight)
)}.spectrum-Heading:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em strong,.spectrum-Heading:lang(ja) strong em,.spectrum-Heading:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em strong,.spectrum-Heading:lang(ko) strong em,.spectrum-Heading:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em strong,.spectrum-Heading:lang(zh) strong em{font-style:var(
--mod-heading-cjk-strong-emphasized-font-style,var(--spectrum-heading-cjk-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-cjk-strong-emphasized-font-weight,var(--spectrum-heading-cjk-strong-emphasized-font-weight)
)}.spectrum-Heading--heavy{font-style:var(
--mod-heading-sans-serif-heavy-font-style,var(--spectrum-heading-sans-serif-heavy-font-style)
);font-weight:var(
--mod-heading-sans-serif-heavy-font-weight,var(--spectrum-heading-sans-serif-heavy-font-weight)
)}.spectrum-Heading--heavy .spectrum-Heading-strong,.spectrum-Heading--heavy strong{font-style:var(
--mod-heading-sans-serif-heavy-strong-font-style,var(--spectrum-heading-sans-serif-heavy-strong-font-style)
);font-weight:var(
--mod-heading-sans-serif-heavy-strong-font-weight,var(--spectrum-heading-sans-serif-heavy-strong-font-weight)
)}.spectrum-Heading--heavy .spectrum-Heading-emphasized,.spectrum-Heading--heavy em{font-style:var(
--mod-heading-sans-serif-heavy-emphasized-font-style,var(--spectrum-heading-sans-serif-heavy-emphasized-font-style)
);font-weight:var(
--mod-heading-sans-serif-heavy-emphasized-font-weight,var(--spectrum-heading-sans-serif-heavy-emphasized-font-weight)
)}.spectrum-Heading--heavy .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy em strong,.spectrum-Heading--heavy strong em{font-style:var(
--mod-heading-sans-serif-heavy-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-heavy-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-sans-serif-heavy-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-heavy-strong-emphasized-font-weight)
)}.spectrum-Heading--heavy:lang(ja),.spectrum-Heading--heavy:lang(ko),.spectrum-Heading--heavy:lang(zh){font-style:var(
--mod-heading-cjk-heavy-font-style,var(--spectrum-heading-cjk-heavy-font-style)
);font-weight:var(
--mod-heading-cjk-heavy-font-weight,var(--spectrum-heading-cjk-heavy-font-weight)
)}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em{font-style:var(
--mod-heading-cjk-heavy-emphasized-font-style,var(--spectrum-heading-cjk-heavy-emphasized-font-style)
);font-weight:var(
--mod-heading-cjk-heavy-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-emphasized-font-weight)
)}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ja) strong,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ko) strong,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(zh) strong{font-style:var(
--mod-heading-cjk-heavy-strong-font-style,var(--spectrum-heading-cjk-heavy-strong-font-style)
);font-weight:var(
--mod-heading-cjk-heavy-strong-font-weight,var(--spectrum-heading-cjk-heavy-strong-font-weight)
)}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em strong,.spectrum-Heading--heavy:lang(ja) strong em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em strong,.spectrum-Heading--heavy:lang(ko) strong em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em strong,.spectrum-Heading--heavy:lang(zh) strong em{font-style:var(
--mod-heading-cjk-heavy-strong-emphasized-font-style,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-cjk-heavy-strong-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-weight)
)}.spectrum-Heading--light{font-style:var(
--mod-heading-sans-serif-light-font-style,var(--spectrum-heading-sans-serif-light-font-style)
);font-weight:var(
--mod-heading-sans-serif-light-font-weight,var(--spectrum-heading-sans-serif-light-font-weight)
)}.spectrum-Heading--light .spectrum-Heading-emphasized,.spectrum-Heading--light em{font-style:var(
--mod-heading-sans-serif-light-emphasized-font-style,var(--spectrum-heading-sans-serif-light-emphasized-font-style)
);font-weight:var(
--mod-heading-sans-serif-light-emphasized-font-weight,var(--spectrum-heading-sans-serif-light-emphasized-font-weight)
)}.spectrum-Heading--light .spectrum-Heading-strong,.spectrum-Heading--light strong{font-style:var(
--mod-heading-sans-serif-light-strong-font-style,var(--spectrum-heading-sans-serif-light-strong-font-style)
);font-weight:var(
--mod-heading-sans-serif-light-strong-font-weight,var(--spectrum-heading-sans-serif-light-strong-font-weight)
)}.spectrum-Heading--light .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light em strong,.spectrum-Heading--light strong em{font-style:var(
--mod-heading-sans-serif-light-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-light-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-sans-serif-light-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-light-strong-emphasized-font-weight)
)}.spectrum-Heading--light:lang(ja),.spectrum-Heading--light:lang(ko),.spectrum-Heading--light:lang(zh){font-style:var(
--mod-heading-cjk-light-font-style,var(--spectrum-heading-cjk-light-font-style)
);font-weight:var(
--mod-heading-cjk-light-font-weight,var(--spectrum-heading-cjk-light-font-weight)
)}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ja) strong,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ko) strong,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--light:lang(zh) strong{font-style:var(
--mod-heading-cjk-light-strong-font-style,var(--spectrum-heading-cjk-light-strong-font-style)
);font-weight:var(
--mod-heading-cjk-light-strong-font-weight,var(--spectrum-heading-cjk-light-strong-font-weight)
)}.spectrum-Heading--light:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em{font-style:var(
--mod-heading-cjk-light-emphasized-font-style,var(--spectrum-heading-cjk-light-emphasized-font-style)
);font-weight:var(
--mod-heading-cjk-light-emphasized-font-weight,var(--spectrum-heading-cjk-light-emphasized-font-weight)
)}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em strong,.spectrum-Heading--light:lang(ja) strong em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em strong,.spectrum-Heading--light:lang(ko) strong em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em strong,.spectrum-Heading--light:lang(zh) strong em{font-style:var(
--mod-heading-cjk-light-strong-emphasized-font-style,var(--spectrum-heading-cjk-light-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-cjk-light-strong-emphasized-font-weight,var(--spectrum-heading-cjk-light-strong-emphasized-font-weight)
)}.spectrum-Heading--serif{font-family:var(
--mod-heading-serif-font-family,var(--spectrum-heading-serif-font-family)
);font-style:var(
--mod-heading-serif-font-style,var(--spectrum-heading-serif-font-style)
);font-weight:var(
--mod-heading-serif-font-weight,var(--spectrum-heading-serif-font-weight)
)}.spectrum-Heading--serif .spectrum-Heading-emphasized,.spectrum-Heading--serif em{font-style:var(
--mod-heading-serif-emphasized-font-style,var(--spectrum-heading-serif-emphasized-font-style)
);font-weight:var(
--mod-heading-serif-emphasized-font-weight,var(--spectrum-heading-serif-emphasized-font-weight)
)}.spectrum-Heading--serif .spectrum-Heading-strong,.spectrum-Heading--serif strong{font-style:var(
--mod-heading-serif-strong-font-style,var(--spectrum-heading-serif-strong-font-style)
);font-weight:var(
--mod-heading-serif-strong-font-weight,var(--spectrum-heading-serif-strong-font-weight)
)}.spectrum-Heading--serif .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif em strong,.spectrum-Heading--serif strong em{font-style:var(
--mod-heading-serif-strong-emphasized-font-style,var(--spectrum-heading-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-serif-strong-emphasized-font-weight,var(--spectrum-heading-serif-strong-emphasized-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--heavy{font-style:var(
--mod-heading-serif-heavy-font-style,var(--spectrum-heading-serif-heavy-font-style)
);font-weight:var(
--mod-heading-serif-heavy-font-weight,var(--spectrum-heading-serif-heavy-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-strong,.spectrum-Heading--serif.spectrum-Heading--heavy strong{font-style:var(
--mod-heading-serif-heavy-strong-font-style,var(--spectrum-heading-serif-heavy-strong-font-style)
);font-weight:var(
--mod-heading-serif-heavy-strong-font-weight,var(--spectrum-heading-serif-heavy-strong-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--heavy em{font-style:var(
--mod-heading-serif-heavy-emphasized-font-style,var(--spectrum-heading-serif-heavy-emphasized-font-style)
);font-weight:var(
--mod-heading-serif-heavy-emphasized-font-weight,var(--spectrum-heading-serif-heavy-emphasized-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--heavy em strong,.spectrum-Heading--serif.spectrum-Heading--heavy strong em{font-style:var(
--mod-heading-serif-heavy-strong-emphasized-font-style,var(--spectrum-heading-serif-heavy-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-serif-heavy-strong-emphasized-font-weight,var(--spectrum-heading-serif-heavy-strong-emphasized-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--light{font-style:var(
--mod-heading-serif-light-font-style,var(--spectrum-heading-serif-light-font-style)
);font-weight:var(
--mod-heading-serif-light-font-weight,var(--spectrum-heading-serif-light-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--light em{font-style:var(
--mod-heading-serif-light-emphasized-font-style,var(--spectrum-heading-serif-light-emphasized-font-style)
);font-weight:var(
--mod-heading-serif-light-emphasized-font-weight,var(--spectrum-heading-serif-light-emphasized-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-strong,.spectrum-Heading--serif.spectrum-Heading--light strong{font-style:var(
--mod-heading-serif-light-strong-font-style,var(--spectrum-heading-serif-light-strong-font-style)
);font-weight:var(
--mod-heading-serif-light-strong-font-weight,var(--spectrum-heading-serif-light-strong-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--light em strong,.spectrum-Heading--serif.spectrum-Heading--light strong em{font-style:var(
--mod-heading-serif-light-strong-emphasized-font-style,var(--spectrum-heading-serif-light-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-serif-light-strong-emphasized-font-weight,var(--spectrum-heading-serif-light-strong-emphasized-font-weight)
)}.spectrum-Typography .spectrum-Heading{margin-block-end:var(
--mod-heading-margin-end,var(--spectrum-heading-margin-end)
);margin-block-start:var(
--mod-heading-margin-start,var(--spectrum-heading-margin-start)
)}.spectrum-Body{--spectrum-body-sans-serif-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-body-serif-font-family:var(--spectrum-serif-font-family-stack);--spectrum-body-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-body-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-body-margin:calc(var(--mod-body-font-size, var(--spectrum-body-font-size))*var(--spectrum-body-margin-multiplier));--spectrum-body-font-color:var(--spectrum-body-color)}@media (forced-colors:active){.spectrum-Body{--highcontrast-body-font-color:Text}}.spectrum-Body--sizeXS{--spectrum-body-font-size:var(--spectrum-body-size-xs)}.spectrum-Body--sizeS{--spectrum-body-font-size:var(--spectrum-body-size-s)}.spectrum-Body--sizeM{--spectrum-body-font-size:var(--spectrum-body-size-m)}.spectrum-Body--sizeL{--spectrum-body-font-size:var(--spectrum-body-size-l)}.spectrum-Body--sizeXL{--spectrum-body-font-size:var(--spectrum-body-size-xl)}.spectrum-Body--sizeXXL{--spectrum-body-font-size:var(--spectrum-body-size-xxl)}.spectrum-Body--sizeXXXL{--spectrum-body-font-size:var(--spectrum-body-size-xxxl)}.spectrum-Body{color:var(
--highcontrast-body-font-color,var(--mod-body-font-color,var(--spectrum-body-font-color))
);font-family:var(
--mod-body-sans-serif-font-family,var(--spectrum-body-sans-serif-font-family)
);font-size:var(--mod-body-font-size,var(--spectrum-body-font-size));font-style:var(
--mod-body-sans-serif-font-style,var(--spectrum-body-sans-serif-font-style)
);font-weight:var(
--mod-body-sans-serif-font-weight,var(--spectrum-body-sans-serif-font-weight)
);line-height:var(--mod-body-line-height,var(--spectrum-body-line-height));margin-block-end:0;margin-block-start:0}.spectrum-Body .spectrum-Body-strong,.spectrum-Body strong{font-style:var(
--mod-body-sans-serif-strong-font-style,var(--spectrum-body-sans-serif-strong-font-style)
);font-weight:var(
--mod-body-sans-serif-strong-font-weight,var(--spectrum-body-sans-serif-strong-font-weight)
)}.spectrum-Body .spectrum-Body-emphasized,.spectrum-Body em{font-style:var(
--mod-body-sans-serif-emphasized-font-style,var(--spectrum-body-sans-serif-emphasized-font-style)
);font-weight:var(
--mod-body-sans-serif-emphasized-font-weight,var(--spectrum-body-sans-serif-emphasized-font-weight)
)}.spectrum-Body .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body em strong,.spectrum-Body strong em{font-style:var(
--mod-body-sans-serif-strong-emphasized-font-style,var(--spectrum-body-sans-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-body-sans-serif-strong-emphasized-font-weight,var(--spectrum-body-sans-serif-strong-emphasized-font-weight)
)}.spectrum-Body:lang(ja),.spectrum-Body:lang(ko),.spectrum-Body:lang(zh){font-family:var(
--mod-body-cjk-font-family,var(--spectrum-body-cjk-font-family)
);font-style:var(
--mod-body-cjk-font-style,var(--spectrum-body-cjk-font-style)
);font-weight:var(
--mod-body-cjk-font-weight,var(--spectrum-body-cjk-font-weight)
);letter-spacing:var(
--mod-body-cjk-letter-spacing,var(--spectrum-body-cjk-letter-spacing)
);line-height:var(
--mod-body-cjk-line-height,var(--spectrum-body-cjk-line-height)
)}.spectrum-Body:lang(ja) .spectrum-Body-strong,.spectrum-Body:lang(ja) strong,.spectrum-Body:lang(ko) .spectrum-Body-strong,.spectrum-Body:lang(ko) strong,.spectrum-Body:lang(zh) .spectrum-Body-strong,.spectrum-Body:lang(zh) strong{font-style:var(
--mod-body-cjk-strong-font-style,var(--spectrum-body-cjk-strong-font-style)
);font-weight:var(
--mod-body-cjk-strong-font-weight,var(--spectrum-body-cjk-strong-font-weight)
)}.spectrum-Body:lang(ja) .spectrum-Body-emphasized,.spectrum-Body:lang(ja) em,.spectrum-Body:lang(ko) .spectrum-Body-emphasized,.spectrum-Body:lang(ko) em,.spectrum-Body:lang(zh) .spectrum-Body-emphasized,.spectrum-Body:lang(zh) em{font-style:var(
--mod-body-cjk-emphasized-font-style,var(--spectrum-body-cjk-emphasized-font-style)
);font-weight:var(
--mod-body-cjk-emphasized-font-weight,var(--spectrum-body-cjk-emphasized-font-weight)
)}.spectrum-Body:lang(ja) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ja) em strong,.spectrum-Body:lang(ja) strong em,.spectrum-Body:lang(ko) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ko) em strong,.spectrum-Body:lang(ko) strong em,.spectrum-Body:lang(zh) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(zh) em strong,.spectrum-Body:lang(zh) strong em{font-style:var(
--mod-body-cjk-strong-emphasized-font-style,var(--spectrum-body-cjk-strong-emphasized-font-style)
);font-weight:var(
--mod-body-cjk-strong-emphasized-font-weight,var(--spectrum-body-cjk-strong-emphasized-font-weight)
)}.spectrum-Body--serif{font-family:var(
--mod-body-serif-font-family,var(--spectrum-body-serif-font-family)
);font-style:var(
--mod-body-serif-font-style,var(--spectrum-body-serif-font-style)
);font-weight:var(
--mod-body-serif-font-weight,var(--spectrum-body-serif-font-weight)
)}.spectrum-Body--serif .spectrum-Body-strong,.spectrum-Body--serif strong{font-style:var(
--mod-body-serif-strong-font-style,var(--spectrum-body-serif-strong-font-style)
);font-weight:var(
--mod-body-serif-strong-font-weight,var(--spectrum-body-serif-strong-font-weight)
)}.spectrum-Body--serif .spectrum-Body-emphasized,.spectrum-Body--serif em{font-style:var(
--mod-body-serif-emphasized-font-style,var(--spectrum-body-serif-emphasized-font-style)
);font-weight:var(
--mod-body-serif-emphasized-font-weight,var(--spectrum-body-serif-emphasized-font-weight)
)}.spectrum-Body--serif .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body--serif em strong,.spectrum-Body--serif strong em{font-style:var(
--mod-body-serif-strong-emphasized-font-style,var(--spectrum-body-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-body-serif-strong-emphasized-font-weight,var(--spectrum-body-serif-strong-emphasized-font-weight)
)}.spectrum-Typography .spectrum-Body{margin-block-end:var(--mod-body-margin,var(--spectrum-body-margin))}.spectrum-Detail{--spectrum-detail-sans-serif-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-detail-serif-font-family:var(
--spectrum-serif-font-family-stack
);--spectrum-detail-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-detail-margin-start:calc(var(--mod-detail-font-size, var(--spectrum-detail-font-size))*var(--spectrum-detail-margin-top-multiplier));--spectrum-detail-margin-end:calc(var(--mod-detail-font-size, var(--spectrum-detail-font-size))*var(--spectrum-detail-margin-bottom-multiplier));--spectrum-detail-font-color:var(--spectrum-detail-color)}@media (forced-colors:active){.spectrum-Detail{--highcontrast-detail-font-color:Text}}.spectrum-Detail--sizeS{--spectrum-detail-font-size:var(--spectrum-detail-size-s)}.spectrum-Detail--sizeM{--spectrum-detail-font-size:var(--spectrum-detail-size-m)}.spectrum-Detail--sizeL{--spectrum-detail-font-size:var(--spectrum-detail-size-l)}.spectrum-Detail--sizeXL{--spectrum-detail-font-size:var(--spectrum-detail-size-xl)}.spectrum-Detail{color:var(
--highcontrast-detail-font-color,var(--mod-detail-font-color,var(--spectrum-detail-font-color))
);font-family:var(
--mod-detail-sans-serif-font-family,var(--spectrum-detail-sans-serif-font-family)
);font-size:var(--mod-detail-font-size,var(--spectrum-detail-font-size));font-style:var(
--mod-detail-sans-serif-font-style,var(--spectrum-detail-sans-serif-font-style)
);font-weight:var(
--mod-detail-sans-serif-font-weight,var(--spectrum-detail-sans-serif-font-weight)
);letter-spacing:var(
--mod-detail-letter-spacing,var(--spectrum-detail-letter-spacing)
);line-height:var(
--mod-detail-line-height,var(--spectrum-detail-line-height)
);margin-block-end:0;margin-block-start:0;text-transform:uppercase}.spectrum-Detail .spectrum-Detail-strong,.spectrum-Detail strong{font-style:var(
--mod-detail-sans-serif-strong-font-style,var(--spectrum-detail-sans-serif-strong-font-style)
);font-weight:var(
--mod-detail-sans-serif-strong-font-weight,var(--spectrum-detail-sans-serif-strong-font-weight)
)}.spectrum-Detail .spectrum-Detail-emphasized,.spectrum-Detail em{font-style:var(
--mod-detail-sans-serif-emphasized-font-style,var(--spectrum-detail-sans-serif-emphasized-font-style)
);font-weight:var(
--mod-detail-sans-serif-emphasized-font-weight,var(--spectrum-detail-sans-serif-emphasized-font-weight)
)}.spectrum-Detail .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail em strong,.spectrum-Detail strong em{font-style:var(
--mod-detail-sans-serif-strong-emphasized-font-style,var(--spectrum-detail-sans-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-sans-serif-strong-emphasized-font-weight,var(--spectrum-detail-sans-serif-strong-emphasized-font-weight)
)}.spectrum-Detail:lang(ja),.spectrum-Detail:lang(ko),.spectrum-Detail:lang(zh){font-family:var(
--mod-detail-cjk-font-family,var(--spectrum-detail-cjk-font-family)
);font-style:var(
--mod-detail-cjk-font-style,var(--spectrum-detail-cjk-font-style)
);font-weight:var(
--mod-detail-cjk-font-weight,var(--spectrum-detail-cjk-font-weight)
);line-height:var(
--mod-detail-cjk-line-height,var(--spectrum-detail-cjk-line-height)
)}.spectrum-Detail:lang(ja) .spectrum-Detail-strong,.spectrum-Detail:lang(ja) strong,.spectrum-Detail:lang(ko) .spectrum-Detail-strong,.spectrum-Detail:lang(ko) strong,.spectrum-Detail:lang(zh) .spectrum-Detail-strong,.spectrum-Detail:lang(zh) strong{font-style:var(
--mod-detail-cjk-strong-font-style,var(--spectrum-detail-cjk-strong-font-style)
);font-weight:var(
--mod-detail-cjk-strong-font-weight,var(--spectrum-detail-cjk-strong-font-weight)
)}.spectrum-Detail:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em,.spectrum-Detail:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em,.spectrum-Detail:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em{font-style:var(
--mod-detail-cjk-emphasized-font-style,var(--spectrum-detail-cjk-emphasized-font-style)
);font-weight:var(
--mod-detail-cjk-emphasized-font-weight,var(--spectrum-detail-cjk-emphasized-font-weight)
)}.spectrum-Detail:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em strong,.spectrum-Detail:lang(ja) strong em,.spectrum-Detail:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em strong,.spectrum-Detail:lang(ko) strong em,.spectrum-Detail:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em strong,.spectrum-Detail:lang(zh) strong em{font-style:var(
--mod-detail-cjk-strong-emphasized-font-style,var(--spectrum-detail-cjk-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-cjk-strong-emphasized-font-weight,var(--spectrum-detail-cjk-strong-emphasized-font-weight)
)}.spectrum-Detail--serif{font-family:var(
--mod-detail-serif-font-family,var(--spectrum-detail-serif-font-family)
);font-style:var(
--mod-detail-serif-font-style,var(--spectrum-detail-serif-font-style)
);font-weight:var(
--mod-detail-serif-font-weight,var(--spectrum-detail-serif-font-weight)
)}.spectrum-Detail--serif .spectrum-Detail-strong,.spectrum-Detail--serif strong{font-style:var(
--mod-detail-serif-strong-font-style,var(--spectrum-detail-serif-strong-font-style)
);font-weight:var(
--mod-detail-serif-strong-font-weight,var(--spectrum-detail-serif-strong-font-weight)
)}.spectrum-Detail--serif .spectrum-Detail-emphasized,.spectrum-Detail--serif em{font-style:var(
--mod-detail-serif-emphasized-font-style,var(--spectrum-detail-serif-emphasized-font-style)
);font-weight:var(
--mod-detail-serif-emphasized-font-weight,var(--spectrum-detail-serif-emphasized-font-weight)
)}.spectrum-Detail--serif .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--serif em strong,.spectrum-Detail--serif strong em{font-style:var(
--mod-detail-serif-strong-emphasized-font-style,var(--spectrum-detail-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-serif-strong-emphasized-font-weight,var(--spectrum-detail-serif-strong-emphasized-font-weight)
)}.spectrum-Detail--light{font-style:var(
--mod-detail-sans-serif-light-font-style,var(--spectrum-detail-sans-serif-light-font-style)
);font-weight:var(
--spectrum-detail-sans-serif-light-font-weight,var(--spectrum-detail-sans-serif-light-font-weight)
)}.spectrum-Detail--light .spectrum-Detail-strong,.spectrum-Detail--light strong{font-style:var(
--mod-detail-sans-serif-light-strong-font-style,var(--spectrum-detail-sans-serif-light-strong-font-style)
);font-weight:var(
--mod-detail-sans-serif-light-strong-font-weight,var(--spectrum-detail-sans-serif-light-strong-font-weight)
)}.spectrum-Detail--light .spectrum-Detail-emphasized,.spectrum-Detail--light em{font-style:var(
--mod-detail-sans-serif-light-emphasized-font-style,var(--spectrum-detail-sans-serif-light-emphasized-font-style)
);font-weight:var(
--mod-detail-sans-serif-light-emphasized-font-weight,var(--spectrum-detail-sans-serif-light-emphasized-font-weight)
)}.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized,.spectrum-Detail--light em strong,.spectrum-Detail--light strong em{font-style:var(
--mod-detail-sans-serif-light-strong-emphasized-font-style,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-sans-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-weight)
)}.spectrum-Detail--light:lang(ja),.spectrum-Detail--light:lang(ko),.spectrum-Detail--light:lang(zh){font-style:var(
--mod-detail-cjk-light-font-style,var(--spectrum-detail-cjk-light-font-style)
);font-weight:var(
--mod-detail-cjk-light-font-weight,var(--spectrum-detail-cjk-light-font-weight)
)}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ja) strong,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ko) strong,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong,.spectrum-Detail--light:lang(zh) strong{font-style:var(
--mod-detail-cjk-light-strong-font-style,var(--spectrum-detail-cjk-light-strong-font-style)
);font-weight:var(
--mod-detail-cjk-light-strong-font-weight,var(--spectrum-detail-cjk-light-strong-font-weight)
)}.spectrum-Detail--light:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ja) em,.spectrum-Detail--light:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) em,.spectrum-Detail--light:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) em{font-style:var(
--mod-detail-cjk-light-emphasized-font-style,var(--spectrum-detail-cjk-light-emphasized-font-style)
);font-weight:var(
--mod-detail-cjk-light-emphasized-font-weight,var(--spectrum-detail-cjk-light-emphasized-font-weight)
)}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized{font-style:var(
--mod-detail-cjk-light-strong-emphasized-font-style,var(--spectrum-detail-cjk-light-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-cjk-light-strong-emphasized-font-weight,var(--spectrum-detail-cjk-light-strong-emphasized-font-weight)
)}.spectrum-Detail--serif.spectrum-Detail--light{font-style:var(
--mod-detail-serif-light-font-style,var(--spectrum-detail-serif-light-font-style)
);font-weight:var(
--mod-detail-serif-light-font-weight,var(--spectrum-detail-serif-light-font-weight)
)}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-strong,.spectrum-Detail--serif.spectrum-Detail--light strong{font-style:var(
--mod-detail-serif-light-strong-font-style,var(--spectrum-detail-serif-light-strong-font-style)
);font-weight:var(
--mod-detail-serif-light-strong-font-weight,var(--spectrum-detail-serif-light-strong-font-weight)
)}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-emphasized,.spectrum-Detail--serif.spectrum-Detail--light em{font-style:var(
--mod-detail-serif-light-emphasized-font-style,var(--spectrum-detail-serif-light-emphasized-font-style)
);font-weight:var(
--mod-detail-serif-light-emphasized-font-weight,var(--spectrum-detail-serif-light-emphasized-font-weight)
)}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized,.spectrum-Detail--serif.spectrum-Detail--light em strong,.spectrum-Detail--serif.spectrum-Detail--light strong em{font-style:var(
--mod-detail-serif-light-strong-emphasized-font-style,var(--spectrum-detail-serif-light-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-serif-light-strong-emphasized-font-weight)
)}.spectrum-Typography .spectrum-Detail{margin-block-end:var(
--mod-detail-margin-end,var(--spectrum-detail-margin-end)
);margin-block-start:var(
--mod-detail-margin-start,var(--spectrum-detail-margin-start)
)}.spectrum-Code{--spectrum-code-font-family:var(--spectrum-code-font-family-stack);--spectrum-code-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-code-font-color:var(--spectrum-code-color)}@media (forced-colors:active){.spectrum-Code{--highcontrast-code-font-color:Text}}.spectrum-Code--sizeXS{--spectrum-code-font-size:var(--spectrum-code-size-xs)}.spectrum-Code--sizeS{--spectrum-code-font-size:var(--spectrum-code-size-s)}.spectrum-Code--sizeM{--spectrum-code-font-size:var(--spectrum-code-size-m)}.spectrum-Code--sizeL{--spectrum-code-font-size:var(--spectrum-code-size-l)}.spectrum-Code--sizeXL{--spectrum-code-font-size:var(--spectrum-code-size-xl)}.spectrum-Code{color:var(
--highcontrast-code-font-color,var(--mod-code-font-color,var(--spectrum-code-font-color))
);font-family:var(--mod-code-font-family,var(--spectrum-code-font-family));font-size:var(--mod-code-font-size,var(--spectrum-code-font-size));font-style:var(--mod-code-font-style,var(--spectrum-code-font-style));font-weight:var(--mod-code-font-weight,var(--spectrum-code-font-weight));line-height:var(--mod-code-line-height,var(--spectrum-code-line-height));margin-block-end:0;margin-block-start:0}.spectrum-Code .spectrum-Code-strong,.spectrum-Code strong{font-style:var(
--mod-code-strong-font-style,var(--spectrum-code-strong-font-style)
);font-weight:var(
--mod-code-strong-font-weight,var(--spectrum-code-strong-font-weight)
)}.spectrum-Code .spectrum-Code-emphasized,.spectrum-Code em{font-style:var(
--mod-code-emphasized-font-style,var(--spectrum-code-emphasized-font-style)
);font-weight:var(
--mod-code-emphasized-font-weight,var(--spectrum-code-emphasized-font-weight)
)}.spectrum-Code .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code em strong,.spectrum-Code strong em{font-style:var(
--mod-code-strong-emphasized-font-style,var(--spectrum-code-strong-emphasized-font-style)
);font-weight:var(
--mod-code-strong-emphasized-font-weight,var(--spectrum-code-strong-emphasized-font-weight)
)}.spectrum-Code:lang(ja),.spectrum-Code:lang(ko),.spectrum-Code:lang(zh){font-family:var(
--mod-code-cjk-font-family,var(--spectrum-code-cjk-font-family)
);font-style:var(
--mod-code-cjk-font-style,var(--spectrum-code-cjk-font-style)
);font-weight:var(
--mod-code-cjk-font-weight,var(--spectrum-code-cjk-font-weight)
);letter-spacing:var(
--mod-code-cjk-letter-spacing,var(--spectrum-code-cjk-letter-spacing)
);line-height:var(
--mod-code-cjk-line-height,var(--spectrum-code-cjk-line-height)
)}.spectrum-Code:lang(ja) .spectrum-Code-strong,.spectrum-Code:lang(ja) strong,.spectrum-Code:lang(ko) .spectrum-Code-strong,.spectrum-Code:lang(ko) strong,.spectrum-Code:lang(zh) .spectrum-Code-strong,.spectrum-Code:lang(zh) strong{font-style:var(
--mod-code-cjk-strong-font-style,var(--spectrum-code-cjk-strong-font-style)
);font-weight:var(
--mod-code-cjk-strong-font-weight,var(--spectrum-code-cjk-strong-font-weight)
)}.spectrum-Code:lang(ja) .spectrum-Code-emphasized,.spectrum-Code:lang(ja) em,.spectrum-Code:lang(ko) .spectrum-Code-emphasized,.spectrum-Code:lang(ko) em,.spectrum-Code:lang(zh) .spectrum-Code-emphasized,.spectrum-Code:lang(zh) em{font-style:var(
--mod-code-cjk-emphasized-font-style,var(--spectrum-code-cjk-emphasized-font-style)
);font-weight:var(
--mod-code-cjk-emphasized-font-weight,var(--spectrum-code-cjk-emphasized-font-weight)
)}.spectrum-Code:lang(ja) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(ja) em strong,.spectrum-Code:lang(ja) strong em,.spectrum-Code:lang(ko) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(ko) em strong,.spectrum-Code:lang(ko) strong em,.spectrum-Code:lang(zh) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(zh) em strong,.spectrum-Code:lang(zh) strong em{font-style:var(
--mod-code-cjk-strong-emphasized-font-style,var(--spectrum-code-cjk-strong-emphasized-font-style)
);font-weight:var(
--mod-code-cjk-strong-emphasized-font-weight,var(--spectrum-code-cjk-strong-emphasized-font-weight)
)}:host{display:block}#scale,#theme{height:100%;width:100%}
`;i.registerThemeFragment("spectrum","theme",n),i.registerThemeFragment("dark","color",e);const l=t.iv`
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
);--spectrum-alias-control-three-width-l:29px;--spectrum-alias-control-three-width-xl:33px;--spectrum-alias-focus-ring-border-radius-regular:var(
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
);--spectrum-dialog-confirm-title-text-size:var(
--spectrum-alias-heading-s-text-size
);--spectrum-dialog-confirm-description-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-dialog-confirm-padding:var(
--spectrum-global-dimension-static-size-500
)}:host,:root{--spectrum-global-alias-appframe-border-size:2px}:host,:root{--spectrum-workflow-icon-size-50:14px;--spectrum-workflow-icon-size-75:16px;--spectrum-workflow-icon-size-100:18px;--spectrum-workflow-icon-size-200:20px;--spectrum-workflow-icon-size-300:22px;--spectrum-arrow-icon-size-75:10px;--spectrum-arrow-icon-size-100:10px;--spectrum-arrow-icon-size-200:12px;--spectrum-arrow-icon-size-300:14px;--spectrum-arrow-icon-size-400:16px;--spectrum-arrow-icon-size-500:18px;--spectrum-arrow-icon-size-600:20px;--spectrum-asterisk-icon-size-75:8px;--spectrum-asterisk-icon-size-100:8px;--spectrum-asterisk-icon-size-200:10px;--spectrum-asterisk-icon-size-300:10px;--spectrum-checkmark-icon-size-50:10px;--spectrum-checkmark-icon-size-75:10px;--spectrum-checkmark-icon-size-100:10px;--spectrum-checkmark-icon-size-200:12px;--spectrum-checkmark-icon-size-300:14px;--spectrum-checkmark-icon-size-400:16px;--spectrum-checkmark-icon-size-500:16px;--spectrum-checkmark-icon-size-600:18px;--spectrum-chevron-icon-size-50:6px;--spectrum-chevron-icon-size-75:10px;--spectrum-chevron-icon-size-100:10px;--spectrum-chevron-icon-size-200:12px;--spectrum-chevron-icon-size-300:14px;--spectrum-chevron-icon-size-400:16px;--spectrum-chevron-icon-size-500:16px;--spectrum-chevron-icon-size-600:18px;--spectrum-corner-triangle-icon-size-75:5px;--spectrum-corner-triangle-icon-size-100:5px;--spectrum-corner-triangle-icon-size-200:6px;--spectrum-corner-triangle-icon-size-300:7px;--spectrum-cross-icon-size-75:8px;--spectrum-cross-icon-size-100:8px;--spectrum-cross-icon-size-200:10px;--spectrum-cross-icon-size-300:12px;--spectrum-cross-icon-size-400:12px;--spectrum-cross-icon-size-500:14px;--spectrum-cross-icon-size-600:16px;--spectrum-dash-icon-size-50:8px;--spectrum-dash-icon-size-75:8px;--spectrum-dash-icon-size-100:10px;--spectrum-dash-icon-size-200:12px;--spectrum-dash-icon-size-300:12px;--spectrum-dash-icon-size-400:14px;--spectrum-dash-icon-size-500:16px;--spectrum-dash-icon-size-600:18px;--spectrum-field-label-text-to-asterisk-small:4px;--spectrum-field-label-text-to-asterisk-medium:4px;--spectrum-field-label-text-to-asterisk-large:5px;--spectrum-field-label-text-to-asterisk-extra-large:5px;--spectrum-field-label-top-to-asterisk-small:8px;--spectrum-field-label-top-to-asterisk-medium:12px;--spectrum-field-label-top-to-asterisk-large:15px;--spectrum-field-label-top-to-asterisk-extra-large:19px;--spectrum-field-label-top-margin-small:0px;--spectrum-field-label-top-margin-medium:4px;--spectrum-field-label-top-margin-large:5px;--spectrum-field-label-top-margin-extra-large:5px;--spectrum-field-label-to-component-quiet-small:-8px;--spectrum-field-label-to-component-quiet-medium:-8px;--spectrum-field-label-to-component-quiet-large:-12px;--spectrum-field-label-to-component-quiet-extra-large:-15px;--spectrum-help-text-top-to-workflow-icon-small:4px;--spectrum-help-text-top-to-workflow-icon-medium:3px;--spectrum-help-text-top-to-workflow-icon-large:6px;--spectrum-help-text-top-to-workflow-icon-extra-large:9px;--spectrum-status-light-dot-size-small:8px;--spectrum-status-light-dot-size-medium:8px;--spectrum-status-light-dot-size-large:10px;--spectrum-status-light-dot-size-extra-large:10px;--spectrum-status-light-top-to-dot-small:8px;--spectrum-status-light-top-to-dot-medium:12px;--spectrum-status-light-top-to-dot-large:15px;--spectrum-status-light-top-to-dot-extra-large:19px;--spectrum-action-button-edge-to-hold-icon-extra-small:3px;--spectrum-action-button-edge-to-hold-icon-small:3px;--spectrum-action-button-edge-to-hold-icon-medium:4px;--spectrum-action-button-edge-to-hold-icon-large:5px;--spectrum-action-button-edge-to-hold-icon-extra-large:6px;--spectrum-tooltip-tip-width:8px;--spectrum-tooltip-tip-height:4px;--spectrum-tooltip-maximum-width:160px;--spectrum-progress-circle-size-small:16px;--spectrum-progress-circle-size-medium:32px;--spectrum-progress-circle-size-large:64px;--spectrum-progress-circle-thickness-small:2px;--spectrum-progress-circle-thickness-medium:3px;--spectrum-progress-circle-thickness-large:4px;--spectrum-toast-height:48px;--spectrum-toast-maximum-width:336px;--spectrum-toast-top-to-workflow-icon:15px;--spectrum-toast-top-to-text:14px;--spectrum-toast-bottom-to-text:17px;--spectrum-action-bar-height:48px;--spectrum-action-bar-top-to-item-counter:14px;--spectrum-swatch-size-extra-small:16px;--spectrum-swatch-size-small:24px;--spectrum-swatch-size-medium:32px;--spectrum-swatch-size-large:40px;--spectrum-progress-bar-thickness-small:4px;--spectrum-progress-bar-thickness-medium:6px;--spectrum-progress-bar-thickness-large:8px;--spectrum-progress-bar-thickness-extra-large:10px;--spectrum-meter-width:192px;--spectrum-meter-thickness-small:4px;--spectrum-meter-thickness-large:6px;--spectrum-tag-top-to-avatar-small:4px;--spectrum-tag-top-to-avatar-medium:6px;--spectrum-tag-top-to-avatar-large:9px;--spectrum-tag-top-to-cross-icon-small:8px;--spectrum-tag-top-to-cross-icon-medium:12px;--spectrum-tag-top-to-cross-icon-large:15px;--spectrum-popover-top-to-content-area:4px;--spectrum-menu-item-edge-to-content-not-selected-small:28px;--spectrum-menu-item-edge-to-content-not-selected-medium:32px;--spectrum-menu-item-edge-to-content-not-selected-large:38px;--spectrum-menu-item-edge-to-content-not-selected-extra-large:45px;--spectrum-menu-item-top-to-disclosure-icon-small:7px;--spectrum-menu-item-top-to-disclosure-icon-medium:11px;--spectrum-menu-item-top-to-disclosure-icon-large:14px;--spectrum-menu-item-top-to-disclosure-icon-extra-large:17px;--spectrum-menu-item-top-to-selected-icon-small:7px;--spectrum-menu-item-top-to-selected-icon-medium:11px;--spectrum-menu-item-top-to-selected-icon-large:14px;--spectrum-menu-item-top-to-selected-icon-extra-large:17px;--spectrum-slider-control-to-field-label-small:5px;--spectrum-slider-control-to-field-label-medium:8px;--spectrum-slider-control-to-field-label-large:11px;--spectrum-slider-control-to-field-label-extra-large:14px;--spectrum-picker-visual-to-disclosure-icon-small:7px;--spectrum-picker-visual-to-disclosure-icon-medium:8px;--spectrum-picker-visual-to-disclosure-icon-large:9px;--spectrum-picker-visual-to-disclosure-icon-extra-large:10px;--spectrum-text-area-minimum-width:112px;--spectrum-text-area-minimum-height:56px;--spectrum-combo-box-visual-to-field-button-small:7px;--spectrum-combo-box-visual-to-field-button-medium:8px;--spectrum-combo-box-visual-to-field-button-large:9px;--spectrum-combo-box-visual-to-field-button-extra-large:10px;--spectrum-thumbnail-size-50:16px;--spectrum-thumbnail-size-75:18px;--spectrum-thumbnail-size-100:20px;--spectrum-thumbnail-size-200:22px;--spectrum-thumbnail-size-300:26px;--spectrum-thumbnail-size-400:28px;--spectrum-thumbnail-size-500:32px;--spectrum-thumbnail-size-600:36px;--spectrum-thumbnail-size-700:40px;--spectrum-thumbnail-size-800:44px;--spectrum-thumbnail-size-900:50px;--spectrum-thumbnail-size-1000:56px;--spectrum-alert-dialog-title-size:var(--spectrum-heading-size-s);--spectrum-alert-dialog-description-size:var(--spectrum-body-size-s);--spectrum-opacity-checkerboard-square-size:8px;--spectrum-contextual-help-title-size:var(--spectrum-heading-size-xs);--spectrum-contextual-help-body-size:var(--spectrum-heading-size-s);--spectrum-breadcrumbs-height-multiline:72px;--spectrum-breadcrumbs-top-to-text:13px;--spectrum-breadcrumbs-top-to-text-compact:11px;--spectrum-breadcrumbs-top-to-text-multiline:12px;--spectrum-breadcrumbs-bottom-to-text:15px;--spectrum-breadcrumbs-bottom-to-text-compact:12px;--spectrum-breadcrumbs-bottom-to-text-multiline:9px;--spectrum-breadcrumbs-start-edge-to-text:8px;--spectrum-breadcrumbs-top-text-to-bottom-text:9px;--spectrum-breadcrumbs-top-to-separator-icon:19px;--spectrum-breadcrumbs-top-to-separator-icon-compact:15px;--spectrum-breadcrumbs-top-to-separator-icon-multiline:15px;--spectrum-breadcrumbs-separator-icon-to-bottom-text-multiline:11px;--spectrum-breadcrumbs-top-to-truncated-menu:8px;--spectrum-breadcrumbs-top-to-truncated-menu-compact:4px;--spectrum-avatar-size-50:16px;--spectrum-avatar-size-75:18px;--spectrum-avatar-size-100:20px;--spectrum-avatar-size-200:22px;--spectrum-avatar-size-300:26px;--spectrum-avatar-size-400:28px;--spectrum-avatar-size-500:32px;--spectrum-avatar-size-600:36px;--spectrum-avatar-size-700:40px;--spectrum-alert-banner-minimum-height:48px;--spectrum-alert-banner-width:832px;--spectrum-alert-banner-top-to-workflow-icon:15px;--spectrum-alert-banner-top-to-text:14px;--spectrum-alert-banner-bottom-to-text:17px;--spectrum-rating-indicator-width:18px;--spectrum-rating-indicator-to-icon:4px;--spectrum-color-area-width:192px;--spectrum-color-area-minimum-width:64px;--spectrum-color-area-height:192px;--spectrum-color-area-minimum-height:64px;--spectrum-color-wheel-width:192px;--spectrum-color-wheel-minimum-width:175px;--spectrum-color-slider-length:192px;--spectrum-color-slider-minimum-length:80px;--spectrum-illustrated-message-title-size:var(--spectrum-heading-size-m);--spectrum-illustrated-message-cjk-title-size:var(
--spectrum-heading-cjk-size-m
);--spectrum-illustrated-message-body-size:var(--spectrum-body-size-s);--spectrum-coach-mark-width:296px;--spectrum-coach-mark-minimum-width:296px;--spectrum-coach-mark-maximum-width:380px;--spectrum-coach-mark-edge-to-content:var(--spectrum-spacing-400);--spectrum-coach-mark-pagination-text-to-bottom-edge:33px;--spectrum-coach-mark-media-height:222px;--spectrum-coach-mark-media-minimum-height:166px;--spectrum-coach-mark-title-size:var(--spectrum-heading-size-xs);--spectrum-coach-mark-body-size:var(--spectrum-body-size-s);--spectrum-coach-mark-pagination-body-size:var(--spectrum-body-size-s);--spectrum-accordion-top-to-text-compact-small:2px;--spectrum-accordion-top-to-text-regular-small:5px;--spectrum-accordion-small-top-to-text-spacious:9px;--spectrum-accordion-top-to-text-compact-medium:4px;--spectrum-accordion-top-to-text-regular-medium:8px;--spectrum-accordion-top-to-text-spacious-medium:12px;--spectrum-accordion-top-to-text-compact-large:4px;--spectrum-accordion-top-to-text-regular-large:9px;--spectrum-accordion-top-to-text-spacious-large:12px;--spectrum-accordion-top-to-text-compact-extra-large:5px;--spectrum-accordion-top-to-text-regular-extra-large:9px;--spectrum-accordion-top-to-text-spacious-extra-large:13px;--spectrum-accordion-bottom-to-text-compact-small:2px;--spectrum-accordion-bottom-to-text-regular-small:7px;--spectrum-accordion-bottom-to-text-spacious-small:11px;--spectrum-accordion-bottom-to-text-compact-medium:5px;--spectrum-accordion-bottom-to-text-regular-medium:9px;--spectrum-accordion-bottom-to-text-spacious-medium:13px;--spectrum-accordion-bottom-to-text-compact-large:8px;--spectrum-accordion-bottom-to-text-regular-large:11px;--spectrum-accordion-bottom-to-text-spacious-large:16px;--spectrum-accordion-bottom-to-text-compact-extra-large:8px;--spectrum-accordion-bottom-to-text-regular-extra-large:12px;--spectrum-accordion-bottom-to-text-spacious-extra-large:16px;--spectrum-accordion-minimum-width:200px;--spectrum-accordion-disclosure-indicator-to-text:0px;--spectrum-accordion-edge-to-disclosure-indicator:0px;--spectrum-accordion-edge-to-text:0px;--spectrum-accordion-focus-indicator-gap:0px;--spectrum-accordion-content-area-top-to-content:8px;--spectrum-accordion-content-area-bottom-to-content:16px;--spectrum-color-handle-size:16px;--spectrum-color-handle-size-key-focus:32px;--spectrum-table-column-header-row-top-to-text-small:8px;--spectrum-table-column-header-row-top-to-text-medium:7px;--spectrum-table-column-header-row-top-to-text-large:10px;--spectrum-table-column-header-row-top-to-text-extra-large:13px;--spectrum-table-column-header-row-bottom-to-text-small:9px;--spectrum-table-column-header-row-bottom-to-text-medium:8px;--spectrum-table-column-header-row-bottom-to-text-large:10px;--spectrum-table-column-header-row-bottom-to-text-extra-large:13px;--spectrum-table-row-height-small-regular:32px;--spectrum-table-row-height-medium-regular:40px;--spectrum-table-row-height-large-regular:48px;--spectrum-table-row-height-extra-large-regular:56px;--spectrum-table-row-height-small-spacious:40px;--spectrum-table-row-height-medium-spacious:48px;--spectrum-table-row-height-large-spacious:56px;--spectrum-table-row-height-extra-large-spacious:64px;--spectrum-table-row-top-to-text-small-regular:8px;--spectrum-table-row-top-to-text-medium-regular:11px;--spectrum-table-row-top-to-text-large-regular:14px;--spectrum-table-row-top-to-text-extra-large-regular:17px;--spectrum-table-row-bottom-to-text-small-regular:9px;--spectrum-table-row-bottom-to-text-medium-regular:12px;--spectrum-table-row-bottom-to-text-large-regular:14px;--spectrum-table-row-bottom-to-text-extra-large-regular:17px;--spectrum-table-row-top-to-text-small-spacious:12px;--spectrum-table-row-top-to-text-medium-spacious:15px;--spectrum-table-row-top-to-text-large-spacious:18px;--spectrum-table-row-top-to-text-extra-large-spacious:21px;--spectrum-table-row-bottom-to-text-small-spacious:13px;--spectrum-table-row-bottom-to-text-medium-spacious:16px;--spectrum-table-row-bottom-to-text-large-spacious:18px;--spectrum-table-row-bottom-to-text-extra-large-spacious:21px;--spectrum-table-edge-to-content:16px;--spectrum-table-checkbox-to-text:24px;--spectrum-table-header-row-checkbox-to-top-small:10px;--spectrum-table-header-row-checkbox-to-top-medium:9px;--spectrum-table-header-row-checkbox-to-top-large:12px;--spectrum-table-header-row-checkbox-to-top-extra-large:15px;--spectrum-table-row-checkbox-to-top-small-compact:6px;--spectrum-table-row-checkbox-to-top-small-regular:10px;--spectrum-table-row-checkbox-to-top-small-spacious:14px;--spectrum-table-row-checkbox-to-top-medium-compact:9px;--spectrum-table-row-checkbox-to-top-medium-regular:13px;--spectrum-table-row-checkbox-to-top-medium-spacious:17px;--spectrum-table-row-checkbox-to-top-large-compact:12px;--spectrum-table-row-checkbox-to-top-large-regular:16px;--spectrum-table-row-checkbox-to-top-large-spacious:20px;--spectrum-table-row-checkbox-to-top-extra-large-compact:15px;--spectrum-table-row-checkbox-to-top-extra-large-regular:19px;--spectrum-table-row-checkbox-to-top-extra-large-spacious:23px;--spectrum-table-section-header-row-height-small:24px;--spectrum-table-section-header-row-height-medium:32px;--spectrum-table-section-header-row-height-large:40px;--spectrum-table-section-header-row-height-extra-large:48px;--spectrum-table-thumbnail-to-top-minimum-small-compact:4px;--spectrum-table-thumbnail-to-top-minimum-medium-compact:5px;--spectrum-table-thumbnail-to-top-minimum-large-compact:7px;--spectrum-table-thumbnail-to-top-minimum-extra-large-compact:8px;--spectrum-table-thumbnail-to-top-minimum-small-regular:5px;--spectrum-table-thumbnail-to-top-minimum-medium-regular:7px;--spectrum-table-thumbnail-to-top-minimum-large-regular:8px;--spectrum-table-thumbnail-to-top-minimum-extra-large-regular:8px;--spectrum-table-thumbnail-to-top-minimum-small-spacious:7px;--spectrum-table-thumbnail-to-top-minimum-medium-spacious:8px;--spectrum-table-thumbnail-to-top-minimum-large-spacious:8px;--spectrum-table-thumbnail-to-top-minimum-extra-large-spacious:10px;--spectrum-tab-item-to-tab-item-horizontal-small:21px;--spectrum-tab-item-to-tab-item-horizontal-medium:24px;--spectrum-tab-item-to-tab-item-horizontal-large:27px;--spectrum-tab-item-to-tab-item-horizontal-extra-large:30px;--spectrum-tab-item-to-tab-item-vertical-small:4px;--spectrum-tab-item-to-tab-item-vertical-medium:4px;--spectrum-tab-item-to-tab-item-vertical-large:5px;--spectrum-tab-item-to-tab-item-vertical-extra-large:5px;--spectrum-tab-item-start-to-edge-small:12px;--spectrum-tab-item-start-to-edge-medium:12px;--spectrum-tab-item-start-to-edge-large:13px;--spectrum-tab-item-start-to-edge-extra-large:13px;--spectrum-tab-item-top-to-text-small:11px;--spectrum-tab-item-bottom-to-text-small:12px;--spectrum-tab-item-top-to-text-medium:14px;--spectrum-tab-item-bottom-to-text-medium:14px;--spectrum-tab-item-top-to-text-large:16px;--spectrum-tab-item-bottom-to-text-large:18px;--spectrum-tab-item-top-to-text-extra-large:19px;--spectrum-tab-item-bottom-to-text-extra-large:20px;--spectrum-tab-item-top-to-text-compact-small:4px;--spectrum-tab-item-bottom-to-text-compact-small:5px;--spectrum-tab-item-top-to-text-compact-medium:6px;--spectrum-tab-item-bottom-to-text-compact-medium:8px;--spectrum-tab-item-top-to-text-compact-large:10px;--spectrum-tab-item-bottom-to-text-compact-large:12px;--spectrum-tab-item-top-to-text-compact-extra-large:12px;--spectrum-tab-item-bottom-to-text-compact-extra-large:13px;--spectrum-tab-item-top-to-workflow-icon-small:13px;--spectrum-tab-item-top-to-workflow-icon-medium:15px;--spectrum-tab-item-top-to-workflow-icon-large:17px;--spectrum-tab-item-top-to-workflow-icon-extra-large:19px;--spectrum-tab-item-top-to-workflow-icon-compact-small:3px;--spectrum-tab-item-top-to-workflow-icon-compact-medium:7px;--spectrum-tab-item-top-to-workflow-icon-compact-large:9px;--spectrum-tab-item-top-to-workflow-icon-compact-extra-large:11px;--spectrum-tab-item-focus-indicator-gap-small:7px;--spectrum-tab-item-focus-indicator-gap-medium:8px;--spectrum-tab-item-focus-indicator-gap-large:9px;--spectrum-tab-item-focus-indicator-gap-extra-large:10px;--spectrum-side-navigation-width:192px;--spectrum-side-navigation-minimum-width:160px;--spectrum-side-navigation-maximum-width:240px;--spectrum-side-navigation-second-level-edge-to-text:24px;--spectrum-side-navigation-third-level-edge-to-text:36px;--spectrum-side-navigation-with-icon-second-level-edge-to-text:50px;--spectrum-side-navigation-with-icon-third-level-edge-to-text:62px;--spectrum-side-navigation-item-to-item:4px;--spectrum-side-navigation-item-to-header:16px;--spectrum-side-navigation-bottom-to-text:8px;--spectrum-tray-top-to-content-area:4px;--spectrum-text-to-visual-50:6px;--spectrum-text-to-visual-75:7px;--spectrum-text-to-visual-100:8px;--spectrum-text-to-visual-200:9px;--spectrum-text-to-visual-300:10px;--spectrum-text-to-control-75:9px;--spectrum-text-to-control-100:10px;--spectrum-text-to-control-200:11px;--spectrum-text-to-control-300:13px;--spectrum-component-height-50:20px;--spectrum-component-height-75:24px;--spectrum-component-height-100:32px;--spectrum-component-height-200:40px;--spectrum-component-height-300:48px;--spectrum-component-height-400:56px;--spectrum-component-height-500:64px;--spectrum-component-pill-edge-to-visual-75:10px;--spectrum-component-pill-edge-to-visual-100:14px;--spectrum-component-pill-edge-to-visual-200:18px;--spectrum-component-pill-edge-to-visual-300:21px;--spectrum-component-pill-edge-to-visual-only-75:4px;--spectrum-component-pill-edge-to-visual-only-100:7px;--spectrum-component-pill-edge-to-visual-only-200:10px;--spectrum-component-pill-edge-to-visual-only-300:13px;--spectrum-component-pill-edge-to-text-75:12px;--spectrum-component-pill-edge-to-text-100:16px;--spectrum-component-pill-edge-to-text-200:20px;--spectrum-component-pill-edge-to-text-300:24px;--spectrum-component-edge-to-visual-50:6px;--spectrum-component-edge-to-visual-75:7px;--spectrum-component-edge-to-visual-100:10px;--spectrum-component-edge-to-visual-200:13px;--spectrum-component-edge-to-visual-300:15px;--spectrum-component-edge-to-visual-only-50:3px;--spectrum-component-edge-to-visual-only-75:4px;--spectrum-component-edge-to-visual-only-100:7px;--spectrum-component-edge-to-visual-only-200:10px;--spectrum-component-edge-to-visual-only-300:13px;--spectrum-component-edge-to-text-50:8px;--spectrum-component-edge-to-text-75:9px;--spectrum-component-edge-to-text-100:12px;--spectrum-component-edge-to-text-200:15px;--spectrum-component-edge-to-text-300:18px;--spectrum-component-top-to-workflow-icon-50:3px;--spectrum-component-top-to-workflow-icon-75:4px;--spectrum-component-top-to-workflow-icon-100:7px;--spectrum-component-top-to-workflow-icon-200:10px;--spectrum-component-top-to-workflow-icon-300:13px;--spectrum-component-top-to-text-50:3px;--spectrum-component-top-to-text-75:4px;--spectrum-component-top-to-text-100:6px;--spectrum-component-top-to-text-200:9px;--spectrum-component-top-to-text-300:12px;--spectrum-component-bottom-to-text-50:3px;--spectrum-component-bottom-to-text-75:5px;--spectrum-component-bottom-to-text-100:9px;--spectrum-component-bottom-to-text-200:11px;--spectrum-component-bottom-to-text-300:14px;--spectrum-component-to-menu-small:6px;--spectrum-component-to-menu-medium:6px;--spectrum-component-to-menu-large:7px;--spectrum-component-to-menu-extra-large:8px;--spectrum-field-edge-to-disclosure-icon-75:7px;--spectrum-field-edge-to-disclosure-icon-100:11px;--spectrum-field-edge-to-disclosure-icon-200:14px;--spectrum-field-edge-to-disclosure-icon-300:17px;--spectrum-field-end-edge-to-disclosure-icon-75:7px;--spectrum-field-end-edge-to-disclosure-icon-100:11px;--spectrum-field-end-edge-to-disclosure-icon-200:14px;--spectrum-field-end-edge-to-disclosure-icon-300:17px;--spectrum-field-top-to-disclosure-icon-75:7px;--spectrum-field-top-to-disclosure-icon-100:11px;--spectrum-field-top-to-disclosure-icon-200:14px;--spectrum-field-top-to-disclosure-icon-300:17px;--spectrum-field-top-to-alert-icon-small:4px;--spectrum-field-top-to-alert-icon-medium:7px;--spectrum-field-top-to-alert-icon-large:10px;--spectrum-field-top-to-alert-icon-extra-large:13px;--spectrum-field-top-to-validation-icon-small:7px;--spectrum-field-top-to-validation-icon-medium:11px;--spectrum-field-top-to-validation-icon-large:14px;--spectrum-field-top-to-validation-icon-extra-large:17px;--spectrum-field-top-to-progress-circle-small:4px;--spectrum-field-top-to-progress-circle-medium:8px;--spectrum-field-top-to-progress-circle-large:12px;--spectrum-field-top-to-progress-circle-extra-large:16px;--spectrum-field-edge-to-alert-icon-small:9px;--spectrum-field-edge-to-alert-icon-medium:12px;--spectrum-field-edge-to-alert-icon-large:15px;--spectrum-field-edge-to-alert-icon-extra-large:18px;--spectrum-field-edge-to-validation-icon-small:9px;--spectrum-field-edge-to-validation-icon-medium:12px;--spectrum-field-edge-to-validation-icon-large:15px;--spectrum-field-edge-to-validation-icon-extra-large:18px;--spectrum-field-text-to-alert-icon-small:8px;--spectrum-field-text-to-alert-icon-medium:12px;--spectrum-field-text-to-alert-icon-large:15px;--spectrum-field-text-to-alert-icon-extra-large:18px;--spectrum-field-text-to-validation-icon-small:8px;--spectrum-field-text-to-validation-icon-medium:12px;--spectrum-field-text-to-validation-icon-large:15px;--spectrum-field-text-to-validation-icon-extra-large:18px;--spectrum-field-width:192px;--spectrum-character-count-to-field-quiet-small:-3px;--spectrum-character-count-to-field-quiet-medium:-3px;--spectrum-character-count-to-field-quiet-large:-3px;--spectrum-character-count-to-field-quiet-extra-large:-4px;--spectrum-side-label-character-count-to-field:12px;--spectrum-side-label-character-count-top-margin-small:4px;--spectrum-side-label-character-count-top-margin-medium:8px;--spectrum-side-label-character-count-top-margin-large:11px;--spectrum-side-label-character-count-top-margin-extra-large:14px;--spectrum-disclosure-indicator-top-to-disclosure-icon-small:7px;--spectrum-disclosure-indicator-top-to-disclosure-icon-medium:11px;--spectrum-disclosure-indicator-top-to-disclosure-icon-large:14px;--spectrum-disclosure-indicator-top-to-disclosure-icon-extra-large:17px;--spectrum-navigational-indicator-top-to-back-icon-small:7px;--spectrum-navigational-indicator-top-to-back-icon-medium:11px;--spectrum-navigational-indicator-top-to-back-icon-large:14px;--spectrum-navigational-indicator-top-to-back-icon-extra-large:17px;--spectrum-color-control-track-width:24px;--spectrum-font-size-50:11px;--spectrum-font-size-75:12px;--spectrum-font-size-100:14px;--spectrum-font-size-200:16px;--spectrum-font-size-300:18px;--spectrum-font-size-400:20px;--spectrum-font-size-500:22px;--spectrum-font-size-600:25px;--spectrum-font-size-700:28px;--spectrum-font-size-800:32px;--spectrum-font-size-900:36px;--spectrum-font-size-1000:40px;--spectrum-font-size-1100:45px;--spectrum-font-size-1200:50px;--spectrum-font-size-1300:60px}:host,:root{--spectrum-edge-to-visual-only-75:4px;--spectrum-edge-to-visual-only-100:7px;--spectrum-edge-to-visual-only-200:10px;--spectrum-edge-to-visual-only-300:13px;--spectrum-slider-tick-mark-height:10px;--spectrum-slider-ramp-track-height:16px;--spectrum-colorwheel-path:"M 95 95 m -95 0 a 95 95 0 1 0 190 0 a 95 95 0 1 0 -190 0.2 M 95 95 m -73 0 a 73 73 0 1 0 146 0 a 73 73 0 1 0 -146 0";--spectrum-colorwheel-path-borders:"M 96 96 m -96 0 a 96 96 0 1 0 192 0 a 96 96 0 1 0 -192 0.2 M 96 96 m -72 0 a 72 72 0 1 0 144 0 a 72 72 0 1 0 -144 0";--spectrum-colorwheel-colorarea-container-size:144px;--spectrum-colorloupe-checkerboard-fill:url(#checkerboard-primary);--spectrum-menu-item-selectable-edge-to-text-not-selected-small:28px;--spectrum-menu-item-selectable-edge-to-text-not-selected-medium:32px;--spectrum-menu-item-selectable-edge-to-text-not-selected-large:38px;--spectrum-menu-item-selectable-edge-to-text-not-selected-extra-large:45px;--spectrum-menu-item-checkmark-height-small:10px;--spectrum-menu-item-checkmark-height-medium:10px;--spectrum-menu-item-checkmark-height-large:12px;--spectrum-menu-item-checkmark-height-extra-large:14px;--spectrum-menu-item-checkmark-width-small:10px;--spectrum-menu-item-checkmark-width-medium:10px;--spectrum-menu-item-checkmark-width-large:12px;--spectrum-menu-item-checkmark-width-extra-large:14px;--spectrum-rating-icon-spacing:var(--spectrum-spacing-75);--spectrum-button-top-to-text-small:5px;--spectrum-button-bottom-to-text-small:4px;--spectrum-button-top-to-text-medium:7px;--spectrum-button-bottom-to-text-medium:8px;--spectrum-button-top-to-text-large:10px;--spectrum-button-bottom-to-text-large:10px;--spectrum-button-top-to-text-extra-large:13px;--spectrum-button-bottom-to-text-extra-large:13px;--spectrum-alert-banner-close-button-spacing:var(--spectrum-spacing-100);--spectrum-alert-banner-edge-to-divider:var(--spectrum-spacing-100);--spectrum-alert-banner-edge-to-button:var(--spectrum-spacing-100);--spectrum-alert-banner-text-to-button-vertical:var(
--spectrum-spacing-100
);--spectrum-sidenav-heading-top-margin:24px;--spectrum-sidenav-heading-bottom-margin:8px;--spectrum-sidenav-bottom-to-label:8px;--spectrum-alert-dialog-padding:var(--spectrum-spacing-500);--spectrum-alert-dialog-description-to-buttons:var(--spectrum-spacing-700);--spectrum-coach-indicator-gap:6px;--spectrum-coach-indicator-ring-diameter:var(--spectrum-spacing-300);--spectrum-coach-indicator-quiet-ring-diameter:var(--spectrum-spacing-100);--spectrum-coachmark-buttongroup-display:flex;--spectrum-coachmark-buttongroup-mobile-display:none;--spectrum-coachmark-menu-display:inline-flex;--spectrum-coachmark-menu-mobile-display:none;--spectrum-well-padding:var(--spectrum-spacing-300);--spectrum-well-margin-top:var(--spectrum-spacing-75);--spectrum-well-min-width:240px;--spectrum-well-border-radius:var(--spectrum-spacing-75);--spectrum-icon-chevron-size-50:6px;--spectrum-treeview-item-indentation-medium:var(--spectrum-spacing-300);--spectrum-treeview-item-indentation-small:var(--spectrum-spacing-200);--spectrum-treeview-item-indentation-large:20px;--spectrum-treeview-item-indentation-extra-large:var(
--spectrum-spacing-400
);--spectrum-treeview-indicator-inset-block-start:5px;--spectrum-dialog-confirm-entry-animation-distance:20px;--spectrum-dialog-confirm-hero-height:128px;--spectrum-dialog-confirm-border-radius:4px;--spectrum-dialog-confirm-title-text-size:18px;--spectrum-dialog-confirm-description-text-size:14px;--spectrum-dialog-confirm-padding-grid:40px;--spectrum-datepicker-initial-width:128px;--spectrum-datepicker-generic-padding:var(--spectrum-spacing-200);--spectrum-datepicker-dash-line-height:24px;--spectrum-datepicker-width-quiet-first:72px;--spectrum-datepicker-width-quiet-second:16px;--spectrum-datepicker-datetime-width-first:36px;--spectrum-datepicker-invalid-icon-to-button:8px;--spectrum-datepicker-invalid-icon-to-button-quiet:7px;--spectrum-datepicker-input-datetime-width:var(--spectrum-spacing-400);--spectrum-pagination-textfield-width:var(--spectrum-spacing-700);--spectrum-pagination-item-inline-spacing:5px;--spectrum-dial-border-radius:16px;--spectrum-dial-handle-position:8px;--spectrum-dial-handle-block-margin:16px;--spectrum-dial-handle-inline-margin:16px;--spectrum-dial-controls-margin:8px;--spectrum-dial-label-gap-y:5px;--spectrum-dial-label-container-top-to-text:4px}:host,:root{--spectrum-checkbox-control-size-small:12px;--spectrum-checkbox-control-size-medium:14px;--spectrum-checkbox-control-size-large:16px;--spectrum-checkbox-control-size-extra-large:18px;--spectrum-checkbox-top-to-control-small:6px;--spectrum-checkbox-top-to-control-medium:9px;--spectrum-checkbox-top-to-control-large:12px;--spectrum-checkbox-top-to-control-extra-large:15px;--spectrum-switch-control-width-small:23px;--spectrum-switch-control-width-medium:26px;--spectrum-switch-control-width-large:29px;--spectrum-switch-control-width-extra-large:33px;--spectrum-switch-control-height-small:12px;--spectrum-switch-control-height-medium:14px;--spectrum-switch-control-height-large:16px;--spectrum-switch-control-height-extra-large:18px;--spectrum-switch-top-to-control-small:6px;--spectrum-switch-top-to-control-medium:9px;--spectrum-switch-top-to-control-large:12px;--spectrum-switch-top-to-control-extra-large:15px;--spectrum-radio-button-control-size-small:12px;--spectrum-radio-button-control-size-medium:14px;--spectrum-radio-button-control-size-large:16px;--spectrum-radio-button-control-size-extra-large:18px;--spectrum-radio-button-top-to-control-small:6px;--spectrum-radio-button-top-to-control-medium:9px;--spectrum-radio-button-top-to-control-large:12px;--spectrum-radio-button-top-to-control-extra-large:15px;--spectrum-slider-control-height-small:14px;--spectrum-slider-control-height-medium:16px;--spectrum-slider-control-height-large:18px;--spectrum-slider-control-height-extra-large:20px;--spectrum-slider-handle-size-small:14px;--spectrum-slider-handle-size-medium:16px;--spectrum-slider-handle-size-large:18px;--spectrum-slider-handle-size-extra-large:20px;--spectrum-slider-handle-border-width-down-small:5px;--spectrum-slider-handle-border-width-down-medium:6px;--spectrum-slider-handle-border-width-down-large:7px;--spectrum-slider-handle-border-width-down-extra-large:8px;--spectrum-slider-bottom-to-handle-small:5px;--spectrum-slider-bottom-to-handle-medium:8px;--spectrum-slider-bottom-to-handle-large:11px;--spectrum-slider-bottom-to-handle-extra-large:14px;--spectrum-corner-radius-75:2px;--spectrum-corner-radius-100:4px;--spectrum-corner-radius-200:8px;--spectrum-drop-shadow-x:0px;--spectrum-drop-shadow-y:1px;--spectrum-drop-shadow-blur:4px}
`;i.registerThemeFragment("medium","scale",l),customElements.define("sp-theme",i);var u=a(321),d=a(338);const m=t.iv`
:host{fill:currentColor;color:var(--mod-icon-color,inherit);display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(--spectrum-icon-size-s);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(--spectrum-icon-size-m);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(--spectrum-icon-size-l);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(--spectrum-icon-size-xl);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(--spectrum-icon-size-xxl);width:var(--spectrum-icon-size-xxl)}:host{--spectrum-icon-size-xxs:var(
--spectrum-alias-workflow-icon-size-xxs,var(--spectrum-global-dimension-size-150)
);--spectrum-icon-size-xs:var(
--spectrum-alias-workflow-icon-size-xs,var(--spectrum-global-dimension-size-175)
);height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}:host([size=xxs]){height:var(--spectrum-icon-size-xxs);width:var(--spectrum-icon-size-xxs)}:host([size=xs]){height:var(--spectrum-icon-size-xs);width:var(--spectrum-icon-size-xs)}#container{height:100%}::slotted(*),img,svg{color:inherit;height:100%;vertical-align:top;width:100%}@media (forced-colors:active){::slotted(*),img,svg{forced-color-adjust:auto}}
`;var p=Object.defineProperty,h=Object.getOwnPropertyDescriptor,b=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?h(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&p(e,r,c),c};class g extends u.o{constructor(){super(...arguments),this.label=""}static get styles(){return[m]}update(t){t.has("label")&&(this.label?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")),super.update(t)}render(){return t.dy`
            <slot></slot>
        `}}let v;b([(0,d.Cb)()],g.prototype,"label",2),b([(0,d.Cb)({reflect:!0})],g.prototype,"size",2);const f=function(t,...e){return v?v(t,...e):e.reduce(((e,r,o)=>e+r+t[o+1]),t[0])},k=t=>{v=t};var y=a(200);(0,y.N)("sp-icon-edit",class extends g{render(){return k(t.dy),(({width:t=24,height:e=24,hidden:r=!1,title:o="Edit"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${r?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${o}
  >
    <path
      d="M33.567 8.2 27.8 2.432a1.215 1.215 0 0 0-.866-.353H26.9a1.371 1.371 0 0 0-.927.406L5.084 23.372a.99.99 0 0 0-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 0 0 .062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 0 0 .414-.249l20.888-20.889a1.372 1.372 0 0 0 .4-.883 1.221 1.221 0 0 0-.346-.945ZM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}),(0,y.N)("sp-icon-anchor-select",class extends g{render(){return k(t.dy),(({width:t=24,height:e=24,hidden:r=!1,title:o="Anchor Select"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${r?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${o}
  >
    <path
      d="m10 6 18 18H18l-8 8ZM8.5 2.054a.5.5 0 0 0-.5.5v32.78a.5.5 0 0 0 .5.5.49.49 0 0 0 .35-.147L18.524 26h13a.5.5 0 0 0 .354-.854L8.854 2.2a.49.49 0 0 0-.354-.146Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}),(0,y.N)("sp-icon-alias",class extends g{render(){return k(t.dy),(({width:t=24,height:e=24,hidden:r=!1,title:o="Alias"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${r?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${o}
  >
    <path
      d="M29.241 2H12.8a.8.8 0 0 0-.8.806.785.785 0 0 0 .236.56l3.5 3.5a57.07 57.07 0 0 0-5.442 9.691 29.236 29.236 0 0 0-2.174 8.486c-.082.853-.12 1.7-.12 2.536a29.888 29.888 0 0 0 .576 5.753.827.827 0 0 0 1.618.023l.006-.023a25.346 25.346 0 0 1 2.594-6.919 22.717 22.717 0 0 1 4.3-5.429 48.574 48.574 0 0 1 7.33-5.429l4.209 4.209a.785.785 0 0 0 .56.236.8.8 0 0 0 .807-.8V2.759A.807.807 0 0 0 29.241 2Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});var x=Object.defineProperty,w=Object.getOwnPropertyDescriptor;function z(t,{validSizes:e=["s","m","l","xl"],noDefaultSize:r,defaultSize:o="m"}={}){class s extends t{constructor(){super(...arguments),this._size=o}get size(){return this._size||o}set size(t){const s=r?null:o,c=t&&t.toLocaleLowerCase(),a=e.includes(c)?c:s;if(a&&this.setAttribute("size",a),this._size===a)return;const i=this._size;this._size=a,this.requestUpdate("size",i)}update(t){!this.hasAttribute("size")&&!r&&this.setAttribute("size",this.size),super.update(t)}}return((t,e,r,o)=>{for(var s,c=w(e,r),a=t.length-1;a>=0;a--)(s=t[a])&&(c=s(e,r,c)||c);c&&x(e,r,c)})([(0,d.Cb)({type:String,reflect:!0})],s.prototype,"size"),s}var C=a(692),I=a(875);const S=(0,I.XM)(class extends I.Xe{constructor(t){var e;if(super(t),t.type!==I.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(e)}const s=t.element.classList;this.it.forEach((t=>{t in e||(s.remove(t),this.it.delete(t))}));for(const t in e){const r=!!e[t];r===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(r?(s.add(t),this.it.add(t)):(s.remove(t),this.it.delete(t)))}return C.Jb}});var E=a(796);class ${constructor(t,{target:e,config:r,callback:o,skipInitial:s}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,null!==e&&this.t.add(null!=e?e:t),this.o=null!=s?s:this.o,this.callback=o,window.IntersectionObserver?(this.u=new IntersectionObserver((t=>{const e=this.i;this.i=!1,this.o&&e||(this.handleChanges(t),this.h.requestUpdate())}),r),t.addController(this)):console.warn("IntersectionController error: browser does not support IntersectionObserver.")}handleChanges(t){var e;this.value=null===(e=this.callback)||void 0===e?void 0:e.call(this,t,this.u)}hostConnected(){for(const t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){const t=this.u.takeRecords();t.length&&this.handleChanges(t)}observe(t){this.t.add(t),this.u.observe(t),this.i=!0}unobserve(t){this.t.delete(t),this.u.unobserve(t)}disconnect(){this.u.disconnect()}}class A{constructor(t,{target:e,config:r,callback:o,skipInitial:s}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,null!==e&&this.t.add(null!=e?e:t),this.l=r,this.o=null!=s?s:this.o,this.callback=o,window.ResizeObserver?(this.u=new ResizeObserver((t=>{this.handleChanges(t),this.h.requestUpdate()})),t.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(t){var e;this.value=null===(e=this.callback)||void 0===e?void 0:e.call(this,t,this.u)}hostConnected(){for(const t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate()}unobserve(t){this.t.delete(t),this.u.unobserve(t)}disconnect(){this.u.disconnect()}}let j=!0;try{document.body.querySelector(":focus-visible")}catch(c){j=!1,a.e(202).then(a.t.bind(a,202,19))}const q=t=>{var e;const r=Symbol("endPolyfillCoordination");return e=r,class extends t{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),j||requestAnimationFrame((()=>{null==this[r]&&(this[r]=(t=>{if(null==t.shadowRoot||t.hasAttribute("data-js-focus-visible"))return()=>{};if(!self.applyFocusVisiblePolyfill){const e=()=>{self.applyFocusVisiblePolyfill&&t.shadowRoot&&self.applyFocusVisiblePolyfill(t.shadowRoot),t.manageAutoFocus&&t.manageAutoFocus()};return self.addEventListener("focus-visible-polyfill-ready",e,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",e)}}return self.applyFocusVisiblePolyfill(t.shadowRoot),t.manageAutoFocus&&t.manageAutoFocus(),()=>{}})(this))}))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),j||requestAnimationFrame((()=>{null!=this[r]&&(this[r](),this[r]=null)}))}}};var _=Object.defineProperty,T=Object.getOwnPropertyDescriptor,H=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?T(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&_(e,r,c),c};function L(){return new Promise((t=>requestAnimationFrame((()=>t()))))}class D extends(q(u.o)){constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this._tabIndex=0,this.manipulatingTabindex=!1,this._recentlyConnected=!1}get tabIndex(){if(this.focusElement===this){const t=this.hasAttribute("tabindex")?Number(this.getAttribute("tabindex")):NaN;return isNaN(t)?-1:t}const t=parseFloat(this.hasAttribute("tabindex")&&this.getAttribute("tabindex")||"0");return this.disabled||t<0?-1:this.focusElement?this.focusElement.tabIndex:t}set tabIndex(t){if(this.manipulatingTabindex)this.manipulatingTabindex=!1;else if(this.focusElement!==this){if(-1===t?this.addEventListener("pointerdown",this.onPointerdownManagementOfTabIndex):(this.manipulatingTabindex=!0,this.removeEventListener("pointerdown",this.onPointerdownManagementOfTabIndex)),-1===t||this.disabled)return this.setAttribute("tabindex","-1"),this.removeAttribute("focusable"),void(-1!==t&&this.manageFocusElementTabindex(t));this.setAttribute("focusable",""),this.hasAttribute("tabindex")?this.removeAttribute("tabindex"):this.manipulatingTabindex=!1,this.manageFocusElementTabindex(t)}else if(t!==this._tabIndex){this._tabIndex=t;const e=this.disabled?"-1":""+t;this.manipulatingTabindex=!0,this.setAttribute("tabindex",e)}}onPointerdownManagementOfTabIndex(){-1===this.tabIndex&&(this.tabIndex=0,this.focus({preventScroll:!0}))}async manageFocusElementTabindex(t){this.focusElement||await this.updateComplete,null===t?this.focusElement.removeAttribute("tabindex"):this.focusElement.tabIndex=t}get focusElement(){throw new Error("Must implement focusElement getter!")}focus(t){this.disabled||!this.focusElement||(this.focusElement!==this?this.focusElement.focus(t):HTMLElement.prototype.focus.apply(this,[t]))}blur(){const t=this.focusElement||this;t!==this?t.blur():HTMLElement.prototype.blur.apply(this)}click(){if(this.disabled)return;const t=this.focusElement||this;t!==this?t.click():HTMLElement.prototype.click.apply(this)}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focusElement.focus())}firstUpdated(t){super.firstUpdated(t),(!this.hasAttribute("tabindex")||"-1"!==this.getAttribute("tabindex"))&&this.setAttribute("focusable","")}update(t){t.has("disabled")&&this.handleDisabledChanged(this.disabled,t.get("disabled")),super.update(t)}updated(t){super.updated(t),t.has("disabled")&&this.disabled&&this.blur()}async handleDisabledChanged(t,e){const r=()=>this.focusElement!==this&&void 0!==this.focusElement.disabled;t?(this.manipulatingTabindex=!0,this.setAttribute("tabindex","-1"),await this.updateComplete,r()?this.focusElement.disabled=!0:this.setAttribute("aria-disabled","true")):e&&(this.manipulatingTabindex=!0,this.focusElement===this?this.setAttribute("tabindex",""+this._tabIndex):this.removeAttribute("tabindex"),await this.updateComplete,r()?this.focusElement.disabled=!1:this.removeAttribute("aria-disabled"))}async getUpdateComplete(){const t=await super.getUpdateComplete();return this._recentlyConnected&&(this._recentlyConnected=!1,await L(),await L()),t}connectedCallback(){super.connectedCallback(),this._recentlyConnected=!0,this.updateComplete.then((()=>{this.manageAutoFocus()}))}}function P(t,e,r){return typeof t===e?()=>t:"function"==typeof t?t:r}H([(0,d.Cb)({type:Boolean,reflect:!0})],D.prototype,"disabled",2),H([(0,d.Cb)({type:Boolean})],D.prototype,"autofocus",2),H([(0,d.Cb)({type:Number})],D.prototype,"tabIndex",1);class U{constructor(t,{direction:e,elementEnterAction:r,elements:o,focusInIndex:s,isFocusableElement:c,listenerScope:a}={elements:()=>[]}){this._currentIndex=-1,this._direction=()=>"both",this.directionLength=5,this.elementEnterAction=t=>{},this._focused=!1,this._focusInIndex=t=>0,this.isFocusableElement=t=>!0,this._listenerScope=()=>this.host,this.offset=0,this.recentlyConnected=!1,this.handleFocusin=t=>{if(!this.isEventWithinListenerScope(t))return;this.isRelatedTargetAnElement(t)&&this.hostContainsFocus();const e=t.composedPath();let r=-1;e.find((t=>(r=this.elements.indexOf(t),-1!==r))),this.currentIndex=r>-1?r:this.currentIndex},this.handleFocusout=t=>{this.isRelatedTargetAnElement(t)&&this.hostNoLongerContainsFocus()},this.handleKeydown=t=>{if(!this.acceptsEventCode(t.code)||t.defaultPrevented)return;let e=0;switch(t.code){case"ArrowRight":e+=1;break;case"ArrowDown":e+="grid"===this.direction?this.directionLength:1;break;case"ArrowLeft":e-=1;break;case"ArrowUp":e-="grid"===this.direction?this.directionLength:1;break;case"End":this.currentIndex=0,e-=1;break;case"Home":this.currentIndex=this.elements.length-1,e+=1}t.preventDefault(),"grid"===this.direction&&this.currentIndex+e<0?this.currentIndex=0:"grid"===this.direction&&this.currentIndex+e>this.elements.length-1?this.currentIndex=this.elements.length-1:this.setCurrentIndexCircularly(e),this.elementEnterAction(this.elements[this.currentIndex]),this.focus()},this.mutationObserver=new MutationObserver((()=>{this.handleItemMutation()})),this.host=t,this.host.addController(this),this._elements=o,this.isFocusableElement=c||this.isFocusableElement,this._direction=P(e,"string",this._direction),this.elementEnterAction=r||this.elementEnterAction,this._focusInIndex=P(s,"number",this._focusInIndex),this._listenerScope=P(a,"object",this._listenerScope)}get currentIndex(){return-1===this._currentIndex&&(this._currentIndex=this.focusInIndex),this._currentIndex-this.offset}set currentIndex(t){this._currentIndex=t+this.offset}get direction(){return this._direction()}get elements(){return this.cachedElements||(this.cachedElements=this._elements()),this.cachedElements}set focused(t){t!==this.focused&&(this._focused=t)}get focused(){return this._focused}get focusInElement(){return this.elements[this.focusInIndex]}get focusInIndex(){return this._focusInIndex(this.elements)}isEventWithinListenerScope(t){return this._listenerScope()===this.host||t.composedPath().includes(this._listenerScope())}handleItemMutation(){if(-1==this._currentIndex||this.elements.length<=this._elements().length)return;const t=this.elements[this.currentIndex];if(this.clearElementCache(),this.elements.includes(t))return;const e=this.currentIndex!==this.elements.length,r=e?1:-1;e&&this.setCurrentIndexCircularly(-1),this.setCurrentIndexCircularly(r),this.focus()}update({elements:t}={elements:()=>[]}){this.unmanage(),this._elements=t,this.clearElementCache(),this.manage()}focus(t){const e=this.elements;if(!e.length)return;let r=e[this.currentIndex];(!r||!this.isFocusableElement(r))&&(this.setCurrentIndexCircularly(1),r=e[this.currentIndex]),r&&this.isFocusableElement(r)&&r.focus(t)}clearElementCache(t=0){this.mutationObserver.disconnect(),delete this.cachedElements,this.offset=t,requestAnimationFrame((()=>{this.elements.forEach((t=>{this.mutationObserver.observe(t,{attributes:!0})}))}))}setCurrentIndexCircularly(t){const{length:e}=this.elements;let r=e,o=(e+this.currentIndex+t)%e;for(;r&&this.elements[o]&&!this.isFocusableElement(this.elements[o]);)o=(e+o+t)%e,r-=1;this.currentIndex=o}hostContainsFocus(){this.host.addEventListener("focusout",this.handleFocusout),this.host.addEventListener("keydown",this.handleKeydown),this.focused=!0}hostNoLongerContainsFocus(){this.host.addEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown),this.focused=!1}isRelatedTargetAnElement(t){const e=t.relatedTarget;return!this.elements.includes(e)}acceptsEventCode(t){if("End"===t||"Home"===t)return!0;switch(this.direction){case"horizontal":return"ArrowLeft"===t||"ArrowRight"===t;case"vertical":return"ArrowUp"===t||"ArrowDown"===t;case"both":case"grid":return t.startsWith("Arrow")}}manage(){this.addEventListeners()}unmanage(){this.removeEventListeners()}addEventListeners(){this.host.addEventListener("focusin",this.handleFocusin)}removeEventListeners(){this.host.removeEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown)}hostConnected(){this.recentlyConnected=!0,this.addEventListeners()}hostDisconnected(){this.mutationObserver.disconnect(),this.removeEventListeners()}hostUpdated(){this.recentlyConnected&&(this.recentlyConnected=!1,this.elements.forEach((t=>{this.mutationObserver.observe(t,{attributes:!0})})))}}class O extends U{constructor(){super(...arguments),this.managed=!0,this.manageIndexesAnimationFrame=0}set focused(t){t!==this.focused&&(super.focused=t,this.manageTabindexes())}get focused(){return super.focused}clearElementCache(t=0){cancelAnimationFrame(this.manageIndexesAnimationFrame),super.clearElementCache(t),this.managed&&(this.manageIndexesAnimationFrame=requestAnimationFrame((()=>this.manageTabindexes())))}manageTabindexes(){this.focused?this.updateTabindexes((()=>({tabIndex:-1}))):this.updateTabindexes((t=>({removeTabIndex:t.contains(this.focusInElement)&&t!==this.focusInElement,tabIndex:t===this.focusInElement?0:-1})))}updateTabindexes(t){this.elements.forEach((e=>{const{tabIndex:r,removeTabIndex:o}=t(e);if(!o)return void(e.tabIndex=r);e.removeAttribute("tabindex");const s=e;s.requestUpdate&&s.requestUpdate()}))}manage(){this.managed=!0,this.manageTabindexes(),super.manage()}unmanage(){this.managed=!1,this.updateTabindexes((()=>({tabIndex:0}))),super.unmanage()}hostUpdated(){super.hostUpdated(),this.host.hasUpdated||this.manageTabindexes()}}const B=t.iv`
#list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-medium);--spectrum-tabs-item-horizontal-spacing:var(
--spectrum-tab-item-to-tab-item-horizontal-medium
);--spectrum-tabs-item-vertical-spacing:var(
--spectrum-tab-item-to-tab-item-vertical-medium
);--spectrum-tabs-start-to-edge:var(
--spectrum-tab-item-start-to-edge-medium
);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-medium);--spectrum-tabs-bottom-to-text:var(
--spectrum-tab-item-bottom-to-text-medium
);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-100);--spectrum-tabs-top-to-icon:var(
--spectrum-tab-item-top-to-workflow-icon-medium
);--spectrum-tabs-color:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-tabs-color-selected:var(
--spectrum-neutral-subdued-content-color-down
);--spectrum-tabs-color-hover:var(
--spectrum-neutral-subdued-content-color-hover
);--spectrum-tabs-color-key-focus:var(
--spectrum-neutral-subdued-content-color-key-focus
);--spectrum-tabs-color-disabled:var(--spectrum-gray-500);--spectrum-tabs-font-family:var(--spectrum-sans-font-family-stack);--spectrum-tabs-font-style:var(--spectrum-default-font-style);--spectrum-tabs-font-size:var(--spectrum-font-size-100);--spectrum-tabs-line-height:var(--spectrum-line-height-100);--spectrum-tabs-focus-indicator-width:var(
--spectrum-focus-indicator-thickness
);--spectrum-tabs-focus-indicator-border-radius:var(
--spectrum-corner-radius-100
);--spectrum-tabs-focus-indicator-gap:var(
--spectrum-tab-item-focus-indicator-gap-medium
);--spectrum-tabs-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-tabs-selection-indicator-color:var(
--spectrum-neutral-subdued-content-color-down
);--spectrum-tabs-list-background-direction:top;--spectrum-tabs-divider-background-color:var(--spectrum-gray-300);--spectrum-tabs-divider-size:var(--spectrum-border-width-200);--spectrum-tabs-divider-border-radius:1px;--spectrum-tabs-animation-duration:var(--spectrum-animation-duration-100);--spectrum-tabs-animation-ease:var(--spectrum-animation-ease-in-out)}:host([emphasized]) #list{--mod-tabs-color-selected:var(
--mod-tabs-color-selected-emphasized,var(--spectrum-accent-content-color-default)
);--mod-tabs-color-hover:var(
--mod-tabs-color-hover-emphasized,var(--spectrum-accent-content-color-hover)
);--mod-tabs-color-key-focus:var(
--mod-tabs-color-key-focus-emphasized,var(--spectrum-accent-content-color-key-focus)
);--mod-tabs-selection-indicator-color:var(
--mod-tabs-selection-indicator-color-emphasized,var(--spectrum-accent-content-color-default)
)}:host([direction^=vertical]) #list{--mod-tabs-list-background-direction:var(
--mod-tabs-list-background-direction-vertical,right
)}:host([direction^=vertical-right]) #list{--mod-tabs-list-background-direction:var(
--mod-tabs-list-background-direction-vertical-right,left
)}:host([dir=rtl][direction^=vertical]) #list{--mod-tabs-list-background-direction:var(
--mod-tabs-list-background-direction-vertical,left
)}:host([dir=rtl][direction^=vertical-right]) #list{--mod-tabs-list-background-direction:var(
--mod-tabs-list-background-direction-vertical,right
)}:host([compact]) #list{--mod-tabs-item-height:var(
--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-medium)
);--mod-tabs-top-to-text:var(
--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-medium)
);--mod-tabs-bottom-to-text:var(
--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-medium)
);--mod-tabs-top-to-icon:var(
--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-medium)
)}#list{background:linear-gradient(to var(
--mod-tabs-list-background-direction,var(--spectrum-tabs-list-background-direction)
),var(
--highcontrast-tabs-divider-background-color,var(
--mod-tabs-divider-background-color,var(--spectrum-tabs-divider-background-color)
)
) 0 var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)),transparent var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)));display:flex;margin:0;padding-block:0;position:relative;vertical-align:top;z-index:0}::slotted([selected]:not([slot])){color:var(
--highcontrast-tabs-color-selected,var(--mod-tabs-color-selected,var(--spectrum-tabs-color-selected))
)}::slotted(:not([slot])).is-disabled{color:var(
--highcontrast-tabs-color-disabled,var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled))
);cursor:default}::slotted(:not([slot])).focus-visible,::slotted(:not([slot])):focus{color:var(
--highcontrast-tabs-color-key-focus,var(--mod-tabs-color-key-focus,var(--spectrum-tabs-color-key-focus))
)}::slotted(:not([slot])):focus,::slotted(:not([slot])):focus-visible{color:var(
--highcontrast-tabs-color-key-focus,var(--mod-tabs-color-key-focus,var(--spectrum-tabs-color-key-focus))
)}::slotted(:not([slot])).focus-visible:before,::slotted(:not([slot])):focus:before{border-color:var(
--highcontrast-tabs-focus-indicator-color,var(
--mod-tabs-focus-indicator-color,var(--spectrum-tabs-focus-indicator-color)
)
)}::slotted(:not([slot])).focus-visible:before,::slotted(:not([slot])):focus:before{border-color:var(
--highcontrast-tabs-focus-indicator-color,var(
--mod-tabs-focus-indicator-color,var(--spectrum-tabs-focus-indicator-color)
)
)}::slotted(:not([slot])):focus-visible:before,::slotted(:not([slot])):focus:before{border-color:var(
--highcontrast-tabs-focus-indicator-color,var(
--mod-tabs-focus-indicator-color,var(--spectrum-tabs-focus-indicator-color)
)
)}#selection-indicator{background-color:var(
--highcontrast-tabs-selection-indicator-color,var(
--mod-tabs-selection-indicator-color,var(--spectrum-tabs-selection-indicator-color)
)
);border-radius:var(
--mod-tabs-divider-border-radius,var(--spectrum-tabs-divider-border-radius)
);inset-inline-start:0;position:absolute;transform-origin:0 0;transition:transform var(
--mod-tabs-animation-duration,var(--spectrum-tabs-animation-duration)
) var(--mod-tabs-animation-ease,var(--spectrum-tabs-animation-ease));z-index:0}:host([direction^=horizontal]) #list{align-items:center}:host([direction^=horizontal]) #list ::slotted(:not([slot])){vertical-align:top}:host([direction^=horizontal]) #list ::slotted(:not([slot]):not(:first-child)){margin-inline-start:var(
--mod-tabs-item-horizontal-spacing,var(--spectrum-tabs-item-horizontal-spacing)
)}:host([direction^=horizontal]) #list #selection-indicator{block-size:var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size));inset-block-end:0;position:absolute}:host([direction^=horizontal][compact]) #list{align-items:end;box-sizing:content-box}:host([quiet]) #list{background:none;border-color:#0000;display:inline-flex}:host([quiet]) #selection-indicator{padding-inline-start:var(
--mod-tabs-start-to-item-quiet,var(--spectrum-tabs-start-to-item-quiet)
)}:host([direction^=vertical-right]) #list,:host([direction^=vertical]) #list{display:inline-flex;flex-direction:column;padding:0}:host([direction^=vertical-right][quiet]) #list,:host([direction^=vertical][quiet]) #list{border-color:#0000}:host([direction^=vertical-right]) #list ::slotted(:not([slot])),:host([direction^=vertical]) #list ::slotted(:not([slot])){block-size:var(--mod-tabs-item-height,var(--spectrum-tabs-item-height));line-height:var(--mod-tabs-item-height,var(--spectrum-tabs-item-height));margin-block-end:var(
--mod-tabs-item-vertical-spacing,var(--spectrum-tabs-item-vertical-spacing)
);margin-inline-end:var(
--mod-tabs-start-to-edge,var(--spectrum-tabs-start-to-edge)
);margin-inline-start:var(
--mod-tabs-start-to-edge,var(--spectrum-tabs-start-to-edge)
);padding-block:0}:host([direction^=vertical-right]) #list ::slotted(:not([slot])):before,:host([direction^=vertical]) #list ::slotted(:not([slot])):before{inset-inline-start:calc(var(
--mod-tabs-focus-indicator-gap,
var(--spectrum-tabs-focus-indicator-gap)
)*-1)}:host([direction^=vertical-right]) #list #selection-indicator,:host([direction^=vertical]) #list #selection-indicator{inline-size:var(
--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)
);inset-block-start:0;inset-inline-start:0;position:absolute}:host([direction^=vertical-right]) #list #selection-indicator{inset-inline:auto 0}@media (forced-colors:active){#list{--highcontrast-tabs-divider-background-color:var(--spectrum-gray-500);--highcontrast-tabs-selection-indicator-color:Highlight;--highcontrast-tabs-focus-indicator-color:CanvasText;--highcontrast-tabs-focus-indicator-background-color:Highlight;--highcontrast-tabs-color:ButtonText;--highcontrast-tabs-color-hover:ButtonText;--highcontrast-tabs-color-selected:HighlightText;--highcontrast-tabs-color-key-focus:ButtonText;--highcontrast-tabs-color-disabled:GrayText;forced-color-adjust:none}#list ::slotted([selected]:not([slot])):before{background-color:var(
--highcontrast-tabs-focus-indicator-background-color
)}#list ::slotted([selected]:not([slot])).focus-visible,#list ::slotted([selected]:not([slot])):focus{color:var(--highcontrast-tabs-color-selected)}#list ::slotted([selected]:not([slot])):focus,#list ::slotted([selected]:not([slot])):focus-visible{color:var(--highcontrast-tabs-color-selected)}:host([direction^=vertical][compact]) #list #list ::slotted(:not([slot])):before{block-size:100%;inset-block-start:0}:host([quiet]) #list{background:linear-gradient(to var(
--mod-tabs-list-background-direction,var(--spectrum-tabs-list-background-direction)
),var(
--highcontrast-tabs-divider-background-color,var(
--mod-tabs-divider-background-color,var(--spectrum-tabs-divider-background-color)
)
) 0 var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)),transparent var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)))}}#list{--spectrum-tabs-font-weight:var(--system-spectrum-tabs-font-weight)}:host{display:grid;grid-template-columns:100%;position:relative}:host(:not([direction^=vertical])){grid-template-rows:auto 1fr}:host([direction^=vertical]){grid-template-columns:auto 1fr}:host([dir=rtl]) #selection-indicator{left:0;right:auto}:host([direction=vertical-right]) #list #selection-indicator{inset-inline-end:0;inset-inline-start:auto}#list{justify-content:var(--swc-tabs-list-justify-content)}:host([disabled]) #list #selection-indicator{background-color:var(
--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled)
)}:host([disabled]) ::slotted(sp-tab){color:var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled))}:host([disabled]) #list{pointer-events:none}:host([direction=vertical-right]) #list #selection-indicator,:host([direction=vertical]) #list #selection-indicator{inset-block-start:0}#selection-indicator.first-position{transition:none}:host([dir][direction=horizontal]) #list.scroll{overflow-x:auto;scrollbar-width:none}:host([dir][direction=horizontal]) #list.scroll::-webkit-scrollbar{display:none}
`,M=t.iv`
:host([size=s]) #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-small);--spectrum-tabs-item-horizontal-spacing:var(
--spectrum-tab-item-to-tab-item-horizontal-small
);--spectrum-tabs-item-vertical-spacing:var(
--spectrum-tab-item-to-tab-item-vertical-small
);--spectrum-tabs-start-to-edge:var(--spectrum-tab-item-start-to-edge-small);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-small);--spectrum-tabs-bottom-to-text:var(
--spectrum-tab-item-bottom-to-text-small
);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-50);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-75);--spectrum-tabs-top-to-icon:var(
--spectrum-tab-item-top-to-workflow-icon-small
);--spectrum-tabs-focus-indicator-gap:var(
--spectrum-tab-item-focus-indicator-gap-small
);--spectrum-tabs-font-size:var(--spectrum-font-size-75)}:host([size=l]) #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-large);--spectrum-tabs-item-horizontal-spacing:var(
--spectrum-tab-item-to-tab-item-horizontal-large
);--spectrum-tabs-item-vertical-spacing:var(
--spectrum-tab-item-to-tab-item-vertical-large
);--spectrum-tabs-start-to-edge:var(--spectrum-tab-item-start-to-edge-large);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-large);--spectrum-tabs-bottom-to-text:var(
--spectrum-tab-item-bottom-to-text-large
);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-200);--spectrum-tabs-top-to-icon:var(
--spectrum-tab-item-top-to-workflow-icon-large
);--spectrum-tabs-focus-indicator-gap:var(
--spectrum-tab-item-focus-indicator-gap-large
);--spectrum-tabs-font-size:var(--spectrum-font-size-200)}:host([size=xl]) #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-extra-large);--spectrum-tabs-item-horizontal-spacing:var(
--spectrum-tab-item-to-tab-item-horizontal-extra-large
);--spectrum-tabs-item-vertical-spacing:var(
--spectrum-tab-item-to-tab-item-vertical-extra-large
);--spectrum-tabs-start-to-edge:var(
--spectrum-tab-item-start-to-edge-extra-large
);--spectrum-tabs-top-to-text:var(
--spectrum-tab-item-top-to-text-extra-large
);--spectrum-tabs-bottom-to-text:var(
--spectrum-tab-item-bottom-to-text-extra-large
);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-300);--spectrum-tabs-top-to-icon:var(
--spectrum-tab-item-top-to-workflow-icon-extra-large
);--spectrum-tabs-focus-indicator-gap:var(
--spectrum-tab-item-focus-indicator-gap-extra-large
);--spectrum-tabs-font-size:var(--spectrum-font-size-300)}:host([size=s]) #list.spectrum-Tabs--compact{--mod-tabs-item-height:var(
--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-small)
);--mod-tabs-top-to-text:var(
--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-small)
);--mod-tabs-bottom-to-text:var(
--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-small)
);--mod-tabs-top-to-icon:var(
--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-small)
)}:host([size=l]) #list.spectrum-Tabs--compact{--mod-tabs-item-height:var(
--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-large)
);--mod-tabs-top-to-text:var(
--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-large)
);--mod-tabs-bottom-to-text:var(
--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-large)
);--mod-tabs-top-to-icon:var(
--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-large)
)}:host([size=xl]) #list.spectrum-Tabs--compact{--mod-tabs-item-height:var(
--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-extra-large)
);--mod-tabs-top-to-text:var(
--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-extra-large)
);--mod-tabs-bottom-to-text:var(
--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-extra-large)
);--mod-tabs-top-to-icon:var(
--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-extra-large)
)}
`;var F=Object.defineProperty,N=Object.getOwnPropertyDescriptor,R=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?N(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&F(e,r,c),c};const V={baseSize:100,noSelectionStyle:"transform: translateX(0px) scaleX(0) scaleY(0)",transformX(t,e){return`transform: translateX(${t}px) scaleX(${e/this.baseSize});`},transformY(t,e){return`transform: translateY(${t}px) scaleY(${e/this.baseSize});`},baseStyles(){return t.iv`
            :host([direction='vertical-right']) #selection-indicator,
            :host([direction='vertical']) #selection-indicator {
                height: ${this.baseSize}px;
            }
            :host([dir][direction='horizontal']) #selection-indicator {
                width: ${this.baseSize}px;
            }
        `}};class K extends(z(D,{noDefaultSize:!0})){constructor(){super(),this.auto=!1,this.compact=!1,this.direction="horizontal",this.emphasized=!1,this.label="",this.enableTabsScroll=!1,this.quiet=!1,this.selectionIndicatorStyle=V.noSelectionStyle,this.shouldAnimate=!1,this.selected="",this._tabs=[],this.resizeController=new A(this,{callback:()=>{this.updateSelectionIndicator()}}),this.rovingTabindexController=new O(this,{focusInIndex:t=>{let e=0;return t.find(((t,r)=>{const o=this.selected?!t.disabled&&t.value===this.selected:!t.disabled;return e=r,o}))?e:-1},direction:()=>"both",elementEnterAction:t=>{this.auto&&(this.shouldAnimate=!0,this.selectTarget(t))},elements:()=>this.tabs,isFocusableElement:t=>!t.disabled,listenerScope:()=>this.tabList}),this.onTabsScroll=()=>{this.dispatchEvent(new Event("sp-tabs-scroll",{bubbles:!0,composed:!0}))},this.onClick=t=>{if(this.disabled)return;const e=t.composedPath().find((t=>t.parentElement===this));!e||e.disabled||(this.shouldAnimate=!0,this.selectTarget(e))},this.onKeyDown=t=>{if("Enter"===t.code||"Space"===t.code){t.preventDefault();const e=t.target;e&&this.selectTarget(e)}},this.updateCheckedState=()=>{if(this.tabs.forEach((t=>{t.removeAttribute("selected")})),this.selected){const t=this.tabs.find((t=>t.value===this.selected));t?t.selected=!0:this.selected=""}else{const t=this.tabs[0];t&&t.setAttribute("tabindex","0")}this.updateSelectionIndicator()},this.updateSelectionIndicator=async()=>{const t=this.tabs.find((t=>t.selected));if(!t)return void(this.selectionIndicatorStyle=V.noSelectionStyle);await Promise.all([t.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const{width:e,height:r}=t.getBoundingClientRect();this.selectionIndicatorStyle="horizontal"===this.direction?V.transformX(t.offsetLeft,e):V.transformY(t.offsetTop,r)},new $(this,{config:{root:null,rootMargin:"0px",threshold:[0,1]},callback:()=>{this.updateSelectionIndicator()}})}static get styles(){return[M,B,V.baseStyles()]}set tabs(t){t!==this.tabs&&(this._tabs.forEach((t=>{this.resizeController.unobserve(t)})),t.forEach((t=>{this.resizeController.observe(t)})),this._tabs=t,this.rovingTabindexController.clearElementCache())}get tabs(){return this._tabs}get focusElement(){return this.rovingTabindexController.focusInElement||this}scrollTabs(t,e="smooth"){var r;null==(r=this.tabList)||r.scrollBy({left:t,top:0,behavior:e})}get scrollState(){if(this.tabList){const{scrollLeft:t,clientWidth:e,scrollWidth:r}=this.tabList,o=Math.abs(t)>0,s=Math.ceil(Math.abs(t))<r-e;return{canScrollLeft:"ltr"===this.dir?o:s,canScrollRight:"ltr"===this.dir?s:o}}return{}}manageAutoFocus(){const t=[...this.children].map((t=>void 0!==t.updateComplete?t.updateComplete:Promise.resolve(!0)));Promise.all(t).then((()=>super.manageAutoFocus()))}managePanels({target:t}){t.assignedElements().map((t=>{const{value:e,id:r}=t,o=this.querySelector(`[role="tab"][value="${e}"]`);o&&(o.setAttribute("aria-controls",r),t.setAttribute("aria-labelledby",o.id)),t.selected=e===this.selected}))}render(){return t.dy`
            <div
                class=${S({scroll:this.enableTabsScroll})}
                aria-label=${(0,E.o)(this.label?this.label:void 0)}
                @click=${this.onClick}
                @keydown=${this.onKeyDown}
                @scroll=${this.onTabsScroll}
                id="list"
                role="tablist"
                part="tablist"
            >
                <slot @slotchange=${this.onSlotChange}></slot>
                <div
                    id="selection-indicator"
                    class=${(0,E.o)(this.shouldAnimate?void 0:"first-position")}
                    style=${this.selectionIndicatorStyle}
                    role="presentation"
                ></div>
            </div>
            <slot name="tab-panel" @slotchange=${this.managePanels}></slot>
        `}willUpdate(t){if(!this.hasUpdated){const t=this.querySelector(":scope > [selected]");t&&this.selectTarget(t)}if(super.willUpdate(t),t.has("selected")){if(this.tabs.length&&this.updateCheckedState(),t.get("selected")){const e=this.querySelector(`[role="tabpanel"][value="${t.get("selected")}"]`);e&&(e.selected=!1)}const e=this.querySelector(`[role="tabpanel"][value="${this.selected}"]`);e&&(e.selected=!0)}t.has("direction")&&("horizontal"===this.direction?this.removeAttribute("aria-orientation"):this.setAttribute("aria-orientation","vertical")),t.has("dir")&&this.updateSelectionIndicator(),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),!this.shouldAnimate&&void 0!==t.get("shouldAnimate")&&(this.shouldAnimate=!0)}selectTarget(t){const e=t.getAttribute("value");if(e){const t=this.selected;this.selected=e,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=t)}}onSlotChange(){this.tabs=this.slotEl.assignedElements().filter((t=>"tab"===t.getAttribute("role"))),this.updateCheckedState()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.addEventListener("loadingdone",this.updateSelectionIndicator)}disconnectedCallback(){window.removeEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.removeEventListener("loadingdone",this.updateSelectionIndicator),super.disconnectedCallback()}}R([(0,d.Cb)({type:Boolean})],K.prototype,"auto",2),R([(0,d.Cb)({type:Boolean,reflect:!0})],K.prototype,"compact",2),R([(0,d.Cb)({reflect:!0})],K.prototype,"dir",2),R([(0,d.Cb)({reflect:!0})],K.prototype,"direction",2),R([(0,d.Cb)({type:Boolean,reflect:!0})],K.prototype,"emphasized",2),R([(0,d.Cb)()],K.prototype,"label",2),R([(0,d.Cb)({type:Boolean})],K.prototype,"enableTabsScroll",2),R([(0,d.Cb)({type:Boolean,reflect:!0})],K.prototype,"quiet",2),R([(0,d.Cb)({attribute:!1})],K.prototype,"selectionIndicatorStyle",2),R([(0,d.Cb)({attribute:!1})],K.prototype,"shouldAnimate",2),R([(0,d.IO)("slot")],K.prototype,"slotEl",2),R([(0,d.IO)("#list")],K.prototype,"tabList",2),R([(0,d.Cb)({reflect:!0})],K.prototype,"selected",2),(0,y.N)("sp-tabs",K);class X{constructor(t,{target:e,config:r,callback:o,skipInitial:s}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,null!==e&&this.t.add(null!=e?e:t),this.l=r,this.o=null!=s?s:this.o,this.callback=o,window.MutationObserver?(this.u=new MutationObserver((t=>{this.handleChanges(t),this.h.requestUpdate()})),t.addController(this)):console.warn("MutationController error: browser does not support MutationObserver.")}handleChanges(t){var e;this.value=null===(e=this.callback)||void 0===e?void 0:e.call(this,t,this.u)}hostConnected(){for(const t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){const t=this.u.takeRecords();(t.length||!this.o&&this.i)&&this.handleChanges(t),this.i=!1}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate()}disconnect(){this.u.disconnect()}}var G=Object.defineProperty,W=Object.getOwnPropertyDescriptor,Z=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?W(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&G(e,r,c),c};const Y=Symbol("assignedNodes");function J(t,e,r=[]){var o;const s=t=>e=>t.matches(e);class c extends t{constructor(...t){super(t),this.slotHasContent=!1,new X(this,{config:{characterData:!0,subtree:!0},callback:t=>{for(const e of t)if("characterData"===e.type)return void this.manageTextObservedSlot()}})}manageTextObservedSlot(){if(!this[Y])return;const t=[...this[Y]].filter((t=>{const e=t;return e.tagName?!r.some(s(e)):!!e.textContent&&e.textContent.trim()}));this.slotHasContent=t.length>0}update(t){if(!this.hasUpdated){const{childNodes:t}=this,o=[...t].filter((t=>{const o=t;return o.tagName?!r.some(s(o))&&(e?o.getAttribute("slot")===e:!o.hasAttribute("slot")):!!o.textContent&&o.textContent.trim()}));this.slotHasContent=o.length>0}super.update(t)}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then((()=>{this.manageTextObservedSlot()}))}}return o=Y,Z([(0,d.Cb)({type:Boolean,attribute:!1})],c.prototype,"slotHasContent",2),Z([(0,d.vZ)({slot:e,flatten:!0})],c.prototype,o,2),c}const Q=Symbol("slotContentIsPresent");function tt(t,e){var r;const o=Array.isArray(e)?e:[e];return r=Q,class extends t{constructor(...t){super(t),this[r]=new Map,this.managePresenceObservedSlot=()=>{let t=!1;o.forEach((e=>{const r=!!this.querySelector(`:scope > ${e}`),o=this[Q].get(e)||!1;t=t||o!==r,this[Q].set(e,!!this.querySelector(`:scope > ${e}`))})),t&&this.updateComplete.then((()=>{this.requestUpdate()}))},new X(this,{config:{childList:!0,subtree:!0},callback:()=>{this.managePresenceObservedSlot()}}),this.managePresenceObservedSlot()}get slotContentIsPresent(){if(1===o.length)return this[Q].get(o[0])||!1;throw new Error("Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.")}getSlotContentPresence(t){if(this[Q].has(t))return this[Q].get(t)||!1;throw new Error(`The provided selector \`${t}\` is not being observed.`)}}}const et=t.iv`
:host{block-size:calc(var(--mod-tabs-item-height, var(--spectrum-tabs-item-height)) - var(--mod-tabs-divider-size, var(--spectrum-tabs-divider-size)));box-sizing:border-box;color:var(
--highcontrast-tabs-color,var(--mod-tabs-color,var(--spectrum-tabs-color))
);cursor:pointer;outline:none;position:relative;-webkit-text-decoration:none;text-decoration:none;transition:color var(
--mod-tabs-animation-duration,var(--spectrum-tabs-animation-duration)
) ease-out;white-space:nowrap;z-index:1}::slotted([slot=icon]){block-size:var(--mod-tabs-icon-size,var(--spectrum-tabs-icon-size));inline-size:var(--mod-tabs-icon-size,var(--spectrum-tabs-icon-size));margin-block-start:var(
--mod-tabs-top-to-icon,var(--spectrum-tabs-top-to-icon)
)}[name=icon]+#item-label{margin-inline-start:var(
--mod-tabs-icon-to-text,var(--spectrum-tabs-icon-to-text)
)}:host:before{block-size:calc(100% - var(--mod-tabs-top-to-text, var(--spectrum-tabs-top-to-text)));border:var(
--mod-tabs-focus-indicator-width,var(--spectrum-tabs-focus-indicator-width)
) solid transparent;border-radius:var(
--mod-tabs-focus-indicator-border-radius,var(--spectrum-tabs-focus-indicator-border-radius)
);box-sizing:border-box;content:"";inline-size:calc(100% + var(
--mod-tabs-focus-indicator-gap,
var(--spectrum-tabs-focus-indicator-gap)
)*2);inset-block-start:calc(var(--mod-tabs-top-to-text, var(--spectrum-tabs-top-to-text))/2);inset-inline-end:calc(var(
--mod-tabs-focus-indicator-gap,
var(--spectrum-tabs-focus-indicator-gap)
)*-1);inset-inline-start:calc(var(
--mod-tabs-focus-indicator-gap,
var(--spectrum-tabs-focus-indicator-gap)
)*-1);pointer-events:none;position:absolute}:host(:hover){color:var(
--highcontrast-tabs-color-hover,var(--mod-tabs-color-hover,var(--spectrum-tabs-color-hover))
)}:host([selected]){color:var(
--highcontrast-tabs-color-selected,var(--mod-tabs-color-selected,var(--spectrum-tabs-color-selected))
)}:host([disabled]){color:var(
--highcontrast-tabs-color-disabled,var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled))
);cursor:default}:host([disabled]) #item-label{cursor:default}:host(.focus-visible),:host(:focus){color:var(
--highcontrast-tabs-color-key-focus,var(--mod-tabs-color-key-focus,var(--spectrum-tabs-color-key-focus))
)}:host(:focus),:host(:focus-visible){color:var(
--highcontrast-tabs-color-key-focus,var(--mod-tabs-color-key-focus,var(--spectrum-tabs-color-key-focus))
)}:host(.focus-visible):before,:host(:focus):before{border-color:var(
--highcontrast-tabs-focus-indicator-color,var(
--mod-tabs-focus-indicator-color,var(--spectrum-tabs-focus-indicator-color)
)
)}:host(:focus):before,:host(:focus-visible):before{border-color:var(
--highcontrast-tabs-focus-indicator-color,var(
--mod-tabs-focus-indicator-color,var(--spectrum-tabs-focus-indicator-color)
)
)}#item-label{cursor:pointer;display:inline-block;font-family:var(--mod-tabs-font-family,var(--spectrum-tabs-font-family));font-size:var(--mod-tabs-font-weight,var(--spectrum-tabs-font-size));font-style:var(--mod-tabs-font-style,var(--spectrum-tabs-font-style));font-weight:var(--mod-tabs-font-weight,var(--spectrum-tabs-font-weight));line-height:var(--mod-tabs-line-height,var(--spectrum-tabs-line-height));margin-block-end:var(
--mod-tabs-bottom-to-text,var(--spectrum-tabs-bottom-to-text)
);margin-block-start:var(
--mod-tabs-top-to-text,var(--spectrum-tabs-top-to-text)
);-webkit-text-decoration:none;text-decoration:none;vertical-align:top}#item-label:empty{display:none}:host([disabled]){pointer-events:none}#item-label[hidden]{display:none}@media (forced-colors:active){:host:before{background-color:ButtonFace}:host ::slotted([slot=icon]){color:inherit;position:relative;z-index:1}#item-label{position:relative;z-index:1}:host([selected]){color:HighlightText}:host([selected]) ::slotted([slot=icon]){color:HighlightText}:host([selected]) #item-label{color:HighlightText}}:host([vertical]){align-items:center;display:flex;flex-direction:column;height:auto;justify-content:center}:host([dir][vertical]) slot[name=icon]+#item-label{margin-block-end:calc(var(--mod-tabs-bottom-to-text, var(--spectrum-tabs-bottom-to-text))/2);margin-block-start:calc(var(--mod-tabs-top-to-text, var(--spectrum-tabs-top-to-text))/2);margin-inline-start:0}:host([vertical]) ::slotted([slot=icon]){margin-block-start:calc(var(--mod-tabs-top-to-icon, var(--spectrum-tabs-top-to-icon))/2)}
`;var rt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,st=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?ot(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&rt(e,r,c),c};const ct=class e extends(q(J(tt(u.o,'[slot="icon"]'),""))){constructor(){super(...arguments),this.disabled=!1,this.label="",this.selected=!1,this.vertical=!1,this.value=""}static get styles(){return[et]}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return!!this.label||this.slotHasContent}render(){return t.dy`
            ${this.hasIcon?t.dy`
                      <slot name="icon"></slot>
                  `:t.Ld}
            <label id="item-label" ?hidden=${!this.hasLabel}>
                ${this.slotHasContent?t.Ld:this.label}
                <slot>${this.label}</slot>
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","tab"),this.hasAttribute("id")||(this.id="sp-tab-"+e.instanceCount++)}updated(t){super.updated(t),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.setAttribute("tabindex",this.selected?"0":"-1")),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}};ct.instanceCount=0,st([(0,d.Cb)({type:Boolean,reflect:!0})],ct.prototype,"disabled",2),st([(0,d.Cb)({reflect:!0})],ct.prototype,"label",2),st([(0,d.Cb)({type:Boolean,reflect:!0})],ct.prototype,"selected",2),st([(0,d.Cb)({type:Boolean,reflect:!0})],ct.prototype,"vertical",2),st([(0,d.Cb)({type:String,reflect:!0})],ct.prototype,"value",2);let at=ct;(0,y.N)("sp-tab",at);const it=t.iv`
:host{display:inline-flex}:host(:not([selected])){display:none}
`;var nt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,ut=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?lt(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&nt(e,r,c),c};const dt=class e extends u.o{constructor(){super(...arguments),this.selected=!1,this.value=""}handleFocusin(){this.removeAttribute("tabindex")}handleFocusout(){this.tabIndex=this.selected?0:-1}render(){return t.dy`
            <slot
                @focusin=${this.handleFocusin}
                @focusout=${this.handleFocusout}
            ></slot>
        `}firstUpdated(){this.slot="tab-panel",this.setAttribute("role","tabpanel"),this.tabIndex=0,this.hasAttribute("id")||(this.id="sp-tab-panel-"+e.instanceCount++)}updated(t){t.has("selected")&&(this.selected?(this.removeAttribute("aria-hidden"),this.tabIndex=0):(this.setAttribute("aria-hidden","true"),this.tabIndex=-1))}};dt.styles=[it],dt.instanceCount=0,ut([(0,d.Cb)({type:Boolean,reflect:!0})],dt.prototype,"selected",2),ut([(0,d.Cb)({type:String,reflect:!0})],dt.prototype,"value",2);let mt=dt;(0,y.N)("sp-tab-panel",mt);var pt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,bt=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?ht(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&pt(e,r,c),c};function gt(e){class r extends e{renderAnchor({id:e,className:r,ariaHidden:o,labelledby:s,tabindex:c,anchorContent:a=t.dy`<slot></slot>`}){return t.dy`<a
                    id=${e}
                    class=${(0,E.o)(r)}
                    href=${(0,E.o)(this.href)}
                    download=${(0,E.o)(this.download)}
                    target=${(0,E.o)(this.target)}
                    aria-label=${(0,E.o)(this.label)}
                    aria-labelledby=${(0,E.o)(s)}
                    aria-hidden=${(0,E.o)(o?"true":void 0)}
                    tabindex=${(0,E.o)(c)}
                    rel=${(0,E.o)(this.rel)}
                >${a}</a>`}}return bt([(0,d.Cb)({reflect:!0})],r.prototype,"download",2),bt([(0,d.Cb)()],r.prototype,"label",2),bt([(0,d.Cb)({reflect:!0})],r.prototype,"href",2),bt([(0,d.Cb)({reflect:!0})],r.prototype,"target",2),bt([(0,d.Cb)({reflect:!0})],r.prototype,"rel",2),r}const vt=t.iv`
:host{display:inline-flex;vertical-align:top}:host([dir]){-webkit-appearance:none}:host([disabled]){cursor:auto;pointer-events:none}#button{inset:0;position:absolute}::slotted(sp-overlay),::slotted(sp-tooltip){position:absolute}:host:after{pointer-events:none}slot[name=icon]::slotted(img),slot[name=icon]::slotted(svg){fill:currentcolor;stroke:currentcolor;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}[icon-only]+#label{display:contents}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
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
)}
`;var ft=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,yt=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?kt(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&ft(e,r,c),c};class xt extends(J(gt(D),"",["sp-overlay,sp-tooltip"])){constructor(){super(),this.active=!1,this.type="button",this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0})}static get styles(){return[vt]}get focusElement(){return this}get hasLabel(){return this.slotHasContent}get buttonContent(){return[t.dy`
                <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
            `,t.dy`
                <span id="label">
                    <slot @slotchange=${this.manageTextObservedSlot}></slot>
                </span>
            `]}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;if(this.anchorElement)this.anchorElement.click(),t=!0;else if("button"!==this.type){const e=document.createElement("button");e.type=this.type,this.insertAdjacentElement("afterend",e),e.click(),e.remove(),t=!0}return t}renderAnchor(){return t.dy`
            ${this.buttonContent}
            ${super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"})}
        `}renderButton(){return t.dy`
            ${this.buttonContent}
        `}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton()}handleKeydown(t){const{code:e}=t;"Space"===e&&(t.preventDefault(),void 0===this.href&&(this.addEventListener("keyup",this.handleKeyup),this.active=!0))}handleKeypress(t){const{code:e}=t;switch(e){case"Enter":case"NumpadEnter":this.click()}}handleKeyup(t){const{code:e}=t;"Space"===e&&(this.removeEventListener("keyup",this.handleKeyup),this.active=!1,this.click())}handleRemoveActive(){this.active=!1}handlePointerdown(){this.active=!0}manageAnchor(){this.href&&this.href.length>0?((!this.hasAttribute("role")||"button"===this.getAttribute("role"))&&this.setAttribute("role","link"),this.removeEventListener("click",this.shouldProxyClick)):((!this.hasAttribute("role")||"link"===this.getAttribute("role"))&&this.setAttribute("role","button"),this.addEventListener("click",this.shouldProxyClick))}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.manageAnchor(),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keypress",this.handleKeypress),this.addEventListener("pointerdown",this.handlePointerdown)}updated(t){super.updated(t),t.has("href")&&this.manageAnchor(),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("focusout",this.handleRemoveActive),this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointercancel",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("focusout",this.handleRemoveActive),this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointercancel",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1)}}yt([(0,d.Cb)({type:Boolean,reflect:!0})],xt.prototype,"active",2),yt([(0,d.Cb)({type:String})],xt.prototype,"type",2),yt([(0,d.IO)(".anchor")],xt.prototype,"anchorElement",2);const wt=t.iv`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)
);justify-content:center;line-height:var(--mod-line-height-100,var(--spectrum-line-height-100));margin:0;overflow:visible;-webkit-text-decoration:none;text-decoration:none;text-transform:none;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,border-color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out;-webkit-user-select:none;user-select:none;vertical-align:top}:host(:focus){outline:none}:host([disabled]){cursor:default}::slotted([slot=icon]){max-block-size:100%}#label{place-self:center;text-align:center}#label:empty{display:none}:host{--spectrum-actionbutton-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-actionbutton-border-radius:var(--spectrum-corner-radius-100);--spectrum-actionbutton-border-width:var(--spectrum-border-width-100);--spectrum-actionbutton-content-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--spectrum-neutral-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-actionbutton-focus-indicator-gap:var(
--spectrum-focus-indicator-gap
);--spectrum-actionbutton-focus-indicator-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-actionbutton-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-actionbutton-focus-indicator-border-radius:calc(var(--spectrum-actionbutton-border-radius) + var(--spectrum-actionbutton-focus-indicator-gap))}:host([selected]){--mod-actionbutton-background-color-default:var(
--mod-actionbutton-background-color-default-selected,var(--spectrum-neutral-background-color-selected-default)
);--mod-actionbutton-background-color-hover:var(
--mod-actionbutton-background-color-hover-selected,var(--spectrum-neutral-background-color-selected-hover)
);--mod-actionbutton-background-color-down:var(
--mod-actionbutton-background-color-down-selected,var(--spectrum-neutral-background-color-selected-down)
);--mod-actionbutton-background-color-focus:var(
--mod-actionbutton-background-color-focus-selected,var(--spectrum-neutral-background-color-selected-key-focus)
);--mod-actionbutton-content-color-default:var(
--mod-actionbutton-content-color-default-selected,var(--spectrum-gray-50)
);--mod-actionbutton-content-color-hover:var(
--mod-actionbutton-content-color-hover-selected,var(--spectrum-gray-50)
);--mod-actionbutton-content-color-down:var(
--mod-actionbutton-content-color-down-selected,var(--spectrum-gray-50)
);--mod-actionbutton-content-color-focus:var(
--mod-actionbutton-content-color-focus-selected,var(--spectrum-gray-50)
)}:host([selected][emphasized]){--mod-actionbutton-background-color-default:var(
--mod-actionbutton-background-color-default-selected-emphasized,var(--spectrum-accent-background-color-default)
);--mod-actionbutton-background-color-hover:var(
--mod-actionbutton-background-color-hover-selected-emphasized,var(--spectrum-accent-background-color-hover)
);--mod-actionbutton-background-color-down:var(
--mod-actionbutton-background-color-down-selected-emphasized,var(--spectrum-accent-background-color-down)
);--mod-actionbutton-background-color-focus:var(
--mod-actionbutton-background-color-focus-selected-emphasized,var(--spectrum-accent-background-color-key-focus)
);--mod-actionbutton-content-color-default:var(
--mod-actionbutton-content-color-default-selected-emphasized,var(--spectrum-white)
);--mod-actionbutton-content-color-hover:var(
--mod-actionbutton-content-color-hover-selected-emphasized,var(--spectrum-white)
);--mod-actionbutton-content-color-down:var(
--mod-actionbutton-content-color-down-selected-emphasized,var(--spectrum-white)
);--mod-actionbutton-content-color-focus:var(
--mod-actionbutton-content-color-focus-selected-emphasized,var(--spectrum-white)
)}:host([size=xs]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-50)*2 + var(--spectrum-workflow-icon-size-50));--spectrum-actionbutton-height:var(--spectrum-component-height-50);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-50);--spectrum-actionbutton-font-size:var(--spectrum-font-size-50);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-50);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-extra-small
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-50) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-50) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-50) - var(--spectrum-actionbutton-border-width))}:host([size=s]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-75)*2 + var(--spectrum-workflow-icon-size-75));--spectrum-actionbutton-height:var(--spectrum-component-height-75);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-actionbutton-font-size:var(--spectrum-font-size-75);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-small
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-75) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-75) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-75) - var(--spectrum-actionbutton-border-width))}:host{--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-100)*2 + var(--spectrum-workflow-icon-size-100));--spectrum-actionbutton-height:var(--spectrum-component-height-100);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-actionbutton-font-size:var(--spectrum-font-size-100);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-100);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-medium
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-100) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-100) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-100) - var(--spectrum-actionbutton-border-width))}:host([size=l]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-200)*2 + var(--spectrum-workflow-icon-size-200));--spectrum-actionbutton-height:var(--spectrum-component-height-200);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-actionbutton-font-size:var(--spectrum-font-size-200);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-200);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-large
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-200) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-200) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-200) - var(--spectrum-actionbutton-border-width))}:host([size=xl]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-300)*2 + var(--spectrum-workflow-icon-size-300));--spectrum-actionbutton-height:var(--spectrum-component-height-300);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-300);--spectrum-actionbutton-font-size:var(--spectrum-font-size-300);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-300);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-extra-large
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-300) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-300) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-300) - var(--spectrum-actionbutton-border-width))}@media (forced-colors:active){:host{--highcontrast-actionbutton-focus-indicator-color:ButtonText}:host:after{forced-color-adjust:none}:host([selected]){--highcontrast-actionbutton-background-color-default:Highlight;--highcontrast-actionbutton-background-color-hover:Highlight;--highcontrast-actionbutton-background-color-focus:Highlight;--highcontrast-actionbutton-background-color-down:Highlight;--highcontrast-actionbutton-background-color-disabled:ButtonFace;--highcontrast-actionbutton-border-color-default:HighlightText;--highcontrast-actionbutton-border-color-hover:HighlightText;--highcontrast-actionbutton-border-color-focus:HighlightText;--highcontrast-actionbutton-border-color-down:HighlightText;--highcontrast-actionbutton-border-color-disabled:GrayText;--highcontrast-actionbutton-content-color-default:HighlightText;--highcontrast-actionbutton-content-color-hover:HighlightText;--highcontrast-actionbutton-content-color-focus:HighlightText;--highcontrast-actionbutton-content-color-down:HighlightText;--highcontrast-actionbutton-content-color-disabled:GrayText}:host([selected]) #label,:host([selected]) .hold-affordance,:host([selected]) ::slotted([slot=icon]){forced-color-adjust:none}}:host{background-color:var(
--highcontrast-actionbutton-background-color-default,var(
--mod-actionbutton-background-color-default,var(--spectrum-actionbutton-background-color-default)
)
);block-size:var(
--mod-actionbutton-height,var(--spectrum-actionbutton-height)
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
);gap:calc(var(
--mod-actionbutton-text-to-visual,
var(--spectrum-actionbutton-text-to-visual)
) + var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
) - var(
--mod-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
));min-inline-size:var(
--mod-actionbutton-min-width,var(--spectrum-actionbutton-min-width)
);padding-inline:var(
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
)}::slotted([slot=icon]){block-size:var(
--mod-actionbutton-icon-size,var(--spectrum-actionbutton-icon-size)
);color:inherit;inline-size:var(
--mod-actionbutton-icon-size,var(--spectrum-actionbutton-icon-size)
);margin-inline-end:calc(var(
--mod-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
) - var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
));margin-inline-start:calc(var(
--mod-actionbutton-edge-to-visual,
var(--spectrum-actionbutton-edge-to-visual)
) - var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
))}.hold-affordance+::slotted([slot=icon]),[icon-only]::slotted([slot=icon]){margin-inline-start:calc(var(
--mod-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
) - var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
))}#label{color:var(--mod-actionbutton-label-color,inherit);font-size:var(
--mod-actionbutton-font-size,var(--spectrum-actionbutton-font-size)
);overflow:hidden;pointer-events:none;text-overflow:ellipsis;white-space:nowrap}:host([dir=rtl]) .hold-affordance{transform:matrix(-1,0,0,1,0,0)}.hold-affordance{color:inherit;inset-block-end:calc(var(
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
) ease-in-out}:host(.focus-visible){box-shadow:none;outline:none}:host(.focus-visible){box-shadow:none;outline:none}:host(:focus-visible){box-shadow:none;outline:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
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
)}:host([selected]){--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-selected-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-selected-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-selected-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-selected-border-color-focus
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-selected-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-selected-border-color-disabled
)}:host([static=black][quiet]){--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-focus
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-disabled
)}:host([static=white][quiet]){--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-focus
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-disabled
)}:host([static=black]){--spectrum-actionbutton-background-color-default:var(
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
)}:host([static=black][selected]){--mod-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-default
);--mod-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-hover
);--mod-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-down
);--mod-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-focus
);--mod-actionbutton-content-color-default:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-default
)
);--mod-actionbutton-content-color-hover:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-hover
)
);--mod-actionbutton-content-color-down:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-down
)
);--mod-actionbutton-content-color-focus:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-focus
)
);--mod-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-disabled
);--mod-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-border-color-disabled
)}:host([static=white]){--spectrum-actionbutton-background-color-default:var(
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
)}:host([static=white][selected]){--mod-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-default
);--mod-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-hover
);--mod-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-down
);--mod-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-focus
);--mod-actionbutton-content-color-default:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-default
)
);--mod-actionbutton-content-color-hover:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-hover
)
);--mod-actionbutton-content-color-down:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-down
)
);--mod-actionbutton-content-color-focus:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-focus
)
);--mod-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-disabled
);--mod-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-border-color-disabled
)}::slotted([slot=icon]){flex-shrink:0}#label{flex-grow:var(--spectrum-actionbutton-label-flex-grow);pointer-events:none!important;text-align:var(--spectrum-actionbutton-label-text-align)}:host([size=xs]){min-width:var(--spectrum-actionbutton-height,0)}@media (forced-colors:active){:host{--highcontrast-actionbutton-border-color-disabled:GrayText;--highcontrast-actionbutton-content-color-disabled:GrayText}}
`,zt=t.iv`
.spectrum-UIIcon-CornerTriangle75{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
)}.spectrum-UIIcon-CornerTriangle100{height:var(--spectrum-alias-ui-icon-cornertriangle-size-100);width:var(--spectrum-alias-ui-icon-cornertriangle-size-100)}.spectrum-UIIcon-CornerTriangle200{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
)}.spectrum-UIIcon-CornerTriangle300{height:var(--spectrum-alias-ui-icon-cornertriangle-size-300);width:var(--spectrum-alias-ui-icon-cornertriangle-size-300)}
`;let Ct;const It=function(t,...e){return Ct?Ct(t,...e):e.reduce(((e,r,o)=>e+r+t[o+1]),t[0])},St=t=>{Ct=t};(0,y.N)("sp-icon-corner-triangle300",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Corner Triangle300"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path
      d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"
    />
  </svg>`)()}});var Et=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,At=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?$t(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&Et(e,r,c),c};const jt={xs:"spectrum-UIIcon-CornerTriangle75",s:"spectrum-UIIcon-CornerTriangle75",m:"spectrum-UIIcon-CornerTriangle100",l:"spectrum-UIIcon-CornerTriangle200",xl:"spectrum-UIIcon-CornerTriangle300"};let qt;class _t extends(z(xt,{validSizes:["xs","s","m","l","xl"],noDefaultSize:!0})){constructor(){super(),this.emphasized=!1,this.holdAffordance=!1,this.quiet=!1,this.role="button",this.selected=!1,this.toggles=!1,this._value="",this.onClick=()=>{this.toggles&&(this.selected=!this.selected,this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0}))||(this.selected=!this.selected))},this.addEventListener("click",this.onClick)}static get styles(){return[...super.styles,wt,zt]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return(this.textContent||"").trim()}handlePointerdownHoldAffordance(t){0===t.button&&(this.addEventListener("pointerup",this.handlePointerupHoldAffordance),this.addEventListener("pointercancel",this.handlePointerupHoldAffordance),qt=setTimeout((()=>{this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"pointer"}}))}),300))}handlePointerupHoldAffordance(){clearTimeout(qt),this.removeEventListener("pointerup",this.handlePointerupHoldAffordance),this.removeEventListener("pointercancel",this.handlePointerupHoldAffordance)}handleKeydown(t){if(!this.holdAffordance)return super.handleKeydown(t);const{code:e,altKey:r}=t;("Space"===e||r&&"ArrowDown"===e)&&(t.preventDefault(),"ArrowDown"===e&&(t.stopPropagation(),t.stopImmediatePropagation()),this.addEventListener("keyup",this.handleKeyup),this.active=!0)}handleKeyup(t){if(!this.holdAffordance)return super.handleKeyup(t);const{code:e,altKey:r}=t;("Space"===e||r&&"ArrowDown"===e)&&(t.stopPropagation(),this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"keyboard"}})),this.active=!1)}get buttonContent(){const e=super.buttonContent;return this.holdAffordance&&e.unshift(t.dy`
                <sp-icon-corner-triangle300
                    class="hold-affordance ${jt[this.size]}"
                ></sp-icon-corner-triangle300>
            `),e}updated(t){super.updated(t);const e="button"===this.role,r=e&&(this.selected||this.toggles)&&!(this.hasAttribute("aria-haspopup")&&this.hasAttribute("aria-expanded"));(t.has("selected")||t.has("role"))&&(r?this.setAttribute("aria-pressed",this.selected?"true":"false"):(this.removeAttribute("aria-pressed"),e&&this.toggles&&this.hasAttribute("aria-expanded")&&this.setAttribute("aria-expanded",this.selected?"true":"false"))),t.has("variant")&&(this.variant||typeof t.get("variant"))&&(this.static=this.variant),t.has("holdAffordance")&&(this.holdAffordance?this.addEventListener("pointerdown",this.handlePointerdownHoldAffordance):(this.removeEventListener("pointerdown",this.handlePointerdownHoldAffordance),this.handlePointerupHoldAffordance()))}}At([(0,d.Cb)({type:Boolean,reflect:!0})],_t.prototype,"emphasized",2),At([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"hold-affordance"})],_t.prototype,"holdAffordance",2),At([(0,d.Cb)({type:Boolean,reflect:!0})],_t.prototype,"quiet",2),At([(0,d.Cb)({reflect:!0})],_t.prototype,"role",2),At([(0,d.Cb)({type:Boolean,reflect:!0})],_t.prototype,"selected",2),At([(0,d.Cb)({type:Boolean,reflect:!0})],_t.prototype,"toggles",2),At([(0,d.Cb)({reflect:!0})],_t.prototype,"static",2),At([(0,d.Cb)({reflect:!0})],_t.prototype,"variant",2),At([(0,d.Cb)({type:String})],_t.prototype,"value",1),(0,y.N)("sp-action-button",_t);const Tt=t.iv`
:host([size=s]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-200);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-200)}:host{--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host([size=l]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host([size=xl]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host{display:flex;flex-wrap:wrap;gap:var(
--mod-buttongroup-spacing-horizontal,var(--spectrum-buttongroup-spacing-horizontal)
);justify-content:var(--mod-buttongroup-justify-content,normal)}::slotted(*){flex-shrink:0}:host([vertical]){display:inline-flex;flex-direction:column;gap:var(
--mod-buttongroup-spacing-vertical,var(--spectrum-buttongroup-spacing-vertical)
)}:host([vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-flex-grow:1}:host([dir=ltr][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:left}:host([dir=rtl][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:right}
`;var Ht=Object.defineProperty;Object.getOwnPropertyDescriptor;class Lt extends(z(u.o,{noDefaultSize:!0})){constructor(){super(...arguments),this.vertical=!1}static get styles(){return[Tt]}handleSlotchange({target:t}){t.assignedElements().forEach((t=>{t.size=this.size}))}render(){return t.dy`
            <slot @slotchange=${this.handleSlotchange}></slot>
        `}}((t,e,r,o)=>{for(var s,c=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(c=s(e,r,c)||c);c&&Ht(e,r,c)})([(0,d.Cb)({type:Boolean,reflect:!0})],Lt.prototype,"vertical"),(0,y.N)("sp-button-group",Lt);const Dt=t.iv`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)
);justify-content:center;line-height:var(--mod-line-height-100,var(--spectrum-line-height-100));margin:0;overflow:visible;-webkit-text-decoration:none;text-decoration:none;text-transform:none;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,border-color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out;-webkit-user-select:none;user-select:none;vertical-align:top}:host(:focus){outline:none}:host([disabled]){cursor:default}:host:after{display:block;margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-1);transition:opacity var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,margin var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out}:host(.focus-visible):after{margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-2)}:host(.focus-visible):after{margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-2)}:host(:focus-visible):after{margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-2)}#label{place-self:center;text-align:center}#label[hidden]{display:none}:host{--spectrum-button-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-button-border-radius:var(--spectrum-corner-radius-100);--spectrum-button-border-width:var(--spectrum-border-width-200);--spectrum-button-line-height:1.2;--spectrum-button-focus-ring-border-radius:calc(var(--spectrum-button-border-radius) + var(--spectrum-button-focus-ring-gap));--spectrum-button-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-button-focus-ring-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-button-focus-indicator-color:var(
--spectrum-focus-indicator-color
)}:host([size=s]){--spectrum-button-min-width:calc(var(--spectrum-component-height-75)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(
--spectrum-component-pill-edge-to-text-75
);--spectrum-button-height:var(--spectrum-component-height-75);--spectrum-button-font-size:var(--spectrum-font-size-75);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-75) - var(--spectrum-button-border-width));--spectrum-button-edge-to-visual-only:var(
--spectrum-component-pill-edge-to-visual-only-75
);--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-75) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-75);--spectrum-button-top-to-text:var(--spectrum-button-top-to-text-small);--spectrum-button-bottom-to-text:var(
--spectrum-button-bottom-to-text-small
)}:host{--spectrum-button-min-width:calc(var(--spectrum-component-height-100)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(
--spectrum-component-pill-edge-to-text-100
);--spectrum-button-height:var(--spectrum-component-height-100);--spectrum-button-font-size:var(--spectrum-font-size-100);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-100) - var(--spectrum-button-border-width));--spectrum-button-edge-to-visual-only:var(
--spectrum-component-pill-edge-to-visual-only-100
);--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-100) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-100);--spectrum-button-top-to-text:var(--spectrum-button-top-to-text-medium);--spectrum-button-bottom-to-text:var(
--spectrum-button-bottom-to-text-medium
)}:host([size=l]){--spectrum-button-min-width:calc(var(--spectrum-component-height-200)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(
--spectrum-component-pill-edge-to-text-200
);--spectrum-button-height:var(--spectrum-component-height-200);--spectrum-button-font-size:var(--spectrum-font-size-200);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-200) - var(--spectrum-button-border-width));--spectrum-button-edge-to-visual-only:var(
--spectrum-component-pill-edge-to-visual-only-200
);--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-200) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-200);--spectrum-button-top-to-text:var(--spectrum-button-top-to-text-large);--spectrum-button-bottom-to-text:var(
--spectrum-button-bottom-to-text-large
)}:host([size=xl]){--spectrum-button-min-width:calc(var(--spectrum-component-height-300)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(
--spectrum-component-pill-edge-to-text-300
);--spectrum-button-height:var(--spectrum-component-height-300);--spectrum-button-font-size:var(--spectrum-font-size-300);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-300) - var(--spectrum-button-border-width));--spectrum-button-edge-to-visual-only:var(
--spectrum-component-pill-edge-to-visual-only-300
);--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-300) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-300);--spectrum-button-top-to-text:var(
--spectrum-button-top-to-text-extra-large
);--spectrum-button-bottom-to-text:var(
--spectrum-button-bottom-to-text-extra-large
)}:host{border-radius:var(
--mod-button-border-radius,var(--spectrum-button-border-radius)
);border-style:solid;border-width:var(
--mod-button-border-width,var(--spectrum-button-border-width)
);color:inherit;font-size:var(--mod-button-font-size,var(--spectrum-button-font-size));font-weight:var(--mod-bold-font-weight,var(--spectrum-bold-font-weight));gap:var(
--mod-button-padding-label-to-icon,var(--spectrum-button-padding-label-to-icon)
);margin-block:var(--mod-button-margin-block);margin-inline-end:var(--mod-button-margin-right);margin-inline-start:var(--mod-button-margin-left);min-block-size:var(--mod-button-height,var(--spectrum-button-height));min-inline-size:var(
--mod-button-min-width,var(--spectrum-button-min-width)
);padding-block:0;padding-inline:var(
--mod-button-edge-to-text,var(--spectrum-button-edge-to-text)
);position:relative}:host(:hover),:host([active]){box-shadow:none}::slotted([slot=icon]){color:inherit;margin-inline-start:calc(var(--mod-button-edge-to-visual, var(--spectrum-button-edge-to-visual)) - var(--mod-button-edge-to-text, var(--spectrum-button-edge-to-text)))}:host:after{border-radius:calc(var(--mod-button-border-radius, var(--spectrum-button-border-radius)) + var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap)))}:host .spectrum-Button--iconOnly{border-radius:50%;min-inline-size:unset;padding:calc(var(
--mod-button-edge-to-visual-only,
var(--spectrum-button-edge-to-visual-only)
) - var(--mod-button-border-width, var(--spectrum-button-border-width)))}:host .spectrum-Button--iconOnly ::slotted([slot=icon]){margin-inline-start:0}:host .spectrum-Button--iconOnly:after{border-radius:50%}#label{align-self:start;line-height:var(
--mod-button-line-height,var(--spectrum-button-line-height)
);padding-block-end:calc(var(--mod-button-bottom-to-text, var(--spectrum-button-bottom-to-text)) - var(--mod-button-border-width, var(--spectrum-button-border-width)));padding-block-start:calc(var(--mod-button-top-to-text, var(--spectrum-button-top-to-text)) - var(--mod-button-border-width, var(--spectrum-button-border-width)));white-space:nowrap}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(
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
) ease-in-out}:host(.focus-visible){box-shadow:none;outline:none}:host(.focus-visible){box-shadow:none;outline:none}:host(:focus-visible){box-shadow:none;outline:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
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
)}@media (forced-colors:active){:host{--highcontrast-button-content-color-disabled:GrayText;--highcontrast-button-border-color-disabled:GrayText}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) ButtonText;forced-color-adjust:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) ButtonText;forced-color-adjust:none}:host(:focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) ButtonText;forced-color-adjust:none}:host([variant=accent][treatment=fill]){--highcontrast-button-background-color-default:ButtonText;--highcontrast-button-content-color-default:ButtonFace;--highcontrast-button-background-color-disabled:ButtonFace;--highcontrast-button-background-color-hover:Highlight;--highcontrast-button-background-color-down:Highlight;--highcontrast-button-background-color-focus:Highlight;--highcontrast-button-content-color-hover:ButtonFace;--highcontrast-button-content-color-down:ButtonFace;--highcontrast-button-content-color-focus:ButtonFace}:host([variant=accent][treatment=fill]) #label{forced-color-adjust:none}}:host([static=white]){--spectrum-button-focus-indicator-color:var(
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
)}:host([selected]){--spectrum-button-background-color-default:var(
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
)}:host([selected][emphasized]){--spectrum-button-background-color-default:var(
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
)}:host([static=white][selected]){--spectrum-button-background-color-default:var(
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
)}@media (forced-colors:active){:host([treatment][disabled]){border-color:graytext}:host([treatment]:not([disabled]):hover){border-color:highlight}}
`;var Pt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Ot=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?Ut(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&Pt(e,r,c),c};const Bt=["accent","primary","secondary","negative","white","black"];class Mt extends(z(xt,{noDefaultSize:!0})){constructor(){super(...arguments),this._variant="accent",this.treatment="fill"}static get styles(){return[...super.styles,Dt]}get variant(){return this._variant}set variant(t){if(t!==this.variant){switch(this.requestUpdate("variant",this.variant),t){case"cta":this._variant="accent";break;case"overBackground":return this.removeAttribute("variant"),this.static="white",void(this.treatment="outline");case"white":case"black":return this.static=t,void this.removeAttribute("variant");case null:return;default:Bt.includes(t)?this._variant=t:this._variant="accent"}this.setAttribute("variant",this.variant)}}set quiet(t){this.treatment=t?"outline":"fill"}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("variant")||this.setAttribute("variant",this.variant)}}Ot([(0,d.Cb)()],Mt.prototype,"variant",1),Ot([(0,d.Cb)({type:String,reflect:!0})],Mt.prototype,"static",2),Ot([(0,d.Cb)({reflect:!0})],Mt.prototype,"treatment",2),Ot([(0,d.Cb)({type:Boolean})],Mt.prototype,"quiet",1),(0,y.N)("sp-button",Mt),(0,y.N)("sp-icon-asterisk100",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Asterisk100"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path
      d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 01.167-.036L3.5 3.148l.13-2.7a.1.1 0 01.081-.111.15.15 0 01.03 0l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"
    />
  </svg>`)()}});const Ft=t.iv`
.spectrum-UIIcon-Asterisk75{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(
--spectrum-alias-ui-icon-asterisk-size-75,var(--spectrum-global-dimension-static-size-100)
)}.spectrum-UIIcon-Asterisk100{height:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
);width:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
)}.spectrum-UIIcon-Asterisk200{height:var(--spectrum-alias-ui-icon-asterisk-size-200);width:var(--spectrum-alias-ui-icon-asterisk-size-200)}.spectrum-UIIcon-Asterisk300{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(--spectrum-alias-ui-icon-asterisk-size-300)}
`;var Nt=a(763),Rt=a(259);const Vt=t.iv`
:host{--spectrum-fieldlabel-color:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-fieldlabel-font-weight:var(--spectrum-regular-font-weight);--spectrum-fieldlabel-line-height:var(--spectrum-line-height-100);--spectrum-fieldlabel-line-height-cjk:var(--spectrum-cjk-line-height-100)}:host([size=s]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-75);--spectrum-fieldlabel-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-75);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-75
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-100);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-small
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-small
)}:host{--spectrum-fieldlabel-min-height:var(--spectrum-component-height-75);--spectrum-fieldlabel-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-75);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-75
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-medium
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-medium
)}:host([size=l]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-100);--spectrum-fieldlabel-top-to-text:var(
--spectrum-component-top-to-text-100
);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-100
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-100);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-100
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-large
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-large
)}:host([size=xl]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-200);--spectrum-fieldlabel-top-to-text:var(
--spectrum-component-top-to-text-200
);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-200
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-200);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-200
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-extra-large
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-extra-large
)}:host{-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;font-smoothing:subpixel-antialiased;box-sizing:border-box;color:var(--spectrum-fieldlabel-color);display:block;font-size:var(
--mod-fieldlabel-font-size,var(--spectrum-fieldlabel-font-size)
);font-weight:var(
--mod-fieldlabel-font-weight,var(--spectrum-fieldlabel-font-weight)
);line-height:var(
--mod-fieldlabel-line-height,var(--spectrum-fieldlabel-line-height)
);min-block-size:var(
--mod-fieldlabel-min-height,var(--spectrum-fieldlabel-min-height)
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
--highcontrast-disabled-content-color,var(
--mod-disabled-content-color,var(--spectrum-disabled-content-color)
)
)}:host([disabled]) .required-icon{color:var(
--highcontrast-disabled-content-color,var(
--mod-disabled-content-color,var(--spectrum-disabled-content-color)
)
)}@media (forced-colors:active){:host{--highcontrast-disabled-content-color:GrayText}}label{display:inline-block}
`;var Kt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Gt=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?Xt(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&Kt(e,r,c),c};const Wt=class e extends(z(u.o,{noDefaultSize:!0})){constructor(){super(...arguments),this.disabled=!1,this.id="",this.for="",this.required=!1,this.resolvedElement=new Rt.j(this)}static get styles(){return[Vt,Ft]}handleClick(t){if(!this.target||this.disabled||t.defaultPrevented)return;this.target.focus();const e=this.getRootNode(),r=this.target,o=r.getRootNode(),s=o.host;o===e&&r.forceFocusVisible?r.forceFocusVisible():s&&s.forceFocusVisible&&s.forceFocusVisible()}applyTargetLabel(t){if(this.target=t||this.target,this.target){const e=this.target.applyFocusElementLabel,r=this.target.focusElement||this.target,o=r.getRootNode();void 0!==e?e(this.labelText):o===this.getRootNode()?(t?Nt.q:Nt.H)(r,"aria-labelledby",[this.id]):t?r.setAttribute("aria-label",this.labelText):r.removeAttribute("aria-label")}}async manageTarget(){this.applyTargetLabel();const t=this.resolvedElement.element;t?(t.localName.search("-")>0&&await customElements.whenDefined(t.localName),void 0!==t.updateComplete&&await t.updateComplete,this.applyTargetLabel(t)):this.target=t}get labelText(){const t=this.slotEl.assignedNodes({flatten:!0});return t.length?t.map((t=>(t.textContent||"").trim())).join(" "):""}render(){return t.dy`
            <label>
                <slot></slot>
                ${this.required?t.dy`
                          <sp-icon-asterisk100
                              class="required-icon spectrum-UIIcon-Asterisk100"
                          ></sp-icon-asterisk100>
                      `:t.Ld}
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("click",this.handleClick)}willUpdate(t){this.hasAttribute("id")||this.setAttribute("id",`${this.tagName.toLowerCase()}-${e.instanceCount++}`),t.has("for")&&(this.resolvedElement.selector=this.for?`#${this.for}`:""),(t.has("id")||t.has(Rt.m))&&this.manageTarget()}};Wt.instanceCount=0,Gt([(0,d.Cb)({type:Boolean,reflect:!0})],Wt.prototype,"disabled",2),Gt([(0,d.Cb)({type:String})],Wt.prototype,"id",2),Gt([(0,d.Cb)({type:String})],Wt.prototype,"for",2),Gt([(0,d.Cb)({type:Boolean,reflect:!0})],Wt.prototype,"required",2),Gt([(0,d.IO)("slot")],Wt.prototype,"slotEl",2),Gt([(0,d.Cb)({type:String,reflect:!0,attribute:"side-aligned"})],Wt.prototype,"sideAligned",2);let Zt=Wt;(0,y.N)("sp-field-label",Zt);const{I:Yt}=C._$LH,Jt=t=>void 0===t.strings,Qt={},te=(0,I.XM)(class extends I.Xe{constructor(t){if(super(t),t.type!==I.pX.PROPERTY&&t.type!==I.pX.ATTRIBUTE&&t.type!==I.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Jt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===C.Jb||e===C.Ld)return e;const r=t.element,o=t.name;if(t.type===I.pX.PROPERTY){if(e===r[o])return C.Jb}else if(t.type===I.pX.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(o))return C.Jb}else if(t.type===I.pX.ATTRIBUTE&&r.getAttribute(o)===e+"")return C.Jb;return((t,e=Qt)=>{t._$AH=e})(t),e}}),ee=class e{constructor(t,{mode:r}={mode:"internal"}){this.mode="internal",this.handleSlotchange=({target:t})=>{this.handleHelpText(t),this.handleNegativeHelpText(t)},this.host=t,this.instanceCount=e.instanceCount++,this.id=`sp-help-text-${this.instanceCount}`,this.mode=r}get isInternal(){return"internal"===this.mode}render(e){return t.dy`
            <div id=${(0,E.o)(this.isInternal?this.id:void 0)}>
                <slot
                    name=${e?"negative-help-text":`pass-through-help-text-${this.instanceCount}`}
                    @slotchange=${this.handleSlotchange}
                >
                    <slot name="help-text"></slot>
                </slot>
            </div>
        `}addId(){const t=this.helpTextElement?this.helpTextElement.id:this.id;this.conditionId=(0,Nt.q)(this.host,"aria-describedby",t),this.host.hasAttribute("tabindex")&&(this.previousTabindex=parseFloat(this.host.getAttribute("tabindex"))),this.host.tabIndex=0}removeId(){this.conditionId&&(this.conditionId(),delete this.conditionId),!this.helpTextElement&&(this.previousTabindex?this.host.tabIndex=this.previousTabindex:this.host.removeAttribute("tabindex"))}handleHelpText(t){if(this.isInternal)return;this.helpTextElement&&this.helpTextElement.id===this.id&&this.helpTextElement.removeAttribute("id"),this.removeId();const e=t.assignedElements()[0];this.helpTextElement=e,e&&(e.id||(e.id=this.id),this.addId())}handleNegativeHelpText(t){"negative-help-text"===t.name&&t.assignedElements().forEach((t=>t.variant="negative"))}};ee.instanceCount=0;let re=ee;(0,y.N)("sp-icon-checkmark100",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Checkmark100"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path
      d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"
    />
  </svg>`)()}}),(0,y.N)("sp-icon-alert",class extends g{render(){return k(t.dy),(({width:t=24,height:e=24,hidden:r=!1,title:o="Alert"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${r?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${o}
  >
    <path
      d="M17.127 2.579.4 32.512A1 1 0 0 0 1.272 34h33.456a1 1 0 0 0 .872-1.488L18.873 2.579a1 1 0 0 0-1.746 0ZM20 29.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});const oe=t.iv`
:host{--spectrum-textfield-input-line-height:var(--spectrum-textfield-height);--spectrum-texfield-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-textfield-width:240px;--spectrum-textfield-min-width:var(
--spectrum-text-field-minimum-width-multiplier
);--spectrum-textfield-corner-radius:var(--spectrum-corner-radius-100);--spectrum-textfield-spacing-inline-quiet:var(
--spectrum-field-edge-to-text-quiet
);--spectrum-textfield-spacing-block-start:var(
--spectrum-component-top-to-text-100
);--spectrum-textfield-spacing-block-end:var(
--spectrum-component-bottom-to-text-100
);--spectrum-textfield-spacing-block-quiet:var(
--spectrum-field-edge-to-border-quiet
);--spectrum-textfield-label-spacing-block:var(
--spectrum-field-label-to-component
);--spectrum-textfield-label-spacing-inline-side-label:var(
--spectrum-spacing-100
);--spectrum-textfield-helptext-spacing-block:var(
--spectrum-help-text-to-component
);--spectrum-textfield-icon-spacing-inline-end-quiet-invalid:var(
--spectrum-field-edge-to-alert-icon-quiet
);--spectrum-textfield-icon-spacing-inline-end-quiet-valid:var(
--spectrum-field-edge-to-validation-icon-quiet
);--spectrum-textfield-icon-spacing-inline-end-override:32px;--spectrum-Textfield-workflow-icon-width:18px;--spectrum-Textfield-workflow-icon-gap:6px;--spectrum-textfield-font-family:var(--spectrum-sans-font-family-stack);--spectrum-textfield-font-weight:var(--spectrum-regular-font-weight);--spectrum-textfield-character-count-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-textfield-character-count-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-textfield-character-count-spacing-inline:var(
--spectrum-spacing-200
);--spectrum-textfield-character-count-spacing-inline-side:var(
--spectrum-side-label-character-count-to-field
);--spectrum-textfield-focus-indicator-width:var(
--spectrum-focus-indicator-thickness
);--spectrum-textfield-focus-indicator-gap:var(
--spectrum-focus-indicator-gap
);--spectrum-textfield-background-color:var(--spectrum-gray-50);--spectrum-textfield-text-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-textfield-text-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-textfield-text-color-focus:var(
--spectrum-neutral-content-color-focus
);--spectrum-textfield-text-color-focus-hover:var(
--spectrum-neutral-content-color-focus-hover
);--spectrum-textfield-text-color-keyboard-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-textfield-text-color-readonly:var(
--spectrum-neutral-content-color-default
);--spectrum-textfield-background-color-disabled:var(
--spectrum-disabled-background-color
);--spectrum-textfield-border-color-disabled:var(
--spectrum-disabled-border-color
);--spectrum-textfield-text-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-textfield-border-color-invalid-default:var(
--spectrum-negative-border-color-default
);--spectrum-textfield-border-color-invalid-hover:var(
--spectrum-negative-border-color-hover
);--spectrum-textfield-border-color-invalid-focus:var(
--spectrum-negative-border-color-focus
);--spectrum-textfield-border-color-invalid-focus-hover:var(
--spectrum-negative-border-color-focus-hover
);--spectrum-textfield-border-color-invalid-keyboard-focus:var(
--spectrum-negative-border-color-key-focus
);--spectrum-textfield-icon-color-invalid:var(
--spectrum-negative-visual-color
);--spectrum-textfield-text-color-invalid:var(
--spectrum-neutral-content-color-default
);--spectrum-textfield-text-color-valid:var(
--spectrum-neutral-content-color-default
);--spectrum-textfield-icon-color-valid:var(
--spectrum-positive-visual-color
);--spectrum-textfield-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-text-area-min-inline-size:var(
--spectrum-text-area-minimum-width
);--spectrum-text-area-min-block-size:var(
--spectrum-text-area-minimum-height
)}:host([size=s]){--spectrum-textfield-height:var(--spectrum-component-height-75);--spectrum-textfield-label-spacing-block-quiet:var(
--spectrum-field-label-to-component-quiet-small
);--spectrum-textfield-label-spacing-inline-side-label:var(
--spectrum-spacing-100
);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-75);--spectrum-textfield-spacing-inline:var(
--spectrum-component-edge-to-text-75
);--spectrum-textfield-icon-size-invalid:var(
--spectrum-workflow-icon-size-75
);--spectrum-textfield-icon-spacing-inline-end-invalid:var(
--spectrum-field-edge-to-alert-icon-small
);--spectrum-textfield-icon-spacing-inline-end-valid:var(
--spectrum-field-edge-to-validation-icon-small
);--spectrum-textfield-icon-spacing-block-invalid:var(
--spectrum-field-top-to-alert-icon-small
);--spectrum-textfield-icon-spacing-block-valid:var(
--spectrum-field-top-to-validation-icon-small
);--spectrum-textfield-icon-spacing-inline-start-invalid:var(
--spectrum-field-text-to-alert-icon-small
);--spectrum-textfield-icon-spacing-inline-start-valid:var(
--spectrum-field-text-to-validation-icon-small
);--spectrum-textfield-character-count-font-size:var(
--spectrum-font-size-75
);--spectrum-textfield-character-count-spacing-block:var(
--spectrum-component-bottom-to-text-75
);--spectrum-textfield-character-count-spacing-block-quiet:var(
--spectrum-character-count-to-field-quiet-small
);--spectrum-textfield-character-count-spacing-block-side:var(
--spectrum-side-label-character-count-top-margin-small
);--spectrum-text-area-min-block-size-quiet:var(
--spectrum-component-height-75
)}:host{--spectrum-textfield-height:var(--spectrum-component-height-100);--spectrum-textfield-label-spacing-block-quiet:var(
--spectrum-field-label-to-component-quiet-medium
);--spectrum-textfield-label-spacing-inline-side-label:var(
--spectrum-spacing-200
);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-100);--spectrum-textfield-spacing-inline:var(
--spectrum-component-edge-to-text-100
);--spectrum-textfield-icon-size-invalid:var(
--spectrum-workflow-icon-size-100
);--spectrum-textfield-icon-spacing-inline-end-invalid:var(
--spectrum-field-edge-to-alert-icon-medium
);--spectrum-textfield-icon-spacing-inline-end-valid:var(
--spectrum-field-edge-to-validation-icon-medium
);--spectrum-textfield-icon-spacing-block-invalid:var(
--spectrum-field-top-to-alert-icon-medium
);--spectrum-textfield-icon-spacing-block-valid:var(
--spectrum-field-top-to-validation-icon-medium
);--spectrum-textfield-icon-spacing-inline-start-invalid:var(
--spectrum-field-text-to-alert-icon-medium
);--spectrum-textfield-icon-spacing-inline-start-valid:var(
--spectrum-field-text-to-validation-icon-medium
);--spectrum-textfield-character-count-font-size:var(
--spectrum-font-size-75
);--spectrum-textfield-character-count-spacing-block:var(
--spectrum-component-bottom-to-text-75
);--spectrum-textfield-character-count-spacing-block-quiet:var(
--spectrum-character-count-to-field-quiet-medium
);--spectrum-textfield-character-count-spacing-block-side:var(
--spectrum-side-label-character-count-top-margin-medium
);--spectrum-text-area-min-block-size-quiet:var(
--spectrum-component-height-100
)}:host([size=l]){--spectrum-textfield-height:var(--spectrum-component-height-200);--spectrum-textfield-label-spacing-block-quiet:var(
--spectrum-field-label-to-component-quiet-large
);--spectrum-textfield-label-spacing-inline-side-label:var(
--spectrum-spacing-200
);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-200);--spectrum-textfield-spacing-inline:var(
--spectrum-component-edge-to-text-200
);--spectrum-textfield-icon-size-invalid:var(
--spectrum-workflow-icon-size-200
);--spectrum-textfield-icon-spacing-inline-end-invalid:var(
--spectrum-field-edge-to-alert-icon-large
);--spectrum-textfield-icon-spacing-inline-end-valid:var(
--spectrum-field-edge-to-validation-icon-large
);--spectrum-textfield-icon-spacing-block-invalid:var(
--spectrum-field-top-to-alert-icon-large
);--spectrum-textfield-icon-spacing-block-valid:var(
--spectrum-field-top-to-validation-icon-large
);--spectrum-textfield-icon-spacing-inline-start-invalid:var(
--spectrum-field-text-to-alert-icon-large
);--spectrum-textfield-icon-spacing-inline-start-valid:var(
--spectrum-field-text-to-validation-icon-large
);--spectrum-textfield-character-count-font-size:var(
--spectrum-font-size-100
);--spectrum-textfield-character-count-spacing-block:var(
--spectrum-component-bottom-to-text-100
);--spectrum-textfield-character-count-spacing-block-quiet:var(
--spectrum-character-count-to-field-quiet-large
);--spectrum-textfield-character-count-spacing-block-side:var(
--spectrum-side-label-character-count-top-margin-large
);--spectrum-text-area-min-block-size-quiet:var(
--spectrum-component-height-200
)}:host([size=xl]){--spectrum-textfield-height:var(--spectrum-component-height-300);--spectrum-textfield-label-spacing-block-quiet:var(
--spectrum-field-label-to-component-quiet-extra-large
);--spectrum-textfield-label-spacing-inline-side-label:var(
--spectrum-spacing-200
);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-300);--spectrum-textfield-spacing-inline:var(
--spectrum-component-edge-to-text-200
);--spectrum-textfield-icon-size-invalid:var(
--spectrum-workflow-icon-size-300
);--spectrum-textfield-icon-spacing-inline-end-invalid:var(
--spectrum-field-edge-to-alert-icon-extra-large
);--spectrum-textfield-icon-spacing-inline-end-valid:var(
--spectrum-field-edge-to-validation-icon-extra-large
);--spectrum-textfield-icon-spacing-block-invalid:var(
--spectrum-field-top-to-alert-icon-extra-large
);--spectrum-textfield-icon-spacing-block-valid:var(
--spectrum-field-top-to-validation-icon-extra-large
);--spectrum-textfield-icon-spacing-inline-start-invalid:var(
--spectrum-field-text-to-alert-icon-extra-large
);--spectrum-textfield-icon-spacing-inline-start-valid:var(
--spectrum-field-text-to-validation-icon-extra-large
);--spectrum-textfield-character-count-font-size:var(
--spectrum-font-size-200
);--spectrum-textfield-character-count-spacing-block:var(
--spectrum-component-bottom-to-text-200
);--spectrum-textfield-character-count-spacing-block-quiet:var(
--spectrum-character-count-to-field-quiet-extra-large
);--spectrum-textfield-character-count-spacing-block-side:var(
--spectrum-side-label-character-count-top-margin-extra-large
);--spectrum-text-area-min-block-size-quiet:var(
--spectrum-component-height-300
)}#textfield{-moz-appearance:textfield;display:inline-grid;grid-template-columns:auto auto;grid-template-rows:auto auto auto;inline-size:var(--mod-textfield-width,var(--spectrum-textfield-width));margin:0;overflow:visible;position:relative;text-indent:0;text-overflow:ellipsis}:host([quiet]) #textfield:after{block-size:var(
--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width)
);bottom:calc((var(
--mod-textfield-focus-indicator-gap,
var(--spectrum-textfield-focus-indicator-gap)
) + var(
--mod-textfield-focus-indicator-width,
var(--spectrum-textfield-focus-indicator-width)
))*-1);content:"";inline-size:100%;left:0;position:absolute}:host([quiet]) #textfield.focus-visible:after,:host([quiet]) #textfield:focus-within:after,:host([quiet][focused]) #textfield:after{background-color:var(
--highcontrast-textfield-focus-indicator-color,var(
--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)
)
)}:host([quiet]) #textfield.focus-visible:after,:host([quiet]) #textfield:focus-within:after,:host([quiet][focused]) #textfield:after{background-color:var(
--highcontrast-textfield-focus-indicator-color,var(
--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)
)
)}:host([quiet]) #textfield:focus-visible:after,:host([quiet]) #textfield:focus-within:after,:host([quiet][focused]) #textfield:after{background-color:var(
--highcontrast-textfield-focus-indicator-color,var(
--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)
)
)}:host([invalid]) #textfield .icon,:host([valid]) #textfield .icon{grid-area:2/2;margin-inline-start:auto;pointer-events:all;position:absolute;top:0}:host([valid]) #textfield .icon{color:var(
--highcontrast-textfield-icon-color-valid,var(
--mod-textfield-icon-color-valid,var(--spectrum-textfield-icon-color-valid)
)
);inset-block-end:var(
--mod-textfield-icon-spacing-block-valid,var(--spectrum-textfield-icon-spacing-block-valid)
);inset-block-start:var(
--mod-textfield-icon-spacing-block-valid,var(--spectrum-textfield-icon-spacing-block-valid)
);inset-inline-end:var(
--mod-textfield-icon-spacing-inline-end-valid,var(--spectrum-textfield-icon-spacing-inline-end-valid)
);inset-inline-start:var(
--mod-textfield-icon-spacing-inline-start-valid,var(--spectrum-textfield-icon-spacing-inline-start-valid)
)}:host([invalid]) #textfield .icon{block-size:var(
--mod-textfield-icon-size-invalid,var(--spectrum-textfield-icon-size-invalid)
);color:var(
--highcontrast-textfield-icon-color-invalid,var(
--mod-textfield-icon-color-invalid,var(--spectrum-textfield-icon-color-invalid)
)
);inline-size:var(
--mod-textfield-icon-size-invalid,var(--spectrum-textfield-icon-size-invalid)
);inset-block-end:var(
--mod-textfield-icon-spacing-block-invalid,var(--spectrum-textfield-icon-spacing-block-invalid)
);inset-block-start:var(
--mod-textfield-icon-spacing-block-invalid,var(--spectrum-textfield-icon-spacing-block-invalid)
);inset-inline-end:var(
--mod-textfield-icon-spacing-inline-end-invalid,var(--spectrum-textfield-icon-spacing-inline-end-invalid)
);inset-inline-start:var(
--mod-textfield-icon-spacing-inline-start-invalid,var(--spectrum-textfield-icon-spacing-inline-start-invalid)
)}:host([disabled]) #textfield .icon,:host([readonly]) #textfield .icon{color:#0000}:host([quiet]) .icon{padding-inline-end:0}:host([quiet][valid]) .icon{inset-inline-end:var(
--mod-textfield-icon-spacing-inline-end-quiet-valid,var(--spectrum-textfield-icon-spacing-inline-end-quiet-valid)
)}:host([quiet][invalid]) .icon{inset-inline-end:var(
--mod-textfield-icon-spacing-inline-end-quiet-invalid,var(--spectrum-textfield-icon-spacing-inline-end-quiet-invalid)
)}.spectrum-InputGroup .icon{margin-inline-end:var(
--spectrum-textfield-icon-spacing-inline-end-override
)}#textfield .spectrum-FieldLabel{grid-area:1/1/auto/span 1;margin-block-end:var(
--mod-textfield-label-spacing-block,var(--spectrum-textfield-label-spacing-block)
);padding-left:calc(var(
--mod-textfield-corner-radius,
var(--spectrum-textfield-corner-radius)
)/2)}:host([quiet]) .spectrum-FieldLabel{margin-block-end:var(
--mod-textfield-label-spacing-block-quiet,var(--spectrum-textfield-label-spacing-block-quiet)
)}:host([disabled]) .spectrum-FieldLabel{color:var(--spectrum-textfield-text-color-disabled)}#textfield .spectrum-HelpText{grid-area:3/1/auto/span 2;margin-block-start:var(
--mod-textfield-helptext-spacing-block,var(--spectrum-textfield-helptext-spacing-block)
);padding-left:calc(var(
--mod-textfield-corner-radius,
var(--spectrum-textfield-corner-radius)
)/2)}.spectrum-Textfield-characterCount{align-items:flex-end;display:inline-flex;font-family:var(
--mod-textfield-character-count-font-family,var(--spectrum-textfield-character-count-font-family)
);font-size:var(
--mod-textfield-character-count-font-size,var(--spectrum-textfield-character-count-font-size)
);font-weight:var(
--mod-textfield-character-count-font-weight,var(--spectrum-textfield-character-count-font-weight)
);grid-area:1/2/auto/span 1;justify-content:flex-end;margin-block-end:var(
--mod-textfield-character-count-spacing-block,var(--spectrum-textfield-character-count-spacing-block)
);margin-inline-end:0;margin-inline-start:var(
--mod-textfield-character-count-spacing-inline,var(--spectrum-textfield-character-count-spacing-inline)
);padding-right:calc(var(
--mod-textfield-corner-radius,
var(--spectrum-textfield-corner-radius)
)/2);width:auto}:host([quiet]) .spectrum-Textfield-characterCount{margin-block-end:var(
--mod-textfield-character-count-spacing-block-quiet,var(--spectrum-textfield-character-count-spacing-block-quiet)
)}.input{-webkit-appearance:none;-moz-appearance:textfield;background-color:var(
--mod-textfield-background-color,var(--spectrum-textfield-background-color)
);block-size:var(--mod-textfield-height,var(--spectrum-textfield-height));border:var(
--mod-textfield-border-width,var(--spectrum-textfield-border-width)
) solid var(
--highcontrast-textfield-border-color,var(
--mod-textfield-border-color,var(--spectrum-textfield-border-color)
)
);border-radius:var(
--mod-textfield-corner-radius,var(--spectrum-textfield-corner-radius)
);box-sizing:border-box;color:var(
--highcontrast-textfield-text-color-default,var(
--mod-textfield-text-color-default,var(--spectrum-textfield-text-color-default)
)
);font-family:var(
--mod-textfield-font-family,var(--spectrum-textfield-font-family)
);font-size:var(
--mod-textfield-placeholder-font-size,var(--spectrum-textfield-placeholder-font-size)
);font-weight:var(
--mod-textfield-font-weight,var(--spectrum-textfield-font-weight)
);grid-area:2/1/auto/span 2;inline-size:100%;line-height:var(--spectrum-textfield-input-line-height);margin:0;min-inline-size:var(
--mod-textfield-min-width,var(--spectrum-textfield-min-width)
);outline:none;overflow:visible;padding-block-end:calc(var(
--mod-textfield-spacing-block-end,
var(--spectrum-textfield-spacing-block-end)
) - var(
--mod-textfield-border-width,
var(--spectrum-textfield-border-width)
));padding-block-start:calc(var(
--mod-textfield-spacing-block-start,
var(--spectrum-textfield-spacing-block-start)
) - var(
--mod-textfield-border-width,
var(--spectrum-textfield-border-width)
));padding-inline:calc(var(
--mod-textfield-spacing-inline,
var(--spectrum-textfield-spacing-inline)
) - var(
--mod-textfield-border-width,
var(--spectrum-textfield-border-width)
));text-indent:0;text-overflow:ellipsis;transition:border-color var(
--mod-texfield-animation-duration,var(--spectrum-texfield-animation-duration)
) ease-in-out;vertical-align:top}:host([quiet]) .icon-workflow~.input{padding-inline-start:calc(var(
--mod--Textfield-workflow-icon-gap,
var(--spectrum-Textfield-workflow-icon-gap)
) + var(
--mod-Textfield-workflow-icon-width,
var(--spectrum-Textfield-workflow-icon-width)
))}.input::-ms-clear{block-size:0;inline-size:0}.input::-webkit-inner-spin-button,.input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input:-moz-ui-invalid{box-shadow:none}.input::placeholder{color:var(
--highcontrast-textfield-text-color-default,var(
--mod-textfield-text-color-default,var(--spectrum-textfield-text-color-default)
)
);font-family:var(
--mod-textfield-font-family,var(--spectrum-textfield-font-family)
);font-size:var(
--mod-textfield-placeholder-font-size,var(--spectrum-textfield-placeholder-font-size)
);font-weight:var(
--mod-textfield-font-weight,var(--spectrum-textfield-font-weight)
);opacity:1;transition:color var(
--mod-texfield-animation-duration,var(--spectrum-texfield-animation-duration)
) ease-in-out}.input:lang(ja)::placeholder,.input:lang(ko)::placeholder,.input:lang(zh)::placeholder{font-style:normal}.input:lang(ja)::-moz-placeholder,.input:lang(ko)::-moz-placeholder,.input:lang(zh)::-moz-placeholder{font-style:normal}#textfield:hover .input,.input:hover{border-color:var(
--highcontrast-textfield-border-color-hover,var(
--mod-textfield-border-color-hover,var(--spectrum-textfield-border-color-hover)
)
);color:var(
--highcontrast-textfield-text-color-hover,var(
--mod-textfield-text-color-hover,var(--spectrum-textfield-text-color-hover)
)
)}#textfield:hover .input::placeholder,.input:hover::placeholder{color:var(
--highcontrast-textfield-text-color-hover,var(
--mod-textfield-text-color-hover,var(--spectrum-textfield-text-color-hover)
)
)}.input:focus,:host([focused]) .input{border-color:var(
--highcontrast-textfield-border-color-focus,var(
--mod-textfield-border-color-focus,var(--spectrum-textfield-border-color-focus)
)
);color:var(
--highcontrast-textfield-text-color-focus,var(
--mod-textfield-text-color-focus,var(--spectrum-textfield-text-color-focus)
)
)}.input:focus::placeholder,:host([focused]) .input::placeholder{color:var(
--highcontrast-textfield-text-color-focus,var(
--mod-textfield-text-color-focus,var(--spectrum-textfield-text-color-focus)
)
)}.input:focus:hover,:host([focused]) .input:hover{border-color:var(
--highcontrast-textfield-border-color-focus-hover,var(
--mod-textfield-border-color-focus-hover,var(--spectrum-textfield-border-color-focus-hover)
)
);color:var(
--highcontrast-textfield-text-color-focus-hover,var(
--mod-textfield-text-color-focus-hover,var(--spectrum-textfield-text-color-focus-hover)
)
)}.input:focus:hover::placeholder,:host([focused]) .input:hover::placeholder{color:var(
--highcontrast-textfield-text-color-focus-hover,var(
--mod-textfield-text-color-focus-hover,var(--spectrum-textfield-text-color-focus-hover)
)
)}.input.focus-visible,:host([focused]) .input{border-color:var(
--highcontrast-textfield-border-color-keyboard-focus,var(
--mod-textfield-border-color-keyboard-focus,var(--spectrum-textfield-border-color-keyboard-focus)
)
);color:var(
--highcontrast-textfield-text-color-keyboard-focus,var(
--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)
)
);outline:var(
--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width)
) solid;outline-color:var(
--highcontrast-textfield-focus-indicator-color,var(
--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)
)
);outline-offset:var(
--mod-textfield-focus-indicator-gap,var(--spectrum-textfield-focus-indicator-gap)
)}.input.focus-visible,:host([focused]) .input{border-color:var(
--highcontrast-textfield-border-color-keyboard-focus,var(
--mod-textfield-border-color-keyboard-focus,var(--spectrum-textfield-border-color-keyboard-focus)
)
);color:var(
--highcontrast-textfield-text-color-keyboard-focus,var(
--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)
)
);outline:var(
--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width)
) solid;outline-color:var(
--highcontrast-textfield-focus-indicator-color,var(
--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)
)
);outline-offset:var(
--mod-textfield-focus-indicator-gap,var(--spectrum-textfield-focus-indicator-gap)
)}.input:focus-visible,:host([focused]) .input{border-color:var(
--highcontrast-textfield-border-color-keyboard-focus,var(
--mod-textfield-border-color-keyboard-focus,var(--spectrum-textfield-border-color-keyboard-focus)
)
);color:var(
--highcontrast-textfield-text-color-keyboard-focus,var(
--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)
)
);outline:var(
--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width)
) solid;outline-color:var(
--highcontrast-textfield-focus-indicator-color,var(
--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)
)
);outline-offset:var(
--mod-textfield-focus-indicator-gap,var(--spectrum-textfield-focus-indicator-gap)
)}.input.focus-visible::placeholder,:host([focused]) .input::placeholder{color:var(
--highcontrast-textfield-text-color-keyboard-focus,var(
--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)
)
)}.input.focus-visible::placeholder,:host([focused]) .input::placeholder{color:var(
--highcontrast-textfield-text-color-keyboard-focus,var(
--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)
)
)}.input:focus-visible::placeholder,:host([focused]) .input::placeholder{color:var(
--highcontrast-textfield-text-color-keyboard-focus,var(
--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)
)
)}:host([valid]) .input{color:var(
--highcontrast-textfield-text-color-valid,var(
--mod-textfield-text-color-valid,var(--spectrum-textfield-text-color-valid)
)
)}:host([invalid]) .input{border-color:var(
--highcontrast-textfield-border-color-invalid-default,var(
--mod-textfield-border-color-invalid-default,var(--spectrum-textfield-border-color-invalid-default)
)
);color:var(
--highcontrast-textfield-text-color-invalid,var(
--mod-textfield-text-color-invalid,var(--spectrum-textfield-text-color-invalid)
)
)}:host([invalid]) .input:hover,:host([invalid]:hover) .input{border-color:var(
--highcontrast-textfield-border-color-invalid-hover,var(
--mod-textfield-border-color-invalid-hover,var(--spectrum-textfield-border-color-invalid-hover)
)
)}:host([invalid]) .input:focus,:host([invalid]:focus) .input,:host([invalid][focused]) .input{border-color:var(
--highcontrast-textfield-border-color-invalid-focus,var(
--mod-textfield-border-color-invalid-focus,var(--spectrum-textfield-border-color-invalid-focus)
)
)}:host([invalid]) .input:focus:hover,:host([invalid]:focus) .input:hover,:host([invalid][focused]) .input:hover{border-color:var(
--highcontrast-textfield-border-color-invalid-focus-hover,var(
--mod-textfield-border-color-invalid-focus-hover,var(--spectrum-textfield-border-color-invalid-focus-hover)
)
)}:host([invalid]) .input.focus-visible,:host([invalid][focused]) .input{border-color:var(
--highcontrast-textfield-border-color-invalid-keyboard-focus,var(
--mod-textfield-border-color-invalid-keyboard-focus,var(--spectrum-textfield-border-color-invalid-keyboard-focus)
)
)}:host([invalid]) .input.focus-visible,:host([invalid][focused]) .input{border-color:var(
--highcontrast-textfield-border-color-invalid-keyboard-focus,var(
--mod-textfield-border-color-invalid-keyboard-focus,var(--spectrum-textfield-border-color-invalid-keyboard-focus)
)
)}:host([invalid]) .input:focus-visible,:host([invalid][focused]) .input{border-color:var(
--highcontrast-textfield-border-color-invalid-keyboard-focus,var(
--mod-textfield-border-color-invalid-keyboard-focus,var(--spectrum-textfield-border-color-invalid-keyboard-focus)
)
)}.input:disabled,:host([disabled]) #textfield .input,:host([disabled]) #textfield:hover .input{-webkit-text-fill-color:var(
--highcontrast-textfield-text-color-disabled,var(
--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)
)
);background-color:var(
--mod-textfield-background-color-disabled,var(--spectrum-textfield-background-color-disabled)
);border-color:#0000;color:var(
--highcontrast-textfield-text-color-disabled,var(
--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)
)
);opacity:1;resize:none}.input:disabled::placeholder,:host([disabled]) #textfield .input::placeholder,:host([disabled]) #textfield:hover .input::placeholder{color:var(
--highcontrast-textfield-text-color-disabled,var(
--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)
)
)}:host([quiet]) .input{background-color:#0000;border-block-start-width:0;border-inline-width:0;border-radius:0;margin-block-end:var(
--mod-textfield-spacing-block-quiet,var(--spectrum-textfield-spacing-block-quiet)
);outline:none;overflow-y:hidden;padding-block-start:var(
--mod-textfield-spacing-block-start,var(--spectrum-textfield-spacing-block-start)
);padding-inline:var(
--mod-textfield-spacing-inline-quiet,var(--spectrum-textfield-spacing-inline-quiet)
);resize:none}.input:disabled,:host([quiet][disabled]) .input,:host([quiet][disabled]:hover) .input{background-color:#0000;border-color:var(
--mod-textfield-border-color-disabled,var(--spectrum-textfield-border-color-disabled)
);color:var(
--highcontrast-textfield-text-color-disabled,var(
--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)
)
)}.input:disabled::placeholder,:host([quiet][disabled]) .input::placeholder,:host([quiet][disabled]:hover) .input::placeholder{color:var(
--highcontrast-textfield-text-color-disabled,var(
--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)
)
)}.input:read-only,:host([readonly]) #textfield .input,:host([readonly]) #textfield:hover .input{background-color:#0000;border-color:#0000;color:var(
--highcontrast-textfield-text-color-readonly,var(
--mod-textfield-text-color-readonly,var(--spectrum-textfield-text-color-readonly)
)
);outline:none}.input:read-only::placeholder,:host([readonly]) #textfield .input::placeholder,:host([readonly]) #textfield:hover .input::placeholder{background-color:#0000;color:var(
--highcontrast-textfield-text-color-readonly,var(
--mod-textfield-text-color-readonly,var(--spectrum-textfield-text-color-readonly)
)
)}.spectrum-Textfield--sideLabel{grid-template-columns:auto auto auto;grid-template-rows:auto auto}.spectrum-Textfield--sideLabel:after{grid-area:1/2/span 1/span 1}.spectrum-Textfield--sideLabel .spectrum-FieldLabel{grid-area:1/1/span 2/span 1;margin-inline-end:var(
--mod-textfield-label-spacing-inline-side-label,var(--spectrum-textfield-label-spacing-inline-side-label)
)}.spectrum-Textfield--sideLabel .spectrum-Textfield-characterCount{align-items:flex-start;grid-area:1/3/auto/span 1;margin-block-start:var(
--mod-textfield-character-count-spacing-block-side,var(--spectrum-textfield-character-count-spacing-block-side)
);margin-inline-start:var(
--mod-textfield-character-count-spacing-inline-side,var(--spectrum-textfield-character-count-spacing-inline-side)
)}.spectrum-Textfield--sideLabel .spectrum-HelpText{grid-area:2/2/auto/span 1}.spectrum-Textfield--sideLabel .icon,.spectrum-Textfield--sideLabel .input{grid-area:1/2/span 1/span 1}:host([multiline]){--spectrum-textfield-input-line-height:normal}:host([multiline]) .input{min-block-size:var(
--mod-text-area-min-block-size,var(--spectrum-text-area-min-block-size)
);min-inline-size:var(
--mod-text-area-min-inline-size,var(--spectrum-text-area-min-inline-size)
);resize:inherit}:host([multiline][grows]) .input{grid-row:1}:host([multiline][quiet]) .input{min-block-size:var(
--mod-text-area-min-block-size-quiet,var(--spectrum-text-area-min-block-size-quiet)
);overflow-y:hidden;resize:none}@media (forced-colors:active){:host{--highcontrast-textfield-border-color-hover:Highlight;--highcontrast-textfield-border-color-focus:Highlight;--highcontrast-textfield-border-color-keyboard-focus:CanvasText;--highcontrast-textfield-focus-indicator-color:Highlight;--highcontrast-textfield-border-color-invalid-default:Highlight;--highcontrast-textfield-border-color-invalid-hover:Highlight;--highcontrast-textfield-border-color-invalid-focus:Highlight;--highcontrast-textfield-border-color-invalid-keyboard-focus:Highlight;--highcontrast-textfield-text-color-valid:CanvasText;--highcontrast-textfield-text-color-invalid:CanvasText}#textfield .input{--highcontrast-textfield-text-color-default:CanvasText;--highcontrast-textfield-text-color-hover:CanvasText;--highcontrast-textfield-text-color-keyboard-focus:CanvasText;--highcontrast-textfield-text-color-disabled:GrayText;--highcontrast-textfield-text-color-readonly:CanvasText}#textfield .input::placeholder{--highcontrast-textfield-text-color-default:GrayText;--highcontrast-textfield-text-color-hover:GrayText;--highcontrast-textfield-text-color-keyboard-focus:GrayText;--highcontrast-textfield-text-color-disabled:GrayText;--highcontrast-textfield-text-color-readonly:CanvasText}}:host{--spectrum-textfield-border-color:var(
--system-spectrum-textfield-border-color
);--spectrum-textfield-border-color-hover:var(
--system-spectrum-textfield-border-color-hover
);--spectrum-textfield-border-color-focus:var(
--system-spectrum-textfield-border-color-focus
);--spectrum-textfield-border-color-focus-hover:var(
--system-spectrum-textfield-border-color-focus-hover
);--spectrum-textfield-border-color-keyboard-focus:var(
--system-spectrum-textfield-border-color-keyboard-focus
);--spectrum-textfield-border-width:var(
--system-spectrum-textfield-border-width
)}:host{display:inline-flex;flex-direction:column;inline-size:var(--mod-textfield-width,var(--spectrum-textfield-width))}:host([multiline]){resize:both}:host([multiline][readonly]){resize:none}#textfield{inline-size:100%}#textfield,textarea{resize:inherit}.input{min-inline-size:var(--spectrum-textfield-min-width)}:host([focused]) .input{caret-color:var(--swc-test-caret-color);forced-color-adjust:var(--swc-test-forced-color-adjust)}:host([grows]:not([quiet])) #textfield:after{grid-area:unset;min-block-size:calc(var(
--mod-text-area-min-block-size,
var(--spectrum-text-area-min-block-size)
) + var(
--mod-textfield-focus-indicator-gap,
var(--spectrum-textfield-focus-indicator-gap)
)*2)}#sizer{block-size:auto;opacity:0;word-break:break-word}.icon,.icon-workflow{pointer-events:none}:host([multiline]) #textfield{display:inline-grid}:host([multiline]) textarea{transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([multiline]:not([quiet])) #textfield:after{box-shadow:none}:host([multiline][rows]) .input{block-size:auto;resize:none}:host([multiline][rows="1"]) .input{min-block-size:auto}:host([grows]:not([rows])) .input:not(#sizer){height:100%;left:0;overflow:hidden;position:absolute;resize:none;top:0}:host([disabled][quiet]) #textfield .input,:host([disabled][quiet]) #textfield:hover .input,:host([quiet]) .input :disabled{background-color:var(
--spectrum-textfield-m-quiet-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}:host([disabled]) #textfield .icon.icon-search,:host([readonly]) #textfield .icon.icon-search{color:var(
--highcontrast-textfield-text-color-disabled,var(
--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)
)
)}
`,se=t.iv`
.spectrum-UIIcon-Checkmark50{height:var(--spectrum-alias-ui-icon-checkmark-size-50);width:var(--spectrum-alias-ui-icon-checkmark-size-50)}.spectrum-UIIcon-Checkmark75{height:var(--spectrum-alias-ui-icon-checkmark-size-75);width:var(--spectrum-alias-ui-icon-checkmark-size-75)}.spectrum-UIIcon-Checkmark100{height:var(--spectrum-alias-ui-icon-checkmark-size-100);width:var(--spectrum-alias-ui-icon-checkmark-size-100)}.spectrum-UIIcon-Checkmark200{height:var(--spectrum-alias-ui-icon-checkmark-size-200);width:var(--spectrum-alias-ui-icon-checkmark-size-200)}.spectrum-UIIcon-Checkmark300{height:var(--spectrum-alias-ui-icon-checkmark-size-300);width:var(--spectrum-alias-ui-icon-checkmark-size-300)}.spectrum-UIIcon-Checkmark400{height:var(--spectrum-alias-ui-icon-checkmark-size-400);width:var(--spectrum-alias-ui-icon-checkmark-size-400)}.spectrum-UIIcon-Checkmark500{height:var(--spectrum-alias-ui-icon-checkmark-size-500);width:var(--spectrum-alias-ui-icon-checkmark-size-500)}.spectrum-UIIcon-Checkmark600{height:var(--spectrum-alias-ui-icon-checkmark-size-600);width:var(--spectrum-alias-ui-icon-checkmark-size-600)}
`;var ce=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,ie=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?ae(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&ce(e,r,c),c};const ne=["text","url","tel","email","password"];class le extends(function(t,{mode:e}={mode:"internal"}){return class extends t{constructor(){super(...arguments),this.helpTextManager=new re(this,{mode:e})}get helpTextId(){return this.helpTextManager.id}renderHelpText(t){return this.helpTextManager.render(t)}}}(z(D,{noDefaultSize:!0}))){constructor(){super(...arguments),this.allowedKeys="",this.focused=!1,this.invalid=!1,this.label="",this.placeholder="",this._type="text",this.grows=!1,this.maxlength=-1,this.minlength=-1,this.multiline=!1,this.readonly=!1,this.rows=-1,this.valid=!1,this._value="",this.quiet=!1,this.required=!1}static get styles(){return[oe,se]}get type(){var t;return null!=(t=ne.find((t=>t===this._type)))?t:"text"}set type(t){const e=this._type;this._type=t,this.requestUpdate("type",e)}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}get focusElement(){return this.inputElement}setSelectionRange(t,e,r="none"){this.inputElement.setSelectionRange(t,e,r)}select(){this.inputElement.select()}handleInput(t){if(this.allowedKeys&&this.inputElement.value&&!new RegExp(`^[${this.allowedKeys}]*$`,"u").test(this.inputElement.value)){const t=this.inputElement.selectionStart-1;return this.inputElement.value=this.value.toString(),void this.inputElement.setSelectionRange(t,t)}this.value=this.inputElement.value}handleChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}onFocus(){this.focused=!this.readonly&&!0}onBlur(){this.focused=!this.readonly&&!1}renderStateIcons(){return this.invalid?t.dy`
                <sp-icon-alert id="invalid" class="icon"></sp-icon-alert>
            `:this.valid?t.dy`
                <sp-icon-checkmark100
                    id="valid"
                    class="icon spectrum-UIIcon-Checkmark100"
                ></sp-icon-checkmark100>
            `:t.Ld}get displayValue(){return this.value.toString()}get renderMultiline(){return t.dy`
            ${this.grows&&-1===this.rows?t.dy`
                      <div id="sizer" class="input" aria-hidden="true">
                          ${this.value}&#8203;
                      </div>
                  `:t.Ld}
            <!-- @ts-ignore -->
            <textarea
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.appliedLabel||this.placeholder}
                aria-invalid=${(0,E.o)(this.invalid||void 0)}
                class="input"
                maxlength=${(0,E.o)(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${(0,E.o)(this.minlength>-1?this.minlength:void 0)}
                title=${this.invalid?"":t.Ld}
                pattern=${(0,E.o)(this.pattern)}
                placeholder=${this.placeholder}
                .value=${this.displayValue}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                rows=${(0,E.o)(this.rows>-1?this.rows:void 0)}
                autocomplete=${(0,E.o)(this.autocomplete)}
            ></textarea>
        `}get renderInput(){return t.dy`
            <!-- @ts-ignore -->
            <input
                type=${this.type}
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.appliedLabel||this.placeholder}
                aria-invalid=${(0,E.o)(this.invalid||void 0)}
                class="input"
                title=${this.invalid?"":t.Ld}
                maxlength=${(0,E.o)(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${(0,E.o)(this.minlength>-1?this.minlength:void 0)}
                pattern=${(0,E.o)(this.pattern)}
                placeholder=${this.placeholder}
                .value=${te(this.displayValue)}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${(0,E.o)(this.autocomplete)}
            />
        `}renderField(){return t.dy`
            ${this.renderStateIcons()}
            ${this.multiline?this.renderMultiline:this.renderInput}
        `}render(){return t.dy`
            <div id="textfield">${this.renderField()}</div>
            ${this.renderHelpText(this.invalid)}
        `}update(t){(t.has("value")||t.has("required")&&this.required)&&this.updateComplete.then((()=>{this.checkValidity()})),super.update(t)}checkValidity(){let t=this.inputElement.checkValidity();return(this.required||this.value&&this.pattern)&&((this.disabled||this.multiline)&&this.pattern&&(t=new RegExp(`^${this.pattern}$`,"u").test(this.value.toString())),void 0!==this.minlength&&(t=t&&this.value.toString().length>=this.minlength),this.valid=t,this.invalid=!t),t}}ie([(0,d.SB)()],le.prototype,"appliedLabel",2),ie([(0,d.Cb)({attribute:"allowed-keys"})],le.prototype,"allowedKeys",2),ie([(0,d.Cb)({type:Boolean,reflect:!0})],le.prototype,"focused",2),ie([(0,d.IO)(".input:not(#sizer)")],le.prototype,"inputElement",2),ie([(0,d.Cb)({type:Boolean,reflect:!0})],le.prototype,"invalid",2),ie([(0,d.Cb)()],le.prototype,"label",2),ie([(0,d.Cb)()],le.prototype,"placeholder",2),ie([(0,d.Cb)({attribute:"type",reflect:!0})],le.prototype,"_type",2),ie([(0,d.SB)()],le.prototype,"type",1),ie([(0,d.Cb)()],le.prototype,"pattern",2),ie([(0,d.Cb)({type:Boolean,reflect:!0})],le.prototype,"grows",2),ie([(0,d.Cb)({type:Number})],le.prototype,"maxlength",2),ie([(0,d.Cb)({type:Number})],le.prototype,"minlength",2),ie([(0,d.Cb)({type:Boolean,reflect:!0})],le.prototype,"multiline",2),ie([(0,d.Cb)({type:Boolean,reflect:!0})],le.prototype,"readonly",2),ie([(0,d.Cb)({type:Number})],le.prototype,"rows",2),ie([(0,d.Cb)({type:Boolean,reflect:!0})],le.prototype,"valid",2),ie([(0,d.Cb)({type:String})],le.prototype,"value",1),ie([(0,d.Cb)({type:Boolean,reflect:!0})],le.prototype,"quiet",2),ie([(0,d.Cb)({type:Boolean,reflect:!0})],le.prototype,"required",2),ie([(0,d.Cb)({type:String,reflect:!0})],le.prototype,"autocomplete",2);class ue extends le{constructor(){super(...arguments),this._value=""}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}}ie([(0,d.Cb)({type:String})],ue.prototype,"value",1),(0,y.N)("sp-textfield",ue);const de=Symbol("language resolver updated");class me{constructor(t){this.language=document.documentElement.lang||navigator.language,this.host=t,this.host.addController(this)}hostConnected(){this.resolveLanguage()}hostDisconnected(){var t;null==(t=this.unsubscribe)||t.call(this)}resolveLanguage(){const t=new CustomEvent("sp-language-context",{bubbles:!0,composed:!0,detail:{callback:(t,e)=>{const r=this.language;this.language=t,this.unsubscribe=e,this.host.requestUpdate(de,r)}},cancelable:!0});this.host.dispatchEvent(t)}}const pe=(t,e)=>{var r,o;const s=t._$AN;if(void 0===s)return!1;for(const t of s)null===(o=(r=t)._$AO)||void 0===o||o.call(r,e,!1),pe(t,e);return!0},he=t=>{let e,r;do{if(void 0===(e=t._$AM))break;r=e._$AN,r.delete(t),t=e}while(0===(null==r?void 0:r.size))},be=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(void 0===r)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),fe(e)}};function ge(t){void 0!==this._$AN?(he(this),this._$AM=t,be(this)):this._$AM=t}function ve(t,e=!1,r=0){const o=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(o))for(let t=r;t<o.length;t++)pe(o[t],!1),he(o[t]);else null!=o&&(pe(o,!1),he(o));else pe(this,t)}const fe=t=>{var e,r,o,s;t.type==I.pX.CHILD&&(null!==(e=(o=t)._$AP)&&void 0!==e||(o._$AP=ve),null!==(r=(s=t)._$AQ)&&void 0!==r||(s._$AQ=ge))};class ke extends I.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),be(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,o;t!==this.isConnected&&(this.isConnected=t,t?null===(r=this.reconnected)||void 0===r||r.call(this):null===(o=this.disconnected)||void 0===o||o.call(this)),e&&(pe(this,t),he(this))}setValue(t){if(Jt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const ye=["",()=>{}],xe=(0,I.XM)(class extends ke{constructor(){super(...arguments),this.start=ye,this.streamInside=ye,this.end=ye,this.streamOutside=ye,this.state="off",this.handleStart=t=>{this.clearStream(),this.callHandler(this.start[1],t),!t.defaultPrevented&&(this.removeListeners(),this.addListeners("on"))},this.handleInside=t=>{this.handleStream(this.streamInside[1],t)},this.handleEnd=t=>{this.clearStream(),this.callHandler(this.end[1],t),this.removeListeners(),this.addListeners("off")},this.handleOutside=t=>{this.handleStream(this.streamOutside[1],t)}}render(e){return t.Ld}update(t,[{start:e,end:r,streamInside:o=ye,streamOutside:s=ye}]){var c;this.element!==t.element&&(this.element=t.element,this.removeListeners()),this.host=(null==(c=t.options)?void 0:c.host)||this.element,this.start=e,this.end=r,this.streamInside=o,this.streamOutside=s,this.addListeners()}addListeners(t){this.state=t||this.state,"off"===this.state?(this.addListener(this.streamOutside[0],this.handleOutside),this.addListener(this.start[0],this.handleStart)):"on"===this.state&&(this.addListener(this.streamInside[0],this.handleInside),this.addListener(this.end[0],this.handleEnd))}callHandler(t,e){"function"==typeof t?t.call(this.host,e):t.handleEvent(e)}handleStream(t,e){this.stream||(this.callHandler(t,e),this.stream=requestAnimationFrame((()=>{this.stream=void 0})))}clearStream(){null!=this.stream&&(cancelAnimationFrame(this.stream),this.stream=void 0)}addListener(t,e){Array.isArray(t)?t.map((t=>{this.element.addEventListener(t,e)})):this.element.addEventListener(t,e)}removeListener(t,e){Array.isArray(t)?t.map((t=>{this.element.removeEventListener(t,e)})):this.element.removeEventListener(t,e)}removeListeners(){this.removeListener(this.start[0],this.handleStart),this.removeListener(this.streamInside[0],this.handleInside),this.removeListener(this.end[0],this.handleEnd),this.removeListener(this.streamOutside[0],this.handleOutside)}disconnected(){this.removeListeners()}reconnected(){this.addListeners()}});let we=new Map,ze=!1;try{ze="exceptZero"===new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay}catch(t){}let Ce=!1;try{Ce="unit"===new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style}catch(t){}const Ie={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class Se{format(t){let e="";if(e=ze||null==this.options.signDisplay?this.numberFormatter.format(t):function(t,e,r){if("auto"===e)return t.format(r);if("never"===e)return t.format(Math.abs(r));{let o=!1;if("always"===e?o=r>0||Object.is(r,0):"exceptZero"===e&&(Object.is(r,-0)||Object.is(r,0)?r=Math.abs(r):o=r>0),o){let e=t.format(-r),o=t.format(r),s=e.replace(o,"").replace(/\u200e|\u061C/,"");return 1!==[...s].length&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),e.replace(o,"!!!").replace(s,"+").replace("!!!",o)}return t.format(r)}}(this.numberFormatter,this.options.signDisplay,t),"unit"===this.options.style&&!Ce){var r;let{unit:t,unitDisplay:o="short",locale:s}=this.resolvedOptions(),c=null===(r=Ie[t])||void 0===r?void 0:r[o];e+=c[s]||c.default}return e}formatToParts(t){return this.numberFormatter.formatToParts(t)}formatRange(t,e){if("function"==typeof this.numberFormatter.formatRange)return this.numberFormatter.formatRange(t,e);if(e<t)throw new RangeError("End date must be >= start date");return`${this.format(t)} – ${this.format(e)}`}formatRangeToParts(t,e){if("function"==typeof this.numberFormatter.formatRangeToParts)return this.numberFormatter.formatRangeToParts(t,e);if(e<t)throw new RangeError("End date must be >= start date");let r=this.numberFormatter.formatToParts(t),o=this.numberFormatter.formatToParts(e);return[...r.map((t=>({...t,source:"startRange"}))),{type:"literal",value:" – ",source:"shared"},...o.map((t=>({...t,source:"endRange"})))]}resolvedOptions(){let t=this.numberFormatter.resolvedOptions();return ze||null==this.options.signDisplay||(t={...t,signDisplay:this.options.signDisplay}),Ce||"unit"!==this.options.style||(t={...t,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),t}constructor(t,e={}){this.numberFormatter=function(t,e={}){let{numberingSystem:r}=e;if(r&&-1===t.indexOf("-u-nu-")&&(t=`${t}-u-nu-${r}`),"unit"===e.style&&!Ce){var o;let{unit:t,unitDisplay:r="short"}=e;if(!t)throw new Error('unit option must be provided with style: "unit"');if(!(null===(o=Ie[t])||void 0===o?void 0:o[r]))throw new Error(`Unsupported unit ${t} with unitDisplay = ${r}`);e={...e,style:"decimal"}}let s=t+(e?Object.entries(e).sort(((t,e)=>t[0]<e[0]?-1:1)).join():"");if(we.has(s))return we.get(s);let c=new Intl.NumberFormat(t,e);return we.set(s,c),c}(t,e),this.options=e}}const Ee=new RegExp("^.*\\(.*\\).*$"),$e=["latn","arab","hanidec"];class Ae{parse(t){return qe(this.locale,this.options,t).parse(t)}isValidPartialNumber(t,e,r){return qe(this.locale,this.options,t).isValidPartialNumber(t,e,r)}getNumberingSystem(t){return qe(this.locale,this.options,t).options.numberingSystem}constructor(t,e={}){this.locale=t,this.options=e}}const je=new Map;function qe(t,e,r){let o=_e(t,e);if(!t.includes("-nu-")&&!o.isValidPartialNumber(r))for(let s of $e)if(s!==o.options.numberingSystem){let o=_e(t+(t.includes("-u-")?"-nu-":"-u-nu-")+s,e);if(o.isValidPartialNumber(r))return o}return o}function _e(t,e){let r=t+(e?Object.entries(e).sort(((t,e)=>t[0]<e[0]?-1:1)).join():""),o=je.get(r);return o||(o=new Te(t,e),je.set(r,o)),o}class Te{parse(t){let e=this.sanitize(t);e=Le(e,this.symbols.group,"").replace(this.symbols.decimal,".").replace(this.symbols.minusSign,"-").replace(this.symbols.numeral,this.symbols.index);let r=e?+e:NaN;return isNaN(r)?NaN:("accounting"===this.options.currencySign&&Ee.test(t)&&(r*=-1),"percent"===this.options.style&&(r/=100,r=+r.toFixed((null!==(o=this.options.maximumFractionDigits)&&void 0!==o?o:0)+2)),r);var o}sanitize(t){return t=(t=t.replace(this.symbols.literals,"")).replace("-",this.symbols.minusSign),"arab"===this.options.numberingSystem&&(t=Le(t=(t=t.replace(",",this.symbols.decimal)).replace(String.fromCharCode(1548),this.symbols.decimal),".",this.symbols.group)),"fr-FR"===this.options.locale&&(t=Le(t,".",String.fromCharCode(8239))),t}isValidPartialNumber(t,e=-1/0,r=1/0){return(t=this.sanitize(t)).startsWith(this.symbols.minusSign)&&e<0?t=t.slice(this.symbols.minusSign.length):this.symbols.plusSign&&t.startsWith(this.symbols.plusSign)&&r>0&&(t=t.slice(this.symbols.plusSign.length)),!t.startsWith(this.symbols.group)&&0===(t=Le(t,this.symbols.group,"").replace(this.symbols.numeral,"").replace(this.symbols.decimal,"")).length}constructor(t,e={}){this.formatter=new Intl.NumberFormat(t,e),this.options=this.formatter.resolvedOptions(),this.symbols=function(t,e,r){var o,s,c,a;let i=t.formatToParts(-10000.111),n=t.formatToParts(10000.111),l=t.formatToParts(1);var u;let d=null!==(u=null===(o=i.find((t=>"minusSign"===t.type)))||void 0===o?void 0:o.value)&&void 0!==u?u:"-",m=null===(s=n.find((t=>"plusSign"===t.type)))||void 0===s?void 0:s.value;m||"exceptZero"!==(null==r?void 0:r.signDisplay)&&"always"!==(null==r?void 0:r.signDisplay)||(m="+");let p=null===(c=i.find((t=>"decimal"===t.type)))||void 0===c?void 0:c.value,h=null===(a=i.find((t=>"group"===t.type)))||void 0===a?void 0:a.value,b=i.filter((t=>!He.has(t.type))).map((t=>De(t.value))),g=l.filter((t=>!He.has(t.type))).map((t=>De(t.value))),v=[...new Set([...g,...b])].sort(((t,e)=>e.length-t.length)),f=0===v.length?new RegExp("[\\p{White_Space}]","gu"):new RegExp(`${v.join("|")}|[\\p{White_Space}]`,"gu"),k=[...new Intl.NumberFormat(e.locale,{useGrouping:!1}).format(9876543210)].reverse(),y=new Map(k.map(((t,e)=>[t,e])));return{minusSign:d,plusSign:m,decimal:p,group:h,literals:f,numeral:new RegExp(`[${k.join("")}]`,"g"),index:t=>String(y.get(t))}}(this.formatter,this.options,e)}}const He=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]);function Le(t,e,r){return t.replaceAll?t.replaceAll(e,r):t.split(e).join(r)}function De(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}(0,y.N)("sp-icon-chevron50",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Chevron50"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    width=${t}
    height=${e}
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
  >
    <path
      d="M1.985 5.961a.695.695 0 01-.7-.704.695.695 0 01.209-.493L3.279 3 1.51 1.251A.695.695 0 011.3.757.696.696 0 012.492.255l2.275 2.247a.7.7 0 010 .996L2.477 5.76a.697.697 0 01-.492.201z"
    />
  </svg>`)()}}),(0,y.N)("sp-icon-chevron75",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Chevron75"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path
      d="M7.482 4.406l-.001-.001L3.86.783a.84.84 0 00-1.188 1.188L5.702 5l-3.03 3.03A.84.84 0 003.86 9.216l3.621-3.622h.001a.84.84 0 000-1.19z"
    />
  </svg>`)()}}),(0,y.N)("sp-icon-chevron100",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Chevron100"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path
      d="M3 9.95a.875.875 0 01-.615-1.498L5.88 5 2.385 1.547A.875.875 0 013.615.302L7.74 4.377a.876.876 0 010 1.246L3.615 9.698A.872.872 0 013 9.95z"
    />
  </svg>`)()}}),(0,y.N)("sp-icon-chevron200",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Chevron200"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path
      d="M9.034 5.356L4.343.663a.911.911 0 00-1.29 1.289L7.102 6l-4.047 4.047a.911.911 0 101.289 1.29l4.691-4.692a.912.912 0 000-1.29z"
    />
  </svg>`)()}});const Pe=t.iv`
:host{--spectrum-infield-button-height:var(--spectrum-component-height-100);--spectrum-infield-button-width:var(--spectrum-component-height-100);--spectrum-infield-button-stacked-border-radius-reset:var(
--spectrum-in-field-button-fill-stacked-inner-border-rounding
);--spectrum-infield-button-edge-to-fill:var(
--spectrum-in-field-button-edge-to-fill
);--spectrum-infield-button-inner-edge-to-fill:var(
--spectrum-in-field-button-stacked-inner-edge-to-fill
);--spectrum-infield-button-fill-padding:0px;--spectrum-infield-button-stacked-fill-padding-inline:var(
--spectrum-in-field-button-edge-to-disclosure-icon-stacked-medium
);--spectrum-infield-button-stacked-fill-padding-outer:var(
--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium
);--spectrum-infield-button-stacked-fill-padding-inner:var(
--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-medium
);--spectrum-infield-button-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-infield-button-icon-color:var(
--spectrum-neutral-content-color-default
);--spectrum-infield-button-icon-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-infield-button-icon-color-down:var(
--spectrum-neutral-content-color-down
);--spectrum-infield-button-icon-color-key-focus:var(
--spectrum-neutral-content-color-key-focus
)}:host([disabled]){--mod-infield-button-background-color:var(
--mod-infield-button-background-color-disabled,var(--spectrum-disabled-background-color)
);--mod-infield-button-background-color-hover:var(
--mod-infield-button-background-color-hover-disabled,var(--spectrum-disabled-background-color)
);--mod-infield-button-background-color-down:var(
--mod-infield-button-background-color-down-disabled,var(--spectrum-disabled-background-color)
);--mod-infield-button-border-color:var(
--mod-infield-button-border-color-disabled,var(--spectrum-disabled-background-color)
);--mod-infield-button-icon-color:var(
--mod-infield-button-icon-color-disabled,var(--spectrum-disabled-content-color)
);--mod-infield-button-icon-color-hover:var(
--mod-infield-button-icon-color-hover-disabled,var(--spectrum-disabled-content-color)
);--mod-infield-button-icon-color-down:var(
--mod-infield-button-icon-color-down-disabled,var(--spectrum-disabled-content-color)
);--mod-infield-button-icon-color-key-focus:var(
--mod-infield-button-icon-color-key-focus-disabled,var(--spectrum-disabled-content-color)
)}:host([size=s]){--spectrum-infield-button-height:var(--spectrum-component-height-75);--spectrum-infield-button-width:var(--spectrum-component-height-75);--spectrum-infield-button-stacked-fill-padding-inline:var(
--spectrum-in-field-button-edge-to-disclosure-icon-stacked-small
);--spectrum-infield-button-stacked-fill-padding-outer:var(
--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-small
);--spectrum-infield-button-stacked-fill-padding-inner:var(
--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-small
)}:host([size=l]){--spectrum-infield-button-height:var(--spectrum-component-height-200);--spectrum-infield-button-width:var(--spectrum-component-height-200);--spectrum-infield-button-stacked-fill-padding-inline:var(
--spectrum-in-field-button-edge-to-disclosure-icon-stacked-large
);--spectrum-infield-button-stacked-fill-padding-outer:var(
--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large
);--spectrum-infield-button-stacked-fill-padding-inner:var(
--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-large
)}:host([size=xl]){--spectrum-infield-button-height:var(--spectrum-component-height-300);--spectrum-infield-button-width:var(--spectrum-component-height-300);--spectrum-infield-button-stacked-fill-padding-inline:var(
--spectrum-in-field-button-edge-to-disclosure-icon-stacked-extra-large
);--spectrum-infield-button-stacked-fill-padding-outer:var(
--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large
);--spectrum-infield-button-stacked-fill-padding-inner:var(
--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-extra-large
)}:host([block=end]),:host([block=start]){--mod-infield-button-width:var(
--mod-infield-button-width-stacked,var(--spectrum-in-field-button-width-stacked-medium)
)}:host([block=end][size=s]),:host([block=start][size=s]){--mod-infield-button-width:var(
--mod-infield-button-width-stacked,var(--spectrum-in-field-button-width-stacked-small)
)}:host([block=end][size=l]),:host([block=start][size=l]){--mod-infield-button-width:var(
--mod-infield-button-width-stacked,var(--spectrum-in-field-button-width-stacked-large)
)}:host([block=end][size=xl]),:host([block=start][size=xl]){--mod-infield-button-width:var(
--mod-infield-button-width-stacked,var(--spectrum-in-field-button-width-stacked-extra-large)
)}:host([quiet]){--mod-infield-button-background-color:var(
--mod-infield-button-background-color-quiet,transparent
);--mod-infield-button-background-color-hover:var(
--mod-infield-button-background-color-hover-quiet,transparent
);--mod-infield-button-background-color-down:var(
--mod-infield-button-background-color-down-quiet,transparent
);--mod-infield-button-background-color-key-focus:var(
--mod-infield-button-background-color-key-focus-quiet,transparent
);--mod-infield-border-color:var(
--mod-infield-border-color-quiet,transparent
);--mod-infield-button-border-width:var(
--mod-infield-button-border-width-quiet,0
)}:host([quiet][disabled]){--mod-infield-button-background-color:var(
--mod-infield-button-background-color-quiet-disabled,transparent
);--mod-infield-button-border-color:var(
--mod-infield-button-border-color-quiet-disabled,transparent
)}:host{align-items:center;background-color:#0000;block-size:var(
--mod-infield-button-height,var(--spectrum-infield-button-height)
);border-style:none;cursor:pointer;display:flex;inline-size:var(
--mod-infield-button-width,var(--spectrum-infield-button-width)
);justify-content:center;padding:var(
--mod-infield-button-edge-to-fill,var(--spectrum-infield-button-edge-to-fill)
)}.fill{background-color:var(
--mod-infield-button-background-color,var(--spectrum-infield-button-background-color)
);block-size:100%;border-color:var(
--mod-infield-button-border-color,var(--spectrum-infield-button-border-color)
);border-end-end-radius:var(
--mod-infield-button-border-radius,var(--spectrum-infield-button-border-radius)
);border-end-start-radius:var(
--mod-infield-button-border-radius,var(--spectrum-infield-button-border-radius)
);border-start-end-radius:var(
--mod-infield-button-border-radius,var(--spectrum-infield-button-border-radius)
);border-start-start-radius:var(
--mod-infield-button-border-radius,var(--spectrum-infield-button-border-radius)
);border-style:solid;border-width:var(
--mod-infield-button-border-width,var(--spectrum-infield-button-border-width)
);inline-size:100%;padding:var(
--mod-infield-button-fill-padding,var(--spectrum-infield-button-fill-padding)
)}::slotted(*){color:var(
--mod-infield-button-icon-color,var(--spectrum-infield-button-icon-color)
)}:host([inline=end]) .fill{border-end-start-radius:var(
--mod-infield-button-border-radius-reset,var(--spectrum-infield-button-border-radius-reset)
);border-start-start-radius:var(
--mod-infield-button-border-radius-reset,var(--spectrum-infield-button-border-radius-reset)
)}:host([inline=start]) .fill{border-end-end-radius:var(
--mod-infield-button-border-radius-reset,var(--spectrum-infield-button-border-radius-reset)
);border-start-end-radius:var(
--mod-infield-button-border-radius-reset,var(--spectrum-infield-button-border-radius-reset)
)}:host([disabled]){cursor:auto}:host(:hover) .fill{background-color:var(
--mod-infield-button-background-color-hover,var(--spectrum-infield-button-background-color-hover)
)}:host(:hover) ::slotted(*){color:var(
--mod-infield-button-icon-color-hover,var(--spectrum-infield-button-icon-color-hover)
)}:host:active .fill{background-color:var(
--mod-infield-button-background-color-down,var(--spectrum-infield-button-background-color-down)
)}:host:active ::slotted(*){color:var(
--mod-infield-button-icon-color-down,var(--spectrum-infield-button-icon-color-down)
)}:host(.focus-visible) .fill,:host(:focus) .fill{background-color:var(
--mod-infield-button-background-color-key-focus,var(--spectrum-infield-button-background-color-key-focus)
)}:host(:focus) .fill,:host(:focus-visible) .fill{background-color:var(
--mod-infield-button-background-color-key-focus,var(--spectrum-infield-button-background-color-key-focus)
)}:host(.focus-visible) ::slotted(*),:host(:focus) ::slotted(*){color:var(
--mod-infield-button-icon-color-key-focus,var(--spectrum-infield-button-icon-color-key-focus)
)}:host(:focus) ::slotted(*),:host(:focus-visible) ::slotted(*){color:var(
--mod-infield-button-icon-color-key-focus,var(--spectrum-infield-button-icon-color-key-focus)
)}.fill{align-items:center;display:flex;justify-content:center;transition:border-color var(--spectrum-global-animation-duration-100) ease-in-out}:host([block=end]),:host([block=start]){block-size:calc(var(--mod-infield-button-height, var(--spectrum-infield-button-height))/2)}:host([block=end]) .fill,:host([block=start]) .fill{box-sizing:border-box;padding-inline-end:calc(var(
--mod-infield-button-stacked-fill-padding-inline,
var(--spectrum-infield-button-stacked-fill-padding-inline)
) - var(
--mod-infield-button-edge-to-fill,
var(--spectrum-infield-button-edge-to-fill)
) - var(
--mod-infield-button-border-width,
var(--spectrum-infield-button-border-width)
));padding-inline-start:calc(var(
--mod-infield-button-stacked-fill-padding-inline,
var(--spectrum-infield-button-stacked-fill-padding-inline)
) - var(
--mod-infield-button-edge-to-fill,
var(--spectrum-infield-button-edge-to-fill)
) - var(
--mod-infield-button-border-width,
var(--spectrum-infield-button-border-width)
))}:host([block=start]){padding-block-end:var(
--mod-infield-button-inner-edge-to-fill,var(--spectrum-infield-button-inner-edge-to-fill)
)}:host([block=start]) .fill{border-block-end:none;border-end-end-radius:var(
--mod-infield-button-stacked-border-radius-reset,var(--spectrum-infield-button-stacked-border-radius-reset)
);border-end-start-radius:var(
--mod-infield-button-stacked-border-radius-reset,var(--spectrum-infield-button-stacked-border-radius-reset)
);border-start-start-radius:var(
--mod-infield-button-stacked-top-border-radius-start-start,var(--spectrum-infield-button-stacked-top-border-radius-start-start)
);padding-block-end:calc(var(
--mod-infield-button-stacked-fill-padding-inner,
var(--spectrum-infield-button-stacked-fill-padding-inner)
) - var(
--mod-infield-button-inner-edge-to-fill,
var(--spectrum-infield-button-inner-edge-to-fill)
));padding-block-start:calc(var(
--mod-infield-button-stacked-fill-padding-outer,
var(--spectrum-infield-button-stacked-fill-padding-outer)
) - var(
--mod-infield-button-edge-to-fill,
var(--spectrum-infield-button-edge-to-fill)
) - var(
--mod-infield-button-border-width,
var(--spectrum-infield-button-border-width)
))}:host([block=end]){padding-block-start:var(
--mod-infield-button-inner-edge-to-fill,var(--spectrum-infield-button-inner-edge-to-fill)
)}:host([block=end]) .fill{border-end-start-radius:var(
--mod-infield-button-stacked-bottom-border-radius-end-start,var(--spectrum-infield-button-stacked-bottom-border-radius-end-start)
);border-start-end-radius:var(
--mod-infield-button-stacked-border-radius-reset,var(--spectrum-infield-button-stacked-border-radius-reset)
);border-start-start-radius:var(
--mod-infield-button-stacked-border-radius-reset,var(--spectrum-infield-button-stacked-border-radius-reset)
);padding-block-end:calc(var(
--mod-infield-button-stacked-fill-padding-outer,
var(--spectrum-infield-button-stacked-fill-padding-outer)
) - var(
--mod-infield-button-inner-edge-to-fill,
var(--spectrum-infield-button-inner-edge-to-fill)
) - var(
--mod-infield-button-border-width,
var(--spectrum-infield-button-border-width)
));padding-block-start:calc(var(
--mod-infield-button-stacked-fill-padding-inner,
var(--spectrum-infield-button-stacked-fill-padding-inner)
) - var(
--mod-infield-button-edge-to-fill,
var(--spectrum-infield-button-edge-to-fill)
) - var(
--mod-infield-button-border-width,
var(--spectrum-infield-button-border-width)
))}::slotted(*){display:initial;flex-shrink:0;margin:0!important}:host{--spectrum-infield-button-border-width:var(
--system-spectrum-infieldbutton-spectrum-infield-button-border-width
);--spectrum-infield-button-border-color:var(
--system-spectrum-infieldbutton-spectrum-infield-button-border-color
);--spectrum-infield-button-border-radius:var(
--system-spectrum-infieldbutton-spectrum-infield-button-border-radius
);--spectrum-infield-button-border-radius-reset:var(
--system-spectrum-infieldbutton-spectrum-infield-button-border-radius-reset
);--spectrum-infield-button-stacked-top-border-radius-start-start:var(
--system-spectrum-infieldbutton-spectrum-infield-button-stacked-top-border-radius-start-start
);--spectrum-infield-button-stacked-bottom-border-radius-end-start:var(
--system-spectrum-infieldbutton-spectrum-infield-button-stacked-bottom-border-radius-end-start
);--spectrum-infield-button-background-color:var(
--system-spectrum-infieldbutton-spectrum-infield-button-background-color
);--spectrum-infield-button-background-color-hover:var(
--system-spectrum-infieldbutton-spectrum-infield-button-background-color-hover
);--spectrum-infield-button-background-color-down:var(
--system-spectrum-infieldbutton-spectrum-infield-button-background-color-down
);--spectrum-infield-button-background-color-key-focus:var(
--system-spectrum-infieldbutton-spectrum-infield-button-background-color-key-focus
)}:host{box-sizing:border-box;-webkit-user-select:none;user-select:none}
`;var Ue=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,Be=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?Oe(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&Ue(e,r,c),c};class Me extends(z(xt,{noDefaultSize:!0,validSizes:["s","m","l","xl"]})){constructor(){super(...arguments),this.quiet=!1}static get styles(){return[...super.styles,Pe]}get buttonContent(){return[t.dy`
            <div class="fill">
                <slot></slot>
            </div>
        `]}}Be([(0,d.Cb)()],Me.prototype,"block",2),Be([(0,d.Cb)()],Me.prototype,"inline",2),Be([(0,d.Cb)({type:Boolean,reflect:!0})],Me.prototype,"quiet",2),customElements.define("sp-infield-button",Me);var Fe=a(250);const Ne=t.iv`
.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronDown50,.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronDown75{transform:rotate(90deg)}.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronLeft50,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronLeft75{transform:rotate(180deg)}.spectrum-UIIcon-ChevronUp100,.spectrum-UIIcon-ChevronUp200,.spectrum-UIIcon-ChevronUp300,.spectrum-UIIcon-ChevronUp400,.spectrum-UIIcon-ChevronUp50,.spectrum-UIIcon-ChevronUp500,.spectrum-UIIcon-ChevronUp75{transform:rotate(270deg)}.spectrum-UIIcon-ChevronDown50,.spectrum-UIIcon-ChevronLeft50,.spectrum-UIIcon-ChevronRight50,.spectrum-UIIcon-ChevronUp50{height:var(--spectrum-icon-chevron-size-50);width:var(--spectrum-icon-chevron-size-50)}.spectrum-UIIcon-ChevronDown75,.spectrum-UIIcon-ChevronLeft75,.spectrum-UIIcon-ChevronRight75,.spectrum-UIIcon-ChevronUp75{height:var(--spectrum-alias-ui-icon-chevron-size-75);width:var(--spectrum-alias-ui-icon-chevron-size-75)}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronRight100,.spectrum-UIIcon-ChevronUp100{height:var(--spectrum-alias-ui-icon-chevron-size-100);width:var(--spectrum-alias-ui-icon-chevron-size-100)}.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronRight200,.spectrum-UIIcon-ChevronUp200{height:var(--spectrum-alias-ui-icon-chevron-size-200);width:var(--spectrum-alias-ui-icon-chevron-size-200)}.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronRight300,.spectrum-UIIcon-ChevronUp300{height:var(--spectrum-alias-ui-icon-chevron-size-300);width:var(--spectrum-alias-ui-icon-chevron-size-300)}.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronRight400,.spectrum-UIIcon-ChevronUp400{height:var(--spectrum-alias-ui-icon-chevron-size-400);width:var(--spectrum-alias-ui-icon-chevron-size-400)}.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronRight500,.spectrum-UIIcon-ChevronUp500{height:var(--spectrum-alias-ui-icon-chevron-size-500);width:var(--spectrum-alias-ui-icon-chevron-size-500)}
`,Re=t.iv`
:host{--spectrum-stepper-height:var(--spectrum-component-height-100);--spectrum-stepper-border-radius:var(--spectrum-corner-radius-100);--spectrum-stepper-button-width:var(
--spectrum-in-field-button-width-stacked-medium
);--spectrum-stepper-button-padding:var(
--spectrum-in-field-button-edge-to-fill
);--spectrum-stepper-width:calc(var(--mod-stepper-height, var(--spectrum-stepper-height))*var(
--mod-stepper-min-width-multiplier,
var(--spectrum-text-field-minimum-width-multiplier)
) + var(
--mod-stepper-button-width,
var(--spectrum-stepper-button-width)
) + var(
--mod-stepper-border-width,
var(--spectrum-stepper-border-width)
)*2);--spectrum-stepper-focus-indicator-width:var(
--spectrum-focus-indicator-thickness
);--spectrum-stepper-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--spectrum-stepper-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-stepper-button-offset:calc(var(--spectrum-stepper-button-width)/2);--spectrum-stepper-animation-duration:var(
--spectrum-animation-duration-100
);--mod-infield-button-border-color:var(
--highcontrast-stepper-border-color,var(--mod-stepper-border-color,var(--spectrum-stepper-border-color))
);--mod-infield-button-border-width:var(
--mod-stepper-border-width,var(--spectrum-stepper-border-width)
);--mod-textfield-border-width:var(
--mod-stepper-border-width,var(--spectrum-stepper-border-width)
)}:host([size=s]) #textfield{--spectrum-stepper-button-width:var(
--spectrum-in-field-button-width-stacked-small
);--spectrum-stepper-height:var(--spectrum-component-height-75)}:host([size=l]) #textfield{--spectrum-stepper-button-width:var(
--spectrum-in-field-button-width-stacked-large
);--spectrum-stepper-height:var(--spectrum-component-height-200)}:host([size=xl]) #textfield{--spectrum-stepper-button-width:var(
--spectrum-in-field-button-width-stacked-extra-large
);--spectrum-stepper-height:var(--spectrum-component-height-300)}:host([quiet]) #textfield{--mod-infield-button-width-stacked:var(
--mod-stepper-button-width-quiet,var(--spectrum-stepper-button-width)
);--mod-textfield-focus-indicator-color:transparent}:host([disabled]) #textfield{--mod-infield-button-border-color-quiet-disabled:var(
--spectrum-disabled-border-color
)}:host([invalid]) #textfield{--mod-stepper-border-color:var(
--mod-stepper-border-color-invalid,var(--spectrum-negative-border-color-default)
);--mod-stepper-border-color-hover:var(
--mod-stepper-border-color-hover-invalid,var(--spectrum-negative-border-color-hover)
);--mod-stepper-border-color-focus:var(
--mod-stepper-border-color-focus-invalid,var(--spectrum-negative-border-color-focus)
);--mod-stepper-border-color-focus-hover:var(
--mod-stepper-border-color-focus-hover-invalid,var(--spectrum-negative-border-color-focus-hover)
);--mod-stepper-border-color-keyboard-focus:var(
--mod-stepper-border-color-keyboard-focus-invalid,var(--spectrum-negative-border-color-key-focus)
);--mod-infield-button-border-color:var(
--mod-stepper-border-color-invalid,var(--spectrum-negative-border-color-default)
)}@media (forced-colors:active){:host{--highcontrast-stepper-border-color:CanvasText;--highcontrast-stepper-border-color-hover:Highlight;--highcontrast-stepper-border-color-focus:Highlight;--highcontrast-stepper-border-color-focus-hover:Highlight;--highcontrast-stepper-border-color-keyboard-focus:CanvasText;--highcontrast-stepper-button-background-color-default:Canvas;--highcontrast-stepper-button-background-color-hover:Canvas;--highcontrast-stepper-button-background-color-focus:Canvas;--highcontrast-stepper-button-background-color-keyboard-focus:Canvas;--highcontrast-stepper-focus-indicator-color:Highlight}:host([disabled]) #textfield{--highcontrast-stepper-border-color:GrayText}:host([invalid]) #textfield{--highcontrast-stepper-border-color:Highlight;--highcontrast-stepper-border-color-hover:Highlight;--highcontrast-stepper-border-color-focus:Highlight;--highcontrast-stepper-border-color-focus-hover:Highlight;--highcontrast-stepper-border-color-keyboard-focus:Highlight}}.x{border-radius:var(--spectrum-stepper-button-border-radius-reset)}#textfield{block-size:var(--mod-stepper-height,var(--spectrum-stepper-height));border-radius:var(
--mod-stepper-border-radius,var(--spectrum-stepper-border-radius)
);display:inline-flex;flex-flow:row;inline-size:var(--mod-stepper-width,var(--spectrum-stepper-width));position:relative}#textfield,#textfield .input{border-color:var(
--highcontrast-stepper-border-color,var(--mod-stepper-border-color,var(--spectrum-stepper-border-color))
)}#textfield .input{border-end-end-radius:0;border-inline-end-width:0;border-start-end-radius:0}:host(:hover:not([disabled])) #textfield{--mod-infield-button-border-color:var(
--highcontrast-stepper-border-color-hover,var(
--mod-stepper-border-color-hover,var(--spectrum-stepper-border-color-hover)
)
)}:host(:hover:not([disabled])) #textfield .buttons,:host(:hover:not([disabled])) #textfield .input{border-color:var(
--highcontrast-stepper-border-color-hover,var(
--mod-stepper-border-color-hover,var(--spectrum-stepper-border-color-hover)
)
)}#textfield:focus,:host([focused]) #textfield{--mod-infield-button-background-color:var(
--highcontrast-stepper-button-background-color-focus,var(
--mod-stepper-button-background-color-focus,var(--spectrum-stepper-button-background-color-focus)
)
);--mod-infield-button-border-color:var(
--highcontrast-stepper-border-color-focus,var(
--mod-stepper-border-color-focus,var(--spectrum-stepper-border-color-focus)
)
)}#textfield:focus .input,:host([focused]) #textfield .input{outline:none}#textfield:focus .buttons,#textfield:focus .input,:host([focused]) #textfield .buttons,:host([focused]) #textfield .input{border-color:var(
--highcontrast-stepper-border-color-focus,var(
--mod-stepper-border-color-focus,var(--spectrum-stepper-border-color-focus)
)
)}:host(:hover) #textfield:focus,:host([focused]:hover) #textfield{--mod-infield-button-border-color:var(
--highcontrast-stepper-border-color-focus-hover,var(
--mod-stepper-border-color-focus-hover,var(--spectrum-stepper-border-color-focus-hover)
)
)}:host(:hover) #textfield:focus .buttons,:host(:hover) #textfield:focus .input,:host([focused]:hover) #textfield .buttons,:host([focused]:hover) #textfield .input{border-color:var(
--highcontrast-stepper-border-color-focus-hover,var(
--mod-stepper-border-color-focus-hover,var(--spectrum-stepper-border-color-focus-hover)
)
)}#textfield.focus-visible,:host([keyboard-focused]) #textfield{--mod-infield-button-background-color:var(
--highcontrast-stepper-button-background-color-keyboard-focus,var(
--mod-stepper-button-background-color-keyboard-focus,var(--spectrum-stepper-button-background-color-keyboard-focus)
)
);--mod-infield-button-border-color:var(
--highcontrast-stepper-border-color-keyboard-focus,var(
--mod-stepper-border-color-keyboard-focus,var(--spectrum-stepper-border-color-keyboard-focus)
)
);outline:var(
--mod-stepper-focus-indicator-width,var(--spectrum-stepper-focus-indicator-width)
) solid;outline-color:var(
--highcontrast-stepper-focus-indicator-color,var(
--mod-stepper-focus-indicator-color,var(--spectrum-stepper-focus-indicator-color)
)
);outline-offset:var(
--mod-stepper-focus-indicator-gap,var(--spectrum-stepper-focus-indicator-gap)
)}#textfield.focus-visible,:host([keyboard-focused]) #textfield{--mod-infield-button-background-color:var(
--highcontrast-stepper-button-background-color-keyboard-focus,var(
--mod-stepper-button-background-color-keyboard-focus,var(--spectrum-stepper-button-background-color-keyboard-focus)
)
);--mod-infield-button-border-color:var(
--highcontrast-stepper-border-color-keyboard-focus,var(
--mod-stepper-border-color-keyboard-focus,var(--spectrum-stepper-border-color-keyboard-focus)
)
);outline:var(
--mod-stepper-focus-indicator-width,var(--spectrum-stepper-focus-indicator-width)
) solid;outline-color:var(
--highcontrast-stepper-focus-indicator-color,var(
--mod-stepper-focus-indicator-color,var(--spectrum-stepper-focus-indicator-color)
)
);outline-offset:var(
--mod-stepper-focus-indicator-gap,var(--spectrum-stepper-focus-indicator-gap)
)}#textfield:focus-visible,:host([keyboard-focused]) #textfield{--mod-infield-button-background-color:var(
--highcontrast-stepper-button-background-color-keyboard-focus,var(
--mod-stepper-button-background-color-keyboard-focus,var(--spectrum-stepper-button-background-color-keyboard-focus)
)
);--mod-infield-button-border-color:var(
--highcontrast-stepper-border-color-keyboard-focus,var(
--mod-stepper-border-color-keyboard-focus,var(--spectrum-stepper-border-color-keyboard-focus)
)
);outline:var(
--mod-stepper-focus-indicator-width,var(--spectrum-stepper-focus-indicator-width)
) solid;outline-color:var(
--highcontrast-stepper-focus-indicator-color,var(
--mod-stepper-focus-indicator-color,var(--spectrum-stepper-focus-indicator-color)
)
);outline-offset:var(
--mod-stepper-focus-indicator-gap,var(--spectrum-stepper-focus-indicator-gap)
)}#textfield.focus-visible .input,:host([keyboard-focused]) #textfield .input{outline:none}#textfield.focus-visible .input,:host([keyboard-focused]) #textfield .input{outline:none}#textfield:focus-visible .input,:host([keyboard-focused]) #textfield .input{outline:none}#textfield.focus-visible .buttons,#textfield.focus-visible .input,:host([keyboard-focused]) #textfield .buttons,:host([keyboard-focused]) #textfield .input{border-color:var(
--highcontrast-stepper-border-color-keyboard-focus,var(
--mod-stepper-border-color-keyboard-focus,var(--spectrum-stepper-border-color-keyboard-focus)
)
)}#textfield.focus-visible .buttons,#textfield.focus-visible .input,:host([keyboard-focused]) #textfield .buttons,:host([keyboard-focused]) #textfield .input{border-color:var(
--highcontrast-stepper-border-color-keyboard-focus,var(
--mod-stepper-border-color-keyboard-focus,var(--spectrum-stepper-border-color-keyboard-focus)
)
)}#textfield:focus-visible .buttons,#textfield:focus-visible .input,:host([keyboard-focused]) #textfield .buttons,:host([keyboard-focused]) #textfield .input{border-color:var(
--highcontrast-stepper-border-color-keyboard-focus,var(
--mod-stepper-border-color-keyboard-focus,var(--spectrum-stepper-border-color-keyboard-focus)
)
)}:host([quiet]) #textfield{border-end-end-radius:0;border-end-start-radius:0;border-start-end-radius:0;border-start-start-radius:0}:host([quiet]) #textfield.hide-stepper .input{border-end-end-radius:0;border-inline-end-width:0}:host([quiet]) #textfield:after{block-size:var(
--mod-stepper-focus-indicator-width,var(--spectrum-stepper-focus-indicator-width)
);content:"";inline-size:100%;inset-block-end:calc((var(
--mod-stepper-focus-indicator-gap,
var(--spectrum-stepper-focus-indicator-gap)
) + var(
--mod-stepper-focus-indicator-width,
var(--spectrum-stepper-focus-indicator-width)
))*-1);inset-inline-start:0;position:absolute}:host([quiet]) #textfield .buttons{border:none}:host([quiet]) #textfield .button{padding:0}:host([quiet]) #textfield .button.step-down .spectrum-InfieldButton-fill{border-block-end-width:var(
--mod-stepper-border-width,var(--spectrum-stepper-border-width)
);border-end-end-radius:0;border-end-start-radius:0}:host([quiet]) #textfield .button .spectrum-InfieldButton-fill{justify-content:flex-end}:host([quiet]) #textfield .buttons,:host([quiet]) #textfield .input,:host([quiet]:hover) #textfield .buttons{background-color:#0000}:host([quiet][keyboard-focused]) #textfield{outline:none}:host([quiet][keyboard-focused]) #textfield:after{background-color:var(
--highcontrast-stepper-focus-indicator-color,var(
--mod-stepper-focus-indicator-color,var(--spectrum-stepper-focus-indicator-color)
)
)}#textfield:before{content:""}.buttons{background-color:var(
--highcontrast-stepper-buttons-background-color,var(
--mod-stepper-buttons-background-color,var(--spectrum-stepper-buttons-background-color)
)
);block-size:var(--mod-stepper-height,var(--spectrum-stepper-height));border-color:var(
--highcontrast-stepper-border-color,var(--mod-stepper-border-color,var(--spectrum-stepper-border-color))
);border-end-end-radius:var(
--mod-stepper-border-radius,var(--spectrum-stepper-border-radius)
);border-start-end-radius:var(
--mod-stepper-border-radius,var(--spectrum-stepper-border-radius)
);border-style:var(
--mod-stepper-buttons-border-style,var(--spectrum-stepper-buttons-border-style)
);border-width:var(
--mod-stepper-buttons-border-width,var(--spectrum-stepper-buttons-border-width)
);border-inline-start-width:0;box-sizing:border-box;display:flex;flex-direction:column;inline-size:var(
--mod-stepper-button-width,var(--spectrum-stepper-button-width)
);justify-content:center;transition:border-color var(
--mod-stepper-animation-duration,var(--spectrum-stepper-animation-duration)
) ease-in-out}.button.step-up{padding-block-start:calc(var(
--mod-stepper-button-padding,
var(--spectrum-stepper-button-padding)
) - var(
--mod-stepper-border-width,
var(--spectrum-stepper-border-width)
))}.button.step-down{padding-block-end:calc(var(
--mod-stepper-button-padding,
var(--spectrum-stepper-button-padding)
) - var(
--mod-stepper-border-width,
var(--spectrum-stepper-border-width)
))}#textfield.hide-stepper .input{border-end-end-radius:var(
--mod-stepper-border-radius,var(--spectrum-stepper-border-radius)
);border-inline-end-width:var(
--mod-stepper-border-width,var(--spectrum-stepper-border-width)
);border-start-end-radius:var(
--mod-stepper-border-radius,var(--spectrum-stepper-border-radius)
)}:host{--spectrum-stepper-border-width:var(
--system-spectrum-stepper-border-width
);--spectrum-stepper-buttons-border-style:var(
--system-spectrum-stepper-buttons-border-style
);--spectrum-stepper-buttons-border-width:var(
--system-spectrum-stepper-buttons-border-width
);--spectrum-stepper-buttons-background-color:var(
--system-spectrum-stepper-buttons-background-color
);--spectrum-stepper-border-color:var(
--system-spectrum-stepper-border-color
);--spectrum-stepper-border-color-hover:var(
--system-spectrum-stepper-border-color-hover
);--spectrum-stepper-border-color-focus:var(
--system-spectrum-stepper-border-color-focus
);--spectrum-stepper-border-color-focus-hover:var(
--system-spectrum-stepper-border-color-focus-hover
);--spectrum-stepper-border-color-keyboard-focus:var(
--system-spectrum-stepper-border-color-keyboard-focus
);--spectrum-stepper-button-border-radius-reset:var(
--system-spectrum-stepper-button-border-radius-reset
);--spectrum-stepper-button-background-color-focus:var(
--system-spectrum-stepper-button-background-color-focus
);--spectrum-stepper-button-background-color-keyboard-focus:var(
--system-spectrum-stepper-button-background-color-keyboard-focus
)}:host([disabled]) #textfield{--spectrum-stepper-buttons-background-color:var(
--system-spectrum-stepper-disabled-buttons-background-color
);--spectrum-stepper-buttons-border-width:var(
--system-spectrum-stepper-disabled-buttons-border-width
)}:host{--swc-number-field-width:calc(var(--mod-stepper-height, var(--spectrum-stepper-height))*var(
--mod-stepper-min-width-multiplier,
var(--spectrum-text-field-minimum-width-multiplier)
) + var(
--mod-stepper-button-width,
var(--spectrum-stepper-button-width)
) + var(
--mod-stepper-border-width,
var(--spectrum-stepper-border-width)
)*2);--mod-infield-button-border-width:var(--unset-value-resets-inheritance);inline-size:var(--mod-stepper-width,var(--spectrum-stepper-width))}:host([size=s]){--spectrum-stepper-width:calc(var(--swc-number-field-width)/5*4)}:host([size=l]){--spectrum-stepper-width:calc(var(--swc-number-field-width)*1.25)}:host([size=xl]){--spectrum-stepper-width:calc(var(--swc-number-field-width)*1.25*1.25)}#textfield{inline-size:100%}.input{font-feature-settings:"tnum";font-variant-numeric:tabular-nums}:host([readonly]) .buttons{pointer-events:none;visibility:hidden}:host([readonly]:not([disabled],[invalid],[focused],[keyboard-focused])) #textfield:hover .input{border-color:transparent}:host([hide-stepper]:not([quiet])) #textfield input{border:var(--spectrum-textfield-border-width) solid var(--spectrum-textfield-border-color);border-radius:var(--spectrum-textfield-corner-radius)}
`;var Ve=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,Xe=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?Ke(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&Ve(e,r,c),c};const Ge={"１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","０":"0","、":",","，":",","。":".","．":".","％":"%","＋":"+",ー:"-"},We={s:e=>t.dy`
        <sp-icon-chevron50
            class="stepper-icon spectrum-UIIcon-Chevron${e}50"
        ></sp-icon-chevron50>
    `,m:e=>t.dy`
        <sp-icon-chevron75
            class="stepper-icon spectrum-UIIcon-Chevron${e}75"
        ></sp-icon-chevron75>
    `,l:e=>t.dy`
        <sp-icon-chevron100
            class="stepper-icon spectrum-UIIcon-Chevron${e}100"
        ></sp-icon-chevron100>
    `,xl:e=>t.dy`
        <sp-icon-chevron200
            class="stepper-icon spectrum-UIIcon-Chevron${e}200"
        ></sp-icon-chevron200>
    `};class Ze extends le{constructor(){super(...arguments),this.focused=!1,this._forcedUnit="",this.formatOptions={},this.hideStepper=!1,this.indeterminate=!1,this.keyboardFocused=!1,this.managedInput=!1,this.stepModifier=10,this._value=NaN,this._trackingValue="",this.changeCount=0,this.languageResolver=new me(this),this.wasIndeterminate=!1,this.applyFocusElementLabel=t=>{this.appliedLabel=t},this.isComposing=!1}static get styles(){return[...super.styles,Re,Ne]}set value(t){const e=this.validateInput(t);if(e===this.value)return;this.lastCommitedValue=e;const r=this._value;this._value=e,this.requestUpdate("value",r)}get value(){return this._value}get inputValue(){return this.indeterminate?this.formattedValue:this.inputElement.value}setValue(t=this.value){this.value=t,void 0!==this.lastCommitedValue&&this.lastCommitedValue!==this.value&&(this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.lastCommitedValue=this.value)}get valueAsString(){return this._value.toString()}set valueAsString(t){this.value=this.numberParser.parse(t)}get formattedValue(){return isNaN(this.value)?"":this.numberFormatter.format(this.value)+(this.focused?"":this._forcedUnit)}convertValueToNumber(t){var e;if((0,Fe.IN)()&&"decimal"===this.inputElement.inputMode){const r=this.numberFormatter.formatToParts(1000.1),o=t.split("").find((t=>","===t||"."===t)),s=null==(e=r.find((t=>"decimal"===t.type)))?void 0:e.value;o&&s&&(t=t.replace(o,s))}return this.numberParser.parse(t)}get _step(){var t;return void 0!==this.step?this.step:"percent"===(null==(t=this.formatOptions)?void 0:t.style)?.01:1}handlePointerdown(t){if(0!==t.button)return void t.preventDefault();this.managedInput=!0,this.buttons.setPointerCapture(t.pointerId);const e=this.buttons.children[0].getBoundingClientRect(),r=this.buttons.children[1].getBoundingClientRect();this.findChange=t=>{t.clientX>=e.x&&t.clientY>=e.y&&t.clientX<=e.x+e.width&&t.clientY<=e.y+e.height?this.change=t=>this.increment(t.shiftKey?this.stepModifier:1):t.clientX>=r.x&&t.clientY>=r.y&&t.clientX<=r.x+r.width&&t.clientY<=r.y+r.height&&(this.change=t=>this.decrement(t.shiftKey?this.stepModifier:1))},this.findChange(t),this.startChange(t)}startChange(t){this.changeCount=0,this.doChange(t),this.safty=setTimeout((()=>{this.doNextChange(t)}),400)}doChange(t){this.change(t)}handlePointermove(t){this.findChange(t)}handlePointerup(t){this.buttons.releasePointerCapture(t.pointerId),cancelAnimationFrame(this.nextChange),clearTimeout(this.safty),this.managedInput=!1,this.setValue()}doNextChange(t){return this.changeCount+=1,this.changeCount%5==0&&this.doChange(t),requestAnimationFrame((()=>{this.nextChange=this.doNextChange(t)}))}stepBy(t){if(this.disabled||this.readonly)return;const e=void 0!==this.min?this.min:0;let r=this.value;r+=t*this._step,isNaN(this.value)&&(r=e),this._value=this.validateInput(r),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.indeterminate=!1,this.focus()}increment(t=1){this.stepBy(1*t)}decrement(t=1){this.stepBy(-1*t)}handleKeydown(t){if(!this.isComposing)switch(t.code){case"ArrowUp":t.preventDefault(),this.increment(t.shiftKey?this.stepModifier:1),this.setValue();break;case"ArrowDown":t.preventDefault(),this.decrement(t.shiftKey?this.stepModifier:1),this.setValue()}}onScroll(t){t.preventDefault(),this.managedInput=!0;const e=t.shiftKey?t.deltaX/Math.abs(t.deltaX):t.deltaY/Math.abs(t.deltaY);0!==e&&!isNaN(e)&&(this.stepBy(e*(t.shiftKey?this.stepModifier:1)),clearTimeout(this.queuedChangeEvent),this.queuedChangeEvent=setTimeout((()=>{this.setValue()}),100)),this.managedInput=!1}onFocus(){super.onFocus(),this._trackingValue=this.inputValue,this.keyboardFocused=!this.readonly&&!0,this.addEventListener("wheel",this.onScroll,{passive:!1})}onBlur(){super.onBlur(),this.keyboardFocused=!this.readonly&&!1,this.removeEventListener("wheel",this.onScroll)}handleFocusin(){this.focused=!this.readonly&&!0,this.keyboardFocused=!this.readonly&&!0}handleFocusout(){this.focused=!this.readonly&&!1,this.keyboardFocused=!this.readonly&&!1}handleChange(){const t=this.convertValueToNumber(this.inputValue);this.wasIndeterminate&&(this.wasIndeterminate=!1,this.indeterminateValue=void 0,isNaN(t))?this.indeterminate=!0:(this.setValue(t),this.inputElement.value=this.formattedValue)}handleCompositionStart(){this.isComposing=!0}handleCompositionEnd(){this.isComposing=!1,requestAnimationFrame((()=>{this.inputElement.dispatchEvent(new Event("input",{composed:!0,bubbles:!0}))}))}handleInput(t){var e;if(this.isComposing)return void t.stopPropagation();this.indeterminate&&(this.wasIndeterminate=!0,this.indeterminateValue=this.value,this.inputElement.value=this.inputElement.value.replace("-",""));const{value:r,selectionStart:o}=this.inputElement,s=r.split("").map((t=>Ge[t]||t)).join("");if(this.numberParser.isValidPartialNumber(s)){this.lastCommitedValue=null!=(e=this.lastCommitedValue)?e:this.value;const t=this.convertValueToNumber(s);return!s&&this.indeterminateValue?(this.indeterminate=!0,this._value=this.indeterminateValue):(this.indeterminate=!1,this._value=this.validateInput(t)),this._trackingValue=s,this.inputElement.value=s,void this.inputElement.setSelectionRange(o,o)}this.inputElement.value=this.indeterminate?"-":this._trackingValue;const c=s.length,a=(o||c)-(c-this._trackingValue.length);this.inputElement.setSelectionRange(a,a)}validateInput(t){const e=t<0?-1:1;if(t*=e,void 0!==this.min&&(t=Math.max(this.min,t)),void 0!==this.max&&(t=Math.min(this.max,t)),this.step){const e=(t-(void 0!==this.min?this.min:0))%this.step;if(0===e||(1===Math.round(e/this.step)?t+=this.step-e:t-=e),void 0!==this.max)for(;t>this.max;)t-=this.step}return t*e}get displayValue(){const t=this.focused?"":"-";return this.indeterminate?t:this.formattedValue}clearNumberFormatterCache(){this._numberFormatter=void 0,this._numberParser=void 0}get numberFormatter(){if(!this._numberFormatter||!this._numberFormatterFocused){const{style:t,unit:e,unitDisplay:r,...o}=this.formatOptions;"unit"!==t&&(o.style=t),this._numberFormatterFocused=new Se(this.languageResolver.language,o);try{this._numberFormatter=new Se(this.languageResolver.language,this.formatOptions),this._forcedUnit="",this._numberFormatter.format(1)}catch(r){"unit"===t&&(this._forcedUnit=e),this._numberFormatter=this._numberFormatterFocused}}return this.focused?this._numberFormatterFocused:this._numberFormatter}get numberParser(){if(!this._numberParser||!this._numberParserFocused){const{style:t,unit:e,unitDisplay:r,...o}=this.formatOptions;"unit"!==t&&(o.style=t),this._numberParserFocused=new Ae(this.languageResolver.language,o);try{this._numberParser=new Ae(this.languageResolver.language,this.formatOptions),this._forcedUnit="",this._numberParser.parse("0")}catch(r){"unit"===t&&(this._forcedUnit=e),this._numberParser=this._numberParserFocused}}return this.focused?this._numberParserFocused:this._numberParser}renderField(){return this.autocomplete="off",t.dy`
            ${super.renderField()}
            ${this.hideStepper?t.Ld:t.dy`
                      <span
                          class="buttons"
                          @focusin=${this.handleFocusin}
                          @focusout=${this.handleFocusout}
                          ${xe({start:["pointerdown",this.handlePointerdown],streamInside:[["pointermove","pointerenter","pointerleave","pointerover","pointerout"],this.handlePointermove],end:[["pointerup","pointercancel","pointerleave"],this.handlePointerup]})}
                      >
                          <sp-infield-button
                              inline="end"
                              block="start"
                              class="button step-up"
                              aria-describedby=${this.helpTextId}
                              label=${"Increase "+this.appliedLabel}
                              size=${this.size}
                              tabindex="-1"
                              ?focused=${this.focused}
                              ?disabled=${this.disabled||this.readonly||void 0!==this.max&&this.value===this.max}
                              ?quiet=${this.quiet}
                          >
                              ${We[this.size]("Up")}
                          </sp-infield-button>
                          <sp-infield-button
                              inline="end"
                              block="end"
                              class="button step-down"
                              aria-describedby=${this.helpTextId}
                              label=${"Decrease "+this.appliedLabel}
                              size=${this.size}
                              tabindex="-1"
                              ?focused=${this.focused}
                              ?disabled=${this.disabled||this.readonly||void 0!==this.min&&this.value===this.min}
                              ?quiet=${this.quiet}
                          >
                              ${We[this.size]("Down")}
                          </sp-infield-button>
                      </span>
                  `}
        `}update(t){if((t.has("formatOptions")||t.has("resolvedLanguage"))&&this.clearNumberFormatterCache(),t.has("value")||t.has("max")||t.has("min")){const t=this.numberParser.parse(this.formattedValue.replace(this._forcedUnit,""));this.value=t}super.update(t)}willUpdate(t){this.multiline=!1,t.has(de)&&this.clearNumberFormatterCache()}firstUpdated(t){super.firstUpdated(t),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("compositionstart",this.handleCompositionStart),this.addEventListener("compositionend",this.handleCompositionEnd)}updated(t){if(t.has("min")||t.has("formatOptions")){let t="numeric";const e=void 0!==this.min&&this.min<0,{maximumFractionDigits:r}=this.numberFormatter.resolvedOptions(),o=r>0;(0,Fe.IN)()?e?t="text":o&&(t="decimal"):(0,Fe.Dt)()&&(e?t="numeric":o&&(t="decimal")),this.inputElement.inputMode=t}}}Xe([(0,d.IO)(".buttons")],Ze.prototype,"buttons",2),Xe([(0,d.Cb)({type:Boolean,reflect:!0})],Ze.prototype,"focused",2),Xe([(0,d.Cb)({type:Object,attribute:"format-options"})],Ze.prototype,"formatOptions",2),Xe([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"hide-stepper"})],Ze.prototype,"hideStepper",2),Xe([(0,d.Cb)({type:Boolean,reflect:!0})],Ze.prototype,"indeterminate",2),Xe([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"keyboard-focused"})],Ze.prototype,"keyboardFocused",2),Xe([(0,d.Cb)({type:Number})],Ze.prototype,"max",2),Xe([(0,d.Cb)({type:Number})],Ze.prototype,"min",2),Xe([(0,d.Cb)({type:Number})],Ze.prototype,"step",2),Xe([(0,d.Cb)({type:Number,reflect:!0,attribute:"step-modifier"})],Ze.prototype,"stepModifier",2),Xe([(0,d.Cb)({type:Number})],Ze.prototype,"value",1),(0,y.N)("sp-number-field",Ze);var Ye=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,Qe=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?Je(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&Ye(e,r,c),c};class tr extends D{constructor(){super(...arguments),this.checked=!1,this.readonly=!1}get focusElement(){return this.inputElement}handleChange(){if(this.readonly)return void(this.inputElement.checked=this.checked);this.checked=this.inputElement.checked;const t=new CustomEvent("change",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(t)||(this.checked=!this.inputElement.checked,this.inputElement.checked=this.checked)}render(){return t.dy`
            <input
                id="input"
                type="checkbox"
                .checked=${this.checked}
                @change=${this.handleChange}
            />
        `}}Qe([(0,d.Cb)({type:Boolean,reflect:!0})],tr.prototype,"checked",2),Qe([(0,d.Cb)({type:Boolean,reflect:!0})],tr.prototype,"readonly",2),Qe([(0,d.IO)("#input")],tr.prototype,"inputElement",2),(0,y.N)("sp-icon-checkmark75",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Checkmark75"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path
      d="M3.667 9.07a.96.96 0 01-.737-.344L.753 6.114a.96.96 0 111.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 011.51 1.186L4.422 8.704a.962.962 0 01-.741.367z"
    />
  </svg>`)()}}),(0,y.N)("sp-icon-checkmark200",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Checkmark200"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path
      d="M4.313 10.98a1.042 1.042 0 01-.8-.375L.647 7.165a1.042 1.042 0 011.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 011.64 1.287l-6.24 7.94a1.04 1.04 0 01-.804.399z"
    />
  </svg>`)()}}),(0,y.N)("sp-icon-checkmark300",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Checkmark300"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path
      d="M5.102 12.514a1.087 1.087 0 01-.834-.39L.988 8.19A1.085 1.085 0 012.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 011.707 1.34L5.955 12.1a1.089 1.089 0 01-.838.415z"
    />
  </svg>`)()}}),(0,y.N)("sp-icon-dash75",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Dash75"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path d="M6.99 4.96H1.01a.96.96 0 010-1.92h5.98a.96.96 0 010 1.92z" />
  </svg>`)()}}),(0,y.N)("sp-icon-dash100",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Dash100"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path d="M8.5 6h-7a1 1 0 010-2h7a1 1 0 010 2z" />
  </svg>`)()}}),(0,y.N)("sp-icon-dash200",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Dash200"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path d="M10.021 7.042H1.98a1.042 1.042 0 110-2.083h8.043a1.042 1.042 0 010 2.083z" />
  </svg>`)()}}),(0,y.N)("sp-icon-dash300",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Dash300"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path d="M10.61 7.085H1.39a1.085 1.085 0 010-2.17h9.22a1.085 1.085 0 010 2.17z" />
  </svg>`)()}});const er=t.iv`
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
);--spectrum-checkbox-control-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-checkbox-checkmark-color:var(--spectrum-gray-75);--spectrum-checkbox-invalid-color-default:var(
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
);--spectrum-checkbox-control-selected-color-default:var(
--spectrum-neutral-background-color-selected-default
);--spectrum-checkbox-control-selected-color-hover:var(
--spectrum-neutral-background-color-selected-hover
);--spectrum-checkbox-control-selected-color-down:var(
--spectrum-neutral-background-color-selected-down
);--spectrum-checkbox-control-selected-color-focus:var(
--spectrum-neutral-background-color-selected-key-focus
);--spectrum-checkbox-line-height:var(--spectrum-line-height-100);--spectrum-checkbox-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-checkbox-control-corner-radius:var(--spectrum-corner-radius-75);--spectrum-checkbox-focus-indicator-gap:var(
--spectrum-focus-indicator-gap
);--spectrum-checkbox-focus-indicator-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-checkbox-border-width:var(--spectrum-border-width-200);--spectrum-checkbox-selected-border-width:calc(var(--spectrum-checkbox-control-size)/2);--spectrum-checkbox-animation-duration:var(
--spectrum-animation-duration-100
)}:host([size=s]){--spectrum-checkbox-font-size:var(--spectrum-font-size-75);--spectrum-checkbox-height:var(--spectrum-component-height-75);--spectrum-checkbox-control-size:var(
--spectrum-checkbox-control-size-small
);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-75)}:host{--spectrum-checkbox-font-size:var(--spectrum-font-size-100);--spectrum-checkbox-height:var(--spectrum-component-height-100);--spectrum-checkbox-control-size:var(
--spectrum-checkbox-control-size-medium
);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-100)}:host([size=l]){--spectrum-checkbox-font-size:var(--spectrum-font-size-200);--spectrum-checkbox-height:var(--spectrum-component-height-200);--spectrum-checkbox-control-size:var(
--spectrum-checkbox-control-size-large
);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-200);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-200)}:host([size=xl]){--spectrum-checkbox-font-size:var(--spectrum-font-size-300);--spectrum-checkbox-height:var(--spectrum-component-height-300);--spectrum-checkbox-control-size:var(
--spectrum-checkbox-control-size-extra-large
);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-300);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-300)}:host{align-items:flex-start;color:var(
--highcontrast-checkbox-content-color-default,var(
--mod-checkbox-content-color-default,var(--spectrum-checkbox-content-color-default)
)
);max-inline-size:100%;min-block-size:var(--mod-checkbox-height,var(--spectrum-checkbox-height));position:relative}:host(:hover) #box:before{border-color:var(
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
)}:host:active #box:before{border-color:var(
--highcontrast-checkbox-highlight-color-down,var(
--mod-checkbox-control-color-down,var(--spectrum-checkbox-control-color-down)
)
)}:host:active #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-down,var(
--mod-checkbox-control-selected-color-down,var(--spectrum-checkbox-control-selected-color-down)
)
)}:host:active #label{color:var(
--highcontrast-checkbox-content-color-down,var(
--mod-checkbox-content-color-down,var(--spectrum-checkbox-content-color-down)
)
)}:host([invalid][invalid]) #box:before,:host([invalid][invalid]) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-invalid-color-default,var(--spectrum-checkbox-invalid-color-default)
)
)}:host([invalid][invalid]) #input.focus-visible+#box:before,:host([invalid][invalid][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-color-hover,var(
--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)
)
)}:host([invalid][invalid]) #input.focus-visible+#box:before,:host([invalid][invalid][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-color-hover,var(
--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)
)
)}:host([invalid][invalid]) #input:focus-visible+#box:before,:host([invalid][invalid][indeterminate]) #input:focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-color-hover,var(
--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)
)
)}:host([invalid][invalid]:hover) #box:before,:host([invalid][invalid]:hover) #input:checked+#box:before{border-color:var(
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
)}:host([readonly]):active #box:before{border-color:var(
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
)}:host([indeterminate]) #box #checkmark,:host([indeterminate]) #input:checked+#box #checkmark{display:none}:host([indeterminate]) #box #partialCheckmark,:host([indeterminate]) #input:checked+#box #partialCheckmark{display:block;opacity:1;transform:scale(1)}:host([indeterminate]) #input.focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)
)
)}:host([indeterminate]) #input.focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)
)
)}:host([indeterminate]) #input:focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)
)
)}:host([indeterminate]:hover) #box:before,:host([indeterminate]:hover) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-hover,var(
--mod-checkbox-control-selected-color-hover,var(--spectrum-checkbox-control-selected-color-hover)
)
)}:host([invalid][invalid][indeterminate]) #box:before,:host([invalid][invalid][indeterminate]) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-invalid-color-default,var(--spectrum-checkbox-invalid-color-default)
)
);border-width:var(
--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width)
)}:host([invalid][invalid][indeterminate]:hover) #box:before,:host([invalid][invalid][indeterminate]:hover) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)
)
)}:host([invalid][invalid][indeterminate]:hover) #label{color:var(
--highcontrast-checkbox-content-color-hover,var(
--mod-checkbox-content-color-hover,var(--spectrum-checkbox-content-color-hover)
)
)}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-default,var(
--mod-checkbox-emphasized-color-default,var(--spectrum-checkbox-emphasized-color-default)
)
)}:host([emphasized]:hover) #input:checked+#box:before,:host([emphasized][indeterminate]:hover) #box:before,:host([emphasized][indeterminate]:hover) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-hover,var(
--mod-checkbox-emphasized-color-hover,var(--spectrum-checkbox-emphasized-color-hover)
)
)}:host([emphasized]) #input.focus-visible:checked+#box:before,:host([emphasized][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-emphasized-color-focus,var(--spectrum-checkbox-emphasized-color-focus)
)
)}:host([emphasized]) #input.focus-visible:checked+#box:before,:host([emphasized][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-emphasized-color-focus,var(--spectrum-checkbox-emphasized-color-focus)
)
)}:host([emphasized]) #input:focus-visible:checked+#box:before,:host([emphasized][indeterminate]) #input:focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-emphasized-color-focus,var(--spectrum-checkbox-emphasized-color-focus)
)
)}:host([emphasized][invalid][invalid]) #input.focus-visible:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-invalid-color-focus,var(--spectrum-checkbox-invalid-color-focus)
)
)}:host([emphasized][invalid][invalid]) #input.focus-visible:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-invalid-color-focus,var(--spectrum-checkbox-invalid-color-focus)
)
)}:host([emphasized][invalid][invalid]) #input:focus-visible:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-invalid-color-focus,var(--spectrum-checkbox-invalid-color-focus)
)
)}:host([emphasized][invalid][invalid]:hover) #input:checked+#box:before,:host([emphasized][invalid][invalid][indeterminate]:hover) #box:before,:host([emphasized][invalid][invalid][indeterminate]:hover) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-color-hover,var(
--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)
)
)}:host([emphasized]:hover) #input:checked+#box:before,:host([emphasized][indeterminate]:hover) #box:before,:host([emphasized][indeterminate]:hover) #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-hover,var(
--mod-checkbox-emphasized-color-hover,var(--spectrum-checkbox-emphasized-color-hover)
)
)}:host([emphasized]):active #input:checked+#box:before,:host([emphasized][indeterminate]):active #box:before,:host([emphasized][indeterminate]):active #input:checked+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-default,var(
--mod-checkbox-emphasized-color-down,var(--spectrum-checkbox-emphasized-color-down)
)
)}:host([emphasized][invalid][invalid]):active #box:before,:host([emphasized][invalid][invalid]):active #input:checked+#box:before{border-color:var(
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
) ease-in-out}#label:lang(ja),#label:lang(ko),#label:lang(zh){line-height:var(
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
--highcontrast-checkbox-color-focus,var(
--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)
)
)}#input.focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-color-focus,var(
--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)
)
)}#input:focus-visible+#box:before{border-color:var(
--highcontrast-checkbox-color-focus,var(
--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)
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
)}#input.focus-visible:checked+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)
)
)}#input.focus-visible:checked+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)
)
)}#input:focus-visible:checked+#box:before{border-color:var(
--highcontrast-checkbox-highlight-color-focus,var(
--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)
)
)}#box{--spectrum-checkbox-spacing:calc(var(--mod-checkbox-height, var(--spectrum-checkbox-height)) - var(
--mod-checkbox-control-size,
var(--spectrum-checkbox-control-size)
));align-items:center;block-size:var(
--mod-checkbox-control-size,var(--spectrum-checkbox-control-size)
);box-sizing:border-box;display:flex;flex-grow:0;flex-shrink:0;inline-size:var(
--mod-checkbox-control-size,var(--spectrum-checkbox-control-size)
);justify-content:center;margin:calc(var(--mod-checkbox-spacing, var(--spectrum-checkbox-spacing))/2) 0;position:relative}#box:before{border-color:var(
--highcontrast-checkbox-color-default,var(
--mod-checkbox-control-color-default,var(--spectrum-checkbox-control-color-default)
)
);border-radius:var(
--mod-checkbox-control-corner-radius,var(--spectrum-checkbox-control-corner-radius)
);border-style:solid;border-width:var(
--mod-checkbox-border-width,var(--spectrum-checkbox-border-width)
);box-sizing:border-box;content:"";display:block;forced-color-adjust:none;height:var(
--mod-checkbox-control-size,var(--spectrum-checkbox-control-size)
);position:absolute;transition:border var(
--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration)
) ease-in-out,box-shadow var(
--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration)
) ease-in-out;width:var(
--mod-checkbox-control-size,var(--spectrum-checkbox-control-size)
);z-index:0}#box:after{border-radius:calc(var(
--mod-checkbox-control-corner-radius,
var(--spectrum-checkbox-control-corner-radius)
) + var(
--mod-checkbox-focus-indicator-gap,
var(--spectrum-checkbox-focus-indicator-gap)
));content:"";display:block;inset:0;margin:var(
--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap)
);position:absolute;transform:translate(0);transition:box-shadow var(
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
) ease-in-out}#partialCheckmark{display:none}#input:checked:disabled+#box:before,#input:disabled+#box:before{background-color:var(
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
)}:host{--highcontrast-checkbox-content-color-default:CanvasText;--highcontrast-checkbox-content-color-hover:CanvasText;--highcontrast-checkbox-content-color-down:CanvasText;--highcontrast-checkbox-content-color-focus:CanvasText;--highcontrast-checkbox-background-color-default:Canvas;--highcontrast-checkbox-color-default:ButtonText;--highcontrast-checkbox-color-hover:ButtonText;--highcontrast-checkbox-color-focus:Highlight;--highcontrast-checkbox-highlight-color-default:Highlight;--highcontrast-checkbox-highlight-color-hover:Highlight;--highcontrast-checkbox-highlight-color-down:Highlight;--highcontrast-checkbox-highlight-color-focus:Highlight;--highcontrast-checkbox-disabled-color-default:GrayText;--highcontrast-checkbox-focus-indicator-color:CanvasText}}:host{--spectrum-checkbox-control-color-default:var(
--system-spectrum-checkbox-control-color-default
);--spectrum-checkbox-control-color-hover:var(
--system-spectrum-checkbox-control-color-hover
);--spectrum-checkbox-control-color-down:var(
--system-spectrum-checkbox-control-color-down
);--spectrum-checkbox-control-color-focus:var(
--system-spectrum-checkbox-control-color-focus
)}:host{display:inline-flex;vertical-align:top}:host(:focus){outline:none}:host([disabled]){pointer-events:none}:host(:empty) label{display:none}
`,rr=t.iv`
.spectrum-UIIcon-Dash50{height:var(--spectrum-alias-ui-icon-dash-size-50);width:var(--spectrum-alias-ui-icon-dash-size-50)}.spectrum-UIIcon-Dash75{height:var(--spectrum-alias-ui-icon-dash-size-75);width:var(--spectrum-alias-ui-icon-dash-size-75)}.spectrum-UIIcon-Dash100{height:var(--spectrum-alias-ui-icon-dash-size-100);width:var(--spectrum-alias-ui-icon-dash-size-100)}.spectrum-UIIcon-Dash200{height:var(--spectrum-alias-ui-icon-dash-size-200);width:var(--spectrum-alias-ui-icon-dash-size-200)}.spectrum-UIIcon-Dash300{height:var(--spectrum-alias-ui-icon-dash-size-300);width:var(--spectrum-alias-ui-icon-dash-size-300)}.spectrum-UIIcon-Dash400{height:var(--spectrum-alias-ui-icon-dash-size-400);width:var(--spectrum-alias-ui-icon-dash-size-400)}.spectrum-UIIcon-Dash500{height:var(--spectrum-alias-ui-icon-dash-size-500);width:var(--spectrum-alias-ui-icon-dash-size-500)}.spectrum-UIIcon-Dash600{height:var(--spectrum-alias-ui-icon-dash-size-600);width:var(--spectrum-alias-ui-icon-dash-size-600)}
`;var or=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,cr=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?sr(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&or(e,r,c),c};const ar={s:t.dy`
        <sp-icon-checkmark75
            id="checkmark"
            class="spectrum-Icon spectrum-UIIcon-Checkmark75"
        ></sp-icon-checkmark75>
    `,m:t.dy`
        <sp-icon-checkmark100
            id="checkmark"
            class="spectrum-Icon spectrum-UIIcon-Checkmark100"
        ></sp-icon-checkmark100>
    `,l:t.dy`
        <sp-icon-checkmark200
            id="checkmark"
            class="spectrum-Icon spectrum-UIIcon-Checkmark200"
        ></sp-icon-checkmark200>
    `,xl:t.dy`
        <sp-icon-checkmark300
            id="checkmark"
            class="spectrum-Icon spectrum-UIIcon-Checkmark300"
        ></sp-icon-checkmark300>
    `},ir={s:t.dy`
        <sp-icon-dash75
            id="partialCheckmark"
            class="spectrum-Icon spectrum-UIIcon-Dash75"
        ></sp-icon-dash75>
    `,m:t.dy`
        <sp-icon-dash100
            id="partialCheckmark"
            class="spectrum-Icon spectrum-UIIcon-Dash100"
        ></sp-icon-dash100>
    `,l:t.dy`
        <sp-icon-dash200
            id="partialCheckmark"
            class="spectrum-Icon spectrum-UIIcon-Dash200"
        ></sp-icon-dash200>
    `,xl:t.dy`
        <sp-icon-dash300
            id="partialCheckmark"
            class="spectrum-Icon spectrum-UIIcon-Dash300"
        ></sp-icon-dash300>
    `};class nr extends(z(tr,{noDefaultSize:!0})){constructor(){super(...arguments),this.indeterminate=!1,this.invalid=!1,this.emphasized=!1}static get styles(){return[er,se,rr]}handleChange(){this.indeterminate=!1,super.handleChange()}render(){return t.dy`
            ${super.render()}
            <span id="box">
                ${ar[this.size]}
                ${ir[this.size]}
            </span>
            <label id="label" for="input"><slot></slot></label>
        `}updated(t){super.updated(t),t.has("invalid")&&(this.invalid?this.inputElement.setAttribute("aria-invalid","true"):this.inputElement.removeAttribute("aria-invalid")),t.has("indeterminate")&&(this.inputElement.indeterminate=this.indeterminate)}}cr([(0,d.Cb)({type:Boolean,reflect:!0})],nr.prototype,"indeterminate",2),cr([(0,d.Cb)({type:Boolean,reflect:!0})],nr.prototype,"invalid",2),cr([(0,d.Cb)({type:Boolean,reflect:!0})],nr.prototype,"emphasized",2),(0,y.N)("sp-checkbox",nr);const lr=t.iv`
:host{--spectrum-link-animation-duration:var(--spectrum-animation-duration-100);--spectrum-link-text-color-primary-default:var(
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
);--spectrum-link-text-color-white:var(--spectrum-white);--spectrum-link-text-color-black:var(--spectrum-black)}@media (forced-colors:active){:host{--highcontrast-link-text-color-primary-default:LinkText;--highcontrast-link-text-color-primary-hover:LinkText;--highcontrast-link-text-color-primary-active:LinkText;--highcontrast-link-text-color-primary-focus:LinkText;--highcontrast-link-text-color-secondary-default:LinkText;--highcontrast-link-text-color-secondary-hover:LinkText;--highcontrast-link-text-color-secondary-active:LinkText;--highcontrast-link-text-color-secondary-focus:LinkText;--highcontrast-link-text-color-white:LinkText;--highcontrast-link-text-color-black:LinkText}}a{-webkit-text-decoration-skip:objects;background-color:#0000;color:var(
--highcontrast-link-text-color-primary-default,var(
--mod-link-text-color-primary-default,var(--spectrum-link-text-color-primary-default)
)
);cursor:pointer;outline:none;-webkit-text-decoration:underline;text-decoration:underline;transition:color var(
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
);-webkit-text-decoration:underline;text-decoration:underline;text-decoration-color:var(--highcontrast-link-focus-color,inherit);text-decoration-style:double}a:focus-visible{color:var(
--highcontrast-link-text-color-primary-focus,var(
--mod-link-text-color-primary-focus,var(--spectrum-link-text-color-primary-focus)
)
);-webkit-text-decoration:underline;text-decoration:underline;text-decoration-color:var(--highcontrast-link-focus-color,inherit);text-decoration-style:double}:host([variant=secondary]) a{color:var(
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
)}:host([quiet]) a{-webkit-text-decoration:none;text-decoration:none}:host([quiet]) a:hover{-webkit-text-decoration:underline;text-decoration:underline}:host([static=white]) a{color:var(
--highcontrast-link-text-color-white,var(--mod-link-text-color-white,var(--spectrum-link-text-color-white))
)}:host([static=white]) a:active,:host([static=white]) a:focus,:host([static=white]) a:hover{color:var(
--highcontrast-link-text-color-white,var(--mod-link-text-color-white,var(--spectrum-link-text-color-white))
)}:host([static=black]) a{color:var(
--highcontrast-link-text-color-black,var(--mod-link-text-color-black,var(--spectrum-link-text-color-black))
)}:host([static=black]) a:active,:host([static=black]) a:focus,:host([static=black]) a:hover{color:var(
--highcontrast-link-text-color-black,var(--mod-link-text-color-black,var(--spectrum-link-text-color-black))
)}:host{display:inline}:host(:focus){outline:none}:host([href]) a.focus-visible{-webkit-text-decoration:underline;text-decoration:underline;text-decoration-style:double}:host([href]) a:focus-visible{-webkit-text-decoration:underline;text-decoration:underline;text-decoration-style:double}
`;var ur=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,mr=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?dr(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&ur(e,r,c),c};class pr extends(gt(D)){constructor(){super(...arguments),this.quiet=!1}static get styles(){return[lr]}get focusElement(){return this.anchorElement}render(){return this.renderAnchor({id:"anchor"})}}mr([(0,d.IO)("#anchor")],pr.prototype,"anchorElement",2),mr([(0,d.Cb)({type:String,reflect:!0})],pr.prototype,"variant",2),mr([(0,d.Cb)({type:String,reflect:!0})],pr.prototype,"static",2),mr([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"quiet"})],pr.prototype,"quiet",2),(0,y.N)("sp-link",pr);const hr=t.iv`
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
`;var br=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,vr=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?gr(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&br(e,r,c),c};class fr extends u.o{constructor(){super(...arguments),this.label=""}static get styles(){return[hr]}render(){return"file"===this.variant?(e=this.label,t.dy`
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
        `;var e}}vr([(0,d.Cb)({type:String,reflect:!0})],fr.prototype,"variant",2),vr([(0,d.Cb)()],fr.prototype,"label",2),(0,y.N)("sp-asset",fr);const kr=t.iv`
:host{--spectrum-colorloupe-width:var(--spectrum-color-loupe-width);--spectrum-colorloupe-height:var(--spectrum-color-loupe-height);--spectrum-colorloupe-offset:var(
--spectrum-color-loupe-bottom-to-color-handle
);--spectrum-colorloupe-animation-distance:8px;--spectrum-colorloupe-drop-shadow-x:var(--spectrum-drop-shadow-x);--spectrum-colorloupe-drop-shadow-y:var(
--spectrum-color-loupe-drop-shadow-y
);--spectrum-colorloupe-drop-shadow-blur:var(
--spectrum-color-loupe-drop-shadow-blur
);--spectrum-colorloupe-drop-shadow-color:var(
--spectrum-color-loupe-drop-shadow-color
);--spectrum-colorloupe-outer-border-width:var(
--spectrum-color-loupe-outer-border-width
);--spectrum-colorloupe-inner-border-width:var(
--spectrum-color-loupe-inner-border-width
);--spectrum-colorloupe-outer-border-color:var(
--spectrum-color-loupe-outer-border
);--spectrum-colorloupe-inner-border-color:var(
--spectrum-color-loupe-inner-border
);--spectrum-colorloupe-checkerboard-dark-color:var(
--spectrum-opacity-checkerboard-square-dark
);--spectrum-colorloupe-checkerboard-light-color:var(
--spectrum-opacity-checkerboard-square-light
)}:host{block-size:var(--spectrum-colorloupe-height);filter:drop-shadow(var(
--mod-colorloupe-drop-shadow-x,var(--spectrum-colorloupe-drop-shadow-x)
) var(
--mod-colorloupe-drop-shadow-y,var(--spectrum-colorloupe-drop-shadow-y)
) var(
--mod-colorloupe-drop-shadow-blur,var(--spectrum-colorloupe-drop-shadow-blur)
) var(
--mod-colorloupe-drop-shadow-color,var(--spectrum-colorloupe-drop-shadow-color)
));inline-size:var(--spectrum-colorloupe-width);inset-block-end:calc(var(--spectrum-color-handle-size) - var(--spectrum-color-handle-outer-border-width) + var(--mod-colorloupe-offset, var(--spectrum-colorloupe-offset)));inset-inline-end:calc(50% - var(--spectrum-colorloupe-width)/2);opacity:0;pointer-events:none;position:absolute;transform:translateY(var(
--mod-colorloupe-animation-distance,var(--spectrum-colorloupe-animation-distance)
));transform-origin:bottom;transition:transform .1s ease-in-out,opacity .125s ease-in-out}:host([dir=rtl]){inset-inline-end:calc(50% - var(--spectrum-colorloupe-width)/2 - 1px)}:host([open]){opacity:1;transform:translate(0)}.spectrum-ColorLoupe-inner-border{fill:var(--spectrum-picked-color);stroke:var(
--mod-colorloupe-inner-border-color,var(--spectrum-colorloupe-inner-border-color)
);stroke-width:var(
--mod-colorloupe-inner-border-width,var(--spectrum-colorloupe-inner-border-width)
)}.spectrum-ColorLoupe-outer-border{fill:none;stroke:var(
--highcontrast-colorloupe-outer-border-color,var(
--mod-colorloupe-outer-border-color,var(--spectrum-colorloupe-outer-border-color)
)
);stroke-width:calc(var(
--mod-colorloupe-outer-border-width,
var(--spectrum-colorloupe-outer-border-width)
) + 2px)}.spectrum-ColorLoupe-checkerboard-pattern{fill:var(--spectrum-colorloupe-checkerboard-dark-color)}.spectrum-ColorLoupe-checkerboard-background{fill:var(--spectrum-colorloupe-checkerboard-light-color)}.spectrum-ColorLoupe-checkerboard-fill{fill:var(--spectrum-colorloupe-checkerboard-fill)}@media (forced-colors:active){:host{--highcontrast-colorloupe-outer-border-color:CanvasText}}svg{height:inherit;width:inherit}.loupe-clipped{clip-path:path("M23 61.575C19.0044 57.435 15.2591 53.0606 11.784 48.475C8.68949 44.4532 5.96348 40.1608 3.639 35.65C1.224 30.8 0 26.549 0 23C0.00319993 17.6937 1.84059 12.5516 5.20091 8.44488C8.56122 4.33815 13.2378 1.51928 18.4385 0.465803C23.6392 -0.587678 29.0442 0.189006 33.7378 2.66428C38.4314 5.13955 42.125 9.16122 44.193 14.048C45.3915 16.88 46.0061 19.9248 46 23C46 26.551 44.774 30.811 42.355 35.661C40.0274 40.1747 37.298 44.4698 34.2 48.494C30.7297 53.0728 26.9898 57.4409 23 61.575ZZ")}.opacity-checkerboard{left:2px;position:absolute;top:2px}
`,yr=t.iv`
.opacity-checkerboard{--spectrum-opacity-checkerboard-dark:var(
--spectrum-opacity-checkerboard-square-dark
);--spectrum-opacity-checkerboard-light:var(
--spectrum-opacity-checkerboard-square-light
);--spectrum-opacity-checkerboard-size:var(
--spectrum-opacity-checkerboard-square-size
);--spectrum-opacity-checkerboard-position:left top;background:repeating-conic-gradient(var(
--mod-opacity-checkerboard-light,var(--spectrum-opacity-checkerboard-light)
) 0 25%,var(
--mod-opacity-checkerboard-dark,var(--spectrum-opacity-checkerboard-dark)
) 0 50%) var(
--mod-opacity-checkerboard-position,var(--spectrum-opacity-checkerboard-position)
) /calc(var(
--mod-opacity-checkerboard-size,
var(--spectrum-opacity-checkerboard-size)
)*2) calc(var(
--mod-opacity-checkerboard-size,
var(--spectrum-opacity-checkerboard-size)
)*2);block-size:100%;inline-size:100%}@media (forced-colors:active){.opacity-checkerboard{forced-color-adjust:none}}
`;var xr=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,zr=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?wr(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&xr(e,r,c),c};class Cr extends u.o{constructor(){super(...arguments),this.open=!1,this.color="rgba(255, 0, 0, 0.5)"}static get styles(){return[yr,kr]}render(){return t.dy`
            <div class="opacity-checkerboard loupe-clipped"></div>
            <div class="spectrum-ColorLoupe-inner-border loupe-clipped"></div>
            <div class="spectrum-ColorLoupe-outer-border loupe-clipped"></div>
            <svg
                aria-hidden="true"
                class="spectrum-ColorLoupe is-open"
                overflow="visible"
                style="--spectrum-picked-color: ${this.color}; position: absolute;"
            >
                <defs>
                    <path
                        id="loupe-path"
                        d="M23 61.575C19.0044 57.435 15.2591 53.0606 11.784 48.475C8.68949 44.4532 5.96348 40.1608 3.639 35.65C1.224 30.8 0 26.549 0 23C0.00319993 17.6937 1.84059 12.5516 5.20091 8.44488C8.56122 4.33815 13.2378 1.51928 18.4385 0.465803C23.6392 -0.587678 29.0442 0.189006 33.7378 2.66428C38.4314 5.13955 42.125 9.16122 44.193 14.048C45.3915 16.88 46.0061 19.9248 46 23C46 26.551 44.774 30.811 42.355 35.661C40.0274 40.1747 37.298 44.4698 34.2 48.494C30.7297 53.0728 26.9898 57.4409 23 61.575ZZ"
                        transform="translate(2, 2)"
                    />
                    <mask id="loupe-mask">
                        <rect
                            x="0"
                            y="0"
                            height="100"
                            width="100"
                            fill="white"
                        />
                        <use xlink:href="#path" fill="black" />
                    </mask>
                </defs>

                <g class="spectrum-ColorLoupe-loupe">
                    <g>
                        <use
                            xlink:href="#loupe-path"
                            mask="url(#loupe-mask)"
                            transform="translate(2, 2)"
                            class="spectrum-ColorLoupe-inner-border"
                        />
                        <use
                            xlink:href="#loupe-path"
                            mask="url(#loupe-mask)"
                            class="spectrum-ColorLoupe-outer-border"
                        />
                    </g>
                </g>
            </svg>
        `}}zr([(0,d.Cb)({type:Boolean,reflect:!0})],Cr.prototype,"open",2),zr([(0,d.Cb)({type:String})],Cr.prototype,"color",2),(0,y.N)("sp-color-loupe",Cr);const Ir=t.iv`
:host{--spectrum-opacity-checkerboard-dark:var(
--spectrum-opacity-checkerboard-square-dark
);--spectrum-opacity-checkerboard-light:var(
--spectrum-opacity-checkerboard-square-light
);--spectrum-opacity-checkerboard-size:var(
--spectrum-opacity-checkerboard-square-size
);--spectrum-opacity-checkerboard-position:left top}:host{background:repeating-conic-gradient(var(
--mod-opacity-checkerboard-light,var(--spectrum-opacity-checkerboard-light)
) 0 25%,var(
--mod-opacity-checkerboard-dark,var(--spectrum-opacity-checkerboard-dark)
) 0 50%) var(
--mod-opacity-checkerboard-position,var(--spectrum-opacity-checkerboard-position)
) /calc(var(
--mod-opacity-checkerboard-size,
var(--spectrum-opacity-checkerboard-size)
)*2) calc(var(
--mod-opacity-checkerboard-size,
var(--spectrum-opacity-checkerboard-size)
)*2);block-size:100%;inline-size:100%}@media (forced-colors:active){:host{forced-color-adjust:none}}
`,Sr=t.iv`
:host{--spectrum-colorhandle-size:var(--spectrum-color-handle-size);--spectrum-colorhandle-focused-size:var(
--spectrum-color-handle-size-key-focus
);--spectrum-colorhandle-hitarea-size:var(
--spectrum-color-control-track-width
);--spectrum-colorhandle-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-colorhandle-animation-easing:ease-in-out;--spectrum-colorhandle-outer-border-color:rgba(var(--spectrum-black-rgb),var(--spectrum-color-handle-outer-border-opacity));--spectrum-colorhandle-outer-border-width:var(
--spectrum-color-handle-outer-border-width
);--spectrum-colorhandle-inner-border-color:rgba(var(--spectrum-black-rgb),var(--spectrum-color-handle-inner-border-opacity));--spectrum-colorhandle-inner-border-width:var(
--spectrum-color-handle-inner-border-width
);--spectrum-colorhandle-border-width:var(
--spectrum-color-handle-border-width
);--spectrum-colorhandle-border-color:var(--spectrum-white);--spectrum-colorhandle-border-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-colorhandle-fill-color-disabled:var(
--spectrum-disabled-background-color
);--mod-opacity-checkerboard-position:50%}:host{block-size:var(--mod-colorhandle-size,var(--spectrum-colorhandle-size));border-color:var(
--highcontrast-colorhandle-border-color,var(
--mod-colorhandle-border-color,var(--spectrum-colorhandle-border-color)
)
);border-radius:100%;border-style:solid;border-width:var(
--mod-colorhandle-border-width,var(--spectrum-colorhandle-border-width)
);box-shadow:0 0 0 var(
--mod-colorhandle-outer-border-width,var(--spectrum-colorhandle-outer-border-width)
) var(
--mod-colorhandle-outer-border-color,var(--spectrum-colorhandle-outer-border-color)
);box-sizing:border-box;display:block;inline-size:var(--mod-colorhandle-size,var(--spectrum-colorhandle-size));margin-block:calc(var(--mod-colorhandle-size, var(--spectrum-colorhandle-size))*-1/2);margin-inline:calc(var(--mod-colorhandle-size, var(--spectrum-colorhandle-size))*-1/2);position:absolute;transition:all var(
--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration)
) var(
--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)
);z-index:1}:host:after{block-size:var(
--mod-colorhandle-hitarea-size,var(--spectrum-colorhandle-hitarea-size)
);border-radius:var(--mod-colorhandle-hitarea-border-radius,100%);content:"";display:block;inline-size:var(
--mod-colorhandle-hitarea-size,var(--spectrum-colorhandle-hitarea-size)
);inset-block:calc(50% - var(
--mod-colorhandle-hitarea-size,
var(--spectrum-colorhandle-hitarea-size)
)/2);inset-inline:calc(50% - var(
--mod-colorhandle-hitarea-size,
var(--spectrum-colorhandle-hitarea-size)
)/2);position:absolute}:host(.focus-visible),:host([focused]){block-size:var(
--mod-colorhandle-focused-size,var(--spectrum-colorhandle-focused-size)
);inline-size:var(
--mod-colorhandle-focused-size,var(--spectrum-colorhandle-focused-size)
);margin-block:calc(var(--mod-colorhandle-size, var(--spectrum-colorhandle-size))*-1);margin-inline:calc(var(--mod-colorhandle-size, var(--spectrum-colorhandle-size))*-1);outline:none}:host(.focus-visible),:host([focused]){block-size:var(
--mod-colorhandle-focused-size,var(--spectrum-colorhandle-focused-size)
);inline-size:var(
--mod-colorhandle-focused-size,var(--spectrum-colorhandle-focused-size)
);margin-block:calc(var(--mod-colorhandle-size, var(--spectrum-colorhandle-size))*-1);margin-inline:calc(var(--mod-colorhandle-size, var(--spectrum-colorhandle-size))*-1);outline:none}:host(:focus-visible),:host([focused]){block-size:var(
--mod-colorhandle-focused-size,var(--spectrum-colorhandle-focused-size)
);inline-size:var(
--mod-colorhandle-focused-size,var(--spectrum-colorhandle-focused-size)
);margin-block:calc(var(--mod-colorhandle-size, var(--spectrum-colorhandle-size))*-1);margin-inline:calc(var(--mod-colorhandle-size, var(--spectrum-colorhandle-size))*-1);outline:none}:host([disabled]){background:var(
--highcontrast-colorhandle-fill-color-disabled,var(
--mod-colorhandle-fill-color-disabled,var(--spectrum-colorhandle-fill-color-disabled)
)
);border-color:var(
--highcontrast-colorhandle-border-color-disabled,var(
--mod-colorhandle-border-color-disabled,var(--spectrum-colorhandle-border-color-disabled)
)
);box-shadow:none;pointer-events:none}:host([disabled]) .inner{display:none}.inner{background-color:var(--spectrum-picked-color);block-size:100%;border-radius:100%;box-shadow:inset 0 0 0 var(
--mod-colorhandle-inner-border-width,var(--spectrum-colorhandle-inner-border-width)
) var(
--mod-colorhandle-inner-border-color,var(--spectrum-colorhandle-inner-border-color)
);inline-size:100%}@media (forced-colors:active){:host{forced-color-adjust:none}:host([disabled]){--highcontrast-colorhandle-border-color-disabled:GrayText;--highcontrast-colorhandle-fill-color-disabled:Canvas}}:host{touch-action:none;transition:inline-size var(
--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration)
) var(
--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)
),block-size var(
--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration)
) var(
--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)
),border-width var(
--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration)
) var(
--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)
),margin-inline var(
--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration)
) var(
--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)
),margin-block var(
--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration)
) var(
--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)
)}:host(:focus){outline:none}
`;var Er=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,Ar=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?$r(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&Er(e,r,c),c};class jr extends u.o{constructor(){super(...arguments),this.disabled=!1,this.focused=!1,this.open=!1,this.color="rgba(255, 0, 0, 0.5)"}static get styles(){return[Ir,Sr]}handlePointerdown(t){"touch"===t.pointerType&&(this.open=!0),this.setPointerCapture(t.pointerId)}handlePointerup(t){this.open=!1,this.releasePointerCapture(t.pointerId)}render(){return t.dy`
            <div class="inner" style="background-color: ${this.color}"></div>
            <sp-color-loupe
                color=${this.color}
                ?open=${this.open&&!this.disabled}
            ></sp-color-loupe>
        `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("pointerdown",this.handlePointerdown),this.addEventListener("pointerup",this.handlePointerup),this.addEventListener("pointercancel",this.handlePointerup)}}Ar([(0,d.Cb)({type:Boolean,reflect:!0})],jr.prototype,"disabled",2),Ar([(0,d.Cb)({type:Boolean,reflect:!0})],jr.prototype,"focused",2),Ar([(0,d.Cb)({type:Boolean,reflect:!0})],jr.prototype,"open",2),Ar([(0,d.Cb)({type:String})],jr.prototype,"color",2),(0,y.N)("sp-color-handle",jr);var qr=a(959);const _r=t.iv`
#button{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;cursor:pointer;display:inline-flex;font-family:var(
--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)
);justify-content:center;line-height:var(--mod-line-height-100,var(--spectrum-line-height-100));margin:0;overflow:visible;position:relative;-webkit-text-decoration:none;text-decoration:none;text-transform:none;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,border-color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out;-webkit-user-select:none;user-select:none;vertical-align:top}#button:focus{outline:none}#button::-moz-focus-inner{border:0;margin-block:-2px;padding:0}#button:disabled{cursor:default}:host{--spectrum-picker-font-size:var(--spectrum-font-size-100);--spectrum-picker-font-weight:var(--spectrum-regular-font-weight);--spectrum-picker-placeholder-font-style:var(
--spectrum-default-font-style
);--spectrum-picker-line-height:var(--spectrum-line-height-100);--spectrum-picker-block-size:var(--spectrum-component-height-100);--spectrum-picker-inline-size:var(--spectrum-field-width);--spectrum-picker-border-radius:var(--spectrum-corner-radius-100);--spectrum-picker-spacing-top-to-text:var(
--spectrum-component-top-to-text-100
);--spectrum-picker-spacing-bottom-to-text:var(
--spectrum-component-bottom-to-text-100
);--spectrum-picker-spacing-edge-to-text:var(
--spectrum-component-edge-to-text-100
);--spectrum-picker-spacing-edge-to-text-quiet:var(
--spectrum-field-edge-to-text-quiet
);--spectrum-picker-spacing-top-to-text-side-label-quiet:var(
--spectrum-field-label-top-margin-medium
);--spectrum-picker-spacing-label-to-picker:var(
--spectrum-field-label-to-component
);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-100);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-medium
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-medium
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-medium
);--spectrum-picker-spacing-top-to-alert-icon:var(
--spectrum-field-top-to-alert-icon-medium
);--spectrum-picker-spacing-top-to-progress-circle:var(
--spectrum-field-top-to-progress-circle-medium
);--spectrum-picker-spacing-top-to-disclosure-icon:var(
--spectrum-field-top-to-disclosure-icon-100
);--spectrum-picker-spacing-edge-to-disclosure-icon:var(
--spectrum-field-end-edge-to-disclosure-icon-100
);--spectrum-picker-spacing-edge-to-disclosure-icon-quiet:var(
--spectrum-picker-end-edge-to-disclousure-icon-quiet
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
)}:host([size=s]){--spectrum-picker-font-size:var(--spectrum-font-size-75);--spectrum-picker-block-size:var(--spectrum-component-height-75);--spectrum-picker-spacing-top-to-text-side-label-quiet:var(
--spectrum-field-label-top-margin-small
);--spectrum-picker-spacing-top-to-text:var(
--spectrum-component-top-to-text-75
);--spectrum-picker-spacing-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
);--spectrum-picker-spacing-edge-to-text:var(
--spectrum-component-edge-to-text-75
);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-75);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-small
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-small
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-small
);--spectrum-picker-spacing-top-to-alert-icon:var(
--spectrum-field-top-to-alert-icon-small
);--spectrum-picker-spacing-top-to-progress-circle:var(
--spectrum-field-top-to-progress-circle-small
);--spectrum-picker-spacing-top-to-disclosure-icon:var(
--spectrum-field-top-to-disclosure-icon-75
);--spectrum-picker-spacing-edge-to-disclosure-icon:var(
--spectrum-field-end-edge-to-disclosure-icon-75
)}:host([size=l]){--spectrum-picker-font-size:var(--spectrum-font-size-200);--spectrum-picker-block-size:var(--spectrum-component-height-200);--spectrum-picker-spacing-top-to-text-side-label-quiet:var(
--spectrum-field-label-top-margin-large
);--spectrum-picker-spacing-top-to-text:var(
--spectrum-component-top-to-text-200
);--spectrum-picker-spacing-bottom-to-text:var(
--spectrum-component-bottom-to-text-200
);--spectrum-picker-spacing-edge-to-text:var(
--spectrum-component-edge-to-text-200
);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-200);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-large
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-large
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-large
);--spectrum-picker-spacing-top-to-alert-icon:var(
--spectrum-field-top-to-alert-icon-large
);--spectrum-picker-spacing-top-to-progress-circle:var(
--spectrum-field-top-to-progress-circle-large
);--spectrum-picker-spacing-top-to-disclosure-icon:var(
--spectrum-field-top-to-disclosure-icon-200
);--spectrum-picker-spacing-edge-to-disclosure-icon:var(
--spectrum-field-end-edge-to-disclosure-icon-200
)}:host([size=xl]){--spectrum-picker-font-size:var(--spectrum-font-size-300);--spectrum-picker-block-size:var(--spectrum-component-height-300);--spectrum-picker-spacing-top-to-text-side-label-quiet:var(
--spectrum-field-label-top-margin-extra-large
);--spectrum-picker-spacing-top-to-text:var(
--spectrum-component-top-to-text-300
);--spectrum-picker-spacing-bottom-to-text:var(
--spectrum-component-bottom-to-text-300
);--spectrum-picker-spacing-edge-to-text:var(
--spectrum-component-edge-to-text-300
);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-300);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-extra-large
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-extra-large
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-extra-large
);--spectrum-picker-spacing-top-to-alert-icon:var(
--spectrum-field-top-to-alert-icon-extra-large
);--spectrum-picker-spacing-top-to-progress-circle:var(
--spectrum-field-top-to-progress-circle-extra-large
);--spectrum-picker-spacing-top-to-disclosure-icon:var(
--spectrum-field-top-to-disclosure-icon-300
);--spectrum-picker-spacing-edge-to-disclosure-icon:var(
--spectrum-field-end-edge-to-disclosure-icon-300
)}@media (forced-colors:active){:host{--highcontrast-picker-focus-indicator-color:CanvasText;--highcontrast-picker-border-color-default:ButtonText;--highcontrast-picker-border-color-active:ButtonText;--highcontrast-picker-border-color-key-focus:Highlight;--highcontrast-picker-border-color-error-default-open:ButtonText;--highcontrast-picker-border-color-error-hover:ButtonText;--highcontrast-picker-border-color-error-active:ButtonText;--highcontrast-picker-font-color-default:ButtonText;--highcontrast-picker-font-color-default-open:ButtonText;--highcontrast-picker-font-color-key-focus:ButtonText;--highcontrast-picker-font-color-disabled:GrayText;--highcontrast-picker-background-color-default:Background;--highcontrast-picker-background-color-disabled:Background;--highcontrast-picker-icon-color-default:ButtonText;--highcontrast-picker-icon-color-default-open:ButtonText;--highcontrast-picker-icon-color-hover:ButtonText;--highcontrast-picker-icon-color-hover-open:ButtonText;--highcontrast-picker-icon-color-key-focus:Highlight;--highcontrast-picker-icon-color-error-default:ButtonText}#button:disabled,:host([disabled]) #button{border-color:GrayText;border-width:var(
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
);box-sizing:border-box;color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-default,var(--spectrum-picker-font-color-default)
)
);display:flex;inline-size:var(
--mod-picker-inline-size,var(--spectrum-picker-inline-size)
);margin-block-start:var(
--mod-picker-spacing-label-to-picker,var(--spectrum-picker-spacing-label-to-picker)
);max-inline-size:100%;min-inline-size:calc(var(--spectrum-picker-minimum-width-multiplier)*var(--mod-picker-block-size, var(--spectrum-picker-block-size)));padding-block:0;padding-inline-end:var(
--mod-picker-spacing-edge-to-disclosure-icon,var(--spectrum-picker-spacing-edge-to-disclosure-icon)
);padding-inline-start:var(
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
)*2 + var(--mod-picker-border-width, var(--spectrum-picker-border-width))*2);border-color:#0000;border-radius:calc(var(--mod-picker-border-radius, var(--spectrum-picker-border-radius)) + var(
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
))*-1);pointer-events:none;position:absolute}#button:hover{background-color:var(
--highcontrast-picker-background-color-default,var(
--mod-picker-background-color-hover,var(--spectrum-picker-background-color-hover)
)
);border-color:var(
--highcontrast-picker-border-color-default,var(
--mod-picker-border-color-hover,var(--spectrum-picker-border-color-hover)
)
);color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-hover,var(--spectrum-picker-font-color-hover)
)
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
)}#button:active:after{border-color:#0000}#button:active.placeholder #label{color:var(
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
);outline:none}#button.focus-visible,:host([focused]) #button{background-color:var(
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
);outline:none}#button:focus-visible,:host([focused]) #button{background-color:var(
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
);outline:none}#button.focus-visible:after,:host([focused]) #button:after{border-color:var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
)}#button.focus-visible:after,:host([focused]) #button:after{border-color:var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
)}#button:focus-visible:after,:host([focused]) #button:after{border-color:var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
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
)}#button.focus-visible .picker,:host([focused]) #button .picker{color:var(
--highcontrast-picker-icon-color-key-focus,var(
--mod-picker-icon-color-key-focus,var(--spectrum-picker-icon-color-key-focus)
)
)}#button.focus-visible .picker,:host([focused]) #button .picker{color:var(
--highcontrast-picker-icon-color-key-focus,var(
--mod-picker-icon-color-key-focus,var(--spectrum-picker-icon-color-key-focus)
)
)}#button:focus-visible .picker,:host([focused]) #button .picker{color:var(
--highcontrast-picker-icon-color-key-focus,var(
--mod-picker-icon-color-key-focus,var(--spectrum-picker-icon-color-key-focus)
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
);border-color:#0000;border-width:var(
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
)}:host([quiet]) #button{inline-size:auto;min-inline-size:0}:host([quiet]) #button:disabled.focus-visible,:host([quiet][disabled]) #button.focus-visible{border-color:#0000}:host([quiet]) #button:disabled.focus-visible,:host([quiet][disabled]) #button.focus-visible{border-color:#0000}:host([quiet]) #button:disabled:focus-visible,:host([quiet][disabled]) #button:focus-visible{border-color:#0000}#label{flex:auto;font-size:var(--mod-picker-font-size,var(--spectrum-picker-font-size));font-weight:var(
--mod-picker-font-weight,var(--spectrum-picker-font-weight)
);line-height:var(
--mod-picker-line-height,var(--spectrum-picker-line-height)
);margin-block-end:calc(var(
--mod-picker-spacing-bottom-to-text,
var(--spectrum-picker-spacing-bottom-to-text)
) - var(--mod-picker-border-width, var(--spectrum-picker-border-width)));margin-block-start:var(
--mod-picker-spacing-top-to-text,var(--spectrum-picker-spacing-top-to-text)
);overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap}#label.placeholder{color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-default,var(--spectrum-picker-font-color-default)
)
);font-style:var(
--mod-picker-placeholder-font-style,var(--spectrum-picker-placeholder-font-style)
);font-weight:var(
--mod-picker-placeholder-font-weight,var(--spectrum-picker-font-weight)
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
);display:inline-block;flex-shrink:0;margin-block:var(
--mod-picker-spacing-top-to-disclosure-icon,var(--spectrum-picker-spacing-top-to-disclosure-icon)
);margin-inline-start:var(
--mod-picker-spacing-icon-to-disclosure-icon,var(--spectrum-picker-spacing-icon-to-disclosure-icon)
);position:relative;transition:color var(
--mod-picker-animation-duration,var(--spectrum-picker-animation-duration)
) ease-out;vertical-align:top}.picker:active{color:var(
--highcontrast-picker-icon-color-default,var(
--mod-picker-icon-color-active,var(--spectrum-picker-icon-color-active)
)
)}#button .spectrum-ProgressCircle,.validation-icon{margin-inline-start:var(
--mod-picker-spacing-text-to-alert-icon-inline-start,var(--spectrum-picker-spacing-text-to-alert-icon-inline-start)
)}.validation-icon{margin-block-end:calc(var(
--mod-picker-spacing-top-to-alert-icon,
var(--spectrum-picker-spacing-top-to-alert-icon)
) - var(--mod-picker-border-width, var(--spectrum-picker-border-width)));margin-block-start:calc(var(
--mod-picker-spacing-top-to-alert-icon,
var(--spectrum-picker-spacing-top-to-alert-icon)
) - var(--mod-picker-border-width, var(--spectrum-picker-border-width)))}#button .spectrum-ProgressCircle{margin-block-end:calc(var(
--mod-picker-spacing-top-to-progress-circle,
var(--spectrum-picker-spacing-top-to-progress-circle)
) - var(--mod-picker-border-width, var(--spectrum-picker-border-width)));margin-block-start:calc(var(
--mod-picker-spacing-top-to-progress-circle,
var(--spectrum-picker-spacing-top-to-progress-circle)
) - var(--mod-picker-border-width, var(--spectrum-picker-border-width)))}#label~.picker{margin-inline-start:var(
--mod-picker-spacing-text-to-icon,var(--spectrum-picker-spacing-text-to-icon)
)}:host([quiet]) #button{background-color:#0000;border:none;border-radius:0;color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-default,var(--spectrum-picker-font-color-default)
)
);margin-block-start:calc(var(
--mod-picker-spacing-label-to-picker-quiet,
var(--spectrum-picker-spacing-label-to-picker-quiet)
) + 1px);padding-inline:var(
--mod-picker-spacing-edge-to-text-quiet,var(--spectrum-picker-spacing-edge-to-text-quiet)
)}:host([quiet]) #button.spectrum-Picker--sideLabel{margin-block-start:calc(var(--spectrum-picker-spacing-top-to-text-side-label-quiet)*-1)}:host([quiet]) #button .picker{margin-inline-end:var(
--mod-picker-spacing-edge-to-disclosure-icon-quiet,var(--spectrum-picker-spacing-edge-to-disclosure-icon-quiet)
)}:host([quiet]) #button:after{block-size:auto;border:none;inline-size:auto}:host([quiet]) #button:hover{background-color:#0000}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{background-color:#0000}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{background-color:#0000}:host([quiet]) #button:focus-visible,:host([quiet][focused]) #button{background-color:#0000}:host([quiet]) #button.focus-visible:after,:host([quiet][focused]) #button:after{border:none;border-radius:0;box-shadow:0 var(
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
))*-1) 0}:host([quiet]) #button:active,:host([quiet][open]) #button{background-color:#0000}:host([quiet]) #button:disabled,:host([quiet][disabled]) #button{background-color:#0000}.spectrum-Picker--sideLabel{display:inline-flex;vertical-align:top}:host{--spectrum-picker-background-color-default:var(
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
)}:host{display:inline-flex;inline-size:var(
--spectrum-picker-width,var(--spectrum-global-dimension-size-2400)
);max-inline-size:100%;min-inline-size:calc(var(--spectrum-picker-minimum-width-multiplier)*var(--mod-picker-block-size, var(--spectrum-picker-block-size)));vertical-align:top}:host([quiet]){min-width:0;width:auto}#button{max-width:100%;min-width:100%;width:100%}#icon:not([hidden]){display:inline-flex}:host([readonly]) #button{-webkit-user-select:inherit;user-select:inherit}.picker,.validation-icon{flex-shrink:0}sp-overlay{pointer-events:none}sp-menu{pointer-events:auto}:host>sp-menu{display:none}:host([focused]:not([quiet])) #button #label.placeholder{color:var(
--spectrum-picker-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}#label.visually-hidden~.picker{margin-inline-start:auto}:host([focused]:not([quiet])) #button .picker{color:var(
--spectrum-picker-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}.visually-hidden{clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}
`,Tr=t.iv`
:host{--spectrum-menu-item-min-height:var(--spectrum-component-height-100);--spectrum-menu-item-icon-height:var(--spectrum-workflow-icon-size-100);--spectrum-menu-item-icon-width:var(--spectrum-workflow-icon-size-100);--spectrum-menu-item-label-font-size:var(--spectrum-font-size-100);--spectrum-menu-item-label-text-to-visual:var(
--spectrum-text-to-visual-100
);--spectrum-menu-item-label-inline-edge-to-content:var(
--spectrum-component-edge-to-text-100
);--spectrum-menu-item-top-edge-to-text:var(
--spectrum-component-top-to-text-100
);--spectrum-menu-item-bottom-edge-to-text:var(
--spectrum-component-bottom-to-text-100
);--spectrum-menu-item-text-to-control:var(--spectrum-text-to-control-100);--spectrum-menu-item-description-font-size:var(--spectrum-font-size-75);--spectrum-menu-section-header-font-size:var(--spectrum-font-size-100);--spectrum-menu-section-header-min-width:var(
--spectrum-component-height-100
);--spectrum-menu-item-selectable-edge-to-text-not-selected:var(
--spectrum-menu-item-selectable-edge-to-text-not-selected-medium
);--spectrum-menu-item-checkmark-height:var(
--spectrum-menu-item-checkmark-height-medium
);--spectrum-menu-item-checkmark-width:var(
--spectrum-menu-item-checkmark-width-medium
);--spectrum-menu-item-top-to-checkmark:var(
--spectrum-menu-item-top-to-selected-icon-medium
);--spectrum-menu-item-label-line-height:var(--spectrum-line-height-100);--spectrum-menu-item-label-line-height-cjk:var(
--spectrum-cjk-line-height-100
);--spectrum-menu-item-label-to-description-spacing:var(
--spectrum-menu-item-label-to-description
);--spectrum-menu-item-focus-indicator-width:var(
--spectrum-border-width-200
);--spectrum-menu-item-focus-indicator-color:var(--spectrum-blue-800);--spectrum-menu-item-label-to-value-area-min-spacing:var(
--spectrum-spacing-100
);--spectrum-menu-item-label-content-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-menu-item-label-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-menu-item-label-content-color-down:var(
--spectrum-neutral-content-color-down
);--spectrum-menu-item-label-content-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-menu-item-label-icon-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-menu-item-label-icon-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-menu-item-label-icon-color-down:var(
--spectrum-neutral-content-color-down
);--spectrum-menu-item-label-icon-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-menu-item-label-content-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-menu-item-label-icon-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-menu-item-description-line-height:var(
--spectrum-line-height-100
);--spectrum-menu-item-description-line-height-cjk:var(
--spectrum-cjk-line-height-100
);--spectrum-menu-item-description-color-default:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-menu-item-description-color-hover:var(
--spectrum-neutral-subdued-content-color-hover
);--spectrum-menu-item-description-color-down:var(
--spectrum-neutral-subdued-content-color-down
);--spectrum-menu-item-description-color-focus:var(
--spectrum-neutral-subdued-content-color-key-focus
);--spectrum-menu-item-description-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-menu-section-header-line-height:var(--spectrum-line-height-100);--spectrum-menu-section-header-line-height-cjk:var(
--spectrum-cjk-line-height-100
);--spectrum-menu-section-header-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-menu-section-header-color:var(--spectrum-gray-900);--spectrum-menu-collapsible-icon-color:var(--spectrum-gray-900);--spectrum-menu-checkmark-icon-color-default:var(
--spectrum-accent-color-900
);--spectrum-menu-checkmark-icon-color-hover:var(
--spectrum-accent-color-1000
);--spectrum-menu-checkmark-icon-color-down:var(
--spectrum-accent-color-1100
);--spectrum-menu-checkmark-icon-color-focus:var(
--spectrum-accent-color-1000
);--spectrum-menu-drillin-icon-color-default:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-menu-drillin-icon-color-hover:var(
--spectrum-neutral-subdued-content-color-hover
);--spectrum-menu-drillin-icon-color-down:var(
--spectrum-neutral-subdued-content-color-down
);--spectrum-menu-drillin-icon-color-focus:var(
--spectrum-neutral-subdued-content-color-key-focus
);--spectrum-menu-item-value-color-default:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-menu-item-value-color-hover:var(
--spectrum-neutral-subdued-content-color-hover
);--spectrum-menu-item-value-color-down:var(
--spectrum-neutral-subdued-content-color-down
);--spectrum-menu-item-value-color-focus:var(
--spectrum-neutral-subdued-content-color-key-focus
);--spectrum-menu-checkmark-display-hidden:none;--spectrum-menu-checkmark-display-shown:block;--spectrum-menu-checkmark-display:var(
--spectrum-menu-checkmark-display-shown
);--spectrum-menu-item-collapsible-has-icon-submenu-item-padding-x-start:calc(var(--spectrum-menu-item-label-inline-edge-to-content) + var(--spectrum-menu-item-checkmark-width) + var(--spectrum-menu-item-text-to-control) + var(--spectrum-menu-item-icon-width) + var(--spectrum-menu-item-label-text-to-visual) + var(--spectrum-menu-item-focus-indicator-width));--spectrum-menu-item-collapsible-no-icon-submenu-item-padding-x-start:calc(var(--spectrum-menu-item-label-inline-edge-to-content) + var(--spectrum-menu-item-checkmark-width) + var(--spectrum-menu-item-label-text-to-visual) + var(--spectrum-menu-item-focus-indicator-width))}:host([size=s]){--spectrum-menu-item-min-height:var(--spectrum-component-height-75);--spectrum-menu-item-icon-height:var(--spectrum-workflow-icon-size-75);--spectrum-menu-item-icon-width:var(--spectrum-workflow-icon-size-75);--spectrum-menu-item-label-font-size:var(--spectrum-font-size-75);--spectrum-menu-item-label-text-to-visual:var(
--spectrum-text-to-visual-75
);--spectrum-menu-item-label-inline-edge-to-content:var(
--spectrum-component-edge-to-text-75
);--spectrum-menu-item-top-edge-to-text:var(
--spectrum-component-top-to-text-75
);--spectrum-menu-item-bottom-edge-to-text:var(
--spectrum-component-bottom-to-text-75
);--spectrum-menu-item-text-to-control:var(--spectrum-text-to-control-75);--spectrum-menu-item-description-font-size:var(--spectrum-font-size-50);--spectrum-menu-section-header-font-size:var(--spectrum-font-size-75);--spectrum-menu-section-header-min-width:var(
--spectrum-component-height-75
);--spectrum-menu-item-selectable-edge-to-text-not-selected:var(
--spectrum-menu-item-selectable-edge-to-text-not-selected-small
);--spectrum-menu-item-checkmark-height:var(
--spectrum-menu-item-checkmark-height-small
);--spectrum-menu-item-checkmark-width:var(
--spectrum-menu-item-checkmark-width-small
);--spectrum-menu-item-top-to-checkmark:var(
--spectrum-menu-item-top-to-selected-icon-small
)}:host([size=l]){--spectrum-menu-item-min-height:var(--spectrum-component-height-200);--spectrum-menu-item-icon-height:var(--spectrum-workflow-icon-size-200);--spectrum-menu-item-icon-width:var(--spectrum-workflow-icon-size-200);--spectrum-menu-item-label-font-size:var(--spectrum-font-size-200);--spectrum-menu-item-label-text-to-visual:var(
--spectrum-text-to-visual-200
);--spectrum-menu-item-label-inline-edge-to-content:var(
--spectrum-component-edge-to-text-200
);--spectrum-menu-item-top-edge-to-text:var(
--spectrum-component-top-to-text-200
);--spectrum-menu-item-bottom-edge-to-text:var(
--spectrum-component-bottom-to-text-200
);--spectrum-menu-item-text-to-control:var(--spectrum-text-to-control-200);--spectrum-menu-item-description-font-size:var(--spectrum-font-size-100);--spectrum-menu-section-header-font-size:var(--spectrum-font-size-200);--spectrum-menu-section-header-min-width:var(
--spectrum-component-height-200
);--spectrum-menu-item-selectable-edge-to-text-not-selected:var(
--spectrum-menu-item-selectable-edge-to-text-not-selected-large
);--spectrum-menu-item-checkmark-height:var(
--spectrum-menu-item-checkmark-height-large
);--spectrum-menu-item-checkmark-width:var(
--spectrum-menu-item-checkmark-width-large
);--spectrum-menu-item-top-to-checkmark:var(
--spectrum-menu-item-top-to-selected-icon-large
)}:host([size=xl]){--spectrum-menu-item-min-height:var(--spectrum-component-height-300);--spectrum-menu-item-icon-height:var(--spectrum-workflow-icon-size-300);--spectrum-menu-item-icon-width:var(--spectrum-workflow-icon-size-300);--spectrum-menu-item-label-font-size:var(--spectrum-font-size-300);--spectrum-menu-item-label-text-to-visual:var(
--spectrum-text-to-visual-300
);--spectrum-menu-item-label-inline-edge-to-content:var(
--spectrum-component-edge-to-text-300
);--spectrum-menu-item-top-edge-to-text:var(
--spectrum-component-top-to-text-300
);--spectrum-menu-item-bottom-edge-to-text:var(
--spectrum-component-bottom-to-text-300
);--spectrum-menu-item-text-to-control:var(--spectrum-text-to-control-300);--spectrum-menu-item-description-font-size:var(--spectrum-font-size-200);--spectrum-menu-section-header-font-size:var(--spectrum-font-size-300);--spectrum-menu-section-header-min-width:var(
--spectrum-component-height-300
);--spectrum-menu-item-selectable-edge-to-text-not-selected:var(
--spectrum-menu-item-selectable-edge-to-text-not-selected-extra-large
);--spectrum-menu-item-checkmark-height:var(
--spectrum-menu-item-checkmark-height-extra-large
);--spectrum-menu-item-checkmark-width:var(
--spectrum-menu-item-checkmark-width-extra-large
);--spectrum-menu-item-top-to-checkmark:var(
--spectrum-menu-item-top-to-selected-icon-extra-large
)}@media (forced-colors:active){:host{--highcontrast-menu-item-background-color-default:ButtonFace;--highcontrast-menu-item-color-default:ButtonText;--highcontrast-menu-item-background-color-focus:Highlight;--highcontrast-menu-item-color-focus:HighlightText;--highcontrast-menu-checkmark-icon-color-default:Highlight;--highcontrast-menu-item-color-disabled:GrayText;--highcontrast-menu-item-focus-indicator-color:Highlight;--highcontrast-menu-item-selected-background-color:Highlight;--highcontrast-menu-item-selected-color:HighlightText}@supports (color:SelectedItem){:host{--highcontrast-menu-item-selected-background-color:SelectedItem;--highcontrast-menu-item-selected-color:SelectedItemText}}}:host{box-sizing:border-box;display:inline-block;list-style-type:none;margin:0;overflow:auto;padding:0}:host:lang(ja),:host:lang(ko),:host:lang(zh){--spectrum-menu-item-label-line-height:var(
--mod-menu-item-label-line-height-cjk,var(--spectrum-menu-item-label-line-height-cjk)
);--spectrum-menu-item-description-line-height:var(
--mod-menu-item-description-line-height-cjk,var(--spectrum-menu-item-description-line-height-cjk)
);--spectrum-menu-section-header-line-height:var(
--mod-menu-section-header-line-height-cjk,var(--spectrum-menu-section-header-line-height-cjk)
)}:host([selects]) ::slotted(sp-menu-item){--spectrum-menu-checkmark-display:var(
--spectrum-menu-checkmark-display-hidden
);padding-inline-start:var(
--mod-menu-item-selectable-edge-to-text-not-selected,var(--spectrum-menu-item-selectable-edge-to-text-not-selected)
)}:host([selects]) ::slotted(sp-menu-item[selected]){--spectrum-menu-checkmark-display:var(
--spectrum-menu-checkmark-display-shown
);padding-inline-start:var(
--mod-menu-item-label-inline-edge-to-content,var(--spectrum-menu-item-label-inline-edge-to-content)
)}li:not(::slotted(sp-menu-item),.menu-divider){box-sizing:border-box;display:block;margin:0;padding:0;position:relative}.spectrum-Menu-sectionHeading{color:var(
--highcontrast-menu-item-color-default,var(
--mod-menu-section-header-color,var(--spectrum-menu-section-header-color)
)
);display:block;font-size:var(
--mod-menu-section-header-font-size,var(--spectrum-menu-section-header-font-size)
);font-weight:var(
--mod-menu-section-header-font-weight,var(--spectrum-menu-section-header-font-weight)
);grid-area:sectionHeadingArea/1/sectionHeadingArea/-1;line-height:var(
--mod-menu-section-header-line-height,var(--spectrum-menu-section-header-line-height)
);min-inline-size:var(
--mod-menu-section-header-min-width,var(--spectrum-menu-section-header-min-width)
);padding-block-end:var(
--mod-menu-section-header-bottom-edge-to-text,var(
--mod-menu-item-bottom-edge-to-text,var(--spectrum-menu-item-bottom-edge-to-text)
)
);padding-block-start:var(
--mod-menu-section-header-top-edge-to-text,var(
--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text)
)
);padding-inline:var(
--mod-menu-item-label-inline-edge-to-content,var(--spectrum-menu-item-label-inline-edge-to-content)
)}:host{display:inline-flex;flex-direction:column;width:var(--swc-menu-width)}:host(:focus){outline:none}::slotted(*){flex-shrink:0}
`;var Hr=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,Dr=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?Lr(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&Hr(e,r,c),c};function Pr(t,e){return!!e&&(t===e||t.contains(e))}class Ur extends(z(u.o,{noDefaultSize:!0})){constructor(){super(),this.label="",this.ignore=!1,this.value="",this.valueSeparator=",",this._selected=[],this.selectedItems=[],this.childItemSet=new Set,this.focusedItemIndex=0,this.focusInItemIndex=0,this.selectedItemsMap=new Map,this.descendentOverlays=new Map,this.handleSubmenuClosed=t=>{t.stopPropagation(),t.composedPath()[0].dispatchEvent(new Event("sp-menu-submenu-closed",{bubbles:!0,composed:!0}))},this.handleSubmenuOpened=t=>{t.stopPropagation(),t.composedPath()[0].dispatchEvent(new Event("sp-menu-submenu-opened",{bubbles:!0,composed:!0}));const e=this.childItems[this.focusedItemIndex];e&&(e.focused=!1);const r=t.composedPath().find((t=>this.childItemSet.has(t)));if(!r)return;const o=this.childItems.indexOf(r);this.focusedItemIndex=o,this.focusInItemIndex=o},this._hasUpdatedSelectedItemIndex=!1,this._willUpdateItems=!1,this.cacheUpdated=Promise.resolve(),this.resolveCacheUpdated=()=>{},this.addEventListener("sp-menu-item-added-or-updated",this.onSelectableItemAddedOrUpdated),this.addEventListener("sp-menu-item-added-or-updated",this.onFocusableItemAddedOrUpdated,{capture:!0}),this.addEventListener("click",this.handleClick),this.addEventListener("focusin",this.handleFocusin),this.addEventListener("focusout",this.handleFocusout),this.addEventListener("sp-opened",this.handleSubmenuOpened),this.addEventListener("sp-closed",this.handleSubmenuClosed)}static get styles(){return[Tr]}get isSubmenu(){return"submenu"===this.slot}get selected(){return this._selected}set selected(t){if(t===this.selected)return;const e=this.selected;this._selected=t,this.selectedItems=[],this.selectedItemsMap.clear(),this.childItems.forEach((t=>{t.selected=this.selected.includes(t.value),t.selected&&(this.selectedItems.push(t),this.selectedItemsMap.set(t,!0))})),this.requestUpdate("selected",e)}get childItems(){return this.cachedChildItems||(this.cachedChildItems=this.updateCachedMenuItems()),this.cachedChildItems}updateCachedMenuItems(){if(this.cachedChildItems=[],!this.menuSlot)return[];const t=this.menuSlot.assignedElements({flatten:!0});for(const[e,r]of t.entries()){if(this.childItemSet.has(r)){this.cachedChildItems.push(r);continue}const o="slot"===r.localName?r.assignedElements({flatten:!0}):[...r.querySelectorAll(":scope > *")];t.splice(e,1,r,...o)}return this.cachedChildItems}get childRole(){if("listbox"===this.resolvedRole)return"option";switch(this.resolvedSelects){case"single":return"menuitemradio";case"multiple":return"menuitemcheckbox";default:return"menuitem"}}get ownRole(){return"menu"}onFocusableItemAddedOrUpdated(t){t.menuCascade.set(this,{hadFocusRoot:!!t.item.menuData.focusRoot,ancestorWithSelects:t.currentAncestorWithSelects}),this.selects&&(t.currentAncestorWithSelects=this),t.item.menuData.focusRoot=t.item.menuData.focusRoot||this}onSelectableItemAddedOrUpdated(t){var e,r;const o=t.menuCascade.get(this);if(!o)return;if(t.item.menuData.parentMenu=t.item.menuData.parentMenu||this,o.hadFocusRoot&&!this.ignore&&(this.tabIndex=-1),this.addChildItem(t.item),"inherit"===this.selects){this.resolvedSelects="inherit";const o=null==(e=t.currentAncestorWithSelects)?void 0:e.ignore;this.resolvedRole=o?"none":(null==(r=t.currentAncestorWithSelects)?void 0:r.getAttribute("role"))||this.getAttribute("role")||void 0}else this.selects?(this.resolvedRole=this.ignore?"none":this.getAttribute("role")||void 0,this.resolvedSelects=this.selects):(this.resolvedRole=this.ignore?"none":this.getAttribute("role")||void 0,this.resolvedSelects="none"===this.resolvedRole?"ignore":"none");const s="single"===this.resolvedSelects||"multiple"===this.resolvedSelects;t.item.menuData.cleanupSteps.push((t=>this.removeChildItem(t))),(s||!this.selects&&"ignore"!==this.resolvedSelects)&&!t.item.menuData.selectionRoot&&(t.item.setRole(this.childRole),t.item.menuData.selectionRoot=t.item.menuData.selectionRoot||this,t.item.selected&&(this.selectedItemsMap.set(t.item,!0),this.selectedItems=[...this.selectedItems,t.item],this._selected=[...this.selected,t.item.value],this.value=this.selected.join(this.valueSeparator)))}addChildItem(t){this.childItemSet.add(t),this.handleItemsChanged()}async removeChildItem(t){this.childItemSet.delete(t),this.cachedChildItems=void 0,t.focused&&(this.handleItemsChanged(),await this.updateComplete,this.focus())}focus({preventScroll:t}={}){if(!this.childItems.length||this.childItems.every((t=>t.disabled)))return;if(this.childItems.some((t=>t.menuData.focusRoot!==this)))return void super.focus({preventScroll:t});this.focusMenuItemByOffset(0),super.focus({preventScroll:t});const e=this.selectedItems[0];e&&!t&&e.scrollIntoView({block:"nearest"})}handleClick(t){const e=t.composedPath().find((t=>t instanceof Element&&t.getAttribute("role")===this.childRole));if(t.defaultPrevented){const t=this.childItems.indexOf(e);(null==e?void 0:e.menuData.focusRoot)===this&&t>-1&&(this.focusedItemIndex=t)}else null!=e&&e.href&&e.href.length?this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})):(null==e?void 0:e.menuData.selectionRoot)===this&&this.childItems.length&&(t.preventDefault(),e.hasSubmenu||e.open||(this.selectOrToggleItem(e),this.prepareToCleanUp()))}handleFocusin(t){var e;const r=Pr(this,t.relatedTarget);if(this.childItems.some((t=>t.menuData.focusRoot!==this)))return;const o=this.getRootNode().activeElement,s=(null==(e=this.childItems[this.focusedItemIndex])?void 0:e.menuData.selectionRoot)||this;if((o!==s||!r&&t.target!==this)&&(s.focus({preventScroll:!0}),o&&0===this.focusedItemIndex)){const t=this.childItems.findIndex((t=>t===o));this.focusMenuItemByOffset(Math.max(t,0))}this.startListeningToKeyboard()}startListeningToKeyboard(){this.addEventListener("keydown",this.handleKeydown)}handleFocusout(t){Pr(this,t.relatedTarget)||(this.stopListeningToKeyboard(),this.childItems.forEach((t=>t.focused=!1)),this.removeAttribute("aria-activedescendant"))}stopListeningToKeyboard(){this.removeEventListener("keydown",this.handleKeydown)}handleDescendentOverlayOpened(t){const e=t.composedPath()[0];e.overlayElement&&this.descendentOverlays.set(e.overlayElement,e.overlayElement)}handleDescendentOverlayClosed(t){const e=t.composedPath()[0];e.overlayElement&&this.descendentOverlays.delete(e.overlayElement)}async selectOrToggleItem(t){const e=this.resolvedSelects,r=new Map(this.selectedItemsMap),o=this.selected.slice(),s=this.selectedItems.slice(),c=this.value,a=this.childItems[this.focusedItemIndex];if(a&&(a.focused=!1,a.active=!1),this.focusedItemIndex=this.childItems.indexOf(t),this.forwardFocusVisibleToItem(t),"multiple"===e){this.selectedItemsMap.has(t)?this.selectedItemsMap.delete(t):this.selectedItemsMap.set(t,!0);const e=[],r=[];this.childItemSet.forEach((t=>{t.menuData.selectionRoot===this&&this.selectedItemsMap.has(t)&&(e.push(t.value),r.push(t))})),this._selected=e,this.selectedItems=r,this.value=this.selected.join(this.valueSeparator)}else this.selectedItemsMap.clear(),this.selectedItemsMap.set(t,!0),this.value=t.value,this._selected=[t.value],this.selectedItems=[t];if(!this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0})))return this._selected=o,this.selectedItems=s,this.selectedItemsMap=r,void(this.value=c);if("single"===e){for(const e of r.keys())e!==t&&(e.selected=!1);t.selected=!0}else"multiple"===e&&(t.selected=!t.selected)}navigateWithinMenu(t){const{code:e}=t,r=this.childItems[this.focusedItemIndex],o="ArrowDown"===e?1:-1,s=this.focusMenuItemByOffset(o);s!==r&&(t.preventDefault(),t.stopPropagation(),s.scrollIntoView({block:"nearest"}))}navigateBetweenRelatedMenus(t){const{code:e}=t,r=this.isLTR&&"ArrowRight"===e||!this.isLTR&&"ArrowLeft"===e,o=this.isLTR&&"ArrowLeft"===e||!this.isLTR&&"ArrowRight"===e;if(r){t.stopPropagation();const e=this.childItems[this.focusedItemIndex];null!=e&&e.hasSubmenu&&e.openOverlay()}else o&&this.isSubmenu&&(t.stopPropagation(),this.dispatchEvent(new Event("close",{bubbles:!0})),this.updateSelectedItemIndex())}handleKeydown(t){var e;if(t.target!==this&&this!==t.target.parentElement||t.defaultPrevented)return;const r=this.childItems[this.focusedItemIndex];r&&(r.focused=!0);const{code:o}=t;if(t.shiftKey&&t.target!==this&&this.hasAttribute("tabindex")){this.removeAttribute("tabindex");const t=e=>{!e.shiftKey&&!this.hasAttribute("tabindex")&&(this.tabIndex=0,document.removeEventListener("keyup",t),this.removeEventListener("focusout",t))};document.addEventListener("keyup",t),this.addEventListener("focusout",t)}"Tab"!==o?"Space"===o&&null!=r&&r.hasSubmenu?r.openOverlay():"Space"!==o&&"Enter"!==o?"ArrowDown"!==o&&"ArrowUp"!==o?this.navigateBetweenRelatedMenus(t):this.navigateWithinMenu(t):null==(e=this.childItems[this.focusedItemIndex])||e.click():this.prepareToCleanUp()}focusMenuItemByOffset(t){const e=t||1,r=this.childItems[this.focusedItemIndex];r&&(r.focused=!1,r.active=r.open),this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+t)%this.childItems.length;let o=this.childItems[this.focusedItemIndex],s=this.childItems.length;for(;null!=o&&o.disabled&&s;)s-=1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+e)%this.childItems.length,o=this.childItems[this.focusedItemIndex];return null!=o&&o.disabled||this.forwardFocusVisibleToItem(o),o}prepareToCleanUp(){document.addEventListener("focusout",(()=>{requestAnimationFrame((()=>{const t=this.childItems[this.focusedItemIndex];t&&(t.focused=!1,this.updateSelectedItemIndex())}))}),{once:!0})}updateSelectedItemIndex(){let t=0;const e=new Map,r=[],o=[];let s=this.childItems.length;for(;s;){s-=1;const c=this.childItems[s];c.menuData.selectionRoot===this&&((c.selected||!this._hasUpdatedSelectedItemIndex&&this.selected.includes(c.value))&&(t=s,e.set(c,!0),r.unshift(c.value),o.unshift(c)),s!==t&&(c.focused=!1))}o.map(((t,e)=>{e>0&&(t.focused=!1)})),this.selectedItemsMap=e,this._selected=r,this.selectedItems=o,this.value=this.selected.join(this.valueSeparator),this.focusedItemIndex=t,this.focusInItemIndex=t}handleItemsChanged(){this.cachedChildItems=void 0,this._willUpdateItems||(this._willUpdateItems=!0,this.cacheUpdated=this.updateCache())}async updateCache(){this.hasUpdated?await new Promise((t=>requestAnimationFrame((()=>t(!0))))):await Promise.all([new Promise((t=>requestAnimationFrame((()=>t(!0))))),this.updateComplete]),void 0===this.cachedChildItems&&(this.updateSelectedItemIndex(),this.updateItemFocus()),this._willUpdateItems=!1}updateItemFocus(){if(0==this.childItems.length)return;const t=this.childItems[this.focusInItemIndex];this.getRootNode().activeElement===t.menuData.focusRoot&&this.forwardFocusVisibleToItem(t)}closeDescendentOverlays(){this.descendentOverlays.forEach((t=>{t.open=!1})),this.descendentOverlays=new Map}forwardFocusVisibleToItem(t){if(!t||t.menuData.focusRoot!==this)return;this.closeDescendentOverlays();const e=this.hasVisibleFocusInTree()||!!this.childItems.find((t=>t.hasVisibleFocusInTree()));t.focused=e,this.setAttribute("aria-activedescendant",t.id),t.menuData.selectionRoot&&t.menuData.selectionRoot!==this&&t.menuData.selectionRoot.focus()}handleSlotchange({target:t}){const e=t.assignedElements({flatten:!0});this.childItems.length!==e.length&&e.forEach((t=>{void 0!==t.triggerUpdate&&t.triggerUpdate()}))}renderMenuItemSlot(){return t.dy`
            <slot
                @sp-menu-submenu-opened=${this.handleDescendentOverlayOpened}
                @sp-menu-submenu-closed=${this.handleDescendentOverlayClosed}
                @slotchange=${this.handleSlotchange}
            ></slot>
        `}render(){return this.renderMenuItemSlot()}firstUpdated(t){super.firstUpdated(t),!this.hasAttribute("tabindex")&&!this.ignore&&("group"===this.getAttribute("role")?this.tabIndex=-1:this.tabIndex=0);const e=[new Promise((t=>requestAnimationFrame((()=>t(!0)))))];[...this.children].forEach((t=>{"sp-menu-item"===t.localName&&e.push(t.updateComplete)})),this.childItemsUpdated=Promise.all(e)}updated(t){super.updated(t),t.has("selects")&&this.hasUpdated&&this.selectsChanged(),t.has("label")&&(this.label||void 0!==t.get("label"))&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label"))}selectsChanged(){const t=[new Promise((t=>requestAnimationFrame((()=>t(!0)))))];this.childItemSet.forEach((e=>{t.push(e.triggerUpdate())})),this.childItemsUpdated=Promise.all(t)}connectedCallback(){super.connectedCallback(),!this.hasAttribute("role")&&!this.ignore&&this.setAttribute("role",this.ownRole),this.updateComplete.then((()=>this.updateItemFocus()))}disconnectedCallback(){this.cachedChildItems=void 0,super.disconnectedCallback()}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.childItemsUpdated,await this.cacheUpdated,t}}Dr([(0,d.Cb)({type:String,reflect:!0})],Ur.prototype,"label",2),Dr([(0,d.Cb)({type:Boolean,reflect:!0})],Ur.prototype,"ignore",2),Dr([(0,d.Cb)({type:String,reflect:!0})],Ur.prototype,"selects",2),Dr([(0,d.Cb)({type:String})],Ur.prototype,"value",2),Dr([(0,d.Cb)({type:String,attribute:"value-separator"})],Ur.prototype,"valueSeparator",2),Dr([(0,d.Cb)({attribute:!1})],Ur.prototype,"selected",1),Dr([(0,d.Cb)({attribute:!1})],Ur.prototype,"selectedItems",2),Dr([(0,d.IO)("slot:not([name])")],Ur.prototype,"menuSlot",2),(0,y.N)("sp-menu",Ur);var Or=a(954),Br=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,Fr=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?Mr(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&Br(e,r,c),c};const Nr={s:"spectrum-UIIcon-ChevronDown75",m:"spectrum-UIIcon-ChevronDown100",l:"spectrum-UIIcon-ChevronDown200",xl:"spectrum-UIIcon-ChevronDown300"},Rr="option-picker";class Vr extends(z(D,{noDefaultSize:!0})){constructor(){super(...arguments),this.isMobile=new Or.l8(this,Or.q$),this.deprecatedMenu=null,this.disabled=!1,this.focused=!1,this.invalid=!1,this.open=!1,this.readonly=!1,this.selects="single",this.placement="bottom-start",this.quiet=!1,this.value="",this.listRole="listbox",this.itemRole="option",this.preventNextToggle="no",this.handleKeydown=t=>{this.focused=!0,("ArrowDown"===t.code||"ArrowUp"===t.code)&&(t.preventDefault(),this.toggle(!0))},this.applyFocusElementLabel=t=>{this.appliedLabel=t},this.hasRenderedOverlay=!1,this.willManageSelection=!1,this.selectionPromise=Promise.resolve(),this.recentlyConnected=!1,this.enterKeydownOn=null,this.handleEnterKeydown=t=>{if("Enter"===t.code){if(this.enterKeydownOn)return void t.preventDefault();this.addEventListener("keyup",(t=>{"Enter"===t.code&&(this.enterKeydownOn=null)}),{once:!0}),this.enterKeydownOn=this.enterKeydownOn||t.target}}}get menuItems(){return this.optionsMenu.childItems}get selectedItem(){return this._selectedItem}set selectedItem(t){if(this.selectedItemContent=t?t.itemChildren:void 0,t===this.selectedItem)return;const e=this.selectedItem;this._selectedItem=t,this.requestUpdate("selectedItem",e)}get focusElement(){return this.open?this.optionsMenu:this.button}forceFocusVisible(){this.focused=!0}handleButtonBlur(){this.focused=!1}handleButtonPointerdown(){this.preventNextToggle="maybe";const t=()=>{document.removeEventListener("pointerup",t),document.removeEventListener("pointercancel",t),requestAnimationFrame((()=>{this.preventNextToggle="no"}))};document.addEventListener("pointerup",t),document.addEventListener("pointercancel",t)}handleButtonFocus(t){"maybe"===this.preventNextToggle&&t.relatedTarget===this.optionsMenu&&(this.preventNextToggle="yes")}handleButtonClick(){this.enterKeydownOn&&this.enterKeydownOn!==this.button||"yes"!==this.preventNextToggle&&this.toggle()}focus(t){super.focus(t),!this.disabled&&this.focusElement&&(this.focused=this.hasVisibleFocusInTree())}handleHelperFocus(){this.focused=!0,this.button.focus()}handleChange(t){const e=t.target,[r]=e.selectedItems;t.stopPropagation(),t.cancelable?this.setValueFromItem(r,t):this.open=!1}async setValueFromItem(t,e){this.open=!1;const r=this.selectedItem,o=this.value;return this.selectedItem=t,this.value=t.value,await this.updateComplete,!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0,composed:!0}))&&this.selects?(e&&e.preventDefault(),this.setMenuItemSelected(this.selectedItem,!1),r&&this.setMenuItemSelected(r,!0),this.selectedItem=r,this.value=o,void(this.open=!0)):this.selects?(r&&this.setMenuItemSelected(r,!1),void this.setMenuItemSelected(t,!!this.selects)):(this.selectedItem=r,void(this.value=o))}setMenuItemSelected(t,e){null!=this.selects&&(t.selected=e)}toggle(t){this.readonly||(this.open=void 0!==t?t:!this.open)}close(){this.readonly||(this.open=!1)}get containerStyles(){return this.isMobile.matches?{"--swc-menu-width":"100%"}:{}}get selectedItemContent(){return this._selectedItemContent||{icon:[],content:[]}}set selectedItemContent(t){if(t===this.selectedItemContent)return;const e=this.selectedItemContent;this._selectedItemContent=t,this.requestUpdate("selectedItemContent",e)}renderLabelContent(e){return this.value&&this.selectedItem?e:t.dy`
            <slot name="label">
                <span
                    aria-hidden=${(0,E.o)(this.appliedLabel?void 0:"true")}
                >
                    ${this.label}
                </span>
            </slot>
        `}get buttonContent(){const e={"visually-hidden":"only"===this.icons&&!!this.value,placeholder:!this.value},r=this.appliedLabel||this.label;return[t.dy`
                <span id="icon" ?hidden=${"none"===this.icons}>
                    ${this.selectedItemContent.icon}
                </span>
                <span id="label" class=${S(e)}>
                    ${this.renderLabelContent(this.selectedItemContent.content)}
                </span>
                ${this.value&&this.selectedItem?t.dy`
                          <span
                              aria-hidden="true"
                              class="visually-hidden"
                              id="applied-label"
                          >
                              ${r}
                              <slot name="label"></slot>
                          </span>
                      `:t.dy`
                          <span hidden id="applied-label">${r}</span>
                      `}
                ${this.invalid?t.dy`
                          <sp-icon-alert
                              class="validation-icon"
                          ></sp-icon-alert>
                      `:t.Ld}
                <sp-icon-chevron100
                    class="picker ${Nr[this.size]}"
                ></sp-icon-chevron100>
                <slot aria-hidden="true" name="tooltip" id="tooltip"></slot>
            `]}renderOverlay(e){return a.e(517).then(a.bind(a,517)),t.dy`
            <sp-overlay
                .triggerElement=${this}
                .offset=${0}
                ?open=${this.open}
                .placement=${this.isMobile.matches?void 0:this.placement}
                type="auto"
                .receivesFocus=${"true"}
                @beforetoggle=${t=>{t.composedPath()[0]===t.target&&("closed"===t.newState&&(this.open=!1),this.open||(this.optionsMenu.updateSelectedItemIndex(),this.optionsMenu.closeDescendentOverlays()))}}
            >
                ${this.renderContainer(e)}
            </sp-overlay>
        `}get renderDescriptionSlot(){return t.dy`
            <div id=${Rr}>
                <slot name="description"></slot>
            </div>
        `}render(){return t.dy`
            <span
                id="focus-helper"
                tabindex="${this.focused||this.open?"-1":"0"}"
                @focus=${this.handleHelperFocus}
                aria-describedby=${Rr}
            ></span>
            <button
                aria-controls=${(0,E.o)(this.open?"menu":void 0)}
                aria-describedby="tooltip"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="true"
                aria-labelledby="icon label applied-label"
                id="button"
                class="button"
                @blur=${this.handleButtonBlur}
                @pointerdown=${this.handleButtonPointerdown}
                @focus=${this.handleButtonFocus}
                @click=${this.handleButtonClick}
                @keydown=${{handleEvent:this.handleEnterKeydown,capture:!0}}
                ?disabled=${this.disabled}
                tabindex="-1"
            >
                ${this.buttonContent}
            </button>
            ${this.renderMenu} ${this.renderDescriptionSlot}
        `}update(t){var e,r;this.selects&&(this.selects="single"),t.has("disabled")&&this.disabled&&(this.open=!1),t.has("value")&&this.shouldScheduleManageSelection(),this.hasUpdated||(this.deprecatedMenu=this.querySelector(":scope > sp-menu"),null==(e=this.deprecatedMenu)||e.toggleAttribute("ignore",!0),null==(r=this.deprecatedMenu)||r.setAttribute("selects","inherit")),super.update(t)}bindButtonKeydownListener(){this.button.addEventListener("keydown",this.handleKeydown)}firstUpdated(t){super.firstUpdated(t),this.bindButtonKeydownListener()}get dismissHelper(){return t.dy`
            <div class="visually-hidden">
                <button
                    tabindex="-1"
                    aria-label="Dismiss"
                    @click=${this.close}
                ></button>
            </div>
        `}renderContainer(e){const r=t.dy`
            ${this.dismissHelper} ${e} ${this.dismissHelper}
        `;return this.isMobile.matches?(a.e(755).then(a.bind(a,755)),t.dy`
                <sp-tray
                    id="popover"
                    role="presentation"
                    style=${(0,qr.V)(this.containerStyles)}
                >
                    ${r}
                </sp-tray>
            `):(a.e(789).then(a.bind(a,789)),t.dy`
            <sp-popover
                id="popover"
                role="presentation"
                style=${(0,qr.V)(this.containerStyles)}
                placement=${this.placement}
            >
                ${r}
            </sp-popover>
        `)}get renderMenu(){const e=t.dy`
            <sp-menu
                aria-labelledby="applied-label"
                @change=${this.handleChange}
                id="menu"
                @keydown=${{handleEvent:this.handleEnterKeydown,capture:!0}}
                role=${this.listRole}
                .selects=${this.selects}
                .selected=${this.value?[this.value]:[]}
                size=${this.size}
                @sp-menu-item-added-or-updated=${this.shouldManageSelection}
            >
                <slot @slotchange=${this.shouldScheduleManageSelection}></slot>
            </sp-menu>
        `;return this.hasRenderedOverlay=this.hasRenderedOverlay||this.focused||this.open||!!this.deprecatedMenu,this.hasRenderedOverlay?this.renderOverlay(e):e}shouldScheduleManageSelection(t){!this.willManageSelection&&(!t||t.target.getRootNode().host===this)&&(this.willManageSelection=!0,requestAnimationFrame((()=>{requestAnimationFrame((()=>{this.manageSelection()}))})))}shouldManageSelection(){this.willManageSelection||(this.willManageSelection=!0,this.manageSelection())}async manageSelection(){if(null==this.selects)return;let t;this.selectionPromise=new Promise((t=>this.selectionResolver=t)),await this.optionsMenu.updateComplete,this.recentlyConnected&&(await new Promise((t=>requestAnimationFrame((()=>t(!0))))),this.recentlyConnected=!1),this.menuItems.forEach((e=>{this.value!==e.value||e.disabled?e.selected=!1:t=e})),t?(t.selected=!!this.selects,this.selectedItem=t):(this.value="",this.selectedItem=void 0),this.open&&(await this.optionsMenu.updateComplete,this.optionsMenu.updateSelectedItemIndex()),this.selectionResolver(),this.willManageSelection=!1}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.selectionPromise,this.overlayElement&&await this.overlayElement.updateComplete,t}connectedCallback(){super.connectedCallback(),this.recentlyConnected=this.hasUpdated}disconnectedCallback(){this.close(),super.disconnectedCallback()}}Fr([(0,d.SB)()],Vr.prototype,"appliedLabel",2),Fr([(0,d.IO)("#button")],Vr.prototype,"button",2),Fr([(0,d.Cb)({type:Boolean,reflect:!0})],Vr.prototype,"disabled",2),Fr([(0,d.Cb)({type:Boolean,reflect:!0})],Vr.prototype,"focused",2),Fr([(0,d.Cb)({type:String,reflect:!0})],Vr.prototype,"icons",2),Fr([(0,d.Cb)({type:Boolean,reflect:!0})],Vr.prototype,"invalid",2),Fr([(0,d.Cb)()],Vr.prototype,"label",2),Fr([(0,d.Cb)({type:Boolean,reflect:!0})],Vr.prototype,"open",2),Fr([(0,d.Cb)({type:Boolean,reflect:!0})],Vr.prototype,"readonly",2),Fr([(0,d.IO)("sp-menu")],Vr.prototype,"optionsMenu",2),Fr([(0,d.IO)("sp-overlay")],Vr.prototype,"overlayElement",2),Fr([(0,d.Cb)()],Vr.prototype,"placement",2),Fr([(0,d.Cb)({type:Boolean,reflect:!0})],Vr.prototype,"quiet",2),Fr([(0,d.Cb)({type:String})],Vr.prototype,"value",2),Fr([(0,d.Cb)({attribute:!1})],Vr.prototype,"selectedItem",1),Fr([(0,d.Cb)({attribute:!1})],Vr.prototype,"selectedItemContent",1),(0,y.N)("sp-picker",class extends Vr{constructor(){super(...arguments),this.handleKeydown=t=>{const{code:e}=t;if(this.focused=!0,!e.startsWith("Arrow")||this.readonly)return;if("ArrowUp"===e||"ArrowDown"===e)return void this.toggle(!0);t.preventDefault();const r=this.selectedItem?this.menuItems.indexOf(this.selectedItem):-1,o=r<0||"ArrowRight"===e?1:-1;let s=r+o;for(;this.menuItems[s]&&this.menuItems[s].disabled;)s+=o;!this.menuItems[s]||this.menuItems[s].disabled||(!this.value||s!==r)&&this.setValueFromItem(this.menuItems[s])}}static get styles(){return[_r,Ne]}get containerStyles(){const t=super.containerStyles;return this.quiet||(t["min-width"]=`${this.offsetWidth}px`),t}});const Kr=t.iv`
::slotted([slot=icon]){fill:var(
--highcontrast-menu-item-color-default,var(
--mod-menu-item-label-icon-color-default,var(--spectrum-menu-item-label-icon-color-default)
)
);color:var(
--highcontrast-menu-item-color-default,var(
--mod-menu-item-label-icon-color-default,var(--spectrum-menu-item-label-icon-color-default)
)
)}.checkmark{fill:var(
--highcontrast-menu-checkmark-icon-color-default,var(
--mod-menu-checkmark-icon-color-default,var(--spectrum-menu-checkmark-icon-color-default)
)
);align-self:center;color:var(
--highcontrast-menu-checkmark-icon-color-default,var(
--mod-menu-checkmark-icon-color-default,var(--spectrum-menu-checkmark-icon-color-default)
)
);display:var(
--mod-menu-checkmark-display,var(--spectrum-menu-checkmark-display)
);opacity:1}:host{align-items:center;background-color:var(
--highcontrast-menu-item-background-color-default,var(
--mod-menu-item-background-color-default,var(--spectrum-menu-item-background-color-default)
)
);box-sizing:border-box;cursor:pointer;line-height:var(
--mod-menu-item-label-line-height,var(--spectrum-menu-item-label-line-height)
);margin:0;min-block-size:var(
--mod-menu-item-min-height,var(--spectrum-menu-item-min-height)
);padding-block-end:var(
--mod-menu-item-bottom-edge-to-text,var(--spectrum-menu-item-bottom-edge-to-text)
);padding-block-start:var(
--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text)
);padding-inline:var(
--mod-menu-item-label-inline-edge-to-content,var(--spectrum-menu-item-label-inline-edge-to-content)
);position:relative;-webkit-text-decoration:none;text-decoration:none}:host{display:grid;grid-template:". chevronAreaCollapsible . iconArea sectionHeadingArea . . ." 1fr "selectedArea chevronAreaCollapsible checkmarkArea iconArea labelArea valueArea actionsArea chevronAreaDrillIn" ". . . . descriptionArea . . ." ". . . . submenuArea . . ."/auto auto auto auto 1fr auto auto auto}#label{grid-area:submenuItemLabelArea}::slotted([slot=value]){grid-area:submenuItemValueArea}:host(:focus),:host([focused]){background-color:var(
--highcontrast-menu-item-background-color-focus,var(
--mod-menu-item-background-color-key-focus,var(--spectrum-menu-item-background-color-key-focus)
)
);outline:none}:host(:focus)>#label,:host([focused])>#label{color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-label-content-color-focus,var(--spectrum-menu-item-label-content-color-focus)
)
)}:host(:focus)>[name=description]::slotted(*),:host([focused])>[name=description]::slotted(*){color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-description-color-focus,var(--spectrum-menu-item-description-color-focus)
)
)}:host(:focus)>::slotted([slot=value]),:host([focused])>::slotted([slot=value]){color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-value-color-focus,var(--spectrum-menu-item-value-color-focus)
)
)}:host(:focus)>.icon:not(.chevron,.checkmark),:host([focused])>.icon:not(.chevron,.checkmark){fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-label-icon-color-focus,var(--spectrum-menu-item-label-icon-color-focus)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-label-icon-color-focus,var(--spectrum-menu-item-label-icon-color-focus)
)
)}:host(:focus)>.chevron,:host([focused])>.chevron{fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)
)
)}:host(:focus)>.checkmark,:host([focused])>.checkmark{fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-checkmark-icon-color-focus,var(--spectrum-menu-checkmark-icon-color-focus)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-checkmark-icon-color-focus,var(--spectrum-menu-checkmark-icon-color-focus)
)
)}:host([focused]){box-shadow:inset calc(var(
--mod-menu-item-focus-indicator-width,
var(--spectrum-menu-item-focus-indicator-width)
)*var(--spectrum-menu-item-focus-indicator-direction-scalar, 1)) 0 0 0 var(
--highcontrast-menu-item-focus-indicator-color,var(
--mod-menu-item-focus-indicator-color,var(--spectrum-menu-item-focus-indicator-color)
)
)}:host([dir=rtl]){--spectrum-menu-item-focus-indicator-direction-scalar:-1}:host(:hover){background-color:var(
--highcontrast-menu-item-background-color-focus,var(
--mod-menu-item-background-color-hover,var(--spectrum-menu-item-background-color-hover)
)
)}:host(:hover)>#label{color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-label-content-color-hover,var(--spectrum-menu-item-label-content-color-hover)
)
)}:host(:hover)>[name=description]::slotted(*){color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-description-color-hover,var(--spectrum-menu-item-description-color-hover)
)
)}:host(:hover)>::slotted([slot=value]){color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-value-color-hover,var(--spectrum-menu-item-value-color-hover)
)
)}:host(:hover)>.icon:not(.chevron,.checkmark){fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-label-icon-color-hover,var(--spectrum-menu-item-label-icon-color-hover)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-label-icon-color-hover,var(--spectrum-menu-item-label-icon-color-hover)
)
)}:host(:hover)>.chevron{fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)
)
)}:host(:hover)>.checkmark{fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-checkmark-icon-color-hover,var(--spectrum-menu-checkmark-icon-color-hover)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-checkmark-icon-color-hover,var(--spectrum-menu-checkmark-icon-color-hover)
)
)}:host:active{background-color:var(
--highcontrast-menu-item-background-color-focus,var(
--mod-menu-item-background-color-down,var(--spectrum-menu-item-background-color-down)
)
)}:host:active>#label{color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-label-content-color-down,var(--spectrum-menu-item-label-content-color-down)
)
)}:host:active>[name=description]::slotted(*){color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-description-color-down,var(--spectrum-menu-item-description-color-down)
)
)}:host:active>::slotted([slot=value]){color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-value-color-down,var(--spectrum-menu-item-value-color-down)
)
)}:host:active>.icon:not(.chevron,.checkmark){fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-label-icon-color-down,var(--spectrum-menu-item-label-icon-color-down)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-label-icon-color-down,var(--spectrum-menu-item-label-icon-color-down)
)
)}:host:active>.chevron{fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)
)
)}:host:active>.checkmark{fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-checkmark-icon-color-down,var(--spectrum-menu-checkmark-icon-color-down)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-checkmark-icon-color-down,var(--spectrum-menu-checkmark-icon-color-down)
)
)}:host([aria-disabled=true]),:host([disabled]){background-color:#0000}:host([aria-disabled=true]) #label,:host([disabled]) #label{color:var(
--highcontrast-menu-item-color-disabled,var(
--mod-menu-item-label-content-color-disabled,var(--spectrum-menu-item-label-content-color-disabled)
)
)}:host([aria-disabled=true]) [name=description]::slotted(*),:host([disabled]) [name=description]::slotted(*){color:var(
--highcontrast-menu-item-color-disabled,var(
--mod-menu-item-description-color-disabled,var(--spectrum-menu-item-description-color-disabled)
)
)}:host([aria-disabled=true]) ::slotted([slot=icon]),:host([disabled]) ::slotted([slot=icon]){fill:var(
--highcontrast-menu-item-color-disabled,var(
--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)
)
);color:var(
--highcontrast-menu-item-color-disabled,var(
--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)
)
)}:host([aria-disabled=true]:hover),:host([disabled]:hover){cursor:default}:host([aria-disabled=true]:hover) ::slotted([slot=icon]),:host([disabled]:hover) ::slotted([slot=icon]){fill:var(
--highcontrast-menu-item-color-disabled,var(
--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)
)
);color:var(
--highcontrast-menu-item-color-disabled,var(
--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)
)
)}::slotted([slot=icon]){align-self:start;grid-area:iconArea}.checkmark{align-self:start;grid-area:checkmarkArea}.menu-itemSelection{grid-area:selectedArea}#label{color:var(
--highcontrast-menu-item-color-default,var(
--mod-menu-item-label-content-color-default,var(--spectrum-menu-item-label-content-color-default)
)
);font-size:var(
--mod-menu-item-label-font-size,var(--spectrum-menu-item-label-font-size)
);grid-area:labelArea}::slotted([slot=value]){grid-area:valueArea}.spectrum-Menu-itemActions{grid-area:actionsArea}.chevron{align-self:center;block-size:var(--spectrum-menu-item-checkmark-height);grid-area:chevronArea;height:var(--spectrum-menu-item-checkmark-height);inline-size:var(--spectrum-menu-item-checkmark-width);width:var(--spectrum-menu-item-checkmark-width)}.spectrum-Menu-item--collapsible .chevron{grid-area:chevronAreaCollapsible}[name=description]::slotted(*){grid-area:descriptionArea}:host([has-submenu]) .chevron{grid-area:chevronAreaDrillIn}.icon:not(.chevron,.checkmark){block-size:var(
--mod-menu-item-icon-height,var(--spectrum-menu-item-icon-height)
);inline-size:var(
--mod-menu-item-icon-width,var(--spectrum-menu-item-icon-width)
)}.checkmark{block-size:var(
--mod-menu-item-checkmark-height,var(--spectrum-menu-item-checkmark-height)
);inline-size:var(
--mod-menu-item-checkmark-width,var(--spectrum-menu-item-checkmark-width)
);margin-block-start:calc(var(
--mod-menu-item-top-to-checkmark,
var(--spectrum-menu-item-top-to-checkmark)
) - var(
--mod-menu-item-top-edge-to-text,
var(--spectrum-menu-item-top-edge-to-text)
));margin-inline-end:var(
--mod-menu-item-text-to-control,var(--spectrum-menu-item-text-to-control)
)}::slotted([slot=icon]){margin-inline-end:var(
--mod-menu-item-label-text-to-visual,var(--spectrum-menu-item-label-text-to-visual)
)}.chevron{margin-inline-end:var(
--mod-menu-item-text-to-control,var(--spectrum-menu-item-text-to-control)
)}[name=description]::slotted(*){color:var(
--highcontrast-menu-item-color-default,var(
--mod-menu-item-description-color-default,var(--spectrum-menu-item-description-color-default)
)
);font-size:var(
--mod-menu-item-description-font-size,var(--spectrum-menu-item-description-font-size)
);-webkit-hyphens:auto;hyphens:auto;line-height:var(
--mod-menu-item-description-line-height,var(--spectrum-menu-item-description-line-height)
);margin-block-start:var(
--mod-menu-item-label-to-description-spacing,var(--spectrum-menu-item-label-to-description-spacing)
);overflow-wrap:break-word}::slotted([slot=value]){color:var(
--highcontrast-menu-item-color-default,var(
--mod-menu-item-value-color-default,var(--spectrum-menu-item-value-color-default)
)
);font-size:var(
--mod-menu-item-label-font-size,var(--spectrum-menu-item-label-font-size)
);justify-self:end;margin-inline-start:var(
--mod-menu-item-label-to-value-area-min-spacing,var(--spectrum-menu-item-label-to-value-area-min-spacing)
)}:host([no-wrap]) #label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.spectrum-Menu-item--collapsible.is-open{padding-block-end:0}.spectrum-Menu-item--collapsible.is-open .chevron{transform:rotate(90deg)}.spectrum-Menu-item--collapsible.is-open:active,.spectrum-Menu-item--collapsible.is-open:focus,.spectrum-Menu-item--collapsible.is-open:hover,:host([focused]) .spectrum-Menu-item--collapsible.is-open{background-color:var(
--highcontrast-menu-item-background-color-default,var(
--mod-menu-item-background-color-default,var(--spectrum-menu-item-background-color-default)
)
)}.spectrum-Menu-item--collapsible>::slotted([slot=icon]){padding-block-end:var(
--mod-menu-section-header-bottom-edge-to-text,var(
--mod-menu-item-bottom-edge-to-text,var(--spectrum-menu-item-bottom-edge-to-text)
)
);padding-block-start:var(
--mod-menu-section-header-top-edge-to-text,var(
--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text)
)
)}:host([dir=rtl]) .chevron{transform:rotate(-180deg)}:host([has-submenu]) .chevron{fill:var(
--highcontrast-menu-item-color-default,var(
--mod-menu-drillin-icon-color-default,var(--spectrum-menu-drillin-icon-color-default)
)
);color:var(
--highcontrast-menu-item-color-default,var(
--mod-menu-drillin-icon-color-default,var(--spectrum-menu-drillin-icon-color-default)
)
);margin-inline-end:0;margin-inline-start:var(
--mod-menu-item-label-to-value-area-min-spacing,var(--spectrum-menu-item-label-to-value-area-min-spacing)
)}:host([has-submenu]) .is-open{--spectrum-menu-item-background-color-default:var(
--highcontrast-menu-item-selected-background-color,var(
--mod-menu-item-background-color-hover,var(--spectrum-menu-item-background-color-hover)
)
)}:host([has-submenu]) .is-open .icon:not(.chevron,.checkmark){fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-label-icon-color-hover,var(--spectrum-menu-item-label-icon-color-hover)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-item-label-icon-color-hover,var(--spectrum-menu-item-label-icon-color-hover)
)
)}:host([has-submenu]) .is-open .chevron{fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-drillin-icon-color-hover,var(--spectrum-menu-drillin-icon-color-hover)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-drillin-icon-color-hover,var(--spectrum-menu-drillin-icon-color-hover)
)
)}:host([has-submenu]) .is-open .checkmark{fill:var(
--highcontrast-menu-checkmark-icon-color-default,var(
--mod-menu-checkmark-icon-color-hover,var(--spectrum-menu-checkmark-icon-color-hover)
)
);color:var(
--highcontrast-menu-checkmark-icon-color-default,var(
--mod-menu-checkmark-icon-color-hover,var(--spectrum-menu-checkmark-icon-color-hover)
)
)}:host([has-submenu]:hover) .chevron{fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-drillin-icon-color-hover,var(--spectrum-menu-drillin-icon-color-hover)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-drillin-icon-color-hover,var(--spectrum-menu-drillin-icon-color-hover)
)
)}:host([has-submenu]:focus) .chevron,:host([has-submenu][focused]) .chevron{fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-drillin-icon-color-focus,var(--spectrum-menu-drillin-icon-color-focus)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-drillin-icon-color-focus,var(--spectrum-menu-drillin-icon-color-focus)
)
)}:host([has-submenu]):active .chevron{fill:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-drillin-icon-color-down,var(--spectrum-menu-drillin-icon-color-down)
)
);color:var(
--highcontrast-menu-item-color-focus,var(
--mod-menu-drillin-icon-color-down,var(--spectrum-menu-drillin-icon-color-down)
)
)}#label{flex:1 1 auto;-webkit-hyphens:auto;hyphens:auto;line-height:var(--spectrum-listitem-texticon-label-line-height);overflow-wrap:break-word;width:calc(100% - var(--spectrum-listitem-texticon-ui-icon-width) - var(--spectrum-listitem-texticon-icon-gap))}.spectrum-Menu-itemLabel--wrapping{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([hidden]){display:none}:host([disabled]){pointer-events:none}#button{inset:0;position:absolute}:host([dir=ltr]) [icon-only]::slotted(:last-of-type){margin-right:auto}:host([dir=rtl]) [icon-only]::slotted(:last-of-type){margin-left:auto}@media (forced-colors:active){:host{forced-color-adjust:none}}::slotted([slot=submenu]){max-width:100%;width:max-content}
`;var Xr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,Wr=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?Gr(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&Xr(e,r,c),c};class Zr extends Event{constructor(t){super("sp-menu-item-added-or-updated",{bubbles:!0,composed:!0}),this.menuCascade=new WeakMap,this.clear(t)}clear(t){this._item=t,this.currentAncestorWithSelects=void 0,t.menuData={cleanupSteps:[],focusRoot:void 0,selectionRoot:void 0,parentMenu:void 0},this.menuCascade=new WeakMap}get item(){return this._item}}class Yr extends(gt(J(tt(D,'[slot="icon"]')))){constructor(){super(),this.active=!1,this.focused=!1,this.selected=!1,this._value="",this.hasSubmenu=!1,this.noWrap=!1,this.open=!1,this.proxyFocus=()=>{this.focus()},this.handleBeforetoggle=t=>{"closed"===t.newState&&(this.open=!0,this.overlayElement.manuallyKeepOpen(),this.overlayElement.removeEventListener("beforetoggle",this.handleBeforetoggle))},this.recentlyLeftChild=!1,this.willDispatchUpdate=!1,this.menuData={focusRoot:void 0,parentMenu:void 0,selectionRoot:void 0,cleanupSteps:[]},this.addEventListener("click",this.handleClickCapture,{capture:!0}),new X(this,{config:{characterData:!0,childList:!0,subtree:!0},callback:()=>{this.breakItemChildrenCache()}})}static get styles(){return[Kr,se,Ne]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return this.itemChildren.content.reduce(((t,e)=>t+(e.textContent||"").trim()),"")}get focusElement(){return this}get hasIcon(){return this.slotContentIsPresent}get itemChildren(){if(!this.iconSlot||!this.contentSlot)return{icon:[],content:[]};if(this._itemChildren)return this._itemChildren;const t=this.iconSlot.assignedElements().map((t=>{const e=t.cloneNode(!0);return e.removeAttribute("slot"),e.classList.toggle("icon"),e})),e=this.contentSlot.assignedNodes().map((t=>t.cloneNode(!0)));return this._itemChildren={icon:t,content:e},this._itemChildren}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}shouldProxyClick(){let t=!1;return this.anchorElement&&(this.anchorElement.click(),t=!0),t}breakItemChildrenCache(){this._itemChildren=void 0,this.triggerUpdate()}renderSubmenu(){const e=t.dy`
            <slot
                name="submenu"
                @slotchange=${this.manageSubmenu}
                @sp-menu-item-added-or-updated=${{handleEvent:t=>{t.clear(t.item)},capture:!0}}
                @focusin=${t=>t.stopPropagation()}
            ></slot>
        `;return this.hasSubmenu?(a.e(517).then(a.bind(a,517)),a.e(789).then(a.bind(a,789)),t.dy`
            <sp-overlay
                .triggerElement=${this}
                ?disabled=${!this.hasSubmenu}
                ?open=${this.hasSubmenu&&this.open}
                .placement=${this.isLTR?"right-start":"left-start"}
                .offset=${[-10,-4]}
                .type=${"auto"}
                @close=${t=>t.stopPropagation()}
            >
                <sp-popover
                    @change=${t=>{this.handleSubmenuChange(t),this.open=!1}}
                    @pointerenter=${this.handleSubmenuPointerenter}
                    @pointerleave=${this.handleSubmenuPointerleave}
                    @sp-menu-item-added-or-updated=${t=>t.stopPropagation()}
                >
                    ${e}
                </sp-popover>
            </sp-overlay>
            <sp-icon-chevron100
                class="spectrum-UIIcon-ChevronRight100 chevron icon"
            ></sp-icon-chevron100>
        `):e}render(){return t.dy`
            ${this.selected?t.dy`
                      <sp-icon-checkmark100
                          id="selected"
                          class="spectrum-UIIcon-Checkmark100 
                            icon 
                            checkmark
                            ${this.hasIcon?"checkmark--withAdjacentIcon":""}"
                      ></sp-icon-checkmark100>
                  `:t.Ld}
            <slot name="icon"></slot>
            <div id="label">
                <slot id="slot"></slot>
            </div>
            <slot name="description"></slot>
            <slot name="value"></slot>
            ${this.href&&this.href.length>0?super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"}):t.Ld}
            ${this.renderSubmenu()}
        `}manageSubmenu(t){const e=t.target.assignedElements({flatten:!0});this.hasSubmenu=!!e.length,this.hasSubmenu&&this.setAttribute("aria-haspopup","true")}handleRemoveActive(){this.open||(this.active=!1)}handlePointerdown(t){this.active=!0,t.target===this&&this.hasSubmenu&&this.open&&(this.addEventListener("focus",this.handleSubmenuFocus,{once:!0}),this.overlayElement.addEventListener("beforetoggle",this.handleBeforetoggle))}firstUpdated(t){super.firstUpdated(t),this.setAttribute("tabindex","-1"),this.addEventListener("pointerdown",this.handlePointerdown),this.addEventListener("pointerenter",this.closeOverlaysForRoot),this.hasAttribute("id")||(this.id=`sp-menu-item-${crypto.randomUUID().slice(0,8)}`)}closeOverlaysForRoot(){var t;this.open||null==(t=this.menuData.parentMenu)||t.closeDescendentOverlays()}handleSubmenuClick(t){t.composedPath().includes(this.overlayElement)||this.openOverlay()}handleSubmenuFocus(){requestAnimationFrame((()=>{this.overlayElement.open=this.open}))}handlePointerenter(){if(this.leaveTimeout)return clearTimeout(this.leaveTimeout),void delete this.leaveTimeout;this.openOverlay()}handlePointerleave(){this.open&&!this.recentlyLeftChild&&(this.leaveTimeout=setTimeout((()=>{delete this.leaveTimeout,this.open=!1}),100))}handleSubmenuChange(t){var e;t.stopPropagation(),null==(e=this.menuData.selectionRoot)||e.selectOrToggleItem(this)}handleSubmenuPointerenter(){this.recentlyLeftChild=!0}async handleSubmenuPointerleave(){requestAnimationFrame((()=>{this.recentlyLeftChild=!1}))}handleSubmenuOpen(t){this.focused=!1;const e=t.composedPath().find((t=>t!==this.overlayElement&&"sp-overlay"===t.localName));this.overlayElement.parentOverlayToForceClose=e}cleanup(){this.open=!1,this.active=!1}async openOverlay(){!this.hasSubmenu||this.open||this.disabled||(this.open=!0,this.active=!0,this.setAttribute("aria-expanded","true"),this.addEventListener("sp-closed",this.cleanup,{once:!0}))}updateAriaSelected(){const t=this.getAttribute("role");"option"===t?this.setAttribute("aria-selected",this.selected?"true":"false"):("menuitemcheckbox"===t||"menuitemradio"===t)&&this.setAttribute("aria-checked",this.selected?"true":"false")}setRole(t){this.setAttribute("role",t),this.updateAriaSelected()}updated(t){var e,r,o;if(super.updated(t),t.has("label")&&(this.label||void 0!==t.get("label"))&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active||void 0!==t.get("active")))if(this.active){null==(e=this.menuData.selectionRoot)||e.closeDescendentOverlays(),this.abortControllerPointer=new AbortController;const t={signal:this.abortControllerPointer.signal};this.addEventListener("pointerup",this.handleRemoveActive,t),this.addEventListener("pointerleave",this.handleRemoveActive,t),this.addEventListener("pointercancel",this.handleRemoveActive,t)}else null==(r=this.abortControllerPointer)||r.abort();if(this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1),t.has("selected")&&this.updateAriaSelected(),t.has("hasSubmenu")&&(this.hasSubmenu||void 0!==t.get("hasSubmenu")))if(this.hasSubmenu){this.abortControllerSubmenu=new AbortController;const t={signal:this.abortControllerSubmenu.signal};this.addEventListener("click",this.handleSubmenuClick,t),this.addEventListener("pointerenter",this.handlePointerenter,t),this.addEventListener("pointerleave",this.handlePointerleave,t),this.addEventListener("sp-opened",this.handleSubmenuOpen,t)}else null==(o=this.abortControllerSubmenu)||o.abort()}connectedCallback(){super.connectedCallback(),this.triggerUpdate()}disconnectedCallback(){this.menuData.cleanupSteps.forEach((t=>t(this))),super.disconnectedCallback()}async triggerUpdate(){this.willDispatchUpdate||(this.willDispatchUpdate=!0,await new Promise((t=>requestAnimationFrame(t))),this.dispatchUpdate())}dispatchUpdate(){this.dispatchEvent(new Zr(this)),this.willDispatchUpdate=!1}}Wr([(0,d.Cb)({type:Boolean,reflect:!0})],Yr.prototype,"active",2),Wr([(0,d.Cb)({type:Boolean,reflect:!0})],Yr.prototype,"focused",2),Wr([(0,d.Cb)({type:Boolean,reflect:!0})],Yr.prototype,"selected",2),Wr([(0,d.Cb)({type:String})],Yr.prototype,"value",1),Wr([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"has-submenu"})],Yr.prototype,"hasSubmenu",2),Wr([(0,d.IO)("slot:not([name])")],Yr.prototype,"contentSlot",2),Wr([(0,d.IO)('slot[name="icon"]')],Yr.prototype,"iconSlot",2),Wr([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"no-wrap",hasChanged:()=>!1})],Yr.prototype,"noWrap",2),Wr([(0,d.IO)(".anchor")],Yr.prototype,"anchorElement",2),Wr([(0,d.IO)("sp-overlay")],Yr.prototype,"overlayElement",2),Wr([(0,d.Cb)({type:Boolean,reflect:!0})],Yr.prototype,"open",2),(0,y.N)("sp-menu-item",Yr);const Jr=t.iv`
:host{--spectrum-divider-background-color-small:var(--spectrum-gray-300);--spectrum-divider-background-color-medium:var(--spectrum-gray-300);--spectrum-divider-background-color-large:var(--spectrum-gray-800);--spectrum-divider-background-color-small-static-white:var(
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
)}:host([size=s]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-small);--spectrum-divider-background-color:var(
--spectrum-divider-background-color-small
)}:host{--spectrum-divider-thickness:var(--spectrum-divider-thickness-medium);--spectrum-divider-background-color:var(
--spectrum-divider-background-color-medium
)}:host([size=l]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-large);--spectrum-divider-background-color:var(
--spectrum-divider-background-color-large
)}@media (forced-colors:active){:host,:host([size=l]),:host([size=s]){--spectrum-divider-background-color:CanvasText;--spectrum-divider-background-color-small-static-white:CanvasText;--spectrum-divider-background-color-medium-static-white:CanvasText;--spectrum-divider-background-color-large-static-white:CanvasText;--spectrum-divider-background-color-small-static-black:CanvasText;--spectrum-divider-background-color-medium-static-black:CanvasText;--spectrum-divider-background-color-large-static-black:CanvasText}}:host{background-color:var(
--mod-divider-background-color,var(--spectrum-divider-background-color)
);block-size:var(--mod-divider-thickness,var(--spectrum-divider-thickness));border:none;border-radius:var(
--mod-divider-thickness,var(--spectrum-divider-thickness)
);border-width:var(
--mod-divider-thickness,var(--spectrum-divider-thickness)
);inline-size:100%;overflow:visible}:host([static=white][size=s]){--spectrum-divider-background-color:var(
--mod-divider-background-color-small-static-white,var(--spectrum-divider-background-color-small-static-white)
)}:host([static=white]){--spectrum-divider-background-color:var(
--mod-divider-background-color-medium-static-white,var(--spectrum-divider-background-color-medium-static-white)
)}:host([static=white][size=l]){--spectrum-divider-background-color:var(
--mod-divider-background-color-large-static-white,var(--spectrum-divider-background-color-large-static-white)
)}:host([static=black][size=s]){--spectrum-divider-background-color:var(
--mod-divider-background-color-small-static-black,var(--spectrum-divider-background-color-small-static-black)
)}:host([static=black]){--spectrum-divider-background-color:var(
--mod-divider-background-color-medium-static-black,var(--spectrum-divider-background-color-medium-static-black)
)}:host([static=black][size=l]){--spectrum-divider-background-color:var(
--mod-divider-background-color-large-static-black,var(--spectrum-divider-background-color-large-static-black)
)}:host([vertical]){align-self:var(--mod-divider-vertical-align);block-size:100%;inline-size:var(
--mod-divider-thickness,var(--spectrum-divider-thickness)
);height:var(--mod-divider-vertical-height);margin-block:var(--mod-divider-vertical-margin)}:host{display:block}hr{border:none;margin:0}
`;var Qr=Object.defineProperty;Object.getOwnPropertyDescriptor;class to extends(z(u.o,{validSizes:["s","m","l"],noDefaultSize:!0})){constructor(){super(...arguments),this.vertical=!1}render(){return t.dy``}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","separator")}updated(t){super.updated(t),t.has("vertical")&&(this.vertical?this.setAttribute("aria-orientation","vertical"):this.removeAttribute("aria-orientation"))}}to.styles=[Jr],((t,e,r,o)=>{for(var s,c=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(c=s(e,r,c)||c);c&&Qr(e,r,c)})([(0,d.Cb)({type:Boolean,reflect:!0})],to.prototype,"vertical"),(0,y.N)("sp-divider",to);const eo=t.iv`
:host{--spectrum-helptext-line-height:var(--spectrum-line-height-100);--spectrum-helptext-content-color-default:var(
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
)}:host(:lang(ja)),:host(:lang(ko)),:host(:lang(zh)){--spectrum-helptext-line-height-cjk:var(--spectrum-cjk-line-height-100)}:host([size=s]){--spectrum-helptext-min-height:var(--spectrum-component-height-75);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-helptext-font-size:var(--spectrum-font-size-75);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-helptext-top-to-workflow-icon:var(
--spectrum-help-text-top-to-workflow-icon-small
);--spectrum-helptext-bottom-to-workflow-icon:var(
--spectrum-helptext-top-to-workflow-icon
);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-helptext-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
)}:host{--spectrum-helptext-min-height:var(--spectrum-component-height-75);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-helptext-font-size:var(--spectrum-font-size-75);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-helptext-top-to-workflow-icon:var(
--spectrum-help-text-top-to-workflow-icon-medium
);--spectrum-helptext-bottom-to-workflow-icon:var(
--spectrum-helptext-top-to-workflow-icon
);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-helptext-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
)}:host([size=l]){--spectrum-helptext-min-height:var(--spectrum-component-height-100);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-helptext-font-size:var(--spectrum-font-size-100);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-100);--spectrum-helptext-top-to-workflow-icon:var(
--spectrum-help-text-top-to-workflow-icon-large
);--spectrum-helptext-bottom-to-workflow-icon:var(
--spectrum-helptext-top-to-workflow-icon
);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-helptext-bottom-to-text:var(
--spectrum-component-bottom-to-text-100
)}:host([size=xl]){--spectrum-helptext-min-height:var(--spectrum-component-height-200);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-300);--spectrum-helptext-font-size:var(--spectrum-font-size-200);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-200);--spectrum-helptext-top-to-workflow-icon:var(
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
`;var ro=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,so=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?oo(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&ro(e,r,c),c};class co extends(z(u.o,{noDefaultSize:!0})){constructor(){super(...arguments),this.icon=!1,this.variant="neutral"}static get styles(){return[eo]}render(){return t.dy`
            ${"negative"===this.variant&&this.icon?t.dy`
                      <sp-icon-alert class="icon"></sp-icon-alert>
                  `:t.Ld}
            <div class="text"><slot></slot></div>
        `}}so([(0,d.Cb)({type:Boolean,reflect:!0})],co.prototype,"icon",2),so([(0,d.Cb)({reflect:!0})],co.prototype,"variant",2),(0,y.N)("sp-help-text",co);const ao=t.iv`
:host{--spectrum-accordion-item-height:var(--spectrum-component-height-200);--spectrum-accordion-item-width:var(--spectrum-accordion-minimum-width);--spectrum-accordion-disclosure-indicator-height:var(
--spectrum-component-height-100
);--spectrum-accordion-disclosure-indicator-to-text-space:var(
--spectrum-accordion-disclosure-indicator-to-text
);--spectrum-accordion-edge-to-disclosure-indicator-space:var(
--spectrum-accordion-edge-to-disclosure-indicator
);--spectrum-accordion-edge-to-text-space:var(
--spectrum-accordion-edge-to-text
);--spectrum-accordion-item-header-top-to-text-space:var(
--spectrum-accordion-top-to-text-regular-medium
);--spectrum-accordion-item-header-bottom-to-text-space:var(
--spectrum-accordion-bottom-to-text-regular-medium
);--spectrum-accordion-focus-indicator-gap:var(
--spectrum-focus-indicator-gap
);--spectrum-accordion-focus-indicator-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-accordion-corner-radius:var(--spectrum-corner-radius-100);--spectrum-accordion-item-content-area-top-to-content:var(
--spectrum-accordion-content-area-top-to-content
);--spectrum-accordion-item-content-area-bottom-to-content:var(
--spectrum-accordion-content-area-bottom-to-content
);--spectrum-accordion-component-edge-to-text:var(
--spectrum-component-edge-to-text-75
);--spectrum-accordion-item-header-font:var(
--spectrum-sans-font-family-stack
);--spectrum-accordion-item-header-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-accordion-item-header-font-style:var(
--spectrum-default-font-style
);--spectrum-accordion-item-header-font-size:var(--spectrum-font-size-300);--spectrum-accordion-item-header-line-height:1.25;--spectrum-accordion-item-content-font:var(
--spectrum-sans-font-family-stack
);--spectrum-accordion-item-content-font-weight:var(
--spectrum-body-sans-serif-font-weight
);--spectrum-accordion-item-content-font-style:var(
--spectrum-body-sans-serif-font-style
);--spectrum-accordion-item-content-font-size:var(--spectrum-body-size-s);--spectrum-accordion-item-content-line-height:var(
--spectrum-line-height-100
);--spectrum-accordion-background-color-default:rgba(var(--spectrum-gray-900-rgb),var(--spectrum-background-opacity-default));--spectrum-accordion-background-color-hover:rgba(var(--spectrum-gray-900-rgb),var(--spectrum-background-opacity-hover));--spectrum-accordion-background-color-down:rgba(var(--spectrum-gray-900-rgb),var(--spectrum-background-opacity-down));--spectrum-accordion-background-color-key-focus:rgba(var(--spectrum-gray-900-rgb),var(--spectrum-background-opacity-key-focus));--spectrum-accordion-item-header-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-accordion-item-header-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-accordion-item-header-color-down:var(
--spectrum-neutral-content-color-down
);--spectrum-accordion-item-header-color-key-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-accordion-item-header-disabled-color:var(
--spectrum-disabled-content-color
);--spectrum-accordion-item-content-disabled-color:var(
--spectrum-disabled-content-color
);--spectrum-accordion-item-content-color:var(--spectrum-body-color);--spectrum-accordion-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-accordion-divider-color:var(--spectrum-gray-300);--spectrum-accordion-min-block-size:max(var(--mod-accordion-item-height,var(--spectrum-accordion-item-height)),calc(var(
--mod-accordion-item-header-top-to-text-space,
var(--spectrum-accordion-item-header-top-to-text-space)
) + var(
--mod-accordion-item-header-bottom-to-text-space,
var(--spectrum-accordion-item-header-bottom-to-text-space)
) + var(
--mod-accordion-item-header-font-size,
var(--spectrum-accordion-item-header-font-size)
)*var(
--mod-accordion-item-header-line-height,
var(--spectrum-accordion-item-header-line-height)
)))}:host:lang(ja),:host:lang(ko),:host:lang(zh){--spectrum-accordion-item-header-line-height:var(
--spectrum-cjk-line-height-100
)}:host:lang(ja),:host:lang(ko),:host:lang(zh){--spectrum-accordion-item-content-line-height:var(
--spectrum-cjk-line-height-100
)}:host([density=compact]){--spectrum-accordion-item-height:var(--spectrum-component-height-100);--spectrum-accordion-item-header-top-to-text-space:var(
--spectrum-accordion-top-to-text-compact-medium
);--spectrum-accordion-item-header-bottom-to-text-space:var(
--spectrum-accordion-bottom-to-text-compact-medium
)}:host([density=compact][size=s]){--spectrum-accordion-item-height:var(--spectrum-component-height-75);--spectrum-accordion-item-header-top-to-text-space:var(
--spectrum-accordion-top-to-text-compact-small
);--spectrum-accordion-item-header-bottom-to-text-space:var(
--spectrum-accordion-bottom-to-text-compact-small
)}:host([density=compact][size=l]){--spectrum-accordion-item-height:var(--spectrum-component-height-200);--spectrum-accordion-item-header-top-to-text-space:var(
--spectrum-accordion-top-to-text-compact-large
);--spectrum-accordion-item-header-bottom-to-text-space:var(
--spectrum-accordion-bottom-to-text-compact-large
)}:host([density=compact][size=xl]){--spectrum-accordion-item-height:var(--spectrum-component-height-300);--spectrum-accordion-item-header-top-to-text-space:var(
--spectrum-accordion-top-to-text-compact-extra-large
);--spectrum-accordion-item-header-bottom-to-text-space:var(
--spectrum-accordion-bottom-to-text-compact-extra-large
)}:host([density=spacious]){--spectrum-accordion-item-header-line-height:1.278;--spectrum-accordion-item-header-top-to-text-space:var(
--spectrum-accordion-top-to-text-spacious-medium
);--spectrum-accordion-item-header-bottom-to-text-space:var(
--spectrum-accordion-bottom-to-text-spacious-medium
)}:host([density=spacious][size=s]){--spectrum-accordion-item-header-line-height:1.25;--spectrum-accordion-item-header-top-to-text-space:var(
--spectrum-accordion-small-top-to-text-spacious
);--spectrum-accordion-item-header-bottom-to-text-space:var(
--spectrum-accordion-bottom-to-text-spacious-small
)}:host([density=spacious][size=l]){--spectrum-accordion-item-header-line-height:1.273;--spectrum-accordion-item-header-top-to-text-space:var(
--spectrum-accordion-top-to-text-spacious-large
);--spectrum-accordion-item-header-bottom-to-text-space:var(
--spectrum-accordion-bottom-to-text-spacious-large
)}:host([density=spacious][size=xl]){--spectrum-accordion-item-header-line-height:1.25;--spectrum-accordion-item-header-top-to-text-space:var(
--spectrum-accordion-top-to-text-spacious-extra-large
);--spectrum-accordion-item-header-bottom-to-text-space:var(
--spectrum-accordion-bottom-to-text-spacious-extra-large
)}:host([size=s]){--spectrum-accordion-item-height:var(--spectrum-component-height-100);--spectrum-accordion-disclosure-indicator-height:var(
--spectrum-component-height-75
);--spectrum-accordion-component-edge-to-text:var(
--spectrum-component-edge-to-text-50
);--spectrum-accordion-item-header-font-size:var(--spectrum-font-size-200);--spectrum-accordion-item-content-font-size:var(--spectrum-body-size-xs);--spectrum-accordion-item-header-top-to-text-space:var(
--spectrum-accordion-top-to-text-regular-small
);--spectrum-accordion-item-header-bottom-to-text-space:var(
--spectrum-accordion-bottom-to-text-regular-small
)}:host([size=l]){--spectrum-accordion-item-height:var(--spectrum-component-height-300);--spectrum-accordion-disclosure-indicator-height:var(
--spectrum-component-height-200
);--spectrum-accordion-component-edge-to-text:var(
--spectrum-component-edge-to-text-100
);--spectrum-accordion-item-header-font-size:var(--spectrum-font-size-500);--spectrum-accordion-item-content-font-size:var(--spectrum-body-size-m);--spectrum-accordion-item-header-top-to-text-space:var(
--spectrum-accordion-top-to-text-regular-large
);--spectrum-accordion-item-header-bottom-to-text-space:var(
--spectrum-accordion-bottom-to-text-regular-large
)}:host([size=xl]){--spectrum-accordion-item-height:var(--spectrum-component-height-400);--spectrum-accordion-disclosure-indicator-height:var(
--spectrum-component-height-300
);--spectrum-accordion-component-edge-to-text:var(
--spectrum-component-edge-to-text-200
);--spectrum-accordion-item-header-font-size:var(--spectrum-font-size-700);--spectrum-accordion-item-content-font-size:var(--spectrum-body-size-l);--spectrum-accordion-item-header-top-to-text-space:var(
--spectrum-accordion-top-to-text-regular-extra-large
);--spectrum-accordion-item-header-bottom-to-text-space:var(
--spectrum-accordion-bottom-to-text-regular-extra-large
)}:host{display:block;list-style:none;margin:0;padding:0}
`;var io=Object.defineProperty,no=Object.getOwnPropertyDescriptor,lo=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?no(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&io(e,r,c),c};class uo extends(z(u.o,{noDefaultSize:!0})){constructor(){super(...arguments),this.allowMultiple=!1,this.focusGroupController=new U(this,{direction:"vertical",elements:()=>this.items,isFocusableElement:t=>!t.disabled})}static get styles(){return[ao]}get items(){return[...this.defaultNodes||[]].filter((t=>void 0!==t.tagName))}focus(){this.focusGroupController.focus()}async onToggle(t){const e=t.target;if(await 0,this.allowMultiple||t.defaultPrevented)return;const r=[...this.items];r&&!r.length||r.forEach((t=>{t!==e&&(t.open=!1)}))}handleSlotchange(){this.focusGroupController.clearElementCache(),this.items.forEach((t=>{t.size=this.size}))}updated(t){super.updated(t),t.has("size")&&(t.get("size")||"m"!==this.size)&&this.items.forEach((t=>{t.size=this.size}))}render(){return t.dy`
            <slot
                @slotchange=${this.handleSlotchange}
                @sp-accordion-item-toggle=${this.onToggle}
            ></slot>
        `}}lo([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"allow-multiple"})],uo.prototype,"allowMultiple",2),lo([(0,d.Cb)({type:String,reflect:!0})],uo.prototype,"density",2),lo([(0,d.vZ)()],uo.prototype,"defaultNodes",2),(0,y.N)("sp-accordion",uo);const mo=t.iv`
:host{border-block-end:1px solid #0000;border-color:var(
--mod-accordion-divider-color,var(--spectrum-accordion-divider-color)
);border-width:var(
--mod-accordion-divider-thickness,var(--spectrum-divider-thickness-small)
);margin:0;min-block-size:var(
--mod-accordion-item-height,var(--spectrum-accordion-item-height)
);min-inline-size:var(
--mod-accordion-item-width,var(--spectrum-accordion-item-width)
);position:relative;z-index:inherit}:host(:first-child){border-block-start:1px solid #0000;border-color:var(
--mod-accordion-divider-color,var(--spectrum-accordion-divider-color)
);border-width:var(
--mod-accordion-divider-thickness,var(--spectrum-divider-thickness-small)
)}#heading{box-sizing:border-box;margin:0}.iconContainer{align-items:center;block-size:var(
--mod-accordion-disclosure-indicator-height,var(--spectrum-accordion-disclosure-indicator-height)
);color:var(
--mod-accordion-item-header-color-default,var(--spectrum-accordion-item-header-color-default)
);display:flex;inline-size:var(
--mod-accordion-disclosure-indicator-height,var(--spectrum-accordion-disclosure-indicator-height)
);inset-block-start:max(0px,calc((var(
--mod-accordion-min-block-size,
var(--spectrum-accordion-min-block-size)
) - var(
--mod-accordion-disclosure-indicator-height,
var(
--spectrum-accordion-disclosure-indicator-height
)
))/2));justify-content:center;padding-inline-start:var(
--mod-accordion-edge-to-disclosure-indicator-space,var(--spectrum-accordion-edge-to-disclosure-indicator-space)
);position:absolute}:host([dir=rtl]) .iconContainer{transform:scaleX(-1)}#content{color:var(
--mod-accordion-item-content-color,var(--spectrum-accordion-item-content-color)
);display:none;font-family:var(
--mod-accordion-item-content-font,var(--spectrum-accordion-item-content-font)
);font-size:var(
--mod-accordion-item-content-font-size,var(--spectrum-accordion-item-content-font-size)
);font-style:var(
--mod-accordion-item-content-font-style,var(--spectrum-accordion-item-content-font-style)
);font-weight:var(
--mod-accordion-item-content-font-weight,var(--spectrum-accordion-item-content-font-weight)
);line-height:var(
--mod-accordion-item-content-line-height,var(--spectrum-accordion-item-content-line-height)
);padding-block:var(
--mod-accordion-item-content-area-top-to-content,var(--spectrum-accordion-item-content-area-top-to-content)
) var(
--mod-accordion-item-content-area-bottom-to-content,var(--spectrum-accordion-item-content-area-bottom-to-content)
);padding-inline:var(
--mod-accordion-component-edge-to-text,var(--spectrum-accordion-component-edge-to-text)
) var(
--mod-accordion-component-edge-to-text,var(--spectrum-accordion-component-edge-to-text)
)}#header{align-items:center;appearance:none;background-color:var(
--mod-accordion-background-color-default,var(--spectrum-accordion-background-color-default)
);border:0;box-sizing:border-box;color:var(
--mod-accordion-item-header-color-default,var(--spectrum-accordion-item-header-color-default)
);cursor:pointer;display:flex;font-family:var(
--mod-accordion-item-header-font,var(--spectrum-accordion-item-header-font)
);font-size:var(
--mod-accordion-item-header-font-size,var(--spectrum-accordion-item-header-font-size)
);font-style:var(
--mod-accordion-item-header-font-style,var(--spectrum-accordion-item-header-font-style)
);font-weight:var(
--mod-accordion-item-header-font-weight,var(--spectrum-accordion-item-header-font-weight)
);inline-size:100%;justify-content:flex-start;line-height:var(
--mod-accordion-item-header-line-height,var(--spectrum-accordion-item-header-line-height)
);min-block-size:var(
--mod-accordion-min-block-size,var(--spectrum-accordion-min-block-size)
);padding-block:var(
--mod-accordion-item-header-top-to-text-space,var(--spectrum-accordion-item-header-top-to-text-space)
) var(
--mod-accordion-item-header-bottom-to-text-space,var(--spectrum-accordion-item-header-bottom-to-text-space)
);padding-inline-end:var(
--mod-accordion-edge-to-text-space,var(--spectrum-accordion-edge-to-text-space)
);padding-inline-start:calc(var(
--mod-accordion-disclosure-indicator-to-text-space,
var(--spectrum-accordion-disclosure-indicator-to-text-space)
) + var(
--mod-accordion-disclosure-indicator-height,
var(--spectrum-accordion-disclosure-indicator-height)
));position:relative;text-align:start;text-overflow:ellipsis}#header:focus{outline:none}#header:focus:after{content:"";inset-inline-start:0;position:absolute}#header:hover{background-color:var(
--mod-accordion-background-color-hover,var(--spectrum-accordion-background-color-hover)
);color:var(
--mod-accordion-item-header-color-hover,var(--spectrum-accordion-item-header-color-hover)
)}#header:hover+.iconContainer{color:var(
--mod-accordion-item-header-color-hover,var(--spectrum-accordion-item-header-color-hover)
)}#header.focus-visible{background-color:var(
--mod-accordion-background-color-key-focus,var(--spectrum-accordion-background-color-key-focus)
);border-radius:var(
--mod-accordion-corner-radius,var(--spectrum-accordion-corner-radius)
);color:var(
--mod-accordion-item-header-color-key-focus,var(--spectrum-accordion-item-header-color-key-focus)
);outline:var(
--mod-accordion-focus-indicator-thickness,var(--spectrum-accordion-focus-indicator-thickness)
) solid var(
--mod-accordion-focus-indicator-color,var(--spectrum-accordion-focus-indicator-color)
);outline-offset:calc(var(
--mod-accordion-focus-indicator-gap,
var(--spectrum-accordion-focus-indicator-gap)
)*-1)}#header:focus-visible{background-color:var(
--mod-accordion-background-color-key-focus,var(--spectrum-accordion-background-color-key-focus)
);border-radius:var(
--mod-accordion-corner-radius,var(--spectrum-accordion-corner-radius)
);color:var(
--mod-accordion-item-header-color-key-focus,var(--spectrum-accordion-item-header-color-key-focus)
);outline:var(
--mod-accordion-focus-indicator-thickness,var(--spectrum-accordion-focus-indicator-thickness)
) solid var(
--mod-accordion-focus-indicator-color,var(--spectrum-accordion-focus-indicator-color)
);outline-offset:calc(var(
--mod-accordion-focus-indicator-gap,
var(--spectrum-accordion-focus-indicator-gap)
)*-1)}#header:active{background-color:var(
--mod-accordion-background-color-down,var(--spectrum-accordion-background-color-down)
);color:var(
--mod-accordion-item-header-color-down,var(--spectrum-accordion-item-header-color-down)
)}:host([open]) #header:hover{background-color:var(
--mod-accordion-background-color-hover,var(--spectrum-accordion-background-color-hover)
)}:host([disabled]) #header,:host([disabled]) #header.focus-visible,:host([disabled]) #header:hover{background-color:#0000;color:var(
--mod-accordion-item-header-disabled-color,var(--spectrum-accordion-item-header-disabled-color)
)}:host([disabled]) #header,:host([disabled]) #header:focus-visible,:host([disabled]) #header:hover{background-color:#0000;color:var(
--mod-accordion-item-header-disabled-color,var(--spectrum-accordion-item-header-disabled-color)
)}:host([disabled]) #header+.iconContainer{color:var(
--mod-accordion-item-header-disabled-color,var(--spectrum-accordion-item-header-disabled-color)
)}:host([disabled]) #content{color:var(
--mod-accordion-item-content-disabled-color,var(--spectrum-accordion-item-content-disabled-color)
)}@media (forced-colors:active){#header:after{content:"";forced-color-adjust:none;inset-inline-start:0;position:absolute}}:host([dir=ltr][open])>#heading>.iconContainer>.indicator{transform:rotate(90deg)}:host([dir=rtl][open])>#heading>.iconContainer>.indicator{transform:matrix(-1,0,0,1,0,0) rotate(90deg)}:host([dir=ltr][open])>.iconContainer>.indicator{transform:rotate(90deg)}:host([dir=rtl][open])>.iconContainer>.indicator{transform:matrix(-1,0,0,1,0,0) rotate(90deg)}:host([open])>#content{display:block}:host([disabled]) #header{cursor:default}:host{display:block}#heading{height:auto;position:relative}:host([disabled]) #heading .indicator{color:var(
--mod-accordion-item-header-disabled-color,var(--spectrum-accordion-item-header-disabled-color)
)}
`;var po=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,bo=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?ho(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&po(e,r,c),c};const go={s:()=>t.dy`
        <span class="iconContainer">
            <sp-icon-chevron100
                class="indicator spectrum-UIIcon-ChevronRight75"
                slot="icon"
            ></sp-icon-chevron100>
        </span>
    `,m:()=>t.dy`
        <span class="iconContainer">
            <sp-icon-chevron100
                class="indicator spectrum-UIIcon-ChevronRight100"
                slot="icon"
            ></sp-icon-chevron100>
        </span>
    `,l:()=>t.dy`
        <span class="iconContainer">
            <sp-icon-chevron100
                class="indicator spectrum-UIIcon-ChevronRight200"
                slot="icon"
            ></sp-icon-chevron100>
        </span>
    `,xl:()=>t.dy`
        <span class="iconContainer">
            <sp-icon-chevron100
                class="indicator spectrum-UIIcon-ChevronRight300"
                slot="icon"
            ></sp-icon-chevron100>
        </span>
    `};class vo extends(z(D,{noDefaultSize:!0})){constructor(){super(...arguments),this.open=!1,this.label="",this.disabled=!1,this.renderChevronIcon=()=>go[this.size||"m"]()}static get styles(){return[mo,Ne]}get focusElement(){return this.shadowRoot.querySelector("#header")}onClick(){this.disabled||this.toggle()}toggle(){this.open=!this.open,this.dispatchEvent(new CustomEvent("sp-accordion-item-toggle",{bubbles:!0,composed:!0,cancelable:!0}))||(this.open=!this.open)}render(){return t.dy`
            <h3 id="heading">
                ${function(t,e,r){return t?e():void 0}(this.size,this.renderChevronIcon)}
                <button
                    id="header"
                    @click=${this.onClick}
                    aria-expanded=${this.open}
                    aria-controls="content"
                    ?disabled=${this.disabled}
                >
                    ${this.label}
                </button>
            </h3>
            <div id="content" role="region" aria-labelledby="header">
                <slot></slot>
            </div>
        `}updated(t){super.updated(t),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}}bo([(0,d.Cb)({type:Boolean,reflect:!0})],vo.prototype,"open",2),bo([(0,d.Cb)({type:String,reflect:!0})],vo.prototype,"label",2),bo([(0,d.Cb)({type:Boolean,reflect:!0})],vo.prototype,"disabled",2),(0,y.N)("sp-accordion-item",vo);const fo=t.iv`
:host{--spectrum-sidenav-focus-ring-size:var(
--spectrum-focus-indicator-thickness
);--spectrum-sidenav-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-sidenav-focus-ring-color:var(--spectrum-focus-indicator-color);--spectrum-sidenav-min-height:var(--spectrum-component-height-100);--spectrum-sidenav-width:100%;--spectrum-sidenav-min-width:var(--spectrum-side-navigation-minimum-width);--spectrum-sidenav-max-width:var(--spectrum-side-navigation-maximum-width);--spectrum-sidenav-border-radius:var(--spectrum-corner-radius-100);--spectrum-sidenav-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-sidenav-icon-spacing:var(--spectrum-text-to-visual-100);--spectrum-sidenav-inline-padding:var(
--spectrum-component-edge-to-text-100
);--spectrum-sidenav-gap:var(--spectrum-side-navigation-item-to-item);--spectrum-sidenav-top-to-icon:var(
--spectrum-component-top-to-workflow-icon-100
);--spectrum-sidenav-top-to-label:var(--spectrum-component-top-to-text-100);--spectrum-sidenav-bottom-to-label:var(
--spectrum-side-navigation-bottom-to-text
);--spectrum-sidenav-start-to-content-second-level:var(
--spectrum-side-navigation-second-level-edge-to-text
);--spectrum-sidenav-start-to-content-third-level:var(
--spectrum-side-navigation-third-level-edge-to-text
);--spectrum-sidenav-start-to-content-with-icon-second-level:var(
--spectrum-side-navigation-with-icon-second-level-edge-to-text
);--spectrum-sidenav-start-to-content-with-icon-third-level:var(
--spectrum-side-navigation-with-icon-third-level-edge-to-text
);--spectrum-sidenav-background-disabled:transparent;--spectrum-sidenav-background-default:transparent;--spectrum-sidenav-background-hover:var(--spectrum-gray-200);--spectrum-sidenav-item-background-down:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus:var(--spectrum-gray-200);--spectrum-sidenav-item-background-default-selected:var(
--spectrum-gray-200
);--spectrum-sidenav-background-hover-selected:var(--spectrum-gray-300);--spectrum-sidenav-item-background-down-selected:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus-selected:var(--spectrum-gray-200);--spectrum-sidenav-header-color:var(--spectrum-gray-600);--spectrum-sidenav-content-disabled-color:var(
--spectrum-disabled-content-color
);--spectrum-sidenav-content-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-sidenav-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-sidenav-content-color-down:var(
--spectrum-neutral-content-color-down
);--spectrum-sidenav-content-color-key-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-sidenav-content-color-default-selected:var(
--spectrum-neutral-content-color-default
);--spectrum-sidenav-content-color-hover-selected:var(
--spectrum-neutral-content-color-hover
);--spectrum-sidenav-content-color-down-selected:var(
--spectrum-neutral-content-color-down
);--spectrum-sidenav-content-color-key-focus-selected:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-sidenav-text-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-text-font-weight:var(--spectrum-regular-font-weight);--spectrum-sidenav-text-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-text-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-text-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-top-level-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-sidenav-top-level-font-weight:var(--spectrum-bold-font-weight);--spectrum-sidenav-top-level-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-top-level-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-header-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-sidenav-header-font-weight:var(--spectrum-medium-font-weight);--spectrum-sidenav-header-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-header-font-size:var(--spectrum-font-size-75);--spectrum-sidenav-header-line-height:var(--spectrum-line-height-100)}:host:lang(ja),:host:lang(ko),:host:lang(zh){--spectrum-sidenav-text-line-height:var(--spectrum-cjk-line-height-100)}:host:lang(ja),:host:lang(ko),:host:lang(zh){--spectrum-sidenav-top-level-line-height:var(
--spectrum-cjk-line-height-100
)}:host:lang(ja),:host:lang(ko),:host:lang(zh){--spectrum-sidenav-header-line-height:var(--spectrum-cjk-line-height-100)}:host{display:flex;flex-direction:column;list-style-type:none;margin:0;padding:0}@media (forced-colors:active){.spectrum-Icon{forced-color-adjust:preserve-parent-color}}:host{--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,var(--spectrum-global-font-weight-regular)
);display:block;width:240px}:host([variant=multilevel]){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-multilevel-main-item-font-weight,var(--spectrum-global-font-weight-bold)
)}
`,ko=t.iv`
#list{--spectrum-sidenav-focus-ring-size:var(
--spectrum-focus-indicator-thickness
);--spectrum-sidenav-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-sidenav-focus-ring-color:var(--spectrum-focus-indicator-color);--spectrum-sidenav-min-height:var(--spectrum-component-height-100);--spectrum-sidenav-width:100%;--spectrum-sidenav-min-width:var(--spectrum-side-navigation-minimum-width);--spectrum-sidenav-max-width:var(--spectrum-side-navigation-maximum-width);--spectrum-sidenav-border-radius:var(--spectrum-corner-radius-100);--spectrum-sidenav-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-sidenav-icon-spacing:var(--spectrum-text-to-visual-100);--spectrum-sidenav-inline-padding:var(
--spectrum-component-edge-to-text-100
);--spectrum-sidenav-gap:var(--spectrum-side-navigation-item-to-item);--spectrum-sidenav-top-to-icon:var(
--spectrum-component-top-to-workflow-icon-100
);--spectrum-sidenav-top-to-label:var(--spectrum-component-top-to-text-100);--spectrum-sidenav-bottom-to-label:var(
--spectrum-side-navigation-bottom-to-text
);--spectrum-sidenav-start-to-content-second-level:var(
--spectrum-side-navigation-second-level-edge-to-text
);--spectrum-sidenav-start-to-content-third-level:var(
--spectrum-side-navigation-third-level-edge-to-text
);--spectrum-sidenav-start-to-content-with-icon-second-level:var(
--spectrum-side-navigation-with-icon-second-level-edge-to-text
);--spectrum-sidenav-start-to-content-with-icon-third-level:var(
--spectrum-side-navigation-with-icon-third-level-edge-to-text
);--spectrum-sidenav-background-disabled:transparent;--spectrum-sidenav-background-default:transparent;--spectrum-sidenav-background-hover:var(--spectrum-gray-200);--spectrum-sidenav-item-background-down:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus:var(--spectrum-gray-200);--spectrum-sidenav-item-background-default-selected:var(
--spectrum-gray-200
);--spectrum-sidenav-background-hover-selected:var(--spectrum-gray-300);--spectrum-sidenav-item-background-down-selected:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus-selected:var(--spectrum-gray-200);--spectrum-sidenav-header-color:var(--spectrum-gray-600);--spectrum-sidenav-content-disabled-color:var(
--spectrum-disabled-content-color
);--spectrum-sidenav-content-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-sidenav-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-sidenav-content-color-down:var(
--spectrum-neutral-content-color-down
);--spectrum-sidenav-content-color-key-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-sidenav-content-color-default-selected:var(
--spectrum-neutral-content-color-default
);--spectrum-sidenav-content-color-hover-selected:var(
--spectrum-neutral-content-color-hover
);--spectrum-sidenav-content-color-down-selected:var(
--spectrum-neutral-content-color-down
);--spectrum-sidenav-content-color-key-focus-selected:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-sidenav-text-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-text-font-weight:var(--spectrum-regular-font-weight);--spectrum-sidenav-text-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-text-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-text-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-top-level-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-sidenav-top-level-font-weight:var(--spectrum-bold-font-weight);--spectrum-sidenav-top-level-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-top-level-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-header-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-sidenav-header-font-weight:var(--spectrum-medium-font-weight);--spectrum-sidenav-header-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-header-font-size:var(--spectrum-font-size-75);--spectrum-sidenav-header-line-height:var(--spectrum-line-height-100)}#list:lang(ja),#list:lang(ko),#list:lang(zh){--spectrum-sidenav-text-line-height:var(--spectrum-cjk-line-height-100)}#list:lang(ja),#list:lang(ko),#list:lang(zh){--spectrum-sidenav-top-level-line-height:var(
--spectrum-cjk-line-height-100
)}#list:lang(ja),#list:lang(ko),#list:lang(zh){--spectrum-sidenav-header-line-height:var(--spectrum-cjk-line-height-100)}#list{display:flex;flex-direction:column;list-style-type:none;margin:0;padding:0}:host{list-style-type:none;margin-inline:0}:host([selected]) #item-link{background-color:var(
--highcontrast-sidenav-item-background-default-selected,var(
--mod-sidenav-item-background-default-selected,var(--spectrum-sidenav-item-background-default-selected)
)
);color:var(
--highcontrast-sidenav-content-color-default-selected,var(
--mod-sidenav-content-color-default-selected,var(--spectrum-sidenav-content-color-default-selected)
)
)}:host([selected]) #item-link:hover{background-color:var(
--highcontrast-sidenav-background-hover-selected,var(
--mod-sidenav-background-hover-selected,var(--spectrum-sidenav-background-hover-selected)
)
);color:var(
--mod-sidenav-content-color-hover-selected,var(--spectrum-sidenav-content-color-hover-selected)
)}:host([selected]) #item-link:active{background-color:var(
--highcontrast-sidenav-item-background-down-selected,var(
--mod-sidenav-item-background-down-selected,var(--spectrum-sidenav-item-background-down-selected)
)
);color:var(
--mod-sidenav-content-color-down-selected,var(--spectrum-sidenav-content-color-down-selected)
)}:host([selected]) #item-link.focus-visible,:host([selected]) #item-link.is-keyboardFocused{background-color:var(
--highcontrast-sidenav-background-key-focus-selected,var(
--mod-sidenav-background-key-focus-selected,var(--spectrum-sidenav-background-key-focus-selected)
)
);color:var(
--mod-sidenav-content-color-key-focus-selected,var(--spectrum-sidenav-content-color-key-focus-selected)
)}:host([selected]) #item-link.is-keyboardFocused,:host([selected]) #item-link:focus-visible{background-color:var(
--highcontrast-sidenav-background-key-focus-selected,var(
--mod-sidenav-background-key-focus-selected,var(--spectrum-sidenav-background-key-focus-selected)
)
);color:var(
--mod-sidenav-content-color-key-focus-selected,var(--spectrum-sidenav-content-color-key-focus-selected)
)}:host([disabled]) #item-link{background-color:var(
--highcontrast-sidenav-background-disabled,var(
--mod-sidenav-background-disabled,var(--spectrum-sidenav-background-disabled)
)
);color:var(
--highcontrast-sidenav-content-disabled-color,var(
--mod-sidenav-content-disabled-color,var(--spectrum-sidenav-content-disabled-color)
)
);cursor:default;pointer-events:none}#item-link{background-color:var(
--highcontrast-sidenav-background-default,var(
--mod-sidenav-background-default,var(--spectrum-sidenav-background-default)
)
);border-radius:var(
--mod-sidenav-border-radius,var(--spectrum-sidenav-border-radius)
);box-sizing:border-box;color:var(
--highcontrast-sidenav-content-color-default,var(
--mod-sidenav-content-color-default,var(--spectrum-sidenav-content-color-default)
)
);cursor:pointer;display:inline-flex;font-family:var(
--mod-sidenav-text-font-family,var(--spectrum-sidenav-text-font-family)
);font-size:var(
--mod-sidenav-text-font-size,var(--spectrum-sidenav-text-font-size)
);font-style:var(
--mod-sidenav-text-font-style,var(--spectrum-sidenav-text-font-style)
);font-weight:var(
--mod-sidenav-text-font-weight,var(--spectrum-sidenav-text-font-weight)
);-webkit-hyphens:auto;hyphens:auto;inline-size:var(--mod-sidenav-width,var(--spectrum-sidenav-width));line-height:var(
--mod-sidenav-text-line-height,var(--spectrum-sidenav-text-line-height)
);margin-block-end:var(--mod-sidenav-gap,var(--spectrum-sidenav-gap));max-inline-size:var(
--mod-sidenav-max-width,var(--spectrum-sidenav-max-width)
);min-block-size:var(
--mod-sidenav-min-height,var(--spectrum-sidenav-min-height)
);min-inline-size:var(
--mod-sidenav-min-width,var(--spectrum-sidenav-min-width)
);padding-inline:var(
--mod-sidenav-inline-padding,var(--spectrum-sidenav-inline-padding)
);position:relative;-webkit-text-decoration:none;text-decoration:none;transition:background-color var(--spectrum-animation-duration-100) ease-out,color var(--spectrum-animation-duration-100) ease-out;word-break:break-word}#item-link #link-text{margin-block-end:var(
--mod-sidenav-bottom-to-label,var(--spectrum-sidenav-bottom-to-label)
);margin-block-start:var(
--mod-sidenav-top-to-label,var(--spectrum-sidenav-top-to-label)
)}#item-link ::slotted([slot=icon]){block-size:var(--spectrum-sidenav-icon-size);flex-shrink:0;inline-size:var(--spectrum-sidenav-icon-size);margin-block-start:var(--spectrum-sidenav-top-to-icon);margin-inline-end:var(--spectrum-sidenav-icon-spacing)}#item-link:hover{background-color:var(
--highcontrast-sidenav-background-hover,var(
--mod-sidenav-background-hover,var(--spectrum-sidenav-background-hover)
)
);color:var(
--highcontrast-sidenav-content-color-hover,var(
--mod-sidenav-content-color-hover,var(--spectrum-sidenav-content-color-hover)
)
)}#item-link:active{background-color:var(
--highcontrast-sidenav-item-background-down,var(
--mod-sidenav-item-background-down,var(--spectrum-sidenav-item-background-down)
)
);color:var(
--highcontrast-sidenav-content-color-down,var(
--mod-sidenav-content-color-down,var(--spectrum-sidenav-content-color-down)
)
)}#item-link.focus-visible,#item-link.is-keyboardFocused{background-color:var(
--highcontrast-sidenav-background-key-focus,var(
--mod-sidenav-background-key-focus,var(--spectrum-sidenav-background-key-focus)
)
);color:var(
--highcontrast-sidenav-content-color-key-focus,var(
--mod-sidenav-content-color-key-focus,var(--spectrum-sidenav-content-color-key-focus)
)
);outline:var(
--highcontrast-sidenav-focus-ring-color,var(
--mod-sidenav-focus-ring-color,var(--spectrum-sidenav-focus-ring-color)
)
) solid var(
--mod-sidenav-focus-ring-size,var(--spectrum-sidenav-focus-ring-size)
);outline-offset:var(
--mod-sidenav-focus-ring-gap,var(--spectrum-sidenav-focus-ring-gap)
)}#item-link.is-keyboardFocused,#item-link:focus-visible{background-color:var(
--highcontrast-sidenav-background-key-focus,var(
--mod-sidenav-background-key-focus,var(--spectrum-sidenav-background-key-focus)
)
);color:var(
--highcontrast-sidenav-content-color-key-focus,var(
--mod-sidenav-content-color-key-focus,var(--spectrum-sidenav-content-color-key-focus)
)
);outline:var(
--highcontrast-sidenav-focus-ring-color,var(
--mod-sidenav-focus-ring-color,var(--spectrum-sidenav-focus-ring-color)
)
) solid var(
--mod-sidenav-focus-ring-size,var(--spectrum-sidenav-focus-ring-size)
);outline-offset:var(
--mod-sidenav-focus-ring-gap,var(--spectrum-sidenav-focus-ring-gap)
)}@media (forced-colors:active){#list ::slotted([slot=icon]){forced-color-adjust:preserve-parent-color}:host{--highcontrast-sidenav-content-disabled-color:GrayText;--highcontrast-sidenav-focus-ring-color:Highlight;--highcontrast-sidenav-content-color-default-selected:SelectedItemText;--highcontrast-sidenav-item-background-default-selected:SelectedItem;--highcontrast-sidenav-background-key-focus-selected:Highlight;--highcontrast-sidenav-background-hover-selected:Highlight;--highcontrast-sidenav-item-background-down-selected:Highlight;--highcontrast-sidenav-item-background-down:Highlight;--highcontrast-sidenav-background-hover:Highlight;--highcontrast-sidenav-content-color-hover:HighlightText;--highcontrast-sidenav-background-key-focus:Highlight;--highcontrast-sidenav-top-level-font-color:ButtonText;--highcontrast-sidenav-content-color-default:ButtonText;--highcontrast-sidenav-content-color-down:HighlightText;forced-color-adjust:none}}:host{display:block}:host([disabled]){pointer-events:none}:host([multiLevel]){--spectrum-web-component-sidenav-font-weight:var(
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
`;var yo=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,wo=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?xo(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&yo(e,r,c),c};const zo=class e extends(gt(D)){constructor(){super(...arguments),this.value=void 0,this.selected=!1,this.expanded=!1}static get styles(){return[ko]}get parentSideNav(){return this._parentSidenav||(this._parentSidenav=this.closest("sp-sidenav")),this._parentSidenav}get hasChildren(){return!!this.querySelector("sp-sidenav-item")}get depth(){let t=0,r=this.parentElement;for(;r instanceof e;)t++,r=r.parentElement;return t}handleSideNavSelect(t){this.selected=t.target===this}handleClick(t){!this.href&&t&&t.preventDefault(),!this.disabled&&(!this.href||null!=t&&t.defaultPrevented)&&(this.hasChildren?this.expanded=!this.expanded:this.value&&this.announceSelected(this.value))}announceSelected(t){const e=new CustomEvent("sidenav-select",{bubbles:!0,composed:!0,detail:{value:t}});this.dispatchEvent(e)}click(){this.handleClick()}get focusElement(){return this.shadowRoot.querySelector("#item-link")}update(t){this.hasAttribute("slot")||(this.slot="descendant"),super.update(t)}render(){return t.dy`
            <a
                href=${this.href||"#"}
                target=${(0,E.o)(this.target)}
                download=${(0,E.o)(this.download)}
                rel=${(0,E.o)(this.rel)}
                data-level="${this.depth}"
                @click="${this.handleClick}"
                id="item-link"
                aria-current=${(0,E.o)(this.selected&&this.href?"page":void 0)}
                aria-expanded=${(0,E.o)(this.hasChildren?this.expanded:void 0)}
                aria-controls=${(0,E.o)(this.hasChildren&&this.expanded?"list":void 0)}
            >
                <slot name="icon"></slot>
                <span id="link-text">
                    ${this.label}
                    <slot></slot>
                </span>
            </a>
            ${this.expanded?t.dy`
                      <div id="list" aria-labelledby="item-link" role="list">
                          <slot name="descendant"></slot>
                      </div>
                  `:t.Ld}
        `}updated(t){var e;this.hasChildren&&this.expanded&&!this.selected&&null!=(e=this.parentSideNav)&&e.manageTabIndex?this.focusElement.tabIndex=-1:this.focusElement.removeAttribute("tabindex"),super.updated(t)}connectedCallback(){super.connectedCallback(),this.startTrackingSelection()}disconnectedCallback(){this.stopTrackingSelection(),super.disconnectedCallback()}async startTrackingSelection(){const t=this.parentSideNav;if(t&&(await t.updateComplete,t.startTrackingSelectionForItem(this),this.selected=null!=this.value&&this.value===t.value,!0===this.selected&&"multilevel"===t.variant)){let t=this.parentElement;for(;t instanceof e;)t.expanded=!0,t=t.parentElement}}stopTrackingSelection(){const t=this.parentSideNav;t&&t.stopTrackingSelectionForItem(this),this._parentSidenav=void 0}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","listitem")}};wo([(0,d.Cb)()],zo.prototype,"value",2),wo([(0,d.Cb)({type:Boolean,reflect:!0})],zo.prototype,"selected",2),wo([(0,d.Cb)({type:Boolean,reflect:!0})],zo.prototype,"expanded",2);let Co=zo;const Io=t.iv`
#list{--spectrum-sidenav-focus-ring-size:var(
--spectrum-focus-indicator-thickness
);--spectrum-sidenav-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-sidenav-focus-ring-color:var(--spectrum-focus-indicator-color);--spectrum-sidenav-min-height:var(--spectrum-component-height-100);--spectrum-sidenav-width:100%;--spectrum-sidenav-min-width:var(--spectrum-side-navigation-minimum-width);--spectrum-sidenav-max-width:var(--spectrum-side-navigation-maximum-width);--spectrum-sidenav-border-radius:var(--spectrum-corner-radius-100);--spectrum-sidenav-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-sidenav-icon-spacing:var(--spectrum-text-to-visual-100);--spectrum-sidenav-inline-padding:var(
--spectrum-component-edge-to-text-100
);--spectrum-sidenav-gap:var(--spectrum-side-navigation-item-to-item);--spectrum-sidenav-top-to-icon:var(
--spectrum-component-top-to-workflow-icon-100
);--spectrum-sidenav-top-to-label:var(--spectrum-component-top-to-text-100);--spectrum-sidenav-bottom-to-label:var(
--spectrum-side-navigation-bottom-to-text
);--spectrum-sidenav-start-to-content-second-level:var(
--spectrum-side-navigation-second-level-edge-to-text
);--spectrum-sidenav-start-to-content-third-level:var(
--spectrum-side-navigation-third-level-edge-to-text
);--spectrum-sidenav-start-to-content-with-icon-second-level:var(
--spectrum-side-navigation-with-icon-second-level-edge-to-text
);--spectrum-sidenav-start-to-content-with-icon-third-level:var(
--spectrum-side-navigation-with-icon-third-level-edge-to-text
);--spectrum-sidenav-background-disabled:transparent;--spectrum-sidenav-background-default:transparent;--spectrum-sidenav-background-hover:var(--spectrum-gray-200);--spectrum-sidenav-item-background-down:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus:var(--spectrum-gray-200);--spectrum-sidenav-item-background-default-selected:var(
--spectrum-gray-200
);--spectrum-sidenav-background-hover-selected:var(--spectrum-gray-300);--spectrum-sidenav-item-background-down-selected:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus-selected:var(--spectrum-gray-200);--spectrum-sidenav-header-color:var(--spectrum-gray-600);--spectrum-sidenav-content-disabled-color:var(
--spectrum-disabled-content-color
);--spectrum-sidenav-content-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-sidenav-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-sidenav-content-color-down:var(
--spectrum-neutral-content-color-down
);--spectrum-sidenav-content-color-key-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-sidenav-content-color-default-selected:var(
--spectrum-neutral-content-color-default
);--spectrum-sidenav-content-color-hover-selected:var(
--spectrum-neutral-content-color-hover
);--spectrum-sidenav-content-color-down-selected:var(
--spectrum-neutral-content-color-down
);--spectrum-sidenav-content-color-key-focus-selected:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-sidenav-text-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-text-font-weight:var(--spectrum-regular-font-weight);--spectrum-sidenav-text-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-text-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-text-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-top-level-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-sidenav-top-level-font-weight:var(--spectrum-bold-font-weight);--spectrum-sidenav-top-level-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-top-level-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-header-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-sidenav-header-font-weight:var(--spectrum-medium-font-weight);--spectrum-sidenav-header-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-header-font-size:var(--spectrum-font-size-75);--spectrum-sidenav-header-line-height:var(--spectrum-line-height-100)}#list:lang(ja),#list:lang(ko),#list:lang(zh){--spectrum-sidenav-text-line-height:var(--spectrum-cjk-line-height-100)}#list:lang(ja),#list:lang(ko),#list:lang(zh){--spectrum-sidenav-top-level-line-height:var(
--spectrum-cjk-line-height-100
)}#list:lang(ja),#list:lang(ko),#list:lang(zh){--spectrum-sidenav-header-line-height:var(--spectrum-cjk-line-height-100)}#list{display:flex;flex-direction:column;list-style-type:none;margin:0;padding:0}#heading{color:var(
--mod-sidenav-header-color,var(--spectrum-sidenav-header-color)
);font-size:var(
--mod-sidenav-header-font-size,var(--spectrum-sidenav-header-font-size)
);font-style:var(
--mod-sidenav-header-font-style,var(--spectrum-sidenav-header-font-style)
);font-weight:var(
--mod-sidenav-header-font-weight,var(--spectrum-sidenav-header-font-weight)
);line-height:var(
--mod-sidenav-header-line-height,var(--spectrum-sidenav-header-line-height)
);margin-block-end:var(--spectrum-sidenav-heading-bottom-margin);margin-block-start:calc(var(--spectrum-sidenav-heading-top-margin) - var(--spectrum-sidenav-gap));padding-inline:var(
--mod-sidenav-inline-padding,var(--spectrum-sidenav-inline-padding)
)}@media (forced-colors:active){#list .spectrum-Icon{forced-color-adjust:preserve-parent-color}}:host{display:block}
`;var So=Object.defineProperty;Object.getOwnPropertyDescriptor;class Eo extends u.o{constructor(){super(...arguments),this.label=""}static get styles(){return[ko,Io]}update(t){this.hasAttribute("slot")||(this.slot="descendant"),super.update(t)}render(){return t.dy`
            <h2 id="heading">${this.label}</h2>
            <div id="list" aria-labelledby="heading" role="list">
                <slot name="descendant"></slot>
            </div>
        `}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","listitem")}}((t,e,r,o)=>{for(var s,c=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(c=s(e,r,c)||c);c&&So(e,r,c)})([(0,d.Cb)({reflect:!0})],Eo.prototype,"label");var $o=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,jo=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?Ao(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&$o(e,r,c),c};class qo extends D{constructor(){super(...arguments),this.items=new Set,this.rovingTabindexController=new O(this,{focusInIndex:t=>{let e,r=t.findIndex((t=>(t.value===this.value&&this.isDisabledChild(t)&&(e=t.closest("sp-sidenav-item:not([expanded])")),this.value?!t.disabled&&!this.isDisabledChild(t)&&t.value===this.value:!t.disabled&&!this.isDisabledChild(t))));return-1===r&&e&&(r=t.findIndex((t=>t===e))),r},direction:"vertical",elements:()=>[...this.querySelectorAll("sp-sidenav-item")],isFocusableElement:t=>!t.disabled&&!this.isDisabledChild(t)}),this.manageTabIndex=!1,this.value=void 0,this.variant=void 0,this.label=void 0}static get styles(){return[fo]}startTrackingSelectionForItem(t){this.items.add(t),this.rovingTabindexController.clearElementCache()}stopTrackingSelectionForItem(t){this.items.delete(t),this.rovingTabindexController.clearElementCache()}handleSelect(t){if(t.stopPropagation(),this.value===t.detail.value)return;const e=this.value;this.value=t.detail.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))?this.items.forEach((e=>e.handleSideNavSelect(t))):(this.value=e,t.target.selected=!1,t.preventDefault())}focus(){this.rovingTabindexController.focus()}blur(){this.focusElement!==this&&super.blur()}click(){this.focusElement!==this&&super.click()}get focusElement(){return this.rovingTabindexController.focusInElement||this}isDisabledChild(t){if(t.disabled)return!0;let e=t.parentElement;for(;e instanceof Eo||!e.disabled&&e instanceof Co&&e.expanded;)e=e.parentElement;return e!==this}handleSlotchange(){this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage()}render(){return t.dy`
            <nav
                @sidenav-select=${this.handleSelect}
                aria-label=${(0,E.o)(this.label)}
            >
                <div role="list">
                    <slot
                        name="descendant"
                        @slotchange=${this.handleSlotchange}
                    ></slot>
                </div>
            </nav>
        `}willUpdate(){if(!this.hasUpdated){const t=this.querySelector("[selected]");t&&(this.value=t.value)}}updated(t){super.updated(t),t.has("manageTabIndex")&&(this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage())}}jo([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"manage-tab-index"})],qo.prototype,"manageTabIndex",2),jo([(0,d.Cb)({reflect:!0})],qo.prototype,"value",2),jo([(0,d.Cb)({reflect:!0})],qo.prototype,"variant",2),jo([(0,d.Cb)({reflect:!0})],qo.prototype,"label",2),(0,y.N)("sp-sidenav",qo),(0,y.N)("sp-sidenav-heading",Eo),(0,y.N)("sp-sidenav-item",Co);class _o extends xt{}const To=t.iv`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(
--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)
);line-height:var(--mod-line-height-100,var(--spectrum-line-height-100));margin:0;overflow:visible;-webkit-text-decoration:none;text-decoration:none;text-transform:none;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,border-color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out;-webkit-user-select:none;user-select:none;vertical-align:top}:host(:focus){outline:none}:host([disabled]){cursor:default}:host a{-webkit-appearance:none;-webkit-user-select:none;user-select:none}:host{--spectrum-closebutton-size-300:24px;--spectrum-closebutton-size-400:32px;--spectrum-closebutton-size-500:40px;--spectrum-closebutton-size-600:48px;--spectrum-closebutton-icon-color-default:var(
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
);--spectrum-closebutton-animation-duration:var(
--spectrum-animation-duration-100
)}:host([size=s]){--spectrum-closebutton-height:var(--spectrum-component-height-75);--spectrum-closebutton-width:var(--spectrum-closebutton-height);--spectrum-closebutton-size:var(--spectrum-closebutton-size-300);--spectrum-closebutton-border-radius:var(--spectrum-closebutton-size-300)}:host{--spectrum-closebutton-height:var(--spectrum-component-height-100);--spectrum-closebutton-width:var(--spectrum-closebutton-height);--spectrum-closebutton-size:var(--spectrum-closebutton-size-400);--spectrum-closebutton-border-radius:var(--spectrum-closebutton-size-400)}:host([size=l]){--spectrum-closebutton-height:var(--spectrum-component-height-200);--spectrum-closebutton-width:var(--spectrum-closebutton-height);--spectrum-closebutton-size:var(--spectrum-closebutton-size-500);--spectrum-closebutton-border-radius:var(--spectrum-closebutton-size-500)}:host([size=xl]){--spectrum-closebutton-height:var(--spectrum-component-height-300);--spectrum-closebutton-width:var(--spectrum-closebutton-height);--spectrum-closebutton-size:var(--spectrum-closebutton-size-600);--spectrum-closebutton-border-radius:var(--spectrum-closebutton-size-600)}:host([static=white]){--spectrum-closebutton-static-background-color-default:transparent;--spectrum-closebutton-static-background-color-hover:var(
--spectrum-transparent-white-300
);--spectrum-closebutton-static-background-color-down:var(
--spectrum-transparent-white-400
);--spectrum-closebutton-static-background-color-focus:var(
--spectrum-transparent-white-300
);--spectrum-closebutton-icon-color-default:var(--spectrum-white);--spectrum-closebutton-icon-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--spectrum-closebutton-focus-indicator-color:var(
--spectrum-static-white-focus-indicator-color
)}:host([static=black]){--spectrum-closebutton-static-background-color-default:transparent;--spectrum-closebutton-static-background-color-hover:var(
--spectrum-transparent-black-300
);--spectrum-closebutton-static-background-color-down:var(
--spectrum-transparent-black-400
);--spectrum-closebutton-static-background-color-focus:var(
--spectrum-transparent-black-300
);--spectrum-closebutton-icon-color-default:var(--spectrum-black);--spectrum-closebutton-icon-color-disabled:var(
--spectrum-disabled-static-black-content-color
);--spectrum-closebutton-focus-indicator-color:var(
--spectrum-static-black-focus-indicator-color
)}@media (forced-colors:active){:host{--highcontrast-closebutton-icon-color-disabled:GrayText;--highcontrast-closebutton-icon-color-down:Highlight;--highcontrast-closebutton-icon-color-hover:Highlight;--highcontrast-closebutton-icon-color-focus:Highlight;--highcontrast-closebutton-background-color-default:ButtonFace;--highcontrast-closebutton-focus-indicator-color:ButtonText}:host(.focus-visible):after{forced-color-adjust:none;margin:var(
--mod-closebutton-focus-indicator-gap,var(--spectrum-closebutton-focus-indicator-gap)
);transition:opacity var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-out,margin var(
--mod-closebutton-animation-duraction,var(--spectrum-closebutton-animation-duration)
) ease-out}:host(.focus-visible):after{forced-color-adjust:none;margin:var(
--mod-closebutton-focus-indicator-gap,var(--spectrum-closebutton-focus-indicator-gap)
);transition:opacity var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-out,margin var(
--mod-closebutton-animation-duraction,var(--spectrum-closebutton-animation-duration)
) ease-out}:host(:focus-visible):after{forced-color-adjust:none;margin:var(
--mod-closebutton-focus-indicator-gap,var(--spectrum-closebutton-focus-indicator-gap)
);transition:opacity var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-out,margin var(
--mod-closebutton-animation-duraction,var(--spectrum-closebutton-animation-duration)
) ease-out}:host([static=black]){--highcontrast-closebutton-static-background-color-default:ButtonFace;--highcontrast-closebutton-icon-color-default:Highlight;--highcontrast-closebutton-icon-color-disabled:GrayText}:host([static=white]){--highcontrast-closebutton-static-background-color-default:ButtonFace;--highcontrast-closebutton-icon-color-default:Highlight;--highcontrast-closebutton-icon-color-disabled:Highlight}}:host{align-items:center;align-self:var(--mod-closebutton-align-self);border-color:#0000;border-radius:var(
--mod-closebutton-border-radius,var(--spectrum-closebutton-border-radius)
);border-width:0;color:inherit;display:inline-flex;flex-direction:row;height:var(--mod-closebutton-height,var(--spectrum-closebutton-height));justify-content:center;margin-block-start:var(--mod-closebutton-margin-top);margin-inline:var(--mod-closebutton-margin-inline);padding:0;position:relative;transition:border-color var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-in-out;width:var(--mod-closebutton-width,var(--spectrum-closebutton-width))}:host:after{border-radius:calc(var(--mod-closebutton-size, var(--spectrum-closebutton-size)) + var(
--mod-closebutton-focus-indicator-gap,
var(--spectrum-closebutton-focus-indicator-gap)
));content:"";inset:0;margin:calc(var(
--mod-closebutton-focus-indicator-gap,
var(--spectrum-closebutton-focus-indicator-gap)
)*-1);pointer-events:none;position:absolute;transition:box-shadow var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-in-out}:host(.focus-visible){box-shadow:none;outline:none}:host(.focus-visible){box-shadow:none;outline:none}:host(:focus-visible){box-shadow:none;outline:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
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
)}:host(:not([disabled])){background-color:var(
--highcontrast-closebutton-background-color-default,var(
--mod-closebutton-background-color-default,var(--spectrum-closebutton-background-color-default)
)
)}:host(:not([disabled]):hover){background-color:var(
--mod-closebutton-background-color-hover,var(--spectrum-closebutton-background-color-hover)
)}:host(:not([disabled]):hover) .icon{color:var(
--highcontrast-closebutton-icon-color-hover,var(
--mod-closebutton-icon-color-hover,var(--spectrum-closebutton-icon-color-hover)
)
)}:host(:not([disabled])[active]){background-color:var(
--mod-closebutton-background-color-down,var(--spectrum-closebutton-background-color-down)
)}:host(:not([disabled])[active]) .icon{color:var(
--highcontrast-closebutton-icon-color-down,var(
--mod-closebutton-icon-color-down,var(--spectrum-closebutton-icon-color-down)
)
)}:host(:not([disabled]).focus-visible),:host(:not([disabled])[focused]){background-color:var(
--mod-closebutton-background-color-focus,var(--spectrum-closebutton-background-color-focus)
)}:host(:not([disabled]).focus-visible),:host(:not([disabled])[focused]){background-color:var(
--mod-closebutton-background-color-focus,var(--spectrum-closebutton-background-color-focus)
)}:host(:not([disabled]):focus-visible),:host(:not([disabled])[focused]){background-color:var(
--mod-closebutton-background-color-focus,var(--spectrum-closebutton-background-color-focus)
)}:host(:not([disabled]).focus-visible) .icon,:host(:not([disabled])[focused]) .icon{color:var(
--highcontrast-closebutton-icon-color-focus,var(
--mod-closebutton-icon-color-focus,var(--spectrum-closebutton-icon-color-focus)
)
)}:host(:not([disabled]).focus-visible) .icon,:host(:not([disabled])[focused]) .icon{color:var(
--highcontrast-closebutton-icon-color-focus,var(
--mod-closebutton-icon-color-focus,var(--spectrum-closebutton-icon-color-focus)
)
)}:host(:not([disabled]):focus-visible) .icon,:host(:not([disabled])[focused]) .icon{color:var(
--highcontrast-closebutton-icon-color-focus,var(
--mod-closebutton-icon-color-focus,var(--spectrum-closebutton-icon-color-focus)
)
)}:host(:not([disabled])) .icon{color:var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)}:host(:not([disabled]):focus) .icon,:host(:not([disabled])[focused]) .icon{color:var(
--highcontrast-closebutton-icon-color-focus,var(
--mod-closebutton-icon-color-focus,var(--spectrum-closebutton-icon-color-focus)
)
)}:host([disabled]){background-color:var(
--mod-closebutton-background-color-default,var(--spectrum-closebutton-background-color-default)
)}:host([disabled]) .icon{color:var(
--highcontrast-closebutton-icon-color-disabled,var(
--mod-closebutton-icon-color-disabled,var(--spectrum-closebutton-icon-color-disabled)
)
)}:host([static=black]:not([disabled])),:host([static=white]:not([disabled])){background-color:var(
--highcontrast-closebutton-static-background-color-default,var(
--mod-closebutton-static-background-color-default,var(--spectrum-closebutton-static-background-color-default)
)
)}:host([static=black]:not([disabled]):hover),:host([static=white]:not([disabled]):hover){background-color:var(
--highcontrast-closebutton-static-background-color-hover,var(
--mod-closebutton-static-background-color-hover,var(--spectrum-closebutton-static-background-color-hover)
)
)}:host([static=black]:not([disabled]):hover) .icon,:host([static=white]:not([disabled]):hover) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([static=black]:not([disabled])[active]),:host([static=white]:not([disabled])[active]){background-color:var(
--highcontrast-closebutton-static-background-color-down,var(
--mod-closebutton-static-background-color-down,var(--spectrum-closebutton-static-background-color-down)
)
)}:host([static=black]:not([disabled])[active]) .icon,:host([static=white]:not([disabled])[active]) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([static=black]:not([disabled]).focus-visible),:host([static=black]:not([disabled])[focused]),:host([static=white]:not([disabled]).focus-visible),:host([static=white]:not([disabled])[focused]){background-color:var(
--highcontrast-closebutton-static-background-color-focus,var(
--mod-closebutton-static-background-color-focus,var(--spectrum-closebutton-static-background-color-focus)
)
)}:host([static=black]:not([disabled]).focus-visible),:host([static=black]:not([disabled])[focused]),:host([static=white]:not([disabled]).focus-visible),:host([static=white]:not([disabled])[focused]){background-color:var(
--highcontrast-closebutton-static-background-color-focus,var(
--mod-closebutton-static-background-color-focus,var(--spectrum-closebutton-static-background-color-focus)
)
)}:host([static=black]:not([disabled]):focus-visible),:host([static=black]:not([disabled])[focused]),:host([static=white]:not([disabled]):focus-visible),:host([static=white]:not([disabled])[focused]){background-color:var(
--highcontrast-closebutton-static-background-color-focus,var(
--mod-closebutton-static-background-color-focus,var(--spectrum-closebutton-static-background-color-focus)
)
)}:host([static=black]:not([disabled]).focus-visible) .icon,:host([static=black]:not([disabled]):focus) .icon,:host([static=black]:not([disabled])[focused]) .icon,:host([static=white]:not([disabled]).focus-visible) .icon,:host([static=white]:not([disabled]):focus) .icon,:host([static=white]:not([disabled])[focused]) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([static=black]:not([disabled]):focus) .icon,:host([static=black]:not([disabled]):focus-visible) .icon,:host([static=black]:not([disabled])[focused]) .icon,:host([static=white]:not([disabled]):focus) .icon,:host([static=white]:not([disabled]):focus-visible) .icon,:host([static=white]:not([disabled])[focused]) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([static=black]:not([disabled])) .icon,:host([static=white]:not([disabled])) .icon{color:var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)}:host([static=black][disabled]) .icon,:host([static=white][disabled]) .icon{color:var(
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
`;(0,y.N)("sp-icon-cross75",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Cross75"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path
      d="M5.188 4l2.14-2.14A.84.84 0 106.141.672L4 2.812 1.86.672A.84.84 0 00.672 1.86L2.812 4 .672 6.14A.84.84 0 101.86 7.328L4 5.188l2.14 2.14A.84.84 0 107.328 6.14z"
    />
  </svg>`)()}}),(0,y.N)("sp-icon-cross100",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Cross100"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path
      d="M5.238 4l2.456-2.457A.875.875 0 106.456.306L4 2.763 1.543.306A.875.875 0 00.306 1.544L2.763 4 .306 6.457a.875.875 0 101.238 1.237L4 5.237l2.456 2.457a.875.875 0 101.238-1.237z"
    />
  </svg>`)()}}),(0,y.N)("sp-icon-cross200",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Cross200"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path
      d="M6.29 5l2.922-2.922a.911.911 0 00-1.29-1.29L5 3.712 2.078.789a.911.911 0 00-1.29 1.289L3.712 5 .79 7.922a.911.911 0 101.289 1.29L5 6.288 7.923 9.21a.911.911 0 001.289-1.289z"
    />
  </svg>`)()}}),(0,y.N)("sp-icon-cross300",class extends g{render(){return St(t.dy),(({width:t=24,height:e=24,title:r="Cross300"}={})=>It`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r}
    width=${t}
    height=${e}
  >
    <path
      d="M7.344 6l3.395-3.396a.95.95 0 00-1.344-1.342L6 4.657 2.604 1.262a.95.95 0 00-1.342 1.342L4.657 6 1.262 9.396a.95.95 0 001.343 1.343L6 7.344l3.395 3.395a.95.95 0 001.344-1.344z"
    />
  </svg>`)()}});const Ho=t.iv`
.spectrum-UIIcon-Cross75{height:var(--spectrum-alias-ui-icon-cross-size-75);width:var(--spectrum-alias-ui-icon-cross-size-75)}.spectrum-UIIcon-Cross100{height:var(--spectrum-alias-ui-icon-cross-size-100);width:var(--spectrum-alias-ui-icon-cross-size-100)}.spectrum-UIIcon-Cross200{height:var(--spectrum-alias-ui-icon-cross-size-200);width:var(--spectrum-alias-ui-icon-cross-size-200)}.spectrum-UIIcon-Cross300{height:var(--spectrum-alias-ui-icon-cross-size-300);width:var(--spectrum-alias-ui-icon-cross-size-300)}.spectrum-UIIcon-Cross400{height:var(--spectrum-alias-ui-icon-cross-size-400);width:var(--spectrum-alias-ui-icon-cross-size-400)}.spectrum-UIIcon-Cross500{height:var(--spectrum-alias-ui-icon-cross-size-500);width:var(--spectrum-alias-ui-icon-cross-size-500)}.spectrum-UIIcon-Cross600{height:var(--spectrum-alias-ui-icon-cross-size-600);width:var(--spectrum-alias-ui-icon-cross-size-600)}
`;var Lo=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,Po=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?Do(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&Lo(e,r,c),c};const Uo={s:()=>t.dy`
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
    `};class Oo extends(z(_o,{noDefaultSize:!0})){constructor(){super(...arguments),this.variant=""}static get styles(){return[...super.styles,To,Ho]}get buttonContent(){return[Uo[this.size]()]}}Po([(0,d.Cb)({reflect:!0})],Oo.prototype,"variant",2),Po([(0,d.Cb)({type:String,reflect:!0})],Oo.prototype,"static",2),(0,y.N)("sp-close-button",Oo),(0,y.N)("sp-icon-info",class extends g{render(){return k(t.dy),(({width:t=24,height:e=24,hidden:r=!1,title:o="Info"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${r?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${o}
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm-.3 4.3a2.718 2.718 0 0 1 2.864 2.824 2.664 2.664 0 0 1-2.864 2.863 2.705 2.705 0 0 1-2.864-2.864A2.717 2.717 0 0 1 17.7 6.3ZM22 27a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-6h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9h1a1 1 0 0 1 1 1Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}),(0,y.N)("sp-icon-checkmark-circle",class extends g{render(){return k(t.dy),(({width:t=24,height:e=24,hidden:r=!1,title:o="Checkmark Circle"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    width=${t}
    height=${e}
    viewBox="0 0 36 36"
    aria-hidden=${r?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${o}
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm10.666 9.08L16.018 27.341a1.208 1.208 0 0 1-.875.461c-.024.002-.05.002-.073.002a1.2 1.2 0 0 1-.85-.351l-7.784-7.795a1.2 1.2 0 0 1 0-1.698l1.326-1.325a1.201 1.201 0 0 1 1.695 0l5.346 5.347L25.314 8.473A1.203 1.203 0 0 1 27 8.263l1.455 1.133a1.205 1.205 0 0 1 .211 1.684Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});const Bo=t.iv`
:host{--spectrum-toast-font-weight:var(--spectrum-regular-font-weight);--spectrum-toast-font-size:var(--spectrum-font-size-100);--spectrum-toast-corner-radius:var(--spectrum-corner-radius-100);--spectrum-toast-block-size:var(--spectrum-toast-height);--spectrum-toast-max-inline-size:var(--spectrum-toast-maximum-width);--spectrum-toast-border-width:var(--spectrum-border-width-100);--spectrum-toast-line-height:var(--spectrum-line-height-100);--spectrum-toast-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-toast-spacing-icon-to-text:var(--spectrum-text-to-visual-100);--spectrum-toast-spacing-start-edge-to-text-and-icon:var(
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
);max-inline-size:var(
--mod-toast-max-inline-size,var(--spectrum-toast-max-inline-size)
);min-block-size:var(
--mod-toast-block-size,var(--spectrum-toast-block-size)
);padding-inline-start:var(
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
)}.content{box-sizing:border-box;display:inline-block;flex:auto;line-height:var(
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
);display:flex;flex:none;margin-block-end:var(
--mod-toast-spacing-bottom-edge-to-divider,var(--spectrum-toast-spacing-bottom-edge-to-divider)
);margin-block-start:var(
--mod-toast-spacing-top-edge-to-divider,var(--spectrum-toast-spacing-top-edge-to-divider)
);padding-inline-end:var(
--mod-toast-spacing-close-button,var(--spectrum-toast-spacing-close-button)
)}.buttons .spectrum-CloseButton{align-self:flex-start}.body{align-items:center;align-self:center;display:flex;flex:auto;flex-wrap:wrap;padding-block-end:var(
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
)}:host{--spectrum-overlay-animation-distance:6px;--spectrum-overlay-animation-duration:var(
--spectrum-animation-duration-100
);opacity:0;pointer-events:none;transition:transform var(--spectrum-overlay-animation-duration) ease-in-out,opacity var(--spectrum-overlay-animation-duration) ease-in-out,visibility 0s linear var(--spectrum-overlay-animation-duration);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0s;visibility:visible}
`;var Mo=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,No=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?Fo(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&Mo(e,r,c),c};const Ro=["negative","positive","info","error","warning"];class Vo extends(q(u.o)){constructor(){super(...arguments),this.open=!1,this._timeout=null,this._variant="",this.countdownStart=0,this.nextCount=-1,this.doCountdown=t=>{this.countdownStart||(this.countdownStart=performance.now()),t-this.countdownStart>this._timeout?(this.shouldClose(),this.countdownStart=0):this.countdown()},this.countdown=()=>{cancelAnimationFrame(this.nextCount),this.nextCount=requestAnimationFrame(this.doCountdown)},this.holdCountdown=()=>{this.stopCountdown(),this.addEventListener("focusout",this.resumeCountdown)},this.resumeCountdown=()=>{this.removeEventListener("focusout",this.holdCountdown),this.countdown()}}static get styles(){return[Bo]}set timeout(t){const e=null!==typeof t&&t>0?Math.max(6e3,t):null,r=this.timeout;e&&this.countdownStart&&(this.countdownStart=performance.now()),this._timeout=e,this.requestUpdate("timeout",r)}get timeout(){return this._timeout}set variant(t){if(t===this.variant)return;const e=this.variant;Ro.includes(t)?(this.setAttribute("variant",t),this._variant=t):(this.removeAttribute("variant"),this._variant=""),this.requestUpdate("variant",e)}get variant(){return this._variant}renderIcon(e){switch(e){case"info":return t.dy`
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
                    static="white"
                ></sp-close-button>
            </div>
        `}updated(t){super.updated(t),t.has("open")&&(this.open?this.timeout&&this.startCountdown():this.timeout&&this.stopCountdown()),t.has("timeout")&&(null!==this.timeout&&this.open?this.startCountdown():this.stopCountdown())}}No([(0,d.Cb)({type:Boolean,reflect:!0})],Vo.prototype,"open",2),No([(0,d.Cb)({type:Number})],Vo.prototype,"timeout",1),No([(0,d.Cb)({type:String})],Vo.prototype,"variant",1),(0,y.N)("sp-toast",Vo);const Ko=t.iv`
.fill-submask-2{animation:spectrum-fill-mask-2 1s linear infinite}@keyframes spectrum-fill-mask-1{0%{transform:rotate(90deg)}1.69%{transform:rotate(72.3deg)}3.39%{transform:rotate(55.5deg)}5.08%{transform:rotate(40.3deg)}6.78%{transform:rotate(25deg)}8.47%{transform:rotate(10.6deg)}10.17%{transform:rotate(0)}11.86%{transform:rotate(0)}13.56%{transform:rotate(0)}15.25%{transform:rotate(0)}16.95%{transform:rotate(0)}18.64%{transform:rotate(0)}20.34%{transform:rotate(0)}22.03%{transform:rotate(0)}23.73%{transform:rotate(0)}25.42%{transform:rotate(0)}27.12%{transform:rotate(0)}28.81%{transform:rotate(0)}30.51%{transform:rotate(0)}32.2%{transform:rotate(0)}33.9%{transform:rotate(0)}35.59%{transform:rotate(0)}37.29%{transform:rotate(0)}38.98%{transform:rotate(0)}40.68%{transform:rotate(0)}42.37%{transform:rotate(5.3deg)}44.07%{transform:rotate(13.4deg)}45.76%{transform:rotate(20.6deg)}47.46%{transform:rotate(29deg)}49.15%{transform:rotate(36.5deg)}50.85%{transform:rotate(42.6deg)}52.54%{transform:rotate(48.8deg)}54.24%{transform:rotate(54.2deg)}55.93%{transform:rotate(59.4deg)}57.63%{transform:rotate(63.2deg)}59.32%{transform:rotate(67.2deg)}61.02%{transform:rotate(70.8deg)}62.71%{transform:rotate(73.8deg)}64.41%{transform:rotate(76.2deg)}66.1%{transform:rotate(78.7deg)}67.8%{transform:rotate(80.6deg)}69.49%{transform:rotate(82.6deg)}71.19%{transform:rotate(83.7deg)}72.88%{transform:rotate(85deg)}74.58%{transform:rotate(86.3deg)}76.27%{transform:rotate(87deg)}77.97%{transform:rotate(87.7deg)}79.66%{transform:rotate(88.3deg)}81.36%{transform:rotate(88.6deg)}83.05%{transform:rotate(89.2deg)}84.75%{transform:rotate(89.2deg)}86.44%{transform:rotate(89.5deg)}88.14%{transform:rotate(89.9deg)}89.83%{transform:rotate(89.7deg)}91.53%{transform:rotate(90.1deg)}93.22%{transform:rotate(90.2deg)}94.92%{transform:rotate(90.1deg)}96.61%{transform:rotate(90deg)}98.31%{transform:rotate(89.8deg)}to{transform:rotate(90deg)}}@keyframes spectrum-fill-mask-2{0%{transform:rotate(180deg)}1.69%{transform:rotate(180deg)}3.39%{transform:rotate(180deg)}5.08%{transform:rotate(180deg)}6.78%{transform:rotate(180deg)}8.47%{transform:rotate(180deg)}10.17%{transform:rotate(179.2deg)}11.86%{transform:rotate(164deg)}13.56%{transform:rotate(151.8deg)}15.25%{transform:rotate(140.8deg)}16.95%{transform:rotate(130.3deg)}18.64%{transform:rotate(120.4deg)}20.34%{transform:rotate(110.8deg)}22.03%{transform:rotate(101.6deg)}23.73%{transform:rotate(93.5deg)}25.42%{transform:rotate(85.4deg)}27.12%{transform:rotate(78.1deg)}28.81%{transform:rotate(71.2deg)}30.51%{transform:rotate(89.1deg)}32.2%{transform:rotate(105.5deg)}33.9%{transform:rotate(121.3deg)}35.59%{transform:rotate(135.5deg)}37.29%{transform:rotate(148.4deg)}38.98%{transform:rotate(161deg)}40.68%{transform:rotate(173.5deg)}42.37%{transform:rotate(180deg)}44.07%{transform:rotate(180deg)}45.76%{transform:rotate(180deg)}47.46%{transform:rotate(180deg)}49.15%{transform:rotate(180deg)}50.85%{transform:rotate(180deg)}52.54%{transform:rotate(180deg)}54.24%{transform:rotate(180deg)}55.93%{transform:rotate(180deg)}57.63%{transform:rotate(180deg)}59.32%{transform:rotate(180deg)}61.02%{transform:rotate(180deg)}62.71%{transform:rotate(180deg)}64.41%{transform:rotate(180deg)}66.1%{transform:rotate(180deg)}67.8%{transform:rotate(180deg)}69.49%{transform:rotate(180deg)}71.19%{transform:rotate(180deg)}72.88%{transform:rotate(180deg)}74.58%{transform:rotate(180deg)}76.27%{transform:rotate(180deg)}77.97%{transform:rotate(180deg)}79.66%{transform:rotate(180deg)}81.36%{transform:rotate(180deg)}83.05%{transform:rotate(180deg)}84.75%{transform:rotate(180deg)}86.44%{transform:rotate(180deg)}88.14%{transform:rotate(180deg)}89.83%{transform:rotate(180deg)}91.53%{transform:rotate(180deg)}93.22%{transform:rotate(180deg)}94.92%{transform:rotate(180deg)}96.61%{transform:rotate(180deg)}98.31%{transform:rotate(180deg)}to{transform:rotate(180deg)}}@keyframes spectrum-fills-rotate{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}:host{--spectrum-progress-circle-track-border-color:var(--spectrum-gray-300);--spectrum-progress-circle-fill-border-color:var(
--spectrum-accent-content-color-default
);--spectrum-progress-circle-track-border-color-over-background:var(
--spectrum-transparent-white-300
);--spectrum-progress-circle-fill-border-color-over-background:var(
--spectrum-transparent-white-900
);--spectrum-progress-circle-size:var(
--spectrum-progress-circle-size-medium
);--spectrum-progress-circle-thickness:var(
--spectrum-progress-circle-thickness-medium
);--spectrum-progress-circle-track-border-style:solid}:host([size=s]){--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-small);--spectrum-progress-circle-thickness:var(
--spectrum-progress-circle-thickness-small
)}.spectrum-ProgressCircle--medium{--spectrum-progress-circle-size:var(
--spectrum-progress-circle-size-medium
);--spectrum-progress-circle-thickness:var(
--spectrum-progress-circle-thickness-medium
)}:host([size=l]){--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-large);--spectrum-progress-circle-thickness:var(
--spectrum-progress-circle-thickness-large
)}@media (forced-colors:active){:host{--highcontrast-progress-circle-fill-border-color:Highlight;--highcontrast-progress-circle-fill-border-color-over-background:Highlight}.track{--spectrum-progress-circle-track-border-style:double}}:host{block-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);direction:ltr;display:inline-block;inline-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);position:relative;transform:translateZ(0)}.track{block-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);border-color:var(
--mod-progress-circle-track-border-color,var(--spectrum-progress-circle-track-border-color)
);border-radius:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);border-style:var(
--highcontrast-progress-circle-track-border-style,var(
--mod-progress-circle-track-border-style,var(--spectrum-progress-circle-track-border-style)
)
);border-width:var(
--mod-progress-circle-thickness,var(--spectrum-progress-circle-thickness)
);box-sizing:border-box;inline-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
)}.fills{block-size:100%;inline-size:100%;inset-block-start:0;inset-inline-start:0;position:absolute}.fill{block-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);border-color:var(
--highcontrast-progress-circle-fill-border-color,var(
--mod-progress-circle-fill-border-color,var(--spectrum-progress-circle-fill-border-color)
)
);border-radius:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);border-style:solid;border-width:var(
--mod-progress-circle-thickness,var(--spectrum-progress-circle-thickness)
);box-sizing:border-box;inline-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
)}:host([static=white]) .track{border-color:var(
--mod-progress-circle-track-border-color-over-background,var(--spectrum-progress-circle-track-border-color-over-background)
)}:host([static=white]) .fill{border-color:var(
--highcontrast-progress-circle-fill-border-color-over-background,var(
--mod-progress-circle-fill-border-color-over-background,var(--spectrum-progress-circle-fill-border-color-over-background)
)
)}.fillMask1,.fillMask2{block-size:100%;inline-size:50%;overflow:hidden;position:absolute;transform:rotate(180deg);transform-origin:100%}.fillSubMask1,.fillSubMask2{block-size:100%;inline-size:100%;overflow:hidden;transform:rotate(-180deg);transform-origin:100%}.fillMask2{transform:rotate(0)}:host([indeterminate]) .fills{animation:spectrum-fills-rotate 1s cubic-bezier(.25,.78,.48,.89) infinite;transform:translateZ(0);transform-origin:center;will-change:transform}:host([indeterminate]) .fillSubMask1{animation:spectrum-fill-mask-1 1s linear infinite;transform:translateZ(0);will-change:transform}:host([indeterminate]) .fillSubMask2{animation:spectrum-fill-mask-2 1s linear infinite;transform:translateZ(0);will-change:transform}:host{--spectrum-progresscircle-m-over-background-track-fill-color:var(
--spectrum-alias-track-fill-color-overbackground
)}slot{display:none}
`;var Xo=Object.defineProperty,Go=Object.getOwnPropertyDescriptor,Wo=(t,e,r,o)=>{for(var s,c=o>1?void 0:o?Go(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(c=(o?s(e,r,c):s(c))||c);return o&&c&&Xo(e,r,c),c};class Zo extends(z(u.o,{validSizes:["s","m","l"]})){constructor(){super(...arguments),this.indeterminate=!1,this.label="",this.overBackground=!1,this.progress=0}static get styles(){return[Ko]}makeRotation(t){return this.indeterminate?void 0:`transform: rotate(${t}deg);`}willUpdate(t){t.has("overBackground")&&(this.static=this.overBackground?"white":this.static||void 0)}render(){const e=[this.makeRotation(3.6*Math.min(this.progress,50)-180),this.makeRotation(3.6*Math.max(this.progress-50,0)-180)];return t.dy`
            <slot @slotchange=${this.handleSlotchange}></slot>
            <div class="track"></div>
            <div class="fills">
                ${["Mask1","Mask2"].map(((r,o)=>t.dy`
                        <div class="fill${r}">
                            <div
                                class="fillSub${r}"
                                style=${(0,E.o)(e[o])}
                            >
                                <div class="fill"></div>
                            </div>
                        </div>
                    `))}
            </div>
        `}handleSlotchange(){const t=((t,e)=>{if(t)return null;const r=e.assignedNodes().reduce(((t,e)=>e.textContent?t+e.textContent:t),"");return r?r.trim():null})(this.label,this.slotEl);t&&(this.label=t)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("role")||this.setAttribute("role","progressbar")}updated(t){super.updated(t),!this.indeterminate&&t.has("progress")?this.setAttribute("aria-valuenow",""+this.progress):this.hasAttribute("aria-valuenow")&&this.removeAttribute("aria-valuenow"),t.has("label")&&(this.label.length?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label"))}}Wo([(0,d.Cb)({type:Boolean,reflect:!0})],Zo.prototype,"indeterminate",2),Wo([(0,d.Cb)({type:String})],Zo.prototype,"label",2),Wo([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"over-background"})],Zo.prototype,"overBackground",2),Wo([(0,d.Cb)({reflect:!0})],Zo.prototype,"static",2),Wo([(0,d.Cb)({type:Number})],Zo.prototype,"progress",2),Wo([(0,d.IO)("slot")],Zo.prototype,"slotEl",2),(0,y.N)("sp-progress-circle",Zo)})()})();