import { html, render } from "lit-html";

export class VanillaElement extends HTMLElement {
  get staticProperties() {
    return customElements.get(this.localName).properties;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#setupProperties();
    this.requestUpdate();
  }

  #setupProperties() {
    const properties = {};
    for (const [name, config] of Object.entries(
      customElements.get(this.localName).properties
    )) {
      properties[name] = {
        set: (value) => {
          if (config.type === "boolean")
            this[`_${name}`] = value === "true" || this.hasAttribute(name);
          else if (config.type === "array" || config.type === "object")
            this[`_${name}`] = JSON.parse(value);
          else if (config.type === "number") this[`_${name}`] = Number(value);
          else if (config.type === "uint8Array")
            this[`_${name}`] = new Uint8Array(Object.values(JSON.parse(value)));
          else this[`_${name}`] = value;

          if (config.onchange) config.onchange(value);
          if (config.reflect) {
            if (config.type === "boolean") {
              if (value) this.setAttribute(name, "");
              else this.removeAttribute(name);
            } else if (config.type === "array" || config.type === "object")
              this.setAttribute(name, JSON.stringify(value));
            else this.setAttribute(name, value.toString());
          }
          if (config.autoUpdate || config.autoUpdate === undefined)
            this.requestUpdate();
        },
        get: () => {
          return this[`_${name}`] || config.value;
        },
      };
      if (this.hasAttribute(name)) {
        this[name] = this.getAttribute(name);
      }
    }
    Object.defineProperties(this, properties);
  }

  requestUpdate() {
    if (this.beforeUpdate) this.beforeUpdate();
    render(this.render(), this.shadowRoot);
  }
}
