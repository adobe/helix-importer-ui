"use strict";(globalThis.webpackChunk_adobe_helix_importer_ui=globalThis.webpackChunk_adobe_helix_importer_ui||[]).push([[676],{888:(a,r,t)=>{t.d(r,{G:()=>e,q:()=>i});var n=t(893);const i=a=>a.querySelector(n.u),e=a=>a.assignedElements().find((a=>a.matches(n.u)))},893:(a,r,t)=>{t.d(r,{u:()=>e});const n=["button","[focusable]","[href]","input","label","select","textarea","[tabindex]"],i=':not([tabindex="-1"])',e=n.join(`${i}, `)+i;n.join(", ")},676:(a,r,t)=>{t.r(r);var n=t(392),i=t(440),e=t(708);const o=i.gV`
:host{opacity:0;pointer-events:none;transition:transform var(
--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s)
) ease-in-out,opacity var(
--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s)
) ease-in-out,visibility 0s linear var(
--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s)
);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:var(
--mod-overlay-animation-duration-opened,var(--spectrum-animation-duration-0,0s)
);visibility:visible}:host{--spectrum-underlay-background-entry-animation-delay:var(
--spectrum-animation-duration-0
);--spectrum-underlay-background-exit-animation-ease:var(
--spectrum-animation-ease-in
);--spectrum-underlay-background-entry-animation-ease:var(
--spectrum-animation-ease-out
);--spectrum-underlay-background-entry-animation-duration:var(
--spectrum-animation-duration-600
);--spectrum-underlay-background-exit-animation-duration:var(
--spectrum-animation-duration-300
);--spectrum-underlay-background-exit-animation-delay:var(
--spectrum-animation-duration-200
);--spectrum-underlay-background-color:rgba(var(--spectrum-black-rgb),var(--spectrum-overlay-opacity))}:host{background-color:var(
--mod-underlay-background-color,var(--spectrum-underlay-background-color)
);inset-block:0;inset-inline:0;overflow:hidden;position:fixed;transition:opacity var(
--mod-underlay-background-exit-animation-duration,var(--spectrum-underlay-background-exit-animation-duration)
) var(
--mod-underlay-background-exit-animation-ease,var(--spectrum-underlay-background-exit-animation-ease)
) var(
--mod-underlay-background-exit-animation-delay,var(--spectrum-underlay-background-exit-animation-delay)
),visibility 0s linear calc(var(
--mod-underlay-background-exit-animation-delay,
var(--spectrum-underlay-background-exit-animation-delay)
) + var(
--mod-underlay-background-exit-animation-duration,
var(
--spectrum-underlay-background-exit-animation-duration
)
));z-index:1}:host([open]){transition:opacity var(
--mod-underlay-background-entry-animation-duration,var(--spectrum-underlay-background-entry-animation-duration)
) var(
--mod-underlay-background-entry-animation-ease,var(--spectrum-underlay-background-entry-animation-ease)
) var(
--mod-underlay-background-entry-animation-delay,var(--spectrum-underlay-background-entry-animation-delay)
)}
`;var m=Object.defineProperty;Object.getOwnPropertyDescriptor;class s extends n.m{constructor(){super(...arguments),this.open=!1}static get styles(){return[o]}render(){return i.kP``}}((a,r,t,n)=>{for(var i,e=void 0,o=a.length-1;o>=0;o--)(i=a[o])&&(e=i(r,t,e)||e);e&&m(r,t,e)})([(0,e.qq)({type:Boolean,reflect:!0})],s.prototype,"open");var d=t(856);(0,d.w)("sp-underlay",s);var c=t(888),u=t(755);const l=i.gV`
.modal{opacity:0;pointer-events:none;transition:transform var(
--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s)
) ease-in-out,opacity var(
--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s)
) ease-in-out,visibility 0s linear var(
--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s)
);visibility:hidden}:host([open]) .modal{opacity:1;pointer-events:auto;transition-delay:var(
--mod-overlay-animation-duration-opened,var(--spectrum-animation-duration-0,0s)
);visibility:visible}:host{--spectrum-modal-confirm-exit-animation-delay:var(
--spectrum-animation-duration-0
);--spectrum-modal-fullscreen-margin:32px;--spectrum-modal-max-height:90vh;--spectrum-modal-max-width:90%;--spectrum-modal-background-color:var(--spectrum-gray-100);--spectrum-modal-confirm-border-radius:var(--spectrum-corner-radius-100);--spectrum-modal-confirm-exit-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-modal-confirm-entry-animation-duration:var(
--spectrum-animation-duration-500
);--spectrum-modal-confirm-entry-animation-delay:var(
--spectrum-animation-duration-200
);--spectrum-modal-transition-animation-duration:var(
--spectrum-animation-duration-100
)}.modal{background:var(
--mod-modal-background-color,var(--spectrum-modal-background-color)
);border-radius:var(
--mod-modal-confirm-border-radius,var(--spectrum-modal-confirm-border-radius)
);max-block-size:var(
--mod-modal-max-height,var(--spectrum-modal-max-height)
);max-inline-size:var(
--mod-modal-max-width,var(--spectrum-modal-max-width)
);outline:none;overflow:hidden;pointer-events:auto;transform:translateY(var(
--mod-modal-confirm-entry-animation-distance,var(--spectrum-modal-confirm-entry-animation-distance)
));transition:opacity var(
--mod-modal-confirm-exit-animation-duration,var(--spectrum-modal-confirm-exit-animation-duration)
) var(--spectrum-animation-ease-in) var(
--mod-modal-confirm-exit-animation-delay,var(--spectrum-modal-confirm-exit-animation-delay)
),visibility 0s linear calc(var(
--mod-modal-confirm-exit-animation-delay,
var(--spectrum-modal-confirm-exit-animation-delay)
) + var(
--mod-modal-confirm-exit-animation-duration,
var(--spectrum-modal-confirm-exit-animation-duration)
)),transform 0s linear calc(var(
--mod-modal-confirm-exit-animation-delay,
var(--spectrum-modal-confirm-exit-animation-delay)
) + var(
--mod-modal-confirm-exit-animation-duration,
var(--spectrum-modal-confirm-exit-animation-duration)
));z-index:2}:host([open]) .modal{transform:translateY(0);transition:transform var(
--mod-modal-confirm-entry-animation-duration,var(--spectrum-modal-confirm-entry-animation-duration)
) var(--spectrum-animation-ease-out) var(
--mod-modal-confirm-entry-animation-delay,var(--spectrum-modal-confirm-entry-animation-delay)
),opacity var(
--mod-modal-confirm-entry-animation-duration,var(--spectrum-modal-confirm-entry-animation-duration)
) var(--spectrum-animation-ease-out) var(
--mod-modal-confirm-entry-animation-delay,var(--spectrum-modal-confirm-entry-animation-delay)
)}@media only screen and (max-device-height:350px),only screen and (max-device-width:400px){:host([responsive]) .modal{border-radius:0;inline-size:100%;height:100%;max-inline-size:100%;max-height:100%}}.fullscreen{inset-block-end:var(
--mod-modal-fullscreen-margin,var(--spectrum-modal-fullscreen-margin)
);inset-block-start:var(
--mod-modal-fullscreen-margin,var(--spectrum-modal-fullscreen-margin)
);inset-inline-end:var(
--mod-modal-fullscreen-margin,var(--spectrum-modal-fullscreen-margin)
);inset-inline-start:var(
--mod-modal-fullscreen-margin,var(--spectrum-modal-fullscreen-margin)
)}.fullscreen,.fullscreenTakeover{max-inline-size:none;max-height:none;position:fixed}.fullscreenTakeover{border:none;border-radius:0;box-sizing:border-box;inset:0}.fullscreenTakeover,:host([open]) .fullscreenTakeover{transform:none}:host{--spectrum-dialog-confirm-exit-animation-duration:var(--swc-test-duration);--spectrum-dialog-confirm-entry-animation-duration:var(
--swc-test-duration
);height:100dvh}.modal{overflow:visible}
`,p=i.gV`
:host{display:flex;inline-size:100%;inset-block-end:0;inset-inline-start:0;justify-content:center;position:fixed}:host{--spectrum-tray-exit-animation-delay:0s;--spectrum-tray-entry-animation-delay:0.16s;--spectrum-tray-max-inline-size:375px;--spectrum-tray-spacing-edge-to-tray-safe-zone:64px;--spectrum-tray-entry-animation-duration:var(
--spectrum-animation-duration-500
);--spectrum-tray-exit-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-tray-corner-radius:var(--spectrum-corner-radius-100);--spectrum-tray-background-color:var(--spectrum-background-layer-2-color)}@media (forced-colors:active){:host{--highcontrast-tray-background-color:Background}}.tray{background-color:var(
--highcontrast-tray-background-color,var(--mod-tray-background-color,var(--spectrum-tray-background-color))
);border-radius:unset;box-sizing:border-box;inline-size:100%;margin-block-start:var(
--mod-tray-spacing-edge-to-tray-safe-zone,var(--spectrum-tray-spacing-edge-to-tray-safe-zone)
);max-block-size:calc(100vh - var(
--mod-tray-spacing-edge-to-tray-safe-zone,
var(--spectrum-tray-spacing-edge-to-tray-safe-zone)
));outline:none;overflow:auto;padding-block-end:var(
--mod-tray-bottom-to-content-area,var(--spectrum-tray-top-to-content-area)
);padding-block-start:var(
--mod-tray-top-to-content-area,var(--spectrum-tray-top-to-content-area)
);transform:translateY(100%);transition:opacity var(
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
)}@media screen and (orientation:landscape){.tray{border-start-end-radius:var(
--mod-tray-corner-radius,var(--spectrum-tray-corner-radius)
);border-start-start-radius:var(
--mod-tray-corner-radius,var(--spectrum-tray-corner-radius)
);max-inline-size:var(
--mod-tray-max-inline-size,var(--spectrum-tray-max-inline-size)
)}}:host{align-items:flex-end;max-height:100vh;max-height:100dvh;position:fixed!important}sp-underlay{touch-action:none}.tray{display:inline-flex;overscroll-behavior:contain}::slotted(.visually-hidden){clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}
`;var y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,h=(a,r,t,n)=>{for(var i,e=n>1?void 0:n?v(r,t):r,o=a.length-1;o>=0;o--)(i=a[o])&&(e=(n?i(r,t,e):i(e))||e);return n&&e&&y(r,t,e),e};class b extends n.m{constructor(){super(...arguments),this.open=!1,this.prefersMotion=new u.st(this,"(prefers-reduced-motion: no-preference)"),this.transitionPromise=Promise.resolve(),this.animating=!1}static get styles(){return[l,p]}focus(){const a=(0,c.q)(this);a?a.focus():1===this.children.length?this.tray.focus():super.focus()}overlayWillCloseCallback(){return this.open?(this.close(),!0):this.animating}close(){this.open=!1,this.prefersMotion.matches||this.dispatchClosed()}dispatchClosed(){this.dispatchEvent(new Event("close",{bubbles:!0}))}handleUnderlayTransitionend(){this.open||(this.resolveTransitionPromise(),this.dispatchClosed())}handleTrayTransitionend(){this.open&&this.resolveTransitionPromise()}update(a){a.has("open")&&void 0!==a.get("open")&&this.prefersMotion.matches&&(this.animating=!0,this.transitionPromise=new Promise((a=>{this.resolveTransitionPromise=()=>{this.animating=!1,a()}}))),super.update(a)}render(){return i.kP`
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
        `}async getUpdateComplete(){const a=await super.getUpdateComplete();return await this.transitionPromise,a}}h([(0,e.qq)({type:Boolean,reflect:!0})],b.prototype,"open",2),h([(0,e.kt)(".tray")],b.prototype,"tray",2),(0,d.w)("sp-tray",b)}}]);