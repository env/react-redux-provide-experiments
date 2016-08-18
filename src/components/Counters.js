import React, { Component, PropTypes } from 'react'

import CurrentCount from './CurrentCount'
import IncrementButtons from './IncrementButtons'
import _ from 'underscore'

import util from 'util'

export default class Counters extends Component {
  static propTypes = {
    counterList: PropTypes.array.isRequired,
    pushCounter: PropTypes.func.isRequired
  }

  renderItem = (ident) => (
    <div key={ident}>
      <CurrentCount ident={ident} />
      <IncrementButtons ident={ident} />
    </div>
  )

  onClick = (e) => this.props.pushCounter(_.uniqueId())

  render () {
    return (
      <div>
        <button onClick={this.onClick}>Add New Counter</button>

        {this.props.counterList.map(this.renderItem)}

        <pre>
          {util.inspect({ counterList: this.props.counterList })}
        </pre>
      </div>
    );
  }
}
