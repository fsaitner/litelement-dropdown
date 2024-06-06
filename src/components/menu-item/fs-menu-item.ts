import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './fs-menu-item.scss?inline';

/**
 * @summary The fs-menu-item element.
 *
 * @slot - The content of the menu item.
 */
@customElement('fs-menu-item')
export class fsMenuItem extends LitElement {
  /**
   * Display the menu item in active state.
   */
  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  static get styles() {
    return [unsafeCSS(styles)];
  }

  /**
   * Add click event listener to the element itself.
   */
  constructor() {
    super();
    this.addEventListener('click', this.handleItemClick);
  }

  render() {
    return html`<slot></slot>`;
  }

  /**
   * Toggle active state on click.
   */
  private handleItemClick() {
    this.active = !this.active;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fs-menu-item': fsMenuItem;
  }
}
