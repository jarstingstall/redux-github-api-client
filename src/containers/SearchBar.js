import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {

  handleClick() {
    const { onSearch } = this.props;
    onSearch(this.refs.search.getDOMNode().value);
    this.refs.search.getDOMNode().value = '';
  }

  render() {
    return (
      <div className="input-group col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <input type="text" ref="search" className="form-control" placeholder="Search YouTube..." />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleClick.bind(this)}>Go!</button>
        </span>
      </div>
    )
  }
}
