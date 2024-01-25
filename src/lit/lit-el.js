import { LitElement, html } from "lit";
import "../bench-el.js";
class LitEl extends LitElement {
  static get properties() {
    return {
      name: { type: "string" },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.name = "hello";
    await this.updateComplete;
    document.dispatchEvent(new CustomEvent("is-done"));
  }

  render() {
    return html`<bench-el></bench-el>`;
  }
}

customElements.define("lit-el", LitEl);
