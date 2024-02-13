import { LiteElement, html, property } from '@vandeurenglenn/lite';
import './lite-el.js';
import './lite-el2.js';
import './lite-el3.js';
class MyEl extends LiteElement {
  @property()
  name1;
  @property()
  name2;
  @property()
  name3;
  @property()
  name4;
  @property()
  name5;
  @property()
  name6;
  @property()
  name7;
  @property()
  name8;
  @property()
  name9;
  @property()
  name10 = 'stan10';

  connectedCallback() {
    for (let i = 0; i < 10; i++) {
      this[`name${i + 1}`] = 'stan' + (i + 1);
    }
    this.shadowRoot
      .querySelector('lite-el3')
      .shadowRoot.innerHTML.includes('stan10') &&
      document.dispatchEvent(new CustomEvent('is-done'));
  }

  render() {
    return html`<lite-el .name=${this.name1}></lite-el
      ><lite-el2 .name=${this.name1}></lite-el2
      ><lite-el3 .name=${this.name10}></lite-el3>`;
  }
}

customElements.define('my-el', MyEl);
