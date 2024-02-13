import { html, LiteElement, property } from '@vandeurenglenn/lite';
import '../bench-el.js';
class LiteEl extends LiteElement {
  @property()
  name;
  render() {
    return html`<bench-el></bench-el>`;
  }
}

customElements.define('lite-el', LiteEl);
