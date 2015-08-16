import React, { Component } from 'react';

export default class SearchResults extends Component {
  render() {
    const { searchTerm } = this.props;

    return (
      <p>{ searchTerm === '' ? '' : `Search results for "${searchTerm}"`}</p>
    )
  }
}
