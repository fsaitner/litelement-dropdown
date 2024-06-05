import './style.scss';
import './components/icon/fs-icon';
import './components/button/fs-button';
import './components/menu-item/fs-menu-item';
import './components/menu/fs-menu';
import './components/dropdown/fs-dropdown';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="position: relative;">
    <h1>LitElement Dropdown Component</h1>
    <fs-icon icon="chevron-down"></fs-icon>
    <fs-button caret>Dropdown</fs-button>
    <fs-menu-item>Menu item 1</fs-menu-item>
    <fs-menu-item active>Menu item 2</fs-menu-item>
    <fs-menu-item>Menu item 3</fs-menu-item>
    <fs-menu>
      <fs-menu-item>Menu item 4</fs-menu-item>
      <fs-menu-item>Menu item 5</fs-menu-item>
      <fs-menu-item>Menu item 6</fs-menu-item>
    </fs-menu>
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
