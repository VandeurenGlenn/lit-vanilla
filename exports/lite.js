/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$1=t$1.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$1="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+h,n$1=`<${o$1}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e$1+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$1)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$1)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l()),this.S(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t$1.litHtmlPolyfillSupport;Z?.(V,M),(t$1.litHtmlVersions??=[]).push("3.1.2");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis;t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;
class LiteElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const klass = customElements.get(this.localName);
        this.shadowRoot.adoptedStyleSheets = klass.styles ? klass.styles.map((style) => style.styleSheet ?? style) : [];
        this.requestRender();
    }
    static { this.styles = []; }
    render() {
        return x `<slot></slot>`;
    }
    requestRender() {
        j(this.render(), this.shadowRoot);
        if (!this.rendered) {
            this.rendered = true;
            this.firstRender();
        }
    }
    /**
     * firstRender happens after new value is set and after render
     */
    firstRender() { }
    /**
     * onChange happens after new value is set and after render
     */
    onChange(propertyKey, value) {
        return value;
    }
    /**
     * willChange happens before new value is set, makes it possible to mutate the value before render
     */
    willchange(propertyKey, value) {
        return value;
    }
}

class LittlePubSub {
    subscribers = {};
    verbose;
    constructor(verbose) {
        this.verbose = verbose;
    }
    _handleContext(handler, context) {
        if (typeof context === 'undefined') {
            context = handler;
        }
        return context;
    }
    hasSubscribers(event) {
        return this.subscribers[event] ? true : false;
    }
    subscribe(event, handler, context) {
        if (!this.hasSubscribers(event))
            this.subscribers[event] = { handlers: [], value: undefined };
        context = this._handleContext(handler, context);
        this.subscribers[event].handlers.push(handler.bind(context));
    }
    unsubscribe(event, handler, context) {
        if (!this.hasSubscribers(event))
            return;
        context = this._handleContext(handler, context);
        const index = this.subscribers[event].handlers.indexOf(handler.bind(context));
        this.subscribers[event].handlers.splice(index);
        if (this.subscribers[event].handlers.length === 0)
            delete this.subscribers[event];
    }
    publish(event, value, verbose) {
        // always set value even when having no subscribers
        if (!this.hasSubscribers(event))
            this.subscribers[event] = {
                handlers: []
            };
        const oldValue = this.subscribers[event]?.value;
        if (this.verbose || verbose || oldValue !== value) {
            this.subscribers[event].value = value;
            for (const handler of this.subscribers[event].handlers) {
                handler(value, oldValue);
            }
        }
    }
    publishVerbose(event, value) {
        this.publish(event, value, true);
    }
    once(event) {
        return new Promise((resolve) => {
            const cb = (value) => {
                resolve(value);
                this.unsubscribe(event, cb);
            };
            this.subscribe(event, cb);
        });
    }
}

