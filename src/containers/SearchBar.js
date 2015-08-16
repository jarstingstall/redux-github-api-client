import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="input-group col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <input type="text" className="form-control" placeholder="Search YouTube..." />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">Go!</button>
        </span>
      </div>
    )
  }
}
