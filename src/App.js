import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Header from './components/Header';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

export default App;
