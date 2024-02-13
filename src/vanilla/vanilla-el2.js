import { VanillaElement } from './vanilla-element.js';
import { html } from 'lit-html';
import '../bench-el.js';
class VanillaEl2 extends VanillaElement {
  static get properties() {
    return {
      name: { type: 'string' },
    };
  }

  render() {
    return html`<bench-el></bench-el>`;
  }
}

customElements.define('vanilla-el2', VanillaEl2);
