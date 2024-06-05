import styles from './fs-dropdown.scss?inline';
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @summary The fs-dropdown element.
 *
 * @slot - The content of the menu.
 * @slot trigger - The dropdown trigger element.
 */
@customElement('fs-dropdown')
export class fsDropdown extends LitElement {
  /**
   * Display the dropdown content in open state.
   */
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  static get styles() {
    return [unsafeCSS(styles)];
  }

  /**
   * Add click event listener to the document.
   */
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  /**
   * Remove click event listener from the document.
   */
  disconnectedCallback() {
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
    super.disconnectedCallback();
  }

  render() {
    return html`
      <slot name="trigger" @click=${this.handleTriggerClick}></slot>
      <slot ?hidden="${!this.open}"></slot>
    `;
  }

  /**
   * Hide default slot content when click outside of element.
   */
  handleOutsideClick(event: MouseEvent) {
    if (!event.composedPath().includes(this)) {
      this.open = false;
    }
  }

  /**
   * Toggle visibility of default slot content trigger element click.
   */
  handleTriggerClick() {
    this.open = !this.open;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fs-dropdown': fsDropdown;
  }
}
