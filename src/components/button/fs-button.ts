import styles from './fs-button.scss?inline';
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../icon/fs-icon';

/**
 * @summary The fs-button element.
 *
 * @dependency fs-icon
 *
 * @slot - The label of the button.
 */
@customElement('fs-button')
export class fsButton extends LitElement {
  /**
   * Display a caret icon within the button to indicate a dropdown.
   */
  @property({ type: Boolean })
  caret: boolean = false;

  /**
   * The button variant.
   */
  @property({ type: String, reflect: true })
  variant: 'primary' | 'secondary' | 'success' = 'primary';

  static get styles() {
    return [unsafeCSS(styles)];
  }

  render() {
    const classes = {
      button: true,
      'button--primary': this.variant === 'primary',
      'button--secondary': this.variant === 'secondary',
      'button--success': this.variant === 'success',
    };

    return html`
      <button class=${classMap(classes)}>
        <slot></slot>
        ${this.caret ? html`<fs-icon icon="chevron-down"></fs-icon>` : ''}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fs-button': fsButton;
  }
}
