import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --color-primary: #7ECA9C;
  --color-primary-var: #CCFFBD;
  --color-light: #F0F0F0;
  --color-light-var: #F9F9F9;
  --color-light-shadow: rgba(0,0,0,0.1);
  --color-dark: #1C1427;
  --color-dark-var: #40394A;
  --color-light-shadow: rgba(0,0,0,0.3);

  --color-text: #666666;

  --font-family: 'JetBrains Mono', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html {
  font-size: 100%;
}

html, body, #root {
  min-height: 100%;
}

body {
  padding: 3rem 0;
  background-color: var(--color-light);
  color: var(--color-text);
}

body, input, button {
  font-family: var(--font-family);
  font-size: 1rem;
}

button {
  cursor: pointer;
}
`;