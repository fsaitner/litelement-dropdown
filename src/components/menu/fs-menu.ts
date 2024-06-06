import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './fs-menu.scss?inline';

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
    return html`<slot @click=${this.handleClick}></slot>`;
  }

  /**
   * Dispatch new event when menu item selected.
   */
  private handleClick() {
    const itemSelectEvent = new Event('fs-item-select', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(itemSelectEvent);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fs-menu': fsMenu;
  }
}
