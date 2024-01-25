import { VanillaElement } from "./vanilla-element.js";
import { html } from "lit-html";
import "../bench-el.js";
class VanillaEl extends VanillaElement {
  static get properties() {
    return {
      name: { type: "string" },
    };
  }

  connectedCallback() {
    this.name = "stan";

    document.dispatchEvent(new CustomEvent("is-done"));
  }

  render() {
    return html`<bench-el></bench-el>`;
  }
}

customElements.define("vanilla-el", VanillaEl);
