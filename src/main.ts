import './style.scss';
import './components/icon/fs-icon';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>LitElement Dropdown Component</h1>
    <fs-icon icon="chevron-down"></fs-icon>
  </div>
`;
