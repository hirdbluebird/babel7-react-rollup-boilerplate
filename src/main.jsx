import React, { Component } from 'react';
import Child from './Components/TestComponent';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: true,
    };
  }

  toggleApp = () => {
    this.setState((prevState) => {
      !prevState.toggle;
    });
  }

  render() {
    return (
      <div>
        <Child onClick={this.setState} />
        <p>Test phraze</p>
      </div>
    );
  }
}
