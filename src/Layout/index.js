import { createGlobalStyle } from "styled-components";
import reset from "reset-css";

const GlobalStyle = createGlobalStyle`

${reset}

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f4f4f4;
  width: 100%;
}
html {
  width: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
export default Layout;