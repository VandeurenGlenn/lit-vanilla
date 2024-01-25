import { VanillaElement } from "./vanilla-element.js";
import { html } from "lit-html";
import "./vanilla-el.js";
import "./vanilla-el2.js";
import "./vanilla-el3.js";
class MyEl extends VanillaElement {
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
    return html`<vanilla-el></vanilla-el><vanilla-el2></vanilla-el2
      ><vanilla-el3></vanilla-el3>`;
  }
}

customElements.define("my-el", MyEl);