globalThis.pubsub = globalThis.pubsub || new LittlePubSub();
let consuming;
const defaultOptions = {
    type: String,
    reflect: false,
    renders: true,
    batchDelay: 50
};
const stringToType = (string, type) => {
    let value = string;
    if (type === Boolean)
        value = Boolean(string === 'true');
    else if (type === Number)
        value = Number(string);
    else if (type === Uint8Array)
        value = new Uint8Array(string.split(','));
    else if (type === Array || type === Object || type === WeakMap || type === Map || type === Uint8Array) {
        value = JSON.parse(string);
        if (type === Map)
            value = new Map(string);
        if (type === WeakMap)
            value = new WeakMap(string);
    }
    return value;
};
const typeToString = (type, value) => {
    let string = value;
    if (type === Boolean || type === Number || type === Uint8Array)
        return value.toString();
    else if (type === Array || type === Object || type === WeakMap || type === Map || type === Uint8Array) {
        let array;
        if (type === Map || type === WeakMap)
            array = Object(value).entries();
        string = JSON.stringify(array);
    }
    return string;
};
const property = (options) => {
    options = { ...defaultOptions, ...options };
    return (target, propertyKey, descriptor) => {
        const { type, reflect, attribute, renders, batches, batchDelay, consumer, provider } = options;
        const attributeName = attribute || propertyKey;
        const isBoolean = type === Boolean;
        // let timeoutChange
        function get() {
            if (consumer && !consuming) {
                consuming = true;
                globalThis.pubsub.subscribe(propertyKey, (value) => {
                    this[propertyKey] = value;
                });
            }
            const value = reflect
                ? isBoolean
                    ? this.hasAttribute(attributeName)
                    : stringToType(this.getAttribute(attributeName), type)
                : target[`_${propertyKey}`];
            if (!value && consumer && globalThis.pubsub.subscribers[propertyKey]?.value) {
                this[`${propertyKey}`] = globalThis.pubsub.subscribers?.[propertyKey].value;
                return globalThis.pubsub.subscribers?.[propertyKey].value;
            }
            return value;
        }
        async function set(value) {
            const set = async () => {
                if (this.willChange)
                    value = await this.willChange(propertyKey, value);
                if (target[`_${propertyKey}`] !== value) {
                    if (reflect)
                        if (isBoolean)
                            if (value)
                                this.setAttribute(attributeName, '');
                            else
                                this.removeAttribute(attributeName);
                        else if (value)
                            this.setAttribute(attributeName, typeToString(type, value));
                        else
                            this.removeAttribute(attributeName);
                    // only store data ourselves when really needed
                    else
                        target[`_${propertyKey}`] = value;
                }
                if (this.requestRender && renders)
                    this.requestRender();
                if (this.onChange)
                    await this.onChange(propertyKey, value);
                if (provider) {
                    if (!consuming) {
                        consuming = true;
                        globalThis.pubsub.subscribe(propertyKey, (value) => {
                            if (value !== this[propertyKey])
                                this[propertyKey] = value;
                        });
                    }
                    globalThis.pubsub.publish(propertyKey, value);
                }
            };
            if (batches) {
                if (target[`_${propertyKey}_timeout`])
                    clearTimeout(target[`_${propertyKey}_timeout`]);
                target[`_${propertyKey}_timeout`] = setTimeout(set, batchDelay);
            }
            else
                set();
        }
        if (!descriptor) {
            Object.defineProperty(target, propertyKey, {
                get,
                set
            });
        }
        else {
            descriptor.get = get;
            descriptor.set = set;
        }
    };
};

customElements.define(
  'bench-el',
  class extends HTMLElement {
    constructor() {
      super();
    }
  }
);

class LiteEl extends LiteElement {
    render() {
        return x `<bench-el></bench-el>`;
    }
}
__decorate([
    property()
], LiteEl.prototype, "name", void 0);
customElements.define('lite-el', LiteEl);

class LiteEl2 extends LiteElement {
    render() {
        return x `<bench-el></bench-el>`;
    }
}
__decorate([
    property()
], LiteEl2.prototype, "name", void 0);
customElements.define('lite-el2', LiteEl2);

class LiteEl3 extends LiteElement {
    render() {
        return x `${this.name}`;
    }
}
__decorate([
    property()
], LiteEl3.prototype, "name", void 0);
customElements.define('lite-el3', LiteEl3);

class MyEl extends LiteElement {
    constructor() {
        super(...arguments);
        this.name10 = 'stan10';
    }
    connectedCallback() {
        for (let i = 0; i < 10; i++) {
            this[`name${i + 1}`] = 'stan' + (i + 1);
        }
        this.shadowRoot
            .querySelector('lite-el3')
            .shadowRoot.innerHTML.includes('stan10') &&
            document.dispatchEvent(new CustomEvent('is-done'));
    }
    render() {
        return x `<lite-el .name=${this.name1}></lite-el
      ><lite-el2 .name=${this.name1}></lite-el2
      ><lite-el3 .name=${this.name10}></lite-el3>`;
    }
}
__decorate([
    property()
], MyEl.prototype, "name1", void 0);
__decorate([
    property()
], MyEl.prototype, "name2", void 0);
__decorate([
    property()
], MyEl.prototype, "name3", void 0);
__decorate([
    property()
], MyEl.prototype, "name4", void 0);
__decorate([
    property()
], MyEl.prototype, "name5", void 0);
__decorate([
    property()
], MyEl.prototype, "name6", void 0);
__decorate([
    property()
], MyEl.prototype, "name7", void 0);
__decorate([
    property()
], MyEl.prototype, "name8", void 0);
__decorate([
    property()
], MyEl.prototype, "name9", void 0);
__decorate([
    property()
], MyEl.prototype, "name10", void 0);
customElements.define('my-el', MyEl);
