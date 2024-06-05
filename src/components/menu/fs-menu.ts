import styles from './fs-menu.scss?inline';
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @summary The fs-menu element.
 *
 * @slot - The content of the menu.
 */
@customElement('fs-menu')
export class fsMenu extends LitElement {
  static get styles() {
    return [unsafeCSS(styles)];
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fs-menu': fsMenu;
  }
}
