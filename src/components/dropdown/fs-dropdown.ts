import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './fs-dropdown.scss?inline';

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

  /**
   * The position of the dropdown menu.
   */
  @property({ type: String, reflect: true })
  position: 'left' | 'right' = 'left';

  static get styles() {
    return [unsafeCSS(styles)];
  }

  constructor() {
    super();
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    /**
     * Listen for item select event from fs-menu
     */
    this.addEventListener('fs-item-select', this.handleItemSelect as EventListener);
  }

  /**
   * Add click event listener to document.
   */
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.handleOutsideClick as EventListener);
  }

  /**
   * Remove click event listener from document.
   */
  disconnectedCallback() {
    document.removeEventListener('click', this.handleOutsideClick as EventListener);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <slot name="trigger" @click=${this.handleTriggerClick}></slot>
      <slot ?hidden="${!this.open}"></slot>
    `;
  }

  /**
   * Hide default slot content when menu item selected.
   */
  private handleItemSelect() {
    if (this.open) {
      this.open = false;
    }
  }

  /**
   * Hide default slot content when click outside of element.
   */
  private handleOutsideClick(event: MouseEvent) {
    if (!event.composedPath().includes(this)) {
      this.open = false;
    }
  }

  /**
   * Toggle visibility of default slot content trigger element click.
   */
  private handleTriggerClick() {
    this.open = !this.open;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fs-dropdown': fsDropdown;
  }
}
