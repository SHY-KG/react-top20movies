import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
      }
    
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0px;
        padding: 0px;
        background-color: #ebedf0;
        height: 100%;
    }
`;

export default globalStyles;