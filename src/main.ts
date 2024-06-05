import './style.scss';
import './components/icon/fs-icon';
import './components/button/fs-button';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>LitElement Dropdown Component</h1>
    <fs-icon icon="chevron-down"></fs-icon>
    <fs-button caret>Dropdown</fs-button>
  </div>
`;
