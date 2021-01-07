import { createGlobalStyle } from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
  .sb-show-main.sb-main-padded {
    padding: 0px;
  }
`;

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];