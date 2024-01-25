import { LitElement, html } from "lit";
import "./lit-el.js";
import "./lit-el2.js";
import "./lit-el3.js";

class MyEl extends LitElement {
  name;
  static get properties() {
    return {
      name: { type: "string" },
    };
  }

  render() {
    return html`<lit-el .name=${this.name}></lit-el
      ><lit-el2 .name=${this.name}></lit-el2
      ><lit-el3 .name=${this.name}></lit-el3>`;
  }
}

customElements.define("my-el", MyEl);
