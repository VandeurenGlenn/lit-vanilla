import { LitElement, html } from 'lit';

import { property } from 'lit/decorators.js';
import '../bench-el.js';
class LitEl2 extends LitElement {
  @property()
  name;

  render() {
    return html`<bench-el></bench-el>`;
  }
}

customElements.define('lit-el2', LitEl2);
