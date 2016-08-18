// src/components/IncrementButtons.js

import React, { Component, PropTypes } from 'react';

export default class IncrementButtons extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="IncrementButtons">
        <button onClick={() => this.props.increment()}>
          Increment
        </button>

        <button onClick={() => this.props.incrementAsync()}>
          Increment asynchronously
        </button>
      </div>
    );
  }
};
