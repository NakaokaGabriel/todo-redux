import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* COLORS */
    --primary: #db4c3f;
    --white: #fff;
    --secondary-white: #fafafa;
    --text-primary: #333;
    --text-bold: #202020;

    /* MEDIA SCREENS */
    --xs: 574px;
    --sm: 575px;
    --md: 1024px;
    --lg: 1280px;
    --xl: 1440px;

    /* FONT FAMILY */
    --font: 'Roboto';

    /* FONT SIZES */
    --titles: 2rem;
    --text-big: 1rem;
    --text-small: 0.8rem;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, 

  body {
    -webkit-font-smoothing: antialiased; 
  }

  body, button, input, text-area {
    font-family: var(--font), Arial, Helvetica, sans-serif;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
  }
`;