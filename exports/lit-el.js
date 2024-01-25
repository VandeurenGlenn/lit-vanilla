import { VanillaElement } from "./vanilla-element.js";
import { html } from "lit-html";
import "../bench-el.js";
class VanillaEl extends LitElement {
  static get properties() {
    return {
      name: { type: "string" },
    };
  }

  connectedCallback() {
    this.name = "stan";
  }

  render() {
    return html`<bench-el></bench-el>`;
  }
}

customElements.define("vanilla-el", VanillaEl);
