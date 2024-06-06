import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../button/fs-button';
import '../dropdown/fs-dropdown';
import '../icon/fs-icon';
import '../menu-item/fs-menu-item';
import '../menu/fs-menu';
import styles from './fs-playground.scss?inline';

@customElement('fs-playground')
class fsPlayground extends LitElement {
  /**
   * Display a caret icon within the button to indicate a dropdown.
   */
  @property({ type: Boolean })
  caret: boolean = true;

  /**
   * Set a menu item active. Defaults to second item.
   */
  @property({ type: Boolean })
  activeMenuItem: boolean = false;

  /**
   * The position of the dropdown menu.
   */
  @property({ type: String })
  position: 'left' | 'right' = 'left';

  /**
   * The button variant.
   */
  @property({ type: String })
  variant: 'primary' | 'secondary' | 'success' = 'primary';

  static get styles() {
    return [unsafeCSS(styles)];
  }

  render() {
    return html`
      <h1>Dropdown Component Playground</h1>
      <div class="playground__previewr">
        <fs-dropdown .position=${this.position}>
          <fs-button slot="trigger" ?caret=${this.caret} .variant=${this.variant}>
            Dropdown Button Element
          </fs-button>
          <fs-menu>
            <fs-menu-item>Action</fs-menu-item>
            <fs-menu-item ?active=${this.activeMenuItem}>Another action</fs-menu-item>
            <fs-menu-item>Something else</fs-menu-item>
          </fs-menu>
        </fs-dropdown>
      </div>
      <div class="playground__settings">
        <label>
          Caret
          <input type="checkbox" @change=${this.setCaret} ?checked=${this.caret} />
        </label>
        <label>
          Active Item
          <input
            type="checkbox"
            @change=${this.setActiveMenuItem}
            ?checked=${this.activeMenuItem}
          />
        </label>
        <label>
          Position
          <select @change=${this.setPosition}>
            <option value="left" selected>Left</option>
            <option value="right">Right</option>
          </select>
        </label>
        <label>
          Variant
          <select @change=${this.setVariant}>
            <option value="primary" selected>Primary</option>
            <option value="secondary">Secondary</option>
            <option value="success">Success</option>
          </select>
        </label>
      </div>
    `;
  }

  private setCaret(event: Event) {
    this.caret = (event.target as HTMLInputElement).checked;
  }

  private setActiveMenuItem(event: Event) {
    this.activeMenuItem = (event.target as HTMLInputElement).checked;
  }

  private setPosition(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'left' || value === 'right') {
      this.position = value;
    } else {
      console.error('Invalid value for position:', value);
    }
  }

  private setVariant(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'primary' || value === 'secondary' || value === 'success') {
      this.variant = value;
    } else {
      console.error('Invalid value for variant:', value);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fs-playground': fsPlayground;
  }
}
