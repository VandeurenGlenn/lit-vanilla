import { LitElement, html } from 'lit';
import './lit-el.js';
import './lit-el2.js';
import './lit-el3.js';
import { property } from 'lit/decorators.js';

class MyEl extends LitElement {
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
  name10;
  async connectedCallback() {
    super.connectedCallback();
    for (let i = 0; i < 10; i++) {
      this[`name${i + 1}`] = 'stan' + (i + 1);
    }
    await this.updateComplete;
    await this.shadowRoot.querySelector('lit-el3').updateComplete;
    while (
      !this.shadowRoot
        .querySelector('lit-el3')
        .shadowRoot.innerHTML.includes('stan10')
    ) {
      await this.shadowRoot.querySelector('lit-el3').updateComplete;
    }
    document.dispatchEvent(new CustomEvent('is-done'));
  }

  render() {
    return html`<lit-el .name=${this.name1}></lit-el
      ><lit-el2 .name=${this.name1}></lit-el2
      ><lit-el3 .name=${this.name10}></lit-el3>`;
  }
}

customElements.define('my-el', MyEl);
