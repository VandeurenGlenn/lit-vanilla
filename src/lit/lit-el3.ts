import { LitElement, html } from 'lit';
import '../bench-el.js';
import { property } from 'lit/decorators.js';
class LitEl3 extends LitElement {
  @property()
  name;
  render() {
    return html`${this.name}`;
  }
}

customElements.define('lit-el3', LitEl3);
