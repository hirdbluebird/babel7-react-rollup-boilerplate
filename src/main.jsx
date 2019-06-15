import { Component } from 'react';
import Child from './Components/TestComponent';

export default class App extends Component {
  render() {
    const x = 'y'

    return (
      <div>
        <Child />
        <p>Test phraze</p>
      </div>
    );
  }
}
