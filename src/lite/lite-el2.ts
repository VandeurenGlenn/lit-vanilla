import { html, LiteElement, property } from '@vandeurenglenn/lite';
import '../bench-el.js';
class LiteEl2 extends LiteElement {
  @property()
  name;

  render() {
    return html`<bench-el></bench-el>`;
  }
}

customElements.define('lite-el2', LiteEl2);
