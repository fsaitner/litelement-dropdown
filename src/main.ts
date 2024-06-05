import './style.scss';
import './components/icon/fs-icon';
import './components/button/fs-button';
import './components/menu-item/fs-menu-item';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>LitElement Dropdown Component</h1>
    <fs-icon icon="chevron-down"></fs-icon>
    <fs-button caret>Dropdown</fs-button>
    <fs-menu-item>Menu item 1</fs-menu-item>
    <fs-menu-item active>Menu item 2</fs-menu-item>
    <fs-menu-item>Menu item 3</fs-menu-item>
  </div>
`;
