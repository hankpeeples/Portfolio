import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    -webkit-text-size-adjust: none; /* for iOS Safari */
    text-size-adjust: none; /* for other mobile browsers */
    font-family: 'Montserrat', system-ui, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
  }

  a {
    text-underline-position: under;
    text-decoration-thickness: 8;
  }
`;

export default Global;
