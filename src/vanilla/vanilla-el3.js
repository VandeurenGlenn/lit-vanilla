import { VanillaElement } from './vanilla-element.js';
import { html } from 'lit-html';
import '../bench-el.js';
class VanillaEl3 extends VanillaElement {
  static get properties() {
    return {
      name: { type: 'string' },
    };
  }
  render() {
    return html`${this.name}`;
  }
}

customElements.define('vanilla-el3', VanillaEl3);
