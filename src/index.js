import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const Global = createGlobalStyle`
  body {
    margin: 15px;
    padding: 0;
    background-color: hsl(208, 32%, 99%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial;
  }
  h1 {
    text-align: center;
  }
`;

ReactDOM.render(
  <>
    <h1>Tasty Lists</h1>
    <App />
    <Global />
  </>,
  document.getElementById('root')
);
