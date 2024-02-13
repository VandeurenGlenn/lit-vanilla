import '../bench-el.js';
import { html, LiteElement, property } from '@vandeurenglenn/lite';
class LiteEl3 extends LiteElement {
  @property()
  name;
  render() {
    return html`${this.name}`;
  }
}

customElements.define('lite-el3', LiteEl3);
