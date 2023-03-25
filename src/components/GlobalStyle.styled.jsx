import styled, {createGlobalStyle} from 'styled-components'
import 'modern-normalize'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #e5e5e5
  }

  p, ul, h1, h2, h3, h4, h5, h6, button {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

`


export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding-bottom: 24px;
`;

