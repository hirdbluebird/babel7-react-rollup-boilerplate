import React, { Component } from 'react';
import Child from './Components/TestComponent';

export default class App extends Component {
  testFunction = () => this.props

  render() {
    return (
      <div>
        <Child onClick={this.setState} />
        <p>Test phraze</p>
      </div>
    );
  }
}
