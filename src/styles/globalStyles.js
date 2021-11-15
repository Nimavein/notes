import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   html {
    min-height: 100%;
  }
    
  body {
    min-height: 100%;
    padding: 24px;
  }

  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
