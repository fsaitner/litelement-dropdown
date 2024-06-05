import './components/button/fs-button';
import './components/dropdown/fs-dropdown';
import './components/icon/fs-icon';
import './components/menu-item/fs-menu-item';
import './components/menu/fs-menu';
import './style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>LitElement Dropdown Component</h1>
  <div class="preview__wrapper">
    <h2>Element: <span>fs-icon</span></h2>
    <fs-icon icon="chevron-down"></fs-icon>
  </div>
  <div class="preview__wrapper">
    <h2>Element: <span>fs-button</span></h2>
    <fs-button caret>Dropdown</fs-button>
  </div>
  <div class="preview__wrapper">
    <h2>Element: <span>fs-menu-item</span></h2>
    <fs-menu-item>Menu item 1</fs-menu-item>
    <fs-menu-item active>Menu item 2</fs-menu-item>
    <fs-menu-item>Menu item 3</fs-menu-item>
  </div>
  <div class="preview__wrapper">
    <h2>Element: <span>fs-menu</span></h2>
    <fs-menu>
      <fs-menu-item>Menu item 4</fs-menu-item>
      <fs-menu-item>Menu item 5</fs-menu-item>
      <fs-menu-item>Menu item 6</fs-menu-item>
    </fs-menu>
  </div>
  <div class="preview__wrapper">
    <h2>Element: <span>fs-dropdown</span></h2>
    <fs-dropdown>
      <fs-button slot="trigger" caret>Dropdown with menu</fs-button>
      <fs-menu>
        <fs-menu-item>Test1 Test1</fs-menu-item>
        <fs-menu-item>Test2</fs-menu-item>
        <fs-menu-item>Test3</fs-menu-item>
        <fs-menu-item>Test4 Test4</fs-menu-item>
      </fs-menu>
    </fs-dropdown>
  </div>
`;
