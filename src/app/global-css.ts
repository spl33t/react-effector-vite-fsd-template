import { createGlobalStyle } from "styled-components"
import { reset } from "styled-reset"

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: Arial;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  h1 {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  h4 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  h5 {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  h6 {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 20px;
  }
`
