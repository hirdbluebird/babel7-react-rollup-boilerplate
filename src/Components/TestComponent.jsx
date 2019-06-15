import React, { Component } from 'react'

export default class Child extends Component {
  render () {
    const items = [1, 2, 3]
    return (
      <div>
        {items.map(item =>
          <p>{item}</p>
        )}
      </div>
    )
  }
}
