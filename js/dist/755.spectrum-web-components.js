"use strict";(globalThis.webpackChunk_adobe_helix_importer_ui=globalThis.webpackChunk_adobe_helix_importer_ui||[]).push([[755],{171:(a,t,r)=>{r.d(t,{i:()=>e,l:()=>n});var i=r(601);const e=a=>a.querySelector(i.N),n=a=>a.assignedElements().find((a=>a.matches(i.N)))},601:(a,t,r)=>{r.d(t,{N:()=>n});const i=["button","[focusable]","[href]","input","label","select","textarea","[tabindex]"],e=':not([tabindex="-1"])',n=i.join(`${e}, `)+e;i.join(", ")},755:(a,t,r)=>{r.r(t);var i=r(321),e=r(392),n=r(338);const o=e.iv`
:host{--spectrum-overlay-animation-distance:var(
--spectrum-picker-m-texticon-popover-offset-y
);opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100) ease-in-out,opacity var(--spectrum-global-animation-duration-100) ease-in-out,visibility 0s linear var(--spectrum-global-animation-duration-100);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0s;visibility:visible}:host{--spectrum-underlay-background-entry-animation-delay:var(
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
`;var s=Object.defineProperty;Object.getOwnPropertyDescriptor;class d extends i.o{constructor(){super(...arguments),this.open=!1}static get styles(){return[o]}render(){return e.dy``}}((a,t,r,i)=>{for(var e,n=void 0,o=a.length-1;o>=0;o--)(e=a[o])&&(n=e(t,r,n)||n);n&&s(t,r,n)})([(0,n.Cb)({type:Boolean,reflect:!0})],d.prototype,"open");var c=r(200);(0,c.N)("sp-underlay",d);var m=r(171),u=r(954);const l=e.iv`
.modal{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0s linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]) .modal{opacity:1;pointer-events:auto;transition-delay:0s;visibility:visible}:host{--spectrum-dialog-confirm-exit-animation-delay:0s;--spectrum-dialog-fullscreen-margin:32px;--spectrum-dialog-max-height:90vh;--spectrum-dialog-max-width:90%}.modal{border-radius:var(
--spectrum-dialog-confirm-border-radius,var(--spectrum-alias-component-border-radius)
);max-height:var(--spectrum-dialog-max-height);max-width:var(--spectrum-dialog-max-width);outline:none;overflow:hidden;pointer-events:auto;transform:translateY(var(
--spectrum-dialog-confirm-entry-animation-distance,var(--spectrum-global-dimension-size-250)
));transition:opacity var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0s),visibility 0s linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0s) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
)),transform 0s linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0s) + var(
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
)}@media only screen and (max-device-height:350px),only screen and (max-device-width:400px){:host([responsive]) .modal{border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}}.fullscreen{bottom:var(--spectrum-dialog-fullscreen-margin);left:var(--spectrum-dialog-fullscreen-margin);right:var(--spectrum-dialog-fullscreen-margin);top:var(--spectrum-dialog-fullscreen-margin)}.fullscreen,.fullscreenTakeover{max-height:none;max-width:none;position:fixed}.fullscreenTakeover{border:none;border-radius:0;box-sizing:border-box;inset:0}.fullscreenTakeover,:host([open]) .fullscreenTakeover{transform:none}.modal{background:var(--spectrum-gray-100)}:host{--spectrum-dialog-confirm-exit-animation-duration:var(--swc-test-duration);--spectrum-dialog-confirm-entry-animation-duration:var(
--swc-test-duration
);height:100dvh}.modal{overflow:visible}
`,p=e.iv`
:host{bottom:0;display:flex;inline-size:100%;inset-inline-start:0;justify-content:center;position:fixed}:host{--spectrum-tray-exit-animation-delay:0s;--spectrum-tray-entry-animation-delay:0.16s;--spectrum-tray-max-inline-size:375px;--spectrum-tray-spacing-edge-to-tray-safe-zone:64px;--spectrum-tray-entry-animation-duration:var(
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
)}@media screen and (orientation:landscape){.tray{border-top-left-radius:var(
--mod-tray-corner-radius,var(--spectrum-tray-corner-radius)
);border-top-right-radius:var(
--mod-tray-corner-radius,var(--spectrum-tray-corner-radius)
);max-inline-size:var(
--mod-tray-max-inline-size,var(--spectrum-tray-max-inline-size)
)}}:host{align-items:flex-end;max-height:100vh;max-height:100dvh;position:fixed!important}sp-underlay{touch-action:none}.tray{display:inline-flex;overscroll-behavior:contain}::slotted(.visually-hidden){clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}
`;var y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,g=(a,t,r,i)=>{for(var e,n=i>1?void 0:i?v(t,r):t,o=a.length-1;o>=0;o--)(e=a[o])&&(n=(i?e(t,r,n):e(n))||n);return i&&n&&y(t,r,n),n};class b extends i.o{constructor(){super(...arguments),this.open=!1,this.prefersMotion=new u.l8(this,"(prefers-reduced-motion: no-preference)"),this.transitionPromise=Promise.resolve(),this.animating=!1}static get styles(){return[l,p]}focus(){const a=(0,m.i)(this);a?a.focus():1===this.children.length?this.tray.focus():super.focus()}overlayWillCloseCallback(){return this.open?(this.close(),!0):this.animating}close(){this.open=!1,this.prefersMotion.matches||this.dispatchClosed()}dispatchClosed(){this.dispatchEvent(new Event("close",{bubbles:!0}))}handleUnderlayTransitionend(){this.open||(this.resolveTransitionPromise(),this.dispatchClosed())}handleTrayTransitionend(){this.open&&this.resolveTransitionPromise()}update(a){a.has("open")&&void 0!==a.get("open")&&this.prefersMotion.matches&&(this.animating=!0,this.transitionPromise=new Promise((a=>{this.resolveTransitionPromise=()=>{this.animating=!1,a()}}))),super.update(a)}render(){return e.dy`
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
        `}async getUpdateComplete(){const a=await super.getUpdateComplete();return await this.transitionPromise,a}}g([(0,n.Cb)({type:Boolean,reflect:!0})],b.prototype,"open",2),g([(0,n.IO)(".tray")],b.prototype,"tray",2),(0,c.N)("sp-tray",b)}}]);