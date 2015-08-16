import React, { Component } from 'react';

export default class StatusBar extends Component {
  render() {
    const { type, message } = this.props;

    return (
      <div className={`alert alert-${type}`} role="alert">{message}</div>
    )
  }
}
