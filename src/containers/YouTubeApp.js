import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMessage } from '../actions';
import SearchBar from './SearchBar';

class YouTubeApp extends Component {

  render() {
    const { videos } = this.props;

    return (
      <div className="container-fluid">
      <div className="row" style={{marginTop: 32}}>
        <SearchBar />
      </div>
      </div>
    )
  }
}

export default connect(state => ({videos: state.videos}))(YouTubeApp);
