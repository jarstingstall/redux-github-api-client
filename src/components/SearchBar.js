import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {

  handleKeyDown(e) {
    const { onSearch } = this.props;
    if (e.which === 13) {
      onSearch(this.refs.search.getDOMNode().value);
      this.refs.search.getDOMNode().value = '';
    }
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <input type="text" ref="search" onKeyDown={this.handleKeyDown.bind(this)} className="form-control" placeholder="Search YouTube..." />
      </div>
    )
  }
}
