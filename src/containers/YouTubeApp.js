import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from './SearchBar';
import { fetchVideos } from '../actions';

class YouTubeApp extends Component {

  handleSearch(search) {
    const { dispatch } = this.props;
    dispatch(fetchVideos(search));
  }

  render() {
    const { videos, isFetching } = this.props;

    return (
      <div className="container-fluid">
        <div className="row" style={{marginTop: 32}}>
          <SearchBar onSearch={this.handleSearch.bind(this)} />
          <div className="col-md-6 col-md-offset-3">{ isFetching && 'Loading...'}</div>
        </div>
      </div>
    )
  }
}

export default connect(state =>
  ({videos: state.videos, isFetching: state.isFetching}))
  (YouTubeApp);
