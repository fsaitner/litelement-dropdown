import './style.scss';
import './components/icon/fs-icon';
import './components/button/fs-button';
import './components/menu-item/fs-menu-item';
import './components/menu/fs-menu';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="position: relative;">
    <h1>LitElement Dropdown Component</h1>
    <fs-icon icon="chevron-down"></fs-icon>
    <fs-button caret>Dropdown</fs-button>
    <fs-menu-item>Menu item 1</fs-menu-item>
    <fs-menu-item active>Menu item 2</fs-menu-item>
    <fs-menu-item>Menu item 3</fs-menu-item>
    <fs-menu>
      <fs-menu-item>Menu item 3</fs-menu-item>
      <fs-menu-item>Menu item 4</fs-menu-item>
      <fs-menu-item>Menu item 5</fs-menu-item>
    </fs-menu>
  </div>
`;
