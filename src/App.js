import React from 'react';
import { injectGlobal } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);
  

export default App;
