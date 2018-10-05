import React, { Component } from 'react';
import { connect } from 'react-redux';
import clickButton from './actions';
import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

class App extends Component {
  state = {
    inputValue: '',
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value,
    })
  };

  render() {
    const { clickButton, newValue } = this.props;

    return (
      <div className="App">
        <input
          onChange={this.inputChange}
          type='text'
          value={this.state.inputValue}
        />
          <button onClick={() => clickButton(this.state.inputValue)}>
            Click me!
          </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickReducer.newValue,
});

const mapDispatchToProps = {
  clickButton
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
