import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { newValue } = this.props;

    return (
      <div className="App">
        <input type='text' />
          <button>
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

export default connect(mapStateToProps)(App);
