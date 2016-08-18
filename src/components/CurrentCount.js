import React, { Component, PropTypes } from 'react'

export default class CurrentCount extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired
  };

  render() {
    return (
      <div className="CurrentCount">
        Current count is {this.props.count}!
      </div>
    );
  }
};
