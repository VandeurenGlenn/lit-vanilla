import { LitElement, html } from 'lit';
import '../bench-el.js';
import { property } from 'lit/decorators.js';
class LitEl extends LitElement {
  @property()
  name;

  render() {
    return html`<bench-el></bench-el>`;
  }
}

customElements.define('lit-el', LitEl);
