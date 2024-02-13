import { VanillaElement } from './vanilla-element.js';
import { html } from 'lit-html';
import './vanilla-el.js';
import './vanilla-el2.js';
import './vanilla-el3.js';
class MyEl extends VanillaElement {
  static get properties() {
    return {
      name1: { type: 'string' },
      name2: { type: 'string' },
      name3: { type: 'string' },
      name4: { type: 'string' },
      name5: { type: 'string' },
      name6: { type: 'string' },
      name7: { type: 'string' },
      name8: { type: 'string' },
      name9: { type: 'string' },
      name10: { type: 'string' },
    };
  }

  connectedCallback() {
    for (let i = 0; i < 10; i++) {
      this[`name${i + 1}`] = 'stan' + (i + 1);
    }
    this.shadowRoot
      .querySelector('vanilla-el3')
      .shadowRoot.innerHTML.includes('stan10') &&
      document.dispatchEvent(new CustomEvent('is-done'));
  }

  render() {
    return html`<vanilla-el .name=${this.name1}></vanilla-el
      ><vanilla-el2 .name=${this.name1}></vanilla-el2
      ><vanilla-el3 .name=${this.name10}></vanilla-el3>`;
  }
}

customElements.define('my-el', MyEl);
